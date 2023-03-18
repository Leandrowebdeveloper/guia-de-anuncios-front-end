import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { SocialNetworkAnnouncementService } from '../../dashboard/component/announcement/social-network/service/social-network.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    NotFoundPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [NotFoundPage],
  providers: [SocialNetworkAnnouncementService],
})
export class NotFoundPageModule {}
