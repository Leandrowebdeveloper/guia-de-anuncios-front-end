(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_auth_announcement_pages_enabled-item_enabled-item_module_ts"],{

/***/ 78510:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemAnnouncementPageRoutingModule": () => (/* binding */ EnabledItemAnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _enabled_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item.page */ 43616);




const routes = [{
  path: '',
  component: _enabled_item_page__WEBPACK_IMPORTED_MODULE_0__.EnabledItemAnnouncementPage
}];
let EnabledItemAnnouncementPageRoutingModule = class EnabledItemAnnouncementPageRoutingModule {};
EnabledItemAnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EnabledItemAnnouncementPageRoutingModule);


/***/ }),

/***/ 64643:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemAnnouncementPageModule": () => (/* binding */ EnabledItemAnnouncementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _enabled_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item.page */ 43616);
/* harmony import */ var _enabled_item_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled-item-routing.module */ 78510);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement-component.module */ 26694);









let EnabledItemAnnouncementPageModule = class EnabledItemAnnouncementPageModule {};
EnabledItemAnnouncementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _enabled_item_routing_module__WEBPACK_IMPORTED_MODULE_1__.EnabledItemAnnouncementPageRoutingModule, src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_3__.AnnouncementComponentsModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule],
  declarations: [_enabled_item_page__WEBPACK_IMPORTED_MODULE_0__.EnabledItemAnnouncementPage],
  exports: [_enabled_item_page__WEBPACK_IMPORTED_MODULE_0__.EnabledItemAnnouncementPage]
})], EnabledItemAnnouncementPageModule);


/***/ }),

/***/ 43616:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemAnnouncementPage": () => (/* binding */ EnabledItemAnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _enabled_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item.page.html?ngResource */ 50876);
/* harmony import */ var _enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled-item.page.scss?ngResource */ 24976);
/* harmony import */ var _enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard.page.scss?ngResource */ 88210);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app//utilities/alert/alert.service */ 11395);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/service/auth-announcement.service */ 65866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);













let EnabledItemAnnouncementPage = class EnabledItemAnnouncementPage {
  constructor(plt, authAnnouncementService, authService, alertService, messageService, loadingService) {
    this.plt = plt;
    this.authAnnouncementService = authAnnouncementService;
    this.authService = authService;
    this.alertService = alertService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.isAnnouncement = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(undefined);
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.limit = 12;
    this.offset = 0;
  }
  ngOnInit() {
    this.getAnnouncement();
    this.isPlatform();
    this.setButtonCreate();
  }
  refresher(event) {
    this.getAnnouncement();
    event.target.complete();
  }
  hideMenssage() {
    this.menssage = true;
  }
  actionButton(event) {
    const {
      action,
      index,
      announcement
    } = event;
    if (action === 'destroy') {
      return this.destroy(index, announcement);
    }
  }
  destroy(index, announcement) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      this.isDeleted = index;
      const alert = yield this.alertService.alertController.create({
        header: 'Atenção',
        message: 'Este anúncio será enviado para a lixeira.',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.isDeleted = -1;
          }
        }, {
          text: 'Ok',
          role: 'confirm',
          handler: () => this.deleted(announcement, index)
        }]
      });
      yield alert.present();
    });
  }
  removeItem(index) {
    setTimeout(() => {
      this.isDeleted = -1;
      this.announcement.splice(index, 1);
    }, 6000);
  }
  getAnnouncement() {
    var _a, _b;
    if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) {
      return this.announcement$ = this.authAnnouncementService.getAnnouncementAll('get', {
        limit: this.limit,
        offset: this.offset,
        userId: (_b = this.user) === null || _b === void 0 ? void 0 : _b.id
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(announcement => {
        this.isAnnouncement.emit(announcement.length > 0);
        this.announcement = announcement.map(announcement_ => {
          var _a, _b, _c, _d, _e;
          announcement_.category = Object.assign({}, (_a = announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.categoryAnnouncement) === null || _a === void 0 ? void 0 : _a.category);
          announcement_ === null || announcement_ === void 0 ? true : delete announcement_.announcement;
          (_b = announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.categoryAnnouncement) === null || _b === void 0 ? true : delete _b.catAdId;
          (_c = announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.categoryAnnouncement) === null || _c === void 0 ? true : delete _c.category;
          (_d = announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.categoryAnnouncement) === null || _d === void 0 ? true : delete _d.announcementId;
          (_e = announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.categoryAnnouncement) === null || _e === void 0 ? true : delete _e.message;
          return announcement_;
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        setTimeout(() => this.menssage = false, 300);
        this.error.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY;
      }));
    }
  }
  deleted(announcement, index) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.authAnnouncementService.delete(announcement).subscribe({
      next: announcement_ => this.success(index, announcement_, loading),
      error: error => this.messageService.error(error, loading, this.destroyAnnouncement)
    });
  }
  success(index, announcement_, loading) {
    this.removeItem(index);
    this.message(announcement_, loading);
  }
  message(announcement_, loading) {
    if (announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message) {
      this.messageService.success(announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message, loading, this.destroyAnnouncement, 2000);
    }
  }
  isPlatform() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      return this.plt.ready().then(() => this.isDesktop = this.plt.is('desktop'));
    });
  }
  setButtonCreate() {
    this.isAdmin = this.authService.getLevel === '1';
  }
};
EnabledItemAnnouncementPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
}, {
  type: src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_6__.AuthAnnouncementService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService
}, {
  type: src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}];
