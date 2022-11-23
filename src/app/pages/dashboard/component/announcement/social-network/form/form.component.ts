import { SocialNetwork } from 'src/app/interface/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { SocialNetworkService } from '../service/social-network.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() socialNetwork!: SocialNetwork;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/socialNetwork',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar rede sociais.',
    title: 'Salvar rede sociais.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private socialNetworkService: SocialNetworkService,
    public messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    return this.socialNetworks(event);
  }

  private socialNetworks(event: FormGroup): Subscription {
    let message: string;
    if (this.socialNetwork?.id) {
      event.value.id = this.socialNetwork?.id;
      message = 'Editando rede social...';
    } else {
      event.value.announcementId = this.socialNetwork?.announcementId;
      message = 'Cadastrando rede social...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }

  private send(
    event: FormGroup<any>,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    return (this.write = this.socialNetworkService
      .socialNetwork(event.value)
      .subscribe(
        (socialNetwork: SocialNetwork) =>
          this.messsage(socialNetwork.message, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.write)
      ));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.write);
  }

  private getData(): void {
    this.config = { ...this.socialNetwork };
  }
}
