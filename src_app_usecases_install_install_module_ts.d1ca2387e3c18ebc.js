"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_install_install_module_ts"],{

/***/ 1548:
/*!****************************************************!*\
  !*** ./src/app/usecases/install/install.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallModule: () => (/* binding */ InstallModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _install_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install.routing */ 3000);
/* harmony import */ var _model_InstallUsecaseModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/InstallUsecaseModel */ 86482);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);
/* harmony import */ var _views_InstallView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/InstallView */ 64504);
/* harmony import */ var _views_ConfigView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ConfigView */ 83083);
/* harmony import */ var _views_ConfigGridView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ConfigGridView */ 10279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);










class InstallModule {
  static {
    this.ɵfac = function InstallModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstallModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: InstallModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [_model_InstallUsecaseModel__WEBPACK_IMPORTED_MODULE_1__.InstallUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _install_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_8__.AgGridModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InstallModule, {
    declarations: [
    // views
    _views_InstallView__WEBPACK_IMPORTED_MODULE_3__.InstallView, _views_ConfigView__WEBPACK_IMPORTED_MODULE_4__.ConfigView, _views_ConfigGridView__WEBPACK_IMPORTED_MODULE_5__.ConfigGridView],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_8__.AgGridModule]
  });
})();

/***/ }),

/***/ 3000:
/*!*****************************************************!*\
  !*** ./src/app/usecases/install/install.routing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_InstallView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/InstallView */ 64504);
/* harmony import */ var _views_ConfigView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ConfigView */ 83083);
/* harmony import */ var _views_ConfigGridView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ConfigGridView */ 10279);




const routes = [{
  path: '',
  component: _views_InstallView__WEBPACK_IMPORTED_MODULE_0__.InstallView
}, {
  path: 'configuration',
  component: _views_ConfigView__WEBPACK_IMPORTED_MODULE_1__.ConfigView
}, {
  path: 'gridconfiguration',
  component: _views_ConfigGridView__WEBPACK_IMPORTED_MODULE_2__.ConfigGridView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes);

/***/ }),

/***/ 86482:
/*!***************************************************************!*\
  !*** ./src/app/usecases/install/model/InstallUsecaseModel.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallUsecaseModel: () => (/* binding */ InstallUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class InstallUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
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
    this.ɵfac = function InstallUsecaseModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstallUsecaseModel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHelper));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InstallUsecaseModel,
      factory: InstallUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 10279:
