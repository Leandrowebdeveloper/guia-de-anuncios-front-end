(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_news_news_module_ts"],{

/***/ 95077:
/*!**********************************************************!*\
  !*** ./src/app/pages/public/news/news-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageRoutingModule": () => (/* binding */ NewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page */ 81181);




const routes = [{
  path: '',
  component: _news_page__WEBPACK_IMPORTED_MODULE_0__.NewsPage
}];
let NewsPageRoutingModule = class NewsPageRoutingModule {};
NewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NewsPageRoutingModule);


/***/ }),

/***/ 16858:
/*!**************************************************!*\
  !*** ./src/app/pages/public/news/news.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageModule": () => (/* binding */ NewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page */ 81181);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-routing.module */ 95077);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);









let NewsPageModule = class NewsPageModule {};
NewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _news_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewsPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule],
  declarations: [_news_page__WEBPACK_IMPORTED_MODULE_0__.NewsPage]
})], NewsPageModule);


/***/ }),

/***/ 81181:
/*!************************************************!*\
  !*** ./src/app/pages/public/news/news.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPage": () => (/* binding */ NewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _news_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page.html?ngResource */ 48033);
/* harmony import */ var _news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.page.scss?ngResource */ 8788);
/* harmony import */ var _news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let NewsPage = class NewsPage {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      // await this.authService.login();
    });
  }
};
NewsPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}];
NewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-news',
  template: _news_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewsPage);


/***/ }),

/***/ 8788:
/*!*************************************************************!*\
  !*** ./src/app/pages/public/news/news.page.scss?ngResource ***!
  \*************************************************************/
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

/***/ 48033:
/*!*************************************************************!*\
  !*** ./src/app/pages/public/news/news.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n\n\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_news_news_module_ts.js.map