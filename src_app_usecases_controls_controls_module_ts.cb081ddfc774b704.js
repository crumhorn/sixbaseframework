"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_controls_controls_module_ts"],{

/***/ 58178:
/*!******************************************************!*\
  !*** ./src/app/usecases/controls/controls.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsModule: () => (/* binding */ ControlsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _controls_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.routing */ 65582);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);
/* harmony import */ var _model_ControlsUsecaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/ControlsUsecaseModel */ 88772);
/* harmony import */ var _views_SplitLayoutView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/SplitLayoutView */ 2480);
/* harmony import */ var _views_ToolbarView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ToolbarView */ 34121);
/* harmony import */ var _views_PleaseWaitView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/PleaseWaitView */ 88621);
/* harmony import */ var _views_InlineSearchView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/InlineSearchView */ 23655);
/* harmony import */ var _grid_grid_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grid/grid.module */ 2386);
/* harmony import */ var _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @six-group/base-angular-framework/controls */ 89298);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var _views_SplitLayoutContainerView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/SplitLayoutContainerView */ 61139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);















class ControlsModule {
  static {
    this.ɵfac = function ControlsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ControlsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: ControlsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_model_ControlsUsecaseModel__WEBPACK_IMPORTED_MODULE_2__.ControlsUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _controls_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule, _grid_grid_module__WEBPACK_IMPORTED_MODULE_7__.TestGridModule, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__.SplitLayoutModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabViewModule, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__.CompactToolbarModule, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__.PleaseWait]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ControlsModule, {
    declarations: [
    // views
    _views_SplitLayoutView__WEBPACK_IMPORTED_MODULE_3__.SplitLayoutView, _views_SplitLayoutContainerView__WEBPACK_IMPORTED_MODULE_8__.SplitLayoutContainerView, _views_ToolbarView__WEBPACK_IMPORTED_MODULE_4__.ToolbarView, _views_PleaseWaitView__WEBPACK_IMPORTED_MODULE_5__.PleaseWaitView, _views_InlineSearchView__WEBPACK_IMPORTED_MODULE_6__.InlineSearchView],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridModule, _grid_grid_module__WEBPACK_IMPORTED_MODULE_7__.TestGridModule, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__.SplitLayoutModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabViewModule, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__.CompactToolbarModule, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_12__.PleaseWait]
  });
})();

/***/ }),

/***/ 65582:
/*!*******************************************************!*\
  !*** ./src/app/usecases/controls/controls.routing.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_InlineSearchView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/InlineSearchView */ 23655);
/* harmony import */ var _views_PleaseWaitView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/PleaseWaitView */ 88621);
/* harmony import */ var _views_ToolbarView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ToolbarView */ 34121);
/* harmony import */ var _views_SplitLayoutView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/SplitLayoutView */ 2480);
/* harmony import */ var _views_SplitLayoutContainerView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/SplitLayoutContainerView */ 61139);






const routes = [{
  path: 'inlinesearch',
  component: _views_InlineSearchView__WEBPACK_IMPORTED_MODULE_0__.InlineSearchView
}, {
  path: 'splitlayout',
  component: _views_SplitLayoutView__WEBPACK_IMPORTED_MODULE_3__.SplitLayoutView
}, {
  path: 'splitlayoutcontainer',
  component: _views_SplitLayoutContainerView__WEBPACK_IMPORTED_MODULE_4__.SplitLayoutContainerView
}, {
  path: 'toolbar',
  component: _views_ToolbarView__WEBPACK_IMPORTED_MODULE_2__.ToolbarView
}, {
  path: 'pleasewait',
  component: _views_PleaseWaitView__WEBPACK_IMPORTED_MODULE_1__.PleaseWaitView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes);

/***/ }),

/***/ 88772:
/*!*****************************************************************!*\
  !*** ./src/app/usecases/controls/model/ControlsUsecaseModel.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsUsecaseModel: () => (/* binding */ ControlsUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ControlsUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
  destroy() {}
  handleInitializionError(err) {
    console.error(err);
  }
  hookObservables() {}
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵControlsUsecaseModel_BaseFactory;
      return function ControlsUsecaseModel_Factory(__ngFactoryType__) {
        return (ɵControlsUsecaseModel_BaseFactory || (ɵControlsUsecaseModel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ControlsUsecaseModel)))(__ngFactoryType__ || ControlsUsecaseModel);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ControlsUsecaseModel,
      factory: ControlsUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 23655:
/*!*************************************************************!*\
  !*** ./src/app/usecases/controls/views/InlineSearchView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSearchView: () => (/* binding */ InlineSearchView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var _grid_grids_BasicGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grid/grids/BasicGrid */ 32160);




