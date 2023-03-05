/* eslint-disable @typescript-eslint/naming-convention */
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SocialNetworkAnnouncementService } from './../../dashboard/component/announcement/social-network/service/social-network.service';

@Component({
  selector: 'app-popup-instagram',
  templateUrl: './popup-instagram.page.html',
  styleUrls: ['./popup-instagram.page.scss'],
})
export class PopupInstagramPage implements OnInit, OnDestroy {
  private form: FormGroup;

  private $router: Subscription;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private socialNetworkAnnouncementService: SocialNetworkAnnouncementService
  ) {}
  ngOnDestroy(): void {
    this.$router.unsubscribe();
  }

  ngOnInit() {
    this.init();
  }

  private init(): Subscription {
    return (this.$router = this.route.queryParams.subscribe({
      next: (params: { code: string }) => {
        if (params?.code) {
          this.getDataInstagram(params?.code);
        }
      },
    }));
  }

  private getDataInstagram(key: string) {
    const url = `oauth/access_token`;
    this.form = this.fb.group({
      code: key.replace(/#_/, ''),
      client_id: 151342064385158,
      client_secret: '31253a860ddaf6c282e832086052a7ed',
      grant_type: 'authorization_code',
      redirect_uri: 'https://192.168.1.15:8100/oauth/instagram/',
    });

    this.socialNetworkAnnouncementService
      .create(this.form?.value, url)
      .subscribe({
        next: (response) => console.log(response),
        error: (error: HttpErrorResponse) => console.log(error),
      });
  }
}
