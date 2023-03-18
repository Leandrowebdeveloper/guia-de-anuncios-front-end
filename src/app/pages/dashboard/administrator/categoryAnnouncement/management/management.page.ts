import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interface';
import { CategoryService } from '../services/category.service';

@Component({
  templateUrl: './management.page.html',
  styleUrls: [
    './management.page.scss',
    '../../users/management/management.page.scss',
  ],
})
export class ManagementPage implements OnInit {
  public category$: Observable<Category>;
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.setCategory();
  }

  public back(): void {
    this.navCtrl.back();
  }

  private setCategory(): void {
    this.categoryService.setCategory =
      this.activatedRoute.snapshot.data?.category;
    this.category$ = this.categoryService.categoryObservable;
  }
}
