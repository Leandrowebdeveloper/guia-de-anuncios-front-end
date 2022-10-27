import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassifiedPage } from './classified.page';

import { ClassifiedPageRoutingModule } from './classified-routing.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ClassifiedPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [ClassifiedPage],
})
export class ClassifiedPageModule {}
