(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_component_announcement_announcement-component_module_ts-src_a-c06dca"],{

/***/ 68404:
/*!*******************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModalComponent": () => (/* binding */ HeaderModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-modal.component.html?ngResource */ 92852);
/* harmony import */ var _header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-modal.component.scss?ngResource */ 26661);
/* harmony import */ var _header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let HeaderModalComponent = class HeaderModalComponent {
  constructor(plt, modalController) {
    this.plt = plt;
    this.modalController = modalController;
  }
  ngOnInit() {
    this.isPlt = this.plt.is('desktop');
  }
  close() {
    return this.modalController.dismiss();
  }
};
HeaderModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}];
HeaderModalComponent.propDecorators = {
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
HeaderModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-header-component-modal',
  template: _header_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderModalComponent);


/***/ }),

/***/ 32728:
/*!****************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModalModule": () => (/* binding */ HeaderModalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _header_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-modal.component */ 68404);





let HeaderModalModule = class HeaderModalModule {};
HeaderModalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_header_modal_component__WEBPACK_IMPORTED_MODULE_0__.HeaderModalComponent],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  exports: [_header_modal_component__WEBPACK_IMPORTED_MODULE_0__.HeaderModalComponent]
})], HeaderModalModule);


/***/ }),

/***/ 35131:
/*!*********************************************************************!*\
  !*** ./src/app/components/present-plan/animations/modal.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 93819);



let ModalService = class ModalService {
  constructor(animationCtrl) {
    this.animationCtrl = animationCtrl;
    this.enterAnimation = baseEl => {
      const root = baseEl.shadowRoot;
      const backdropAnimation = this.animationCtrl.create().addElement(root.querySelector('ion-backdrop')).fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
      const wrapperAnimation = this.animationCtrl.create().addElement(root.querySelector('.modal-wrapper')).keyframes([{
        offset: 0,
        opacity: '0',
        transform: 'scale(0)'
      }, {
        offset: 1,
        opacity: '0.99',
        transform: 'scale(1)'
      }]);
      return this.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    this.leaveAnimation = baseEl => {
      return this.enterAnimation(baseEl).direction('reverse');
    };
  }
};
ModalService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AnimationController
}];
ModalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ModalService);


/***/ }),

/***/ 37217:
/*!*******************************************************************!*\
  !*** ./src/app/components/present-plan/present-plan.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentPlanComponent": () => (/* binding */ PresentPlanComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _present_plan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./present-plan.component.html?ngResource */ 12943);
/* harmony import */ var _present_plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./present-plan.component.scss?ngResource */ 7994);
/* harmony import */ var _present_plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_present_plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PresentPlanComponent = class PresentPlanComponent {
  constructor() {}
  ngOnInit() {}
};
PresentPlanComponent.ctorParameters = () => [];
PresentPlanComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-present-plan',
  template: _present_plan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_present_plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PresentPlanComponent);


/***/ }),

/***/ 53045:
/*!****************************************************************!*\
  !*** ./src/app/components/present-plan/present-plan.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentPlanComponentModule": () => (/* binding */ PresentPlanComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _present_plan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./present-plan.component */ 37217);





let PresentPlanComponentModule = class PresentPlanComponentModule {};
PresentPlanComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_present_plan_component__WEBPACK_IMPORTED_MODULE_0__.PresentPlanComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
  exports: [_present_plan_component__WEBPACK_IMPORTED_MODULE_0__.PresentPlanComponent]
})], PresentPlanComponentModule);


/***/ }),

/***/ 64897:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/announcement/service/admin-announcement.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAnnouncementService": () => (/* binding */ AdminAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);






let AdminAnnouncementService = class AdminAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, messageService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.saveSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
    this.announcement = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(undefined);
    this.setApi = `announcement`;
  }
  get asObservable() {
    return this.announcement.asObservable();
  }
  set setAnnouncement(announcement) {
    this.announcement.emit(announcement);
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  delete(announcement) {
    const {
      id,
      _csrf
    } = announcement;
    return this.destroy({
      id,
      _csrf
    }, `management/`);
  }
  drop(announcement) {
    const {
      id,
      _csrf
    } = announcement;
    return this.destroy({
      id,
      _csrf
    }, `management/drop`);
  }
  toRestore(announcement) {
    const {
      id,
      _csrf
    } = announcement;
    return this.patch({
      id,
      _csrf
    }, `management/to-restore`);
  }
  searchBy(searchBy) {
    return this.search(`management/search`, searchBy);
  }
  getAnnouncementAll(url, query) {
    return this.index(`management/${url}`, Object.assign({}, query));
  }
  order(announcement) {
    return this.patch(announcement, 'management/order');
  }
};
AdminAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
AdminAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], AdminAnnouncementService);


/***/ }),

/***/ 65866:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/service/auth-announcement.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthAnnouncementService": () => (/* binding */ AuthAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);









let AuthAnnouncementService = class AuthAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, messageService, navCtrl) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.navCtrl = navCtrl;
    this.announcement = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.setApi = `announcement`;
  }
  get announcementObservable() {
    return this.announcement.asObservable();
  }
  get getAnnouncement() {
    return this.announcement.value;
  }
  set setAnnouncement(value) {
    this.announcement.next(value);
  }
  set deleteAnnouncement(value) {
    var _a;
    const index = this.getAnnouncement.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (value === null || value === void 0 ? void 0 : value.id));
    this.announcement.value.splice(index, 1);
    this.setAnnouncement = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.value;
  }
  set setDataAnnouncement(value) {
    var _a;
    const index = this.getAnnouncement.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (value === null || value === void 0 ? void 0 : value.id));
    this.announcement.value[index] = value;
    this.setAnnouncement = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.value;
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  createAnnouncement(announcement) {
    return this.create(announcement).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(announcement_ => {
      var _a;
      if (((_a = this.getAnnouncement) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        this.getAnnouncement.unshift(announcement_);
        this.setAnnouncement = this.getAnnouncement;
      } else {
        this.setAnnouncement = [announcement_];
      }
      return this.navCtrl.navigateBack(['/painel-de-controle', 'anuncio', announcement_.slug]);
    }));
  }
  delete(announcement) {
    const {
      id,
      _csrf
    } = announcement;
    return this.destroy({
      id,
      _csrf
    }, `management/`);
  }
  drop(announcement) {
    const {
      id,
      _csrf
    } = announcement;
    return this.destroy({
      id,
      _csrf
    }, `management/drop`);
  }
  toRestore(announcement) {
    const {
      id,
      _csrf
    } = announcement;
    return this.patch({
      id,
      _csrf
    }, `management/to-restore`);
  }
  getAnnouncementAll(url, query) {
    return this.index(`management/${url}`, Object.assign({}, query));
  }
  getAnnouncementFindOne(userId) {
    return this.index(`management/get`, userId);
  }
};
AuthAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}];
AuthAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], AuthAnnouncementService);


/***/ }),

/***/ 34657:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/address/address.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementAddressComponent": () => (/* binding */ AnnouncementAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.component.html?ngResource */ 28357);
/* harmony import */ var _address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.component.scss?ngResource */ 62249);
/* harmony import */ var _address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ 94628);
/* harmony import */ var _service_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/address.service */ 19119);









let AnnouncementAddressComponent = class AnnouncementAddressComponent {
  constructor(modalController, addressService, alertController, loadingService, messageService) {
    this.modalController = modalController;
    this.addressService = addressService;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.update();
  }
  ngOnDestroy() {
    this.$update.unsubscribe();
  }
  openForm() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '2') {
        yield this.address();
      }
    });
  }
  openFormAdmin() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      yield this.address();
    });
  }
  address() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (this.announcement) {
        let label = this.getLabel(this.announcement);
        let address = this.getAddress(this.announcement);
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementFormAddressComponent,
          componentProps: {
            label,
            address
          }
        });
        return yield modal.present();
      }
    });
  }
  getLabel(announcement) {
    if (announcement === null || announcement === void 0 ? void 0 : announcement.address) {
      return 'Editar endereço';
    } else {
      return 'Cadastrar endereço';
    }
  }
  getAddress(announcement) {
    let address;
    const _csrf = announcement === null || announcement === void 0 ? void 0 : announcement._csrf;
    if (announcement === null || announcement === void 0 ? void 0 : announcement.address) {
      address = Object.assign(Object.assign({}, announcement === null || announcement === void 0 ? void 0 : announcement.address), {
        _csrf
      });
    } else {
      address = {
        _csrf,
        allotment: null,
        block: null,
        complement: null,
        district: null,
        street: null,
        numberr: null,
        zip_code: null,
        announcementId: (announcement === null || announcement === void 0 ? void 0 : announcement.id) ? announcement === null || announcement === void 0 ? void 0 : announcement.id : null
      };
    }
    address.zip_code = this.zipCode();
    address.zip_code = this.addressService.mask(address);
    return address;
  }
  zipCode() {
    const key = this.getCitie();
    const city = {
      'São Luiz dos Montes Belos': 76100000,
      Firminópolis: 76105000,
      Aurilândia: 76120000,
      Sanclerlândia: 76160000,
      Turvânia: 76110000,
      'Córrego do Ouro': 76145000
    };
    return city[`${key}`];
  }
  getCitie() {
    var _a, _b, _c, _d, _e, _f;
    if (this.announcement && this.announcement !== undefined && this.announcement !== null && ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.citie) !== undefined && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.citie) !== null && ((_d = (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.citie) === null || _d === void 0 ? void 0 : _d.city) !== undefined && ((_f = (_e = this.announcement) === null || _e === void 0 ? void 0 : _e.citie) === null || _f === void 0 ? void 0 : _f.city) !== null) {
      return this.announcement.citie.city;
    }
  }
  destroy() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.address) {
        const alert = yield this.alertController.create({
          header: 'Excluir endereço',
          subHeader: (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.title,
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
                id: (_c = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.address) === null || _c === void 0 ? void 0 : _c.id
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
  delete(address) {
    var _a;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.address) {
      const loading = this.loadingService.show('Excluindo endereço...');
      return this.$delete = this.addressService.delete(address).subscribe({
        next: address_ => {
          this.messsage(address_, loading);
          if (this.announcement) this.announcement.address = null;
        },
        error: error => this.messageService.error(error, loading, this.$delete)
      });
    }
  }
  messsage(address, loading) {
    if (address === null || address === void 0 ? void 0 : address.message) {
      return this.messageService.success(address === null || address === void 0 ? void 0 : address.message, loading, this.$delete);
    }
  }
  update() {
    return this.$update = this.addressService.getAddressEvent.subscribe({
      next: address => {
        var _a;
        if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === (address === null || address === void 0 ? void 0 : address.announcementId)) {
          if (this.announcement) this.announcement.address = address;
        }
      }
    });
  }
};
AnnouncementAddressComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _service_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}];
AnnouncementAddressComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-address-announcement-component',
  template: _address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementAddressComponent);


/***/ }),

/***/ 94628:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/address/form/form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementFormAddressComponent": () => (/* binding */ AnnouncementFormAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 54714);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 45877);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/address.service */ 19119);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);









let AnnouncementFormAddressComponent = class AnnouncementFormAddressComponent {
  constructor(helpService, modalController, messageService, addressService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.messageService = messageService;
    this.addressService = addressService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/address',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar endereço.',
      title: 'Salvar endereço.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.addresses(event);
  }
  addresses(event) {
    var _a, _b, _c;
    let message;
    if ((_a = this.address) === null || _a === void 0 ? void 0 : _a.id) {
      event.value.id = (_b = this.address) === null || _b === void 0 ? void 0 : _b.id;
      message = 'Editando endereço...';
    } else {
      event.value.announcementId = (_c = this.address) === null || _c === void 0 ? void 0 : _c.announcementId;
      message = 'Cadastrando endereço...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }
  send(event, loading) {
    return this.$address = this.addressService.address(event.value).subscribe({
      next: address => (address === null || address === void 0 ? void 0 : address.message) && this.messsage(address === null || address === void 0 ? void 0 : address.message, loading),
      error: error => this.messageService.error(error, loading, this.$address)
    });
  }
  messsage(message, loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      this.helpService.delay(() => this.modalController.dismiss(), 2500);
      return yield this.messageService.success(message, loading, this.$address);
    });
  }
  getData() {
    this.config = Object.assign({}, this.address);
  }
};
AnnouncementFormAddressComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: _service_address_service__WEBPACK_IMPORTED_MODULE_3__.AddressService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}];
AnnouncementFormAddressComponent.propDecorators = {
  address: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementFormAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementFormAddressComponent);


/***/ }),

/***/ 26694:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement-component.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementComponentsModule": () => (/* binding */ AnnouncementComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/state.component */ 35492);
/* harmony import */ var _social_network_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-network/form/form.component */ 93286);
/* harmony import */ var _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-network/social-network.component */ 36271);
/* harmony import */ var _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton/skeleton.component */ 94759);
/* harmony import */ var _segment_segment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./segment/segment.component */ 49353);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ 72827);
/* harmony import */ var _list_item_list_item_component_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item/list-item.component-routing.module */ 78830);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-item/list-item.component */ 70897);
/* harmony import */ var _city_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./city/form/form.component */ 28122);
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./city/city.component */ 74036);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/header-modal/header-modal.module */ 32728);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card/card.component */ 9914);
/* harmony import */ var _card_card_component_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card/card.component-routing.module */ 44686);
/* harmony import */ var _contant_form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contant/form/form.component */ 29972);
/* harmony import */ var _contant_contant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contant/contant.component */ 56864);
/* harmony import */ var _button_create_auth_button_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./button-create/auth/button-create.component */ 10058);
/* harmony import */ var _address_form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./address/form/form.component */ 94628);
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./address/address.component */ 34657);
/* harmony import */ var src_app_components_present_plan_present_plan_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/present-plan/present-plan.module */ 53045);
/* harmony import */ var _blockade_blockade_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blockade/blockade.component */ 56617);
/* harmony import */ var _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search/filter/filter-menu.component */ 17410);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/service/search.service */ 36916);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search/search.component */ 12217);
/* harmony import */ var _state_service_state_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./state/service/state.service */ 76328);
/* harmony import */ var _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./announcement/announcement.component */ 17672);
/* harmony import */ var _button_create_admin_button_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./button-create/admin/button-create.component */ 64591);
/* harmony import */ var _map_service_map_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./map/service/map.service */ 63242);
/* harmony import */ var _address_service_address_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./address/service/address.service */ 19119);
/* harmony import */ var _social_network_service_social_network_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./social-network/service/social-network.service */ 50167);
/* harmony import */ var _contant_service_contact_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./contant/service/contact.service */ 99618);
/* harmony import */ var _city_service_city_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./city/service/city.service */ 24470);
/* harmony import */ var _card_components_header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./card/components/header/header.component */ 38554);
/* harmony import */ var src_app_pipe_mask_mask_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/pipe/mask/mask.pipe */ 87794);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement/form/form.component */ 51635);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _administrator_announcement_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../administrator/announcement/service/admin-announcement.service */ 64897);
/* harmony import */ var _work_days_work_days_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./work-days/work-days.component */ 38564);
/* harmony import */ var src_app_pages_public_components_announcement_component_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/pages/public/components/announcement-component.module */ 61849);
/* harmony import */ var _galery_galery_component_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./galery/galery-component.module */ 16199);













































