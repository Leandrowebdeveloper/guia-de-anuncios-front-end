(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"],{

/***/ 23044:
/*!*************************************************!*\
  !*** ./src/app/components/form/config/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigForm": () => (/* binding */ ConfigForm)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


/**
 * @class ConfigForm
 * @readonly Configuração dos atributos de formulários
 */
let ConfigForm = class ConfigForm {
  constructor() {
    this.input = {
      id: null,
      firstName: {
        name: 'firstName',
        label: 'Nome',
        placeholder: 'Entre com seu nome',
        type: 'text',
        actionLabel: 'Entre com seu nome',
        readonly: false,
        msg: {
          invalid: 'Digite nome próprio ou todas letras em maiuscúlo.',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      name: {
        name: 'name',
        label: 'Nome',
        placeholder: 'Entre com seu nome',
        type: 'text',
        actionLabel: 'Entre com seu nome',
        readonly: false,
        msg: {
          invalid: 'Digite nome próprio ou todas letras em maiuscúlo.',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      title: {
        name: 'title',
        label: 'Titulo',
        placeholder: 'Entre com titulo',
        type: 'text',
        actionLabel: 'Entre com titulo',
        readonly: false,
        msg: {
          invalid: 'Digite nome próprio ou todas letras em maiuscúlo.',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      district: {
        name: 'district',
        label: 'Bairro',
        placeholder: 'Digite o bairro',
        type: 'text',
        actionLabel: 'Digite o bairro',
        readonly: false,
        msg: {
          invalid: 'Digite nome próprio ou todas letras em maiuscúlo.',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      street: {
        name: 'street',
        label: 'Rua',
        placeholder: 'Digite a rua',
        type: 'text',
        actionLabel: 'Digite a rua',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      zip_code: {
        name: 'zip_code',
        label: 'CEP',
        placeholder: 'Digite o cep',
        type: 'text',
        actionLabel: 'Digite o cep',
        readonly: true,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      numberr: {
        name: 'numberr',
        label: 'Número',
        placeholder: 'Digite o numero',
        type: 'number',
        actionLabel: 'Digite o numero',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      block: {
        name: 'block',
        label: 'Quadra',
        placeholder: 'Digite a quadra',
        type: 'text',
        actionLabel: 'Digite a quadra',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      allotment: {
        name: 'allotment',
        label: 'Lote',
        placeholder: 'Digite o lote',
        type: 'text',
        actionLabel: 'Digite o lote',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      complement: {
        name: 'complement',
        label: 'Complemento',
        placeholder: 'Ex: Casa 4 / Bloco A3, Apartamento 204',
        type: 'text',
        actionLabel: 'Complemento',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      city: {
        name: 'city',
        label: 'Cidade',
        placeholder: 'Digite a cidade',
        type: 'text',
        actionLabel: 'Digite a cidade',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      uf: {
        name: 'uf',
        label: 'Estado',
        placeholder: 'Digite o estado',
        type: 'text',
        actionLabel: 'Digite o estado',
        readonly: true,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      description: {
        name: 'description',
        label: 'Descrição',
        placeholder: 'Entre com uma descrição',
        type: 'text',
        actionLabel: 'Entre com uma descrição',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      blockade: {
        name: 'blockade',
        label: 'Bloquear',
        placeholder: 'Bloquear usuário',
        type: 'radio',
        actionLabel: 'Bloquear usuário',
        readonly: false,
        msg: {
          invalid: null,
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      mobilePhone: {
        name: 'mobilePhone',
        label: 'Telefone celular',
        placeholder: 'Digite o celular',
        type: 'tel',
        actionLabel: 'Digite o celular',
        readonly: false,
        msg: {
          empty: 'obrigatório!',
          min: 'Mínimo de 15 digitos.',
          max: 'Máximo de 15 digitos.'
        }
      },
      phone: {
        name: 'phone',
        label: 'Telefone fixo',
        placeholder: 'Digite o telefone fixo',
        type: 'tel',
        actionLabel: 'Digite o telefone fixo',
        readonly: false,
        msg: {
          empty: 'obrigatório!',
          min: 'Mínimo de 13 digitos.',
          max: 'Máximo de 13 digitos.'
        }
      },
      whatsapp: {
        name: 'whatsapp',
        label: 'Whatsapp',
        placeholder: 'Digite whatsapp',
        type: 'tel',
        actionLabel: 'Digite whatsapp',
        readonly: false,
        msg: {
          empty: 'obrigatório!',
          min: 'Mínimo de 15 digitos.',
          max: 'Máximo de 15 digitos.'
        }
      },
      facebook: {
        name: 'facebook',
        label: 'Facebook',
        placeholder: 'https://www.facebook.com/******.*****.9876543',
        type: 'url',
        actionLabel: 'Digite o endereço do facebook',
        readonly: false,
        msg: {
          invalid: 'Endereço não está incorreto.',
          empty: 'obrigatório!'
        }
      },
      instagran: {
        name: 'instagran',
        label: 'Instagran',
        placeholder: 'https://www.instagram.com/',
        type: 'url',
        actionLabel: 'Digite o endereço do instagran',
        readonly: false,
        msg: {
          invalid: 'Endereço não está incorreto.',
          empty: 'obrigatório!'
        }
      },
      lastName: {
        name: 'lastName',
        label: 'Sobrenome',
        placeholder: 'Entre com seu sobrenome',
        type: 'text',
        actionLabel: 'Entre com seu sobrenome',
        readonly: false,
        msg: {
          invalid: 'Digite nome próprio ou todas letras em maiuscúlo.',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      email: {
        name: 'email',
        label: 'Email',
        placeholder: 'Entre com seu email',
        type: 'email',
        actionLabel: 'Entre com seu email',
        readonly: false,
        msg: {
          invalid: 'inválido!',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      level: {
        name: 'level',
        label: 'Nível',
        placeholder: 'Entre com seu nível',
        type: 'radio',
        actionLabel: '',
        readonly: false,
        msg: {
          invalid: 'inválido!',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      type: {
        name: 'type',
        label: 'Plano',
        placeholder: 'Selecione um plano',
        type: 'radio',
        actionLabel: '',
        readonly: false,
        msg: {
          invalid: 'inválido!',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      response: {
        name: 'response',
        label: 'Deseja uma resposta?',
        placeholder: 'Deseja uma resposta?',
        type: 'checkbox',
        actionLabel: '',
        readonly: false,
        msg: {
          invalid: 'inválido!',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      period: {
        name: 'period',
        label: 'Período',
        placeholder: 'Selecione um período',
        type: '',
        actionLabel: '',
        readonly: false,
        msg: {
          invalid: 'inválido!',
          empty: 'obrigatório!',
          min: null,
          max: null
        }
      },
      passwordCurrent: {
        name: 'passwordCurrent',
        label: 'Senha atual',
        placeholder: 'Entre com sua senha atual',
        type: 'password',
        actionLabel: 'Entre com sua senha atual',
        readonly: false,
        msg: {
          invalid: '',
          empty: 'obrigatório!',
          min: '',
          max: ''
        }
      },
      password: {
        name: 'password',
        label: 'Senha',
        placeholder: 'Entre com sua senha',
        type: 'password',
        actionLabel: 'Entre com sua senha',
        readonly: false,
        msg: {
          invalid: 'inválida!',
          empty: 'obrigatório!',
          min: 'mínimo 8.',
          max: 'maxímo 20.'
        }
      },
      passwordConfirmation: {
        name: 'passwordConfirmation',
        label: 'Confirmar senha',
        placeholder: 'Repita sua senha',
        type: 'password',
        actionLabel: 'Repita sua senha',
        readonly: false,
        msg: {
          invalid: 'senha inválida!',
          empty: 'obrigatório!',
          min: 'mínimo 8.',
          max: 'maxímo 20.',
          mustMatch: 'incorreto.'
        }
      },
      stayConnected: {
        name: 'stayConnected',
        label: 'Permanecer conectado?',
        placeholder: 'Permanecer conectado?',
        type: 'checkbox',
        actionLabel: '',
        readonly: false,
        msg: {
          invalid: null,
          empty: null,
          min: null,
          max: null
        }
      },
      terms: {
        name: 'terms',
        label: 'Aceitar termos!',
        placeholder: '',
        type: 'checkbox',
        actionLabel: 'Aceitar termos de uso!',
        readonly: false,
        msg: {
          invalid: 'Você precisa aceitar os termos de uso!',
          empty: 'Termos obrigatório!',
          min: '',
          max: ''
        }
      },
      _csrf: null
    };
  }
};
ConfigForm = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], ConfigForm);


/***/ }),

/***/ 47124:
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 61400);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 4760);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/form.service */ 56166);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 23044);









let FormComponent = class FormComponent {
  constructor(configForm, fb, formServices, router, plt, changeDetector) {
    this.configForm = configForm;
    this.fb = fb;
    this.formServices = formServices;
    this.router = router;
    this.plt = plt;
    this.changeDetector = changeDetector;
    this.submitDataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(undefined);
    this.exportForm = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(undefined);
    this.submitted = false;
  }
  get f() {
    return this.form.controls;
  }
  ngAfterContentChecked() {
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
  setPediod(period) {
    this.form.patchValue({
      period
    });
  }
  onSubmit() {
    var _a, _b, _c, _d;
    if (((_a = this.form.value) === null || _a === void 0 ? void 0 : _a.type) === 'free') {
      this.form.patchValue({
        period: null
      });
    } else if (((_b = this.form.value) === null || _b === void 0 ? void 0 : _b.period) === null) {
      this.message = '* obrigatório';
      return;
    } else if (((_c = this.form.value) === null || _c === void 0 ? void 0 : _c.facebook) === null && ((_d = this.form.value) === null || _d === void 0 ? void 0 : _d.instagran) === null) {
      this.f['facebook'].setErrors({
        required: true
      });
      this.f['instagran'].setErrors({
        required: true
      });
    }
    this.submitted = true;
    if (this.form.pristine || this.form.invalid) {
      return;
    }
    return this.sendDataForm();
  }
  showPassword() {
    return this.visiblePassword = !this.visiblePassword;
  }
  sendDataForm() {
    return this.submitDataForm.emit(this.form);
  }
  isPageLogin() {
    const {
      url
    } = this.router;
    this.isPageTheLogin = url === '/entrar' || url === '/entrar/admin';
  }
  disableValidate() {
    var _a, _b;
    if (this.isPageTheLogin) {
      (_a = this.form.get('password')) === null || _a === void 0 ? void 0 : _a.clearValidators();
      (_b = this.form.get('password')) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
    }
  }
  importForm() {
    return this.exportForm.emit(this.form);
  }
  inputFilter() {
    this.buildInputs = this.formServices.buildInput(this.inputConfig, this.configForm.input);
  }
  isNewPassword() {
    var _a, _b, _c;
    if (((_a = this.attrButton) === null || _a === void 0 ? void 0 : _a.route) === '/new-password' && ((_b = this.buildInputs[1]) === null || _b === void 0 ? void 0 : _b.label) && ((_c = this.buildInputs[2]) === null || _c === void 0 ? void 0 : _c.label)) {
      this.buildInputs[1].label = 'Nova senha';
      this.buildInputs[2].label = 'Confirmar nova senha';
    }
  }
  isNewEmail() {
    var _a, _b;
    if (((_a = this.attrButton) === null || _a === void 0 ? void 0 : _a.route) === '/email' && ((_b = this.buildInputs[0]) === null || _b === void 0 ? void 0 : _b.label)) {
      this.buildInputs[0].label = 'Novo email';
      this.buildInputs[1].label = 'Senha';
    }
  }
  isDestroy() {
    var _a, _b;
    if (((_a = this.attrButton) === null || _a === void 0 ? void 0 : _a.route) === '/destroy' && ((_b = this.buildInputs[0]) === null || _b === void 0 ? void 0 : _b.label)) {
      this.buildInputs[0].label = 'Senha';
    }
  }
  orderImputsBlockade() {
    var _a;
    if (((_a = this.attrButton) === null || _a === void 0 ? void 0 : _a.route) === '/blockade') {
      this.buildInputs = [this.buildInputs[1], this.buildInputs[2], this.buildInputs[0], this.buildInputs[3], this.buildInputs[4]];
    }
  }
  orderImputsAddress() {
    var _a;
    if (((_a = this.attrButton) === null || _a === void 0 ? void 0 : _a.route) === '/address') {
      this.buildInputs = [this.buildInputs[1], this.buildInputs[0], this.buildInputs[4], this.buildInputs[5], this.buildInputs[2], this.buildInputs[3], this.buildInputs[6]];
    }
  }
  orderImputsMessages() {
    var _a;
    if (((_a = this.attrButton) === null || _a === void 0 ? void 0 : _a.route) === '/message') {
      this.buildInputs = [this.buildInputs[1], this.buildInputs[2], this.buildInputs[0], this.buildInputs[3]];
    }
  }
  formBuild() {
    const data = this.formServices.controlsConfig(this.inputConfig);
    const validator = this.formServices.isPasswordConfirmation(this.inputConfig);
    return this.form = this.fb.group(data, validator);
  }
  tinymce() {
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
      language: 'pt_BR'
    };
  }
};
FormComponent.ctorParameters = () => [{
  type: _config__WEBPACK_IMPORTED_MODULE_3__.ConfigForm
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _services_form_service__WEBPACK_IMPORTED_MODULE_2__.FormServices
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
}];
FormComponent.propDecorators = {
  inputConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  attrButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  submitDataForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  exportForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};
FormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-form',
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormComponent);


/***/ }),

/***/ 61265:
/*!************************************************!*\
  !*** ./src/app/components/form/form.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponentModule": () => (/* binding */ FormComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_utilities_mask_mask_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utilities/mask/mask.directive */ 60146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component */ 47124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-strength/password-strength.component */ 84013);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/form.service */ 56166);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 73889);
/* harmony import */ var _pipe_is_errors_is_erros_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/is-errors/is-erros.pipe */ 28187);












let FormComponentModule = class FormComponentModule {};
FormComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthComponent, src_app_utilities_mask_mask_directive__WEBPACK_IMPORTED_MODULE_0__.MaskDirective, _pipe_is_errors_is_erros_pipe__WEBPACK_IMPORTED_MODULE_4__.IsErrosPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorModule],
  exports: [_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent],
  providers: [_services_form_service__WEBPACK_IMPORTED_MODULE_3__.FormServices]
})], FormComponentModule);


/***/ }),

/***/ 84013:
/*!**********************************************************************************!*\
  !*** ./src/app/components/form/password-strength/password-strength.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthComponent": () => (/* binding */ PasswordStrengthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_strength_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-strength.component.html?ngResource */ 79476);
/* harmony import */ var _password_strength_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-strength.component.scss?ngResource */ 36390);
/* harmony import */ var _password_strength_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_password_strength_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





let PasswordStrengthComponent = class PasswordStrengthComponent {
  constructor() {
    this.colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
  }
  ngOnChanges(changes) {
    const password = changes['passwordToCheck'].currentValue;
    this.setBarColors(4, '#DDD');
    if (password) {
      const c = this.getColor(this.checkStrength(password));
      this.setBarColors(c.index, c.color);
    } else {
      this.msg = '';
    }
  }
  checkStrength(p) {
    let force = 0;
    const regex = /[$-/:-?{-~"^_@!#`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);
    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];
    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }
    // 5
    force += 2 * p.length + (p.length >= 10 ? 1 : 0);
    force += passedMatches * 10;
    // 6
    force = p.length <= 6 ? Math.min(force, 10) : force;
    // 7
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;
    force = passedMatches === 4 ? Math.min(force, 40) : force;
    return force;
  }
  getColor(s) {
    let index = 0;
    if (s === 10) {
      index = 0;
      this.msg = 'Muito fraco';
    } else if (s === 20) {
      index = 1;
      this.msg = 'fraco';
    } else if (s === 30) {
      index = 2;
      this.msg = 'Média';
    } else if (s === 40) {
      index = 3;
      this.msg = 'Forte';
    } else {
      index = 4;
    }
    this.msgColor = this.colors[index];
    return {
      index: index + 1,
      color: this.colors[index]
    };
  }
  setBarColors(count, col) {
    for (let n = 0; n < count; n++) {
      switch (n) {
        case 0:
          this.bar0 = col;
          break;
        case 1:
          this.bar1 = col;
          break;
        case 2:
          this.bar2 = col;
          break;
        case 3:
          this.bar3 = col;
          break;
      }
    }
  }
};
PasswordStrengthComponent.ctorParameters = () => [];
PasswordStrengthComponent.propDecorators = {
  passwordToCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
};
PasswordStrengthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-password-strength',
  template: _password_strength_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_password_strength_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PasswordStrengthComponent);


/***/ }),

/***/ 28187:
/*!*****************************************************************!*\
  !*** ./src/app/components/form/pipe/is-errors/is-erros.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsErrosPipe": () => (/* binding */ IsErrosPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let IsErrosPipe = class IsErrosPipe {
  transform(value, attr, typeError) {
    const controls = value;
    const err = controls[attr.name].errors;
    if (err) {
      return err[typeError];
    }
  }
};
IsErrosPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'isErros'
})], IsErrosPipe);


