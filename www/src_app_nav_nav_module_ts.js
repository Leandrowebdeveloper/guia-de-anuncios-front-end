"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nav_nav_module_ts"],{

/***/ 10287:
/*!*******************************************!*\
  !*** ./src/app/nav/nav-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponentRoutingModule": () => (/* binding */ NavComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/guard/private-autorization/private-autorization.guard */ 88322);
/* harmony import */ var _services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/guard/public-autorization/public-autorization.guard */ 61069);





const routes = [{
  path: 'inicio',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("src_app_pages_public_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/home/home.module */ 71514)).then(m => m.HomePageModule)
}, {
  path: 'categoria/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("src_app_pages_public_category-announcement_category-announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/category-announcement/category-announcement.module */ 81111)).then(m => m.CategoryAnnouncementPageModule)
}, {
  path: 'erro',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("src_app_pages_public_not-found_not-found_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/not-found/not-found.module */ 95233)).then(m => m.NotFoundPageModule)
}, {
  path: 'noticias',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("src_app_pages_public_news_news_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/news/news.module */ 16858)).then(m => m.NewsPageModule)
}, {
  path: 'pagina/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_component_announcement_map_service_map_service_ts-src_app_pag-3bd1b3"), __webpack_require__.e("src_app_pages_public_announcement_announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/announcement/announcement.module */ 16404)).then(m => m.AnnouncementPageModule)
}, {
  path: 'sair',
  canActivate: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("src_app_pages_public_logout_logout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/logout/logout.module */ 24180)).then(m => m.LogoutPageModule)
}, {
  path: 'cadastrar',
  canActivate: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_system-access_system-access_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/system-access/system-access.module */ 10572)).then(m => m.SystemAccessPageModule)
}, {
  path: 'entrar',
  canActivate: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_system-access_system-access_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/system-access/system-access.module */ 10572)).then(m => m.SystemAccessPageModule)
}, {
  path: 'entrar/admin',
  canActivate: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_system-access-admin_system-access-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/system-access-admin/system-access-admin.module */ 90796)).then(m => m.SystemAccessAdminPageModule)
}, {
  path: 'recuperar-senha',
  canActivate: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_system-access_system-access_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/system-access/system-access.module */ 10572)).then(m => m.SystemAccessPageModule)
}, {
  path: 'redefinir-senha/:token',
  canActivate: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("default-src_app_components_form_form_module_ts-src_app_utilities_loading_loading_service_ts"), __webpack_require__.e("src_app_pages_public_redefine-password_redefine-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/redefine-password/redefine-password.module */ 49698)).then(m => m.RedefinePasswordPageModule)
}, {
  path: 'painel-de-controle',
  canActivate: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_auth_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/dashboard/auth/dashboard.module */ 27361)).then(m => m.DashboardPageModule)
}, {
  path: 'painel-de-controle/admin',
  canActivate: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  canLoad: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_administrator_dashboard-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/dashboard/administrator/dashboard-admin.module */ 70603)).then(m => m.DashboardAdminPageModule)
}, {
  path: 'ativar-conta/:token',
  canActivate: [_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [_services_auth_guard_private_autorization_private_autorization_guard__WEBPACK_IMPORTED_MODULE_0__.PrivateAutorizationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_activate-account_activate-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/activate-account/activate-account.module */ 74085)).then(m => m.ActivateAccountPageModule)
}, {
  path: 'termos-de-serviço',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_footer_footer_module_ts-src_app_header_header_module_ts"), __webpack_require__.e("src_app_pages_public_service-terms_service-terms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/public/service-terms/service-terms.module */ 38969)).then(m => m.ServiceTermsPageModule)
}, {
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/erro',
  pathMatch: 'full'
}];
let NavComponentRoutingModule = class NavComponentRoutingModule {};
NavComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], NavComponentRoutingModule);


/***/ }),

/***/ 61125:
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponentModule": () => (/* binding */ NavComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nav_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-routing.module */ 10287);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let NavComponentModule = class NavComponentModule {};
NavComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _nav_routing_module__WEBPACK_IMPORTED_MODULE_0__.NavComponentRoutingModule]
})], NavComponentModule);


/***/ }),

/***/ 88322:
/*!****************************************************************************************!*\
  !*** ./src/app/services/auth/guard/private-autorization/private-autorization.guard.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateAutorizationGuard": () => (/* binding */ PrivateAutorizationGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth.service */ 51228);




let PrivateAutorizationGuard = class PrivateAutorizationGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate() {
    if (this.isLoggedIn) {
      return true;
    }
    return this.router.navigate(['/entrar']);
  }
  canLoad() {
    this.$isLoggedIn = this.authService.loggedInAsObservable.subscribe({
      next: isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        setTimeout(() => this.$isLoggedIn.unsubscribe(), 2500);
      }
    });
    return true;
  }
};
PrivateAutorizationGuard.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
}];
PrivateAutorizationGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], PrivateAutorizationGuard);


/***/ }),

/***/ 61069:
/*!**************************************************************************************!*\
  !*** ./src/app/services/auth/guard/public-autorization/public-autorization.guard.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicAutorizationGuard": () => (/* binding */ PublicAutorizationGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth.service */ 51228);




let PublicAutorizationGuard = class PublicAutorizationGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate() {
    if (this.isLoggedIn) {
      return this.router.navigate(['/inicio']);
    }
    return true;
  }
  canLoad() {
    this.$isLoggedIn = this.authService.loggedInAsObservable.subscribe({
      next: isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        setTimeout(() => this.$isLoggedIn.unsubscribe(), 2500);
      }
    });
    return true;
  }
};
PublicAutorizationGuard.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
}];
PublicAutorizationGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], PublicAutorizationGuard);


/***/ })

}]);
//# sourceMappingURL=src_app_nav_nav_module_ts.js.map