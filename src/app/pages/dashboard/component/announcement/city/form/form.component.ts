import { Citie } from 'src/app/interface/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { CityService } from '../service/city.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormCityAnnouncementComponent implements OnInit {
  @Input() citie!: Citie;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/citie',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar cidade e estado.',
    title: 'Salvar cidade e estado.',
  };

  public config: object;
  private form: FormGroup;
  private $citie: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
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

  private cities(event: FormGroup): Subscription {
    let message: string;
    if (this.isCity(event.value.city)) {
      return;
    }
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

  private send(
    event: FormGroup<any>,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    return (this.$citie = this.cityService.citie(event.value).subscribe(
      (citie: Citie) => this.messsage(citie.message, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$citie)
    ));
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