let AnnouncementComponentsModule = class AnnouncementComponentsModule {};
AnnouncementComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_40__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_41__.NgModule)({
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_41__.CUSTOM_ELEMENTS_SCHEMA],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_42__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_43__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_44__.IonicModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_10__.FormComponentModule, src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_11__.HeaderModalModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_35__.PipeModule, _list_item_list_item_component_routing_module__WEBPACK_IMPORTED_MODULE_6__.ListItemAnnouncementComponentRoutingModule, _card_card_component_routing_module__WEBPACK_IMPORTED_MODULE_13__.CardAnnouncementComponentRoutingModule, src_app_components_present_plan_present_plan_module__WEBPACK_IMPORTED_MODULE_19__.PresentPlanComponentModule, _galery_galery_component_module__WEBPACK_IMPORTED_MODULE_39__.GaleryComponentModule, src_app_pages_public_components_announcement_component_module__WEBPACK_IMPORTED_MODULE_38__.ShowAnnouncementComponentModule],
  declarations: [_state_state_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementStateComponent, _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementSocialNetworkComponent, _social_network_form_form_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncementFormSocialNetworkComponent, _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementSegmentComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_5__.AnnouncementMapComponent, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__.AnnouncementListItemComponent, _city_form_form_component__WEBPACK_IMPORTED_MODULE_8__.AnnouncementFormCityComponent, _city_city_component__WEBPACK_IMPORTED_MODULE_9__.AnnouncementCityComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_12__.AnnouncementCardComponent, _contant_form_form_component__WEBPACK_IMPORTED_MODULE_14__.AnnouncementFormContactComponent, _contant_contant_component__WEBPACK_IMPORTED_MODULE_15__.AnnouncementContactComponent, _button_create_auth_button_create_component__WEBPACK_IMPORTED_MODULE_16__.AnnouncementButtonCreateComponent, _button_create_admin_button_create_component__WEBPACK_IMPORTED_MODULE_26__.AnnouncementAdminButtonCreateComponent, _address_form_form_component__WEBPACK_IMPORTED_MODULE_17__.AnnouncementFormAddressComponent, _address_address_component__WEBPACK_IMPORTED_MODULE_18__.AnnouncementAddressComponent, _blockade_blockade_component__WEBPACK_IMPORTED_MODULE_20__.AnnouncementBlockadeComponent, _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_21__.AnnouncementSearchMenuComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_23__.AnnouncementSearchComponent, src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_34__.AnnouncementFormComponent, _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_25__.AnnouncementComponent, _card_components_header_header_component__WEBPACK_IMPORTED_MODULE_32__.CardHeaderComponent],
  exports: [_state_state_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementStateComponent, _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementSocialNetworkComponent, _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementSegmentComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_5__.AnnouncementMapComponent, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__.AnnouncementListItemComponent, _city_city_component__WEBPACK_IMPORTED_MODULE_9__.AnnouncementCityComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_12__.AnnouncementCardComponent, _contant_contant_component__WEBPACK_IMPORTED_MODULE_15__.AnnouncementContactComponent, _button_create_auth_button_create_component__WEBPACK_IMPORTED_MODULE_16__.AnnouncementButtonCreateComponent, _button_create_admin_button_create_component__WEBPACK_IMPORTED_MODULE_26__.AnnouncementAdminButtonCreateComponent, _address_address_component__WEBPACK_IMPORTED_MODULE_18__.AnnouncementAddressComponent, _blockade_blockade_component__WEBPACK_IMPORTED_MODULE_20__.AnnouncementBlockadeComponent, _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_21__.AnnouncementSearchMenuComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_23__.AnnouncementSearchComponent, src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_34__.AnnouncementFormComponent, _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_25__.AnnouncementComponent, _card_components_header_header_component__WEBPACK_IMPORTED_MODULE_32__.CardHeaderComponent],
  providers: [_administrator_announcement_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_36__.AdminAnnouncementService, _search_service_search_service__WEBPACK_IMPORTED_MODULE_22__.SearchAnnouncementService, _state_service_state_service__WEBPACK_IMPORTED_MODULE_24__.StateAnnouncementService, src_app_pipe_mask_mask_pipe__WEBPACK_IMPORTED_MODULE_33__.MaskPipe, _map_service_map_service__WEBPACK_IMPORTED_MODULE_27__.CoordinateAnnouncementService, _address_service_address_service__WEBPACK_IMPORTED_MODULE_28__.AddressService, _social_network_service_social_network_service__WEBPACK_IMPORTED_MODULE_29__.SocialNetworkAnnouncementService, _city_service_city_service__WEBPACK_IMPORTED_MODULE_31__.CityAnnouncementService, _contant_service_contact_service__WEBPACK_IMPORTED_MODULE_30__.ContactAnnouncementService,
  //
  _address_address_component__WEBPACK_IMPORTED_MODULE_18__.AnnouncementAddressComponent, _city_city_component__WEBPACK_IMPORTED_MODULE_9__.AnnouncementCityComponent, _contant_contant_component__WEBPACK_IMPORTED_MODULE_15__.AnnouncementContactComponent, _work_days_work_days_component__WEBPACK_IMPORTED_MODULE_37__.WorkDayAnnouncementComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_5__.AnnouncementMapComponent, _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementSocialNetworkComponent]
})], AnnouncementComponentsModule);


/***/ }),

/***/ 17672:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement/announcement.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementComponent": () => (/* binding */ AnnouncementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _announcement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.component.html?ngResource */ 86373);
/* harmony import */ var _announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.component.scss?ngResource */ 44602);
/* harmony import */ var _announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 51635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let AnnouncementComponent = class AnnouncementComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  ngOnInit() {}
  open() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      const label = this.getLabel();
      const announcement = this.getAnnouncement();
      const modal = yield this.modalController.create({
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementFormComponent,
        componentProps: {
          action: 'announcement',
          label,
          announcement
        }
      });
      return yield modal.present();
    });
  }
  getLabel() {
    var _a;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) {
      return 'Editar anúcio';
    } else {
      return 'Cadastrar anúncio';
    }
  }
  getAnnouncement() {
    var _a, _b, _c, _d, _e, _f, _g;
    const _csrf = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a._csrf;
    if ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.id) {
      return {
        _csrf,
        title: (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.title,
        description: (_d = this.announcement) === null || _d === void 0 ? void 0 : _d.description,
        slug: (_e = this.announcement) === null || _e === void 0 ? void 0 : _e.slug,
        id: (_f = this.announcement) === null || _f === void 0 ? void 0 : _f.id
      };
    } else {
      return {
        _csrf,
        title: null,
        description: null,
        slug: null,
        userId: (_g = this.user) === null || _g === void 0 ? void 0 : _g.id
      };
    }
  }
};
AnnouncementComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
AnnouncementComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
AnnouncementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-announcement-component',
  template: _announcement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementComponent);


/***/ }),

/***/ 51635:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement/form/form.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementFormComponent": () => (/* binding */ AnnouncementFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 67825);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 63238);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/service/auth-announcement.service */ 65866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);










let AnnouncementFormComponent = class AnnouncementFormComponent {
  constructor(helpService, modalController, authAnnouncementService, managementAnnouncementService, messageService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.authAnnouncementService = authAnnouncementService;
    this.managementAnnouncementService = managementAnnouncementService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/announcement',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar anúncio.',
      title: 'Salvar anúncio.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    var _a, _b, _c;
    let message;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) {
      event.value.id = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.id;
      message = 'Editando anúncio...';
    } else {
      event.value.userId = (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.userId;
      message = 'Cadastrando anúncio...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }
  send(event, loading) {
    if (event.value.id) {
      return this.$announcement = this.managementAnnouncementService.updateAnnouncement(event.value).subscribe({
        next: announcement => (announcement === null || announcement === void 0 ? void 0 : announcement.message) && this.messsage(announcement === null || announcement === void 0 ? void 0 : announcement.message, loading),
        error: error => this.messageService.error(error, loading, this.$announcement)
      });
    }
    return this.$announcement = this.authAnnouncementService.createAnnouncement(event.value).subscribe({
      next: announcement => (announcement === null || announcement === void 0 ? void 0 : announcement.message) && this.messsage(announcement === null || announcement === void 0 ? void 0 : announcement.message, loading),
      error: error => this.messageService.error(error, loading, this.$announcement)
    });
  }
  messsage(message, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.$announcement);
  }
  getData() {
    this.config = Object.assign({}, this.announcement);
  }
};
AnnouncementFormComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_3__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_2__.AuthAnnouncementService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_6__.ManagementAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}];
AnnouncementFormComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementFormComponent);


/***/ }),

/***/ 56617:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/blockade/blockade.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementBlockadeComponent": () => (/* binding */ AnnouncementBlockadeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _blockade_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockade.component.html?ngResource */ 61419);
/* harmony import */ var _blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockade.component.scss?ngResource */ 62011);
/* harmony import */ var _blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);







let AnnouncementBlockadeComponent = class AnnouncementBlockadeComponent {
  constructor(fb, managementAnnouncementService, messageService) {
    this.fb = fb;
    this.managementAnnouncementService = managementAnnouncementService;
    this.messageService = messageService;
  }
  blockade() {
    if (this.announcement) {
      const {
        slug,
        _csrf
      } = this.announcement;
      this.form = this.fb.group({
        slug,
        _csrf
      });
      return this.$blockade = this.managementAnnouncementService.blockade(this.form.value).subscribe({
        next: user_ => (user_ === null || user_ === void 0 ? void 0 : user_.message) && this.messageService.success(user_ === null || user_ === void 0 ? void 0 : user_.message, undefined, this.$blockade, 350),
        error: error => this.messageService.error(error, undefined, this.$blockade)
      });
    }
  }
};
AnnouncementBlockadeComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__.ManagementAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
AnnouncementBlockadeComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
AnnouncementBlockadeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-blockade-announcement-component',
  template: _blockade_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementBlockadeComponent);


/***/ }),

/***/ 64591:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/button-create/admin/button-create.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementAdminButtonCreateComponent": () => (/* binding */ AnnouncementAdminButtonCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-create.component.html?ngResource */ 10186);
/* harmony import */ var _button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-create.component.scss?ngResource */ 75695);
/* harmony import */ var _button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement/form/form.component */ 51635);






let AnnouncementAdminButtonCreateComponent = class AnnouncementAdminButtonCreateComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  createAnnouncement() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        const modal = yield this.modalController.create({
          component: src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementFormComponent,
          componentProps: {
            action: 'announcement',
            label: 'Cadastrar anúncio',
            announcement: {
              _csrf: (_a = this.user) === null || _a === void 0 ? void 0 : _a._csrf,
              title: null,
              description: null,
              userId: (_b = this.user) === null || _b === void 0 ? void 0 : _b.id
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
AnnouncementAdminButtonCreateComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
AnnouncementAdminButtonCreateComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isAdmin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
AnnouncementAdminButtonCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-admin-button-create-announcement',
  template: _button_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementAdminButtonCreateComponent);


/***/ }),

/***/ 10058:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/button-create/auth/button-create.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementButtonCreateComponent": () => (/* binding */ AnnouncementButtonCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-create.component.html?ngResource */ 94845);
/* harmony import */ var _button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-create.component.scss?ngResource */ 61473);
/* harmony import */ var _button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement/form/form.component */ 51635);






let AnnouncementButtonCreateComponent = class AnnouncementButtonCreateComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  createAnnouncement() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: src_app_pages_dashboard_component_announcement_announcement_form_form_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementFormComponent,
        componentProps: {
          action: 'announcement',
          label: 'Cadastrar anúncio',
          announcement: {
            // eslint-disable-next-line no-underscore-dangle
            _csrf: (_a = this.user) === null || _a === void 0 ? void 0 : _a._csrf,
            title: null,
            description: null,
            userId: (_b = this.user) === null || _b === void 0 ? void 0 : _b.id
          }
        }
      });
      return yield modal.present();
    });
  }
};
AnnouncementButtonCreateComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
AnnouncementButtonCreateComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
AnnouncementButtonCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-button-create-announcement',
  template: _button_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_button_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementButtonCreateComponent);


/***/ }),

/***/ 44686:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/card.component-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardAnnouncementComponentRoutingModule": () => (/* binding */ CardAnnouncementComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component */ 9914);




const routes = [{
  path: '',
  component: _card_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementCardComponent
}];
let CardAnnouncementComponentRoutingModule = class CardAnnouncementComponentRoutingModule {};
CardAnnouncementComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CardAnnouncementComponentRoutingModule);


/***/ }),

/***/ 9914:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementCardComponent": () => (/* binding */ AnnouncementCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component.html?ngResource */ 25739);
/* harmony import */ var _card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component.scss?ngResource */ 52762);
/* harmony import */ var _card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _category_announcement_category_service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../category-announcement/category/service/category.service */ 62507);







let AnnouncementCardComponent = class AnnouncementCardComponent {
  constructor(authService, categoryAnnouncementService, managementAnnouncementService) {
    this.authService = authService;
    this.categoryAnnouncementService = categoryAnnouncementService;
    this.managementAnnouncementService = managementAnnouncementService;
  }
  ngOnDestroy() {
    this.$updateCategory.unsubscribe();
    this.$updateAnnouncement.unsubscribe();
  }
  ngOnInit() {
    this.loadUser();
    this.updateCategory();
    this.updateAnnouncement();
  }
  loadUser() {
    this.auth$ = this.authService.userObservable;
  }
  isHeader(e) {
    this.hasHeader = e;
  }
  updateCategory() {
    return this.$updateCategory = this.categoryAnnouncementService.getCategoryEvent.subscribe({
      next: categoryAnnouncement => {
        var _a;
        if (categoryAnnouncement) {
          if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === (categoryAnnouncement === null || categoryAnnouncement === void 0 ? void 0 : categoryAnnouncement.announcementId)) {
            this.announcement.category = categoryAnnouncement === null || categoryAnnouncement === void 0 ? void 0 : categoryAnnouncement.category;
          }
        }
      }
    });
  }
  updateAnnouncement() {
    this.$updateAnnouncement = this.managementAnnouncementService.announcementObservable.subscribe({
      next: announcement => {
        var _a;
        if (announcement) {
          if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === announcement.id) {
            this.announcement.blockade = announcement.blockade;
            this.announcement.slug = announcement.slug;
            this.announcement.updatedAt = announcement.updatedAt;
            this.announcement.state = announcement.state;
            this.announcement.title = announcement.title;
            this.announcement.workDays = announcement.workDays;
            this.announcement.citie = announcement.citie;
            this.announcement.address = announcement.address;
            this.announcement.contact = announcement.contact;
          }
        }
      }
    });
  }
};
AnnouncementCardComponent.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _category_announcement_category_service_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryAnnouncementService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__.ManagementAnnouncementService
}];
AnnouncementCardComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
AnnouncementCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-card-announcement-component',
  template: _card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementCardComponent);


/***/ }),

/***/ 38554:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/components/header/header.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHeaderComponent": () => (/* binding */ CardHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 44849);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 85077);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let CardHeaderComponent = class CardHeaderComponent {};
CardHeaderComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
};
CardHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-header-card',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CardHeaderComponent);


/***/ }),

/***/ 74036:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/city.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementCityComponent": () => (/* binding */ AnnouncementCityComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _city_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.component.html?ngResource */ 66956);
/* harmony import */ var _city_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.component.scss?ngResource */ 98764);
/* harmony import */ var _city_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_city_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/city.service */ 24470);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ 28122);









let AnnouncementCityComponent = class AnnouncementCityComponent {
  constructor(modalController, alertController, loadingService, messageService, citieService) {
    this.modalController = modalController;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.citieService = citieService;
  }
  ngOnDestroy() {
    this.$update.unsubscribe();
  }
  ngOnInit() {
    this.update();
  }
  openForm() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '2') {
        yield this.cities();
      }
    });
  }
  openFormAdmin() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      yield this.cities();
    });
  }
  cities() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (this.announcement) {
        const citie = this.buildCitie(this.announcement);
        const label = this.buildLabel(this.announcement);
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__.AnnouncementFormCityComponent,
          componentProps: {
            label,
            citie
          }
        });
        return yield modal.present();
      }
    });
  }
  buildCitie(announcement) {
    const _csrf = announcement === null || announcement === void 0 ? void 0 : announcement._csrf;
    if (announcement === null || announcement === void 0 ? void 0 : announcement.citie) {
      return Object.assign(Object.assign({}, announcement === null || announcement === void 0 ? void 0 : announcement.citie), {
        _csrf
      });
    } else {
      return {
        _csrf,
        city: null,
        uf: 'GO',
        announcementId: announcement === null || announcement === void 0 ? void 0 : announcement.id
      };
    }
  }
  buildLabel(announcement) {
    if (announcement === null || announcement === void 0 ? void 0 : announcement.citie) {
      return 'Editar cidade';
    } else {
      return 'Cadastrar cidade';
    }
  }
  destroy() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.citie) {
        const alert = yield this.alertController.create({
          header: 'Excluir endereço',
          subHeader: (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.title,
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
                id: (_c = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.citie) === null || _c === void 0 ? void 0 : _c.id
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
  delete(citie) {
    var _a;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.citie) {
      const loading = this.loadingService.show('Excluindo cidade...');
      return this.$delete = this.citieService.delete(citie).subscribe({
        next: address_ => {
          this.messsage(address_, loading);
          if (this.announcement) this.announcement.citie = null;
        },
        error: error => this.messageService.error(error, loading, this.$delete)
      });
    }
  }
  messsage(citie, loading) {
    if (citie === null || citie === void 0 ? void 0 : citie.message) {
      return this.messageService.success(citie === null || citie === void 0 ? void 0 : citie.message, loading, this.$delete);
    }
  }
  update() {
    return this.$update = this.citieService.getCitieEvent.subscribe({
      next: citie => {
        var _a;
        if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === (citie === null || citie === void 0 ? void 0 : citie.announcementId)) {
          if (this.announcement) this.announcement.citie = citie;
        }
      }
    });
  }
};
AnnouncementCityComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: _service_city_service__WEBPACK_IMPORTED_MODULE_2__.CityAnnouncementService
}];
AnnouncementCityComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementCityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-city-announcement-component',
  template: _city_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_city_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementCityComponent);


