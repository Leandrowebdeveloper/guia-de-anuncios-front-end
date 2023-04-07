(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_system-access-admin_system-access-admin_module_ts"],{

/***/ 71902:
/*!*************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/guard/resolve.guard.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAdminResolver": () => (/* binding */ LoginAdminResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _services_login_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login-admin.service */ 57438);






let LoginAdminResolver = class LoginAdminResolver {
  constructor(loginAdminService, router) {
    this.loginAdminService = loginAdminService;
    this.router = router;
  }
  resolve(route) {
    return this.loginAdminService.requirement().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      this.router.parseUrl('/404');
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }));
  }
};
LoginAdminResolver.ctorParameters = () => [{
  type: _services_login_admin_service__WEBPACK_IMPORTED_MODULE_0__.LoginAdminService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}];
LoginAdminResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], LoginAdminResolver);


/***/ }),

/***/ 57438:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/services/login-admin.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAdminService": () => (/* binding */ LoginAdminService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);








let LoginAdminService = class LoginAdminService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, messageService, authService, helpsService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.authService = authService;
    this.helpsService = helpsService;
    this.attrButton = {
      route: '/entrar',
      icon: 'log-in',
      label: 'Entrar',
      aria: 'Acessar o sistema.',
      title: 'Acessar o sistema.'
    };
    this.setApi = `login-admin`;
  }
  get stayConnected() {
    return this.$stayConnected;
  }
  set stayConnected(value) {
    this.$stayConnected = value;
  }
  storesTokenDatabaseOrSession(user) {
    if (this.stayConnected) {
      return this.setUserAndTokenInDatabase(user);
    }
    return this.setUserAndTokenInSession(user);
  }
  isLogin(user) {
    this.helpsService.delay(() => this.storesTokenDatabaseOrSession(user), 2500);
  }
  sendLoginData(user) {
    this.stayConnected = user.stayConnected ? true : false;
    return this.create(user);
  }
  error(error, loading, subscribe) {
    return this.messageService.error(error, loading, subscribe);
  }
  goToUserPage() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      return this.helpsService.delay(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        return yield this.authService.unauthenticatedUserAllowLoginRoute();
      }), 2500);
    });
  }
  setTokenSession(user) {
    return sessionStorage.setItem('token', user === null || user === void 0 ? void 0 : user.token);
  }
  setTokenDatabase(user) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.storageService.setAuthUserToken(user);
    });
  }
  setAuthUser(user) {
    this.authService.setUser = user;
    return this.authService.setIsLoggedIn = user;
  }
  setUserAndTokenInSession(user) {
    this.setAuthUser(user);
    this.setTokenSession(user);
    this.storageService.setAuthToken = user === null || user === void 0 ? void 0 : user.token;
  }
  setUserAndTokenInDatabase(user) {
    this.setAuthUser(user);
    this.setTokenDatabase(user);
    this.storageService.setAuthToken = user === null || user === void 0 ? void 0 : user.token;
  }
};
LoginAdminService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}];
LoginAdminService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], LoginAdminService);


/***/ }),

/***/ 34880:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/system-access-admin-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_components_form_guard_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/form/guard/deactivate.guard */ 67120);
/* harmony import */ var src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/guard/public-autorization/public-autorization.guard */ 61069);
/* harmony import */ var _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/resolve.guard */ 71902);
/* harmony import */ var _system_access_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-access-admin.page */ 99051);







const routes = [{
  path: '',
  component: _system_access_admin_page__WEBPACK_IMPORTED_MODULE_3__.SystemAccessAdminPage,
  canActivate: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canDeactivate: [src_app_components_form_guard_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.DeactivateGuard],
  resolve: {
    systemAccess: _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.LoginAdminResolver
  }
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
  providers: [_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.LoginAdminResolver]
})], LoginPageRoutingModule);


/***/ }),

/***/ 90796:
/*!********************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/system-access-admin.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAccessAdminPageModule": () => (/* binding */ SystemAccessAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _system_access_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-access-admin-routing.module */ 34880);
/* harmony import */ var _system_access_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-access-admin.page */ 99051);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var _services_login_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login-admin.service */ 57438);
/* harmony import */ var src_app_components_requisitionLimit_requisition_limit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/requisitionLimit/requisition-limit.module */ 80908);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);











let SystemAccessAdminPageModule = class SystemAccessAdminPageModule {};
SystemAccessAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _system_access_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_2__.FormComponentModule, src_app_components_requisitionLimit_requisition_limit_module__WEBPACK_IMPORTED_MODULE_4__.RequisitionLimitComponentModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule],
  declarations: [_system_access_admin_page__WEBPACK_IMPORTED_MODULE_1__.SystemAccessAdminPage],
  providers: [_services_login_admin_service__WEBPACK_IMPORTED_MODULE_3__.LoginAdminService]
})], SystemAccessAdminPageModule);


/***/ }),

