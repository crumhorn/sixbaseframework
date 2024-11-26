"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_baseclasses_baseclasses_module_ts"],{

/***/ 36052:
/*!************************************************************!*\
  !*** ./src/app/usecases/baseclasses/baseclasses.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseClassesModule: () => (/* binding */ BaseClassesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _baseclasses_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseclasses.routing */ 80528);
/* harmony import */ var _views_BaseControlView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/BaseControlView */ 83853);
/* harmony import */ var _model_BaseClassesUsecaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/BaseClassesUsecaseModel */ 85618);
/* harmony import */ var _views_BaseFormView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/BaseFormView */ 13754);
/* harmony import */ var _views_BaseGridView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/BaseGridView */ 71884);
/* harmony import */ var _views_BaseUsecaseModelView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/BaseUsecaseModelView */ 92336);
/* harmony import */ var _views_BaseViewView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/BaseViewView */ 67337);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _grid_grid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grid/grid.module */ 2386);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);













class BaseClassesModule {
  static {
    this.ɵfac = function BaseClassesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseClassesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: BaseClassesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_model_BaseClassesUsecaseModel__WEBPACK_IMPORTED_MODULE_2__.BaseClassesUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _baseclasses_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _grid_grid_module__WEBPACK_IMPORTED_MODULE_8__.TestGridModule, primeng_badge__WEBPACK_IMPORTED_MODULE_11__.BadgeModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BaseClassesModule, {
    declarations: [
    // views
    _views_BaseControlView__WEBPACK_IMPORTED_MODULE_1__.BaseControlView, _views_BaseFormView__WEBPACK_IMPORTED_MODULE_3__.BaseFormView, _views_BaseGridView__WEBPACK_IMPORTED_MODULE_4__.BaseGridView, _views_BaseUsecaseModelView__WEBPACK_IMPORTED_MODULE_5__.BaseUsecaseModelView, _views_BaseViewView__WEBPACK_IMPORTED_MODULE_6__.BaseViewView],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _grid_grid_module__WEBPACK_IMPORTED_MODULE_8__.TestGridModule, primeng_badge__WEBPACK_IMPORTED_MODULE_11__.BadgeModule]
  });
})();

/***/ }),

/***/ 80528:
/*!*************************************************************!*\
  !*** ./src/app/usecases/baseclasses/baseclasses.routing.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_BaseControlView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/BaseControlView */ 83853);
/* harmony import */ var _views_BaseViewView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/BaseViewView */ 67337);
/* harmony import */ var _views_BaseUsecaseModelView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/BaseUsecaseModelView */ 92336);
/* harmony import */ var _views_BaseGridView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/BaseGridView */ 71884);
/* harmony import */ var _views_BaseFormView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/BaseFormView */ 13754);






const routes = [{
  path: 'baseControl',
  component: _views_BaseControlView__WEBPACK_IMPORTED_MODULE_0__.BaseControlView
}, {
  path: 'baseForm',
  component: _views_BaseFormView__WEBPACK_IMPORTED_MODULE_4__.BaseFormView
}, {
  path: 'baseGrid',
  component: _views_BaseGridView__WEBPACK_IMPORTED_MODULE_3__.BaseGridView
}, {
  path: 'baseUsecaseModel',
  component: _views_BaseUsecaseModelView__WEBPACK_IMPORTED_MODULE_2__.BaseUsecaseModelView
}, {
  path: 'baseView',
  component: _views_BaseViewView__WEBPACK_IMPORTED_MODULE_1__.BaseViewView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes);

/***/ }),

/***/ 85618:
/*!***********************************************************************!*\
  !*** ./src/app/usecases/baseclasses/model/BaseClassesUsecaseModel.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseClassesUsecaseModel: () => (/* binding */ BaseClassesUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class BaseClassesUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
  destroy() {}
  handleInitializionError(err) {
    console.error(err);
  }
  hookObservables() {}
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵBaseClassesUsecaseModel_BaseFactory;
      return function BaseClassesUsecaseModel_Factory(__ngFactoryType__) {
        return (ɵBaseClassesUsecaseModel_BaseFactory || (ɵBaseClassesUsecaseModel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BaseClassesUsecaseModel)))(__ngFactoryType__ || BaseClassesUsecaseModel);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BaseClassesUsecaseModel,
      factory: BaseClassesUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 83853:
