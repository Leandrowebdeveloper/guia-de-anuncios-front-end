(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_administrator_users_management_management_module_ts"],{

/***/ 19507:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/management/management-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePageRoutingModule": () => (/* binding */ MaintenancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _management_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management.page */ 50317);




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

/***/ 6650:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/management/management.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementPageModule": () => (/* binding */ ManagementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management-routing.module */ 19507);
/* harmony import */ var _management_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management.page */ 50317);
/* harmony import */ var src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/user-component.module */ 46469);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement-component.module */ 26694);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_pages_enabled_item_enabled_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.module */ 64643);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_pages_deleted_item_deleted_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.module */ 77138);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipe/address/address.pipe */ 66819);
/* harmony import */ var src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipe/workDays/workDays.pipe */ 48660);













let ManagementPageModule = class ManagementPageModule {};
ManagementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _management_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenancePageRoutingModule, src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_2__.UserComponentsModule, src_app_pages_dashboard_auth_announcement_pages_enabled_item_enabled_item_module__WEBPACK_IMPORTED_MODULE_4__.EnabledItemAnnouncementPageModule, src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_3__.AnnouncementComponentsModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, src_app_pages_dashboard_auth_announcement_pages_deleted_item_deleted_item_module__WEBPACK_IMPORTED_MODULE_5__.DeletedItemAnnouncememtPageModule],
  declarations: [_management_page__WEBPACK_IMPORTED_MODULE_1__.ManagementPage],
  providers: [src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_7__.AddressPipe, src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_8__.WorkDaysPipe]
})], ManagementPageModule);


/***/ }),

/***/ 50317:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/management/management.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementPage": () => (/* binding */ ManagementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management.page.html?ngResource */ 85263);
/* harmony import */ var _management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management.page.scss?ngResource */ 7064);
/* harmony import */ var _management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin-users.service */ 99611);








let ManagementPage = class ManagementPage {
  constructor(navCtrl, usersService, activatedRoute) {
    this.navCtrl = navCtrl;
    this.usersService = usersService;
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    this.init();
    this.setUser();
  }
  getIsAnnouncement(e) {
    this.isAnnouncement = e;
  }
  togglePage(e) {
    this.toggleList = e;
  }
  toggleSegment(event) {
    var _a;
    if (event instanceof CustomEvent) {
      const data = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.value;
      this.toggleRoute = data;
    }
  }
  back() {
    this.navCtrl.back();
  }
  setUser() {
    this.user$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.activatedRoute.snapshot.data['user']);
  }
  init() {
    this.toggleRoute = 'user';
  }
};
ManagementPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}];
ManagementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ManagementPage);


/***/ }),

/***/ 23727:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemAnnouncementPageRoutingModule": () => (/* binding */ DeletedItemAnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _deleted_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item.page */ 68718);




const routes = [{
  path: '',
  component: _deleted_item_page__WEBPACK_IMPORTED_MODULE_0__.DeletedItemAnnouncementPage
}];
let DeletedItemAnnouncementPageRoutingModule = class DeletedItemAnnouncementPageRoutingModule {};
DeletedItemAnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DeletedItemAnnouncementPageRoutingModule);


/***/ }),

/***/ 77138:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemAnnouncememtPageModule": () => (/* binding */ DeletedItemAnnouncememtPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deleted_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item-routing.module */ 23727);
/* harmony import */ var _deleted_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-item.page */ 68718);
/* harmony import */ var src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/user-component.module */ 46469);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement-component.module */ 26694);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);









let DeletedItemAnnouncememtPageModule = class DeletedItemAnnouncememtPageModule {};
DeletedItemAnnouncememtPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _deleted_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeletedItemAnnouncementPageRoutingModule, src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_2__.UserComponentsModule, src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_3__.AnnouncementComponentsModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule],
  declarations: [_deleted_item_page__WEBPACK_IMPORTED_MODULE_1__.DeletedItemAnnouncementPage],
  exports: [_deleted_item_page__WEBPACK_IMPORTED_MODULE_1__.DeletedItemAnnouncementPage]
})], DeletedItemAnnouncememtPageModule);


/***/ }),

/***/ 68718:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemAnnouncementPage": () => (/* binding */ DeletedItemAnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deleted_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item.page.html?ngResource */ 36536);
/* harmony import */ var _deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-item.page.scss?ngResource */ 74591);
/* harmony import */ var _deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard.page.scss?ngResource */ 88210);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app//utilities/alert/alert.service */ 11395);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/service/auth-announcement.service */ 65866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);












