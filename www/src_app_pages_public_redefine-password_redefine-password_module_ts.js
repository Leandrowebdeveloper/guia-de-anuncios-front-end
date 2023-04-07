(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_redefine-password_redefine-password_module_ts"],{

/***/ 50231:
/*!***********************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/guard/resolve.guard.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedefinePasswordResolver": () => (/* binding */ RedefinePasswordResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _services_redefine_password_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/redefine-password.service */ 71088);






let RedefinePasswordResolver = class RedefinePasswordResolver {
  constructor(router, redefineService) {
    this.router = router;
    this.redefineService = redefineService;
  }
  resolve(route) {
    var _a, _b;
    if ((_a = route.params) === null || _a === void 0 ? void 0 : _a.token) {
      return this.redefineService.requirement((_b = route.params) === null || _b === void 0 ? void 0 : _b.token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        this.router.parseUrl('/404');
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
      }));
    }
    return this.router.parseUrl('/');
  }
};
RedefinePasswordResolver.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _services_redefine_password_service__WEBPACK_IMPORTED_MODULE_0__.RedefinePasswordService
}];
RedefinePasswordResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], RedefinePasswordResolver);


/***/ }),

/***/ 40555:
/*!************************************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/redefine-password-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedefinePasswordPageRoutingModule": () => (/* binding */ RedefinePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _redefine_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redefine-password.page */ 64087);
/* harmony import */ var _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/resolve.guard */ 50231);
/* harmony import */ var src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/guard/public-autorization/public-autorization.guard */ 61069);






const routes = [{
  path: '',
  component: _redefine_password_page__WEBPACK_IMPORTED_MODULE_0__.RedefinePasswordPage,
  canActivate: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_2__.PublicAutorizationGuard],
  canLoad: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_2__.PublicAutorizationGuard],
  resolve: {
    redefinePassword: _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_1__.RedefinePasswordResolver
  }
}];
let RedefinePasswordPageRoutingModule = class RedefinePasswordPageRoutingModule {};
RedefinePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], RedefinePasswordPageRoutingModule);


/***/ }),

/***/ 49698:
/*!****************************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/redefine-password.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedefinePasswordPageModule": () => (/* binding */ RedefinePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _redefine_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redefine-password.page */ 64087);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/resolve.guard */ 50231);
/* harmony import */ var _services_redefine_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/redefine-password.service */ 71088);
/* harmony import */ var _redefine_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redefine-password-routing.module */ 40555);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);












let RedefinePasswordPageModule = class RedefinePasswordPageModule {};
RedefinePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _redefine_password_routing_module__WEBPACK_IMPORTED_MODULE_4__.RedefinePasswordPageRoutingModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule],
  declarations: [_redefine_password_page__WEBPACK_IMPORTED_MODULE_0__.RedefinePasswordPage],
  providers: [_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.RedefinePasswordResolver, _services_redefine_password_service__WEBPACK_IMPORTED_MODULE_3__.RedefinePasswordService]
})], RedefinePasswordPageModule);


/***/ }),

/***/ 64087:
/*!**************************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/redefine-password.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedefinePasswordPage": () => (/* binding */ RedefinePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _redefine_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redefine-password.page.html?ngResource */ 1165);
/* harmony import */ var _redefine_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redefine-password.page.scss?ngResource */ 93733);
/* harmony import */ var _redefine_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redefine_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_redefine_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/redefine-password.service */ 71088);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);









