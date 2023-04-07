(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_not-found_not-found_module_ts"],{

/***/ 50167:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/service/social-network.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialNetworkAnnouncementService": () => (/* binding */ SocialNetworkAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);







let SocialNetworkAnnouncementService = class SocialNetworkAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, managementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.managementService = managementService;
    this.socialNetworkEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(undefined);
    this.setApi = `social-network`;
  }
  get getSocialNetworkEvent() {
    return this.socialNetworkEvent.asObservable();
  }
  set setSocialNetwork(socialNetwork) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.socialNetwork = socialNetwork;
      this.managementService.setAnnouncement = this.managementService.getAnnouncement;
    }
  }
  socialNetwork(socialNetwork) {
    if (socialNetwork === null || socialNetwork === void 0 ? void 0 : socialNetwork.id) {
      return this.patch(socialNetwork).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(socialNetwork_ => this.setSocialNetwork = socialNetwork_));
    } else {
      return this.create(socialNetwork).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(socialNetwork_ => this.setSocialNetwork = socialNetwork_));
    }
  }
  delete(socialNetWork) {
    return this.destroy(socialNetWork).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.setSocialNetwork = null));
  }
};
SocialNetworkAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__.ManagementAnnouncementService
}];
SocialNetworkAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], SocialNetworkAnnouncementService);


/***/ }),

/***/ 93909:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageRoutingModule": () => (/* binding */ NotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page */ 26615);




const routes = [{
  path: '',
  component: _not_found_page__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage
}];
let NotFoundPageRoutingModule = class NotFoundPageRoutingModule {};
NotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NotFoundPageRoutingModule);


/***/ }),

/***/ 95233:
/*!************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 93909);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page */ 26615);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var _dashboard_component_announcement_social_network_service_social_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dashboard/component/announcement/social-network/service/social-network.service */ 50167);











let NotFoundPageModule = class NotFoundPageModule {};
NotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule],
  declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_1__.NotFoundPage],
  providers: [_dashboard_component_announcement_social_network_service_social_network_service__WEBPACK_IMPORTED_MODULE_4__.SocialNetworkAnnouncementService]
})], NotFoundPageModule);


/***/ }),

/***/ 26615:
/*!**********************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPage": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page.html?ngResource */ 66441);
/* harmony import */ var _not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page.scss?ngResource */ 52337);
/* harmony import */ var _not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let NotFoundPage = class NotFoundPage {};
NotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-not-found',
  template: _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotFoundPage);


/***/ }),

/***/ 52337:
/*!***********************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "p {\n  font-size: 22px;\n}\n\nion-icon {\n  font-size: 6em;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/not-found/not-found.page.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;AACF;;AACA;EACE,cAAA;AAEF","sourcesContent":["p {\n  font-size: 22px;\n}\nion-icon {\n  font-size: 6em;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66441:
/*!***********************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <div class=\"content-center\">\n      <ion-text class=\"ion-text-center\">\n        <ion-icon name=\"warning\"></ion-icon>\n        <p>Erro 404 pagína não encontrada.</p>\n      </ion-text>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_not-found_not-found_module_ts.js.map