let DeletedItemAnnouncementPage = class DeletedItemAnnouncementPage {
  constructor(plt, authAnnouncementService, alertService, messageService, loadingService) {
    this.plt = plt;
    this.authAnnouncementService = authAnnouncementService;
    this.alertService = alertService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.limit = 12;
    this.offset = 0;
    this.page = 1;
  }
  ngOnInit() {
    this.getAnnouncement();
    this.plt.ready().then(() => this.isPlatform());
  }
  togglePage(e) {
    if (this.toggleListAnnouncement === e) {
      return;
    }
    this.toggleListAnnouncement = e;
    this.getAnnouncement();
  }
  trackByFn(index, announcement) {
    return announcement ? announcement.id : undefined;
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
    if (action === 'drop') {
      return this.destroy(index, announcement);
    }
    return this.toRestore(index, announcement);
  }
  destroy(index, announcement) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
          handler: () => this.drop(announcement, index)
        }]
      });
      yield alert.present();
    });
  }
  toRestore(index, announcement) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      this.isToRestore = index;
      const alert = yield this.alertService.alertController.create({
        message: `Item <i>" ${announcement === null || announcement === void 0 ? void 0 : announcement.title} "</i> será restalrado.`,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.isToRestore = -1;
          }
        }, {
          text: 'Ok',
          role: 'confirm',
          handler: () => this.restore(announcement, index)
        }]
      });
      yield alert.present();
    });
  }
  restore(announcement, index) {
    const loading = this.loadingService.show('Restaurar anúncio...');
    return this.destroyAnnouncement = this.authAnnouncementService.toRestore(announcement).subscribe({
      next: announcement_ => this.success(index, announcement_, loading),
      error: error => this.messageService.error(error, loading, this.destroyAnnouncement)
    });
  }
  removeItem(index) {
    setTimeout(() => {
      this.isToRestore = -1;
      this.announcement.splice(index, 1);
    }, 6000);
  }
  getAnnouncement() {
    var _a;
    if (this.user && ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id)) {
      return this.announcement$ = this.authAnnouncementService.getAnnouncementAll('deleted', {
        limit: this.limit,
        offset: this.offset,
        userId: Number(this.user.id)
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(announcement => {
        this.isAnnouncement = announcement.length > 0;
        this.announcement = announcement;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        setTimeout(() => this.menssage = false, 300);
        this.error.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
      }));
    }
  }
  drop(announcement, index) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.authAnnouncementService.drop(announcement).subscribe({
      next: announcement_ => this.success(index, announcement_, loading),
      error: error => this.messageService.error(error, loading, this.destroyAnnouncement)
    });
  }
  success(index, announcement_, loading) {
    if (announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message) {
      this.removeItem(index);
      this.messageService.success(announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message, loading, this.destroyAnnouncement, 2000);
    }
  }
  isPlatform() {
    return this.isDesktop = this.plt.is('desktop');
  }
};
DeletedItemAnnouncementPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}, {
  type: src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_6__.AuthAnnouncementService
}, {
  type: src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}];
DeletedItemAnnouncementPage.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }]
};
DeletedItemAnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-deleted-item-announcement-page',
  template: _deleted_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DeletedItemAnnouncementPage);


/***/ }),

