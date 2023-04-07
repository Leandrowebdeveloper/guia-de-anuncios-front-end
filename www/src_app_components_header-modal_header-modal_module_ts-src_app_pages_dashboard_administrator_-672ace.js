(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_header-modal_header-modal_module_ts-src_app_pages_dashboard_administrator_-672ace"],{

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

/***/ 66259:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/deleted-item/deleted-item-user-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemUserPageRoutingModule": () => (/* binding */ DeletedItemUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _deleted_item_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item-user.page */ 9308);




const routes = [{
  path: '',
  component: _deleted_item_user_page__WEBPACK_IMPORTED_MODULE_0__.DeletedItemUserPage
}];
let DeletedItemUserPageRoutingModule = class DeletedItemUserPageRoutingModule {};
DeletedItemUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DeletedItemUserPageRoutingModule);


/***/ }),

/***/ 84656:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/deleted-item/deleted-item-user.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemUserPageModule": () => (/* binding */ DeletedItemUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deleted_item_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item-user-routing.module */ 66259);
/* harmony import */ var _deleted_item_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-item-user.page */ 9308);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/user-component.module */ 46469);









let DeletedItemUserPageModule = class DeletedItemUserPageModule {};
DeletedItemUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _deleted_item_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeletedItemUserPageRoutingModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule, src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_3__.UserComponentsModule],
  declarations: [_deleted_item_user_page__WEBPACK_IMPORTED_MODULE_1__.DeletedItemUserPage],
  exports: [_deleted_item_user_page__WEBPACK_IMPORTED_MODULE_1__.DeletedItemUserPage]
})], DeletedItemUserPageModule);


/***/ }),

/***/ 9308:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/deleted-item/deleted-item-user.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemUserPage": () => (/* binding */ DeletedItemUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deleted_item_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item-user.page.html?ngResource */ 48662);
/* harmony import */ var _deleted_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-item-user.page.scss?ngResource */ 81451);
/* harmony import */ var _deleted_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deleted_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users.page.scss?ngResource */ 89403);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin-users.service */ 99611);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_pages_dashboard_component_user_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/search/service/search.service */ 88552);













