import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Address, Announcement } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AddressService } from './../service/address.service';
import { AnnouncementAddressComponent } from './../address.component';

@Component({
  selector: 'app-address-admin-management',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AdminMaganementAddressComponent implements OnInit, OnDestroy {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'title' | 'address'
  >;

  private $delete: Subscription;
  private $update: Subscription;
  constructor(
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private addressAnnouncementComponent: AnnouncementAddressComponent,
    private addressService: AddressService
  ) {}

  ngOnInit() {
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async destroy(): Promise<void> {
    if (this.announcement?.address) {
      const alert = await this.alertController.create({
        header: 'Excluir endereço',
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
                Address & { password: string },
                '_csrf' | 'id' | 'password'
              > = {
                ...event,
                // eslint-disable-next-line no-underscore-dangle
                _csrf: this.announcement._csrf,
                id: this.announcement?.address?.id,
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
    this.addressAnnouncementComponent.address(this.announcement);
  }

  private delete(
    address: Pick<Address & { password: string }, '_csrf' | 'id' | 'password'>
  ): Subscription {
    if (this.announcement?.address) {
      const loading = this.loadingService.show('Excluindo endereço...');
      return (this.$delete = this.addressService.delete(address).subscribe({
        next: (address_: Pick<Address, 'message'>) => {
          this.messsage(address_, loading);
          this.announcement.address = null;
          return (this.announcement.address = null);
        },
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$delete),
      }));
    }
  }

  private messsage(
    address: Pick<Address, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.messageService.success(address?.message, loading, this.$delete);
  }

  private update(): Subscription {
    return (this.$update = this.addressService.getAddressEvent.subscribe({
      next: (address: Address) => {
        if (this.announcement?.id === address?.announcementId) {
          this.announcement.address = address;
        }
      },
    }));
  }
}
