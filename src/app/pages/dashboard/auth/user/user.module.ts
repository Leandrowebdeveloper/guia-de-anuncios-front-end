import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPage } from './user.page';

import { UserPageRoutingModule } from './user-routing.module';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AvatarComponentModule } from '../../component/user/avatar/avatar-component.module';
import { DestroyComponentModule } from '../../component/user/destroy/destroy.module';
import { EmailComponentModule } from '../../component/user/email/email.module';
import { NameComponentModule } from '../../component/user/name/name.module';
import { PasswordComponentModule } from '../../component/user/password/password.module';
import { CardUserComponentModule } from '../../component/user/card/card.module';
import { MessageComponentModule } from '../../component/user/message/message.module';
import { PlanComponentModule } from '../../component/user/plan/plan.module';
import { LevelComponentModule } from '../../component/user/level/level.module';
import { StateComponentModule } from '../../component/user/state/state.module';
import { BlockadeComponentModule } from '../../component/user/blockade/blockade.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserPageRoutingModule,
    FormComponentModule,
    HeaderModalModule,

    HeaderModule,
    FooterModule,
    AvatarComponentModule,
    DestroyComponentModule,
    EmailComponentModule,
    NameComponentModule,
    PasswordComponentModule,
    CardUserComponentModule,
    MessageComponentModule,
    BlockadeComponentModule,
    StateComponentModule,
    LevelComponentModule,
    PlanComponentModule,
  ],
  declarations: [UserPage],
})
export class UserPageModule {}
