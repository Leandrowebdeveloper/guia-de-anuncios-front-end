import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { AvatarComponent } from './avatar/avatar-component';
import { UserBlockadeComponent } from './blockade/blockade.component';
import { UserCardComponent } from './card/card.component';
import { FormUserDestroyComponent } from './destroy/form/form.component';
import { UserDestroyComponent } from './destroy/destroy.component';
import { UserEmailComponent } from './email/email.component';
import { FormUserEmailComponent } from './email/form/form.component';
import { FormUserLevelComponent } from './level/form/form.component';
import { UserLevelComponent } from './level/level.component';
import { UserMessageComponent } from './message/message.component';
import { FormUserNameComponent } from './name/form/form.component';
import { UserNameComponent } from './name/name.component';
import { FormUserPasswordComponent } from './password/form/form.component';
import { UserPasswordComponent } from './password/password-component';
import { FormUserPlanComponent } from './plan/form/form.component';
import { UserPlanComponent } from './plan/plan.component';

import { SegmentComponent } from './segment/segment.component';
import { UserStateComponent } from './state/state.component';

import { FormSendUserMessageComponent } from './userMessage/form/form.component';
import { SendUserMessageComponent } from './userMessage/user-message.component';
import { FormUserBlockadeComponent } from './blockade/form/form.component';
import { UserMessageService } from './userMessage/service/user-message.service';
import { StateService } from './state/service/state.service';
import { UserPlanService } from './plan/service/user-plan.service';
import { AdminPasswordService } from './password/service/password.service';
import { NameService } from './name/service/name.service';
import { UserLevelService } from './level/service/user-level.service';
import { UserDestroyService } from './destroy/service/user-destroy.service';
import { AvatarService } from './avatar/service/image.service';
import { UserBlockadeService } from './blockade/services/user-blockade.service';

@NgModule({
  declarations: [
    UserStateComponent,
    SegmentComponent,
    FormUserPlanComponent,
    FormUserPasswordComponent,
    FormUserNameComponent,
    FormUserEmailComponent,
    FormUserLevelComponent,
    FormUserDestroyComponent,

    UserPasswordComponent,
    UserLevelComponent,
    UserNameComponent,
    UserPlanComponent,
    UserMessageComponent,
    UserEmailComponent,
    UserDestroyComponent,
    UserCardComponent,
    UserBlockadeComponent,
    AvatarComponent,
    FormSendUserMessageComponent,
    SendUserMessageComponent,
    FormUserBlockadeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FormComponentModule,
    HeaderModalModule,
    PipeModule,
  ],
  exports: [
    UserNameComponent,
    UserPasswordComponent,
    UserMessageComponent,
    UserStateComponent,
    SegmentComponent,
    UserPlanComponent,
    UserLevelComponent,
    UserEmailComponent,
    UserDestroyComponent,
    AvatarComponent,
    UserCardComponent,
    UserBlockadeComponent,
    SendUserMessageComponent,
    FormUserBlockadeComponent,
  ],
  providers: [
    UserBlockadeService,
    UserMessageService,
    StateService,
    UserPlanService,
    AdminPasswordService,
    NameService,
    UserLevelService,
    UserDestroyService,
    AvatarService,
  ],
})
export class UserComponentsModule {}
