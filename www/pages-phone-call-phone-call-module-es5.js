function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-phone-call-phone-call-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phone-call/phone-call.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phone-call/phone-call.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPhoneCallPhoneCallPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"Phone Call\"></app-toolbar>\n\n<ion-content>\n<ion-grid id=\"container\">\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" size=\"large\" (click)=\"phoneCall('4491962823')\">MAKE PHONE CALL</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/phone-call/phone-call-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/phone-call/phone-call-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PhoneCallPageRoutingModule */

  /***/
  function srcAppPagesPhoneCallPhoneCallRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneCallPageRoutingModule", function () {
      return PhoneCallPageRoutingModule;
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


    var _phone_call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./phone-call.page */
    "./src/app/pages/phone-call/phone-call.page.ts");

    var routes = [{
      path: '',
      component: _phone_call_page__WEBPACK_IMPORTED_MODULE_3__["PhoneCallPage"]
    }];

    var PhoneCallPageRoutingModule = function PhoneCallPageRoutingModule() {
      _classCallCheck(this, PhoneCallPageRoutingModule);
    };

    PhoneCallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PhoneCallPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/phone-call/phone-call.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/phone-call/phone-call.module.ts ***!
    \*******************************************************/

  /*! exports provided: PhoneCallPageModule */

  /***/
  function srcAppPagesPhoneCallPhoneCallModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneCallPageModule", function () {
      return PhoneCallPageModule;
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


    var _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/toolbar/toolbar.component.module */
    "./src/app/components/toolbar/toolbar.component.module.ts");
    /* harmony import */


    var _phone_call_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./phone-call-routing.module */
    "./src/app/pages/phone-call/phone-call-routing.module.ts");
    /* harmony import */


    var _phone_call_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./phone-call.page */
    "./src/app/pages/phone-call/phone-call.page.ts");

    var PhoneCallPageModule = function PhoneCallPageModule() {
      _classCallCheck(this, PhoneCallPageModule);
    };

    PhoneCallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponentModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _phone_call_routing_module__WEBPACK_IMPORTED_MODULE_6__["PhoneCallPageRoutingModule"]],
      declarations: [_phone_call_page__WEBPACK_IMPORTED_MODULE_7__["PhoneCallPage"]]
    })], PhoneCallPageModule);
    /***/
  },

  /***/
  "./src/app/pages/phone-call/phone-call.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/phone-call/phone-call.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPhoneCallPhoneCallPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bob25lLWNhbGwvcGhvbmUtY2FsbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/phone-call/phone-call.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/phone-call/phone-call.page.ts ***!
    \*****************************************************/

  /*! exports provided: PhoneCallPage */

  /***/
  function srcAppPagesPhoneCallPhoneCallPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneCallPage", function () {
      return PhoneCallPage;
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

    var PhoneCallPage = /*#__PURE__*/function () {
      function PhoneCallPage(callNumber) {
        _classCallCheck(this, PhoneCallPage);

        this.callNumber = callNumber;
      }

      _createClass(PhoneCallPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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

      return PhoneCallPage;
    }();

    PhoneCallPage.ctorParameters = function () {
      return [{
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PhoneCallPage.prototype, "number", void 0);
    PhoneCallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phone-call',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./phone-call.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phone-call/phone-call.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./phone-call.page.scss */
      "./src/app/pages/phone-call/phone-call.page.scss"))["default"]]
    })], PhoneCallPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-phone-call-phone-call-module-es5.js.map