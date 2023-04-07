(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_home_home_module_ts"],{

/***/ 28543:
/*!**********************************************************!*\
  !*** ./src/app/pages/public/home/home-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 59425);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
let HomePageRoutingModule = class HomePageRoutingModule {};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 71514:
/*!**************************************************!*\
  !*** ./src/app/pages/public/home/home.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 59425);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 28543);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);










let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
})], HomePageModule);


/***/ }),

/***/ 59425:
/*!************************************************!*\
  !*** ./src/app/pages/public/home/home.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 49647);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 20885);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/home.service */ 70759);
/* harmony import */ var src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/module-dark/module-dark.service */ 22129);









let HomePage = class HomePage {
  constructor(homeService, plt, moduleDarkService) {
    this.homeService = homeService;
    this.plt = plt;
    this.moduleDarkService = moduleDarkService;
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnDestroy() {
    this.$isDark.unsubscribe();
  }
  ngOnInit() {
    this.init();
    this.isDesktop = this.plt.is('desktop');
    this.getDark();
    this.toggleDark();
  }
  getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }
  toggleDark() {
    this.$isDark = this.moduleDarkService.toggleEvent().subscribe(dark => this.isDark = dark);
  }
  init() {
    return this.category$ = this.homeService.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      this.error$.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
    }));
  }
};
HomePage.ctorParameters = () => [{
  type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_3__.ModuleDarkService
}];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomePage);


/***/ }),

/***/ 20885:
/*!*************************************************************!*\
  !*** ./src/app/pages/public/home/home.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card-header {\n  display: flex;\n  justify-content: center;\n}\n\n.no-padding-horizontal {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.ion-no-margin-bottom {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\nion-text {\n  font-size: 18px;\n}\n@media (max-width: 575.98px) and (min-width: 375px) {\n  ion-text {\n    font-size: 14px;\n  }\n}\n@media (max-width: 374.98px) {\n  ion-text {\n    font-size: 14px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/home/home.page.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;AACF;;AAEA;EACE,iBAAA;EACA,kBAAA;AACF;;AACA;EACE,kBAAA;EACA,eAAA;AAEF;;AAAA;EACE,eAAA;AAGF;AAOE;EAXF;IAYI,eAAA;EAJF;AACF;AAKE;EAdF;IAeI,eAAA;EAFF;AACF","sourcesContent":["ion-card-header {\n  display: flex;\n  justify-content: center;\n}\n\n.no-padding-horizontal {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.ion-no-margin-bottom {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\nion-text {\n  font-size: 18px;\n  // @media (min-width: 992px) and (max-width: 1199.98px) {\n  //   font-size: 9px;\n  // }\n  // @media (min-width: 768px) and (max-width: 991.98px) {\n  //   font-size: 9px;\n  // }\n  // @media (min-width: 576px) and (max-width: 767.98px) {\n  //   font-size: 9px;\n  // }\n  @media (max-width: 575.98px) and (min-width: 375px) {\n    font-size: 14px;\n  }\n  @media (max-width: 374.98px) {\n    font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49647:
/*!*************************************************************!*\
  !*** ./src/app/pages/public/home/home.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid\n    class=\"grid\"\n    *ngIf=\"category$ | async; let category; else loading\"\n    fixed\n  >\n    <ion-row class=\"ion-justify-content-around ion-align-items-center\">\n      <ion-col size=\"12\">\n        <ion-searchbar\n          [color]=\"isDark ? 'medium' : 'none'\"\n          class=\"ion-margin-top\"\n          placeholder=\"Pesquizar\"\n          animated\n        ></ion-searchbar>\n      </ion-col>\n\n      <ion-col\n        class=\"ion-align-self-center ion-margin-vertical ion-no-margin-bottom\"\n        size-xl=\"2\"\n        size-lg=\"3\"\n        size-md=\"3\"\n        size-sm=\"4\"\n        size=\"4\"\n        *ngFor=\"let item of category\"\n      >\n        <ion-card\n          [ngClass]=\"{'ion-no-margin': !isDesktop}\"\n          button=\"true\"\n          [title]=\"(item | categoryValues:'name') + ': ' + (item | categoryValues:'description')\"\n          [attr.data-message]=\"(item | categoryValues:'name') + ': ' + (item | categoryValues:'description')\"\n          [routerLink]=\"['/categoria', item | categoryValues:'slug']\"\n        >\n          <ion-card-header class=\"no-padding-horizontal\">\n            <ion-thumbnail>\n              <img\n                [src]=\"item | categoryIcons\"\n                [alt]=\"item | categoryValues:'name'\"\n                [title]=\"item | categoryValues:'name'\"\n                [attr.aria-labelledby]=\"item | categoryValues:'name'\"\n              />\n            </ion-thumbnail>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-center no-padding-horizontal\">\n            <ion-text\n              [id]=\"item | categoryValues:'name'\"\n              [title]=\"item | categoryValues:'name'\"\n              class=\"ion-text-nowrap\"\n            >\n              {{ item | categoryValues:'name' }}\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ng-template #loading>\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-around ion-align-items-center\">\n        <ion-col\n          *ngFor=\"let item of [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18];\"\n          class=\"ion-align-self-center ion-margin-vertical\"\n          size-xl=\"3\"\n          size-lg=\"2\"\n          size-md=\"3\"\n          size-sm=\"4\"\n          size=\"4\"\n        >\n          <ion-skeleton-text\n            class=\"ion-margin-bottom\"\n            animated\n            style=\"\n              width: 70px;\n              min-height: 70px;\n              margin-left: auto;\n              margin-right: auto;\n            \"\n          >\n          </ion-skeleton-text>\n          <ion-skeleton-text\n            animated\n            style=\"\n              width: 80%;\n              min-height: 10px;\n              border-radius: 2px;\n              display: block;\n              margin-left: auto;\n              margin-right: auto;\n            \"\n          >\n          </ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_home_home_module_ts.js.map