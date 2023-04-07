(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_system-access_system-access_module_ts"],{

/***/ 34363:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/components/buttons/buttons-sccess-component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsAccessComponent": () => (/* binding */ ButtonsAccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _buttons_sccess_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons-sccess-component.html?ngResource */ 97787);
/* harmony import */ var _buttons_sccess_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons-sccess-component.scss?ngResource */ 600);
/* harmony import */ var _buttons_sccess_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons_sccess_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





let ButtonsAccessComponent = class ButtonsAccessComponent {
  constructor() {
    this.attrButton = [{
      route: '/entrar',
      icon: 'log-in',
      label: 'Entrar',
      aria: 'Acessar o sistema.',
      title: 'Acessar o sistema.'
    }, {
      route: '/recuperar-senha',
      icon: 'key',
      label: 'Recuperar senha',
      aria: 'Recuperar senha.',
      title: 'Recuperar senha.'
    }, {
      route: '/cadastrar',
      icon: 'create',
      label: 'cadastrar',
      aria: 'Criar conta.',
      title: 'Criar conta.'
    }];
  }
};
ButtonsAccessComponent.propDecorators = {
  route: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
};
ButtonsAccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-buttons-sccess-component',
  template: _buttons_sccess_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_buttons_sccess_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ButtonsAccessComponent);


/***/ }),

/***/ 53431:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/components/social-login/social-login.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialLoginComponent": () => (/* binding */ SocialLoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _social_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-login.component.html?ngResource */ 73469);
/* harmony import */ var _social_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-login.component.scss?ngResource */ 4000);
/* harmony import */ var _social_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _system_access_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../system-access.page */ 79647);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var _services_system_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/system-access.service */ 75048);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor-community/facebook-login */ 4655);
/* harmony import */ var _services_social_login_social_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/social-login/social-login.service */ 85633);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 15414);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);













