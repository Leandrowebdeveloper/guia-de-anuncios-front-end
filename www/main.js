(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_guard_init_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/guard/init/auth.guard */ 56221);




const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nav_nav_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nav/nav.module */ 61125)).then(m => m.NavComponentModule),
  resolve: {
    init: src_app_services_auth_guard_init_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard
  },
  canLoad: [src_app_services_auth_guard_init_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/module-dark/module-dark.service */ 22129);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);









moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-br');
let AppComponent = class AppComponent {
  constructor(plt, moduleDarkService) {
    this.plt = plt;
    this.moduleDarkService = moduleDarkService;
  }
  ngOnInit() {
    this.plt.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      yield this.init();
      this.moduleDarkService.init();
    }));
  }
  init() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (this.plt.is('capacitor')) {
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
          overlay: false
        });
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setBackgroundColor({
          color: '#1E295C'
        });
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.show();
        yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
      }
    });
  }
};
AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: _services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_2__.ModuleDarkService
}];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _utilities_animations_animation_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/animations/animation-router */ 76203);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/module-dark/module-dark.service */ 22129);















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  entryComponents: [],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot({
    navAnimation: _utilities_animations_animation_router__WEBPACK_IMPORTED_MODULE_3__.animationRouter
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot({
    name: 'guia_de_anuncios',
    driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Drivers.LocalStorage]
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
  }, _services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_5__.ModuleDarkService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 70759:
/*!************************************************************!*\
  !*** ./src/app/pages/public/home/services/home.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);



let HomeService = class HomeService {
  constructor() {
    this.category = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  get getCategories() {
    var _a;
    return (_a = this.category) === null || _a === void 0 ? void 0 : _a.value;
  }
  set setCategories(value) {
    this.category.next(value);
  }
  asObservable() {
    return this.category.asObservable();
  }
};
HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], HomeService);


/***/ }),

/***/ 51228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/http.service */ 3755);
/* harmony import */ var _helps_helps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helps/helps.service */ 73131);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ 86578);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);










