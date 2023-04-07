import { GaleryComponent } from './../galery-component';
import { TestBed } from '@angular/core/testing';
import { HorizontalScrollDirective } from './horizontal-slide.directive';

describe('HorizontalScrollDirective', () => {
  const fixture = TestBed.configureTestingModule({
    declarations: [HorizontalScrollDirective, GaleryComponent],
  }).createComponent(GaleryComponent);
  beforeEach(() => {
    fixture.detectChanges(); // initial binding
  });
});
