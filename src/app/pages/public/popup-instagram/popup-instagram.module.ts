import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupInstagramPageRoutingModule } from './popup-instagram-routing.module';

import { PopupInstagramPage } from './popup-instagram.page';
import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';
import { SocialNetworkAnnouncementService } from '../../dashboard/component/announcement/social-network/service/social-network.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PopupInstagramPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [PopupInstagramPage],
  providers: [SocialNetworkAnnouncementService],
})
export class PopupInstagramPageModule {}
