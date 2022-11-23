import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item.component';
import { ListItemComponentRoutingModule } from './list-item.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipeModule,
    ListItemComponentRoutingModule,
  ],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
})
export class ListItemComponentModule {}
