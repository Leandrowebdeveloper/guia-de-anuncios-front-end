import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interface/index';
import { FormAnnouncementComponent } from 'src/app/pages/dashboard/component/announcement/announcement/form/form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public user$: Observable<User>;
  public isAnnouncement: boolean;
  public toggleList: boolean;

  constructor(
    private authService: AuthService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getUser();
  }

  public getIsAnnouncement(e: boolean) {
    this.isAnnouncement = e;
  }

  public togglePage(e: boolean) {
    this.toggleList = e;
  }

  public async create(): Promise<void> {
    const modal = await this.modalController.create({
      component: FormAnnouncementComponent,
      componentProps: {
        action: 'announcement',
        label: 'Cadastrar anúncio',
        announcement: {
          _csrf: this.authService.getCsrf,
          title: null,
          description: null,
          userId: this.authService.getUser?.id,
        },
      },
    });
    return await modal.present();
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }
}
