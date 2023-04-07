import { Pipe, PipeTransform } from '@angular/core';
import { Attributes } from '../../interface';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'isErros',
})
export class IsErrosPipe implements PipeTransform {
  transform(
    value: unknown,
    attr: Attributes,
    typeError:
      | 'pattern'
      | 'email'
      | 'required'
      | 'maxlength'
      | 'minlength'
      | 'mustMatch'
  ) {
    const controls = value as {
      [key: string]: AbstractControl<any, any>;
    };

    const err = controls[attr.name].errors;

    if (err) {
      return err[typeError];
    }
  }
}
