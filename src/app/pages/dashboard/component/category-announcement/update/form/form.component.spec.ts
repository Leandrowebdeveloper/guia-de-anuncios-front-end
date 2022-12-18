import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCategoryUpdateComponent } from './form.component';

describe('FormCategoryUpdateComponent', () => {
  let component: FormCategoryUpdateComponent;
  let fixture: ComponentFixture<FormCategoryUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormCategoryUpdateComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
