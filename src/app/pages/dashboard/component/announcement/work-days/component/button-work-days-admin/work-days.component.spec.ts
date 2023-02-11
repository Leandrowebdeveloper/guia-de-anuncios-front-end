import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminManagementWorkDayComponent } from './work-days.component';

describe('AdminManagementWorkDayComponent', () => {
  let component: AdminManagementWorkDayComponent;
  let fixture: ComponentFixture<AdminManagementWorkDayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManagementWorkDayComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagementWorkDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
