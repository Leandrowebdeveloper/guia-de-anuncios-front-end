import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { SocialNetworkAnnouncementService } from '../service/social-network.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

// import {
//   FacebookLogin,
//   FacebookLoginResponse,
// } from '@capacitor-community/facebook-login';
import { SocialNetwork } from 'src/app/interface';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AnnouncementFormSocialNetworkComponent implements OnInit {
  @Input() socialNetwork!: Required<SocialNetwork>;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/socialNetwork',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar rede sociais.',
    title: 'Salvar rede sociais.',
  };

  public config: object;
  // private fbLogin = FacebookLogin;
  // private token = null;
  private form: FormGroup;
  private write: Subscription;
  // private facebookPermissions = {
  //   permissions: ['user_link', 'user_gender'],
  // };
  constructor(
    // private router: Router,
    private helpService: HelpsService,
    private modalController: ModalController,
    // private http: HttpClient,
    private socialNetworkService: SocialNetworkAnnouncementService,
    public messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  async ngOnInit(): Promise<void> {
    this.getData();
    // await this.fbLogin.initialize({ appId: '967268348006627' });
  }

  // public instagram() {
  //   const popupWidth = 700;
  //   const popupHeight = 500;
  //   const popupLeft = (window.screen.width - popupWidth) / 2;
  //   const popupTop = (window.screen.height - popupHeight) / 2;
  //   // eslint-disable-next-line max-len
  //   const url = `https://api.instagram.com/oauth/authorize?client_id=579512653658784&redirect_uri=https://192.168.1.15:8100/oauth/instagram/&scope=user_profile,user_media&response_type=code`;
  //   this.router
  //     .navigate([])
  //     .then((result) =>
  //       window.open(
  //         url,
  //         '',
  //         `width='${popupWidth}',height='${popupHeight}',left='${popupLeft}',top='${popupTop}''`
  //       )
  //     );
  // }

  // public async facebook() {
  //   const result: FacebookLoginResponse = await this.fbLogin.login(
  //     this.facebookPermissions
  //   );

  //   if (result.accessToken && result.accessToken.userId) {
  //     this.token = result.accessToken;
  //     this.loadUserData();
  //   } else if (result.accessToken && !result.accessToken.userId) {
  //     this.getCurrentToken();
  //   } else {
  //   }
  // }

  /** FORM */
  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    return this.socialNetworks(event);
  }

  private socialNetworks(event: FormGroup): Subscription {
    let message: string;
    if (this.socialNetwork?.id) {
      event.value.id = this.socialNetwork?.id;
      message = 'Editando rede social...';
    } else {
      event.value.announcementId = this.socialNetwork?.announcementId;
      message = 'Cadastrando rede social...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }

  private send(
    event: FormGroup<any>,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    return (this.write = this.socialNetworkService
      .socialNetwork(event.value)
      .subscribe(
        (socialNetwork: SocialNetwork) =>
          this.messsage(socialNetwork.message, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.write)
      ));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.write);
  }

  private getData(): void {
    this.config = { ...this.socialNetwork };
  }

  /** fim */
  // Social network
  // private async loadUserData() {
  //   const url = `https://graph.facebook.com/${this.token.userId}?fields=id,link&access_token=${this.token.token}`;
  //   this.http.get(url).subscribe(
  //     (facebook: Facebook) => this.createSocialNetwork(facebook),
  //     (error: HttpErrorResponse) => console.error(error)
  //   );
  // }

  // private createSocialNetwork(facebook: unknown) {
  //   if (facebook) {
  //     // const loading = this.loadingService.show('Cadastrar rede social...');
  //     console.log(facebook);
  //   }
  // }

  // private async getCurrentToken(): Promise<void> {
  //   const result = await this.fbLogin.getCurrentAccessToken();
  //   if (result.accessToken) {
  //     this.token = result.accessToken;
  //     this.loadUserData();
  //   } else {
  //     console.log('Login failed');
  //   }
  // }
}
