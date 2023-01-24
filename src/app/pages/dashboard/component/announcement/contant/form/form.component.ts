import { Contact } from 'src/app/interface';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MaskPipe } from 'src/app/utilities/pipe/mask/mask.pipe';
import { ContactAnnouncementService } from './../service/contact.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormContactAnnouncementComponent implements OnInit {
  @Input() contact!: Required<Contact>;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/contact',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar contatos.',
    title: 'Salvar contatos.',
  };

  public config: object;
  private form: FormGroup;
  private $contact: Subscription;
  constructor(
    private maskPipe: MaskPipe,
    private helpService: HelpsService,
    private modalController: ModalController,
    private contactService: ContactAnnouncementService,
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
    return this.contacts(event);
  }

  private contacts(event: FormGroup): Subscription {
    let message: string;
    if (this.contact?.id) {
      event.value.id = this.contact?.id;
      message = 'Editando contatos...';
    } else {
      event.value.announcementId = this.contact?.announcementId;
      message = 'Cadastrando contatos...';
    }
    // eslint-disable-next-line no-underscore-dangle
    event.value._csrf = this.contact._csrf;
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }

  private send(
    event: FormGroup<any>,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    const data = this.contactService.filter(event.value) as Required<Contact>;
    return (this.$contact = this.contactService.contact(data).subscribe(
      (contact: Contact) => this.messsage(contact?.message, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$contact)
    ));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.$contact);
  }

  private getData(): void {
    const whatsapp = this.maskPipe.transform(this.contact.whatsapp, 'whatsapp');
    const mobilePhone = this.maskPipe.transform(
      this.contact.mobilePhone,
      'mobilePhone'
    );
    const phone = this.maskPipe.transform(this.contact.phone, 'phone');

    this.config = { whatsapp, phone, mobilePhone };
  }
}
