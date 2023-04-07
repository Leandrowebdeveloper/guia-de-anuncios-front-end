(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_component_user_user-component_module_ts"],{

/***/ 44422:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/card-message/message.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCardMessageComponent": () => (/* binding */ UserCardMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component.html?ngResource */ 52432);
/* harmony import */ var _message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.component.scss?ngResource */ 1592);
/* harmony import */ var _message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/form.component */ 93682);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/messages.service */ 42156);









let UserCardMessageComponent = class UserCardMessageComponent {
  constructor(userMessageService, messageService, modalController, authService) {
    this.userMessageService = userMessageService;
    this.messageService = messageService;
    this.modalController = modalController;
    this.authService = authService;
  }
  ngOnInit() {
    this.init();
    this.hasAdmin();
  }
  hasAdmin() {
    const is = this.authService.getLevel === '1' ? true : false;
    if (is) this.isAdmin = is;
  }
  close(index, message) {
    const dataDel = {
      _csrf: this.setCsrf(),
      id: message === null || message === void 0 ? void 0 : message.id
    };
    return this.$close = this.userMessageService.close(dataDel).subscribe({
      next: messages => this.success(index),
      error: error => this.messageService.error(error, undefined, this.$close)
    });
  }
  update(index) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__.FormSendMessagesComponent,
        componentProps: {
          label: 'Editar menssagem',
          data: this.buildDataForm()
        }
      });
      return yield modal.present();
    });
  }
  buildDataForm() {
    if (this.user) {
      const {
        _csrf,
        id,
        messages
      } = this.user;
      return {
        _csrf,
        id,
        messages
      };
    } else if (this.announcement) {
      const {
        _csrf,
        id,
        messages
      } = this.announcement;
      if (_csrf && id && messages) {
        return {
          _csrf,
          id,
          messages
        };
      }
    }
  }
  setCsrf() {
    var _a, _b;
    return ((_a = this.user) === null || _a === void 0 ? void 0 : _a._csrf) || ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b._csrf);
  }
  success(index) {
    if (this.messages.length > 0) {
      this.messages.splice(index, 1);
      this.$close.unsubscribe();
    }
  }
  init() {
    var _a, _b;
    if (this.user) {
      this.messages = (_a = this.user) === null || _a === void 0 ? void 0 : _a.messages;
    } else {
      if ((_b = this.announcement) === null || _b === void 0 ? void 0 : _b.messages) {
        this.messages = this.announcement.messages;
      }
    }
  }
};
UserCardMessageComponent.ctorParameters = () => [{
  type: _service_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}];
UserCardMessageComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
UserCardMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-card-message-component',
  template: _message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserCardMessageComponent);


/***/ }),

/***/ 93682:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/form/form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSendMessagesComponent": () => (/* binding */ FormSendMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 49220);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 30970);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/messages.service */ 42156);









let FormSendMessagesComponent = class FormSendMessagesComponent {
  constructor(messagesService, helpService, modalController, loadingService, messageService) {
    this.messagesService = messagesService;
    this.helpService = helpService;
    this.modalController = modalController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/message',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar menssagem.',
      title: 'Salvar menssagem.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.saveMessage(event);
  }
  saveMessage(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const loading = this.loadingService.show('Salvando menssagem...');
    let action;
    if ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.messages[0]) === null || _b === void 0 ? void 0 : _b.userId) {
      event.value.userId = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.messages[0]) === null || _d === void 0 ? void 0 : _d.userId;
      event.value.id = (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.messages[0]) === null || _f === void 0 ? void 0 : _f.id;
      action = 'users';
    } else {
      action = 'announcement';
      event.value.announcementId = (_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.messages[0]) === null || _h === void 0 ? void 0 : _h.announcementId;
    }
    return this.write = this.messagesService.send(event.value, action).subscribe({
      next: messages => this.messsage(messages, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(response, loading) {
    if (response === null || response === void 0 ? void 0 : response.message) {
      this.helpService.delay(() => this.modalController.dismiss(), 2500);
      return this.messageService.success(response === null || response === void 0 ? void 0 : response.message, loading, this.write);
    }
  }
  getData() {
    const {
      _csrf,
      messages
    } = this.data;
    this.config = Object.assign({
      _csrf,
      password: null
    }, messages[0]);
  }
};
FormSendMessagesComponent.ctorParameters = () => [{
  type: _service_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}];
FormSendMessagesComponent.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormSendMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormSendMessagesComponent);


/***/ }),

/***/ 23149:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/messages.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendMessagesComponent": () => (/* binding */ SendMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.component.html?ngResource */ 71911);
/* harmony import */ var _messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.component.scss?ngResource */ 51626);
/* harmony import */ var _messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 93682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SendMessagesComponent = class SendMessagesComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  open() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      let data = this.getDataMessage();
      const modal = yield this.modalController.create({
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormSendMessagesComponent,
        componentProps: {
          label: 'Enviar menssagem',
          data
        }
      });
      return yield modal.present();
    });
  }
  getDataMessage() {
    if (this.user) {
      const {
        _csrf,
        id
      } = this.user;
      return {
        _csrf,
        messages: [{
          userId: id,
          announcementId: null,
          description: null,
          type: null,
          response: false
        }]
      };
    } else {
      if (this.announcement) {
        const {
          _csrf,
          id
        } = this.announcement;
        if (_csrf && id) {
          return {
            _csrf,
            messages: [{
              userId: null,
              announcementId: id,
              description: null,
              type: null,
              response: false
            }]
          };
        }
      }
    }
  }
};
SendMessagesComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
SendMessagesComponent.propDecorators = {
  announcement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
SendMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-messages-component',
  template: _messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SendMessagesComponent);


/***/ }),

/***/ 42156:
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/service/messages.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);
/* harmony import */ var src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/auth/announcement/management/service/management.service */ 94111);








let MessagesService = class MessagesService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, usersService, managementAnnouncementService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.usersService = usersService;
    this.managementAnnouncementService = managementAnnouncementService;
    this.setApi = `messages`;
  }
  set setUserMessage(value) {
    if (this.usersService.getUsers) {
      const count = this.usersService.getUsers.messages.length;
      const i = this.usersService.getUsers.messages.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (value === null || value === void 0 ? void 0 : value.id));
      if (i === -1) {
        if (count > 0) {
          this.usersService.getUsers.messages.unshift(value);
        } else {
          this.usersService.getUsers.messages = [value];
        }
      } else {
        this.usersService.getUsers.messages.splice(i, 1, value);
      }
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  send(message, action) {
    if (message === null || message === void 0 ? void 0 : message.id) {
      return this.patch(message, 'management').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(message_ => {
        if (action === 'users') {
          return this.setUserMessage = message_;
        }
        if (action === 'announcement') {
          return this.managementAnnouncementService.setAnnouncementMessage = message_;
        }
      }));
    }
    delete message.id;
    return this.create(message, 'management').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(message_ => {
      if (action === 'users') {
        return this.setUserMessage = message_;
      }
      if (action === 'announcement') {
        return this.managementAnnouncementService.setAnnouncementMessage = message_;
      }
    }));
  }
  close(message) {
    return this.destroy(message, 'management');
  }
};
MessagesService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}, {
  type: src_app_pages_dashboard_auth_announcement_management_service_management_service__WEBPACK_IMPORTED_MODULE_3__.ManagementAnnouncementService
}];
MessagesService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], MessagesService);


/***/ }),

/***/ 97302:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/avatar/avatar-component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _avatar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-component.html?ngResource */ 13830);
/* harmony import */ var _avatar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar-component.scss?ngResource */ 88333);
/* harmony import */ var _avatar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_avatar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var src_app_utilities_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/toast/toast.service */ 39524);
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/image.service */ 50541);
/* harmony import */ var src_app_services_image_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/image/image.service */ 89900);









