import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnabledItemUserPageRoutingModule } from './enabled-item-user-routing.module';

import { EnabledItemUserPage } from './enabled-item-user.page';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { CardMobileComponent } from './component/card-mobile/card-mobile.component';
import { CardDesktopComponent } from './component/card-desktop/card-desktop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnabledItemUserPageRoutingModule,
    SearchModule,
    PipeModule,
  ],
  declarations: [
    EnabledItemUserPage,
    CardMobileComponent,
    CardDesktopComponent,
  ],
  exports: [EnabledItemUserPage],
})
export class EnabledItemUserPageModule {}
