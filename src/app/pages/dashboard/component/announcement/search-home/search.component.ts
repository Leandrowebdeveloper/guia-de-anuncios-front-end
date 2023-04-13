import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { SearchHomeAnnouncementService } from './service/search-home.service';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-announcement-search-home-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class AnnouncementSearchHomeComponent implements OnInit, OnDestroy {
  public search$ = new Observable<Announcement[]>();
  public show!: boolean;
  public error$ = new Subject<boolean>();

  public placeholder = 'Pesquiza';

  public isDark!: boolean;
  public $isDark!: Subscription;

  constructor(
    private navCtrl: NavController,
    private searchHomeAnnouncementService: SearchHomeAnnouncementService,
    private moduleDarkService: ModuleDarkService
  ) {}

  ngOnDestroy(): void {
    this.$isDark.unsubscribe();
  }

  ngOnInit() {
    this.getDark();
    this.loadDark();
  }

  private getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }

  private loadDark(): void {
    this.$isDark = this.moduleDarkService
      .toggleEvent()
      .subscribe((dark: boolean) => (this.isDark = dark));
  }

  public research(search: any): void {
    const { value } = search.target;
    if (value?.length <= 2) {
      this.show = false;
      return;
    }
    this.search(value);
  }

  private search(value: any) {
    this.search$ = this.searchHomeAnnouncementService
      .getSearch({ title: value, description: value })
      .pipe(
        tap((search: any[]) => {
          if (search.length >= 0) {
            this.show = true;
          }
        }),
        catchError((error) => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  public sendUrl(url: any): Promise<boolean> {
    return this.navCtrl.navigateForward(['pagina', url?.slug]);
  }
}
