(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_component_category-announcement_category-announcement_module_ts"],{

/***/ 310:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/category-announcement.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementComponentModule": () => (/* binding */ CategoryAnnouncementComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update/form/form.component */ 67786);
/* harmony import */ var _update_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update/category.component */ 17209);
/* harmony import */ var src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/header-modal/header-modal.module */ 32728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _state_service_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/service/state.service */ 5707);
/* harmony import */ var _segment_segment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./segment/segment.component */ 66856);
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/state.component */ 46007);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ 15152);
/* harmony import */ var _create_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/form/form.component */ 25836);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var _create_service_create_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create/service/create.service */ 60889);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_service_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update/service/category.service */ 63405);
/* harmony import */ var _image_image_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image/image-category.component */ 26864);
/* harmony import */ var _image_service_image_category_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image/service/image-category.service */ 87143);
/* harmony import */ var _destroy_destroy_announcement_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./destroy/destroy-announcement.component */ 61164);
/* harmony import */ var _destroy_service_destroy_announcement_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./destroy/service/destroy-announcement.service */ 6641);
/* harmony import */ var _destroy_form_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./destroy/form/form.component */ 2990);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/search.component */ 77838);
/* harmony import */ var _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/filter/filter-menu.component */ 55859);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/service/search.service */ 17446);
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category/category.component */ 10467);

























let CategoryAnnouncementComponentModule = class CategoryAnnouncementComponentModule {};
CategoryAnnouncementComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonicModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__.PipeModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_9__.FormComponentModule, src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModalModule],
  declarations: [_category_category_component__WEBPACK_IMPORTED_MODULE_20__.CategoryComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_4__.SegmentComponent, _state_state_component__WEBPACK_IMPORTED_MODULE_5__.CategoryAnnouncementStateComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_6__.CategoryAnnouncementCreateComponent, _create_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormCategoryCreateComponent, _update_form_form_component__WEBPACK_IMPORTED_MODULE_0__.FormCategoryUpdateComponent, _update_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryAnnouncementUpdateComponent, _image_image_category_component__WEBPACK_IMPORTED_MODULE_12__.ImageCategoryComponent, _destroy_destroy_announcement_component__WEBPACK_IMPORTED_MODULE_14__.DestroyAnnouncementComponent, _destroy_form_form_component__WEBPACK_IMPORTED_MODULE_16__.FormDestroyAnnouncementComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_17__.SearchCategoryComponent, _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_18__.FilterMenuCategoryComponent],
  exports: [_category_category_component__WEBPACK_IMPORTED_MODULE_20__.CategoryComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_4__.SegmentComponent, _state_state_component__WEBPACK_IMPORTED_MODULE_5__.CategoryAnnouncementStateComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_6__.CategoryAnnouncementCreateComponent, _create_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormCategoryCreateComponent, _update_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryAnnouncementUpdateComponent, _image_image_category_component__WEBPACK_IMPORTED_MODULE_12__.ImageCategoryComponent, _destroy_destroy_announcement_component__WEBPACK_IMPORTED_MODULE_14__.DestroyAnnouncementComponent, _destroy_form_form_component__WEBPACK_IMPORTED_MODULE_16__.FormDestroyAnnouncementComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_17__.SearchCategoryComponent, _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_18__.FilterMenuCategoryComponent],
  providers: [_state_service_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService, _create_service_create_service__WEBPACK_IMPORTED_MODULE_10__.CreateCategoryAnnouncementService, _update_service_category_service__WEBPACK_IMPORTED_MODULE_11__.UpdateCategoryAnnouncementService, _image_service_image_category_service__WEBPACK_IMPORTED_MODULE_13__.ImageCategoryService, _destroy_service_destroy_announcement_service__WEBPACK_IMPORTED_MODULE_15__.DestroyAnnouncementService, _search_service_search_service__WEBPACK_IMPORTED_MODULE_19__.SearchCategoryAnnouncementService]
})], CategoryAnnouncementComponentModule);


/***/ }),

/***/ 10467:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/category/category.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component.html?ngResource */ 80917);
/* harmony import */ var _category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component.scss?ngResource */ 77349);
/* harmony import */ var _category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_pages_public_home_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/public/home/services/home.service */ 70759);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/category.service */ 62507);









