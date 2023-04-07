(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_auth_announcement_management_announcement_module_ts"],{

/***/ 14666:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/management/announcement-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementPageRoutingModule": () => (/* binding */ AnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _announcement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.page */ 78693);




const routes = [{
  path: '',
  component: _announcement_page__WEBPACK_IMPORTED_MODULE_0__.AnnouncementPage
}];
let AnnouncementPageRoutingModule = class AnnouncementPageRoutingModule {};
AnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AnnouncementPageRoutingModule);


/***/ }),

/***/ 88000:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/management/announcement.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementPageModule": () => (/* binding */ AnnouncementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/header-modal/header-modal.module */ 32728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement-routing.module */ 14666);
/* harmony import */ var _announcement_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcement.page */ 78693);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var src_app_utilities_announcement_announcement_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/announcement/announcement-utilities.service */ 25032);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _component_announcement_work_days_work_days_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../component/announcement/work-days/work-days.component.module */ 68050);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement-component.module */ 26694);
/* harmony import */ var _component_user_user_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../component/user/user-component.module */ 46469);
/* harmony import */ var _component_category_announcement_category_announcement_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../component/category-announcement/category-announcement.module */ 310);
/* harmony import */ var _component_announcement_galery_galery_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../component/announcement/galery/galery-component.module */ 16199);

















let AnnouncementPageModule = class AnnouncementPageModule {};
AnnouncementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _announcement_routing_module__WEBPACK_IMPORTED_MODULE_1__.AnnouncementPageRoutingModule, src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_0__.HeaderModalModule, _component_announcement_galery_galery_component_module__WEBPACK_IMPORTED_MODULE_11__.GaleryComponentModule, src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_8__.AnnouncementComponentsModule, _component_user_user_component_module__WEBPACK_IMPORTED_MODULE_9__.UserComponentsModule, _component_announcement_work_days_work_days_component_module__WEBPACK_IMPORTED_MODULE_7__.WorkDayComponentModule, _component_category_announcement_category_announcement_module__WEBPACK_IMPORTED_MODULE_10__.CategoryAnnouncementComponentModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule],
  declarations: [_announcement_page__WEBPACK_IMPORTED_MODULE_2__.AnnouncementPage],
  providers: [src_app_utilities_announcement_announcement_utilities_service__WEBPACK_IMPORTED_MODULE_5__.AnnouncementUtilities]
})], AnnouncementPageModule);


/***/ }),

/***/ 78693:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/management/announcement.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementPage": () => (/* binding */ AnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.page.html?ngResource */ 40903);
/* harmony import */ var _announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.page.scss?ngResource */ 85892);
/* harmony import */ var _announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _service_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/management.service */ 94111);
/* harmony import */ var _component_announcement_galery_service_galery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/announcement/galery/service/galery.service */ 5379);









let AnnouncementPage = class AnnouncementPage {
  constructor(managementAnnouncementService, authService, navCtrl, route, galeryAnnouncementService) {
    this.managementAnnouncementService = managementAnnouncementService;
    this.authService = authService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.galeryAnnouncementService = galeryAnnouncementService;
    this.isAnnouncement = true;
  }
  ngOnDestroy() {
    this.$updateGalery.unsubscribe();
  }
  ngOnInit() {
    this.toggleRoute();
    this.getUser();
    this.init();
    this.updateGalery();
  }
  isHeader(e) {
    this.hasHeader = e;
  }
  toggleRoute() {
    this.isAnnouncement = !this.route.url.includes('dias-da-semana');
    this.isRoute = this.route.url.includes('dias-da-semana') ? 'WorkDays' : null;
  }
  back() {
    this.navCtrl.back();
  }
  init() {
    this.announcement$ = this.managementAnnouncementService.announcementObservable;
  }
  getUser() {
    this.user$ = this.authService.userObservable;
  }
  updateGalery() {
    return this.$updateGalery = this.galeryAnnouncementService.galeryAsObservable.subscribe({
      next: galery => {
        var _a, _b;
        if (galery) {
          if (((_a = this.managementAnnouncementService) === null || _a === void 0 ? void 0 : _a.galery) && ((_b = this.managementAnnouncementService) === null || _b === void 0 ? void 0 : _b.galery.length) > 0) {
            this.managementAnnouncementService.addItemGalery = galery;
          } else {
            this.managementAnnouncementService.setGalery = [galery];
          }
        }
      }
    });
  }
};
AnnouncementPage.ctorParameters = () => [{
  type: _service_management_service__WEBPACK_IMPORTED_MODULE_3__.ManagementAnnouncementService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _component_announcement_galery_service_galery_service__WEBPACK_IMPORTED_MODULE_4__.GaleryAnnouncementService
}];
AnnouncementPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent]
  }]
};
AnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-announcement',
  template: _announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementPage);


/***/ }),

