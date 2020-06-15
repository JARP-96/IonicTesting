function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qr-scanner-qr-scanner-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-scanner/qr-scanner.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-scanner/qr-scanner.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQrScannerQrScannerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"QR Scanner\"></app-toolbar>\n\n<ion-content>\n  <ion-grid id=\"container\">\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"scan()\">Scan QR Code</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>({{ scannedCode }})</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/qr-scanner/qr-scanner-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/qr-scanner/qr-scanner-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: QrScannerPageRoutingModule */

  /***/
  function srcAppPagesQrScannerQrScannerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrScannerPageRoutingModule", function () {
      return QrScannerPageRoutingModule;
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


    var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./qr-scanner.page */
    "./src/app/pages/qr-scanner/qr-scanner.page.ts");

    var routes = [{
      path: '',
      component: _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__["QrScannerPage"]
    }];

    var QrScannerPageRoutingModule = function QrScannerPageRoutingModule() {
      _classCallCheck(this, QrScannerPageRoutingModule);
    };

    QrScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QrScannerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/qr-scanner/qr-scanner.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/qr-scanner/qr-scanner.module.ts ***!
    \*******************************************************/

  /*! exports provided: QrScannerPageModule */

  /***/
  function srcAppPagesQrScannerQrScannerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrScannerPageModule", function () {
      return QrScannerPageModule;
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


    var _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./qr-scanner-routing.module */
    "./src/app/pages/qr-scanner/qr-scanner-routing.module.ts");
    /* harmony import */


    var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./qr-scanner.page */
    "./src/app/pages/qr-scanner/qr-scanner.page.ts");

    var QrScannerPageModule = function QrScannerPageModule() {
      _classCallCheck(this, QrScannerPageModule);
    };

    QrScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponentModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_6__["QrScannerPageRoutingModule"]],
      declarations: [_qr_scanner_page__WEBPACK_IMPORTED_MODULE_7__["QrScannerPage"]]
    })], QrScannerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/qr-scanner/qr-scanner.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/qr-scanner/qr-scanner.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQrScannerQrScannerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3FyLXNjYW5uZXIvcXItc2Nhbm5lci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/qr-scanner/qr-scanner.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/qr-scanner/qr-scanner.page.ts ***!
    \*****************************************************/

  /*! exports provided: QrScannerPage */

  /***/
  function srcAppPagesQrScannerQrScannerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrScannerPage", function () {
      return QrScannerPage;
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


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");

    var QrScannerPage = /*#__PURE__*/function () {
      function QrScannerPage(barcodeScanner) {
        _classCallCheck(this, QrScannerPage);

        this.barcodeScanner = barcodeScanner;
      }

      _createClass(QrScannerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scan",
        value: function scan() {
          var _this = this;

          this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData;
            console.log('Barcode data', barcodeData);
          })["catch"](function (err) {
            console.log('Error', err);
          });
        }
      }]);

      return QrScannerPage;
    }();

    QrScannerPage.ctorParameters = function () {
      return [{
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]
      }];
    };

    QrScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qr-scanner',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./qr-scanner.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-scanner/qr-scanner.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./qr-scanner.page.scss */
      "./src/app/pages/qr-scanner/qr-scanner.page.scss"))["default"]]
    })], QrScannerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-qr-scanner-qr-scanner-module-es5.js.map