/***/ }),

/***/ 56166:
/*!**********************************************************!*\
  !*** ./src/app/components/form/services/form.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormServices": () => (/* binding */ FormServices)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);



let FormServices = class FormServices {
  constructor() {
    this.passwordConfirmation = {
      validator: this.mustMatch('password', 'passwordConfirmation')
    };
    this.regexName = /^(?![ ])(?!.*(?:\d|[ ]{2}|[!$%^&*()_+|~=\{\}\[\]:";<>?,\/]))(?:(?:e|da|do|das|dos|de|d'|D'|la|las|el|los|l')\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/;
    this.regexFacebook = /(?:https?\:\/\/|www\.)(?:facebook)(?:.com\/)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*?$/i;
    this.regexInstagran = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;
    this.controls = {
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(this.regexName)]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3)]],
      allotment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      block: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      blockade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      response: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      period: [''],
      zip_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      numberr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      complement: [''],
      mobilePhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      phone: [''],
      whatsapp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      facebook: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(this.regexFacebook)]],
      instagran: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(this.regexInstagran)]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      uf: ['GO', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(this.regexName)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(this.regexName)]],
      level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(20)
      // Validators.pattern(
      //     /^(?=.*\d)(?=.*[$-/:-?{-~"^_@!#`\[\]])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      // ),
      ]],

      passwordCurrent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      passwordConfirmation: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(20)]],
      stayConnected: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      terms: ['true', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('true')]],
      _csrf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      slug: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
    };
  }
  get configs() {
    return this.config;
  }
  set configs(configs) {
    this.config = configs;
  }
  controlsConfig(configs) {
    this.configs = configs;
    return this.buildTheControllers();
  }
  isPasswordConfirmation(configs) {
    const data = configs || {};
    return this.getObjectKeys(data).includes('passwordConfirmation') ? this.passwordConfirmation : {};
  }
  buildInput(configs, inputName) {
    const KEYS = this.getObjectKeys(configs);
    const inputs = [];
    for (const key in inputName) {
      if (KEYS && KEYS.includes(key) && inputName[key] !== null) {
        inputs.push(inputName[key]);
      }
    }
    return inputs;
  }
  buildTheControllers() {
    const controls = {};
    let count = 0;
    for (const key in this.configs) {
      if (this.makeSureTheSettingsMatchTheControls(key)) {
        controls[key] = this.getKeyControls(key);
        controls[key][0] = this.getValuesConfiguration(count);
      }
      count++;
    }
    return this.cleanValue(controls);
  }
  cleanValue(controls) {
    if (Object.keys(controls).includes('email')) {
      controls['email'][0] = null;
    }
    return controls;
  }
  getValuesConfiguration(count) {
    return this.getObjectValues(this.configs)[count];
  }
  getKeyControls(key) {
    return this.controls[key];
  }
  makeSureTheSettingsMatchTheControls(key) {
    return this.validObject(key) && this.theKeyMustMatchTheController(key) && this.theValueMustMatchTheControllerValue(key);
  }
  validObject(key) {
    return Object.prototype.hasOwnProperty.call(this.configs, key);
  }
  theKeyMustMatchTheController(key) {
    return this.getObjectKeys(this.controls).includes(key);
  }
  theValueMustMatchTheControllerValue(key) {
    return this.getObjectValues(this.configs).includes(this.configs[key]);
  }
  getObjectKeys(object) {
    return object && Object.keys(object);
  }
  getObjectValues(object) {
    return object && Object.values(object);
  }
  mustMatch(controlName, matchingControlName) {
    return formGroup => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      return this.resultOfTheCombination(control, matchingControl);
    };
  }
  resultOfTheCombination(control, matchingControl) {
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({
        mustMatch: true
      });
    } else {
      matchingControl.setErrors(null);
    }
  }
};
FormServices = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
/**
 * @class FormServices
 */], FormServices);


