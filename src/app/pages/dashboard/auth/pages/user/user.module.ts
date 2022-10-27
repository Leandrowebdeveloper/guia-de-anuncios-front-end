import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPage } from './user.page';

import { UserPageRoutingModule } from './user-routing.module';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HttpClientModule } from '@angular/common/http';
import { UserGaleryComponentModule } from 'src/app/components/galery/auth/galery-component.module';
import { FormComponent } from '../../form/form.component';
import { UserUtilities } from 'src/app/utilities/user/user-utilities.service';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserPageRoutingModule,
    FormComponentModule,
    HeaderModalModule,
    UserGaleryComponentModule,
    PipeModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [UserPage, FormComponent],
  providers: [UserUtilities],
})
export class UserPageModule {}
