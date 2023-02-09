import { GaleryButtonUploadComponent } from './component/button-upload/button-upload.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryComponent } from './galery-component';

import { PresentPlanComponentModule } from 'src/app/components/present-plan/present-plan.module';
import { GaleryAnnouncementService } from './service/galery.service';
import { HorizontalScrollDirective } from './directive/horizontal-slide.directive';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PresentPlanComponentModule],
  declarations: [
    GaleryComponent,
    GaleryButtonUploadComponent,
    HorizontalScrollDirective,
  ],
  exports: [GaleryComponent, GaleryButtonUploadComponent],
  providers: [GaleryAnnouncementService],
})
export class GaleryComponentModule {}
