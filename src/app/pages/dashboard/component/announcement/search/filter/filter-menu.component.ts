import { Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SearchAnnouncement } from 'src/app/interface';
import { SearchAnnouncementService } from '../service/search.service';

@Component({
  selector: 'app-announcement-search-menu',
  templateUrl: 'filter-menu.component.html',
  styleUrls: ['filter-menu.component.scss'],
})
export class AnnouncementSearchMenuComponent implements OnInit, OnDestroy {
  public isIcon!: SearchAnnouncement | void;
  public $isIcon!: Subscription;
  constructor(
    private searchAnnouncementService: SearchAnnouncementService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.filter();
  }

  ngOnDestroy(): void {
    this.$isIcon.unsubscribe();
  }

  public searchBy(searchBy: SearchAnnouncement): void {
    this.searchAnnouncementService.setSearchBy = searchBy;
  }

  public close(): Promise<boolean> {
    return this.popoverController.dismiss();
  }

  private filter(): void {
    this.$isIcon = this.searchAnnouncementService.getSearchBy.subscribe({
      next: (filter: void | SearchAnnouncement) => (this.isIcon = filter),
    });
  }
}