let CategoryComponent = class CategoryComponent {
  constructor(fb, categoryAnnouncementService, messageService, categoryService, loadingService) {
    this.fb = fb;
    this.categoryAnnouncementService = categoryAnnouncementService;
    this.messageService = messageService;
    this.categoryService = categoryService;
    this.loadingService = loadingService;
  }
  ngOnInit() {
    this.getCategory();
  }
  select(e) {
    var _a, _b, _c, _d;
    const id = (_b = (_a = this.announcement) === null || _a === void 0 ? void 0 : _a.categoryAnnouncement) === null || _b === void 0 ? void 0 : _b.id;
    this.form = this.fb.group({
      id,
      announcementId: (_c = this.announcement) === null || _c === void 0 ? void 0 : _c.id,
      catAdId: e.detail.value,
      // eslint-disable-next-line no-underscore-dangle
      _csrf: (_d = this.announcement) === null || _d === void 0 ? void 0 : _d._csrf
    });
    const message = id ? 'Editando categoria...' : 'Cadastrando categoria...';
    const loading = this.loadingService.show(message);
    return this.$category = this.categoryAnnouncementService.category(this.form.value).subscribe({
      next: categoryAnnouncement_ => categoryAnnouncement_ && this.success(categoryAnnouncement_, loading),
      error: error => this.messageService.error(error, loading, this.$category)
    });
  }
  success(categoryAnnouncement_, loading) {
    var _a;
    if (((_a = this.announcement) === null || _a === void 0 ? void 0 : _a.category) && (categoryAnnouncement_ === null || categoryAnnouncement_ === void 0 ? void 0 : categoryAnnouncement_.message)) {
      this.announcement.category = categoryAnnouncement_ === null || categoryAnnouncement_ === void 0 ? void 0 : categoryAnnouncement_.category;
      return this.messageService.success(categoryAnnouncement_ === null || categoryAnnouncement_ === void 0 ? void 0 : categoryAnnouncement_.message, loading, this.$category, 2000);
    }
  }
  getCategory() {
    this.category$ = this.categoryService.asObservable();
  }
};
CategoryComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _service_category_service__WEBPACK_IMPORTED_MODULE_5__.CategoryAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}, {
  type: src_app_pages_public_home_services_home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}];
CategoryComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
CategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-category-component',
  template: _category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryComponent);


/***/ }),

/***/ 15152:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/create.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementCreateComponent": () => (/* binding */ CategoryAnnouncementCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.component.html?ngResource */ 34117);
/* harmony import */ var _create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.component.scss?ngResource */ 23978);
/* harmony import */ var _create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 25836);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);







let CategoryAnnouncementCreateComponent = class CategoryAnnouncementCreateComponent {
  constructor(authService, modalController) {
    this.authService = authService;
    this.modalController = modalController;
  }
  // Create
  register() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormCategoryCreateComponent,
        componentProps: {
          action: 'register',
          label: 'Cadastrar categoria',
          category: {
            name: null,
            description: null,
            // eslint-disable-next-line no-underscore-dangle
            _csrf: this.authService.getCsrf
          }
        }
      });
      return yield modal.present();
    });
  }
};
CategoryAnnouncementCreateComponent.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];
CategoryAnnouncementCreateComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
CategoryAnnouncementCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-category-announcement-create-component',
  template: _create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryAnnouncementCreateComponent);


/***/ }),

/***/ 25836:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/form/form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCategoryCreateComponent": () => (/* binding */ FormCategoryCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 5639);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 76830);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _service_create_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/create.service */ 60889);









let FormCategoryCreateComponent = class FormCategoryCreateComponent {
  constructor(helpService, modalController, categoryService, messageService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.categoryService = categoryService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/category',
      icon: 'create',
      label: 'Cadastrar',
      aria: 'Cadastrar categoria.',
      title: 'Cadastrar categoria.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.register(event);
  }
  // Update Name description
  register(event) {
    const loading = this.loadingService.show('Cadastrar categoria...');
    return this.write = this.categoryService.register(event.value).subscribe({
      next: category => this.messsage(category, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(category, loading) {
    if (category === null || category === void 0 ? void 0 : category.message) {
      this.helpService.delay(() => this.modalController.dismiss(), 2500);
      return this.messageService.success(category === null || category === void 0 ? void 0 : category.message, loading, this.write);
    }
  }
  getData() {
    this.config = Object.assign({}, this.category);
  }
};
FormCategoryCreateComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _service_create_service__WEBPACK_IMPORTED_MODULE_5__.CreateCategoryAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}];
FormCategoryCreateComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormCategoryCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormCategoryCreateComponent);


/***/ }),

/***/ 60889:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/service/create.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCategoryAnnouncementService": () => (/* binding */ CreateCategoryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);







let CreateCategoryAnnouncementService = class CreateCategoryAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, categoryService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.categoryService = categoryService;
    this.setApi = `category`;
  }
  register(category) {
    return this.create(category, 'management/register').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(category_ => this.categoryService.add.emit(category_)));
  }
};
CreateCategoryAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
}];
CreateCategoryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], CreateCategoryAnnouncementService);


/***/ }),

