(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_administrator_categoryAnnouncement_form_form_module_ts-src_ap-2bb023"],{

/***/ 68404:
/*!*******************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModalComponent": () => (/* binding */ HeaderModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-modal.component.html?ngResource */ 92852);
/* harmony import */ var _header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-modal.component.scss?ngResource */ 26661);
/* harmony import */ var _header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let HeaderModalComponent = class HeaderModalComponent {
  constructor(plt, modalController) {
    this.plt = plt;
    this.modalController = modalController;
  }
  ngOnInit() {
    this.isPlt = this.plt.is('desktop');
  }
  close() {
    return this.modalController.dismiss();
  }
};
HeaderModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}];
HeaderModalComponent.propDecorators = {
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
HeaderModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-header-component-modal',
  template: _header_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderModalComponent);


/***/ }),

/***/ 32728:
/*!****************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModalModule": () => (/* binding */ HeaderModalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _header_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-modal.component */ 68404);





let HeaderModalModule = class HeaderModalModule {};
HeaderModalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_header_modal_component__WEBPACK_IMPORTED_MODULE_0__.HeaderModalComponent],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  exports: [_header_modal_component__WEBPACK_IMPORTED_MODULE_0__.HeaderModalComponent]
})], HeaderModalModule);


/***/ }),

/***/ 69101:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/form/form.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 43960);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 2574);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ 97150);
/* harmony import */ var src_app_utilities_category_category_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/category/category-utilities.service */ 73272);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);










let FormComponent = class FormComponent {
  constructor(helpService, modalController, categoryService, categoryUtilities, messageService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.categoryService = categoryService;
    this.categoryUtilities = categoryUtilities;
    this.messageService = messageService;
    this.loadingService = loadingService;
  }
  ngOnInit() {
    this.getData();
    this.setButton();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    switch (this.action) {
      // case 'destroy':
      //   return this.destroy(event);
      case 'drop':
        return this.drop(event);
      // case 'name':
      //   return this.update(event);
      case 'register':
        return this.register(event);
      case 'restore':
        return this.restore(event);
    }
  }
  // Destroy
  // private destroy(event: FormGroup): Subscription {
  //   const loading = this.loadingService.show('Excluindo categoria...');
  //   this.getSlug(event);
  //   return (this.write = this.categoryService.delete(event.value).subscribe(
  //     (category: Category) => this.messsage(category, loading),
  //     (error: HttpErrorResponse) =>
  //       this.messageService.error(error, loading, this.write)
  //   ));
  // }
  // Destroy
  drop(event) {
    const loading = this.loadingService.show('Excluindo categoria...');
    this.getSlug(event);
    return this.write = this.categoryService.dropd(event.value).subscribe({
      next: category => this.messsage(category, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  getSlug(event) {
    if (!event.value.slug) {
      event.value.slug = this.categoryService.getSlug;
    }
  }
  // // Update Name description
  // private update(event: FormGroup): Subscription {
  //   const loading = this.loadingService.show('Cadastrar categoria...');
  //   return (this.write = this.categoryService
  //     .updateNameAndDescription(event.value)
  //     .subscribe(
  //       (category: Category) => this.messsage(category, loading),
  //       (error: HttpErrorResponse) =>
  //         this.messageService.error(error, loading, this.write)
  //     ));
  // }
  // Update Name description
  register(event) {
    const loading = this.loadingService.show('Cadastrar categoria...');
    return this.write = this.categoryService.register(event.value).subscribe({
      next: category => this.messsage(category, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  // Name
  restore(event) {
    const loading = this.loadingService.show('Restaurar categoria...');
    return this.write = this.categoryService.restore(event.value).subscribe({
      next: category => this.messsage(category, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(category, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(category === null || category === void 0 ? void 0 : category.message, loading, this.write);
  }
  setButton() {
    const btn = this.categoryUtilities.setButton(this.action);
    if (btn) this.attrButton = btn;
  }
  getData() {
    this.config = Object.assign({}, this.category);
  }
};
FormComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService
}, {
  type: src_app_utilities_category_category_utilities_service__WEBPACK_IMPORTED_MODULE_4__.CategoryUtilities
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
}];
FormComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
FormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormComponent);


/***/ }),

/***/ 74463:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/form/form.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/header-modal/header-modal.module */ 32728);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ 69101);
/* harmony import */ var src_app_utilities_category_category_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/category/category-utilities.service */ 73272);









let FormPageModule = class FormPageModule {};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule, src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_0__.HeaderModalModule],
  declarations: [_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent],
  providers: [src_app_utilities_category_category_utilities_service__WEBPACK_IMPORTED_MODULE_3__.CategoryUtilities]
})], FormPageModule);


