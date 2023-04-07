(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_administrator_categoryAnnouncement_management_management_module_ts"],{

/***/ 34032:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/management/management-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePageRoutingModule": () => (/* binding */ MaintenancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _management_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management.page */ 75121);




const routes = [{
  path: '',
  component: _management_page__WEBPACK_IMPORTED_MODULE_0__.ManagementPage
}];
let MaintenancePageRoutingModule = class MaintenancePageRoutingModule {};
MaintenancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MaintenancePageRoutingModule);


/***/ }),

/***/ 1682:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/management/management.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementPageModule": () => (/* binding */ ManagementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-routing.module */ 34032);
/* harmony import */ var _management_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management.page */ 75121);
/* harmony import */ var src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/header-modal/header-modal.module */ 32728);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/form.module */ 74463);
/* harmony import */ var _component_category_announcement_category_announcement_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/category-announcement/category-announcement.module */ 310);











let ManagementPageModule = class ManagementPageModule {};
ManagementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _management_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenancePageRoutingModule, src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModalModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule, _form_form_module__WEBPACK_IMPORTED_MODULE_4__.FormPageModule, _component_category_announcement_category_announcement_module__WEBPACK_IMPORTED_MODULE_5__.CategoryAnnouncementComponentModule],
  declarations: [_management_page__WEBPACK_IMPORTED_MODULE_1__.ManagementPage]
})], ManagementPageModule);


/***/ }),

/***/ 75121:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/management/management.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementPage": () => (/* binding */ ManagementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management.page.html?ngResource */ 93977);
/* harmony import */ var _management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management.page.scss?ngResource */ 85019);
/* harmony import */ var _management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_management_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/management/management.page.scss?ngResource */ 7064);
/* harmony import */ var _users_management_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_users_management_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ 97150);








let ManagementPage = class ManagementPage {
  constructor(categoryService, activatedRoute, navCtrl) {
    this.categoryService = categoryService;
    this.activatedRoute = activatedRoute;
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    this.setCategory();
  }
  back() {
    this.navCtrl.back();
  }
  setCategory() {
    var _a;
    this.categoryService.setCategory = (_a = this.activatedRoute.snapshot.data) === null || _a === void 0 ? void 0 : _a['category'];
    this.category$ = this.categoryService.categoryObservable;
  }
};
ManagementPage.ctorParameters = () => [{
  type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}];
ManagementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_users_management_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ManagementPage);


/***/ }),

/***/ 85019:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/management/management.page.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93977:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/management/management.page.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\" defaultHref></ion-back-button>\n    </ion-buttons>\n    <ion-title>Gerenciamento de categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid *ngIf=\"category$ | async;let category;\" fixed>\n    <!-- card image -->\n    <app-image-category-component\n      [category]=\"category\"\n    ></app-image-category-component>\n\n    <ion-item-group>\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- status -->\n          <app-category-announcement-state-component\n            [category]=\"category\"\n          ></app-category-announcement-state-component>\n\n          <!-- Nome e descrição -->\n          <app-category-announcement-update-component\n            [category]=\"category\"\n          ></app-category-announcement-update-component>\n\n          <app-destroy-announcement-component\n            [category]=\"category\"\n          ></app-destroy-announcement-component>\n        </ion-col>\n      </ion-row>\n    </ion-item-group>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_administrator_categoryAnnouncement_management_management_module_ts.js.map