/***/ }),

/***/ 78039:
/*!******************************************************!*\
  !*** ./src/app/utilities/loading/loading.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let LoadingService = class LoadingService {
  constructor(loadingController) {
    this.loadingController = loadingController;
  }
  show(message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const loading = this.loadingController.create({
        message,
        spinner: 'bubbles'
      });
      (yield loading).present();
      return loading;
    });
  }
};
LoadingService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})
/**
 * @class LoadingService
 */], LoadingService);


/***/ }),

/***/ 60146:
/*!**************************************************!*\
  !*** ./src/app/utilities/mask/mask.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskDirective": () => (/* binding */ MaskDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


let MaskDirective = class MaskDirective {
  constructor(pattern) {
    this.regex = new RegExp('[^0-9-).(]', 'g');
    this.pattern = pattern;
  }
  onKeyup(e) {
    this.onInputChange(e);
  }
  onKeydown(e) {
    this.onInputChange(e);
  }
  onInputChange(e) {
    var _a;
    try {
      let value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
      const pattern = this.pattern;
      const reserve = pattern.replace(/\*/, 'g');
      let applied = '';
      let ordinal = 0;
      if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
        if (value.length) {
          //remove all trailing formatting
          while (value.length && pattern[value.length] && pattern[value.length] !== '*') {
            value = value.substring(0, value.length - 1);
          }
          //remove all leading formatting to restore placeholder
          if (pattern.substring(0, value.length).indexOf('*') < 0) {
            value = value.substring(0, value.length - 1);
          }
        }
      }
      //apply mask characters
      for (let i = 0; i < value.length; i++) {
        //enforce pattern limit
        if (i < pattern.length) {
          //match mask
          if (value[i] === pattern[ordinal]) {
            applied += value[i];
            ordinal++;
          } else if (reserve.indexOf(value[i]) > -1) {
            //skip other reserved characters
          } else {
            //apply leading formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
            applied += value[i];
            ordinal++;
            //apply trailing formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
          }
        }
      }
      e.target.value = applied.replace(this.regex, '');
    } catch (ex) {
      ex && ex.message && console.log(ex === null || ex === void 0 ? void 0 : ex.message);
    }
  }
};
MaskDirective.ctorParameters = () => [{
  type: String,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
    args: ['mask']
  }]
}];
MaskDirective.propDecorators = {
  onKeyup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['keyup', ['$event']]
  }],
  onKeydown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['keydown', ['$event']]
  }]
};
MaskDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mask]'
})], MaskDirective);


