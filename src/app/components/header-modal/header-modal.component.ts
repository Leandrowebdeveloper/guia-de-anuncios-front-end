import { Component, Input, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-header-component-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent implements OnInit {
  @Input() label!: string;
  public isPlt: boolean;
  constructor(
    private plt: Platform,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.isPlt = this.plt.is('desktop');
  }

  public close(): Promise<boolean> {
    return this.modalController.dismiss();
  }
}