let AuthService = class AuthService extends _http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, helpsService, router, navCtrl) {
    super(http, storageService);
    this.storageService = storageService;
    this.helpsService = helpsService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.$isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
    this.setUrlApi();
  }
  get getPLan() {
    var _a;
    return (_a = this.getUser) === null || _a === void 0 ? void 0 : _a.plan;
  }
  get getCsrf() {
    var _a, _b, _c, _d;
    if ((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b._csrf) {
      return (_d = (_c = this.user) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d._csrf;
    }
  }
  get userObservable() {
    return this.user && this.user.asObservable();
  }
  get getUser() {
    var _a;
    return (_a = this.user) === null || _a === void 0 ? void 0 : _a.value;
  }
  set setUser(user) {
    if (user) {
      this.user.next(user);
    }
  }
  get getSlug() {
    var _a;
    return (_a = this.getUser) === null || _a === void 0 ? void 0 : _a.slug;
  }
  set setSlug(user) {
    var _a;
    if (user && this.user.value) {
      this.user.value.slug = user === null || user === void 0 ? void 0 : user.slug;
      this.setUser = (_a = this.user) === null || _a === void 0 ? void 0 : _a.value;
    }
  }
  set setBlockade(value) {
    var _a;
    if (value && this.user.value) {
      this.user.value.blockade = value;
      this.setUser = (_a = this.user) === null || _a === void 0 ? void 0 : _a.value;
    }
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  get avatar() {
    var _a;
    if (this.getUser && ((_a = this.getUser) === null || _a === void 0 ? void 0 : _a.image)) {
      return this.getUser.image;
    }
  }
  set avatar(image) {
    if (image && this.user.value) {
      this.user.value.image = image;
      this.setUser = this.user.value;
    }
  }
  get getLevel() {
    var _a;
    return (_a = this.getUser) === null || _a === void 0 ? void 0 : _a.level;
  }
  get getEmail() {
    var _a;
    return (_a = this.getUser) === null || _a === void 0 ? void 0 : _a.email;
  }
  set setEmail(user) {
    if (user && this.user.value) {
      this.user.value.email = user === null || user === void 0 ? void 0 : user.email;
      this.setUser = this.user.value;
    }
  }
  set setIsPassword(value) {
    if (value && this.user.value) {
      this.user.value.isPassword = value;
      this.setUser = this.user.value;
    }
  }
  setUrlApi() {
    return this.setApi = `auth`;
  }
  name(user) {
    return this.patch(user, 'name').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user_ => {
      if (this.user.value) {
        this.user.value.firstName = user_ === null || user_ === void 0 ? void 0 : user_.firstName;
        this.user.value.lastName = user_ === null || user_ === void 0 ? void 0 : user_.lastName;
        this.user.value.slug = user_ === null || user_ === void 0 ? void 0 : user_.slug;
        this.user.value.name = user_ === null || user_ === void 0 ? void 0 : user_.name;
        this.setUser = this.user.value;
      }
    }));
  }
  email(user) {
    return this.patch(user, 'email');
  }
  emailIsValidToChange(params) {
    return this.findOne(`change-email/`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user_ => {
      this.setEmail = user_;
    }));
  }
  password(user) {
    return this.patch(user, 'password').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user_ => this.setIsPassword = user_ === null || user_ === void 0 ? void 0 : user_.isPassword));
  }
  delete(user) {
    return this.destroy(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user_ => {
      this.setIsLoggedIn = user_;
      this.setUser = user_;
      this.clearsSessionAndDatabaseStorage();
      return this.goToLoginPage();
    }));
  }
  clearsSessionAndDatabaseStorage() {
    this.removeTokenStorageSession();
    this.removeTokenStorageDatabase();
  }
  removeTokenStorageSession() {
    return sessionStorage.removeItem('token');
  }
  removeTokenStorageDatabase() {
    return this.storageService.clean();
  }
  goToLoginPage() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      return this.helpsService.delay(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        return yield this.navCtrl.navigateForward('/entrar');
      }), 2500);
    });
  }
  /*****************************************
   ***********                 *************
   *****************************************/
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get loggedInAsObservable() {
    return this.$isLoggedIn.asObservable();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get isLoggedIn() {
    return this.$isLoggedIn.value;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  set isLoggedIn(value) {
    this.$isLoggedIn.next(value);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  set setIsLoggedIn(user) {
    if (user) {
      this.isLoggedIn = user === null || user === void 0 ? void 0 : user.auth;
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  unauthenticatedUserAllowLoginRoute() {
    const url = this.router.url;
    if (this.isLoggedIn && url.toLowerCase() === '/entrar') {
      return this.navCtrl.navigateForward('/painel-de-controle');
    } else {
      return this.navCtrl.navigateForward('/painel-de-controle/admin');
    }
  }
};
AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _helps_helps_service__WEBPACK_IMPORTED_MODULE_1__.HelpsService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 56221:
/*!********************************************************!*\
  !*** ./src/app/services/auth/guard/init/auth.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var src_app_services_init_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/init/init.service */ 27604);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ 51228);
/* harmony import */ var src_app_pages_public_home_services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/public/home/services/home.service */ 70759);









let AuthGuard = class AuthGuard {
  constructor(storageService, authService, init, router, homeService) {
    this.storageService = storageService;
    this.authService = authService;
    this.init = init;
    this.router = router;
    this.homeService = homeService;
  }
  canActivate() {
    return;
  }
  resolve() {
    return this.init.boot().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(init => {
      this.homeService.setCategories = init === null || init === void 0 ? void 0 : init.category;
      this.confirmAuthenticationAndSetUser(init === null || init === void 0 ? void 0 : init.user);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      this.router.navigate(['/erro']);
      return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
    }));
  }
  canLoad() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      yield this.storageService.init();
      yield this.storageService.isToken();
      this.authService.isLoggedIn = !!this.storageService.getToken;
      return true;
    });
  }
  confirmAuthenticationAndSetUser(user) {
    this.confirmAuthorization(user);
    this.authService.setUrlApi();
    this.authService.setUser = user;
  }
  confirmAuthorization(user) {
    const url = user.level === '1' ? '/painel-de-controle/admin' : '/painel-de-controle';
    if (!(user === null || user === void 0 ? void 0 : user.auth)) {
      this.authService.isLoggedIn = false;
      this.storageService.destroy('token');
      return this.router.parseUrl('/entrar');
    }
    return this.router.parseUrl(url);
  }
};
AuthGuard.ctorParameters = () => [{
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: src_app_services_init_init_service__WEBPACK_IMPORTED_MODULE_1__.InitService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_pages_public_home_services_home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService
}];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], AuthGuard);


/***/ }),

/***/ 73131:
/*!*************************************************!*\
  !*** ./src/app/services/helps/helps.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpsService": () => (/* binding */ HelpsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let HelpsService = class HelpsService {
  constructor() {}
  delay(callback, time) {
    return setTimeout(callback, time);
  }
  correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(form, patchValue) {
    form.patchValue(patchValue);
    form.markAsPristine();
    return this.fixErrorMessages(form);
  }
  isAuthorizeTheRoute(form) {
    return form === null || form === void 0 ? void 0 : form.dirty;
  }
  messageAuthorizeTheRoute() {
    return confirm('As alterações no formulário não foram salvas e serão descartadas, deseja prosseguir?');
  }
  fixErrorMessages(form) {
    Object.keys(form.controls).forEach(element => form.controls[element].setErrors(null));
    return form;
  }
};
HelpsService.ctorParameters = () => [];
HelpsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], HelpsService);


