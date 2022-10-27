import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertPage } from './advert.page';
import { AuthAdvertService } from './service/advert.service';

describe('AdvertPage, AuthAdvertService', () => {
  let component: AdvertPage;
  let fixture: ComponentFixture<AdvertPage>;

  let service: AuthAdvertService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertPage],
      imports: [IonicModule.forRoot()],
      providers: [AuthAdvertService],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(AuthAdvertService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AuthAdvertService', () => {
    expect(service).toBeTruthy();
  });
});
