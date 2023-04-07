(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_service-terms_service-terms_module_ts"],{

/***/ 97000:
/*!****************************************************************************!*\
  !*** ./src/app/pages/public/service-terms/service-terms-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceTermsPageRoutingModule": () => (/* binding */ ServiceTermsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_terms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-terms.page */ 13266);




const routes = [{
  path: '',
  component: _service_terms_page__WEBPACK_IMPORTED_MODULE_0__.ServiceTermsPage
}];
let ServiceTermsPageRoutingModule = class ServiceTermsPageRoutingModule {};
ServiceTermsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ServiceTermsPageRoutingModule);


/***/ }),

/***/ 38969:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/service-terms/service-terms.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceTermsPageModule": () => (/* binding */ ServiceTermsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_terms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-terms-routing.module */ 97000);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var _service_terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-terms.page */ 13266);









let ServiceTermsPageModule = class ServiceTermsPageModule {};
ServiceTermsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _service_terms_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceTermsPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule],
  declarations: [_service_terms_page__WEBPACK_IMPORTED_MODULE_3__.ServiceTermsPage]
})], ServiceTermsPageModule);


/***/ }),

/***/ 13266:
/*!******************************************************************!*\
  !*** ./src/app/pages/public/service-terms/service-terms.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceTermsPage": () => (/* binding */ ServiceTermsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _service_terms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-terms.page.html?ngResource */ 11080);
/* harmony import */ var _service_terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-terms.page.scss?ngResource */ 51839);
/* harmony import */ var _service_terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_service_terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ServiceTermsPage = class ServiceTermsPage {
  constructor() {}
  ngOnInit() {}
};
ServiceTermsPage.ctorParameters = () => [];
ServiceTermsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-service-terms',
  template: _service_terms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_service_terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ServiceTermsPage);


/***/ }),

/***/ 51839:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/service-terms/service-terms.page.scss?ngResource ***!
  \*******************************************************************************/
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

/***/ 11080:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/service-terms/service-terms.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <ion-card> asdf </ion-card>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_service-terms_service-terms_module_ts.js.map