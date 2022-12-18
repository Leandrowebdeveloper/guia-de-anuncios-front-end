import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage-angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterMenuCategoryComponent } from './filter-menu.component';

describe('FilterMenuCategoryComponent', () => {
  let component: FilterMenuCategoryComponent;
  let fixture: ComponentFixture<FilterMenuCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMenuCategoryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
