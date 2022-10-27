import { Subscription, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DaysOfTheWeek, OpeningHour, Advert } from 'src/app/interface/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, IonPopover, NavController } from '@ionic/angular';
import { AuthAdvertService } from '../service/advert.service';

@Component({
  selector: 'app-opening-hour',
  templateUrl: './opening-hour.page.html',
  styleUrls: ['./opening-hour.page.scss'],
})
export class OpeningHourPage implements OnInit {
  @ViewChild('popoverStart', { static: false }) popoverStart: IonPopover;
  @ViewChild('popoverStartInterval', { static: false })
  popoverStartInterval: IonPopover;
  @ViewChild('popoverEndInterval', { static: false })
  popoverEndInterval: IonPopover;
  @ViewChild('popoverEnd', { static: false })
  popoverEnd: IonPopover;
  @ViewChild(IonDatetime, { static: false }) datetime: IonDatetime;
  public advert$: Observable<Advert>;
  public dayOfTheWeek: string;
  public start: string;
  public startInterval: string;
  public endInterval: string;
  public end: string;
  public day: DaysOfTheWeek;

  public form: FormGroup;
  private $openingHour: Subscription;
  private fields = {
    start: '',
    startInterval: '',
    endInterval: '',
    end: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authAdvertService: AuthAdvertService,
    private navCtrl: NavController
  ) {}

  private get dataFormTime() {
    return {
      start: ['', [Validators.required]],
      startInterval: [''],
      endInterval: [''],
      end: ['', [Validators.required]],
    };
  }

  ngOnInit() {
    this.getAdvert();
    this.dayOfTheWeek = this.router.url.split('=')[1];
    this.formInit();
    this.changeToEnglish();
  }

  public changeToEnglish() {
    switch (this.dayOfTheWeek) {
      case 'domingo':
        this.day = 'sunday';
        break;
      case 'segunda':
        this.day = 'monday';
        break;
      case 'terca':
        this.day = 'third';
        break;
      case 'quarta':
        this.day = 'fourth';
        break;
      case 'quinta':
        this.day = 'thursday';
        break;
      case 'sexta':
        this.day = 'friday';
        break;
      case 'sabado':
        this.day = 'saturday';
        break;
    }
  }

  public back() {
    return this.navCtrl.back();
  }

  public setTime(
    setTime: 'start' | 'startInterval' | 'endInterval' | 'end',
    dayOfTheWeek: string
  ): void {
    const day = [
      'domingo',
      'segunda',
      'terca',
      'quarta',
      'quinta',
      'sexta',
      'sabado',
    ];
    if (!day.includes(dayOfTheWeek)) {
      return;
    }
    const { value } = this.datetime;
    switch (dayOfTheWeek) {
      case 'domingo':
        this.setDataTime(setTime, value, 'sunday');
        break;
      case 'segunda':
        this.setDataTime(setTime, value, 'monday');
        break;
      case 'terca':
        this.setDataTime(setTime, value, 'third');
        break;
      case 'quarta':
        this.setDataTime(setTime, value, 'fourth');
        break;
      case 'quinta':
        this.setDataTime(setTime, value, 'thursday');
        break;
      case 'sexta':
        this.setDataTime(setTime, value, 'friday');
        break;
      case 'sabado':
        this.setDataTime(setTime, value, 'saturday');
        break;
    }
  }

  public cancel(): Promise<boolean> {
    this.datetime.cancel();
    if (this.popoverStart) {
      return this.popoverStart.dismiss();
    }
    if (this.popoverStartInterval) {
      return this.popoverStartInterval.dismiss();
    }
    if (this.popoverEndInterval) {
      return this.popoverEndInterval.dismiss();
    }
    if (this.popoverEnd) {
      return this.popoverEnd.dismiss();
    }
  }

  public confirm(): void {
    this.datetime.confirm();
    if (this.popoverStart) {
      this.popoverStart.dismiss();
    }
    if (this.popoverStartInterval) {
      this.popoverStartInterval.dismiss();
    }
    if (this.popoverEndInterval) {
      this.popoverEndInterval.dismiss();
    }
    if (this.popoverEnd) {
      this.popoverEnd.dismiss();
    }
  }

  public reset(): Subscription {
    this.cleanFields();
    return this.onSubmit();
  }

  public onSubmit(): Subscription {
    const loading = this.authAdvertService.showLoading('Salvando horário...');
    // eslint-disable-next-line no-underscore-dangle
    this.form.value._csrf = this.authAdvertService.getAdvert._csrf;
    return (this.$openingHour = this.authAdvertService
      .openingHour(this.form.value)
      .subscribe(
        (openingHour: OpeningHour) => {
          this.authAdvertService.setOpeningHour = openingHour;
          return this.messsage(openingHour.message, loading);
        },
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, loading, this.$openingHour)
      ));
  }

  private cleanFields() {
    this.form.value[this.day] = this.fields;
  }

  private setDataTime(setTime: string, value: any, day: DaysOfTheWeek) {
    switch (setTime) {
      case 'start':
        this.start = value;
        this.form.get(day).value.start = value;
        break;
      case 'startInterval':
        this.startInterval = value;
        this.form.get(day).value.startInterval = value;
        break;
      case 'endInterval':
        this.endInterval = value;
        this.form.get(day).value.endInterval = value;
        break;
      case 'end':
        this.end = value;
        this.form.get(day).value.end = value;
        break;
    }
  }

  private formInit() {
    const openingHour = this.authAdvertService?.getAdvert?.openingHour;
    if (openingHour?.advertId) {
      return (this.form = this.fb.group({ ...openingHour }));
    }
    this.authAdvertService.setOpeningHour = { ...this.setOperningHour() };
    return (this.form = this.fb.group({
      advertId: [''],
      sunday: this.fb.group({ ...this.dataFormTime }),
      monday: this.fb.group({ ...this.dataFormTime }),
      third: this.fb.group({ ...this.dataFormTime }),
      fourth: this.fb.group({ ...this.dataFormTime }),
      thursday: this.fb.group({ ...this.dataFormTime }),
      friday: this.fb.group({ ...this.dataFormTime }),
      saturday: this.fb.group({ ...this.dataFormTime }),
    }));
  }

  private setOperningHour(): OpeningHour {
    return {
      advertId: null,
      sunday: this.fields,
      monday: this.fields,
      third: this.fields,
      fourth: this.fields,
      thursday: this.fields,
      friday: this.fields,
      saturday: this.fields,
    };
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.authAdvertService.message(message, loading, this.$openingHour);
  }

  private getAdvert() {
    this.advert$ = this.authAdvertService.advertObservable;
  }
}
