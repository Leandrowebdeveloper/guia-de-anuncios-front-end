import { tap, delay, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Search } from 'src/app/interface';
import { AdminUsersService } from '../../services/admin-users.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import {
  AlertController,
  InfiniteScrollCustomEvent,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { SearchUserService } from 'src/app/pages/dashboard/component/user/search/service/search.service';

export type DeletedItemUser =
  | 'name'
  | 'plan'
  | 'image'
  | 'level'
  | 'slug'
  | 'state'
  | 'blockade'
  | 'id'
  | 'createdAt'
  | 'updatedAt';

@Component({
  selector: 'app-deleted-item-user',
  templateUrl: './deleted-item-user.page.html',
  styleUrls: ['./deleted-item-user.page.scss', '../../users.page.scss'],
})
export class DeletedItemUserPage implements OnInit, OnDestroy {
  public users$: Observable<Pick<User, DeletedItemUser>[]>;
  public toggleList: boolean;
  public users: Pick<User, DeletedItemUser>[];
  public error = new Subject<boolean>();
  public endListUser = true;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public menssage: boolean;

  private $users: Subscription;
  private $search: Subscription;
  private $searchBy: Subscription;
  private $delete: Subscription;

  private limit = 12;
  private offset = 0;
  private page = 1;
  private searchBy: object;

  constructor(
    private usersService: AdminUsersService,
    private helpService: HelpsService,
    private searchUserService: SearchUserService,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  private get getSearchBy(): object {
    return this.searchBy;
  }

  private set setSearchBy(value: Search) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.findUsers();
    this.initSearchBy();
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
  }

  public refresher(event: any): void {
    this.findUsers();
    event.target.complete();
  }

  public hideMenssage() {
    this.menssage = true;
  }

  public search(event: SearchbarCustomEvent): Subscription {
    if (event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event?.target?.value);
      return (this.$search = this.usersService.searchBy(data).subscribe({
        next: (user: Pick<User, DeletedItemUser>[]) => {
          this.searchUserService.search = user;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        },
      }));
    }
  }

  public findMoreUsers(event: any): Subscription {
    this.calculatePagination();
    return (this.$users = this.usersService
      .index(`management/deleted`, { limit: this.limit, offset: this.offset })
      .subscribe({
        next: (user: Pick<User, DeletedItemUser>[]) =>
          this.success(event, user),
        error: (error: HttpErrorResponse) => this.error.next(true),
        complete: () => this.helpService.delay(this.$users.unsubscribe(), 2000),
      }));
  }

  public async restore(
    user: Pick<User, DeletedItemUser>,
    index: number
  ): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Restaurar',
      subHeader: user?.name,
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
            const data: Pick<User, 'slug' | 'password' | '_csrf'> = {
              ...event,
              slug: user?.slug,
            };
            const loading = this.loadingService.show('Excluindo usuário...');
            return (this.$delete = this.usersService.restore(data).subscribe({
              next: (user_: User) => this.messsage(user_, index, loading),
              error: (error: HttpErrorResponse) =>
                this.messageService.error(error, loading, this.$delete),
            }));
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

  // Destroy
  public async destroy(
    user: Pick<User, DeletedItemUser>,
    index: number
  ): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Excluir',
      subHeader: user?.name,
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
            const data: User = {
              ...event,
              slug: user?.slug,
            };
            return this.delete(data, index);
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

  private orderBy(search: Search): void {
    if (!this.users) {
      return;
    }
    switch (search) {
      case 'name':
        this.users.sort((a, b) => a?.name < b?.name && -1);
        break;
      case 'createdAt':
        this.users.sort((a, b) => a?.createdAt > b?.createdAt && -1);
        break;
      case 'updatedAt':
        this.users.sort((a, b) => a?.updatedAt > b?.updatedAt && -1);
        break;
      case 'blockade':
        this.users.sort((a, b) => a?.blockade > b?.blockade && -1);
        break;
      case 'state':
        this.users.sort((a, b) => a?.state > b?.state && -1);
        break;
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchUserService.getSearchBy.subscribe({
      next: (filter: Search) => {
        if (
          filter === 'firstName' ||
          filter === 'lastName' ||
          filter === 'email'
        ) {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'firstName';
          this.orderBy(filter);
        }
      },
    });
  }

  private setDataSearch(value: string): object {
    let data: object;
    if (this.getSearchBy) {
      this.searchBuild(value);
      data = this.getSearchBy;
    } else {
      data = { firstName: value };
    }
    return data;
  }

  private searchBuild(value: string) {
    const key = Object.keys(this.getSearchBy)[0];
    this.getSearchBy[key] = value;
  }

  private findUsers(): Observable<Pick<User, DeletedItemUser>[]> {
    return (this.users$ = this.usersService
      .index(`management/deleted`, { limit: this.limit, offset: this.offset })
      .pipe(
        delay(300),
        tap((user: Pick<User, DeletedItemUser>[]) => {
          setTimeout(() => (this.menssage = false), 300);
          return (this.users = user);
        }),
        catchError((error: HttpErrorResponse) => {
          setTimeout(() => (this.menssage = false), 300);
          this.error.next(true);
          return EMPTY;
        })
      ));
  }

  private calculatePagination(): void {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }

  private success(
    event: InfiniteScrollCustomEvent,
    user: Pick<User, DeletedItemUser>[]
  ): void {
    this.setMoreData(user);
    this.updateScrollEvent(event, user);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    user: Pick<User, DeletedItemUser>[]
  ): void {
    event.target.complete();
    if (user.length < 8) {
      this.endListUser = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(user: Pick<User, DeletedItemUser>[]): void {
    return user.forEach((item: User) => this.users.push(item));
  }

  // Destroy
  private delete(user: User, index: number): Subscription {
    const loading = this.loadingService.show('Excluindo usuário...');
    return (this.$delete = this.usersService.dropd(user).subscribe({
      next: (user_: User) => this.messsage(user_, index, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$delete),
    }));
  }

  private messsage(
    user: User,
    index: number,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.users.splice(index, 1);
    return this.messageService.success(user?.message, loading, this.$delete);
  }
}
