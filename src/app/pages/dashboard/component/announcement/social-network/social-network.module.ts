import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialNetworkComponent } from './social-network.component';
import { FormPageModule } from './form/form.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FormPageModule],
  declarations: [SocialNetworkComponent],
  exports: [SocialNetworkComponent],
})
export class SocialNetworkComponentModule {}
