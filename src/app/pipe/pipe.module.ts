import { AddressService } from 'src/app/pages/dashboard/component/announcement/address/service/address.service';
import { NgModule } from '@angular/core';
import { TimePipe } from './time/time.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { LnWordsPipe } from './ln-words/ls.words.pipe';
import { ReversePipe } from './reverse/reverse.pipe';
import { MaskPipe } from './mask/mask.pipe';
import { CitiePipe } from './citie/citie.pipe';
import { AddressPipe } from './address/address.pipe';
import { AllowAdPipe } from './allow-ad/allow-ad.pipe';
import { WorkDaysPipe } from './workDays/workDays.pipe';
import { AttrTitlePipe } from './attr-title/attr-title.pipe';
import { IconCategoryPipe } from './img/icon/icon-category.pipe';
import { IsInfiniteScroll } from './is-infinite-scroll/is-infinite-scroll.pipe';
import { TypePlanPipe } from './announcement/plan/type-plan/type-plan.pipe';
import { TypeImageGaleryPipe } from './img/galery/galery.pipe';
import { IsGaleryPipe } from './img/is-galery/is-galery.pipe';
import { IsAnnouncementPipe } from './announcement/is-announcement/is-announcement.pipe';
import { IsWorkDaysPipe } from './announcement/work-days/is-work-days/is-work-days.pipe';
import { IsUsersPipe } from './users/is-users/is-users.pipe';
import { IsUserValuesPipe } from './user/is-user-values/is-user-values.pipe';
import { IsUserLevelPipe } from './user/is-user-level/is-user-level.pipe';
import { IsCategoryPipe } from './category/is-category/is-category.pipe';
import { categoryStatePipe } from './category/is-category-state/is-category-state.pipe';
import { IsSocialNetworksPipe } from './social-networks/is-social-networks/is-social-networks.pipe';
import { IsAttrContactPipe } from './announcement/contact/is-attr-contact/is-attr-contact.pipe';
import { IsUserStatePipe } from './user/is-user-state/is-user-state.pipe';
import { IsAttrAnnouncementUserPipe } from './announcement/user/is-attr-user/is-attr-user.pipe';
import { AnnouncementContactValuesPipe } from './announcement/contact/is-contact-value/is-contact-value.pipe';
import { AnnouncementUserValuesPipe } from './announcement/user/user-attr-values/user-attr-values.pipe';
import { ContactAttrValuesMaskPipe } from './announcement/contact/contact-attr-value-mask/contact-attr-value-mask.pipe';
import { UserValuesPipe } from './user/user-values/user-values.pipe';
import { IsUserValuesPlanPipe } from './user/is-user-values-plan/is-user-values-plan.pipe';
import { UserValuesPlanPipe } from './user/user-values-plan/user-values-plan.pipe';
import { UserValuesImgAvatarPipe } from './user/user-values-img-avatar/user-values-img-avatar.pipe';
import { AnnouncementValuesPipe } from './announcement/is-announcement-values/is-announcement-values.pipe';
import { IsAnnouncementAttrValuesPipe } from './announcement/is-announcement-attr-values/is-announcement-attr-values.pipe';
import { IsWorkDaysValuesPipe } from './announcement/work-days/is-work-days-values/is-work-days-values.pipe';
import { AnnouncementPlanValuesPipe } from './announcement/plan/announcement-plan-values/announcement-plan-values.pipe';
import { IsAnnouncementCategoryAttrValuesPipe } from './announcement/category/is-category-attr-values/is-category-attr-values.pipe';
import { AnnouncementCategoryToggleIconPipe } from './category/toggle-icon-header/toggle-icon-header.pipe';
import { ImgAvatarPipe } from './user/img-avatar/img-avatar.pipe';
import { categoryValuesPipe } from './category/category-values/category-values.pipe';
import { CategoryIconPipe } from './category/icons/icons.pipe';
import { AnnouncementSocialNetworkValuesPipe } from './announcement/social-network/announcement-social-network-values/announcement-social-network-values.pipe';
import { IsAnnouncementCategoryPipe } from './announcement/category/is-category/is-category.pipe';
import { GaleryValuesPipe } from './announcement/galery/galery-values/galery-values.pipe';
import { TypePlanFreePipe } from './announcement/plan/type-plan-free/type-plan.pipe';

