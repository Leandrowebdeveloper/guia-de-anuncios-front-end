import { Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CategorySearch } from 'src/app/interface';
import { SearchService } from '../service/service.service';

@Component({
  selector: 'app-search-menu',
  templateUrl: 'filter-menu.component.html',
  styleUrls: ['filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit, OnDestroy {
  public isIcon: CategorySearch;
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

  public searchBy(searchBy: CategorySearch): void {
    this.searchService.setSearchBy = searchBy;
  }

  public close(): Promise<boolean> {
    return this.popoverController.dismiss();
  }

  private filter(): void {
    this.$isIcon = this.searchService.getSearchBy.subscribe(
      (filter: CategorySearch) => (this.isIcon = filter)
    );
  }
}