let DeletedItemUserPage = class DeletedItemUserPage {
  constructor(usersService, helpService, searchUserService, alertController, loadingService, messageService) {
    this.usersService = usersService;
    this.helpService = helpService;
    this.searchUserService = searchUserService;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.endListUser = true;
    this.sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.limit = 12;
    this.offset = 0;
    this.page = 1;
  }
  set setSearchBy(value) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }
  ngOnInit() {
    this.findUsers();
    this.initSearchBy();
  }
  ngOnDestroy() {
    this.$searchBy.unsubscribe();
  }
  refresher(event) {
    this.findUsers();
    event.target.complete();
  }
  hideMenssage() {
    this.menssage = true;
  }
  search(event) {
    var _a, _b, _c;
    if ((event === null || event === void 0 ? void 0 : event.target) && ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.value.length) >= 3) {
      const data = this.setDataSearch((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.value);
      return this.$search = this.usersService.searchBy(data).subscribe({
        next: user => {
          this.searchUserService.search = user;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }
      });
    }
  }
  findMoreUsers(event) {
    this.calculatePagination();
    return this.$users = this.usersService.index(`management/deleted`, {
      limit: this.limit,
      offset: this.offset
    }).subscribe({
      next: user => this.success(event, user),
      error: error => this.error.next(true),
      complete: () => this.helpService.delay(this.$users.unsubscribe(), 2000)
    });
  }
  restore(user, index) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const alert = yield this.alertController.create({
        header: 'Restaurar',
        subHeader: user === null || user === void 0 ? void 0 : user.name,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'OK',
          role: 'confirm',
          handler: event => {
            const data = Object.assign(Object.assign({}, event), {
              slug: user === null || user === void 0 ? void 0 : user.slug
            });
            const loading = this.loadingService.show('Excluindo usuário...');
            return this.$delete = this.usersService.restore(data).subscribe({
              next: user_ => this.messsage(user_, index, loading),
              error: error => this.messageService.error(error, loading, this.$delete)
            });
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
    });
  }
  // Destroy
  destroy(user, index) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const alert = yield this.alertController.create({
        header: 'Excluir',
        subHeader: user === null || user === void 0 ? void 0 : user.name,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'OK',
          role: 'confirm',
          handler: event => {
            const data = Object.assign(Object.assign({}, event), {
              slug: user === null || user === void 0 ? void 0 : user.slug
            });
            return this.delete(data, index);
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
    });
  }
  orderBy(search) {
    if (this.users) {
      switch (search) {
        case 'name':
          this.users.sort((a, b) => (a === null || a === void 0 ? void 0 : a.name) < (b === null || b === void 0 ? void 0 : b.name) && -1);
          break;
        case 'createdAt':
          this.users.sort((a, b) => (a === null || a === void 0 ? void 0 : a.createdAt) > (b === null || b === void 0 ? void 0 : b.createdAt) && -1);
          break;
        case 'updatedAt':
          this.users.sort((a, b) => (a === null || a === void 0 ? void 0 : a.updatedAt) > (b === null || b === void 0 ? void 0 : b.updatedAt) && -1);
          break;
        case 'blockade':
          this.users.sort((a, b) => (a === null || a === void 0 ? void 0 : a.blockade) > (b === null || b === void 0 ? void 0 : b.blockade) && -1);
          break;
        case 'state':
          this.users.sort((a, b) => (a === null || a === void 0 ? void 0 : a.state) > (b === null || b === void 0 ? void 0 : b.state) && -1);
          break;
      }
    }
  }
  initSearchBy() {
    this.$searchBy = this.searchUserService.getSearchBy.subscribe({
      next: filter => {
        if (filter === 'firstName' || filter === 'lastName' || filter === 'email') {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'firstName';
          if (filter) this.orderBy(filter);
        }
      }
    });
  }
  setDataSearch(value) {
    let data;
    if (this.searchBy) {
      this.searchBuild(value);
      data = this.searchBy;
    } else {
      data = {
        firstName: value
      };
    }
    return data;
  }
  searchBuild(value) {
    const key = Object.keys(this.searchBy)[0];
    this.searchBy[key] = value;
  }
  findUsers() {
    return this.users$ = this.usersService.index(`management/deleted`, {
      limit: this.limit,
      offset: this.offset
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.delay)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(user => {
      setTimeout(() => this.menssage = false, 300);
      return this.users = user;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
      setTimeout(() => this.menssage = false, 300);
      this.error.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY;
    }));
  }
  calculatePagination() {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }
  success(event, user) {
    this.setMoreData(user);
    this.updateScrollEvent(event, user);
    return;
  }
  updateScrollEvent(event, user) {
    event.target.complete();
    if (user.length < 8) {
      this.endListUser = false;
      event.target.disabled = true;
    }
  }
  setMoreData(user) {
    user.forEach(item => this.users.push(item));
  }
  delete(user, index) {
    const loading = this.loadingService.show('Excluindo usuário...');
    return this.$delete = this.usersService.dropd(user).subscribe({
      next: user_ => this.messsage(user_, index, loading),
      error: error => this.messageService.error(error, loading, this.$delete)
    });
  }
  messsage(user, index, loading) {
    this.users.splice(index, 1);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.$delete);
  }
};
DeletedItemUserPage.ctorParameters = () => [{
  type: _services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__.AdminUsersService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: src_app_pages_dashboard_component_user_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchUserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService
}];
DeletedItemUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-deleted-item-user',
  template: _deleted_item_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_deleted_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DeletedItemUserPage);


/***/ }),

/***/ 12215:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/component/card-desktop/card-desktop.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDesktopComponent": () => (/* binding */ CardDesktopComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_desktop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-desktop.component.html?ngResource */ 85130);
/* harmony import */ var _card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-desktop.component.scss?ngResource */ 42253);
/* harmony import */ var _card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let CardDesktopComponent = class CardDesktopComponent {
  constructor() {}
};
CardDesktopComponent.ctorParameters = () => [];
CardDesktopComponent.propDecorators = {
  users: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
};
CardDesktopComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-user-card-desktop',
  template: _card_desktop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CardDesktopComponent);


/***/ }),