/***/ 89952:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days-admin/service/service.service.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteWorkDayService": () => (/* binding */ DeleteWorkDayService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _work_days_service_work_days_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../work-days/service/work-days.service */ 78549);







let DeleteWorkDayService = class DeleteWorkDayService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, workDayService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.workDayService = workDayService;
    this.setApi = `workDays`;
  }
  delete(workDays) {
    return this.destroy(workDays).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.workDayService.setworkDay = null));
  }
};
DeleteWorkDayService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: _work_days_service_work_days_service__WEBPACK_IMPORTED_MODULE_2__.WorkDayAnnouncementService
}];
DeleteWorkDayService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], DeleteWorkDayService);


/***/ }),

/***/ 44500:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days-admin/work-days.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminManagementWorkDayComponent": () => (/* binding */ AdminManagementWorkDayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _work_days_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-days.component.html?ngResource */ 65357);
/* harmony import */ var _work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-days.component.scss?ngResource */ 19400);
/* harmony import */ var _work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/service.service */ 89952);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _work_days_service_work_days_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../work-days/service/work-days.service */ 78549);









let AdminManagementWorkDayComponent = class AdminManagementWorkDayComponent {
  constructor(deleteworkDayService, alertController, loadingService, messageService, workDayAnnouncementService) {
    this.deleteworkDayService = deleteworkDayService;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.workDayAnnouncementService = workDayAnnouncementService;
    this.daysOfTheWeekPT = ['Domingo', 'Segunda feira', 'Terça feira', 'Quarta feira', 'Quinta feira', 'Sexta feira', 'Sábado'];
    this.daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  }
  ngOnInit() {
    this.update();
  }
  ngOnDestroy() {
    this.$update.unsubscribe();
  }
  destroy() {
    var _a, _b, _c;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.workDays)) {
        const alert = yield this.alertController.create({
          header: 'Excluir horário de funcionamento',
          subHeader: (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.title,
          buttons: [{
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {}
          }, {
            text: 'OK',
            role: 'confirm',
            handler: event => {
              var _a, _b, _c;
              const data = Object.assign(Object.assign({}, event), {
                _csrf: (_a = this.announcement) === null || _a === void 0 ? void 0 : _a._csrf,
                id: (_c = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.workDays) === null || _c === void 0 ? void 0 : _c.id
              });
              return this.delete(data);
            }
          }],
          inputs: [{
            name: 'password',
            type: 'password',
            placeholder: 'Senha',
            min: 8,
            max: 16
          }]
        });
        yield alert.present();
      }
    });
  }
  delete(workDays) {
    var _a, _b;
    if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.workDays)) {
      const loading = this.loadingService.show('Excluindo horário de funcionamento...');
      return this.$delete = this.deleteworkDayService.delete(workDays).subscribe({
        next: workDay_ => {
          this.messsage(workDay_, loading);
          if (this.announcement) this.announcement.workDays = null;
        },
        error: error => this.messageService.error(error, loading, this.$delete)
      });
    }
  }
  messsage(workDays, loading) {
    if (workDays === null || workDays === void 0 ? void 0 : workDays.message) {
      return this.messageService.success(workDays === null || workDays === void 0 ? void 0 : workDays.message, loading, this.$delete);
    }
  }
  update() {
    return this.$update = this.workDayAnnouncementService.getworkDayEvent.subscribe({
      next: workDays => {
        var _a;
        if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === (workDays === null || workDays === void 0 ? void 0 : workDays.announcementId)) {
          if (this.announcement) this.announcement.workDays = workDays;
        }
      }
    });
  }
};
AdminManagementWorkDayComponent.ctorParameters = () => [{
  type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.DeleteWorkDayService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: _work_days_service_work_days_service__WEBPACK_IMPORTED_MODULE_5__.WorkDayAnnouncementService
}];
AdminManagementWorkDayComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AdminManagementWorkDayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-work-days-admin-management',
  template: _work_days_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminManagementWorkDayComponent);


/***/ }),

/***/ 98010:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days/button-work-days.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonWorkDayComponent": () => (/* binding */ ButtonWorkDayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_work_days_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-work-days.component.html?ngResource */ 40742);
/* harmony import */ var _button_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-work-days.component.scss?ngResource */ 85409);
/* harmony import */ var _button_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





let ButtonWorkDayComponent = class ButtonWorkDayComponent {
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  route() {
    var _a;
    return this.navCtrl.navigateForward(['/painel-de-controle', 'anuncio', (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.slug, 'dias-da-semana']);
  }
};
ButtonWorkDayComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
}];
ButtonWorkDayComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
ButtonWorkDayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-button-work-days',
  template: _button_work_days_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_button_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ButtonWorkDayComponent);


/***/ }),

