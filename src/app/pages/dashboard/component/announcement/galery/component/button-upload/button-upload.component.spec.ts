import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleryButtonUploadComponent } from './button-upload.component';

describe('GaleryButtonUploadComponent', () => {
  let component: GaleryButtonUploadComponent;
  let fixture: ComponentFixture<GaleryButtonUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GaleryButtonUploadComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleryButtonUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
