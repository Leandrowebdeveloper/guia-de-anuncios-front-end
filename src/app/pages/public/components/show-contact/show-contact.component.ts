import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interface';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-show-contact-announcement-component',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.scss'],
})
export class ShowContactComponent implements OnInit {
  @Input() contact!: Contact;
  constructor() {}

  ngOnInit() {}

  public async send(e: Event, contacts: 'whatsapp' | 'phone' | 'mobilePhone') {
    e.preventDefault();
    const { whatsapp, phone, mobilePhone } = this.contact;
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
    }
  }
}
