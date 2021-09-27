(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Q+7":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reducers/items/items.actions */ "nBWq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/ripple.directive */ "fiuP");







function AddComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddComponent {
    constructor(store$) {
        this.store$ = store$;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            itemPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            itemImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
        this.item = null;
    }
    get itemName() {
        return this.form.get('itemName');
    }
    get itemPrice() {
        return this.form.get('itemPrice');
    }
    get itemImage() {
        return this.form.get('itemImage');
    }
    ngOnInit() {
    }
    handleFileInput(e) {
        const fileInput = e.target;
        this.item = Array.from(fileInput.files)[0];
    }
    submit() {
        if (!this.form.valid || !this.item) {
            return;
        }
        const formData = new FormData();
        formData.append('image', this.item, this.item.name);
        formData.append('name', this.itemName.value);
        formData.append('price', this.itemPrice.value);
        formData.append('createdDate', new Date().toLocaleDateString());
        this.store$.dispatch(Object(src_app_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_1__["upload"])({ formData }));
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 23, vars: 15, consts: [[1, "mb-2"], [3, "formGroup", "ngSubmit", "keydown.enter"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "itemName", 1, "form-control", "w-50", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "itemPrice", 1, "form-control", "w-50", 3, "ngClass"], ["type", "file", "formControlName", "itemImage", 1, "form-control", "w-50", 3, "ngClass", "change"], [1, "d-flex", "justify-content-end"], ["type", "submit", "appRipple", "", 1, "btn-navi", "me-0"], [1, "invalid-feedback"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); })("keydown.enter", function AddComponent_Template_form_keydown_enter_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddComponent_span_8_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0426\u0456\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddComponent_span_13_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddComponent_span_14_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddComponent_Template_input_change_18_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddComponent_span_19_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u041D\u0410\u0414\u0406\u0421\u041B\u0410\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.itemName.invalid && (ctx.itemName.touched || ctx.itemName.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemName.errors == null ? null : ctx.itemName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemName.errors == null ? null : ctx.itemName.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.itemPrice.invalid && (ctx.itemPrice.touched || ctx.itemPrice.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemPrice.errors == null ? null : ctx.itemPrice.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemPrice.errors == null ? null : ctx.itemPrice.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.itemImage.invalid && (ctx.itemImage.touched || ctx.itemImage.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemImage.errors == null ? null : ctx.itemImage.errors.required);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["RippleDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\server\client\src\main.ts */"zUnb");


/***/ }),

/***/ "4z3Y":
/*!***********************************************!*\
  !*** ./src/app/reducers/auth/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: authNode, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authNode", function() { return authNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "MXcw");


const authNode = 'auth';
const initialState = {
    _id: '',
    login: '',
    password: '',
    mail: '',
    isAdmin: false,
    currentPage: null,
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["updateUserState"], (state, { _id, login, password, mail, isAdmin }) => (Object.assign(Object.assign({}, state), { _id,
    login,
    password, mail: mail || '', isAdmin: !!isAdmin }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["openLoginPage"], state => (Object.assign(Object.assign({}, state), { currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_1__["authPages"].login }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["openRegisterPage"], state => (Object.assign(Object.assign({}, state), { currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_1__["authPages"].register }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["openRemindPage"], state => (Object.assign(Object.assign({}, state), { currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_1__["authPages"].remind }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["exit"], state => (Object.assign(Object.assign({}, state), { _id: '', login: '', password: '', mail: '', isAdmin: false }))));


/***/ }),

/***/ "6nFo":
/*!*********************************************************!*\
  !*** ./src/app/reducers/snackbar/snackbar.selectors.ts ***!
  \*********************************************************/
/*! exports provided: selectAuthFeature, selectSnackbarMsg, selectSnackbarIsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthFeature", function() { return selectAuthFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSnackbarMsg", function() { return selectSnackbarMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSnackbarIsError", function() { return selectSnackbarIsError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _snackbar_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.reducer */ "SFDD");


const selectAuthFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_snackbar_reducer__WEBPACK_IMPORTED_MODULE_1__["snackbarNode"]);
const selectSnackbarMsg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.msg);
const selectSnackbarIsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.isError);


/***/ }),

