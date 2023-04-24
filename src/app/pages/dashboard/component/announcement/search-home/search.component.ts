import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';
import { EMPTY, Observable, Subject, Subscription, of } from 'rxjs';
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
export class AnnouncementSearchHomeComponent implements OnInit {
  public search$ = new Observable<Announcement[]>();
  public show!: boolean;
  public error$ = new Subject<boolean>();

  public placeholder = 'Pesquiza';

  public dark$ = new Observable<{ isDark: boolean }>();

  constructor(
    private navCtrl: NavController,
    private searchHomeAnnouncementService: SearchHomeAnnouncementService,
    private moduleDarkService: ModuleDarkService
  ) {}

  ngOnInit() {
    this.getDark();
  }

  private getDark(): void {
    this.dark$ = this.moduleDarkService.darkAsObservable();
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
