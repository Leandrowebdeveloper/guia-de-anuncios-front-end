(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_category-announcement_category-announcement_module_ts"],{

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

/***/ 92149:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/public/category-announcement/category-announcement-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementPageRoutingModule": () => (/* binding */ CategoryAnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _category_announcement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-announcement.page */ 94444);




const routes = [{
  path: '',
  component: _category_announcement_page__WEBPACK_IMPORTED_MODULE_0__.CategoryAnnouncementPage
}];
let CategoryAnnouncementPageRoutingModule = class CategoryAnnouncementPageRoutingModule {};
CategoryAnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CategoryAnnouncementPageRoutingModule);


/***/ }),

/***/ 81111:
/*!************************************************************************************!*\
  !*** ./src/app/pages/public/category-announcement/category-announcement.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementPageModule": () => (/* binding */ CategoryAnnouncementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var _category_announcement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-announcement-routing.module */ 92149);
/* harmony import */ var _category_announcement_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-announcement.page */ 94444);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/service.service */ 25244);
/* harmony import */ var _dashboard_administrator_announcement_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard/administrator/announcement/service/admin-announcement.service */ 64897);
/* harmony import */ var src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipe/address/address.pipe */ 66819);
/* harmony import */ var src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipe/workDays/workDays.pipe */ 48660);
/* harmony import */ var src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/module-dark/module-dark.service */ 22129);















let CategoryAnnouncementPageModule = class CategoryAnnouncementPageModule {};
CategoryAnnouncementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _category_announcement_routing_module__WEBPACK_IMPORTED_MODULE_3__.CategoryAnnouncementPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_0__.PipeModule],
  declarations: [_category_announcement_page__WEBPACK_IMPORTED_MODULE_4__.CategoryAnnouncementPage],
  providers: [_service_service_service__WEBPACK_IMPORTED_MODULE_5__.CategoryAnnouncementService, _dashboard_administrator_announcement_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_6__.AdminAnnouncementService, src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_7__.AddressPipe, src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_8__.WorkDaysPipe, src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_9__.ModuleDarkService]
})], CategoryAnnouncementPageModule);


/***/ }),

/***/ 94444:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/public/category-announcement/category-announcement.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementPage": () => (/* binding */ CategoryAnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-announcement.page.html?ngResource */ 65257);
/* harmony import */ var _category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-announcement.page.scss?ngResource */ 64567);
/* harmony import */ var _category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_pipe_allow_ad_allow_ad_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/allow-ad/allow-ad.pipe */ 97253);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service.service */ 25244);
/* harmony import */ var _home_services_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../home/services/home.service */ 70759);
/* harmony import */ var src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/module-dark/module-dark.service */ 22129);
