let AvatarComponent = class AvatarComponent {
  constructor(avatarService, alertController, toastService, messageService, imageService) {
    this.avatarService = avatarService;
    this.alertController = alertController;
    this.toastService = toastService;
    this.messageService = messageService;
    this.imageService = imageService;
  }
  action(user) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const {
        image
      } = user;
      if (image && user._csrf) {
        image._csrf = user._csrf;
      }
      if (image === null || image === void 0 ? void 0 : image.filename) {
        const alert = yield this.alertController.create({
          header: 'Atenção',
          message: 'Você pretende excluir está foto ou substituir?',
          buttons: [{
            text: 'excluir',
            handler: () => this.$delete = this.avatarService.delete(image).subscribe(() => setTimeout(() => this.$delete.unsubscribe(), 2000))
          }, {
            text: 'substituir',
            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
              return yield this.startPhoto();
            })
          }]
        });
        return yield alert.present();
      }
      return yield this.startPhoto();
    });
  }
  startPhoto() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const photo = yield this.imageService.addPhoto();
      if (photo) {
        const dataFile = yield this.imageService.readAsBase64(photo);
        this.upload(dataFile);
      }
    });
  }
  upload(file) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        const loading = yield this.toastService.loading('Transferindo imagen', 'top');
        this.avatarService.setCsrf = (_a = this.user) === null || _a === void 0 ? void 0 : _a._csrf;
        this.$upload = this.avatarService.upload(this.build(file, this.user)).subscribe({
          next: response => this.success(response, response, loading),
          error: error => {
            loading.dismiss();
            this.messageService.error(error, undefined, undefined);
          }
        });
      }
    });
  }
  success(httpHeaderResponse, httpResponse, loading) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
        return this.complete(httpResponse, loading);
      }
    });
  }
  complete(httpResponse, loading) {
    const {
      body
    } = httpResponse;
    if (body) {
      const image = body;
      this.update(image, loading);
    }
  }
  update(image, loading) {
    this.avatarService.setAuthAvatar(image);
    loading.dismiss();
    if (image) {
      this.$upload.unsubscribe();
    }
  }
  build(data, user) {
    const {
      file,
      fileName
    } = data;
    const formData = new FormData();
    formData.append('userId', String(user === null || user === void 0 ? void 0 : user.id));
    formData.append('_csrf', user === null || user === void 0 ? void 0 : user._csrf);
    formData.append('filename', file, fileName);
    return formData;
  }
};
AvatarComponent.ctorParameters = () => [{
  type: _service_image_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_utilities_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}, {
  type: src_app_services_image_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService
}];
AvatarComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
AvatarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-avatar-component',
  template: _avatar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_avatar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AvatarComponent);


/***/ }),

/***/ 50541:
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/avatar/service/image.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarService": () => (/* binding */ AvatarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);








let AvatarService = class AvatarService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, authService, adminUserService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.authService = authService;
    this.adminUserService = adminUserService;
    this.setApi = 'avatar';
  }
  get getUser() {
    return this.authService.userObservable;
  }
  get avatar() {
    var _a, _b, _c;
    if (((_a = this.adminUserService) === null || _a === void 0 ? void 0 : _a.getUsers) && ((_c = (_b = this.adminUserService) === null || _b === void 0 ? void 0 : _b.getUsers) === null || _c === void 0 ? void 0 : _c.image)) {
      return this.adminUserService.getUsers.image;
    }
  }
  set avatar(value) {
    if (this.adminUserService.getUsers) {
      this.adminUserService.getUsers.image = value;
      this.adminUserService.setUsers = this.adminUserService.getUsers;
    }
  }
  set setCsrf(csrf) {
    this.csrf = csrf;
  }
  delete(avatar) {
    return this.destroy(avatar).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(image => this.setAuthAvatar(image)));
  }
  setAuthAvatar(avatar) {
    this.avatar = avatar;
    this.authService.avatar = avatar;
  }
};
AvatarService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__.AdminUsersService
}];
AvatarService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], AvatarService);


/***/ }),

/***/ 32253:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/blockade.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBlockadeComponent": () => (/* binding */ UserBlockadeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _blockade_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockade.component.html?ngResource */ 48368);
/* harmony import */ var _blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockade.component.scss?ngResource */ 60872);
/* harmony import */ var _blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 1809);






let UserBlockadeComponent = class UserBlockadeComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  blockade() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        const {
          _csrf,
          slug,
          blockade,
          messages
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserBlockadeComponent,
          componentProps: {
            isAuth: this.isAuth,
            action: 'blockade',
            label: 'Bloquear usuário',
            user: {
              _csrf,
              slug,
              blockade,
              messages
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
UserBlockadeComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserBlockadeComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserBlockadeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-blockade-user-component',
  template: _blockade_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_blockade_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserBlockadeComponent);


/***/ }),

/***/ 1809:
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/form/form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserBlockadeComponent": () => (/* binding */ FormUserBlockadeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 12534);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 57712);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _services_user_blockade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-blockade.service */ 69975);









let FormUserBlockadeComponent = class FormUserBlockadeComponent {
  constructor(userBlockadeService, helpService, modalController, loadingService, messageService) {
    this.userBlockadeService = userBlockadeService;
    this.helpService = helpService;
    this.modalController = modalController;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/blockade',
      icon: 'stop',
      label: 'Bloquear usuário',
      aria: 'Bloquear usuário.',
      title: 'Bloquear usuário.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.blockade(event);
  }
  blockade(event) {
    var _a;
    const loading = this.loadingService.show('Bloquear usuário...');
    event.value.slug = (_a = this.user) === null || _a === void 0 ? void 0 : _a.slug;
    event.value.id = this.id;
    return this.write = this.userBlockadeService.blockade(event.value).subscribe({
      next: user => this.messsage(user, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(user, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.write);
  }
  getData() {
    const {
      blockade,
      _csrf,
      messages
    } = this.user;
    if (messages.length > 0) {
      const i = messages.findIndex(item => (item === null || item === void 0 ? void 0 : item.type) === 'danger');
      if (i === -1) {
        this.config = {
          _csrf,
          blockade,
          password: null,
          type: null,
          description: null,
          response: false
        };
      } else {
        const {
          type,
          description,
          id,
          response
        } = messages[i];
        this.id = id;
        this.config = {
          _csrf,
          blockade,
          password: null,
          type,
          description,
          response
        };
      }
    } else {
      this.config = {
        _csrf,
        blockade: null,
        password: null,
        type: null,
        description: null,
        response: false
      };
    }
  }
};
FormUserBlockadeComponent.ctorParameters = () => [{
  type: _services_user_blockade_service__WEBPACK_IMPORTED_MODULE_5__.UserBlockadeService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}];
FormUserBlockadeComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormUserBlockadeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserBlockadeComponent);


/***/ }),

/***/ 69975:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/services/user-blockade.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBlockadeService": () => (/* binding */ UserBlockadeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);
/* harmony import */ var _messages_service_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../messages/service/messages.service */ 42156);








let UserBlockadeService = class UserBlockadeService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, usersService, userMessageService) {
    super(http, storageService);
    this.storageService = storageService;
    this.usersService = usersService;
    this.userMessageService = userMessageService;
    this.setApi = `admin`;
  }
  set setBlockade(value) {
    if (value && this.usersService.getUsers) {
      this.usersService.getUsers.blockade = value;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  blockade(user) {
    if (user && (user === null || user === void 0 ? void 0 : user.id)) {
      return this.patch(user, 'management/blockade').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
        this.setBlockade = data === null || data === void 0 ? void 0 : data.blockade;
        this.userMessageService.setUserMessage = data.messages;
      }));
    }
    return this.create(user, 'management/blockade').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
      this.setBlockade = data === null || data === void 0 ? void 0 : data.blockade;
      this.userMessageService.setUserMessage = data.messages;
    }));
  }
};
UserBlockadeService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}, {
  type: _messages_service_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService
}];
UserBlockadeService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], UserBlockadeService);


/***/ }),

/***/ 47323:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/card/card.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCardComponent": () => (/* binding */ UserCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component.html?ngResource */ 5146);
/* harmony import */ var _card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component.scss?ngResource */ 21881);
/* harmony import */ var _card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let UserCardComponent = class UserCardComponent {};
UserCardComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
};
UserCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-card-user-component',
  template: _card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserCardComponent);


/***/ }),

/***/ 275:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/destroy.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDestroyComponent": () => (/* binding */ UserDestroyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _destroy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy.component.html?ngResource */ 64325);
/* harmony import */ var _destroy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destroy.component.scss?ngResource */ 43098);
/* harmony import */ var _destroy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_destroy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 49200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let UserDestroyComponent = class UserDestroyComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  destroy() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.blockade) {
          return;
        }
        const {
          _csrf,
          password,
          slug
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserDestroyComponent,
          componentProps: {
            isAuth: this.isAuth,
            action: 'destroy',
            label: 'Excluir usuário',
            user: {
              _csrf,
              password,
              slug
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
UserDestroyComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserDestroyComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserDestroyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-destroy-user-component',
  template: _destroy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_destroy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserDestroyComponent);


/***/ }),

/***/ 49200:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/form/form.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserDestroyComponent": () => (/* binding */ FormUserDestroyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 30114);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 22828);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_user_destroy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/user-destroy.service */ 36330);










