function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sms-sms-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sms/sms.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sms/sms.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSmsSmsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"SMS\"></app-toolbar>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendSMS('4491087542')\">Send SMS</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/sms/sms-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sms/sms-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SmsPageRoutingModule */

  /***/
  function srcAppPagesSmsSmsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmsPageRoutingModule", function () {
      return SmsPageRoutingModule;
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


    var _sms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sms.page */
    "./src/app/pages/sms/sms.page.ts");

    var routes = [{
      path: '',
      component: _sms_page__WEBPACK_IMPORTED_MODULE_3__["SmsPage"]
    }];

    var SmsPageRoutingModule = function SmsPageRoutingModule() {
      _classCallCheck(this, SmsPageRoutingModule);
    };

    SmsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SmsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sms/sms.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/sms/sms.module.ts ***!
    \*****************************************/

  /*! exports provided: SmsPageModule */

  /***/
  function srcAppPagesSmsSmsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmsPageModule", function () {
      return SmsPageModule;
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


    var _sms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sms-routing.module */
    "./src/app/pages/sms/sms-routing.module.ts");
    /* harmony import */


    var _sms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sms.page */
    "./src/app/pages/sms/sms.page.ts");

    var SmsPageModule = function SmsPageModule() {
      _classCallCheck(this, SmsPageModule);
    };

    SmsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sms_routing_module__WEBPACK_IMPORTED_MODULE_5__["SmsPageRoutingModule"]],
      declarations: [_sms_page__WEBPACK_IMPORTED_MODULE_6__["SmsPage"]]
    })], SmsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sms/sms.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/sms/sms.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSmsSmsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Ntcy9zbXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/sms/sms.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/sms/sms.page.ts ***!
    \***************************************/

  /*! exports provided: SmsPage */

  /***/
  function srcAppPagesSmsSmsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmsPage", function () {
      return SmsPage;
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


    var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/sms/ngx */
    "./node_modules/@ionic-native/sms/__ivy_ngcc__/ngx/index.js");

    var SmsPage = /*#__PURE__*/function () {
      function SmsPage(sms) {
        _classCallCheck(this, SmsPage);

        this.sms = sms;
      }

      _createClass(SmsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendSMS",
        value: function sendSMS(number) {
          var options = {
            android: {
              intent: '' // send SMS with the native android SMS messaging
              //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE

            }
          };
          this.sms.send(number, '2 - Hello world!', options).then(function (res) {
            console.log(res);
          });
        }
      }]);

      return SmsPage;
    }();

    SmsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__["SMS"]
      }];
    };

    SmsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sms',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sms.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sms/sms.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sms.page.scss */
      "./src/app/pages/sms/sms.page.scss"))["default"]]
    })], SmsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sms-sms-module-es5.js.map