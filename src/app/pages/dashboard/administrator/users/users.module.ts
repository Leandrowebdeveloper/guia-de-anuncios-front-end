import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { UserComponentsModule } from 'src/app/pages/dashboard/component/user/user-component.module';
import { DeletedItemUserPageModule } from './pages/deleted-item/deleted-item-user.module';
import { EnabledItemUserPageModule } from './pages/enabled-item/enabled-item-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    UserComponentsModule,
    DeletedItemUserPageModule,
    EnabledItemUserPageModule,
  ],
  declarations: [UsersPage],
})
export class UsersPageModule {}
