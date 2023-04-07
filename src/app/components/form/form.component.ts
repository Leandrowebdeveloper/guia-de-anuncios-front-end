import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  Output,
  Input,
  EventEmitter,
  Component,
  OnInit,
  AfterContentChecked,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormServices } from './services/form.service';
import { ConfigForm } from './config';
import { Attributes } from './interface';
import { AttrButton } from '../../pages/public/system-access/components/buttons/interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterContentChecked {
  @Input() inputConfig!: any;
  @Input() attrButton!: AttrButton;
  @Output() submitDataForm = new EventEmitter<FormGroup>(undefined);
  @Output() exportForm = new EventEmitter<FormGroup>(undefined);
  public form!: FormGroup;
  public buildInputs!: Attributes[];
  public submitted = false;
  public visiblePassword!: boolean;
  public isPageTheLogin!: boolean;
  public config: any;
  public message!: string;
  constructor(
    private configForm: ConfigForm,
    private fb: FormBuilder,
    private formServices: FormServices,
    private router: Router,
    private plt: Platform,
    private changeDetector: ChangeDetectorRef
  ) {}

  public get f(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.form.controls;
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
    this.formBuild();
    this.inputFilter();
    this.isNewPassword();
    this.isNewEmail();
    this.isDestroy();
    this.importForm();
    this.isPageLogin();
    this.disableValidate();
    this.tinymce();
    this.orderImputsBlockade();
    this.orderImputsMessages();
    this.orderImputsAddress();
  }

  public setPediod(period: '03' | '06' | '12') {
    this.form.patchValue({ period });
  }

  public onSubmit(): void {
    if (this.form.value?.type === 'free') {
      this.form.patchValue({ period: null });
    } else if (this.form.value?.period === null) {
      this.message = '* obrigatório';
      return;
    } else if (
      this.form.value?.facebook === null &&
      this.form.value?.instagran === null
    ) {
      this.f['facebook'].setErrors({ required: true });
      this.f['instagran'].setErrors({ required: true });
    }

    this.submitted = true;
    if (this.form.pristine || this.form.invalid) {
      return;
    }

    return this.sendDataForm();
  }

  public showPassword(): boolean {
    return (this.visiblePassword = !this.visiblePassword);
  }

  private sendDataForm(): void {
    return this.submitDataForm.emit(this.form);
  }

  private isPageLogin(): void {
    const { url } = this.router;
    this.isPageTheLogin = url === '/entrar' || url === '/entrar/admin';
  }

  private disableValidate(): void {
    if (this.isPageTheLogin) {
      this.form.get('password')?.clearValidators();
      this.form.get('password')?.setValidators([Validators.required]);
    }
  }

  private importForm(): void {
    return this.exportForm.emit(this.form);
  }

  private inputFilter(): void {
    this.buildInputs = this.formServices.buildInput(
      this.inputConfig,
      this.configForm.input
    );
  }

  private isNewPassword(): void {
    if (
      this.attrButton?.route === '/new-password' &&
      this.buildInputs[1]?.label &&
      this.buildInputs[2]?.label
    ) {
      this.buildInputs[1].label = 'Nova senha';
      this.buildInputs[2].label = 'Confirmar nova senha';
    }
  }

  private isNewEmail(): void {
    if (this.attrButton?.route === '/email' && this.buildInputs[0]?.label) {
      this.buildInputs[0].label = 'Novo email';
      this.buildInputs[1].label = 'Senha';
    }
  }

  private isDestroy(): void {
    if (this.attrButton?.route === '/destroy' && this.buildInputs[0]?.label) {
      this.buildInputs[0].label = 'Senha';
    }
  }

  private orderImputsBlockade(): void {
    if (this.attrButton?.route === '/blockade') {
      this.buildInputs = [
        this.buildInputs[1],
        this.buildInputs[2],
        this.buildInputs[0],
        this.buildInputs[3],
        this.buildInputs[4],
      ];
    }
  }

  private orderImputsAddress(): void {
    if (this.attrButton?.route === '/address') {
      this.buildInputs = [
        this.buildInputs[1],
        this.buildInputs[0],
        this.buildInputs[4],
        this.buildInputs[5],
        this.buildInputs[2],
        this.buildInputs[3],
        this.buildInputs[6],
      ];
    }
  }

  private orderImputsMessages(): void {
    if (this.attrButton?.route === '/message') {
      this.buildInputs = [
        this.buildInputs[1],
        this.buildInputs[2],
        this.buildInputs[0],
        this.buildInputs[3],
      ];
    }
  }

  private formBuild(): FormGroup {
    const data: any = this.formServices.controlsConfig(this.inputConfig);

    const validator = this.formServices.isPasswordConfirmation(
      this.inputConfig
    );
    return (this.form = this.fb.group(data, validator));
  }

  private tinymce(): void {
    this.config = {
      height: this.plt.is('mobile') ? 480 : 320,
      plugins:
        // eslint-disable-next-line max-len
        'preview searchreplace directionality visualblocks visualchars fullscreen template charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount table',
      toolbar:
        // eslint-disable-next-line max-len
        'undo redo preview | bold italic strikethrough | forecolor backcolor | \
        table | alignleft aligncenter alignright alignjustify  | numlist bullist | outdent indent | \
        casechange | blocks | checklist | fontfamily fontsize | removeformat',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      language: 'pt_BR',
    };
  }
}