/***/ "7mdH":
/*!*********************************************************!*\
  !*** ./src/app/components/items/item/item.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ItemComponent {
    constructor() {
        this.item = {};
        this.source = '../../../assets/';
    }
    ngOnInit() {
        this.source += this.item.image;
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], inputs: { item: "item" }, decls: 9, vars: 4, consts: [[1, "card", 2, "width", "18rem"], [1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-date"], [1, "card-title"], [1, "card-text", "text-end"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.price, " \u0433\u0440\u043D.");
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n  margin: 15px 15px;\n}\n.card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  width: 100%;\n  height: 286px;\n  object-fit: cover;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-top: 5px solid #fdacaa;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #fdacaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksNkJBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdaIiwiZmlsZSI6Iml0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICBtYXJnaW46IDE1cHggMTVweDtcclxuICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyODZweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZmRhY2FhO1xyXG4gICAgICAgIC5jYXJkLWRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmRhY2FhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "9vc0":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorService {
    constructor() {
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DRYZ":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var crypto_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-ts */ "1Zmq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() { }
    getItem(key) {
        if (!key || !localStorage.getItem(key)) {
            return '';
        }
        return crypto_ts__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(localStorage.getItem(key), 'iamsofi').toString(crypto_ts__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8);
    }
    setItem(key, value) {
        if (!key || !value) {
            return;
        }
        localStorage.setItem(key, crypto_ts__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(value, 'iamsofi').toString());
    }
    removeItem(key) {
        if (!key) {
            return;
        }
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/reducers/auth/auth.actions */ "MXcw");
/* harmony import */ var src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/reducers/auth/auth.selectors */ "zaDT");
/* harmony import */ var src_app_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/reducers/snackbar/snackbar.actions */ "oaQU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/ripple.directive */ "fiuP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");











function ProfileComponent_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0406\u043C'\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_3_span_4_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_div_3_span_5_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r0.login.invalid && (ctx_r0.login.touched || ctx_r0.login.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.login.errors == null ? null : ctx_r0.login.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.login.errors == null ? null : ctx_r0.login.errors.minlength);
} }
function ProfileComponent_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u041F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_4_span_4_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_div_4_span_5_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r1.password.invalid && (ctx_r1.password.touched || ctx_r1.password.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.minlength);
} }
function ProfileComponent_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_5_span_4_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_div_5_span_5_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r2.confirmPassword.invalid && (ctx_r2.confirmPassword.touched || ctx_r2.confirmPassword.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.confirmPassword.errors == null ? null : ctx_r2.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.confirmPassword.errors == null ? null : ctx_r2.confirmPassword.errors.minlength);
} }
function ProfileComponent_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043F\u043E\u0448\u0442\u043E\u0432\u0430 \u0430\u0434\u0440\u0435\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_6_span_4_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_div_6_span_5_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileComponent_div_6_span_6_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r3.mail.invalid && (ctx_r3.mail.touched || ctx_r3.mail.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.mail.errors == null ? null : ctx_r3.mail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.mail.errors == null ? null : ctx_r3.mail.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.mail.errors == null ? null : ctx_r3.mail.errors.email);
} }
class ProfileComponent {
    constructor(store$) {
        this.store$ = store$;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
    }
    get login() {
        return this.form.get('login');
    }
    get password() {
        return this.form.get('password');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    get mail() {
        return this.form.get('mail');
    }
    ngOnInit() {
        this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthFeature"]))
            .subscribe(state => {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](state._id, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](state.login, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](state.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](state.mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
        });
    }
    submit() {
        var _a, _b;
        if (!this.form.valid) {
            this.confirmPassword.markAsDirty();
            return;
        }
        if (((_a = this.password) === null || _a === void 0 ? void 0 : _a.value) !== ((_b = this.confirmPassword) === null || _b === void 0 ? void 0 : _b.value)) {
            this.store$.dispatch(Object(src_app_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_4__["showSnackbar"])({ msg: `Паролі не співпадають`, isError: true }));
        }
        else {
            this.store$.dispatch(Object(src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(this.form.value));
        }
    }
    exit() {
        this.store$.dispatch(Object(src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["exit"])());
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 12, vars: 5, consts: [[1, "mb-2"], [1, "authorization", 3, "formGroup", "ngSubmit", "keydown.enter"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", "appRipple", "", 1, "btn-navi", "ml-auto"], ["type", "button", "routerLinkActive", "btn-navi-active", "appRipple", "", 1, "btn-navi", "me-0", 3, "click"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "login", 1, "form-control", "w-50", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], ["type", "password", "formControlName", "password", 1, "form-control", "w-50", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", "w-50", 3, "ngClass"], ["type", "text", "formControlName", "mail", 1, "form-control", "w-50", 3, "ngClass"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); })("keydown.enter", function ProfileComponent_Template_form_keydown_enter_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_div_5_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0417\u041C\u0406\u041D\u0418\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_10_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u0412\u0418\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mail);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["RippleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Gbw0":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_reducers_items_items_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reducers/items/items.selectors */ "aHRd");
/* harmony import */ var src_app_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/reducers/items/items.actions */ "nBWq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item/item.component */ "7mdH");







function ItemsComponent_ng_container_1_app_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-item", 3);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r2);
} }
function ItemsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ItemsComponent_ng_container_1_app_item_1_Template, 1, 1, "app-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.list$));
} }
class ItemsComponent {
    constructor(store$) {
        this.store$ = store$;
        this.list$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_reducers_items_items_selectors__WEBPACK_IMPORTED_MODULE_1__["selectItems"]));
    }
    ngOnInit() {
        this.store$.dispatch(Object(src_app_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_2__["getItems"])());
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], decls: 3, vars: 3, consts: [[1, "d-flex", "flex-wrap", "items"], [4, "ngIf"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ItemsComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.list$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".items[_ngcontent-%COMP%] {\n  margin: 0 -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJpdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtcyB7XHJcbiAgICBtYXJnaW46IDAgLTE1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ "4z3Y");
/* harmony import */ var _items_items_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/items.reducer */ "IREE");
/* harmony import */ var _snackbar_snackbar_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snackbar/snackbar.reducer */ "SFDD");




