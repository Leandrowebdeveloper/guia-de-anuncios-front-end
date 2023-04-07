import { Citie } from 'src/app/interface/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { CityAnnouncementService } from '../service/city.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AnnouncementFormCityComponent implements OnInit {
  @Input() citie!: Required<Citie>;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/citie',
    icon: 'cloud-upload',
    label: 'Salvar',

    aria: 'Salvar cidade e estado.',
    title: 'Salvar cidade e estado.',
  };

  public config!: object;
  private form!: FormGroup;
  private $citie!: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private cityService: CityAnnouncementService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription | void {
    return this.cities(event);
  }

  private isCity(value: string) {
    const type = [
      'São Luiz dos Montes Belos',
      'Firminópolis',
      'Aurilândia',
      'Sanclerlândia',
      'Turvânia',
      'Córrego do Ouro',
    ];
    return !type.includes(value);
  }

  private cities(event: FormGroup): Subscription | void {
    if (!this.isCity(event.value.city)) {
      let message: string;

      if (this.citie?.id) {
        event.value.id = this.citie?.id;
        message = 'Editando cidade...';
      } else {
        event.value.announcementId = this.citie?.announcementId;
        message = 'Cadastrando cidade...';
      }
      const loading = this.loadingService.show(message);
      return this.send(event, loading);
    }
  }

  private send(
    event: FormGroup,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    return (this.$citie = this.cityService.citie(event.value).subscribe({
      next: (citie: Pick<Citie, 'message'>) =>
        citie?.message && this.messsage(citie?.message, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$citie),
    }));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.$citie);
  }

  private getData(): void {
    this.config = { ...this.citie };
  }
}
