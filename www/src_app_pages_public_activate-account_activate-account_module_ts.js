"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_activate-account_activate-account_module_ts"],{

/***/ 56819:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/public/activate-account/activate-account-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateAccountPageRoutingModule": () => (/* binding */ ActivateAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/guard/public-autorization/public-autorization.guard */ 61069);
/* harmony import */ var _activate_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-account.page */ 82654);
/* harmony import */ var _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/resolve.guard */ 32267);






const routes = [{
  path: '',
  component: _activate_account_page__WEBPACK_IMPORTED_MODULE_1__.ActivateAccountPage,
  canActivate: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PublicAutorizationGuard],
  canLoad: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PublicAutorizationGuard],
  resolve: {
    activateAccount: _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.ActivateAccountResolver
  }
}];
let ActivateAccountPageRoutingModule = class ActivateAccountPageRoutingModule {};
ActivateAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ActivateAccountPageRoutingModule);


/***/ }),

/***/ 74085:
/*!**************************************************************************!*\
  !*** ./src/app/pages/public/activate-account/activate-account.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateAccountPageModule": () => (/* binding */ ActivateAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _activate_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-account-routing.module */ 56819);
/* harmony import */ var _activate_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-account.page */ 82654);
/* harmony import */ var _services_activate_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/activate-account.service */ 5054);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);










let ActivateAccountPageModule = class ActivateAccountPageModule {};
ActivateAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _activate_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivateAccountPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule],
  declarations: [_activate_account_page__WEBPACK_IMPORTED_MODULE_1__.ActivateAccountPage],
  providers: [_services_activate_account_service__WEBPACK_IMPORTED_MODULE_2__.ActivateAccountService]
})], ActivateAccountPageModule);


/***/ }),

/***/ 82654:
/*!************************************************************************!*\
  !*** ./src/app/pages/public/activate-account/activate-account.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateAccountPage": () => (/* binding */ ActivateAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activate_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-account.page.html?ngResource */ 64488);
/* harmony import */ var _activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-account.page.scss?ngResource */ 86744);
/* harmony import */ var _activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _services_activate_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/activate-account.service */ 5054);








let ActivateAccountPage = class ActivateAccountPage {
  constructor(activateCountService, activatedRoute) {
    this.activateCountService = activateCountService;
    this.activatedRoute = activatedRoute;
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  get key() {
    return this.activatedRoute.snapshot.data['activateAccount'];
  }
  ngOnInit() {
    this.thereIsKeyForActivateCount();
  }
  thereIsKeyForActivateCount() {
    return this.activateCount$ = this.activateCountService.sendActivationToken(this.key).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => this.setErrors(error)));
  }
  setErrors(error) {
    this.error = error === null || error === void 0 ? void 0 : error.error;
    this.error$.next(true);
    return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
  }
};
ActivateAccountPage.ctorParameters = () => [{
  type: _services_activate_account_service__WEBPACK_IMPORTED_MODULE_2__.ActivateAccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}];
ActivateAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-activate-account',
  template: _activate_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ActivateAccountPage);


/***/ }),

/***/ 32267:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/activate-account/guard/resolve.guard.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateAccountResolver": () => (/* binding */ ActivateAccountResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);



let ActivateAccountResolver = class ActivateAccountResolver {
  constructor(router) {
    this.router = router;
  }
  resolve(route) {
    const {
      token
    } = route.params;
    if (token && typeof token === 'string') {
      return token;
    }
    return this.router.parseUrl('/');
  }
};
ActivateAccountResolver.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router
}];
ActivateAccountResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ActivateAccountResolver);


/***/ }),

/***/ 5054:
/*!************************************************************************************!*\
  !*** ./src/app/pages/public/activate-account/services/activate-account.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateAccountService": () => (/* binding */ ActivateAccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);





let ActivateAccountService = class ActivateAccountService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.setApi = `activate-account`;
  }
  sendActivationToken(activate) {
    return this.find(activate);
  }
};
ActivateAccountService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}];
ActivateAccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], ActivateAccountService);


/***/ }),

/***/ 64488:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/public/activate-account/activate-account.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n\n    <div *ngIf=\"activateCount$ | async;let active ; else loading\">\n\n      <ion-row class=\"ion-justify-content-center\">\n\n        <ion-col size=\"12\">\n\n          <ion-card>\n\n            <ion-card-header color=\"primary\">\n              <ion-card-subtitle>\n                <ion-icon name=\"thumbs-up\"></ion-icon> Verificão de contas dos usuários!\n              </ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content class=\"ion-margin-top\">\n\n              <ion-text>\n                <p>{{ active?.message }}</p>\n              </ion-text>\n\n\n              <ion-button expand=\"block\" color=\"primary\" routerLink=\"/entrar\" routerDirection=\"forward\"\n                class=\"ion-margin-top\">\n                <ion-icon class=\"ion-margin-end\" name=\"log-in\"></ion-icon> login\n              </ion-button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n        </ion-col>\n\n      </ion-row>\n    </div>\n\n    <ng-template #loading>\n      <ion-row>\n        <ion-col>\n          <div *ngIf=\"error$ | async; else loadingNoError\">\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle>\n                  <ion-icon name=\"warning\"></ion-icon> Atenção !\n                </ion-card-subtitle>\n              </ion-card-header>\n              <ion-card-content class=\"ion-margin-top\">\n\n                <ion-text>\n                  <p>{{ error }}</p>\n                </ion-text>\n\n                <ion-button expand=\"block\" color=\"primary\" routerLink=\"/entrar\" routerDirection=\"forward\"\n                  class=\"ion-margin-top\">\n                  <ion-icon class=\"ion-margin-end\" name=\"log-in\"></ion-icon> login\n                </ion-button>\n\n              </ion-card-content>\n            </ion-card>\n          </div>\n          <ng-template #loadingNoError>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-skeleton-text animated style=\"width: 100%; height: 50px;\">\n                </ion-skeleton-text>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-skeleton-text animated style=\"width: 100%; height: 13px; border-radius: 20px;\">\n                </ion-skeleton-text>\n              </ion-col>\n              <ion-col size=\"12\" class=\"ion-margin-top\">\n                <ion-skeleton-text animated style=\"max-width: 150px; height: 33px; border-radius: 4px; margin: auto;\">\n                </ion-skeleton-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_activate-account_activate-account_module_ts.js.map