/***/ 61164:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/destroy-announcement.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestroyAnnouncementComponent": () => (/* binding */ DestroyAnnouncementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _destroy_announcement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-announcement.component.html?ngResource */ 94145);
/* harmony import */ var _destroy_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destroy-announcement.component.scss?ngResource */ 14133);
/* harmony import */ var _destroy_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_destroy_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 2990);






let DestroyAnnouncementComponent = class DestroyAnnouncementComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  destroy() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.category) {
        const {
          _csrf,
          id
        } = this.category;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormDestroyAnnouncementComponent,
          componentProps: {
            action: 'destroy',
            label: 'Excluir categoria',
            category: {
              _csrf,
              password: '',
              id
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
DestroyAnnouncementComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
DestroyAnnouncementComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
DestroyAnnouncementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-destroy-announcement-component',
  template: _destroy_announcement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_destroy_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DestroyAnnouncementComponent);


/***/ }),

/***/ 2990:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/form/form.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDestroyAnnouncementComponent": () => (/* binding */ FormDestroyAnnouncementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 672);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 73003);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var _service_destroy_announcement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/destroy-announcement.service */ 6641);









let FormDestroyAnnouncementComponent = class FormDestroyAnnouncementComponent {
  constructor(helpService, modalController, categoryService, messageService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.categoryService = categoryService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/destroy',
      icon: 'trash',
      label: 'Excluir categoria',
      aria: 'Excluir categoria.',
      title: 'Excluir categoria.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.destroy(event);
  }
  destroy(event) {
    const loading = this.loadingService.show('Excluindo categoria...');
    return this.write = this.categoryService.delete(event.value).subscribe({
      next: category => this.messsage(category, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(category, loading) {
    if (category === null || category === void 0 ? void 0 : category.message) {
      this.helpService.delay(() => this.modalController.dismiss(), 2500);
      return this.messageService.success(category === null || category === void 0 ? void 0 : category.message, loading, this.write);
    }
  }
  getData() {
    const {
      _csrf,
      id,
      password
    } = this.category;
    this.config = {
      _csrf,
      id,
      password
    };
  }
};
FormDestroyAnnouncementComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _service_destroy_announcement_service__WEBPACK_IMPORTED_MODULE_5__.DestroyAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}];
FormDestroyAnnouncementComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormDestroyAnnouncementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormDestroyAnnouncementComponent);


/***/ }),

/***/ 6641:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/service/destroy-announcement.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestroyAnnouncementService": () => (/* binding */ DestroyAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);