const reducers = {
    [_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authNode"]]: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
    [_snackbar_snackbar_reducer__WEBPACK_IMPORTED_MODULE_3__["snackbarNode"]]: _snackbar_snackbar_reducer__WEBPACK_IMPORTED_MODULE_3__["snackbarReducer"],
    [_items_items_reducer__WEBPACK_IMPORTED_MODULE_2__["itemsNode"]]: _items_items_reducer__WEBPACK_IMPORTED_MODULE_2__["itemReducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "IREE":
/*!*************************************************!*\
  !*** ./src/app/reducers/items/items.reducer.ts ***!
  \*************************************************/
/*! exports provided: itemsNode, itemReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsNode", function() { return itemsNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemReducer", function() { return itemReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _items_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.actions */ "nBWq");


const itemsNode = 'items';
const initialState = {
    items: [],
};
const itemReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_items_actions__WEBPACK_IMPORTED_MODULE_1__["getItemsSuccess"], (state, { items }) => (Object.assign(Object.assign({}, state), { items }))));


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/auth/auth.selectors */ "zaDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthGuardService {
    constructor(store$) {
        this.store$ = store$;
    }
    canActivate() {
        return this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsAdmin"]));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MXcw":
/*!***********************************************!*\
  !*** ./src/app/reducers/auth/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: authPages, login, updateUserState, register, remind, updateUser, exit, openLoginPage, openRegisterPage, openRemindPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authPages", function() { return authPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserState", function() { return updateUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remind", function() { return remind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exit", function() { return exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLoginPage", function() { return openLoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRegisterPage", function() { return openRegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRemindPage", function() { return openRemindPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var authPages;
(function (authPages) {
    authPages["login"] = "login";
    authPages["remind"] = "remind";
    authPages["register"] = "register";
})(authPages || (authPages = {}));
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] log in', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] update user state', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] register', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const remind = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] remind', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] update user', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const exit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] exit');
const openLoginPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] open login page');
const openRegisterPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] open register page');
const openRemindPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] open remind page');


/***/ }),