/***/ 65158:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/component/card-mobile/card-mobile.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardMobileComponent": () => (/* binding */ CardMobileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_mobile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-mobile.component.html?ngResource */ 47846);
/* harmony import */ var _card_mobile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-mobile.component.scss?ngResource */ 55750);
/* harmony import */ var _card_mobile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_mobile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../card-desktop/card-desktop.component.scss?ngResource */ 42253);
/* harmony import */ var _card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





let CardMobileComponent = class CardMobileComponent {
  constructor() {}
  ngOnInit() {}
};
CardMobileComponent.ctorParameters = () => [];
CardMobileComponent.propDecorators = {
  users: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
CardMobileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-user-card-mobile',
  template: _card_mobile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_card_mobile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CardMobileComponent);


/***/ }),

/***/ 60214:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/enabled-item-user-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemUserPageRoutingModule": () => (/* binding */ EnabledItemUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _enabled_item_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item-user.page */ 42566);




const routes = [{
  path: '',
  component: _enabled_item_user_page__WEBPACK_IMPORTED_MODULE_0__.EnabledItemUserPage
}];
let EnabledItemUserPageRoutingModule = class EnabledItemUserPageRoutingModule {};
EnabledItemUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EnabledItemUserPageRoutingModule);


/***/ }),

/***/ 37486:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/enabled-item-user.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemUserPageModule": () => (/* binding */ EnabledItemUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _enabled_item_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item-user-routing.module */ 60214);
/* harmony import */ var _enabled_item_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled-item-user.page */ 42566);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _component_card_mobile_card_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/card-mobile/card-mobile.component */ 65158);
/* harmony import */ var _component_card_desktop_card_desktop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/card-desktop/card-desktop.component */ 12215);
/* harmony import */ var src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/user-component.module */ 46469);











let EnabledItemUserPageModule = class EnabledItemUserPageModule {};
EnabledItemUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _enabled_item_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnabledItemUserPageRoutingModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule, src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_5__.UserComponentsModule],
  declarations: [_enabled_item_user_page__WEBPACK_IMPORTED_MODULE_1__.EnabledItemUserPage, _component_card_mobile_card_mobile_component__WEBPACK_IMPORTED_MODULE_3__.CardMobileComponent, _component_card_desktop_card_desktop_component__WEBPACK_IMPORTED_MODULE_4__.CardDesktopComponent],
  exports: [_enabled_item_user_page__WEBPACK_IMPORTED_MODULE_1__.EnabledItemUserPage]
})], EnabledItemUserPageModule);


/***/ }),

/***/ 42566:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/enabled-item-user.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemUserPage": () => (/* binding */ EnabledItemUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _enabled_item_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item-user.page.html?ngResource */ 62746);
/* harmony import */ var _enabled_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled-item-user.page.scss?ngResource */ 50724);
/* harmony import */ var _enabled_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enabled_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users.page.scss?ngResource */ 89403);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin-users.service */ 99611);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_dashboard_component_user_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/search/service/search.service */ 88552);











