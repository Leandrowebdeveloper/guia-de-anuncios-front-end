import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Announcement, Contact, User } from 'src/app/interface';
import { AlertController, ModalController } from '@ionic/angular';
import { AnnouncementFormContactComponent } from './form/form.component';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ContactAnnouncementService } from './service/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contant-announcement-component',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss'],
})
export class AnnouncementContactComponent implements OnInit, OnDestroy {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'contact' | 'categoryAnnouncement' | 'title'
  > | void;

  @Input() user!: Pick<User, 'level'> | void;
  public contact!: Contact | null;
  private $delete!: Subscription;
  private $update!: Subscription;
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private contactAnnouncementService: ContactAnnouncementService
  ) {}

  ngOnInit(): void {
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async openForm(): Promise<void> {
    if (this.user?.level === '2') {
      await this.contacts();
    }
  }

  public async openFormAdmin(): Promise<void> {
    await this.contacts();
  }

  public async contacts(): Promise<void> {
    if (this.announcement) {
      const label = this.buildDataLabel(this.announcement);
      const contact = this.buildDataContact(this.announcement);
      const modal = await this.modalController.create({
        component: AnnouncementFormContactComponent,
        componentProps: {
          action: 'contact',
          label,
          contact,
        },
      });
      return await modal.present();
    }
  }

  private buildDataLabel(
    announcement: Pick<Announcement, 'id' | 'contact'>
  ): string | void {
    if (announcement?.contact) {
      return 'Editar contatos';
    } else {
      if (announcement?.id) {
        return 'Cadastrar contatos';
      }
    }
  }

  private buildDataContact(
    announcement: Pick<
      Announcement,
      '_csrf' | 'id' | 'contact' | 'categoryAnnouncement' | 'blockade'
    >
  ): Contact | void {
    const _csrf = announcement?._csrf;
    if (announcement?.contact) {
      return {
        ...announcement?.contact,
        _csrf,
      };
    } else {
      if (announcement?.id) {
        return {
          _csrf,
          mobilePhone: null,
          phone: null,
          whatsapp: null,
          announcementId: announcement?.id,
        };
      }
    }
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
              const data: Contact & { password: string } = {
                ...event,
                _csrf: this.announcement?._csrf,
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

  private delete(contact: Contact & { password: string }): Subscription | void {
    if (this.user?.level === '1' && this.contact) {
      const loading = this.loadingService.show('Excluindo contato...');
      return (this.$delete = this.contactAnnouncementService
        .delete(contact)
        .subscribe({
          next: (coordinate_: Pick<Contact, 'message'>) => {
            this.messsage(coordinate_, loading);
            if (this.announcement) this.announcement.contact = null;
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete),
        }));
    }
  }

  private messsage(
    contact: Pick<Contact, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> | void {
    if (contact?.message) {
      return this.messageService.success(
        contact?.message,
        loading,
        this.$delete
      );
    }
  }

  private update(): Subscription {
    return (this.$update =
      this.contactAnnouncementService.getContactEvent.subscribe({
        next: (contact: Contact | null) => {
          if (this.announcement?.id === contact?.announcementId) {
            if (this.announcement) this.announcement.contact = contact;
          }
        },
      }));
  }
}
