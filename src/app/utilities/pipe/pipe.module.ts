import { NgModule } from '@angular/core';
import { TimePipe } from './time/time.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { LnWordsPipe } from './ln-words/ls.words.pipe';

@NgModule({
  declarations: [TimePipe, OrderByPipe, LnWordsPipe],
  exports: [TimePipe, OrderByPipe, LnWordsPipe],
})
export class PipeModule {}
