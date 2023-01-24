import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnabledItemAdminAnnouncementPage } from './enabled-item.page';

describe('EnabledItemAdminAnnouncementPage', () => {
  let component: EnabledItemAdminAnnouncementPage;
  let fixture: ComponentFixture<EnabledItemAdminAnnouncementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EnabledItemAdminAnnouncementPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EnabledItemAdminAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
