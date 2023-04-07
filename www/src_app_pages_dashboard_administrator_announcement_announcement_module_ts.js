(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_administrator_announcement_announcement_module_ts"],{

/***/ 35221:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/announcement-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAnnouncementPageRoutingModule": () => (/* binding */ AdminAnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _announcement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.page */ 9611);




const routes = [{
  path: '',
  component: _announcement_page__WEBPACK_IMPORTED_MODULE_0__.AdminAnnouncementPage
}];
let AdminAnnouncementPageRoutingModule = class AdminAnnouncementPageRoutingModule {};
AdminAnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AdminAnnouncementPageRoutingModule);


/***/ }),

/***/ 19782:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/announcement.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAnnouncementPageModule": () => (/* binding */ AdminAnnouncementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../component/announcement/announcement-component.module */ 26694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _announcement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.page */ 9611);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/admin-announcement.service */ 64897);
/* harmony import */ var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./announcement-routing.module */ 35221);
/* harmony import */ var _component_user_user_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/user/user-component.module */ 46469);
/* harmony import */ var _pages_deleted_item_deleted_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/deleted-item/deleted-item.page */ 69064);
/* harmony import */ var _pages_enabled_item_enabled_item_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/enabled-item/enabled-item.page */ 78467);
/* harmony import */ var src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipe/address/address.pipe */ 66819);
/* harmony import */ var src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipe/workDays/workDays.pipe */ 48660);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_pages_enabled_item_enabled_item_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.module */ 64643);


















let AdminAnnouncementPageModule = class AdminAnnouncementPageModule {};
AdminAnnouncementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule, _announcement_routing_module__WEBPACK_IMPORTED_MODULE_6__.AdminAnnouncementPageRoutingModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, _component_user_user_component_module__WEBPACK_IMPORTED_MODULE_7__.UserComponentsModule, _component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncementComponentsModule, src_app_pages_dashboard_auth_announcement_pages_enabled_item_enabled_item_module__WEBPACK_IMPORTED_MODULE_12__.EnabledItemAnnouncementPageModule],
  declarations: [_announcement_page__WEBPACK_IMPORTED_MODULE_1__.AdminAnnouncementPage, _pages_deleted_item_deleted_item_page__WEBPACK_IMPORTED_MODULE_8__.DeletedItemAdminAnnouncementPage, _pages_enabled_item_enabled_item_page__WEBPACK_IMPORTED_MODULE_9__.EnabledItemAdminAnnouncementPage],
  // exports: [DeletedItemAdminAnnouncementPage, EnabledItemAdminAnnouncementPage],
  providers: [_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_5__.AdminAnnouncementService, src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_10__.AddressPipe, src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_11__.WorkDaysPipe]
})], AdminAnnouncementPageModule);


/***/ }),

/***/ 9611:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/announcement.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAnnouncementPage": () => (/* binding */ AdminAnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.page.html?ngResource */ 84431);
/* harmony import */ var _announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.page.scss?ngResource */ 33710);
/* harmony import */ var _announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/admin-announcement.service */ 64897);







let AdminAnnouncementPage = class AdminAnnouncementPage {
  constructor(adminAnnouncementService, messageService) {
    this.adminAnnouncementService = adminAnnouncementService;
    this.messageService = messageService;
    this.isOrder = false;
    this.fab = false;
  }
  orderList() {
    this.isOrder = !this.isOrder;
    this.sendOrder = !this.sendOrder;
  }
  isSaveOrder(e) {
    if (!e) {
      this.isOrder = e;
    }
    this.sendOrder = e;
  }
  saveOrder() {
    this.adminAnnouncementService.saveSorting.emit(true);
  }
  togglePage(e) {
    this.toggleList = e;
  }
  logScrolling(event) {
    if (event.detail.scrollTop > 500) {
      this.fab = true;
    } else {
      this.fab = false;
    }
  }
  toTop() {
    return this.content.scrollToTop(1000);
  }
};
AdminAnnouncementPage.ctorParameters = () => [{
  type: _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_3__.AdminAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
AdminAnnouncementPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, {
      static: true
    }]
  }]
};
AdminAnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-announcement',
  template: _announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminAnnouncementPage);


/***/ }),

/***/ 69064:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/pages/deleted-item/deleted-item.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemAdminAnnouncementPage": () => (/* binding */ DeletedItemAdminAnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deleted_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item.page.html?ngResource */ 55399);
/* harmony import */ var _deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-item.page.scss?ngResource */ 52443);
/* harmony import */ var _deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app//utilities/alert/alert.service */ 11395);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/admin-announcement.service */ 64897);










