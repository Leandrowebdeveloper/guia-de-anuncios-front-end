import {
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DomController } from '@ionic/angular';
import { HeaderComponent } from 'src/app/header/header.component';

@Directive({
  selector: '[appScrollHide]',
})
export class ScrollHideDirective implements OnInit {
  @Input('appScrollHide') toolbar!: { header: HeaderComponent; footer: any };

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngOnInit() {
    this.domCtrl.read(() => {
      this.renderer.setStyle(
        this.toolbar.footer.footer['el'],
        'webkitTransition',
        'bottom 700ms'
      );

      this.renderer.setStyle(
        this.toolbar.header.header['el'],
        'webkitTransition',
        'top 700ms'
      );
      this.renderer.setStyle(
        this.toolbar.header.breadcrumb.breadcrumb['el'],
        'webkitTransition',
        'top 700ms'
      );
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll(e: any) {
    if (e.detail.scrollTop >= 30) {
      this.renderer.setStyle(this.toolbar.header.header['el'], 'top', '-76px');
      this.renderer.setStyle(
        this.toolbar.header.breadcrumb.breadcrumb['el'],
        'top',
        '-86px'
      );

      this.renderer.setStyle(
        this.toolbar.footer.footer['el'],
        'bottom',
        '-56px'
      );
    } else {
      this.renderer.setStyle(this.toolbar.footer.footer['el'], 'bottom', '0px');

      this.renderer.setStyle(this.toolbar.header.header['el'], 'top', '0px');
      this.renderer.setStyle(
        this.toolbar.header.breadcrumb.breadcrumb['el'],
        'top',
        '0px'
      );
    }
  }
}
