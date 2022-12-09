import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnabledItemAnnouncementPage } from './enabled-item.page';

describe('EnabledItemAnnouncementPage', () => {
  let component: EnabledItemAnnouncementPage;
  let fixture: ComponentFixture<EnabledItemAnnouncementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EnabledItemAnnouncementPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EnabledItemAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
