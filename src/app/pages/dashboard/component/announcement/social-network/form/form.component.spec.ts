import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AnnouncementFormSocialNetworkComponent } from './form.component';

describe('AnnouncementFormSocialNetworkComponent', () => {
  let component: AnnouncementFormSocialNetworkComponent;
  let fixture: ComponentFixture<AnnouncementFormSocialNetworkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementFormSocialNetworkComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementFormSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