/***/ 9458:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/days-of-the-week/days-of-the-week.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaysOfTheWeekComponent": () => (/* binding */ DaysOfTheWeekComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _days_of_the_week_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./days-of-the-week.component.html?ngResource */ 26323);
/* harmony import */ var _days_of_the_week_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./days-of-the-week.component.scss?ngResource */ 65311);
/* harmony import */ var _days_of_the_week_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_days_of_the_week_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_work_days_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/work-days.service */ 78549);





let DaysOfTheWeekComponent = class DaysOfTheWeekComponent {
  constructor(workDayService) {
    this.workDayService = workDayService;
    this.eventDay = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(undefined);
    this.route = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(undefined);
  }
  ngOnInit() {
    this.init();
  }
  back() {
    this.route.emit('announcement');
  }
  setDay(day) {
    this.eventDay.emit(day);
  }
  setOperningHour() {
    return {
      announcementId: this.announcement.id,
      sunday: this.workDayService.fields,
      monday: this.workDayService.fields,
      tuesday: this.workDayService.fields,
      wednesday: this.workDayService.fields,
      thursday: this.workDayService.fields,
      friday: this.workDayService.fields,
      saturday: this.workDayService.fields
    };
  }
  init() {
    var _a, _b, _c;
    if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.workDays) === null) {
      this.workDays = this.setOperningHour();
    } else {
      if ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.workDays) {
        this.workDays = (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.workDays;
      }
    }
  }
};
DaysOfTheWeekComponent.ctorParameters = () => [{
  type: _service_work_days_service__WEBPACK_IMPORTED_MODULE_2__.WorkDayAnnouncementService
}];
DaysOfTheWeekComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  eventDay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  route: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
};
DaysOfTheWeekComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-days-of-the-week',
  template: _days_of_the_week_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_days_of_the_week_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DaysOfTheWeekComponent);


/***/ }),

/***/ 28160:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/form/form.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 23147);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 12423);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var _service_work_days_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/work-days.service */ 78549);









let FormComponent = class FormComponent {
  constructor(fb, workDayService, messageService, loadingService) {
    this.fb = fb;
    this.workDayService = workDayService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.route = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(undefined);
    this.minuteValue = '0,5,10,15,20,25,30,35,40,45,50,55';
  }
  get dataFormTime() {
    return {
      start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      startInterval: [''],
      endInterval: [''],
      end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    };
  }
  ngOnInit() {
    this.init();
    this.formInit();
    this.changeToEnglish();
  }
  changeToEnglish() {
    switch (this.dayOfTheWeek) {
      case 'domingo':
        this.day = 'sunday';
        break;
      case 'segunda':
        this.day = 'monday';
        break;
      case 'terca':
        this.day = 'tuesday';
        break;
      case 'quarta':
        this.day = 'wednesday';
        break;
      case 'quinta':
        this.day = 'thursday';
        break;
      case 'sexta':
        this.day = 'friday';
        break;
      case 'sabado':
        this.day = 'saturday';
        break;
    }
  }
  back() {
    this.route.emit('WorkDays');
  }
  setTime(setTime, dayOfTheWeek) {
    if (dayOfTheWeek && this.workDayService.days.includes(dayOfTheWeek)) {
      const {
        value
      } = this.datetime;
      switch (dayOfTheWeek) {
        case 'domingo':
          this.setDataTime(setTime, value, 'sunday');
          break;
        case 'segunda':
          this.setDataTime(setTime, value, 'monday');
          break;
        case 'terca':
          this.setDataTime(setTime, value, 'tuesday');
          break;
        case 'quarta':
          this.setDataTime(setTime, value, 'wednesday');
          break;
        case 'quinta':
          this.setDataTime(setTime, value, 'thursday');
          break;
        case 'sexta':
          this.setDataTime(setTime, value, 'friday');
          break;
        case 'sabado':
          this.setDataTime(setTime, value, 'saturday');
          break;
      }
    }
  }
  cancel(event) {
    this.datetime.cancel();
    return event.dismiss();
  }
  confirm(event) {
    this.datetime.confirm();
    return event.dismiss();
  }
  reset() {
    this.cleanFields();
    return this.onSubmit();
  }
  onSubmit() {
    var _a;
    if (this.workDayService.valid(this.form.value)) {
      const loading = this.loadingService.show('Salvando horário...');
      this.form.value._csrf = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a._csrf;
      return this.$workDays = this.workDayService.workDays(this.form.value).subscribe({
        next: workDays => (workDays === null || workDays === void 0 ? void 0 : workDays.message) && this.messsage(workDays === null || workDays === void 0 ? void 0 : workDays.message, loading),
        error: error => this.messageService.error(error, loading, this.$workDays)
      });
    }
  }
  cleanFields() {
    var _a;
    this.form.value[this.day] = (_a = this.workDayService) === null || _a === void 0 ? void 0 : _a.fields;
  }
  setDataTime(setTime, value, day) {
    switch (setTime) {
      case 'start':
        this.start = value;
        const start = JSON.parse('{"' + day + '":{"start":"' + value + '"}}');
        this.form.patchValue(Object.assign({}, start));
        break;
      case 'startInterval':
        this.startInterval = value;
        const startInterval = JSON.parse('{"' + day + '":{"startInterval":"' + value + '"}}');
        this.form.patchValue(Object.assign({}, startInterval));
        break;
      case 'endInterval':
        this.endInterval = value;
        const endInterval = JSON.parse('{"' + day + '":{"endInterval":"' + value + '"}}');
        this.form.patchValue(Object.assign({}, endInterval));
        break;
      case 'end':
        this.end = value;
        const end = JSON.parse('{"' + day + '":{"endInterval":"' + value + '"}}');
        this.form.patchValue(Object.assign({}, end));
        break;
    }
  }
  formInit() {
    var _a, _b;
    if ((_a = this.workDays) === null || _a === void 0 ? void 0 : _a.id) {
      return this.form = this.fb.group(Object.assign({}, this.workDays));
    }
    return this.form = this.fb.group({
      announcementId: [(_b = this.announcement) === null || _b === void 0 ? void 0 : _b.id],
      sunday: this.fb.group(Object.assign({}, this.dataFormTime)),
      monday: this.fb.group(Object.assign({}, this.dataFormTime)),
      tuesday: this.fb.group(Object.assign({}, this.dataFormTime)),
      wednesday: this.fb.group(Object.assign({}, this.dataFormTime)),
      thursday: this.fb.group(Object.assign({}, this.dataFormTime)),
      friday: this.fb.group(Object.assign({}, this.dataFormTime)),
      saturday: this.fb.group(Object.assign({}, this.dataFormTime))
    });
  }
  messsage(message, loading) {
    return this.messageService.success(message, loading, this.$workDays);
  }
  init() {
    var _a;
    this.workDays = ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.workDays) || null;
  }
};
FormComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _service_work_days_service__WEBPACK_IMPORTED_MODULE_4__.WorkDayAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}];
FormComponent.propDecorators = {
  popoverStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['popoverStart', {
      static: false
    }]
  }],
  popoverStartInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['popoverStartInterval', {
      static: false
    }]
  }],
  popoverEndInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['popoverEndInterval', {
      static: false
    }]
  }],
  popoverEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['popoverEnd', {
      static: false
    }]
  }],
  datetime: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonDatetime, {
      static: false
    }]
  }],
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dayOfTheWeek: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  route: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};
FormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-form-component',
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormComponent);