/***/ 99051:
/*!******************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/system-access-admin.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAccessAdminPage": () => (/* binding */ SystemAccessAdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _system_access_admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-access-admin.page.html?ngResource */ 10742);
/* harmony import */ var _system_access_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-access-admin.page.scss?ngResource */ 20502);
/* harmony import */ var _system_access_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_system_access_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../activate-account/activate-account.page.scss?ngResource */ 86744);
/* harmony import */ var _activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../utilities/loading/loading.service */ 78039);
/* harmony import */ var _services_login_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login-admin.service */ 57438);










let SystemAccessAdminPage = class SystemAccessAdminPage {
  constructor(activatedRoute, helpsService, loginAdminService, messageService, loadingService) {
    this.activatedRoute = activatedRoute;
    this.helpsService = helpsService;
    this.loginAdminService = loginAdminService;
    this.messageService = messageService;
    this.loadingService = loadingService;
  }
  ngOnInit() {
    this.setConfig();
    this.setAttrButtonPage();
    this.hasDesable();
    this.initAttrButton();
    this.activeRoute();
  }
  activeRoute() {
    var _a, _b, _c, _d;
    if ((_b = (_a = this.activatedRoute.snapshot.parent) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path) {
      this.route = (_d = (_c = this.activatedRoute.snapshot.parent) === null || _c === void 0 ? void 0 : _c.routeConfig) === null || _d === void 0 ? void 0 : _d.path;
    }
  }
  canDeactivate() {
    if (this.authorizeRoute()) {
      return this.authorizeRoute();
    } else if (this.canAuthorizeTheRoute()) {
      return this.canDeactivatedConfirmAlert();
    }
    return true;
  }
  onSubmit(event) {
    return this.login(event);
  }
  importForm(event) {
    return this.form = event;
  }
  setDesable(event) {
    this.desable = event;
  }
  getTimeLeftToUnlock() {
    var _a;
    this.time = (_a = this.requiriment) === null || _a === void 0 ? void 0 : _a.delay;
  }
  initAttrButton() {
    this.attrButton = this.loginAdminService.attrButton;
  }
  setAttrButtonPage() {
    this.attrButtonPage = this.loginAdminService.attrButton;
  }
  disableCanDeactivate(user) {
    return this.urlTree = user.auth;
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
  login(event) {
    const loading = this.loadingService.show('Acessar o sistema...');
    return this.systemAccess = this.loginAdminService.sendLoginData(event.value).subscribe({
      next: login => {
        this.success(login, loading);
      },
      error: error => this.error(error, loading)
    });
  }
  success(user, loading) {
    this.disableCanDeactivate(user);
    this.formUpdate();
    this.loginAdminService.isLogin(user);
    this.loginAdminService.goToUserPage();
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.systemAccess);
  }
  error(error, loading) {
    this.requisitionLimit(error);
    return this.loginAdminService.error(error, loading, this.systemAccess);
  }
  requisitionLimit(error) {
    if (error.status === 403) {
      this.helpsService.delay(() => {
        this.setError(error);
        this.hasDesable();
        this.formUpdate();
      }, 2500);
    }
  }
  setError(error) {
    this.requiriment = error === null || error === void 0 ? void 0 : error.error;
  }
  formUpdate() {
    this.helpsService.delay(() => {
      this.helpsService.correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(this.form, this.config);
    }, 2500);
  }
  setConfig() {
    this.addConfig();
    this.addRequirement();
  }
  addRequirement() {
    var _a;
    this.requiriment = (_a = this.config) === null || _a === void 0 ? void 0 : _a.requisitionLimit;
  }
  addConfig() {
    var _a, _b, _c;
    this.config = (_c = (_b = (_a = this.activatedRoute) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c['systemAccess'];
  }
  hasDesable() {
    this.getDesable();
    if (this.desable) {
      this.getTimeLeftToUnlock();
    }
  }
  getDesable() {
    if (this.requiriment) {
      this.addDesable();
    }
  }
  addDesable() {
    this.desable = this.isDesabled();
  }
  isDesabled() {
    return this.requiriment.count >= 3;
  }
};
SystemAccessAdminPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_3__.HelpsService
}, {
  type: _services_login_admin_service__WEBPACK_IMPORTED_MODULE_6__.LoginAdminService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: _utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}];
SystemAccessAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-system-access',
  template: _system_access_admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_system_access_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SystemAccessAdminPage);


/***/ }),

/***/ 20502:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/system-access-admin.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10742:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/public/system-access-admin/system-access-admin.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <div *ngIf=\"!desable; else Message\">\n      <app-form\n        (submitDataForm)=\"onSubmit($event)\"\n        (exportForm)=\"importForm($event)\"\n        [inputConfig]=\"config\"\n        [attrButton]=\"attrButton\"\n      ></app-form>\n    </div>\n\n    <ng-template #Message>\n      <app-requisition-limit\n        [time]=\"time\"\n        [route]=\"route\"\n        (desable)=\"setDesable($event)\"\n      ></app-requisition-limit>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_system-access-admin_system-access-admin_module_ts.js.map