import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, of, Subscription } from 'rxjs';
import { Category, Image, HttpResponse } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { FormComponent } from '../form/form.component';
import { CategoryService } from '../services/category.service';

@Component({
  templateUrl: './management.page.html',
  styleUrls: [
    './management.page.scss',
    '../../users/management/management.page.scss',
  ],
})
export class ManagementPage implements OnInit {
  public category$: Observable<Category>;
  private write: Subscription;
  private $upload: Subscription;
  private $deleteIcon: Subscription;
  private form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.setCategory();
  }

  public sendFile(input: HTMLInputElement): Subscription {
    const FILE = input.files[0];
    if (FILE.type === 'image/svg+xml') {
      const category = this.categoryService.getCategory;
      return (this.$upload = this.categoryService
        .uploadIcon(category, FILE)
        .subscribe(
          (response: any) => this.success(response, response, this.$upload),
          (error: HttpErrorResponse) =>
            this.messageService.error(error, null, this.$upload)
        ));
    }
  }

  public loadFile(file: HTMLInputElement): void {
    return file.click();
  }

  public deleteIcon(image: Image, csrf: string): Subscription {
    // eslint-disable-next-line no-underscore-dangle
    image._csrf = csrf;
    return (this.$deleteIcon = this.categoryService
      .deleteIcon(image)
      .subscribe((image_: Image) =>
        this.messageDeleteIcon(image_, this.$deleteIcon)
      ));
  }

  // Destroy
  public async destroy(category: Category): Promise<void> {
    const { _csrf, slug, id } = category;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'destroy',
        label: 'Excluir',
        category: {
          _csrf,
          slug,
          password: '',
          id,
        },
      },
    });
    return await modal.present();
  }

  // State
  public state(category: Category): Subscription {
    const { slug, _csrf } = category;
    this.form = this.fb.group({ slug, _csrf });
    return (this.write = this.categoryService.state(this.form.value).subscribe(
      (category_: Category) =>
        this.categoryService.message(category_, null, this.write, 350),
      (error: HttpErrorResponse) =>
        this.authService.error(error, null, this.write)
    ));
  }

  // Name
  public async name(category: Category): Promise<void> {
    const { _csrf, name, description, slug } = category;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'name',
        label: 'Editar',
        category: { _csrf, name, description, slug },
      },
    });
    return await modal.present();
  }

  private setCategory(): void {
    this.categoryService.setCategory =
      this.activatedRoute.snapshot.data?.category;
    this.category$ = this.categoryService.categoryObservable;
  }

  private success(
    httpHeaderResponse: HttpHeaderResponse,
    httpResponse: HttpResponse,
    subscription: Subscription
  ): void {
    if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
      return this.complete(httpResponse, subscription);
    }
  }

  private complete(
    httpResponse: HttpResponse,
    subscription: Subscription
  ): void {
    const { body } = httpResponse;
    if (body) {
      this.update(body, subscription);
    }
  }

  private update(body: Body, subscription: Subscription): void {
    this.setIcon(body);
    this.messageService.success(
      'Icone adicionado com sucesso.',
      null,
      subscription,
      2000
    );
  }

  private messageDeleteIcon(image: Image, subscription: Subscription): void {
    this.setIcon(image);
    this.messageService.success(
      'Icone excluido com sucesso.',
      null,
      subscription,
      1000
    );
  }

  private setIcon(data: any): void {
    this.categoryService.setIcon = data;
    this.category$ = this.categoryService.categoryObservable;
  }
}
