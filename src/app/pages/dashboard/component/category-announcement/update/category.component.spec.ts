import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryAnnouncementUpdateComponent } from './category.component';

describe('CategoryAnnouncementUpdateComponent', () => {
  let component: CategoryAnnouncementUpdateComponent;
  let fixture: ComponentFixture<CategoryAnnouncementUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAnnouncementUpdateComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryAnnouncementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
