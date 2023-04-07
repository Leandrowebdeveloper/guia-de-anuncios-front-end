(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_auth_dashboard_module_ts"],{

/***/ 50568:
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/dashboard-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/guard/private-autorization/private-autorization.guard */ 88322);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 86389);
/* harmony import */ var _user_change_email_guard_change_email_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/change-email/guard/change-email.guard */ 42508);






const routes = [{
  path: '',
  component: _dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage
}, {
  path: 'usuario/:id/alterar-email/:token',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_auth_user_change-email_change-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user/change-email/change-email.module */ 28954)).then(m => m.ChangeEmailPageModule),
  resolve: {
    changeEmail: _user_change_email_guard_change_email_guard__WEBPACK_IMPORTED_MODULE_2__.ChangeEmailResolver
  }
}, {
  path: 'usuario',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_header-modal_header-modal_module_ts-src_app_services_image_image_service_t-cc5ba60")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/management.module */ 32787)).then(m => m.UserPageModule)
}, {
  path: 'anuncio',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_announcement-component_module_ts-src_a-c06dca"), __webpack_require__.e("src_app_pages_dashboard_auth_announcement_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./announcement/dashboard.module */ 44981)).then(m => m.DashboardPageModule)
}];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
  providers: [_user_change_email_guard_change_email_guard__WEBPACK_IMPORTED_MODULE_2__.ChangeEmailResolver]
})], DashboardPageRoutingModule);


/***/ }),

/***/ 27361:
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/auth/dashboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50568);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 86389);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);









let DashboardPageModule = class DashboardPageModule {};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule],
  declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
})], DashboardPageModule);


/***/ }),

/***/ 86389:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/auth/dashboard.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 43255);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 2483);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DashboardPage = class DashboardPage {
  constructor() {
    this.nav = [{
      name: 'Usuário',
      title: 'Manutenção do usuário.',
      router: ['/painel-de-controle', 'usuario'],
      icon: 'person'
    }, {
      name: 'Anúncio',
      title: 'Manutenção do anúncio.',
      router: ['/painel-de-controle', 'anuncio'],
      icon: 'megaphone'
    }, {
      name: 'Extatística',
      title: 'Manutenção do anúncios.',
      router: ['/painel-de-controle', 'extatistica'],
      icon: 'analytics'
    }];
  }
};
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardPage);


/***/ }),

/***/ 2483:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/dashboard.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-card ion-card-title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-card ion-card-title ion-icon {\n  font-size: 36px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/auth/dashboard.page.scss"],"names":[],"mappings":"AACA;EACE,aAAA;EAAe,sBAAA;EAAwB,mBAAA;AAEzC;AADE;EACI,aAAA;EAAe,sBAAA;EAAwB,mBAAA;AAK7C;AAJM;EACI,eAAA;AAMV","sourcesContent":["\nion-card {\n  display: flex; flex-direction: column; align-items: center;\n  ion-card-title {\n      display: flex; flex-direction: column; align-items: center;\n      ion-icon{\n          font-size: 36px;\n      }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43255:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/dashboard.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-grid fixed>\n\n        <ion-grid class=\"grid\">\n            <ion-row>\n\n                <ion-col *ngFor=\"let item of nav\" size-xl=\"4\" size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size=\"12\">\n                    <ion-card [title]=\"item?.title\">\n                        <ion-card-header>\n                            <ion-card-title color=\"light\">\n                                <ion-icon color=\"medium\" [name]=\"item?.icon\"></ion-icon> <span>{{ item?.name }}</span>\n                            </ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-button color=\"medium\" [routerLink]=\"item?.router\" expand=\"block\"\n                                routerDirection=\"forward\" fill=\"outline\" size=\"small\" slot=\"end\"><ion-icon name=\"chevron-forward\"></ion-icon>\n                            </ion-button>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n\n    </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_auth_dashboard_module_ts.js.map