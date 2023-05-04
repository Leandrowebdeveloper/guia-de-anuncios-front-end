import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[cardYear]',
})
export class CardYearDirective {
  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    this.onInputChange(e);
  }

  @HostListener('keydown', ['$event']) onKeydown(e: any) {
    this.onInputChange(e);
  }

  private onInputChange(e: any) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^([1]{1})/g, '');
    e.target.value = value;
  }
}
