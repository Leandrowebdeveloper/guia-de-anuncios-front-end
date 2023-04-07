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
import { IonDatetime, IonPopover } from '@ionic/angular';
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
  @ViewChild('popoverStart', { static: false }) popoverStart!: IonPopover;
  @ViewChild('popoverStartInterval', { static: false })
  popoverStartInterval!: IonPopover;
  @ViewChild('popoverEndInterval', { static: false })
  popoverEndInterval!: IonPopover;
  @ViewChild('popoverEnd', { static: false })
  popoverEnd!: IonPopover;
  @ViewChild(IonDatetime, { static: false }) datetime!: IonDatetime;

  @Input() announcement!: Announcement;
  @Input() dayOfTheWeek!: DayOfTheWeekPT | null;

  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);

  public workDays!: WorkDays | null;
  public start!: string;
  public startInterval!: string;
  public endInterval!: string;
  public end!: string;
  public day!: DaysOfTheWeek;

  public minuteValue = '0,5,10,15,20,25,30,35,40,45,50,55';

  public form!: FormGroup;
  private $workDays!: Subscription;

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
    dayOfTheWeek: DayOfTheWeekPT | null
  ): void {
    if (dayOfTheWeek && this.workDayService.days.includes(dayOfTheWeek)) {
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
  }

  public cancel(event: IonPopover): Promise<boolean> {
    this.datetime.cancel();
    return event.dismiss();
  }

  public confirm(event: IonPopover): Promise<boolean> {
    this.datetime.confirm();
    return event.dismiss();
  }

  public reset(): Subscription | void {
    this.cleanFields();
    return this.onSubmit();
  }

  public onSubmit(): Subscription | void {
    if (this.workDayService.valid(this.form.value)) {
      const loading = this.loadingService.show('Salvando horário...');
      this.form.value._csrf = this.announcement?._csrf;

      return (this.$workDays = this.workDayService
        .workDays(this.form.value)
        .subscribe({
          next: (workDays: WorkDays) =>
            workDays?.message && this.messsage(workDays?.message, loading),
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$workDays),
        }));
    }
  }

  private cleanFields() {
    this.form.value[this.day] = this.workDayService?.fields;
  }

  private setDataTime(setTime: string, value: any, day: DaysOfTheWeek) {
    switch (setTime) {
      case 'start':
        this.start = value;
        const start = JSON.parse('{"' + day + '":{"start":"' + value + '"}}');
        this.form.patchValue({ ...start });
        break;
      case 'startInterval':
        this.startInterval = value;
        const startInterval = JSON.parse(
          '{"' + day + '":{"startInterval":"' + value + '"}}'
        );
        this.form.patchValue({ ...startInterval });
        break;
      case 'endInterval':
        this.endInterval = value;
        const endInterval = JSON.parse(
          '{"' + day + '":{"endInterval":"' + value + '"}}'
        );
        this.form.patchValue({ ...endInterval });
        break;
      case 'end':
        this.end = value;
        const end = JSON.parse(
          '{"' + day + '":{"endInterval":"' + value + '"}}'
        );
        this.form.patchValue({ ...end });
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

  private init(): void {
    this.workDays = this.announcement?.workDays || null;
  }
}