class InlineSearchView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.configureCode = `Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{
  ...
  highlightSearchResultsText: true,
  // optionally to override the default css class you can set this, default is 'stringSearchMatchedCell'
  cssClassStringSearchMatchedCell: "stringSearchMatchedCell",
  ...
};`;
    this.manualColumnCode = `// val is the value of the cell

// is the grid currently in search mode? if not, just return the value
if (!InlineSearchableGridStore.isSearching(this.gridId)) {
  return val;
}

// check what the active search is
let searchData: InlineSearchData = InlineSearchableGridStore.getSearchData(this.gridId);

// there is a value, and there is a search
if (val) {
  // this is the exact search string
  let s = searchData.search;
  if (searchData.wholeWords) {
    s = "\\\\b" + s + "\\\\b";
  }
  try {
    return val.toString().replace(new RegExp(s, "g" + (searchData.caseSensitive ? "" : "i")), (match:string) => {
      return \`<span class="\${this.gridSettings.cssClassStringSearchMatchedCell ? this.gridSettings.cssClassStringSearchMatchedCell : 'highlightText'}">\${match}</span>\`;
    });
  } catch (err) {
    return "error";
  }
} else {
  return val;
}`;
    this.furtherCssCode = `ch.getAllColumnIds().forEach(def => {
       ch.addCellClassRule(def, "stringSearchMatchedCell", (params) => InlineSearchableGridStore.hookCellCssRule(params, this.getGridId()));
});`;
    this.furtherCssCodeNoColumnHelper = `let colDef = {
  ...
  cellClassRules['stringSearchMatchedCell'] = (params) => InlineSearchableGridStore.hookCellCssRule(params, this.getGridId())
}`;
    this.gridWrappingCode = `<InlineSearchableGrid>
    <ag-grid-angular #grid ...></ag-grid-angular>
</InlineSearchableGrid>`;
    this.cssCode = `// border around cell
.stringSearchMatchedCell {
  border: 2px solid orchid !important;
}

// border around the entire grid
.inline-search-active-in-grid {
  border: 2px solid blue;
}

// string matched text highlight
.highlightText {
  background: yellow;
  border: 1px solid red;
  color: black;
}
`;
    this.baseGridCode = `getGridSettings(): GridSettings {
  return Globals.GLOBAL_AG_GRID_SETTINGS;
}`;
    this.proxyCode = `this.inlineSearchService.showInlineGridSearch.subscribe((data: any) => {
  if (this.gridInlineSearch) {
    if (data instanceof InlineSearchableGridData) {
      this.gridInlineSearch.showFromNew(data as InlineSearchableGridData);
    } else {
      this.gridInlineSearch.show(data.grid, data.event, data.top);
    }
  }
});

this.inlineSearchService.showInlineSearchFromGridId.subscribe((id: any) => {
  try {
    if (this.gridInlineSearch) {
      this.gridInlineSearch.showFromId(id);
    }
  } catch (err) {
    this.errorHelper.displayError(err);
  }
});

this.inlineSearchService.clearInlineSearchFromGridId.subscribe((id: any) => {
  try {
    if (this.gridInlineSearch) {
      this.gridInlineSearch.clearFromId(id);
    }
  } catch (err) {
    this.errorHelper.displayError(err);
  }
});`;
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
    this.ɵfac = function InlineSearchView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InlineSearchView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: InlineSearchView,
      selectors: [["InlineSearchView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 129,
      vars: 12,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["src", "./assets/screenshots/inlinesearch.png", 1, "screenshot"], ["language", "ts", 3, "highlight"], ["language", "scss", 3, "highlight"], [1, "description", 2, "font-style", "italic"]],
      template: function InlineSearchView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "AgGrid Inline Search Control");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "This control wraps around your AgGrid controla and provides inline search capability to your grid with fine-grained highlighting of search results");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Here is a screenshot of the search in action:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "(click a row and press CTRL+F to search, write a value, for example '123'; and press enter):");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "BasicGrid")(14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Configuring");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "In one of your base classes that gets called at application startup (such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "app.model");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "app.component)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, ", where you define the global grid settings, ensure the following is set up (the CSS class is optional, the default name is the same as in this example):");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "The BaseGrid class will automatically request a copy of this as follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "At the root level (");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "app.component");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " for example)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "In your root level HTML you need to define where the popup code will be rendered. Ideally this is before the end of your <body /> tag as then it can go over any other control visually.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Then import the control via a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "ViewChild");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " as follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "In the constructor of the same class that did the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "ViewChild");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " import add this:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Then in the initializing code somewhere (such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "ngOnInit()");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "), add your listeners. These essentially work like a Proxy to the inline search control. It's possible these will be made obsolete in future code.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Creating Columns Without ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 2)(66, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " will automatically wrap all your cell renderers in its own, which is how the data is rendered correctly. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "But this only works if you use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "The Easy Way");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 2)(77, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " provides a static method that takes your column definition, the grid id and your grid settings and will wrap your existing cell renderer with the necessary code. Here's an example on how to call it:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "The Hard Way");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "If you wish to have this feature work on columns that you create in a different manner, you will need to tell the column that it should also render the text. Here is the code you could use inside your cell renderer (customize to match with the rest of your renderer):");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Grid Wrapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "For each grid that should have inline searching available for it, you need to wrap it as follows in the HTML:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div")(93, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "And that's it. When the grid has focus, pressing CTRL+F should now show the Inline search control.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div")(98, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Customizing CSS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "If you changed the base CSS classes, adapt to match your names. This example shows how to customize the search results.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div")(103, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "code", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "In the above example, to get ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "stringSearchMatchedCell");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " to work, you will need to do this after your column definitions:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "(");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "ch");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " is a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "In this case, it highlights the entire cell with a border if there is a match to the search.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Or without using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.configureCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.baseGridCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", "<GridInlineSearch #gridInlineSearch></GridInlineSearch>");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", "@ViewChild('gridInlineSearch', {read: GridInlineSearch}) gridInlineSearch?: GridInlineSearch;");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", "constructor (private inlineSearchService: InlineSearchService) {");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.proxyCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", "ColumnHelper.wrapCellRendererForInlineSearch(def, gridId, gridSettings);");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.manualColumnCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.gridWrappingCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.cssCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.furtherCssCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.furtherCssCodeNoColumnHelper);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight, _grid_grids_BasicGrid__WEBPACK_IMPORTED_MODULE_0__.BasicGrid],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 88621:
