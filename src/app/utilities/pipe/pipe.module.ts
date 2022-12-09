import { NgModule } from '@angular/core';
import { TimePipe } from './time/time.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { LnWordsPipe } from './ln-words/ls.words.pipe';
import { ReversePipe } from './reverse/reverse.pipe';

@NgModule({
  declarations: [TimePipe, OrderByPipe, LnWordsPipe, ReversePipe],
  exports: [TimePipe, OrderByPipe, LnWordsPipe, ReversePipe],
})
export class PipeModule {}
