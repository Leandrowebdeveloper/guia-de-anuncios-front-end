import { Component, Input } from '@angular/core';
import { Announcement } from 'src/app/interface';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-show-social-network-announcement-component',
  templateUrl: './show-social-network.component.html',
  styleUrls: ['./show-social-network.component.scss'],
})
export class ShowSocialNetWorkComponent {
  @Input() announcement!: Pick<Announcement, 'socialNetwork'> | void;

  public async send(
    e: Event,
    socialNetwork: 'facebook' | 'instagram'
  ): Promise<void> {
    e.preventDefault();
    if (this.announcement && this.announcement?.socialNetwork) {
      const { facebook, instagran } = this.announcement?.socialNetwork;
      if (socialNetwork === 'facebook') {
        return await Browser.open({
          url: facebook,
        });
      }
      if (socialNetwork === 'instagram') {
        return await Browser.open({
          url: instagran,
        });
      }
    }
  }
}
