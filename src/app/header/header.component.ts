import { User } from 'src/app/interface';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AnimationController,
  Animation,
  Platform,
  IonPopover,
  NavController,
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() hidden?: boolean;
  @ViewChild('icons', { static: false }) figure: ElementRef;
  @ViewChild('popover') popover: IonPopover;

  isOpen = false;

  public user$: Observable<User>;
  public hasIos: boolean;

  constructor(
    private animationCtrl: AnimationController,
    private plt: Platform,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isPlatformIos();
    this.getUser();
  }

  ngAfterViewInit(): void {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(this.figure.nativeElement)
      .duration(700)
      .fromTo('transform', 'translateX(70px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
    animation.play();
  }

  public async close(): Promise<boolean> {
    return await this.popover.dismiss();
  }

  public presentPopover(e: Event): boolean {
    this.popover.event = e;
    return (this.isOpen = true);
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }

  private isPlatformIos(): boolean {
    return (this.hasIos = this.plt.is('ios'));
  }
}