/***/ }),

/***/ 26067:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaySubject": () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 80228);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 67654);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}

/***/ }),

/***/ 89196:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shareReplay": () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 26067);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 81203);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

/***/ }),

/***/ 68951:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 54987);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 99635);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 4760:
/*!****************************************************************!*\
  !*** ./src/app/components/form/form.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}", "",{"version":3,"sources":["webpack://./src/app/components/form/form.component.scss"],"names":[],"mappings":"AAAA;EACE,QAAA;AACF;;AACA;EACE,QAAA;AAEF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,QAAA;AAGF;;AAAA;EACE,SAAA;AAGF","sourcesContent":[".order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36390:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/form/password-strength/password-strength.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".strengthBar {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: 2px;\n}\n\n.point:last-of-type {\n  margin: 0 !important;\n}\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 62px;\n}\n\n.no-margin-top {\n  margin-top: 0px;\n}\n\np {\n  font-size: small;\n}", "",{"version":3,"sources":["webpack://./src/app/components/form/password-strength/password-strength.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,iBAAA;EACA,WAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,gBAAA;AACF","sourcesContent":[".strengthBar {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: 2px;\n}\n\n.point:last-of-type {\n  margin: 0 !important;\n}\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 62px;\n}\n\n.no-margin-top {\n  margin-top: 0px;\n}\n\np {\n  font-size: small;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61400:
/*!****************************************************************!*\
  !*** ./src/app/components/form/form.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        *ngFor=\"let input of buildInputs\"\n        class=\"ion-no-padding\"\n      >\n        <div\n          *ngIf=\"\n            input?.type !== 'checkbox' &&\n            input?.name !== 'level' &&\n            input?.name !== 'type' &&\n            input?.name !== 'period' &&\n            input?.name !== 'blockade' &&\n            input?.name !== 'city'\n          \"\n        >\n          <ion-item\n            [lines]=\"\n              (input?.name === 'description' || input?.name === 'blockade') &&\n              'none'\n            \"\n          >\n            <!-- Label -->\n            <ion-label\n              position=\"floating\"\n              [color]=\"f[input.name].valid && 'success'\"\n            >\n              {{ input?.label }}\n\n              <!-- Message error -->\n              <ion-text\n                color=\"danger\"\n                *ngIf=\"submitted && f[input.name].errors\"\n              >\n                <!-- f[input.name].errors.pattern -->\n                <span\n                  *ngIf=\"f | isErros : input : 'pattern'\"\n                  [attr.aria-errormessage]=\"input.msg.invalid\"\n                >\n                  * {{ input.msg.invalid }}&nbsp;</span\n                >\n                <span\n                  *ngIf=\"f | isErros : input : 'email'\"\n                  [attr.aria-errormessage]=\"input.msg.invalid\"\n                >\n                  * {{ input.msg.invalid }}&nbsp;</span\n                >\n                <span\n                  *ngIf=\"f | isErros : input : 'required'\"\n                  [attr.aria-errormessage]=\"input.msg.empty\"\n                >\n                  * {{ input.msg.empty }}&nbsp;</span\n                >\n                <span\n                  *ngIf=\"f | isErros : input : 'maxlength'\"\n                  [attr.aria-errormessage]=\"input.msg.max\"\n                >\n                  * {{ input.msg.max }}&nbsp;</span\n                >\n                <span\n                  *ngIf=\"f | isErros : input : 'minlength'\"\n                  [attr.aria-errormessage]=\"input.msg.min\"\n                >\n                  * {{ input.msg.min }}&nbsp;</span\n                >\n                <span\n                  *ngIf=\"f | isErros : input : 'mustMatch'\"\n                  [attr.aria-errormessage]=\"input.msg.mustMatch\"\n                >\n                  * {{ input.msg.mustMatch }}&nbsp;</span\n                >\n              </ion-text>\n            </ion-label>\n\n            <ion-input\n              *ngIf=\"\n                input?.type !== 'tel' &&\n                input?.name !== 'description' &&\n                input?.name !== 'complement' &&\n                input?.name !== 'zip_code' &&\n                input?.name !== 'city' &&\n                input?.name !== 'period' &&\n                input?.name !== 'blockade' &&\n                input?.name !== 'type'\n              \"\n              [type]=\"visiblePassword ? 'text' : input?.type\"\n              [formControlName]=\"input.name\"\n              [inputmode]=\"input?.type\"\n              [placeholder]=\"input?.placeholder\"\n              [attr.aria-invalid]=\"submitted\"\n              [attr.aria-placeholder]=\"input?.actionLabel\"\n              [readonly]=\"input?.readonly\"\n              [attr.aria-readonly]=\"input?.readonly\"\n            >\n            </ion-input>\n\n            <!-- PHONE -->\n            <ion-input\n              *ngIf=\"input?.type === 'tel' && input?.name === 'phone'\"\n              [type]=\"input?.type\"\n              [formControlName]=\"input.name\"\n              [inputmode]=\"input?.type\"\n              [placeholder]=\"input?.placeholder\"\n              [attr.aria-invalid]=\"submitted\"\n              [attr.aria-placeholder]=\"input?.actionLabel\"\n              maxlength=\"13\"\n              minlength=\"13\"\n              mask=\"(**)****-****\"\n            >\n            </ion-input>\n\n            <ion-input\n              *ngIf=\"input?.type === 'tel' && input?.name !== 'phone'\"\n              [type]=\"input?.type\"\n              [formControlName]=\"input.name\"\n              [inputmode]=\"input?.type\"\n              [placeholder]=\"input?.placeholder\"\n              [attr.aria-invalid]=\"submitted\"\n              [attr.aria-placeholder]=\"input?.actionLabel\"\n              maxlength=\"15\"\n              minlength=\"15\"\n              mask=\"(**)***-***-***\"\n            >\n            </ion-input>\n\n            <ion-input\n              *ngIf=\"input?.name === 'zip_code'\"\n              [type]=\"visiblePassword ? 'text' : input?.type\"\n              [formControlName]=\"input.name\"\n              [inputmode]=\"input?.type\"\n              [placeholder]=\"input?.placeholder\"\n              [readonly]=\"input?.readonly\"\n              [attr.aria-invalid]=\"submitted\"\n              [attr.aria-placeholder]=\"input?.actionLabel\"\n            >\n            </ion-input>\n\n            <ion-textarea\n              *ngIf=\"\n                input?.name === 'complement' ||\n                (input?.name === 'description' &&\n                  attrButton?.route === '/category')\n              \"\n              [formControlName]=\"input.name\"\n              [inputmode]=\"input?.type\"\n              [placeholder]=\"input?.placeholder\"\n              [attr.aria-placeholder]=\"input?.actionLabel\"\n              rows=\"8\"\n            ></ion-textarea>\n\n            <p\n              *ngIf=\"\n                input?.name === 'description' &&\n                attrButton?.route !== '/category'\n              \"\n              class=\"ion-margin-top\"\n            ></p>\n\n            <editor\n              *ngIf=\"\n                input?.name === 'description' &&\n                attrButton?.route !== '/category'\n              \"\n              apiKey=\"eltulb4tbmvkr9gu7025qd3j9otlnxlej0ybckmvguswoje5\"\n              [formControlName]=\"input.name\"\n              [init]=\"config\"\n            ></editor>\n\n            <!-- Button display password -->\n            <ion-button\n              *ngIf=\"\n                input?.name === 'passwordConfirmation' ||\n                (input?.name === 'password' && attrButton?.route === '/entrar')\n              \"\n              slot=\"end\"\n              fill=\"clear\"\n              (click)=\"showPassword()\"\n              class=\"ion-margin-top\"\n              [title]=\"visiblePassword ? 'Ocultar senha' : 'Ver senha'\"\n              [attr.aria-pressed]=\"visiblePassword\"\n              [attr.aria-label]=\"attrButton.aria\"\n            >\n              <ion-icon\n                [name]=\"visiblePassword ? 'eye-off-outline' : 'eye-outline'\"\n                color=\"medium\"\n              ></ion-icon>\n            </ion-button>\n          </ion-item>\n\n          <!-- Password -->\n          <app-password-strength\n            *ngIf=\"\n              input?.name === 'passwordConfirmation' ||\n              (input?.name === 'password' && attrButton?.route === 'login')\n            \"\n            [passwordToCheck]=\"form.value.password\"\n            [hidden]=\"isPageTheLogin\"\n          ></app-password-strength>\n        </div>\n\n        <!-- Resposta da menssagem -->\n        <ion-item\n          class=\"ion-margin-vertical\"\n          *ngIf=\"input?.name === 'response'\"\n        >\n          <ion-checkbox\n            slot=\"end\"\n            [formControlName]=\"input.name\"\n          ></ion-checkbox>\n          <ion-label>{{ input?.label }}</ion-label>\n        </ion-item>\n\n        <!-- Bloquear -->\n        <ion-item\n          class=\"ion-margin-vertical\"\n          *ngIf=\"input?.name === 'blockade' && attrButton.route === '/blockade'\"\n        >\n          <ion-checkbox\n            slot=\"end\"\n            [formControlName]=\"input.name\"\n          ></ion-checkbox>\n          <ion-label>{{ input?.label }}</ion-label>\n        </ion-item>\n\n        <!-- Level or Cities -->\n        <ion-list\n          *ngIf=\"\n            input?.name === 'level' ||\n            input?.name === 'city' ||\n            input?.name === 'type'\n          \"\n        >\n          <ion-radio-group [formControlName]=\"input.name\">\n            <!-- Nivel -->\n            <span *ngIf=\"input?.name === 'level'\">\n              <ion-item>\n                <ion-label>Colaborador</ion-label>\n                <ion-radio value=\"2\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Administrador</ion-label>\n                <ion-radio value=\"1\"></ion-radio>\n              </ion-item>\n            </span>\n            <!-- Cidade -->\n            <span *ngIf=\"input?.name === 'city'\">\n              <ion-item>\n                <ion-label>São Luiz dos Montes Belos</ion-label>\n                <ion-radio value=\"São Luiz dos Montes Belos\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Firminópolis</ion-label>\n                <ion-radio value=\"Firminópolis\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Aurilândia</ion-label>\n                <ion-radio value=\"Aurilândia\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Sanclerlândia</ion-label>\n                <ion-radio value=\"Sanclerlândia\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Turvânia</ion-label>\n                <ion-radio value=\"Turvânia\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Córrego do Ouro</ion-label>\n                <ion-radio value=\"Córrego do Ouro\"></ion-radio>\n              </ion-item>\n            </span>\n            <!-- Planos -->\n            <span\n              *ngIf=\"\n                input?.name === 'type' &&\n                attrButton.route !== '/message' &&\n                attrButton.route !== '/blockade'\n              \"\n            >\n              <ion-item>\n                <ion-label>Grátis</ion-label>\n                <ion-radio value=\"free\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Básico</ion-label>\n                <ion-radio value=\"basic\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Special</ion-label>\n                <ion-radio value=\"special\"></ion-radio>\n              </ion-item>\n\n              <ion-row\n                [hidden]=\"form.value.type === 'free'\"\n                class=\"ion-margin-vertical ion-justify-content-center\"\n              >\n                <ion-col size=\"12\">\n                  <ion-text color=\"medium\" class=\"ion-text-center\">\n                    <p>\n                      Selecione um periodo\n                      <ion-text color=\"danger\" [hidden]=\"!message\">\n                        {{ message }}\n                      </ion-text>\n                    </p>\n                  </ion-text>\n                </ion-col>\n                <ion-button\n                  [color]=\"form.value.period === '03' ? 'success' : 'secondary'\"\n                  (click)=\"setPediod('03')\"\n                  size=\"small\"\n                  shape=\"round\"\n                >\n                  3 messes\n                </ion-button>\n\n                <ion-button\n                  [color]=\"form.value.period === '06' ? 'success' : 'secondary'\"\n                  (click)=\"setPediod('06')\"\n                  class=\"ion-margin-horizontal\"\n                  size=\"small\"\n                  shape=\"round\"\n                >\n                  6 messes\n                </ion-button>\n\n                <ion-button\n                  [color]=\"form.value.period === '12' ? 'success' : 'secondary'\"\n                  (click)=\"setPediod('12')\"\n                  size=\"small\"\n                  shape=\"round\"\n                >\n                  1 ano\n                </ion-button>\n              </ion-row>\n            </span>\n            <!-- Tipo da menssagem -->\n            <span\n              *ngIf=\"\n                input?.name === 'type' &&\n                (attrButton.route === '/message' ||\n                  attrButton.route === '/blockade')\n              \"\n            >\n              <ion-item-divider\n                [ngClass]=\"{\n                  'ion-margin-top': attrButton.route !== '/blockade'\n                }\"\n              >\n                <ion-label>Tipo de menssagem</ion-label>\n                <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n              </ion-item-divider>\n\n              <ion-item>\n                <ion-label>Aviso</ion-label>\n                <ion-radio\n                  value=\"warning\"\n                  [disabled]=\"form.value.blockade\"\n                ></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Informação</ion-label>\n                <ion-radio\n                  value=\"info\"\n                  [disabled]=\"form.value.blockade\"\n                ></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Parabéns</ion-label>\n                <ion-radio\n                  value=\"success\"\n                  [disabled]=\"form.value.blockade\"\n                ></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Atenção</ion-label>\n                <ion-radio\n                  value=\"danger\"\n                  [disabled]=\"!form.value.blockade\"\n                ></ion-radio>\n              </ion-item>\n            </span>\n            <!-- Bloquear usuário -->\n            <!-- <span\n              *ngIf=\"\n                input?.name === 'blockade' && attrButton.route === '/blockade'\n              \"\n            >\n              <ion-item>\n                <ion-label>Bloquear</ion-label>\n                <ion-radio [value]=\"true\"></ion-radio>\n              </ion-item>\n\n              <ion-item class=\"ion-margin-bottom\">\n                <ion-label>Desbloquear</ion-label>\n                <ion-radio [value]=\"false\"></ion-radio>\n              </ion-item>\n            </span> -->\n          </ion-radio-group>\n        </ion-list>\n        <ion-item\n          lines=\"none\"\n          *ngIf=\"input?.name === 'stayConnected'\"\n          [hidden]=\"!isPageTheLogin\"\n        >\n          <ion-checkbox\n            [formControlName]=\"input.name\"\n            [attr.aria-label]=\"input.label\"\n          >\n          </ion-checkbox>\n          <ion-text class=\"ion-margin-start\">{{ input?.label }}</ion-text>\n        </ion-item>\n        <!-- terms -->\n        <div *ngIf=\"input?.name === 'terms'\">\n          <ion-item lines=\"none\">\n            <ion-checkbox\n              [formControlName]=\"input.name\"\n              [attr.aria-label]=\"input.label\"\n            >\n            </ion-checkbox>\n            <ion-text class=\"ion-margin-start\">{{ input?.label }}</ion-text>\n          </ion-item>\n\n          <div class=\"ion-text-start\" *ngIf=\"submitted && f[input.name].errors\">\n            <ion-text color=\"danger\" *ngIf=\"!form.controls['terms'].valid\">\n              <small [attr.aria-errormessage]=\"input?.msg?.invalid\">{{\n                input?.msg?.invalid\n              }}</small>\n            </ion-text>\n          </div>\n\n          <ion-text class=\"cursor\">\n            <small\n              class=\"cursor-pointer ion-margin-start\"\n              title=\"Ver termos de uso do jussara.app.\"\n              routerLink=\"/termos-de-serviço\"\n              data-label=\"Ver termos de uso?\"\n            >\n              Ver termos de uso?\n            </small>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          *ngIf=\"buildInputs.length > 0\"\n          color=\"tertiary\"\n          type=\"submit\"\n          expand=\"block\"\n          class=\"ion-margin-vertical\"\n          [attr.aria-label]=\"attrButton && attrButton.aria\"\n          [title]=\"attrButton && attrButton.title\"\n        >\n          <ion-icon\n            class=\"ion-margin-end\"\n            color=\"light\"\n            [name]=\"attrButton.icon\"\n          ></ion-icon>\n          {{ attrButton.label }}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n";

/***/ }),

