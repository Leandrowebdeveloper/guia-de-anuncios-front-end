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
import { SearchCategoryAnnouncementService } from './service/search.service';
import { FilterMenuCategoryComponent } from './filter/filter-menu.component';
import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';

@Component({
  selector: 'app-search-category-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchCategoryComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<SearchbarCustomEvent>();
  public search$ = new Observable<any[]>();
  public show!: boolean;
  public error$ = new Subject<boolean>();

  public placeholder = 'Digite nome';

  public isDark!: boolean;

  private $isDark!: Subscription;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private searchCategoryAnnouncementService: SearchCategoryAnnouncementService,
    private popoverController: PopoverController,
    private moduleDarkService: ModuleDarkService
  ) {}

  ngOnDestroy(): void {
    this.$isDark.unsubscribe();
  }

  ngOnInit() {
    this.searchList();
    this.getDark();
    this.toggleDark();
  }
  private getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }

  private toggleDark(): void {
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

  public sendUrl(url: any): Promise<boolean> | void {
    const URL = this.router.url.split('/');
    if (URL.includes('categorias')) {
      return this.navCtrl.navigateForward([
        URL[1],
        'admin',
        'categoria',
        url?.slug,
      ]);
    }
  }

  public async menuShow(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: FilterMenuCategoryComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  private searchList(): any {
    return (this.search$ = this.searchCategoryAnnouncementService.search.pipe(
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
}
