(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gps-gps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gps/gps.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gps/gps.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar [back]=\"true\" name=\"GPS\"></app-toolbar>\n\n<ion-content>\n  <ion-grid id=\"container\">\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"getLocation()\">GET CURRENT DEVICE LOCATION</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>Latitude: ({{ latitude }}) , Longitude: ({{ longitude }})</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gps/gps-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gps/gps-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GpsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPageRoutingModule", function() { return GpsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gps.page */ "./src/app/pages/gps/gps.page.ts");




const routes = [
    {
        path: '',
        component: _gps_page__WEBPACK_IMPORTED_MODULE_3__["GpsPage"]
    }
];
let GpsPageRoutingModule = class GpsPageRoutingModule {
};
GpsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GpsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gps/gps.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/gps/gps.module.ts ***!
  \*****************************************/
/*! exports provided: GpsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPageModule", function() { return GpsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/toolbar/toolbar.component.module */ "./src/app/components/toolbar/toolbar.component.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gps_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gps-routing.module */ "./src/app/pages/gps/gps-routing.module.ts");
/* harmony import */ var _gps_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gps.page */ "./src/app/pages/gps/gps.page.ts");








let GpsPageModule = class GpsPageModule {
};
GpsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponentModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _gps_routing_module__WEBPACK_IMPORTED_MODULE_6__["GpsPageRoutingModule"]
        ],
        declarations: [_gps_page__WEBPACK_IMPORTED_MODULE_7__["GpsPage"]]
    })
], GpsPageModule);



/***/ }),

/***/ "./src/app/pages/gps/gps.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/gps/gps.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dwcy9ncHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/gps/gps.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/gps/gps.page.ts ***!
  \***************************************/
/*! exports provided: GpsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPage", function() { return GpsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let GpsPage = class GpsPage {
    constructor(geolocation, loadingController) {
        this.geolocation = geolocation;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    getLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Obteniendo ubicación...',
            });
            yield loading.present();
            this.latitude = null;
            this.longitude = null;
            this.geolocation.getCurrentPosition().then((resp) => {
                this.latitude = resp.coords.latitude;
                this.longitude = resp.coords.longitude;
            }).catch((error) => {
                console.log('Error getting location', error);
            });
            yield loading.dismiss();
        });
    }
};
GpsPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
GpsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gps',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gps.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gps/gps.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gps.page.scss */ "./src/app/pages/gps/gps.page.scss")).default]
    })
], GpsPage);



/***/ })

}]);
//# sourceMappingURL=pages-gps-gps-module-es2015.js.map