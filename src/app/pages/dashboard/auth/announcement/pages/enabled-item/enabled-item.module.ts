import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnabledItemAnnouncementPage } from './enabled-item.page';
import { EnabledItemAnnouncementPageRoutingModule } from './enabled-item-routing.module';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { AnnouncementComponentsModule } from 'src/app/pages/dashboard/component/announcement/announcement-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnabledItemAnnouncementPageRoutingModule,
    AnnouncementComponentsModule,
    PipeModule,
  ],
  declarations: [EnabledItemAnnouncementPage],
  exports: [EnabledItemAnnouncementPage],
})
export class EnabledItemAnnouncementPageModule {}
