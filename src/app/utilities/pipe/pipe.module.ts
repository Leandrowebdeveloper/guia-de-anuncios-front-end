import { NgModule } from '@angular/core';
import { TimePipe } from './time/time.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';

@NgModule({
  declarations: [TimePipe, OrderByPipe],
  exports: [TimePipe, OrderByPipe],
})
export class PipeModule {}
