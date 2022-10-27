import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { UsersGaleryComponent } from 'src/app/components/galery/users/galery-component';
import { User } from 'src/app/interface';
import { FormComponent } from 'src/app/pages/dashboard/administrator/users/form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {
  public user$: Observable<User>;
  private write: Subscription;
  private form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.setUser();
  }

  // Avatar
  public async avatar(user: User): Promise<void> {
    const modal = await this.modalController.create({
      component: UsersGaleryComponent,
      componentProps: {
        user,
      },
    });
    return await modal.present();
  }

  // Destroy
  public async destroy(user: User): Promise<void> {
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

  // Email
  public async email(user: User): Promise<void> {
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

  // State
  public state(user: User): Subscription {
    const { slug, _csrf } = user;
    this.form = this.fb.group({ slug, _csrf });
    return (this.write = this.usersService.state(this.form.value).subscribe(
      (user_: User) => this.usersService.message(user_, null, this.write, 350),
      (error: HttpErrorResponse) =>
        this.authService.error(error, null, this.write)
    ));
  }

  // Blockade
  public blockade(user: User): Subscription {
    const { slug, _csrf } = user;
    this.form = this.fb.group({ slug, _csrf });
    return (this.write = this.usersService.blockade(this.form.value).subscribe(
      (user_: User) => this.usersService.message(user_, null, this.write, 350),
      (error: HttpErrorResponse) =>
        this.authService.error(error, null, this.write)
    ));
  }

  // Name
  public async name(user: User): Promise<void> {
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

  // Password
  public async password(user: User): Promise<void> {
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

  // Level
  public async level(user: User): Promise<void> {
    const { _csrf, level, slug, password } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'level',
        label: 'Editar',
        user: { _csrf, slug, password, level },
      },
    });
    return await modal.present();
  }

  private setUser(): void {
    this.usersService.setUsers = this.activatedRoute.snapshot.data?.user;
    this.user$ = this.usersService.userObservable;
  }
}
