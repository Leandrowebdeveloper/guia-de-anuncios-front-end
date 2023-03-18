import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ShowSocialNetWorkComponent } from './show-social-network.component';

describe('ShowSocialNetWorkComponent', () => {
  let component: ShowSocialNetWorkComponent;
  let fixture: ComponentFixture<ShowSocialNetWorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSocialNetWorkComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSocialNetWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
