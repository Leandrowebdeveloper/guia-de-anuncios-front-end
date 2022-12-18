import { Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Search } from 'src/app/interface';
import { SearchCategoryAnnouncementService } from '../service/search.service';

@Component({
  selector: 'app-search-menu-category-component',
  templateUrl: 'filter-menu.component.html',
  styleUrls: ['filter-menu.component.scss'],
})
export class FilterMenuCategoryComponent implements OnInit, OnDestroy {
  public isIcon: Search;
  public $isIcon: Subscription;
  constructor(
    private searchCategoryAnnouncementService: SearchCategoryAnnouncementService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.filter();
  }

  ngOnDestroy(): void {
    this.$isIcon.unsubscribe();
  }

  public searchBy(searchBy: Search): void {
    this.searchCategoryAnnouncementService.setSearchBy = searchBy;
  }

  public close(): Promise<boolean> {
    return this.popoverController.dismiss();
  }

  private filter(): void {
    this.$isIcon = this.searchCategoryAnnouncementService.getSearchBy.subscribe(
      (filter: Search) => (this.isIcon = filter)
    );
  }
}
