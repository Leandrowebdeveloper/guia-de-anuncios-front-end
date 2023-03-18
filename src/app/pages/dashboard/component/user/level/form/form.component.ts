import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { MessageService } from 'src/app/utilities/message/message.service';
import { UserLevelService } from '../service/user-level.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormUserLevelComponent implements OnInit {
  @Input() user!: Required<Pick<User, '_csrf' | 'slug' | 'password' | 'level'>>;
  @Input() action!: string;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/level',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Alterar nivel do usuário.',
    title: 'Alterar nivel do usuário.',
  };

  public config: object;
  private form: FormGroup;
  private $level: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private userLevelService: UserLevelService,
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
    return this.level(event);
  }

  // Level
  private level(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Salvando nivel...');
    event.value.slug = this.user?.slug;
    return (this.$level = this.userLevelService.level(event.value).subscribe({
      next: (user: Required<Pick<User, 'message' | 'level'>>) =>
        this.messsage(user, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$level),
    }));
  }

  private messsage(
    user: Required<Pick<User, 'message'>>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user?.message, loading, this.$level);
  }

  private getData(): void {
    this.config = { ...this.user };
  }
}