/*!***********************************************************!*\
  !*** ./src/app/usecases/controls/views/PleaseWaitView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PleaseWaitView: () => (/* binding */ PleaseWaitView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @six-group/base-angular-framework/controls */ 89298);






class PleaseWaitView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
    this.block = false;
    this.blockTwo = false;
    this.pleaseWaitHtmlCode = `<PleaseWait [block]="yourBooleanProperty"></PleaseWait>`;
    this.pwInitCode = `import {PleaseWait} from "@six-group/base-angular-framework/controls";

imports: [ PleaseWait, .... ]`;
  }
  getEventGrid(id) {}
  hookObservables() {}
  showLoader() {
    this.block = true;
    this.cd.markForCheck();
    this.cd.detectChanges();
    setTimeout(() => {
      this.block = false;
      this.cd.markForCheck();
      this.cd.detectChanges();
    }, 5000);
  }
  showLoaderTwo() {
    this.blockTwo = true;
    this.cd.markForCheck();
    this.cd.detectChanges();
    setTimeout(() => {
      this.blockTwo = false;
      this.cd.markForCheck();
      this.cd.detectChanges();
    }, 5000);
  }
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
    this.ɵfac = function PleaseWaitView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PleaseWaitView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PleaseWaitView,
      selectors: [["PleaseWaitView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 51,
      vars: 4,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["pButton", "", "pRipple", "", 3, "click"], [2, "width", "600px", "height", "200px", "border", "2px solid black", "position", "relative", "display", "flex"], [2, "width", "100%", "height", "100%", "text-align", "center", "align-content", "center", "align-items", "center", "justify-content", "center"], [3, "block"], ["language", "ts", 3, "highlight"], ["language", "html", 3, "highlight"]],
      template: function PleaseWaitView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please Wait");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This control is a simple blocking control that can be used for blocking the UI while something is loading. It displays an animated block of squares in the middle of the screen.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Global");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "To show the loader, press the button. The loader will automatically turn off after 5 seconds.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 2)(13, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PleaseWaitView_Template_button_click_13_listener() {
            return ctx.showLoader();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Show Global Blocker");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Local");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "To show the loader, press the button. The loader will automatically turn off after 5 seconds.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 2)(20, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PleaseWaitView_Template_button_click_20_listener() {
            return ctx.showLoaderTwo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Show Local Blocker");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4)(23, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "This area will be blocked for 5 seconds.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "PleaseWait", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Setup");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Import the control it into your module as follows: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "code", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "In your HTML then place this where you want the blocker to live:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "code", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Global");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "It all depends where you place the control. If you just put it in an outer tag somewhere and don't control it with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "style=\"position: relative\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " it will by default block as much as it possibly can.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Local");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "First, put the HTML code at the bottom of the root tag where it should block. Then make sure the parent element is set to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "style=\"position: relative\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " it will by default block as much as it possibly can.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "PleaseWait", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", ctx.blockTwo);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.pwInitCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.pleaseWaitHtmlCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", ctx.block);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_5__.PleaseWait],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 61139:
/*!*********************************************************************!*\
  !*** ./src/app/usecases/controls/views/SplitLayoutContainerView.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitLayoutContainerView: () => (/* binding */ SplitLayoutContainerView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @six-group/base-angular-framework/controls */ 89298);





