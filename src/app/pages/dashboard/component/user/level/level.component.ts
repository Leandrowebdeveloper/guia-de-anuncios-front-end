import { FormComponent } from './form/form.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-level-component',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  @Input() user!: User;
  @Input() pageEnbled!: boolean;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async level(): Promise<void> {
    const { _csrf, level, slug, password } = this.user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'level',
        label: 'Editar nível',
        user: { _csrf, slug, password, level },
      },
    });
    return await modal.present();
  }
}