/***/ 74591:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.page.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-center {\n  font-size: 1em;\n}\n.content-center ion-icon {\n  font-size: 2.5em;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;AAAE;EACE,gBAAA;AAEJ","sourcesContent":[".content-center {\n  font-size: 1em;\n  ion-icon {\n    font-size: 2.5em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85263:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/management/management.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\" defaultHref></ion-back-button>\n    </ion-buttons>\n    <ion-title>Gerenciamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid *ngIf=\"user$ | async;let user;\" fixed>\n    <ion-segment value=\"user\" (ionChange)=\"toggleSegment($event)\">\n      <ion-segment-button value=\"user\">\n        <ion-icon color=\"mediun\" name=\"person\"></ion-icon>\n        <ion-label>Usuário</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"announcement\">\n        <ion-icon color=\"mediun\" name=\"megaphone\"></ion-icon>\n        <ion-label>Anúncio</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"statistic\">\n        <ion-icon color=\"mediun\" name=\"analytics\"></ion-icon>\n        <ion-label>Estatística</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]=\"toggleRoute\">\n      <div *ngSwitchCase=\"'user'\">\n        <!-- Messagem -->\n        <ion-row>\n          <ion-col size=\"12\" *ngIf=\"user\">\n            <app-card-message-component\n              [user]=\"user\"\n            ></app-card-message-component>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size-xl=\"5\" size-lg=\"5\" size-md=\"6\" size-sm=\"12\" size=\"12\">\n            <ion-card>\n              <app-avatar-component [user]=\"user\"></app-avatar-component>\n\n              <app-card-user-component [user]=\"user\"></app-card-user-component>\n            </ion-card>\n          </ion-col>\n          <ion-col\n            size-xl=\"6\"\n            size-lg=\"6\"\n            size-md=\"6\"\n            size-sm=\"12\"\n            size=\"12\"\n            offset-xl=\"1\"\n            offset-lg=\"1\"\n          >\n            <!-- message -->\n            <app-messages-component [user]=\"user\"></app-messages-component>\n            <!-- Blockade -->\n            <app-blockade-user-component\n              [user]=\"user\"\n            ></app-blockade-user-component>\n\n            <!-- State -->\n            <app-state-user-component [user]=\"user\"></app-state-user-component>\n\n            <!-- Level -->\n            <app-level-user-component [user]=\"user\"></app-level-user-component>\n\n            <!-- Plan -->\n            <app-plan-user-component [user]=\"user\"></app-plan-user-component>\n\n            <!-- Name -->\n            <app-name-user-component\n              [user]=\"user\"\n              [isAuth]=\"false\"\n            ></app-name-user-component>\n\n            <!-- Email -->\n            <app-email-user-component\n              [user]=\"user\"\n              [isAuth]=\"false\"\n            ></app-email-user-component>\n\n            <!-- Passwprd -->\n            <app-password-user-component\n              [user]=\"user\"\n              [isAuth]=\"false\"\n            ></app-password-user-component>\n\n            <!-- Destroy -->\n            <app-destroy-user-component\n              [user]=\"user\"\n              [isAuth]=\"false\"\n            ></app-destroy-user-component>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- Anúncios -->\n      <div *ngSwitchCase=\"'announcement'\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <!-- Navegação -->\n            <app-segment-announcement-component\n              [isAdmin]=\"true\"\n              (togglePage)=\"togglePage($event)\"\n            ></app-segment-announcement-component>\n            <!--  Abilitados -->\n            <ng-container *ngIf=\"toggleList;else ItemDeleted\">\n              <app-enabled-item-announcement-page\n                [user]=\"user\"\n                (isAnnouncement)=\"getIsAnnouncement($event)\"\n              ></app-enabled-item-announcement-page>\n            </ng-container>\n\n            <!-- Deletados -->\n            <ng-template #ItemDeleted>\n              <app-deleted-item-announcement-page\n                [user]=\"user\"\n              ></app-deleted-item-announcement-page>\n            </ng-template>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngSwitchCase=\"'statistic'\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item-divider>\n              <ion-label>Extatísticas</ion-label>\n            </ion-item-divider>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 36536:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.page.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"announcement$ | async;else Loading;\">\n  <!-- Excluidos -->\n  <ion-col\n    *ngFor=\"let item of announcement;let i = index;trackBy: trackByFn;\"\n    size-xl=\"4\"\n    size-lg=\"4\"\n    size-md=\"6\"\n    size-sm=\"6\"\n    size=\"12\"\n  >\n    <ng-container *ngIf=\"isDesktop;else Mobile\">\n      <app-card-announcement-component\n        [announcement]=\"item\"\n      ></app-card-announcement-component>\n    </ng-container>\n    <ng-template #Mobile>\n      <app-list-item-announcement-component\n        [announcement]=\"item\"\n        [index]=\"i\"\n        [action]=\"isToRestore\"\n        (actionButtons)=\"actionButton($event)\"\n      ></app-list-item-announcement-component>\n    </ng-template>\n  </ion-col>\n  <ion-col size=\"12\" [hidden]=\"announcement | isAnnouncement:0\">\n    <div class=\"content-center\">\n      <ion-icon color=\"medium\" name=\"trash-outline\"></ion-icon>\n      <ion-text color=\"medium\"> Não á item na lixeira. </ion-text>\n    </div>\n  </ion-col>\n</ion-row>\n\n<!-- Loading -->\n<ng-template #Loading>\n  <ion-row *ngIf=\"error | async; else loadingNoError\">\n    <ion-col size=\"12\">\n      <div class=\"content-center\">\n        <div>\n          <ion-text class=\"ion-text-center\">\n            <p [ngClass]=\"{'hide': menssage}\">Erro ao carregar anúncios.</p>\n          </ion-text>\n          <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n            <ion-refresher-content\n              pullingIcon=\"chevron-down-circle-outline\"\n              pullingText=\"Puxe para baixo\"\n              refreshingSpinner=\"circles\"\n              refreshingText=\"Atualizar...\"\n            >\n            </ion-refresher-content>\n          </ion-refresher>\n          <ion-text class=\"ion-text-center\">\n            <ion-button (mousedown)=\"hideMenssage()\"\n              >Puxe para atualizar\n              <ion-icon\n                class=\"ion-margin-start\"\n                name=\"arrow-down-circle\"\n              ></ion-icon>\n            </ion-button>\n          </ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ng-template #loadingNoError>\n    <app-skeleton-announcement></app-skeleton-announcement>\n  </ng-template>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_administrator_users_management_management_module_ts.js.map