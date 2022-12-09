import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

import { Plan, User } from 'src/app/interface';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { UserPlanService } from '../service/user-plan.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormUserPlanComponent implements OnInit {
  @Input() user!: User;
  @Input() action!: string;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/plan',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Alterar plano do usuário.',
    title: 'Alterar plano do usuário.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;

  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private userPlanService: UserPlanService,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    return this.plan(event);
  }

  private plan(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando plano...');
    event.value.userId = this.user?.id;
    return (this.write = this.userPlanService.plan(event.value).subscribe(
      (plan: Plan) => this.messsage(plan, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  private messsage(
    plan: Plan,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(plan?.message, loading, this.write);
  }

  private getData(): void {
    const { _csrf, plan, password } = this.user;
    this.config = { _csrf, password, ...plan };
    console.log(this.config);
  }
}