/***/ }),

/***/ 28122:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/form/form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementFormCityComponent": () => (/* binding */ AnnouncementFormCityComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 50587);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 1802);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/city.service */ 24470);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);









let AnnouncementFormCityComponent = class AnnouncementFormCityComponent {
  constructor(helpService, modalController, messageService, loadingService, cityService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.cityService = cityService;
    this.attrButton = {
      route: '/citie',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar cidade e estado.',
      title: 'Salvar cidade e estado.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.cities(event);
  }
  isCity(value) {
    const type = ['São Luiz dos Montes Belos', 'Firminópolis', 'Aurilândia', 'Sanclerlândia', 'Turvânia', 'Córrego do Ouro'];
    return !type.includes(value);
  }
  cities(event) {
    var _a, _b, _c;
    if (!this.isCity(event.value.city)) {
      let message;
      if ((_a = this.citie) === null || _a === void 0 ? void 0 : _a.id) {
        event.value.id = (_b = this.citie) === null || _b === void 0 ? void 0 : _b.id;
        message = 'Editando cidade...';
      } else {
        event.value.announcementId = (_c = this.citie) === null || _c === void 0 ? void 0 : _c.announcementId;
        message = 'Cadastrando cidade...';
      }
      const loading = this.loadingService.show(message);
      return this.send(event, loading);
    }
  }
  send(event, loading) {
    return this.$citie = this.cityService.citie(event.value).subscribe({
      next: citie => (citie === null || citie === void 0 ? void 0 : citie.message) && this.messsage(citie === null || citie === void 0 ? void 0 : citie.message, loading),
      error: error => this.messageService.error(error, loading, this.$citie)
    });
  }
  messsage(message, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.$citie);
  }
  getData() {
    this.config = Object.assign({}, this.citie);
  }
};
AnnouncementFormCityComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}, {
  type: _service_city_service__WEBPACK_IMPORTED_MODULE_3__.CityAnnouncementService
}];
AnnouncementFormCityComponent.propDecorators = {
  citie: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
AnnouncementFormCityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementFormCityComponent);


/***/ }),

/***/ 24470:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/service/city.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityAnnouncementService": () => (/* binding */ CityAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);







let CityAnnouncementService = class CityAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, managementAnnouncementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.managementAnnouncementService = managementAnnouncementService;
    this.citieEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(undefined);
    this.setApi = `citie`;
  }
  get getCitieEvent() {
    return this.citieEvent.asObservable();
  }
  set setCitie(citie) {
    if (this.managementAnnouncementService.getAnnouncement) {
      this.managementAnnouncementService.getAnnouncement.citie = citie;
      this.managementAnnouncementService.setAnnouncement = this.managementAnnouncementService.getAnnouncement;
    }
    this.citieEvent.emit(citie);
  }
  citie(citie) {
    if (citie === null || citie === void 0 ? void 0 : citie.id) {
      return this.patch(citie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(citie_ => this.setCitie = citie_));
    } else {
      return this.create(citie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(citie_ => this.setCitie = citie_));
    }
  }
  delete(citie) {
    return this.destroy(citie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.setCitie = null));
  }
};
CityAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__.ManagementAnnouncementService
}];
CityAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], CityAnnouncementService);


/***/ }),

/***/ 56864:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/contant.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementContactComponent": () => (/* binding */ AnnouncementContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contant.component.html?ngResource */ 66050);
/* harmony import */ var _contant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contant.component.scss?ngResource */ 89147);
/* harmony import */ var _contant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 29972);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/contact.service */ 99618);









let AnnouncementContactComponent = class AnnouncementContactComponent {
  constructor(modalController, alertController, loadingService, messageService, contactAnnouncementService) {
    this.modalController = modalController;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.contactAnnouncementService = contactAnnouncementService;
  }
  ngOnInit() {
    this.update();
  }
  ngOnDestroy() {
    this.$update.unsubscribe();
  }
  openForm() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '2') {
        yield this.contacts();
      }
    });
  }
  openFormAdmin() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      yield this.contacts();
    });
  }
  contacts() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (this.announcement) {
        const label = this.buildDataLabel(this.announcement);
        const contact = this.buildDataContact(this.announcement);
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementFormContactComponent,
          componentProps: {
            action: 'contact',
            label,
            contact
          }
        });
        return yield modal.present();
      }
    });
  }
  buildDataLabel(announcement) {
    if (announcement === null || announcement === void 0 ? void 0 : announcement.contact) {
      return 'Editar contatos';
    } else {
      if (announcement === null || announcement === void 0 ? void 0 : announcement.id) {
        return 'Cadastrar contatos';
      }
    }
  }
  buildDataContact(announcement) {
    const _csrf = announcement === null || announcement === void 0 ? void 0 : announcement._csrf;
    if (announcement === null || announcement === void 0 ? void 0 : announcement.contact) {
      return Object.assign(Object.assign({}, announcement === null || announcement === void 0 ? void 0 : announcement.contact), {
        _csrf
      });
    } else {
      if (announcement === null || announcement === void 0 ? void 0 : announcement.id) {
        return {
          _csrf,
          mobilePhone: null,
          phone: null,
          whatsapp: null,
          announcementId: announcement === null || announcement === void 0 ? void 0 : announcement.id
        };
      }
    }
  }
  destroy() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && this.contact) {
        const alert = yield this.alertController.create({
          header: 'Excluir contato',
          subHeader: (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.title,
          buttons: [{
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {}
          }, {
            text: 'OK',
            role: 'confirm',
            handler: event => {
              var _a, _b;
              const data = Object.assign(Object.assign({}, event), {
                _csrf: (_a = this.announcement) === null || _a === void 0 ? void 0 : _a._csrf,
                id: (_b = this.contact) === null || _b === void 0 ? void 0 : _b.id
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
  delete(contact) {
    var _a;
    if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && this.contact) {
      const loading = this.loadingService.show('Excluindo contato...');
      return this.$delete = this.contactAnnouncementService.delete(contact).subscribe({
        next: coordinate_ => {
          this.messsage(coordinate_, loading);
          if (this.announcement) this.announcement.contact = null;
        },
        error: error => this.messageService.error(error, loading, this.$delete)
      });
    }
  }
  messsage(contact, loading) {
    if (contact === null || contact === void 0 ? void 0 : contact.message) {
      return this.messageService.success(contact === null || contact === void 0 ? void 0 : contact.message, loading, this.$delete);
    }
  }
  update() {
    return this.$update = this.contactAnnouncementService.getContactEvent.subscribe({
      next: contact => {
        var _a;
        if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === (contact === null || contact === void 0 ? void 0 : contact.announcementId)) {
          if (this.announcement) this.announcement.contact = contact;
        }
      }
    });
  }
};
AnnouncementContactComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: _service_contact_service__WEBPACK_IMPORTED_MODULE_5__.ContactAnnouncementService
}];
AnnouncementContactComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-contant-announcement-component',
  template: _contant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_contant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementContactComponent);


/***/ }),

/***/ 29972:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/form/form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementFormContactComponent": () => (/* binding */ AnnouncementFormContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 55365);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 61924);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_pipe_mask_mask_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/mask/mask.pipe */ 87794);
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../service/contact.service */ 99618);










let AnnouncementFormContactComponent = class AnnouncementFormContactComponent {
  constructor(maskPipe, helpService, modalController, contactService, messageService, loadingService) {
    this.maskPipe = maskPipe;
    this.helpService = helpService;
    this.modalController = modalController;
    this.contactService = contactService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/contact',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar contatos.',
      title: 'Salvar contatos.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.contacts(event);
  }
  contacts(event) {
    var _a, _b, _c;
    let message;
    if ((_a = this.contact) === null || _a === void 0 ? void 0 : _a.id) {
      event.value.id = (_b = this.contact) === null || _b === void 0 ? void 0 : _b.id;
      message = 'Editando contatos...';
    } else {
      event.value.announcementId = (_c = this.contact) === null || _c === void 0 ? void 0 : _c.announcementId;
      message = 'Cadastrando contatos...';
    }
    // eslint-disable-next-line no-underscore-dangle
    event.value._csrf = this.contact._csrf;
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }
  send(event, loading) {
    const data = this.contactService.filter(event.value);
    return this.$contact = this.contactService.contact(data).subscribe({
      next: contact => (contact === null || contact === void 0 ? void 0 : contact.message) && this.messsage(contact === null || contact === void 0 ? void 0 : contact.message, loading),
      error: error => this.messageService.error(error, loading, this.$contact)
    });
  }
  messsage(message, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.$contact);
  }
  getData() {
    const whatsapp = this.maskPipe.transform(this.contact.whatsapp, 'whatsapp');
    const mobilePhone = this.maskPipe.transform(this.contact.mobilePhone, 'mobilePhone');
    const phone = this.maskPipe.transform(this.contact.phone, 'phone');
    this.config = {
      whatsapp,
      phone,
      mobilePhone
    };
  }
};
AnnouncementFormContactComponent.ctorParameters = () => [{
  type: src_app_pipe_mask_mask_pipe__WEBPACK_IMPORTED_MODULE_5__.MaskPipe
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _service_contact_service__WEBPACK_IMPORTED_MODULE_6__.ContactAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}];
AnnouncementFormContactComponent.propDecorators = {
  contact: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementFormContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementFormContactComponent);


/***/ }),

/***/ 99618:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/service/contact.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactAnnouncementService": () => (/* binding */ ContactAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);







let ContactAnnouncementService = class ContactAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, managementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.managementService = managementService;
    this.contactEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(undefined);
    this.setApi = `contact`;
  }
  get getContactEvent() {
    return this.contactEvent.asObservable();
  }
  set setContact(contact) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.contact = contact;
      this.managementService.setAnnouncement = this.managementService.getAnnouncement;
    }
    this.contactEvent.emit(contact);
  }
  contact(contact) {
    if (contact === null || contact === void 0 ? void 0 : contact.id) {
      return this.patch(contact).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(contact_ => this.setContact = this.filter(contact_)));
    } else {
      return this.create(contact).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(contact_ => this.setContact = contact_));
    }
  }
  filter(contact) {
    const result = {
      phone: null,
      whatsapp: null,
      mobilePhone: null,
      _csrf: contact === null || contact === void 0 ? void 0 : contact._csrf,
      announcementId: contact === null || contact === void 0 ? void 0 : contact.announcementId,
      id: contact === null || contact === void 0 ? void 0 : contact.id
    };
    if (contact.phone) {
      result.phone = Number(String(contact.phone).replace(/[\(\)\-]/g, ''));
    }
    if (contact.whatsapp) {
      result.whatsapp = Number(String(contact.whatsapp).replace(/[\(\)\-]/g, ''));
    }
    if (contact.mobilePhone) {
      result.mobilePhone = Number(String(contact.mobilePhone).replace(/[\(\)\-]/g, ''));
    }
    return result;
  }
  delete(contact) {
    return this.destroy(contact).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.setContact = null));
  }
};
ContactAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__.ManagementAnnouncementService
}];
ContactAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], ContactAnnouncementService);


/***/ }),

/***/ 79622:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/component/button-upload/button-upload.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryButtonUploadComponent": () => (/* binding */ GaleryButtonUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-upload.component.html?ngResource */ 73085);
/* harmony import */ var _button_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-upload.component.scss?ngResource */ 43252);
/* harmony import */ var _button_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/toast/toast.service */ 39524);
/* harmony import */ var _service_galery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/galery.service */ 5379);
/* harmony import */ var src_app_components_present_plan_present_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/present-plan/present-plan.component */ 37217);
/* harmony import */ var src_app_components_present_plan_animations_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/present-plan/animations/modal.service */ 35131);
/* harmony import */ var src_app_services_image_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/image/image.service */ 89900);











let GaleryButtonUploadComponent = class GaleryButtonUploadComponent {
  constructor(galeryAnnouncementService, messageService, toastService, modalController, modalService, imageService) {
    this.galeryAnnouncementService = galeryAnnouncementService;
    this.messageService = messageService;
    this.toastService = toastService;
    this.modalController = modalController;
    this.modalService = modalService;
    this.imageService = imageService;
  }
  loadFile() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (this.announcement && ((_a = this.announcement.plan) === null || _a === void 0 ? void 0 : _a.type) === 'free') {
        const modal = yield this.modalController.create({
          component: src_app_components_present_plan_present_plan_component__WEBPACK_IMPORTED_MODULE_5__.PresentPlanComponent,
          enterAnimation: this.modalService.enterAnimation,
          leaveAnimation: this.modalService.leaveAnimation
        });
        return yield modal.present();
      }
      return yield this.startPhoto();
    });
  }
  startPhoto() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const photo = yield this.imageService.addPhoto();
      if (photo) {
        const dataFile = yield this.imageService.readAsBase64(photo);
        yield this.upload(dataFile);
      }
    });
  }
  upload(dataFile) {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const data = {
        id: (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id,
        _csrf: (_b = this.announcement) === null || _b === void 0 ? void 0 : _b._csrf
      };
      const loading = yield this.toastService.loading('Transferindo imagem', 'top', 'images');
      this.$upload = this.galeryAnnouncementService.sendFiles(dataFile, data).subscribe({
        next: response => this.success(response, response, loading),
        error: error => this.messageService.error(error, undefined, undefined)
      });
    });
  }
  success(httpHeaderResponse, httpResponse, loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
        return this.complete(httpResponse, loading);
      }
    });
  }
  complete(httpResponse, loading) {
    const {
      body
    } = httpResponse;
    if (body) {
      const image = body;
      this.update(image, loading);
    }
  }
  update(image, loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      this.galeryAnnouncementService.setGalery = image;
      loading.dismiss();
      if (image) {
        this.$upload.unsubscribe();
      }
    });
  }
};
GaleryButtonUploadComponent.ctorParameters = () => [{
  type: _service_galery_service__WEBPACK_IMPORTED_MODULE_4__.GaleryAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}, {
  type: src_app_utilities_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_components_present_plan_animations_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService
}, {
  type: src_app_services_image_image_service__WEBPACK_IMPORTED_MODULE_7__.ImageService
}];
GaleryButtonUploadComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }]
};
GaleryButtonUploadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-galery-button-upload',
  template: _button_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_button_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GaleryButtonUploadComponent);


/***/ }),

/***/ 13638:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/directive/horizontal-slide.directive.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalScrollDirective": () => (/* binding */ HorizontalScrollDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


let HorizontalScrollDirective = class HorizontalScrollDirective {
  constructor(el) {
    this.el = el;
    this.element = this.el.nativeElement;
  }
  onMouseEnter() {
    this.element.classList.add('show');
  }
  onMouseLeave() {
    this.element.classList.remove('show');
  }
};
HorizontalScrollDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
HorizontalScrollDirective.propDecorators = {
  onMouseEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['mouseenter']
  }],
  onMouseLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['mouseleave']
  }]
};
HorizontalScrollDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appHorizontalScroll]'
})], HorizontalScrollDirective);


/***/ }),

/***/ 16199:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/galery-component.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryComponentModule": () => (/* binding */ GaleryComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _component_button_upload_button_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/button-upload/button-upload.component */ 79622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _galery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-component */ 35875);
/* harmony import */ var src_app_components_present_plan_present_plan_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/present-plan/present-plan.module */ 53045);
/* harmony import */ var _service_galery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/galery.service */ 5379);
/* harmony import */ var _directive_horizontal_slide_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/horizontal-slide.directive */ 13638);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);