/***/ "MXpY":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 2, vars: 0, template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " contacts works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "RlXv":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/auth/auth.actions */ "MXcw");
/* harmony import */ var _reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/items/items.actions */ "nBWq");
/* harmony import */ var _reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/snackbar/snackbar.actions */ "oaQU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/items.service */ "ZOSX");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/error.service */ "9vc0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/local-storage.service */ "DRYZ");













class AppEffects {
    constructor(actions$, userService, itemsService, errorService, router, localStorageService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.itemsService = itemsService;
        this.errorService = errorService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.isClosed = true;
        this.showSnackbar$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3990), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["hideSnackbar"])()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => this.userService.fetchUser(action)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => {
                var _a;
                if (res.message) {
                    return [Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message, isError: true })];
                }
                else {
                    this.router.navigate(['/']);
                    this.localStorageService.setItem('ad_23', JSON.stringify(res.user));
                    return [
                        Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: `Вітаємо ${(_a = res.user) === null || _a === void 0 ? void 0 : _a.login} на нашому сайті!` }),
                        Object(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["updateUserState"])(res.user),
                    ];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.remind$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["remind"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => this.isClosed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ mail }) => this.userService.remind(mail)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => {
                if (!res.success) {
                    return [Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message, isError: true })];
                }
                else {
                    return [
                        Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message }),
                        Object(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["openLoginPage"])(),
                    ];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["register"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => this.userService.register(action)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => {
                if (!res.success) {
                    return [Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message, isError: true })];
                }
                else {
                    return [
                        Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message }),
                        Object(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["openLoginPage"])(),
                    ];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.updateUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["updateUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => this.userService.update(action)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => {
                if (!res.success) {
                    return [Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message, isError: true })];
                }
                else {
                    console.log(JSON.stringify(res.user));
                    this.localStorageService.setItem('ad_23', JSON.stringify(res.user));
                    this.router.navigate(['/']);
                    return [
                        Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message }),
                        Object(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["updateUserState"])(res.user),
                    ];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.exit$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["exit"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
                this.router.navigate(['/']);
                this.localStorageService.clear();
                return Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: `Ви успішно розлогувались!` });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.upload$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_4__["upload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ formData }) => this.itemsService.upload(formData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                if (!res.success) {
                    return Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message, isError: true });
                }
                else {
                    this.router.navigate(['/']);
                    return Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message });
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
        this.getItems$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_4__["getItems"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.itemsService.getItems()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                if (!res.success) {
                    return Object(_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_5__["showSnackbar"])({ msg: res.message, isError: true });
                }
                else {
                    return Object(_reducers_items_items_actions__WEBPACK_IMPORTED_MODULE_4__["getItemsSuccess"])({ items: res.items });
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.errorService.handleError(err))));
        });
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_items_service__WEBPACK_IMPORTED_MODULE_8__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"])); };
AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });


/***/ }),

/***/ "SFDD":
/*!*******************************************************!*\
  !*** ./src/app/reducers/snackbar/snackbar.reducer.ts ***!
  \*******************************************************/
/*! exports provided: snackbarNode, snackbarReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snackbarNode", function() { return snackbarNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snackbarReducer", function() { return snackbarReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _snackbar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.actions */ "oaQU");