let CategoryAnnouncementPage = class CategoryAnnouncementPage {
  constructor(navCtrl, authService, route, homeService, categoryAnnouncementService, loadingService, messageService, helpService, allowAdPipe, moduleDarkService) {
    this.navCtrl = navCtrl;
    this.authService = authService;
    this.route = route;
    this.homeService = homeService;
    this.categoryAnnouncementService = categoryAnnouncementService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.helpService = helpService;
    this.allowAdPipe = allowAdPipe;
    this.moduleDarkService = moduleDarkService;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.endListCategory = true;
    this.fab = false;
    this.sizeSkeleton = [1, 2, 3, 4, 5, 6];
    this.limit = 12;
    this.offset = 0;
    this.page = 1;
  }
  ngOnDestroy() {
    this.$isModuleDark.unsubscribe();
  }
  ngOnInit() {
    this.findCategory();
    this.getIsBtnOrder();
    this.setAuth();
    this.setDarkValue();
    this.isDark();
  }
  back() {
    this.navCtrl.back();
  }
  /*********************************************************************************** */
  refresher(event) {
    this.findCategory();
    event.target.complete();
  }
  hideMenssage() {
    this.menssage = true;
  }
  /************************************************************************************ */
  orderList() {
    this.isOrder = !this.isOrder;
    // if (!this.isOrder) {
    //   this.sendOrder = false;
    // }
  }

  isSaveOrder(e) {
    if (!e) {
      this.isOrder = e;
    }
    this.sendOrder = e;
  }
  doReorder(ev) {
    if (ev) {
      this.sendOrder = true;
      this.announcement = ev.detail.complete(this.announcement);
    }
  }
  logScrolling(event) {
    if (event.detail.scrollTop > 500) {
      this.fab = true;
    } else {
      this.fab = false;
    }
  }
  saveOrder() {
    const loading = this.loadingService.show('Ordenar anúncios...');
    const result = this.announcement.map(item => item.id);
    if (result && result.length > 0 && this.authService.getCsrf) {
      const announcement = {
        order: result,
        _csrf: this.authService.getCsrf
      };
      this.$order = this.categoryAnnouncementService.order(announcement).subscribe({
        next: announcement_ => {
          setTimeout(() => {
            this.sendOrder = false;
            this.isOrder = false;
          }, 3500);
          (announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message) && this.messageService.success(announcement_ === null || announcement_ === void 0 ? void 0 : announcement_.message, loading, this.$order);
        },
        error: error => this.messageService.error(error, loading, this.$order)
      });
    }
  }
  findMoreCategory(event) {
    this.calculatePagination();
    const id = this.getId();
    if (id) {
      return this.$categoryAnnouncement = this.categoryAnnouncementService.findOne(`list`, {
        limit: this.limit,
        offset: this.offset,
        id
      }).subscribe({
        next: ({
          category,
          announcement
        }) => {
          const data = announcement.map(value => {
            var _a, _b, _c, _d, _e;
            if ((value === null || value === void 0 ? void 0 : value.plan) && ((_a = value === null || value === void 0 ? void 0 : value.user) === null || _a === void 0 ? void 0 : _a.plan) && ((_c = (_b = value === null || value === void 0 ? void 0 : value.announcement) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.email)) {
              value.plan = Object.assign({}, (_e = (_d = value === null || value === void 0 ? void 0 : value.announcement) === null || _d === void 0 ? void 0 : _d.user) === null || _e === void 0 ? void 0 : _e.plan);
              value.user = {
                email: value === null || value === void 0 ? void 0 : value.announcement.user.email
              };
              value === null || value === void 0 ? true : delete value.announcement;
              return value;
            }
          }).filter(val => {
            if (val && !this.allowAdPipe.transform(val)) {
              return val;
            }
            return null;
          });
          return this.success(event, data);
        },
        error: error => this.error.next(true),
        complete: () => this.helpService.delay(this.$categoryAnnouncement.unsubscribe(), 2000)
      });
    }
  }
  setDarkValue() {
    const is = this.moduleDarkService.isDark();
    if (is) return this.isModuleDark = true;
    return this.isModuleDark = false;
  }
  isDark() {
    this.$isModuleDark = this.moduleDarkService.toggleEvent().subscribe({
      next: isDark => this.isModuleDark = isDark
    });
  }
  findCategory() {
    const id = this.getId();
    if (id) {
      return this.findOne(id);
    }
  }
  getId() {
    if (this.homeService.getCategories && this.homeService.getCategories.length > 0) {
      const {
        slug
      } = this.route.snapshot.params;
      const i = this.homeService.getCategories.findIndex(item => (item === null || item === void 0 ? void 0 : item.slug) === slug);
      const id = this.homeService.getCategories[i].id;
      return id;
    }
  }
  findOne(id) {
    return this.categoryAnnouncement$ = this.categoryAnnouncementService.findOne(`list`, {
      limit: this.limit,
      offset: this.offset,
      id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(({
      category,
      announcement
    }) => {
      const data = announcement.map(value => {
        var _a, _b;
        if (value === null || value === void 0 ? void 0 : value.announcement) {
          value.plan = Object.assign({}, (_b = (_a = value === null || value === void 0 ? void 0 : value.announcement) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.plan);
          value.user = {
            email: value === null || value === void 0 ? void 0 : value.announcement.user.email
          };
          value === null || value === void 0 ? true : delete value.announcement;
          return value;
        }
      }).filter(val => {
        if (val && !this.allowAdPipe.transform(val)) {
          return val;
        }
      });
      this.category = category;
      this.announcement = data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
      this.error.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY;
    }));
  }
  calculatePagination() {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }
  success(event, announcement) {
    this.setMoreData(announcement);
    this.updateScrollEvent(event, announcement);
    return;
  }
  updateScrollEvent(event, announcement) {
    event.target.complete();
    if (announcement.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }
  setMoreData(announcement) {
    if (Array.isArray(announcement)) {
      return announcement.forEach(item => {
        if (item && typeof item !== undefined) {
          this.announcement && this.announcement.push(item);
        }
      });
    }
  }
  getIsBtnOrder() {
    if (this.authService.getUser) {
      this.isBtnOrder = this.authService.getUser.level === '1';
    }
  }
  setAuth() {
    if (this.authService.getUser) {
      this.isAuth = this.authService.getUser.auth;
    }
  }
};
CategoryAnnouncementPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: _home_services_home_service__WEBPACK_IMPORTED_MODULE_8__.HomeService
}, {
  type: _service_service_service__WEBPACK_IMPORTED_MODULE_7__.CategoryAnnouncementService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: src_app_pipe_allow_ad_allow_ad_pipe__WEBPACK_IMPORTED_MODULE_5__.AllowAdPipe
}, {
  type: src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_9__.ModuleDarkService
}];
CategoryAnnouncementPage.propDecorators = {
  reorderGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonReorderGroup]
  }]
};
CategoryAnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-announcement',
  template: _category_announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryAnnouncementPage);