let DestroyAnnouncementService = class DestroyAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, categoryService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.categoryService = categoryService;
    this.setApi = `category`;
  }
  delete(category) {
    return this.destroy(category, `management/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(category_ => setTimeout(() => this.categoryService.deleted.emit(category_), 3600)));
  }
};
DestroyAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
}];
DestroyAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], DestroyAnnouncementService);


/***/ }),

/***/ 26864:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/image/image-category.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCategoryComponent": () => (/* binding */ ImageCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _image_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-category.component.html?ngResource */ 567);
/* harmony import */ var _image_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-category.component.scss?ngResource */ 50878);
/* harmony import */ var _image_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_image_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/image-category.service */ 87143);






let ImageCategoryComponent = class ImageCategoryComponent {
  constructor(imageCategoryService, messageService) {
    this.imageCategoryService = imageCategoryService;
    this.messageService = messageService;
  }
  sendFile(input) {
    if ((input === null || input === void 0 ? void 0 : input.files) && input.files[0].type === 'image/svg+xml') {
      const file = this.buildDataUpload();
      if (file) return this.$upload = this.imageCategoryService.uploadIcon(file, input.files[0]).subscribe({
        next: response => this.success(response, response, this.$upload),
        error: error => this.messageService.error(error, undefined, this.$upload)
      });
    }
  }
  buildDataUpload() {
    if (this.category) return {
      catAdId: this.category.id,
      _csrf: this.category._csrf
    };
  }
  loadFile(file) {
    return file.click();
  }
  deleteIcon() {
    var _a;
    if (this.category) {
      this.category.image._csrf = (_a = this.category) === null || _a === void 0 ? void 0 : _a._csrf;
      const image = Object.assign({}, this.category.image);
      return this.$deleteIcon = this.imageCategoryService.deleteIcon(image).subscribe({
        next: image_ => image_ && this.update(image_, 'Icone excluido com sucesso.', this.$deleteIcon)
      });
    }
  }
  success(httpHeaderResponse, httpResponse, subscription) {
    if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
      return this.complete(httpResponse, subscription);
    }
  }
  complete(httpResponse, subscription) {
    const {
      body
    } = httpResponse;
    if (body) {
      const image = body;
      this.update(image, 'Icone adicionado com sucesso.', subscription);
    }
  }
  update(icon, message, subscription) {
    this.setIcon(icon);
    this.messageService.success(message, undefined, subscription, 2000);
  }
  setIcon(icon) {
    this.imageCategoryService.setIcon = icon;
  }
};
ImageCategoryComponent.ctorParameters = () => [{
  type: _service_image_category_service__WEBPACK_IMPORTED_MODULE_3__.ImageCategoryService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
ImageCategoryComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
ImageCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-image-category-component',
  template: _image_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_image_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ImageCategoryComponent);


/***/ }),

/***/ 87143:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/image/service/image-category.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCategoryService": () => (/* binding */ ImageCategoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);






let ImageCategoryService = class ImageCategoryService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
  constructor(http, storageService, categoryService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.categoryService = categoryService;
    this.setApi = `category`;
  }
  set setIcon(value) {
    if (this.categoryService.getCategory) {
      this.categoryService.getCategory.image = value;
      this.categoryService.setCategory = this.categoryService.getCategory;
    }
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  deleteIcon(image) {
    return this.destroy(image, `management/icon`);
  }
  uploadIcon(image, file) {
    const data = this.buildFileData(image, file);
    if (data && image._csrf) {
      this.loadCsrf(image);
      return this.upload(data, 'upload');
    }
  }
  loadCsrf(image) {
    this.setCsrf = image._csrf;
  }
  buildFileData(image, file) {
    if (image && file && file.type === 'image/svg+xml') {
      const formData = new FormData();
      formData.append('catAdId', `${image.catAdId}`);
      image._csrf && formData.append('_csrf', image._csrf);
      formData.append('filename', file, file === null || file === void 0 ? void 0 : file.name);
      return formData;
    }
  }
};
ImageCategoryService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService
}];
ImageCategoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], ImageCategoryService);


/***/ }),

/***/ 55859:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/filter/filter-menu.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuCategoryComponent": () => (/* binding */ FilterMenuCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-menu.component.html?ngResource */ 19442);
/* harmony import */ var _filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-menu.component.scss?ngResource */ 79835);
/* harmony import */ var _filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search.service */ 17446);






let FilterMenuCategoryComponent = class FilterMenuCategoryComponent {
  constructor(searchCategoryAnnouncementService, popoverController) {
    this.searchCategoryAnnouncementService = searchCategoryAnnouncementService;
    this.popoverController = popoverController;
  }
  ngOnInit() {
    this.filter();
  }
  ngOnDestroy() {
    this.$isIcon.unsubscribe();
  }
  searchBy(searchBy) {
    this.searchCategoryAnnouncementService.setSearchCategoryBy = searchBy;
  }
  close() {
    return this.popoverController.dismiss();
  }
  filter() {
    this.$isIcon = this.searchCategoryAnnouncementService.getSearchCategoryBy.subscribe({
      next: filter => {
        if (filter) this.isIcon = filter;
      }
    });
  }
};
FilterMenuCategoryComponent.ctorParameters = () => [{
  type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchCategoryAnnouncementService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
}];
FilterMenuCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-search-menu-category-component',
  template: _filter_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FilterMenuCategoryComponent);


/***/ }),

/***/ 77838:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/search.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCategoryComponent": () => (/* binding */ SearchCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 57113);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 98047);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/search.service */ 17446);
/* harmony import */ var _filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter-menu.component */ 55859);
/* harmony import */ var src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/module-dark/module-dark.service */ 22129);











let SearchCategoryComponent = class SearchCategoryComponent {
  constructor(navCtrl, router, searchCategoryAnnouncementService, popoverController, moduleDarkService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.searchCategoryAnnouncementService = searchCategoryAnnouncementService;
    this.popoverController = popoverController;
    this.moduleDarkService = moduleDarkService;
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.placeholder = 'Digite nome';
  }
  ngOnDestroy() {
    this.$isDark.unsubscribe();
  }
  ngOnInit() {
    this.searchList();
    this.getDark();
    this.toggleDark();
  }
  getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }
  toggleDark() {
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
    if (URL.includes('categorias')) {
      return this.navCtrl.navigateForward([URL[1], 'admin', 'categoria', url === null || url === void 0 ? void 0 : url.slug]);
    }
  }
  menuShow(ev) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popoverController.create({
        component: _filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__.FilterMenuCategoryComponent,
        event: ev,
        translucent: true
      });
      yield popover.present();
      const {
        role
      } = yield popover.onDidDismiss();
    });
  }
  searchList() {
    return this.search$ = this.searchCategoryAnnouncementService.search.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(search => {
      if (search.length >= 0) {
        this.show = true;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      this.error$.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
    }));
  }
};
SearchCategoryComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchCategoryAnnouncementService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController
}, {
  type: src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_4__.ModuleDarkService
}];
SearchCategoryComponent.propDecorators = {
  search: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};
SearchCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-search-category-component',
  template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SearchCategoryComponent);


/***/ }),

/***/ 17446:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/service/search.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCategoryAnnouncementService": () => (/* binding */ SearchCategoryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);



let SearchCategoryAnnouncementService = class SearchCategoryAnnouncementService {
  constructor() {
    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(undefined);
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this.setSearchCategoryBy = 'name';
  }
  get getSearchCategoryBy() {
    return this.search$.asObservable();
  }
  get search() {
    return this.result.asObservable();
  }
  set search(value) {
    this.result.emit(value);
  }
  set setSearchCategoryBy(searchBy) {
    this.search$.next(searchBy);
  }
};
SearchCategoryAnnouncementService.ctorParameters = () => [];
SearchCategoryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], SearchCategoryAnnouncementService);


/***/ }),

/***/ 66856:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/segment/segment.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentComponent": () => (/* binding */ SegmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment.component.html?ngResource */ 88165);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment.component.scss?ngResource */ 77416);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





let SegmentComponent = class SegmentComponent {
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
SegmentComponent.ctorParameters = () => [];
SegmentComponent.propDecorators = {
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
SegmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-category-segment-component',
  template: _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentComponent);


/***/ }),

/***/ 5707:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/state/service/state.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);







let StateService = class StateService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, categoryService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.categoryService = categoryService;
    this.setApi = `category`;
  }
  set setState(category) {
    if (this.categoryService.getCategory) {
      this.categoryService.getCategory.state = category === null || category === void 0 ? void 0 : category.state;
      this.categoryService.getCategory.updatedAt = category === null || category === void 0 ? void 0 : category.updatedAt;
      this.categoryService.setCategory = this.categoryService.getCategory;
    }
  }
  state(category) {
    return this.patch(category, 'management/state').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(category_ => this.setState = category_));
  }
};
StateService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
}];
StateService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], StateService);


/***/ }),

/***/ 46007:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/state/state.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementStateComponent": () => (/* binding */ CategoryAnnouncementStateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.component.html?ngResource */ 14194);
/* harmony import */ var _state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.component.scss?ngResource */ 64990);
/* harmony import */ var _state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/state.service */ 5707);







let CategoryAnnouncementStateComponent = class CategoryAnnouncementStateComponent {
  constructor(fb, stateService, messageService) {
    this.fb = fb;
    this.stateService = stateService;
    this.messageService = messageService;
  }
  // State
  state() {
    if (this.category) {
      const {
        slug,
        _csrf
      } = this.category;
      this.form = this.fb.group({
        slug,
        _csrf
      });
      return this.$state = this.stateService.state(this.form.value).subscribe({
        next: category_ => (category_ === null || category_ === void 0 ? void 0 : category_.message) && this.messageService.success(category_ === null || category_ === void 0 ? void 0 : category_.message, undefined, this.$state, 350),
        error: error => this.messageService.error(error, undefined, this.$state)
      });
    }
  }
};
CategoryAnnouncementStateComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _service_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
CategoryAnnouncementStateComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
CategoryAnnouncementStateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-category-announcement-state-component',
  template: _state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryAnnouncementStateComponent);


/***/ }),

/***/ 17209:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/category.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAnnouncementUpdateComponent": () => (/* binding */ CategoryAnnouncementUpdateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component.html?ngResource */ 87902);
/* harmony import */ var _category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component.scss?ngResource */ 72994);
/* harmony import */ var _category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 67786);






let CategoryAnnouncementUpdateComponent = class CategoryAnnouncementUpdateComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  name() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.category) {
        const {
          _csrf,
          name,
          description,
          slug
        } = this.category;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormCategoryUpdateComponent,
          componentProps: {
            action: 'name',
            label: 'Editar',
            category: {
              _csrf,
              name,
              description,
              slug
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
CategoryAnnouncementUpdateComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
CategoryAnnouncementUpdateComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
CategoryAnnouncementUpdateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-category-announcement-update-component',
  template: _category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryAnnouncementUpdateComponent);


/***/ }),

/***/ 67786:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/form/form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCategoryUpdateComponent": () => (/* binding */ FormCategoryUpdateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 26121);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 58297);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/category.service */ 63405);









let FormCategoryUpdateComponent = class FormCategoryUpdateComponent {
  constructor(helpService, modalController, categoryService, messageService, loadingService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.categoryService = categoryService;
    this.messageService = messageService;
    this.loadingService = loadingService;
    this.attrButton = {
      route: '/category',
      icon: 'create',
      label: 'Editar',
      aria: 'Editar categoria.',
      title: 'Editar categoria.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.update(event);
  }
  update(event) {
    const loading = this.loadingService.show('Cadastrar categoria...');
    return this.write = this.categoryService.updateNameAndDescription(event.value).subscribe({
      next: category => this.messsage(category, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(category, loading) {
    if (category === null || category === void 0 ? void 0 : category.message) {
      this.helpService.delay(() => this.modalController.dismiss(), 2500);
      return this.messageService.success(category === null || category === void 0 ? void 0 : category.message, loading, this.write);
    }
  }
  getData() {
    const {
      _csrf,
      name,
      description,
      slug
    } = this.category;
    this.config = {
      _csrf,
      name,
      description,
      slug
    };
  }
};
FormCategoryUpdateComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_4__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _service_category_service__WEBPACK_IMPORTED_MODULE_5__.UpdateCategoryAnnouncementService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}];
FormCategoryUpdateComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormCategoryUpdateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormCategoryUpdateComponent);


/***/ }),

/***/ 63405:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/service/category.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCategoryAnnouncementService": () => (/* binding */ UpdateCategoryAnnouncementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service */ 97150);
/* harmony import */ var src_app_header_breadcrumbs_service_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/breadcrumbs/service/breadcrumbs.service */ 21247);









let UpdateCategoryAnnouncementService = class UpdateCategoryAnnouncementService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, categoryService, location, breadcrumbsService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.categoryService = categoryService;
    this.location = location;
    this.breadcrumbsService = breadcrumbsService;
    this.setApi = `category`;
  }
  set setCategory(category) {
    if (this.categoryService.getCategory) {
      this.categoryService.getCategory.name = category === null || category === void 0 ? void 0 : category.name;
      this.categoryService.getCategory.description = category === null || category === void 0 ? void 0 : category.description;
      this.categoryService.getCategory.updatedAt = category === null || category === void 0 ? void 0 : category.updatedAt;
      this.categoryService.getCategory.slug = category.slug;
      this.categoryService.setCategory = this.categoryService.getCategory;
      this.updateUsersUrl(category);
    }
  }
  updateNameAndDescription(category) {
    return this.patch(category, 'management/name-description').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(category_ => this.setCategory = category_));
  }
  updateUsersUrl(category) {
    const url = `/painel-de-controle/admin/categoria/${category === null || category === void 0 ? void 0 : category.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
};
UpdateCategoryAnnouncementService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_categoryAnnouncement_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: src_app_header_breadcrumbs_service_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsService
}];
UpdateCategoryAnnouncementService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()], UpdateCategoryAnnouncementService);


