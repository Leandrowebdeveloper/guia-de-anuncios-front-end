import { SystemAccessPage } from './../../system-access.page';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Subscription } from 'rxjs';
import { SystemAccessService } from './../../services/system-access.service';
import {
  BuildSocialLogin,
  Facebook,
  Google,
  SocialLogin,
  User,
} from 'src/app/interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { SocialLoginService } from '../../services/social-login/service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { MessageService } from 'src/app/utilities/message/message.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent implements OnInit {
  @Input() csrf: string;
  private fbLogin = FacebookLogin;
  private token = null;
  private systemAccess: Subscription;

  constructor(
    private systemAccessService: SystemAccessService,
    private plt: Platform,
    private http: HttpClient,
    private socialLoginService: SocialLoginService,
    private systemAccessPage: SystemAccessPage,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.plt.is('desktop')) {
      await this.fbLogin.initialize({ appId: '967268348006627' });
    }
    if (!this.plt.is('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  public async facebook(): Promise<void> {
    const FACEBOOK_PERMISSIONS = [
      'email',
      'user_birthday',
      'user_photos',
      'user_gender',
    ];
    const result = await this.fbLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });

    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadUserData();
    } else if (result.accessToken && !result.accessToken.userId) {
      this.getCurrentToken();
    } else {
    }
  }

  public async google() {
    const googleUser = await GoogleAuth.signIn();
    return this.login(googleUser);
  }

  private async getCurrentToken(): Promise<void> {
    const result = await this.fbLogin.getCurrentAccessToken();
    if (result.accessToken) {
      this.token = result.accessToken;
      this.loadUserData();
    } else {
      console.log('Login failed');
    }
  }

  private async loadUserData(): Promise<void> {
    // eslint-disable-next-line max-len
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    this.http.get(url).subscribe((facebook: Facebook) => this.login(facebook));
  }

  private login(social: Facebook | Google): Subscription {
    if (social) {
      this.setRouter();
      this.systemAccessService.setStayConnected(true);
      const loading = this.loadingService.show('Acessar o sistema...');
      const data = { ...this.build(social) };
      return (this.systemAccess = this.socialLoginService
        .create(data)
        .subscribe(
          (user_: User) => this.success(user_, loading),
          (error: HttpErrorResponse) => this.error(error, loading)
        ));
    }
  }

  private success(
    user_: User,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.systemAccessPage.disableCanDeactivate(user_);
    this.systemAccessService.isLogin(user_);
    this.systemAccessService.goToUserPage();
    return this.messageService.success(
      user_?.message,
      loading,
      this.systemAccess
    );
  }

  private build(data: any): SocialLogin {
    const { id, name, email }: BuildSocialLogin = data;
    const arrayName = name.split(' ');
    const firstName = arrayName.splice(0, 1).join();
    const lastName = arrayName.join(' ');
    const result: SocialLogin = {
      sid: id,
      email,
      firstName,
      lastName,
      slug: '',
      password: '',
      token: this.token?.token || JSON.stringify({ ...data?.authentication }),
      image: {
        filename: data?.picture?.data?.url || data?.imageUrl,
      },
      _csrf: this.csrf,
    };
    return result;
  }

  private error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>
  ) {
    return this.systemAccessService.error(error, loading, this.systemAccess);
  }

  private setRouter(): void {
    this.systemAccessService.activeRoute = 'login';
  }
}
