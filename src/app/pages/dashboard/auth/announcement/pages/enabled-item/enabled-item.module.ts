import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnabledItemPage } from './enabled-item.page';
import { EnabledItemPageRoutingModule } from './enabled-item-routing.module';
import { CardComponentModule } from 'src/app/pages/dashboard/component/announcement/card/card.component.module';
import { ListItemComponentModule } from 'src/app/pages/dashboard/component/announcement/list-item/list-item.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnabledItemPageRoutingModule,
    CardComponentModule,
    ListItemComponentModule,
  ],
  declarations: [EnabledItemPage],
  exports: [EnabledItemPage],
})
export class EnabledItemPageModule {}
