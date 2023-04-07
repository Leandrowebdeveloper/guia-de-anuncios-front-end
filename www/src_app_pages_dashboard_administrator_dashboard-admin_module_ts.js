(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_administrator_dashboard-admin_module_ts"],{

/***/ 51854:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/management/guard/resolve.guard.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryManagementResolver": () => (/* binding */ CategoryManagementResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/category.service */ 97150);






let CategoryManagementResolver = class CategoryManagementResolver {
  constructor(router, categoryService) {
    this.router = router;
    this.categoryService = categoryService;
  }
  resolve(route) {
    const {
      id
    } = route.params;
    return this.categoryService.requirement(`management/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      this.router.navigate(['/erro']);
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }));
  }
};
CategoryManagementResolver.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService
}];
CategoryManagementResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], CategoryManagementResolver);


/***/ }),

/***/ 44588:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/dashboard-admin-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAdminPageRoutingModule": () => (/* binding */ DashboardAdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/guard/private-autorization/private-autorization.guard */ 88322);
/* harmony import */ var _categoryAnnouncement_management_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryAnnouncement/management/guard/resolve.guard */ 51854);
/* harmony import */ var _auth_user_change_email_guard_change_email_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/user/change-email/guard/change-email.guard */ 42508);
/* harmony import */ var _dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-admin.page */ 44362);
/* harmony import */ var _users_management_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/management/guard/resolve.guard */ 78206);








const routes = [{
  path: '',
  component: _dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__.DashboardPage
}, {
  path: 'usuario/:id/alterar-email/:token',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_auth_user_change-email_change-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/dashboard/auth/user/change-email/change-email.module */ 28954)).then(m => m.ChangeEmailPageModule),
  resolve: {
    changeEmail: _auth_user_change_email_guard_change_email_guard__WEBPACK_IMPORTED_MODULE_2__.ChangeEmailResolver
  }
}, {
  path: 'usuario',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_header-modal_header-modal_module_ts-src_app_services_image_image_service_t-cc5ba61")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/dashboard/auth/user/management.module */ 32787)).then(m => m.UserPageModule)
}, {
  path: 'usuarios',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_header-modal_header-modal_module_ts-src_app_pages_dashboard_administrator_-672ace")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 46948)).then(m => m.UsersPageModule)
}, {
  path: 'usuario/:id',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_announcement-component_module_ts-src_a-c06dca"), __webpack_require__.e("default-src_app_pages_dashboard_auth_announcement_pages_enabled-item_enabled-item_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_administrator_users_management_management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/management/management.module */ 6650)).then(m => m.ManagementPageModule),
  resolve: {
    user: _users_management_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_4__.UserManagementResolver
  }
}, {
  path: 'anuncios',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_announcement-component_module_ts-src_a-c06dca"), __webpack_require__.e("default-src_app_pages_dashboard_auth_announcement_pages_enabled-item_enabled-item_module_ts"), __webpack_require__.e("src_app_pages_dashboard_administrator_announcement_announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./announcement/announcement.module */ 19782)).then(m => m.AdminAnnouncementPageModule)
}, {
  path: 'anuncio/:id',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_user_user-component_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_announcement-component_module_ts-src_a-c06dca"), __webpack_require__.e("default-src_app_pages_dashboard_auth_announcement_pages_enabled-item_enabled-item_module_ts"), __webpack_require__.e("src_app_pages_dashboard_administrator_announcement_announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./announcement/announcement.module */ 19782)).then(m => m.AdminAnnouncementPageModule)
}, {
  path: 'categorias',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_category-announcement_category-announcement_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_administrator_categoryAnnouncement_form_form_module_ts-src_ap-2bb023"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_administrator_categoryAnnouncement_category-announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categoryAnnouncement/category-announcement.module */ 80621)).then(m => m.CategoryAnnouncementPageModule)
}, {
  path: 'categoria/:id',
  canActivate: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [src_app_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_category-announcement_category-announcement_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_administrator_categoryAnnouncement_form_form_module_ts-src_ap-2bb023"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_administrator_categoryAnnouncement_management_management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categoryAnnouncement/management/management.module */ 1682)).then(m => m.ManagementPageModule),
  resolve: {
    category: _categoryAnnouncement_management_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_1__.CategoryManagementResolver
  }
}];
let DashboardAdminPageRoutingModule = class DashboardAdminPageRoutingModule {};
DashboardAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
  providers: [_auth_user_change_email_guard_change_email_guard__WEBPACK_IMPORTED_MODULE_2__.ChangeEmailResolver, _users_management_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_4__.UserManagementResolver, _categoryAnnouncement_management_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_1__.CategoryManagementResolver]
})], DashboardAdminPageRoutingModule);


/***/ }),

/***/ 70603:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/dashboard-admin.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAdminPageModule": () => (/* binding */ DashboardAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-admin-routing.module */ 44588);
/* harmony import */ var _dashboard_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-admin.page */ 44362);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);









let DashboardAdminPageModule = class DashboardAdminPageModule {};
DashboardAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAdminPageRoutingModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule],
  declarations: [_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
})], DashboardAdminPageModule);


/***/ }),

/***/ 44362:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/dashboard-admin.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-admin.page.html?ngResource */ 87294);
/* harmony import */ var _dashboard_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-admin.page.scss?ngResource */ 95361);
/* harmony import */ var _dashboard_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);






let DashboardPage = class DashboardPage {
  constructor(route, authService) {
    this.route = route;
    this.authService = authService;
    this.nav = [{
      name: 'Usuários',
      title: 'Manutenção do usuários.',
      router: ['/painel-de-controle/admin', 'usuarios'],
      icon: 'people'
    }, {
      name: 'Categorias',
      title: 'Manutenção de categorias.',
      router: ['/painel-de-controle/admin', 'categorias'],
      icon: 'list'
    }, {
      name: 'Anúncios',
      title: 'Manutenção do anúncios.',
      router: ['/painel-de-controle/admin', 'anuncios'],
      icon: 'megaphone'
    }];
  }
  ngOnInit() {
    this.isLevelAdmin();
  }
  isLevelAdmin() {
    if (this.authService.getLevel === '2') {
      this.route.navigate(['/painel-de-controle']);
    }
  }
};
DashboardPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-dashboard-admin',
  template: _dashboard_admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardPage);


/***/ }),

/***/ 78206:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/management/guard/resolve.guard.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementResolver": () => (/* binding */ UserManagementResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _services_admin_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin-users.service */ 99611);






let UserManagementResolver = class UserManagementResolver {
  constructor(router, usersService) {
    this.router = router;
    this.usersService = usersService;
  }
  resolve(route) {
    const {
      id
    } = route.params;
    return this.usersService.requirement(`management/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(user => user.password = ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.router.navigate(['/erro']);
      return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
    }));
  }
};
UserManagementResolver.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _services_admin_users_service__WEBPACK_IMPORTED_MODULE_0__.AdminUsersService
}];
UserManagementResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], UserManagementResolver);


