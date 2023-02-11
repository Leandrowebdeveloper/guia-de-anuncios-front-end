import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Announcement, Contact, User } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AnnouncementContactComponent } from '../contant.component';
import { ContactAnnouncementService } from '../service/contact.service';

@Component({
  selector: 'app-contact-admin-management',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class AdminManagementContactComponent implements OnInit, OnDestroy {
  @Input() announcement!: Pick<
    Announcement,
    'title' | '_csrf' | 'id' | 'contact' | 'categoryAnnouncement' | 'blockade'
  >;
  @Input() user!: Pick<User, 'level'>;
  public contact: Contact;
  private $delete: Subscription;
  private $update: Subscription;
  constructor(
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private contactAnnouncementComponent: AnnouncementContactComponent,
    private contactAnnouncementService: ContactAnnouncementService
  ) {}

  ngOnInit() {
    this.contact = this.announcement?.contact;
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async destroy(): Promise<void> {
    if (this.user?.level === '1' && this.contact) {
      const alert = await this.alertController.create({
        header: 'Excluir contato',
        subHeader: this.announcement?.title,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (event) => {
              const data: Pick<
                Contact & { password: string },
                '_csrf' | 'id' | 'password'
              > = {
                ...event,
                // eslint-disable-next-line no-underscore-dangle
                _csrf: this.announcement._csrf,
                id: this.contact?.id,
              };
              return this.delete(data);
            },
          },
        ],
        inputs: [
          {
            name: 'password',
            type: 'password',
            placeholder: 'Senha',
            min: 8,
            max: 16,
          },
        ],
      });

      await alert.present();
    }
  }

  public send(): void {
    this.contactAnnouncementComponent.contacts(this.announcement);
  }

  private delete(
    contact: Pick<Contact & { password: string }, '_csrf' | 'id' | 'password'>
  ): Subscription {
    if (this.user?.level === '1' && this.contact) {
      const loading = this.loadingService.show('Excluindo contato...');
      return (this.$delete = this.contactAnnouncementService
        .delete(contact)
        .subscribe(
          (coordinate_: Pick<Contact, 'message'>) => {
            this.messsage(coordinate_, loading);
            this.announcement.contact = null;
            return (this.contact = null);
          },
          (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete)
        ));
    }
  }

  private messsage(
    contact: Pick<Contact, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.messageService.success(contact?.message, loading, this.$delete);
  }

  private update(): Subscription {
    return (this.$update =
      this.contactAnnouncementService.getContactEvent.subscribe(
        (contact: Contact) => {
          if (this.announcement?.id === contact?.announcementId) {
            this.announcement.contact = contact;
            this.contact = contact;
          }
        }
      ));
  }
}
