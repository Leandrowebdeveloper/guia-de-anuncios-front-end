import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestroyAnnouncementComponent } from './destroy-announcement.component';

describe('DestroyAnnouncementComponent', () => {
  let component: DestroyAnnouncementComponent;
  let fixture: ComponentFixture<DestroyAnnouncementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DestroyAnnouncementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestroyAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