/*!**********************************************************!*\
  !*** ./src/app/usecases/install/views/ConfigGridView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigGridView: () => (/* binding */ ConfigGridView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function ConfigGridView_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 10)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r1.objType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class ConfigGridView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.tableData = [{
      name: "showGridStatusBar",
      objType: "boolean",
      description: "Whether to show the status bar on the grid or not, the other status options will only work if this option is on."
    }, {
      name: "showGridStatusBarTotalRows",
      objType: "boolean",
      description: "When the status bar is on, this will show the total row count in the status bar"
    }, {
      name: "showGridStatusBarFilteredRows",
      objType: "boolean",
      description: "When the status bar is on, this will show filtered row count in the status bar"
    }, {
      name: "showGridStatusBarSelectedRows",
      objType: "boolean",
      description: "When the status bar is on, this will show the selected row count in the status bar"
    }, {
      name: "showGridStatusBarAggregatedRows",
      objType: "boolean",
      description: "When the status bar is on, this will show the aggregated row count in the status bar"
    }, {
      name: "animateGridRows",
      objType: "boolean",
      description: "Whether grid row updates should be animated or not"
    }, {
      name: "customGridSizing",
      objType: "boolean",
      description: "Must be on for getGridRowHeight() to be called"
    }, {
      name: "getGridRowHeight",
      objType: "boolean",
      description: "Will be called if customGridSizing is true"
    }, {
      name: "customGridFontSize",
      objType: "number",
      description: "Cell font size override"
    }, {
      name: "enablePivot",
      objType: "boolean",
      description: "Whether pivoting should be enabled"
    }, {
      name: "copyCellValueOnlyOnCopy",
      objType: "boolean",
      description: "Whether CTRL+C should only copy the focused cell value rather than the entire row"
    }, {
      name: "toolbarImagesPath",
      objType: "string",
      description: "Image path to the toolbar icons"
    }, {
      name: "toolbarSearchIcon",
      objType: "string",
      description: "Image path to the search icon"
    }, {
      name: "filterIconOverridePath",
      objType: "string",
      description: "If the filter icon should be overridden, this is where you set it up."
    }, {
      name: "displayDateFormat",
      objType: "string",
      description: "Date format used when dealing with dates"
    }, {
      name: "highlightSearchResultsText",
      objType: "boolean",
      description: "Whether search results should be highlighted within the cell value itself, using Inline Search Control"
    }, {
      name: "cssClassStringSearchMatchedCell",
      objType: "string",
      description: "CSS class to apply to the span tag that surrounds search matched text within a cell, default is 'highlightText'"
    }, {
      name: "getGlobalGridSettings",
      objType: "method",
      description: "Any value that can be set with .setGridOption(key, value) can be set in this map and it will be applied to every grid"
    }, {
      name: "globalPostGridInitSettings",
      objType: "method",
      description: "Allows setting of values onto the GridOptions object after all other values have been set"
    }, {
      name: "suppressAllGridOptionDefaults",
      objType: "boolean",
      description: "Whether any settings onto the gridoptions should take place or not. This is useful for when you want to set all grid options yourself."
    }, {
      name: "useFlatPickrDatePicker",
      objType: "boolean",
      description: "Whether to use flatpickr date picker for the agDateInput component"
    }];
    this.initCode = `Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{
  animateGridRows: true,
  customGridSizing: true,
  highlightSearchResultsText: true,
  cssClassStringSearchMatchedCell: "inlineSearchMatchedCell",
  displayDateFormat: DateUtils.YYYY_MM_DD,
  getGridRowHeight: () => {
    try {
      let rowHeight = 0;

      if (this.themeManager.tightGrid) {
        rowHeight = Globals.DEFAULT_TIGHT_GRID_ROW_HEIGHT;
      } else {
        rowHeight = Globals.DEFAULT_SPACED_GRID_ROW_HEIGHT;
      }

      return rowHeight;
    } catch (err) {
      console.error(err);
    }
    return Globals.DEFAULT_SPACED_GRID_ROW_HEIGHT;
  },
  globalPostGridInitSettings: (go: GridOptions) => {
    // do something more?
  }
};`;
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
    this.ɵfac = function ConfigGridView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigGridView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigGridView,
      selectors: [["ConfigGridView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 60,
      vars: 5,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/ag-grid/src/services/GridSettings.ts?ref_type=heads", "target", "_new"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function ConfigGridView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grid Module Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "In your ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "app.module");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", define the import:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In sub modules or lazy loaded modules, you would import:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "And if you're using a shared module, you will need to export the module via:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GridSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "GridSettings is a global setting that must be provided to each ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BaseGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " implementation, which defines certain properties that define how the grid should function.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The full API can be found ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Here is an example configuration, setting up a global ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "GridSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " property. This example enables the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AgGrid Inline Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " control among other settings.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Various ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "GridSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " and what they do. Please consult the API for more details on each one.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 5)(47, "thead")(48, "tr")(49, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " type");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "th")(56, "th")(57, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ConfigGridView_tr_59_Template, 16, 3, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "imports [ CoreAgGridModule.forRoot(), ... ]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "imports [ CoreAgGridModule.forChild(), ... ]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "exports [ CoreAgGridModule, ... ]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.initCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
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

/***/ 83083:
/*!******************************************************!*\
  !*** ./src/app/usecases/install/views/ConfigView.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigView: () => (/* binding */ ConfigView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);