/***/ 79476:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/form/password-strength/password-strength.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid fixed>\n  <ion-row>\n    <ion-col>\n\n      <ion-text class=\"ion-text-center\">\n        <p [style.color]=\"msgColor\" class=\"no-margin-top\">{{msg}}</p>\n      </ion-text>\n\n      <ul class=\"strengthBar\">\n        <li class=\"point\" [style.background-color]=\"bar0\"></li>\n        <li class=\"point\" [style.background-color]=\"bar1\"></li>\n        <li class=\"point\" [style.background-color]=\"bar2\"></li>\n        <li class=\"point\" [style.background-color]=\"bar3\"></li>\n      </ul>\n\n      <ion-text color=\"medium\">\n        <p>Uma senha forte deve ter de 8 a 20 caracteres, conter letras maiúsculas e minúsculas, números, caracteres\n          especiais ex: <mark> $-/:-?-~!\"^]#_@`[ </mark> e não deve conter espaços ou emoji.</p>\n      </ion-text>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 73889:
/*!************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent),
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule),
/* harmony export */   "TINYMCE_SCRIPT_SRC": () => (/* binding */ TINYMCE_SCRIPT_SRC)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 21954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 73);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 89196);







/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function EditorComponent_ng_template_0_Template(rf, ctx) {}
const getTinymce = () => {
  const w = typeof window !== 'undefined' ? window : undefined;
  return w && w.tinymce ? w.tinymce : null;
};
class Events {
  constructor() {
    this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onInitNgModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onResizeEditor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
Events.ɵfac = function Events_Factory(t) {
  return new (t || Events)();
};
Events.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Events,
  outputs: {
    onBeforePaste: "onBeforePaste",
    onBlur: "onBlur",
    onClick: "onClick",
    onContextMenu: "onContextMenu",
    onCopy: "onCopy",
    onCut: "onCut",
    onDblclick: "onDblclick",
    onDrag: "onDrag",
    onDragDrop: "onDragDrop",
    onDragEnd: "onDragEnd",
    onDragGesture: "onDragGesture",
    onDragOver: "onDragOver",
    onDrop: "onDrop",
    onFocus: "onFocus",
    onFocusIn: "onFocusIn",
    onFocusOut: "onFocusOut",
    onKeyDown: "onKeyDown",
    onKeyPress: "onKeyPress",
    onKeyUp: "onKeyUp",
    onMouseDown: "onMouseDown",
    onMouseEnter: "onMouseEnter",
    onMouseLeave: "onMouseLeave",
    onMouseMove: "onMouseMove",
    onMouseOut: "onMouseOut",
    onMouseOver: "onMouseOver",
    onMouseUp: "onMouseUp",
    onPaste: "onPaste",
    onSelectionChange: "onSelectionChange",
    onActivate: "onActivate",
    onAddUndo: "onAddUndo",
    onBeforeAddUndo: "onBeforeAddUndo",
    onBeforeExecCommand: "onBeforeExecCommand",
    onBeforeGetContent: "onBeforeGetContent",
    onBeforeRenderUI: "onBeforeRenderUI",
    onBeforeSetContent: "onBeforeSetContent",
    onChange: "onChange",
    onClearUndos: "onClearUndos",
    onDeactivate: "onDeactivate",
    onDirty: "onDirty",
    onExecCommand: "onExecCommand",
    onGetContent: "onGetContent",
    onHide: "onHide",
    onInit: "onInit",
    onInitNgModel: "onInitNgModel",
    onLoadContent: "onLoadContent",
    onNodeChange: "onNodeChange",
    onPostProcess: "onPostProcess",
    onPostRender: "onPostRender",
    onPreInit: "onPreInit",
    onPreProcess: "onPreProcess",
    onProgressState: "onProgressState",
    onRedo: "onRedo",
    onRemove: "onRemove",
    onReset: "onReset",
    onResizeEditor: "onResizeEditor",
    onSaveContent: "onSaveContent",
    onSetAttrib: "onSetAttrib",
    onObjectResizeStart: "onObjectResizeStart",
    onObjectResized: "onObjectResized",
    onObjectSelected: "onObjectSelected",
    onSetContent: "onSetContent",
    onShow: "onShow",
    onSubmit: "onSubmit",
    onUndo: "onUndo",
    onVisualAid: "onVisualAid"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Events, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    onBeforePaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onCopy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onCut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragGesture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocusIn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocusOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onActivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onAddUndo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeAddUndo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeExecCommand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeGetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeRenderUI: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeSetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClearUndos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDeactivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDirty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onExecCommand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onGetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInitNgModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLoadContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onNodeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPostProcess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPostRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPreInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPreProcess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onProgressState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRedo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onReset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onResizeEditor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSaveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSetAttrib: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onObjectResizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onObjectResized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onObjectSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSetContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onUndo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onVisualAid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
const validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onResizeEditor', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// Caretaker note: `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
// will be invoked upon subscription and teardown.
const listenTinyMCEEvent = (editor, eventName, destroy$) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(editor, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$));
const bindHandlers = (ctx, editor, destroy$) => {
  const allowedEvents = getValidEvents(ctx);
  allowedEvents.forEach(eventName => {
    const eventEmitter = ctx[eventName];
    listenTinyMCEEvent(editor, eventName.substring(2), destroy$).subscribe(event => {
      // Caretaker note: `ngZone.run()` runs change detection since it notifies the forked Angular zone that it's
      // being re-entered. We don't want to run `ApplicationRef.tick()` if anyone listens to the specific event
      // within the template. E.g. if the `onSelectionChange` is not listened within the template like:
      // `<editor (onSelectionChange)="..."></editor>`
      // then its `observers` array will be empty, and we won't run "dead" change detection.
      if (eventEmitter.observers.length > 0) {
        ctx.ngZone.run(() => eventEmitter.emit({
          event,
          editor
        }));
      }
    });
  });
};
const getValidEvents = ctx => {
  const ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
  const allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter(event => validEvents.includes(event) && !ignoredEvents.includes(event));
  return allowedEvents;
};
const parseStringProperty = (property, defaultValue) => {
  if (typeof property === 'string') {
    return property.split(',').map(value => value.trim());
  }
  if (Array.isArray(property)) {
    return property;
  }
  return defaultValue;
};
let unique = 0;
const uuid = prefix => {
  const date = new Date();
  const time = date.getTime();
  const random = Math.floor(Math.random() * 1000000000);
  unique++;
  return prefix + '_' + random + unique + String(time);
};
const isTextarea = element => typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
const normalizePluginArray = plugins => {
  if (typeof plugins === 'undefined' || plugins === '') {
    return [];
  }
  return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
const isNullOrUndefined = value => value === null || value === undefined;

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const createState = () => ({
  script$: null
});
const CreateScriptLoader = () => {
  let state = createState();
  const load = (doc, url) => state.script$ || (
  // Caretaker note: the `script$` is a multicast observable since it's piped with `shareReplay`,
  // so if there're multiple editor components simultaneously on the page, they'll subscribe to the internal
  // `ReplaySubject`. The script will be loaded only once, and `ReplaySubject` will cache the result.
  state.script$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
    const scriptTag = doc.createElement('script');
    scriptTag.referrerPolicy = 'origin';
    scriptTag.type = 'application/javascript';
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(scriptTag, 'load').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mapTo)(undefined));
  }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)({
    bufferSize: 1,
    refCount: true
  })));
  // Only to be used by tests.
  const reinitialize = () => {
    state = createState();
  };
  return {
    load,
    reinitialize
  };
};
const ScriptLoader = CreateScriptLoader();

