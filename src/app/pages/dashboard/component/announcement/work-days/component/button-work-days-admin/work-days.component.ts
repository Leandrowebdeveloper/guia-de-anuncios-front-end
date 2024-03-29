import { HttpErrorResponse } from '@angular/common/http';
import { DeleteWorkDayService } from './service/service.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Announcement, DaysOfTheWeek, WorkDays, User } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { WorkDayAnnouncementService } from '../../../work-days/service/work-days.service';

@Component({
  selector: 'app-work-days-admin-management',
  templateUrl: './work-days.component.html',
  styleUrls: ['./work-days.component.scss'],
})
export class AdminManagementWorkDayComponent implements OnInit, OnDestroy {
  @Input() announcement!: Announcement | void;
  @Input() user!: User | void;
  public readonly daysOfTheWeekPT = [
    'Domingo',
    'Segunda feira',
    'Terça feira',
    'Quarta feira',
    'Quinta feira',
    'Sexta feira',
    'Sábado',
  ];

  public readonly daysOfTheWeek: DaysOfTheWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  private $delete!: Subscription;
  private $update!: Subscription;

  constructor(
    private deleteworkDayService: DeleteWorkDayService,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private workDayAnnouncementService: WorkDayAnnouncementService
  ) {}

  ngOnInit() {
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async destroy(): Promise<void> {
    if (this.user?.level === '1' && this.announcement?.workDays) {
      const alert = await this.alertController.create({
        header: 'Excluir horário de funcionamento',
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
              const data: WorkDays & { password: string } = {
                ...event,
                _csrf: this.announcement?._csrf,
                id: this.announcement?.workDays?.id,
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

  private delete(
    workDays: WorkDays & { password: string }
  ): Subscription | void {
    if (this.user?.level === '1' && this.announcement?.workDays) {
      const loading = this.loadingService.show(
        'Excluindo horário de funcionamento...'
      );
      return (this.$delete = this.deleteworkDayService
        .delete(workDays)
        .subscribe({
          next: (workDay_: Pick<WorkDays, 'message'>) => {
            this.messsage(workDay_, loading);
            if (this.announcement) this.announcement.workDays = null;
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete),
        }));
    }
  }

  private messsage(
    workDays: Pick<WorkDays, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> | void {
    if (workDays?.message) {
      return this.messageService.success(
        workDays?.message,
        loading,
        this.$delete
      );
    }
  }

  private update(): Subscription {
    return (this.$update =
      this.workDayAnnouncementService.getworkDayEvent.subscribe({
        next: (workDays: WorkDays | null) => {
          if (this.announcement?.id === workDays?.announcementId) {
            if (this.announcement) this.announcement.workDays = workDays;
          }
        },
      }));
  }
}
