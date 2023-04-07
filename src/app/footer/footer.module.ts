import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterPage } from './footer.page';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, PipeModule],
  declarations: [FooterPage],
  exports: [FooterPage],
})
export class FooterModule {}
