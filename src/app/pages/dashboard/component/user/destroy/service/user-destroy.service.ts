import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { tap } from 'rxjs/operators';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { UserDestroy } from '../interface';

@Injectable()
export class UserDestroyService extends HttpService<User> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private navCtrl: NavController,
    private adminUsersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public delete(user: Required<Pick<User, UserDestroy>>): Observable<User> {
    return this.destroy(user as User, `management/trash`).pipe(
      tap((user_: User) => {
        if (user_) {
          this.adminUsersService.setDelete = user_;
          return setTimeout(
            () =>
              this.navCtrl.navigateBack([
                '/painel-de-controle',
                'admin',
                'usuarios',
              ]),
            3600
          );
        }
      })
    );
  }
}