function SplitLayoutContainerView_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I am in the #header area ");
  }
}
function SplitLayoutContainerView_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I'm in the #toolbar area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SplitLayoutContainerView_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi! I'm #body ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SplitLayoutContainerView_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I'm in the #footer area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SplitLayoutContainerView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.definitionCode = `<SplitLayoutContainer [header]="header" [body]="body" [toolbar]="toolbar" [footer]="footer" headerName="I am the container">`;
    this.templateCode = `<ng-template #body>
    <div style="padding: 10px">Hi! I'm #body</div>
</ng-template>`;
    this.demoCode = `<SplitLayoutContainer [header]="header" [body]="body" [toolbar]="toolbar" [footer]="footer" headerName="I am the container">
  <ng-template #header>
    I am in the #header area
  </ng-template>
  <ng-template #toolbar>
    I'm in the #toolbar area
  </ng-template>
  <ng-template #body>
    Hi! I'm #body
  </ng-template>
  <ng-template #footer>
    I'm in the #footer area
  </ng-template>
</SplitLayoutContainer>`;
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
    this.ɵfac = function SplitLayoutContainerView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SplitLayoutContainerView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SplitLayoutContainerView,
      selectors: [["SplitLayoutContainerView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 64,
      vars: 9,
      consts: [["header", ""], ["toolbar", ""], ["body", ""], ["footer", ""], [1, "documentParent"], [1, "document"], [1, "description"], [2, "width", "100%", "height", "400px", "border", "1px solid black", "position", "relative"], ["headerName", "I am the container", 3, "header", "body", "toolbar", "footer", "standalone"], ["language", "ts", 3, "highlight"], [3, "routerLink"], [2, "display", "flex", "align-items", "center", "background", "black", "color", "white", "height", "30px", "padding-left", "10px"], [2, "padding", "10px"]],
      template: function SplitLayoutContainerView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Split Layout Container View");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The split layout container control is generally considered to be used together with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SplitLayoutContainer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " control. It essentially allows you to create content in different sections of the control. It also shows expand and collapse and maximize buttons in the header. If you wish to use this control without a split layout parent, please set ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "[standalone]=\"true\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", which will hide functionality related to the split view.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Here is an example of how the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SplitLayoutContainer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " works, showing each section with a bit of text. If you maximize a view, scroll up to the top to see it (as that's how it's set up for this demo, the location is up to you)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "SplitLayoutContainer", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SplitLayoutContainerView_ng_template_21_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(23, SplitLayoutContainerView_ng_template_23_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(25, SplitLayoutContainerView_ng_template_25_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(27, SplitLayoutContainerView_ng_template_27_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sections");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Each section that you wish to use is defined via parameters:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "code", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "And each section is then defined inside of the tag with templates:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "code", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Here is an example that essentially makes up the demo above, which defines all sections (");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "):");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "code", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Styling and Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "See the same documentation for this in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 10)(61, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SplitLayoutView");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " control.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const header_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
          const toolbar_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          const body_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
          const footer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", header_r1)("body", body_r3)("toolbar", toolbar_r2)("footer", footer_r4)("standalone", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.definitionCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.templateCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demoCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/controls/splitlayout");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_4__.SplitLayoutContainer],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2480:
/*!************************************************************!*\
  !*** ./src/app/usecases/controls/views/SplitLayoutView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitLayoutView: () => (/* binding */ SplitLayoutView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @six-group/base-angular-framework/controls */ 89298);





