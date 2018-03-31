webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n.cl-8-top {\n  margin-top: 100px;\n  margin-left: 100px;\n}\n.borders{\n  border-left:1px solid #ddd;\n  margin:-20px;\n  height:750px;\n  left:20px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<a routerLink=\"/login\">Login</a>\n<a routerLink=\"/register\">Register</a>\n<!--<a routerLink=\"/profile/5ab9a26fb76f87af60da8b9c\">Profile</a>-->\n<!--<a routerLink=\"/profile/5ab9a26fb76f87af60da8b9c/website\">Website</a>-->\n<!--<a routerLink=\"/profile/5ab9a26fb76f87af60da8b9c/website/5ab9a301b76f87af60da8b9e/page\">Page</a>-->\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_user_login_login_component__ = __webpack_require__("./src/app/views/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_user_register_register_component__ = __webpack_require__("./src/app/views/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_user_profile_profile_component__ = __webpack_require__("./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_website_website_list_website_list_component__ = __webpack_require__("./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_website_website_new_website_new_component__ = __webpack_require__("./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_page_page_list_page_list_component__ = __webpack_require__("./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_page_page_new_page_new_component__ = __webpack_require__("./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_quill_editor_quillEditor_module__ = __webpack_require__("./node_modules/ngx-quill-editor/quillEditor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_widget_widget_list_sortable_directive__ = __webpack_require__("./src/app/views/widget/widget-list/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_to_upper_case_pipe__ = __webpack_require__("./src/app/pipes/to-upper-case.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__views_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("./src/app/views/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__views_widget_widget_list_safe_pipe_pipe__ = __webpack_require__("./src/app/views/widget/widget-list/safe-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// user components



// website components




// client side services





















// import {AuthGuard} from './services/auth-gaurd.service';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__views_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_25__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_26__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_28__views_widget_widget_list_sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_33__views_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_34__views_widget_widget_list_safe_pipe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_to_upper_case_pipe__["a" /* ToUpperCasePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27_ngx_quill_editor_quillEditor_module__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_12__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_13__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_14__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_31__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__["a" /* FlickrService */],
                { provide: __WEBPACK_IMPORTED_MODULE_35__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_35__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_user_register_register_component__ = __webpack_require__("./src/app/views/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_user_profile_profile_component__ = __webpack_require__("./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_website_website_list_website_list_component__ = __webpack_require__("./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_user_login_login_component__ = __webpack_require__("./src/app/views/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_website_website_new_website_new_component__ = __webpack_require__("./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_page_page_list_page_list_component__ = __webpack_require__("./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__ = __webpack_require__("./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");



















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__views_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__views_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_2__views_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:userId/website', component: __WEBPACK_IMPORTED_MODULE_3__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'profile/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'profile/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'profile/:userId/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_6__views_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'profile/:userId/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/header', component: __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/image', component: __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/youtube', component: __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/text', component: __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/html', component: __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/pipes/to-upper-case.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToUpperCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToUpperCasePipe = /** @class */ (function () {
    function ToUpperCasePipe() {
    }
    ToUpperCasePipe.prototype.transform = function (text, args) {
        return text.toUpperCase();
    };
    ToUpperCasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'myToUpperCase'
        })
    ], ToUpperCasePipe);
    return ToUpperCasePipe;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mayankrd on 8/16/17.
 */


var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '90ea0df0685933f65ea96fab852a3023';
        this.secret = '59b7fb7ceb0a467b';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])() // needed as we're injecting Http service into this service
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this._http.post(url, page)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this._http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.put(url, page)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.delete(url)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== '0') {
                _this.sharedService.user = user; // setting user as global variable using shared service
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.hello = function () {
        return this.http.get(this.baseUrl + '/api/user/hello');
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (res) {
            return 'update';
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var body = {
            name: website.name,
            description: website.description,
            developerId: userId
        };
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this._http.post(url, body)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        var body = website;
        return this._http.put(url, body)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this._http.delete(url)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '')
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\">\n        </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updatePage()\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Edit Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"page-name\"  name=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" type=\"text\" class=\"form-control\" id=\"page-title\" name=\"title\">\n    </div>\n    <a (click)=\"deletePage()\" class=\"btn btn-danger btn-block\" >Delete</a>\n  </form>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = { name: '', title: '' };
    }
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageID).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.pageID, this.page).subscribe(function (page) {
            _this.page = page;
            // alert('update successfully');
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            console.log(params.get('pid'));
            _this.pageID = params.get('pid');
        });
        this.pageService.findPageById(this.pageID).subscribe(function (page) {
            _this.page = page;
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Pages\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding \">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor = \"let page of pages\">\n\n      <a routerLink=\"./{{page._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"./{{page._id}}/widget\">{{page.name}}</a>\n    </li>\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a href=\"page-edit.html\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>-->\n      <!--<a href=\"../widget/widget-list.html\">Blogs</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a href=\"page-edit.html\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>-->\n      <!--<a href=\"../widget/widget-list.html\">Home</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a href=\"page-edit.html\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>-->\n      <!--<a href=\"../widget/widget-list.html\">About</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a href=\"page-edit.html\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>-->\n      <!--<a href=\"../widget/widget-list.html\">Contact Us</a>-->\n    <!--</li>-->\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a href=\"../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activeRoute) {
        this.pageService = pageService;
        this.activeRoute = activeRoute;
        this.pages = [{ _id: '', name: '' }];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.websiteID = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteID).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createPage()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\"./\">\n      New Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = { name: '', title: '' };
    }
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageService.createPage(this.websiteId, this.page).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            console.log(_this.page);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n\n  </div>\n\n\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <label>Username</label>\n    <input   placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n  </span>\n\n    <label>Password</label>\n    <input   placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\"/>\n\n\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n\n    <!--<a class=\"btn btn-success btn-block\"-->\n    <!--href=\"../register/register.component.html\">Register</a>-->\n    <!--{{f.valid}}-->\n\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredential(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                console.log(user);
                _this.errorFlag = false;
                _this.router.navigate(['/profile', user._id]);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/views/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"cl-text-white navbar-brand cl-text-bold\">\n      Profile : {{user.username}}\n    </a>\n\n    <!--<a routerLink=\"/profile/{{user._id}}\" (click)=\"updateUser(user)\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">-->\n      <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n    <!--</a>-->\n  </div>\n</nav>\n\n<div class=\"container-fluid my-padding\">\n\n  <form (ngSubmit)=\"updateUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">UserName</label>\n      <input placeholder=\"username\" type=\"text\" class=\"form-control\" id=\"name\"\n             [(ngModel)]=\"user.username\" required\n             name=\"username\" #username=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">PassWord</label>\n      <input placeholder=\"password\" type=\"password\"  class=\"form-control\" id=\"password\"\n             [(ngModel)]=\"user.password\" required\n             name=\"password\" #password=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input placeholder=\"username\" type=\"text\" class=\"form-control\" id=\"first-name\"\n             [(ngModel)]=\"user.firstname\" required name=\"first-name\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">First Name</label>\n      <input placeholder=\"username\" type=\"text\" class=\"form-control\" id=\"last-name\"\n             [(ngModel)]=\"user.lastname\" required name=\"last-name\"/>\n    </div>\n  <button class=\"btn btn-primary btn-block\" type = \"submit\">Update</button>\n    <a  (click)=\"deleteUser()\" class=\"btn btn-primary btn-block\" routerLink=\"/login\">Delete</a>\n  <a  routerLink=\"./website\" class=\"btn btn-primary btn-block\" >Websites</a>\n  <button class=\"btn btn-danger  btn-block\" type = \"button\" (click)=\"logout()\">Logout</button>\n    </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container\">\n    <a routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-white\"></span>\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.user = { _id: '', username: '', password: '', firstname: '', lastname: '' };
    }
    ProfileComponent.prototype.updateUser = function () {
        this.userService.updateUser(this.user._id, this.user).subscribe(function (user) {
            alert('update successfully');
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        this.userService.deleteUser(this.user._id).subscribe();
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(params['userId']).subscribe(function (data) {
                _this.user = data;
                console.log(_this.user);
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/views/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label>UserName</label>\n      <input placeholder=\"alice\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label>PassWord</label>\n      <input placeholder=\"1234@###\" type=\"password\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" required />\n    </div>\n\n    <div class=\"form-group\">\n      <label>PassWord</label>\n      <input placeholder=\"1234@###\" type=\"password\"  class=\"form-control\" name=\"verifypw\" [(ngModel)]=\"verifyPw\" required/>\n    </div>\n\n  <button class=\"btn btn-primary btn-block\" (click)=\"register()\">Register</button>\n  <button class=\"btn btn-danger  btn-block\" type = \"button\" (click)=\"login()\">Cancel</button>\n\n  </form>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.pwErrorMsg = 'Password should be same';
        this.userErrorMsg = 'Already Exist this userName';
        this.user = { _id: undefined, username: '', password: '', firstname: '', lastname: '' };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.createUser(this.user).subscribe(function (user) {
            _this.user = user;
            _this.user._id = user._id;
            console.log(_this.user._id);
            _this.router.navigate(['/profile/' + _this.user._id]);
        });
    };
    RegisterComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/views/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-1 col-sm-4\">\r\n      <div class=\"container-fluid row\">\r\n        <div class=\"col-sm-2 col-xs-12\">\r\n          <p class=\"navbar-text pull-left\">\r\n            <a routerLink=\"..\" class=\"navbar-link cl-text-white\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n            </a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-xs-10 hidden-xs\">\r\n          <a class=\"cl-text-white navbar-brand cl-text-bold cl-icon-padding\" routerLink=\"..\">\r\n            Websites\r\n          </a>\r\n          <a routerLink=\"../new\" class=\"navbar-link navbar-text pull-right cl-text-white\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-11 col-sm-8\">\r\n      <div class=\"container-fluid\">\r\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\".\">\r\n          Edit Websites\r\n        </a>\r\n        <a (click)=\"updateWeb()\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\r\n          <span class=\"glyphicon glyphicon-ok\"></span></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-xs-4 hidden-xs\" *ngIf = \"websites\">\r\n    <ul class=\"list-group cl-list-group-borderless\">\r\n      <li *ngFor = \"let websiteLi of websites\" class=\"list-group-item cl-list-item-borderless\">\r\n        <a routerLink=\"../{{websiteLi._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\r\n        <a routerLink=\"../{{websiteLi._id}}/page\">{{websiteLi.name}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-8\" *ngIf=\"website\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"website-name\">Website Name</label>\r\n        <input [(ngModel)]=\"website.name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder={{website.name}} name=\"name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"website-description\">Website Description</label>\r\n        <textarea [(ngModel)]=\"website.description\" id=\"website-description\" class=\"form-control\" placeholder=\"description\" rows=\"5\" name=\"description\"></textarea>\r\n      </div>\r\n      <br/>\r\n    </form>\r\n    <a (click)=\"deleteWeb()\" class=\"btn btn-danger btn-block\">Delete</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\r\n      <span class=\"glyphicon glyphicon-user\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{ _id: '', name: '', description: '' }];
    }
    WebsiteEditComponent.prototype.deleteWeb = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.website._id).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WebsiteEditComponent.prototype.updateWeb = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.website._id, this.website).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            console.log(_this.website);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (websites) {
            _this.websites = websites;
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.websiteService.findWebsiteById(this.wid).subscribe(function (website) {
            _this.website = website;
            console.log(_this.website);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], WebsiteEditComponent.prototype, "webForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"navbar-link cl-text-white cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n      Websites\n    </a>\n    <a routerLink=\"./new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\" >\n    <li  *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"./{{website._id}}/page\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [{ _id: '', name: '', description: '' }];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
                console.log(_this.websites);
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"..\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Websites\n        </a>\n        <a routerLink=\".\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          New Websites\n        </a>\n        <a class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createWeb()\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li  *ngFor=\"let website of websites\">\n        <a routerLink=\"../{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n        <a routerLink=\"../{{website._id}}/page\">{{website.name}}</a>\n      </li>\n\n    </ul>\n  </div>\n\n  <div class=\"col-xs-8\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label class=\"cl-8-top\" for=\"website-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\"\n               [(ngModel)]=\"website.name\" required\n               name=\"webname\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"\n                  [(ngModel)]=\"website.description\" required\n                  name=\"description\"></textarea>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{ _id: '', name: '', description: '' }];
        this.website = { _id: '', name: '', description: '' };
    }
    WebsiteNewComponent.prototype.createWeb = function () {
        var _this = this;
        this.websiteService.createWebsite(this.userId, this.website).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"../header\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"../html\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"../text\">Text</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"../image\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"../youtube\">YouTube</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
            _this.pageID = params['pid'];
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = { widgetType: '' };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
        });
        this.widgetService.findWidgetById(this.wgid).subscribe(function (widget) {
            _this.widget = widget;
            console.log(_this.widget);
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit1',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n        <button class=\"glyphicon glyphicon-ok\" (click)=\"update()\">\n        </button>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Header Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-name\" ngModel required\n             name=\"headName\" #headName=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-text\" [(ngModel)]=\"widget.text\" required\n             name=\"text\" #text=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-size\" [(ngModel)]=\"widget.size\" required\n             name=\"size\" #size=\"ngModel\"/>\n    </div>\n  </form>\n  <button class=\"btn btn-danger btn-block\" (click)=\"delete()\">Delete</button>\n</div>\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = { name: '', widgetType: 'HEADER', pageId: '', text: '', size: '', position: undefined };
    }
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widget) {
            _this.widget = widget;
            console.log(_this.widget);
            alert('delete successfully');
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        if (this.wgid === undefined) {
            this.widget.position = this.widgets.length;
            this.widgetService.createWidget(this.pageID, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('create successfully');
            });
        }
        else {
            this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('update successfully');
            });
        }
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageID = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageID).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
        });
        if (this.wgid === undefined) {
            this.widget.pageId = this.pageID;
            this.widget.widgetType = 'HEADER';
        }
        else {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--Left arrow-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/profile', userId, 'website', websiteId, 'page', pageID, 'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <span>\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n                <b>Widget Edit</b>\n            </a>\n        </p>\n        </span>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"update()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"flag\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input ngModel\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"widname\"\n             placeholder=\"Name\"\n             required #widname=\"ngModel\">\n      <span class=\"alert-class\"\n            *ngIf=\"flag\">{{alert}}</span>\n    </div>\n    <!--<div ng-models=\"models.widget.text\"-->\n         <!--text-angular-->\n         <!--ta-toolbar=\"[['h1','h2','h3'],['bold','italics','underline','strikeThrough'],-->\n        <!--['ul','ol'],['justifyLeft','justifyCenter','justifyRight','justifyFull'],-->\n        <!--['indent','outdent'],['html']]\">-->\n    <!--</div>-->\n\n    <!-- use with ngModel -->\n    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n                  <!--[options]=\"editorOptions\"-->\n                  <!--(blur)=\"onEditorBlured($event)\"-->\n                  <!--(focus)=\"onEditorFocused($event)\"-->\n                  <!--(ready)=\"onEditorCreated($event)\"-->\n                  <!--(change)=\"onContentChanged($event)\"-->\n  </form>\n  <p></p>\n\n  <a class=\"btn btn-danger btn-block\" (click)=\"delete()\">Delete</a>\n\n</div>\n\n<!-- Footer -->\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = { name: '', widgetType: '', pageId: '', text: '', size: '', position: undefined };
    }
    WidgetHtmlComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widget) {
            _this.widget = widget;
            alert('delete successfully');
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetHtmlComponent.prototype.update = function () {
        var _this = this;
        if (this.wgid === undefined) {
            this.widget.position = this.widgets.length;
            this.widgetService.createWidget(this.pageID, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('create successfully');
            });
        }
        else {
            this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('update successfully');
            });
        }
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageID = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['userId'];
            _this.widgetService.findWidgetsByPageId(_this.pageID).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
        });
        if (this.wgid === undefined) {
            this.widget.pageId = this.pageID;
            this.widget.widgetType = 'HTML';
        }
        else {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--Left arrow-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widgetId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <span>\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n                <b>Search Flickr</b>\n            </a>\n        </p>\n        </span>\n  </div>\n</nav>\n\n<!--!!Material on the page!!-->\n<div class = \"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n        </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n      <p></p>\n    </div>\n  </div>\n\n</div>\n<!-- Footer -->\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <!--Play Symbol-->\n    <!--User Symbol-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.widget = { name: '', size: '2', widgetType: 'IMAGE', pageId: '', width: '', url: '', text: '', position: undefined };
    }
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        console.log(this.widgetId === undefined);
        if (this.widgetId === 'undefined') {
            this.widget.position = this.widgets.length;
            console.log(this.widget.position);
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                alert('create successfully');
                _this.router.navigate(['../../'], { relativeTo: _this.activatedRoute });
            });
        }
        else {
            console.log('thank you');
            this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                alert('update successfully');
                _this.router.navigate(['../../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        if (this.widgetId === undefined) {
            this.widget.pageId = this.pageId;
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    FlickrImageSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"upload()\"  class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Image Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"image-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\"\n               ngModel required\n               name=\"headerName\" #headerName=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"image-text\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\"\n               [(ngModel)]=\"widget.text\" required\n               name=\"text\" #text=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"image-URL\">URL</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"widget.url\" required name=\"url\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"image-width\">Width</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-width\" [(ngModel)]=\"widget.width\" required\n               name=\"width\"/>\n      </div>\n    </form>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <label for=\"myFile\">Upload Image</label>\n    <input  name=\"myFile\" id=\"myFile\"  type=\"file\" class=\"form-control form-group\"/>\n    <input  name=\"widgetId\" value=\"{{widget._id}}\" style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pageID}}\" style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>\n    <input  name=\"position\" value=\"{{widgets.length}}\" style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a class=\"btn btn-primary btn-block \"\n     [routerLink]=\"['/profile/' + userId +'/website/'+ websiteId + '/page/' + pageID + '/widget/' + wgid + '/flickr']\" >Choose From Flickr</a>\n\n  <a class=\"btn btn-danger btn-block\" (click)=\"delete()\">Delete</a>\n</div>\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = { _id: undefined, name: '', widgetType: '', pageId: '', width: '', url: '', text: '', position: undefined };
    }
    WidgetImageComponent.prototype.upload = function () {
        var _this = this;
        if (this.wgid === undefined) {
            this.widget.position = this.widgets.length;
            this.widgetService.createWidget(this.pageID, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('create successfully');
            });
        }
        else {
            this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('update successfully');
            });
        }
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function () {
            alert('delete successfully');
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
            _this.pageID = params['pid'];
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.widgetService.findWidgetsByPageId(_this.pageID).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        if (this.wgid === undefined) {
            this.widget.widgetType = 'IMAGE';
            this.widget.pageId = this.pageID;
        }
        else {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (widget) {
                _this.widget = widget;
                console.log(_this.widget);
            });
        }
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--Left arrow-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/profile', userId, 'website', websiteId, 'page', pageID, 'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <span>\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n                <b>Widget Edit</b>\n            </a>\n        </p>\n        </span>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a  (click) = \"update()\"\n          class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<!--Body of the page -->\n<div class=\"container\">\n\n  Text\n  <input [(ngModel)]=\"widget.text\" class=\"form-control\"/>\n  Rows\n  <input [(ngModel)]=\"widget.rows\" class=\"form-control\" type=\"number\"/>\n\n    <label for=\"Name\">Name</label>\n    <div>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\">\n      <span class=\"alert-class\"\n            *ngIf=flag>{{alert}}</span>\n    </div>\n\n  Placeholder\n  <input [(ngModel)]=\"widget.placeholder\" class=\"form-control\" required/>\n  <p></p>\n  <div class=\"input-group\">\n    <input type=\"text\"\n           readonly\n           value=\"Formatted\"\n           class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\"\n               type=\"checkbox\"/>\n    </span>\n  </div>\n\n  <p></p>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"delete()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = { name: '', widgetType: '', pageId: '', text: '', rows: undefined, placeholder: undefined,
            formatted: undefined, position: undefined };
    }
    WidgetTextComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widget) {
            _this.widget = widget;
            alert('delete successfully');
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetTextComponent.prototype.update = function () {
        var _this = this;
        if (this.wgid === undefined) {
            this.widget.position = this.widgets.length;
            this.widgetService.createWidget(this.pageID, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('create successfully');
            });
        }
        else {
            this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('update successfully');
            });
        }
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageID = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['userId'];
            _this.widgetService.findWidgetsByPageId(_this.pageID).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
        });
        if (this.wgid === undefined) {
            this.widget.widgetType = 'TEXT';
            this.widget.pageId = this.pageID;
        }
        else {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"update()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder={{widget.name}}\n             [(ngModel)]=\"widget.name\" required\n             name=\"name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-text\" placeholder={{widget.text}}\n             [(ngModel)]=\"widget.text\" required\n             name=\"text\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder={{widget.url}}\n             [(ngModel)]=\"widget.url\" required\n             name=\"url\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-width\" placeholder={{widget.width}}\n             [(ngModel)]=\"widget.width\" required\n             name=\"width\"/>\n    </div>\n\n  </form>\n  <button class=\"btn btn-danger  btn-block\" type=\"button\" (click)=\"delete()\">Delete</button>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = { _id: undefined, name: '', widgetType: '', pageId: '', width: '', url: '', text: '', position: undefined };
    }
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        if (this.wgid === undefined) {
            this.widget.position = this.widgets.length;
            this.widgetService.createWidget(this.pageID, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('create successfully');
            });
        }
        else {
            this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                alert('update successfully');
            });
        }
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        var widget = this.widgetService.deleteWidget(this.wgid).subscribe(function () {
            alert('delete successfully');
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
            _this.pageID = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageID).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['wgid']);
            _this.wgid = params['wgid'];
        });
        if (this.wgid === undefined) {
            this.widget.widgetType = 'YOUTUBE';
            this.widget.pageId = this.pageID;
        }
        else {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/safe-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        // splitting input url on '='
        // the result is two elements in the output array
        var parts = url.split('=');
        var id = parts[1];
        url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\">\n        </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-plus\">\n        </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets | orderBy\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div>\n\n        <div class=\"pull-right\">\n          <a routerLink=\".\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n          </a>\n          <a routerLink=\"./{{widget._id}}\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n        <div *ngSwitchCase=\"'HEADER'\">\n          <div [ngSwitch]=\"widget.size\">\n            <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n            <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n            <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n            <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n            <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n            <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n            <iframe width=\"560\" height=\"315\" [src]=getURL(widget.url) frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img class=\"img-responsive img-rounded cl-widget-images\" src=\"{{widget.url}}\">\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\">\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n          </div>\n\n          <input *ngIf=\"!widget.formatted && (!widget.rows || 1===widget.rows)\"\n                 placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n          <textarea *ngIf=\"!widget.formatted && (1<widget.rows)\"\n                    rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                    class=\"form-control\">{{widget.text}}</textarea>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n\n    <div class=\"pull-left navbar-text\">\n      <a routerLink=\".\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a routerLink=\".\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activatedRoute, widgetService, domSanitizer) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.domSanitizer = domSanitizer;
        // @ViewChild(SortableDirective) srtDir;
        this.widgets = [{ _id: undefined, name: '', widgetType: '', pageId: '', text: '', size: undefined, url: undefined,
                formatted: undefined, rows: undefined, placeholder: undefined }];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        // fetching list of widgets using widget service
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            _this.widgets = data;
            console.log(_this.widgets);
        });
    };
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) {
            console.log('thanks');
            console.log(data);
        });
    };
    WidgetListComponent.prototype.getURL = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://xueyuan.herokuapp.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map