let EnabledItemUserPage = class EnabledItemUserPage {
  constructor(adminUsersService, helpService, searchUserService, plt) {
    this.adminUsersService = adminUsersService;
    this.helpService = helpService;
    this.searchUserService = searchUserService;
    this.plt = plt;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.endListUser = true;
    this.sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.limit = 12;
    this.offset = 0;
    this.page = 1;
  }
  get getSearchBy() {
    return this.searchBy;
  }
  set setSearchBy(value) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }
  ngOnInit() {
    this.findUsers();
    this.initSearchBy();
    this.plt.ready().then(() => {
      this.isMobile = this.plt.is('mobile');
    });
    this.update();
    this.delete();
  }
  ngOnDestroy() {
    this.$searchBy.unsubscribe();
    this.$update.unsubscribe();
    this.$delete.unsubscribe();
  }
  /*********************************************************************************** */
  refresher(event) {
    this.findUsers();
    event.target.complete();
  }
  hideMenssage() {
    this.menssage = true;
  }
  /************************************************************************************ */
  search(event) {
    var _a, _b, _c;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.value.length) >= 3) {
      const data = this.setDataSearch((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.value);
      return this.$search = this.adminUsersService.searchBy(data).subscribe({
        next: user => {
          this.searchUserService.search = user;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }
      });
    }
  }
  findMoreUsers(event) {
    this.calculatePagination();
    return this.$users = this.adminUsersService.index(`management/`, {
      limit: this.limit,
      offset: this.offset
    }).subscribe({
      next: user => this.success(event, user),
      error: error => this.error.next(true),
      complete: () => this.helpService.delay(this.$users.unsubscribe(), 2000)
    });
  }
  orderBy(search) {
    if (!this.users) {
      return;
    }
  }
  initSearchBy() {
    this.$searchBy = this.searchUserService.getSearchBy.subscribe({
      next: filter => {
        if (filter === 'firstName' || filter === 'lastName' || filter === 'email') {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'firstName';
          if (filter) this.orderBy(filter);
        }
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
  findUsers() {
    return this.users$ = this.adminUsersService.index(`management/`, {
      limit: this.limit,
      offset: this.offset
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(user => {
      setTimeout(() => this.menssage = false, 300);
      return this.users = user;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      setTimeout(() => this.menssage = false, 300);
      this.error.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY;
    }));
  }
  calculatePagination() {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }
  success(event, user) {
    this.setMoreData(user);
    this.updateScrollEvent(event, user);
    return;
  }
  updateScrollEvent(event, user) {
    event.target.complete();
    if (user.length < 8) {
      this.endListUser = false;
      event.target.disabled = true;
    }
    return;
  }
  setMoreData(user) {
    return user.forEach(item => this.users.push(item));
  }
  delete() {
    return this.$delete = this.adminUsersService.deleteObservable.subscribe({
      next: user => {
        if (user) {
          const i = this.users.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (user === null || user === void 0 ? void 0 : user.id));
          this.users.splice(i, 1);
        }
      }
    });
  }
  update() {
    this.$update = this.adminUsersService.userObservable.subscribe({
      next: user => {
        var _a;
        if (user && ((_a = this.users) === null || _a === void 0 ? void 0 : _a.length) > 0) {
          this.setUser(user);
        }
      }
    });
  }
  setUser(user) {
    const i = this.users.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (user === null || user === void 0 ? void 0 : user.id));
    const response = this.filter(user);
    this.users.splice(i, 1, response);
  }
  filter(user) {
    return {
      name: user === null || user === void 0 ? void 0 : user.name,
      plan: user === null || user === void 0 ? void 0 : user.plan,
      image: user === null || user === void 0 ? void 0 : user.image,
      level: user === null || user === void 0 ? void 0 : user.level,
      slug: user === null || user === void 0 ? void 0 : user.slug,
      state: user === null || user === void 0 ? void 0 : user.state,
      blockade: user === null || user === void 0 ? void 0 : user.blockade,
      id: user === null || user === void 0 ? void 0 : user.id,
      createdAt: user === null || user === void 0 ? void 0 : user.createdAt,
      updatedAt: user === null || user === void 0 ? void 0 : user.updatedAt
    };
  }
};
EnabledItemUserPage.ctorParameters = () => [{
  type: _services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__.AdminUsersService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: src_app_pages_dashboard_component_user_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchUserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
}];
EnabledItemUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-enabled-item-user',
  template: _enabled_item_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_enabled_item_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EnabledItemUserPage);


/***/ }),

/***/ 99083:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/users-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 31696);




const routes = [{
  path: '',
  component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
}];
let UsersPageRoutingModule = class UsersPageRoutingModule {};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], UsersPageRoutingModule);


/***/ }),

/***/ 46948:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/users.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 99083);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 31696);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/dashboard/component/user/user-component.module */ 46469);
/* harmony import */ var _pages_deleted_item_deleted_item_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/deleted-item/deleted-item-user.module */ 84656);
/* harmony import */ var _pages_enabled_item_enabled_item_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/enabled-item/enabled-item-user.module */ 37486);













let UsersPageModule = class UsersPageModule {};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, src_app_pages_dashboard_component_user_user_component_module__WEBPACK_IMPORTED_MODULE_5__.UserComponentsModule, _pages_deleted_item_deleted_item_user_module__WEBPACK_IMPORTED_MODULE_6__.DeletedItemUserPageModule, _pages_enabled_item_enabled_item_user_module__WEBPACK_IMPORTED_MODULE_7__.EnabledItemUserPageModule],
  declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage]
})], UsersPageModule);