let GaleryComponentModule = class GaleryComponentModule {};
GaleryComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, src_app_components_present_plan_present_plan_module__WEBPACK_IMPORTED_MODULE_2__.PresentPlanComponentModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule],
  declarations: [_galery_component__WEBPACK_IMPORTED_MODULE_1__.GaleryComponent, _component_button_upload_button_upload_component__WEBPACK_IMPORTED_MODULE_0__.GaleryButtonUploadComponent, _directive_horizontal_slide_directive__WEBPACK_IMPORTED_MODULE_4__.HorizontalScrollDirective],
  exports: [_galery_component__WEBPACK_IMPORTED_MODULE_1__.GaleryComponent, _component_button_upload_button_upload_component__WEBPACK_IMPORTED_MODULE_0__.GaleryButtonUploadComponent],
  providers: [_service_galery_service__WEBPACK_IMPORTED_MODULE_3__.GaleryAnnouncementService]
})], GaleryComponentModule);


/***/ }),

/***/ 35875:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/galery-component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryComponent": () => (/* binding */ GaleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _galery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-component.html?ngResource */ 29198);
/* harmony import */ var _galery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-component.scss?ngResource */ 77260);
/* harmony import */ var _galery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_galery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_galery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/galery.service */ 5379);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);






let GaleryComponent = class GaleryComponent {
  constructor(galeryAnnouncementService, messageService) {
    this.galeryAnnouncementService = galeryAnnouncementService;
    this.messageService = messageService;
    this.isHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(false);
    this.isOpen = false;
  }
  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }
  order(i) {
    var _a, _b, _c, _d, _e;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) {
      const img = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.galery.splice(i, 1)[0];
      (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.galery.unshift(img);
      const result = (_d = this.announcement) === null || _d === void 0 ? void 0 : _d.galery.map(item => item === null || item === void 0 ? void 0 : item.id);
      if (result && result.length > 0) {
        const data = {
          order: result,
          _csrf: this.announcement._csrf,
          announcementId: (_e = this.announcement) === null || _e === void 0 ? void 0 : _e.id
        };
        this.$order = this.galeryAnnouncementService.order(data).subscribe({
          next: galery => {
            this.message(galery);
            setTimeout(() => this.$order.unsubscribe(), 2000);
          },
          error: error => console.log(error)
        });
      }
    }
  }
  plusSlides(i, operator) {
    const keys = this.getAllKeysGalery();
    if (keys && keys.length > 0) {
      this.getLastKeyGalery(keys);
      this.setKeyGalery(operator, i, keys);
    }
  }
  close() {
    this.isHeader.emit(false);
    this.isLightbox = null;
    this.endNext = null;
    this.isLightboxButton = null;
  }
  show(index) {
    const keys = this.getAllKeysGalery();
    if (keys && keys.length > 0) {
      this.getLastKeyGalery(keys);
      this.isHeader.emit(true);
      this.showLightbox(index);
      this.enableOrDisableButton();
      this.image = index;
    }
  }
  delete(index) {
    var _a, _b;
    if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) && this.announcement.galery.length > 0) {
      const galery = this.announcement.galery[index];
      galery._csrf = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b._csrf;
      return this.destroy = this.galeryAnnouncementService.delete(galery).subscribe({
        next: galery_ => {
          this.update(galery);
          this.message(galery_);
        },
        error: error => this.messageService.error(error, undefined, this.destroy)
      });
    }
  }
  showLightbox(index) {
    this.isLightbox = index > -1;
  }
  getAllKeysGalery() {
    var _a;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) {
      const keys = [...this.announcement.galery.keys()];
      return keys;
    }
  }
  getLastKeyGalery(keys) {
    if (!this.endNext) {
      this.endNext = keys.pop();
    }
  }
  message(galery_) {
    if (galery_ === null || galery_ === void 0 ? void 0 : galery_.message) {
      this.messageService.success(galery_ === null || galery_ === void 0 ? void 0 : galery_.message, undefined, this.destroy, 350);
    }
  }
  update(galery) {
    const i = this.removeItem(galery);
    if (i) {
      this.enableOrDisableButton();
      this.closeLightbox();
      this.updateLightbox(i);
      this.endNext = null;
    }
  }
  updateLightbox(i) {
    var _a, _b;
    if (((_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) === null || _b === void 0 ? void 0 : _b.length) === 1) {
      this.image = 0;
    } else {
      this.image = i - 1;
    }
  }
  setKeyGalery(operator, i, keys) {
    const index = operator === '+' ? i + 1 : i - 1;
    if (keys.includes(index)) {
      this.image = index;
    }
  }
  removeItem(galery) {
    const i = this.getKeyGalery(galery);
    if (i) {
      this.remove(i);
      return i;
    }
  }
  getKeyGalery(galery) {
    var _a;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) {
      return this.announcement.galery.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (galery === null || galery === void 0 ? void 0 : galery.id));
    }
  }
  remove(i) {
    var _a;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) {
      this.announcement.galery.splice(i, 1);
    }
  }
  closeLightbox() {
    var _a, _b;
    this.isLightbox = ((_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) === null || _b === void 0 ? void 0 : _b.length) !== 0;
  }
  enableOrDisableButton() {
    var _a, _b, _c;
    if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.galery) {
      this.isLightboxButton = ((_c = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.galery) === null || _c === void 0 ? void 0 : _c.length) > 1;
    }
  }
};
GaleryComponent.ctorParameters = () => [{
  type: _service_galery_service__WEBPACK_IMPORTED_MODULE_2__.GaleryAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}];
GaleryComponent.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['popover']
  }],
  isHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
GaleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-galery-announcement-component',
  template: _galery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_galery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GaleryComponent);


/***/ }),

/***/ 5379:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/service/galery.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryAnnouncementService": () => (/* binding */ GaleryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);








let GaleryAnnouncementService = class GaleryAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService {
  constructor(http, storageService, messageService, loadingService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.galery = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
    this.setApi = `announcement`;
  }
  get galeryAsObservable() {
    return this.galery.asObservable();
  }
  set setGalery(value) {
    this.galery.next(value);
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  ngOnDestroy() {
    this.galery.unsubscribe();
  }
  delete(galery) {
    return this.destroy(galery, 'galery');
  }
  order(galery) {
    return this.patch(galery, 'management/galery/order');
  }
  sendFiles(dataFile, data) {
    return this.upload(this.build(dataFile, data), 'upload');
  }
  showLoading(message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.loadingService.show(message);
    });
  }
  build(dataFile, data) {
    const {
      file,
      fileName
    } = dataFile;
    this.setCsrf = data === null || data === void 0 ? void 0 : data._csrf;
    const formData = new FormData();
    formData.append('announcementId', String(data === null || data === void 0 ? void 0 : data.id));
    formData.append('_csrf', data === null || data === void 0 ? void 0 : data._csrf);
    formData.append('filename', file, fileName);
    return formData;
  }
};
GaleryAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService
}];
GaleryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], GaleryAnnouncementService);


/***/ }),

/***/ 78830:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/list-item/list-item.component-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemAnnouncementComponentRoutingModule": () => (/* binding */ ListItemAnnouncementComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item.component */ 70897);




const routes = [{
  path: '',
  component: _list_item_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementListItemComponent
}];
let ListItemAnnouncementComponentRoutingModule = class ListItemAnnouncementComponentRoutingModule {};
ListItemAnnouncementComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ListItemAnnouncementComponentRoutingModule);


/***/ }),

/***/ 70897:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/list-item/list-item.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementListItemComponent": () => (/* binding */ AnnouncementListItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item.component.html?ngResource */ 75286);
/* harmony import */ var _list_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item.component.scss?ngResource */ 33629);
/* harmony import */ var _list_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let AnnouncementListItemComponent = class AnnouncementListItemComponent {
  constructor() {
    this.actionButtons = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(undefined);
  }
  drag(event) {
    const {
      id
    } = event.target;
    const data = event.detail;
    if (data.ratio === 1) {
      return this.toggleIcon = Number(id);
    }
    return this.toggleIcon = -1;
  }
  destroy(index, announcement) {
    return this.actionButtons.emit({
      action: 'destroy',
      index,
      announcement
    });
  }
  drop(index, announcement) {
    return this.actionButtons.emit({
      action: 'drop',
      index,
      announcement
    });
  }
  toRestore(index, announcement) {
    return this.actionButtons.emit({
      action: 'restore',
      index,
      announcement
    });
  }
};
AnnouncementListItemComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  index: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  actionButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }]
};
AnnouncementListItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-list-item-announcement-component',
  template: _list_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_list_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementListItemComponent);


/***/ }),

/***/ 72827:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/map/map.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementMapComponent": () => (/* binding */ AnnouncementMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.html?ngResource */ 34734);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss?ngResource */ 38590);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_pages_dashboard_component_announcement_map_service_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/map/service/map.service */ 63242);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/alert/alert.service */ 11395);
/* harmony import */ var src_app_components_present_plan_animations_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/present-plan/animations/modal.service */ 35131);
/* harmony import */ var src_app_components_present_plan_present_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/present-plan/present-plan.component */ 37217);












let AnnouncementMapComponent = class AnnouncementMapComponent {
  constructor(plt, fb, coordinateAnnouncementService, messageService, loadingService, alertController, alertService, modalController, modalService) {
    this.plt = plt;
    this.fb = fb;
    this.coordinateAnnouncementService = coordinateAnnouncementService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.alertController = alertController;
    this.alertService = alertService;
    this.modalController = modalController;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.setPlatform();
  }
  openForm() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '2') {
        yield this.coordinate();
      }
    });
  }
  openFormAdmin() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      yield this.coordinate();
    });
  }
  coordinate() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.plan) === null || _b === void 0 ? void 0 : _b.type) === 'free') {
        const modal = yield this.modalController.create({
          component: src_app_components_present_plan_present_plan_component__WEBPACK_IMPORTED_MODULE_7__.PresentPlanComponent,
          enterAnimation: this.modalService.enterAnimation,
          leaveAnimation: this.modalService.leaveAnimation
        });
        return yield modal.present();
      }
      if (!this.isMobile) {
        const alert = yield this.alertService.alertController.create({
          header: 'Observação:',
          message: 'A geolocalização é mais precisa para dispositivos com GPS, como smartphones.',
          buttons: [{
            text: 'Cancelar'
          }, {
            text: 'Confirmar',
            handler: () => this.coordinates()
          }]
        });
        return yield alert.present();
      }
      return this.coordinates();
    });
  }
  destroy() {
    var _a, _b, _c;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.coordinate)) {
        const alert = yield this.alertController.create({
          header: 'Excluir Coordenadas',
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
                id: (_c = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.coordinate) === null || _c === void 0 ? void 0 : _c.id
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
  coordinates() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const position = yield this.coordinateAnnouncementService.getCoordinate();
      if (position instanceof GeolocationPosition) {
        return this.addCoordinate(position);
      } else if (position instanceof GeolocationPositionError) {
        this.coordinateAnnouncementService.showError(position);
      } else {
        this.alertService.alert('Ateção', position === null || position === void 0 ? void 0 : position.message);
      }
    });
  }
  addCoordinate(position) {
    var _a, _b;
    const message = ((_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.coordinate) === null || _b === void 0 ? void 0 : _b.announcementId) ? 'Editando mapa...' : 'Cadastrando mapa...';
    const loading = this.loadingService.show(message);
    const coordinate = this.loadCoordinate(position);
    if (coordinate) {
      this.form = this.fb.group(coordinate);
      return this.send(loading);
    }
  }
  loadCoordinate(position) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if ((_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.coordinate) === null || _b === void 0 ? void 0 : _b.announcementId) {
      this.announcement.coordinate._csrf = (_c = this.announcement) === null || _c === void 0 ? void 0 : _c._csrf;
      return this.announcement.coordinate;
    } else {
      if ((_d = this.announcement) === null || _d === void 0 ? void 0 : _d.id) {
        return {
          announcementId: (_e = this.announcement) === null || _e === void 0 ? void 0 : _e.id,
          latitude: (_f = position === null || position === void 0 ? void 0 : position.coords) === null || _f === void 0 ? void 0 : _f.latitude,
          longitude: (_g = position === null || position === void 0 ? void 0 : position.coords) === null || _g === void 0 ? void 0 : _g.longitude,
          _csrf: (_h = this.announcement) === null || _h === void 0 ? void 0 : _h._csrf
        };
      }
    }
  }
  send(loading) {
    return this.map = this.coordinateAnnouncementService.coordinate(this.form.value).subscribe({
      next: coordinate_ => {
        if (coordinate_ === null || coordinate_ === void 0 ? void 0 : coordinate_.message) {
          if (this.announcement) this.announcement.coordinate = coordinate_;
          return this.messageService.success(coordinate_ === null || coordinate_ === void 0 ? void 0 : coordinate_.message, loading, this.map, 2000);
        }
      },
      error: error => this.messageService.error(error, loading, this.map)
    });
  }
  delete(coordinate) {
    var _a, _b;
    if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.coordinate)) {
      const loading = this.loadingService.show('Excluindo coordenadas...');
      return this.$delete = this.coordinateAnnouncementService.delete(coordinate).subscribe({
        next: coordinate_ => {
          this.messsage(coordinate_, loading);
          if (this.announcement) this.announcement.coordinate = null;
        },
        error: error => this.messageService.error(error, loading, this.$delete)
      });
    }
  }
  messsage(coordinate, loading) {
    if (coordinate === null || coordinate === void 0 ? void 0 : coordinate.message) {
      return this.messageService.success(coordinate === null || coordinate === void 0 ? void 0 : coordinate.message, loading, this.$delete);
    }
  }
  setPlatform() {
    this.plt.ready().then(() => {
      this.isMobile = this.plt.is('hybrid') || this.plt.is('android') || this.plt.is('ios');
    });
  }
};
AnnouncementMapComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: src_app_pages_dashboard_component_announcement_map_service_map_service__WEBPACK_IMPORTED_MODULE_2__.CoordinateAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_components_present_plan_animations_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService
}];
AnnouncementMapComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }]
};
AnnouncementMapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-map-announcement-component',
  template: _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementMapComponent);


/***/ }),

/***/ 17410:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/filter/filter-menu.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementSearchMenuComponent": () => (/* binding */ AnnouncementSearchMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-menu.component.html?ngResource */ 17754);
/* harmony import */ var _filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-menu.component.scss?ngResource */ 63166);
/* harmony import */ var _filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search.service */ 36916);






let AnnouncementSearchMenuComponent = class AnnouncementSearchMenuComponent {
  constructor(searchAnnouncementService, popoverController) {
    this.searchAnnouncementService = searchAnnouncementService;
    this.popoverController = popoverController;
  }
  ngOnInit() {
    this.filter();
  }
  ngOnDestroy() {
    this.$isIcon.unsubscribe();
  }
  searchBy(searchBy) {
    this.searchAnnouncementService.setSearchBy = searchBy;
  }
  close() {
    return this.popoverController.dismiss();
  }
  filter() {
    this.$isIcon = this.searchAnnouncementService.getSearchBy.subscribe({
      next: filter => this.isIcon = filter
    });
  }
};
AnnouncementSearchMenuComponent.ctorParameters = () => [{
  type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchAnnouncementService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
}];
AnnouncementSearchMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-announcement-search-menu',
  template: _filter_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementSearchMenuComponent);


/***/ }),

/***/ 12217:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/search.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementSearchComponent": () => (/* binding */ AnnouncementSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 91037);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 4436);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/module-dark/module-dark.service */ 22129);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/search.service */ 36916);
/* harmony import */ var _filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/filter-menu.component */ 17410);