@NgModule({
  declarations: [
    TimePipe,
    OrderByPipe,
    LnWordsPipe,
    ReversePipe,
    MaskPipe,
    CitiePipe,
    AddressPipe,
    AllowAdPipe,
    WorkDaysPipe,
    AttrTitlePipe,
    IconCategoryPipe,
    IsInfiniteScroll,
    TypePlanFreePipe,
    TypePlanPipe,
    TypeImageGaleryPipe,
    IsGaleryPipe,
    IsAnnouncementPipe,
    IsAnnouncementCategoryPipe,
    IsWorkDaysPipe,
    IsUsersPipe,
    IsUserValuesPipe,
    IsUserLevelPipe,
    IsCategoryPipe,
    categoryStatePipe,
    IsSocialNetworksPipe,
    IsUserStatePipe,
    IsAttrContactPipe,
    IsAttrAnnouncementUserPipe,
    AnnouncementContactValuesPipe,
    AnnouncementUserValuesPipe,
    ContactAttrValuesMaskPipe,
    UserValuesPipe,
    IsUserValuesPlanPipe,
    UserValuesPlanPipe,
    UserValuesImgAvatarPipe,
    AnnouncementValuesPipe,
    IsAnnouncementAttrValuesPipe,
    IsWorkDaysValuesPipe,
    AnnouncementPlanValuesPipe,
    IsAnnouncementCategoryAttrValuesPipe,
    AnnouncementUserValuesPipe,
    AnnouncementCategoryToggleIconPipe,
    ImgAvatarPipe,
    categoryValuesPipe,
    CategoryIconPipe,
    AnnouncementSocialNetworkValuesPipe,
    GaleryValuesPipe,
  ],
  exports: [
    TimePipe,
    OrderByPipe,
    LnWordsPipe,
    ReversePipe,
    MaskPipe,
    CitiePipe,
    AddressPipe,
    AllowAdPipe,
    WorkDaysPipe,
    AttrTitlePipe,
    IconCategoryPipe,
    IsInfiniteScroll,
    TypePlanFreePipe,
    TypePlanPipe,
    TypeImageGaleryPipe,
    IsGaleryPipe,
    IsAnnouncementPipe,
    IsAnnouncementCategoryPipe,
    IsWorkDaysPipe,
    IsUsersPipe,
    IsUserValuesPipe,
    IsUserLevelPipe,
    IsCategoryPipe,
    categoryStatePipe,
    IsSocialNetworksPipe,
    IsUserStatePipe,
    IsAttrContactPipe,
    IsAttrAnnouncementUserPipe,
    AnnouncementContactValuesPipe,
    AnnouncementUserValuesPipe,
    ContactAttrValuesMaskPipe,
    UserValuesPipe,
    IsUserValuesPlanPipe,
    UserValuesPlanPipe,
    UserValuesImgAvatarPipe,
    AnnouncementValuesPipe,
    IsAnnouncementAttrValuesPipe,
    IsWorkDaysValuesPipe,
    AnnouncementPlanValuesPipe,
    IsAnnouncementCategoryAttrValuesPipe,
    AnnouncementUserValuesPipe,
    AnnouncementCategoryToggleIconPipe,
    ImgAvatarPipe,
    categoryValuesPipe,
    CategoryIconPipe,
    AnnouncementSocialNetworkValuesPipe,
    GaleryValuesPipe,
  ],
  providers: [AddressService, AllowAdPipe, TimePipe],
})
export class PipeModule {}
