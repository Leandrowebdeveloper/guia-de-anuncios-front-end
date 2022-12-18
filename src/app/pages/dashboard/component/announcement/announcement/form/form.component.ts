import { AuthAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/service/auth-announcement.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

import { Announcement } from 'src/app/interface/index';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormAnnouncementComponent implements OnInit {
  @Input() announcement!: Required<
    Pick<Announcement, 'id' | '_csrf' | 'title' | 'description' | 'userId'>
  >;
  @Input() action!: string;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/announcement',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar anúncio.',
    title: 'Salvar anúncio.',
  };

  public config: object;
  private form: FormGroup;
  private $announcement: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private authAnnouncementService: AuthAnnouncementService,
    private managementAnnouncementService: ManagementAnnouncementService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    let message: string;
    if (this.announcement?.id) {
      event.value.id = this.announcement?.id;
      message = 'Editando anúncio...';
    } else {
      event.value.userId = this.announcement?.userId;
      message = 'Cadastrando anúncio...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }

  private send(
    event: FormGroup<any>,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    if (event.value.id) {
      return (this.$announcement = this.managementAnnouncementService
        .updateAnnouncement(event.value)
        .subscribe(
          (announcement: Pick<Announcement, 'message'>) =>
            this.messsage(announcement?.message, loading),
          (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$announcement)
        ));
    }
    return (this.$announcement = this.authAnnouncementService
      .createAnnouncement(event.value)
      .subscribe(
        (announcement: Pick<Announcement, 'message'>) =>
          this.messsage(announcement?.message, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$announcement)
      ));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.$announcement);
  }

  private getData(): void {
    this.config = { ...this.announcement };
  }
}