let AnnouncementSearchComponent = class AnnouncementSearchComponent {
  constructor(navCtrl, router, searchAnnouncementService, popoverController, moduleDarkService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.searchAnnouncementService = searchAnnouncementService;
    this.popoverController = popoverController;
    this.moduleDarkService = moduleDarkService;
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
    this.triggerSearch$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(undefined);
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.placeholder = 'Digite nome';
  }
  ngOnDestroy() {
    this.$isDark.unsubscribe();
  }
  ngOnInit() {
    this.searchList();
    this.setFilterLabelAndPlaceholder();
    this.getDark();
    this.loadDark();
  }
  getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }
  loadDark() {
    this.$isDark = this.moduleDarkService.toggleEvent().subscribe(dark => this.isDark = dark);
  }
  research(search) {
    var _a, _b;
    if (((_b = (_a = search.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      this.show = false;
    }
    return this.search.emit(search);
  }
  sendUrl(url) {
    const URL = this.router.url.split('/');
    return this.navCtrl.navigateForward([URL[1], 'anuncio', url === null || url === void 0 ? void 0 : url.slug]);
  }
  menuShow(ev) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popoverController.create({
        component: _filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementSearchMenuComponent,
        event: ev,
        translucent: true
      });
      yield popover.present();
      yield popover.onDidDismiss();
    });
  }
  searchList() {
    return this.search$ = this.searchAnnouncementService.search.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(search => {
      if (search.length >= 0) {
        this.show = true;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      this.error$.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
    }));
  }
  setFilterLabelAndPlaceholder() {
    let count = 0;
    this.triggerSearch$ = this.searchAnnouncementService.getSearchBy.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(filter => {
      this.placeholder = 'Digite título';
      this.filterLabel = 'Pesquizar por título';
      if (count > 0) {
        this.popoverController.dismiss();
        count++;
      }
    }));
  }
};
AnnouncementSearchComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: _service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchAnnouncementService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController
}, {
  type: src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_2__.ModuleDarkService
}];
AnnouncementSearchComponent.propDecorators = {
  search: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};
AnnouncementSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-announcement-search-component',
  template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementSearchComponent);


/***/ }),

/***/ 36916:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/service/search.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAnnouncementService": () => (/* binding */ SearchAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);



let SearchAnnouncementService = class SearchAnnouncementService {
  constructor() {
    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(undefined);
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this.setSearchBy = 'title';
  }
  get getSearchBy() {
    return this.search$.asObservable();
  }
  get search() {
    return this.result.asObservable();
  }
  set search(value) {
    this.result.emit(value);
  }
  set setSearchBy(searchBy) {
    this.search$.next(searchBy);
  }
};
SearchAnnouncementService.ctorParameters = () => [];
SearchAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], SearchAnnouncementService);


/***/ }),

/***/ 49353:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/segment/segment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementSegmentComponent": () => (/* binding */ AnnouncementSegmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment.component.html?ngResource */ 96820);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment.component.scss?ngResource */ 8961);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





let AnnouncementSegmentComponent = class AnnouncementSegmentComponent {
  constructor() {
    this.togglePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
  }
  ngOnDestroy() {
    this.segmentIonChange.unsubscribe();
  }
  ngOnInit() {
    this.init();
    this.toggleSegment();
  }
  toggleSegment() {
    return this.segmentIonChange = this.segment.ionChange.subscribe({
      next: segment => {
        var _a;
        const event = ((_a = segment === null || segment === void 0 ? void 0 : segment.detail) === null || _a === void 0 ? void 0 : _a.value) === 'enabled';
        this.togglePage.emit(event);
      }
    });
  }
  init() {
    return this.togglePage.emit(true);
  }
};
AnnouncementSegmentComponent.ctorParameters = () => [];
AnnouncementSegmentComponent.propDecorators = {
  isAdmin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  segment: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, {
      static: true
    }]
  }],
  togglePage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }]
};
AnnouncementSegmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-segment-announcement-component',
  template: _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementSegmentComponent);


/***/ }),

/***/ 94759:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/skeleton/skeleton.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonComponent": () => (/* binding */ SkeletonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _skeleton_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.component.html?ngResource */ 31419);
/* harmony import */ var _skeleton_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skeleton.component.scss?ngResource */ 15899);
/* harmony import */ var _skeleton_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skeleton_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SkeletonComponent = class SkeletonComponent {
  constructor() {
    this.sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  ngOnInit() {}
};
SkeletonComponent.ctorParameters = () => [];
SkeletonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-skeleton-announcement',
  template: _skeleton_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_skeleton_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SkeletonComponent);


/***/ }),

/***/ 93286:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/form/form.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementFormSocialNetworkComponent": () => (/* binding */ AnnouncementFormSocialNetworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 10139);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 16999);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_social_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/social-network.service */ 50167);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);









let AnnouncementFormSocialNetworkComponent = class AnnouncementFormSocialNetworkComponent {
  constructor(helpService, modalController, socialNetworkService, messageService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.socialNetworkService = socialNetworkService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/socialNetwork',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar rede sociais.',
      title: 'Salvar rede sociais.'
    };
  }
  ngOnInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      this.getData();
    });
  }
  /** FORM */
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.socialNetworks(event);
  }
  socialNetworks(event) {
    var _a, _b, _c;
    let message;
    if ((_a = this.socialNetwork) === null || _a === void 0 ? void 0 : _a.id) {
      event.value.id = (_b = this.socialNetwork) === null || _b === void 0 ? void 0 : _b.id;
      message = 'Editando rede social...';
    } else {
      event.value.announcementId = (_c = this.socialNetwork) === null || _c === void 0 ? void 0 : _c.announcementId;
      message = 'Cadastrando rede social...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }
  send(event, loading) {
    return this.write = this.socialNetworkService.socialNetwork(event.value).subscribe({
      next: socialNetwork => socialNetwork.message && this.messsage(socialNetwork.message, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(message, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(message, loading, this.write);
  }
  getData() {
    this.config = Object.assign({}, this.socialNetwork);
  }
};
AnnouncementFormSocialNetworkComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _service_social_network_service__WEBPACK_IMPORTED_MODULE_3__.SocialNetworkAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}];
AnnouncementFormSocialNetworkComponent.propDecorators = {
  socialNetwork: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AnnouncementFormSocialNetworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementFormSocialNetworkComponent);


/***/ }),

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

/***/ 36271:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/social-network.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementSocialNetworkComponent": () => (/* binding */ AnnouncementSocialNetworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _social_network_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-network.component.html?ngResource */ 95355);
/* harmony import */ var _social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-network.component.scss?ngResource */ 57037);
/* harmony import */ var _social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_social_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/social-network.service */ 50167);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_present_plan_animations_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/present-plan/animations/modal.service */ 35131);
/* harmony import */ var src_app_components_present_plan_present_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/present-plan/present-plan.component */ 37217);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ 93286);











let AnnouncementSocialNetworkComponent = class AnnouncementSocialNetworkComponent {
  constructor(modalController, modalService, alertController, loadingService, messageService, socialNetworkAnnouncementService) {
    this.modalController = modalController;
    this.modalService = modalService;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.socialNetworkAnnouncementService = socialNetworkAnnouncementService;
  }
  ngOnDestroy() {
    this.$update.unsubscribe();
  }
  ngOnInit() {
    this.update();
  }
  openForm() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '2') {
        yield this.socialNetwork();
      }
    });
  }
  openFormAdmin() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      yield this.socialNetwork();
    });
  }
  // Rede social
  socialNetwork() {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      let modal;
      if (this.announcement) {
        if (((_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.plan) === null || _b === void 0 ? void 0 : _b.type) === 'free') {
          modal = yield this.modalController.create({
            component: src_app_components_present_plan_present_plan_component__WEBPACK_IMPORTED_MODULE_6__.PresentPlanComponent,
            enterAnimation: this.modalService.enterAnimation,
            leaveAnimation: this.modalService.leaveAnimation
          });
          return yield modal.present();
        }
        const label = this.getLabel(this.announcement);
        const socialNetwork = this.getSocialNetwork(this.announcement);
        modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_7__.AnnouncementFormSocialNetworkComponent,
          componentProps: {
            label,
            socialNetwork
          }
        });
        return yield modal.present();
      }
    });
  }
  getLabel(announcement) {
    if (announcement === null || announcement === void 0 ? void 0 : announcement.socialNetwork) {
      return 'Editar rede social';
    } else {
      return 'Cadastrar rede social';
    }
  }
  getSocialNetwork(announcement) {
    const _csrf = announcement === null || announcement === void 0 ? void 0 : announcement._csrf;
    if (announcement === null || announcement === void 0 ? void 0 : announcement.socialNetwork) {
      return Object.assign(Object.assign({}, announcement === null || announcement === void 0 ? void 0 : announcement.socialNetwork), {
        _csrf
      });
    } else {
      return {
        _csrf,
        facebook: null,
        instagran: null,
        announcementId: announcement === null || announcement === void 0 ? void 0 : announcement.id
      };
    }
  }
  destroy() {
    var _a, _b, _c;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.socialNetwork)) {
        const alert = yield this.alertController.create({
          header: 'Excluir contato',
          subHeader: (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.title,
          buttons: [{
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {}
          }, {
            text: 'OK',
            role: 'confirm',
            handler: event => {
              var _a, _b;
              const data = Object.assign(Object.assign({}, event), {
                _csrf: this.announcement && this.announcement._csrf,
                id: (_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.socialNetwork) === null || _b === void 0 ? void 0 : _b.id
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
  delete(socialNetwork) {
    var _a, _b;
    if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.level) === '1' && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.socialNetwork)) {
      const loading = this.loadingService.show('Excluindo rede social...');
      return this.$delete = this.socialNetworkAnnouncementService.delete(socialNetwork).subscribe({
        next: socialNetwork_ => {
          var _a;
          this.messsage(socialNetwork_, loading);
          if ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.socialNetwork) this.announcement.socialNetwork = null;
        },
        error: error => this.messageService.error(error, loading, this.$delete)
      });
    }
  }
  messsage(socialNetwork, loading) {
    if (socialNetwork === null || socialNetwork === void 0 ? void 0 : socialNetwork.message) {
      return this.messageService.success(socialNetwork === null || socialNetwork === void 0 ? void 0 : socialNetwork.message, loading, this.$delete);
    }
  }
  update() {
    return this.$update = this.socialNetworkAnnouncementService.getSocialNetworkEvent.subscribe({
      next: socialNetwork => {
        var _a, _b;
        if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.id) === (socialNetwork === null || socialNetwork === void 0 ? void 0 : socialNetwork.announcementId)) {
          if ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.socialNetwork) this.announcement.socialNetwork = socialNetwork;
        }
      }
    });
  }
};
AnnouncementSocialNetworkComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_components_present_plan_animations_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: _service_social_network_service__WEBPACK_IMPORTED_MODULE_2__.SocialNetworkAnnouncementService
}];
AnnouncementSocialNetworkComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }]
};
AnnouncementSocialNetworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-social-network-component',
  template: _social_network_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementSocialNetworkComponent);


/***/ }),

/***/ 76328:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/state/service/state.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateAnnouncementService": () => (/* binding */ StateAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);








let StateAnnouncementService = class StateAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService {
  constructor(http, storageService, messageService, managementAnnouncementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.managementAnnouncementService = managementAnnouncementService;
    this.setApi = `announcement/state`;
  }
  set setSate(value) {
    if (this.managementAnnouncementService.getAnnouncement) {
      this.managementAnnouncementService.getAnnouncement.state = value.state;
      this.managementAnnouncementService.setAnnouncement = this.managementAnnouncementService.getAnnouncement;
    }
  }
  state(announcement) {
    return this.patch(announcement).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(announcement_ => this.setSate = announcement_));
  }
};
StateAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_0__.ManagementAnnouncementService
}];
StateAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], StateAnnouncementService);


/***/ }),

/***/ 35492:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/state/state.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementStateComponent": () => (/* binding */ AnnouncementStateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.component.html?ngResource */ 43581);
/* harmony import */ var _state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.component.scss?ngResource */ 54648);
/* harmony import */ var _state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/state.service */ 76328);







let AnnouncementStateComponent = class AnnouncementStateComponent {
  constructor(fb, stateService, messageService) {
    this.fb = fb;
    this.stateService = stateService;
    this.messageService = messageService;
  }
  // State
  toggle() {
    if (this.announcement) {
      const {
        id,
        _csrf
      } = this.announcement;
      this.form = this.fb.group({
        id,
        _csrf
      });
      return this.$state = this.stateService.state(this.form.value).subscribe({
        next: announcement_ => announcement_ && this.success(announcement_),
        error: error => this.messageService.error(error, undefined, this.$state)
      });
    }
  }
  success(announcement_) {
    if (announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message) {
      return this.messageService.success(announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message, undefined, this.$state, 350);
    }
  }
};
AnnouncementStateComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _service_state_service__WEBPACK_IMPORTED_MODULE_3__.StateAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
AnnouncementStateComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
AnnouncementStateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-state-announcement-component',
  template: _state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnnouncementStateComponent);


/***/ }),

/***/ 38564:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/work-days.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkDayAnnouncementComponent": () => (/* binding */ WorkDayAnnouncementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _work_days_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-days.component.html?ngResource */ 75155);
/* harmony import */ var _work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-days.component.scss?ngResource */ 59137);
/* harmony import */ var _work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let WorkDayAnnouncementComponent = class WorkDayAnnouncementComponent {
  constructor() {
    this.route = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(undefined);
  }
  setDay(day) {
    this.day = day;
  }
  back(e) {
    if (e === 'WorkDays') {
      this.day = null;
    }
    this.route.emit(e);
  }
};
WorkDayAnnouncementComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  route: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }]
};
WorkDayAnnouncementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-work-days',
  template: _work_days_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_work_days_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WorkDayAnnouncementComponent);


/***/ }),

/***/ 62507:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/category/service/category.service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementService": () => (/* binding */ CategoryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);







let CategoryAnnouncementService = class CategoryAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, managementAnnouncementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.managementAnnouncementService = managementAnnouncementService;
    this._categoryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.setApi = `category`;
  }
  get getCategoryEvent() {
    return this._categoryEvent.asObservable();
  }
  set categoryEvent(value) {
    this._categoryEvent.emit(value);
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  category(category) {
    if (category.id) {
      return this.patch(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(announcement_ => {
        this.managementAnnouncementService.setCategoryAnnouncement = announcement_;
        return this.categoryEvent = announcement_;
      }));
    } else {
      return this.create(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(announcement_ => {
        this.managementAnnouncementService.setCategoryAnnouncement = announcement_;
        return this.categoryEvent = announcement_;
      }));
    }
  }
};
CategoryAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_2__.ManagementAnnouncementService
}];
CategoryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CategoryAnnouncementService);


/***/ }),

/***/ 89900:
/*!*************************************************!*\
  !*** ./src/app/services/image/image.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 4241);



let ImageService = class ImageService {
  constructor() {
    this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  addPhoto() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      try {
        return yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Prompt,
          allowEditing: true,
          quality: 100,
          saveToGallery: true
        });
      } catch (error) {}
    });
  }
  readAsBase64(photo) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const fileName = new Date().getTime() + '.jpeg';
      const response = yield fetch(photo.webPath);
      const blob = yield response.blob();
      const data = yield this.convertBlobToBase64(blob);
      const _response = yield fetch(data);
      const _blob = yield _response.blob();
      return {
        file: _blob,
        fileName
      };
    });
  }
};
ImageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ImageService);


/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 26661:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7994:
/*!********************************************************************************!*\
  !*** ./src/app/components/present-plan/present-plan.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88210:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/dashboard.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ul {\n  list-style-type: none;\n}\nul li {\n  display: flex;\n  align-items: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\nul li.flex-start {\n  align-items: flex-start;\n}\nul li ion-icon {\n  margin-right: 8px;\n}\n\nion-card-subtitle ul {\n  padding-left: 0px;\n}\n\n.state {\n  display: flex;\n  align-items: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.state.flex-start {\n  align-items: flex-start;\n}\n.state ion-icon {\n  margin-right: 8px;\n}\n\na {\n  text-decoration: none;\n}\n\nion-accordion {\n  border-radius: 5px;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.row dl {\n  flex: 0 0 150px;\n}\n.row dl dt {\n  margin-bottom: 8px;\n}\n.row dl dd {\n  padding-top: 4px;\n  margin-left: 16px;\n  font-size: x-small;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/auth/announcement/dashboard.page.scss"],"names":[],"mappings":"AAYA;EACE,qBAAA;AAXF;AAYE;EAbA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AAIF;AAHE;EACE,uBAAA;AAKJ;AAHE;EACE,iBAAA;AAKJ;;AAKA;EACE,iBAAA;AAFF;;AAKA;EAtBE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AAqBF;AApBE;EACE,uBAAA;AAsBJ;AApBE;EACE,iBAAA;AAsBJ;;AAJA;EACE,qBAAA;AAOF;;AAJA;EACE,kBAAA;AAOF;;AAJA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;AAOF;AANE;EACE,eAAA;AAQJ;AAPI;EACE,kBAAA;AASN;AAPI;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;AASN","sourcesContent":["@mixin flex-row() {\n  display: flex;\n  align-items: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  &.flex-start {\n    align-items: flex-start;\n  }\n  ion-icon {\n    margin-right: 8px;\n  }\n}\nul {\n  list-style-type: none;\n  li {\n    @include flex-row();\n  }\n}\n\nion-card-subtitle ul {\n  padding-left: 0px;\n}\n\n.state {\n  @include flex-row();\n}\n\na {\n  text-decoration: none;\n}\n\nion-accordion {\n  border-radius: 5px;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  dl {\n    flex: 0 0 150px;\n    dt {\n      margin-bottom: 8px;\n    }\n    dd {\n      padding-top: 4px;\n      margin-left: 16px;\n      font-size: x-small;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62249:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/address/address.component.scss?ngResource ***!
  \**************************************************************************************************/
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