function ConfigView_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td")(10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td")(13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td")(16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.def);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class ConfigView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.tableData = [{
      name: "animateMultipleDialogs",
      type: "boolean",
      def: "true",
      description: "When 2+ dialogs are opened at the same time, this will animate the underlying dialog by \"pushing it to the side\""
    }, {
      name: "closeModalsWithEscape",
      type: "boolean",
      def: "false",
      description: " Allow closing dialogs with the ESC key (normally a bad idea)"
    }, {
      name: "dontAllowDialogsSmallerThanStartingSize",
      type: "boolean",
      def: "false",
      description: "This ensures a user cannot resize a dialog to smaller than the size it was when it was created. This helps ensure that layouts cannot be over-compressed."
    }, {
      name: "allowDialogResize",
      type: "boolean",
      def: "false",
      description: "Whether dialog windows can be resized"
    }, {
      name: "showExtendedInlineSearch",
      type: "boolean",
      def: "true",
      description: "Whether to show the extended inline search for AgGrid inline searching"
    }, {
      name: "highlightSearchResultsText",
      type: "boolean",
      def: "false",
      description: "Whether to highlight the exact search result text for the inline search feature for AgGrid (may be slow! use carefully)"
    }, {
      name: "usersHateThatFocusOnFormFieldCausesRequiredErrorToShow",
      type: "false",
      def: "undefined",
      description: "Helps out in BaseForm that just focusing on a field does not throw a required entry error"
    }, {
      name: "autoSaveColumnState",
      type: "boolean",
      def: "true",
      description: "Saves & Restores the AG-grid column layout (order, size, etc) whenever something is changed in the grid"
    }, {
      name: "autoSaveColumnFilterState",
      type: "boolean",
      def: "true",
      description: "Saves & Restores the AG-grid filter state whenever one is applied to the grid"
    }, {
      name: "keyColumnStorage",
      type: "string",
      def: "blank",
      description: "The key under which the column settings from above should be saved under. If none is set, no pre-pend key is used and it will be blank \"\""
    }, {
      name: "keyColumnFilterStorage",
      type: "string",
      def: "blank",
      description: "The key under which the grid filter settings from above should be saved under. If none is set, no pre-pend key is used and it will be blank \"\""
    }, {
      name: "keySaveSelection",
      type: "string",
      def: "blank",
      description: "The key under which the selected entity for the grid should be saved under. If none is set, no pre-pend key is used and it will be blank \"\""
    }, {
      name: "displayDateFormat",
      type: "string",
      def: "undefined",
      description: "The date format that is used to display dates. This should ideally be set from using the static properties in DateUtils. Such as DateUtils.YYYY_MM_DD."
    }, {
      name: "showWeekNumbersInCalendar",
      type: "boolean",
      def: "false",
      description: "Whether week numbers should be shown in calendars."
    }, {
      name: "firstDayOfWeekInCalendar",
      type: "number",
      def: "0",
      description: "What day is the first day of the week in calendars. Default is 0."
    }, {
      name: "yearRange",
      type: "string",
      def: "undefined",
      description: "What year range should be shown in calendars. The format is \"startYear,endYear\" (comma separated, no spaces)"
    }, {
      name: "themeClass",
      type: "string",
      def: "undefined",
      description: "What theme CSS class should be applied to all AgGrids."
    }];
    this.importCode = `import * as clazzHandler from "./ClassHandler";`;
    this.classHandlerCode = `export class ClassHandler {
}

export {OneTestEntity} from "./test/data/entities/OneTestEntity";
export {SecondTestEntity} from "./test/data/entities/SecondTestEntity";`;
    this.testbedCode = `beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [
        {
          provide: CoreAgGridModule,
          useValue: CoreAgGridModule.forChild()
        }
      ]
    }).compileComponents();
  });`;
    this.initCode = `import * as clazzHandler from "./ClassHandler";
import {IBaseFrameworkSettings, IEntityClassHandler, SixCoreModule} from '@six-group/base-angular-framework/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SixCoreModule.forRoot(
      <IEntityClassHandler>{
        getClassForString(clazzName: string) {
            return new (<any>clazzHandler)[clazzName]();
        }
      },
      <IBaseFrameworkSettings>{
          displayDateFormat: DateUtils.YYYY_MM_DD
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
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
    this.ɵfac = function ConfigView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigView,
      selectors: [["ConfigView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 82,
      vars: 6,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/base/-/blob/main/src/app/components/core/src/ext/IBaseFrameworkSettings.ts"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["id", "api.menu.props.default", 1, "doc-option-light", "doc-option-default"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function ConfigView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Framework Root Module Initialization");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "To get started with the base framework you need to tell your application (or module / library), to use it and to initialize it. This is done in your module declaration in the import section. Usually in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "app.module.ts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", but you can of course initialize it individually in any lazy loaded module as well. You initialize the module by telling it some basic things, such as what the default display date format is and you need to provide a class handler that converts class \"string names\" into objects. An Example follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Example Initialization");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "So to highlight, the important block here is the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SixCoreModule.forRoot()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ". You can also use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "forChild()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " rather than ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "forRoot()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " for sub-module implementations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Initializing for testing (Jest/Karma):");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "If you get errors about the module not being instantiated, you may need to provide a custom provider in your \"providers\" set up of your testbed as follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Parameter 1 (Optional) - IEntityClassHandler");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This parameter is our \"converter\" for classes that tells the entity mapper inside the base framework what \"string class name\" goes to what class object. A \"class handler\" is a very simple dummy class that exports all entity classes that you wish to be mappable from text to object in the following way:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "When the EntityMapper then needs a class, it calls your handler that returns a new class cast from the string representation of that class. This can be done in many ways, but if you want each instance to be a new object, the \"simplest\" (with some typescript magic) is to simply cast a new object into the class via:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "You can import the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "clazzHandler");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " (ClassHandler from above) as follows;");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "If you hare not planning on using any sort of entity mapping, you can pass ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "null");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "undefined");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Parameter 2 (Optional) - IBaseFrameworkSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "The second parameter, is your implementation of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "IBaseFrameworkSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " interface. This controls settings that are used in the base module and range from how things are displayed to grid specific features. Please look at the interface for further details on possible options, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "each option is documented in the API.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 5)(68, "thead")(69, "tr")(70, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " type");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " default");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "th")(79, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ConfigView_tr_81_Template, 17, 4, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.initCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.testbedCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.classHandlerCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "return new (<any>clazzHandler)[clazzName]();");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.importCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
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

/***/ 64504:
/*!*******************************************************!*\
  !*** ./src/app/usecases/install/views/InstallView.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallView: () => (/* binding */ InstallView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class InstallView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.latestVersion = "1.0.20";
    this.releaseDate = "22/11/2024";
    this.angJsonCode = `"styles": [
   "node_modules/primeicons/primeicons.css",
   "node_modules/primeng/resources/primeng.min.css",
   "node_modules/@ag-grid-community/styles/ag-grid.css",
   "node_modules/@ag-grid-community/styles/ag-theme-alpine.css",
   "node_modules/@ag-grid-community/styles/ag-theme-balham.css"
],
"scripts": [
   "node_modules/jquery/dist/jquery.min.js"
],
`;
    this.agGridDeps = ` "@ag-grid-community/angular": "32.3.3",
