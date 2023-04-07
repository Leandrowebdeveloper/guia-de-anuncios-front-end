"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_auth_announcement_dashboard_module_ts"],{

/***/ 47591:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/dashboard-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/guard/private-autorization/private-autorization.guard */ 88322);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 15402);
/* harmony import */ var _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/resolve.guard */ 54403);
/* harmony import */ var _management_guard_announcement_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management/guard/announcement.guard */ 6766);







const routes = [{
  path: '',
  component: _dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage,
  resolve: {
    announcement: _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.AnnouncementResolve
  }
}, {
  path: ':slug',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  resolve: {
    announcement: _management_guard_announcement_guard__WEBPACK_IMPORTED_MODULE_3__.AnnouncementGuard
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_category-announcement_category-announcement_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_auth_announcement_management_announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management/announcement.module */ 88000)).then(m => m.AnnouncementPageModule)
}, {
  path: ':slug/dias-da-semana',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  resolve: {
    announcement: _management_guard_announcement_guard__WEBPACK_IMPORTED_MODULE_3__.AnnouncementGuard
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_category-announcement_category-announcement_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_auth_announcement_management_announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./management/announcement.module */ 88000)).then(m => m.AnnouncementPageModule)
}];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
  providers: [_management_guard_announcement_guard__WEBPACK_IMPORTED_MODULE_3__.AnnouncementGuard, _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.AnnouncementResolve]
})], DashboardPageRoutingModule);


/***/ }),

/***/ 44981:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/dashboard.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 47591);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 15402);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/address/address.pipe */ 66819);
/* harmony import */ var src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipe/workDays/workDays.pipe */ 48660);
/* harmony import */ var src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/dashboard/component/announcement/announcement-component.module */ 26694);













let DashboardPageModule = class DashboardPageModule {};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule, src_app_pages_dashboard_component_announcement_announcement_component_module__WEBPACK_IMPORTED_MODULE_7__.AnnouncementComponentsModule],
  declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage],
  providers: [src_app_pipe_address_address_pipe__WEBPACK_IMPORTED_MODULE_5__.AddressPipe, src_app_pipe_workDays_workDays_pipe__WEBPACK_IMPORTED_MODULE_6__.WorkDaysPipe]
})], DashboardPageModule);


/***/ }),

/***/ 15402:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/dashboard.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 94400);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 88210);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);







let DashboardPage = class DashboardPage {
  constructor(authService, activatedRoute) {
    this.authService = authService;
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.loadAnnouncement();
    this.loadUser();
  }
  loadUser() {
    if (this.authService.getUser) {
      this.user = this.authService.getUser;
    }
  }
  loadAnnouncement() {
    var _a, _b, _c;
    this.announcement$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)((_c = (_b = (_a = this.activatedRoute) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c['announcement']);
  }
};
DashboardPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardPage);


/***/ }),

/***/ 54403:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/guard/resolve.guard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementResolve": () => (/* binding */ AnnouncementResolve)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/service/auth-announcement.service */ 65866);






let AnnouncementResolve = class AnnouncementResolve {
  constructor(authAnnouncementService, authService) {
    this.authAnnouncementService = authAnnouncementService;
    this.authService = authService;
  }
  ngOnDestroy() {
    this.$userId.unsubscribe();
  }
  get userId() {
    return this._userId;
  }
  set userId(value) {
    this._userId = value;
  }
  resolve() {
    this.$userId = this.authService.userObservable.subscribe({
      next: user => {
        if (user === null || user === void 0 ? void 0 : user.id) {
          this.userId = user.id;
        }
      }
    });
    if (this.userId) {
      return this.authAnnouncementService.getAnnouncementFindOne({
        userId: this.userId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(item => item.map(data => {
        var _a, _b, _c;
        data.category = Object.assign(Object.assign({}, (_a = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _a === void 0 ? void 0 : _a.category), {
          associationId: (_b = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _b === void 0 ? void 0 : _b.id
        });
        data === null || data === void 0 ? true : delete data.categoryAnnouncement;
        (_c = data === null || data === void 0 ? void 0 : data.user) === null || _c === void 0 ? true : delete _c.plan;
        return data;
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.log(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      }));
    }
  }
};
AnnouncementResolve.ctorParameters = () => [{
  type: src_app_pages_dashboard_auth_announcement_service_auth_announcement_service__WEBPACK_IMPORTED_MODULE_1__.AuthAnnouncementService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
}];
AnnouncementResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], AnnouncementResolve);


/***/ }),

/***/ 6766:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/management/guard/announcement.guard.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementGuard": () => (/* binding */ AnnouncementGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);





let AnnouncementGuard = class AnnouncementGuard {
  constructor(managementAnnouncementService) {
    this.managementAnnouncementService = managementAnnouncementService;
  }
  resolve(route) {
    const {
      slug,
      acao
    } = route.params;
    if (slug && !acao) {
      return this.managementAnnouncementService.findOne(`requirement/management/`, {
        slug
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (data) {
          data.category = Object.assign({}, (_a = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _a === void 0 ? void 0 : _a.category);
          data.plan = Object.assign({}, (_c = (_b = data === null || data === void 0 ? void 0 : data.announcement) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.plan);
          data.authSocial = Object.assign({}, (_e = (_d = data === null || data === void 0 ? void 0 : data.announcement) === null || _d === void 0 ? void 0 : _d.user) === null || _e === void 0 ? void 0 : _e.authSocial);
          data === null || data === void 0 ? true : delete data.announcement;
          (_f = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _f === void 0 ? true : delete _f.catAdId;
          (_g = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _g === void 0 ? true : delete _g.category;
          (_h = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _h === void 0 ? true : delete _h.announcementId;
          (_j = data === null || data === void 0 ? void 0 : data.categoryAnnouncement) === null || _j === void 0 ? true : delete _j.message;
          this.managementAnnouncementService.setAnnouncement = data;
          // return data;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
        console.log(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
      }));
    }
  }
};
AnnouncementGuard.ctorParameters = () => [{
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_0__.ManagementAnnouncementService
}];
AnnouncementGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], AnnouncementGuard);


/***/ }),

/***/ 94400:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/auth/announcement/dashboard.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid *ngIf=\"announcement$ | async; let announcement\" fixed>\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let item of announcement\">\n        <!-- Anúncios -->\n        <app-card-announcement-component\n          [announcement]=\"item\"\n        ></app-card-announcement-component>\n      </ion-col>\n      <ion-col size=\"12\" [hidden]=\"!(announcement.length === 0)\">\n        <app-button-create-announcement\n          [isButton]=\"(announcement.length === 0)\"\n          [user]=\"user\"\n        ></app-button-create-announcement>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_auth_announcement_dashboard_module_ts.js.map