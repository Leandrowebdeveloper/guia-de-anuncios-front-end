import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardUserComponent } from './card.component';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PipeModule],
  declarations: [CardUserComponent],
  exports: [CardUserComponent],
})
export class CardUserComponentModule {}
