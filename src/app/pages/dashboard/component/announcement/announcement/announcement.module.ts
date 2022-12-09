import { IonicModule } from '@ionic/angular';
import { AnnouncementComponent } from './announcement.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormAnnouncementComponent } from './form/form.component';

@NgModule({
  declarations: [AnnouncementComponent, FormAnnouncementComponent],
  imports: [CommonModule, IonicModule, FormComponentModule, HeaderModalModule],
  exports: [AnnouncementComponent, FormAnnouncementComponent],
})
export class AnnouncementComponentModule {}
