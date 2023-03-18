import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfigForm } from './config';

import { FormComponent } from './form.component';
import { FormServices } from './services/form.service';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  let componentPasswordStrengthComponent: PasswordStrengthComponent;
  let fixturePasswordStrength: ComponentFixture<PasswordStrengthComponent>;

  let formServices: FormServices;

  let configForm: ConfigForm;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent, PasswordStrengthComponent ],
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule, ReactiveFormsModule],
      providers: [ConfigForm, FormBuilder, FormServices],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixturePasswordStrength = TestBed.createComponent(PasswordStrengthComponent);
    componentPasswordStrengthComponent = fixturePasswordStrength.componentInstance;
    fixturePasswordStrength.detectChanges();
  }));

  beforeEach(() => {
    configForm = TestBed.inject(ConfigForm);
    formServices = TestBed.inject(FormServices);
  });

  it('formServices', () => {
    expect(formServices).toBeTruthy();
  });

  it('component', () => {
    expect(component).toBeTruthy();
  });

  it('component', () => {
    expect(componentPasswordStrengthComponent).toBeTruthy();
  });
});
