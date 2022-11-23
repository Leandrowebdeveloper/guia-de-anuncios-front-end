import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level.component';
import { FormComponent } from './form/form.component';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';

@NgModule({
  declarations: [LevelComponent, FormComponent],
  imports: [CommonModule, IonicModule, FormComponentModule, HeaderModalModule],
  exports: [LevelComponent, FormComponent],
})
export class LevelComponentModule {}
