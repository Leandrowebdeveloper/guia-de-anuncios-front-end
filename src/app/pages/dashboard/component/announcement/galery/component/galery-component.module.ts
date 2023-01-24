import { GaleryButtonUploadComponent } from './button-upload/button-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryComponent } from './galery-component';

import { PresentPlanComponentModule } from 'src/app/components/present-plan/present-plan.module';
import { GaleryAnnouncementService } from '../service/galery.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PresentPlanComponentModule],
  declarations: [GaleryComponent, GaleryButtonUploadComponent],
  exports: [GaleryComponent, GaleryButtonUploadComponent],
  providers: [GaleryAnnouncementService],
})
export class GaleryComponentModule {}