/***/ }),

/***/ 31696:
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/users.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page.html?ngResource */ 8101);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss?ngResource */ 89403);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let UsersPage = class UsersPage {
  constructor() {
    this.fab = false;
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
UsersPage.ctorParameters = () => [];
UsersPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, {
      static: true
    }]
  }]
};
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-users',
  template: _users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UsersPage);


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

/***/ 81451:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/deleted-item/deleted-item-user.page.scss?ngResource ***!
  \***************************************************************************************************************/
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

/***/ 55750:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/component/card-mobile/card-mobile.component.scss?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card-header > div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\nion-card-content > div {\n  display: flex;\n  justify-content: flex-end;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/users/pages/enabled-item/component/card-mobile/card-mobile.component.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AAAJ;;AAKE;EACE,aAAA;EACA,yBAAA;AAFJ","sourcesContent":["ion-card-header {\n  > div {\n    display: flex;\n    align-items: center;\n    margin-bottom: 8px;\n  }\n}\n\nion-card-content {\n  > div {\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50724:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/enabled-item-user.page.scss?ngResource ***!
  \***************************************************************************************************************/
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

/***/ 92852:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-modal/header-modal.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons [slot]=\"isPlt ? 'end' : 'start'\">\n      <ion-fab-button size=\"small\" (click)=\"close()\" shape=\"round\">\n        <ion-icon\n          color=\"light\"\n          [name]=\"isPlt ? 'close' : 'arrow-back'\"\n        ></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n    <ion-title>{{ label }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n";

/***/ }),

/***/ 48662:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/deleted-item/deleted-item-user.page.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"(users$ | async); else Error\">\n  <!-- Campo de pesquiza -->\n  <ion-col size=\"12\" class=\"ion-no-padding\">\n    <app-user-search-component\n      *ngIf=\"users | isUsers\"\n      (search)=\"search($event)\"\n    ></app-user-search-component>\n  </ion-col>\n\n  <!-- Abilitars -->\n  <ion-col size=\"12\">\n    <ion-list>\n      <ion-list>\n        <ion-item color=\"none\" *ngFor=\"let user of users; let i = index;\">\n          <ion-avatar slot=\"start\">\n            <img\n              [src]=\"user.image?.url || './../../../../assets/avatar.svg'\"\n              referrerpolicy=\"no-referrer\"\n              title=\"Imagem do usuário.\"\n              alt=\"Imagem do usuário.\"\n            />\n          </ion-avatar>\n          <ion-label\n            [title]=\"'Nome: ' + user?.name\"\n            [attr.data-message]=\"'Nome: ' + user?.name\"\n          >\n            {{ user.name }}</ion-label\n          >\n\n          <ion-button\n            (click)=\"destroy(user, i)\"\n            class=\"cursor-pointer\"\n            title=\"Exclui permanentemente\"\n            data-message=\"Exclui permanentemente\"\n            color=\"none\"\n          >\n            <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash\"></ion-icon>\n          </ion-button>\n          <ion-button\n            (click)=\"restore(user, i)\"\n            class=\"cursor-pointer\"\n            title=\"Restaurar usuário\"\n            data-message=\"Restaurar usuário\"\n            color=\"none\"\n          >\n            <ion-icon\n              slot=\"icon-only\"\n              color=\"success\"\n              name=\"play-back\"\n            ></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n\n    <div class=\"content-center\" [hidden]=\"users | isUsers\">\n      <ion-icon color=\"medium\" name=\"trash-outline\"></ion-icon>\n      <ion-text color=\"medium\"> Não á item na lixeira. </ion-text>\n    </div>\n\n    <ion-card *ngIf=\"!endListUser && (users | isUsers)\">\n      <ion-text color=\"primary\" class=\"ion-text-center\">\n        <p>FIM</p>\n        <p *ngIf=\"users | isUsers\">{{ users.length }} usuários</p>\n      </ion-text>\n    </ion-card>\n\n    <ion-infinite-scroll\n      (ionInfinite)=\"findMoreUsers($event)\"\n      *ngIf=\"endListUser\"\n    >\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Carregando mais dados…\"\n      >\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-col>\n</ion-row>\n\n<ng-template #Error>\n  <ng-container *ngIf=\"error | async; else loadingNoError\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"content-center\">\n          <div>\n            <ion-text class=\"ion-text-center\">\n              <p [ngClass]=\"{'hide': menssage}\">Erro ao carregar usuários.</p>\n            </ion-text>\n            <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n              <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                pullingText=\"Puxe para baixo\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Atualizar...\"\n              >\n              </ion-refresher-content>\n            </ion-refresher>\n            <ion-text class=\"ion-text-center\">\n              <ion-button (mousedown)=\"hideMenssage()\"\n                >Puxe para atualizar\n                <ion-icon\n                  class=\"ion-margin-start\"\n                  name=\"arrow-down-circle\"\n                ></ion-icon>\n              </ion-button>\n            </ion-text>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ng-template #loadingNoError>\n    <span size=\"12\" class=\"ion-padding-bottom ion-padding-horizontal\">\n      <ion-skeleton-text animated class=\"search\"></ion-skeleton-text>\n    </span>\n    <span *ngFor=\"let item of sizeSkeleton\">\n      <div class=\"skeleton\">\n        <ion-skeleton-text animated class=\"avatar\"></ion-skeleton-text>\n        <div>\n          <ion-skeleton-text animated class=\"title\"></ion-skeleton-text>\n          <ion-skeleton-text animated class=\"line\"></ion-skeleton-text>\n        </div>\n      </div>\n    </span>\n  </ng-template>\n</ng-template>\n";

/***/ }),

