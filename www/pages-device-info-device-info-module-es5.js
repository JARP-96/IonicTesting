function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-info-device-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-info/device-info.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-info/device-info.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeviceInfoDeviceInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"Device Information\"></app-toolbar>\n\n<ion-content>\n  <ion-grid id=\"container\">\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"getDeviceID()\">Get Device ID</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>ID ({{ did }}), Serial ({{ serial }})</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/device-info/device-info-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/device-info/device-info-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DeviceInfoPageRoutingModule */

  /***/
  function srcAppPagesDeviceInfoDeviceInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceInfoPageRoutingModule", function () {
      return DeviceInfoPageRoutingModule;
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


    var _device_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device-info.page */
    "./src/app/pages/device-info/device-info.page.ts");

    var routes = [{
      path: '',
      component: _device_info_page__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoPage"]
    }];

    var DeviceInfoPageRoutingModule = function DeviceInfoPageRoutingModule() {
      _classCallCheck(this, DeviceInfoPageRoutingModule);
    };

    DeviceInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/device-info/device-info.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/device-info/device-info.module.ts ***!
    \*********************************************************/

  /*! exports provided: DeviceInfoPageModule */

  /***/
  function srcAppPagesDeviceInfoDeviceInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceInfoPageModule", function () {
      return DeviceInfoPageModule;
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


    var _device_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-info-routing.module */
    "./src/app/pages/device-info/device-info-routing.module.ts");
    /* harmony import */


    var _device_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./device-info.page */
    "./src/app/pages/device-info/device-info.page.ts");

    var DeviceInfoPageModule = function DeviceInfoPageModule() {
      _classCallCheck(this, DeviceInfoPageModule);
    };

    DeviceInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponentModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeviceInfoPageRoutingModule"]],
      declarations: [_device_info_page__WEBPACK_IMPORTED_MODULE_7__["DeviceInfoPage"]]
    })], DeviceInfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/device-info/device-info.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/device-info/device-info.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeviceInfoDeviceInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZS1pbmZvL2RldmljZS1pbmZvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/device-info/device-info.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/device-info/device-info.page.ts ***!
    \*******************************************************/

  /*! exports provided: DeviceInfoPage */

  /***/
  function srcAppPagesDeviceInfoDeviceInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceInfoPage", function () {
      return DeviceInfoPage;
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


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");

    var DeviceInfoPage = /*#__PURE__*/function () {
      function DeviceInfoPage(device) {
        _classCallCheck(this, DeviceInfoPage);

        this.device = device;
      }

      _createClass(DeviceInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getDeviceID",
        value: function getDeviceID() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.did = this.device.uuid;
                    this.serial = this.device.serial;

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DeviceInfoPage;
    }();

    DeviceInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__["Device"]
      }];
    };

    DeviceInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./device-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-info/device-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./device-info.page.scss */
      "./src/app/pages/device-info/device-info.page.scss"))["default"]]
    })], DeviceInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-device-info-device-info-module-es5.js.map