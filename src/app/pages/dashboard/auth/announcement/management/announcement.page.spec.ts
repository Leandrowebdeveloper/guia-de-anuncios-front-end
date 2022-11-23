import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnouncementPage } from './announcement.page';
import { AuthAnnouncementService } from './service/announcement.service';

describe('AnnouncementPage, AuthAnnouncementService', () => {
  let component: AnnouncementPage;
  let fixture: ComponentFixture<AnnouncementPage>;

  let service: AuthAnnouncementService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementPage],
      imports: [IonicModule.forRoot()],
      providers: [AuthAnnouncementService],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(AuthAnnouncementService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AuthAnnouncementService', () => {
    expect(service).toBeTruthy();
  });
});
