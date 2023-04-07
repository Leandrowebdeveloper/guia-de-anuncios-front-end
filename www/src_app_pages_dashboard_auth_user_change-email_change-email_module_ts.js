(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_auth_user_change-email_change-email_module_ts"],{

/***/ 34906:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/user/change-email/change-email-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailPageRoutingModule": () => (/* binding */ ChangeEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _change_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email.page */ 79856);




const routes = [{
  path: '',
  component: _change_email_page__WEBPACK_IMPORTED_MODULE_0__.ChangeEmailPage
}];
let ChangeEmailPageRoutingModule = class ChangeEmailPageRoutingModule {};
ChangeEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ChangeEmailPageRoutingModule);


/***/ }),

/***/ 28954:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/user/change-email/change-email.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailPageModule": () => (/* binding */ ChangeEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email-routing.module */ 34906);
/* harmony import */ var _change_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-email.page */ 79856);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);









let ChangeEmailPageModule = class ChangeEmailPageModule {};
ChangeEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _change_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeEmailPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule],
  declarations: [_change_email_page__WEBPACK_IMPORTED_MODULE_1__.ChangeEmailPage]
})], ChangeEmailPageModule);


/***/ }),

/***/ 79856:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/user/change-email/change-email.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailPage": () => (/* binding */ ChangeEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email.page.html?ngResource */ 54549);
/* harmony import */ var _change_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-email.page.scss?ngResource */ 5826);
/* harmony import */ var _change_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_change_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);








let ChangeEmailPage = class ChangeEmailPage {
  constructor(authService, activatedRoute) {
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.getUser();
    this.changeEmail();
    this.getLocation();
    this.filterUrl();
  }
  getLocation() {
    if (this.authService.getSlug) {
      this.location = ['/painel-de-controle', 'admin', 'usuario', this.authService.getSlug];
    }
  }
  filterUrl() {
    if (this.authService.getLevel === '2') {
      this.location.splice(1, 1);
    }
  }
  getUser() {
    this.user = this.activatedRoute.snapshot.data['changeEmail'];
  }
  changeEmail() {
    if (this.user) {
      const {
        token,
        slug
      } = this.user;
      return this.user$ = this.authService.emailIsValidToChange({
        token,
        slug
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user => this.success(user)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => this.setErrors(error)));
    }
  }
  success(user) {
    this.authService.setEmail = user;
  }
  setErrors(error) {
    this.error = error === null || error === void 0 ? void 0 : error.error;
    this.error$.next(true);
    return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
  }
};
ChangeEmailPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}];
ChangeEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-change-email',
  template: _change_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_change_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChangeEmailPage);


/***/ }),

/***/ 5826:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/user/change-email/change-email.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card-subtitle {\n  display: flex;\n  align-items: center;\n  font-size: 100%;\n}\nion-card-subtitle ion-icon {\n  margin-right: 10px;\n  font-size: 160%;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/auth/user/change-email/change-email.page.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;AACJ;AAAI;EACE,kBAAA;EACA,eAAA;AAEN","sourcesContent":["ion-card-subtitle {\n    display: flex;\n    align-items: center;\n    font-size: 100%;\n    ion-icon {\n      margin-right: 10px;\n      font-size: 160%;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 54549:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/user/change-email/change-email.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <div *ngIf=\"user$ | async;let active ; else loading\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-header color=\"primary\">\n              <ion-card-subtitle>\n                <ion-icon name=\"thumbs-up\"></ion-icon> Alteração de email.\n              </ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content class=\"ion-margin-top\">\n              <ion-text>\n                <p>{{ active?.message }}</p>\n              </ion-text>\n\n              <ion-button\n                expand=\"block\"\n                color=\"primary\"\n                routerLink=\"/painel-de-controle\"\n                routerDirection=\"back\"\n                class=\"ion-margin-top\"\n              >\n                <ion-icon class=\"ion-margin-end\" name=\"log-in\"></ion-icon>\n                Painel de controle\n              </ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ng-template #loading>\n      <ion-row>\n        <ion-col>\n          <div *ngIf=\"error$ | async; else loadingNoError\">\n            <ion-card>\n              <ion-card-header color=\"warning\">\n                <ion-card-subtitle>\n                  <ion-icon name=\"warning\"></ion-icon> Atenção !\n                </ion-card-subtitle>\n              </ion-card-header>\n              <ion-card-content class=\"ion-margin-top\">\n                <ion-text>\n                  <p>{{ error }}</p>\n                </ion-text>\n\n                <ion-button\n                  expand=\"block\"\n                  color=\"primary\"\n                  routerLink=\"/painel-de-controle\"\n                  routerDirection=\"back\"\n                  class=\"ion-margin-top\"\n                >\n                  <ion-icon class=\"ion-margin-end\" name=\"person\"></ion-icon>\n                  usuário\n                </ion-button>\n              </ion-card-content>\n            </ion-card>\n          </div>\n          <ng-template #loadingNoError>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-skeleton-text animated style=\"width: 100%; height: 50px\">\n                </ion-skeleton-text>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-skeleton-text\n                  animated\n                  style=\"width: 100%; height: 13px; border-radius: 20px\"\n                >\n                </ion-skeleton-text>\n              </ion-col>\n              <ion-col size=\"12\" class=\"ion-margin-top\">\n                <ion-skeleton-text\n                  animated\n                  style=\"\n                    max-width: 150px;\n                    height: 33px;\n                    border-radius: 4px;\n                    margin: auto;\n                  \"\n                >\n                </ion-skeleton-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_auth_user_change-email_change-email_module_ts.js.map