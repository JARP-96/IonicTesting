function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mysql-mysql-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mysql/mysql.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mysql/mysql.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMysqlMysqlPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar [back]=\"true\" name=\"MYSQL TEST\"></app-toolbar>\n\n<ion-content padding>\n  <ion-grid id=\"container\">\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"getData()\">GET CALLES</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"getDataNative()\">get calles native</ion-button>\n      </ion-col>\n    </ion-row>\n    <p *ngFor=\"let post of posts \">{{ post.titular }}</p>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/mysql/mysql-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/mysql/mysql-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MysqlPageRoutingModule */

  /***/
  function srcAppPagesMysqlMysqlRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysqlPageRoutingModule", function () {
      return MysqlPageRoutingModule;
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


    var _mysql_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mysql.page */
    "./src/app/pages/mysql/mysql.page.ts");

    var routes = [{
      path: '',
      component: _mysql_page__WEBPACK_IMPORTED_MODULE_3__["MysqlPage"]
    }];

    var MysqlPageRoutingModule = function MysqlPageRoutingModule() {
      _classCallCheck(this, MysqlPageRoutingModule);
    };

    MysqlPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MysqlPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mysql/mysql.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/mysql/mysql.module.ts ***!
    \*********************************************/

  /*! exports provided: MysqlPageModule */

  /***/
  function srcAppPagesMysqlMysqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysqlPageModule", function () {
      return MysqlPageModule;
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


    var _mysql_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mysql-routing.module */
    "./src/app/pages/mysql/mysql-routing.module.ts");
    /* harmony import */


    var _mysql_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mysql.page */
    "./src/app/pages/mysql/mysql.page.ts");

    var MysqlPageModule = function MysqlPageModule() {
      _classCallCheck(this, MysqlPageModule);
    };

    MysqlPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponentModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mysql_routing_module__WEBPACK_IMPORTED_MODULE_6__["MysqlPageRoutingModule"]],
      declarations: [_mysql_page__WEBPACK_IMPORTED_MODULE_7__["MysqlPage"]]
    })], MysqlPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mysql/mysql.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/mysql/mysql.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMysqlMysqlPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215c3FsL215c3FsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/mysql/mysql.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/mysql/mysql.page.ts ***!
    \*******************************************/

  /*! exports provided: MysqlPage */

  /***/
  function srcAppPagesMysqlMysqlPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysqlPage", function () {
      return MysqlPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");

    var MysqlPage = /*#__PURE__*/function () {
      function MysqlPage(navCtrl, http, httpNative) {
        _classCallCheck(this, MysqlPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.httpNative = httpNative;
        this.ROOT_URL_1 = "http://192.168.0.32/codeigniter/public/calles";
        this.ROOT_URL_2 = "http://192.168.0.32/codeigniter/public/marcas/post";
      }

      _createClass(MysqlPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.http.get(this.ROOT_URL_1).subscribe(function (calles) {
            _this.posts = calles;
            console.log(_this.posts);
          });
        }
      }, {
        key: "getDataNative",
        value: function getDataNative() {
          var _this2 = this;

          this.httpNative.get(this.ROOT_URL_1, {}, {}).then(function (res) {
            _this2.posts = res.data;
            console.log("*** ", _this2.posts);
            console.log(res.status);
            console.log(res.data); // data received by server

            console.log(res.headers);
          })["catch"](function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string

            console.log(error.headers);
          });
        }
      }]);

      return MysqlPage;
    }();

    MysqlPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    MysqlPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mysql',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mysql.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mysql/mysql.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mysql.page.scss */
      "./src/app/pages/mysql/mysql.page.scss"))["default"]]
    })], MysqlPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-mysql-mysql-module-es5.js.map