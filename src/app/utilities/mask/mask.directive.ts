import { Directive, Attribute, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mask]',
})
export class MaskDirective {
  private regex = new RegExp('[^0-9-).(]', 'g');
  private pattern: string;

  constructor(@Attribute('mask') pattern: string) {
    this.pattern = pattern;
  }

  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    this.onInputChange(e);
  }

  @HostListener('keydown', ['$event']) onKeydown(e: any) {
    this.onInputChange(e);
  }

  private onInputChange(e: any) {
    try {
      let value = e.target?.value;
      const pattern = this.pattern;
      const reserve = pattern.replace(/\*/, 'g');
      let applied = '';
      let ordinal = 0;

      if (
        e.keyCode === 8 ||
        e.key === 'Backspace' ||
        e.keyCode === 46 ||
        e.key === 'Delete'
      ) {
        if (value.length) {
          //remove all trailing formatting
          while (
            value.length &&
            pattern[value.length] &&
            pattern[value.length] !== '*'
          ) {
            value = value.substring(0, value.length - 1);
          }
          //remove all leading formatting to restore placeholder
          if (pattern.substring(0, value.length).indexOf('*') < 0) {
            value = value.substring(0, value.length - 1);
          }
        }
      }

      //apply mask characters
      for (let i = 0; i < value.length; i++) {
        //enforce pattern limit
        if (i < pattern.length) {
          //match mask
          if (value[i] === pattern[ordinal]) {
            applied += value[i];
            ordinal++;
          } else if (reserve.indexOf(value[i]) > -1) {
            //skip other reserved characters
          } else {
            //apply leading formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
            applied += value[i];
            ordinal++;
            //apply trailing formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
          }
        }
      }
      e.target.value = applied.replace(this.regex, '');
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