let SocialLoginComponent = class SocialLoginComponent {
  constructor(systemAccessService, plt, http, socialLoginService, systemAccessPage, messageService, loadingService) {
    this.systemAccessService = systemAccessService;
    this.plt = plt;
    this.http = http;
    this.socialLoginService = socialLoginService;
    this.systemAccessPage = systemAccessPage;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.fbLogin = _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_5__.FacebookLogin;
  }
  ngOnInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      if (this.plt.is('desktop')) {
        yield this.fbLogin.initialize({
          appId: '967268348006627'
        });
      }
      if (!this.plt.is('capacitor')) {
        _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__.GoogleAuth.initialize();
      }
    });
  }
  facebook() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
      const result = yield this.fbLogin.login({
        permissions: FACEBOOK_PERMISSIONS
      });
      if ((result === null || result === void 0 ? void 0 : result.accessToken) && ((_a = result === null || result === void 0 ? void 0 : result.accessToken) === null || _a === void 0 ? void 0 : _a.userId)) {
        this.getToken(result);
        this.loadUserData();
      } else if (result.accessToken && !result.accessToken.userId) {
        this.getCurrentToken();
      } else {}
    });
  }
  getToken(result) {
    this.token = result === null || result === void 0 ? void 0 : result.accessToken;
  }
  google() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const googleUser = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__.GoogleAuth.signIn();
      const data = Object.assign({}, this.build(googleUser));
      return this.login(data);
    });
  }
  getCurrentToken() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const result = yield this.fbLogin.getCurrentAccessToken();
      if (result === null || result === void 0 ? void 0 : result.accessToken) {
        this.getToken(result);
        this.loadUserData();
      } else {
        console.log('Login failed');
      }
    });
  }
  loadUserData() {
    var _a, _b;
    if ((_a = this.token) === null || _a === void 0 ? void 0 : _a.userId) {
      const url = `https://graph.facebook.com/${(_b = this.token) === null || _b === void 0 ? void 0 : _b.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
      this.http.get(url).subscribe({
        next: facebook => {
          const data = Object.assign({}, this.build(facebook));
          this.login(data);
        }
      });
    }
  }
  login(social) {
    if (social) {
      this.setRouter();
      this.systemAccessService.setStayConnected(true);
      const loading = this.loadingService.show('Acessar o sistema...');
      const data = Object.assign({}, this.build(social));
      if (data) {
        return this.systemAccess = this.socialLoginService.login(data).subscribe({
          next: user_ => this.success(user_, loading),
          error: error => this.error(error, loading)
        });
      }
    }
  }
  success(user_, loading) {
    this.systemAccessPage.disableCanDeactivate(user_);
    this.systemAccessService.isLogin(user_);
    this.systemAccessService.goToUserPage();
    return this.messageService.success(user_ === null || user_ === void 0 ? void 0 : user_.message, loading, this.systemAccess);
  }
  build(data) {
    var _a, _b, _c;
    const {
      id,
      name,
      email
    } = data;
    const arrayName = name.split(' ');
    const firstName = arrayName.splice(0, 1).join();
    const lastName = arrayName.join(' ');
    const result = {
      sid: id,
      email,
      firstName,
      lastName,
      slug: '',
      password: '',
      token: ((_a = this.token) === null || _a === void 0 ? void 0 : _a.token) || JSON.stringify(Object.assign({}, data === null || data === void 0 ? void 0 : data.authentication)),
      image: {
        filename: ((_c = (_b = data === null || data === void 0 ? void 0 : data.picture) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.url) || (data === null || data === void 0 ? void 0 : data.imageUrl)
      },
      _csrf: this.csrf
    };
    return result;
  }
  error(error, loading) {
    return this.systemAccessService.error(error, loading, this.systemAccess);
  }
  setRouter() {
    this.systemAccessService.activeRoute = 'login';
  }
};
SocialLoginComponent.ctorParameters = () => [{
  type: _services_system_access_service__WEBPACK_IMPORTED_MODULE_4__.SystemAccessService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
}, {
  type: _services_social_login_social_login_service__WEBPACK_IMPORTED_MODULE_6__.SocialLoginService
}, {
  type: _system_access_page__WEBPACK_IMPORTED_MODULE_2__.SystemAccessPage
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_8__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}];
SocialLoginComponent.propDecorators = {
  csrf: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }]
};
SocialLoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-social-login',
  template: _social_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_social_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SocialLoginComponent);


/***/ }),

/***/ 13581:
/*!*******************************************************************!*\
  !*** ./src/app/pages/public/system-access/guard/resolve.guard.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAccessResolver": () => (/* binding */ SystemAccessResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login/login.service */ 42923);
/* harmony import */ var _services_recover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/recover/service */ 57665);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/register/service */ 37945);








let SystemAccessResolver = class SystemAccessResolver {
  constructor(recoverService, loginService, registerService, router) {
    this.recoverService = recoverService;
    this.loginService = loginService;
    this.registerService = registerService;
    this.router = router;
  }
  resolve(route) {
    const router = this.activeRoute(route);
    switch (router) {
      case 'entrar/admin':
        return this.loginService.requirement().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
          this.router.parseUrl('/404');
          return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        }));
      case 'entrar':
        return this.loginService.requirement().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
          this.router.parseUrl('/404');
          return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        }));
      case 'recuperar-senha':
        return this.recoverService.requirement().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
          this.router.parseUrl('/404');
          return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        }));
      case 'cadastrar':
        return this.registerService.requirement().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
          this.router.parseUrl('/404');
          return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        }));
      default:
        return undefined;
    }
  }
  activeRoute(route) {
    var _a, _b;
    return (_b = (_a = route === null || route === void 0 ? void 0 : route.parent) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path;
  }
};
SystemAccessResolver.ctorParameters = () => [{
  type: _services_recover_service__WEBPACK_IMPORTED_MODULE_1__.RecoverService
}, {
  type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService
}, {
  type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];
SystemAccessResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], SystemAccessResolver);


/***/ }),

/***/ 42923:
/*!****************************************************************************!*\
  !*** ./src/app/pages/public/system-access/services/login/login.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);






let LoginService = class LoginService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, authService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.authService = authService;
    this.setApi = `login`;
  }
  get stayConnected() {
    return this.$stayConnected;
  }
  set stayConnected(value) {
    this.$stayConnected = value;
  }
  storesTokenDatabaseOrSession(user) {
    if (this.stayConnected) {
      return this.setUserAndTokenInDatabase(user);
    }
    return this.setUserAndTokenInSession(user);
  }
  setTokenSession(user) {
    return sessionStorage.setItem('token', user === null || user === void 0 ? void 0 : user.token);
  }
  setTokenDatabase(user) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.storageService.setAuthUserToken(user);
    });
  }
  setAuthUser(user) {
    this.authService.setUser = user;
    this.authService.setUrlApi();
    return this.authService.setIsLoggedIn = user;
  }
  setUserAndTokenInSession(user) {
    this.setAuthUser(user);
    this.setTokenSession(user);
    this.storageService.setAuthToken = user === null || user === void 0 ? void 0 : user.token;
  }
  setUserAndTokenInDatabase(user) {
    this.setAuthUser(user);
    this.setTokenDatabase(user);
    this.storageService.setAuthToken = user === null || user === void 0 ? void 0 : user.token;
  }
};
LoginService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], LoginService);


/***/ }),

/***/ 57665:
/*!************************************************************************!*\
  !*** ./src/app/pages/public/system-access/services/recover/service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverService": () => (/* binding */ RecoverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);







let RecoverService = class RecoverService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, router, helpsService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.router = router;
    this.helpsService = helpsService;
    this.setApi = `recover`;
  }
  goToLoginPage() {
    return this.helpsService.delay(() => this.router.navigate(['/entrar']), 2500);
  }
};
RecoverService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_1__.HelpsService
}];
RecoverService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], RecoverService);


/***/ }),

/***/ 37945:
/*!*************************************************************************!*\
  !*** ./src/app/pages/public/system-access/services/register/service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);







let RegisterService = class RegisterService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
  constructor(http, storageService, navCtrl, helpsService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.navCtrl = navCtrl;
    this.helpsService = helpsService;
    this.setApi = `register`;
  }
  register(user) {
    return this.create(user);
  }
  goToLoginPage() {
    return this.helpsService.delay(() => this.navCtrl.navigateForward('/entrar'), 2500);
  }
};
RegisterService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_0__.HelpsService
}];
RegisterService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], RegisterService);


/***/ }),

/***/ 85633:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/services/social-login/social-login.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialLoginService": () => (/* binding */ SocialLoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);






let SocialLoginService = class SocialLoginService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, authService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.authService = authService;
    this.setApi = `social-login`;
  }
  get stayConnected() {
    return this.$stayConnected;
  }
  set stayConnected(value) {
    this.$stayConnected = value;
  }
  storesTokenDatabaseOrSession(user) {
    if (this.stayConnected) {
      return this.setUserAndTokenInDatabase(user);
    }
    return this.setUserAndTokenInSession(user);
  }
  login(social) {
    return this.create(social);
  }
  setTokenSession(user) {
    return sessionStorage.setItem('token', user === null || user === void 0 ? void 0 : user.token);
  }
  setTokenDatabase(user) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.storageService.setAuthUserToken(user);
    });
  }
  setAuthUser(user) {
    this.authService.setUser = user;
    return this.authService.setIsLoggedIn = user;
  }
  setUserAndTokenInSession(user) {
    this.setAuthUser(user);
    this.setTokenSession(user);
    this.storageService.setAuthToken = user === null || user === void 0 ? void 0 : user.token;
  }
  setUserAndTokenInDatabase(user) {
    this.setAuthUser(user);
    this.setTokenDatabase(user);
    this.storageService.setAuthToken = user === null || user === void 0 ? void 0 : user.token;
  }
};
SocialLoginService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}];
SocialLoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], SocialLoginService);


/***/ }),

/***/ 75048:
/*!******************************************************************************!*\
  !*** ./src/app/pages/public/system-access/services/system-access.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAccessService": () => (/* binding */ SystemAccessService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.service */ 42923);
/* harmony import */ var _recover_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recover/service */ 57665);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/service */ 37945);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);









let SystemAccessService = class SystemAccessService {
  constructor(http, messageService, authService, helpsService, loginService, recoverService, registerService) {
    this.http = http;
    this.messageService = messageService;
    this.authService = authService;
    this.helpsService = helpsService;
    this.loginService = loginService;
    this.recoverService = recoverService;
    this.registerService = registerService;
    this.$activeRoute = 'login' || 0 || 0;
  }
  get activeRoute() {
    return this.$activeRoute;
  }
  set activeRoute(value) {
    this.$activeRoute = value;
  }
  passwordRecover(user) {
    return this.recoverService.create(user);
  }
  sendLoginData(user) {
    this.setStayConnected(user === null || user === void 0 ? void 0 : user.stayConnected);
    return this.loginService.create(user);
  }
  register(user) {
    return this.registerService.register(user);
  }
  setStayConnected(value) {
    if (value) {
      this.loginService.stayConnected = value;
    }
  }
  /********************************************************
   ******* MESSAGENS DE RETORNO DA CHAMADA HTTP ***********
   ********************************************************/
  error(error, loading, subscribe) {
    return this.messageService.error(error, loading, subscribe);
  }
  goToUserPage() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      switch (this.activeRoute) {
        case 'login':
          return this.authRoute();
        case 'recover':
          return this.recoverService.goToLoginPage();
        case 'register':
          return this.registerService.goToLoginPage();
        default:
          return undefined;
      }
    });
  }
  isLogin(user) {
    if (this.activeRoute === 'login') {
      this.helpsService.delay(() => this.loginService.storesTokenDatabaseOrSession(user), 2500);
    }
  }
  authRoute() {
    return this.helpsService.delay(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return yield this.authService.unauthenticatedUserAllowLoginRoute();
    }), 2500);
  }
};
SystemAccessService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_0__.HelpsService
}, {
  type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
}, {
  type: _recover_service__WEBPACK_IMPORTED_MODULE_3__.RecoverService
}, {
  type: _register_service__WEBPACK_IMPORTED_MODULE_4__.RegisterService
}];
SystemAccessService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()], SystemAccessService);


/***/ }),

/***/ 14298:
/*!****************************************************************************!*\
  !*** ./src/app/pages/public/system-access/system-access-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_components_form_guard_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/form/guard/deactivate.guard */ 67120);
/* harmony import */ var src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/guard/public-autorization/public-autorization.guard */ 61069);
/* harmony import */ var _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/resolve.guard */ 13581);
/* harmony import */ var _system_access_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-access.page */ 79647);







const routes = [{
  path: '',
  component: _system_access_page__WEBPACK_IMPORTED_MODULE_3__.SystemAccessPage,
  canActivate: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canLoad: [src_app_services_auth_guard_public_autorization_public_autorization_guard__WEBPACK_IMPORTED_MODULE_1__.PublicAutorizationGuard],
  canDeactivate: [src_app_components_form_guard_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.DeactivateGuard],
  resolve: {
    systemAccess: _guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.SystemAccessResolver
  }
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
  providers: [_guard_resolve_guard__WEBPACK_IMPORTED_MODULE_2__.SystemAccessResolver]
})], LoginPageRoutingModule);


/***/ }),

/***/ 10572:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/system-access/system-access.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAccessPageModule": () => (/* binding */ SystemAccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _system_access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-access-routing.module */ 14298);
/* harmony import */ var _system_access_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-access.page */ 79647);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/register/service */ 37945);
/* harmony import */ var _services_recover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/recover/service */ 57665);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/login/login.service */ 42923);
/* harmony import */ var _services_system_access_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/system-access.service */ 75048);
/* harmony import */ var _components_buttons_buttons_sccess_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buttons/buttons-sccess-component */ 34363);
/* harmony import */ var src_app_components_requisitionLimit_requisition_limit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/requisitionLimit/requisition-limit.module */ 80908);
/* harmony import */ var _components_social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/social-login/social-login.component */ 53431);
/* harmony import */ var _services_social_login_social_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/social-login/social-login.service */ 85633);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);

















let SystemAccessPageModule = class SystemAccessPageModule {};
SystemAccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _system_access_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_2__.FormComponentModule, src_app_components_requisitionLimit_requisition_limit_module__WEBPACK_IMPORTED_MODULE_8__.RequisitionLimitComponentModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_11__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__.FooterModule],
  declarations: [_system_access_page__WEBPACK_IMPORTED_MODULE_1__.SystemAccessPage, _components_buttons_buttons_sccess_component__WEBPACK_IMPORTED_MODULE_7__.ButtonsAccessComponent, _components_social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__.SocialLoginComponent],
  providers: [_services_system_access_service__WEBPACK_IMPORTED_MODULE_6__.SystemAccessService, _services_register_service__WEBPACK_IMPORTED_MODULE_3__.RegisterService, _services_recover_service__WEBPACK_IMPORTED_MODULE_4__.RecoverService, _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService, _services_social_login_social_login_service__WEBPACK_IMPORTED_MODULE_10__.SocialLoginService, _system_access_page__WEBPACK_IMPORTED_MODULE_1__.SystemAccessPage]
})], SystemAccessPageModule);


/***/ }),

/***/ 79647:
/*!******************************************************************!*\
  !*** ./src/app/pages/public/system-access/system-access.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAccessPage": () => (/* binding */ SystemAccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _system_access_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-access.page.html?ngResource */ 58753);
/* harmony import */ var _system_access_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-access.page.scss?ngResource */ 76710);
/* harmony import */ var _system_access_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_system_access_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../activate-account/activate-account.page.scss?ngResource */ 86744);
/* harmony import */ var _activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_system_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/system-access.service */ 75048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_utilities_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/functions */ 93205);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);











let SystemAccessPage = class SystemAccessPage {
  constructor(activatedRoute, systemAccessService, helpsService, messageService, loadingService) {
    this.activatedRoute = activatedRoute;
    this.systemAccessService = systemAccessService;
    this.helpsService = helpsService;
    this.messageService = messageService;
    this.loadingService = loadingService;
  }
  ngOnInit() {
    this.activeRoute();
    this.setConfig();
    this.hasDesable();
    this.initAttrButton();
  }
  activeRoute() {
    var _a, _b, _c, _d;
    if ((_b = (_a = this.activatedRoute.snapshot.parent) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path) {
      this.route = (_d = (_c = this.activatedRoute.snapshot.parent) === null || _c === void 0 ? void 0 : _c.routeConfig) === null || _d === void 0 ? void 0 : _d.path;
    }
  }
  canDeactivate() {
    if (this.authorizeRoute()) {
      return this.authorizeRoute();
    } else if (this.canAuthorizeTheRoute()) {
      return this.canDeactivatedConfirmAlert();
    }
    return true;
  }
  onSubmit(event) {
    switch (this.route) {
      case 'entrar':
        return this.login(event);
      case 'recuperar-senha':
        return this.recover(event);
      case 'cadastrar':
        return this.register(event);
    }
  }
  importForm(event) {
    return this.form = event;
  }
  setDesable(event) {
    this.desable = event;
  }
  getTimeLeftToUnlock() {
    var _a;
    this.time = (_a = this.requiriment) === null || _a === void 0 ? void 0 : _a.delay;
  }
  disableCanDeactivate(user) {
    if (user.auth) {
      return this.urlTree = user.auth;
    }
    return null;
  }
  formUpdate() {
    this.helpsService.delay(() => {
      this.helpsService.correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(this.form, this.config);
    }, 2500);
  }
  initAttrButton() {
    switch (this.route) {
      case 'entrar':
        this.attrButton = src_app_utilities_functions__WEBPACK_IMPORTED_MODULE_5__["default"][0];
        break;
      case 'recuperar-senha':
        this.attrButton = src_app_utilities_functions__WEBPACK_IMPORTED_MODULE_5__["default"][1];
        break;
      case 'cadastrar':
        this.attrButton = src_app_utilities_functions__WEBPACK_IMPORTED_MODULE_5__["default"][2];
        break;
    }
  }
  authorizeRoute() {
    return this.urlTree;
  }
  canAuthorizeTheRoute() {
    return this.helpsService.isAuthorizeTheRoute(this.form);
  }
  canDeactivatedConfirmAlert() {
    return this.helpsService.messageAuthorizeTheRoute();
  }
  login(event) {
    this.setRouter('login');
    const loading = this.loadingService.show('Acessar o sistema...');
    return this.systemAccess = this.systemAccessService.sendLoginData(event.value).subscribe({
      next: auth => this.success(auth, loading),
      error: error => this.error(error, loading)
    });
  }
  register(event) {
    this.setRouter('register');
    const loading = this.loadingService.show('Cadastrando usuário...');
    return this.systemAccess = this.systemAccessService.register(event.value).subscribe({
      next: user => this.success(user, loading),
      error: error => this.error(error, loading)
    });
  }
  recover(event) {
    this.setRouter('recover');
    const loading = this.loadingService.show('Recuperando senha...');
    return this.systemAccess = this.systemAccessService.passwordRecover(event.value).subscribe({
      next: user => this.success(user, loading),
      error: error => this.error(error, loading)
    });
  }
  // private showLoading(message: string): Promise<HTMLIonLoadingElement> {
  //   return this.systemAccessService.loading(message);
  // }
  success(user, loading) {
    this.disableCanDeactivate(user);
    this.formUpdate();
    this.systemAccessService.isLogin(user);
    this.systemAccessService.goToUserPage();
    return this.messageService.success(user.message, loading, this.systemAccess);
  }
  error(error, loading) {
    this.requisitionLimit(error);
    return this.systemAccessService.error(error, loading, this.systemAccess);
  }
  requisitionLimit(error) {
    if (error.status === 403) {
      this.helpsService.delay(() => {
        this.setError(error);
        this.hasDesable();
        this.formUpdate();
      }, 2500);
    }
  }
  setError(error) {
    this.requiriment = error === null || error === void 0 ? void 0 : error.error;
  }
  setConfig() {
    this.addConfig();
    this.addRequirement();
  }
  addRequirement() {
    var _a;
    this.requiriment = (_a = this.config) === null || _a === void 0 ? void 0 : _a.requisitionLimit;
  }
  addConfig() {
    this.config = this.activatedRoute.snapshot.data['systemAccess'];
  }
  hasDesable() {
    this.getDesable();
    if (this.desable) {
      this.getTimeLeftToUnlock();
    }
  }
  getDesable() {
    if (this.requiriment) {
      this.addDesable();
    }
  }
  addDesable() {
    this.desable = this.isDesabled();
  }
  isDesabled() {
    return this.requiriment.count >= 3;
  }
  setRouter(route) {
    this.systemAccessService.activeRoute = route;
  }
};
SystemAccessPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _services_system_access_service__WEBPACK_IMPORTED_MODULE_3__.SystemAccessService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService
}];
SystemAccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-system-access',
  template: _system_access_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_system_access_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_activate_account_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SystemAccessPage);


/***/ }),

/***/ 93205:
/*!****************************************!*\
  !*** ./src/app/utilities/functions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attrButton = [{
  route: '/entrar',
  icon: 'log-in',
  label: 'Entrar',
  aria: 'Acessar o sistema.',
  title: 'Acessar o sistema.'
}, {
  route: '/recuperar-senha',
  icon: 'key',
  label: 'Recuperar senha',
  aria: 'Recuperar senha.',
  title: 'Recuperar senha.'
}, {
  route: '/cadastrar',
  icon: 'create',
  label: 'cadastrar',
  aria: 'Criar conta.',
  title: 'Criar conta.'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attrButton);

/***/ }),

/***/ 67531:
/*!**********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/definitions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4655:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookLogin": () => (/* binding */ FacebookLogin)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 67531);

const FacebookLogin = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('FacebookLogin', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_facebook-login_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 44214)).then(m => new m.FacebookLoginWeb())
});



/***/ }),

/***/ 5579:
/*!*************************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 15414:
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuth": () => (/* binding */ GoogleAuth)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5579);

const GoogleAuth = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 14707)).then(m => new m.GoogleAuthWeb())
});



/***/ }),

/***/ 600:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/components/buttons/buttons-sccess-component.scss?ngResource ***!
  \********************************************************************************************************/
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

/***/ 4000:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/components/social-login/social-login.component.scss?ngResource ***!
  \***********************************************************************************************************/
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

/***/ 76710:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/system-access/system-access.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "p {\n  margin-top: 32px;\n  position: relative;\n}\np::after {\n  position: absolute;\n  left: 15px;\n  bottom: 8px;\n  content: \"\";\n  display: block;\n  width: 38%;\n  background-color: var(--ion-color-light);\n  height: 2px;\n}\np::before {\n  position: absolute;\n  right: 15px;\n  top: 9px;\n  content: \"\";\n  display: block;\n  width: 38%;\n  background-color: var(--ion-color-light);\n  height: 2px;\n}\n@media only screen and (max-width: 990px) {\n  p::after {\n    width: 32%;\n  }\n  p::before {\n    width: 32%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  p::after {\n    width: 28%;\n  }\n  p::before {\n    width: 28%;\n  }\n}\n@media only screen and (max-width: 414px) {\n  p::after {\n    width: 24%;\n  }\n  p::before {\n    width: 24%;\n  }\n}\n@media only screen and (max-width: 360px) {\n  p::after {\n    width: 20%;\n  }\n  p::before {\n    width: 20%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/system-access/system-access.page.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,kBAAA;AACJ;AAAI;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,UAAA;EACA,wCAAA;EACA,WAAA;AAER;AACI;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,UAAA;EACA,wCAAA;EACA,WAAA;AACR;AACI;EACI;IACI,UAAA;EACV;EAEM;IACI,UAAA;EAAV;AACF;AAGM;EACE;IACI,UAAA;EADV;EAIM;IACI,UAAA;EAFV;AACF;AAKM;EACE;IACI,UAAA;EAHV;EAMM;IACI,UAAA;EAJV;AACF;AAOM;EACE;IACI,UAAA;EALV;EAQM;IACI,UAAA;EANV;AACF","sourcesContent":["p {\n    margin-top: 32px;\n    position: relative;\n    &::after {\n        position: absolute;\n        left: 15px;\n        bottom: 8px;\n        content: '';\n        display: block;\n        width: 38%;\n        background-color: var(--ion-color-light);\n        height: 2px;\n    }\n\n    &::before {\n        position: absolute;\n        right: 15px;\n        top: 9px;\n        content: '';\n        display: block;\n        width: 38%;\n        background-color: var(--ion-color-light);\n        height: 2px;\n    }\n    @media only screen and (max-width: 990px) {\n        &::after {\n            width: 32%;\n        }\n\n        &::before {\n            width: 32%;\n        }\n      }\n\n      @media only screen and (max-width: 768px) {\n        &::after {\n            width: 28%;\n        }\n\n        &::before {\n            width: 28%;\n        }\n      }\n\n      @media only screen and (max-width: 414px) {\n        &::after {\n            width: 24%;\n        }\n\n        &::before {\n            width: 24%;\n        }\n      }\n\n      @media only screen and (max-width: 360px) {\n        &::after {\n            width: 20%;\n        }\n\n        &::before {\n            width: 20%;\n        }\n      }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97787:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/components/buttons/buttons-sccess-component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-button\n  *ngFor=\"let data of attrButton\"\n  [routerLink]=\"data?.route\"\n  expand=\"block\"\n  fill=\"solid\"\n  color=\"primary\"\n  [attr.aria-label]=\"data?.aria\"\n  [title]=\"data?.title\"\n  [hidden]=\"'/'+route === data?.route\"\n>\n  <ion-icon\n    slot=\"start\"\n    color=\"light\"\n    [name]=\"data?.icon\"\n    class=\"ion-margin-end\"\n  ></ion-icon>\n  {{ data?.label }}\n</ion-button>\n";

/***/ }),

/***/ 73469:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/public/system-access/components/social-login/social-login.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-button expand=\"block\" (click)=\"facebook()\" class=\"ion-margin-top\">\n  <ion-icon\n    slot=\"icon-only\"\n    color=\"light\"\n    name=\"logo-facebook\"\n    class=\"ion-margin-end\"\n  ></ion-icon>\n  facebook\n</ion-button>\n\n<ion-button expand=\"block\" (click)=\"google()\">\n  <ion-icon\n    slot=\"icon-only\"\n    color=\"light\"\n    name=\"logo-google\"\n    class=\"ion-margin-end\"\n  ></ion-icon>\n  &nbsp; google\n</ion-button>\n";

/***/ }),

/***/ 58753:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/system-access/system-access.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content fullscreen=\"true\">\n  <ion-grid fixed>\n    <div *ngIf=\"!desable; else Message\">\n      <app-form\n        (submitDataForm)=\"onSubmit($event)\"\n        (exportForm)=\"importForm($event)\"\n        [inputConfig]=\"config\"\n        [attrButton]=\"attrButton\"\n      ></app-form>\n    </div>\n\n    <ng-template #Message>\n      <app-requisition-limit\n        [time]=\"time\"\n        [route]=\"route\"\n        (desable)=\"setDesable($event)\"\n      ></app-requisition-limit>\n    </ng-template>\n\n    <app-buttons-sccess-component\n      [route]=\"route\"\n    ></app-buttons-sccess-component>\n\n    <ion-text>\n      <p class=\"ion-text-center\">Use as rede sociais</p>\n    </ion-text>\n\n    <!-- social buttons -->\n    <app-social-login\n      *ngIf=\"config._csrf\"\n      [csrf]=\"config._csrf\"\n    ></app-social-login>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_system-access_system-access_module_ts.js.map