import { EMPTY, Observable, Subject } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  SearchbarCustomEvent,
  NavController,
  PopoverController,
} from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchService } from './service/service.service';
import { UserSearchMenuComponent } from './filter/filter-menu.component';
import { UserSearch } from 'src/app/interface';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<SearchbarCustomEvent>();
  public search$ = new Observable<any[]>();
  public triggerSearch$ = new Observable<UserSearch>(undefined);
  public show: boolean;
  public error$ = new Subject<boolean>();

  public placeholder = 'Digite nome';
  public filterLabel: string;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private searchService: SearchService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.searchList();
    this.setFilterLabelAndPlaceholder();
  }

  public research(search: any): void {
    if (search.target?.value?.length === 0) {
      this.show = false;
    }
    return this.search.emit(search);
  }

  public sendUrl(url: any): Promise<boolean> {
    const URL = this.router.url.split('/');
    if (URL.includes('usuarios')) {
      return this.navCtrl.navigateForward([
        URL[1],
        'admin',
        'manutencao',
        'usuario',
        url?.slug,
      ]);
    }
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
    return (this.search$ = this.searchService.search.pipe(
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
    this.triggerSearch$ = this.searchService.getSearchBy.pipe(
      tap((filter: UserSearch) => {
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
