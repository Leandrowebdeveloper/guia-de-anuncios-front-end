import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletedItemUserPageRoutingModule } from './deleted-item-user-routing.module';

import { DeletedItemUserPage } from './deleted-item-user.page';
import { SearchModule } from 'src/app/components/search/search.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletedItemUserPageRoutingModule,
    SearchModule,
    PipeModule,
  ],
  declarations: [DeletedItemUserPage],
  exports: [DeletedItemUserPage],
})
export class DeletedItemUserPageModule {}
