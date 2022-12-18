import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryAnnouncementStateComponent } from './state.component';

describe('CategoryAnnouncementStateComponent', () => {
  let component: CategoryAnnouncementStateComponent;
  let fixture: ComponentFixture<CategoryAnnouncementStateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAnnouncementStateComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryAnnouncementStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