/***/ }),

/***/ 77349:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/category/category.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".description {\n  border: 1px solid var(--ion-color-danger);\n  padding: 16px;\n  border-radius: 4px;\n}\n\n.tooltip {\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  width: 100%;\n  background-color: black;\n  color: #fff;\n  border-radius: 6px;\n  padding: 12px;\n  position: relative;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/category-announcement/category/category.component.scss"],"names":[],"mappings":"AAAA;EACE,yCAAA;EACA,aAAA;EACA,kBAAA;AACF;;AAEA;EACE,+BAAA;AACF;;AAEA;EACE,WAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AACF","sourcesContent":[".description {\n  border: 1px solid var(--ion-color-danger);\n  padding: 16px;\n  border-radius: 4px;\n}\n\n.tooltip {\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  width: 100%;\n  background-color: black;\n  color: #fff;\n  border-radius: 6px;\n  padding: 12px;\n  position: relative;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 23978:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/create.component.scss?ngResource ***!
  \*********************************************************************************************************/
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

/***/ 76830:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/form/form.component.scss?ngResource ***!
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

/***/ 14133:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/destroy-announcement.component.scss?ngResource ***!
  \************************************************************************************************************************/
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

/***/ 73003:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/form/form.component.scss?ngResource ***!
  \*************************************************************************************************************/
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

/***/ 50878:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/image/image-category.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container > div {\n  align-self: center;\n  position: relative;\n  cursor: pointer;\n}\n.container > div > ion-thumbnail {\n  width: 80px;\n  height: 80px;\n}\n.container > div > ion-icon {\n  position: absolute;\n  right: -10px;\n  bottom: -5px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/category-announcement/image/image-category.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AACF;AACE;EACE,kBAAA;EACA,kBAAA;EACA,eAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN;AAEI;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AAAN","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > div {\n    align-self: center;\n    position: relative;\n    cursor: pointer;\n\n    > ion-thumbnail {\n      width: 80px;\n      height: 80px;\n    }\n\n    > ion-icon {\n      position: absolute;\n      right: -10px;\n      bottom: -5px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79835:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/filter/filter-menu.component.scss?ngResource ***!
  \*********************************************************************************************************************/
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

/***/ 98047:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/search.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.dropdown {\n  position: relative;\n  display: block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  width: 98.4%;\n  margin-top: -7px;\n  left: 8px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 99999;\n}\n\n.show {\n  display: block;\n}\n\n.list,\n.list-lg,\n.list-md,\n.list-sm,\n.list-xl {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-thumbnail {\n  width: 35px;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/category-announcement/search/search.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,iBAAA;AACF;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,cAAA;EACA,sBAAA;EACA,cAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;;;;;EAKE,gBAAA;EACA,mBAAA;AAEF;;AACA;EACE,WAAA;EACA,YAAA;AAEF","sourcesContent":[".search {\n  display: flex;\n  flex-wrap: nowrap;\n}\n.dropdown {\n  position: relative;\n  display: block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  width: 98.4%;\n  margin-top: -7px;\n  left: 8px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 99999;\n}\n\n.show {\n  display: block;\n}\n\n.list,\n.list-lg,\n.list-md,\n.list-sm,\n.list-xl {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-thumbnail {\n  width: 35px;\n  height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77416:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/segment/segment.component.scss?ngResource ***!
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

/***/ 64990:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/state/state.component.scss?ngResource ***!
  \*******************************************************************************************************/
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

/***/ 72994:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/category.component.scss?ngResource ***!
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

/***/ 58297:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/form/form.component.scss?ngResource ***!
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

/***/ 80917:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/category/category.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-divider>\n    <ion-icon color=\"mediun\" name=\"list\" slot=\"start\"></ion-icon>\n    <ion-label>Categoria</ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-select\n      *ngIf=\"category$ | async; let category\"\n      placeholder=\"Selecione uma categoria\"\n      (ionChange)=\"select($event)\"\n      [value]=\"announcement?.category?.id || null\"\n      okText=\"OK\"\n      cancelText=\"Cancelar\"\n    >\n      <ion-select-option *ngFor=\"let item of category\" [value]=\"item?.id\">{{\n        item?.name\n      }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-item-group>\n<div [hidden]=\"!announcement?.category?.description\">\n  <ion-text class=\"tooltip\" color=\"danger\">\n    <p class=\"tooltiptext\">\n      {{ announcement?.category?.description }}\n    </p>\n  </ion-text>\n</div>\n";

/***/ }),

/***/ 34117:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/create.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card *ngIf=\"category?.length === 0\">\n  <ion-card-content>\n    <ion-text color=\"primary\" class=\"ion-text-center\">\n      <p style=\"font-size: 1.5em\">Não a categoria cadastrada</p>\n      <ion-button expand=\"block\" (click)=\"register()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        &nbsp; Cadastrar categorias\n      </ion-button>\n    </ion-text>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 5639:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/create/form/form.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 94145:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/destroy-announcement.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  detail=\"true\"\n  (click)=\"destroy()\"\n  title=\"Excluir usuário\"\n  aria-label=\"Clique para excluir usuário\"\n  button\n>\n  <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n  <ion-label>Excluir</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 672:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/destroy/form/form.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <ion-card>\n      <ion-card-header color=\"warning\">\n        <ion-card-title>Atenção!</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-margin-top\">\n        <p>Todos os dados da categoria serão descartados.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 567:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/image/image-category.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\n  <!-- Avatar -->\n  <div class=\"container ion-margin-vertical\">\n    <input\n      #files\n      type=\"file\"\n      (change)=\"sendFile(files)\"\n      class=\"inputFiles\"\n      [disabled]=\"!!category?.image?.url\"\n    />\n    <div\n      (click)=\"loadFile(files)\"\n      title=\"Adicionar á icone da categoria.\"\n      aria-label=\"Clique para adicionar icone da categoria.\"\n      button\n    >\n      <ion-thumbnail>\n        <ion-img\n          [src]=\"\n            category?.image?.filename\n              ? '/images/icons/' + category?.image?.filename\n              : './../../../../assets/thumbnail.svg'\n          \"\n          referrerpolicy=\"no-referrer\"\n          alt=\"Avatar\"\n          title=\"Imagem do usuário\"\n        ></ion-img>\n      </ion-thumbnail>\n      <ion-icon color=\"medium\" size=\"large\" name=\"camera\"> </ion-icon>\n    </div>\n  </div>\n\n  <!-- Label -->\n  <ion-card-content>\n    <ion-card-header>\n      <ion-card-title>{{ category?.name }}</ion-card-title>\n      <ion-card-subtitle>\n        Descrição: {{ category?.description }}<br />\n        {{ category?.updatedAt | time : \"update\" }}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-fab\n      vertical=\"bottom\"\n      (click)=\"deleteIcon()\"\n      horizontal=\"end\"\n      slot=\"fixed\"\n      *ngIf=\"!!category?.image?.url\"\n    >\n      <ion-fab-button color=\"none\" size=\"small\" title=\"Excluir icone\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 19442:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/filter/filter-menu.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-divider color=\"primary\">\n    <ion-label>Pesquizar por</ion-label>\n    <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('name')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Nome</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'name')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item-divider color=\"primary\">\n    <ion-label>Ordenar por</ion-label>\n    <ion-icon slot=\"start\" name=\"reorder-four\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('name')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Nome</ion-label>\n    <ion-icon\n      [hidden]=\"isIcon !== 'name'\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('state')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Status</ion-label>\n    <ion-icon\n      [hidden]=\"isIcon !== 'state'\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('position')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Posição</ion-label>\n    <ion-icon\n      [hidden]=\"isIcon !== 'position'\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>Data</ion-label>\n    <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('createdAt')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Registros</ion-label>\n    <ion-icon\n      [hidden]=\"isIcon !== 'createdAt'\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('updatedAt')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Atualizações</ion-label>\n    <ion-icon\n      [hidden]=\"isIcon !== 'updatedAt'\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"close()\" detail=\"false\" lines=\"close\">\n    <ion-label>fechar</ion-label>\n    <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n  </ion-item>\n</ion-item-group>\n";

/***/ }),

/***/ 57113:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/search/search.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"dropdown\">\n        <div class=\"search\">\n          <ion-searchbar\n            [color]=\"isDark ? 'medium' : 'none'\"\n            #searchbar\n            showClearButton=\"focus\"\n            [placeholder]=\"placeholder\"\n            inputmode=\"search\"\n            (ionChange)=\"research($event)\"\n            animated\n          >\n          </ion-searchbar>\n          <div>\n            <ion-fab-button\n              (click)=\"menuShow($event)\"\n              size=\"small\"\n              color=\"none\"\n              title=\"Filtro da pesquiza\"\n            >\n              <ion-icon name=\"filter\"></ion-icon>\n            </ion-fab-button>\n          </div>\n        </div>\n\n        <div\n          class=\"dropdown-content\"\n          *ngIf=\"search$ | async as list\"\n          [ngClass]=\"{ show: show }\"\n        >\n          <ion-list\n            class=\"list list-lg list-md list-sm list-xl\"\n            *ngIf=\"list.length > 0; else Else\"\n          >\n            <ion-item\n              button\n              detail\n              *ngFor=\"let item of list; last as Last\"\n              [lines]=\"Last ? 'none' : 'full'\"\n              (click)=\"sendUrl(item)\"\n            >\n              <ion-thumbnail slot=\"start\">\n                <img\n                  [src]=\"item?.image?.url || './../../../assets/thumbnail.svg'\"\n                />\n              </ion-thumbnail>\n              <ion-label>{{ item?.name }} </ion-label>\n            </ion-item>\n          </ion-list>\n\n          <ng-template #Else>\n            <ion-list class=\"list list-lg list-md list-sm list-xl\">\n              <ion-item lines=\"none\">\n                <ion-label>Não encontrado </ion-label>\n              </ion-item>\n            </ion-list>\n          </ng-template>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 88165:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/segment/segment.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-segment color=\"dark\" value=\"enabled\">\n  <ion-segment-button title=\"Usuários abilitados\" value=\"enabled\">\n    <ion-icon name=\"checkmark-done\"></ion-icon>\n    <ion-label>Abilitados</ion-label>\n  </ion-segment-button>\n  <ion-segment-button title=\"Usuários excluidas\" value=\"deleted\">\n    <ion-icon name=\"trash\"></ion-icon>\n    <ion-label>Excluidos</ion-label>\n  </ion-segment-button>\n</ion-segment>\n";

/***/ }),

/***/ 14194:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/state/state.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item>\n  <ion-label>{{ category | categoryState }}</ion-label>\n  <ion-toggle\n    slot=\"end\"\n    (ionChange)=\"state()\"\n    [checked]=\"category?.state\"\n    title=\"Alternar entre usuário conectado ou desligado.\"\n    aria-label=\"Clique para alternar entre usuário conectado ou desligado.\"\n  >\n  </ion-toggle>\n  <ion-icon\n    slot=\"start\"\n    [name]=\"category?.state ? 'power' : 'radio-button-off'\"\n  ></ion-icon>\n</ion-item>\n";

/***/ }),

/***/ 87902:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/category.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  detail=\"true\"\n  (click)=\"name()\"\n  title=\"Alterar nome e descrição\"\n  aria-label=\"Clique para alterar nome e descrição\"\n  button\n>\n  <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n  <ion-label>Nome</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 26121:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/category-announcement/update/form/form.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_component_category-announcement_category-announcement_module_ts.js.map