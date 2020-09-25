function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/email.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/email.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmailEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"Email\"></app-toolbar>\n\n<ion-content>\n<ion-grid id=\"container\">\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" size=\"large\" (click)=\"sendEmail('jarp9665@gmail.com')\">Send Email</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/email/email-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/email/email-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmailPageRoutingModule */

  /***/
  function srcAppPagesEmailEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPageRoutingModule", function () {
      return EmailPageRoutingModule;
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


    var _email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email.page */
    "./src/app/pages/email/email.page.ts");

    var routes = [{
      path: '',
      component: _email_page__WEBPACK_IMPORTED_MODULE_3__["EmailPage"]
    }];

    var EmailPageRoutingModule = function EmailPageRoutingModule() {
      _classCallCheck(this, EmailPageRoutingModule);
    };

    EmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/email/email.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/email/email.module.ts ***!
    \*********************************************/

  /*! exports provided: EmailPageModule */

  /***/
  function srcAppPagesEmailEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPageModule", function () {
      return EmailPageModule;
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


    var _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/toolbar/toolbar.component.module */
    "./src/app/components/toolbar/toolbar.component.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _email_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./email-routing.module */
    "./src/app/pages/email/email-routing.module.ts");
    /* harmony import */


    var _email_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./email.page */
    "./src/app/pages/email/email.page.ts");

    var EmailPageModule = function EmailPageModule() {
      _classCallCheck(this, EmailPageModule);
    };

    EmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _email_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmailPageRoutingModule"], _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponentModule"]],
      declarations: [_email_page__WEBPACK_IMPORTED_MODULE_7__["EmailPage"]]
    })], EmailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/email/email.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/email/email.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmailEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtYWlsL2VtYWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/email/email.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/email/email.page.ts ***!
    \*******************************************/

  /*! exports provided: EmailPage */

  /***/
  function srcAppPagesEmailEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPage", function () {
      return EmailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmailPage = /*#__PURE__*/function () {
      function EmailPage() {
        _classCallCheck(this, EmailPage);
      }

      _createClass(EmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendEmail",
        value: function sendEmail() {}
      }]);

      return EmailPage;
    }();

    EmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-email',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/email.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./email.page.scss */
      "./src/app/pages/email/email.page.scss"))["default"]]
    })], EmailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-email-email-module-es5.js.map