let FormUserDestroyComponent = class FormUserDestroyComponent {
  constructor(userDestroyService, helpService, modalController, authService, loadingService, messageService) {
    this.userDestroyService = userDestroyService;
    this.helpService = helpService;
    this.modalController = modalController;
    this.authService = authService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/destroy',
      icon: 'trash',
      label: 'Excluir usuário',
      aria: 'Excluir usuário.',
      title: 'Excluir usuário.'
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
    var _a;
    const loading = this.loadingService.show('Alterando senha...');
    event.value.slug = (_a = this.user) === null || _a === void 0 ? void 0 : _a.slug;
    if (this.isAuth) {
      return this.write = this.authService.delete(event.value).subscribe({
        next: user => this.messsage(user, loading),
        error: error => this.messageService.error(error, loading, this.write)
      });
    }
    return this.write = this.userDestroyService.delete(event.value).subscribe({
      next: user => this.messsage(user, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(user, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.write);
  }
  getData() {
    this.config = Object.assign({}, this.user);
  }
};
FormUserDestroyComponent.ctorParameters = () => [{
  type: _service_user_destroy_service__WEBPACK_IMPORTED_MODULE_6__.UserDestroyService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}];
FormUserDestroyComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
FormUserDestroyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserDestroyComponent);


/***/ }),

/***/ 36330:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/service/user-destroy.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDestroyService": () => (/* binding */ UserDestroyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);








let UserDestroyService = class UserDestroyService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, navCtrl, adminUsersService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.navCtrl = navCtrl;
    this.adminUsersService = adminUsersService;
    this.setApi = `admin`;
  }
  delete(user) {
    return this.destroy(user, `management/trash`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user_ => {
      if (user_) {
        this.adminUsersService.setDelete = user_;
        return setTimeout(() => this.navCtrl.navigateBack(['/painel-de-controle', 'admin', 'usuarios']), 3600);
      }
      return null;
    }));
  }
};
UserDestroyService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}];
UserDestroyService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], UserDestroyService);


/***/ }),

/***/ 41073:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/email.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEmailComponent": () => (/* binding */ UserEmailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component.html?ngResource */ 55676);
/* harmony import */ var _email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.component.scss?ngResource */ 31834);
/* harmony import */ var _email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 66997);






let UserEmailComponent = class UserEmailComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  email() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.blockade) {
          return;
        }
        const {
          _csrf,
          email,
          slug,
          password
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserEmailComponent,
          componentProps: {
            action: 'email',
            label: 'Editar email',
            isAuth: this.isAuth,
            user: {
              _csrf,
              email,
              slug,
              password
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
UserEmailComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserEmailComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-email-user-component',
  template: _email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserEmailComponent);


/***/ }),

/***/ 66997:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/form/form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserEmailComponent": () => (/* binding */ FormUserEmailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 63912);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 17276);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/email.service */ 12868);










let FormUserEmailComponent = class FormUserEmailComponent {
  constructor(helpService, modalController, authService, loadingService, messageService, emailService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.authService = authService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.emailService = emailService;
    this.attrButton = {
      route: '/email',
      icon: 'mail',
      label: 'Enviar',
      aria: 'Enviar novo email.',
      title: 'Enviar novo email.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.email(event);
  }
  email(event) {
    var _a;
    const loading = this.loadingService.show('Alterando email...');
    event.value.slug = (_a = this.user) === null || _a === void 0 ? void 0 : _a.slug;
    if (this.isAuth) {
      return this.$email = this.authService.email(event.value).subscribe({
        next: user => this.messsage(user, loading),
        error: error => this.messageService.error(error, loading, this.$email)
      });
    }
    return this.$email = this.emailService.email(event.value).subscribe({
      next: user => this.messsage(user, loading),
      error: error => this.messageService.error(error, loading, this.$email)
    });
  }
  messsage(user, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.$email);
  }
  getData() {
    this.config = Object.assign({}, this.user);
  }
};
FormUserEmailComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}, {
  type: _service_email_service__WEBPACK_IMPORTED_MODULE_6__.EmailService
}];
FormUserEmailComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
FormUserEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserEmailComponent);


/***/ }),

/***/ 12868:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/service/email.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailService": () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);





let EmailService = class EmailService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService) {
    super(http, storageService);
    this.storageService = storageService;
    this.setApi = `admin`;
  }
  email(user) {
    return this.patch(user, 'management/email');
  }
};
EmailService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}];
EmailService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], EmailService);


/***/ }),

/***/ 77689:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/form/form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserLevelComponent": () => (/* binding */ FormUserLevelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 89486);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 255);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_user_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user-level.service */ 57312);









let FormUserLevelComponent = class FormUserLevelComponent {
  constructor(helpService, modalController, userLevelService, loadingService, messageService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.userLevelService = userLevelService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/level',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Alterar nivel do usuário.',
      title: 'Alterar nivel do usuário.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.level(event);
  }
  // Level
  level(event) {
    var _a;
    const loading = this.loadingService.show('Salvando nivel...');
    event.value.slug = (_a = this.user) === null || _a === void 0 ? void 0 : _a.slug;
    return this.$level = this.userLevelService.level(event.value).subscribe({
      next: user => this.messsage(user, loading),
      error: error => this.messageService.error(error, loading, this.$level)
    });
  }
  messsage(user, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.$level);
  }
  getData() {
    this.config = Object.assign({}, this.user);
  }
};
FormUserLevelComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_3__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _service_user_level_service__WEBPACK_IMPORTED_MODULE_5__.UserLevelService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
}];
FormUserLevelComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormUserLevelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserLevelComponent);


/***/ }),

/***/ 66000:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/level.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLevelComponent": () => (/* binding */ UserLevelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _level_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.component.html?ngResource */ 14523);
/* harmony import */ var _level_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level.component.scss?ngResource */ 83051);
/* harmony import */ var _level_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_level_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 77689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let UserLevelComponent = class UserLevelComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  level() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        const {
          _csrf,
          level,
          slug,
          password
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserLevelComponent,
          componentProps: {
            action: 'level',
            label: 'Editar nível',
            user: {
              _csrf,
              slug,
              password,
              level
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
UserLevelComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserLevelComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserLevelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-level-user-component',
  template: _level_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_level_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserLevelComponent);


/***/ }),

/***/ 57312:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/service/user-level.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLevelService": () => (/* binding */ UserLevelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);







let UserLevelService = class UserLevelService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
  constructor(http, storageService, usersService) {
    super(http, storageService);
    this.storageService = storageService;
    this.usersService = usersService;
    this.setApi = `admin`;
  }
  set setLevel(value) {
    if (this.usersService.getUsers) {
      this.usersService.getUsers.level = value;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  level(user) {
    return this.patch(user, 'management/level').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user_ => this.setLevel = user_ === null || user_ === void 0 ? void 0 : user_.level));
  }
};
UserLevelService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_0__.AdminUsersService
}];
UserLevelService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], UserLevelService);


/***/ }),

/***/ 842:
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/form/form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserNameComponent": () => (/* binding */ FormUserNameComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 575);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 23359);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_name_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/name.service */ 1144);










let FormUserNameComponent = class FormUserNameComponent {
  constructor(nameService, helpService, modalController, authService, loadingService, messageService) {
    this.nameService = nameService;
    this.helpService = helpService;
    this.modalController = modalController;
    this.authService = authService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/name',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Salvar nome e sobrenome.',
      title: 'Salvar nome e sobrenome.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.name(event);
  }
  name(event) {
    const loading = this.loadingService.show('Salvando nome...');
    if (this.isAuth) {
      return this.$name = this.authService.name(event.value).subscribe({
        next: user => this.messsage(user, loading),
        error: error => this.messageService.error(error, loading, this.$name)
      });
    }
    return this.$name = this.nameService.name(event.value).subscribe({
      next: user => this.messsage(user, loading),
      error: error => this.messageService.error(error, loading, this.$name)
    });
  }
  messsage(user, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.$name);
  }
  getData() {
    this.config = Object.assign({}, this.user);
  }
};
FormUserNameComponent.ctorParameters = () => [{
  type: _service_name_service__WEBPACK_IMPORTED_MODULE_6__.NameService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}];
FormUserNameComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
FormUserNameComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserNameComponent);


/***/ }),

/***/ 92327:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/name.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserNameComponent": () => (/* binding */ UserNameComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _name_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name.component.html?ngResource */ 18554);
/* harmony import */ var _name_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name.component.scss?ngResource */ 30119);
/* harmony import */ var _name_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_name_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let UserNameComponent = class UserNameComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  name() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.blockade) {
          return;
        }
        const {
          _csrf,
          firstName,
          lastName,
          slug
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserNameComponent,
          componentProps: {
            isAuth: this.isAuth,
            action: 'name',
            label: 'Editar usuário',
            user: {
              _csrf,
              firstName,
              lastName,
              slug
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
UserNameComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserNameComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserNameComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-name-user-component',
  template: _name_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_name_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserNameComponent);


/***/ }),

/***/ 1144:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/service/name.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NameService": () => (/* binding */ NameService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_header_breadcrumbs_service_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/header/breadcrumbs/service/breadcrumbs.service */ 21247);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);









