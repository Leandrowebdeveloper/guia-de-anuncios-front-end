import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockadeComponent } from './blockade.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlockadeComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [BlockadeComponent],
})
export class BlockadeComponentModule {}
