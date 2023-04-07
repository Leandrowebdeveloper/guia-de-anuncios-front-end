import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  SearchbarCustomEvent,
  NavController,
  PopoverController,
} from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchUserService } from './service/search.service';
import { UserSearchMenuComponent } from './filter/filter-menu.component';
import { Search } from 'src/app/interface';

@Component({
  selector: 'app-user-search-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchUserComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<SearchbarCustomEvent>();
  public search$ = new Observable<any[]>();
  public triggerSearch$ = new Observable<Search | void>(undefined);
  public show!: boolean;
  public error$ = new Subject<boolean>();

  public placeholder = 'Digite nome';
  public filterLabel!: string;

  public isDark!: boolean;
  private $isDark!: Subscription;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private searchUserService: SearchUserService,
    private popoverController: PopoverController,
    private moduleDarkService: ModuleDarkService
  ) {}

  ngOnDestroy(): void {
    this.$isDark.unsubscribe();
  }

  ngOnInit() {
    this.searchList();
    this.setFilterLabelAndPlaceholder();
    this.getDark();
    this.loadDark();
  }

  public getDark(): void {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }

  public loadDark(): void {
    this.$isDark = this.moduleDarkService
      .toggleEvent()
      .subscribe((dark: boolean) => (this.isDark = dark));
  }

  public research(search: any): void {
    if (search.target?.value?.length === 0) {
      this.show = false;
    }
    return this.search.emit(search);
  }

  public sendUrl(url: any): Promise<boolean> | null {
    const URL = this.router.url.split('/');
    if (URL.includes('usuarios')) {
      return this.navCtrl.navigateForward([
        URL[1],
        'admin',
        'usuario',
        url?.slug,
      ]);
    }
    return null;
  }

  public async menuShow(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: UserSearchMenuComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  private searchList(): any {
    return (this.search$ = this.searchUserService.search.pipe(
      tap((search: any[]) => {
        if (search.length >= 0) {
          this.show = true;
        }
      }),
      catchError((error) => {
        this.error$.next(true);
        return EMPTY;
      })
    ));
  }

  private setFilterLabelAndPlaceholder(): void {
    let count = 0;
    this.triggerSearch$ = this.searchUserService.getSearchBy.pipe(
      tap((filter: Search | void) => {
        switch (filter) {
          case 'firstName':
            this.placeholder = 'Digite nome';
            this.filterLabel = 'Pesquizar por nome';
            break;
          case 'lastName':
            this.placeholder = 'Digite sobrenome';
            this.filterLabel = 'Pesquizar por sobrenome';
            break;
          case 'email':
            this.placeholder = 'Digite email';
            this.filterLabel = 'Pesquizar por email';
            break;

          default:
            this.placeholder = 'Digite nome';
            this.filterLabel = 'Pesquizar por nome';
            break;
        }
        if (count > 0) {
          this.popoverController.dismiss();
          count++;
        }
      })
    );
  }
}
