import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AnnouncementPageRoutingModule } from './announcement-routing.module';
import { AnnouncementPage } from './announcement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [AnnouncementPage],
})
export class AnnouncementPageModule {}