"@ag-grid-community/client-side-row-model": "32.3.3",
"@ag-grid-community/csv-export": "32.3.3",
"@ag-grid-community/styles": "32.3.3",
"@ag-grid-enterprise/clipboard": "32.3.3",
"@ag-grid-enterprise/column-tool-panel": "32.3.3",
"@ag-grid-enterprise/core": "32.3.3",
"@ag-grid-enterprise/excel-export": "32.3.3",
"@ag-grid-enterprise/filter-tool-panel": "32.3.3",
"@ag-grid-enterprise/master-detail": "32.3.3",
"@ag-grid-enterprise/menu": "32.3.3",
"@ag-grid-enterprise/range-selection": "32.3.3",
"@ag-grid-enterprise/rich-select": "32.3.3",
"@ag-grid-enterprise/set-filter": "32.3.3",
"@ag-grid-enterprise/side-bar": "32.3.3",
"@ag-grid-enterprise/status-bar": "32.3.3"`;
    this.packageDepCode = `"dependencies": {
    "@angular/animations": "18.2.2",
    "@angular/common": "18.2.2",
    "@angular/compiler": "18.2.2",
    "@angular/core": "18.2.2",
    "@angular/forms": "18.2.2",
    "@angular/platform-browser": "18.2.2",
    "@angular/platform-browser-dynamic": "18.2.2",
    "@angular/router": "18.2.2",
    "@ng-bootstrap/ng-bootstrap": "17.0.1",
    "@popperjs/core": "2.11.7",
    "@six-group/base-angular-framework": "^${this.latestVersion}",
    "big-integer": "1.6.51",
    "bootstrap": "5.3.3",
    "flatpickr": "4.6.13",
    "jquery": "3.6.1",
    "luxon": "3.5.0",
    "node": "21.2.0",
    "primeng": "17.18.9",
    "sweetalert2": "11.6.13",
    "tippy.js": "6.3.7"
}`;
    this.depCode = `"dependencies" {
    "@six-group/base-angular-framework": "^${this.latestVersion}"
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
    this.ɵfac = function InstallView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstallView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InstallView,
      selectors: [["InstallView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 60,
      vars: 8,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "dos", 3, "highlight"], ["language", "json", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/base"]],
      template: function InstallView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Installation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Latest Version is:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Command Line");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Globally");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Locally");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Project");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "In your dependencies in your ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "package.json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " file, include the following in your dependencies:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "From Source");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Here is the Gitlab Repository");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Necessary imports in your project");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Due to third party dependencies you will need the following your ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "package.json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "AgGrid features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "If you are using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " features you will also need the following in your ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "package.json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "angular.json (adapt to your theme choices)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.latestVersion, " - Released ", ctx.releaseDate, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "npm install -g @six-group/base-angular-framework");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "npm install @six-group/base-angular-framework");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.depCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.packageDepCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.agGridDeps);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.angJsonCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_usecases_install_install_module_ts.d1ca2387e3c18ebc.js.map