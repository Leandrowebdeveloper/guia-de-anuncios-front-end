import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StorageService } from 'src/app/services/storage/storage.service';
import { Plan } from 'src/app/interface';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class UserPlanService extends HttpService<Plan> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setPlan(value: Plan) {
    this.usersService.getUsers.plan = value;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public plan(plan: Plan): Observable<Plan | number[]> {
    return this.patch(plan, 'management/plan').pipe(
      tap((plan_: Plan) => (this.setPlan = plan_))
    );
  }
}
