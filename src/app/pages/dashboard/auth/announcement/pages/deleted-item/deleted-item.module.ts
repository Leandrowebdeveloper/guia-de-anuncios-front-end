import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DeletedItemAnnouncementPageRoutingModule } from './deleted-item-routing.module';

import { DeletedItemAnnouncementPage } from './deleted-item.page';

import { UserComponentsModule } from 'src/app/pages/dashboard/component/user/user-component.module';
import { AnnouncementComponentsModule } from 'src/app/pages/dashboard/component/announcement/announcement-component.module';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DeletedItemAnnouncementPageRoutingModule,
    UserComponentsModule,
    AnnouncementComponentsModule,
    PipeModule,
  ],
  declarations: [DeletedItemAnnouncementPage],
  exports: [DeletedItemAnnouncementPage],
})
export class DeletedItemAnnouncememtPageModule {}