let RedefinePasswordPage = class RedefinePasswordPage {
  constructor(activatedRoute, helpsService, redefinePasswordService, messageService, loadingService) {
    this.activatedRoute = activatedRoute;
    this.helpsService = helpsService;
    this.redefinePasswordService = redefinePasswordService;
    this.messageService = messageService;
    this.loadingService = loadingService;
  }
  ngOnInit() {
    this.setConfig();
    this.setAttrButton();
    this.isActived();
    this.setMessageLinkInvalid();
  }
  canDeactivate() {
    if (this.authorizeRoute()) {
      return this.authorizeRoute();
    } else if (this.canAuthorizeTheRoute()) {
      return this.canDeactivatedConfirmAlert();
    }
    return true;
  }
  importForm(event) {
    this.form = event;
  }
  onSubmit(event) {
    const loading = this.loadingService.show('Recuperando senha...');
    return this.redefine = this.redefinePasswordService.passwordRecover(event.value).subscribe({
      next: user => this.success(user, loading),
      error: error => this.error(error, loading)
    });
  }
  setMessageLinkInvalid() {
    var _a;
    return this.message = (_a = this.user) === null || _a === void 0 ? void 0 : _a.message;
  }
  isActived() {
    var _a;
    return this.active = (_a = this.user) === null || _a === void 0 ? void 0 : _a.active;
  }
  disableCanDeactivate() {
    return this.urlTree = true;
  }
  authorizeRoute() {
    return this.urlTree;
  }
  canAuthorizeTheRoute() {
    return this.helpsService.isAuthorizeTheRoute(this.form);
  }
  canDeactivatedConfirmAlert() {
    return this.helpsService.messageAuthorizeTheRoute();
  }
  success(user, loading) {
    this.disableCanDeactivate();
    this.formUpdate();
    this.redefinePasswordService.goToLoginPage();
    return this.messageService.success(user.message, loading, this.redefine);
  }
  error(error, loading) {
    return this.redefinePasswordService.error(error, loading, this.redefine);
  }
  formUpdate() {
    return this.helpsService.delay(() => this.helpsService.correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(this.form, this.user), 2000);
  }
  setConfig() {
    this.user = this.activatedRoute.snapshot.data['redefinePassword'];
  }
  setAttrButton() {
    this.attrButton = {
      route: 'redefinir-senha',
      icon: 'arrow-up-circle',
      label: 'Redefinir senha',
      aria: 'Redefinir senha.',
      title: 'Redefinir senha.'
    };
  }
};
RedefinePasswordPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_5__.HelpsService
}, {
  type: _services_redefine_password_service__WEBPACK_IMPORTED_MODULE_4__.RedefinePasswordService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: _utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}];
RedefinePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-redefine-password',
  template: _redefine_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_redefine_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RedefinePasswordPage);


/***/ }),

/***/ 71088:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/services/redefine-password.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedefinePasswordService": () => (/* binding */ RedefinePasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);








let RedefinePasswordService = class RedefinePasswordService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, navCtrl, helpsService, messageService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.navCtrl = navCtrl;
    this.helpsService = helpsService;
    this.messageService = messageService;
    this.setApi = `redefine-password`;
  }
  passwordRecover(user) {
    return this.create(user);
  }
  error(error, loading, subscribe) {
    return this.messageService.error(error, loading, subscribe);
  }
  goToLoginPage() {
    return this.helpsService.delay(() => this.navCtrl.navigateForward('/entrar'), 2500);
  }
};
RedefinePasswordService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_1__.HelpsService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
RedefinePasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], RedefinePasswordService);


/***/ }),

/***/ 93733:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/redefine-password.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card-subtitle {\n  display: flex;\n  align-items: center;\n  font-size: 100%;\n}\nion-card-subtitle ion-icon {\n  margin-right: 10px;\n  font-size: 160%;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/redefine-password/redefine-password.page.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AACF;AAAE;EACE,kBAAA;EACA,eAAA;AAEJ","sourcesContent":["ion-card-subtitle {\n  display: flex;\n  align-items: center;\n  font-size: 100%;\n  ion-icon {\n    margin-right: 10px;\n    font-size: 160%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1165:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/public/redefine-password/redefine-password.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <div *ngIf=\"active; else Message\">\n\n      <app-form\n        (submitDataForm)=\"onSubmit($event)\"\n        (exportForm)=\"importForm($event)\"\n        [inputConfig]=\"user\"\n        [attrButton]=\"attrButton\"\n      ></app-form>\n\n    </div>\n    <ng-template #Message>\n      <ion-card>\n        <ion-card-header color=\"warning\">\n          <ion-card-title> &#x231B; Atenção ! </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"ion-margin-top\">\n          <div *ngIf=\"message; else Empty\">{{ message }}</div>\n          <ng-template #Empty>\n            O tempo maxímo para redefinir sua senha e de 10 minutos após o envio\n            do email.<br />\n          </ng-template>\n          Tente novamente.\n\n          <ion-button\n            expand=\"block\"\n            color=\"primary\"\n            [routerLink]=\"['/recuperar-senha']\"\n            routerDirection=\"forward\"\n            class=\"ion-margin-top\"\n          >\n            <ion-icon class=\"ion-margin-end\" name=\"key\"></ion-icon> Recuperar\n            senha\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_redefine-password_redefine-password_module_ts.js.map