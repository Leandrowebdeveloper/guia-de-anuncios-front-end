import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { IonicModule } from '@ionic/angular';
import { FilterMenuComponentModule } from './filter/filter-menu.component.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [IonicModule, CommonModule, FilterMenuComponentModule],
  exports: [SearchComponent],
})
export class CategoryAdvertSearchModule {}
