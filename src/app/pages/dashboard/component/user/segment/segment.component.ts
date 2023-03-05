import { Subscription } from 'rxjs';
import { IonSegment, SegmentCustomEvent } from '@ionic/angular';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-segment-component',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit, OnDestroy {
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
    return (this.segmentIonChange = this.segment.ionChange.subscribe({
      next: (segment: SegmentCustomEvent) => {
        const event: boolean = segment?.detail?.value === 'enabled';
        this.togglePage.emit(event);
      },
    }));
  }

  private init(): void {
    return this.togglePage.emit(true);
  }
}
