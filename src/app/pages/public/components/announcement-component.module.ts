import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowContactComponent } from './show-contact/show-contact.component';
import { ShowSocialNetWorkComponent } from './show-social-network/show-social-network.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';

@NgModule({
  declarations: [ShowContactComponent, ShowSocialNetWorkComponent],
  imports: [CommonModule, IonicModule, PipeModule],
  exports: [ShowContactComponent, ShowSocialNetWorkComponent],
})
export class ShowAnnouncementComponentModule {}
