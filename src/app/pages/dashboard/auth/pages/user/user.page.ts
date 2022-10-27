import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { UserGaleryComponent } from 'src/app/components/galery/auth/galery-component';
import { User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public user$: Observable<User>;
  private write: Subscription;
  private form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  //Avatar
  public async avatar(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const modal = await this.modalController.create({
      component: UserGaleryComponent,
      componentProps: {
        user,
      },
    });
    return await modal.present();
  }

  //State
  // public state(user: User): Subscription {
  //   if (user?.blockade) {
  //     return;
  //   }
  //   const { slug, _csrf } = user;
  //   this.form = this.fb.group({ slug, _csrf });
  //   return (this.write = this.authService.state(this.form.value).subscribe(
  //     (user_: User) => this.authService.message(user_, null, this.write, 350),
  //     (error: HttpErrorResponse) =>
  //       this.authService.error(error, null, this.write)
  //   ));
  // }

  //Name
  public async name(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const { _csrf, firstName, lastName, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'name',
        label: 'Editar',
        user: { _csrf, firstName, lastName, slug },
      },
    });
    return await modal.present();
  }

  //Email
  public async email(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const { _csrf, email, slug, password } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'email',
        label: 'Editar',
        user: { _csrf, email, slug, password },
      },
    });
    return await modal.present();
  }

  // Password
  public async password(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'password',
        label: 'Editar',
        user: {
          _csrf,
          password,
          passwordConfirmation: null,
          passwordCurrent: null,
          slug,
        },
      },
    });
    return await modal.present();
  }

  // Password
  public async passwordCreate(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'passwordCreate',
        label: 'Cadastrar',
        user: {
          _csrf,
          password,
          passwordConfirmation: null,
          slug,
        },
      },
    });
    return await modal.present();
  }

  // Delete
  public async destroy(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'destroy',
        label: 'Excluir',
        user: {
          _csrf,
          password,
          slug,
        },
      },
    });
    return await modal.present();
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }
}