const snackbarNode = 'snackbar';
const initialState = {
    msg: '',
    isError: false,
};
const snackbarReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_snackbar_actions__WEBPACK_IMPORTED_MODULE_1__["showSnackbar"], (state, { msg, isError }) => (Object.assign(Object.assign({}, state), { msg, isError: !!isError }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_snackbar_actions__WEBPACK_IMPORTED_MODULE_1__["hideSnackbar"], state => (Object.assign(Object.assign({}, state), { msg: '', isError: false }))));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_snackbar_snackbar_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/snackbar/snackbar.selectors */ "6nFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0, a1) { return { "msg-error": a0, "show": a1 }; };
class AppComponent {
    constructor(store$) {
        this.store$ = store$;
        this.msg$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_reducers_snackbar_snackbar_selectors__WEBPACK_IMPORTED_MODULE_1__["selectSnackbarMsg"]));
        this.isError$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_reducers_snackbar_snackbar_selectors__WEBPACK_IMPORTED_MODULE_1__["selectSnackbarIsError"]));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 11, consts: [[1, "container"], ["src", "../../../assets/logo.webp", "alt", "", 1, "logo"], [1, "snackbar", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx.isError$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, ctx.msg$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx.msg$));
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 533px;\n}\n\n.snackbar[_ngcontent-%COMP%] {\n  visibility: hidden;\n  margin-left: -125px;\n  background-color: #36a345;\n  color: #fff;\n  text-align: center;\n  border-radius: 20px;\n  padding: 8px 20px;\n  position: fixed;\n  z-index: 1;\n  right: 20px;\n  top: 30px;\n}\n\n.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  animation: fadein 0.5s, fadeout 0.5s 3.5s;\n}\n\n.msg-error[_ngcontent-%COMP%] {\n  background-color: #fc4b4b;\n}\n\n@keyframes fadein {\n  from {\n    top: 0;\n    opacity: 0;\n  }\n  to {\n    top: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    top: 30px;\n    opacity: 1;\n  }\n  to {\n    top: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUVBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQU9BO0VBQ0k7SUFBTSxNQUFBO0lBQVEsVUFBQTtFQVFoQjtFQVBFO0lBQUksU0FBQTtJQUFXLFVBQUE7RUFXakI7QUFDRjs7QUFKQTtFQUNJO0lBQU0sU0FBQTtJQUFXLFVBQUE7RUFrQm5CO0VBakJFO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFxQmQ7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUzM3B4O1xyXG59XHJcblxyXG4uc25hY2tiYXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNmEzNDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMzBweDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDMuNXM7XHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMy41cztcclxuICB9XHJcblxyXG4ubXNnLWVycm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzRiNGI7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7dG9wOiAwOyBvcGFjaXR5OiAwO31cclxuICAgIHRvIHt0b3A6IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcbiAgXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge3RvcDogMDsgb3BhY2l0eTogMDt9XHJcbiAgICB0byB7dG9wOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG4gIFxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHt0b3A6IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG4gICAgdG8ge3RvcDogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge3RvcDogMzBweDsgb3BhY2l0eTogMTt9XHJcbiAgICB0byB7dG9wOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"] });


/***/ }),

/***/ "YK+t":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrderComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 2, vars: 0, template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " order works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "MXpY");
/* harmony import */ var _components_items_item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/items/item/item.component */ "7mdH");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/items/items.component */ "Gbw0");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/order/order.component */ "YK+t");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reducers */ "IGZg");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auth/auth.component */ "qrmE");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.effects */ "RlXv");
/* harmony import */ var _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/ripple.directive */ "fiuP");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add/add.component */ "/Q+7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_15__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_15__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_18__["AppEffects"]]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_directives_ripple_directive__WEBPACK_IMPORTED_MODULE_19__["RippleDirective"],
        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
        _components_items_items_component__WEBPACK_IMPORTED_MODULE_12__["ItemsComponent"],
        _components_items_item_item_component__WEBPACK_IMPORTED_MODULE_11__["ItemComponent"],
        _components_order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_17__["AuthComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
        _components_add_add_component__WEBPACK_IMPORTED_MODULE_21__["AddComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();


/***/ }),

/***/ "ZOSX":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ItemsService {
    // baseUrl = 'http://localhost:8080';
    constructor(http) {
        this.http = http;
    }
    upload(item) {
        // return this.http.post<ItemResponse>(`${this.baseUrl}/upload`, item);
        return this.http.post(`/upload`, item);
    }
    getItems() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ success: true, items: _shared_constants__WEBPACK_IMPORTED_MODULE_1__["items"] });
        // return this.http.post<ItemResponse>(`${this.baseUrl}/get-list`, {});
        return this.http.post(`/get-list`, {});
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "aHRd":
/*!***************************************************!*\
  !*** ./src/app/reducers/items/items.selectors.ts ***!
  \***************************************************/
/*! exports provided: selectItemsFeature, selectItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemsFeature", function() { return selectItemsFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItems", function() { return selectItems; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _items_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.reducer */ "IREE");


const selectItemsFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_items_reducer__WEBPACK_IMPORTED_MODULE_1__["itemsNode"]);
const selectItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectItemsFeature, (state) => state.items);


/***/ }),

/***/ "fiuP":
/*!************************************************!*\
  !*** ./src/app/directives/ripple.directive.ts ***!
  \************************************************/
