import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[cardNumbers]',
})
export class CardNumbersDirective {
  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    this.onInputChange(e);
  }

  @HostListener('keydown', ['$event']) onKeydown(e: any) {
    this.onInputChange(e);
  }

  private onInputChange(e: any) {
    let value = String(e.target.value);

    value = value.replace(/\D/g, '');
    e.target.value = value;
  }
}