/***/ }),

/***/ 3755:
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage.service */ 86578);




let HttpService = class HttpService {
  constructor(http, storageService) {
    this.http = http;
    this.storageService = storageService;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Accept: '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'CSRF-Token': '',
        Authorization: `Bearer `
      })
    };
  }
  get getApi() {
    return this.api;
  }
  set setApi(value) {
    this.api = `/api/${value}`;
  }
  set csrf(csrf) {
    this.httpOptions.headers = this.httpOptions.headers.set('CSRF-Token', csrf);
  }
  requirement(token) {
    this.getToken();
    return this.http.get(`${this.api}/requirement/${token || ''}`, this.httpOptions);
  }
  get(token) {
    this.getToken();
    return this.http.get(`${this.api}/requirement/${token || ''}`, this.httpOptions);
  }
  search(url, searchBy) {
    this.getToken();
    return this.http.get(`${this.api}/${url}`, {
      headers: this.httpOptions.headers,
      params: Object.assign({}, searchBy)
    });
  }
  findOne(url, searchBy) {
    this.getToken();
    return this.http.get(`${this.api}/${url}`, {
      headers: this.httpOptions.headers,
      params: Object.assign({}, searchBy)
    });
  }
  index(url, search) {
    this.getToken();
    return this.http.get(`${this.api}/${url || ''}`, {
      headers: this.httpOptions.headers,
      params: Object.assign({}, search)
    });
  }
  findAll(url) {
    this.getToken();
    return this.http.get(`${this.api}/${url || ''}`, this.httpOptions);
  }
  create(data, url) {
    this.getToken();
    return this.http.post(`${this.api}/${url || ''}`, data, this.httpOptions);
  }
  find(id) {
    this.getToken();
    return this.http.get(`${this.api}/${id}`, this.httpOptions);
  }
  update(data) {
    this.getToken();
    return this.http.put(`${this.api}/`, data, this.httpOptions);
  }
  patch(data, url) {
    this.getToken();
    return this.http.patch(`${this.api}/${url || ''}`, data, this.httpOptions);
  }
  destroy(data, url) {
    this.getToken();
    const {
      headers
    } = this.httpOptions;
    return this.http.delete(`${this.api}/${url || ''}`, {
      headers,
      body: data
    });
  }
  upload(formData, url) {
    this.getToken();
    const request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${this.api}/${url || ''}`, formData, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'CSRF-Token': this.httpOptions.headers.get('CSRF-Token') || '',
        Authorization: this.httpOptions.headers.get('Authorization') || ''
      }),
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(request);
  }
  getToken() {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `Bearer ${this.storageService.getToken || ''}`);
  }
};
HttpService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}, {
  type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
}];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], HttpService);


/***/ }),

/***/ 27604:
/*!***********************************************!*\
  !*** ./src/app/services/init/init.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitService": () => (/* binding */ InitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.service */ 86578);





let InitService = class InitService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.setApi = `init`;
  }
  boot() {
    return this.findAll();
  }
};
InitService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}];
InitService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], InitService);


/***/ }),

/***/ 22129:
/*!*************************************************************!*\
  !*** ./src/app/services/module-dark/module-dark.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleDarkService": () => (/* binding */ ModuleDarkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


let ModuleDarkService = class ModuleDarkService {
  constructor() {
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(undefined);
  }
  toggleEvent() {
    return this.event.asObservable();
  }
  setEvent(value) {
    this.event.emit(value);
  }
  toggleTemplateLigthDark() {
    if (!this.isDark()) {
      document.body.setAttribute('color-theme', 'dark');
      localStorage.setItem('isModuleDark', `${true}`);
    } else {
      document.body.setAttribute('color-theme', 'light');
      localStorage.setItem('isModuleDark', `${false}`);
    }
  }
  init() {
    if (this.isDark()) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      localStorage.setItem('isModuleDark', `${false}`);
    }
  }
  isDark() {
    const isDark = localStorage.getItem('isModuleDark');
    return isDark && isDark.toLowerCase() === 'true';
  }
};
ModuleDarkService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], ModuleDarkService);


/***/ }),

/***/ 86578:
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 80190);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.$storage = null;
    this.token = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  }
  get getAsObservableToken() {
    return this.token.asObservable();
  }
  get getToken() {
    return this.token.value;
  }
  set setAuthToken(value) {
    this.token.next(value);
  }
  init() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const storage = yield this.storage.create();
      this.$storage = storage;
    });
  }
  create(key, value) {
    var _a, _b;
    if (key && value) {
      if (typeof value === 'string') {
        return (_a = this.$storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
      }
      return (_b = this.$storage) === null || _b === void 0 ? void 0 : _b.set(key, JSON.stringify(value, null, ' '));
    }
    return null;
  }
  update(key, value) {
    var _a, _b;
    if (key && value) {
      if (typeof value === 'string') {
        return (_a = this.$storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
      }
      return (_b = this.$storage) === null || _b === void 0 ? void 0 : _b.set(key, JSON.stringify(value, null, ' '));
    }
    return null;
  }
  find(key) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const result = yield (_a = this.$storage) === null || _a === void 0 ? void 0 : _a.get(key);
      if (this.isJson(result)) {
        return JSON.parse(result);
      }
      return result;
    });
  }
  destroy(key) {
    var _a;
    if (key) {
      sessionStorage.clear();
      return (_a = this.$storage) === null || _a === void 0 ? void 0 : _a.remove(key);
    }
    return null;
  }
  clean() {
    if (this.$storage) {
      sessionStorage.clear();
      this.$storage.clear();
    }
  }
  isToken() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return this.setAuthToken = (yield this.find('token')) || (yield this.getSessionStorage());
    });
  }
  isJson(value) {
    try {
      JSON.parse(value);
    } catch (e) {
      return false;
    }
    return true;
  }
  setAuthUserToken(user) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.create('token', user === null || user === void 0 ? void 0 : user.token);
    });
  }
  getSessionStorage() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return yield Promise.resolve(sessionStorage.getItem('token'));
    });
  }
};
StorageService.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
}];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 76203:
/*!**********************************************************!*\
  !*** ./src/app/utilities/animations/animation-router.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationRouter": () => (/* binding */ animationRouter)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 26710);

const DURATION = 500;
const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
const animationRouter = (baseEl, opts) => {
  const rootTransition = (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.createAnimation)('');
  if (opts.direction === 'forward') {
    const squareA = (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.createAnimation)('').addElement(opts.enteringEl).duration(DURATION).easing(EASING).beforeStyles({
      opacity: 1
    }).fromTo('transform', 'translateX(99.5%)', 'translateX(0%)').fromTo('opacity', '0.8', '1');
    const squareB = (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.createAnimation)('').addElement(opts.enteringEl).duration(DURATION).easing(EASING).fromTo('transform', 'translateX(0%)', 'translateX(-20%)').fromTo('opacity', '1', '0.8');
    rootTransition.addAnimation([squareB, squareA]);
  } else if (opts.direction === 'back') {
    const squareA = (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.createAnimation)('').addElement(opts.leavingEl).duration(DURATION).easing(EASING).fromTo('transform', 'translateX(0%)', 'translateX(99.5%)').fromTo('opacity', '1', '0.8');
    const squareB = (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.createAnimation)('').addElement(opts.enteringEl).duration(DURATION).easing(EASING).fromTo('opacity', '0.8', '1').fromTo('transform', 'translateX(-20%)', 'translateX(0%)');
    rootTransition.addAnimation([squareA, squareB]);
  }
  return rootTransition;
};

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  // api: 'https://5fa1-2804-22b8-4010-200-b89f-6008-90d4-1265.sa.ngrok.io/',
  api: '/',
  mapsKey: ''
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);





// Call the element loader after the platform has been bootstrapped
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-avatar {\n  width: 26px;\n  height: 26px;\n  margin: 0 auto;\n}\n\n.container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n}\n.container div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.container div ion-avatar {\n  margin-top: 10px;\n}\n.container div ion-label {\n  position: absolute;\n  bottom: 1px;\n  font-size: xx-small;\n  letter-spacing: 0.7px;\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AACJ;;AASA;EACI,WAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AANJ;AAOI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AALR;AAMQ;EACI,gBAAA;AAJZ;AAMQ;EACI,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;AAJZ","sourcesContent":["ion-avatar {\n    width: 26px;\n    height: 26px;\n    margin: 0 auto;\n}\n\n// ion-tab-button {\n//     --color: var(--ion-color-light);\n//     --color-focused: var(--ion-color-light-tint);\n//     --background-focused-opacity: 0.5;\n//     --color-selected: var(--ion-color-light-tint);\n// }\n\n.container {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-content: center;\n    div {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position: relative;\n        ion-avatar {\n            margin-top: 10px;\n        }\n        ion-label {\n            position: absolute;\n            bottom: 1px;\n            font-size: xx-small;\n            letter-spacing: 0.7px;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map