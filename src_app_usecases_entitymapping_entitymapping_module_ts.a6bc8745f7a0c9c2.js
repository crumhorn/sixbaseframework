"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_entitymapping_entitymapping_module_ts"],{

/***/ 6028:
/*!****************************************************************!*\
  !*** ./src/app/usecases/entitymapping/entitymapping.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityMappingModule: () => (/* binding */ EntityMappingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _entitymapping_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entitymapping.routing */ 11736);
/* harmony import */ var _model_EntityMappingUsecaseModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/EntityMappingUsecaseModel */ 22446);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);
/* harmony import */ var _views_EntityMappingView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/EntityMappingView */ 33836);
/* harmony import */ var _views_AnnotationsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/AnnotationsView */ 22301);
/* harmony import */ var _views_CustomAnnotationsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/CustomAnnotationsView */ 88100);
/* harmony import */ var _views_ReverseMappingView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ReverseMappingView */ 55513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);











class EntityMappingModule {
  static {
    this.ɵfac = function EntityMappingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntityMappingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: EntityMappingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      providers: [_model_EntityMappingUsecaseModel__WEBPACK_IMPORTED_MODULE_1__.EntityMappingUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _entitymapping_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EntityMappingModule, {
    declarations: [
    // views
    _views_EntityMappingView__WEBPACK_IMPORTED_MODULE_3__.EntityMappingView, _views_AnnotationsView__WEBPACK_IMPORTED_MODULE_4__.AnnotationsView, _views_CustomAnnotationsView__WEBPACK_IMPORTED_MODULE_5__.CustomAnnotationsView, _views_ReverseMappingView__WEBPACK_IMPORTED_MODULE_6__.ReverseMappingView],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridModule]
  });
})();

/***/ }),

/***/ 11736:
/*!*****************************************************************!*\
  !*** ./src/app/usecases/entitymapping/entitymapping.routing.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_EntityMappingView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/EntityMappingView */ 33836);
/* harmony import */ var _views_AnnotationsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/AnnotationsView */ 22301);
/* harmony import */ var _views_CustomAnnotationsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/CustomAnnotationsView */ 88100);
/* harmony import */ var _views_ReverseMappingView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/ReverseMappingView */ 55513);





const routes = [{
  path: '',
  component: _views_EntityMappingView__WEBPACK_IMPORTED_MODULE_0__.EntityMappingView
}, {
  path: 'annotations',
  component: _views_AnnotationsView__WEBPACK_IMPORTED_MODULE_1__.AnnotationsView
}, {
  path: 'customAnnotations',
  component: _views_CustomAnnotationsView__WEBPACK_IMPORTED_MODULE_2__.CustomAnnotationsView
}, {
  path: 'reverseMapping',
  component: _views_ReverseMappingView__WEBPACK_IMPORTED_MODULE_3__.ReverseMappingView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes);

/***/ }),

/***/ 22446:
/*!***************************************************************************!*\
  !*** ./src/app/usecases/entitymapping/model/EntityMappingUsecaseModel.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityMappingUsecaseModel: () => (/* binding */ EntityMappingUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class EntityMappingUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
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
    this.ɵfac = function EntityMappingUsecaseModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntityMappingUsecaseModel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHelper));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EntityMappingUsecaseModel,
      factory: EntityMappingUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 22301:
