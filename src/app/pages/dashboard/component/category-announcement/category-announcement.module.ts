import { RouterModule } from '@angular/router';
import { FormCategoryUpdateComponent } from './update/form/form.component';
import { CategoryAnnouncementUpdateComponent } from './update/category.component';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateService } from './state/service/state.service';
import { SegmentComponent } from './segment/segment.component';
import { CategoryAnnouncementStateComponent } from './state/state.component';
import { CategoryAnnouncementCreateComponent } from './create/create.component';
import { FormCategoryCreateComponent } from './create/form/form.component';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { CreateCategoryAnnouncementService } from './create/service/create.service';
import { IonicModule } from '@ionic/angular';
import { UpdateCategoryAnnouncementService } from './update/service/category.service';
import { ImageCategoryComponent } from './image/image-category.component';
import { ImageCategoryService } from './image/service/image-category.service';
import { DestroyAnnouncementComponent } from './destroy/destroy-announcement.component';
import { DestroyAnnouncementService } from './destroy/service/destroy-announcement.service';
import { FormDestroyAnnouncementComponent } from './destroy/form/form.component';
import { SearchCategoryComponent } from './search/search.component';
import { FilterMenuCategoryComponent } from './search/filter/filter-menu.component';
import { SearchCategoryAnnouncementService } from './search/service/search.service';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipeModule,
    FormComponentModule,
    HeaderModalModule,
  ],
  declarations: [
    CategoryComponent,
    SegmentComponent,
    CategoryAnnouncementStateComponent,
    CategoryAnnouncementCreateComponent,
    FormCategoryCreateComponent,
    FormCategoryUpdateComponent,
    CategoryAnnouncementUpdateComponent,
    ImageCategoryComponent,
    DestroyAnnouncementComponent,
    FormDestroyAnnouncementComponent,
    SearchCategoryComponent,
    FilterMenuCategoryComponent,
  ],
  exports: [
    CategoryComponent,
    SegmentComponent,
    CategoryAnnouncementStateComponent,
    CategoryAnnouncementCreateComponent,
    FormCategoryCreateComponent,
    CategoryAnnouncementUpdateComponent,
    ImageCategoryComponent,
    DestroyAnnouncementComponent,
    FormDestroyAnnouncementComponent,
    SearchCategoryComponent,
    FilterMenuCategoryComponent,
  ],
  providers: [
    StateService,
    CreateCategoryAnnouncementService,
    UpdateCategoryAnnouncementService,
    ImageCategoryService,
    DestroyAnnouncementService,
    SearchCategoryAnnouncementService,
  ],
})
export class CategoryAnnouncementComponentModule {}