let DeletedItemAdminAnnouncementPage = class DeletedItemAdminAnnouncementPage {
  constructor(adminAnnouncementService, alertService, messageService, loadingService) {
    this.adminAnnouncementService = adminAnnouncementService;
    this.alertService = alertService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.limit = 12;
    this.offset = 0;
  }
  ngOnInit() {
    this.getAnnouncement();
  }
  togglePage(e) {
    if (this.toggleListAnnouncement === e) {
      return;
    }
    this.toggleListAnnouncement = e;
    this.getAnnouncement();
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    return this.destroyAnnouncement = this.adminAnnouncementService.toRestore(announcement).subscribe({
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
    return this.announcement$ = this.adminAnnouncementService.getAnnouncementAll('deleted', {
      limit: this.limit,
      offset: this.offset
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(announcement => {
      this.isAnnouncement = announcement.length > 0;
      this.announcement = announcement;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      setTimeout(() => this.menssage = false, 300);
      this.error.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY;
    }));
  }
  drop(announcement, index) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.adminAnnouncementService.drop(announcement).subscribe({
      next: announcement_ => this.success(index, announcement_, loading),
      error: error => this.messageService.error(error, loading, this.destroyAnnouncement)
    });
  }
  success(index, announcement_, loading) {
    this.removeItem(index);
    if (announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message) this.messageService.success(announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message, loading, this.destroyAnnouncement, 2000);
  }
};
DeletedItemAdminAnnouncementPage.ctorParameters = () => [{
  type: _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_5__.AdminAnnouncementService
}, {
  type: src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}];
DeletedItemAdminAnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-deleted-item-admin-announcement-page',
  template: _deleted_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_deleted_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DeletedItemAdminAnnouncementPage);


/***/ }),

/***/ 78467:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/pages/enabled-item/enabled-item.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemAdminAnnouncementPage": () => (/* binding */ EnabledItemAdminAnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _enabled_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item.page.html?ngResource */ 41651);
/* harmony import */ var _enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled-item.page.scss?ngResource */ 43987);
/* harmony import */ var _enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app//utilities/alert/alert.service */ 11395);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/admin-announcement.service */ 64897);
/* harmony import */ var src_app_pages_dashboard_component_announcement_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/search/service/search.service */ 36916);