/*!*****************************************************************!*\
  !*** ./src/app/usecases/entitymapping/views/AnnotationsView.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationsView: () => (/* binding */ AnnotationsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function AnnotationsView_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td")(10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td")(13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td")(16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "span", 13)(20, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.usage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.attributes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.other);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.example);
  }
}
class AnnotationsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.exampleCode = `import {UnixDate} from "@six-group/base-angular-framework/core/DecoratorsModule";

export class CalendarDay extends BaseEntity<CalendarDay> {

  @UnixDate()
  date: Date = null;

  getClassName(): string {
    return "CalendarDay";
  }
}`;
    this.tableData = [{
      name: "ISODate",
      usage: "@ISODate() property: Date",
      attributes: "None",
      description: "Converts an ISO Date into a Date object",
      other: "",
      example: "@ISODate() isoDate: Date = undefined;"
    }, {
      name: "UnixDate",
      usage: "@UnixDate() property:Date",
      attributes: "None",
      description: "Converts a UNIX \"number\" into a Date object",
      other: "",
      example: "@UnixDate() uxDate: Date = undefined;"
    }, {
      name: "GeneratedId",
      usage: "@GeneratedId() property: String",
      attributes: "None",
      description: "Creates a unique generated ID for every creation of a class using this annotation",
      other: "The id uses numbers that ever increase starting at 0",
      example: "@GeneratedId() _id: String = undefined;"
    }, {
      name: "FormattedDate",
      usage: "@FormattedDate(dateFormat)",
      attributes: "Date Format",
      description: "Takes a string date representing the target format and converts it to a Date",
      other: "",
      example: "@FormattedDate('YYYY-MM-DD') ymdDate: Date = undefined;"
    }, {
      name: "ListDecorator",
      usage: "@List(\"TargetClass\") property:T[]",
      attributes: "Target Class",
      description: "Assumes the property is a list of classes of the type given in the argument (matches getClassName() on BaseEntity)",
      other: "",
      example: "@List(\"MyClass\") myClasses: MyClass[] = undefined;"
    }, {
      name: "ObjectMapping",
      usage: "@ObjectMapping(\"TargetClass\") property:Clazz",
      attributes: "Target Class",
      description: "Assumes the property is a single object of the type given in the argument (matches getClassName() on BaseEntity)",
      other: "",
      example: "@ObjectMapping(\"OtherClass\") otherObj: OtherClass = undefined;"
    }, {
      name: "StandardList",
      usage: "@StandardList() property:baseType[]\t",
      attributes: "None",
      description: "Assumes the property is a list of a standard type, such as string, integer, etc",
      other: "",
      example: "@StandardList() listOfStrings: String[] = undefined;"
    }, {
      name: "ConvertToInt",
      usage: "@ConvertToInt() property:number\t",
      attributes: "None",
      description: "Converts the target to an integer (JS number)",
      other: "",
      example: "@ConvertToInt() intValueOfStr: value = undefined;"
    }, {
      name: "ConvertToFloat",
      usage: "@ConvertToFloat() property:number",
      attributes: "None",
      description: "Converts the target to a float (JS number with decimals)",
      other: "",
      example: "@ConvertToFloat() floatValueOfStr: value = undefined;"
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
    this.ɵfac = function AnnotationsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnnotationsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnnotationsView,
      selectors: [["AnnotationsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 33,
      vars: 2,
      consts: [["xmlns", "http://www.w3.org/1999/html", 1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["id", "api.menu.props.attributes", 1, "doc-option-light", "doc-option-default"], ["id", "api.menu.props.description", 1, "doc-option-description"], ["id", "api.menu.props.other", 1, "doc-option-description"], ["id", "api.menu.props.example", 1, "doc-option-description"]],
      template: function AnnotationsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Annotations and Decorators");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Annotations on properties in your entities defines how the raw json properties are converted into real objects. For the most general usecases of mapping data (for example strings into Date objects), many annotations are provided by the framework.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Example of annotation usage where a string UNIX date would be converted into a JS Date Object");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Here are the annotations that are in the framework already. If you need to convert things that are not covered here, please go on to the next section in the menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Provided Annotations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 4)(17, "thead")(18, "tr")(19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " usage");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " attributes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " other info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " example code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AnnotationsView_tr_32_Template, 22, 6, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.exampleCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
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

/***/ 88100:
/*!***********************************************************************!*\
  !*** ./src/app/usecases/entitymapping/views/CustomAnnotationsView.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomAnnotationsView: () => (/* binding */ CustomAnnotationsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class CustomAnnotationsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.constuctorCode = `import {DecoratorRegistry} from "@six-group/base-angular-framework/core";

...

constructor(private decoratorRegistry: DecoratorRegistry) {`;
    this.sampleUsageCode = `import {BaseEntity} from "@six-group/base-angular-framework/core";
import {Test} from "./TestDecorator";

export class TestClass implements BaseEntity<TestClass> {

  @Test()
  prop: string = null;

  getClassName(): string {
    return "TestClass";
  }

  postProcess() {
  }
}`;
    this.sampleRegistrationCode = `import {getTest, Test} from "./test/data/decorators/TestDecorator";

...

ngOnInit() {
    try {
      this.decoratorRegistry.register(Test, getTest, (prop, val, params) => {
        if (params) {
          return params;
        }
        return "It worked!";
      });
    } catch (err) {
      console.error(err);
    }
}`;
    this.sampleAnnotationCode = `import "reflect-metadata";

const decoratorMetadataKey = Symbol("Test");

export function Test(formatString: string = null) {
  return Reflect.metadata(decoratorMetadataKey, formatString);
}

export function getTest(target: any, propertyKey: string) {
  return Reflect.getMetadata(decoratorMetadataKey, target, propertyKey);
}`;
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
    this.ɵfac = function CustomAnnotationsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomAnnotationsView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomAnnotationsView,
      selectors: [["CustomAnnotationsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 59,
      vars: 4,
      consts: [["xmlns", "http://www.w3.org/1999/html", 1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["type", "1"]],
      template: function CustomAnnotationsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Custom Annotations and the DecoratorRegistry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "When the provided annotations are not enough, creating your own is the way to go. An annotation in Javscript is essentially a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Decorator");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " and is created by quite specific code. This section will go over creating your own and registering them with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sample Annotation (Decorator) named ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "@Test");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "DecoratorRegistry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "All annotation registration (so that the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " is aware of your custom annotation) is done via the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "DecoratorRegistry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " service. First, inject the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "DecoratorRegistry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " in your constructor as as follows: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "We then register the annotation to it via:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Once it's registered, we can add it to our entity class where we wish to use it:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "In this test case, the annotation would per the above code do the following:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ol", 4)(44, "li")(45, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "If there is a parameter passed along with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "@Test()");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " annotation, such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "@Test('Hi there!')");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, ", then the value of \"prop\" will be \"Hi there!\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "If there is no parameter passed along with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "@Test()");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " annotation, then the value is \"It worked!\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.sampleAnnotationCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.constuctorCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.sampleRegistrationCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.sampleUsageCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 33836:
/*!*******************************************************************!*\
  !*** ./src/app/usecases/entitymapping/views/EntityMappingView.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityMappingView: () => (/* binding */ EntityMappingView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class EntityMappingView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.easyRestCode = `let data:clazz[] = entityDataService.fetchData<TargetClazz>("http://server:8000/rest/fetch/data", true);`;
    this.mavenExampleCode = `<plugin>
  <artifactId>maven-antrun-plugin</artifactId>
  <executions>
    <execution>
      <id>replace1</id>
      <phase>generate-resources</phase>
      <configuration>
        <tasks>
          <echo>====================================</echo>
          <echo>= EXECUTING REPLACEMENT TASKS =</echo>
          <echo>====================================</echo>
          <echo>-> Project Base Dir: \${project.basedir}</echo>
          <echo>- Running Array fix on \${project.basedir}/src/app/model/entities</echo>
          <replace token="Array = undefined" value="Array<any> = undefined" dir="\${project.basedir}/src/app/model/entities">
            <include name="**/*.ts"/>
          </replace>
          <echo>- Running Bad REST path fix on \${project.basedir}/src/app/model/entities</echo>
          <replace token="/rno/referencedata/" value="/rno/backend/referencedata/" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <echo>- Running 2nd Bad REST path fix on \${project.basedir}/src/app/model/entities</echo>
          <replace token="/rno/obe/" value="/rno/backend/obe/" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <echo>- Running Primitive Return Type Replacements on \${project.basedir}/src/app/model/entities</echo>
          <replace token="), boolean, 'boolean'); // RETURN-TYPE-MARKER" value="), undefined, 'boolean'); // RETURN-TYPE-MARKER" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <replace token="), string, 'string'); // RETURN-TYPE-MARKER" value="), undefined, 'string'); // RETURN-TYPE-MARKER" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <echo>====================================</echo>
          <echo>Annotation Propagation Task Up Ahead</echo>
          <echo>====================================</echo>
        </tasks>
      </configuration>
      <goals>
        <goal>run</goal>
      </goals>
    </execution>
  </executions>
</plugin>
  <!-- Inject annotations into all entities that are of type Date, etc -->
<plugin>
<groupId>com.google.code.maven-replacer-plugin</groupId>
<artifactId>replacer</artifactId>
<version>1.5.3</version>
<executions>
  <execution>
    <phase>generate-resources</phase>
    <goals>
      <goal>replace</goal>
    </goals>
  </execution>
</executions>
<configuration>
  <basedir>\${project.basedir}/src/app/model/entities</basedir>
  <includes>
    <include>**/*.ts</include>
  </includes>
  <regexFlags>
    <regexFlag>CASE_INSENSITIVE</regexFlag>
    <regexFlag>MULTILINE</regexFlag>
  </regexFlags>
  <replacements>
    <replacement>
      <!-- annotate all Date properties with @DateProp -->
      <token>((.*: Date) =.*)</token>
      <value>\\@DateProp\\(\\)
        $1
      </value>
    </replacement>
    <replacement>
      <!-- annotate executionTime string with a microseconds prop -->
      <token>((.*\\sexecutionTime: string) =.*)</token>
      <value>\\@StringDateWithMicrosProp\\(\\)
        $1
      </value>
    </replacement>
    <replacement>
      <!-- annotate transactionTime string with a microseconds prop -->
      <token>((.*\\stransactionTime: string) =.*)</token>
      <value>\\@StringDateWithMicrosProp\\(\\)
        $1
      </value>
    </replacement>
    <replacement>
      <!-- replace the type of execution time to MicrosecondDate -->
      <token>\\sexecutionTime: string</token>
      <value>executionTime: MicrosecondDate</value>
    </replacement>
    <replacement>
      <!-- replace the type of transaction time to MicrosecondDate -->
      <token>\\stransactionTime: string</token>
      <value>transactionTime: MicrosecondDate</value>
    </replacement>
    <replacement>
      <!-- Remove bad generation. Enums aren't recognized as they're declared as types -->
      <token>@ObjectMapping\\('.*Enum.*'\\)</token>
      <value></value>
    </replacement>
    <replacement>
      <!-- Remove bad generation. Array<> ends up in the list -->
      <token>@List\\('Array.{4}(.*).{4}'\\)</token>
      <value>@List('$1')</value>
    </replacement>
    <replacement>
      <!-- MUST BE LAST OR YOU WILL HAVE DOUBLE ANNOTATIONS. Annotate all Time strings with a StringDateProp -->
      <token>((.*Time: string) =.*)</token>
      <value>\\@StringDateProp\\(\\)
        $1
      </value>
    </replacement>
  </replacements>
</configuration>
</plugin>`;
    this.currencyMappingCode = `let allCurrencies:Currency[] = [];

jsonObj.currencies.forEach((ele) => {
    let cur:Currency = null;
    EntityMapper.mapEntityTreeFrom(ele, cur, Currency, entityDataService);
    allCurrencies.push(cur)
});`;
    this.currencyCode = `{
    currencies: [
        { code: "CHF", name: "Swiss Francs" },
        { code: "EUR", name: "Euros" }
    ]
}`;
    this.goodInitCode = `export class {
    name: string = undefined;
}`;
    this.badInitCode = `export class {
    name: string;
}`;
    this.baseEntityCode = `import {BaseEntity} from "@six-group/base-angular-framework/core";

export class Currency implements BaseEntity<Currency> {

  _id: string = null;

  name: string = null;
  code: string = null;
  exchangeRateCHF: number = null;

  override getClassName(): string {
    return "Currency";
  }

  override postProcess() {
    this._id = this.name + this.code;
  }
}`;
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
    this.ɵfac = function EntityMappingView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntityMappingView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EntityMappingView,
      selectors: [["EntityMappingView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 148,
      vars: 12,
      consts: [["xmlns", "http://www.w3.org/1999/html", 1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], [1, "description", 2, "color", "red"], ["language", "xml", 3, "highlight"]],
      template: function EntityMappingView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Entity Mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The Fast (But Usually Not Good Enough) Way");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "You can cast raw JSON over to an object with just a simple:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "And this is fine for flat JSON structures or simple object graphs where no type conversion needs to be done. If your model is small and simple, this may be the way you want to do it rather than using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ". Once you get into complex types and structures, it gets messy and usually requires a lot of custom code.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "By using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " and its associated annotations (see the next section in the menu) you can get away from most of the \"having to deal with getting real objects out of JSON\" and just get on with your life (or code).");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "'s job is to create real \"Entity classes\" from raw JSON data. The result is classes that usually match the ones that exist on a server. And with all the nested entities and complex references and type conversion that may need to be done.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "The Short Version (TL;DR / You've been here before)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 2)(28, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Step 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " - Have your entity class implement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "BaseEntity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " per:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br")(37, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 2)(39, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Step 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " - When you have your JSON structure that you wish to convert, call:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "And the targetObj will then be of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "EntityClassToMapTo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " type. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br")(50, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " If using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "EntityDataService");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " all the mapping will be done for you, and you simply use the data fetching methods with the type parameter (");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "TargetClazz");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " in the below example) for the target object such as:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "The Long Version (First time here)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "The BaseEntity class");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "All your entity classes that you wish to be able to automatically build up with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " should implement the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "BaseEntity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " interface that contains utility methods that are later used by the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " to help create the entities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Here is a simple example class that extends the BaseEntity and includes a method override that creates a local property called _id after the class has been created by the mapper:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "> ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "The example shows the required method overrides. The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "getClassName");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " override is used when the code is \"javascript minimized\"/optimized in a production build, as the class name will then disappear, and with it; any possibility of referencing it as a type.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "IMPORTANT - EVERY CLASS PROPERTY MUST BE INITIALIZED");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "It's imperative that you initialize EVERY property in your entity classes with either ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "null");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "undefined");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, ", or with actual values. Lists and Arrays should be empty or null.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Never initialize a property like this. It will cause any entity mapping to fail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "The reason is, that this property is impossible to see with reflection due to it being un-initialized. If you need your properties to be uninitialized just set them to 'undefined'");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "The EntityDataService");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " is also used together with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "EntityDataService");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, ". This injectable service includes methods for fetching data over REST. It will call the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "EntityMapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " on the return of all data and convert the JSON data over to objects using the mapper. This is the a simplified way to do it, but you can of course use the mapper completely standalone.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "To inject it, simply include it in your constructor per:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Using the EntityMapper By Itself");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "The base usage is like the example below. You always start the mapping from the root object if your object is a tree of data. Any subsequent entities will be automatically mapped from the root out to the end of every tree.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Let's say our jsonObj is an array of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " data that matches the example class at the top:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "We know we want any array of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " entity objects as the result. To map them all we do as follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Using BaseEntity with Code Generators & Automatically Generated Classes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "A lot of time you will have your base entities generated by some code generation framework. This causes headaches for changing entities as you cannot modify the class itself without having any changes being overwritten the next tiem the generation is done. To get around this, one way to tackle it is to add a post-processing task to your Maven build or whatever you use to build your code.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Here is an example from an existing project that goes through entities and adds annotations to the generated base classes (in this case, using the Open API generator).");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "let classObj:TargetClass = (TargetClass) json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "export class YourClass implements BaseEntity<YourClass> {");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "EntityMapper.mapEntityTreeFrom(jsonObjStructure, targetObject, EntityClassToMapTo, this.entityDataService);");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.easyRestCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.baseEntityCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.badInitCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.goodInitCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "constructor(private entityMapper: EntityMapper) {");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "EntityMapper.mapEntityFrom(jsonObj, targetObj, EntityClassToMapTo, entityDataService);");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.currencyCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.currencyMappingCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.mavenExampleCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 55513:
/*!********************************************************************!*\
  !*** ./src/app/usecases/entitymapping/views/ReverseMappingView.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReverseMappingView: () => (/* binding */ ReverseMappingView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class ReverseMappingView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.backToJsonCode = `let json = this.entityUtilities.prepareForSaving<Clazz>(jsObject);

this.someRestService.save(json).subscribe((response: any) => {
...
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
    this.ɵfac = function ReverseMappingView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReverseMappingView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ReverseMappingView,
      selectors: [["ReverseMappingView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 43,
      vars: 2,
      consts: [["xmlns", "http://www.w3.org/1999/html", 1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/core/src/services/EntityUtilities.ts", "target", "_blank"]],
      template: function ReverseMappingView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Converting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "BaseEntity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " implementations back to JSON");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Mapping from JSON to entities is great. But many times we need to send object graphs back to the server as JSON, and this is again where a lot of headaches can happen as you may have back-references which cause infinite loops etc when trying to use the basic ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "JSON.stringify(object)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We may also have added \"temporary properties\" that actually don't belong to the object via code, such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "obj[\"thisIsNew\"] = \"blah\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ", and as they technically didn't exist on the object from the beginning, they should also not be sent back.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "To ensure all of this works as intended, the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "EntityMapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " framework comes with a utility that lets you convert your object structure back to JSON.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "First we inject the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "EntityUtilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " service into our constructor.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Now we can tell ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "EntityUtilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " that we need to convert our object (that implements ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "BaseEntity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ") back to JSON");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "This is a very simple example. The converter takes many optional parameters as well that lets you override properties, do custom conversion before or after. For more details, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "please read the API documentation for the class");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "constructor(private entityUtilities: EntityUtilities) {");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.backToJsonCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_usecases_entitymapping_entitymapping_module_ts.a6bc8745f7a0c9c2.js.map