import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BreadcrumpsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [HeaderComponent, BreadcrumpsComponent],
  imports: [CommonModule, IonicModule, RouterModule, PipeModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
