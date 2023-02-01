import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormSocialNetworkAnnouncementComponent } from './form.component';

describe('FormSocialNetworkAnnouncementComponent', () => {
  let component: FormSocialNetworkAnnouncementComponent;
  let fixture: ComponentFixture<FormSocialNetworkAnnouncementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormSocialNetworkAnnouncementComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSocialNetworkAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
