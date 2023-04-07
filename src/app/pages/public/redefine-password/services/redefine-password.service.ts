import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/interface';
import { NavController } from '@ionic/angular';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/utilities/message/message.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class RedefinePasswordService extends HttpService<User> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private navCtrl: NavController,
    private helpsService: HelpsService,
    private messageService: MessageService
  ) {
    super(http, storageService);
    this.setApi = `redefine-password`;
  }

  public passwordRecover(user: User): Observable<User> {
    return this.create(user);
  }

  public error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    return this.messageService.error(error, loading, subscribe);
  }

  public goToLoginPage(): number {
    return this.helpsService.delay(
      () => this.navCtrl.navigateForward('/entrar'),
      2500
    );
  }
}
