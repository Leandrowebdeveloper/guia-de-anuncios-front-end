(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3"],{

/***/ 63242:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/announcement/map/service/map.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoordinateAnnouncementService": () => (/* binding */ CoordinateAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);
/* harmony import */ var src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/alert/alert.service */ 11395);








let CoordinateAnnouncementService = class CoordinateAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
  constructor(http, storageService, messageService, managementService, alertService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.messageService = messageService;
    this.managementService = managementService;
    this.alertService = alertService;
    this.setApi = `coordinate`;
  }
  set setCoordinate(coordinate) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.coordinate = coordinate;
      this.managementService.setAnnouncement = this.managementService.getAnnouncement;
    }
  }
  coordinate(coordinate) {
    if (coordinate === null || coordinate === void 0 ? void 0 : coordinate.id) {
      return this.patch(coordinate);
    }
    return this.create(coordinate);
  }
  getCoordinate() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      return yield new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => resolve(position), error => resolve(error));
        } else {
          reject(new Error('A geolocalização não é suportada por este navegador.'));
        }
      });
    });
  }
  showError(error) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.alertService.alert('Ateção', 'O usuário negou a solicitação de geolocalização.');
          break;
        case error.POSITION_UNAVAILABLE:
          this.alertService.alert('Ateção', 'As informações de localização não estão disponíveis.');
          break;
        case error.TIMEOUT:
          this.alertService.alert('Ateção', 'A solicitação para obter a localização do usuário expirou.');
          break;
        default:
          this.alertService.alert('Ateção', 'Ocorreu um erro desconhecido.');
          break;
      }
    });
  }
  delete(coordinate) {
    return this.destroy(coordinate);
  }
};
CoordinateAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__.ManagementAnnouncementService
}, {
  type: src_app_utilities_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
}];
CoordinateAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], CoordinateAnnouncementService);


/***/ }),

/***/ 61849:
/*!**************************************************************************!*\
  !*** ./src/app/pages/public/components/announcement-component.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAnnouncementComponentModule": () => (/* binding */ ShowAnnouncementComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _show_contact_show_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-contact/show-contact.component */ 4925);
/* harmony import */ var _show_social_network_show_social_network_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-social-network/show-social-network.component */ 29225);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _segment_segment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segment/segment.component */ 56695);








let ShowAnnouncementComponentModule = class ShowAnnouncementComponentModule {};
ShowAnnouncementComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_show_contact_show_contact_component__WEBPACK_IMPORTED_MODULE_0__.ShowContactComponent, _show_social_network_show_social_network_component__WEBPACK_IMPORTED_MODULE_1__.ShowSocialNetWorkComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_3__.SegmentComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule],
  exports: [_show_contact_show_contact_component__WEBPACK_IMPORTED_MODULE_0__.ShowContactComponent, _show_social_network_show_social_network_component__WEBPACK_IMPORTED_MODULE_1__.ShowSocialNetWorkComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_3__.SegmentComponent]
})], ShowAnnouncementComponentModule);


/***/ }),

/***/ 56695:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/components/segment/segment.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentComponent": () => (/* binding */ SegmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment.component.html?ngResource */ 98569);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment.component.scss?ngResource */ 20525);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 58921);
/* harmony import */ var ts_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-clipboard */ 23145);
/* harmony import */ var src_app_utilities_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/toast/toast.service */ 39524);







let SegmentComponent = class SegmentComponent {
  constructor(toastService) {
    this.toastService = toastService;
  }
  ngOnInit() {
    this.canShare();
  }
  setLike() {}
  share(announcement) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      try {
        if (this.isSupportShare) {
          yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
            title: `Site ${announcement === null || announcement === void 0 ? void 0 : announcement.title}`,
            text: `O link a baixo para o site ${announcement === null || announcement === void 0 ? void 0 : announcement.title}`,
            url: location === null || location === void 0 ? void 0 : location.href,
            dialogTitle: 'Compartilhar página.'
          });
        }
      } catch (error) {}
    });
  }
  clipboard() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      const url = location === null || location === void 0 ? void 0 : location.href;
      try {
        ts_clipboard__WEBPACK_IMPORTED_MODULE_3__.Clipboard.copy(url);
        (yield this.toastService.show('Link copiado.', 'bottom', 'thumbs-up', 1000)).present();
      } catch (error) {}
    });
  }
  canShare() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      const {
        value
      } = yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.canShare();
      return this.isSupportShare = value;
    });
  }
};
SegmentComponent.ctorParameters = () => [{
  type: src_app_utilities_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}];
SegmentComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
SegmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-segment-component',
  template: _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentComponent);


/***/ }),

/***/ 4925:
/*!********************************************************************************!*\
  !*** ./src/app/pages/public/components/show-contact/show-contact.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowContactComponent": () => (/* binding */ ShowContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _show_contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-contact.component.html?ngResource */ 65323);
/* harmony import */ var _show_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-contact.component.scss?ngResource */ 67433);
/* harmony import */ var _show_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_show_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 18313);





let ShowContactComponent = class ShowContactComponent {
  constructor() {}
  ngOnInit() {}
  send(e, contacts) {
    var _a, _b, _c, _d;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      e.preventDefault();
      if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.user) && ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.contact)) {
        const {
          whatsapp,
          phone,
          mobilePhone
        } = (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.contact;
        const {
          email
        } = (_d = this.announcement) === null || _d === void 0 ? void 0 : _d.user;
        switch (contacts) {
          case 'whatsapp':
            return yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
              url: `https://api.whatsapp.com/send?phone=55${whatsapp}`,
              windowName: '_blank'
            });
          case 'phone':
            return yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
              url: `tel:+${phone}`,
              windowName: '_top'
            });
          case 'mobilePhone':
            return yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
              url: `tel:+${mobilePhone}`,
              windowName: '_top'
            });
          case 'email':
            return yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
              url: `mailto:${email}`,
              windowName: '_top'
            });
        }
      }
    });
  }
};
ShowContactComponent.ctorParameters = () => [];
ShowContactComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
ShowContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-show-contact-announcement-component',
  template: _show_contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_show_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ShowContactComponent);


/***/ }),

/***/ 29225:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/public/components/show-social-network/show-social-network.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowSocialNetWorkComponent": () => (/* binding */ ShowSocialNetWorkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _show_social_network_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-social-network.component.html?ngResource */ 33523);
/* harmony import */ var _show_social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-social-network.component.scss?ngResource */ 41383);
/* harmony import */ var _show_social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_show_social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 18313);





let ShowSocialNetWorkComponent = class ShowSocialNetWorkComponent {
  send(e, socialNetwork) {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      e.preventDefault();
      if (this.announcement && ((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.socialNetwork)) {
        const {
          facebook,
          instagran
        } = (_b = this.announcement) === null || _b === void 0 ? void 0 : _b.socialNetwork;
        if (socialNetwork === 'facebook') {
          return yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
            url: facebook
          });
        }
        if (socialNetwork === 'instagram') {
          return yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
            url: instagran
          });
        }
      }
    });
  }
};
ShowSocialNetWorkComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
ShowSocialNetWorkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-show-social-network-announcement-component',
  template: _show_social_network_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_show_social_network_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ShowSocialNetWorkComponent);


/***/ }),

/***/ 74687:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 18313:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 74687);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 86998)).then(m => new m.BrowserWeb())
});



/***/ }),

/***/ 48470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 58921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 48470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 83656)).then(m => new m.ShareWeb())
});



/***/ }),

/***/ 23145:
/*!***************************************************!*\
  !*** ./node_modules/ts-clipboard/ts-clipboard.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// greg hedin
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Clipboard = /** @class */function () {
  function Clipboard() {}
  Clipboard.init = function () {
    window.addEventListener('copy', function (e) {
      if (Clipboard._data) {
        e.clipboardData.setData('text/plain', Clipboard._data);
        e.preventDefault(); // this disables 'ctrl + c'
        Clipboard._data = null;
      }
    });
  };
  Clipboard._data = null;
  // MSIE boolean
  Clipboard.POS = !!window['clipboardData'];
  Clipboard.copy = function (data) {
    Clipboard._data = data;
    if (!Clipboard.POS) {
      document.execCommand('copy');
    }
    //  POS browsers
    else if (!!window['clipboardData']) {
      window['clipboardData'].setData('Text', Clipboard._data);
      Clipboard._data = null;
    }
  };
  return Clipboard;
}();
exports.Clipboard = Clipboard;
Clipboard.init();