/***/ }),

/***/ 78549:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/service/work-days.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkDayAnnouncementService": () => (/* binding */ WorkDayAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);








let WorkDayAnnouncementService = class WorkDayAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
  constructor(http, storageService, messageService, managementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.managementService = managementService;
    this.fields = {
      start: '',
      startInterval: '',
      endInterval: '',
      end: ''
    };
    this.days = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    this.daysEs = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.workDayEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(undefined);
    this.setApi = `workDays`;
  }
  get getworkDayEvent() {
    return this.workDayEvent.asObservable();
  }
  set setworkDay(value) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.workDays = value;
      this.managementService.setAnnouncement = this.managementService.getAnnouncement;
    }
    this.workDayEvent.emit(value);
  }
  workDays(workDays) {
    if (workDays === null || workDays === void 0 ? void 0 : workDays.id) {
      return this.patch(workDays, 'workDays').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(workDay_ => this.setworkDay = workDay_));
    } else {
      return this.create(workDays, 'workDays').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(workDay_ => this.setworkDay = workDay_));
    }
  }
  valid(workDays) {
    return this.daysEs.every(day => Object.prototype.toString.call(workDays[day]) === '[object Object]');
  }
};
WorkDayAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__.ManagementAnnouncementService
}];
WorkDayAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], WorkDayAnnouncementService);


/***/ }),

/***/ 68050:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/work-days.component.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkDayComponentModule": () => (/* binding */ WorkDayComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _work_days_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-days.component */ 38564);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var _component_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/form/form.component */ 28160);
/* harmony import */ var _component_days_of_the_week_days_of_the_week_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/days-of-the-week/days-of-the-week.component */ 9458);
/* harmony import */ var _component_button_work_days_button_work_days_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/button-work-days/button-work-days.component */ 98010);
/* harmony import */ var _component_button_work_days_admin_service_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/button-work-days-admin/service/service.service */ 89952);
/* harmony import */ var _component_button_work_days_admin_work_days_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/button-work-days-admin/work-days.component */ 44500);