let EnabledItemAdminAnnouncementPage = class EnabledItemAdminAnnouncementPage {
  constructor(adminAnnouncementService, searchAnnouncementService, authService, alertService, messageService, loadingService) {
    this.adminAnnouncementService = adminAnnouncementService;
    this.searchAnnouncementService = searchAnnouncementService;
    this.authService = authService;
    this.alertService = alertService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.limit = 12;
    this.offset = 0;
  }
  get getSearchBy() {
    return this.searchBy;
  }
  set setSearchBy(value) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }
  ngOnInit() {
    this.getAnnouncement();
    this.setButtonCreate();
    this.initSearchBy();
  }
  ngOnDestroy() {
    this.$searchBy.unsubscribe();
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
  search(event) {
    var _a, _b, _c;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.value.length) >= 3) {
      const data = this.setDataSearch((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.value);
      return this.$search = this.adminAnnouncementService.searchBy(data).subscribe({
        next: announcement => {
          this.searchAnnouncementService.search = announcement;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }
      });
    }
  }
  destroy(index, announcement) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    return this.announcement$ = this.adminAnnouncementService.getAnnouncementAll('', {
      limit: this.limit,
      offset: this.offset
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(announcement => {
      this.announcement = announcement;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(item => item.map(data => {
      var _a;
      data.category = Object.assign({}, (_a = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _a === void 0 ? void 0 : _a.category);
      data === null || data === void 0 ? true : delete data.categoryAnnouncement;
      return data;
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
      setTimeout(() => this.menssage = false, 300);
      this.error.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY;
    }));
  }
  deleted(announcement, index) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.adminAnnouncementService.delete(announcement).subscribe({
      next: announcement_ => this.success(index, announcement_, loading),
      error: error => this.messageService.error(error, loading, this.destroyAnnouncement)
    });
  }
  success(index, announcement_, loading) {
    this.removeItem(index);
    this.message(announcement_, loading);
  }
  message(announcement_, loading) {
    if (announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message) this.messageService.success(announcement_.message, loading, this.destroyAnnouncement, 2000);
  }
  setButtonCreate() {
    this.isAdmin = this.authService.getLevel === '1';
  }
  orderBy(search) {
    if (!this.announcement) {
      return;
    }
    switch (search) {
      case 'title':
        this.announcement.sort((a, b) => {
          if ((a === null || a === void 0 ? void 0 : a.title) && (b === null || b === void 0 ? void 0 : b.title)) return (a === null || a === void 0 ? void 0 : a.title) < (b === null || b === void 0 ? void 0 : b.title) && -1;
        });
        break;
      case 'createdAt':
        this.announcement.sort((a, b) => {
          if ((a === null || a === void 0 ? void 0 : a.createdAt) && (b === null || b === void 0 ? void 0 : b.createdAt)) return (a === null || a === void 0 ? void 0 : a.createdAt) > (b === null || b === void 0 ? void 0 : b.createdAt) && -1;
        });
        break;
      case 'updatedAt':
        this.announcement.sort((a, b) => {
          if ((a === null || a === void 0 ? void 0 : a.updatedAt) && (b === null || b === void 0 ? void 0 : b.updatedAt)) return (a === null || a === void 0 ? void 0 : a.updatedAt) > (b === null || b === void 0 ? void 0 : b.updatedAt) && -1;
        });
        break;
      case 'state':
        this.announcement.sort((a, b) => {
          if ((a === null || a === void 0 ? void 0 : a.state) && (b === null || b === void 0 ? void 0 : b.state)) return (a === null || a === void 0 ? void 0 : a.state) > (b === null || b === void 0 ? void 0 : b.state) && -1;
        });
        break;
      case 'blockade':
        this.announcement.sort((a, b) => {
          if ((a === null || a === void 0 ? void 0 : a.blockade) && (b === null || b === void 0 ? void 0 : b.blockade)) return (a === null || a === void 0 ? void 0 : a.blockade) > (b === null || b === void 0 ? void 0 : b.blockade) && -1;
        });
        break;
    }
  }
  initSearchBy() {
    this.$searchBy = this.searchAnnouncementService.getSearchBy.subscribe({
      next: filter => {
        if (filter === 'title') {
          this.setSearchBy = filter;
          this.setSearchBy = 'title';
        }
        if (filter) this.orderBy(filter);
      }
    });
  }
  setDataSearch(value) {
    let data;
    if (this.getSearchBy) {
      this.searchBuild(value);
      data = this.getSearchBy;
    } else {
      data = {
        firstName: value
      };
    }
    return data;
  }
  searchBuild(value) {
    const key = Object.keys(this.getSearchBy)[0];
    this.getSearchBy[key] = value;
  }
};
EnabledItemAdminAnnouncementPage.ctorParameters = () => [{
  type: _service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_6__.AdminAnnouncementService
}, {
  type: src_app_pages_dashboard_component_announcement_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchAnnouncementService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}, {
  type: src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}];
EnabledItemAdminAnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-enabled-item-admin-announcement-page',
  template: _enabled_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_enabled_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EnabledItemAdminAnnouncementPage);


/***/ }),

