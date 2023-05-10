import { SystemAccessPage } from './../../system-access.page';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Subscription } from 'rxjs';
import { SystemAccessService } from './../../services/system-access.service';
import { BuildSocialLogin, SocialLogin, User } from 'src/app/interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { SocialLoginService } from '../../services/social-login/social-login.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { MessageService } from 'src/app/utilities/message/message.service';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/utilities/alert/alert.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent implements OnInit {
  @Input() csrf!: string;
  private fbLogin = FacebookLogin;
  private token!: any;
  private systemAccess!: Subscription;

  constructor(
    private systemAccessService: SystemAccessService,
    private plt: Platform,
    private http: HttpClient,
    private socialLoginService: SocialLoginService,
    private systemAccessPage: SystemAccessPage,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.plt.ready().then(async () => {
      await this.fbLogin.initialize({ appId: environment.appIdFacebook });
      GoogleAuth.initialize({
        clientId: environment.appIdGoogle,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });
    });
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

    if (result?.accessToken && result?.accessToken?.userId) {
      this.getToken(result);
      this.loadUserData();
    } else if (result.accessToken && !result.accessToken.userId) {
      this.getCurrentToken();
    } else {
    }
  }

  private getToken(result: any): void {
    this.token = result?.accessToken;
  }

  public async google(): Promise<void | Subscription> {
    const googleUser = await GoogleAuth.signIn();
    const data: SocialLogin = { ...this.build(googleUser) };
    return this.login(data);
  }

  private async getCurrentToken(): Promise<void> {
    const result = await this.fbLogin.getCurrentAccessToken();
    if (result?.accessToken) {
      this.getToken(result);
      this.loadUserData();
    } else {
      this.alertService.alert('Atenção', 'Falha ao efetuar login');
    }
  }

  private loadUserData() {
    if (this.token?.userId) {
      const url = `https://graph.facebook.com/${this.token?.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
      this.http.get(url).subscribe({
        next: (facebook) => {
          const data: SocialLogin = { ...this.build(facebook) };
          this.login(data);
        },
      });
    }
  }

  private login(social: SocialLogin): Subscription | void {
    if (social) {
      this.setRouter();
      this.systemAccessService.setStayConnected(true);
      const loading = this.loadingService.show('Acessar o sistema...');
      const data: SocialLogin = { ...this.build(social) };
      if (data) {
        return (this.systemAccess = this.socialLoginService
          .login(data)
          .subscribe({
            next: (user_: User | SocialLogin) =>
              this.success(user_ as User, loading),
            error: (error: HttpErrorResponse) => this.error(error, loading),
          }));
      }
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
