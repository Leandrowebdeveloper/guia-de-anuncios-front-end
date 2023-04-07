import { Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Search } from 'src/app/interface';
import { SearchUserService } from '../service/search.service';

@Component({
  selector: 'app-user-search-menu',
  templateUrl: 'filter-menu.component.html',
  styleUrls: ['filter-menu.component.scss'],
})
export class UserSearchMenuComponent implements OnInit, OnDestroy {
  public isIcon!: Search;
  public $isIcon!: Subscription;
  constructor(
    private searchUserService: SearchUserService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.filter();
  }

  ngOnDestroy(): void {
    this.$isIcon.unsubscribe();
  }

  public searchBy(searchBy: Search): void {
    this.searchUserService.setSearchBy = searchBy;
  }

  public close(): Promise<boolean> {
    return this.popoverController.dismiss();
  }

  private filter(): void {
    this.$isIcon = this.searchUserService.getSearchBy.subscribe({
      next: (filter: Search | void) => {
        if (filter) this.isIcon = filter;
      },
    });
  }
}