let NameService = class NameService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService {
  constructor(http, storageService, location, breadcrumbsService, usersService) {
    super(http, storageService);
    this.storageService = storageService;
    this.location = location;
    this.breadcrumbsService = breadcrumbsService;
    this.usersService = usersService;
    this.setApi = `admin`;
  }
  set setName(user) {
    if (user && this.usersService.getUsers) {
      this.usersService.getUsers.firstName = user === null || user === void 0 ? void 0 : user.firstName;
      this.usersService.getUsers.lastName = user === null || user === void 0 ? void 0 : user.lastName;
      this.usersService.getUsers.slug = user === null || user === void 0 ? void 0 : user.slug;
      this.usersService.getUsers.name = user === null || user === void 0 ? void 0 : user.name;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  name(user) {
    return this.patch(user, 'management/name').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user_ => {
      this.setName = user_;
      this.updateUsersUrl(user_);
    }));
  }
  updateUsersUrl(user) {
    const url = `/painel-de-controle/admin/usuario/${user === null || user === void 0 ? void 0 : user.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
};
NameService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: src_app_header_breadcrumbs_service_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_1__.AdminUsersService
}];
NameService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()], NameService);


/***/ }),

/***/ 55517:
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/form/form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserPasswordComponent": () => (/* binding */ FormUserPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 65165);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 2892);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_password_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/password.service */ 39050);










let FormUserPasswordComponent = class FormUserPasswordComponent {
  constructor(adminPasswordService, helpService, modalController, authService, loadingService, messageService) {
    this.adminPasswordService = adminPasswordService;
    this.helpService = helpService;
    this.modalController = modalController;
    this.authService = authService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/new-password',
      icon: 'key',
      label: 'Salvar',
      aria: 'Salvar senha.',
      title: 'Salvar senha.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.password(event);
  }
  password(event) {
    var _a;
    const loading = this.loadingService.show('Armazenar senha...');
    event.value.slug = (_a = this.user) === null || _a === void 0 ? void 0 : _a.slug;
    if (this.isAuth) {
      return this.$password = this.authService.password(event.value).subscribe({
        next: user => this.messsage(user, loading),
        error: error => this.messageService.error(error, loading, this.$password)
      });
    }
    return this.$password = this.adminPasswordService.password(event.value).subscribe({
      next: user => this.messsage(user, loading),
      error: error => this.messageService.error(error, loading, this.$password)
    });
  }
  messsage(user, loading) {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user === null || user === void 0 ? void 0 : user.message, loading, this.$password);
  }
  getData() {
    this.config = Object.assign({}, this.user);
  }
};
FormUserPasswordComponent.ctorParameters = () => [{
  type: _service_password_service__WEBPACK_IMPORTED_MODULE_6__.AdminPasswordService
}, {
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}];
FormUserPasswordComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
FormUserPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserPasswordComponent);


/***/ }),

/***/ 56204:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/password-component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPasswordComponent": () => (/* binding */ UserPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-component.html?ngResource */ 70493);
/* harmony import */ var _password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-component.scss?ngResource */ 85745);
/* harmony import */ var _password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 55517);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






let UserPasswordComponent = class UserPasswordComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  password() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.blockade) {
          return;
        }
        const {
          _csrf,
          password,
          slug
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserPasswordComponent,
          componentProps: {
            isAuth: this.isAuth,
            action: 'password',
            label: 'Editar senha',
            user: {
              _csrf,
              password,
              passwordConfirmation: null,
              passwordCurrent: null,
              slug
            }
          }
        });
        return yield modal.present();
      }
    });
  }
  passwordCreate(user) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (user === null || user === void 0 ? void 0 : user.blockade) {
        return;
      }
      const {
        _csrf,
        password,
        slug
      } = user;
      const modal = yield this.modalController.create({
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserPasswordComponent,
        componentProps: {
          action: 'passwordCreate',
          label: 'Cadastrar senha',
          user: {
            _csrf,
            password,
            passwordConfirmation: null,
            slug
          }
        }
      });
      return yield modal.present();
    });
  }
};
UserPasswordComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserPasswordComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  isAuth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-password-user-component',
  template: _password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserPasswordComponent);


/***/ }),

/***/ 39050:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/service/password.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPasswordService": () => (/* binding */ AdminPasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);







let AdminPasswordService = class AdminPasswordService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService {
  constructor(http, storageService, usersService) {
    super(http, storageService);
    this.storageService = storageService;
    this.usersService = usersService;
    this.setApi = `admin`;
  }
  set setIsPassword(value) {
    if (value && this.usersService.getUsers) {
      this.usersService.getUsers.isPassword = value;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  password(user) {
    return this.patch(user, 'management/password').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user_ => this.setIsPassword = user_ === null || user_ === void 0 ? void 0 : user_.isPassword));
  }
};
AdminPasswordService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}];
AdminPasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], AdminPasswordService);


/***/ }),

/***/ 69125:
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/form/form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUserPlanComponent": () => (/* binding */ FormUserPlanComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 92248);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 57246);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helps/helps.service */ 73131);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_user_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-plan.service */ 15351);
/* harmony import */ var src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/loading/loading.service */ 78039);









let FormUserPlanComponent = class FormUserPlanComponent {
  constructor(helpService, modalController, userPlanService, loadingService, messageService) {
    this.helpService = helpService;
    this.modalController = modalController;
    this.userPlanService = userPlanService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.attrButton = {
      route: '/plan',
      icon: 'cloud-upload',
      label: 'Salvar',
      aria: 'Alterar plano do usuário.',
      title: 'Alterar plano do usuário.'
    };
  }
  ngOnInit() {
    this.getData();
  }
  importForm(event) {
    return this.form = event;
  }
  onSubmit(event) {
    return this.plan(event);
  }
  plan(event) {
    var _a;
    const loading = this.loadingService.show('Alterando plano...');
    event.value.userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id;
    return this.write = this.userPlanService.plan(event.value).subscribe({
      next: plan => this.messsage(plan, loading),
      error: error => this.messageService.error(error, loading, this.write)
    });
  }
  messsage(plan, loading) {
    if (plan && (plan === null || plan === void 0 ? void 0 : plan.message)) {
      this.helpService.delay(() => this.modalController.dismiss(), 2500);
      return this.messageService.success(plan === null || plan === void 0 ? void 0 : plan.message, loading, this.write);
    }
    return undefined;
  }
  getData() {
    const {
      _csrf,
      plan,
      password
    } = this.user;
    this.config = Object.assign({
      _csrf,
      password
    }, plan);
  }
};
FormUserPlanComponent.ctorParameters = () => [{
  type: src_app_services_helps_helps_service__WEBPACK_IMPORTED_MODULE_2__.HelpsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _service_user_plan_service__WEBPACK_IMPORTED_MODULE_4__.UserPlanService
}, {
  type: src_app_utilities_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService
}];
FormUserPlanComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  action: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
FormUserPlanComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormUserPlanComponent);


/***/ }),

/***/ 50810:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/plan.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPlanComponent": () => (/* binding */ UserPlanComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _plan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan.component.html?ngResource */ 87019);
/* harmony import */ var _plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan.component.scss?ngResource */ 77750);
/* harmony import */ var _plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 69125);






let UserPlanComponent = class UserPlanComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }
  plan() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (this.user) {
        const {
          _csrf,
          plan,
          password,
          id
        } = this.user;
        const modal = yield this.modalController.create({
          component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormUserPlanComponent,
          componentProps: {
            action: 'plan',
            label: 'Editar plano',
            user: {
              _csrf,
              plan,
              password,
              id
            }
          }
        });
        return yield modal.present();
      }
    });
  }
};
UserPlanComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];
UserPlanComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserPlanComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-plan-user-component',
  template: _plan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_plan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserPlanComponent);


/***/ }),

/***/ 15351:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/service/user-plan.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPlanService": () => (/* binding */ UserPlanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);







let UserPlanService = class UserPlanService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, usersService) {
    super(http, storageService);
    this.storageService = storageService;
    this.usersService = usersService;
    this.setApi = `admin`;
  }
  set setPlan(value) {
    if (value && this.usersService.getUsers) {
      this.usersService.getUsers.plan = value;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  plan(plan) {
    return this.patch(plan, 'management/plan').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(plan_ => this.setPlan = plan_));
  }
};
UserPlanService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}];
UserPlanService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], UserPlanService);


/***/ }),

/***/ 82279:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/filter/filter-menu.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchMenuComponent": () => (/* binding */ UserSearchMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-menu.component.html?ngResource */ 63254);
/* harmony import */ var _filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-menu.component.scss?ngResource */ 75410);
/* harmony import */ var _filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search.service */ 88552);






let UserSearchMenuComponent = class UserSearchMenuComponent {
  constructor(searchUserService, popoverController) {
    this.searchUserService = searchUserService;
    this.popoverController = popoverController;
  }
  ngOnInit() {
    this.filter();
  }
  ngOnDestroy() {
    this.$isIcon.unsubscribe();
  }
  searchBy(searchBy) {
    this.searchUserService.setSearchBy = searchBy;
  }
  close() {
    return this.popoverController.dismiss();
  }
  filter() {
    this.$isIcon = this.searchUserService.getSearchBy.subscribe({
      next: filter => {
        if (filter) this.isIcon = filter;
      }
    });
  }
};
UserSearchMenuComponent.ctorParameters = () => [{
  type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchUserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
}];
UserSearchMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-user-search-menu',
  template: _filter_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_filter_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserSearchMenuComponent);


/***/ }),

/***/ 39648:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/search.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchUserComponent": () => (/* binding */ SearchUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 62913);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 95689);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/module-dark/module-dark.service */ 22129);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/search.service */ 88552);
/* harmony import */ var _filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/filter-menu.component */ 82279);











let SearchUserComponent = class SearchUserComponent {
  constructor(navCtrl, router, searchUserService, popoverController, moduleDarkService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.searchUserService = searchUserService;
    this.popoverController = popoverController;
    this.moduleDarkService = moduleDarkService;
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
    this.triggerSearch$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(undefined);
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.placeholder = 'Digite nome';
  }
  ngOnDestroy() {
    this.$isDark.unsubscribe();
  }
  ngOnInit() {
    this.searchList();
    this.setFilterLabelAndPlaceholder();
    this.getDark();
    this.loadDark();
  }
  getDark() {
    const dark = this.moduleDarkService.isDark();
    if (dark) this.isDark = dark;
  }
  loadDark() {
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
    if (URL.includes('usuarios')) {
      return this.navCtrl.navigateForward([URL[1], 'admin', 'usuario', url === null || url === void 0 ? void 0 : url.slug]);
    }
    return null;
  }
  menuShow(ev) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popoverController.create({
        component: _filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.UserSearchMenuComponent,
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
    return this.search$ = this.searchUserService.search.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(search => {
      if (search.length >= 0) {
        this.show = true;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      this.error$.next(true);
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
    }));
  }
  setFilterLabelAndPlaceholder() {
    let count = 0;
    this.triggerSearch$ = this.searchUserService.getSearchBy.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(filter => {
      switch (filter) {
        case 'firstName':
          this.placeholder = 'Digite nome';
          this.filterLabel = 'Pesquizar por nome';
          break;
        case 'lastName':
          this.placeholder = 'Digite sobrenome';
          this.filterLabel = 'Pesquizar por sobrenome';
          break;
        case 'email':
          this.placeholder = 'Digite email';
          this.filterLabel = 'Pesquizar por email';
          break;
        default:
          this.placeholder = 'Digite nome';
          this.filterLabel = 'Pesquizar por nome';
          break;
      }
      if (count > 0) {
        this.popoverController.dismiss();
        count++;
      }
    }));
  }
};
SearchUserComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: _service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchUserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController
}, {
  type: src_app_services_module_dark_module_dark_service__WEBPACK_IMPORTED_MODULE_2__.ModuleDarkService
}];
SearchUserComponent.propDecorators = {
  search: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};
SearchUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-user-search-component',
  template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SearchUserComponent);


/***/ }),

/***/ 88552:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/service/search.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchUserService": () => (/* binding */ SearchUserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);



let SearchUserService = class SearchUserService {
  constructor() {
    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(undefined);
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this.setSearchBy = 'firstName';
  }
  get getSearchBy() {
    return this.search$.asObservable();
  }
  get search() {
    return this.result.asObservable();
  }
  set search(value) {
    this.result.emit(value);
  }
  set setSearchBy(searchBy) {
    this.search$.next(searchBy);
  }
};
SearchUserService.ctorParameters = () => [];
SearchUserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], SearchUserService);


/***/ }),

/***/ 74268:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/segment/segment.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentComponent": () => (/* binding */ SegmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment.component.html?ngResource */ 61735);
/* harmony import */ var _segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment.component.scss?ngResource */ 31337);
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
  selector: 'app-segment-component',
  template: _segment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentComponent);


/***/ }),

/***/ 18165:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/state/service/state.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http/http.service */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/dashboard/administrator/users/services/admin-users.service */ 99611);







let StateService = class StateService extends src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
  constructor(http, storageService, usersService) {
    super(http, storageService);
    this.http = http;
    this.storageService = storageService;
    this.usersService = usersService;
    this.setApi = `admin`;
  }
  set setState(user) {
    if (this.usersService.getUsers) {
      this.usersService.getUsers.state = user === null || user === void 0 ? void 0 : user.state;
      this.usersService.getUsers.updatedAt = user === null || user === void 0 ? void 0 : user.updatedAt;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }
  state(user) {
    return this.patch(user, 'management/state').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user_ => this.setState = user_));
  }
};
StateService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: src_app_pages_dashboard_administrator_users_services_admin_users_service__WEBPACK_IMPORTED_MODULE_2__.AdminUsersService
}];
StateService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], StateService);


/***/ }),

/***/ 20973:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/state/state.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStateComponent": () => (/* binding */ UserStateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.component.html?ngResource */ 98582);
/* harmony import */ var _state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.component.scss?ngResource */ 83794);
/* harmony import */ var _state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/message/message.service */ 26388);
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/state.service */ 18165);







let UserStateComponent = class UserStateComponent {
  constructor(fb, stateService, messageService) {
    this.fb = fb;
    this.stateService = stateService;
    this.messageService = messageService;
  }
  state() {
    if (this.user) {
      const {
        slug,
        _csrf
      } = this.user;
      this.form = this.fb.group({
        slug,
        _csrf
      });
      return this.$state = this.stateService.state(this.form.value).subscribe({
        next: user_ => this.messageService.success(user_ === null || user_ === void 0 ? void 0 : user_.message, undefined, this.$state, 350),
        error: error => this.messageService.error(error, undefined, this.$state)
      });
    }
  }
};
UserStateComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _service_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService
}, {
  type: src_app_utilities_message_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService
}];
UserStateComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
UserStateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-state-user-component',
  template: _state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserStateComponent);


/***/ }),

/***/ 46469:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/user-component.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponentsModule": () => (/* binding */ UserComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../messages/form/form.component */ 93682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/form/form.module */ 61265);
/* harmony import */ var src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/header-modal/header-modal.module */ 32728);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatar/avatar-component */ 97302);
/* harmony import */ var _blockade_blockade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blockade/blockade.component */ 32253);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ 47323);
/* harmony import */ var _destroy_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./destroy/form/form.component */ 49200);
/* harmony import */ var _destroy_destroy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./destroy/destroy.component */ 275);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email/email.component */ 41073);
/* harmony import */ var _email_form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email/form/form.component */ 66997);
/* harmony import */ var _level_form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./level/form/form.component */ 77689);
/* harmony import */ var _level_level_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./level/level.component */ 66000);
/* harmony import */ var _messages_card_message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../messages/card-message/message.component */ 44422);
/* harmony import */ var _name_form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./name/form/form.component */ 842);
/* harmony import */ var _name_name_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./name/name.component */ 92327);
/* harmony import */ var _password_form_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./password/form/form.component */ 55517);
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./password/password-component */ 56204);
/* harmony import */ var _plan_form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plan/form/form.component */ 69125);
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plan/plan.component */ 50810);
/* harmony import */ var _segment_segment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./segment/segment.component */ 74268);
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./state/state.component */ 20973);
/* harmony import */ var _blockade_form_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blockade/form/form.component */ 1809);
/* harmony import */ var _state_service_state_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./state/service/state.service */ 18165);
/* harmony import */ var _plan_service_user_plan_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./plan/service/user-plan.service */ 15351);
/* harmony import */ var _password_service_password_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./password/service/password.service */ 39050);
/* harmony import */ var _name_service_name_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./name/service/name.service */ 1144);
/* harmony import */ var _level_service_user_level_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./level/service/user-level.service */ 57312);
/* harmony import */ var _destroy_service_user_destroy_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./destroy/service/user-destroy.service */ 36330);
/* harmony import */ var _avatar_service_image_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./avatar/service/image.service */ 50541);
/* harmony import */ var _blockade_services_user_blockade_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blockade/services/user-blockade.service */ 69975);
/* harmony import */ var _email_service_email_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./email/service/email.service */ 12868);
/* harmony import */ var _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search/filter/filter-menu.component */ 82279);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./search/service/search.service */ 88552);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./search/search.component */ 39648);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../messages/messages.component */ 23149);
/* harmony import */ var _messages_service_messages_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../messages/service/messages.service */ 42156);











































let UserComponentsModule = class UserComponentsModule {};
UserComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_37__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_38__.NgModule)({
  declarations: [_state_state_component__WEBPACK_IMPORTED_MODULE_21__.UserStateComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_20__.SegmentComponent, _plan_form_form_component__WEBPACK_IMPORTED_MODULE_18__.FormUserPlanComponent, _password_form_form_component__WEBPACK_IMPORTED_MODULE_16__.FormUserPasswordComponent, _name_form_form_component__WEBPACK_IMPORTED_MODULE_14__.FormUserNameComponent, _email_form_form_component__WEBPACK_IMPORTED_MODULE_10__.FormUserEmailComponent, _level_form_form_component__WEBPACK_IMPORTED_MODULE_11__.FormUserLevelComponent, _destroy_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormUserDestroyComponent, _password_password_component__WEBPACK_IMPORTED_MODULE_17__.UserPasswordComponent, _level_level_component__WEBPACK_IMPORTED_MODULE_12__.UserLevelComponent, _name_name_component__WEBPACK_IMPORTED_MODULE_15__.UserNameComponent, _plan_plan_component__WEBPACK_IMPORTED_MODULE_19__.UserPlanComponent, _messages_card_message_message_component__WEBPACK_IMPORTED_MODULE_13__.UserCardMessageComponent, _email_email_component__WEBPACK_IMPORTED_MODULE_9__.UserEmailComponent, _destroy_destroy_component__WEBPACK_IMPORTED_MODULE_8__.UserDestroyComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_6__.UserCardComponent, _blockade_blockade_component__WEBPACK_IMPORTED_MODULE_5__.UserBlockadeComponent, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__.AvatarComponent, _messages_form_form_component__WEBPACK_IMPORTED_MODULE_0__.FormSendMessagesComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_35__.SendMessagesComponent, _blockade_form_form_component__WEBPACK_IMPORTED_MODULE_22__.FormUserBlockadeComponent, _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_32__.UserSearchMenuComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_34__.SearchUserComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_39__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_41__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_42__.RouterModule, src_app_components_form_form_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule, src_app_components_header_modal_header_modal_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModalModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule],
  exports: [_name_name_component__WEBPACK_IMPORTED_MODULE_15__.UserNameComponent, _password_password_component__WEBPACK_IMPORTED_MODULE_17__.UserPasswordComponent, _messages_card_message_message_component__WEBPACK_IMPORTED_MODULE_13__.UserCardMessageComponent, _state_state_component__WEBPACK_IMPORTED_MODULE_21__.UserStateComponent, _segment_segment_component__WEBPACK_IMPORTED_MODULE_20__.SegmentComponent, _plan_plan_component__WEBPACK_IMPORTED_MODULE_19__.UserPlanComponent, _level_level_component__WEBPACK_IMPORTED_MODULE_12__.UserLevelComponent, _email_email_component__WEBPACK_IMPORTED_MODULE_9__.UserEmailComponent, _destroy_destroy_component__WEBPACK_IMPORTED_MODULE_8__.UserDestroyComponent, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__.AvatarComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_6__.UserCardComponent, _blockade_blockade_component__WEBPACK_IMPORTED_MODULE_5__.UserBlockadeComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_35__.SendMessagesComponent, _blockade_form_form_component__WEBPACK_IMPORTED_MODULE_22__.FormUserBlockadeComponent, _search_filter_filter_menu_component__WEBPACK_IMPORTED_MODULE_32__.UserSearchMenuComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_34__.SearchUserComponent],
  providers: [_blockade_services_user_blockade_service__WEBPACK_IMPORTED_MODULE_30__.UserBlockadeService, _messages_service_messages_service__WEBPACK_IMPORTED_MODULE_36__.MessagesService, _state_service_state_service__WEBPACK_IMPORTED_MODULE_23__.StateService, _plan_service_user_plan_service__WEBPACK_IMPORTED_MODULE_24__.UserPlanService, _password_service_password_service__WEBPACK_IMPORTED_MODULE_25__.AdminPasswordService, _name_service_name_service__WEBPACK_IMPORTED_MODULE_26__.NameService, _level_service_user_level_service__WEBPACK_IMPORTED_MODULE_27__.UserLevelService, _destroy_service_user_destroy_service__WEBPACK_IMPORTED_MODULE_28__.UserDestroyService, _avatar_service_image_service__WEBPACK_IMPORTED_MODULE_29__.AvatarService, _email_service_email_service__WEBPACK_IMPORTED_MODULE_31__.EmailService, _search_service_search_service__WEBPACK_IMPORTED_MODULE_33__.SearchUserService]
})], UserComponentsModule);


/***/ }),

/***/ 1592:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/card-message/message.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card-header.flex-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.d-flex {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 32px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/messages/card-message/message.component.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;;AAIA;EACE,aAAA;EACA,yBAAA;EACA,gBAAA;AADF","sourcesContent":["ion-card-header {\n  &.flex-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n}\n\n.d-flex {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 32px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30970:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/form/form.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/messages/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51626:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/messages.component.scss?ngResource ***!
  \***************************************************************************************/
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

/***/ 88333:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/avatar/avatar-component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container > div {\n  align-self: center;\n  position: relative;\n  cursor: pointer;\n}\n.container > div > ion-avatar {\n  width: 80px;\n  height: 80px;\n}\n.container > div > ion-icon {\n  position: absolute;\n  right: -10px;\n  bottom: -5px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/avatar/avatar-component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AACF;AACE;EACE,kBAAA;EACA,kBAAA;EACA,eAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN;AAEI;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AAAN","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > div {\n    align-self: center;\n    position: relative;\n    cursor: pointer;\n\n    > ion-avatar {\n      width: 80px;\n      height: 80px;\n    }\n\n    > ion-icon {\n      position: absolute;\n      right: -10px;\n      bottom: -5px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 60872:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/blockade.component.scss?ngResource ***!
  \********************************************************************************************/
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

/***/ 57712:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/form/form.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/blockade/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21881:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/card/card.component.scss?ngResource ***!
  \************************************************************************************/
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

/***/ 43098:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/destroy.component.scss?ngResource ***!
  \******************************************************************************************/
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

/***/ 22828:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/form/form.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/destroy/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 31834:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/email.component.scss?ngResource ***!
  \**************************************************************************************/
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

/***/ 17276:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/form/form.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/email/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 255:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/form/form.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/level/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83051:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/level.component.scss?ngResource ***!
  \**************************************************************************************/
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

/***/ 23359:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/form/form.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/name/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30119:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/name.component.scss?ngResource ***!
  \************************************************************************************/
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

/***/ 2892:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/form/form.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/password/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85745:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/password-component.scss?ngResource ***!
  \********************************************************************************************/
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

/***/ 57246:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/form/form.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --padding-top: 0px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/plan/form/form.component.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":["ion-content {\n    --padding-top: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77750:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/plan.component.scss?ngResource ***!
  \************************************************************************************/
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

/***/ 75410:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/filter/filter-menu.component.scss?ngResource ***!
  \****************************************************************************************************/
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

/***/ 95689:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/search.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.dropdown {\n  position: relative;\n  display: block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  width: 98.4%;\n  margin-top: -7px;\n  left: 8px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 999;\n}\n\n.show {\n  display: block;\n}\n\n.list, .list-lg, .list-md, .list-sm, .list-xl {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nspan {\n  position: relative;\n}\nspan > small {\n  background-color: var(--ion-color-medium);\n  color: var(--ion-color-danger-contrast);\n  padding: 4px;\n  border-radius: 4px;\n  font-size: xx-small;\n  font-weight: bold;\n}\nspan > small::before {\n  content: \"\";\n  position: absolute;\n  bottom: -12px;\n  left: 9px;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: var(--ion-color-medium) transparent transparent transparent;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/component/user/search/search.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,iBAAA;AACJ;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;AAEF;;AACA;EAAO,cAAA;AAGP;;AADA;EACI,gBAAA;EACA,mBAAA;AAIJ;;AADA;EACI,kBAAA;AAIJ;AAHI;EACI,yCAAA;EACA,uCAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;AAKR;AAJQ;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yEAAA;AAMZ","sourcesContent":[".search {\n    display: flex;\n    flex-wrap: nowrap;\n}\n.dropdown {\n  position: relative;\n  display: block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  width: 98.4%;\n  margin-top: -7px;\n  left: 8px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 999;\n}\n\n.show {display: block;}\n\n.list, .list-lg, .list-md, .list-sm, .list-xl{\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n\nspan {\n    position: relative;\n    > small {\n        background-color: var(--ion-color-medium);\n        color: var(--ion-color-danger-contrast);\n        padding: 4px;\n        border-radius: 4px;\n        font-size: xx-small;\n        font-weight: bold;\n        &::before {\n            content: \"\";\n            position: absolute;\n            bottom: -12px;\n            left: 9px;\n            margin-left: -5px;\n            border-width: 5px;\n            border-style: solid;\n            border-color: var(--ion-color-medium) transparent transparent transparent;\n          }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 31337:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/segment/segment.component.scss?ngResource ***!
  \******************************************************************************************/
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

/***/ 83794:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/state/state.component.scss?ngResource ***!
  \**************************************************************************************/
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

/***/ 52432:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/card-message/message.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card *ngFor=\"let item of messages | reverse; let i = index\">\n  <ion-card-header\n    class=\"ion-margin-bottom\"\n    [color]=\"\n      (item?.type === 'info' && 'secondary') ||\n      (item?.type === 'warning' && 'warning') ||\n      (item?.type === 'danger' && 'danger') ||\n      (item?.type === 'success' && 'success')\n    \"\n    [ngClass]=\"{ 'flex-header': isAdmin || item?.type !== 'danger' }\"\n  >\n    <ion-card-title>\n      <span [ngSwitch]=\"item?.type\">\n        <span *ngSwitchCase=\"'warning'\">Aviso</span>\n        <span *ngSwitchCase=\"'info'\">Informação</span>\n        <span *ngSwitchCase=\"'success'\">Parabéns</span>\n        <span *ngSwitchCase=\"'danger'\">Atenção</span>\n      </span>\n    </ion-card-title>\n\n    <!-- Botão fechar -->\n    <ion-fab-button\n      *ngIf=\"isAdmin || item?.type !== 'danger'\"\n      (click)=\"close(i, item)\"\n      size=\"small\"\n      [color]=\"\n        (item?.type === 'info' && 'secondary') ||\n        (item?.type === 'warning' && 'warning') ||\n        (item?.type === 'danger' && 'danger') ||\n        (item?.type === 'success' && 'success')\n      \"\n    >\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n  </ion-card-header>\n\n  <ion-card-content>\n    <p>\n      <em>{{ user | userValues : \"name\" }}</em>\n    </p>\n    <div class=\"ion-margin-top\" [innerHtml]=\"item?.description\"></div>\n    <!-- Buttons -->\n    <div class=\"d-flex\">\n      <div *ngIf=\"isAdmin\">\n        <ion-button size=\"small\" (click)=\"update(i)\">\n          <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n          editar\n        </ion-button>\n      </div>\n      <div *ngIf=\"item?.response\">\n        <ion-button size=\"small\" color=\"light\">\n          <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n          suporte\n        </ion-button>\n      </div>\n    </div>\n  </ion-card-content>\n  <ion-card-content *ngIf=\"item?.userSender\">\n    <ion-item-divider>\n      <ion-label>Remetente</ion-label>\n    </ion-item-divider>\n    <ion-item\n      lines=\"none\"\n      [routerLink]=\"[\n        '/painel-de-controle',\n        'admin',\n        'usuario',\n        item?.userSender?.slug\n      ]\"\n      button\n    >\n      <ion-avatar slot=\"start\">\n        <img\n          [src]=\"\n            item?.userSender?.image\n              ? '/images/avatar/' + item?.userSender?.image?.filename\n              : './../../../../../../assets/avatar.svg'\n          \"\n        />\n      </ion-avatar>\n      <div>\n        <ion-label>{{ item?.userSender?.name }}</ion-label>\n        <small>{{ item?.userSender?.email }}</small>\n      </div>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 49220:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/form/form.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 71911:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/messages/messages.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user | isUserLevel : '1'\"\n  detail=\"true\"\n  (click)=\"open()\"\n  title=\"Enviar menssagem\"\n  aria-label=\"Enviar menssagem\"\n  button\n>\n  <ion-icon name=\"send\" slot=\"start\"></ion-icon>\n  <ion-label>Enviar message</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 13830:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/avatar/avatar-component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"user\" class=\"container ion-margin-vertical\">\n  <div\n    (click)=\"action(user)\"\n    title=\"Adicionar á imagem do usuário.\"\n    aria-label=\"Clique para adicionar á imagem do usuário.\"\n    [attr.aria-disabled]=\"'Botão adicionar imagem ' + (user| userValues:'blockade') ? 'abilitado.' : 'desabilitado'\"\n    button\n  >\n    <ion-avatar>\n      <ion-img\n        [src]=\"user | userValuesImgAvatar\"\n        referrerpolicy=\"no-referrer\"\n        alt=\"Avatar\"\n        title=\"Imagem do usuário\"\n      ></ion-img>\n    </ion-avatar>\n    <ion-icon color=\"medium\" size=\"large\" name=\"camera\"> </ion-icon>\n  </div>\n</div>\n";

/***/ }),

/***/ 48368:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/blockade.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user\"\n  (click)=\"blockade()\"\n  title=\"Alternar entre usuário bloquear e desbloquear.\"\n  aria-label=\"Clique para alternar entre usuário bloquear e desbloquear.\"\n  detail=\"true\"\n  button\n>\n  <ion-label\n    [color]=\"(user | userValues : 'blockade') ? 'danger' : 'success'\"\n    >{{\n      (user | userValues : \"blockade\") ? \"Bloqueado\" : \"Desbloqueado\"\n    }}</ion-label\n  >\n  <ion-icon\n    slot=\"start\"\n    [color]=\"(user | userValues : 'blockade') ? 'danger' : 'success'\"\n    [name]=\"(user | userValues : 'blockade') ? 'stop' : 'play'\"\n  ></ion-icon>\n</ion-item>\n";

/***/ }),

/***/ 12534:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/blockade/form/form.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 5146:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/card/card.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content *ngIf=\"user\">\n  <ion-card-header>\n    <ion-card-title class=\"ion-margin-bottom\"\n      >{{ user | userValues : \"name\" }}<br />\n      <small>{{ user | userValues : \"email\" }}</small></ion-card-title\n    >\n    <ion-card-subtitle class=\"ion-margin-bottom\">\n      <ion-text>\n        Plano:\n        <span *ngIf=\"user?.plan?.type === 'free'\">Grátis</span>\n        <span *ngIf=\"user?.plan?.type === 'basic'\">Básico</span>\n        <span *ngIf=\"user?.plan?.type === 'special'\">Especial</span>\n\n        <p [hidden]=\"!(user | isUserValuesPlan : 'start')\">\n          {{ user | userValuesPlan : \"start\" | time : \"create\" }}\n        </p>\n        <p [hidden]=\"!(user | isUserValuesPlan : 'end')\">\n          {{ user | userValuesPlan : \"end\" | time : \"plan\" }}\n        </p>\n      </ion-text>\n    </ion-card-subtitle>\n\n    <ion-card-subtitle\n      *ngIf=\"\n        (user | isUserValues : 'createdAt') &&\n        (user | isUserValues : 'updatedAt')\n      \"\n    >\n      {{ user | userValues : \"createdAt\" | time : \"create\" }}\n      <br />\n      {{ user | userValues : \"updatedAt\" | time : \"update\" }}\n    </ion-card-subtitle>\n  </ion-card-header>\n</ion-card-content>\n";

/***/ }),

/***/ 64325:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/destroy.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user\"\n  [disabled]=\"\n    (user | isUserValues : 'blockade') || !(user | isUserValues : 'isPassword')\n  \"\n  detail=\"true\"\n  (click)=\"destroy()\"\n  title=\"Excluir usuário\"\n  aria-label=\"Clique para excluir usuário\"\n  [attr.aria-disabled]=\"\n    'Botão excluir usuário ' + (user | isUserValues : 'blockade')\n      ? 'abilitado.'\n      : 'desabilitado'\n  \"\n  button\n>\n  <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n  <ion-label>Excluir</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 30114:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/destroy/form/form.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Destroy info -->\n    <ion-card>\n      <ion-card-header color=\"warning\">\n        <ion-card-title>Atenção!</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-margin-top\">\n        <p>Você está prestes a excluir sua conta do app.</p>\n        <p>\n          Após excluir sua conta todos os dados que estão vinculados a este\n          usuário não estarão mais visiveis.\n        </p>\n        <p>\n          Esta ação tera um prazo de 90 dias para ser desfeita após está data\n          todos os dados serão permanentemente excluido do sistema.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 55676:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/email.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user\"\n  [disabled]=\"\n    (user | isUserValues : 'blockade') || !user | isUserValues : 'isPassword'\n  \"\n  detail=\"true\"\n  (click)=\"email()\"\n  title=\"Alterar email\"\n  aria-label=\"Clique para alterar email\"\n  [attr.aria-disabled]=\"\n    'Botão alterar email ' + (user | isUserValues : 'blockade')\n      ? 'abilitado.'\n      : 'desabilitado'\n  \"\n  button\n>\n  <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n  <ion-label>Email</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 63912:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/email/form/form.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <ion-card>\n      <ion-card-header color=\"warning\">\n        <ion-card-subtitle color=\"light\">\n          &#9679; Insira um email válido.<br />\n          &#9679; Será enviado uma menssagem com um prazo de 10 minutos a partir\n          do seu recebimento.<br />\n          &#9679; Verifique em sua caixa de entrada de emails.<br />\n          &#9679; Clique no botão alterar email.\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 89486:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/form/form.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 14523:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/level/level.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user\"\n  [disabled]=\"user | isUserValues : 'blockade'\"\n  detail=\"true\"\n  (click)=\"level()\"\n  title=\"Alterar senha\"\n  aria-label=\"Clique para alterar senha\"\n  [attr.aria-disabled]=\"\n    'Botão alterar nivel do usuário ' + (user | isUserValues : 'blockade')\n      ? 'abilitado.'\n      : 'desabilitado'\n  \"\n  button\n>\n  <ion-label>{{\n    (user | isUserLevel : \"1\") ? \"administrador\" : \"Colaborador\"\n  }}</ion-label>\n  <ion-icon\n    slot=\"start\"\n    [name]=\"(user | isUserLevel : '1') ? 'trophy' : 'medal'\"\n  ></ion-icon>\n</ion-item>\n";

/***/ }),

/***/ 575:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/form/form.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 18554:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/name/name.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item\n  *ngIf=\"user\"\n  [disabled]=\"user | isUserValues : 'blockade'\"\n  detail=\"true\"\n  (click)=\"name()\"\n  title=\"Alterar nome e sobrenome\"\n  aria-label=\"Clique para alterar nome e sobrenome\"\n  [attr.aria-disabled]=\"\n    'Botão alterar nome e sobrenome ' + (user | isUserValues : 'blockade')\n      ? 'abilitado.'\n      : 'desabilitado'\n  \"\n  button\n>\n  <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n  <ion-label>Nome</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 65165:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/form/form.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <!-- Form -->\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 70493:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/password/password-component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<span *ngIf=\"user\">\n  <ion-item\n    *ngIf=\"user?.isPassword;else IsPassword\"\n    [disabled]=\"user | isUserValues:'blockade'\"\n    detail=\"true\"\n    (click)=\"password()\"\n    title=\"Alterar senha\"\n    aria-label=\"Clique para editar senha\"\n    [attr.aria-disabled]=\"'Botão editar senha ' + (user | isUserValues:'blockade') ? 'abilitado.' : 'desabilitado'\"\n    button\n  >\n    <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n    <ion-label>Senha</ion-label>\n  </ion-item>\n\n  <ng-template #IsPassword>\n    <ion-item\n      [disabled]=\"user | isUserValues:'blockade'\"\n      detail=\"true\"\n      (click)=\"passwordCreate(user)\"\n      title=\"Cadastrar senha\"\n      aria-label=\"Clique para cadastrar senha\"\n      aria-disabled=\"Botão cadastrar senha.\"\n      button\n    >\n      <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n      <ion-label>Senha</ion-label>\n    </ion-item>\n  </ng-template>\n</span>\n";

/***/ }),

/***/ 92248:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/form/form.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-component-modal [label]=\"label\"></app-header-component-modal>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <app-form\n      (submitDataForm)=\"onSubmit($event)\"\n      (exportForm)=\"importForm($event)\"\n      [inputConfig]=\"config\"\n      [attrButton]=\"attrButton\"\n    ></app-form>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 87019:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/plan/plan.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Plano -->\n<ion-item\n  *ngIf=\"user\"\n  [disabled]=\"user | isUserValues : 'blockade'\"\n  detail=\"true\"\n  (click)=\"plan()\"\n  title=\"Alterar plano.\"\n  aria-label=\"Clique para alterar plano\"\n  [attr.aria-disabled]=\"\n    'Botão alterar plano do usuário ' + (user | isUserValues : 'blockade')\n      ? 'abilitado.'\n      : 'desabilitado.'\n  \"\n  button\n>\n  <ion-label>Plano</ion-label>\n  <ion-icon slot=\"start\" name=\"trophy\"></ion-icon>\n</ion-item>\n";

/***/ }),

/***/ 63254:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/filter/filter-menu.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-group>\n  <ion-item-divider color=\"primary\">\n    <ion-label>Pesquizar por</ion-label>\n    <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('firstName')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Nome</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'firstName')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('lastName')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Sobrenome</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'lastName')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('email')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Email</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'email')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item-divider color=\"primary\">\n    <ion-label>Ordenar por</ion-label>\n    <ion-icon slot=\"start\" name=\"reorder-four\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('name')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Nome</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'name')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('state')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Status</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'state')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('blockade')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Bloqueados</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'blockade')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>Data</ion-label>\n    <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n  </ion-item-divider>\n\n  <ion-item button (click)=\"searchBy('createdAt')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Registros</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'createdAt')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"searchBy('updatedAt')\" detail=\"false\" lines=\"inset\">\n    <ion-label>Atualizações</ion-label>\n    <ion-icon\n      [hidden]=\"!(isIcon === 'updatedAt')\"\n      color=\"success\"\n      slot=\"end\"\n      name=\"checkmark-done\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <ion-item button (click)=\"close()\" detail=\"false\" lines=\"close\">\n    <ion-label>fechar</ion-label>\n    <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n  </ion-item>\n</ion-item-group>\n";

/***/ }),

/***/ 62913:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/search/search.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"dropdown\">\n        <ion-text color=\"medium\" class=\"ion-margin-start\">\n          <span *ngIf=\"triggerSearch$ | async; else Default\">\n            <small>{{ filterLabel }} </small>\n          </span>\n          <ng-template #Default>\n            <small>Pesquizar por nome</small>\n          </ng-template>\n        </ion-text>\n\n        <div class=\"search\">\n          <ion-searchbar\n            [color]=\"isDark ? 'medium' : 'none'\"\n            #searchbar\n            showClearButton=\"focus\"\n            [placeholder]=\"placeholder\"\n            inputmode=\"search\"\n            (ionChange)=\"research($event)\"\n            animated\n          >\n          </ion-searchbar>\n          <div>\n            <ion-fab-button\n              (click)=\"menuShow($event)\"\n              size=\"small\"\n              color=\"none\"\n              title=\"Filtro da pesquiza\"\n            >\n              <ion-icon name=\"filter\"></ion-icon>\n            </ion-fab-button>\n          </div>\n        </div>\n\n        <div\n          class=\"dropdown-content\"\n          *ngIf=\"search$ | async as list\"\n          [ngClass]=\"{ show: show }\"\n        >\n          <ion-list\n            class=\"list list-lg list-md list-sm list-xl\"\n            *ngIf=\"list.length > 0; else Else\"\n          >\n            <ion-item\n              button\n              detail\n              *ngFor=\"let item of list; last as Last\"\n              [lines]=\"Last ? 'none' : 'full'\"\n              (click)=\"sendUrl(item)\"\n            >\n              <ion-avatar slot=\"start\">\n                <img\n                  [src]=\"item?.image?.url || './../../../assets/avatar.svg'\"\n                />\n              </ion-avatar>\n              <ion-label>{{ item?.name }} </ion-label>\n            </ion-item>\n          </ion-list>\n\n          <ng-template #Else>\n            <ion-list class=\"list list-lg list-md list-sm list-xl\">\n              <ion-item lines=\"none\">\n                <ion-label>Não encontrado </ion-label>\n              </ion-item>\n            </ion-list>\n          </ng-template>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 61735:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/segment/segment.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row>\n  <ion-col size-xl=\"11\" size-lg=\"11\" size-sm=\"11\" size-md=\"11\" size-xs=\"11\">\n    <ion-segment color=\"dark\" value=\"enabled\">\n      <ion-segment-button title=\"Usuários abilitados\" value=\"enabled\">\n        <ion-icon name=\"checkmark-done\"></ion-icon>\n        <ion-label>Abilitados</ion-label>\n      </ion-segment-button>\n      <ion-segment-button title=\"Usuários excluidas\" value=\"deleted\">\n        <ion-icon name=\"trash\"></ion-icon>\n        <ion-label>Excluidos</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 98582:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/component/user/state/state.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item *ngIf=\"user\" [disabled]=\"user | userValues : 'blockade'\">\n  <ion-label [color]=\"(user | userValues : 'state') ? 'success' : 'danger'\">{{\n    (user | userValues : \"state\") ? \"Online\" : \"Offline\"\n  }}</ion-label>\n  <ion-toggle\n    slot=\"end\"\n    (ionChange)=\"state()\"\n    [checked]=\"user | userValues : 'state'\"\n    title=\"Alternar entre usuário conectado ou desligado.\"\n    aria-label=\"Clique para alternar entre usuário conectado ou desligado.\"\n    [attr.aria-disabled]=\"\n      'Botão alterar status ' + (user | userValues : 'blockade')\n        ? 'abilitado.'\n        : 'desabilitado'\n    \"\n    [color]=\"(user | userValues : 'state') && 'success'\"\n  >\n  </ion-toggle>\n  <ion-icon\n    slot=\"start\"\n    [color]=\"(user | userValues : 'state') ? 'success' : 'danger'\"\n    [name]=\"(user | userValues : 'state') ? 'power' : 'radio-button-off'\"\n  ></ion-icon>\n</ion-item>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_component_user_user-component_module_ts.js.map