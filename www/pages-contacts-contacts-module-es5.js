function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactsContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"Contacts\"></app-toolbar>\n\n<ion-content>\n<ion-grid id=\"container\">\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" size=\"large\" (click)=\"addContact('1234567890')\">ADD CONTACT</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsPageRoutingModule */

  /***/
  function srcAppPagesContactsContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
      return ContactsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts.page */
    "./src/app/pages/contacts/contacts.page.ts");

    var routes = [{
      path: '',
      component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }];

    var ContactsPageRoutingModule = function ContactsPageRoutingModule() {
      _classCallCheck(this, ContactsPageRoutingModule);
    };

    ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/contacts/contacts.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactsPageModule */

  /***/
  function srcAppPagesContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
      return ContactsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contacts-routing.module */
    "./src/app/pages/contacts/contacts-routing.module.ts");
    /* harmony import */


    var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contacts.page */
    "./src/app/pages/contacts/contacts.page.ts");
    /* harmony import */


    var _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/toolbar/toolbar.component.module */
    "./src/app/components/toolbar/toolbar.component.module.ts");

    var ContactsPageModule = function ContactsPageModule() {
      _classCallCheck(this, ContactsPageModule);
    };

    ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"], _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponentModule"]],
      declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })], ContactsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/contacts/contacts.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactsContactsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/contacts/contacts.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/contacts/contacts.page.ts ***!
    \*************************************************/

  /*! exports provided: ContactsPage */

  /***/
  function srcAppPagesContactsContactsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
      return ContactsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");

    var ContactsPage = /*#__PURE__*/function () {
      function ContactsPage(callNumber, contacts) {
        _classCallCheck(this, ContactsPage);

        this.callNumber = callNumber;
        this.contacts = contacts;
      }

      _createClass(ContactsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addContact",
        value: function addContact(number) {
          var _this = this;

          var date = new Date();
          this.contacts.name = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__["ContactName"](null, 'Doe', 'aaabJohn');
          this.contacts.phoneNumbers = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__["ContactField"]('mobile', number)];
          this.contacts.birthday = date;
          this.contacts.save().then(function () {
            console.log('Contact saved!', _this.contacts);
          }, function (error) {
            console.error('Error saving contact.', error);

            _this.phoneCall(number);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "phoneCall",
        value: function phoneCall(number) {
          this.callNumber.callNumber(number, true).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }]);

      return ContactsPage;
    }();

    ContactsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__["Contact"]
      }];
    };

    ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contacts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contacts.page.scss */
      "./src/app/pages/contacts/contacts.page.scss"))["default"]]
    })], ContactsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-contacts-contacts-module-es5.js.map