/***/ 45877:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/address/form/form.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/address/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44602:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement/announcement.component.scss?ngResource ***!
  \************************************************************************************************************/
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

/***/ 63238:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement/form/form.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/announcement/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62011:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/blockade/blockade.component.scss?ngResource ***!
  \****************************************************************************************************/
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

/***/ 75695:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/button-create/admin/button-create.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61473:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/button-create/auth/button-create.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52762:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/card.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toRestore {\n  background-color: rgba(10, 67, 46, 0.2);\n}\n\n.isDeleted {\n  background-color: rgba(103, 15, 15, 0.2);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/card/card.component.scss"],"names":[],"mappings":"AAAA;EACE,uCAAA;AACF;;AAEA;EACE,wCAAA;AACF","sourcesContent":[".toRestore {\n  background-color: rgb(10, 67, 46, 0.2);\n}\n\n.isDeleted {\n  background-color: rgb(103, 15, 15, 0.2);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85077:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/components/header/header.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ul {\n  list-style-type: none;\n}\nul li {\n  display: flex;\n  align-items: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\nul li.flex-start {\n  align-items: flex-start;\n}\nul li ion-icon {\n  margin-right: 8px;\n}\n\nion-card-subtitle ul {\n  padding-left: 0px;\n}\n\n.state {\n  display: flex;\n  align-items: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.state.flex-start {\n  align-items: flex-start;\n}\n.state ion-icon {\n  margin-right: 8px;\n}\n\na {\n  text-decoration: none;\n}\n\nion-accordion {\n  border-radius: 5px;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.row dl {\n  flex: 0 0 150px;\n}\n.row dl dt {\n  margin-bottom: 8px;\n}\n.row dl dd {\n  padding-top: 4px;\n  margin-left: 16px;\n  font-size: x-small;\n}\n\ncapacitor-google-map {\n  display: inline-block;\n  width: 100%;\n  height: 300px;\n}\n\n.plan {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/card/components/header/header.component.scss"],"names":[],"mappings":"AAYA;EACE,qBAAA;AAXF;AAYE;EAbA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AAIF;AAHE;EACE,uBAAA;AAKJ;AAHE;EACE,iBAAA;AAKJ;;AAKA;EACE,iBAAA;AAFF;;AAKA;EAtBE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AAqBF;AApBE;EACE,uBAAA;AAsBJ;AApBE;EACE,iBAAA;AAsBJ;;AAJA;EACE,qBAAA;AAOF;;AAJA;EACE,kBAAA;AAOF;;AAJA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;AAOF;AANE;EACE,eAAA;AAQJ;AAPI;EACE,kBAAA;AASN;AAPI;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;AASN;;AAJA;EACE,qBAAA;EACA,WAAA;EACA,aAAA;AAOF;;AAJA;EACE,yBAAA;EACA,4BAAA;AAOF","sourcesContent":["@mixin flex-row() {\n  display: flex;\n  align-items: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  &.flex-start {\n    align-items: flex-start;\n  }\n  ion-icon {\n    margin-right: 8px;\n  }\n}\nul {\n  list-style-type: none;\n  li {\n    @include flex-row();\n  }\n}\n\nion-card-subtitle ul {\n  padding-left: 0px;\n}\n\n.state {\n  @include flex-row();\n}\n\na {\n  text-decoration: none;\n}\n\nion-accordion {\n  border-radius: 5px;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  dl {\n    flex: 0 0 150px;\n    dt {\n      margin-bottom: 8px;\n    }\n    dd {\n      padding-top: 4px;\n      margin-left: 16px;\n      font-size: x-small;\n    }\n  }\n}\n\ncapacitor-google-map {\n  display: inline-block;\n  width: 100%;\n  height: 300px;\n}\n\n.plan {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98764:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/city.component.scss?ngResource ***!
  \********************************************************************************************/
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

/***/ 1802:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/form/form.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/city/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89147:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/contant.component.scss?ngResource ***!
  \**************************************************************************************************/
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

/***/ 61924:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/form/form.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/contant/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43252:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/component/button-upload/button-upload.component.scss?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inputFiles {\n  height: 0px;\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  position: absolute;\n}\n\ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: x-small;\n  width: 100%;\n  height: 100%;\n  color: var(--ion-color-medium);\n}\n\ndiv {\n  min-width: 110px;\n  background-color: var(--ion-color-light);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/galery/component/button-upload/button-upload.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,QAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;AACF;;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;AAEF;;AAEA;EACE,gBAFM;EAGN,wCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AACF","sourcesContent":[".inputFiles {\n  height: 0px;\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  position: absolute;\n}\ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: x-small;\n  width: 100%;\n  height: 100%;\n  color: var(--ion-color-medium);\n}\n\n$width: 110px;\ndiv {\n  min-width: $width;\n  background-color: var(--ion-color-light);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77260:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/galery-component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Style the Image Used to Trigger the Modal */\n#myImg {\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n#myImg:hover {\n  opacity: 0.7;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 999; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */\n  /* Number text (1/3 etc) */\n}\n.modal.show {\n  display: block;\n  overflow: auto;\n}\n.modal .numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  top: 0;\n}\n\n/* Modal Content (Image) */\n.modal-content {\n  margin: auto;\n  width: 80%;\n  display: block;\n  max-width: 700px;\n}\n\n/* Caption of Modal Image (Image Text) - Same Width as the Image */\n#caption {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  margin: auto;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 80px;\n}\n\n/* Add Animation - Zoom in the Modal */\n.modal-content,\n#caption {\n  animation-name: zoom;\n  animation-duration: 0.2s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n.row {\n  display: flex;\n  flex-direction: row;\n  height: 96px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.row > div {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.row > div.show::-webkit-scrollbar {\n  visibility: visible;\n  height: 11px;\n}\n.row > div.show::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n.row > div.show::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 10px;\n}\n.row > div::-webkit-scrollbar {\n  visibility: hidden;\n  height: 0px;\n}\n.row > div ion-img {\n  width: 170px;\n  margin: 0 2px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/galery/galery-component.scss"],"names":[],"mappings":"AAAA,8CAAA;AACA;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA,2BAAA;AACA;EACE,aAAA,EAAA,sBAAA;EACA,eAAA,EAAA,kBAAA;EACA,YAAA,EAAA,eAAA;EACA,kBAAA,EAAA,wBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA,EAAA,eAAA;EACA,YAAA,EAAA,gBAAA;EACA,cAAA,EAAA,4BAAA;EAEA,8BAAA,EAAA,mBAAA;EACA,oCAAA,EAAA,qBAAA;EAMA,0BAAA;AALF;AAAE;EACE,cAAA;EACA,cAAA;AAEJ;AAEE;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,MAAA;AAAJ;;AAIA,0BAAA;AACA;EACE,YAAA;EACA,UAAA;EACA,cAAA;EACA,gBAAA;AADF;;AAIA,kEAAA;AACA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;AADF;;AAIA,sCAAA;AACA;;EAEE,oBAAA;EACA,wBAAA;AADF;;AAIA;EACE;IACE,mBAAA;EADF;EAGA;IACE,mBAAA;EADF;AACF;AAIA,qBAAA;AACA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAFF;;AAKA;;EAEE,WAAA;EACA,qBAAA;EACA,eAAA;AAFF;;AAKA,wCAAA;AACA;EACE;IACE,WAAA;EAFF;AACF;AASA;EACE,aAAA;EACA,mBAAA;EACA,YAJO;EAKP,gBAAA;EACA,mBAAA;AAPF;AAQE;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AANJ;AAQM;EACE,mBAAA;EACA,YAAA;AANR;AAQM;EACE,8BAAA;EACA,mBAAA;AANR;AAQM;EACE,mCAAA;EACA,mBAAA;AANR;AASI;EACE,kBAAA;EACA,WAAA;AAPN;AAUI;EACE,YAAA;EACA,aAAA;AARN","sourcesContent":["/* Style the Image Used to Trigger the Modal */\n#myImg {\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n#myImg:hover {\n  opacity: 0.7;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 999; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  // overflow-y: scroll;\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */\n  &.show {\n    display: block;\n    overflow: auto;\n  }\n\n  /* Number text (1/3 etc) */\n  .numbertext {\n    color: #f2f2f2;\n    font-size: 12px;\n    padding: 8px 12px;\n    top: 0;\n  }\n}\n\n/* Modal Content (Image) */\n.modal-content {\n  margin: auto;\n  width: 80%;\n  display: block;\n  max-width: 700px;\n}\n\n/* Caption of Modal Image (Image Text) - Same Width as the Image */\n#caption {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  margin: auto;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 80px;\n}\n\n/* Add Animation - Zoom in the Modal */\n.modal-content,\n#caption {\n  animation-name: zoom;\n  animation-duration: 0.2s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n\n// scroll slide\n\n$width: 110px;\n$height: 96px;\n.row {\n  display: flex;\n  flex-direction: row;\n  height: $height;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  > div {\n    display: flex;\n    flex-direction: row;\n    overflow-x: auto;\n    overflow-y: hidden;\n    &.show {\n      &::-webkit-scrollbar {\n        visibility: visible;\n        height: 11px;\n      }\n      &::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 5px grey;\n        border-radius: 10px;\n      }\n      &::-webkit-scrollbar-thumb {\n        background: var(--ion-color-medium);\n        border-radius: 10px;\n      }\n    }\n    &::-webkit-scrollbar {\n      visibility: hidden;\n      height: 0px;\n    }\n\n    ion-img {\n      width: 170px;\n      margin: 0 2px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33629:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/list-item/list-item.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toRestore {\n  background-color: rgba(10, 67, 46, 0.2);\n}\n\nion-item {\n  --ion-color-danger: rgb(103, 15, 15, 0.5);\n}\n\n.list-md,\n.list-ios {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/list-item/list-item.component.scss"],"names":[],"mappings":"AAAA;EACE,uCAAA;AACF;;AAEA;EACE,yCAAA;AACF;;AAEA;;EAEE,2BAAA;EACA,8BAAA;AACF","sourcesContent":[".toRestore {\n  background-color: rgb(10, 67, 46, 0.2);\n}\n\nion-item {\n  --ion-color-danger: rgb(103, 15, 15, 0.5);\n}\n\n.list-md,\n.list-ios {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38590:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/map/map.component.scss?ngResource ***!
  \******************************************************************************************/
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

/***/ 63166:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/filter/filter-menu.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4436:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/search.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.dropdown {\n  position: relative;\n  display: block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  width: 98.4%;\n  margin-top: -7px;\n  left: 8px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 999;\n}\n\n.show {\n  display: block;\n}\n\n.list,\n.list-lg,\n.list-md,\n.list-sm,\n.list-xl {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nspan {\n  position: relative;\n}\nspan > small {\n  background-color: var(--ion-color-medium);\n  color: var(--ion-color-danger-contrast);\n  padding: 4px;\n  border-radius: 4px;\n  font-size: xx-small;\n  font-weight: bold;\n}\nspan > small::before {\n  content: \"\";\n  position: absolute;\n  bottom: -12px;\n  left: 9px;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: var(--ion-color-medium) transparent transparent transparent;\n}\n\nion-thumbnail {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-thumbnail img {\n  width: 40px;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/search/search.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,iBAAA;AACF;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;;;;;EAKE,gBAAA;EACA,mBAAA;AAEF;;AACA;EACE,kBAAA;AAEF;AADE;EACE,yCAAA;EACA,uCAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;AAGJ;AAFI;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yEAAA;AAIN;;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAEF;AADE;EACE,WAAA;EACA,YAAA;AAGJ","sourcesContent":[".search {\n  display: flex;\n  flex-wrap: nowrap;\n}\n.dropdown {\n  position: relative;\n  display: block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  width: 98.4%;\n  margin-top: -7px;\n  left: 8px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 999;\n}\n\n.show {\n  display: block;\n}\n\n.list,\n.list-lg,\n.list-md,\n.list-sm,\n.list-xl {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nspan {\n  position: relative;\n  > small {\n    background-color: var(--ion-color-medium);\n    color: var(--ion-color-danger-contrast);\n    padding: 4px;\n    border-radius: 4px;\n    font-size: xx-small;\n    font-weight: bold;\n    &::before {\n      content: \"\";\n      position: absolute;\n      bottom: -12px;\n      left: 9px;\n      margin-left: -5px;\n      border-width: 5px;\n      border-style: solid;\n      border-color: var(--ion-color-medium) transparent transparent transparent;\n    }\n  }\n}\n\nion-thumbnail {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 40px;\n    height: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8961:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/segment/segment.component.scss?ngResource ***!
  \**************************************************************************************************/
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

/***/ 15899:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/skeleton/skeleton.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton div {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.skeleton div.fab ion-skeleton-text {\n  flex: 1;\n  border-radius: 50px;\n  height: 24px;\n  margin: 6px 8px 6px 0px;\n  max-width: 90px;\n}\n.skeleton div ion-skeleton-text {\n  flex: 1;\n  height: 32px;\n  margin: 6px 8px 6px 0px;\n  width: 100%;\n}\n.skeleton .title {\n  height: 24px;\n  max-width: 220px;\n  border-end-end-radius: 20px;\n  border-top-right-radius: 2px;\n}\n.skeleton .category {\n  height: 12px;\n  max-width: 70px;\n  border-end-end-radius: 20px;\n  border-top-right-radius: 2px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/skeleton/skeleton.component.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AAAJ;AACI;EACE,OAAA;EACA,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;AACN;AACI;EACE,OAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;AACN;AAEE;EACE,YAAA;EACA,gBAAA;EACA,2BAAA;EACA,4BAAA;AAAJ;AAEE;EACE,YAAA;EACA,eAAA;EACA,2BAAA;EACA,4BAAA;AAAJ","sourcesContent":[".skeleton {\n  div {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    &.fab ion-skeleton-text {\n      flex: 1;\n      border-radius: 50px;\n      height: 24px;\n      margin: 6px 8px 6px 0px;\n      max-width: 90px;\n    }\n    ion-skeleton-text {\n      flex: 1;\n      height: 32px;\n      margin: 6px 8px 6px 0px;\n      width: 100%;\n    }\n  }\n  .title {\n    height: 24px;\n    max-width: 220px;\n    border-end-end-radius: 20px;\n    border-top-right-radius: 2px;\n  }\n  .category {\n    height: 12px;\n    max-width: 70px;\n    border-end-end-radius: 20px;\n    border-top-right-radius: 2px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16999:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/form/form.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}\n\nion-icon.facebook {\n  --ion-color-primary: #3b5998;\n}\n\nul {\n  margin: 0;\n  padding: 0 0 0 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/announcement/social-network/form/form.component.scss"],"names":[],"mappings":"AAAA;EACE,6BAAA;AACF;;AAGE;EACE,4BAAA;AAAJ;;AAGA;EACE,SAAA;EACA,mBAAA;AAAF","sourcesContent":["ion-content {\n  --padding-top: 0px !important;\n}\n\nion-icon {\n  &.facebook {\n    --ion-color-primary: #3b5998;\n  }\n}\nul {\n  margin: 0;\n  padding: 0 0 0 16px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 57037:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/social-network.component.scss?ngResource ***!
  \****************************************************************************************************************/
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

/***/ 54648:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/state/state.component.scss?ngResource ***!
  \**********************************************************************************************/
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

/***/ 59137:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/work-days.component.scss?ngResource ***!
  \******************************************************************************************************/
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

/***/ 92852:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons [slot]=\"isPlt ? 'end' : 'start'\">\n      <ion-fab-button size=\"small\" (click)=\"close()\" shape=\"round\">\n        <ion-icon\n          color=\"light\"\n          [name]=\"isPlt ? 'close' : 'arrow-back'\"\n        ></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n    <ion-title>{{ label }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n";

/***/ }),

/***/ 12943:
/*!********************************************************************************!*\
  !*** ./src/app/components/present-plan/present-plan.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\"> Plano Grátis </ion-col>\n      <ion-col size=\"6\"> Plano Basico </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 28357:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/address/address.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-sliding [disabled]=\"user?.level === '2'\">\n  <ion-item\n    [title]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de endereço.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    [attr.data-message]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de endereço.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    lines=\"true\"\n    (click)=\"openForm()\"\n    [button]=\"user?.level === '2'\"\n  >\n    <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n    <ion-icon\n      slot=\"end\"\n      [name]=\"user?.level === '2' ? 'chevron-forward' : 'chevron-back'\"\n    ></ion-icon>\n    <ion-label\n      >Endereço\n      <ion-text [color]=\"announcement?.address ? 'success' : 'danger'\">\n        *\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <ion-item-options *ngIf=\"user?.level === '1'\">\n    <ion-item-option\n      *ngIf=\"announcement?.address\"\n      slot=\"end\"\n      color=\"danger\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      title=\"Exclui endereço\"\n      data-message=\"Exclui endereço\"\n      (click)=\"destroy()\"\n    >\n      <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n      delete\n    </ion-item-option>\n    <ion-item-option\n      slot=\"end\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      [title]=\"announcement?.address ? 'Editar endereço' : 'Cadastrar endereço'\"\n      [attr.data-message]=\"\n        announcement?.address ? 'Editar endereço' : 'Cadastrar endereço'\n      \"\n      (click)=\"openFormAdmin()\"\n    >\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n      {{ announcement?.address ? \"editar\" : \"Cadastrar\" }}\n    </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n";

/***/ }),

/***/ 54714:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/address/form/form.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 86373:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement/announcement.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  [disabled]=\"!announcement?.categoryAnnouncement\"\n  detail=\"true\"\n  (click)=\"open()\"\n  title=\"Gerenciar anúncio\"\n  aria-label=\"Gerenciar anúncio.\"\n  [attr.aria-disabled]=\"\n    !announcement?.categoryAnnouncement &&\n    'Para gerenciar o anúncio, cadastre uma categoria.'\n  \"\n  button\n>\n  <ion-icon name=\"megaphone\" slot=\"start\"></ion-icon>\n  <ion-label>Anúncio</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 67825:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/announcement/form/form.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Email info -->\n    <!-- <ion-card [hidden]=\"action !== 'email'\">\n            <ion-card-header color=\"warning\">\n                <ion-card-subtitle color=\"light\">\n                    &#9679; Insira um email válido.<br>\n                    &#9679; Será enviado uma menssagem com um prazo de 10 minutos a partir do seu recebimento.<br>\n                    &#9679; Verifique em sua caixa de entrada de emails.<br>\n                    &#9679; Clique no botão alterar email.\n                </ion-card-subtitle>\n            </ion-card-header>\n        </ion-card> -->\n\n    <!-- Destroy info -->\n    <!-- <ion-card [hidden]=\"action !== 'destroy'\">\n            <ion-card-header color=\"warning\">\n                <ion-card-title>Atenção!</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"ion-margin-top\">\n                <p>Você está prestes a excluir sua conta do app.</p>\n                <p>Após excluir sua conta todos os dados que estão vinculados a este usuário não estarão mais visiveis.\n                </p>\n                <p>Esta ação tera um prazo de 90 dias para ser desfeita após está data todos os dados serão\n                    permanentemente\n                    excluido do sistema.</p>\n            </ion-card-content>\n        </ion-card> -->\n\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 61419:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/blockade/blockade.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item *ngIf=\"announcement && user | isUserLevel : '1'\">\n  <ion-label>{{\n    (announcement | isAnnouncementAttrValues : \"blockade\")\n      ? \"Bloqueado\"\n      : \"Desbloqueado\"\n  }}</ion-label>\n  <ion-toggle\n    slot=\"end\"\n    (ionChange)=\"blockade()\"\n    [checked]=\"announcement | isAnnouncementAttrValues : 'blockade'\"\n    title=\"Alternar entre usuário bloquear e desbloquear.\"\n    aria-label=\"Clique para alternar entre usuário bloquear e desbloquear.\"\n  ></ion-toggle>\n  <ion-icon\n    slot=\"start\"\n    [name]=\"\n      (announcement | isAnnouncementAttrValues : 'blockade') ? 'stop' : 'play'\n    \"\n  ></ion-icon>\n</ion-item>\n";

/***/ }),

/***/ 10186:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/button-create/admin/button-create.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-fab\n  *ngIf=\"isAdmin\"\n  vertical=\"top\"\n  horizontal=\"end\"\n  title=\"Cadastrar novo anúncio.\"\n  slot=\"fixed\"\n>\n  <ion-fab-button size=\"small\" (click)=\"createAnnouncement()\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";

/***/ }),

/***/ 94845:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/button-create/auth/button-create.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"isButton\">\n  <ion-col size=\"12\">\n    <div class=\"content-center\">\n      <div>\n        <ion-button (click)=\"createAnnouncement()\" expand=\"block\" shape=\"round\">\n          <ion-icon\n            slot=\"start\"\n            name=\"create\"\n            class=\"ion-margin-end\"\n          ></ion-icon>\n          Cadastrar anúncio\n        </ion-button>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 25739:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/card.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card *ngIf=\"auth$ | async; let auth\">\n  <div>\n    <!-- header -->\n    <app-header-card [announcement]=\"announcement\"></app-header-card>\n\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n      <ion-fab-button size=\"small\">\n        <ion-icon name=\"ellipsis-vertical\" color=\"light\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <!-- botão pagina do usuário -->\n        <ion-fab-button\n          *ngIf=\"auth | isUserLevel : '1'\"\n          size=\"small\"\n          title=\"Painel do usuário\"\n          data-message=\"Painel do usuário\"\n          [routerLink]=\"[\n            '/painel-de-controle',\n            'admin',\n            'usuario',\n            announcement | announcementUserValues : 'slug'\n          ]\"\n          color=\"primary\"\n        >\n          <ion-icon name=\"person\" color=\"light\"></ion-icon>\n        </ion-fab-button>\n\n        <!-- botão gerenciamento -->\n        <ion-fab-button\n          size=\"small\"\n          title=\"Gerenciamento do anúncio\"\n          data-message=\"Gerenciamento do anúncio\"\n          [routerLink]=\"[\n            '/painel-de-controle',\n            'anuncio',\n            announcement | announcementValues : 'slug'\n          ]\"\n          color=\"primary\"\n        >\n          <ion-icon name=\"construct\" color=\"light\"></ion-icon>\n        </ion-fab-button>\n\n        <!-- botão modal gerenciamento -->\n        <ion-fab-button\n          title=\"Visialisar anúncio\"\n          data-message=\"Visialisar anúncio\"\n          [routerLink]=\"['/pagina', announcement | announcementValues : 'slug']\"\n          color=\"primary\"\n        >\n          <ion-icon name=\"eye\" color=\"light\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n  </div>\n</ion-card>\n";

/***/ }),

/***/ 44849:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/card/components/header/header.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-header>\n  <!-- Categoria -->\n  <ion-card-subtitle\n    [title]=\"\n      announcement | isAnnouncementCategoryAttrValues : 'name' : 'Categoria'\n    \"\n    [attr.data-message]=\"\n      announcement | isAnnouncementCategoryAttrValues : 'name' : 'Categoria'\n    \"\n    >{{\n      announcement | isAnnouncementCategoryAttrValues : \"name\"\n    }}</ion-card-subtitle\n  >\n\n  <!-- Title -->\n  <ion-card-title\n    [title]=\"announcement | announcementValues : 'title'\"\n    [attr.data-message]=\"announcement | announcementValues : 'title'\"\n    >{{ announcement | announcementValues : \"title\" }}</ion-card-title\n  >\n\n  <!-- Horario de trabalho -->\n  <ion-card-subtitle\n    [hidden]=\"!announcement | isAnnouncementAttrValues : 'workDays'\"\n  >\n    <ion-text\n      [color]=\"\n        (announcement.workDays | workDays) === 'Aberto' ? 'success' : 'danger'\n      \"\n      [title]=\"announcement | attrTitle : 'workDays'\"\n      [attr.data-message]=\"announcement | attrTitle : 'workDays'\"\n    >\n      {{ announcement.workDays | workDays }}\n    </ion-text>\n  </ion-card-subtitle>\n\n  <!-- Plano tempo do cadastro -->\n  <ion-card-subtitle\n    [color]=\"(announcement | allowAd) ? 'danger' : 'success'\"\n    title=\"Cadastro incompleto\"\n    data-message=\"Cadastro incompleto\"\n    >Cadastro\n    {{ (announcement | allowAd) ? \"incompleto\" : \"completo\" }}\n  </ion-card-subtitle>\n\n  <!-- Aviso de bloqueio -->\n  <ion-card-subtitle\n    *ngIf=\"announcement | announcementValues : 'blockade'\"\n    color=\"danger\"\n    title=\"Anúncio bloqueado\"\n    data-message=\"Anúncio bloqueado\"\n    >Anúncio bloqueado\n  </ion-card-subtitle>\n\n  <!-- State -->\n  <ion-card-subtitle>\n    <ul>\n      <li class=\"plan\" title=\"Plano\" data-message=\"Plano\">\n        <ion-text>\n          Plano:\n          <span *ngIf=\"announcement?.plan?.type === 'free'\">Grátis</span>\n          <span *ngIf=\"announcement?.plan?.type === 'basic'\">Básico</span>\n          <span *ngIf=\"announcement?.plan?.type === 'special'\">Especial</span>\n        </ion-text>\n      </li>\n      <li\n        class=\"plan\"\n        [hidden]=\"!(announcement | announcementPlanValues : 'start')\"\n      >\n        <ion-text>\n          {{\n            announcement | announcementPlanValues : \"start\" | time : \"create\"\n          }}\n        </ion-text>\n      </li>\n      <li\n        class=\"plan ion-margin-bottom\"\n        [hidden]=\"!(announcement | announcementPlanValues : 'end')\"\n      >\n        <ion-text>\n          {{ announcement | announcementPlanValues : \"end\" | time : \"plan\" }}\n        </ion-text>\n      </li>\n\n      <li\n        class=\"plan ion-margin-bottom\"\n        [hidden]=\"\n          (announcement | announcementPlanValues : 'start') &&\n          (announcement | announcementPlanValues : 'end')\n        \"\n      >\n        <ion-text> Recursos são limitado </ion-text>\n      </li>\n\n      <li\n        [title]=\"\n          'Status' + (announcement | announcementValues : 'state')\n            ? 'Online'\n            : 'Offline'\n        \"\n        [attr.data-message]=\"\n          'Status' + (announcement | announcementValues : 'state')\n            ? 'Online'\n            : 'Offline'\n        \"\n      >\n        <ion-icon\n          size=\"small\"\n          [color]=\"\n            (announcement | announcementValues : 'state') ? 'success' : 'danger'\n          \"\n          [name]=\"\n            (announcement | announcementValues : 'state') ? 'eye' : 'eye-off'\n          \"\n        ></ion-icon>\n        <ion-text\n          [color]=\"\n            (announcement | announcementValues : 'state') ? 'success' : 'danger'\n          \"\n        >\n          {{\n            (announcement | announcementValues : \"state\") ? \"Online\" : \"Offline\"\n          }}\n        </ion-text>\n      </li>\n\n      <li>\n        <ion-icon size=\"small\" name=\"time\"></ion-icon\n        >{{ announcement | announcementValues : \"createdAt\" | time : \"create\" }}\n      </li>\n      <li>\n        <ion-icon size=\"small\" name=\"timer\"></ion-icon\n        >{{ announcement | announcementValues : \"updatedAt\" | time : \"update\" }}\n      </li>\n    </ul>\n  </ion-card-subtitle>\n</ion-card-header>\n";

/***/ }),

/***/ 66956:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/city.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-sliding [disabled]=\"user?.level === '2'\">\n  <ion-item\n    [title]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de cidades.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    [attr.data-message]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de cidades.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    lines=\"true\"\n    (click)=\"openForm()\"\n    [button]=\"user?.level === '2'\"\n  >\n    <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n    <ion-icon\n      slot=\"end\"\n      [name]=\"user?.level === '2' ? 'chevron-forward' : 'chevron-back'\"\n    ></ion-icon>\n    <ion-label>\n      Cidade\n      <ion-text [color]=\"announcement?.citie ? 'success' : 'danger'\">\n        *\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <ion-item-options *ngIf=\"user?.level === '1'\">\n    <ion-item-option\n      *ngIf=\"announcement?.citie\"\n      slot=\"end\"\n      color=\"danger\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      title=\"Exclui cidade\"\n      data-message=\"Exclui cidade\"\n      (click)=\"destroy()\"\n    >\n      <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n      delete\n    </ion-item-option>\n    <ion-item-option\n      slot=\"end\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      [title]=\"announcement?.citie ? 'Editar cidade' : 'Cadastrar cidade'\"\n      [attr.data-message]=\"\n        announcement?.citie ? 'Editar cidade' : 'Cadastrar cidade'\n      \"\n      (click)=\"openFormAdmin()\"\n    >\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n      {{ announcement?.citie ? \"editar\" : \"Cadastrar\" }}\n    </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n";

/***/ }),

