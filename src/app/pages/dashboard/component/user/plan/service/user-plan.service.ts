import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StorageService } from 'src/app/services/storage/storage.service';
import { Plan } from 'src/app/interface';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class UserPlanService extends HttpService<
  Pick<Plan, 'password' | 'period' | 'type' | 'userId' | '_csrf' | 'message'>
> {
  constructor(
    http: HttpClient,
    public override storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setPlan(
    value: Pick<
      Plan,
      'password' | 'period' | 'type' | 'userId' | '_csrf' | 'message'
    >
  ) {
    if (value && this.usersService.getUsers) {
      this.usersService.getUsers.plan = value as Plan;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }

  public plan(
    plan: Pick<
      Plan,
      'password' | 'period' | 'type' | 'userId' | '_csrf' | 'message'
    >
  ): Observable<
    Pick<Plan, 'password' | 'period' | 'type' | 'userId' | '_csrf' | 'message'>
  > {
    return this.patch(plan, 'management/plan').pipe(
      tap(
        (
          plan_: Pick<
            Plan,
            'password' | 'period' | 'type' | 'userId' | '_csrf' | 'message'
          >
        ) => (this.setPlan = plan_)
      )
    );
  }
}
