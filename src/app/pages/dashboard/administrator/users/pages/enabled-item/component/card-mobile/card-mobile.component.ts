import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-user-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: [
    './card-mobile.component.scss',
    './../card-desktop/card-desktop.component.scss',
  ],
})
export class CardMobileComponent implements OnInit {
  @Input() users!: User[];
  constructor() {}

  ngOnInit() {}
}