function SplitLayoutView_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I am in the #header area ");
  }
}
function SplitLayoutView_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I'm in the #toolbar area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SplitLayoutView_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi! I'm #body ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SplitLayoutView_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I'm in the #footer area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SplitLayoutView_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " How are you? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SplitLayoutView_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I'm good, thanks! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SplitLayoutView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
    this.importCode = `import {SplitLayoutModule} from "@six-group/base-angular-framework/controls";
...
imports: [ SplitLayoutModule, ... ]`;
    this.cssCode = `.slcArrows {
  background-image: url('/assets/images/layout/dhxlayout_cell_btns2_dark.png');
}

.slcArrows:hover {
  background-image: url('/assets/images/layout/dhxlayout_cell_btns_hover2.png');
}

.slcMaxMin {
  background-image: url('/assets/images/layout/dhxlayout_max_min2_dark.png');
}

.slcMaxMin:hover {
  background-image: url('/assets/images/layout/dhxlayout_max_min_hover2.png');
}`;
    this.maximizedCode = `<div id="maximizedArea" style="width: 100%; height: 100%; position: relative; z-index: 1; display: none"></div>`;
    this.innerCode = `<as-split-area [size]="'*'" [maximizable]="false" [collapsible]="false">`;
    this.rootCode = `<as-split direction="vertical" [disabled]="false" [unit]="'pixel'" [gutterSize]="11">
</as-split>`;
    this.layoutCode = `<div style="width: 100%; height: 600px; border: 2px solid green; position: relative">
  <as-split direction="horizontal" [disabled]="false" [unit]="'percent'" [gutterSize]="11">
    <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
      <SplitLayoutContainer [header]="header" [body]="body" [toolbar]="toolbar" [footer]="footer" headerName="Left Side">
        <ng-template #header>
          I am in the #header area
        </ng-template>
        <ng-template #toolbar>
          <div style="display: flex; align-items: center; background: black; color: white; height: 30px; padding-left: 10px">I'm in the #toolbar area</div>
        </ng-template>
        <ng-template #body>
          <div style="padding: 10px">
            Hi! I'm #body
          </div>
        </ng-template>
        <ng-template #footer>
          <div style="display: flex; align-items: center; background: black; color: white; height: 30px; padding-left: 10px">I'm in the #footer area</div>
        </ng-template>
      </SplitLayoutContainer>
    </as-split-area>
    <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
      <as-split direction="vertical" [disabled]="false" [unit]="'percent'" [gutterSize]="11">
        <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
          <SplitLayoutContainer [body]="bodytwo" headerName="Right Side">
            <ng-template #bodytwo>
              <div style="padding: 10px">
                How are you?
              </div>
            </ng-template>
          </SplitLayoutContainer>
        </as-split-area>
        <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
          <SplitLayoutContainer [body]="bodythree" headerName="Bottom Right Side">
            <ng-template #bodythree>
              <div style="padding: 10px">
                I'm good, thanks!
              </div>
            </ng-template>
          </SplitLayoutContainer>
        </as-split-area>
      </as-split>
    </as-split-area>
  </as-split>
</div>`;
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
    this.ɵfac = function SplitLayoutView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SplitLayoutView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SplitLayoutView,
      selectors: [["SplitLayoutView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 102,
      vars: 30,
      consts: [["header", ""], ["toolbar", ""], ["body", ""], ["footer", ""], ["bodytwo", ""], ["bodythree", ""], [1, "documentParent"], [1, "document"], [1, "description"], ["href", "https://angular-split.github.io/", "target", "_new"], ["src", "./assets/screenshots/splitlayout.jpg", 1, "screenshot", 2, "width", "1000px"], ["header", "Result"], [2, "width", "100%", "height", "600px", "border", "2px solid green", "position", "relative"], ["direction", "horizontal", 3, "disabled", "unit", "gutterSize"], [3, "size", "maximizable", "collapsible"], ["headerName", "Left Side", 3, "header", "body", "toolbar", "footer"], ["direction", "vertical", 3, "disabled", "unit", "gutterSize"], ["headerName", "Right Side", 3, "body"], ["headerName", "Bottom Right Side", 3, "body"], ["header", "Code"], ["language", "html", 3, "highlight"], ["language", "ts", 3, "highlight"], ["href", "", "target", "_new"], ["href", "https://angular-split.github.io/documentation", "target", "_new"], ["language", "scss", 3, "highlight"], ["href", "./assets/layout_images.zip"], [2, "display", "flex", "align-items", "center", "background", "black", "color", "white", "height", "30px", "padding-left", "10px"], [2, "padding", "10px"]],
      template: function SplitLayoutView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Split Layout View");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The split layout control is a further extended version of the \"Angular Split\" control to cover needs that the original doesn't have. This original control can be found ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "It allows you to have any number of nested, resizable sections on a page, that can also be minimized and maximized (full screen overlay).:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Here is a rather crude example of how the split layout works. The main view is split horizontally in 2, and the right side of that is split vertically in 2.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Each section is also using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SplitLayoutContainer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " as a content holder, which has support for header, body, toolbar, and footer.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p-tabView")(22, "p-tabPanel", 11)(23, "div", 12)(24, "as-split", 13)(25, "as-split-area", 14)(26, "SplitLayoutContainer", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SplitLayoutView_ng_template_27_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(29, SplitLayoutView_ng_template_29_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(31, SplitLayoutView_ng_template_31_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(33, SplitLayoutView_ng_template_33_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "as-split-area", 14)(36, "as-split", 16)(37, "as-split-area", 14)(38, "SplitLayoutContainer", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SplitLayoutView_ng_template_39_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "as-split-area", 14)(42, "SplitLayoutContainer", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SplitLayoutView_ng_template_43_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p-tabPanel", 19)(46, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "code", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Setup");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "In your imports section of your module, define the usage of the SplitLayoutModule:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "code", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Now you can use it. In your HTML. The root tags look like this.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "code", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "For property options, please see the full documentation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ". Any properties that are not part of the existing control will be documented in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "After defining the root, inside you define the split sections with:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "code", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Defining the maximized view location");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "The maximized view location is up to you. The ID for the tag by default is ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "maximizedArea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " and is usually defined like this:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "code", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "To override the tag name, you can set it with");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "[maximizedDivId]=\"'thisNameIsBetter'\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "as-split");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " tag as a property.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Defining the CSS for the images");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "To override/setup the default image path and CSS, use the following:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "code", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "To download the images used in this demo, including a few extra in different colors, you can grab them ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const header_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
          const toolbar_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
          const body_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
          const footer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
          const bodytwo_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
          const bodythree_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("unit", "percent")("gutterSize", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", "50%")("maximizable", true)("collapsible", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", header_r1)("body", body_r3)("toolbar", toolbar_r2)("footer", footer_r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", "50%")("maximizable", true)("collapsible", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("unit", "percent")("gutterSize", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", "50%")("maximizable", true)("collapsible", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("body", bodytwo_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", "50%")("maximizable", true)("collapsible", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("body", bodythree_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.layoutCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.importCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.rootCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.innerCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.maximizedCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.cssCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight, primeng_tabview__WEBPACK_IMPORTED_MODULE_3__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_3__.TabPanel, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_4__.SplitComponent, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_4__.SplitAreaDirective, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_4__.SplitLayoutContainer],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 34121:
/*!********************************************************!*\
  !*** ./src/app/usecases/controls/views/ToolbarView.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarView: () => (/* binding */ ToolbarView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @six-group/base-angular-framework/controls */ 89298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ 57725);






const _c0 = ["tb"];
const _c1 = ["tbTwo"];
function ToolbarView_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 18)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 19);
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
function ToolbarView_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "span", 18)(8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td")(14, "span", 18)(15, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td")(18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r2.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", item_r2.event);
  }
}
class ToolbarView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor(cd) {
    super();
    this.cd = cd;
    this.toolBar = undefined;
    this.toolBarTwo = undefined;
    this.importCode = `import {CompactToolbarModule, Toolbar} from "@six-group/base-angular-framework/controls";`;
    this.menuCode = `let opts = [
  ['btnTcolsSave', 'obj', 'Save Column Layout', 'fa-save'],
  ['btnTcolsRestore', 'obj', 'Load Column Layout', 'fa-restore'],
  ['btnTcolsSep', 'sep', null, null],
  ['btnTcolsClear', 'obj', 'Clear Saved Column Layout', 'fa-clear'],
  ['btnTcolsSep', 'sep', null, null],
  ['btnTcolsReset', 'obj', 'Reset Column Layout', 'fa-reset'],
];
toolbar.addButtonSelect("tableColumns", "Table Column Options", 'fa-gear', 'fa-gear', opts);

toolbar.onClick.subscribe((id) => {
    switch (id) {
      case 'btnTcolsSave':

...
`;
    this.toolbarData = [{
      name: "Add basic button",
      method: "addButton(...)",
      description: "A single state button",
      event: "onClick"
    }, {
      name: "Add select button",
      method: "addButtonSelect(...)",
      description: "A button that can have a menu",
      event: "onClick"
    }, {
      name: "Add toggle button",
      method: "addButtonSelect(...)",
      description: "A two state button that is either selected or not",
      event: "onStateChanged"
    }, {
      name: "Add combo box/dropdown control",
      method: "addCombo(...)",
      description: "A dropdown that contains items",
      event: "onSelectionChanged"
    }, {
      name: "Add a vertical separator",
      method: "addSeparator()",
      description: "A vertical separator that looks like a line",
      event: "n/a"
    }, {
      name: "Add a label",
      method: "addLabel(...)",
      description: "A label with text in it",
      event: "n/a"
    }, {
      name: "Add a spacer",
      method: "addSpacer(...)",
      description: "A spacer that pushes everything to the right that is created after it",
      event: "n/a"
    }, {
      name: "Add input",
      method: "addInput(...)",
      description: "A text input field",
      event: "onEnterPressed"
    }, {
      name: "Add number only input",
      method: "addNumberOnlyInput(...)",
      description: "A text input field that only allows numbers",
      event: "onEnterPressed"
    }, {
      name: "Add many",
      method: "addMany(...)",
      description: "Adds many buttons at once",
      event: "onEnterPressed"
    }, {
      name: "Set toggle state",
      method: "setToggleState(...)",
      description: "Sets the toggle state on a button",
      event: "onStateChanged"
    }, {
      name: "Checks toggle state",
      method: "isToggled(...)",
      description: "Returns the toggle state of a toggle button",
      event: "n/a"
    }, {
      name: "Gets a button",
      method: "getButton(...)",
      description: "Returns an already created button",
      event: "n/a"
    }, {
      name: "Gets a combo",
      method: "getCombo(...)",
      description: "Returns an already created combo",
      event: "n/a"
    }, {
      name: "Sets label text",
      method: "setLabelText(...)",
      description: "Changes label text on an already created label",
      event: "n/a"
    }, {
      name: "Clears combo items",
      method: "clearComboItems(...)",
      description: "Clears out all combo items on an already created combo",
      event: "n/a"
    }, {
      name: "Checks if an item is enabled",
      method: "isEnabled(...)",
      description: "Returns enabled state of a toolbar item",
      event: "n/a"
    }, {
      name: "Gets input value",
      method: "getInputValue(...)",
      description: "Returns text in an input field",
      event: "n/a"
    }, {
      name: "Disables all items",
      method: "disableAll(...)",
      description: "Disables every item in the toolbar",
      event: "n/a"
    }, {
      name: "Enables all items",
      method: "enableAll(...)",
      description: "Enables every item in the toolbar",
      event: "n/a"
    }, {
      name: "Disables one item",
      method: "disableItem(...)",
      description: "Disables one item in the toolbar",
      event: "n/a"
    }, {
      name: "Enables one item",
      method: "enableItem(...)",
      description: "Enables one item in the toolbar",
      event: "n/a"
    }, {
      name: "Disables many items",
      method: "disableItems(...)",
      description: "Disables many item in the toolbar",
      event: "n/a"
    }, {
      name: "Enables many items",
      method: "enableItems(...)",
      description: "Enables many item in the toolbar",
      event: "n/a"
    }, {
      name: "Hide popup menus",
      method: "hideAnyActiveMenuPopup()",
      description: "Hides any open popup menu",
      event: "n/a"
    }];
    this.eventData = [{
      name: "Button Clicks",
      example: "onClick.subscribe((id) => {",
      description: "Fires when a user clicks a button"
    }, {
      name: "Enter pressed",
      example: "onEnterPressed((id) => {",
      description: "When enter is pressed in a text field"
    }, {
      name: "Menu Selection",
      example: "onSelectionChanged((id) => {",
      description: "When a menu item is selected"
    }, {
      name: "State Change",
      example: "onStateChange((id) => {",
      description: "When a toggle button changes state\t"
    }];
    this.toolbarInitCodeTwo = `<Toolbar [id]="getGridId() + 'GridToolbar'" #tb></Toolbar>`;
    this.toolbarInitCodeThree = `@ViewChild('tb') toolBar: Toolbar | undefined = undefined;
private tb?: ToolbarHelper;`;
    this.toolbarInitCode = `let toolbarSettings = new ToolbarSettings();
toolbarSettings.treatImagesAsWebFonts = true;
toolbarSettings.subMenuImage = "pi pi-arrow-right";
toolbarSettings.enablePopupOverflow = true;
toolbarSettings.useBootstrapTooltips = false;
toolbarSettings.useTippyTooltips = true;
toolbarSettings.webFontPrepend = "";
toolbarSettings.defaultToolbarHeight = 34;
Toolbar.GLOBAL_TOOLBAR_SETTINGS = toolbarSettings;`;
    this.tippyCode = `"tippy.js": "6.3.7",`;
    this.tippyCodeTwo = `"styles": [
  "node_modules/tippy.js/dist/tippy.css",
  "node_modules/tippy.js/themes/light-border.css",
  ...
  `;
    this.toolbarOutput = "";
    _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.Toolbar.GLOBAL_TOOLBAR_SETTINGS = {
      treatImagesAsWebFonts: true,
      getOverflowCss() {
        return "overflow";
      },
      defaultToolbarHeight: 34,
      enablePopupOverflow: true,
      useBootstrapTooltips: false,
      useTippyTooltips: true,
      webFontPrepend: "",
      subMenuImage: "pi pi-arrow-right"
    };
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    try {
      this.initToolbar();
      this.initToolbarTwo();
    } catch (err) {
      console.error(err);
    }
  }
  initToolbar() {
    this.tb = new _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.ToolbarHelper(this.toolBar);
    this.tb.addButton("one", "Test Button", "pi pi-bolt", "pi pi-bolt");
    this.tb.addButtonTwoState("two", "Test Button Two", "pi pi-android", "pi pi-android");
    this.tb.addSeparator();
    this.tb.addInput("three", 100, "Hi! I'm a text box");
    this.tb.addLabel("four", "I'm a label");
    this.tb.addSeparator();
    this.tb.addCombo("five", ["one", "two", "three"], null, value => value, value => {}, 100);
    this.tb.addSeparator();
    this.toolBar.addButtonSelect("six", "Test 123", "pi pi-cloud", "pi pi-cloud", [["subItemOne", _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.Toolbar.MENU_TYPE_OBJECT, "I am submenu one", "pi pi-chart-scatter"], ["subSep", _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.Toolbar.MENU_TYPE_SEPARATOR, null, null], ["subItemTwo", _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.Toolbar.MENU_TYPE_OBJECT, "I am submenu two", "pi pi-chart-pie"]]);
    this.toolBar.onClick.subscribe(id => {
      this.toolbarOutput = "Button " + id + " Clicked";
      this.cd.markForCheck();
    });
    this.toolBar.onEnterPressed.subscribe(event => {
      this.toolbarOutput = event.id + " - Text changed: " + event.enteredText;
      this.cd.markForCheck();
    });
    this.toolBar.onSelectionChanged.subscribe(event => {
      this.toolbarOutput = "Selection changed: " + event;
      this.cd.markForCheck();
    });
    this.toolBar.onStateChanged.subscribe(event => {
      this.toolbarOutput = "State changed: " + event + ", toggled: " + this.toolBar.isToggled(event);
      this.cd.markForCheck();
    });
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
  initToolbarTwo() {
    this.tbTwo = new _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.ToolbarHelper(this.toolBarTwo);
    this.tbTwo.addButton("one", "Test Button", "pi pi-bolt", "pi pi-bolt");
    this.tbTwo.addButtonTwoState("two", "Test Button Two", "pi pi-android", "pi pi-android");
    this.tbTwo.addSeparator();
    this.tbTwo.addInput("three", 100, "Hi! I'm a text box");
    this.tbTwo.addSeparator();
    this.tbTwo.addLabel("four", "I'm a label");
    this.tbTwo.addSeparator();
    this.tbTwo.addCombo("five", ["one", "two", "three"], null, value => value, value => {}, 100);
    this.tbTwo.addSeparator();
    this.toolBarTwo.addButtonSelect("six", "Test 123", "pi pi-cloud", "pi pi-cloud", [["sub1", "obj", "I am submenu one", "pi pi-chart-scatter"], ["sub2", "sep", null, null], ["sub3", "obj", "I am submenu two", "pi pi-chart-pie"]]);
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function ToolbarView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarView,
      selectors: [["ToolbarView"]],
      viewQuery: function ToolbarView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolBarTwo = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 172,
      vars: 12,
      consts: [["tb", ""], ["tbTwo", ""], [1, "documentParent"], [1, "document"], [1, "description"], ["src", "./assets/screenshots/toolbar.png", 1, "screenshot"], ["language", "ts", 3, "highlight"], ["id", "demoToolbar"], [2, "max-width", "130px", "height", "60px"], ["id", "demoToolbar2"], ["href", "https://gitlab.six-group.net/six/angbase/base/-/blob/main/src/app/components/controls/src/toolbar/ToolbarSettings.ts", "target", "_new"], ["language", "html", 3, "highlight"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["href", "https://atomiks.github.io/tippyjs/", "target", "_new"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], [1, "doc-option-type"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function ToolbarView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " control mimics how fat client toolbars look and function. It comes with many different button and input types and hooks together with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " context menu if used together with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ContextMenuHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ", where you only need to enable/disable toolbar buttons for the same menu actions to be enabled/disabled in the context menu at the same time.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Setup");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " control is contained in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CompactToolbarModule");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ". It was named as such to not cause conflicts with all the other existing toolbar modules that sometimes exist in 3rd party libraries. Import it into your module as follows: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "Toolbar", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Overflow Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "If the toolbar runs out of horizontal space, it will either show a scrollbar (if you've set ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "toolbarSettings.enablePopupOverflow = false");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "), or a popup icon on the far right will appear (if you've set ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "toolbarSettings.enablePopupOverflow = true");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ") showing the items that do not fit in the toolbar.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "Toolbar", 9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ToolbarSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "To configure the general properties of the toolbar, you will need to set up a ToolbarSettings class object that holds all your settings. It's suggested to put this somewhere easily accessible in a Global property somewhere in your application.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Here's an example setup:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "All options can be found in the API ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", each one is documented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Due to the complexity of a toolbar, you will not be setting it up in pure HTML, but rather will reference it from your HTML for setup in code. Here is an example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "code", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Please note that the toolbar must have an ID set on it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "The toolbar is then imported with a ViewChild so that it can be configured. We also create a reference to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "ToolbarHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " in this example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Event Listeners");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "There are multiple event listeners available.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table", 12)(78, "thead")(79, "tr")(80, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "th")(87, "th")(88, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ToolbarView_tr_90_Template, 16, 3, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Creating and Accessing Toolbar Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Here is a basic list of available items and methods that can be used to add and manipulate items on the toolbar. For full API please see the API documentation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 12)(98, "thead")(99, "tr")(100, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " method");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " related event");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "th")(109, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ToolbarView_tr_111_Template, 19, 4, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Submenus");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Submenus are passed in as a list of items for the controls that allow menus.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Real Images or Web Fonts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "As shown at the top, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "toolbarSettings.treatImagesAsWebFonts = true;");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " tells the toolbar that every ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "image");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " passed to it via parameters will be treated as a web font. If instead you set it to false, you define the base path to where your toolbar images are via ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "toolbarSettings.imagePath = \"assets/images/toolbar/\";");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " and then pass in images in the parameters relative to that path, for example ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "someMethod(..., ..., \"image_enabled.png\", \"image_disabled.png)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "You can also set up ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "webFontPrepend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " to include any css classes that every web font should have in front, for example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Tippy Tooltips");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " controls supports tooltips using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "TippyJS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, ". To use them you need to add Tippy as a dependency in your ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "package.json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Ensure ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "angular.json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " has the scripts set up for Tippy:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Then enable Tippy tooltips in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "ToolbarSettings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.toolbarInitCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Result: ", ctx.toolbarOutput, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.toolbarInitCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.toolbarInitCodeTwo);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.toolbarInitCodeThree);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eventData);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolbarData);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.menuCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "toolbarSettings.webFontPrepend = fas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.tippyCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.tippyCodeTwo);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", "toolbarSettings.useTippyTooltips = true;");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.Highlight, _six_group_base_angular_framework_controls__WEBPACK_IMPORTED_MODULE_2__.Toolbar],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_usecases_controls_controls_module_ts.cb081ddfc774b704.js.map