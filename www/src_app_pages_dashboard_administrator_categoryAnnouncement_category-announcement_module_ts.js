(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_administrator_categoryAnnouncement_category-announcement_module_ts"],{

/***/ 62646:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/category-announcement-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementPageRoutingModule": () => (/* binding */ CategoryAnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _category_announcement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-announcement.page */ 85355);




const routes = [{
  path: '',
  component: _category_announcement_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
}];
let CategoryAnnouncementPageRoutingModule = class CategoryAnnouncementPageRoutingModule {};
CategoryAnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CategoryAnnouncementPageRoutingModule);


/***/ }),

/***/ 80621:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/category-announcement.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementPageModule": () => (/* binding */ CategoryAnnouncementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _component_category_announcement_create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../component/category-announcement/create/create.component */ 15152);
/* harmony import */ var _pages_enabled_item_enabled_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/enabled-item/enabled-item.component */ 32556);
/* harmony import */ var _component_category_announcement_category_announcement_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../component/category-announcement/category-announcement.module */ 310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _category_announcement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-announcement.page */ 85355);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/header/header.module */ 60677);
/* harmony import */ var src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/footer/footer.module */ 26444);
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.module */ 74463);
/* harmony import */ var _category_announcement_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-announcement-routing.module */ 62646);
/* harmony import */ var _pages_deleted_item_deleted_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/deleted-item/deleted-item.component */ 26498);















let CategoryAnnouncementPageModule = class CategoryAnnouncementPageModule {};
CategoryAnnouncementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _category_announcement_routing_module__WEBPACK_IMPORTED_MODULE_8__.CategoryAnnouncementPageRoutingModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule, src_app_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule, src_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule, _form_form_module__WEBPACK_IMPORTED_MODULE_7__.FormPageModule, _component_category_announcement_category_announcement_module__WEBPACK_IMPORTED_MODULE_2__.CategoryAnnouncementComponentModule],
  declarations: [_category_announcement_page__WEBPACK_IMPORTED_MODULE_3__.CategoryPage, _pages_deleted_item_deleted_item_component__WEBPACK_IMPORTED_MODULE_9__.DeletedItemComponent, _pages_enabled_item_enabled_item_component__WEBPACK_IMPORTED_MODULE_1__.EnabledItemComponent],
  providers: [_component_category_announcement_create_create_component__WEBPACK_IMPORTED_MODULE_0__.CategoryAnnouncementCreateComponent]
})], CategoryAnnouncementPageModule);


/***/ }),

/***/ 85355:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/category-announcement.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-announcement.page.html?ngResource */ 40437);
/* harmony import */ var _category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-announcement.page.scss?ngResource */ 80205);
/* harmony import */ var _category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/users.page.scss?ngResource */ 89403);
/* harmony import */ var _users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _component_category_announcement_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/category-announcement/create/create.component */ 15152);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/category.service */ 97150);








let CategoryPage = class CategoryPage {
  constructor(categoryService, categoryAnnouncementCreateComponent) {
    this.categoryService = categoryService;
    this.categoryAnnouncementCreateComponent = categoryAnnouncementCreateComponent;
    this.isOrder = false;
    this.fab = false;
  }
  setError(event) {
    this.error = event;
  }
  isEmpty(event) {
    this.empty = event;
  }
  register() {
    this.categoryAnnouncementCreateComponent.register();
  }
  orderList() {
    this.isOrder = !this.isOrder;
    this.sendOrder = !this.sendOrder;
  }
  isSaveOrder(e) {
    if (!e) {
      this.isOrder = e;
    }
    this.sendOrder = e;
  }
  saveOrder() {
    this.categoryService.saveSorting.emit(true);
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
CategoryPage.ctorParameters = () => [{
  type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService
}, {
  type: _component_category_announcement_create_create_component__WEBPACK_IMPORTED_MODULE_3__.CategoryAnnouncementCreateComponent
}];
CategoryPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, {
      static: true
    }]
  }]
};
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-category',
  template: _category_announcement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_category_announcement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CategoryPage);


/***/ }),