/* eslint-disable @typescript-eslint/no-parameter-properties */
const TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('TINYMCE_SCRIPT_SRC');
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EditorComponent),
  multi: true
};
class EditorComponent extends Events {
  constructor(elementRef, ngZone, platformId, tinymceScriptSrc) {
    super();
    this.platformId = platformId;
    this.tinymceScriptSrc = tinymceScriptSrc;
    this.cloudChannel = '6';
    this.apiKey = 'no-api-key';
    this.id = '';
    this.modelEvents = 'change input undo redo';
    this.onTouchedCallback = noop;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.initialise = () => {
      const finalInit = {
        ...this.init,
        selector: undefined,
        target: this._element,
        inline: this.inline,
        readonly: this.disabled,
        plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
        toolbar: this.toolbar || this.init && this.init.toolbar,
        setup: editor => {
          this._editor = editor;
          listenTinyMCEEvent(editor, 'init', this.destroy$).subscribe(() => {
            this.initEditor(editor);
          });
          bindHandlers(this, editor, this.destroy$);
          if (this.init && typeof this.init.setup === 'function') {
            this.init.setup(editor);
          }
        }
      };
      if (isTextarea(this._element)) {
        this._element.style.visibility = '';
      }
      this.ngZone.runOutsideAngular(() => {
        getTinymce().init(finalInit);
      });
    };
    this._elementRef = elementRef;
    this.ngZone = ngZone;
  }
  set disabled(val) {
    this._disabled = val;
    if (this._editor && this._editor.initialized) {
      if (typeof this._editor.mode?.set === 'function') {
        this._editor.mode.set(val ? 'readonly' : 'design');
      } else {
        this._editor.setMode(val ? 'readonly' : 'design');
      }
    }
  }
  get disabled() {
    return this._disabled;
  }
  get editor() {
    return this._editor;
  }
  writeValue(value) {
    if (this._editor && this._editor.initialized) {
      this._editor.setContent(isNullOrUndefined(value) ? '' : value);
    } else {
      this.initialValue = value === null ? undefined : value;
    }
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this.platformId)) {
      this.id = this.id || uuid('tiny-angular');
      this.inline = this.inline !== undefined ? this.inline !== false : !!this.init?.inline;
      this.createElement();
      if (getTinymce() !== null) {
        this.initialise();
      } else if (this._element && this._element.ownerDocument) {
        // Caretaker note: the component might be destroyed before the script is loaded and its code is executed.
        // This will lead to runtime exceptions if `initialise` will be called when the component has been destroyed.
        ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.initialise);
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    if (getTinymce() !== null) {
      getTinymce().remove(this._editor);
    }
  }
  createElement() {
    const tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
    this._element = document.createElement(this.inline ? tagName : 'textarea');
    if (this._element) {
      if (document.getElementById(this.id)) {
        /* eslint no-console: ["error", { allow: ["warn"] }] */
        console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`);
      }
      this._element.id = this.id;
      if (isTextarea(this._element)) {
        this._element.style.visibility = 'hidden';
      }
      this._elementRef.nativeElement.appendChild(this._element);
    }
  }
  getScriptSrc() {
    return isNullOrUndefined(this.tinymceScriptSrc) ? `https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js` : this.tinymceScriptSrc;
  }
  initEditor(editor) {
    listenTinyMCEEvent(editor, 'blur', this.destroy$).subscribe(() => {
      this.ngZone.run(() => this.onTouchedCallback());
    });
    listenTinyMCEEvent(editor, this.modelEvents, this.destroy$).subscribe(() => {
      this.ngZone.run(() => this.emitOnChange(editor));
    });
    if (typeof this.initialValue === 'string') {
      this.ngZone.run(() => {
        editor.setContent(this.initialValue);
        if (editor.getContent() !== this.initialValue) {
          this.emitOnChange(editor);
        }
        if (this.onInitNgModel !== undefined) {
          this.onInitNgModel.emit(editor);
        }
      });
    }
  }
  emitOnChange(editor) {
    if (this.onChangeCallback) {
      this.onChangeCallback(editor.getContent({
        format: this.outputFormat
      }));
    }
  }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) {
  return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TINYMCE_SCRIPT_SRC, 8));
};
EditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditorComponent,
  selectors: [["editor"]],
  inputs: {
    cloudChannel: "cloudChannel",
    apiKey: "apiKey",
    init: "init",
    id: "id",
    initialValue: "initialValue",
    outputFormat: "outputFormat",
    inline: "inline",
    tagName: "tagName",
    plugins: "plugins",
    toolbar: "toolbar",
    modelEvents: "modelEvents",
    allowedEvents: "allowedEvents",
    ignoreEvents: "ignoreEvents",
    disabled: "disabled"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EDITOR_COMPONENT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 0,
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
  styles: ["[_nghost-%COMP%]{display:block}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'editor',
      template: '<ng-template></ng-template>',
      providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
      styles: [":host{display:block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [TINYMCE_SCRIPT_SRC]
      }]
    }];
  }, {
    cloudChannel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    apiKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    init: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    initialValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outputFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tagName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    plugins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    toolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    modelEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowedEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ignoreEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class EditorModule {}
EditorModule.ɵfac = function EditorModule_Factory(t) {
  return new (t || EditorModule)();
};
EditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: EditorModule,
  imports: [EditorComponent],
  exports: [EditorComponent]
});
EditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [EditorComponent]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [EditorComponent],
      exports: [EditorComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts.js.map