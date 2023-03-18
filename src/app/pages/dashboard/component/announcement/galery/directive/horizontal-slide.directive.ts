import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
})
export class HorizontalScrollDirective {
  private element: HTMLElement;
  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.classList.add('show');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.classList.remove('show');
  }
}
