(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_logout_logout_module_ts"],{

/***/ 88779:
/*!**************************************************************!*\
  !*** ./src/app/pages/public/logout/logout-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageRoutingModule": () => (/* binding */ LogoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/guard/private-autorization/private-autorization.guard */ 88322);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page */ 46471);





const routes = [{
  path: '',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  component: _logout_page__WEBPACK_IMPORTED_MODULE_1__.LogoutPage
}];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {};
LogoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], LogoutPageRoutingModule);


/***/ }),

/***/ 24180:
/*!******************************************************!*\
  !*** ./src/app/pages/public/logout/logout.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageModule": () => (/* binding */ LogoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout-routing.module */ 88779);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page */ 46471);
/* harmony import */ var _service_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/logout.service */ 6149);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);










let LogoutPageModule = class LogoutPageModule {};
LogoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogoutPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule],
  declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_1__.LogoutPage],
  providers: [_service_logout_service__WEBPACK_IMPORTED_MODULE_2__.LogoutService]
})], LogoutPageModule);


/***/ }),

/***/ 46471:
/*!****************************************************!*\
  !*** ./src/app/pages/public/logout/logout.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPage": () => (/* binding */ LogoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _logout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.page.html?ngResource */ 46447);
/* harmony import */ var _logout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page.scss?ngResource */ 86128);
/* harmony import */ var _logout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/logout.service */ 6149);






let LogoutPage = class LogoutPage {
  constructor(navCtrl, logoutService) {
    this.navCtrl = navCtrl;
    this.logoutService = logoutService;
  }
  logout_() {
    return this.logout = this.logoutService.destroySession().subscribe({
      next: () => this.logout.unsubscribe()
    });
  }
  back() {
    return this.navCtrl.back();
  }
};
LogoutPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
}, {
  type: _service_logout_service__WEBPACK_IMPORTED_MODULE_2__.LogoutService
}];
LogoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-logout',
  template: _logout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_logout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LogoutPage);


/***/ }),

/***/ 6149:
/*!***************************************************************!*\
  !*** ./src/app/pages/public/logout/service/logout.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutService": () => (/* binding */ LogoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);












let LogoutService = class LogoutService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService {
  constructor(http, storageService, authService, navCtrl, loadingService, messageService, helpsService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.authService = authService;
    this.navCtrl = navCtrl;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.helpsService = helpsService;
    this.setApi = `logout`;
  }
  destroySession() {
    const loading = this.loading();
    return this.findAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(user => this.success(user, loading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.error(error, loading);
      return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
    })));
  }
  success(user, loading) {
    this.helpsService.delay(() => {
      this.setAuthUser(user);
      this.clearsSessionAndDatabaseStorage();
    }, 2500);
    this.disableLoadingAndGoToLoginPage(loading);
  }
  loading() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.loadingService.show('Saindo do sistema...');
    });
  }
  disableLoading(loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      return this.helpsService.delay(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
        return yield (yield loading).dismiss();
      }), 2000);
    });
  }
  error(error, loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      yield this.disableLoading(loading);
      return this.messageService.error(error);
    });
  }
  disableLoadingAndGoToLoginPage(loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      yield this.disableLoading(loading);
      return yield this.goToLoginPage();
    });
  }
  goToLoginPage() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      return this.helpsService.delay(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
        return yield this.navCtrl.navigateForward('/entrar');
      }), 2500);
    });
  }
  clearsSessionAndDatabaseStorage() {
    this.removeTokenStorageSession();
    this.removeTokenStorageDatabase();
  }
  removeTokenStorageSession() {
    return sessionStorage.removeItem('token');
  }
  removeTokenStorageDatabase() {
    return this.storageService.clean();
  }
  setAuthUser(user) {
    this.authService.setUser = user;
    this.authService.setApi = '';
    return this.authService.setIsLoggedIn = user;
  }
};
LogoutService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_1__.HelpsService
}];
LogoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()], LogoutService);


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

/***/ 86128:
/*!*****************************************************************!*\
  !*** ./src/app/pages/public/logout/logout.page.scss?ngResource ***!
  \*****************************************************************/
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

/***/ 46447:
/*!*****************************************************************!*\
  !*** ./src/app/pages/public/logout/logout.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-grid fixed>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>Você pretende sair do sistema?</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-grid class=\"ion-margin-vertical\">\n                    <ion-row>\n                        <ion-col size=\"6\">\n                            <ion-button (click)=\"logout_()\" expand=\"block\">\n                                <ion-icon name=\"log-out\"></ion-icon>&nbsp; sim\n                            </ion-button>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <ion-button (click)=\"back()\" expand=\"block\">\n                                <ion-icon name=\"log-in\"></ion-icon>&nbsp; não\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n    </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_logout_logout_module_ts.js.map