/*! exports provided: RippleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleDirective", function() { return RippleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RippleDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onClick(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        const ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.renderer.appendChild(this.el.nativeElement, ripples);
        setTimeout(() => {
            ripples.remove();
        }, 1000);
    }
}
RippleDirective.ɵfac = function RippleDirective_Factory(t) { return new (t || RippleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
RippleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RippleDirective, selectors: [["", "appRipple", ""]], hostBindings: function RippleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RippleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reducers/auth/auth.actions */ "MXcw");
/* harmony import */ var src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/reducers/auth/auth.selectors */ "zaDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ "DRYZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/ripple.directive */ "fiuP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function () { return ["add"]; };
function NavigationComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0414\u041E\u0414\u0410\u0422\u0418");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [""]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["order"]; };
const _c4 = function (a0) { return { "me-auto": a0 }; };
const _c5 = function () { return ["contacts"]; };
const _c6 = function () { return ["/profile"]; };
const _c7 = function () { return ["auth"]; };
class NavigationComponent {
    constructor(store$, localStorageService) {
        this.store$ = store$;
        this.localStorageService = localStorageService;
        this.isAdmin$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsAdmin"]));
        this.login$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["selectLogin"]));
    }
    ngOnInit() {
        const user = this.localStorageService.getItem('ad_23');
        if (user) {
            this.store$.dispatch(Object(src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["updateUserState"])(JSON.parse(user)));
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 18, vars: 24, consts: [[1, "d-flex", "flex-wrap", "mb-4", "navigation"], ["type", "button", "routerLinkActive", "btn-navi-active", "appRipple", "", 1, "btn-navi", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", "routerLinkActive", "btn-navi-active", "appRipple", "", 1, "btn-navi", 3, "routerLink"], ["type", "button", "routerLinkActive", "btn-navi-active", "appRipple", "", 1, "btn-navi", "me-auto", 3, "ngClass", "routerLink"], ["type", "button", "class", "btn-navi me-auto", "routerLinkActive", "btn-navi-active", "appRipple", "", 3, "routerLink", 4, "ngIf"], [1, "d-flex", "input-group", "w-auto", "position-static"], ["type", "search", "placeholder", "\u0428\u0443\u043A\u0430\u0454\u043C\u043E...", "aria-label", "\u041F\u043E\u0448\u0443\u043A", 1, "form-control", "input-navi-search"], ["appRipple", "", 1, "btn-navi"], ["type", "button", "routerLinkActive", "btn-navi-active", "appRipple", "", 1, "btn-navi", "text-uppercase", "me-0", 3, "routerLink"], ["type", "button", "routerLinkActive", "btn-navi-active", "appRipple", "", 1, "btn-navi", "me-auto", 3, "routerLink"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0410\u041A\u0421\u0415\u0421\u0423\u0410\u0420\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0417\u0410\u041C\u041E\u0412\u0418\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NavigationComponent_button_8_Template, 2, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u041F\u041E\u0428\u0423\u041A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c4, !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 8, ctx.isAdmin$)))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, ctx.isAdmin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 12, ctx.login$) ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 14, ctx.login$) || "\u0412\u0425\u0406\u0414");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_6__["RippleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".btn-navi-active[_ngcontent-%COMP%] {\n  background-color: #d77d7b;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n}\n\n.input-navi-search[_ngcontent-%COMP%] {\n  height: 36px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0RUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1uYXZpLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDc3ZDdiO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNHB4IDIwcHggMCByZ2IoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG4uaW5wdXQtbmF2aS1zZWFyY2ggIHtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ "nBWq":
/*!*************************************************!*\
  !*** ./src/app/reducers/items/items.actions.ts ***!
  \*************************************************/
/*! exports provided: upload, getItems, getItemsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsSuccess", function() { return getItemsSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const upload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ITEMS] upload item', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ITEMS] get items');
const getItemsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ITEMS] get items success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "oaQU":
/*!*******************************************************!*\
  !*** ./src/app/reducers/snackbar/snackbar.actions.ts ***!
  \*******************************************************/
/*! exports provided: showSnackbar, hideSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSnackbar", function() { return showSnackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideSnackbar", function() { return hideSnackbar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const showSnackbar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SNACKBAR] show', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const hideSnackbar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SNACKBAR] hide');


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    // baseUrl = 'http://localhost:8080';
    constructor(http) {
        this.http = http;
    }
    fetchUser({ login, password }) {
        // return this.http.post<UserResponse>(`${this.baseUrl}/user`, { login, password });
        return this.http.post(`/user`, { login, password });
    }
    register({ login, password, confirmPassword, mail }) {
        // return this.http.post<UserResponse>(`${this.baseUrl}/register`, { login, password, mail });
        return this.http.post(`/register`, { login, password, confirmPassword, mail });
    }
    remind(mail) {
        // return this.http.post<UserResponse>(`${this.baseUrl}/remind`, { mail });
        return this.http.post(`/remind`, { mail });
    }
    update({ _id, login, password, mail }) {
        // return this.http.post<UserResponse>(`${this.baseUrl}/update-user`, { _id, login, password, mail });
        return this.http.post(`/remind`, { _id, login, password, mail });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qrmE":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/reducers/auth/auth.actions */ "MXcw");
/* harmony import */ var src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/reducers/auth/auth.selectors */ "zaDT");
/* harmony import */ var src_app_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/reducers/snackbar/snackbar.actions */ "oaQU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/ripple.directive */ "fiuP");










function AuthComponent_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AuthComponent_div_3_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuthComponent_div_3_span_5_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r0.login.invalid && (ctx_r0.login.touched || ctx_r0.login.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.login.errors == null ? null : ctx_r0.login.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.login.errors == null ? null : ctx_r0.login.errors.minlength);
} }
function AuthComponent_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AuthComponent_div_4_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuthComponent_div_4_span_5_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r1.password.invalid && (ctx_r1.password.touched || ctx_r1.password.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.minlength);
} }
function AuthComponent_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AuthComponent_div_5_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuthComponent_div_5_span_5_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r2.confirmPassword.invalid && (ctx_r2.confirmPassword.touched || ctx_r2.confirmPassword.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.confirmPassword.errors == null ? null : ctx_r2.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.confirmPassword.errors == null ? null : ctx_r2.confirmPassword.errors.minlength);
} }
function AuthComponent_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043F\u043E\u0448\u0442\u043E\u0432\u0430 \u0430\u0434\u0440\u0435\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0412\u0430\u0448 e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AuthComponent_div_6_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuthComponent_div_6_span_5_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AuthComponent_div_6_span_6_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r3.mail.invalid && (ctx_r3.mail.touched || ctx_r3.mail.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.mail.errors == null ? null : ctx_r3.mail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.mail.errors == null ? null : ctx_r3.mail.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.mail.errors == null ? null : ctx_r3.mail.errors.email);
} }
function AuthComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthComponent_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.open(ctx_r18.loginTabs.login); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.loginTabs.login.button);
} }
function AuthComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthComponent_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.open(ctx_r20.loginTabs.register); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.loginTabs.register.button);
} }
function AuthComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthComponent_span_13_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.open(ctx_r22.loginTabs.remind); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.loginTabs.remind.button);
} }
class AuthComponent {
    constructor(store$) {
        this.store$ = store$;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.loginTabs = {
            login: {
                id: 1,
                name: 'Введіть дані для авторизації',
                button: 'Авторизуватись'
            },
            register: {
                id: 2,
                name: 'Реєстрація нового користувача',
                button: 'Зареєструватись'
            },
            remind: {
                id: 3,
                name: 'Забули пароль',
                button: 'Нагадати пароль'
            }
        };
        this.currentTab = {
            tab: this.loginTabs.login
        };
    }
    get login() {
        return this.form.get('login');
    }
    get password() {
        return this.form.get('password');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    get mail() {
        return this.form.get('mail');
    }
    ngOnInit() {
        this.open(this.loginTabs.login);
        this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCurrentPage"]))
            .subscribe((page) => this.open(this.loginTabs[page]));
    }
    isActive(tab) {
        if (!tab) {
            return false;
        }
        return this.currentTab.tab === tab;
    }
    open(tab) {
        if (!tab) {
            return;
        }
        this.currentTab.tab = tab;
        this.form.reset();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        if (this.isActive(this.loginTabs.login)) {
            this.form.removeControl('confirmPassword');
            this.form.removeControl('mail');
        }
        if (this.isActive(this.loginTabs.remind)) {
            this.form.removeControl('login');
            this.form.removeControl('password');
            this.form.removeControl('confirmPassword');
        }
    }
    submit() {
        if (!this.form.valid) {
            return;
        }
        switch (this.currentTab.tab) {
            case this.loginTabs.login:
                return this.signIn();
            case this.loginTabs.register:
                return this.register();
            case this.loginTabs.remind:
                return this.remind();
        }
    }
    signIn() {
        this.store$.dispatch(Object(src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["login"])(this.form.value));
    }
    register() {
        var _a, _b;
        if (((_a = this.password) === null || _a === void 0 ? void 0 : _a.value) !== ((_b = this.confirmPassword) === null || _b === void 0 ? void 0 : _b.value)) {
            this.store$.dispatch(Object(src_app_reducers_snackbar_snackbar_actions__WEBPACK_IMPORTED_MODULE_4__["showSnackbar"])({ msg: `Паролі не співпадають`, isError: true }));
        }
        else {
            this.store$.dispatch(Object(src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["register"])(this.form.value));
        }
    }
    remind() {
        this.store$.dispatch(Object(src_app_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["remind"])(this.form.value));
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 17, vars: 12, consts: [[1, "mb-2"], [1, "authorization", 3, "formGroup", "ngSubmit", "keydown.enter"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "user-select-none"], ["class", "auth-link", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "submit", "appRipple", "", 1, "btn-navi", "me-0", "text-uppercase"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "login", 1, "form-control", "w-50", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], ["type", "password", "formControlName", "password", 1, "form-control", "w-50", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", "w-50", 3, "ngClass"], ["type", "text", "formControlName", "mail", 1, "form-control", "w-50", 3, "ngClass"], [1, "auth-link", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); })("keydown.enter", function AuthComponent_Template_form_keydown_enter_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AuthComponent_div_3_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AuthComponent_div_4_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuthComponent_div_5_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AuthComponent_div_6_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AuthComponent_span_9_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AuthComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AuthComponent_span_11_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AuthComponent_span_12_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AuthComponent_span_13_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentTab.tab.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isActive(ctx.loginTabs.login));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isActive(ctx.loginTabs.login));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isActive(ctx.loginTabs.register));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isActive(ctx.loginTabs.register) && !ctx.isActive(ctx.loginTabs.remind));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isActive(ctx.loginTabs.remind));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentTab.tab.button);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _directives_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["RippleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".auth-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtBQUVSIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "s0Cq":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
const items = [
    {
        _id: '1',
        name: 'Обруч',
        image: '1.webp',
        price: '100.00 грн.',
        createdDate: '23/04/2021',
    },
    {
        _id: '2',
        name: 'Заколки',
        image: '2.webp',
        price: '120.00 грн.',
        createdDate: '26/04/2021',
    },
    {
        _id: '3',
        name: 'Дитячі аксесуари',
        image: '3.webp',
        price: '150.00 грн.',
        createdDate: '29/04/2021',
    },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add/add.component */ "/Q+7");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/auth.component */ "qrmE");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "MXpY");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/items/items.component */ "Gbw0");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/order/order.component */ "YK+t");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', component: _components_items_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"] },
    { path: 'order', component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"] },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] },
    { path: 'auth', component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'add', component: _components_add_add_component__WEBPACK_IMPORTED_MODULE_1__["AddComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: '**', redirectTo: '/' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zaDT":
/*!*************************************************!*\
  !*** ./src/app/reducers/auth/auth.selectors.ts ***!
  \*************************************************/
/*! exports provided: selectAuthFeature, selectLogin, selectPassword, selectIsAdmin, selectCurrentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthFeature", function() { return selectAuthFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLogin", function() { return selectLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPassword", function() { return selectPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAdmin", function() { return selectIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPage", function() { return selectCurrentPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "4z3Y");


const selectAuthFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authNode"]);
const selectLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.login);
const selectPassword = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.password);
const selectIsAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.isAdmin);
const selectCurrentPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.currentPage);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map