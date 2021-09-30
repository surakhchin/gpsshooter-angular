(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\"  fxHide.gt-xs=\"true\">\n  <mat-grid-tile>\n\n      <mat-card style=\"width: 100%; height: 100%;  \">\n        <!--<button mat-button style=\"width: 100%; height: 100%; margin: 0px \">-->\n\n        <mat-card-content style=\"width: 100%; height: 100% \">\n\n          <div style=\"display: flex; justify-content: center; align-items: center; width: 100%; height: 100%\">\n            <div><h1>About the App</h1>\n              <h2>\n                This app uses your phones GPS and Compass hardware to pinpoint your location and the direction you are pointing.<br>\n                With a point and click at your target you can register a hit.\n              </h2>\n            </div>\n          </div>\n\n\n        </mat-card-content>\n\n        <!--</button>-->\n      </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n\n<mat-grid-list cols=\"1\" rowHeight=\"25rem\" fxHide.xs=\"true\">\n  <mat-grid-tile>\n\n      <mat-card style=\"width: 100%; height: 100%;  \">\n        <!--<button mat-button style=\"width: 100%; height: 100%; margin: 0px \">-->\n\n        <mat-card-content style=\"width: 100%; height: 100% \">\n\n          <div style=\"display: flex; justify-content: center; align-items: center; width: 100%; height: 100%\">\n            <div><h1>About the App</h1>\n              <h2>\n                This app uses your phones GPS and Compass hardware to pinpoint your location and the direction you are pointing.<br>\n                With a simple point and click at your target you can register a hit.\n              </h2>\n            </div>\n          </div>\n\n\n        </mat-card-content>\n\n        <!--</button>-->\n      </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], {
                    // useHash: true,
                    scrollPositionRestoration: 'enabled',
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _single_player_single_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../single-player/single-player.component */ "./src/app/single-player/single-player.component.ts");
/* harmony import */ var _multi_player_multi_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multi-player/multi-player.component */ "./src/app/multi-player/multi-player.component.ts");





var routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', pathMatch: 'full', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'contact', pathMatch: 'full', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'single-player', pathMatch: 'full', component: _single_player_single_player_component__WEBPACK_IMPORTED_MODULE_3__["SinglePlayerComponent"] },
    { path: 'multi-player', pathMatch: 'full', component: _multi_player_multi_player_component__WEBPACK_IMPORTED_MODULE_4__["MultiPlayerComponent"] },
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-nav></app-nav>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shooter-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _single_player_single_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-player/single-player.component */ "./src/app/single-player/single-player.component.ts");
/* harmony import */ var _multi_player_multi_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multi-player/multi-player.component */ "./src/app/multi-player/multi-player.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _single_player_single_player_component__WEBPACK_IMPORTED_MODULE_6__["SinglePlayerComponent"],
                _multi_player_multi_player_component__WEBPACK_IMPORTED_MODULE_7__["MultiPlayerComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\"  fxHide.gt-xs=\"true\">\n  <mat-grid-tile>\n\n      <mat-card style=\"width: 100%; height: 100%;  \">\n        <!--<button mat-button style=\"width: 100%; height: 100%; margin: 0px \">-->\n\n        <mat-card-content style=\"width: 100%; height: 100% \">\n\n          <div style=\"display: flex; justify-content: center; align-items: center; width: 100%; height: 100%\">\n            <div><h1>Contact the Developer</h1>\n              <h2>\n                Creator/Developer:<a mat-button  target=\"_blank\" href=\"https://serge.link\">Serge Urakhchin</a><br>\n                email: urakhchin@gmail.com <br>\n                telegram: @LtSerge\n              </h2>\n            </div>\n          </div>\n\n\n        </mat-card-content>\n\n        <!--</button>-->\n      </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n\n<mat-grid-list cols=\"1\" rowHeight=\"25rem\" fxHide.xs=\"true\">\n  <mat-grid-tile>\n\n      <mat-card style=\"width: 100%; height: 100%;  \">\n        <!--<button mat-button style=\"width: 100%; height: 100%; margin: 0px \">-->\n\n        <mat-card-content style=\"width: 100%; height: 100% \">\n\n          <div style=\"display: flex; justify-content: center; align-items: center; width: 100%; height: 100%\">\n            <div><h1>Contact the Developer</h1>\n              <h2>\n                Creator/Developer:<a mat-button target=\"_blank\" href=\"https://serge.link\">Serge Urakhchin</a><br>\n                email: urakhchin@gmail.com <br>\n                telegram: @LtSerge\n              </h2>\n            </div>\n          </div>\n\n\n        </mat-card-content>\n\n        <!--</button>-->\n      </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\"  fxHide.gt-xs=\"true\">\n  <mat-grid-tile>\n\n      <mat-card style=\"width: 100%; height: 100%;  \">\n        <!--<button mat-button style=\"width: 100%; height: 100%; margin: 0px \">-->\n\n        <mat-card-content style=\"width: 100%; height: 100% \">\n\n          <div style=\"display: flex; justify-content: space-around; flex-direction: column; align-items: center; width: 100%; height: 100%\">\n            <div><h1>A Lasertag Web App</h1>\n              <h2>\n                An app that allows you to play lasertag by yourself or with a friend.<br>\n                Anywhere anytime using a phone and internet connection.\n              </h2></div>\n\n          </div>\n\n\n        </mat-card-content>\n\n        <!--</button>-->\n      </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n\n<mat-grid-list cols=\"1\" rowHeight=\"25rem\" fxHide.xs=\"true\">\n  <mat-grid-tile>\n\n      <mat-card style=\"width: 100%; height: 100%;  \">\n        <!--<button mat-button style=\"width: 100%; height: 100%; margin: 0px \">-->\n\n        <mat-card-content style=\"width: 100%; height: 100% \">\n\n          <div style=\"display: flex; justify-content: center; align-items: center; width: 100%; height: 100%\">\n            <div><h1>A Lasertag Web App</h1>\n              <h2>\n                An app that allows you to play lasertag by yourself or with a friend.<br>\n                Anywhere Anytime using a phone and internet connection.\n              </h2></div>\n          </div>\n\n\n        </mat-card-content>\n\n        <!--</button>-->\n      </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/multi-player/multi-player.component.html":
/*!**********************************************************!*\
  !*** ./src/app/multi-player/multi-player.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div value=\" hey\"></div>-->\n<div style=\"display: flex; flex-direction: column; justify-content: space-between\" fxHide.gt-xs=\"true\">\n  <div>\n    <mat-grid-list cols=\"2\">\n      <mat-grid-tile>\n\n          <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n\n\n            <a mat-button style=\"width: 100%; height: 100%; margin: 0px\"\n            target=\"_blank\" href=\"https://lasertag.cc/p7.html\">\n\n            <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center  \">\n\n\n\n                <div style=\"height: 100%\"><img src=\"../../assets/img/multiplayer.png\" style=\"width: 100%; height: 100%\" alt=\"lasergun\"></div>\n\n\n            </mat-card-content>\n\n            </a>\n          </mat-card>\n\n      </mat-grid-tile>\n      <mat-grid-tile>\n\n          <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n\n                               <!--<input type=\"text\" value=\"User input Text to copy\" #userinput>-->\n            <button mat-button color=\"\" style=\"width: 100%; height: 100%; margin: 0px\"\n            (click)=\"copyMessage('https://lasertag.cc/p7.html')\"\n                    value=\"click to copy\">\n\n\n\n             <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center  \">\n\n\n\n                <div style=\"\">\n\n                 <span id=\"text\">click to copy link</span>\n\n\n                </div>\n\n\n\n\n            </mat-card-content>\n\n            </button>\n          </mat-card>\n\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n\n  <div><h6 style=\"padding-right:5px; padding-left:5px\">Instructions: Use the left link for yourself and copy and send the right link to a friend.</h6></div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div style=\"display: flex; flex-direction: column; justify-content: space-between\" fxHide.xs=\"true\">\n  <div>\n    <mat-grid-list cols=\"2\" rowHeight=\"25rem\" >\n\n\n      <mat-grid-tile>\n\n          <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n\n            <a mat-button style=\"width: 100%; height: 100%; margin: 0px\"\n            target=\"_blank\" href=\"https://lasertag.cc/p7.html\">\n\n            <mat-card-content style=\"width: 100%; height: 100% \">\n\n              <div style=\"height: 100%\"><img src=\"../../assets/img/multiplayer.png\" style=\" height: 100%\" alt=\"lasergun\"></div>\n\n\n            </mat-card-content>\n\n            </a>\n          </mat-card>\n\n      </mat-grid-tile>\n\n\n      <mat-grid-tile>\n\n          <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n\n            <button mat-button  style=\"width: 100%; height: 100%; margin: 0px\"\n            (click)=\"copyMessage('https://lasertag.cc/p7.html')\"\n                    value=\"click to copy\">\n\n            <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center \">\n\n\n                <div style=\"\">\n\n                 <span id=\"text2\">click to copy link</span>\n\n\n                </div>\n\n\n\n\n            </mat-card-content>\n\n            </button>\n          </mat-card>\n\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n\n  <div><h6 style=\"padding-right:5px; padding-left:5px\">Instructions: Use the left link for yourself and copy and send the right link to a friend.</h6></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/multi-player/multi-player.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/multi-player/multi-player.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpLXBsYXllci9tdWx0aS1wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/multi-player/multi-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/multi-player/multi-player.component.ts ***!
  \********************************************************/
/*! exports provided: MultiPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiPlayerComponent", function() { return MultiPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiPlayerComponent = /** @class */ (function () {
    function MultiPlayerComponent() {
    }
    MultiPlayerComponent.prototype.ngOnInit = function () {
    };
    MultiPlayerComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        var text = document.getElementById("text");
        text.innerHTML = 'link copied!!';
        var text2 = document.getElementById("text2");
        text2.innerHTML = 'link copied!!';
        setTimeout(function () {
            text.innerHTML = 'click to copy link';
            text2.innerHTML = 'click to copy link';
        }, 3000);
    };
    MultiPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-player',
            template: __webpack_require__(/*! ./multi-player.component.html */ "./src/app/multi-player/multi-player.component.html"),
            styles: [__webpack_require__(/*! ./multi-player.component.scss */ "./src/app/multi-player/multi-player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiPlayerComponent);
    return MultiPlayerComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-app-background\" [ngClass]=\"{'dark-theme-mode':isDarkTheme}\">\n  <mat-toolbar color=\"primary\">\n    <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n\n    <a mat-button routerLink=\"\">\n      <span class=\"companyName\">gpsshooter.com</span>\n    </a>\n\n\n    <span class=\"example-spacer\"></span>\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\n      <a mat-button routerLink=\"/about\">About</a>\n      <a mat-button routerLink=\"/contact\">Contact</a>\n    </div>\n    <mat-slide-toggle [(ngModel)]=\"isDarkTheme\" (change)=\"storeThemeSelection()\">\n      <mat-icon>bedtime</mat-icon>\n    </mat-slide-toggle>\n  </mat-toolbar>\n\n  <mat-sidenav-container fxFlexFill class=\"example-container\">\n\n    <mat-sidenav color=\"primary\" #sidenav fxLayout=\"column\" mode=\"over\" opened=\"false\" fxHide.gt-sm=\"true\">\n      <div fxLayout=\"column\">\n        <a mat-button routerLink=\"about\">About</a>\n        <a mat-button routerLink=\"contact\">Contact</a>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n\n\n\n\n      <!--MAIN CONTENT OF THE APPLICATION-->\n      <div style=\"display: flex; flex-direction: column; justify-content: space-between; height: 93vh\">\n        <!--<div style=\" \">-->\n\n\n\n        <div style=\"\">\n\n\n\n\n          <div fxFlex=\"50\" style=\"\">\n            <button mat-raised-button color=\"primary\" routerLink=\"/single-player\" class=\"player-button\">Single-Player\n            </button>\n          </div>\n          <div fxFlex=\"50\">\n            <button mat-raised-button color=\"primary\" routerLink=\"/multi-player\" class=\"player-button\">Multi-Player\n            </button>\n          </div>\n\n\n        </div>\n\n\n\n\n\n\n        <div>\n          <router-outlet></router-outlet>\n        </div>\n\n\n\n\n        <br>\n\n        <!--<div>-->\n\n\n          <!--<mat-toolbar color=\"primary\" style=\"width: 100%; height: 100%;  \">-->\n\n            <!--<div style=\"display: flex; width: 100%; justify-content: center\">-->\n\n\n              <!--<a mat-button routerLink=\"/about\">About</a>-->\n              <!--<a mat-button routerLink=\"/home\">© Copyright 2021</a>-->\n              <!--<a mat-button routerLink=\"/contact\">Contact</a>-->\n\n\n            <!--</div>-->\n          <!--</mat-toolbar>-->\n\n\n        <!--</div>-->\n\n\n      </div>\n\n\n\n\n       <div>\n\n\n          <mat-toolbar color=\"primary\" style=\"position: fixed; bottom: 0px \">\n\n            <div style=\"display: flex; width: 100%; justify-content: center\">\n\n\n              <a mat-button routerLink=\"about\">About</a>\n              <a mat-button routerLink=\"\">© Copyright 2021</a>\n              <a mat-button routerLink=\"contact\">Contact</a>\n\n\n            </div>\n          </mat-toolbar>\n\n\n        </div>\n\n\n\n\n    </mat-sidenav-content>\n\n\n  </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  height: 7vh; }\n\ndiv {\n  overflow: inherit; }\n\n.mat-sidenav-container {\n  min-height: 93vh; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.mat-sidenav-content {\n  font-size: 200%;\n  text-align: center; }\n\n.companyName {\n  font-size: 150%; }\n\n.player-button {\n  padding: 10px 25%;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZW9yZ2V1cmFraGNoaW4vRG9jdW1lbnRzL2dwc3Nob290ZXItYW5ndWxhci9zaG9vdGVyLWFwcC9zcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDRSxnQkFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhcntcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbmRpdiB7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXJ7XG4gIG1pbi1oZWlnaHQ6IDkzdmhcbn1cblxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnR7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uY29tcGFueU5hbWV7XG4gICAgZm9udC1zaXplOiAxNTAlO1xufVxuXG5cbi5wbGF5ZXItYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyNSU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.isDarkTheme = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : true;
    };
    NavComponent.prototype.storeThemeSelection = function () {
        localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/single-player/single-player.component.html":
/*!************************************************************!*\
  !*** ./src/app/single-player/single-player.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1>Test</h1>-->\n\n\n<div style=\"display: flex; flex-direction: column; justify-content: space-between\" fxHide.gt-xs=\"true\">\n  <div>\n\n\n  <mat-grid-list cols=\"2\" >\n    <mat-grid-tile>\n\n        <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n          <a mat-button color=\"primary\" style=\"width: 100%; height: 100%; margin: 0px\"\n          target=\"_blank\" href=\"https://lasertag.cc/gun.html\">\n\n          <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center \">\n\n\n            <div><img src=\"../../assets/img/lasergun.png\" style=\"width: 100%\" alt=\"lasergun\"></div>\n\n          </mat-card-content>\n\n          </a>\n        </mat-card>\n\n    </mat-grid-tile>\n    <mat-grid-tile>\n\n          <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n            <a mat-button color=\"primary\" style=\"width: 100%; height: 100%; margin: 0px \"\n            target=\"_blank\" href=\"https://lasertag.cc/target.html\">\n\n            <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center \">\n\n\n              <div><img src=\"../../assets/img/target.png\" style=\"width: 100%\" alt=\"target\"></div>\n\n            </mat-card-content>\n\n            </a>\n          </mat-card>\n\n      </mat-grid-tile>\n    </mat-grid-list>\n\n  </div>\n\n    <div>\n      <h6 style=\"padding-right:5px; padding-left:5px\">Instructions: Use the left link on your main device and right link as a target on a secondary.</h6>\n    </div>\n\n\n</div>\n\n\n\n\n\n\n\n<div style=\"display: flex; flex-direction: column; justify-content: space-between\" fxHide.xs=\"true\">\n  <div>\n\n\n    <mat-grid-list cols=\"2\" rowHeight=\"25rem\">\n      <mat-grid-tile>\n\n          <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n            <a mat-button  style=\"width: 100%; height: 100%; margin: 0px \"\n            target=\"_blank\" href=\"https://lasertag.cc/gun.html\">\n\n            <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center \">\n\n\n              <div><img src=\"../../assets/img/lasergun.png\" style=\"width: 100%\" alt=\"lasergun\"></div>\n\n            </mat-card-content>\n\n            </a>\n          </mat-card>\n\n      </mat-grid-tile>\n      <mat-grid-tile>\n\n            <mat-card style=\"width: 100%; height: 100%; padding: 0px; margin: 0px\">\n              <a mat-button color=\"primary\" style=\"width: 100%; height: 100%; margin: 0px \"\n              target=\"_blank\" href=\"https://lasertag.cc/target.html\">\n\n             png <mat-card-content style=\"width: 100%; height: 100%; display: flex; justify-content: center; align-items: center \">\n\n\n                <div><img src=\"../../assets/img/target.png\" style=\"width: 100%\" alt=\"target\"></div>\n\n              </mat-card-content>\n\n              </a>\n            </mat-card>\n\n        </mat-grid-tile>\n      </mat-grid-list>\n\n    </div>\n    <div><h6 style=\"padding-right:5px; padding-left:5px\">Instructions: Use the left link on your main device and right link as a target on a secondary.</h6></div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/single-player/single-player.component.scss":
/*!************************************************************!*\
  !*** ./src/app/single-player/single-player.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wbGF5ZXIvc2luZ2xlLXBsYXllci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/single-player/single-player.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/single-player/single-player.component.ts ***!
  \**********************************************************/
/*! exports provided: SinglePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePlayerComponent", function() { return SinglePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent() {
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
    };
    SinglePlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-player',
            template: __webpack_require__(/*! ./single-player.component.html */ "./src/app/single-player/single-player.component.html"),
            styles: [__webpack_require__(/*! ./single-player.component.scss */ "./src/app/single-player/single-player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SinglePlayerComponent);
    return SinglePlayerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/georgeurakhchin/Documents/gpsshooter-angular/shooter-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map