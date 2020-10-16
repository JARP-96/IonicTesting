function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ble-ble-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ble/ble.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ble/ble.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBleBlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"Bluetooth BLE\"></app-toolbar>\n\n<ion-content>\n  <ion-grid id=\"container\">\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"scan()\">Scan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-card-content *ngFor=\"let device of devices\">\n      <p>{{ device.name || Unnamed }}</p>\n      <p>{{ device.id }}</p>\n      <p>RSSI: {{ device.rssi }}</p>\n    </ion-card-content>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/ble/ble-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/ble/ble-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: BlePageRoutingModule */

  /***/
  function srcAppPagesBleBleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlePageRoutingModule", function () {
      return BlePageRoutingModule;
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


    var _ble_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ble.page */
    "./src/app/pages/ble/ble.page.ts");

    var routes = [{
      path: '',
      component: _ble_page__WEBPACK_IMPORTED_MODULE_3__["BlePage"]
    }];

    var BlePageRoutingModule = function BlePageRoutingModule() {
      _classCallCheck(this, BlePageRoutingModule);
    };

    BlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BlePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ble/ble.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/ble/ble.module.ts ***!
    \*****************************************/

  /*! exports provided: BlePageModule */

  /***/
  function srcAppPagesBleBleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlePageModule", function () {
      return BlePageModule;
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


    var _ble_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ble-routing.module */
    "./src/app/pages/ble/ble-routing.module.ts");
    /* harmony import */


    var _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/toolbar/toolbar.component.module */
    "./src/app/components/toolbar/toolbar.component.module.ts");
    /* harmony import */


    var _ble_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ble.page */
    "./src/app/pages/ble/ble.page.ts");

    var BlePageModule = function BlePageModule() {
      _classCallCheck(this, BlePageModule);
    };

    BlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ble_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlePageRoutingModule"], _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponentModule"]],
      declarations: [_ble_page__WEBPACK_IMPORTED_MODULE_7__["BlePage"]]
    })], BlePageModule);
    /***/
  },

  /***/
  "./src/app/pages/ble/ble.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/ble/ble.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBleBlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsZS9ibGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/ble/ble.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/ble/ble.page.ts ***!
    \***************************************/

  /*! exports provided: BlePage */

  /***/
  function srcAppPagesBleBlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlePage", function () {
      return BlePage;
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


    var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/ble/ngx */
    "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");

    var BlePage = /*#__PURE__*/function () {
      function BlePage(ble, ngZone) {
        _classCallCheck(this, BlePage);

        this.ble = ble;
        this.ngZone = ngZone;
        this.devices = [];
      }

      _createClass(BlePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scan();
        }
      }, {
        key: "scan",
        value: function scan() {
          this.devices = [];
          this.ble.startScan([]).subscribe(function (res) {
            console.log(JSON.stringify(res));
          });
        }
      }, {
        key: "connectBLE",
        value: function connectBLE() {}
      }]);

      return BlePage;
    }();

    BlePage.ctorParameters = function () {
      return [{
        type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    BlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ble',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ble.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ble/ble.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ble.page.scss */
      "./src/app/pages/ble/ble.page.scss"))["default"]]
    })], BlePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ble-ble-module-es5.js.map