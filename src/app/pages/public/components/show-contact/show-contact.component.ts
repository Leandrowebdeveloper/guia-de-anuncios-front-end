import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interface';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-show-contact-announcement-component',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.scss'],
})
export class ShowContactComponent implements OnInit {
  @Input() announcement!: Pick<Announcement, 'contact' | 'user'>;
  constructor() {}

  ngOnInit() {}

  public async send(
    e: Event,
    contacts: 'whatsapp' | 'phone' | 'mobilePhone' | 'email'
  ) {
    e.preventDefault();
    if (this.announcement?.user && this.announcement?.contact) {
      const { whatsapp, phone, mobilePhone } = this.announcement?.contact;
      const { email } = this.announcement?.user;
      switch (contacts) {
        case 'whatsapp':
          return await Browser.open({
            url: `https://api.whatsapp.com/send?phone=55${whatsapp}`,
            windowName: '_blank',
          });
        case 'phone':
          return await Browser.open({
            url: `tel:+${phone}`,
            windowName: '_top',
          });
        case 'mobilePhone':
          return await Browser.open({
            url: `tel:+${mobilePhone}`,
            windowName: '_top',
          });
        case 'email':
          return await Browser.open({
            url: `mailto:${email}`,
            windowName: '_top',
          });
      }
    }
  }
}
