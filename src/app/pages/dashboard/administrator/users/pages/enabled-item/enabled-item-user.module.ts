import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnabledItemUserPageRoutingModule } from './enabled-item-user-routing.module';

import { EnabledItemUserPage } from './enabled-item-user.page';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { CardMobileComponent } from './component/card-mobile/card-mobile.component';
import { CardDesktopComponent } from './component/card-desktop/card-desktop.component';
import { UserComponentsModule } from 'src/app/pages/dashboard/component/user/user-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnabledItemUserPageRoutingModule,
    PipeModule,
    UserComponentsModule,
  ],
  declarations: [
    EnabledItemUserPage,
    CardMobileComponent,
    CardDesktopComponent,
  ],
  exports: [EnabledItemUserPage],
})
export class EnabledItemUserPageModule {}
