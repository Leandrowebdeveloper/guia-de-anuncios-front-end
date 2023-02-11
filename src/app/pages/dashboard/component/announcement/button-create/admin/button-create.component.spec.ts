import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnouncementAdminButtonCreateComponent } from './button-create.component';

describe('AnnouncementAdminButtonCreateComponent', () => {
  let component: AnnouncementAdminButtonCreateComponent;
  let fixture: ComponentFixture<AnnouncementAdminButtonCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementAdminButtonCreateComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementAdminButtonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
