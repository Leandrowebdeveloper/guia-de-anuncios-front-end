import { Subscription } from 'rxjs';
import { IonSegment, SegmentCustomEvent } from '@ionic/angular';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-segment-announcement-component',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class AnnouncementSegmentComponent implements OnInit, OnDestroy {
  @Input() isAdmin: boolean;
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  @Output() togglePage = new EventEmitter<boolean>(true);
  private segmentIonChange: Subscription;
  constructor() {}

  ngOnDestroy(): void {
    this.segmentIonChange.unsubscribe();
  }

  ngOnInit() {
    this.init();
    this.toggleSegment();
  }

  private toggleSegment(): Subscription {
    return (this.segmentIonChange = this.segment.ionChange.subscribe(
      (segment: SegmentCustomEvent) => {
        const event: boolean = segment?.detail?.value === 'enabled';
        this.togglePage.emit(event);
      }
    ));
  }

  private init(): void {
    return this.togglePage.emit(true);
  }
}
