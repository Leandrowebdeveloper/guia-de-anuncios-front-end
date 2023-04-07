import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletedItemUserPageRoutingModule } from './deleted-item-user-routing.module';

import { DeletedItemUserPage } from './deleted-item-user.page';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { UserComponentsModule } from 'src/app/pages/dashboard/component/user/user-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletedItemUserPageRoutingModule,
    PipeModule,
    UserComponentsModule,
  ],
  declarations: [DeletedItemUserPage],
  exports: [DeletedItemUserPage],
})
export class DeletedItemUserPageModule {}