/***/ 26498:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/deleted-item/deleted-item.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedItemComponent": () => (/* binding */ DeletedItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deleted_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-item.component.html?ngResource */ 10267);
/* harmony import */ var _deleted_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-item.component.scss?ngResource */ 82070);
/* harmony import */ var _deleted_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deleted_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../users/users.page.scss?ngResource */ 89403);
/* harmony import */ var _users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_pages_dashboard_component_category_announcement_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/dashboard/component/category-announcement/search/service/search.service */ 17446);














let DeletedItemComponent = class DeletedItemComponent {
  constructor(route, categoryService, helpService, alertController, loadingService, messageService, searchService) {
    this.route = route;
    this.categoryService = categoryService;
    this.helpService = helpService;
    this.alertController = alertController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.searchService = searchService;
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.endListCategory = true;
    this.fab = false;
    this.sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.isOrder = false;
    this.sendOrder = false;
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
    this.getUrl();
    this.findCategory();
    this.initSearchBy();
    this.update();
    this.drop();
  }
  ngOnDestroy() {
    this.$category.unsubscribe();
    this.$drop.unsubscribe();
    this.$searchBy.unsubscribe();
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
  togglePage(e) {
    this.toggleList = e;
  }
  findMoreCategory(event) {
    this.calculatePagination();
    return this.$category = this.categoryService.index(`management/deleted`, {
      limit: this.limit,
      offset: this.offset
    }).subscribe({
      next: category => this.success(event, category),
      error: error => this.error.next(true),
      complete: () => this.helpService.delay(this.$category.unsubscribe(), 2000)
    });
  }
  search(event) {
    var _a, _b, _c;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.value.length) >= 3) {
      const data = this.setDataSearch((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.value);
      return this.$search = this.categoryService.searchBy(data).subscribe({
        next: category => {
          this.searchService.search = category;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }
      });
    }
  }
  restore(category, index) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const alert = yield this.alertController.create({
        header: 'Restaurar categoria',
        subHeader: category === null || category === void 0 ? void 0 : category.name,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'OK',
          role: 'confirm',
          handler: event => {
            const data = Object.assign(Object.assign({}, event), {
              id: category === null || category === void 0 ? void 0 : category.id,
              _csrf: category === null || category === void 0 ? void 0 : category._csrf
            });
            return this.restored(data, index);
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
  destroy(category, index) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const alert = yield this.alertController.create({
        header: 'Excluir categoria',
        subHeader: category === null || category === void 0 ? void 0 : category.name,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'OK',
          role: 'confirm',
          handler: event => {
            const data = Object.assign(Object.assign({}, event), {
              id: category === null || category === void 0 ? void 0 : category.id,
              _csrf: category === null || category === void 0 ? void 0 : category._csrf
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
  getUrl() {
    this.toggleListCategory = this.route.routerState.snapshot.url.includes('excluidas');
  }
  orderBy(search) {
    if (!this.category) {
      return;
    }
  }
  initSearchBy() {
    this.$searchBy = this.searchService.getSearchCategoryBy.subscribe({
      next: filter => {
        if (filter === 'name') {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'name';
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
  findCategory() {
    return this.category$ = this.categoryService.index(`management/deleted`, {
      limit: this.limit,
      offset: this.offset
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(category => this.category = category), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
      this.error.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY;
    }));
  }
  calculatePagination() {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }
  success(event, category) {
    this.setMoreData(category);
    this.updateScrollEvent(event, category);
    return;
  }
  updateScrollEvent(event, category) {
    event.target.complete();
    if (category.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }
  setMoreData(category) {
    return category.forEach(item => this.category.push(item));
  }
  update() {
    return this.$category = this.categoryService.categoryObservable.subscribe({
      next: category => {
        if (category) {
          const i = this.getIndexCategoryCurrent(category);
          if (i) this.switchBetweenAddAndUpdate(category, i);
        }
      }
    });
  }
  getIndexCategoryCurrent(category) {
    if (this.category) {
      const index = this.category.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (category === null || category === void 0 ? void 0 : category.id));
      return index;
    }
  }
  getIndexUserDropCurrent(category) {
    const index = this.category.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (category === null || category === void 0 ? void 0 : category.id));
    return index;
  }
  switchBetweenAddAndUpdate(category, i) {
    if (this.category) {
      this.category.splice(i, 1, category);
    }
  }
  drop() {
    this.$drop = this.categoryService.drop.subscribe({
      next: category => {
        if (category && this.toggleListCategory) {
          this.category.splice(this.getIndexUserDropCurrent(category), 1);
        }
      }
    });
  }
  delete(category, index) {
    const loading = this.loadingService.show('Excluindo categoria...');
    return this.$delete = this.categoryService.dropd(category).subscribe({
      next: category_ => this.messsage(category_, index, loading),
      error: error => this.messageService.error(error, loading, this.$delete)
    });
  }
  restored(data, index) {
    const loading = this.loadingService.show('Restaurar categoria...');
    return this.$delete = this.categoryService.restore(data).subscribe({
      next: category_ => this.messsage(category_, index, loading),
      error: error => this.messageService.error(error, loading, this.$delete)
    });
  }
  messsage(category, index, loading) {
    setTimeout(() => this.category.splice(index, 1), 3500);
    return this.messageService.success(category === null || category === void 0 ? void 0 : category.message, loading, this.$delete);
  }
};
DeletedItemComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}, {
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService
}, {
  type: src_app_pages_dashboard_component_category_announcement_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchCategoryAnnouncementService
}];
DeletedItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-category-announcement-deleted-item',
  template: _deleted_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_deleted_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DeletedItemComponent);


/***/ }),

/***/ 32556:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/enabled-item/enabled-item.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledItemComponent": () => (/* binding */ EnabledItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _enabled_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enabled-item.component.html?ngResource */ 78661);
/* harmony import */ var _enabled_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled-item.component.scss?ngResource */ 14741);
/* harmony import */ var _enabled_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enabled_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../users/users.page.scss?ngResource */ 89403);
/* harmony import */ var _users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_pages_enabled_item_component_card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/pages/enabled-item/component/card-desktop/card-desktop.component.scss?ngResource */ 42253);
/* harmony import */ var _users_pages_enabled_item_component_card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_users_pages_enabled_item_component_card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_pages_dashboard_component_category_announcement_search_service_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/dashboard/component/category-announcement/search/service/search.service */ 17446);














let EnabledItemComponent = class EnabledItemComponent {
  constructor(categoryService, loadingService, messageService, searchService, helpService, navCtrl, plt) {
    this.categoryService = categoryService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.searchService = searchService;
    this.helpService = helpService;
    this.navCtrl = navCtrl;
    this.plt = plt;
    this.setError = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(false);
    this.isEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(false);
    this.sendOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(false);
    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.endListCategory = true;
    this.fab = false;
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
    this.setLnWord();
    this.findCategory();
    this.initSearchBy();
    this.add();
    this.delete();
    this.saveSorting();
    this.update();
  }
  ngOnDestroy() {
    this.$searchBy.unsubscribe();
    this.$delete.unsubscribe();
    this.$saveSorting.unsubscribe();
    this.$update.unsubscribe();
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
  doReorder(ev) {
    if (ev) {
      this.sendOrder.emit(true);
      this.category = ev.detail.complete(this.category);
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
    var _a;
    const loading = this.loadingService.show('Ordenar categoria...');
    const result = this.category.map(item => item.id);
    if (result && result.length > 0) {
      const category = {
        order: result,
        _csrf: (_a = this.category[0]) === null || _a === void 0 ? void 0 : _a._csrf
      };
      this.$order = this.categoryService.order(category).subscribe({
        next: category_ => {
          setTimeout(() => {
            this.isOrder = false;
            this.sendOrder.emit(false);
          }, 3500);
          if (category_ === null || category_ === void 0 ? void 0 : category_.message) this.messageService.success(category_ === null || category_ === void 0 ? void 0 : category_.message, loading, this.$order);
        },
        error: error => this.messageService.error(error, loading, this.$order)
      });
    }
  }
  findMoreCategory(event) {
    this.calculatePagination();
    return this.$category = this.categoryService.index(`management`, {
      limit: this.limit,
      offset: this.offset
    }).subscribe({
      next: category => this.success(event, category),
      error: error => {
        this.error.next(true);
        return this.setError.next(true);
      },
      complete: () => this.helpService.delay(this.$category.unsubscribe(), 2000)
    });
  }
  search(event) {
    var _a, _b;
    if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.value.length) >= 3) {
      const data = this.setDataSearch(event.target.value);
      return this.$search = this.categoryService.searchBy(data).subscribe({
        next: category => {
          this.searchService.search = category;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }
      });
    }
  }
  orderBy(search) {
    if (this.category && search) {
      switch (search) {
        case 'name':
          this.category.sort((a, b) => (a === null || a === void 0 ? void 0 : a.name) < (b === null || b === void 0 ? void 0 : b.name) && -1);
          break;
        case 'createdAt':
          this.category.sort((a, b) => (a === null || a === void 0 ? void 0 : a.createdAt) > (b === null || b === void 0 ? void 0 : b.createdAt) && -1);
          break;
        case 'updatedAt':
          this.category.sort((a, b) => (a === null || a === void 0 ? void 0 : a.updatedAt) > (b === null || b === void 0 ? void 0 : b.updatedAt) && -1);
          break;
        case 'state':
          this.category.sort((a, b) => (a === null || a === void 0 ? void 0 : a.state) > (b === null || b === void 0 ? void 0 : b.state) && -1);
          break;
        case 'position':
          this.category.sort((a, b) => (a === null || a === void 0 ? void 0 : a.position) < (b === null || b === void 0 ? void 0 : b.position) && -1);
          break;
      }
    }
  }
  initSearchBy() {
    this.$searchBy = this.searchService.getSearchCategoryBy.subscribe({
      next: filter => {
        if (filter === 'name') {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'name';
          filter && this.orderBy(filter);
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
  findCategory() {
    return this.category$ = this.categoryService.index(`management`, {
      limit: this.limit,
      offset: this.offset
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(category => {
      var _a;
      this.category = category;
      return this.isEmpty.emit(((_a = this.category) === null || _a === void 0 ? void 0 : _a.length) > 0);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(error => {
      this.error.next(true);
      this.setError.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
    }));
  }
  calculatePagination() {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }
  success(event, category) {
    this.setMoreData(category);
    this.updateScrollEvent(event, category);
    return;
  }
  updateScrollEvent(event, category) {
    event.target.complete();
    if (category.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }
  setMoreData(category) {
    return category.forEach(item => this.category.push(item));
  }
  delete() {
    this.$delete = this.categoryService.deleted.subscribe({
      next: category => {
        var _a;
        if (category && this.category) {
          const i = this.getIndexCategoryCurrent(category);
          if (i) {
            const result = this.category.splice(i, 1);
            this.isEmpty.emit(((_a = this.category) === null || _a === void 0 ? void 0 : _a.length) > 0);
            if (result.length > 0) {
              return this.navCtrl.navigateBack(['/painel-de-controle', 'admin', 'categorias']);
            }
          }
        }
      }
    });
  }
  getIndexCategoryCurrent(category) {
    if (this.category) {
      const index = this.category.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (category === null || category === void 0 ? void 0 : category.id));
      return index;
    }
  }
  add() {
    return this.$category = this.categoryService.add.subscribe({
      next: category => {
        if (category) {
          this.isEmpty.emit(false);
          this.category.unshift(category);
        }
      }
    });
  }
  saveSorting() {
    return this.$saveSorting = this.categoryService.saveSorting.subscribe({
      next: is => is && this.saveOrder()
    });
  }
  update() {
    return this.$update = this.categoryService.categoryObservable.subscribe({
      next: category => {
        if (category && this.category) {
          const i = this.category.findIndex(category_ => (category_ === null || category_ === void 0 ? void 0 : category_.id) === (category === null || category === void 0 ? void 0 : category.id));
          this.category.splice(i, 1, category);
        }
      }
    });
  }
  setLnWord() {
    this.plt.ready().then(() => {
      if (!this.plt.is('mobile')) {
        this.ln = 64;
      } else {
        this.ln = 16;
      }
    });
  }
};
EnabledItemComponent.ctorParameters = () => [{
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService
}, {
  type: src_app_pages_dashboard_component_category_announcement_search_service_search_service__WEBPACK_IMPORTED_MODULE_8__.SearchCategoryAnnouncementService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_7__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
}];
EnabledItemComponent.propDecorators = {
  reorderGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonReorderGroup]
  }],
  setError: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  isEmpty: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  sendOrder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  isOrder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
EnabledItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-category-announcement-enabled-item',
  template: _enabled_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_enabled_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_users_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_users_pages_enabled_item_component_card_desktop_card_desktop_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], EnabledItemComponent);


/***/ }),

/***/ 80205:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/category-announcement.page.scss?ngResource ***!
  \***************************************************************************************************************/
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

/***/ 82070:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/deleted-item/deleted-item.component.scss?ngResource ***!
  \******************************************************************************************************************************/
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

/***/ 14741:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/enabled-item/enabled-item.component.scss?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flex {\n  width: 80px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/enabled-item/enabled-item.component.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF","sourcesContent":[".flex {\n  width: 80px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40437:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/category-announcement.page.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component></app-header-component>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  [scrollY]=\"true\"\n  (ionScroll)=\"logScrolling($event)\"\n>\n  <ion-grid fixed>\n    <ion-row>\n      <!-- Menu segmentento -->\n      <ion-col size=\"12\">\n        <app-category-segment-component\n          (togglePage)=\"togglePage($event)\"\n        ></app-category-segment-component>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <!-- Abilitados -->\n        <ng-container *ngIf=\"toggleList;else ItemDeleted\">\n          <app-category-announcement-enabled-item\n            [isOrder]=\"isOrder\"\n            (sendOrder)=\"isSaveOrder($event)\"\n            (setError)=\"setError($event)\"\n            (isEmpty)=\"isEmpty($event)\"\n          ></app-category-announcement-enabled-item>\n        </ng-container>\n\n        <!-- Lixeira -->\n        <ng-template #ItemDeleted>\n          <app-category-announcement-deleted-item></app-category-announcement-deleted-item>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Scroll top -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button\n      size=\"small\"\n      color=\"primary\"\n      class=\"fab\"\n      [ngClass]=\"{show: fab}\"\n      (click)=\"toTop()\"\n    >\n      <ion-icon name=\"arrow-up-circle\" color=\"light\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Salvar ordenação -->\n  <ion-fab\n    [hidden]=\"!toggleList\"\n    vertical=\"bottom\"\n    horizontal=\"center\"\n    slot=\"fixed\"\n    title=\"Salvar ordem da lista de categorias\"\n    aria-message=\"Salvar ordem da lista de categorias\"\n  >\n    <ion-fab-button [hidden]=\"!sendOrder\" color=\"primary\" (click)=\"saveOrder()\"\n      ><ion-icon name=\"save\" color=\"light\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Cadastrar e ordenar -->\n  <ion-fab\n    [hidden]=\"!toggleList || error || !empty\"\n    vertical=\"center\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    title=\"Cadastrar e ordenar categorias\"\n    aria-message=\"Cadastrar e ordenar categoria\"\n  >\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button\n        color=\"primary\"\n        title=\"Cadastrar categorias\"\n        aria-message=\"Cadastrar categorias\"\n        (click)=\"register()\"\n      >\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button\n        color=\"primary\"\n        title=\"Ordenar categorias\"\n        aria-message=\"Ordenar categorias\"\n        (click)=\"orderList()\"\n      >\n        <ion-icon name=\"reorder-four\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n<app-footer></app-footer>\n";

/***/ }),

/***/ 10267:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/deleted-item/deleted-item.component.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"category$ | async; else Error\">\n  <!-- Searsh -->\n  <ion-col size=\"12\" class=\"ion-no-padding\">\n    <app-search-category-component\n      *ngIf=\"category | isCategory : 10\"\n      (search)=\"search($event)\"\n    ></app-search-category-component>\n  </ion-col>\n  <!-- List item -->\n  <ion-item *ngFor=\"let item of category; let i = index\">\n    <ion-icon\n      slot=\"start\"\n      size=\"large\"\n      title=\"Imagem do categorias.\"\n      [src]=\"item?.image?.url || './../../../../assets/thumbnail.svg'\"\n    ></ion-icon>\n    <div class=\"item\">\n      <div>\n        <ion-label\n          [title]=\"'Nome: ' + item?.name\"\n          [attr.data-message]=\"'Nome: ' + item?.name\"\n        >\n          {{ item?.name | lnWords : 16 }}</ion-label\n        >\n        <div class=\"time\">\n          <small>{{ item?.createdAt | time : \"create\" }}</small>\n          <small>{{ item?.updatedAt | time : \"update\" }}</small>\n        </div>\n      </div>\n\n      <div>\n        <ion-button\n          (click)=\"destroy(item, i)\"\n          class=\"cursor-pointer\"\n          title=\"Exclui permanentemente\"\n          data-message=\"Exclui permanentemente\"\n          color=\"none\"\n        >\n          <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash\"></ion-icon>\n        </ion-button>\n        <ion-button\n          (click)=\"restore(item, i)\"\n          class=\"cursor-pointer\"\n          title=\"Restaurar categorias\"\n          data-message=\"Restaurar categorias\"\n          color=\"none\"\n        >\n          <ion-icon\n            slot=\"icon-only\"\n            color=\"success\"\n            name=\"play-back\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </ion-item>\n\n  <div class=\"content-center\" [hidden]=\"category | isCategory\">\n    <ion-icon size=\"large\" color=\"medium\" name=\"trash-outline\"></ion-icon>\n    <ion-text color=\"medium\"> Não á itens na lixeira. </ion-text>\n  </div>\n\n  <ion-card *ngIf=\"!endListCategory\">\n    <ion-text color=\"primary\" class=\"ion-text-center\">\n      <p>FIM</p>\n      <p *ngIf=\"category\">{{ category.length }} categorias</p>\n    </ion-text>\n  </ion-card>\n\n  <ion-infinite-scroll\n    (ionInfinite)=\"findMoreCategory($event)\"\n    *ngIf=\"endListCategory\"\n  >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando mais dados…\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ng-container>\n\n<ng-template #Error>\n  <ng-container *ngIf=\"error | async; else loadingNoError\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"content-center\">\n          <div>\n            <ion-text class=\"ion-text-center\">\n              <p [ngClass]=\"{ hide: menssage }\">Erro ao carregar categorias.</p>\n            </ion-text>\n            <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n              <ion-refresher-content\n                pullingIcon=\"chevron-down-circle-outline\"\n                pullingText=\"Puxe para baixo\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Atualizar...\"\n              >\n              </ion-refresher-content>\n            </ion-refresher>\n            <ion-text class=\"ion-text-center\">\n              <ion-button (mousedown)=\"hideMenssage()\"\n                >Puxe para atualizar\n                <ion-icon\n                  class=\"ion-margin-start\"\n                  name=\"arrow-down-circle\"\n                ></ion-icon>\n              </ion-button>\n            </ion-text>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ng-template #loadingNoError>\n    <span size=\"12\" class=\"ion-padding-bottom ion-padding-horizontal\">\n      <ion-skeleton-text animated class=\"search\"></ion-skeleton-text>\n    </span>\n    <span *ngFor=\"let item of sizeSkeleton\">\n      <div class=\"skeleton\">\n        <ion-skeleton-text animated class=\"avatar\"></ion-skeleton-text>\n        <div>\n          <ion-skeleton-text animated class=\"title\"></ion-skeleton-text>\n          <ion-skeleton-text animated class=\"line\"></ion-skeleton-text>\n        </div>\n      </div>\n    </span>\n  </ng-template>\n</ng-template>\n";

/***/ }),

/***/ 78661:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/administrator/categoryAnnouncement/pages/enabled-item/enabled-item.component.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"category$ | async; else Error\">\n  <!-- Searsh -->\n  <ion-col size=\"12\" class=\"ion-no-padding\">\n    <app-search-category-component\n      *ngIf=\"category | isCategory : 10\"\n      (search)=\"search($event)\"\n    ></app-search-category-component>\n  </ion-col>\n  <!-- List item -->\n  <ion-list>\n    <ion-reorder-group\n      (ionItemReorder)=\"doReorder($event)\"\n      [disabled]=\"!isOrder\"\n    >\n      <ion-reorder *ngFor=\"let category of category\">\n        <ion-item\n          detail=\"true\"\n          color=\"none\"\n          button\n          [routerLink]=\"[\n            '/painel-de-controle',\n            'admin',\n            'categoria',\n            category | categoryValues : 'slug'\n          ]\"\n        >\n          <ion-icon\n            slot=\"start\"\n            size=\"large\"\n            title=\"Imagem do categorias.\"\n            [src]=\"category | icon\"\n          ></ion-icon>\n\n          <div class=\"item\">\n            <div>\n              <ion-label\n                [title]=\"category | categoryValues : 'name' : 'Nome:'\"\n                [attr.data-message]=\"\n                  category | categoryValues : 'name' : 'Nome:'\n                \"\n              >\n                {{\n                  category | categoryValues : \"name\" | lnWords : ln\n                }}</ion-label\n              >\n              <div class=\"time\">\n                <small>{{\n                  category | categoryValues : \"createdAt\" | time : \"create\"\n                }}</small>\n                <small>{{\n                  category | categoryValues : \"updatedAt\" | time : \"update\"\n                }}</small>\n              </div>\n            </div>\n\n            <div class=\"flex\">\n              <small\n                [hidden]=\"!isOrder\"\n                data-message=\"Ordenar categorias\"\n                title=\"Ordenar categorias\"\n              >\n                <ion-icon name=\"reorder-three\" color=\"medium\"></ion-icon>\n                ordenar\n              </small>\n              <small\n                [attr.data-message]=\"\n                  (category | categoryValues : 'state')\n                    ? 'Categorias está online'\n                    : 'Categorias está offline'\n                \"\n                [title]=\"\n                  (category | categoryValues : 'state')\n                    ? 'Categorias está online'\n                    : 'Categorias está offline'\n                \"\n              >\n                <ion-icon\n                  size=\"small\"\n                  [color]=\"\n                    (category | categoryValues : 'state') ? 'success' : 'danger'\n                  \"\n                  slot=\"end\"\n                  [name]=\"\n                    (category | categoryValues : 'state')\n                      ? 'power'\n                      : 'radio-button-off'\n                  \"\n                ></ion-icon>\n                {{\n                  (category | categoryValues : \"state\") ? \"online\" : \"offline\"\n                }}\n              </small>\n            </div>\n          </div>\n        </ion-item>\n      </ion-reorder>\n    </ion-reorder-group>\n  </ion-list>\n  <!-- Buttom create -->\n  <app-category-announcement-create-component\n    [category]=\"category\"\n  ></app-category-announcement-create-component>\n\n  <ion-card *ngIf=\"!endListCategory\">\n    <ion-text class=\"ion-text-center\">\n      <p>FIM</p>\n      <p *ngIf=\"category\">{{ category.length }} categorias</p>\n    </ion-text>\n  </ion-card>\n\n  <ion-infinite-scroll\n    (ionInfinite)=\"findMoreCategory($event)\"\n    *ngIf=\"endListCategory\"\n  >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando mais dados…\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ng-container>\n\n<ng-template #Error>\n  <ng-container *ngIf=\"error | async; else loadingNoError\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"content-center\">\n          <div>\n            <ion-text class=\"ion-text-center\">\n              <p [ngClass]=\"{ hide: menssage }\">Erro ao carregar categorias.</p>\n            </ion-text>\n            <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresher($event)\">\n              <ion-refresher-content\n                pullingIcon=\"chevron-down-circle-outline\"\n                pullingText=\"Puxe para baixo\"\n                refreshingSpinner=\"circles\"\n                refreshingText=\"Atualizar...\"\n              >\n              </ion-refresher-content>\n            </ion-refresher>\n            <ion-text class=\"ion-text-center\">\n              <ion-button (mousedown)=\"hideMenssage()\"\n                >Puxe para atualizar\n                <ion-icon\n                  class=\"ion-margin-start\"\n                  name=\"arrow-down-circle\"\n                ></ion-icon>\n              </ion-button>\n            </ion-text>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ng-template #loadingNoError>\n    <span size=\"12\" class=\"ion-padding-bottom ion-padding-horizontal\">\n      <ion-skeleton-text animated class=\"search\"></ion-skeleton-text>\n    </span>\n    <span *ngFor=\"let item of sizeSkeleton\">\n      <div class=\"skeleton\">\n        <ion-skeleton-text animated class=\"avatar\"></ion-skeleton-text>\n        <div>\n          <ion-skeleton-text animated class=\"title\"></ion-skeleton-text>\n          <ion-skeleton-text animated class=\"line\"></ion-skeleton-text>\n        </div>\n      </div>\n    </span>\n  </ng-template>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_administrator_categoryAnnouncement_category-announcement_module_ts.js.map