EnabledItemAnnouncementPage.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  isAnnouncement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
  }]
};
EnabledItemAnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-enabled-item-announcement-page',
  template: _enabled_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EnabledItemAnnouncementPage);


/***/ }),

/***/ 24976:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.page.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-center {\n  font-size: 1em;\n}\n.content-center ion-icon {\n  font-size: 2.5em;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;AAAE;EACE,gBAAA;AAEJ","sourcesContent":[".content-center {\n  font-size: 1em;\n  ion-icon {\n    font-size: 2.5em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50876:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.page.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"announcement$ | async;else Loading;\">\n  <ion-col\n    *ngFor=\"let item of announcement\"\n    size-xl=\"6\"\n    size-lg=\"6\"\n    size-md=\"12\"\n    size-sm=\"12\"\n    size=\"12\"\n  >\n    <!-- Anúncios -->\n    <app-card-announcement-component\n      [announcement]=\"item\"\n    ></app-card-announcement-component>\n  </ion-col>\n  <ion-col size=\"12\" [hidden]=\"(announcement | isAnnouncement:0) || !isAdmin\">\n    <div class=\"content-center\">\n      <ion-icon color=\"medium\" name=\"megaphone\"></ion-icon>\n      <ion-text color=\"medium\"> Não á anúncio cadastrado. </ion-text>\n    </div>\n  </ion-col>\n\n  <app-admin-button-create-announcement\n    [isAdmin]=\"isAdmin\"\n    [user]=\"user\"\n  ></app-admin-button-create-announcement>\n</ion-row>\n\n<!-- Loading -->\n<ng-template #Loading>\n  <ion-row *ngIf=\"error | async; else loadingNoError\">\n    <ion-col size=\"12\">\n      <div class=\"content-center\">\n        <div>\n          <ion-text class=\"ion-text-center\">\n            <p [ngClass]=\"{'hide': menssage}\">Erro ao carregar anúncios.</p>\n          </ion-text>\n          <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n            <ion-refresher-content\n              pullingIcon=\"chevron-down-circle-outline\"\n              pullingText=\"Puxe para baixo\"\n              refreshingSpinner=\"circles\"\n              refreshingText=\"Atualizar...\"\n            >\n            </ion-refresher-content>\n          </ion-refresher>\n          <ion-text class=\"ion-text-center\">\n            <ion-button (mousedown)=\"hideMenssage()\"\n              >Puxe para atualizar\n              <ion-icon\n                class=\"ion-margin-start\"\n                name=\"arrow-down-circle\"\n              ></ion-icon>\n            </ion-button>\n          </ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ng-template #loadingNoError>\n    <app-skeleton-announcement></app-skeleton-announcement>\n  </ng-template>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_auth_announcement_pages_enabled-item_enabled-item_module_ts.js.map