/***/ }),

/***/ 95361:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/dashboard-admin.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-card ion-card-title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-card ion-card-title ion-icon {\n  font-size: 36px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/dashboard-admin.page.scss"],"names":[],"mappings":"AACA;EACE,aAAA;EAAe,sBAAA;EAAwB,mBAAA;AAEzC;AADE;EACI,aAAA;EAAe,sBAAA;EAAwB,mBAAA;AAK7C;AAJM;EACI,eAAA;AAMV","sourcesContent":["\nion-card {\n  display: flex; flex-direction: column; align-items: center;\n  ion-card-title {\n      display: flex; flex-direction: column; align-items: center;\n      ion-icon{\n          font-size: 36px;\n      }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87294:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/dashboard-admin.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-grid fixed>\n\n        <ion-grid class=\"grid\">\n            <ion-row>\n\n                <ion-col *ngFor=\"let item of nav\" size-xl=\"4\" size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size=\"12\">\n                    <ion-card [title]=\"item?.title\">\n                        <ion-card-header>\n                            <ion-card-title color=\"light\">\n                                <ion-icon color=\"medium\" [name]=\"item?.icon\"></ion-icon> <span>{{ item?.name }}</span>\n                            </ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-button color=\"medium\" [routerLink]=\"item?.router\" expand=\"block\"\n                                routerDirection=\"forward\" fill=\"outline\" size=\"small\" slot=\"end\"><ion-icon name=\"chevron-forward\"></ion-icon>\n                            </ion-button>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n\n    </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_administrator_dashboard-admin_module_ts.js.map