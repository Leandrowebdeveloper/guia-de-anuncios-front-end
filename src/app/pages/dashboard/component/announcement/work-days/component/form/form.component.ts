import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { IonDatetime, IonPopover, NavController } from '@ionic/angular';
import {
  Announcement,
  AnnouncementRoute,
  DayOfTheWeekPT,
  DaysOfTheWeek,
  WorkDays,
} from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { WorkDayAnnouncementService } from '../../service/work-days.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('popoverStart', { static: false }) popoverStart: IonPopover;
  @ViewChild('popoverStartInterval', { static: false })
  popoverStartInterval: IonPopover;
  @ViewChild('popoverEndInterval', { static: false })
  popoverEndInterval: IonPopover;
  @ViewChild('popoverEnd', { static: false })
  popoverEnd: IonPopover;
  @ViewChild(IonDatetime, { static: false }) datetime: IonDatetime;

  @Input() announcement!: Announcement;
  @Input() dayOfTheWeek!: DayOfTheWeekPT;

  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);

  public workDays: WorkDays;
  public start: string;
  public startInterval: string;
  public endInterval: string;
  public end: string;
  public day: DaysOfTheWeek;

  public minuteValue = '0,5,10,15,20,25,30,35,40,45,50,55';

  public form: FormGroup;
  private $workDays: Subscription;

  constructor(
    private fb: FormBuilder,
    private workDayService: WorkDayAnnouncementService,
    private messageService: MessageService,
    private loadingService: LoadingService
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
    this.init();
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
        this.day = 'tuesday';
        break;
      case 'quarta':
        this.day = 'wednesday';
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
    this.route.emit('WorkDays');
  }

  public setTime(
    setTime: 'start' | 'startInterval' | 'endInterval' | 'end',
    dayOfTheWeek: DayOfTheWeekPT
  ): void {
    if (!this.workDayService.days.includes(dayOfTheWeek)) {
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
        this.setDataTime(setTime, value, 'tuesday');
        break;
      case 'quarta':
        this.setDataTime(setTime, value, 'wednesday');
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

  public cancel(event: IonPopover): Promise<boolean> {
    this.datetime.cancel();
    return event.dismiss();
  }

  public confirm(event: IonPopover): Promise<boolean> {
    this.datetime.confirm();
    return event.dismiss();
  }

  public reset(): Subscription {
    this.cleanFields();
    return this.onSubmit();
  }

  public onSubmit(): Subscription {
    if (!this.workDayService.valid(this.form.value)) {
      return;
    }
    const loading = this.loadingService.show('Salvando horário...');
    // eslint-disable-next-line no-underscore-dangle
    this.form.value._csrf = this.announcement?._csrf;

    return (this.$workDays = this.workDayService
      .workDays(this.form.value)
      .subscribe(
        (workDays: WorkDays) => this.messsage(workDays?.message, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$workDays)
      ));
  }

  private cleanFields() {
    this.form.value[this.day] = this.workDayService?.fields;
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
    if (this.workDays?.id) {
      return (this.form = this.fb.group<WorkDays>({ ...this.workDays }));
    }

    return (this.form = this.fb.group({
      announcementId: [this.announcement?.id],
      sunday: this.fb.group({ ...this.dataFormTime }),
      monday: this.fb.group({ ...this.dataFormTime }),
      tuesday: this.fb.group({ ...this.dataFormTime }),
      wednesday: this.fb.group({ ...this.dataFormTime }),
      thursday: this.fb.group({ ...this.dataFormTime }),
      friday: this.fb.group({ ...this.dataFormTime }),
      saturday: this.fb.group({ ...this.dataFormTime }),
    }));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.messageService.success(message, loading, this.$workDays);
  }

  private init(): WorkDays {
    return (this.workDays = this.announcement?.workDays);
  }
}
