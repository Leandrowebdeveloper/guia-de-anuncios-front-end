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
import { SearchAnnouncementService } from './service/search.service';
import { AnnouncementSearchMenuComponent } from './filter/filter-menu.component';
import { SearchAnnouncement } from 'src/app/interface';

@Component({
  selector: 'app-announcement-search-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class AnnouncementSearchComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<SearchbarCustomEvent>();
  public search$ = new Observable<any[]>();
  public triggerSearch$ = new Observable<SearchAnnouncement | void>(undefined);
  public show!: boolean;
  public error$ = new Subject<boolean>();

  public placeholder = 'Digite nome';
  public filterLabel!: string;

  public isDark!: boolean;
  public $isDark!: Subscription;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private searchAnnouncementService: SearchAnnouncementService,
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

  private getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }

  private loadDark() {
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

  public sendUrl(url: any): Promise<boolean> {
    const URL = this.router.url.split('/');
    return this.navCtrl.navigateForward([URL[1], 'anuncio', url?.slug]);
  }

  public async menuShow(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: AnnouncementSearchMenuComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
    await popover.onDidDismiss();
  }

  private searchList(): any {
    return (this.search$ = this.searchAnnouncementService.search.pipe(
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
    this.triggerSearch$ = this.searchAnnouncementService.getSearchBy.pipe(
      tap((filter: SearchAnnouncement | void) => {
        this.placeholder = 'Digite título';
        this.filterLabel = 'Pesquizar por título';

        if (count > 0) {
          this.popoverController.dismiss();
          count++;
        }
      })
    );
  }
}