/*!***************************************************************!*\
  !*** ./src/app/usecases/baseclasses/views/BaseControlView.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseControlView: () => (/* binding */ BaseControlView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class BaseControlView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function BaseControlView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseControlView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BaseControlView,
      selectors: [["BaseControlView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"]],
      template: function BaseControlView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BaseControl");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This abstract class is the core of all base controls that make up the next sections in the menu. It's something you can extend if you wish to further your own implementation of some control that has all the various hooks and utilities that the other base classes have.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "This class is small, and mostly has utility methods for tracking subscription listeners that will be auto-disposed when the control is destroyed.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Usage:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "As it is unlikely you will be using this class, please continue to the next sections.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "super.trackSubscription(something.subscribe((data) => { }));");
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 13754:
/*!************************************************************!*\
  !*** ./src/app/usecases/baseclasses/views/BaseFormView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseFormView: () => (/* binding */ BaseFormView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function BaseFormView_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 11)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 12);
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
class BaseFormView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
    this.htmlCode = `<p-message *ngIf="hasRequiredErr()" severity="danger" [text]="getRequiredMsg()"></p-message>
<p-message *ngIf="hasPatternErr()" severity="danger" [text]="getPatternMsg()"></p-message>
<p-message *ngIf="hasErr('minlength')" severity="danger" [text]="getErrMsg('minlength')"></p-message>`;
    this.errorMessagesCode = `override errorMessageHandler(fieldName: string, msg: string): string {
    if (msg.includes("$fieldName")) {
      msg = msg.replaceAll('\\$fieldName', fieldName);
      msg = StringUtils.unCamelCase(msg);
    }
    return msg;
}`;
    this.validationMessagesCode = `override validationMessages = {
    isin: {"required": "ISIN is Required", "pattern": 'ISIN is not in a valid format'},
    currency: {"required": "$fieldName is Required", "minlength": "Minimum length is 3 Characters"}
}`;
    this.tableData = [{
      name: "getDialogMode",
      example: "if (super.getDialogMode() === DialogModes.COPY) {",
      description: "Fetches the DialogModes Enum value that the dialog was opened with"
    }, {
      name: "isAddMode",
      example: "if (super.isAddMode()) {",
      description: "Checks whether the dialog was opened with DialogModes.ADD"
    }, {
      name: "isEditMode",
      example: "if (super.isAddMode()) {",
      description: "Checks whether the dialog was opened with DialogModes.EDIT"
    }, {
      name: "isCopyMode",
      example: "if (super.isAddMode()) {",
      description: "Checks whether the dialog was opened with DialogModes.COPY"
    }, {
      name: "trackSubscription",
      example: "super.trackSubscription(sub)",
      description: "Tells the dialog a subscription should automatically be unsubscribed when the dialog is disposed"
    }, {
      name: "handleSubmitError",
      example: "super.handleSubmitError(errorMsg, dialogTitle)",
      description: "Tells the dialog that it should show an error dialog explaining that something went wrong in the submit"
    }, {
      name: "resetSubmitState",
      example: "super.resetSubmitState()",
      description: "Tells the dialog there are no submit errors any more"
    }, {
      name: "isRequiredField",
      example: "super.isRequiredField(fieldId)",
      description: "Checks if a field is currently flagged as required"
    }, {
      name: "hasErr",
      example: "super.hasErr(fieldId)",
      description: "Checks if a field has an error"
    }, {
      name: "hasRequiredErr",
      example: "super.hasRequiredErr(fieldId)",
      description: "Checks if a field has an error that it is required"
    }, {
      name: "getRequiredMsg",
      example: "super.getRequiredMsg(fieldId)",
      description: "Gets the required error message for a field"
    }, {
      name: "hasPatternErr",
      example: "super.hasPatternErr(fieldId)",
      description: "Checks if a field has an error that it it's pattern doesn't match"
    }, {
      name: "getErrMsg",
      example: "super.getErrMsg(fieldId)",
      description: "Gets the error message for a field"
    }, {
      name: "getPatternMsg",
      example: "super.getPatternMsg(fieldId)",
      description: "Gets the pattern error message for a field"
    }, {
      name: "showLoading",
      example: "super.showLoading()",
      description: "Shows the 'Loading' blocker"
    }, {
      name: "hideLoading",
      example: "super.hideLoading()",
      description: "Hides the 'Loading' blocker"
    }, {
      name: "setFieldFocus",
      example: "super.setFieldFocus(fieldAdd, fieldNotAdd)",
      description: "Sets the focus onto a field, using the first parameter if it's in ADD mode and the second if it is not in ADD mode"
    }, {
      name: "getModifiedData",
      example: "super.getModifiedData()",
      description: "Returns only the data that was modified in the form"
    }, {
      name: "isFormDirty",
      example: "BaseForm.isFormDirty(form)",
      description: "Checks whether a form is dirty"
    }, {
      name: "beginSubmit",
      example: "super.beginSubmit()",
      description: "Tells the form a submit process has started, and will thus clear form states and show the blocker"
    }, {
      name: "endSubmit",
      example: "super.endSubmit()",
      description: "Tells the form the submit has ended, and will thus clear the form state and hide the blocker"
    }, {
      name: "flagAsComboField",
      example: "super.flagAsComboField(id)",
      description: "Tells the form that certain fields are dropdowns/combo boxes, which will ensure they are not validated until touched"
    }, {
      name: "flagAsComboFields",
      example: "super.flagAsComboField(...ids)",
      description: "Tells the form that certain fields are dropdowns/combo boxes, which will ensure they are not validated until touched"
    }, {
      name: "ensureDateFromAndDateToFields",
      example: "super.ensureDateFromAndDateToFields(field1, field2)",
      description: "Ensures two dates are OK as far as 'from' and 'to' goes date-wise and will otherwise flag errors for those fields"
    }, {
      name: "errorMessageHandler",
      example: "override errorMessageHandler(msg)",
      description: "Lets you handle error messages rather than going through the framework"
    }];
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function BaseFormView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseFormView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseFormView,
      selectors: [["BaseFormView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 87,
      vars: 5,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["src", "/assets/screenshots/folding-dialogs.png", 2, "width", "600px"], ["language", "html", 3, "highlight"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function BaseFormView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BaseForm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BaseForm is an abstract class that is intended to be the parent of any class that represents an Angular reactive form (singular).");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Usage:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "General Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul")(13, "li")(14, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Keeps track of what state the form is in (Add, Edit, Delete, Copy, etc) which helps when initializing fields that may be read only or disabled depending on what \"edit mode\" the form is in. This is done using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DialogModes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ENUM class.It has a whole bunch of utility methods for dealing with angular validation messages.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Shows \"loading\" blockers with simple calls to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "showLoading()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "hideLoading()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Handles \"wait while data is being submitted\" with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "beginSubmit()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "endSubmit()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " which will automatically block and unblock the form. There's also ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "handleSubmitError()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " which will take an error message, cancel the form submit and display the error to the user.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Automatically hooks into ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DialogUtilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " class for ensuring that multiple sub-dialogs will \"fold\" the parents behind. Screenshot of this:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Validation message setup");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "The base class contains a map for holding all your validation messages, which reduces the amount of HTML code you have to write and keeps all your validation messages in one place.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "To use this you simply override the property called ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "validationMessages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ": (WARNING: This may change to become a method in a future release)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "In the above case, we use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "$fieldName");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " as a replaceable variable name. This is so that we can customize what is printed out for that text. So to ensure that the final message ends up correctly, we set up an override as in the example below. This example de-camel-cases the name of the field name and replaces the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "$fieldName");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " with that text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "In your HTML code, you can make the check for an error very simple. Here are three examples, one for a required field, one for a pattern message, and one for the \"custom\" error code of \"minlength\".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Various methods and what they do. Please consult the API for more details on each one.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "table", 6)(74, "thead")(75, "tr")(76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "th")(83, "th")(84, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, BaseFormView_tr_86_Template, 16, 3, "tr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "public class MyForm extends BaseForm {");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.validationMessagesCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.errorMessagesCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.htmlCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
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

/***/ 71884:
/*!************************************************************!*\
  !*** ./src/app/usecases/baseclasses/views/BaseGridView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseGridView: () => (/* binding */ BaseGridView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var _grid_grids_BasicGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grid/grids/BasicGrid */ 32160);






function BaseGridView_tr_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 13)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "td")(14, "td")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", item_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class BaseGridView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_2__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
    this.tableData = [{
      name: "setApplicationDefaults",
      example: "super.setApplicationDefaults(this.grid)",
      description: "Sets all the default GridOptions flags and listeners that will save column state etc. This is generally done automatically, so you should not need it"
    }, {
      name: "setApplicationDefaultsOntoGrid",
      example: "BaseGrid.setApplicationDefaultsOntoGrid(this.grid, this.gridSettings)",
      description: "Same as above but with a static call"
    }, {
      name: "showLoading",
      example: "super.showLoading()",
      description: "Shows the 'Loading' blocker"
    }, {
      name: "hideLoading",
      example: "super.hideLoading()",
      description: "Hides the 'Loading' blocker"
    }, {
      name: "doNotDoColumnSavingAndRestoration",
      example: "override doNotDoColumnSavingAndRestoration() { return false; }",
      description: "Overrides whatever column saving is globally set on a local level"
    }, {
      name: "doNotDoColumnFilterSavingAndRestoration",
      example: "override doNotDoColumnFilterSavingAndRestoration() { return false; }",
      description: "Overrides whatever column filter saving is globally set on a local level"
    }, {
      name: "restoreColumnLayouts",
      example: "super.restoreColumnLayouts()",
      description: "Restores the column layouts, normally done automatically"
    }, {
      name: "restoreColumnFilterState",
      example: "super.restoreColumnFilterState()",
      description: "Restores the column filters, normally done automatically"
    }, {
      name: "saveColumnData",
      example: "super.saveColumnData()",
      description: "Forces a save of the column data state, is normally done on change automatically"
    }, {
      name: "saveColumnFilterState",
      example: "super.saveColumnFilterState()",
      description: "Forces a save of the filter state, is normally done on change automatically"
    }, {
      name: "saveSelection",
      example: "super.saveSelection('KEY', (obj) => { return obj.id; })",
      description: "Saves the selected state into memory"
    }, {
      name: "restoreSelection",
      example: "super.restoreSelection('KEY', (obj) => { return obj.id; }, () => { console.log('done'))",
      description: "Restores the last saved selected state from memory"
    }, {
      name: "rememberSelectionAndExpandState",
      example: "super.rememberSelectionAndExpandState()",
      description: "Remembers the selected state and expanded state of the grid (if that is being used)"
    }, {
      name: "restoreSelectionAndExpandState",
      example: "super.restoreSelectionAndExpandState()",
      description: "Restores the selected state and expanded state of the grid"
    }, {
      name: "doSmartDataUpdate",
      example: "super.doSmartDataUpdate(this.grid, data)",
      description: "Smartly updates the grid by sifting through the data and determining the most efficient way to update the grid with as little redraw as possible. Please see API for additional parameters."
    }, {
      name: "inlineGridSearchOverride",
      example: "override inlineGridSearchOverride() { return true; }",
      description: "Overrides the inline search feature, saying you wish to do it yourself"
    }, {
      name: "executeGridInlineSearch",
      example: "override executeGridInlineSearch(data) { ... }",
      description: "In conjunction with inlineGridSearchOverride, this should handle the search"
    }];
    this.basicGridSettingsCode = `Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{
      animateGridRows: true, // animate rows on changes
      customGridSizing: true, // we control the row height
      highlightSearchResultsText: true, // Use inline search
      cssClassStringSearchMatchedCell: "stringSearchMatchedCell", // CSS Class for inline search results
      displayDateFormat: DateUtils.MM_DD_YYYY, // set a custom date format
      getGridRowHeight: () => {
        try {
          let rowHeight = 0;

          if (this.themeManager.tightGrid) {
            rowHeight = Globals.DEFAULT_TIGHT_GRID_ROW_HEIGHT; // height in px
          } else {
            rowHeight = Globals.DEFAULT_SPACED_GRID_ROW_HEIGHT;
          }

          return rowHeight;
        } catch (err) {
          console.error(err);
        }
        return Globals.DEFAULT_SPACED_GRID_ROW_HEIGHT;
      }
    };`;
    this.basicGridHtmlCode = `<InlineSearchableGrid>
  <div style="width: 600px; height: 200px">
    <ag-grid-angular #grid style="width: 100%; height: 100%;" [id]="getGridId()" class="ag-theme-alpine-dark"
                     [gridOptions]="gridOptions"
                     [modules]="modules"
                     [columnDefs]="colDefs"
                     (selectionChanged)="selectionChanged($event)"
                     (cellClicked)="cellClicked($event)">
    </ag-grid-angular>
  </div>
</InlineSearchableGrid>`;
    this.basicGridCode = `@Component({
  selector: 'SampleGrid',
  templateUrl: './SampleGrid.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleGrid extends BaseGrid implements OnInit, AfterViewInit {

  // inject AgGrid
  @ViewChild('grid') grid!: AgGridAngular;

  // AgGrid modules we intend to use (you can of course use the global setup for this)
  public modules: any[] = [ClientSideRowModelModule, EnterpriseCoreModule, ClipboardModule, ColumnsToolPanelModule, ExcelExportModule, FiltersToolPanelModule, MenuModule, RangeSelectionModule, SetFilterModule, SideBarModule, StatusBarModule, MasterDetailModule, RichSelectModule];

  constructor(private cd: ChangeDetectorRef) {
    super();

    // create the grid columns
    this.createColumns();
  }

  public gridOptions: GridOptions = <GridOptions>{
    rowSelection: {mode: 'singleRow'},
    getRowId: (data) => data.data.id,
    onGridReady: () => this.initGrid()
  }

  public colDefs: any[] = [];

  ngOnInit() {
  }

  // note the override, we need to call super.ngAfterViewInit()
  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.cd.markForCheck();
  }

  initGrid() {
    // sample data
    this.grid?.api?.setGridOption('rowData', [{id: "1", name: "Testing 123", date: new Date()}]);
  }

  createColumns() {
    // in most cases the GridSettings would be fetched from a global definition for the entire application
    let ch = new ColumnHelper(this.getGridName(), this.getGridSettings());

    ch.addColumn("Name", "name", 200)
      .addColumn("Date", "date", 200, ColumnHelper.DATE_FILTER);

    ch.addCellRenderer("date", (params) => {
      return DateUtils.convert(params.data.date, DateUtils.YYYY_MM_DD_HH_MM_SS);
    });

    this.colDefs = ch.getColumns();
  }

  doRefresh(): void {
  }

  // this has to be unique across the entire application as this key is used to store the column state
  getGridName(): string {
    return "agTestGrid";
  }

  hookObservables(): void {
  }

  nodeSelectedFromRightClick(node: any): void {
  }

  selectionChanged($event: any): void {
  }

  cellClicked($event: any): void {
  }

  // needs to return the AgGrid object
  getGrid(): any {
    return this.grid;
  }

  // base implementation where we say we want to use flatpickr for date pickers
  getGridSettings(): GridSettings {
    let ret = <GridSettings>{};
    ret.useFlatPickrDatePicker = true;
    return ret;
  }
}
`;
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function BaseGridView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseGridView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BaseGridView,
      selectors: [["BaseGridView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 98,
      vars: 5,
      consts: [[1, "documentParent"], [1, "document"], [1, "description", 2, "color", "red"], ["href", "http://www.ag-grid.com/", "target", "_new"], [1, "description"], ["language", "ts", 3, "highlight"], ["value", "Typescript"], ["value", "HTML"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function BaseGridView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BaseGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NOTE: This feature requires usage of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " part of the Base Framework that in turn requires ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "BaseGrid is an abstract class that is intended to be the parent of any class that represents one Angular AgGrid implementation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Usage:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "General Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul")(21, "li")(22, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lets you globally define your grid settings and sets many settings for you.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Automatically saves and loads filter and column states.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li")(28, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Works together with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "InlineSearchableGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " feature and hooks into CTRL+F.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Facilitates update of data by automatically updating it via transactional calls.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Facilitates testing as it creates in memory grids that tools such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Ranorex");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " can call to extract data.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Together with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "ContextMenuHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " utilities you have a fast way of writing code by chaining your setups and linking things to existing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " implementations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Example of a base implementation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "p-badge", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "This is a sample implementation of a grid that extends the BaseGrid class:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Example of a base implementation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "p-badge", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "It is ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "very important");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " that the ID of the grid is the same as the ID returned by the base class for inline search, or it will not work");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Example of a GridSettings implementation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "p-badge", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "In the above GridSettings we say that inline search results should have a specific CSS class, that we are using a specific date format, and that the grid height depends on user settings where they can define a \"tight\" grid or a spaced grid, and a few other options.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Result (select a row and hit CTRL+F for inline search)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "BasicGrid")(81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Various methods and what they do. Please consult the API for more details on each one.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "table", 8)(85, "thead")(86, "tr")(87, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "th")(94, "th")(95, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, BaseGridView_tr_97_Template, 16, 3, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "public class MyGrid extends BaseGrid {");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.basicGridCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.basicGridHtmlCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.basicGridSettingsCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.Highlight, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, _grid_grids_BasicGrid__WEBPACK_IMPORTED_MODULE_0__.BasicGrid],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 92336:
/*!********************************************************************!*\
  !*** ./src/app/usecases/baseclasses/views/BaseUsecaseModelView.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUsecaseModelView: () => (/* binding */ BaseUsecaseModelView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class BaseUsecaseModelView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
    this.baseUsageCode = `@Injectable()
export class SampleUsecaseModel extends BaseUsecaseModel {

  // we inject the ErrorHelper to show errors
  constructor(private errorHelper: ErrorHelper) {
    super();
  }

  destroy(): void {
  }

  // should show a message to the user that something went wrong
  handleInitializionError(err: any): void {
    this.errorHelper.displayError(err);
  }

  // where we hook all our listeners to data etc
  hookObservables(): void {
  }
}`;
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function BaseUsecaseModelView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseUsecaseModelView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BaseUsecaseModelView,
      selectors: [["BaseUsecaseModelView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 27,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"]],
      template: function BaseUsecaseModelView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BaseUsecaseModel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A Usecase Model is considered to be the model in a classic MVC setup. It deals with sending data onward to the server, and receiving and loading data. It may also contain business logic and other such operations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "As such, a model can look very different between projects, and this class contains a few features such as collecting observables that should be destroyed upon the destruction of the model via ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "trackSubscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "destroySubscriptions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "The main feature is that it forces you to override an empty method called ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "hookObservables()");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ". This is so that all your subscriptions are in one place, and as such tries to make you remember to \"track\" them via the previously mentioned methods.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "It also forces you to implement a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "handleInitilizationError");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " method that will be called on any issue when creating the model class.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Here's a barebones implementation:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.baseUsageCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 67337:
/*!************************************************************!*\
  !*** ./src/app/usecases/baseclasses/views/BaseViewView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseViewView: () => (/* binding */ BaseViewView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class BaseViewView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function BaseViewView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseViewView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BaseViewView,
      selectors: [["BaseViewView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 15,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"]],
      template: function BaseViewView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BaseView");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A \"view\" is considered to be one page. It comes from standard MVC. Model, View, Controller (or ViewController). The View is the parent of all other controls on the page, and thus this abstract base class deals with features related to that.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "As a view can be very different, the number of features of this base class is rather small. It mostly hooks into the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Split Layout Control");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " to allow maximizing and minimizing of the entire view across the browser window. It also has an available override to listen to keyboard presses of F3 and Ctrl+F.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Here's a barebones implementation:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "export class MyView extends BaseView {");
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
//# sourceMappingURL=src_app_usecases_baseclasses_baseclasses_module_ts.e96b3d105c15fa4f.js.map