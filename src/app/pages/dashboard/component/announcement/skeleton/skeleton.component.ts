import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-announcement',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() {}

  ngOnInit() {}
}
