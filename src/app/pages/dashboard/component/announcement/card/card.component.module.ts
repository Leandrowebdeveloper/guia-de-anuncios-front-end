import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardComponentRoutingModule } from './card.component-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, PipeModule, CardComponentRoutingModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardComponentModule {}
