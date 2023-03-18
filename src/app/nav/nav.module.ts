import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponentRoutingModule } from './nav-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    NavComponentRoutingModule,
  ],
})
export class NavComponentModule { }
