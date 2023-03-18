import { Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/interface';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-show-social-network-announcement-component',
  templateUrl: './show-social-network.component.html',
  styleUrls: ['./show-social-network.component.scss'],
})
export class ShowSocialNetWorkComponent implements OnInit {
  @Input() socialNetwork!: SocialNetwork;
  constructor(private plt: Platform) {}

  ngOnInit() {}

  public async send(e: Event, socialNetwork: 'facebook' | 'instagram') {
    e.preventDefault();
    const { facebook, instagran } = this.socialNetwork;
    if (socialNetwork === 'facebook') {
      if (this.plt.is('mobile')) {
        return console.log('mobile');
      }
      return await Browser.open({
        url: facebook,
        windowName: '_top',
      });
    }
    if (socialNetwork === 'instagram') {
      if (this.plt.is('mobile')) {
        return console.log('mobile');
      }
      return await Browser.open({
        url: instagran,
        windowName: '_top',
      });
    }
  }
}
