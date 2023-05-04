import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[cardCvv]',
})
export class CardCvvDirective {
  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    this.onInputChange(e);
  }

  @HostListener('keydown', ['$event']) onKeydown(e: any) {
    this.onInputChange(e);
  }

  private onInputChange(e: any) {
    let value = e.target.value;
    e.target.value = value.replace(/\D/g, '');
  }
}
