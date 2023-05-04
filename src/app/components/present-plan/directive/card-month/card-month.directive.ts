import { Directive, HostListener } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Directive({
  selector: '[cardMonth]',
})
export class CardMonthDirective {
  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    this.onInputChange(e);
  }

  @HostListener('keydown', ['$event']) onKeydown(e: any) {
    this.onInputChange(e);
  }

  private onInputChange(e: any) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^([2-9]{1})/g, '');

    if (value[1]) {
      value = value.replace(/([3-9]{1})$/g, '');
    }

    e.target.value = value;
  }
}
