import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpsService {
  public static currency(value: any) {
    let val = String(value).replace(/\D/g, '');
    val = (Number(val) / 100).toFixed(2) + '';
    val = val.replace('.', ',');
    return val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  public static numberFormat(value: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  public delay(
    callback: any,
    time: 350 | 500 | 1000 | 1500 | 2000 | 2500 | 3000 | 3500
  ): any {
    return setTimeout(callback, time);
  }

  public correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(
    form: FormGroup,
    patchValue: object
  ): FormGroup {
    form.patchValue(patchValue);
    form.markAsPristine();
    return this.fixErrorMessages(form);
  }

  public isAuthorizeTheRoute(form: FormGroup): boolean {
    return form?.dirty;
  }

  public messageAuthorizeTheRoute(): boolean {
    return confirm(
      'As alterações no formulário não foram salvas e serão descartadas, deseja prosseguir?'
    );
  }

  private fixErrorMessages(form: FormGroup): FormGroup {
    Object.keys(form.controls).forEach((element) =>
      form.controls[element].setErrors(null)
    );
    return form;
  }
}