/***/ }),

/***/ 20525:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/components/segment/segment.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67433:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/public/components/show-contact/show-contact.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "a {\n  text-decoration: none;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/components/show-contact/show-contact.component.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;AACF;;AACA;EACE,aAAA;EACA,uBAAA;AAEF","sourcesContent":["a {\n  text-decoration: none;\n}\n.center {\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41383:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/public/components/show-social-network/show-social-network.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "a {\n  text-decoration: none;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n}\n\nion-fab-button.instagram {\n  --background: radial-gradient(\n    circle at 30% 107%,\n    #fdf497 0%,\n    #fdf497 5%,\n    #fd5949 45%,\n    #d6249f 60%,\n    #285aeb 90%\n  );\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\nion-fab-button .facebook {\n  --background: #3b5998;\n}\n\nion-icon {\n  --background: #f3f3f3;\n  --color: #f3f3f3;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/components/show-social-network/show-social-network.component.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;AACF;;AACA;EACE,aAAA;EACA,uBAAA;AAEF;;AAEE;EACE;;;;;;;GAAA;EAQA,6BAAA;EACA,qBAAA;EACA,oCAAA;AACJ;AACE;EACE,qBAAA;AACJ;;AAGA;EACE,qBAAA;EACA,gBAAA;AAAF","sourcesContent":["a {\n  text-decoration: none;\n}\n.center {\n  display: flex;\n  justify-content: center;\n}\n\nion-fab-button {\n  &.instagram {\n    --background: radial-gradient(\n      circle at 30% 107%,\n      #fdf497 0%,\n      #fdf497 5%,\n      #fd5949 45%,\n      #d6249f 60%,\n      #285aeb 90%\n    );\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  .facebook {\n    --background: #3b5998;\n  }\n}\n\nion-icon {\n  --background: #f3f3f3;\n  --color: #f3f3f3;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98569:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/components/segment/segment.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-segment [scrollable]=\"true\" mode=\"md\" color=\"none\">\n  <!-- LIKE GOSTEI -->\n  <ion-segment-button layout=\"icon-top\" title=\"Gostei\" data-message=\"Gostei\">\n    <ion-icon name=\"thumbs-up\"></ion-icon>\n    <ion-label>123</ion-label>\n  </ion-segment-button>\n\n  <!-- LIKE NÃO GOSTEI -->\n  <ion-segment-button\n    layout=\"icon-top\"\n    title=\"Não gostei\"\n    data-message=\"Não gostei\"\n  >\n    <ion-icon name=\"thumbs-down\"></ion-icon>\n    <ion-label>32</ion-label>\n  </ion-segment-button>\n\n  <!-- COPY -->\n  <ion-segment-button\n    layout=\"icon-top\"\n    title=\"Copiar link da página\"\n    data-message=\"Copiar link da página\"\n    (click)=\"clipboard()\"\n  >\n    <ion-icon name=\"copy\"></ion-icon>\n    <ion-label>Link</ion-label>\n  </ion-segment-button>\n\n  <!-- COMPARTILHAR PÁGINA -->\n  <ion-segment-button\n    [hidden]=\"!isSupportShare\"\n    layout=\"icon-top\"\n    title=\"Compartilhar página\"\n    data-message=\"Compartilhar página\"\n    (click)=\"share(announcement)\"\n  >\n    <ion-icon name=\"share-social\"></ion-icon>\n    <ion-label>Compartilhar</ion-label>\n  </ion-segment-button>\n</ion-segment>\n";

/***/ }),

/***/ 65323:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/public/components/show-contact/show-contact.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row class=\"ion-justify-content-evenly\">\n  <ion-col\n    size=\"auto\"\n    class=\"center\"\n    [hidden]=\"!(announcement | isAttrContact : 'whatsapp')\"\n  >\n    <a\n      [href]=\"\n        announcement\n          | announcementContactValues\n            : 'whatsapp'\n            : 'https://api.whatsapp.com/send?phone=55'\n      \"\n      rel=\"noopener noreferrer\"\n      [title]=\"\n        announcement\n          | contactAttrValuesMask\n            : 'whatsapp'\n            : 'Envie uma menssagem para whatsapp'\n      \"\n      [attr.data-message]=\"\n        announcement\n          | contactAttrValuesMask\n            : 'whatsapp'\n            : 'Envie uma menssagem para whatsapp'\n      \"\n      (click)=\"send($event, 'whatsapp')\"\n    >\n      <ion-fab-button size=\"small\" color=\"success\">\n        <ion-icon color=\"light\" name=\"logo-whatsapp\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-col>\n  <ion-col\n    size=\"auto\"\n    class=\"center\"\n    [hidden]=\"!(announcement | isAttrContact : 'phone')\"\n  >\n    <a\n      [href]=\"announcement | announcementContactValues : 'phone' : 'tel:'\"\n      [title]=\"\n        announcement\n          | contactAttrValuesMask : 'phone' : 'Ligue para o telefone comercial'\n      \"\n      [attr.data-message]=\"\n        announcement\n          | contactAttrValuesMask : 'phone' : 'Ligue para o telefone comercial'\n      \"\n      (click)=\"send($event, 'phone')\"\n    >\n      <ion-fab-button size=\"small\" color=\"secondary\">\n        <ion-icon color=\"light\" name=\"call\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-col>\n  <ion-col\n    size=\"auto\"\n    class=\"center\"\n    [hidden]=\"!(announcement | isAttrContact : 'mobilePhone')\"\n  >\n    <a\n      [href]=\"announcement | announcementContactValues : 'mobilePhone' : 'tel:'\"\n      [title]=\"\n        announcement\n          | contactAttrValuesMask\n            : 'mobilePhone'\n            : 'Ligue para o telefone celular'\n      \"\n      [attr.data-message]=\"\n        announcement\n          | contactAttrValuesMask\n            : 'mobilePhone'\n            : 'Ligue para o telefone celular'\n      \"\n      (click)=\"send($event, 'mobilePhone')\"\n    >\n      <ion-fab-button size=\"small\" color=\"tertiary\">\n        <ion-icon color=\"light\" name=\"phone-portrait\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-col>\n\n  <ion-col\n    size=\"auto\"\n    class=\"center\"\n    [hidden]=\"!(announcement | isAttrAnnouncementUser : 'email')\"\n  >\n    <a\n      [href]=\"announcement | announcementUserValues : 'email' : 'mailto:'\"\n      [title]=\"\n        announcement | announcementUserValues : 'email' : 'Envie um email:'\n      \"\n      [attr.data-message]=\"\n        announcement | announcementUserValues : 'email' : 'Envie um email:'\n      \"\n      (click)=\"send($event, 'email')\"\n    >\n      <ion-fab-button size=\"small\" color=\"tertiary\">\n        <ion-icon color=\"light\" name=\"mail\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 33523:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/public/components/show-social-network/show-social-network.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row\n  class=\"ion-justify-content-evenly\"\n  *ngIf=\"announcement | isSocialNetworks\"\n>\n  <ion-col\n    size=\"auto\"\n    class=\"center\"\n    [hidden]=\"!announcement | announcementSocialNetworkValues : 'facebook'\"\n  >\n    <a\n      [href]=\"announcement | announcementSocialNetworkValues : 'facebook'\"\n      rel=\"noopener noreferrer\"\n      title=\"Clique para acessar a página do facebook.\"\n      data-message=\"Clique para acessar a página do facebook.\"\n      (click)=\"send($event, 'facebook')\"\n    >\n      <ion-fab-button size=\"small\" class=\"facebook\">\n        <ion-icon color=\"light\" name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-col>\n  <ion-col\n    size=\"auto\"\n    class=\"center\"\n    [hidden]=\"!announcement | announcementSocialNetworkValues : 'instagran'\"\n  >\n    <a\n      [href]=\"announcement | announcementSocialNetworkValues : 'instagran'\"\n      title=\"Clique para acessar a página do instagram.\"\n      data-message=\"Clique para acessar a página do instagram.\"\n      (click)=\"send($event, 'instagram')\"\n    >\n      <ion-fab-button size=\"small\" class=\"instagram\">\n        <ion-icon color=\"light\" name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>\n    </a>\n  </ion-col>\n</ion-row>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3.js.map