/***/ 33710:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/announcement.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fab {\n  opacity: 0;\n  transition: var(--transition);\n}\n\n.show {\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/announcement/announcement.page.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,6BAAA;AACF;;AAEA;EACE,UAAA;AACF","sourcesContent":[".fab {\n  opacity: 0;\n  transition: var(--transition);\n}\n\n.show {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52443:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/pages/deleted-item/deleted-item.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-center {\n  font-size: 1em;\n}\n.content-center ion-icon {\n  font-size: 2.5em;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/announcement/pages/deleted-item/deleted-item.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;AAAE;EACE,gBAAA;AAEJ","sourcesContent":[".content-center {\n  font-size: 1em;\n  ion-icon {\n    font-size: 2.5em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43987:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/pages/enabled-item/enabled-item.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-center {\n  font-size: 1em;\n}\n.content-center ion-icon {\n  font-size: 2.5em;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/announcement/pages/enabled-item/enabled-item.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;AAAE;EACE,gBAAA;AAEJ","sourcesContent":[".content-center {\n  font-size: 1em;\n  ion-icon {\n    font-size: 2.5em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 84431:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/announcement.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  [scrollY]=\"true\"\n  (ionScroll)=\"logScrolling($event)\"\n>\n  <ion-grid fixed>\n    <ion-row>\n      <!-- Menu segmentento -->\n      <ion-col size=\"12\">\n        <app-segment-announcement-component\n          (togglePage)=\"togglePage($event)\"\n        ></app-segment-announcement-component>\n        <!--  Abilitados -->\n        <ng-container *ngIf=\"toggleList;else ItemDeleted\">\n          <app-enabled-item-admin-announcement-page></app-enabled-item-admin-announcement-page>\n        </ng-container>\n\n        <!-- Deletados -->\n        <ng-template #ItemDeleted>\n          <app-deleted-item-admin-announcement-page></app-deleted-item-admin-announcement-page>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Scroll top -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button\n      size=\"small\"\n      color=\"primary\"\n      class=\"fab\"\n      [ngClass]=\"{show: fab}\"\n      (click)=\"toTop()\"\n    >\n      <ion-icon name=\"arrow-up-circle\" color=\"light\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ }),

/***/ 55399:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/pages/deleted-item/deleted-item.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"announcement$ | async;else Loading;\">\n  <!-- Excluidos -->\n  <ion-col\n    *ngFor=\"let item of announcement;\"\n    size-xl=\"4\"\n    size-lg=\"4\"\n    size-md=\"6\"\n    size-sm=\"6\"\n    size=\"12\"\n  >\n    <app-card-announcement-component\n      [announcement]=\"item\"\n    ></app-card-announcement-component>\n  </ion-col>\n  <ion-col size=\"12\" [hidden]=\"announcement | isAnnouncement\">\n    <div class=\"content-center\">\n      <ion-icon color=\"medium\" name=\"trash-outline\"></ion-icon>\n      <ion-text color=\"medium\"> Não á item na lixeira. </ion-text>\n    </div>\n  </ion-col>\n</ion-row>\n\n<!-- Loading -->\n<ng-template #Loading>\n  <ion-row *ngIf=\"error | async; else loadingNoError\">\n    <ion-col size=\"12\">\n      <div class=\"content-center\">\n        <div>\n          <ion-text class=\"ion-text-center\">\n            <p [ngClass]=\"{'hide': menssage}\">Erro ao carregar anúncios.</p>\n          </ion-text>\n          <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n            <ion-refresher-content\n              pullingIcon=\"chevron-down-circle-outline\"\n              pullingText=\"Puxe para baixo\"\n              refreshingSpinner=\"circles\"\n              refreshingText=\"Atualizar...\"\n            >\n            </ion-refresher-content>\n          </ion-refresher>\n          <ion-text class=\"ion-text-center\">\n            <ion-button (mousedown)=\"hideMenssage()\"\n              >Puxe para atualizar\n              <ion-icon\n                class=\"ion-margin-start\"\n                name=\"arrow-down-circle\"\n              ></ion-icon>\n            </ion-button>\n          </ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ng-template #loadingNoError>\n    <app-skeleton-announcement></app-skeleton-announcement>\n  </ng-template>\n</ng-template>\n";

/***/ }),

/***/ 41651:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/pages/enabled-item/enabled-item.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"announcement$ | async;else Loading;\">\n  <!-- Searsh -->\n  <ion-col size=\"12\" class=\"ion-no-padding\">\n    <app-announcement-search-component\n      *ngIf=\"announcement | isAnnouncement: 1\"\n      (search)=\"search($event)\"\n    ></app-announcement-search-component>\n  </ion-col>\n  <ion-col\n    *ngFor=\"let item of announcement\"\n    size-xl=\"6\"\n    size-lg=\"6\"\n    size-md=\"12\"\n    size-sm=\"12\"\n    size=\"12\"\n  >\n    <!-- Anúncios -->\n    <app-card-announcement-component\n      [announcement]=\"item\"\n    ></app-card-announcement-component>\n  </ion-col>\n  <ion-col size=\"12\" [hidden]=\"(announcement | isAnnouncement) || !isAdmin\">\n    <div class=\"content-center\">\n      <ion-icon color=\"medium\" name=\"megaphone\"></ion-icon>\n      <ion-text color=\"medium\"> Não á anúncio cadastrado. </ion-text>\n    </div>\n  </ion-col>\n</ion-row>\n\n<!-- Loading -->\n<ng-template #Loading>\n  <ion-row *ngIf=\"error | async; else loadingNoError\">\n    <ion-col size=\"12\">\n      <div class=\"content-center\">\n        <div>\n          <ion-text class=\"ion-text-center\">\n            <p [ngClass]=\"{'hide': menssage}\">Erro ao carregar anúncios.</p>\n          </ion-text>\n          <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n            <ion-refresher-content\n              pullingIcon=\"chevron-down-circle-outline\"\n              pullingText=\"Puxe para baixo\"\n              refreshingSpinner=\"circles\"\n              refreshingText=\"Atualizar...\"\n            >\n            </ion-refresher-content>\n          </ion-refresher>\n          <ion-text class=\"ion-text-center\">\n            <ion-button (mousedown)=\"hideMenssage()\"\n              >Puxe para atualizar\n              <ion-icon\n                class=\"ion-margin-start\"\n                name=\"arrow-down-circle\"\n              ></ion-icon>\n            </ion-button>\n          </ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ng-template #loadingNoError>\n    <app-skeleton-announcement></app-skeleton-announcement>\n  </ng-template>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_administrator_announcement_announcement_module_ts.js.map