import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPage } from './news.page';

import { NewsPageRoutingModule } from './news-routing.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewsPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
