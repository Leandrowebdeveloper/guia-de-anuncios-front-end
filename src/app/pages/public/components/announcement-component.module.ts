import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowContactComponent } from './show-contact/show-contact.component';
import { ShowSocialNetWorkComponent } from './show-social-network/show-social-network.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [
    ShowContactComponent,
    ShowSocialNetWorkComponent,
    SegmentComponent,
  ],
  imports: [CommonModule, IonicModule, PipeModule],
  exports: [ShowContactComponent, ShowSocialNetWorkComponent, SegmentComponent],
})
export class ShowAnnouncementComponentModule {}