let WorkDayComponentModule = class WorkDayComponentModule {};
WorkDayComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_work_days_component__WEBPACK_IMPORTED_MODULE_1__.WorkDayAnnouncementComponent, _component_days_of_the_week_days_of_the_week_component__WEBPACK_IMPORTED_MODULE_5__.DaysOfTheWeekComponent, _component_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent, _component_button_work_days_button_work_days_component__WEBPACK_IMPORTED_MODULE_6__.ButtonWorkDayComponent, _component_button_work_days_admin_work_days_component__WEBPACK_IMPORTED_MODULE_8__.AdminManagementWorkDayComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_0__.PipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule],
  exports: [_work_days_component__WEBPACK_IMPORTED_MODULE_1__.WorkDayAnnouncementComponent, _component_button_work_days_button_work_days_component__WEBPACK_IMPORTED_MODULE_6__.ButtonWorkDayComponent],
  providers: [_component_button_work_days_admin_service_service_service__WEBPACK_IMPORTED_MODULE_7__.DeleteWorkDayService]
})], WorkDayComponentModule);


/***/ }),

/***/ 25032:
/*!**************************************************************************!*\
  !*** ./src/app/utilities/announcement/announcement-utilities.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementUtilities": () => (/* binding */ AnnouncementUtilities)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let AnnouncementUtilities = class AnnouncementUtilities {
  setButton(action) {
    switch (action) {
      case 'register':
        return {
          route: '/create',
          icon: 'create',
          label: 'Cadastrar',
          aria: 'Cadastrar categoria.',
          title: 'Cadastrar categoria.'
        };
      case 'updateAnnouncement':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          aria: 'Salvar titulo e descrição.',
          title: 'Salvar titulo e descrição.'
        };
      case 'coordinate':
        return {
          route: '/coordinate',
          icon: 'cloud-upload',
          label: 'Salvar',
          aria: 'Salvar mapa.',
          title: 'Salvar mapa.'
        };
      case 'destroy':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.'
        };
      case 'drop':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.'
        };
      case 'restore':
        return {
          route: '/restore',
          icon: 'refresh',
          label: 'Restaurar categoria',
          aria: 'Restaurar categoria.',
          title: 'Restaurar categoria.'
        };
    }
  }
};
AnnouncementUtilities = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], AnnouncementUtilities);


/***/ }),

/***/ 85892:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/management/announcement.page.scss?ngResource ***!
  \************************************************************************************************/
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