/***/ }),

/***/ 62507:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/category/service/category.service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementService": () => (/* binding */ CategoryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);







let CategoryAnnouncementService = class CategoryAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, managementAnnouncementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.managementAnnouncementService = managementAnnouncementService;
    this._categoryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.setApi = `category`;
  }
  get getCategoryEvent() {
    return this._categoryEvent.asObservable();
  }
  set categoryEvent(value) {
    this._categoryEvent.emit(value);
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  category(category) {
    if (category.id) {
      return this.patch(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(announcement_ => {
        this.managementAnnouncementService.setCategoryAnnouncement = announcement_;
        return this.categoryEvent = announcement_;
      }));
    } else {
      return this.create(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(announcement_ => {
        this.managementAnnouncementService.setCategoryAnnouncement = announcement_;
        return this.categoryEvent = announcement_;
      }));
    }
  }
};
CategoryAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__.ManagementAnnouncementService
}];
CategoryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CategoryAnnouncementService);


/***/ }),

/***/ 73272:
/*!******************************************************************!*\
  !*** ./src/app/utilities/category/category-utilities.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryUtilities": () => (/* binding */ CategoryUtilities)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CategoryUtilities = class CategoryUtilities {
  setButton(action) {
    switch (action) {
      case 'register':
        return {
          route: '/category',
          icon: 'create',
          label: 'Cadastrar',
          aria: 'Cadastrar categoria.',
          title: 'Cadastrar categoria.'
        };
      case 'name':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          aria: 'Salvar nome e descrição.',
          title: 'Salvar nome e descrição.'
        };
      case 'destroy':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.'
        };
      case 'drop':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.'
        };
      case 'restore':
        return {
          route: '/restore',
          icon: 'refresh',
          label: 'Restaurar categoria',
          aria: 'Restaurar categoria.',
          title: 'Restaurar categoria.'
        };
      default:
        return undefined;
    }
  }
};
CategoryUtilities = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], CategoryUtilities);


/***/ }),

/***/ 26661:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2574:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/form/form.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/categoryAnnouncement/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92852:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons [slot]=\"isPlt ? 'end' : 'start'\">\n      <ion-fab-button size=\"small\" (click)=\"close()\" shape=\"round\">\n        <ion-icon\n          color=\"light\"\n          [name]=\"isPlt ? 'close' : 'arrow-back'\"\n        ></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n    <ion-title>{{ label }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n";

/***/ }),

/***/ 43960:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/form/form.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Email info -->\n    <ion-card [hidden]=\"action !== 'email'\">\n      <ion-card-header color=\"warning\">\n        <ion-card-subtitle color=\"light\">\n          &#9679; Insira um email válido.<br />\n          &#9679; Será enviado uma menssagem com um prazo de 10 minutos a partir\n          do seu recebimento.<br />\n          &#9679; Verifique em sua caixa de entrada de emails.<br />\n          &#9679; Clique no botão alterar email.\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <!-- Destroy info -->\n    <ion-card [hidden]=\"action !== 'destroy'\">\n      <ion-card-header color=\"warning\">\n        <ion-card-title>Atenção!</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-margin-top\">\n        <p>Você está prestes a excluir uma categoria.</p>\n        <p>\n          Esta ação tera um prazo de 90 dias para ser desfeita após está data\n          todos os dados serão permanentemente excluido do sistema.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Destroy info -->\n    <ion-card [hidden]=\"action !== 'drop'\">\n      <ion-card-header color=\"warning\">\n        <ion-card-title>Atenção!</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-margin-top\">\n        <p>Todos os dados da categoria serão descartados.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_administrator_categoryAnnouncement_form_form_module_ts-src_ap-2bb023.js.map