/***/ 85130:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/component/card-desktop/card-desktop.component.html?ngResource ***!
  \**************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item\n    detail=\"true\"\n    color=\"none\"\n    button\n    *ngFor=\"let user of users\"\n    [routerLink]=\"[\n      '/painel-de-controle',\n      'admin',\n      'usuario',\n      user | userValues : 'slug'\n    ]\"\n  >\n    <ion-avatar slot=\"start\">\n      <img\n        [src]=\"user | imgAvatar\"\n        referrerpolicy=\"no-referrer\"\n        title=\"Imagem do usuário.\"\n        alt=\"Imagem do usuário.\"\n      />\n    </ion-avatar>\n\n    <ion-label\n      [title]=\"user | userValues : 'name' : 'Nome:'\"\n      [attr.data-message]=\"user | userValues : 'name' : 'Nome:'\"\n    >\n      {{ user | userValues : \"name\" }} <br />\n      <ion-text>\n        <p class=\"no-margin\" [hidden]=\"!user | userValues : 'level'\">\n          <small>{{\n            (user | isUserLevel : \"1\") ? \"Administrador\" : \"Colaborador\"\n          }}</small>\n        </p>\n        <p class=\"no-margin\">\n          <small *ngIf=\"user?.plan?.type === 'free'\">Plano grátis</small>\n          <small *ngIf=\"user?.plan?.type === 'basic'\">Plano básico</small>\n          <small *ngIf=\"user?.plan?.type === 'special'\">Plano especial</small>\n        </p>\n\n        <p class=\"no-margin\" [hidden]=\"!user | userValuesPlan : 'end'\">\n          <small>{{ user | userValuesPlan : \"end\" | time : \"plan\" }}</small>\n        </p>\n      </ion-text>\n    </ion-label>\n\n    <ion-text class=\"flex\">\n      <small\n        class=\"margin\"\n        [attr.data-message]=\"\n          (user | userValues : 'blockade')\n            ? 'Usuário está bloqueado'\n            : 'Usuário está desbloqueado'\n        \"\n        [title]=\"\n          (user | userValues : 'blockade')\n            ? 'Usuário está bloqueado'\n            : 'Usuário está desbloqueado'\n        \"\n      >\n        <ion-icon\n          [color]=\"(user | userValues : 'blockade') ? 'danger' : 'success'\"\n          slot=\"end\"\n          [name]=\"(user | userValues : 'blockade') ? 'stop' : 'play'\"\n        ></ion-icon>\n        {{ (user | userValues : \"blockade\") ? \"bloqueado\" : \"desbloqueado\" }}\n      </small>\n      <small\n        [attr.data-message]=\"\n          (user | userValues : 'state')\n            ? 'Usuário está online'\n            : 'Usuário está offline'\n        \"\n        [title]=\"\n          (user | userValues : 'state')\n            ? 'Usuário está online'\n            : 'Usuário está offline'\n        \"\n      >\n        <ion-icon\n          [color]=\"(user | userValues : 'state') ? 'success' : 'danger'\"\n          slot=\"end\"\n          [name]=\"(user | userValues : 'state') ? 'power' : 'radio-button-off'\"\n        ></ion-icon>\n        {{ (user | userValues : \"state\") ? \"online\" : \"offline\" }}\n      </small>\n    </ion-text>\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 47846:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/component/card-mobile/card-mobile.component.html?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card *ngFor=\"let user of users\">\n  <ion-card-header>\n    <div>\n      <ion-avatar class=\"ion-margin-end\">\n        <img\n          [src]=\"user | imgAvatar\"\n          referrerpolicy=\"no-referrer\"\n          title=\"Imagem do usuário.\"\n          alt=\"Imagem do usuário.\"\n        />\n      </ion-avatar>\n      <ion-card-subtitle\n        [title]=\"(user | isUserLevel : '1') ? 'Administrador' : 'Colaborador'\"\n        [attr.data-message]=\"\n          (user | isUserLevel : '1') ? 'Administrador' : 'Colaborador'\n        \"\n        >{{\n          (user | isUserLevel : \"1\") ? \"Administrador\" : \"Colaborador\"\n        }}</ion-card-subtitle\n      >\n    </div>\n\n    <ion-card-title\n      [title]=\"user | userValues : 'name' : 'Nome:'\"\n      [attr.data-message]=\"user | userValues : 'name' : 'Nome:'\"\n      >{{ user | userValues : \"name\" }}</ion-card-title\n    >\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-text>\n      <p class=\"no-margin\">\n        <small *ngIf=\"user?.plan?.type === 'free'\">Plano grátis</small>\n        <small *ngIf=\"user?.plan?.type === 'basic'\">Plano básico</small>\n        <small *ngIf=\"user?.plan?.type === 'special'\">Plano especial</small>\n      </p>\n\n      <p class=\"no-margin\" [hidden]=\"!user | userValuesPlan : 'end'\">\n        <small>{{ user | userValuesPlan : \"end\" | time : \"plan\" }}</small>\n      </p>\n    </ion-text>\n    <ion-text class=\"flex\">\n      <small\n        class=\"margin\"\n        [attr.data-message]=\"\n          (user | userValues : 'blockade')\n            ? 'Usuário está bloqueado'\n            : 'Usuário está desbloqueado'\n        \"\n        [title]=\"\n          (user | userValues : 'blockade')\n            ? 'Usuário está bloqueado'\n            : 'Usuário está desbloqueado'\n        \"\n      >\n        <ion-icon\n          [color]=\"(user | userValues : 'blockade') ? 'danger' : 'success'\"\n          slot=\"end\"\n          [name]=\"(user | userValues : 'blockade') ? 'stop' : 'play'\"\n        ></ion-icon>\n        {{ (user | userValues : \"blockade\") ? \"bloqueado\" : \"desbloqueado\" }}\n      </small>\n      <small\n        [attr.data-message]=\"\n          (user | userValues : 'state')\n            ? 'Usuário está online'\n            : 'Usuário está offline'\n        \"\n        [title]=\"\n          (user | userValues : 'state')\n            ? 'Usuário está online'\n            : 'Usuário está offline'\n        \"\n      >\n        <ion-icon\n          [color]=\"(user | userValues : 'state') ? 'success' : 'danger'\"\n          slot=\"end\"\n          [name]=\"(user | userValues : 'state') ? 'power' : 'radio-button-off'\"\n        ></ion-icon>\n        {{ (user | userValues : \"state\") ? \"online\" : \"offline\" }}\n      </small>\n    </ion-text>\n    <div>\n      <ion-button\n        size=\"small\"\n        class=\"ion-margin-top\"\n        [routerLink]=\"[\n          '/painel-de-controle',\n          'admin',\n          'usuario',\n          user | userValues : 'slug'\n        ]\"\n        >Gerenciamento</ion-button\n      >\n    </div>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 62746:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/pages/enabled-item/enabled-item-user.page.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row *ngIf=\"(users$ | async); else Error\">\n  <!-- Campo de pesquiza -->\n  <ion-col size=\"12\" class=\"ion-no-padding\">\n    <app-user-search-component\n      *ngIf=\"users | isUsers:10\"\n      (search)=\"search($event)\"\n    ></app-user-search-component>\n  </ion-col>\n\n  <!-- Abilitars -->\n\n  <ion-col size=\"12\">\n    <ng-container *ngIf=\"!isMobile; else Mobile\">\n      <app-user-card-desktop [users]=\"users\"></app-user-card-desktop>\n    </ng-container>\n    <!-- Template Mobile -->\n    <ng-template #Mobile>\n      <app-user-card-mobile [users]=\"users\"></app-user-card-mobile>\n    </ng-template>\n    <ion-card *ngIf=\"!endListUser\">\n      <ion-text color=\"primary\" class=\"ion-text-center\">\n        <p>FIM</p>\n        <p *ngIf=\"users | isUsers\">{{ users.length }} usuários</p>\n      </ion-text>\n    </ion-card>\n\n    <ion-infinite-scroll\n      (ionInfinite)=\"findMoreUsers($event)\"\n      *ngIf=\"endListUser\"\n    >\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Carregando mais dados…\"\n      >\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-col>\n</ion-row>\n\n<ng-template #Error>\n  <ng-container *ngIf=\"error | async; else loadingNoError\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"content-center\">\n          <div>\n            <ion-text class=\"ion-text-center\">\n              <p [ngClass]=\"{'hide': menssage}\">Erro ao carregar usuários.</p>\n            </ion-text>\n            <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n              <ion-refresher-content\n                pullingIcon=\"chevron-down-circle-outline\"\n                pullingText=\"Puxe para baixo\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Atualizar...\"\n              >\n              </ion-refresher-content>\n            </ion-refresher>\n            <ion-text class=\"ion-text-center\">\n              <ion-button (mousedown)=\"hideMenssage()\"\n                >Puxe para atualizar\n                <ion-icon\n                  class=\"ion-margin-start\"\n                  name=\"arrow-down-circle\"\n                ></ion-icon>\n              </ion-button>\n            </ion-text>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ng-template #loadingNoError>\n    <span size=\"12\" class=\"ion-padding-bottom ion-padding-horizontal\">\n      <ion-skeleton-text animated class=\"search\"></ion-skeleton-text>\n    </span>\n    <span *ngFor=\"let item of sizeSkeleton\">\n      <div class=\"skeleton\">\n        <ion-skeleton-text animated class=\"avatar\"></ion-skeleton-text>\n        <div>\n          <ion-skeleton-text animated class=\"title\"></ion-skeleton-text>\n          <ion-skeleton-text animated class=\"line\"></ion-skeleton-text>\n        </div>\n      </div>\n    </span>\n  </ng-template>\n</ng-template>\n";

/***/ }),

/***/ 8101:
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/users/users.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  [scrollY]=\"true\"\n  (ionScroll)=\"logScrolling($event)\"\n>\n  <ion-grid fixed>\n    <!-- Navegação -->\n    <app-segment-component\n      (togglePage)=\"togglePage($event)\"\n    ></app-segment-component>\n\n    <ng-container *ngIf=\"toggleList;else ItemDeleted\">\n      <app-enabled-item-user></app-enabled-item-user>\n    </ng-container>\n\n    <ng-template #ItemDeleted>\n      <app-deleted-item-user></app-deleted-item-user>\n    </ng-template>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button\n      size=\"small\"\n      color=\"primary\"\n      class=\"fab\"\n      [ngClass]=\"{show: fab}\"\n      (click)=\"toTop()\"\n    >\n      <ion-icon name=\"arrow-up-circle\" color=\"light\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_components_header-modal_header-modal_module_ts-src_app_pages_dashboard_administrator_-672ace.js.map