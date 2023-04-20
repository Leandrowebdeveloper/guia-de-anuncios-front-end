import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Announcement, User } from 'src/app/interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalController } from '@ionic/angular';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public announcement$!: Observable<Announcement[]>;
  public user!: User;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.init();
  }

  public async openPlan(announcement: Announcement[]) {
    const modal = await this.modalController.create({
      component: PresentPlanComponent,
      cssClass: 'modal-wrapper',
      componentProps: {
        announcement: announcement[0],
      },
      enterAnimation: this.modalService.enterAnimation,
      leaveAnimation: this.modalService.leaveAnimation,
    });
    return await modal.present();
  }

  public init() {
    this.loadAnnouncement();
    this.loadUser();
  }

  private loadUser(): void {
    if (this.authService.getUser) {
      this.user = this.authService.getUser;
    }
  }

  private loadAnnouncement() {
    this.announcement$ = of(
      this.activatedRoute?.snapshot?.data?.['announcement']
    );
  }
}
