import { AddressService } from './../../pages/dashboard/component/announcement/address/service/address.service';
import { NgModule } from '@angular/core';
import { TimePipe } from './time/time.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { LnWordsPipe } from './ln-words/ls.words.pipe';
import { ReversePipe } from './reverse/reverse.pipe';
import { MaskPipe } from './mask/mask.pipe';
import { CitiePipe } from './citie/citie.pipe';
import { AddressPipe } from './address/address.pipe';
import { AllowAdPipe } from './allow-ad/allow-ad.pipe';
import { WorkDaysPipe } from './workDays/workDays.pipe';
import { AttrTitlePipe } from './attr-title/attr-title.pipe';

@NgModule({
  declarations: [
    TimePipe,
    OrderByPipe,
    LnWordsPipe,
    ReversePipe,
    MaskPipe,
    CitiePipe,
    AddressPipe,
    AllowAdPipe,
    WorkDaysPipe,
    AttrTitlePipe,
  ],
  exports: [
    TimePipe,
    OrderByPipe,
    LnWordsPipe,
    ReversePipe,
    MaskPipe,
    CitiePipe,
    AddressPipe,
    AllowAdPipe,
    WorkDaysPipe,
    AttrTitlePipe,
  ],
  providers: [AddressService, AllowAdPipe, TimePipe],
})
export class PipeModule {}
