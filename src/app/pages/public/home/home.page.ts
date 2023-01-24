import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from 'src/app/interface';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public category$: Observable<Category[]>;
  public error$ = new Subject<boolean>();
  public isDesktop: boolean;

  constructor(private homeService: HomeService, private plt: Platform) {}

  ngOnInit(): void {
    this.init();
    this.isDesktop = this.plt.is('desktop');
  }

  private init(): Observable<Category[]> {
    return (this.category$ = this.homeService.asObservable().pipe(
      catchError((error) => {
        this.error$.next(true);
        return EMPTY;
      })
    ));
  }
}
