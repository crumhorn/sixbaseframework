"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_utilities_utilities_module_ts"],{

/***/ 50118:
/*!*******************************************************************!*\
  !*** ./src/app/usecases/utilities/model/UtilitiesUsecaseModel.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesUsecaseModel: () => (/* binding */ UtilitiesUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class UtilitiesUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
  constructor(errorHelper) {
    super();
    this.errorHelper = errorHelper;
  }
  destroy() {}
  handleInitializionError(err) {
    this.errorHelper.displayError(err);
  }
  hookObservables() {}
  static {
    this.ɵfac = function UtilitiesUsecaseModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UtilitiesUsecaseModel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHelper));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UtilitiesUsecaseModel,
      factory: UtilitiesUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 9128:
/*!********************************************************!*\
  !*** ./src/app/usecases/utilities/utilities.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesModule: () => (/* binding */ UtilitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _utilities_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.routing */ 97460);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);
/* harmony import */ var _model_UtilitiesUsecaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/UtilitiesUsecaseModel */ 50118);
/* harmony import */ var _views_DateUtilsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/DateUtilsView */ 49653);
/* harmony import */ var _views_ArrayUtilsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ArrayUtilsView */ 534);
/* harmony import */ var _views_JsUtilsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/JsUtilsView */ 93504);
/* harmony import */ var _views_NumberUtilsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/NumberUtilsView */ 49970);
/* harmony import */ var _views_PathUtilsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/PathUtilsView */ 87344);
/* harmony import */ var _views_StringUtilsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/StringUtilsView */ 90746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);














class UtilitiesModule {
  static {
    this.ɵfac = function UtilitiesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UtilitiesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: UtilitiesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_model_UtilitiesUsecaseModel__WEBPACK_IMPORTED_MODULE_2__.UtilitiesUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _utilities_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__.SharedModule.forRoot(), _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UtilitiesModule, {
    declarations: [
    // views
    _views_DateUtilsView__WEBPACK_IMPORTED_MODULE_3__.DateUtilsView, _views_ArrayUtilsView__WEBPACK_IMPORTED_MODULE_4__.ArrayUtilsView, _views_JsUtilsView__WEBPACK_IMPORTED_MODULE_5__.JsUtilsView, _views_NumberUtilsView__WEBPACK_IMPORTED_MODULE_6__.NumberUtilsView, _views_PathUtilsView__WEBPACK_IMPORTED_MODULE_7__.PathUtilsView, _views_StringUtilsView__WEBPACK_IMPORTED_MODULE_8__.StringUtilsView],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule]
  });
})();

/***/ }),

/***/ 97460:
/*!*********************************************************!*\
  !*** ./src/app/usecases/utilities/utilities.routing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_DateUtilsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/DateUtilsView */ 49653);
/* harmony import */ var _views_ArrayUtilsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ArrayUtilsView */ 534);
/* harmony import */ var _views_JsUtilsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/JsUtilsView */ 93504);
/* harmony import */ var _views_NumberUtilsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/NumberUtilsView */ 49970);
/* harmony import */ var _views_PathUtilsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/PathUtilsView */ 87344);
/* harmony import */ var _views_StringUtilsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/StringUtilsView */ 90746);







const routes = [{
  path: 'dateUtils',
  component: _views_DateUtilsView__WEBPACK_IMPORTED_MODULE_0__.DateUtilsView
}, {
  path: 'arrayUtils',
  component: _views_ArrayUtilsView__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilsView
}, {
  path: 'jsUtils',
  component: _views_JsUtilsView__WEBPACK_IMPORTED_MODULE_2__.JsUtilsView
}, {
  path: 'numberUtils',
  component: _views_NumberUtilsView__WEBPACK_IMPORTED_MODULE_3__.NumberUtilsView
}, {
  path: 'pathUtils',
  component: _views_PathUtilsView__WEBPACK_IMPORTED_MODULE_4__.PathUtilsView
}, {
  path: 'stringUtils',
  component: _views_StringUtilsView__WEBPACK_IMPORTED_MODULE_5__.StringUtilsView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes);

/***/ }),