/***/ }),

/***/ 25244:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/category-announcement/service/service.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementService": () => (/* binding */ CategoryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_announcement_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/announcement/service/admin-announcement.service */ 64897);






let CategoryAnnouncementService = class CategoryAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, adminAnnouncementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.adminAnnouncementService = adminAnnouncementService;
    this.setApi = `category`;
  }
  order(announcement) {
    return this.adminAnnouncementService.order(announcement);
  }
};
CategoryAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_announcement_service_admin_announcement_service__WEBPACK_IMPORTED_MODULE_2__.AdminAnnouncementService
}];
CategoryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], CategoryAnnouncementService);


/***/ }),

/***/ 78039:
/*!******************************************************!*\
  !*** ./src/app/utilities/loading/loading.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let LoadingService = class LoadingService {
  constructor(loadingController) {
    this.loadingController = loadingController;
  }
  show(message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const loading = this.loadingController.create({
        message,
        spinner: 'bubbles'
      });
      (yield loading).present();
      return loading;
    });
  }
};
LoadingService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})
/**
 * @class LoadingService
 */], LoadingService);


/***/ }),

/***/ 64567:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/public/category-announcement/category-announcement.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card-header.ios {\n  display: flex;\n  flex-flow: column-reverse;\n}\n\n.align-items {\n  display: flex;\n  align-items: center;\n}\n\nion-item {\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-card {\n  width: 100%;\n}\n@media only screen and (min-width: 992px) {\n  ion-card picture {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  ion-card picture img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\nion-card ion-card-content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.d-inline {\n  display: inline;\n}\n\n/* iOS places the subtitle above the title */\nion-card-header.ios {\n  display: flex;\n  flex-flow: column;\n}\n\n.d-flex {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n\n.header {\n  display: flex;\n}\n.header .icons {\n  width: 32px;\n  height: 32px;\n  border-radius: 50px;\n  margin-right: 16px;\n}\n.header .title {\n  max-width: 25%;\n  height: 32px;\n}\n\n.cards {\n  display: flex;\n}\n.cards div {\n  width: 100%;\n  display: flex;\n  margin-bottom: 16px;\n}\n@media only screen and (max-width: 992px) {\n  .cards {\n    justify-content: space-evenly;\n    flex-direction: column;\n  }\n}\n.cards .image {\n  max-width: 180px;\n  height: 70px;\n}\n@media only screen and (max-width: 992px) {\n  .cards .image {\n    min-width: 100%;\n    height: 280px;\n  }\n}\n.cards .item_cards {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 16px;\n}\n@media only screen and (max-width: 992px) {\n  .cards .item_cards {\n    width: 60%;\n  }\n}\n.cards .item_cards .title {\n  margin-top: 12px;\n  max-width: 250px;\n  height: 16px;\n}\n.cards .item_cards .address {\n  max-width: 140px;\n  height: 10px;\n}\n.cards .item_cards .address_2 {\n  margin-top: 12px;\n  max-width: 350px;\n  height: 10px;\n}\n.cards .item_cards_btn {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n@media only screen and (max-width: 992px) {\n  .cards .item_cards_btn {\n    width: 39.98%;\n  }\n}\n.cards .item_cards_btn .btn {\n  align-self: flex-start;\n  max-width: 100px;\n  height: 20px;\n  border-radius: 50px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/category-announcement/category-announcement.page.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,wBAAA;AACF;;AAEA;EACE,WAAA;AACF;AAAE;EACE;IACE,cAAA;IACA,WAAA;IACA,YAAA;EAEJ;EADI;IACE,cAAA;IACA,WAAA;IACA,YAAA;IACA,iBAAA;EAGN;AACF;AAAE;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;AAEJ;;AAEA;EACE,eAAA;AACF;;AAEA,4CAAA;AACA;EACE,aAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AAEJ;AAAE;EACE,cAAA;EACA,YAAA;AAEJ;;AAEA;EACE,aAAA;AACF;AAAE;EACE,WAAA;EACA,aAAA;EACA,mBAAA;AAEJ;AAAE;EAPF;IAQI,6BAAA;IACA,sBAAA;EAGF;AACF;AAFE;EACE,gBAAA;EACA,YAAA;AAIJ;AAHI;EAHF;IAII,eAAA;IACA,aAAA;EAMJ;AACF;AAJE;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;AAMJ;AALI;EALF;IAMI,UAAA;EAQJ;AACF;AAPI;EACE,gBAAA;EACA,gBAAA;EACA,YAAA;AASN;AAPI;EACE,gBAAA;EACA,YAAA;AASN;AAPI;EACE,gBAAA;EACA,gBAAA;EACA,YAAA;AASN;AANE;EACE,aAAA;EACA,WAAA;EACA,yBAAA;AAQJ;AAPI;EAJF;IAKI,aAAA;EAUJ;AACF;AATI;EAEE,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AAWN","sourcesContent":["ion-card-header.ios {\n  display: flex;\n  flex-flow: column-reverse;\n}\n\n.align-items {\n  display: flex;\n  align-items: center;\n}\n\nion-item {\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-card {\n  width: 100%;\n  @media only screen and (min-width: 992px) {\n    picture {\n      display: block;\n      width: 100%;\n      height: 100%;\n      img {\n        display: block;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n  ion-card-content {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n.d-inline {\n  display: inline;\n}\n\n/* iOS places the subtitle above the title */\nion-card-header.ios {\n  display: flex;\n  flex-flow: column;\n}\n\n.d-flex {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n\n.header {\n  display: flex;\n  .icons {\n    width: 32px;\n    height: 32px;\n    border-radius: 50px;\n    margin-right: 16px;\n  }\n  .title {\n    max-width: 25%;\n    height: 32px;\n  }\n}\n\n.cards {\n  display: flex;\n  div {\n    width: 100%;\n    display: flex;\n    margin-bottom: 16px;\n  }\n  @media only screen and (max-width: 992px) {\n    justify-content: space-evenly;\n    flex-direction: column;\n  }\n  .image {\n    max-width: 180px;\n    height: 70px;\n    @media only screen and (max-width: 992px) {\n      min-width: 100%;\n      height: 280px;\n    }\n  }\n  .item_cards {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-left: 16px;\n    @media only screen and (max-width: 992px) {\n      width: 60%;\n    }\n    .title {\n      margin-top: 12px;\n      max-width: 250px;\n      height: 16px;\n    }\n    .address {\n      max-width: 140px;\n      height: 10px;\n    }\n    .address_2 {\n      margin-top: 12px;\n      max-width: 350px;\n      height: 10px;\n    }\n  }\n  .item_cards_btn {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n    @media only screen and (max-width: 992px) {\n      width: 39.98%;\n    }\n    .btn {\n      -ms-flex-item-align: start;\n      align-self: flex-start;\n      max-width: 100px;\n      height: 20px;\n      border-radius: 50px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65257:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/public/category-announcement/category-announcement.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <ion-row *ngIf=\"categoryAnnouncement$ | async;else Error\">\n      <!-- Titulo da categoria  -->\n      <ion-col size=\"12\">\n        <ion-text class=\"d-flex\">\n          <ion-icon\n            class=\"ion-margin-end\"\n            size=\"large\"\n            [src]=\"category | announcementCategoryToggleIcon:isModuleDark\"\n          ></ion-icon>\n          <h1\n            [title]=\"category | attrTitle:'name'\"\n            [attr.data-message]=\"category | attrTitle:'name'\"\n            class=\"align-items\"\n          >\n            {{ category.name }}\n          </h1>\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"12\" *ngIf=\"announcement | isInfiniteScroll:0;else Empty\">\n        <!-- List item -->\n        <ion-list class=\"ion-no-padding\">\n          <ion-reorder-group\n            (ionItemReorder)=\"doReorder($event)\"\n            [disabled]=\"!isOrder\"\n          >\n            <ion-reorder *ngFor=\"let item of announcement\">\n              <ion-item\n                class=\"ion-no-padding\"\n                lines=\"none\"\n                detail=\"false\"\n                color=\"none\"\n              >\n                <ion-card>\n                  <ion-row>\n                    <!-- Image -->\n                    <ion-col\n                      size-xl=\"2\"\n                      size-lg=\"2\"\n                      size-md=\"12\"\n                      size-sm=\"12\"\n                      size=\"12\"\n                      class=\"ion-no-padding\"\n                      [hidden]=\"item?.galery?.length === 0\"\n                    >\n                      <picture\n                        class=\"cursor-pointer\"\n                        [routerLink]=\"['/pagina', item?.slug]\"\n                        *ngFor=\"let image of item?.galery\"\n                      >\n                        <source\n                          media=\"(max-width: 575.98px)\"\n                          [srcset]=\"'/images/galery/small/' + image?.filename\"\n                        />\n                        <source\n                          media=\"(max-width: 767.98px) and (min-width: 576px)\"\n                          [srcset]=\"'/images/galery/small/' + image?.filename\"\n                        />\n                        <source\n                          media=\"(max-width: 991.98px) and (min-width: 768px)\"\n                          [srcset]=\"'/images/galery/medium/' + image?.filename\"\n                        />\n                        <source\n                          media=\"(min-width: 992px)\"\n                          [srcset]=\"'/images/galery/x-small/' + image?.filename\"\n                        />\n                        <img\n                          [src]=\"'/images/galery/large/' + image?.filename\"\n                          [title]=\"item | attrTitle:'title'\"\n                          [attr.data-message]=\"item | attrTitle:'title'\"\n                          [alt]=\"'Imagem ' + item?.title\"\n                        />\n                      </picture>\n                    </ion-col>\n                    <!-- Dados do anúncio -->\n                    <ion-col\n                      size-xl=\"8\"\n                      size-lg=\"8\"\n                      size-md=\"8\"\n                      size-sm=\"8\"\n                      size=\"12\"\n                      class=\"ion-no-padding\"\n                    >\n                      <ion-card-header>\n                        <ion-card-title\n                          [title]=\"item?.title\"\n                          [attr.data-message]=\"item?.title\"\n                          >{{ item?.title | lnWords }}</ion-card-title\n                        >\n                        <ion-card-subtitle>\n                          <address\n                            [title]=\"item | attrTitle:'citie'\"\n                            [attr.data-message]=\"item | attrTitle:'citie'\"\n                          >\n                            {{ item?.citie | citie }}\n                          </address>\n                        </ion-card-subtitle>\n                        <ion-card-subtitle\n                          ><address\n                            [title]=\"item | attrTitle:'address'\"\n                            [attr.data-message]=\"item | attrTitle:'address'\"\n                          >\n                            {{ item?.address | address }}\n                          </address></ion-card-subtitle\n                        >\n                        <ion-card-subtitle [hidden]=\"!item?.workDays\">\n                          <ion-text\n                            [color]=\"\n                          (item?.workDays | workDays) === 'Aberto'\n                            ? 'success'\n                            : 'danger'\n                        \"\n                            class=\"ion-hide-xl-up ion-hide-lg-up\"\n                            [title]=\"item | attrTitle:'workDays'\"\n                            [attr.data-message]=\"item | attrTitle:'workDays'\"\n                          >\n                            {{ item?.workDays | workDays }}\n                          </ion-text>\n                        </ion-card-subtitle>\n                      </ion-card-header>\n                    </ion-col>\n                    <!-- Item com imagens -->\n                    <ion-col\n                      size-xl=\"2\"\n                      size-lg=\"2\"\n                      size-md=\"4\"\n                      size-sm=\"4\"\n                      size=\"12\"\n                      class=\"ion-no-padding\"\n                      [hidden]=\"item?.galery?.length === 0\"\n                    >\n                      <ion-card-content>\n                        <ion-text\n                          [color]=\"\n                        (item?.workDays | workDays) === 'Aberto'\n                          ? 'success'\n                          : 'danger'\n                      \"\n                          class=\"ion-text-center ion-hide-lg-down\"\n                        >\n                          <p\n                            [title]=\"item | attrTitle:'workDays'\"\n                            [attr.data-message]=\"item | attrTitle:'workDays'\"\n                          >\n                            {{ item?.workDays | workDays }}\n                          </p>\n                        </ion-text>\n                        <ion-button\n                          shape=\"round\"\n                          [routerLink]=\"['/pagina', item?.slug]\"\n                          [title]=\"item | attrTitle:'title'\"\n                          [attr.data-message]=\"item | attrTitle:'title'\"\n                        >\n                          Ver página\n                        </ion-button>\n                      </ion-card-content>\n                    </ion-col>\n                    <!-- Item sem imagens -->\n                    <ion-col\n                      size-xl=\"4\"\n                      size-lg=\"4\"\n                      size-md=\"4\"\n                      size-sm=\"4\"\n                      size=\"12\"\n                      class=\"ion-no-padding\"\n                      [hidden]=\"item?.galery?.length !== 0\"\n                    >\n                      <ion-card-content\n                        class=\"ion-float-xl-end ion-float-lg-end ion-float-md-end ion-float-sm-none ion-float-none\"\n                      >\n                        <ion-text\n                          [color]=\"\n                        (item?.workDays | workDays) === 'Aberto'\n                          ? 'success'\n                          : 'danger'\n                      \"\n                          class=\"ion-text-center ion-hide-lg-down\"\n                        >\n                          <p\n                            [hidden]=\"!item?.workDays\"\n                            [title]=\"item | attrTitle:'workDays'\"\n                            [attr.data-message]=\"item | attrTitle:'workDays'\"\n                          >\n                            {{ item?.workDays | workDays }}\n                          </p>\n                        </ion-text>\n                        <ion-button\n                          shape=\"round\"\n                          [routerLink]=\"['/pagina', item?.slug]\"\n                          [title]=\"item | attrTitle:'title'\"\n                          [attr.data-message]=\"item | attrTitle:'title'\"\n                        >\n                          Ver página\n                        </ion-button>\n                      </ion-card-content>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n                <ion-icon\n                  [hidden]=\"!isOrder\"\n                  name=\"reorder-three\"\n                  color=\"medium\"\n                ></ion-icon>\n              </ion-item>\n            </ion-reorder>\n          </ion-reorder-group>\n        </ion-list>\n      </ion-col>\n\n      <ng-template #Empty>\n        <ion-col size=\"12\">\n          <div class=\"content-center\" *ngIf=\"!isAuth\">\n            <ion-text class=\"ion-text-center\">\n              <p>Não á anúncios no momento.</p>\n            </ion-text>\n            <ion-button\n              [routerLink]=\"['/cadastrar']\"\n              title=\"Cadastrar anúncio\"\n              expand=\"block\"\n              shape=\"round\"\n            >\n              <ion-icon slot=\"icon-only\" color=\"light\" name=\"create\"></ion-icon>\n              Crie uma conta grátis.\n            </ion-button>\n          </div>\n\n          <div class=\"content-center\" *ngIf=\"isAuth\">\n            <ion-text class=\"ion-text-center\">\n              <p>Não á anúncios no momento.</p>\n            </ion-text>\n            <ion-button\n              (click)=\"back()\"\n              title=\"Voltar\"\n              expand=\"block\"\n              shape=\"round\"\n            >\n              <ion-icon\n                slot=\"icon-only\"\n                color=\"light\"\n                name=\"arrow-back-circle\"\n              ></ion-icon>\n              Voltar\n            </ion-button>\n          </div>\n        </ion-col>\n      </ng-template>\n\n      <ion-card *ngIf=\"!endListCategory\">\n        <ion-text color=\"primary\" class=\"ion-text-center\">\n          <p>FIM</p>\n          <p>\n            {{ (announcement | isAnnouncement) && announcement.length }}\n            Anúncios\n          </p>\n        </ion-text>\n      </ion-card>\n\n      <ion-infinite-scroll\n        *ngIf=\"announcement | isInfiniteScroll:11\"\n        (ionInfinite)=\"findMoreCategory($event)\"\n      >\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Carregando mais dados…\"\n        >\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-row>\n\n    <ng-template #Error>\n      <ng-container *ngIf=\"error | async; else loadingNoError\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"content-center\">\n              <div>\n                <ion-text class=\"ion-text-center\">\n                  <p [ngClass]=\"{ hide: menssage }\">\n                    Erro ao carregar anúncios.\n                  </p>\n                </ion-text>\n                <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n                  <ion-refresher-content\n                    pullingIcon=\"chevron-down-circle-outline\"\n                    pullingText=\"Puxe para baixo\"\n                    refreshingSpinner=\"circles\"\n                    refreshingText=\"Atualizar...\"\n                  >\n                  </ion-refresher-content>\n                </ion-refresher>\n                <ion-text class=\"ion-text-center\">\n                  <ion-button (mousedown)=\"hideMenssage()\"\n                    >Puxe para atualizar\n                    <ion-icon\n                      class=\"ion-margin-start\"\n                      name=\"arrow-down-circle\"\n                    ></ion-icon>\n                  </ion-button>\n                </ion-text>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n\n      <ng-template #loadingNoError>\n        <ion-row class=\"ion-margin-horizontal\">\n          <ion-col size=\"12\" class=\"ion-margin-vertical\">\n            <span class=\"header\">\n              <ion-skeleton-text animated class=\"icons\"></ion-skeleton-text>\n              <ion-skeleton-text animated class=\"title\"></ion-skeleton-text>\n            </span>\n          </ion-col>\n          <ion-col size=\"12\">\n            <span *ngFor=\"let item of sizeSkeleton\">\n              <div class=\"cards\">\n                <ion-skeleton-text animated class=\"image\"></ion-skeleton-text>\n                <div>\n                  <div class=\"item_cards\">\n                    <ion-skeleton-text\n                      animated\n                      class=\"title\"\n                    ></ion-skeleton-text>\n                    <ion-skeleton-text\n                      animated\n                      class=\"address\"\n                    ></ion-skeleton-text>\n                    <ion-skeleton-text\n                      animated\n                      class=\"address_2\"\n                    ></ion-skeleton-text>\n                  </div>\n                  <div class=\"item_cards_btn\">\n                    <ion-skeleton-text animated class=\"btn\"></ion-skeleton-text>\n                  </div>\n                </div>\n              </div>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ng-template>\n    </ng-template>\n\n    <!-- Salvar ordenação -->\n    <ion-fab\n      vertical=\"bottom\"\n      horizontal=\"center\"\n      slot=\"fixed\"\n      title=\"Salvar ordem da lista de anúncios\"\n      data-message=\"Salvar ordem da lista de anúncios\"\n    >\n      <ion-fab-button\n        [hidden]=\"!sendOrder\"\n        color=\"primary\"\n        (click)=\"saveOrder()\"\n        ><ion-icon name=\"save\" color=\"light\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <!-- Ordenar -->\n    <ion-fab\n      *ngIf=\"isBtnOrder && error\"\n      vertical=\"center\"\n      horizontal=\"end\"\n      slot=\"fixed\"\n      title=\"Ordenar anúncios\"\n      data-message=\"Ordenar categoria\"\n    >\n      <ion-fab-button size=\"small\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-fab-button\n          color=\"primary\"\n          title=\"Ordenar categorias\"\n          data-message=\"Ordenar categorias\"\n          (click)=\"orderList()\"\n        >\n          <ion-icon name=\"reorder-four\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_category-announcement_category-announcement_module_ts.js.map