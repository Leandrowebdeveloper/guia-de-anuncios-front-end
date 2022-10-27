import { Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserSearch } from 'src/app/interface';
import { SearchService } from '../service/service.service';

@Component({
  selector: 'app-user-search-menu',
  templateUrl: 'filter-menu.component.html',
  styleUrls: ['filter-menu.component.scss'],
})
export class UserSearchMenuComponent implements OnInit, OnDestroy {
  public isIcon: UserSearch;
  public $isIcon: Subscription;
  constructor(
    private searchService: SearchService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.filter();
  }

  ngOnDestroy(): void {
    this.$isIcon.unsubscribe();
  }

  public searchBy(searchBy: UserSearch): void {
    this.searchService.setSearchBy = searchBy;
  }

  public close(): Promise<boolean> {
    return this.popoverController.dismiss();
  }

  private filter(): void {
    this.$isIcon = this.searchService.getSearchBy.subscribe(
      (filter: UserSearch) => (this.isIcon = filter)
    );
  }
}
