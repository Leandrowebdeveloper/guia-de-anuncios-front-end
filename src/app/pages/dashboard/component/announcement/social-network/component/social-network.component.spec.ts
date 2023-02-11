import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminManagementSocialNetworkComponent } from './social-network.component';

describe('AdminManagementSocialNetworkComponent', () => {
  let component: AdminManagementSocialNetworkComponent;
  let fixture: ComponentFixture<AdminManagementSocialNetworkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManagementSocialNetworkComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagementSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