/***/ 50587:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/city/form/form.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 66050:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/contant.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-sliding [disabled]=\"user?.level === '2'\">\n  <ion-item\n    [title]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de contato.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    [attr.data-message]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de contato.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    lines=\"true\"\n    (click)=\"openForm()\"\n    [button]=\"user?.level === '2'\"\n  >\n    <ion-icon\n      src=\"../../../../../../assets/ion-icon/contact.svg\"\n      slot=\"start\"\n    ></ion-icon>\n    <ion-icon\n      slot=\"end\"\n      [name]=\"user?.level === '2' ? 'chevron-forward' : 'chevron-back'\"\n    ></ion-icon>\n    <ion-label\n      >Contato\n      <ion-text [color]=\"announcement?.contact ? 'success' : 'danger'\">\n        *\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <ion-item-options *ngIf=\"user?.level === '1'\">\n    <ion-item-option\n      *ngIf=\"announcement?.contact\"\n      slot=\"end\"\n      color=\"danger\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      title=\"Exclui contato\"\n      data-message=\"Exclui contato\"\n      (click)=\"destroy()\"\n    >\n      <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n      delete\n    </ion-item-option>\n    <ion-item-option\n      slot=\"end\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      [title]=\"announcement?.contact ? 'Editar contato' : 'Cadastrar contato'\"\n      [attr.data-message]=\"\n        announcement?.contact ? 'Editar contato' : 'Cadastrar contato'\n      \"\n      (click)=\"openFormAdmin()\"\n    >\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n      {{ announcement?.contact ? \"editar\" : \"Cadastrar\" }}\n    </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n";

/***/ }),

/***/ 55365:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/contant/form/form.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 73085:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/component/button-upload/button-upload.component.html?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\n  title=\"Adicionar uma imagem\"\n  aria-message=\"Clique para adicionar uma imagem\"\n  (click)=\"loadFile()\"\n>\n  <ion-icon size=\"large\" slot=\"start\" name=\"images\"></ion-icon>\n  Adicionar fotos\n</div>\n";

/***/ }),

