import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollHideDirective } from './scroll-hide.directive';
import { HeaderModule } from 'src/app/header/header.module';

@NgModule({
  declarations: [ScrollHideDirective],
  imports: [CommonModule, HeaderModule],
  exports: [ScrollHideDirective],
})
export class ScrollHideModule {}