/***/ 534:
/*!************************************************************!*\
  !*** ./src/app/usecases/utilities/views/ArrayUtilsView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayUtilsView: () => (/* binding */ ArrayUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function ArrayUtilsView_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 8)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td")(14, "td")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class ArrayUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.depCode = ``;
    this.usageCode = ``;
    this.tableData = [{
      name: "removeDuplicates",
      example: "let newArray:string[] = ArrayUtils.removeDuplicates(['one', 'one', 'two']);\nor\nremoveDuplicates([{'key': one'}, {'key': 'one'}, {'key':'two'}], 'key');",
      description: "Removes duplicate entries from an array"
    }, {
      name: "areAllSameLength",
      example: "let allAreSame:boolean = ArrayUtils.areAllSameLength(arrayOne, arrayTwo, arrayThree);",
      description: "Checks whether all arrays are of the same length"
    }, {
      name: "arraysMatch",
      example: "let allMatch:boolean = ArrayUtils.arraysMatch(['one', 'two'], ['two', 'one']);",
      description: "Checks whether to arrays match regardless of the order of the elements"
    }, {
      name: "findDuplicates",
      example: "let dupes:string[] = ArrayUtils.findDuplicates(['one', 'one', 'two']);",
      description: "Returns all duplicates that are in an array"
    }];
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function ArrayUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ArrayUtilsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArrayUtilsView,
      selectors: [["ArrayUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["language", "ts", 3, "highlight"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function ArrayUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ArrayUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This utility class is to help with javascript Array functions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3)(9, "thead")(10, "tr")(11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th")(18, "th")(19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ArrayUtilsView_tr_21_Template, 16, 3, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 49653:
/*!***********************************************************!*\
  !*** ./src/app/usecases/utilities/views/DateUtilsView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateUtilsView: () => (/* binding */ DateUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class DateUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.depCode = `"dependencies": {
  "luxon": "3.5.0", // check latest version yourself
  ...;
},
"devDependencies": {
  "@types/luxon": "3.4.2",
...
`;
    this.usageCode = `
// convert a date string to a date object, pretty standard, even regular Date object can do this one
let dateStr:string = "2021-12-31 23:59:59";
let dateObj:Date =  DateUtils.dateStringToDate(dateStr, DateUtils.YYYY_MM_DD_HH_MM_SS);

// a less typical date string, that would be much harder with the general date class
let dateStrNotTypical:string = "2021 23:59:59";
let dateObjNotTypical:Date =  DateUtils.dateStringToDate(dateStr, DateUtils.YYYY + " " + DateUtils.HH_MM_SS);

// convert an ISO date, also pretty common
let dateStrIso:string = "2021-12-31T23:59:59.000Z";
let dateObjIso:Date =  DateUtils.stringToISO(dateStr);

// create a date in the past
let datePast = new Date();
datePast.setYear(2022);

// create a date in the future
let dateFuture = new Date();
dateFuture.setYear(2025)

// get all the dates between these two dates
let datesBetween:Date[] = DateUtils.getDatesBetween(datePast, dateFuture);
// check if a date is between two other dates
let isBetween:boolean = DateUtils.isBetween(datePast, dateFuture, new Date());
// get how many minutes are between the two dates
let minsBetween:number = DateUtils.getMinutesBetween(datePast, dateFuture);

// ... and many others
`;
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function DateUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DateUtilsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DateUtilsView,
      selectors: [["DateUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 2,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/utils/src/utils/DateUtils.ts", "target", "_new"]],
      template: function DateUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DateUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This utility class is to help with date conversions and date formatting. It is based on ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Luxon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ", which is a requirement.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Examples");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "For all available API, please check the content assist in your favorite IDE, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "raw code located here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.depCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.usageCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 93504:
/*!*********************************************************!*\
  !*** ./src/app/usecases/utilities/views/JsUtilsView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsUtilsView: () => (/* binding */ JsUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function JsUtilsView_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 8)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td")(14, "td")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class JsUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.depCode = ``;
    this.tableData = [{
      name: "shallowClone",
      example: "let shallowClone = JsUtils.shallowClone(obj);",
      description: "Shallow clones an object"
    }, {
      name: "isFunction",
      example: "let isFunc:boolean = JsUtils.isFunction(target);",
      description: "Checks whether the target object is a Javascript function"
    }];
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function JsUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JsUtilsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JsUtilsView,
      selectors: [["JsUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["language", "ts", 3, "highlight"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function JsUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "JsUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This utility class has a few functions to help with JavaScript related things.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3)(9, "thead")(10, "tr")(11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th")(18, "th")(19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, JsUtilsView_tr_21_Template, 16, 3, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 49970:
/*!*************************************************************!*\
  !*** ./src/app/usecases/utilities/views/NumberUtilsView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberUtilsView: () => (/* binding */ NumberUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function NumberUtilsView_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 8)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td")(14, "td")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class NumberUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.depCode = ``;
    this.tableData = [{
      name: "lpad",
      example: "let lPadded = NumberUtils.lpad(value, 5);",
      description: "Left pads a value with zeroes"
    }, {
      name: "range",
      example: "let range:number[] = NumberUtils.isFunction(target);",
      description: "Creates a range of numbers"
    }, {
      name: "rangeLikeCSharp",
      example: "let range:number[] = NumberUtils.rangeLikeCSharp(0, 100);",
      description: "Creates a range of numbers just like C# does"
    }];
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function NumberUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NumberUtilsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NumberUtilsView,
      selectors: [["NumberUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["language", "ts", 3, "highlight"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function NumberUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NumberUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This utility class has a few functions to help with number related things.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3)(9, "thead")(10, "tr")(11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th")(18, "th")(19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NumberUtilsView_tr_21_Template, 16, 3, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 87344:
/*!***********************************************************!*\
  !*** ./src/app/usecases/utilities/views/PathUtilsView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathUtilsView: () => (/* binding */ PathUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function PathUtilsView_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 8)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td")(14, "td")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class PathUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.depCode = ``;
    this.tableData = [{
      name: "deepFind",
      example: "let valueThatMatchesPath = PathUtils.deepFind(target, 'this.is.the.nested.path);",
      description: "Fetches a nested value from an object graph, where each dot represents a sub object"
    }];
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function PathUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PathUtilsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PathUtilsView,
      selectors: [["PathUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["language", "ts", 3, "highlight"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function PathUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PathUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This utility class has a helper method to help extract data from an object graph.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3)(9, "thead")(10, "tr")(11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th")(18, "th")(19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PathUtilsView_tr_21_Template, 16, 3, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 90746:
/*!*************************************************************!*\
  !*** ./src/app/usecases/utilities/views/StringUtilsView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringUtilsView: () => (/* binding */ StringUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function StringUtilsView_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 8)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td")(14, "td")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class StringUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.depCode = ``;
    this.tableData = [{
      name: "stringFormat",
      example: "let str = 'Oh hi {0} {1}';\n// Oh hi Peter Johnsson\nlet formatted = StringUtils.stringFormat(str, 'Peter', 'Johnsson');",
      description: "Mimics the C string formatter where a bracket with a digit in it represents what to replace from the given array in the same order"
    }, {
      name: "unCamelCase",
      example: "let str = 'ThisIsCamelCase';\nlet nonCamel = StringUtils.unCamelCase(str); // This Is Camel Case",
      description: "Takes a camel cased string and splits it into multiple words"
    }, {
      name: "getJsonDiff",
      example: "let diff = StringUtils.getJsonDiff(obj1, obj2);",
      description: "Returns the difference between two JSON objects as a new object"
    }, {
      name: "syntaxHighlight",
      example: "let prettyJson = StringUtils.syntaxHighlight(json);",
      description: "Returns a syntax highlighted JSON string (for showing JSON in a pretty way on a screen to a user)"
    }];
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function StringUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StringUtilsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StringUtilsView,
      selectors: [["StringUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["language", "ts", 3, "highlight"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function StringUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "StringUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This utility class has helper methods for dealing with strings.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3)(9, "thead")(10, "tr")(11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th")(18, "th")(19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StringUtilsView_tr_21_Template, 16, 3, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_usecases_utilities_utilities_module_ts.163867bfc173649c.js.map