/***/ 29198:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/galery/galery-component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group *ngIf=\"announcement\">\n  <ion-item-divider>\n    <ion-icon color=\"mediun\" name=\"images\" slot=\"start\"></ion-icon>\n    <ion-label>Galeria</ion-label>\n  </ion-item-divider>\n  <div class=\"row\">\n    <app-galery-button-upload\n      [announcement]=\"announcement\"\n    ></app-galery-button-upload>\n\n    <div appHorizontalScroll>\n      <section *ngFor=\"let item of announcement?.galery; let i = index\">\n        <ion-img\n          class=\"cursor-pointer\"\n          [src]=\"item | galeryValues:'filename':'/images/galery/x-small/'\"\n          alt=\"Image da galeria\"\n          title=\"Clique para ampliar\"\n          aria-message=\"Clique para ampliar\"\n          (click)=\"show(i)\"\n        ></ion-img>\n      </section>\n    </div>\n  </div>\n</ion-item-group>\n\n<!-- The Modal -->\n<div class=\"modal\" [ngClass]=\"{'show': isLightbox}\">\n  <!-- The Close Button -->\n  <span class=\"close\" (click)=\"close()\">&times;</span>\n\n  <div class=\"modal-content\" *ngIf=\"announcement | isGalery:image\">\n    <div class=\"numbertext\">\n      {{ announcement?.galery?.length }} / {{ image + 1}}\n    </div>\n    <picture>\n      <source\n        media=\"(max-width: 575.98px)\"\n        [srcset]=\"announcement | typeImageGalery:['small', image]\"\n        alt=\"Galeria de anúncios\"\n      />\n      <source\n        media=\"(max-width: 1399.98px) and (min-width: 576px)\"\n        [srcset]=\"announcement | typeImageGalery:['medium', image]\"\n        alt=\"Galeria de anúncios\"\n      />\n      <img\n        [src]=\"announcement | typeImageGalery:['large', image]\"\n        alt=\"Galeria de anúncios\"\n      />\n    </picture>\n  </div>\n\n  <!-- Modal Caption (Image Text) -->\n  <div id=\"caption\">\n    <ion-fab-button\n      size=\"small\"\n      (click)=\"plusSlides(image, '-')\"\n      [disabled]=\"!isLightboxButton || image === 0\"\n      aria-disabled=\"\"\n      color=\"light\"\n      aria-label=\"Imagem anterior\"\n      title=\"Imagem anterior\"\n    >\n      <ion-icon name=\"chevron-back\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-button color=\"light\" size=\"small\" (click)=\"presentPopover($event)\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-popover #popover [isOpen]=\"isOpen\" (didDismiss)=\"isOpen = false\">\n      <ng-template>\n        <ion-content>\n          <ion-item\n            (click)=\"delete(image)\"\n            aria-label=\"Remover imagem da galeria de anúncios.\"\n            title=\"Remover imagem da galeria de anúncios.\"\n            button\n          >\n            <ion-label>Remover imagem</ion-label>\n            <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n          </ion-item>\n          <ion-item\n            [disabled]=\"!isLightboxButton\"\n            (click)=\"order(image)\"\n            aria-label=\"Imagem de perfil.\"\n            title=\"Imagem de perfil.\"\n            button\n          >\n            <ion-label>Imagem de perfil</ion-label>\n            <ion-icon slot=\"start\" name=\"reorder-four\"></ion-icon>\n          </ion-item>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n\n    <ion-fab-button\n      size=\"small\"\n      (click)=\"plusSlides(image, '+')\"\n      [disabled]=\"!isLightboxButton || image === endNext\"\n      color=\"light\"\n      aria-label=\"Proxima imagem\"\n      title=\"Proxima imagem\"\n    >\n      <ion-icon name=\"chevron-forward\"></ion-icon>\n    </ion-fab-button>\n  </div>\n</div>\n";

/***/ }),

/***/ 75286:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/list-item/list-item.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item-sliding [id]=\"index\" (ionDrag)=\"drag($event)\">\n    <ion-item [color]=\"index === action && 'danger'\">\n      <ion-label [title]=\"announcement.title\">{{\n        announcement.title | lnWords\n      }}</ion-label>\n      <ion-icon\n        slot=\"end\"\n        [name]=\"index === toggleIcon ? 'chevron-forward' : 'chevron-back'\"\n      ></ion-icon>\n    </ion-item>\n\n    <ion-item-options side=\"end\">\n      <!-- Buttons -->\n      <ion-item-option\n        *ngIf=\"!announcement?.deletedAt\"\n        color=\"danger\"\n        (click)=\"destroy(index, announcement)\"\n      >\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n      <!-- Drop -->\n      <ion-item-option\n        *ngIf=\"announcement?.deletedAt\"\n        color=\"danger\"\n        (click)=\"drop(index, announcement)\"\n      >\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n      <!-- Editar -->\n      <ion-item-option\n        *ngIf=\"!announcement?.deletedAt\"\n        expand=\"block\"\n        [routerLink]=\"[\n          '/painel-de-controle',\n          'anuncio',\n          'editar',\n          announcement.slug\n        ]\"\n        color=\"secondary\"\n      >\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"create\"\n          color=\"light\"\n          class=\"ion-margin-end\"\n        ></ion-icon>\n      </ion-item-option>\n      <!-- Restore -->\n      <ion-item-option\n        *ngIf=\"announcement?.deletedAt\"\n        color=\"success\"\n        (click)=\"toRestore(index, announcement)\"\n      >\n        <ion-icon\n          slot=\"icon-only\"\n          color=\"light\"\n          name=\"arrow-back-circle\"\n          class=\"ion-margin-end\"\n        ></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n";

/***/ }),

/***/ 34734:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/map/map.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-sliding [disabled]=\"user?.level === '2'\">\n  <ion-item\n    [title]=\"\n      user?.level === '2'\n        ? 'Cadastrar sua localização.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    [attr.data-message]=\"\n      user?.level === '2'\n        ? 'Cadastrar sua localização.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    lines=\"true\"\n    (click)=\"openForm()\"\n    [button]=\"user?.level === '2'\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-icon\n      slot=\"end\"\n      [name]=\"user?.level === '2' ? 'chevron-forward' : 'chevron-back'\"\n    ></ion-icon>\n    <ion-label\n      >Mapa\n      <ion-text [color]=\"announcement?.coordinate ? 'success' : 'danger'\">\n        *\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <ion-item-options *ngIf=\"user?.level === '1'\">\n    <ion-item-option\n      *ngIf=\"announcement?.coordinate\"\n      slot=\"end\"\n      color=\"danger\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      title=\"Exclui localização\"\n      data-message=\"Exclui localização\"\n      (click)=\"destroy()\"\n    >\n      <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n      delete\n    </ion-item-option>\n    <ion-item-option\n      slot=\"end\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      [title]=\"\n        announcement?.coordinate\n          ? 'Editar localização'\n          : 'Cadastrar localização'\n      \"\n      [attr.data-message]=\"\n        announcement?.coordinate\n          ? 'Editar localização'\n          : 'Cadastrar localização'\n      \"\n      (click)=\"openFormAdmin()\"\n    >\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n      {{ announcement?.coordinate ? \"editar\" : \"Cadastrar\" }}\n    </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n";

/***/ }),

/***/ 17754:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/filter/filter-menu.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-divider color=\"primary\">\n    <ion-label>Pesquizar por</ion-label>\n    <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('title')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Título</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'title')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item-divider color=\"primary\">\n    <ion-label>Ordenar por</ion-label>\n    <ion-icon slot=\"start\" name=\"reorder-four\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('title')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Títilo</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'title')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('state')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Status</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'state')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('blockade')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Bloqueados</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'blockade')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>Data</ion-label>\n    <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('createdAt')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Registros</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'createdAt')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('updatedAt')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Atualizações</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'updatedAt')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"close()\" detail=\"false\" lines=\"close\">\n    <ion-label>fechar</ion-label>\n    <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n  </ion-item>\n</ion-item-group>\n";

/***/ }),

/***/ 91037:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/search/search.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"dropdown\">\n        <ion-text color=\"medium\" class=\"ion-margin-start\">\n          <span *ngIf=\"triggerSearch$ | async; else Default\">\n            <small>{{ filterLabel }} </small>\n          </span>\n          <ng-template #Default>\n            <small>Pesquizar por nome</small>\n          </ng-template>\n        </ion-text>\n\n        <div class=\"search\">\n          <ion-searchbar\n            [color]=\"isDark ? 'medium' : 'none'\"\n            #searchbar\n            showClearButton=\"focus\"\n            [placeholder]=\"placeholder\"\n            inputmode=\"search\"\n            (ionChange)=\"research($event)\"\n            animated\n          >\n          </ion-searchbar>\n          <div>\n            <ion-fab-button\n              (click)=\"menuShow($event)\"\n              size=\"small\"\n              color=\"none\"\n              title=\"Filtro da pesquiza\"\n            >\n              <ion-icon name=\"filter\"></ion-icon>\n            </ion-fab-button>\n          </div>\n        </div>\n\n        <div\n          class=\"dropdown-content\"\n          *ngIf=\"search$ | async as list\"\n          [ngClass]=\"{ show: show }\"\n        >\n          <ion-list\n            class=\"list list-lg list-md list-sm list-xl\"\n            *ngIf=\"list.length > 0; else Else\"\n          >\n            <ion-item\n              button\n              detail\n              *ngFor=\"let item of list; last as Last\"\n              [lines]=\"Last ? 'none' : 'full'\"\n              (click)=\"sendUrl(item)\"\n            >\n              <ion-thumbnail slot=\"start\">\n                <img\n                  alt=\"Imagem do anúncio\"\n                  [src]=\"item?.image?.url || './../../../assets/thumbnail.svg'\"\n                />\n              </ion-thumbnail>\n              <ion-label>{{ item?.title }} </ion-label>\n            </ion-item>\n          </ion-list>\n\n          <ng-template #Else>\n            <ion-list class=\"list list-lg list-md list-sm list-xl\">\n              <ion-item lines=\"none\">\n                <ion-label>Não encontrado </ion-label>\n              </ion-item>\n            </ion-list>\n          </ng-template>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 96820:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/segment/segment.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row>\n  <ion-col size-xl=\"11\" size-lg=\"11\" size-sm=\"11\" size-md=\"11\" size-xs=\"11\">\n    <ion-segment [mode]=\"isAdmin && 'ios'\" color=\"dark\" value=\"enabled\">\n      <ion-segment-button title=\"Anúncios abilitados\" value=\"enabled\">\n        <ion-icon name=\"checkmark-done\"></ion-icon>\n        <ion-label [hidden]=\"isAdmin\">Abilitados</ion-label>\n      </ion-segment-button>\n      <ion-segment-button title=\"Anúncios excluidas\" value=\"deleted\">\n        <ion-icon name=\"trash\"></ion-icon>\n        <ion-label [hidden]=\"isAdmin\">Excluidos</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 31419:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/skeleton/skeleton.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row class=\"ion-margin-top\">\n  <ion-col\n    *ngFor=\"let item of sizeSkeleton\"\n    size-xl=\"4\"\n    size-lg=\"4\"\n    size-md=\"6\"\n    size-sm=\"6\"\n    size=\"12\"\n    class=\"ion-margin-bottom\"\n  >\n    <div class=\"skeleton\">\n      <ion-skeleton-text animated class=\"title\"></ion-skeleton-text>\n      <ion-skeleton-text animated class=\"category\"></ion-skeleton-text>\n      <div class=\"fab\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </div>\n      <div>\n        <ion-skeleton-text animated></ion-skeleton-text>\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 10139:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/form/form.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content>\n            <ion-text>\n              <ul>\n                <li>Aumente o número de visitantes no facebook.</li>\n                <li>Multiplique o número de seguidores no instagram.</li>\n              </ul>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <!-- <ion-col size=\"12\">\n        <ion-item detail=\"true\" (click)=\"facebook()\" button>\n          <ion-icon\n            class=\"facebook\"\n            size=\"large\"\n            color=\"primary\"\n            name=\"logo-facebook\"\n            slot=\"start\"\n          ></ion-icon>\n          <ion-label>Facebook</ion-label>\n        </ion-item>\n        <ion-item detail=\"true\" (click)=\"instagram()\" button>\n          <ion-icon\n            size=\"large\"\n            src=\"./../../../../../../../assets/ion-icon/logo-instagram.svg\"\n            slot=\"start\"\n          ></ion-icon>\n          <ion-label>Instagram</ion-label>\n        </ion-item>\n      </ion-col> -->\n    </ion-row>\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 95355:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/social-network/social-network.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-item\n  *ngIf=\"!(user?.level === '1'); else Else\"\n  [disabled]=\"!announcement?.categoryAnnouncement\"\n  detail=\"true\"\n  (click)=\"socialNetwork(announcement)\"\n  title=\"Gerenciar rede social.\"\n  aria-label=\"Gerenciar rede social.\"\n  [attr.aria-disabled]=\"\n    !announcement?.categoryAnnouncement &&\n    'Para gerenciar rede social cadastre uma categoria.'\n  \"\n  button\n>\n  <ion-icon\n    src=\"../../../../../../assets/ion-icon/socialNetwork.svg\"\n    slot=\"start\"\n  ></ion-icon>\n  <ion-label\n    >Rede social\n    <ion-text [color]=\"announcement?.socialNetwork ? 'success' : 'danger'\">\n      *\n    </ion-text>\n  </ion-label>\n</ion-item> -->\n\n<ion-item-sliding [disabled]=\"user?.level === '2'\">\n  <ion-item\n    [title]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de rede sociais.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    [attr.data-message]=\"\n      user?.level === '2'\n        ? 'Abrir formulario de rede sociais.'\n        : 'Pressione e arraste para a esquerda.'\n    \"\n    lines=\"true\"\n    (click)=\"openForm()\"\n    [button]=\"user?.level === '2'\"\n  >\n    <ion-icon\n      src=\"../../../../../../assets/ion-icon/socialNetwork.svg\"\n      slot=\"start\"\n    ></ion-icon>\n    <ion-icon\n      slot=\"end\"\n      [name]=\"user?.level === '2' ? 'chevron-forward' : 'chevron-back'\"\n    ></ion-icon>\n    <ion-label>\n      Rede Social\n      <ion-text [color]=\"announcement?.socialNetwork ? 'success' : 'danger'\">\n        *\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <ion-item-options *ngIf=\"user?.level === '1'\">\n    <ion-item-option\n      *ngIf=\"announcement?.socialNetwork\"\n      slot=\"end\"\n      color=\"danger\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      title=\"Exclui rede sociais\"\n      data-message=\"Exclui rede sociais\"\n      (click)=\"destroy()\"\n    >\n      <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n      delete\n    </ion-item-option>\n    <ion-item-option\n      slot=\"end\"\n      size=\"small\"\n      class=\"cursor-pointer\"\n      [title]=\"\n        announcement?.socialNetwork\n          ? 'Editar rede sociais'\n          : 'Cadastrar rede sociais'\n      \"\n      [attr.data-message]=\"\n        announcement?.socialNetwork\n          ? 'Editar rede sociais'\n          : 'Cadastrar rede sociais'\n      \"\n      (click)=\"openFormAdmin()\"\n    >\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n      {{ announcement?.socialNetwork ? \"editar\" : \"Cadastrar\" }}\n    </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n";

/***/ }),

/***/ 43581:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/state/state.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  [disabled]=\"\n    !announcement?.categoryAnnouncement ||\n    !announcement?.address ||\n    !announcement?.contact ||\n    !announcement?.citie\n  \"\n>\n  <ion-label>{{ announcement?.state ? \"Online\" : \"Offline\" }}</ion-label>\n  <ion-toggle\n    slot=\"end\"\n    (ionChange)=\"toggle()\"\n    [checked]=\"announcement?.state\"\n    title=\"Gerenciar status.\"\n    aria-label=\"Gerenciar status.\"\n    [attr.aria-disabled]=\"\n      !announcement?.categoryAnnouncement &&\n      'Para gerenciar status cadastre uma categoria.'\n    \"\n  >\n  </ion-toggle>\n  <ion-icon\n    slot=\"start\"\n    [name]=\"announcement?.state ? 'power' : 'radio-button-off'\"\n  ></ion-icon>\n</ion-item>\n";

/***/ }),

/***/ 75155:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/work-days/work-days.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"announcement && !day; else isForm\">\n  <ion-col size=\"12\">\n    <app-days-of-the-week\n      [announcement]=\"announcement\"\n      (eventDay)=\"setDay($event)\"\n      (route)=\"back($event)\"\n    ></app-days-of-the-week>\n  </ion-col>\n</ng-container>\n<ng-template #isForm>\n  <ion-col size=\"12\" *ngIf=\"announcement\">\n    <app-form-component\n      [dayOfTheWeek]=\"day\"\n      [announcement]=\"announcement\"\n      (route)=\"back($event)\"\n    ></app-form-component>\n  </ion-col>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_component_announcement_announcement-component_module_ts-src_a-c06dca.js.map