(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bluetooth-bluetooth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bluetooth/bluetooth.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bluetooth/bluetooth.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar [back]=\"true\" name=\"BLUETOOTH\"></app-toolbar>\n\n<ion-content padding>\n  <ion-grid id=\"container\">\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendChar()\">SEND 'A'</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendInt()\">SEND '1'</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendString()\">SEND STRING</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendBytes()\">SEND BYTES</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendTypedArray()\">SEND TYPED ARRAY</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" size=\"large\" (click)=\"sendArrayBuffer()\">SEND ARRAY BUFFER</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BluetoothPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageRoutingModule", function() { return BluetoothPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bluetooth.page */ "./src/app/pages/bluetooth/bluetooth.page.ts");




const routes = [
    {
        path: '',
        component: _bluetooth_page__WEBPACK_IMPORTED_MODULE_3__["BluetoothPage"]
    }
];
let BluetoothPageRoutingModule = class BluetoothPageRoutingModule {
};
BluetoothPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BluetoothPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.module.ts ***!
  \*****************************************************/
/*! exports provided: BluetoothPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageModule", function() { return BluetoothPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bluetooth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bluetooth-routing.module */ "./src/app/pages/bluetooth/bluetooth-routing.module.ts");
/* harmony import */ var _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/toolbar/toolbar.component.module */ "./src/app/components/toolbar/toolbar.component.module.ts");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bluetooth.page */ "./src/app/pages/bluetooth/bluetooth.page.ts");








let BluetoothPageModule = class BluetoothPageModule {
};
BluetoothPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bluetooth_routing_module__WEBPACK_IMPORTED_MODULE_5__["BluetoothPageRoutingModule"],
            _components_toolbar_toolbar_component_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponentModule"]
        ],
        declarations: [_bluetooth_page__WEBPACK_IMPORTED_MODULE_7__["BluetoothPage"]]
    })
], BluetoothPageModule);



/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsdWV0b290aC9ibHVldG9vdGgucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.page.ts ***!
  \***************************************************/
/*! exports provided: BluetoothPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPage", function() { return BluetoothPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let BluetoothPage = class BluetoothPage {
    constructor(bluetoothSerial, alertController) {
        this.bluetoothSerial = bluetoothSerial;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    sendChar() {
        this.bluetoothSerial.write('A').then((success) => {
            this.presentAlert(success);
        }, (failure) => {
            this.presentAlert(failure);
        })
            .catch((error) => {
            this.presentAlert(error);
        });
    }
    sendInt() {
        this.bluetoothSerial.write(1).then((success) => {
            this.presentAlert(success);
        }, (failure) => {
            this.presentAlert(failure);
        })
            .catch((error) => {
            this.presentAlert(error);
        });
    }
    sendString() {
        this.bluetoothSerial.write('hello world').then((success) => {
            this.presentAlert(success);
        }, (failure) => {
            this.presentAlert(failure);
        })
            .catch((error) => {
            this.presentAlert(error);
        });
    }
    sendBytes() {
        this.bluetoothSerial.write([186, 220, 222]).then((success) => {
            this.presentAlert(success);
        }, (failure) => {
            this.presentAlert(failure);
        })
            .catch((error) => {
            this.presentAlert(error);
        });
    }
    sendTypedArray() {
        var data = new Uint8Array(4);
        data[0] = 0x41;
        data[1] = 0x42;
        data[2] = 0x43;
        data[3] = 0x44;
        this.bluetoothSerial.write(data).then((success) => {
            this.presentAlert(success);
        }, (failure) => {
            this.presentAlert(failure);
        })
            .catch((error) => {
            this.presentAlert(error);
        });
    }
    sendArrayBuffer() {
        var data = new Uint8Array(4);
        data[0] = 0x41;
        data[1] = 0x42;
        data[2] = 0x43;
        data[3] = 0x44;
        this.bluetoothSerial.write(data.buffer).then((success) => {
            this.presentAlert(success);
        }, (failure) => {
            this.presentAlert(failure);
        })
            .catch((error) => {
            this.presentAlert(error);
        });
    }
};
BluetoothPage.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
BluetoothPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bluetooth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bluetooth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bluetooth/bluetooth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bluetooth.page.scss */ "./src/app/pages/bluetooth/bluetooth.page.scss")).default]
    })
], BluetoothPage);



/***/ })

}]);
//# sourceMappingURL=pages-bluetooth-bluetooth-module-es2015.js.map