/***/ 19400:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days-admin/work-days.component.scss?ngResource ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85409:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days/button-work-days.component.scss?ngResource ***!
  \****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65311:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/days-of-the-week/days-of-the-week.component.scss?ngResource ***!
  \****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12423:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/form/form.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40903:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/management/announcement.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [hidden]=\"hasHeader\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" (click)=\"back()\" defaultHref></ion-back-button>\n    </ion-buttons>\n    <ion-title>Gerenciamento do anúncio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid *ngIf=\"user$ | async;let user;\" fixed>\n    <ion-row>\n      <ng-container *ngIf=\"announcement$ | async;let announcement; else Error\">\n        <ion-col\n          [hidden]=\"!announcement | announcementValues:'title'\"\n          size=\"12\"\n          class=\"ion-margin-vertical\"\n        >\n          <ion-text>\n            <h1 [title]=\"announcement | announcementValues:'title'\">\n              {{ announcement | announcementValues:'title' | lnWords:52 }}\n            </h1>\n          </ion-text>\n        </ion-col>\n        <ng-container *ngIf=\"isAnnouncement; else Association\">\n          <!-- Messagem -->\n          <ion-col\n            size=\"12\"\n            *ngIf=\"announcement && announcement?.citie && announcement?.address && announcement?.contact\"\n          >\n            <app-card-message-component\n              [announcement]=\"announcement\"\n            ></app-card-message-component>\n          </ion-col>\n\n          <!-- Messagem de boas vindas -->\n          <ion-col\n            size=\"12\"\n            [hidden]=\"announcement && announcement?.citie && announcement?.address && announcement?.contact\"\n          >\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title>Bem-vindo!</ion-card-title>\n                <ion-card-subtitle\n                  >Cadastro sujeito a aprovação.</ion-card-subtitle\n                >\n              </ion-card-header>\n              <ion-card-content class=\"ion-margin-top\">\n                <ion-text class=\"ion-margin-bottom\">\n                  <p>\n                    Selecione uma categoria para desbloquear os botões abaixo.\n                  </p>\n                  <p>É obrigatório o cadastro de cidade, endereço, contato.</p>\n                  <p>\n                    O botão de status permite que você altere a sua visibilidade\n                    para \"online\" e \"offline\" que será desbloqueado caso os\n                    itens obrigatórios seja cadastrados.\n                  </p>\n                </ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n\n          <!-- Categorias  -->\n          <ion-col size=\"12\" class=\"ion-margin-vertical\">\n            <app-category-component\n              [announcement]=\"announcement\"\n            ></app-category-component>\n          </ion-col>\n\n          <!-- Galery -->\n          <ion-col\n            *ngIf=\"announcement | isAnnouncementCategory\"\n            size=\"12\"\n            class=\"ion-margin-vertical\"\n          >\n            <app-galery-announcement-component\n              [announcement]=\"announcement\"\n              (isHeader)=\"isHeader($event)\"\n            ></app-galery-announcement-component>\n          </ion-col>\n          <!-- List Item -->\n          <ion-col\n            *ngIf=\"announcement | isAnnouncementCategory\"\n            size=\"12\"\n            class=\"ion-margin-vertical\"\n          >\n            <ion-item-group>\n              <!-- message -->\n              <app-messages-component\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-messages-component>\n              <!-- Blockade -->\n              <app-blockade-announcement-component\n                [announcement]=\"announcement\"\n                [user]=\"user\"\n              ></app-blockade-announcement-component>\n\n              <!-- State -->\n              <app-state-announcement-component\n                [announcement]=\"announcement\"\n              ></app-state-announcement-component>\n\n              <!-- Name -->\n              <app-announcement-component\n                [announcement]=\"announcement\"\n                [user]=\"user\"\n              ></app-announcement-component>\n\n              <!-- Cidade estado -->\n              <app-city-announcement-component\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-city-announcement-component>\n\n              <!-- Endereço -->\n              <app-address-announcement-component\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-address-announcement-component>\n\n              <!-- Contato -->\n              <app-contant-announcement-component\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-contant-announcement-component>\n\n              <!-- Coordenadas -->\n              <app-map-announcement-component\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-map-announcement-component>\n\n              <!-- Redes Sociais -->\n              <app-social-network-component\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-social-network-component>\n\n              <!-- Horario de funcionamento -->\n              <app-button-work-days\n                [user]=\"user\"\n                [announcement]=\"announcement\"\n              ></app-button-work-days>\n            </ion-item-group>\n          </ion-col>\n        </ng-container>\n\n        <ng-template #Association>\n          <ion-col\n            *ngIf=\"(announcement| isAnnouncement) && (announcement | isAnnouncementCategory)\"\n            size=\"12\"\n          >\n            <app-work-days [announcement]=\"announcement\"></app-work-days>\n          </ion-col>\n        </ng-template>\n      </ng-container>\n\n      <ng-template #Error>\n        <ion-col size=\"12\">\n          <div class=\"content-center\">\n            <ion-icon\n              name=\"warning\"\n              color=\"medium\"\n              style=\"font-size: 100px\"\n            ></ion-icon>\n            <ion-text color=\"primary\"> Anúncio não existe </ion-text>\n            <ion-button\n              (click)=\"back()\"\n              fill=\"outline\"\n              expand=\"block\"\n              class=\"ion-margin-top\"\n            >\n              <ion-icon\n                name=\"arrow-back-circle\"\n                class=\"ion-margin-end\"\n              ></ion-icon>\n              voutar\n            </ion-button>\n          </div>\n        </ion-col>\n      </ng-template>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 65357:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days-admin/work-days.component.html?ngResource ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-sliding>\n    <ion-item lines=\"true\">\n      <ion-icon slot=\"start\" name=\"timer\"></ion-icon>\n      <ion-icon\n        slot=\"end\"\n        title=\"Pressione e arraste para a esquerda.\"\n        data-message=\"Pressione e arraste para a esquerda.\"\n        name=\"chevron-back\"\n      ></ion-icon>\n      <ion-label\n        >Horário de funcionamento\n        <ion-text [color]=\"(announcement | isWorkDays) ? 'success' : 'danger'\">\n          *\n        </ion-text>\n      </ion-label>\n    </ion-item>\n\n    <ion-item-options>\n      <ion-item-option\n        *ngIf=\"announcement | isWorkDays\"\n        slot=\"end\"\n        size=\"small\"\n        color=\"danger\"\n        class=\"cursor-pointer\"\n        title=\"Exclui horário de funcionamento\"\n        data-message=\"Exclui horário de funcionamento\"\n        (click)=\"destroy()\"\n      >\n        <ion-icon color=\"light\" name=\"trash\" slot=\"start\"></ion-icon>\n        delete\n      </ion-item-option>\n      <ion-item-option\n        slot=\"end\"\n        size=\"small\"\n        class=\"cursor-pointer\"\n        [title]=\"\n          (announcement | isWorkDays)\n            ? 'Editar'\n            : 'Cadastrar' + 'horário de funcionamento'\n        \"\n        [attr.data-message]=\"\n          (announcement | isWorkDays)\n            ? 'Editar'\n            : 'Cadastrar' + 'horário de funcionamento'\n        \"\n        [routerLink]=\"[\n          '/painel-de-controle',\n          'anuncio',\n          announcement?.slug,\n          'dias-da-semana'\n        ]\"\n      >\n        <ion-icon color=\"light\" name=\"create\" slot=\"start\"></ion-icon>\n        {{ (announcement | isWorkDays) ? \"Editar\" : \"Cadastrar\" }}\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-item-group>\n";

