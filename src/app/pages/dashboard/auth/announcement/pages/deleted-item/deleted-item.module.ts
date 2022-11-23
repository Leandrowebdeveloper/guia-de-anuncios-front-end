import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DeletedItemPageRoutingModule } from './deleted-item-routing.module';

import { DeletedItemPage } from './deleted-item.page';
import { CardUserComponentModule } from 'src/app/pages/dashboard/component/user/card/card.module';
import { ListItemComponentModule } from 'src/app/pages/dashboard/component/announcement/list-item/list-item.component.module';
import { SkeletonComponent } from 'src/app/pages/dashboard/component/announcement/skeleton/skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DeletedItemPageRoutingModule,
    CardUserComponentModule,
    ListItemComponentModule,
  ],
  declarations: [DeletedItemPage, SkeletonComponent],
  exports: [DeletedItemPage],
})
export class DeletedItemPageModule {}
