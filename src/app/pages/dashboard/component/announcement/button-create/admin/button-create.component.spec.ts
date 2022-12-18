import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminButtonCreateAnnouncementComponent } from './button-create.component';

describe('AdminButtonCreateAnnouncementComponent', () => {
  let component: AdminButtonCreateAnnouncementComponent;
  let fixture: ComponentFixture<AdminButtonCreateAnnouncementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdminButtonCreateAnnouncementComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminButtonCreateAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