/***/ }),

/***/ 40742:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/button-work-days/button-work-days.component.html?ngResource ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user | isUserLevel : '2'; else Else\"\n  [disabled]=\"!announcement?.categoryAnnouncement\"\n  detail=\"true\"\n  (click)=\"route()\"\n  title=\"Gerenciar horário de trabalho.\"\n  aria-label=\"Gerenciar horário de trabalho.\"\n  [attr.aria-disabled]=\"\n    !announcement?.categoryAnnouncement &&\n    'Para gerenciar horário de trabalho cadastre uma categoria.'\n  \"\n  button\n>\n  <ion-icon name=\"timer\" slot=\"start\"></ion-icon>\n  <ion-label\n    >Horário de trabalho\n    <ion-text [color]=\"announcement?.workDays ? 'success' : 'danger'\">\n      *\n    </ion-text>\n  </ion-label>\n</ion-item>\n\n<ng-template #Else>\n  <!-- Horario de funcionamento -->\n  <app-work-days-admin-management\n    [announcement]=\"announcement\"\n  ></app-work-days-admin-management>\n</ng-template>\n";

/***/ }),

/***/ 26323:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/days-of-the-week/days-of-the-week.component.html?ngResource ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-divider>\n    <ion-label>Dias da semana</ion-label>\n    <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item detail=\"true\" (click)=\"setDay('domingo')\" button>\n    <ion-label>Domingo</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.sunday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.sunday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n  <ion-item detail=\"true\" (click)=\"setDay('segunda')\" button>\n    <ion-label>Segunda</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.monday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.monday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n  <ion-item detail=\"true\" (click)=\"setDay('terca')\" button>\n    <ion-label>Terça</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.tuesday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.tuesday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n  <ion-item detail=\"true\" (click)=\"setDay('quarta')\" button>\n    <ion-label>Quarta</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.wednesday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.wednesday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n  <ion-item detail=\"true\" (click)=\"setDay('quinta')\" button>\n    <ion-label>Quinta</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.thursday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.thursday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n  <ion-item detail=\"true\" (click)=\"setDay('sexta')\" button>\n    <ion-label>Sexta</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.friday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.friday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n  <ion-item detail=\"true\" (click)=\"setDay('sabado')\" button>\n    <ion-label>Sábado</ion-label>\n    <ion-icon\n      slot=\"start\"\n      [name]=\"workDays.saturday.start ? 'checkmark-done' : 'checkmark'\"\n      [color]=\"workDays.saturday.start ? 'success' : 'light'\"\n    ></ion-icon>\n  </ion-item>\n</ion-item-group>\n";

/***/ }),

