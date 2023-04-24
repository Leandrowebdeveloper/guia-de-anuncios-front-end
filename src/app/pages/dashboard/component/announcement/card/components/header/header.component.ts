import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/interface';
import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    | 'category'
    | 'state'
    | 'createdAt'
    | 'updatedAt'
    | 'title'
    | 'plan'
    | 'workDays'
    | 'blockade'
    | 'address'
    | 'contact'
    | 'citie'
    | 'like'
  >;
  public dark$ = new Observable<{ isDark: boolean }>();

  constructor(private moduleDarkService: ModuleDarkService) {}

  ngOnInit(): void {
    this.getDark();
  }

  private getDark(): void {
    this.dark$ = this.moduleDarkService.darkAsObservable();
  }
}