/***/ 23147:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/component/form/form.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-divider>\n    <ion-label class=\"ion-text-capitalize\">{{ dayOfTheWeek }}</ion-label>\n    <ion-button slot=\"end\" size=\"small\" (click)=\"back()\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      Dias da semana\n    </ion-button>\n  </ion-item-divider>\n  <ion-item id=\"start\" detail=\"true\" button>\n    <ion-label>Início </ion-label>\n    <ion-badge slot=\"end\" color=\"primary\" class=\"ion-margin-end\" mode=\"ios\">{{\n      form.value[day]?.start | date : \"HH:mm\"\n    }}</ion-badge>\n    <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n    <ion-popover\n      #popoverStart\n      (ionChange)=\"setTime('start', dayOfTheWeek)\"\n      trigger=\"start\"\n      side=\"right\"\n    >\n      <ng-template>\n        <ion-content class=\"ion-padding\">\n          <ion-text color=\"medium ion-text-center\">\n            <p class=\"ion-no-margin\">horas | minutos</p>\n          </ion-text>\n          <ion-datetime\n            [showDefaultButtons]=\"false\"\n            [minuteValues]=\"minuteValue\"\n            presentation=\"time\"\n            [value]=\"form.value[day]?.start\"\n          >\n            <ion-buttons slot=\"buttons\">\n              <ion-button color=\"primary\" (click)=\"cancel(popoverStart)\"\n                >Cancelar</ion-button\n              >\n              <ion-button color=\"primary\" (click)=\"confirm(popoverStart)\"\n                >Confirmar</ion-button\n              >\n            </ion-buttons>\n          </ion-datetime>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n  </ion-item>\n  <ion-item id=\"startInterval\" detail=\"true\" button>\n    <ion-label>Intervalo início</ion-label>\n    <ion-badge slot=\"end\" color=\"primary\" class=\"ion-margin-end\" mode=\"ios\">{{\n      form.value[day]?.startInterval | date : \"HH:mm\"\n    }}</ion-badge>\n    <ion-icon slot=\"start\" name=\"stopwatch\"></ion-icon>\n\n    <ion-popover\n      #popoverStartInterval\n      (ionChange)=\"setTime('startInterval', dayOfTheWeek)\"\n      trigger=\"startInterval\"\n      side=\"right\"\n    >\n      <ng-template>\n        <ion-content class=\"ion-padding\">\n          <ion-text color=\"medium ion-text-center\">\n            <p class=\"ion-no-margin\">horas | minutos</p>\n          </ion-text>\n          <ion-datetime\n            [showDefaultButtons]=\"false\"\n            [minuteValues]=\"minuteValue\"\n            presentation=\"time\"\n            [value]=\"form.value[day]?.startInterval\"\n          >\n            <ion-buttons slot=\"buttons\">\n              <ion-button color=\"primary\" (click)=\"cancel(popoverStartInterval)\"\n                >Cancelar</ion-button\n              >\n              <ion-button\n                color=\"primary\"\n                (click)=\"confirm(popoverStartInterval)\"\n                >Confirmar</ion-button\n              >\n            </ion-buttons>\n          </ion-datetime>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n  </ion-item>\n  <ion-item id=\"endInterval\" detail=\"true\" button>\n    <ion-label>Intervalo fim</ion-label>\n    <ion-badge slot=\"end\" color=\"primary\" class=\"ion-margin-end\" mode=\"ios\">{{\n      form.value[day]?.endInterval | date : \"HH:mm\"\n    }}</ion-badge>\n    <ion-icon slot=\"start\" name=\"stopwatch-outline\"></ion-icon>\n\n    <ion-popover\n      #popoverEndInterval\n      (ionChange)=\"setTime('endInterval', dayOfTheWeek)\"\n      trigger=\"endInterval\"\n      side=\"right\"\n    >\n      <ng-template>\n        <ion-content class=\"ion-padding\">\n          <ion-text color=\"medium ion-text-center\">\n            <p class=\"ion-no-margin\">horas | minutos</p>\n          </ion-text>\n          <ion-datetime\n            [showDefaultButtons]=\"false\"\n            [minuteValues]=\"minuteValue\"\n            presentation=\"time\"\n            [value]=\"form.value[day]?.endInterval\"\n          >\n            <ion-buttons slot=\"buttons\">\n              <ion-button color=\"primary\" (click)=\"cancel(popoverEndInterval)\"\n                >Cancelar</ion-button\n              >\n              <ion-button color=\"primary\" (click)=\"confirm(popoverEndInterval)\"\n                >Confirmar</ion-button\n              >\n            </ion-buttons>\n          </ion-datetime>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n  </ion-item>\n  <ion-item id=\"end\" detail=\"true\" button>\n    <ion-label>Fim</ion-label>\n    <ion-badge slot=\"end\" color=\"primary\" class=\"ion-margin-end\" mode=\"ios\">{{\n      form.value[day]?.end | date : \"HH:mm\"\n    }}</ion-badge>\n    <ion-icon slot=\"start\" name=\"timer\"></ion-icon>\n\n    <ion-popover\n      #popoverEnd\n      (ionChange)=\"setTime('end', dayOfTheWeek)\"\n      trigger=\"end\"\n      side=\"right\"\n    >\n      <ng-template>\n        <ion-content class=\"ion-padding\">\n          <ion-text color=\"medium ion-text-center\">\n            <p class=\"ion-no-margin\">horas | minutos</p>\n          </ion-text>\n          <ion-datetime\n            [showDefaultButtons]=\"false\"\n            [minuteValues]=\"minuteValue\"\n            presentation=\"time\"\n            [value]=\"form.value[day]?.end\"\n          >\n            <ion-buttons slot=\"buttons\">\n              <ion-button color=\"primary\" (click)=\"cancel(popoverEnd)\"\n                >Cancelar</ion-button\n              >\n              <ion-button color=\"primary\" (click)=\"confirm(popoverEnd)\"\n                >Confirmar</ion-button\n              >\n            </ion-buttons>\n          </ion-datetime>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n  </ion-item>\n</ion-item-group>\n<ion-button\n  (click)=\"onSubmit()\"\n  expand=\"block\"\n  class=\"ion-margin-top\"\n  [disabled]=\"!(form.value[day]?.start && form.value[day]?.end)\"\n>\n  <ion-icon name=\"cloud-upload\" class=\"ion-margin-end\"></ion-icon>\n  Salvar\n</ion-button>\n<ion-button\n  (click)=\"reset()\"\n  expand=\"block\"\n  class=\"ion-margin-top\"\n  [disabled]=\"!(form.value[day]?.start && form.value[day]?.end)\"\n>\n  <ion-icon name=\"trash\" class=\"ion-margin-end\"></ion-icon>\n  Redefinir\n</ion-button>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_auth_announcement_management_announcement_module_ts.js.map