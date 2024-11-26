"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["default-src_app_usecases_grid_grid_module_ts"],{

/***/ 2386:
/*!**********************************************!*\
  !*** ./src/app/usecases/grid/grid.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestGridModule: () => (/* binding */ TestGridModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _grid_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.routing */ 47358);
/* harmony import */ var _views_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/GridView */ 50996);
/* harmony import */ var _model_GridUsecaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/GridUsecaseModel */ 19492);
/* harmony import */ var _grids_BasicGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grids/BasicGrid */ 32160);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);









class TestGridModule {
  static {
    this.ɵfac = function TestGridModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TestGridModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: TestGridModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_model_GridUsecaseModel__WEBPACK_IMPORTED_MODULE_2__.GridUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _grid_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TestGridModule, {
    declarations: [
    // views
    _views_GridView__WEBPACK_IMPORTED_MODULE_1__.GridView, _grids_BasicGrid__WEBPACK_IMPORTED_MODULE_3__.BasicGrid],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridModule],
    exports: [_grids_BasicGrid__WEBPACK_IMPORTED_MODULE_3__.BasicGrid]
  });
})();

/***/ }),

/***/ 47358:
/*!***********************************************!*\
  !*** ./src/app/usecases/grid/grid.routing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_GridView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/GridView */ 50996);


const routes = [{
  path: '',
  component: _views_GridView__WEBPACK_IMPORTED_MODULE_0__.GridView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes);

/***/ }),

/***/ 32160:
/*!**************************************************!*\
  !*** ./src/app/usecases/grid/grids/BasicGrid.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicGrid: () => (/* binding */ BasicGrid)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_ag_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/ag-grid */ 32981);
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ 1937);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
/* harmony import */ var _ag_grid_enterprise_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ag-grid-enterprise/clipboard */ 23553);
/* harmony import */ var _ag_grid_enterprise_column_tool_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ag-grid-enterprise/column-tool-panel */ 48855);
/* harmony import */ var _ag_grid_enterprise_excel_export__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ag-grid-enterprise/excel-export */ 78499);
/* harmony import */ var _ag_grid_enterprise_filter_tool_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ag-grid-enterprise/filter-tool-panel */ 54887);
/* harmony import */ var _ag_grid_enterprise_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ag-grid-enterprise/menu */ 41350);
/* harmony import */ var _ag_grid_enterprise_range_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ag-grid-enterprise/range-selection */ 91921);
/* harmony import */ var _ag_grid_enterprise_set_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ag-grid-enterprise/set-filter */ 38072);
/* harmony import */ var _ag_grid_enterprise_side_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ag-grid-enterprise/side-bar */ 32466);
/* harmony import */ var _ag_grid_enterprise_status_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ag-grid-enterprise/status-bar */ 98589);
/* harmony import */ var _ag_grid_enterprise_master_detail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ag-grid-enterprise/master-detail */ 11856);
/* harmony import */ var _ag_grid_enterprise_rich_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ag-grid-enterprise/rich-select */ 30616);
/* harmony import */ var _six_group_base_angular_framework_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/utils */ 73035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);


















const _c0 = ["grid"];
class BasicGrid extends _six_group_base_angular_framework_ag_grid__WEBPACK_IMPORTED_MODULE_0__.BaseGrid {
  constructor(webFont, cd) {
    super();
    this.cd = cd;
    this.gridSettings = {
      useFlatPickrDatePicker: true,
      animateGridRows: true,
      // animate rows on changes
      highlightSearchResultsText: true,
      // Use inline search
      // cssClassStringSearchMatchedCell: "stringSearchMatchedCell", // CSS Class for inline search results
      displayDateFormat: _six_group_base_angular_framework_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.MM_DD_YYYY // set a custom date format
    };
    this.modules = [_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_2__.ClientSideRowModelModule, _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.EnterpriseCoreModule, _ag_grid_enterprise_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardModule, _ag_grid_enterprise_column_tool_panel__WEBPACK_IMPORTED_MODULE_5__.ColumnsToolPanelModule, _ag_grid_enterprise_excel_export__WEBPACK_IMPORTED_MODULE_6__.ExcelExportModule, _ag_grid_enterprise_filter_tool_panel__WEBPACK_IMPORTED_MODULE_7__.FiltersToolPanelModule, _ag_grid_enterprise_menu__WEBPACK_IMPORTED_MODULE_8__.MenuModule, _ag_grid_enterprise_range_selection__WEBPACK_IMPORTED_MODULE_9__.RangeSelectionModule, _ag_grid_enterprise_set_filter__WEBPACK_IMPORTED_MODULE_10__.SetFilterModule, _ag_grid_enterprise_side_bar__WEBPACK_IMPORTED_MODULE_11__.SideBarModule, _ag_grid_enterprise_status_bar__WEBPACK_IMPORTED_MODULE_12__.StatusBarModule, _ag_grid_enterprise_master_detail__WEBPACK_IMPORTED_MODULE_13__.MasterDetailModule, _ag_grid_enterprise_rich_select__WEBPACK_IMPORTED_MODULE_14__.RichSelectModule];
    this.gridOptions = {
      rowSelection: {
        mode: 'singleRow',
        checkboxes: false
      },
      getRowId: data => data.data.id,
      onGridReady: () => this.initGrid()
    };
    this.colDefs = [];
    this.createColumns();
  }
  ngOnInit() {}
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.cd.markForCheck();
  }
  initGrid() {
    this.grid?.api?.setGridOption('rowData', [{
      id: "1",
      name: "Testing 123",
      date: new Date()
    }]);
  }
  createColumns() {
    let ch = new _six_group_base_angular_framework_ag_grid__WEBPACK_IMPORTED_MODULE_0__.ColumnHelper(this.getGridName(), this.gridSettings);
    ch.addColumn("Name", "name", 200).addColumn("Date", "date", 200, _six_group_base_angular_framework_ag_grid__WEBPACK_IMPORTED_MODULE_0__.ColumnHelper.DATE_FILTER);
    ch.addCellRenderer("date", params => {
      return _six_group_base_angular_framework_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.convert(params.data.date, _six_group_base_angular_framework_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.MM_DD_YYYY);
    });
    ch.getAllColumnIds().forEach(def => {
      ch.addCellClassRule(def, "stringSearchMatchedCell", params => _six_group_base_angular_framework_ag_grid__WEBPACK_IMPORTED_MODULE_0__.InlineSearchableGridStore.hookCellCssRule(params, this.getGridId()));
    });
    this.colDefs = ch.getColumns();
  }
  doRefresh() {}
  getGridName() {
    return "agTestGrid";
  }
  hookObservables() {}
  nodeSelectedFromRightClick(node) {}
  selectionChanged($event) {}
  cellClicked($event) {}
  getGrid() {
    return this.grid;
  }
  getGridSettings() {
    return this.gridSettings;
  }
  static {
    this.ɵfac = function BasicGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BasicGrid)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"]('WEB_FONTS'), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: BasicGrid,
      selectors: [["BasicGrid"]],
      viewQuery: function BasicGrid_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 4,
      consts: [["grid", ""], [2, "width", "1000px", "height", "200px"], [1, "ag-theme-alpine-dark", 2, "width", "100%", "height", "100%", 3, "selectionChanged", "cellClicked", "id", "gridOptions", "modules", "columnDefs"]],
      template: function BasicGrid_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 1)(1, "InlineSearchableGrid")(2, "ag-grid-angular", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectionChanged", function BasicGrid_Template_ag_grid_angular_selectionChanged_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.selectionChanged($event));
          })("cellClicked", function BasicGrid_Template_ag_grid_angular_cellClicked_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.cellClicked($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx.getGridId())("gridOptions", ctx.gridOptions)("modules", ctx.modules)("columnDefs", ctx.colDefs);
        }
      },
      dependencies: [_six_group_base_angular_framework_ag_grid__WEBPACK_IMPORTED_MODULE_0__.InlineSearchableGrid, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_16__.AgGridAngular],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 19492:
/*!*********************************************************!*\
  !*** ./src/app/usecases/grid/model/GridUsecaseModel.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridUsecaseModel: () => (/* binding */ GridUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class GridUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
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
    this.ɵfac = function GridUsecaseModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GridUsecaseModel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHelper));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GridUsecaseModel,
      factory: GridUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 50996:
/*!*************************************************!*\
  !*** ./src/app/usecases/grid/views/GridView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridView: () => (/* binding */ GridView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _grids_BasicGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grids/BasicGrid */ 32160);



class GridView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseView {
  constructor() {
    super();
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
    this.ɵfac = function GridView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GridView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: GridView,
      selectors: [["GridView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 0,
      template: function GridView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Grid features - Test.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ul")(3, "BasicGrid");
        }
      },
      dependencies: [_grids_BasicGrid__WEBPACK_IMPORTED_MODULE_0__.BasicGrid],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1937:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ag-grid-community/client-side-row-model/dist/package/main.esm.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientSideRowModelModule: () => (/* binding */ ClientSideRowModelModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
// community-modules/client-side-row-model/src/clientSideRowModelModule.ts



// community-modules/client-side-row-model/src/clientSideRowModel/clientSideRowModel.ts


// community-modules/client-side-row-model/src/clientSideRowModel/clientSideNodeManager.ts

var ROOT_NODE_ID = "ROOT_NODE_ID";
var TOP_LEVEL = 0;
var ClientSideNodeManager = class {
  constructor(rootNode, gos, eventService, funcColsService, selectionService, beans) {
    this.nextId = 0;
    // has row data actually been set
    this.rowCountReady = false;
    // when user is provide the id's, we also keep a map of ids to row nodes for convenience
    this.allNodesMap = {};
    this.rootNode = rootNode;
    this.gos = gos;
    this.eventService = eventService;
    this.funcColsService = funcColsService;
    this.beans = beans;
    this.selectionService = selectionService;
    this.rootNode.group = true;
    this.rootNode.level = -1;
    this.rootNode.id = ROOT_NODE_ID;
    this.rootNode.allLeafChildren = [];
    this.rootNode.childrenAfterGroup = [];
    this.rootNode.childrenAfterSort = [];
    this.rootNode.childrenAfterAggFilter = [];
    this.rootNode.childrenAfterFilter = [];
  }
  getCopyOfNodesMap() {
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._cloneObject)(this.allNodesMap);
  }
  getRowNode(id) {
    return this.allNodesMap[id];
  }
  setRowData(rowData) {
    if (typeof rowData === "string") {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("rowData must be an array.");
      return;
    }
    this.rowCountReady = true;
    this.dispatchRowDataUpdateStartedEvent(rowData);
    const rootNode = this.rootNode;
    const sibling = this.rootNode.sibling;
    rootNode.childrenAfterFilter = null;
    rootNode.childrenAfterGroup = null;
    rootNode.childrenAfterAggFilter = null;
    rootNode.childrenAfterSort = null;
    rootNode.childrenMapped = null;
    rootNode.updateHasChildren();
    this.nextId = 0;
    this.allNodesMap = {};
    if (rowData) {
      rootNode.allLeafChildren = rowData.map((dataItem, index) => this.createNode(dataItem, this.rootNode, TOP_LEVEL, index));
    } else {
      rootNode.allLeafChildren = [];
      rootNode.childrenAfterGroup = [];
    }
    if (sibling) {
      sibling.childrenAfterFilter = rootNode.childrenAfterFilter;
      sibling.childrenAfterGroup = rootNode.childrenAfterGroup;
      sibling.childrenAfterAggFilter = rootNode.childrenAfterAggFilter;
      sibling.childrenAfterSort = rootNode.childrenAfterSort;
      sibling.childrenMapped = rootNode.childrenMapped;
      sibling.allLeafChildren = rootNode.allLeafChildren;
    }
  }
  updateRowData(rowDataTran) {
    this.rowCountReady = true;
    this.dispatchRowDataUpdateStartedEvent(rowDataTran.add);
    const updateRowDataResult = {
      rowNodeTransaction: {
        remove: [],
        update: [],
        add: []
      },
      rowsInserted: false
    };
    const nodesToUnselect = [];
    this.executeRemove(rowDataTran, updateRowDataResult, nodesToUnselect);
    this.executeUpdate(rowDataTran, updateRowDataResult, nodesToUnselect);
    this.executeAdd(rowDataTran, updateRowDataResult);
    this.updateSelection(nodesToUnselect, "rowDataChanged");
    return updateRowDataResult;
  }
  /**
   * Used by the immutable service, after updateRowData, after updating with a generated transaction to
   * apply the order as specified by the the new data. We use sourceRowIndex to determine the order of the rows.
   * Time complexity is O(n) where n is the number of rows/rowData
   * @returns true if the order changed, otherwise false
   */
  updateRowOrderFromRowData(rowData) {
    const rows = this.rootNode.allLeafChildren;
    const rowsLength = rows?.length ?? 0;
    const rowsOutOfOrder = /* @__PURE__ */new Map();
    let firstIndexOutOfOrder = -1;
    let lastIndexOutOfOrder = -1;
    for (let i = 0; i < rowsLength; ++i) {
      const row = rows[i];
      const data = row.data;
      if (data !== rowData[i]) {
        if (lastIndexOutOfOrder < 0) {
          firstIndexOutOfOrder = i;
        }
        lastIndexOutOfOrder = i;
        rowsOutOfOrder.set(data, row);
      }
    }
    if (firstIndexOutOfOrder < 0) {
      return false;
    }
    for (let i = firstIndexOutOfOrder; i <= lastIndexOutOfOrder; ++i) {
      const row = rowsOutOfOrder.get(rowData[i]);
      if (row !== void 0) {
        rows[i] = row;
        row.sourceRowIndex = i;
      }
    }
    return true;
  }
  isRowCountReady() {
    return this.rowCountReady;
  }
  dispatchRowDataUpdateStartedEvent(rowData) {
    this.eventService.dispatchEvent({
      type: "rowDataUpdateStarted",
      firstRowData: rowData?.length ? rowData[0] : null
    });
  }
  updateSelection(nodesToUnselect, source) {
    const selectionChanged = nodesToUnselect.length > 0;
    if (selectionChanged) {
      this.selectionService.setNodesSelected({
        newValue: false,
        nodes: nodesToUnselect,
        suppressFinishActions: true,
        source
      });
    }
    this.selectionService.updateGroupsFromChildrenSelections(source);
    if (selectionChanged) {
      this.eventService.dispatchEvent({
        type: "selectionChanged",
        source
      });
    }
  }
  executeAdd(rowDataTran, result) {
    const add = rowDataTran.add;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(add)) {
      return;
    }
    const allLeafChildren = this.rootNode.allLeafChildren;
    let addIndex = allLeafChildren.length;
    if (typeof rowDataTran.addIndex === "number") {
      addIndex = this.sanitizeAddIndex(rowDataTran.addIndex);
      if (addIndex > 0) {
        const isTreeData = this.gos.get("treeData");
        if (isTreeData) {
          for (let i = 0; i < allLeafChildren.length; i++) {
            const node = allLeafChildren[i];
            if (node?.rowIndex == addIndex - 1) {
              addIndex = i + 1;
              break;
            }
          }
        }
      }
    }
    const newNodes = add.map((item, index) => this.createNode(item, this.rootNode, TOP_LEVEL, addIndex + index));
    if (addIndex < allLeafChildren.length) {
      const nodesBeforeIndex = allLeafChildren.slice(0, addIndex);
      const nodesAfterIndex = allLeafChildren.slice(addIndex, allLeafChildren.length);
      const nodesAfterIndexFirstIndex = nodesBeforeIndex.length + newNodes.length;
      for (let index = 0, length = nodesAfterIndex.length; index < length; ++index) {
        nodesAfterIndex[index].sourceRowIndex = nodesAfterIndexFirstIndex + index;
      }
      this.rootNode.allLeafChildren = [...nodesBeforeIndex, ...newNodes, ...nodesAfterIndex];
      result.rowsInserted = true;
    } else {
      this.rootNode.allLeafChildren = allLeafChildren.concat(newNodes);
    }
    const sibling = this.rootNode.sibling;
    if (sibling) {
      sibling.allLeafChildren = allLeafChildren;
    }
    result.rowNodeTransaction.add = newNodes;
  }
  sanitizeAddIndex(addIndex) {
    const allChildrenCount = this.rootNode.allLeafChildren?.length ?? 0;
    if (addIndex < 0 || addIndex >= allChildrenCount || Number.isNaN(addIndex)) {
      return allChildrenCount;
    }
    return Math.ceil(addIndex);
  }
  executeRemove(rowDataTran, {
    rowNodeTransaction
  }, nodesToUnselect) {
    const {
      remove
    } = rowDataTran;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(remove)) {
      return;
    }
    const rowIdsRemoved = {};
    remove.forEach(item => {
      const rowNode = this.lookupRowNode(item);
      if (!rowNode) {
        return;
      }
      if (rowNode.isSelected()) {
        nodesToUnselect.push(rowNode);
      }
      rowNode.clearRowTopAndRowIndex();
      rowIdsRemoved[rowNode.id] = true;
      delete this.allNodesMap[rowNode.id];
      rowNodeTransaction.remove.push(rowNode);
    });
    this.rootNode.allLeafChildren = this.rootNode.allLeafChildren?.filter(rowNode => !rowIdsRemoved[rowNode.id]) ?? null;
    this.rootNode.allLeafChildren?.forEach((node, idx) => {
      node.sourceRowIndex = idx;
    });
    const sibling = this.rootNode.sibling;
    if (sibling) {
      sibling.allLeafChildren = this.rootNode.allLeafChildren;
    }
  }
  executeUpdate(rowDataTran, {
    rowNodeTransaction
  }, nodesToUnselect) {
    const {
      update
    } = rowDataTran;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(update)) {
      return;
    }
    update.forEach(item => {
      const rowNode = this.lookupRowNode(item);
      if (!rowNode) {
        return;
      }
      rowNode.updateData(item);
      if (!rowNode.selectable && rowNode.isSelected()) {
        nodesToUnselect.push(rowNode);
      }
      this.setMasterForRow(rowNode, item, TOP_LEVEL, false);
      rowNodeTransaction.update.push(rowNode);
    });
  }
  lookupRowNode(data) {
    const getRowIdFunc = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getRowIdCallback)(this.gos);
    let rowNode;
    if (getRowIdFunc) {
      const id = getRowIdFunc({
        data,
        level: 0
      });
      rowNode = this.allNodesMap[id];
      if (!rowNode) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)(`could not find row id=${id}, data item was not found for this id`);
        return null;
      }
    } else {
      rowNode = this.rootNode.allLeafChildren?.find(node => node.data === data);
      if (!rowNode) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)(`could not find data item as object was not found`, data);
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)(`Consider using getRowId to help the Grid find matching row data`);
        return null;
      }
    }
    return rowNode || null;
  }
  createNode(dataItem, parent, level, sourceRowIndex) {
    const node = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode(this.beans);
    node.sourceRowIndex = sourceRowIndex;
    node.group = false;
    this.setMasterForRow(node, dataItem, level, true);
    if (parent) {
      node.parent = parent;
    }
    node.level = level;
    node.setDataAndId(dataItem, this.nextId.toString());
    if (this.allNodesMap[node.id]) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`duplicate node id '${node.id}' detected from getRowId callback, this could cause issues in your grid.`);
    }
    this.allNodesMap[node.id] = node;
    this.nextId++;
    return node;
  }
  setMasterForRow(rowNode, data, level, setExpanded) {
    const isTreeData = this.gos.get("treeData");
    if (isTreeData) {
      rowNode.setMaster(false);
      if (setExpanded) {
        rowNode.expanded = false;
      }
    } else {
      const masterDetail = this.gos.get("masterDetail");
      if (masterDetail) {
        const isRowMasterFunc = this.gos.get("isRowMaster");
        if (isRowMasterFunc) {
          rowNode.setMaster(isRowMasterFunc(data));
        } else {
          rowNode.setMaster(true);
        }
      } else {
        rowNode.setMaster(false);
      }
      if (setExpanded) {
        const rowGroupColumns = this.funcColsService.getRowGroupColumns();
        const numRowGroupColumns = rowGroupColumns ? rowGroupColumns.length : 0;
        const masterRowLevel = level + numRowGroupColumns;
        rowNode.expanded = rowNode.master ? this.isExpanded(masterRowLevel) : false;
      }
    }
  }
  isExpanded(level) {
    const expandByDefault = this.gos.get("groupDefaultExpanded");
    if (expandByDefault === -1) {
      return true;
    }
    return level < expandByDefault;
  }
};

// community-modules/client-side-row-model/src/clientSideRowModel/clientSideRowModel.ts
var ClientSideRowModel = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "rowModel";
    this.onRowHeightChanged_debounced = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._debounce)(this.onRowHeightChanged.bind(this), 100);
    this.rowsToDisplay = [];
    /** Has the start method been called */
    this.hasStarted = false;
    /** E.g. data has been set into the node manager already */
    this.shouldSkipSettingDataOnStart = false;
    /**
     * This is to prevent refresh model being called when it's already being called.
     * E.g. the group stage can trigger initial state filter model to be applied. This fires onFilterChanged,
     * which then triggers the listener here that calls refresh model again but at the filter stage
     * (which is about to be run by the original call).
     */
    this.isRefreshingModel = false;
    this.rowCountReady = false;
  }
  wireBeans(beans) {
    this.beans = beans;
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
    this.selectionService = beans.selectionService;
    this.valueCache = beans.valueCache;
    this.environment = beans.environment;
    this.filterStage = beans.filterStage;
    this.sortStage = beans.sortStage;
    this.flattenStage = beans.flattenStage;
    this.groupStage = beans.groupStage;
    this.aggregationStage = beans.aggregationStage;
    this.pivotStage = beans.pivotStage;
    this.filterAggregatesStage = beans.filterAggregatesStage;
  }
  postConstruct() {
    const refreshEverythingFunc = this.refreshModel.bind(this, {
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING
    });
    const animate = !this.gos.get("suppressAnimationFrame");
    const refreshEverythingAfterColsChangedFunc = this.refreshModel.bind(this, {
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING,
      // after cols change, row grouping (the first stage) could of changed
      afterColumnsChanged: true,
      keepRenderedRows: true,
      // we want animations cos sorting or filtering could be applied
      animate
    });
    this.addManagedEventListeners({
      newColumnsLoaded: refreshEverythingAfterColsChangedFunc,
      columnRowGroupChanged: refreshEverythingFunc,
      columnValueChanged: this.onValueChanged.bind(this),
      columnPivotChanged: this.refreshModel.bind(this, {
        step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.PIVOT
      }),
      filterChanged: this.onFilterChanged.bind(this),
      sortChanged: this.onSortChanged.bind(this),
      columnPivotModeChanged: refreshEverythingFunc,
      gridStylesChanged: this.onGridStylesChanges.bind(this),
      gridReady: this.onGridReady.bind(this)
    });
    this.addPropertyListeners();
    this.rootNode = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode(this.beans);
    this.nodeManager = new ClientSideNodeManager(this.rootNode, this.gos, this.eventService, this.funcColsService, this.selectionService, this.beans);
  }
  addPropertyListeners() {
    const resetProps = /* @__PURE__ */new Set(["treeData", "masterDetail"]);
    const groupStageRefreshProps = /* @__PURE__ */new Set(["groupDefaultExpanded", "groupAllowUnbalanced", "initialGroupOrderComparator", "groupHideOpenParents", "groupDisplayType"]);
    const filterStageRefreshProps = /* @__PURE__ */new Set(["excludeChildrenWhenTreeDataFiltering"]);
    const pivotStageRefreshProps = /* @__PURE__ */new Set(["removePivotHeaderRowWhenSingleValueColumn", "pivotRowTotals", "pivotColumnGroupTotals", "suppressExpandablePivotGroups"]);
    const aggregateStageRefreshProps = /* @__PURE__ */new Set(["getGroupRowAgg", "alwaysAggregateAtRootLevel", "groupIncludeTotalFooter", "suppressAggFilteredOnly", "grandTotalRow"]);
    const sortStageRefreshProps = /* @__PURE__ */new Set(["postSortRows", "groupDisplayType", "accentedSort"]);
    const filterAggStageRefreshProps = /* @__PURE__ */new Set([]);
    const flattenStageRefreshProps = /* @__PURE__ */new Set(["groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "groupIncludeFooter", "groupTotalRow"]);
    const allProps = [...resetProps, ...groupStageRefreshProps, ...filterStageRefreshProps, ...pivotStageRefreshProps, ...pivotStageRefreshProps, ...aggregateStageRefreshProps, ...sortStageRefreshProps, ...filterAggStageRefreshProps, ...flattenStageRefreshProps];
    this.addManagedPropertyListeners(allProps, params => {
      const properties = params.changeSet?.properties;
      if (!properties) {
        return;
      }
      const arePropertiesImpacted = propSet => properties.some(prop => propSet.has(prop));
      if (arePropertiesImpacted(resetProps)) {
        this.setRowData(this.rootNode.allLeafChildren.map(child => child.data));
        return;
      }
      if (arePropertiesImpacted(groupStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING
        });
        return;
      }
      if (arePropertiesImpacted(filterStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER
        });
        return;
      }
      if (arePropertiesImpacted(pivotStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.PIVOT
        });
        return;
      }
      if (arePropertiesImpacted(aggregateStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.AGGREGATE
        });
        return;
      }
      if (arePropertiesImpacted(sortStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.SORT
        });
        return;
      }
      if (arePropertiesImpacted(filterAggStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER_AGGREGATES
        });
        return;
      }
      if (arePropertiesImpacted(flattenStageRefreshProps)) {
        this.refreshModel({
          step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.MAP
        });
      }
    });
    this.addManagedPropertyListener("rowHeight", () => this.resetRowHeights());
  }
  start() {
    this.hasStarted = true;
    if (this.shouldSkipSettingDataOnStart) {
      this.dispatchUpdateEventsAndRefresh();
    } else {
      this.setInitialData();
    }
  }
  setInitialData() {
    const rowData = this.gos.get("rowData");
    if (rowData) {
      this.shouldSkipSettingDataOnStart = true;
      this.setRowData(rowData);
    }
  }
  ensureRowHeightsValid(startPixel, endPixel, startLimitIndex, endLimitIndex) {
    let atLeastOneChange;
    let res = false;
    do {
      atLeastOneChange = false;
      const rowAtStartPixel = this.getRowIndexAtPixel(startPixel);
      const rowAtEndPixel = this.getRowIndexAtPixel(endPixel);
      const firstRow = Math.max(rowAtStartPixel, startLimitIndex);
      const lastRow = Math.min(rowAtEndPixel, endLimitIndex);
      for (let rowIndex = firstRow; rowIndex <= lastRow; rowIndex++) {
        const rowNode = this.getRow(rowIndex);
        if (rowNode.rowHeightEstimated) {
          const rowHeight = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getRowHeightForNode)(this.gos, rowNode);
          rowNode.setRowHeight(rowHeight.height);
          atLeastOneChange = true;
          res = true;
        }
      }
      if (atLeastOneChange) {
        this.setRowTopAndRowIndex();
      }
    } while (atLeastOneChange);
    return res;
  }
  setRowTopAndRowIndex() {
    const defaultRowHeight = this.environment.getDefaultRowHeight();
    let nextRowTop = 0;
    const displayedRowsMapped = /* @__PURE__ */new Set();
    const allowEstimate = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isDomLayout)(this.gos, "normal");
    for (let i = 0; i < this.rowsToDisplay.length; i++) {
      const rowNode = this.rowsToDisplay[i];
      if (rowNode.id != null) {
        displayedRowsMapped.add(rowNode.id);
      }
      if (rowNode.rowHeight == null) {
        const rowHeight = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getRowHeightForNode)(this.gos, rowNode, allowEstimate, defaultRowHeight);
        rowNode.setRowHeight(rowHeight.height, rowHeight.estimated);
      }
      rowNode.setRowTop(nextRowTop);
      rowNode.setRowIndex(i);
      nextRowTop += rowNode.rowHeight;
    }
    return displayedRowsMapped;
  }
  clearRowTopAndRowIndex(changedPath, displayedRowsMapped) {
    const changedPathActive = changedPath.isActive();
    const clearIfNotDisplayed = rowNode => {
      if (rowNode && rowNode.id != null && !displayedRowsMapped.has(rowNode.id)) {
        rowNode.clearRowTopAndRowIndex();
      }
    };
    const recurse = rowNode => {
      clearIfNotDisplayed(rowNode);
      clearIfNotDisplayed(rowNode.detailNode);
      clearIfNotDisplayed(rowNode.sibling);
      if (rowNode.hasChildren()) {
        if (rowNode.childrenAfterGroup) {
          const isRootNode = rowNode.level == -1;
          const skipChildren = changedPathActive && !isRootNode && !rowNode.expanded;
          if (!skipChildren) {
            rowNode.childrenAfterGroup.forEach(recurse);
          }
        }
      }
    };
    recurse(this.rootNode);
  }
  // returns false if row was moved, otherwise true
  ensureRowsAtPixel(rowNodes, pixel, increment = 0) {
    const indexAtPixelNow = this.getRowIndexAtPixel(pixel);
    const rowNodeAtPixelNow = this.getRow(indexAtPixelNow);
    const animate = !this.gos.get("suppressAnimationFrame");
    if (rowNodeAtPixelNow === rowNodes[0]) {
      return false;
    }
    const allLeafChildren = this.rootNode.allLeafChildren;
    rowNodes.forEach(rowNode => {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._removeFromArray)(allLeafChildren, rowNode);
    });
    rowNodes.forEach((rowNode, idx) => {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._insertIntoArray)(allLeafChildren, rowNode, Math.max(indexAtPixelNow + increment, 0) + idx);
    });
    rowNodes.forEach((rowNode, index) => {
      rowNode.sourceRowIndex = index;
    });
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING,
      keepRenderedRows: true,
      keepEditingRows: true,
      animate,
      rowNodesOrderChanged: true
      // We assume the order changed and we don't need to check if it really did
    });
    return true;
  }
  highlightRowAtPixel(rowNode, pixel) {
    const indexAtPixelNow = pixel != null ? this.getRowIndexAtPixel(pixel) : null;
    const rowNodeAtPixelNow = indexAtPixelNow != null ? this.getRow(indexAtPixelNow) : null;
    if (!rowNodeAtPixelNow || !rowNode || pixel == null) {
      this.clearHighlightedRow();
      return;
    }
    const highlight = this.getHighlightPosition(pixel, rowNodeAtPixelNow);
    const isSamePosition = this.isHighlightingCurrentPosition(rowNode, rowNodeAtPixelNow, highlight);
    const isDifferentNode = this.lastHighlightedRow != null && this.lastHighlightedRow !== rowNodeAtPixelNow;
    if (isSamePosition || isDifferentNode) {
      this.clearHighlightedRow();
      if (isSamePosition) {
        return;
      }
    }
    rowNodeAtPixelNow.setHighlighted(highlight);
    this.lastHighlightedRow = rowNodeAtPixelNow;
  }
  getHighlightPosition(pixel, rowNode) {
    if (!rowNode) {
      const index = this.getRowIndexAtPixel(pixel);
      rowNode = this.getRow(index || 0);
      if (!rowNode) {
        return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowHighlightPosition.Below;
      }
    }
    const {
      rowTop,
      rowHeight
    } = rowNode;
    return pixel - rowTop < rowHeight / 2 ? _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowHighlightPosition.Above : _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowHighlightPosition.Below;
  }
  getLastHighlightedRowNode() {
    return this.lastHighlightedRow;
  }
  isHighlightingCurrentPosition(movingRowNode, hoveredRowNode, highlightPosition) {
    if (movingRowNode === hoveredRowNode) {
      return true;
    }
    const diff = highlightPosition === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowHighlightPosition.Above ? -1 : 1;
    if (this.getRow(hoveredRowNode.rowIndex + diff) === movingRowNode) {
      return true;
    }
    return false;
  }
  clearHighlightedRow() {
    if (this.lastHighlightedRow) {
      this.lastHighlightedRow.setHighlighted(null);
      this.lastHighlightedRow = null;
    }
  }
  isLastRowIndexKnown() {
    return true;
  }
  getRowCount() {
    if (this.rowsToDisplay) {
      return this.rowsToDisplay.length;
    }
    return 0;
  }
  /**
   * Returns the number of rows with level === 1
   */
  getTopLevelRowCount() {
    if (this.rowsToDisplay.length === 0) {
      return 0;
    }
    const showingRootNode = this.rowsToDisplay && this.rowsToDisplay[0] === this.rootNode;
    if (showingRootNode) {
      return 1;
    }
    const filteredChildren = this.rootNode.childrenAfterAggFilter;
    const totalFooterInc = this.rootNode.sibling ? 1 : 0;
    return (filteredChildren ? filteredChildren.length : 0) + totalFooterInc;
  }
  /**
   * Get the row display index by the top level index
   * top level index is the index of rows with level === 1
   */
  getTopLevelRowDisplayedIndex(topLevelIndex) {
    const showingRootNode = this.rowsToDisplay && this.rowsToDisplay[0] === this.rootNode;
    if (showingRootNode) {
      return topLevelIndex;
    }
    let adjustedIndex = topLevelIndex;
    if (this.rowsToDisplay[0].footer) {
      if (topLevelIndex === 0) {
        return 0;
      }
      adjustedIndex -= 1;
    }
    const lastRow = this.rowsToDisplay[this.rowsToDisplay.length - 1];
    const indexOutsideGroupBounds = adjustedIndex >= this.rootNode.childrenAfterSort.length;
    if (lastRow.footer && indexOutsideGroupBounds) {
      return lastRow.rowIndex;
    }
    let rowNode = this.rootNode.childrenAfterSort[adjustedIndex];
    if (this.gos.get("groupHideOpenParents")) {
      while (rowNode.expanded && rowNode.childrenAfterSort && rowNode.childrenAfterSort.length > 0) {
        rowNode = rowNode.childrenAfterSort[0];
      }
    }
    return rowNode.rowIndex;
  }
  getRowBounds(index) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(this.rowsToDisplay)) {
      return null;
    }
    const rowNode = this.rowsToDisplay[index];
    if (rowNode) {
      return {
        rowTop: rowNode.rowTop,
        rowHeight: rowNode.rowHeight
      };
    }
    return null;
  }
  onRowGroupOpened() {
    const animate = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isAnimateRows)(this.gos);
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.MAP,
      keepRenderedRows: true,
      animate
    });
  }
  onFilterChanged(event) {
    if (event.afterDataChange) {
      return;
    }
    const animate = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isAnimateRows)(this.gos);
    const primaryOrQuickFilterChanged = event.columns.length === 0 || event.columns.some(col => col.isPrimary());
    const step = primaryOrQuickFilterChanged ? _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER : _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER_AGGREGATES;
    this.refreshModel({
      step,
      keepRenderedRows: true,
      animate
    });
  }
  onSortChanged() {
    const animate = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isAnimateRows)(this.gos);
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.SORT,
      keepRenderedRows: true,
      animate,
      keepEditingRows: true
    });
  }
  getType() {
    return "clientSide";
  }
  onValueChanged() {
    if (this.columnModel.isPivotActive()) {
      this.refreshModel({
        step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.PIVOT
      });
    } else {
      this.refreshModel({
        step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.AGGREGATE
      });
    }
  }
  createChangePath(rowNodeTransactions) {
    const noTransactions = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(rowNodeTransactions);
    const changedPath = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ChangedPath(false, this.rootNode);
    if (noTransactions) {
      changedPath.setInactive();
    }
    return changedPath;
  }
  isSuppressModelUpdateAfterUpdateTransaction(params) {
    if (!this.gos.get("suppressModelUpdateAfterUpdateTransaction")) {
      return false;
    }
    if (params.rowNodeTransactions == null) {
      return false;
    }
    const transWithAddsOrDeletes = params.rowNodeTransactions.filter(tx => tx.add != null && tx.add.length > 0 || tx.remove != null && tx.remove.length > 0);
    const transactionsContainUpdatesOnly = transWithAddsOrDeletes == null || transWithAddsOrDeletes.length == 0;
    return transactionsContainUpdatesOnly;
  }
  buildRefreshModelParams(step) {
    let paramsStep = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING;
    const stepsMapped = {
      everything: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING,
      group: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING,
      filter: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER,
      map: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.MAP,
      aggregate: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.AGGREGATE,
      filter_aggregates: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER_AGGREGATES,
      sort: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.SORT,
      pivot: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.PIVOT,
      nothing: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.NOTHING
    };
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(step)) {
      paramsStep = stepsMapped[step];
    }
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(paramsStep)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)(`invalid step ${step}, available steps are ${Object.keys(stepsMapped).join(", ")}`);
      return void 0;
    }
    const animate = !this.gos.get("suppressAnimationFrame");
    const modelParams = {
      step: paramsStep,
      keepRenderedRows: true,
      keepEditingRows: true,
      animate
    };
    return modelParams;
  }
  refreshModel(paramsOrStep) {
    if (!this.hasStarted || this.isRefreshingModel || this.columnModel.isChangeEventsDispatching()) {
      return;
    }
    const params = typeof paramsOrStep === "object" && "step" in paramsOrStep ? paramsOrStep : this.buildRefreshModelParams(paramsOrStep);
    if (!params) {
      return;
    }
    if (this.isSuppressModelUpdateAfterUpdateTransaction(params)) {
      return;
    }
    const changedPath = this.createChangePath(params.rowNodeTransactions);
    this.isRefreshingModel = true;
    switch (params.step) {
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING:
        this.doRowGrouping(params.rowNodeTransactions, changedPath, !!params.rowNodesOrderChanged, !!params.afterColumnsChanged);
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER:
        this.doFilter(changedPath);
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.PIVOT:
        this.doPivot(changedPath);
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.AGGREGATE:
        this.doAggregate(changedPath);
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.FILTER_AGGREGATES:
        this.doFilterAggregates(changedPath);
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.SORT:
        this.doSort(params.rowNodeTransactions, changedPath);
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.MAP:
        this.doRowsToDisplay();
    }
    const displayedNodesMapped = this.setRowTopAndRowIndex();
    this.clearRowTopAndRowIndex(changedPath, displayedNodesMapped);
    this.isRefreshingModel = false;
    this.eventService.dispatchEvent({
      type: "modelUpdated",
      animate: params.animate,
      keepRenderedRows: params.keepRenderedRows,
      newData: params.newData,
      newPage: false,
      keepUndoRedoStack: params.keepUndoRedoStack
    });
  }
  isEmpty() {
    const rowsMissing = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(this.rootNode.allLeafChildren) || this.rootNode.allLeafChildren.length === 0;
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(this.rootNode) || rowsMissing || !this.columnModel.isReady();
  }
  isRowsToRender() {
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(this.rowsToDisplay) && this.rowsToDisplay.length > 0;
  }
  getNodesInRangeForSelection(firstInRange, lastInRange) {
    let started = false;
    let finished = false;
    const result = [];
    const groupsSelectChildren = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGroupSelectsDescendants)(this.gos);
    this.forEachNodeAfterFilterAndSort(rowNode => {
      if (finished) {
        return;
      }
      if (started) {
        if (rowNode === lastInRange || rowNode === firstInRange) {
          finished = true;
          if (rowNode.group && groupsSelectChildren) {
            result.push(...rowNode.allLeafChildren);
            return;
          }
        }
      }
      if (!started) {
        if (rowNode !== lastInRange && rowNode !== firstInRange) {
          return;
        }
        started = true;
      }
      const includeThisNode = !rowNode.group || !groupsSelectChildren;
      if (includeThisNode) {
        result.push(rowNode);
        return;
      }
    });
    return result;
  }
  // eslint-disable-next-line
  setDatasource(datasource) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)("should never call setDatasource on clientSideRowController");
  }
  getTopLevelNodes() {
    return this.rootNode ? this.rootNode.childrenAfterGroup : null;
  }
  getRootNode() {
    return this.rootNode;
  }
  getRow(index) {
    return this.rowsToDisplay[index];
  }
  isRowPresent(rowNode) {
    return this.rowsToDisplay.indexOf(rowNode) >= 0;
  }
  getRowIndexAtPixel(pixelToMatch) {
    if (this.isEmpty() || this.rowsToDisplay.length === 0) {
      return -1;
    }
    let bottomPointer = 0;
    let topPointer = this.rowsToDisplay.length - 1;
    if (pixelToMatch <= 0) {
      return 0;
    }
    const lastNode = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.rowsToDisplay);
    if (lastNode.rowTop <= pixelToMatch) {
      return this.rowsToDisplay.length - 1;
    }
    let oldBottomPointer = -1;
    let oldTopPointer = -1;
    while (true) {
      const midPointer = Math.floor((bottomPointer + topPointer) / 2);
      const currentRowNode = this.rowsToDisplay[midPointer];
      if (this.isRowInPixel(currentRowNode, pixelToMatch)) {
        return midPointer;
      }
      if (currentRowNode.rowTop < pixelToMatch) {
        bottomPointer = midPointer + 1;
      } else if (currentRowNode.rowTop > pixelToMatch) {
        topPointer = midPointer - 1;
      }
      const caughtInInfiniteLoop = oldBottomPointer === bottomPointer && oldTopPointer === topPointer;
      if (caughtInInfiniteLoop) {
        return midPointer;
      }
      oldBottomPointer = bottomPointer;
      oldTopPointer = topPointer;
    }
  }
  isRowInPixel(rowNode, pixelToMatch) {
    const topPixel = rowNode.rowTop;
    const bottomPixel = rowNode.rowTop + rowNode.rowHeight;
    const pixelInRow = topPixel <= pixelToMatch && bottomPixel > pixelToMatch;
    return pixelInRow;
  }
  forEachLeafNode(callback) {
    if (this.rootNode.allLeafChildren) {
      this.rootNode.allLeafChildren.forEach((rowNode, index) => callback(rowNode, index));
    }
  }
  forEachNode(callback, includeFooterNodes = false) {
    this.recursivelyWalkNodesAndCallback({
      nodes: [...(this.rootNode.childrenAfterGroup || [])],
      callback,
      recursionType: 0 /* Normal */,
      index: 0,
      includeFooterNodes
    });
  }
  forEachNodeAfterFilter(callback, includeFooterNodes = false) {
    this.recursivelyWalkNodesAndCallback({
      nodes: [...(this.rootNode.childrenAfterAggFilter || [])],
      callback,
      recursionType: 1 /* AfterFilter */,
      index: 0,
      includeFooterNodes
    });
  }
  forEachNodeAfterFilterAndSort(callback, includeFooterNodes = false) {
    this.recursivelyWalkNodesAndCallback({
      nodes: [...(this.rootNode.childrenAfterSort || [])],
      callback,
      recursionType: 2 /* AfterFilterAndSort */,
      index: 0,
      includeFooterNodes
    });
  }
  forEachPivotNode(callback, includeFooterNodes = false) {
    this.recursivelyWalkNodesAndCallback({
      nodes: [this.rootNode],
      callback,
      recursionType: 3 /* PivotNodes */,
      index: 0,
      includeFooterNodes
    });
  }
  // iterates through each item in memory, and calls the callback function
  // nodes - the rowNodes to traverse
  // callback - the user provided callback
  // recursion type - need this to know what child nodes to recurse, eg if looking at all nodes, or filtered notes etc
  // index - works similar to the index in forEach in javascript's array function
  recursivelyWalkNodesAndCallback(params) {
    const {
      nodes,
      callback,
      recursionType,
      includeFooterNodes
    } = params;
    let {
      index
    } = params;
    const addFooters = position => {
      const parentNode = nodes[0]?.parent;
      if (!parentNode) return;
      const grandTotal = includeFooterNodes && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGrandTotalRow)(this.gos);
      const isGroupIncludeFooter = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGroupTotalRowCallback)(this.gos);
      const groupTotal = includeFooterNodes && isGroupIncludeFooter({
        node: parentNode
      });
      const isRootNode = parentNode === this.rootNode;
      if (isRootNode) {
        if (grandTotal === position) {
          parentNode.createFooter();
          callback(parentNode.sibling, index++);
        }
        return;
      }
      if (groupTotal === position) {
        parentNode.createFooter();
        callback(parentNode.sibling, index++);
      }
    };
    addFooters("top");
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      callback(node, index++);
      if (node.hasChildren() && !node.footer) {
        let nodeChildren = null;
        switch (recursionType) {
          case 0 /* Normal */:
            nodeChildren = node.childrenAfterGroup;
            break;
          case 1 /* AfterFilter */:
            nodeChildren = node.childrenAfterAggFilter;
            break;
          case 2 /* AfterFilterAndSort */:
            nodeChildren = node.childrenAfterSort;
            break;
          case 3 /* PivotNodes */:
            nodeChildren = !node.leafGroup ? node.childrenAfterSort : null;
            break;
        }
        if (nodeChildren) {
          index = this.recursivelyWalkNodesAndCallback({
            nodes: [...nodeChildren],
            callback,
            recursionType,
            index,
            includeFooterNodes
          });
        }
      }
    }
    addFooters("bottom");
    return index;
  }
  // it's possible to recompute the aggregate without doing the other parts
  // + api.refreshClientSideRowModel('aggregate')
  doAggregate(changedPath) {
    this.aggregationStage?.execute({
      rowNode: this.rootNode,
      changedPath
    });
  }
  doFilterAggregates(changedPath) {
    if (this.filterAggregatesStage) {
      this.filterAggregatesStage.execute({
        rowNode: this.rootNode,
        changedPath
      });
    } else {
      this.rootNode.childrenAfterAggFilter = this.rootNode.childrenAfterFilter;
    }
  }
  // + gridApi.expandAll()
  // + gridApi.collapseAll()
  expandOrCollapseAll(expand) {
    const usingTreeData = this.gos.get("treeData");
    const usingPivotMode = this.columnModel.isPivotActive();
    const recursiveExpandOrCollapse = rowNodes => {
      if (!rowNodes) {
        return;
      }
      rowNodes.forEach(rowNode => {
        const actionRow = () => {
          rowNode.expanded = expand;
          recursiveExpandOrCollapse(rowNode.childrenAfterGroup);
        };
        if (usingTreeData) {
          const hasChildren = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(rowNode.childrenAfterGroup);
          if (hasChildren) {
            actionRow();
          }
          return;
        }
        if (usingPivotMode) {
          const notLeafGroup = !rowNode.leafGroup;
          if (notLeafGroup) {
            actionRow();
          }
          return;
        }
        const isRowGroup = rowNode.group;
        if (isRowGroup) {
          actionRow();
        }
      });
    };
    if (this.rootNode) {
      recursiveExpandOrCollapse(this.rootNode.childrenAfterGroup);
    }
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.MAP
    });
    this.eventService.dispatchEvent({
      type: "expandOrCollapseAll",
      source: expand ? "expandAll" : "collapseAll"
    });
  }
  doSort(rowNodeTransactions, changedPath) {
    this.sortStage.execute({
      rowNode: this.rootNode,
      rowNodeTransactions,
      changedPath
    });
  }
  doRowGrouping(rowNodeTransactions, changedPath, rowNodesOrderChanged, afterColumnsChanged) {
    if (this.groupStage) {
      if (rowNodeTransactions) {
        this.groupStage.execute({
          rowNode: this.rootNode,
          rowNodeTransactions,
          rowNodesOrderChanged,
          changedPath
        });
      } else {
        this.groupStage.execute({
          rowNode: this.rootNode,
          changedPath,
          afterColumnsChanged
        });
      }
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGroupSelectsDescendants)(this.gos)) {
        const selectionChanged = this.selectionService.updateGroupsFromChildrenSelections("rowGroupChanged", changedPath);
        if (selectionChanged) {
          this.eventService.dispatchEvent({
            type: "selectionChanged",
            source: "rowGroupChanged"
          });
        }
      }
    } else {
      const rootNode = this.rootNode;
      const sibling = rootNode.sibling;
      rootNode.childrenAfterGroup = rootNode.allLeafChildren;
      if (sibling) {
        sibling.childrenAfterGroup = rootNode.childrenAfterGroup;
      }
      this.rootNode.updateHasChildren();
    }
    if (this.nodeManager.isRowCountReady()) {
      this.rowCountReady = true;
      this.eventService.dispatchEventOnce({
        type: "rowCountReady"
      });
    }
  }
  doFilter(changedPath) {
    this.filterStage.execute({
      rowNode: this.rootNode,
      changedPath
    });
  }
  doPivot(changedPath) {
    this.pivotStage?.execute({
      rowNode: this.rootNode,
      changedPath
    });
  }
  getNodeManager() {
    return this.nodeManager;
  }
  getRowNode(id) {
    const idIsGroup = typeof id == "string" && id.indexOf(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode.ID_PREFIX_ROW_GROUP) == 0;
    if (idIsGroup) {
      let res = void 0;
      this.forEachNode(node => {
        if (node.id === id) {
          res = node;
        }
      });
      return res;
    }
    return this.nodeManager.getRowNode(id);
  }
  // rows: the rows to put into the model
  setRowData(rowData) {
    this.selectionService.reset("rowDataChanged");
    this.nodeManager.setRowData(rowData);
    if (this.hasStarted) {
      this.dispatchUpdateEventsAndRefresh();
    }
  }
  dispatchUpdateEventsAndRefresh() {
    this.eventService.dispatchEvent({
      type: "rowDataUpdated"
    });
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING,
      newData: true
    });
  }
  batchUpdateRowData(rowDataTransaction, callback) {
    if (this.applyAsyncTransactionsTimeout == null) {
      this.rowDataTransactionBatch = [];
      const waitMillis = this.gos.get("asyncTransactionWaitMillis");
      this.applyAsyncTransactionsTimeout = window.setTimeout(() => {
        if (this.isAlive()) {
          this.executeBatchUpdateRowData();
        }
      }, waitMillis);
    }
    this.rowDataTransactionBatch.push({
      rowDataTransaction,
      callback
    });
  }
  flushAsyncTransactions() {
    if (this.applyAsyncTransactionsTimeout != null) {
      clearTimeout(this.applyAsyncTransactionsTimeout);
      this.executeBatchUpdateRowData();
    }
  }
  executeBatchUpdateRowData() {
    this.valueCache.onDataChanged();
    const callbackFuncsBound = [];
    const rowNodeTrans = [];
    let orderChanged = false;
    this.rowDataTransactionBatch?.forEach(tranItem => {
      const {
        rowNodeTransaction,
        rowsInserted
      } = this.nodeManager.updateRowData(tranItem.rowDataTransaction);
      if (rowsInserted) {
        orderChanged = true;
      }
      rowNodeTrans.push(rowNodeTransaction);
      if (tranItem.callback) {
        callbackFuncsBound.push(tranItem.callback.bind(null, rowNodeTransaction));
      }
    });
    this.commonUpdateRowData(rowNodeTrans, orderChanged);
    if (callbackFuncsBound.length > 0) {
      window.setTimeout(() => {
        callbackFuncsBound.forEach(func => func());
      }, 0);
    }
    if (rowNodeTrans.length > 0) {
      this.eventService.dispatchEvent({
        type: "asyncTransactionsFlushed",
        results: rowNodeTrans
      });
    }
    this.rowDataTransactionBatch = null;
    this.applyAsyncTransactionsTimeout = void 0;
  }
  /**
   * Used to apply transaction changes.
   * Called by gridApi & rowDragFeature
   */
  updateRowData(rowDataTran) {
    this.valueCache.onDataChanged();
    const {
      rowNodeTransaction,
      rowsInserted
    } = this.nodeManager.updateRowData(rowDataTran);
    this.commonUpdateRowData([rowNodeTransaction], rowsInserted);
    return rowNodeTransaction;
  }
  /**
   * Used to apply generated transaction
   */
  afterImmutableDataChange(rowNodeTransaction, rowNodesOrderChanged) {
    this.commonUpdateRowData([rowNodeTransaction], rowNodesOrderChanged);
  }
  /**
   * Common to:
   * - executeBatchUpdateRowData (batch transactions)
   * - updateRowData (single transaction)
   * - afterImmutableDataChange (generated transaction)
   *
   * @param rowNodeTrans - the transactions to apply
   * @param orderChanged - whether the order of the rows has changed, either via generated transaction or user provided addIndex
   */
  commonUpdateRowData(rowNodeTransactions, rowNodesOrderChanged) {
    if (!this.hasStarted) {
      return;
    }
    const animate = !this.gos.get("suppressAnimationFrame");
    this.eventService.dispatchEvent({
      type: "rowDataUpdated"
    });
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.EVERYTHING,
      rowNodeTransactions,
      rowNodesOrderChanged,
      keepRenderedRows: true,
      keepEditingRows: true,
      animate
    });
  }
  doRowsToDisplay() {
    this.rowsToDisplay = this.flattenStage.execute({
      rowNode: this.rootNode
    });
  }
  onRowHeightChanged() {
    this.refreshModel({
      step: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelSteps.MAP,
      keepRenderedRows: true,
      keepEditingRows: true,
      keepUndoRedoStack: true
    });
  }
  /** This method is debounced. It is used for row auto-height. If we don't debounce,
   * then the Row Models will end up recalculating each row position
   * for each row height change and result in the Row Renderer laying out rows.
   * This is particularly bad if using print layout, and showing eg 1,000 rows,
   * each row will change it's height, causing Row Model to update 1,000 times.
   */
  onRowHeightChangedDebounced() {
    this.onRowHeightChanged_debounced();
  }
  resetRowHeights() {
    const atLeastOne = this.resetRowHeightsForAllRowNodes();
    this.rootNode.setRowHeight(this.rootNode.rowHeight, true);
    if (this.rootNode.sibling) {
      this.rootNode.sibling.setRowHeight(this.rootNode.sibling.rowHeight, true);
    }
    if (atLeastOne) {
      this.onRowHeightChanged();
    }
  }
  resetRowHeightsForAllRowNodes() {
    let atLeastOne = false;
    this.forEachNode(rowNode => {
      rowNode.setRowHeight(rowNode.rowHeight, true);
      const detailNode = rowNode.detailNode;
      if (detailNode) {
        detailNode.setRowHeight(detailNode.rowHeight, true);
      }
      if (rowNode.sibling) {
        rowNode.sibling.setRowHeight(rowNode.sibling.rowHeight, true);
      }
      atLeastOne = true;
    });
    return atLeastOne;
  }
  onGridStylesChanges(e) {
    if (e.rowHeightChanged) {
      if (this.columnModel.isAutoRowHeightActive()) {
        return;
      }
      this.resetRowHeights();
    }
  }
  onGridReady() {
    if (this.hasStarted) {
      return;
    }
    this.setInitialData();
  }
  isRowDataLoaded() {
    return this.rowCountReady;
  }
  destroy() {
    super.destroy();
    this.clearHighlightedRow();
  }
};

// community-modules/client-side-row-model/src/clientSideRowModel/clientSideRowModelApi.ts

function onGroupExpandedOrCollapsed(beans) {
  beans.expansionService.onGroupExpandedOrCollapsed();
}
function refreshClientSideRowModel(beans, step) {
  beans.rowModelHelperService?.getClientSideRowModel()?.refreshModel(step);
}
function isRowDataEmpty(beans) {
  return beans.rowModelHelperService?.getClientSideRowModel()?.isEmpty() ?? true;
}
function forEachLeafNode(beans, callback) {
  beans.rowModelHelperService?.getClientSideRowModel()?.forEachLeafNode(callback);
}
function forEachNodeAfterFilter(beans, callback) {
  beans.rowModelHelperService?.getClientSideRowModel()?.forEachNodeAfterFilter(callback);
}
function forEachNodeAfterFilterAndSort(beans, callback) {
  beans.rowModelHelperService?.getClientSideRowModel()?.forEachNodeAfterFilterAndSort(callback);
}
function resetRowHeights(beans) {
  if (beans.columnModel.isAutoRowHeightActive()) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("calling gridApi.resetRowHeights() makes no sense when using Auto Row Height.");
    return;
  }
  beans.rowModelHelperService?.getClientSideRowModel()?.resetRowHeights();
}
function applyTransaction(beans, rowDataTransaction) {
  return beans.frameworkOverrides.wrapIncoming(() => beans.rowModelHelperService?.getClientSideRowModel()?.updateRowData(rowDataTransaction));
}
function applyTransactionAsync(beans, rowDataTransaction, callback) {
  beans.frameworkOverrides.wrapIncoming(() => beans.rowModelHelperService?.getClientSideRowModel()?.batchUpdateRowData(rowDataTransaction, callback));
}
function flushAsyncTransactions(beans) {
  beans.frameworkOverrides.wrapIncoming(() => beans.rowModelHelperService?.getClientSideRowModel()?.flushAsyncTransactions());
}
function getBestCostNodeSelection(beans) {
  return beans.selectionService.getBestCostNodeSelection();
}

// community-modules/client-side-row-model/src/clientSideRowModel/filterStage.ts

var FilterStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "filterStage";
  }
  wireBeans(beans) {
    this.filterManager = beans.filterManager;
  }
  execute(params) {
    const {
      changedPath
    } = params;
    this.filter(changedPath);
  }
  filter(changedPath) {
    const filterActive = !!this.filterManager?.isChildFilterPresent();
    this.filterNodes(filterActive, changedPath);
  }
  filterNodes(filterActive, changedPath) {
    const filterCallback = (rowNode, includeChildNodes) => {
      if (rowNode.hasChildren()) {
        if (filterActive && !includeChildNodes) {
          rowNode.childrenAfterFilter = rowNode.childrenAfterGroup.filter(childNode => {
            const passBecauseChildren = childNode.childrenAfterFilter && childNode.childrenAfterFilter.length > 0;
            const passBecauseDataPasses = childNode.data && this.filterManager.doesRowPassFilter({
              rowNode: childNode
            });
            return passBecauseChildren || passBecauseDataPasses;
          });
        } else {
          rowNode.childrenAfterFilter = rowNode.childrenAfterGroup;
        }
      } else {
        rowNode.childrenAfterFilter = rowNode.childrenAfterGroup;
      }
      if (rowNode.sibling) {
        rowNode.sibling.childrenAfterFilter = rowNode.childrenAfterFilter;
      }
    };
    if (this.doingTreeDataFiltering()) {
      const treeDataDepthFirstFilter = (rowNode, alreadyFoundInParent) => {
        if (rowNode.childrenAfterGroup) {
          for (let i = 0; i < rowNode.childrenAfterGroup.length; i++) {
            const childNode = rowNode.childrenAfterGroup[i];
            const foundInParent = alreadyFoundInParent || this.filterManager.doesRowPassFilter({
              rowNode: childNode
            });
            if (childNode.childrenAfterGroup) {
              treeDataDepthFirstFilter(rowNode.childrenAfterGroup[i], foundInParent);
            } else {
              filterCallback(childNode, foundInParent);
            }
          }
        }
        filterCallback(rowNode, alreadyFoundInParent);
      };
      const treeDataFilterCallback = rowNode => treeDataDepthFirstFilter(rowNode, false);
      changedPath.executeFromRootNode(treeDataFilterCallback);
    } else {
      const defaultFilterCallback = rowNode => filterCallback(rowNode, false);
      changedPath.forEachChangedNodeDepthFirst(defaultFilterCallback, true);
    }
  }
  doingTreeDataFiltering() {
    return this.gos.get("treeData") && !this.gos.get("excludeChildrenWhenTreeDataFiltering");
  }
};

// community-modules/client-side-row-model/src/clientSideRowModel/flattenStage.ts

var FlattenStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "flattenStage";
  }
  wireBeans(beans) {
    this.beans = beans;
    this.columnModel = beans.columnModel;
  }
  execute(params) {
    const rootNode = params.rowNode;
    const result = [];
    const skipLeafNodes = this.columnModel.isPivotMode();
    const showRootNode = skipLeafNodes && rootNode.leafGroup;
    const topList = showRootNode ? [rootNode] : rootNode.childrenAfterSort;
    const details = this.getFlattenDetails();
    this.recursivelyAddToRowsToDisplay(details, topList, result, skipLeafNodes, 0);
    const atLeastOneRowPresent = result.length > 0;
    const includeGrandTotalRow = !showRootNode &&
    // don't show total footer when showRootNode is true (i.e. in pivot mode and no groups)
    atLeastOneRowPresent && details.grandTotalRow;
    if (includeGrandTotalRow) {
      rootNode.createFooter();
      const addToTop = details.grandTotalRow === "top";
      this.addRowNodeToRowsToDisplay(details, rootNode.sibling, result, 0, addToTop);
    }
    return result;
  }
  getFlattenDetails() {
    const groupRemoveSingleChildren = this.gos.get("groupRemoveSingleChildren");
    const groupRemoveLowestSingleChildren = !groupRemoveSingleChildren && this.gos.get("groupRemoveLowestSingleChildren");
    return {
      groupRemoveLowestSingleChildren,
      groupRemoveSingleChildren,
      isGroupMultiAutoColumn: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isGroupMultiAutoColumn)(this.gos),
      hideOpenParents: this.gos.get("groupHideOpenParents"),
      grandTotalRow: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGrandTotalRow)(this.gos),
      groupTotalRow: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGroupTotalRowCallback)(this.gos)
    };
  }
  recursivelyAddToRowsToDisplay(details, rowsToFlatten, result, skipLeafNodes, uiLevel) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(rowsToFlatten)) {
      return;
    }
    for (let i = 0; i < rowsToFlatten.length; i++) {
      const rowNode = rowsToFlatten[i];
      const isParent = rowNode.hasChildren();
      const isSkippedLeafNode = skipLeafNodes && !isParent;
      const isRemovedSingleChildrenGroup = details.groupRemoveSingleChildren && isParent && rowNode.childrenAfterGroup.length === 1;
      const isRemovedLowestSingleChildrenGroup = details.groupRemoveLowestSingleChildren && isParent && rowNode.leafGroup && rowNode.childrenAfterGroup.length === 1;
      const neverAllowToExpand = skipLeafNodes && rowNode.leafGroup;
      const isHiddenOpenParent = details.hideOpenParents && rowNode.expanded && !rowNode.master && !neverAllowToExpand;
      const thisRowShouldBeRendered = !isSkippedLeafNode && !isHiddenOpenParent && !isRemovedSingleChildrenGroup && !isRemovedLowestSingleChildrenGroup;
      if (thisRowShouldBeRendered) {
        this.addRowNodeToRowsToDisplay(details, rowNode, result, uiLevel);
      }
      if (skipLeafNodes && rowNode.leafGroup) {
        continue;
      }
      if (isParent) {
        const excludedParent = isRemovedSingleChildrenGroup || isRemovedLowestSingleChildrenGroup;
        if (rowNode.expanded || excludedParent) {
          const doesRowShowFooter = details.groupTotalRow({
            node: rowNode
          });
          if (!doesRowShowFooter) {
            rowNode.destroyFooter();
          }
          const uiLevelForChildren = excludedParent ? uiLevel : uiLevel + 1;
          if (doesRowShowFooter === "top") {
            rowNode.createFooter();
            this.addRowNodeToRowsToDisplay(details, rowNode.sibling, result, uiLevelForChildren);
          }
          this.recursivelyAddToRowsToDisplay(details, rowNode.childrenAfterSort, result, skipLeafNodes, uiLevelForChildren);
          if (doesRowShowFooter === "bottom") {
            rowNode.createFooter();
            this.addRowNodeToRowsToDisplay(details, rowNode.sibling, result, uiLevelForChildren);
          }
        }
      } else if (rowNode.master && rowNode.expanded) {
        const detailNode = this.createDetailNode(rowNode);
        this.addRowNodeToRowsToDisplay(details, detailNode, result, uiLevel);
      }
    }
  }
  // duplicated method, it's also in floatingRowModel
  addRowNodeToRowsToDisplay(details, rowNode, result, uiLevel, addToTop) {
    if (addToTop) {
      result.unshift(rowNode);
    } else {
      result.push(rowNode);
    }
    rowNode.setUiLevel(details.isGroupMultiAutoColumn ? 0 : uiLevel);
  }
  createDetailNode(masterNode) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(masterNode.detailNode)) {
      return masterNode.detailNode;
    }
    const detailNode = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode(this.beans);
    detailNode.detail = true;
    detailNode.selectable = false;
    detailNode.parent = masterNode;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(masterNode.id)) {
      detailNode.id = "detail_" + masterNode.id;
    }
    detailNode.data = masterNode.data;
    detailNode.level = masterNode.level + 1;
    masterNode.detailNode = detailNode;
    return detailNode;
  }
};

// community-modules/client-side-row-model/src/clientSideRowModel/immutableService.ts

var ImmutableService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "immutableService";
  }
  wireBeans(beans) {
    this.rowModel = beans.rowModel;
    this.selectionService = beans.selectionService;
  }
  postConstruct() {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos)) {
      this.clientSideRowModel = this.rowModel;
      this.addManagedPropertyListener("rowData", () => this.onRowDataUpdated());
    }
  }
  isActive() {
    const getRowIdProvided = this.gos.exists("getRowId");
    const resetRowDataOnUpdate = this.gos.get("resetRowDataOnUpdate");
    if (resetRowDataOnUpdate) {
      return false;
    }
    return getRowIdProvided;
  }
  setRowData(rowData) {
    const rowDataTransaction = this.createTransactionForRowData(rowData);
    if (!rowDataTransaction) {
      return;
    }
    const nodeManager = this.clientSideRowModel.getNodeManager();
    const {
      rowNodeTransaction,
      rowsInserted
    } = nodeManager.updateRowData(rowDataTransaction);
    let orderChanged = false;
    const suppressSortOrder = this.gos.get("suppressMaintainUnsortedOrder");
    if (!suppressSortOrder) {
      orderChanged = nodeManager.updateRowOrderFromRowData(rowData);
    }
    this.clientSideRowModel.afterImmutableDataChange(rowNodeTransaction, orderChanged || rowsInserted);
  }
  /** Converts the setRowData() command to a transaction */
  createTransactionForRowData(rowData) {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)("ImmutableService only works with ClientSideRowModel");
      return null;
    }
    const getRowIdFunc = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getRowIdCallback)(this.gos);
    if (getRowIdFunc == null) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)("ImmutableService requires getRowId() callback to be implemented, your row data needs IDs!");
      return null;
    }
    const existingNodesMap = this.clientSideRowModel.getNodeManager().getCopyOfNodesMap();
    const remove = [];
    const update = [];
    const add = [];
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(rowData)) {
      rowData.forEach(data => {
        const id = getRowIdFunc({
          data,
          level: 0
        });
        const existingNode = existingNodesMap[id];
        if (existingNode) {
          const dataHasChanged = existingNode.data !== data;
          if (dataHasChanged) {
            update.push(data);
          }
          existingNodesMap[id] = void 0;
        } else {
          add.push(data);
        }
      });
    }
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._iterateObject)(existingNodesMap, (id, rowNode) => {
      if (rowNode) {
        remove.push(rowNode.data);
      }
    });
    return {
      remove,
      update,
      add
    };
  }
  onRowDataUpdated() {
    const rowData = this.gos.get("rowData");
    if (!rowData) {
      return;
    }
    if (this.isActive()) {
      this.setRowData(rowData);
    } else {
      this.selectionService.reset("rowDataChanged");
      this.clientSideRowModel.setRowData(rowData);
    }
  }
};

// community-modules/client-side-row-model/src/clientSideRowModel/sortService.ts

var SortService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "sortService";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
    this.rowNodeSorter = beans.rowNodeSorter;
    this.showRowGroupColsService = beans.showRowGroupColsService;
  }
  sort(sortOptions, sortActive, useDeltaSort, rowNodeTransactions, changedPath, sortContainsGroupColumns) {
    const groupMaintainOrder = this.gos.get("groupMaintainOrder");
    const groupColumnsPresent = this.columnModel.getCols().some(c => c.isRowGroupActive());
    let allDirtyNodes = {};
    if (useDeltaSort && rowNodeTransactions) {
      allDirtyNodes = this.calculateDirtyNodes(rowNodeTransactions);
    }
    const isPivotMode = this.columnModel.isPivotMode();
    const postSortFunc = this.gos.getCallback("postSortRows");
    const callback = rowNode => {
      this.pullDownGroupDataForHideOpenParents(rowNode.childrenAfterAggFilter, true);
      const skipSortingPivotLeafs = isPivotMode && rowNode.leafGroup;
      const skipSortingGroups = groupMaintainOrder && groupColumnsPresent && !rowNode.leafGroup && !sortContainsGroupColumns;
      if (skipSortingGroups) {
        const nextGroup = this.funcColsService.getRowGroupColumns()?.[rowNode.level + 1];
        const wasSortExplicitlyRemoved = nextGroup?.getSort() === null;
        const childrenToBeSorted = rowNode.childrenAfterAggFilter.slice(0);
        if (rowNode.childrenAfterSort && !wasSortExplicitlyRemoved) {
          const indexedOrders = {};
          rowNode.childrenAfterSort.forEach((node, idx) => {
            indexedOrders[node.id] = idx;
          });
          childrenToBeSorted.sort((row1, row2) => (indexedOrders[row1.id] ?? 0) - (indexedOrders[row2.id] ?? 0));
        }
        rowNode.childrenAfterSort = childrenToBeSorted;
      } else if (!sortActive || skipSortingPivotLeafs) {
        rowNode.childrenAfterSort = rowNode.childrenAfterAggFilter.slice(0);
      } else if (useDeltaSort) {
        rowNode.childrenAfterSort = this.doDeltaSort(rowNode, allDirtyNodes, changedPath, sortOptions);
      } else {
        rowNode.childrenAfterSort = this.rowNodeSorter.doFullSort(rowNode.childrenAfterAggFilter, sortOptions);
      }
      if (rowNode.sibling) {
        rowNode.sibling.childrenAfterSort = rowNode.childrenAfterSort;
      }
      this.updateChildIndexes(rowNode);
      if (postSortFunc) {
        const params = {
          nodes: rowNode.childrenAfterSort
        };
        postSortFunc(params);
      }
    };
    if (changedPath) {
      changedPath.forEachChangedNodeDepthFirst(callback);
    }
    this.updateGroupDataForHideOpenParents(changedPath);
  }
  calculateDirtyNodes(rowNodeTransactions) {
    const dirtyNodes = {};
    const addNodesFunc = rowNodes => {
      if (rowNodes) {
        rowNodes.forEach(rowNode => dirtyNodes[rowNode.id] = true);
      }
    };
    if (rowNodeTransactions) {
      rowNodeTransactions.forEach(tran => {
        addNodesFunc(tran.add);
        addNodesFunc(tran.update);
        addNodesFunc(tran.remove);
      });
    }
    return dirtyNodes;
  }
  doDeltaSort(rowNode, allTouchedNodes, changedPath, sortOptions) {
    const unsortedRows = rowNode.childrenAfterAggFilter;
    const oldSortedRows = rowNode.childrenAfterSort;
    if (!oldSortedRows) {
      return this.rowNodeSorter.doFullSort(unsortedRows, sortOptions);
    }
    const untouchedRowsMap = {};
    const touchedRows = [];
    unsortedRows.forEach(row => {
      if (allTouchedNodes[row.id] || !changedPath.canSkip(row)) {
        touchedRows.push(row);
      } else {
        untouchedRowsMap[row.id] = true;
      }
    });
    const sortedUntouchedRows = oldSortedRows.filter(child => untouchedRowsMap[child.id]);
    const mapNodeToSortedNode = (rowNode2, pos) => ({
      currentPos: pos,
      rowNode: rowNode2
    });
    const sortedChangedRows = touchedRows.map(mapNodeToSortedNode).sort((a, b) => this.rowNodeSorter.compareRowNodes(sortOptions, a, b));
    return this.mergeSortedArrays(sortOptions, sortedChangedRows, sortedUntouchedRows.map(mapNodeToSortedNode)).map(({
      rowNode: rowNode2
    }) => rowNode2);
  }
  // Merge two sorted arrays into each other
  mergeSortedArrays(sortOptions, arr1, arr2) {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      const compareResult = this.rowNodeSorter.compareRowNodes(sortOptions, arr1[i], arr2[j]);
      if (compareResult < 0) {
        res.push(arr1[i++]);
      } else {
        res.push(arr2[j++]);
      }
    }
    while (i < arr1.length) {
      res.push(arr1[i++]);
    }
    while (j < arr2.length) {
      res.push(arr2[j++]);
    }
    return res;
  }
  updateChildIndexes(rowNode) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(rowNode.childrenAfterSort)) {
      return;
    }
    const listToSort = rowNode.childrenAfterSort;
    for (let i = 0; i < listToSort.length; i++) {
      const child = listToSort[i];
      const firstChild = i === 0;
      const lastChild = i === rowNode.childrenAfterSort.length - 1;
      child.setFirstChild(firstChild);
      child.setLastChild(lastChild);
      child.setChildIndex(i);
    }
  }
  updateGroupDataForHideOpenParents(changedPath) {
    if (!this.gos.get("groupHideOpenParents")) {
      return;
    }
    if (this.gos.get("treeData")) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`The property hideOpenParents dose not work with Tree Data. This is because Tree Data has values at the group level, it doesn't make sense to hide them.`);
      return false;
    }
    const callback = rowNode => {
      this.pullDownGroupDataForHideOpenParents(rowNode.childrenAfterSort, false);
      rowNode.childrenAfterSort.forEach(child => {
        if (child.hasChildren()) {
          callback(child);
        }
      });
    };
    if (changedPath) {
      changedPath.executeFromRootNode(rowNode => callback(rowNode));
    }
  }
  pullDownGroupDataForHideOpenParents(rowNodes, clearOperation) {
    if (!this.gos.get("groupHideOpenParents") || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(rowNodes)) {
      return;
    }
    rowNodes.forEach(childRowNode => {
      const groupDisplayCols = this.showRowGroupColsService?.getShowRowGroupCols() ?? [];
      groupDisplayCols.forEach(groupDisplayCol => {
        const showRowGroup = groupDisplayCol.getColDef().showRowGroup;
        if (typeof showRowGroup !== "string") {
          (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)("groupHideOpenParents only works when specifying specific columns for colDef.showRowGroup");
          return;
        }
        const displayingGroupKey = showRowGroup;
        const rowGroupColumn = this.columnModel.getColDefCol(displayingGroupKey);
        const thisRowNodeMatches = rowGroupColumn === childRowNode.rowGroupColumn;
        if (thisRowNodeMatches) {
          return;
        }
        if (clearOperation) {
          childRowNode.setGroupValue(groupDisplayCol.getId(), void 0);
        } else {
          const parentToStealFrom = this.getFirstChildOfFirstChild(childRowNode, rowGroupColumn);
          if (parentToStealFrom) {
            childRowNode.setGroupValue(groupDisplayCol.getId(), parentToStealFrom.key);
          }
        }
      });
    });
  }
  getFirstChildOfFirstChild(node, rowGroupColumn) {
    let currentRowNode = node;
    while (currentRowNode) {
      const parentRowNode = currentRowNode.parent;
      if (parentRowNode && currentRowNode.firstChild) {
        if (parentRowNode.rowGroupColumn === rowGroupColumn) {
          return parentRowNode;
        }
      } else {
        return null;
      }
      currentRowNode = parentRowNode;
    }
    return null;
  }
};

// community-modules/client-side-row-model/src/clientSideRowModel/sortStage.ts

var SortStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "sortStage";
  }
  wireBeans(beans) {
    this.sortService = beans.sortService;
    this.sortController = beans.sortController;
  }
  execute(params) {
    const sortOptions = this.sortController.getSortOptions();
    const sortActive = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(sortOptions) && sortOptions.length > 0;
    const deltaSort = sortActive && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(params.rowNodeTransactions) &&
    // in time we can remove this check, so that delta sort is always
    // on if transactions are present. it's off for now so that we can
    // selectively turn it on and test it with some select users before
    // rolling out to everyone.
    this.gos.get("deltaSort");
    const sortContainsGroupColumns = sortOptions.some(opt => {
      const isSortingCoupled = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isColumnsSortingCoupledToGroup)(this.gos);
      if (isSortingCoupled) {
        return opt.column.isPrimary() && opt.column.isRowGroupActive();
      }
      return !!opt.column.getColDef().showRowGroup;
    });
    this.sortService.sort(sortOptions, sortActive, deltaSort, params.rowNodeTransactions, params.changedPath, sortContainsGroupColumns);
  }
};

// community-modules/client-side-row-model/src/version.ts
var VERSION = "32.3.3";

// community-modules/client-side-row-model/src/clientSideRowModelModule.ts
var ClientSideRowModelCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ClientSideRowModelModule}-core`,
  rowModel: "clientSide",
  beans: [ClientSideRowModel, FilterStage, SortStage, FlattenStage, SortService, ImmutableService]
});
var ClientSideRowModelApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ClientSideRowModelModule}-api`,
  beans: [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowModelHelperService],
  apiFunctions: {
    onGroupExpandedOrCollapsed,
    refreshClientSideRowModel,
    isRowDataEmpty,
    forEachLeafNode,
    forEachNodeAfterFilter,
    forEachNodeAfterFilterAndSort,
    resetRowHeights,
    applyTransaction,
    applyTransactionAsync,
    flushAsyncTransactions,
    getBestCostNodeSelection
  },
  dependantModules: [ClientSideRowModelCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._CsrmSsrmSharedApiModule]
});
var ClientSideRowModelModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ClientSideRowModelModule,
  dependantModules: [ClientSideRowModelCoreModule, ClientSideRowModelApiModule]
});


/***/ }),

/***/ 92974:
/*!******************************************************************************!*\
  !*** ./node_modules/@ag-grid-community/csv-export/dist/package/main.esm.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseCreator: () => (/* binding */ BaseCreator),
/* harmony export */   BaseGridSerializingSession: () => (/* binding */ BaseGridSerializingSession),
/* harmony export */   CsvCreator: () => (/* binding */ CsvCreator),
/* harmony export */   CsvExportModule: () => (/* binding */ CsvExportModule),
/* harmony export */   Downloader: () => (/* binding */ Downloader),
/* harmony export */   GridSerializer: () => (/* binding */ GridSerializer),
/* harmony export */   RowType: () => (/* binding */ RowType),
/* harmony export */   XmlFactory: () => (/* binding */ XmlFactory),
/* harmony export */   ZipContainer: () => (/* binding */ ZipContainer),
/* harmony export */   _CsvExportCoreModule: () => (/* binding */ CsvExportCoreModule)
/* harmony export */ });
/* harmony import */ var C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);

// community-modules/csv-export/src/csvExport/baseCreator.ts

var BaseCreator = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  setBeans(beans) {
    this.beans = beans;
  }
  getFileName(fileName) {
    const extension = this.getDefaultFileExtension();
    if (fileName == null || !fileName.length) {
      fileName = this.getDefaultFileName();
    }
    return fileName.indexOf(".") === -1 ? `${fileName}.${extension}` : fileName;
  }
  getData(params) {
    const serializingSession = this.createSerializingSession(params);
    return this.beans.gridSerializer.serialize(serializingSession, params);
  }
  getDefaultFileName() {
    return `export.${this.getDefaultFileExtension()}`;
  }
};

// community-modules/csv-export/src/csvExport/sessions/baseGridSerializingSession.ts

var BaseGridSerializingSession = class {
  constructor(config) {
    this.groupColumns = [];
    const {
      columnModel,
      funcColsService,
      columnNameService,
      valueService,
      gos,
      processCellCallback,
      processHeaderCallback,
      processGroupHeaderCallback,
      processRowGroupCallback
    } = config;
    this.columnModel = columnModel;
    this.funcColsService = funcColsService;
    this.columnNameService = columnNameService;
    this.valueService = valueService;
    this.gos = gos;
    this.processCellCallback = processCellCallback;
    this.processHeaderCallback = processHeaderCallback;
    this.processGroupHeaderCallback = processGroupHeaderCallback;
    this.processRowGroupCallback = processRowGroupCallback;
  }
  prepare(columnsToExport) {
    this.groupColumns = columnsToExport.filter(col => !!col.getColDef().showRowGroup);
  }
  extractHeaderValue(column) {
    const value = this.getHeaderName(this.processHeaderCallback, column);
    return value ?? "";
  }
  extractRowCellValue(column, index, accumulatedRowIndex, type, node) {
    const hideOpenParents = this.gos.get("groupHideOpenParents");
    const value = (!hideOpenParents || node.footer) && this.shouldRenderGroupSummaryCell(node, column, index) ? this.createValueForGroupNode(column, node) : this.valueService.getValue(column, node);
    const processedValue = this.processCell({
      accumulatedRowIndex,
      rowNode: node,
      column,
      value,
      processCellCallback: this.processCellCallback,
      type
    });
    return processedValue;
  }
  shouldRenderGroupSummaryCell(node, column, currentColumnIndex) {
    const isGroupNode = node && node.group;
    if (!isGroupNode) {
      return false;
    }
    const currentColumnGroupIndex = this.groupColumns.indexOf(column);
    if (currentColumnGroupIndex !== -1) {
      const groupDataKeyForColumn = node.groupData?.[column.getId()];
      const suppressGroupMaintainValueType = this.gos.get("suppressGroupMaintainValueType");
      if (suppressGroupMaintainValueType && groupDataKeyForColumn != null || !suppressGroupMaintainValueType && groupDataKeyForColumn !== void 0) {
        return true;
      }
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isServerSideRowModel)(this.gos) && node.group) {
        return true;
      }
      if (node.footer && node.level === -1) {
        const colDef = column.getColDef();
        const isFullWidth = colDef == null || colDef.showRowGroup === true;
        return isFullWidth || colDef.showRowGroup === this.funcColsService.getRowGroupColumns()[0].getId();
      }
    }
    const isGroupUseEntireRow = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isGroupUseEntireRow)(this.gos, this.columnModel.isPivotMode());
    return currentColumnIndex === 0 && isGroupUseEntireRow;
  }
  getHeaderName(callback, column) {
    if (callback) {
      return callback(this.gos.addGridCommonParams({
        column
      }));
    }
    return this.columnNameService.getDisplayNameForColumn(column, "csv", true);
  }
  createValueForGroupNode(column, node) {
    if (this.processRowGroupCallback) {
      return this.processRowGroupCallback(this.gos.addGridCommonParams({
        column,
        node
      }));
    }
    const isTreeData = this.gos.get("treeData");
    const isSuppressGroupMaintainValueType = this.gos.get("suppressGroupMaintainValueType");
    const getValueFromNode = node2 => {
      if (isTreeData || isSuppressGroupMaintainValueType) {
        return node2.key;
      }
      const value = node2.groupData?.[column.getId()];
      if (!value || !node2.rowGroupColumn || node2.rowGroupColumn.getColDef().useValueFormatterForExport === false) {
        return value;
      }
      return this.valueService.formatValue(node2.rowGroupColumn, node2, value) ?? value;
    };
    const isFooter = node.footer;
    const keys = [getValueFromNode(node)];
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isGroupMultiAutoColumn)(this.gos)) {
      while (node.parent) {
        node = node.parent;
        keys.push(getValueFromNode(node));
      }
    }
    const groupValue = keys.reverse().join(" -> ");
    return isFooter ? `Total ${groupValue}` : groupValue;
  }
  processCell(params) {
    const {
      accumulatedRowIndex,
      rowNode,
      column,
      value,
      processCellCallback,
      type
    } = params;
    if (processCellCallback) {
      return {
        value: processCellCallback(this.gos.addGridCommonParams({
          accumulatedRowIndex,
          column,
          node: rowNode,
          value,
          type,
          parseValue: valueToParse => this.valueService.parseValue(column, rowNode, valueToParse, this.valueService.getValue(column, rowNode)),
          formatValue: valueToFormat => this.valueService.formatValue(column, rowNode, valueToFormat) ?? valueToFormat
        })) ?? ""
      };
    }
    if (column.getColDef().useValueFormatterForExport !== false) {
      return {
        value: value ?? "",
        valueFormatted: this.valueService.formatValue(column, rowNode, value)
      };
    }
    return {
      value: value ?? ""
    };
  }
};

// community-modules/csv-export/src/csvExport/csvCreator.ts


// community-modules/csv-export/src/csvExport/downloader.ts

var Downloader = class {
  static download(fileName, content) {
    const win = document.defaultView || window;
    if (!win) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)("There is no `window` associated with the current `document`");
      return;
    }
    const element = document.createElement("a");
    const url = win.URL.createObjectURL(content);
    element.setAttribute("href", url);
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.dispatchEvent(new MouseEvent("click", {
      bubbles: false,
      cancelable: true,
      view: win
    }));
    document.body.removeChild(element);
    win.setTimeout(() => {
      win.URL.revokeObjectURL(url);
    }, 0);
  }
};

// community-modules/csv-export/src/csvExport/sessions/csvSerializingSession.ts

var LINE_SEPARATOR = "\r\n";
var CsvSerializingSession = class extends BaseGridSerializingSession {
  constructor(config) {
    super(config);
    this.isFirstLine = true;
    this.result = "";
    const {
      suppressQuotes,
      columnSeparator
    } = config;
    this.suppressQuotes = suppressQuotes;
    this.columnSeparator = columnSeparator;
  }
  addCustomContent(content) {
    if (!content) {
      return;
    }
    if (typeof content === "string") {
      if (!/^\s*\n/.test(content)) {
        this.beginNewLine();
      }
      content = content.replace(/\r?\n/g, LINE_SEPARATOR);
      this.result += content;
    } else {
      content.forEach(row => {
        this.beginNewLine();
        row.forEach((cell, index) => {
          if (index !== 0) {
            this.result += this.columnSeparator;
          }
          this.result += this.putInQuotes(cell.data.value || "");
          if (cell.mergeAcross) {
            this.appendEmptyCells(cell.mergeAcross);
          }
        });
      });
    }
  }
  onNewHeaderGroupingRow() {
    this.beginNewLine();
    return {
      onColumn: this.onNewHeaderGroupingRowColumn.bind(this)
    };
  }
  onNewHeaderGroupingRowColumn(columnGroup, header, index, span) {
    if (index != 0) {
      this.result += this.columnSeparator;
    }
    this.result += this.putInQuotes(header);
    this.appendEmptyCells(span);
  }
  appendEmptyCells(count) {
    for (let i = 1; i <= count; i++) {
      this.result += this.columnSeparator + this.putInQuotes("");
    }
  }
  onNewHeaderRow() {
    this.beginNewLine();
    return {
      onColumn: this.onNewHeaderRowColumn.bind(this)
    };
  }
  onNewHeaderRowColumn(column, index) {
    if (index != 0) {
      this.result += this.columnSeparator;
    }
    this.result += this.putInQuotes(this.extractHeaderValue(column));
  }
  onNewBodyRow() {
    this.beginNewLine();
    return {
      onColumn: this.onNewBodyRowColumn.bind(this)
    };
  }
  onNewBodyRowColumn(column, index, node) {
    if (index != 0) {
      this.result += this.columnSeparator;
    }
    const rowCellValue = this.extractRowCellValue(column, index, index, "csv", node);
    this.result += this.putInQuotes(rowCellValue.valueFormatted ?? rowCellValue.value);
  }
  putInQuotes(value) {
    if (this.suppressQuotes) {
      return value;
    }
    if (value === null || value === void 0) {
      return '""';
    }
    let stringValue;
    if (typeof value === "string") {
      stringValue = value;
    } else if (typeof value.toString === "function") {
      stringValue = value.toString();
    } else {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)("unknown value type during csv conversion");
      stringValue = "";
    }
    const valueEscaped = stringValue.replace(/"/g, '""');
    return '"' + valueEscaped + '"';
  }
  parse() {
    return this.result;
  }
  beginNewLine() {
    if (!this.isFirstLine) {
      this.result += LINE_SEPARATOR;
    }
    this.isFirstLine = false;
  }
};

// community-modules/csv-export/src/csvExport/csvCreator.ts
var CsvCreator = class extends BaseCreator {
  constructor() {
    super(...arguments);
    this.beanName = "csvCreator";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.funcColsService = beans.funcColsService;
    this.valueService = beans.valueService;
    this.gridSerializer = beans.gridSerializer;
  }
  postConstruct() {
    this.setBeans({
      gridSerializer: this.gridSerializer,
      gos: this.gos
    });
  }
  getMergedParams(params) {
    const baseParams = this.gos.get("defaultCsvExportParams");
    return Object.assign({}, baseParams, params);
  }
  export(userParams) {
    if (this.isExportSuppressed()) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`Export cancelled. Export is not allowed as per your configuration.`);
      return;
    }
    const mergedParams = this.getMergedParams(userParams);
    const data = this.getData(mergedParams);
    const packagedFile = new Blob(["\uFEFF", data], {
      type: "text/plain"
    });
    const fileName = typeof mergedParams.fileName === "function" ? mergedParams.fileName(this.gos.getGridCommonParams()) : mergedParams.fileName;
    Downloader.download(this.getFileName(fileName), packagedFile);
  }
  exportDataAsCsv(params) {
    this.export(params);
  }
  getDataAsCsv(params, skipDefaultParams = false) {
    const mergedParams = skipDefaultParams ? Object.assign({}, params) : this.getMergedParams(params);
    return this.getData(mergedParams);
  }
  getDefaultFileExtension() {
    return "csv";
  }
  createSerializingSession(params) {
    const {
      columnModel,
      columnNameService,
      funcColsService,
      valueService,
      gos
    } = this;
    const {
      processCellCallback,
      processHeaderCallback,
      processGroupHeaderCallback,
      processRowGroupCallback,
      suppressQuotes,
      columnSeparator
    } = params;
    return new CsvSerializingSession({
      columnModel,
      columnNameService,
      funcColsService,
      valueService,
      gos,
      processCellCallback: processCellCallback || void 0,
      processHeaderCallback: processHeaderCallback || void 0,
      processGroupHeaderCallback: processGroupHeaderCallback || void 0,
      processRowGroupCallback: processRowGroupCallback || void 0,
      suppressQuotes: suppressQuotes || false,
      columnSeparator: columnSeparator || ","
    });
  }
  isExportSuppressed() {
    return this.gos.get("suppressCsvExport");
  }
};

// community-modules/csv-export/src/csvExportModule.ts


// community-modules/csv-export/src/csvExport/csvExportApi.ts
function getDataAsCsv(beans, params) {
  return beans.csvCreator?.getDataAsCsv(params);
}
function exportDataAsCsv(beans, params) {
  beans.csvCreator?.exportDataAsCsv(params);
}

// community-modules/csv-export/src/csvExport/gridSerializer.ts

var RowType = /* @__PURE__ */(RowType2 => {
  RowType2[RowType2["HEADER_GROUPING"] = 0] = "HEADER_GROUPING";
  RowType2[RowType2["HEADER"] = 1] = "HEADER";
  RowType2[RowType2["BODY"] = 2] = "BODY";
  return RowType2;
})(RowType || {});
var GridSerializer = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "gridSerializer";
  }
  wireBeans(beans) {
    this.visibleColsService = beans.visibleColsService;
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.rowModel = beans.rowModel;
    this.pinnedRowModel = beans.pinnedRowModel;
    this.selectionService = beans.selectionService;
    this.rowNodeSorter = beans.rowNodeSorter;
    this.sortController = beans.sortController;
  }
  serialize(gridSerializingSession, params = {}) {
    const {
      allColumns,
      columnKeys,
      skipRowGroups
    } = params;
    const columnsToExport = this.getColumnsToExport(allColumns, skipRowGroups, columnKeys);
    const serializeChain = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._compose)(
    // first pass, put in the header names of the cols
    this.prepareSession(columnsToExport), this.prependContent(params), this.exportColumnGroups(params, columnsToExport), this.exportHeaders(params, columnsToExport), this.processPinnedTopRows(params, columnsToExport), this.processRows(params, columnsToExport), this.processPinnedBottomRows(params, columnsToExport), this.appendContent(params));
    return serializeChain(gridSerializingSession).parse();
  }
  processRow(gridSerializingSession, params, columnsToExport, node) {
    const rowSkipper = params.shouldRowBeSkipped || (() => false);
    const skipSingleChildrenGroup = this.gos.get("groupRemoveSingleChildren");
    const skipLowestSingleChildrenGroup = this.gos.get("groupRemoveLowestSingleChildren");
    const isClipboardExport = params.rowPositions != null;
    const isExplicitExportSelection = isClipboardExport || !!params.onlySelected;
    const hideOpenParents = this.gos.get("groupHideOpenParents") && !isExplicitExportSelection;
    const isLeafNode = this.columnModel.isPivotMode() ? node.leafGroup : !node.group;
    const isFooter = !!node.footer;
    const shouldSkipLowestGroup = skipLowestSingleChildrenGroup && node.leafGroup;
    const shouldSkipCurrentGroup = node.allChildrenCount === 1 && node.childrenAfterGroup?.length === 1 && (skipSingleChildrenGroup || shouldSkipLowestGroup);
    if (!isLeafNode && !isFooter && (params.skipRowGroups || shouldSkipCurrentGroup || hideOpenParents) || params.onlySelected && !node.isSelected() || params.skipPinnedTop && node.rowPinned === "top" || params.skipPinnedBottom && node.rowPinned === "bottom") {
      return;
    }
    const nodeIsRootNode = node.level === -1;
    if (nodeIsRootNode && !isLeafNode && !isFooter) {
      return;
    }
    const shouldRowBeSkipped = rowSkipper(this.gos.addGridCommonParams({
      node
    }));
    if (shouldRowBeSkipped) {
      return;
    }
    const rowAccumulator = gridSerializingSession.onNewBodyRow(node);
    columnsToExport.forEach((column, index) => {
      rowAccumulator.onColumn(column, index, node);
    });
    if (params.getCustomContentBelowRow) {
      const content = params.getCustomContentBelowRow(this.gos.addGridCommonParams({
        node
      }));
      if (content) {
        gridSerializingSession.addCustomContent(content);
      }
    }
  }
  appendContent(params) {
    return gridSerializingSession => {
      const appendContent = params.appendContent;
      if (appendContent) {
        gridSerializingSession.addCustomContent(appendContent);
      }
      return gridSerializingSession;
    };
  }
  prependContent(params) {
    return gridSerializingSession => {
      const prependContent = params.prependContent;
      if (prependContent) {
        gridSerializingSession.addCustomContent(prependContent);
      }
      return gridSerializingSession;
    };
  }
  prepareSession(columnsToExport) {
    return gridSerializingSession => {
      gridSerializingSession.prepare(columnsToExport);
      return gridSerializingSession;
    };
  }
  exportColumnGroups(params, columnsToExport) {
    return gridSerializingSession => {
      if (!params.skipColumnGroupHeaders) {
        const idCreator = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.GroupInstanceIdCreator();
        const displayedGroups = this.visibleColsService.createGroups({
          columns: columnsToExport,
          idCreator,
          pinned: null,
          isStandaloneStructure: true
        });
        this.recursivelyAddHeaderGroups(displayedGroups, gridSerializingSession, params.processGroupHeaderCallback);
      }
      return gridSerializingSession;
    };
  }
  exportHeaders(params, columnsToExport) {
    return gridSerializingSession => {
      if (!params.skipColumnHeaders) {
        const gridRowIterator = gridSerializingSession.onNewHeaderRow();
        columnsToExport.forEach((column, index) => {
          gridRowIterator.onColumn(column, index, void 0);
        });
      }
      return gridSerializingSession;
    };
  }
  processPinnedTopRows(params, columnsToExport) {
    return gridSerializingSession => {
      const processRow = this.processRow.bind(this, gridSerializingSession, params, columnsToExport);
      if (params.rowPositions) {
        params.rowPositions.filter(position => position.rowPinned === "top").sort((a, b) => a.rowIndex - b.rowIndex).map(position => this.pinnedRowModel.getPinnedTopRow(position.rowIndex)).forEach(processRow);
      } else {
        this.pinnedRowModel.forEachPinnedRow("top", processRow);
      }
      return gridSerializingSession;
    };
  }
  processRows(params, columnsToExport) {
    return gridSerializingSession => {
      const rowModel = this.rowModel;
      const usingCsrm = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isClientSideRowModel)(this.gos);
      const usingSsrm = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isServerSideRowModel)(this.gos);
      const onlySelectedNonStandardModel = !usingCsrm && params.onlySelected;
      const processRow = this.processRow.bind(this, gridSerializingSession, params, columnsToExport);
      const {
        exportedRows = "filteredAndSorted"
      } = params;
      if (params.rowPositions) {
        params.rowPositions.filter(position => position.rowPinned == null).sort((a, b) => a.rowIndex - b.rowIndex).map(position => rowModel.getRow(position.rowIndex)).forEach(processRow);
      } else if (this.columnModel.isPivotMode()) {
        if (usingCsrm) {
          rowModel.forEachPivotNode(processRow, true);
        } else if (usingSsrm) {
          rowModel.forEachNodeAfterFilterAndSort(processRow, true);
        } else {
          rowModel.forEachNode(processRow);
        }
      } else {
        if (params.onlySelectedAllPages || onlySelectedNonStandardModel) {
          const selectedNodes = this.selectionService.getSelectedNodes();
          this.replicateSortedOrder(selectedNodes);
          selectedNodes.forEach(processRow);
        } else {
          if (exportedRows === "all") {
            rowModel.forEachNode(processRow);
          } else if (usingCsrm) {
            rowModel.forEachNodeAfterFilterAndSort(processRow, true);
          } else if (usingSsrm) {
            rowModel.forEachNodeAfterFilterAndSort(processRow, true);
          } else {
            rowModel.forEachNode(processRow);
          }
        }
      }
      return gridSerializingSession;
    };
  }
  replicateSortedOrder(rows) {
    const sortOptions = this.sortController.getSortOptions();
    const compareNodes = (rowA, rowB) => {
      if (rowA.rowIndex != null && rowB.rowIndex != null) {
        return rowA.rowIndex - rowB.rowIndex;
      }
      if (rowA.level === rowB.level) {
        if (rowA.parent?.id === rowB.parent?.id) {
          return this.rowNodeSorter.compareRowNodes(sortOptions, {
            rowNode: rowA,
            currentPos: rowA.rowIndex ?? -1
          }, {
            rowNode: rowB,
            currentPos: rowB.rowIndex ?? -1
          });
        }
        return compareNodes(rowA.parent, rowB.parent);
      }
      if (rowA.level > rowB.level) {
        return compareNodes(rowA.parent, rowB);
      }
      return compareNodes(rowA, rowB.parent);
    };
    rows.sort(compareNodes);
  }
  processPinnedBottomRows(params, columnsToExport) {
    return gridSerializingSession => {
      const processRow = this.processRow.bind(this, gridSerializingSession, params, columnsToExport);
      if (params.rowPositions) {
        params.rowPositions.filter(position => position.rowPinned === "bottom").sort((a, b) => a.rowIndex - b.rowIndex).map(position => this.pinnedRowModel.getPinnedBottomRow(position.rowIndex)).forEach(processRow);
      } else {
        this.pinnedRowModel.forEachPinnedRow("bottom", processRow);
      }
      return gridSerializingSession;
    };
  }
  getColumnsToExport(allColumns = false, skipRowGroups = false, columnKeys) {
    const isPivotMode = this.columnModel.isPivotMode();
    if (columnKeys && columnKeys.length) {
      return this.columnModel.getColsForKeys(columnKeys);
    }
    const isTreeData = this.gos.get("treeData");
    let columnsToExport = [];
    if (allColumns && !isPivotMode) {
      columnsToExport = this.columnModel.getCols();
    } else {
      columnsToExport = this.visibleColsService.getAllCols();
    }
    if (skipRowGroups && !isTreeData) {
      columnsToExport = columnsToExport.filter(column => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.isColumnGroupAutoCol)(column) || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.isColumnControlsCol)(column));
    }
    return columnsToExport;
  }
  recursivelyAddHeaderGroups(displayedGroups, gridSerializingSession, processGroupHeaderCallback) {
    const directChildrenHeaderGroups = [];
    displayedGroups.forEach(columnGroupChild => {
      const columnGroup = columnGroupChild;
      if (!columnGroup.getChildren) {
        return;
      }
      columnGroup.getChildren().forEach(it => directChildrenHeaderGroups.push(it));
    });
    if (displayedGroups.length > 0 && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.isColumnGroup)(displayedGroups[0])) {
      this.doAddHeaderHeader(gridSerializingSession, displayedGroups, processGroupHeaderCallback);
    }
    if (directChildrenHeaderGroups && directChildrenHeaderGroups.length > 0) {
      this.recursivelyAddHeaderGroups(directChildrenHeaderGroups, gridSerializingSession, processGroupHeaderCallback);
    }
  }
  doAddHeaderHeader(gridSerializingSession, displayedGroups, processGroupHeaderCallback) {
    const gridRowIterator = gridSerializingSession.onNewHeaderGroupingRow();
    let columnIndex = 0;
    displayedGroups.forEach(columnGroupChild => {
      const columnGroup = columnGroupChild;
      let name;
      if (processGroupHeaderCallback) {
        name = processGroupHeaderCallback(this.gos.addGridCommonParams({
          columnGroup
        }));
      } else {
        name = this.columnNameService.getDisplayNameForColumnGroup(columnGroup, "header");
      }
      const collapsibleGroupRanges = columnGroup.getLeafColumns().reduce((collapsibleGroups, currentColumn, currentIdx, arr) => {
        let lastGroup = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._last)(collapsibleGroups);
        const groupShow = currentColumn.getColumnGroupShow() === "open";
        if (!groupShow) {
          if (lastGroup && lastGroup[1] == null) {
            lastGroup[1] = currentIdx - 1;
          }
        } else if (!lastGroup || lastGroup[1] != null) {
          lastGroup = [currentIdx];
          collapsibleGroups.push(lastGroup);
        }
        if (currentIdx === arr.length - 1 && lastGroup && lastGroup[1] == null) {
          lastGroup[1] = currentIdx;
        }
        return collapsibleGroups;
      }, []);
      gridRowIterator.onColumn(columnGroup, name || "", columnIndex++, columnGroup.getLeafColumns().length - 1, collapsibleGroupRanges);
    });
  }
};

// community-modules/csv-export/src/version.ts
var VERSION = "32.3.3";

// community-modules/csv-export/src/csvExportModule.ts
var CsvExportCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.CsvExportModule}-core`,
  beans: [CsvCreator, GridSerializer]
});
var CsvExportApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.CsvExportModule}-api`,
  apiFunctions: {
    getDataAsCsv,
    exportDataAsCsv
  },
  dependantModules: [CsvExportCoreModule]
});
var CsvExportModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.CsvExportModule,
  dependantModules: [CsvExportCoreModule, CsvExportApiModule]
});

// community-modules/csv-export/src/csvExport/xmlFactory.ts
var LINE_SEPARATOR2 = "\r\n";
function returnAttributeIfPopulated(key, value, booleanTransformer) {
  if (!value && value !== "" && value !== 0) {
    return "";
  }
  let xmlValue = value;
  if (typeof value === "boolean") {
    if (booleanTransformer) {
      xmlValue = booleanTransformer(value);
    }
  }
  return ` ${key}="${xmlValue}"`;
}
var XmlFactory = class {
  static createHeader(headerElement = {}) {
    const headerStart = "<?";
    const headerEnd = "?>";
    const keys = ["version"];
    if (!headerElement.version) {
      headerElement.version = "1.0";
    }
    if (headerElement.encoding) {
      keys.push("encoding");
    }
    if (headerElement.standalone) {
      keys.push("standalone");
    }
    const att = keys.map(key => `${key}="${headerElement[key]}"`).join(" ");
    return `${headerStart}xml ${att} ${headerEnd}`;
  }
  static createXml(xmlElement, booleanTransformer) {
    let props = "";
    if (xmlElement.properties) {
      if (xmlElement.properties.prefixedAttributes) {
        xmlElement.properties.prefixedAttributes.forEach(prefixedSet => {
          Object.keys(prefixedSet.map).forEach(key => {
            props += returnAttributeIfPopulated(prefixedSet.prefix + key, prefixedSet.map[key], booleanTransformer);
          });
        });
      }
      if (xmlElement.properties.rawMap) {
        Object.keys(xmlElement.properties.rawMap).forEach(key => {
          props += returnAttributeIfPopulated(key, xmlElement.properties.rawMap[key], booleanTransformer);
        });
      }
    }
    let result = "<" + xmlElement.name + props;
    if (!xmlElement.children && xmlElement.textNode == null) {
      return result + "/>" + LINE_SEPARATOR2;
    }
    if (xmlElement.textNode != null) {
      return result + ">" + xmlElement.textNode + "</" + xmlElement.name + ">" + LINE_SEPARATOR2;
    }
    result += ">" + LINE_SEPARATOR2;
    if (xmlElement.children) {
      xmlElement.children.forEach(it => {
        result += this.createXml(it, booleanTransformer);
      });
    }
    return result + "</" + xmlElement.name + ">" + LINE_SEPARATOR2;
  }
};

// community-modules/csv-export/src/csvExport/zipContainer/zipContainerHelper.ts


// community-modules/csv-export/src/csvExport/zipContainer/compress.ts
var compressBlob = /*#__PURE__*/function () {
  var _ref = (0,C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    let chunksSize = 0;
    const chunks = [];
    const writeCompressedData = new WritableStream({
      write: chunk => {
        chunks.push(chunk);
        chunksSize += chunk.length;
      }
    });
    const readable = new ReadableStream({
      start: controller => {
        const reader = new FileReader();
        reader.onload = e => {
          if (e.target?.result) {
            controller.enqueue(e.target.result);
          }
          controller.close();
        };
        reader.readAsArrayBuffer(data);
      }
    });
    const compressStream = new window.CompressionStream("deflate-raw");
    yield readable.pipeThrough(compressStream).pipeTo(writeCompressedData);
    return {
      size: chunksSize,
      content: new Blob(chunks)
    };
  });
  return function compressBlob(_x) {
    return _ref.apply(this, arguments);
  };
}();
var deflateLocalFile = /*#__PURE__*/function () {
  var _ref2 = (0,C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rawContent) {
    const contentAsBlob = new Blob([rawContent]);
    const {
      size: compressedSize,
      content: compressedContent
    } = yield compressBlob(contentAsBlob);
    const compressedContentAsUint8Array = new Uint8Array(yield compressedContent.arrayBuffer());
    return {
      size: compressedSize,
      content: compressedContentAsUint8Array
    };
  });
  return function deflateLocalFile(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// community-modules/csv-export/src/csvExport/zipContainer/convert.ts
var convertTime = date => {
  let time = date.getHours();
  time <<= 6;
  time = time | date.getMinutes();
  time <<= 5;
  time = time | date.getSeconds() / 2;
  return time;
};
var convertDate = date => {
  let dt = date.getFullYear() - 1980;
  dt <<= 4;
  dt = dt | date.getMonth() + 1;
  dt <<= 5;
  dt = dt | date.getDate();
  return dt;
};
function convertDecToHex(number, bytes) {
  let hex = "";
  for (let i = 0; i < bytes; i++) {
    hex += String.fromCharCode(number & 255);
    number >>>= 8;
  }
  return hex;
}

// community-modules/csv-export/src/csvExport/zipContainer/crcTable.ts
var getCrcFromCrc32TableAndByteArray = content => {
  if (!content.length) {
    return 0;
  }
  let crc = 0 ^ -1;
  let j = 0;
  let k = 0;
  let l = 0;
  for (let i = 0; i < content.length; i++) {
    j = content[i];
    k = (crc ^ j) & 255;
    l = crcTable[k];
    crc = crc >>> 8 ^ l;
  }
  return crc ^ -1;
};
var getCrcFromCrc32Table = content => {
  if (!content.length) {
    return 0;
  }
  if (typeof content === "string") {
    return getCrcFromCrc32TableAndByteArray(new TextEncoder().encode(content));
  }
  return getCrcFromCrc32TableAndByteArray(content);
};
var crcTable = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);

// community-modules/csv-export/src/csvExport/zipContainer/zipContainerHelper.ts
var getHeaders = (currentFile, isCompressed, offset, rawSize, rawContent, deflatedSize) => {
  const {
    content,
    path,
    created: creationDate
  } = currentFile;
  const time = convertTime(creationDate);
  const dt = convertDate(creationDate);
  const crcFlag = getCrcFromCrc32Table(rawContent);
  const zipSize = deflatedSize !== void 0 ? deflatedSize : rawSize;
  const utfPath = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._utf8_encode)(path);
  const isUTF8 = utfPath !== path;
  let extraFields = "";
  if (isUTF8) {
    const uExtraFieldPath = convertDecToHex(1, 1) + convertDecToHex(getCrcFromCrc32Table(utfPath), 4) + utfPath;
    extraFields = "up" + convertDecToHex(uExtraFieldPath.length, 2) + uExtraFieldPath;
  }
  const commonHeader = "\0" + (
  // version needed to extract
  isUTF8 ? "\0\b" : "\0\0") +
  // Language encoding flag (EFS) (12th bit turned on)
  convertDecToHex(isCompressed ? 8 : 0, 2) +
  // As per ECMA-376 Part 2 specs
  convertDecToHex(time, 2) +
  // last modified time
  convertDecToHex(dt, 2) +
  // last modified date
  convertDecToHex(zipSize ? crcFlag : 0, 4) + convertDecToHex(deflatedSize ?? rawSize, 4) +
  // compressed size
  convertDecToHex(rawSize, 4) +
  // uncompressed size
  convertDecToHex(utfPath.length, 2) +
  // file name length
  convertDecToHex(extraFields.length, 2);
  const localFileHeader = "PK" + commonHeader + utfPath + extraFields;
  const centralDirectoryHeader = "PK\0" + commonHeader +
  // file header
  "\0\0\0\0\0\0" + (content ? "\0\0\0\0" : "\0\0\0") +
  // external file attributes
  convertDecToHex(offset, 4) +
  // relative offset of local header
  utfPath +
  // file name
  extraFields;
  return {
    localFileHeader: Uint8Array.from(localFileHeader, c => c.charCodeAt(0)),
    centralDirectoryHeader: Uint8Array.from(centralDirectoryHeader, c => c.charCodeAt(0))
  };
};
var getDecodedContent = content => {
  let contentToUse;
  if (typeof content === "string") {
    const base64String = atob(content.split(";base64,")[1]);
    contentToUse = Uint8Array.from(base64String, c => c.charCodeAt(0));
  } else {
    contentToUse = content;
  }
  return {
    size: contentToUse.length,
    content: contentToUse
  };
};
var getDeflatedHeaderAndContent = /*#__PURE__*/function () {
  var _ref3 = (0,C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (currentFile, offset) {
    const {
      content
    } = currentFile;
    const {
      size,
      content: rawContent
    } = !content ? {
      size: 0,
      content: Uint8Array.from([])
    } : getDecodedContent(content);
    let deflatedContent = void 0;
    let deflatedSize = void 0;
    let deflationPerformed = false;
    const shouldDeflate = currentFile.type === "file" && rawContent && size > 0;
    if (shouldDeflate) {
      const result = yield deflateLocalFile(rawContent);
      deflatedContent = result.content;
      deflatedSize = result.size;
      deflationPerformed = true;
    }
    const headers = getHeaders(currentFile, deflationPerformed, offset, size, rawContent, deflatedSize);
    return {
      ...headers,
      content: deflatedContent || rawContent,
      isCompressed: deflationPerformed
    };
  });
  return function getDeflatedHeaderAndContent(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getHeaderAndContent = (currentFile, offset) => {
  const {
    content
  } = currentFile;
  const {
    content: rawContent
  } = !content ? {
    content: Uint8Array.from([])
  } : getDecodedContent(content);
  const headers = getHeaders(currentFile, false, offset, rawContent.length, rawContent, void 0);
  return {
    ...headers,
    content: rawContent,
    isCompressed: false
  };
};
var buildCentralDirectoryEnd = (tLen, cLen, lLen) => {
  const str = "PK\0\0\0\0" + convertDecToHex(tLen, 2) +
  // total number of entries in the central folder
  convertDecToHex(tLen, 2) +
  // total number of entries in the central folder
  convertDecToHex(cLen, 4) +
  // size of the central folder
  convertDecToHex(lLen, 4) +
  // central folder start offset
  "\0\0";
  return Uint8Array.from(str, c => c.charCodeAt(0));
};

// community-modules/csv-export/src/csvExport/zipContainer/zipContainer.ts
var ZipContainer = class {
  static addFolders(paths) {
    paths.forEach(this.addFolder.bind(this));
  }
  static addFolder(path) {
    this.folders.push({
      path,
      created: /* @__PURE__ */new Date(),
      isBase64: false,
      type: "folder"
    });
  }
  static addFile(path, content, isBase64 = false) {
    this.files.push({
      path,
      created: /* @__PURE__ */new Date(),
      content: isBase64 ? content : new TextEncoder().encode(content),
      isBase64,
      type: "file"
    });
  }
  static getZipFile(mimeType = "application/zip") {
    var _this = this;
    return (0,C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const textOutput = yield _this.buildCompressedFileStream();
      _this.clearStream();
      return new Blob([textOutput], {
        type: mimeType
      });
    })();
  }
  static getUncompressedZipFile(mimeType = "application/zip") {
    const textOutput = this.buildFileStream();
    this.clearStream();
    return new Blob([textOutput], {
      type: mimeType
    });
  }
  static clearStream() {
    this.folders = [];
    this.files = [];
  }
  static packageFiles(files) {
    let fileLen = 0;
    let folderLen = 0;
    for (const currentFile of files) {
      const {
        localFileHeader,
        centralDirectoryHeader,
        content
      } = currentFile;
      fileLen += localFileHeader.length + content.length;
      folderLen += centralDirectoryHeader.length;
    }
    const fileData = new Uint8Array(fileLen);
    const folderData = new Uint8Array(folderLen);
    let fileOffset = 0;
    let folderOffset = 0;
    for (const currentFile of files) {
      const {
        localFileHeader,
        centralDirectoryHeader,
        content
      } = currentFile;
      fileData.set(localFileHeader, fileOffset);
      fileOffset += localFileHeader.length;
      fileData.set(content, fileOffset);
      fileOffset += content.length;
      folderData.set(centralDirectoryHeader, folderOffset);
      folderOffset += centralDirectoryHeader.length;
    }
    const folderEnd = buildCentralDirectoryEnd(files.length, folderLen, fileLen);
    const result = new Uint8Array(fileData.length + folderData.length + folderEnd.length);
    result.set(fileData);
    result.set(folderData, fileData.length);
    result.set(folderEnd, fileData.length + folderData.length);
    return result;
  }
  static buildCompressedFileStream() {
    var _this2 = this;
    return (0,C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const totalFiles = [..._this2.folders, ..._this2.files];
      const readyFiles = [];
      let lL = 0;
      for (const currentFile of totalFiles) {
        const output = yield getDeflatedHeaderAndContent(currentFile, lL);
        const {
          localFileHeader,
          content
        } = output;
        readyFiles.push(output);
        lL += localFileHeader.length + content.length;
      }
      return _this2.packageFiles(readyFiles);
    })();
  }
  static buildFileStream() {
    const totalFiles = [...this.folders, ...this.files];
    const readyFiles = [];
    let lL = 0;
    for (const currentFile of totalFiles) {
      const readyFile = getHeaderAndContent(currentFile, lL);
      const {
        localFileHeader,
        content
      } = readyFile;
      readyFiles.push(readyFile);
      lL += localFileHeader.length + content.length;
    }
    return this.packageFiles(readyFiles);
  }
};
ZipContainer.folders = [];
ZipContainer.files = [];


/***/ }),

/***/ 23553:
/*!******************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/clipboard/dist/package/main.esm.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipboardModule: () => (/* binding */ ClipboardModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-community/csv-export */ 92974);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/clipboard/src/clipboardModule.ts




// enterprise-modules/clipboard/src/clipboard/clipboardApi.ts
function copyToClipboard(beans, params) {
  beans.clipboardService?.copyToClipboard(params);
}
function cutToClipboard(beans, params) {
  beans.clipboardService?.cutToClipboard(params);
}
function copySelectedRowsToClipboard(beans, params) {
  beans.clipboardService?.copySelectedRowsToClipboard(params);
}
function copySelectedRangeToClipboard(beans, params) {
  beans.clipboardService?.copySelectedRangeToClipboard(params);
}
function copySelectedRangeDown(beans) {
  beans.clipboardService?.copyRangeDown();
}
function pasteFromClipboard(beans) {
  beans.clipboardService?.pasteFromClipboard();
}

// enterprise-modules/clipboard/src/clipboard/clipboardService.ts

var SOURCE_PASTE = "paste";
var EXPORT_TYPE_DRAG_COPY = "dragCopy";
var EXPORT_TYPE_CLIPBOARD = "clipboard";
var apiError = method => `AG Grid: Unable to use the Clipboard API (navigator.clipboard.${method}()). The reason why it could not be used has been logged in the previous line. For this reason the grid has defaulted to using a workaround which doesn't perform as well. Either fix why Clipboard API is blocked, OR stop this message from appearing by setting grid property suppressClipboardApi=true (which will default the grid to using the workaround rather than the API.`;
var ClipboardService = class _ClipboardService extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "clipboardService";
    this.lastPasteOperationTime = 0;
    this.navigatorApiFailed = false;
  }
  wireBeans(beans) {
    this.csvCreator = beans.csvCreator;
    this.selectionService = beans.selectionService;
    this.rowModel = beans.rowModel;
    this.ctrlsService = beans.ctrlsService;
    this.valueService = beans.valueService;
    this.focusService = beans.focusService;
    this.rowRenderer = beans.rowRenderer;
    this.visibleColsService = beans.visibleColsService;
    this.funcColsService = beans.funcColsService;
    this.cellNavigationService = beans.cellNavigationService;
    this.cellPositionUtils = beans.cellPositionUtils;
    this.rowPositionUtils = beans.rowPositionUtils;
    this.rangeService = beans.rangeService;
  }
  postConstruct() {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos)) {
      this.clientSideRowModel = this.rowModel;
    }
    this.ctrlsService.whenReady(this, p => {
      this.gridCtrl = p.gridCtrl;
    });
  }
  pasteFromClipboard() {
    const allowNavigator = !this.gos.get("suppressClipboardApi");
    if (allowNavigator && !this.navigatorApiFailed && navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(this.processClipboardData.bind(this)).catch(e => {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`${e}
${apiError("readText")}`);
        this.navigatorApiFailed = true;
        this.pasteFromClipboardLegacy();
      });
    } else {
      this.pasteFromClipboardLegacy();
    }
  }
  pasteFromClipboardLegacy() {
    let defaultPrevented = false;
    const handlePasteEvent = e => {
      const currentPastOperationTime = (/* @__PURE__ */new Date()).getTime();
      if (currentPastOperationTime - this.lastPasteOperationTime < 50) {
        defaultPrevented = true;
        e.preventDefault();
      }
      this.lastPasteOperationTime = currentPastOperationTime;
    };
    this.executeOnTempElement(textArea => {
      textArea.addEventListener("paste", handlePasteEvent);
      textArea.focus({
        preventScroll: true
      });
    }, element => {
      const data = element.value;
      if (!defaultPrevented) {
        this.processClipboardData(data);
      } else {
        this.refocusLastFocusedCell();
      }
      element.removeEventListener("paste", handlePasteEvent);
    });
  }
  refocusLastFocusedCell() {
    const focusedCell = this.focusService.getFocusedCell();
    if (focusedCell) {
      this.focusService.setFocusedCell({
        rowIndex: focusedCell.rowIndex,
        column: focusedCell.column,
        rowPinned: focusedCell.rowPinned,
        forceBrowserFocus: true
      });
    }
  }
  getClipboardDelimiter() {
    const delimiter = this.gos.get("clipboardDelimiter");
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(delimiter) ? delimiter : "	";
  }
  processClipboardData(data) {
    if (data == null) {
      return;
    }
    let parsedData = _ClipboardService.stringToArray(data, this.getClipboardDelimiter());
    const userFunc = this.gos.getCallback("processDataFromClipboard");
    if (userFunc) {
      parsedData = userFunc({
        data: parsedData
      });
    }
    if (parsedData == null) {
      return;
    }
    if (this.gos.get("suppressLastEmptyLineOnPaste")) {
      this.removeLastLineIfBlank(parsedData);
    }
    const pasteOperation = (cellsToFlash, updatedRowNodes, focusedCell, changedPath) => {
      const rangeActive = this.rangeService?.isMoreThanOneCell();
      const pasteIntoRange = rangeActive && !this.hasOnlyOneValueToPaste(parsedData);
      if (pasteIntoRange) {
        this.pasteIntoActiveRange(this.rangeService, parsedData, cellsToFlash, updatedRowNodes, changedPath);
      } else {
        this.pasteStartingFromFocusedCell(parsedData, cellsToFlash, updatedRowNodes, focusedCell, changedPath);
      }
    };
    this.doPasteOperation(pasteOperation);
  }
  // This will parse a delimited string into an array of arrays.
  static stringToArray(strData, delimiter = ",") {
    const data = [];
    const isNewline = char => char === "\r" || char === "\n";
    let insideQuotedField = false;
    if (strData === "") {
      return [[""]];
    }
    for (let row = 0, column = 0, position = 0; position < strData.length; position++) {
      const previousChar = strData[position - 1];
      const currentChar = strData[position];
      const nextChar = strData[position + 1];
      const ensureDataExists = () => {
        if (!data[row]) {
          data[row] = [];
        }
        if (!data[row][column]) {
          data[row][column] = "";
        }
      };
      ensureDataExists();
      if (currentChar === '"') {
        if (insideQuotedField) {
          if (nextChar === '"') {
            data[row][column] += '"';
            position++;
          } else {
            insideQuotedField = false;
          }
        } else if (previousChar === void 0 || previousChar === delimiter || isNewline(previousChar)) {
          insideQuotedField = true;
        }
      }
      if (!insideQuotedField && currentChar !== '"') {
        if (currentChar === delimiter) {
          column++;
          ensureDataExists();
          continue;
        } else if (isNewline(currentChar)) {
          column = 0;
          row++;
          ensureDataExists();
          if (currentChar === "\r" && nextChar === "\n") {
            position++;
          }
          continue;
        }
      }
      data[row][column] += currentChar;
    }
    return data;
  }
  // common code to paste operations, e.g. paste to cell, paste to range, and copy range down
  doPasteOperation(pasteOperationFunc) {
    const source = "clipboard";
    this.eventService.dispatchEvent({
      type: "pasteStart",
      source
    });
    let changedPath;
    if (this.clientSideRowModel) {
      const onlyChangedColumns = this.gos.get("aggregateOnlyChangedColumns");
      changedPath = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ChangedPath(onlyChangedColumns, this.clientSideRowModel.getRootNode());
    }
    const cellsToFlash = {};
    const updatedRowNodes = [];
    const focusedCell = this.focusService.getFocusedCell();
    pasteOperationFunc(cellsToFlash, updatedRowNodes, focusedCell, changedPath);
    const nodesToRefresh = [...updatedRowNodes];
    if (changedPath) {
      this.clientSideRowModel.doAggregate(changedPath);
      changedPath.forEachChangedNodeDepthFirst(rowNode => {
        nodesToRefresh.push(rowNode);
      });
    }
    this.rowRenderer.refreshCells({
      rowNodes: nodesToRefresh
    });
    this.dispatchFlashCells(cellsToFlash);
    this.fireRowChanged(updatedRowNodes);
    this.refocusLastFocusedCell();
    this.eventService.dispatchEvent({
      type: "pasteEnd",
      source
    });
  }
  pasteIntoActiveRange(rangeService, clipboardData, cellsToFlash, updatedRowNodes, changedPath) {
    const abortRepeatingPasteIntoRows = this.getRangeSize(rangeService) % clipboardData.length != 0;
    let indexOffset = 0;
    let dataRowIndex = 0;
    const rowCallback = (currentRow, rowNode, columns, index) => {
      const atEndOfClipboardData = index - indexOffset >= clipboardData.length;
      if (atEndOfClipboardData) {
        if (abortRepeatingPasteIntoRows) {
          return;
        }
        indexOffset += dataRowIndex;
        dataRowIndex = 0;
      }
      const currentRowData = clipboardData[index - indexOffset];
      updatedRowNodes.push(rowNode);
      const processCellFromClipboardFunc = this.gos.getCallback("processCellFromClipboard");
      columns.forEach((column, idx) => {
        if (!column.isCellEditable(rowNode) || column.isSuppressPaste(rowNode)) {
          return;
        }
        if (idx >= currentRowData.length) {
          idx = idx % currentRowData.length;
        }
        const newValue = this.processCell(rowNode, column, currentRowData[idx], EXPORT_TYPE_DRAG_COPY, processCellFromClipboardFunc, true);
        rowNode.setDataValue(column, newValue, SOURCE_PASTE);
        if (changedPath) {
          changedPath.addParentNode(rowNode.parent, [column]);
        }
        const {
          rowIndex,
          rowPinned
        } = currentRow;
        const cellId = this.cellPositionUtils.createIdFromValues({
          rowIndex,
          column,
          rowPinned
        });
        cellsToFlash[cellId] = true;
      });
      dataRowIndex++;
    };
    this.iterateActiveRanges(false, rowCallback);
  }
  getDisplayedColumnsStartingAt(column) {
    let currentColumn = column;
    const columns = [];
    while (currentColumn != null) {
      columns.push(currentColumn);
      currentColumn = this.visibleColsService.getColAfter(currentColumn);
    }
    return columns;
  }
  pasteStartingFromFocusedCell(parsedData, cellsToFlash, updatedRowNodes, focusedCell, changedPath) {
    if (!focusedCell) {
      return;
    }
    const currentRow = {
      rowIndex: focusedCell.rowIndex,
      rowPinned: focusedCell.rowPinned
    };
    const columnsToPasteInto = this.getDisplayedColumnsStartingAt(focusedCell.column);
    if (this.isPasteSingleValueIntoRange(parsedData)) {
      this.pasteSingleValueIntoRange(parsedData, updatedRowNodes, cellsToFlash, changedPath);
    } else {
      this.pasteMultipleValues(parsedData, currentRow, updatedRowNodes, columnsToPasteInto, cellsToFlash, EXPORT_TYPE_CLIPBOARD, changedPath);
    }
  }
  // if range is active, and only one cell, then we paste this cell into all cells in the active range.
  isPasteSingleValueIntoRange(parsedData) {
    return this.hasOnlyOneValueToPaste(parsedData) && this.rangeService != null && !this.rangeService.isEmpty();
  }
  pasteSingleValueIntoRange(parsedData, updatedRowNodes, cellsToFlash, changedPath) {
    const value = parsedData[0][0];
    const rowCallback = (currentRow, rowNode, columns) => {
      updatedRowNodes.push(rowNode);
      columns.forEach(column => this.updateCellValue(rowNode, column, value, cellsToFlash, EXPORT_TYPE_CLIPBOARD, changedPath));
    };
    this.iterateActiveRanges(false, rowCallback);
  }
  hasOnlyOneValueToPaste(parsedData) {
    return parsedData.length === 1 && parsedData[0].length === 1;
  }
  copyRangeDown() {
    if (!this.rangeService || this.rangeService.isEmpty()) {
      return;
    }
    const firstRowValues = [];
    const pasteOperation = (cellsToFlash, updatedRowNodes, focusedCell, changedPath) => {
      const processCellForClipboardFunc = this.gos.getCallback("processCellForClipboard");
      const processCellFromClipboardFunc = this.gos.getCallback("processCellFromClipboard");
      const rowCallback = (currentRow, rowNode, columns) => {
        if (!firstRowValues.length) {
          columns.forEach(column => {
            const value = this.processCell(rowNode, column, this.valueService.getValue(column, rowNode), EXPORT_TYPE_DRAG_COPY, processCellForClipboardFunc, false, true);
            firstRowValues.push(value);
          });
        } else {
          updatedRowNodes.push(rowNode);
          columns.forEach((column, index) => {
            if (!column.isCellEditable(rowNode) || column.isSuppressPaste(rowNode)) {
              return;
            }
            const firstRowValue = this.processCell(rowNode, column, firstRowValues[index], EXPORT_TYPE_DRAG_COPY, processCellFromClipboardFunc, true);
            rowNode.setDataValue(column, firstRowValue, SOURCE_PASTE);
            if (changedPath) {
              changedPath.addParentNode(rowNode.parent, [column]);
            }
            const {
              rowIndex,
              rowPinned
            } = currentRow;
            const cellId = this.cellPositionUtils.createIdFromValues({
              rowIndex,
              column,
              rowPinned
            });
            cellsToFlash[cellId] = true;
          });
        }
      };
      this.iterateActiveRanges(true, rowCallback);
    };
    this.doPasteOperation(pasteOperation);
  }
  removeLastLineIfBlank(parsedData) {
    const lastLine = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(parsedData);
    const lastLineIsBlank = lastLine && lastLine.length === 1 && lastLine[0] === "";
    if (lastLineIsBlank) {
      if (parsedData.length === 1) {
        return;
      }
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._removeFromArray)(parsedData, lastLine);
    }
  }
  fireRowChanged(rowNodes) {
    if (this.gos.get("editType") !== "fullRow") {
      return;
    }
    rowNodes.forEach(rowNode => {
      this.eventService.dispatchEvent({
        type: "rowValueChanged",
        node: rowNode,
        data: rowNode.data,
        rowIndex: rowNode.rowIndex,
        rowPinned: rowNode.rowPinned
      });
    });
  }
  pasteMultipleValues(clipboardGridData, currentRow, updatedRowNodes, columnsToPasteInto, cellsToFlash, type, changedPath) {
    let rowPointer = currentRow;
    const skipGroupRows = this.clientSideRowModel != null && !this.gos.get("enableGroupEdit") && !this.gos.get("treeData");
    const getNextGoodRowNode = () => {
      while (true) {
        if (!rowPointer) {
          return null;
        }
        const res = this.rowPositionUtils.getRowNode(rowPointer);
        rowPointer = this.cellNavigationService.getRowBelow({
          rowPinned: rowPointer.rowPinned,
          rowIndex: rowPointer.rowIndex
        });
        if (res == null) {
          return null;
        }
        const skipRow = res.detail || res.footer || skipGroupRows && res.group;
        if (!skipRow) {
          return res;
        }
      }
    };
    clipboardGridData.forEach(clipboardRowData => {
      const rowNode = getNextGoodRowNode();
      if (!rowNode) {
        return;
      }
      clipboardRowData.forEach((value, index) => this.updateCellValue(rowNode, columnsToPasteInto[index], value, cellsToFlash, type, changedPath));
      updatedRowNodes.push(rowNode);
    });
  }
  updateCellValue(rowNode, column, value, cellsToFlash, type, changedPath) {
    if (!rowNode || !column || !column.isCellEditable(rowNode) || column.isSuppressPaste(rowNode)) {
      return;
    }
    const processedValue = this.processCell(rowNode, column, value, type, this.gos.getCallback("processCellFromClipboard"), true);
    rowNode.setDataValue(column, processedValue, SOURCE_PASTE);
    const {
      rowIndex,
      rowPinned
    } = rowNode;
    const cellId = this.cellPositionUtils.createIdFromValues({
      rowIndex,
      column,
      rowPinned
    });
    cellsToFlash[cellId] = true;
    if (changedPath) {
      changedPath.addParentNode(rowNode.parent, [column]);
    }
  }
  copyToClipboard(params = {}) {
    this.copyOrCutToClipboard(params);
  }
  cutToClipboard(params = {}, source = "api") {
    if (this.gos.get("suppressCutToClipboard")) {
      return;
    }
    this.eventService.dispatchEvent({
      type: "cutStart",
      source
    });
    this.copyOrCutToClipboard(params, true);
    this.eventService.dispatchEvent({
      type: "cutEnd",
      source
    });
  }
  copyOrCutToClipboard(params, cut) {
    let {
      includeHeaders,
      includeGroupHeaders
    } = params;
    if (includeHeaders == null) {
      includeHeaders = this.gos.get("copyHeadersToClipboard");
    }
    if (includeGroupHeaders == null) {
      includeGroupHeaders = this.gos.get("copyGroupHeadersToClipboard");
    }
    const copyParams = {
      includeHeaders,
      includeGroupHeaders
    };
    const rowSelection = this.gos.get("rowSelection");
    const cellSelection = this.gos.get("cellSelection");
    let cellClearType = null;
    if (this.shouldCopyCells(cellSelection, rowSelection)) {
      this.copySelectedRangeToClipboard(copyParams);
      cellClearType = 0 /* CellRange */;
    } else if (this.shouldCopyRows(rowSelection)) {
      this.copySelectedRowsToClipboard(copyParams);
      cellClearType = 1 /* SelectedRows */;
    } else if (this.focusService.isAnyCellFocused()) {
      this.copyFocusedCellToClipboard(copyParams);
      cellClearType = 2 /* FocusedCell */;
    }
    if (cut && cellClearType !== null) {
      this.clearCellsAfterCopy(cellClearType);
    }
  }
  shouldCopyCells(cellSelection, rowSelection) {
    if (!this.rangeService || this.rangeService.isEmpty()) {
      return false;
    }
    if (cellSelection) {
      const shouldCopyRowsInstead = typeof rowSelection === "object" && rowSelection.copySelectedRows && !this.selectionService.isEmpty();
      return !shouldCopyRowsInstead;
    } else {
      const suppressCopySingleCellRanges = this.gos.get("suppressCopySingleCellRanges");
      const shouldSkip = !this.rangeService.isMoreThanOneCell() && suppressCopySingleCellRanges;
      return !shouldSkip;
    }
  }
  shouldCopyRows(rowSelection) {
    if (this.selectionService.isEmpty()) {
      return false;
    }
    if (rowSelection && typeof rowSelection !== "string") {
      return rowSelection.copySelectedRows ?? false;
    } else {
      return !this.gos.get("suppressCopyRowsToClipboard");
    }
  }
  clearCellsAfterCopy(type) {
    this.eventService.dispatchEvent({
      type: "keyShortcutChangedCellStart"
    });
    if (type === 0 /* CellRange */) {
      this.rangeService.clearCellRangeCellValues({
        cellEventSource: "clipboardService"
      });
    } else if (type === 1 /* SelectedRows */) {
      this.clearSelectedRows();
    } else {
      const focusedCell = this.focusService.getFocusedCell();
      if (focusedCell == null) {
        return;
      }
      const rowNode = this.rowPositionUtils.getRowNode(focusedCell);
      if (rowNode) {
        this.clearCellValue(rowNode, focusedCell.column);
      }
    }
    this.eventService.dispatchEvent({
      type: "keyShortcutChangedCellEnd"
    });
  }
  clearSelectedRows() {
    const selected = this.selectionService.getSelectedNodes();
    const columns = this.visibleColsService.getAllCols();
    for (const row of selected) {
      for (const col of columns) {
        this.clearCellValue(row, col);
      }
    }
  }
  clearCellValue(rowNode, column) {
    if (!column.isCellEditable(rowNode)) {
      return;
    }
    const emptyValue = this.valueService.getDeleteValue(column, rowNode);
    rowNode.setDataValue(column, emptyValue, "clipboardService");
  }
  iterateActiveRanges(onlyFirst, rowCallback, columnCallback) {
    if (!this.rangeService || this.rangeService.isEmpty()) {
      return;
    }
    const cellRanges = this.rangeService.getCellRanges();
    if (onlyFirst) {
      this.iterateActiveRange(cellRanges[0], rowCallback, columnCallback, true);
    } else {
      cellRanges.forEach((range, idx) => this.iterateActiveRange(range, rowCallback, columnCallback, idx === cellRanges.length - 1));
    }
  }
  iterateActiveRange(range, rowCallback, columnCallback, isLastRange) {
    if (!this.rangeService) {
      return;
    }
    let currentRow = this.rangeService.getRangeStartRow(range);
    const lastRow = this.rangeService.getRangeEndRow(range);
    if (columnCallback && range.columns) {
      columnCallback(range.columns);
    }
    let rangeIndex = 0;
    let isLastRow = false;
    while (!isLastRow && currentRow != null) {
      const rowNode = this.rowPositionUtils.getRowNode(currentRow);
      isLastRow = this.rowPositionUtils.sameRow(currentRow, lastRow);
      rowCallback(currentRow, rowNode, range.columns, rangeIndex++, isLastRow && isLastRange);
      currentRow = this.cellNavigationService.getRowBelow(currentRow);
    }
  }
  copySelectedRangeToClipboard(params = {}) {
    if (!this.rangeService || this.rangeService.isEmpty()) {
      return;
    }
    const allRangesMerge = this.rangeService.areAllRangesAbleToMerge();
    const {
      data,
      cellsToFlash
    } = allRangesMerge ? this.buildDataFromMergedRanges(this.rangeService, params) : this.buildDataFromRanges(this.rangeService, params);
    this.copyDataToClipboard(data);
    this.dispatchFlashCells(cellsToFlash);
  }
  buildDataFromMergedRanges(rangeService, params) {
    const columnsSet = /* @__PURE__ */new Set();
    const ranges = rangeService.getCellRanges();
    const rowPositionsMap = /* @__PURE__ */new Map();
    const allRowPositions = [];
    const allCellsToFlash = {};
    ranges.forEach(range => {
      range.columns.forEach(col => columnsSet.add(col));
      const {
        rowPositions,
        cellsToFlash
      } = this.getRangeRowPositionsAndCellsToFlash(rangeService, range);
      rowPositions.forEach(rowPosition => {
        const rowPositionAsString = `${rowPosition.rowIndex}-${rowPosition.rowPinned || "null"}`;
        if (!rowPositionsMap.get(rowPositionAsString)) {
          rowPositionsMap.set(rowPositionAsString, true);
          allRowPositions.push(rowPosition);
        }
      });
      Object.assign(allCellsToFlash, cellsToFlash);
    });
    const allColumns = this.visibleColsService.getAllCols();
    const exportedColumns = Array.from(columnsSet);
    exportedColumns.sort((a, b) => {
      const posA = allColumns.indexOf(a);
      const posB = allColumns.indexOf(b);
      return posA - posB;
    });
    const data = this.buildExportParams({
      columns: exportedColumns,
      rowPositions: allRowPositions,
      includeHeaders: params.includeHeaders,
      includeGroupHeaders: params.includeGroupHeaders
    });
    return {
      data,
      cellsToFlash: allCellsToFlash
    };
  }
  buildDataFromRanges(rangeService, params) {
    const ranges = rangeService.getCellRanges();
    const data = [];
    const allCellsToFlash = {};
    ranges.forEach(range => {
      const {
        rowPositions,
        cellsToFlash
      } = this.getRangeRowPositionsAndCellsToFlash(rangeService, range);
      Object.assign(allCellsToFlash, cellsToFlash);
      data.push(this.buildExportParams({
        columns: range.columns,
        rowPositions,
        includeHeaders: params.includeHeaders,
        includeGroupHeaders: params.includeGroupHeaders
      }));
    });
    return {
      data: data.join("\n"),
      cellsToFlash: allCellsToFlash
    };
  }
  getRangeRowPositionsAndCellsToFlash(rangeService, range) {
    const rowPositions = [];
    const cellsToFlash = {};
    const startRow = rangeService.getRangeStartRow(range);
    const lastRow = rangeService.getRangeEndRow(range);
    let node = startRow;
    while (node) {
      rowPositions.push(node);
      range.columns.forEach(column => {
        const {
          rowIndex,
          rowPinned
        } = node;
        const cellId = this.cellPositionUtils.createIdFromValues({
          rowIndex,
          column,
          rowPinned
        });
        cellsToFlash[cellId] = true;
      });
      if (this.rowPositionUtils.sameRow(node, lastRow)) {
        break;
      }
      node = this.cellNavigationService.getRowBelow(node);
    }
    return {
      rowPositions,
      cellsToFlash
    };
  }
  getCellsToFlashFromRowNodes(rowNodes) {
    const allDisplayedColumns = this.visibleColsService.getAllCols();
    const cellsToFlash = {};
    for (let i = 0; i < rowNodes.length; i++) {
      const {
        rowIndex,
        rowPinned
      } = rowNodes[i];
      if (rowIndex == null) {
        continue;
      }
      for (let j = 0; j < allDisplayedColumns.length; j++) {
        const column = allDisplayedColumns[j];
        const cellId = this.cellPositionUtils.createIdFromValues({
          rowIndex,
          column,
          rowPinned
        });
        cellsToFlash[cellId] = true;
      }
    }
    return cellsToFlash;
  }
  copyFocusedCellToClipboard(params = {}) {
    const focusedCell = this.focusService.getFocusedCell();
    if (focusedCell == null) {
      return;
    }
    const cellId = this.cellPositionUtils.createId(focusedCell);
    const currentRow = {
      rowPinned: focusedCell.rowPinned,
      rowIndex: focusedCell.rowIndex
    };
    const column = focusedCell.column;
    const data = this.buildExportParams({
      columns: [column],
      rowPositions: [currentRow],
      includeHeaders: params.includeHeaders,
      includeGroupHeaders: params.includeGroupHeaders
    });
    this.copyDataToClipboard(data);
    this.dispatchFlashCells({
      [cellId]: true
    });
  }
  copySelectedRowsToClipboard(params = {}) {
    const {
      columnKeys,
      includeHeaders,
      includeGroupHeaders
    } = params;
    const data = this.buildExportParams({
      columns: columnKeys,
      includeHeaders,
      includeGroupHeaders
    });
    this.copyDataToClipboard(data);
    const rowNodes = this.selectionService.getSelectedNodes() || [];
    this.dispatchFlashCells(this.getCellsToFlashFromRowNodes(rowNodes));
  }
  buildExportParams(params) {
    const {
      columns,
      rowPositions,
      includeHeaders = false,
      includeGroupHeaders = false
    } = params;
    const exportParams = {
      columnKeys: columns,
      rowPositions,
      skipColumnHeaders: !includeHeaders,
      skipColumnGroupHeaders: !includeGroupHeaders,
      suppressQuotes: true,
      columnSeparator: this.getClipboardDelimiter(),
      onlySelected: !rowPositions,
      processCellCallback: this.gos.getCallback("processCellForClipboard"),
      processRowGroupCallback: params2 => this.processRowGroupCallback(params2),
      processHeaderCallback: this.gos.getCallback("processHeaderForClipboard"),
      processGroupHeaderCallback: this.gos.getCallback("processGroupHeaderForClipboard")
    };
    return this.csvCreator.getDataAsCsv(exportParams, true);
  }
  processRowGroupCallback(params) {
    const {
      node,
      column
    } = params;
    const isTreeData = this.gos.get("treeData");
    const isSuppressGroupMaintainValueType = this.gos.get("suppressGroupMaintainValueType");
    const getValueFromNode = () => {
      if (isTreeData || isSuppressGroupMaintainValueType || !column) {
        return node.key;
      }
      const value2 = node.groupData?.[column.getId()];
      if (!value2 || !node.rowGroupColumn || node.rowGroupColumn.getColDef().useValueFormatterForExport === false) {
        return value2;
      }
      return this.valueService.formatValue(node.rowGroupColumn, node, value2) ?? value2;
    };
    let value = getValueFromNode();
    if (params.node.footer) {
      let suffix = "";
      if (value && value.length) {
        suffix = ` ${value}`;
      }
      value = `Total${suffix}`;
    }
    const processCellForClipboard = this.gos.getCallback("processCellForClipboard");
    if (processCellForClipboard) {
      let column2 = node.rowGroupColumn;
      if (!column2 && node.footer && node.level === -1) {
        column2 = this.funcColsService.getRowGroupColumns()[0];
      }
      return processCellForClipboard({
        value,
        node,
        column: column2,
        type: "clipboard",
        formatValue: valueToFormat => this.valueService.formatValue(column2, node, valueToFormat) ?? valueToFormat,
        parseValue: valueToParse => this.valueService.parseValue(column2, node, valueToParse, this.valueService.getValue(column2, node))
      });
    }
    return value;
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  dispatchFlashCells(cellsToFlash) {
    window.setTimeout(() => {
      this.eventService.dispatchEvent({
        type: "flashCells",
        cells: cellsToFlash
      });
    }, 0);
  }
  processCell(rowNode, column, value, type, func, canParse, canFormat) {
    if (func) {
      const params = {
        column,
        node: rowNode,
        value,
        type,
        formatValue: valueToFormat => this.valueService.formatValue(column, rowNode ?? null, valueToFormat) ?? valueToFormat,
        parseValue: valueToParse => this.valueService.parseValue(column, rowNode ?? null, valueToParse, this.valueService.getValue(column, rowNode))
      };
      return func(params);
    }
    if (canParse && column.getColDef().useValueParserForImport !== false) {
      return this.valueService.parseValue(column, rowNode ?? null, value, this.valueService.getValue(column, rowNode));
    }
    if (canFormat && column.getColDef().useValueFormatterForExport !== false) {
      return this.valueService.formatValue(column, rowNode ?? null, value) ?? value;
    }
    return value;
  }
  copyDataToClipboard(data) {
    const userProvidedFunc = this.gos.getCallback("sendToClipboard");
    if (userProvidedFunc) {
      userProvidedFunc({
        data
      });
      return;
    }
    const allowNavigator = !this.gos.get("suppressClipboardApi");
    if (allowNavigator && navigator.clipboard) {
      navigator.clipboard.writeText(data).catch(e => {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`${e}
${apiError("writeText")}`);
        this.copyDataToClipboardLegacy(data);
      });
      return;
    }
    this.copyDataToClipboardLegacy(data);
  }
  copyDataToClipboardLegacy(data) {
    this.executeOnTempElement(element => {
      const eDocument = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getDocument)(this.gos);
      const focusedElementBefore = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getActiveDomElement)(this.gos);
      element.value = data || " ";
      element.select();
      element.focus({
        preventScroll: true
      });
      const result = eDocument.execCommand("copy");
      if (!result) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Browser did not allow document.execCommand('copy'). Ensure api.copySelectedRowsToClipboard() is invoked via a user event, i.e. button click, otherwise the browser will prevent it for security reasons.");
      }
      if (focusedElementBefore != null && focusedElementBefore.focus != null) {
        focusedElementBefore.focus({
          preventScroll: true
        });
      }
    });
  }
  executeOnTempElement(callbackNow, callbackAfter) {
    const eDoc = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getDocument)(this.gos);
    const eTempInput = eDoc.createElement("textarea");
    eTempInput.style.width = "1px";
    eTempInput.style.height = "1px";
    eTempInput.style.top = eDoc.documentElement.scrollTop + "px";
    eTempInput.style.left = eDoc.documentElement.scrollLeft + "px";
    eTempInput.style.position = "absolute";
    eTempInput.style.opacity = "0";
    const guiRoot = this.gridCtrl.getGui();
    guiRoot.appendChild(eTempInput);
    try {
      callbackNow(eTempInput);
    } catch (err) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Browser does not support document.execCommand('copy') for clipboard operations");
    }
    if (callbackAfter) {
      window.setTimeout(() => {
        callbackAfter(eTempInput);
        guiRoot.removeChild(eTempInput);
      }, 100);
    } else {
      guiRoot.removeChild(eTempInput);
    }
  }
  getRangeSize(rangeService) {
    const ranges = rangeService.getCellRanges();
    let startRangeIndex = 0;
    let endRangeIndex = 0;
    if (ranges.length > 0) {
      startRangeIndex = rangeService.getRangeStartRow(ranges[0]).rowIndex;
      endRangeIndex = rangeService.getRangeEndRow(ranges[0]).rowIndex;
    }
    return startRangeIndex - endRangeIndex + 1;
  }
};

// enterprise-modules/clipboard/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/clipboard/src/clipboardModule.ts
var ClipboardCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ClipboardModule}-core`,
  beans: [ClipboardService],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule, _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_2__.CsvExportModule]
});
var ClipboardApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ClipboardModule}-api`,
  apiFunctions: {
    copyToClipboard,
    cutToClipboard,
    copySelectedRowsToClipboard,
    copySelectedRangeToClipboard,
    copySelectedRangeDown,
    pasteFromClipboard
  },
  dependantModules: [ClipboardCoreModule]
});
var ClipboardModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ClipboardModule,
  dependantModules: [ClipboardCoreModule, ClipboardApiModule]
});


/***/ }),

/***/ 48855:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/column-tool-panel/dist/package/main.esm.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgPrimaryCols: () => (/* binding */ AgPrimaryCols),
/* harmony export */   ColumnsToolPanelModule: () => (/* binding */ ColumnsToolPanelModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
/* harmony import */ var _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-enterprise/row-grouping */ 37857);
/* harmony import */ var _ag_grid_enterprise_side_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-enterprise/side-bar */ 32466);
// enterprise-modules/column-tool-panel/src/columnsToolPanelModule.ts





// enterprise-modules/column-tool-panel/src/columnToolPanel/columnToolPanel.ts



// enterprise-modules/column-tool-panel/src/columnToolPanel/agPrimaryCols.ts


// enterprise-modules/column-tool-panel/src/columnToolPanel/agPrimaryColsHeader.ts

var DEBOUNCE_DELAY = 300;
var AgPrimaryColsHeader = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-column-select-header" role="presentation">
            <div data-ref="eExpand" class="ag-column-select-header-icon"></div>
            <ag-checkbox data-ref="eSelect" class="ag-column-select-header-checkbox"></ag-checkbox>
            <ag-input-text-field class="ag-column-select-header-filter-wrapper" data-ref="eFilterTextField"></ag-input-text-field>
        </div>`, [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgCheckboxSelector, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgInputTextFieldSelector]);
    this.eExpand = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eSelect = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eFilterTextField = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
  }
  postConstruct() {
    this.createExpandIcons();
    this.addManagedListeners(this.eExpand, {
      click: this.onExpandClicked.bind(this),
      keydown: e => {
        if (e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.SPACE) {
          e.preventDefault();
          this.onExpandClicked();
        }
      }
    });
    this.addManagedElementListeners(this.eSelect.getInputElement(), {
      click: this.onSelectClicked.bind(this)
    });
    this.addManagedPropertyListener("functionsReadOnly", () => this.onFunctionsReadOnlyPropChanged());
    this.eFilterTextField.setAutoComplete(false).onValueChange(() => this.onFilterTextChanged());
    this.addManagedElementListeners(this.eFilterTextField.getInputElement(), {
      keydown: this.onMiniFilterKeyDown.bind(this)
    });
    this.addManagedEventListeners({
      newColumnsLoaded: this.showOrHideOptions.bind(this)
    });
    const translate = this.localeService.getLocaleTextFunc();
    this.eSelect.setInputAriaLabel(translate("ariaColumnSelectAll", "Toggle All Columns Visibility"));
    this.eFilterTextField.setInputAriaLabel(translate("ariaFilterColumnsInput", "Filter Columns Input"));
    this.activateTabIndex([this.eExpand]);
  }
  onFunctionsReadOnlyPropChanged() {
    const readOnly = this.gos.get("functionsReadOnly");
    this.eSelect.setReadOnly(readOnly);
    this.eSelect.addOrRemoveCssClass("ag-column-select-column-readonly", readOnly);
  }
  init(params) {
    this.params = params;
    const readOnly = this.gos.get("functionsReadOnly");
    this.eSelect.setReadOnly(readOnly);
    this.eSelect.addOrRemoveCssClass("ag-column-select-column-readonly", readOnly);
    if (this.columnModel.isReady()) {
      this.showOrHideOptions();
    }
  }
  createExpandIcons() {
    this.eExpand.appendChild(this.eExpandChecked = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectOpen", this.gos));
    this.eExpand.appendChild(this.eExpandUnchecked = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectClosed", this.gos));
    this.eExpand.appendChild(this.eExpandIndeterminate = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectIndeterminate", this.gos));
    this.setExpandState(0 /* EXPANDED */);
  }
  // we only show expand / collapse if we are showing columns
  showOrHideOptions() {
    const showFilter = !this.params.suppressColumnFilter;
    const showSelect = !this.params.suppressColumnSelectAll;
    const showExpand = !this.params.suppressColumnExpandAll;
    const groupsPresent = this.columnModel.isProvidedColGroupsPresent();
    const translate = this.localeService.getLocaleTextFunc();
    this.eFilterTextField.setInputPlaceholder(translate("searchOoo", "Search..."));
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterTextField.getGui(), showFilter);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eSelect.getGui(), showSelect);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpand, showExpand && groupsPresent);
  }
  onFilterTextChanged() {
    if (!this.onFilterTextChangedDebounced) {
      this.onFilterTextChangedDebounced = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._debounce)(() => {
        const filterText = this.eFilterTextField.getValue();
        this.dispatchLocalEvent({
          type: "filterChanged",
          filterText
        });
      }, DEBOUNCE_DELAY);
    }
    this.onFilterTextChangedDebounced();
  }
  onMiniFilterKeyDown(e) {
    if (e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.ENTER) {
      setTimeout(() => this.onSelectClicked(), DEBOUNCE_DELAY);
    }
  }
  onSelectClicked() {
    this.dispatchLocalEvent({
      type: this.selectState ? "unselectAll" : "selectAll"
    });
  }
  onExpandClicked() {
    this.dispatchLocalEvent({
      type: this.expandState === 0 /* EXPANDED */ ? "collapseAll" : "expandAll"
    });
  }
  setExpandState(state) {
    this.expandState = state;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandChecked, this.expandState === 0 /* EXPANDED */);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandUnchecked, this.expandState === 1 /* COLLAPSED */);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandIndeterminate, this.expandState === 2 /* INDETERMINATE */);
  }
  setSelectionState(state) {
    this.selectState = state;
    this.eSelect.setValue(this.selectState);
  }
};
var AgPrimaryColsHeaderSelector = {
  selector: "AG-PRIMARY-COLS-HEADER",
  component: AgPrimaryColsHeader
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/agPrimaryColsList.ts



// enterprise-modules/column-tool-panel/src/columnToolPanel/columnModelItem.ts

var ColumnModelItem = class {
  constructor(displayName, columnOrGroup, dept, group = false, expanded) {
    this.localEventService = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.LocalEventService();
    this.displayName = displayName;
    this.dept = dept;
    this.group = group;
    if (group) {
      this.columnGroup = columnOrGroup;
      this.expanded = expanded;
      this.children = [];
    } else {
      this.column = columnOrGroup;
    }
  }
  isGroup() {
    return this.group;
  }
  getDisplayName() {
    return this.displayName;
  }
  getColumnGroup() {
    return this.columnGroup;
  }
  getColumn() {
    return this.column;
  }
  getDept() {
    return this.dept;
  }
  isExpanded() {
    return !!this.expanded;
  }
  getChildren() {
    return this.children;
  }
  isPassesFilter() {
    return this.passesFilter;
  }
  setExpanded(expanded) {
    if (expanded === this.expanded) {
      return;
    }
    this.expanded = expanded;
    this.localEventService.dispatchEvent({
      type: "expandedChanged"
    });
  }
  setPassesFilter(passesFilter) {
    this.passesFilter = passesFilter;
  }
  addEventListener(eventType, listener) {
    this.localEventService.addEventListener(eventType, listener);
  }
  removeEventListener(eventType, listener) {
    this.localEventService.removeEventListener(eventType, listener);
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/primaryColsListPanelItemDragFeature.ts



// enterprise-modules/column-tool-panel/src/columnToolPanel/toolPanelColumnGroupComp.ts


// enterprise-modules/column-tool-panel/src/columnToolPanel/toolPanelContextMenu.ts


var ToolPanelContextMenu = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(column, mouseEvent, parentEl) {
    super(/* html */
    `<div class="ag-menu"></div>`);
    this.column = column;
    this.mouseEvent = mouseEvent;
    this.parentEl = parentEl;
    this.displayName = null;
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.funcColsService = beans.funcColsService;
    this.popupService = beans.popupService;
    this.focusService = beans.focusService;
  }
  postConstruct() {
    this.initializeProperties(this.column);
    this.buildMenuItemMap();
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isColumn)(this.column)) {
      this.displayName = this.columnNameService.getDisplayNameForColumn(this.column, "columnToolPanel");
    } else {
      this.displayName = this.columnNameService.getDisplayNameForProvidedColumnGroup(null, this.column, "columnToolPanel");
    }
    if (this.isActive()) {
      this.mouseEvent.preventDefault();
      const menuItemsMapped = this.getMappedMenuItems();
      if (menuItemsMapped.length === 0) {
        return;
      }
      this.displayContextMenu(menuItemsMapped);
    }
  }
  initializeProperties(column) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(column)) {
      this.columns = column.getLeafColumns();
    } else {
      this.columns = [column];
    }
    this.allowGrouping = this.columns.some(col => col.isPrimary() && col.isAllowRowGroup());
    this.allowValues = this.columns.some(col => col.isPrimary() && col.isAllowValue());
    this.allowPivoting = this.columnModel.isPivotMode() && this.columns.some(col => col.isPrimary() && col.isAllowPivot());
  }
  buildMenuItemMap() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    this.menuItemMap = /* @__PURE__ */new Map();
    this.menuItemMap.set("rowGroup", {
      allowedFunction: col => col.isPrimary() && col.isAllowRowGroup() && !this.columnModel.isColGroupLocked(col),
      activeFunction: col => col.isRowGroupActive(),
      activateLabel: () => `${localeTextFunc("groupBy", "Group by")} ${this.displayName}`,
      deactivateLabel: () => `${localeTextFunc("ungroupBy", "Un-Group by")} ${this.displayName}`,
      activateFunction: () => {
        const groupedColumns = this.funcColsService.getRowGroupColumns();
        this.funcColsService.setRowGroupColumns(this.addColumnsToList(groupedColumns), "toolPanelUi");
      },
      deActivateFunction: () => {
        const groupedColumns = this.funcColsService.getRowGroupColumns();
        this.funcColsService.setRowGroupColumns(this.removeColumnsFromList(groupedColumns), "toolPanelUi");
      },
      addIcon: "menuAddRowGroup",
      removeIcon: "menuRemoveRowGroup"
    });
    this.menuItemMap.set("value", {
      allowedFunction: col => col.isPrimary() && col.isAllowValue(),
      activeFunction: col => col.isValueActive(),
      activateLabel: () => localeTextFunc("addToValues", `Add ${this.displayName} to values`, [this.displayName]),
      deactivateLabel: () => localeTextFunc("removeFromValues", `Remove ${this.displayName} from values`, [this.displayName]),
      activateFunction: () => {
        const valueColumns = this.funcColsService.getValueColumns();
        this.funcColsService.setValueColumns(this.addColumnsToList(valueColumns), "toolPanelUi");
      },
      deActivateFunction: () => {
        const valueColumns = this.funcColsService.getValueColumns();
        this.funcColsService.setValueColumns(this.removeColumnsFromList(valueColumns), "toolPanelUi");
      },
      addIcon: "valuePanel",
      removeIcon: "valuePanel"
    });
    this.menuItemMap.set("pivot", {
      allowedFunction: col => this.columnModel.isPivotMode() && col.isPrimary() && col.isAllowPivot(),
      activeFunction: col => col.isPivotActive(),
      activateLabel: () => localeTextFunc("addToLabels", `Add ${this.displayName} to labels`, [this.displayName]),
      deactivateLabel: () => localeTextFunc("removeFromLabels", `Remove ${this.displayName} from labels`, [this.displayName]),
      activateFunction: () => {
        const pivotColumns = this.funcColsService.getPivotColumns();
        this.funcColsService.setPivotColumns(this.addColumnsToList(pivotColumns), "toolPanelUi");
      },
      deActivateFunction: () => {
        const pivotColumns = this.funcColsService.getPivotColumns();
        this.funcColsService.setPivotColumns(this.removeColumnsFromList(pivotColumns), "toolPanelUi");
      },
      addIcon: "pivotPanel",
      removeIcon: "pivotPanel"
    });
  }
  addColumnsToList(columnList) {
    return [...columnList].concat(this.columns.filter(col => columnList.indexOf(col) === -1));
  }
  removeColumnsFromList(columnList) {
    return columnList.filter(col => this.columns.indexOf(col) === -1);
  }
  displayContextMenu(menuItemsMapped) {
    const eGui = this.getGui();
    const menuList = this.createBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.AgMenuList());
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    let hideFunc = () => {};
    eGui.appendChild(menuList.getGui());
    menuList.addMenuItems(menuItemsMapped);
    menuList.addManagedListeners(menuList, {
      closeMenu: () => {
        this.parentEl.focus();
        hideFunc();
      }
    });
    const addPopupRes = this.popupService.addPopup({
      modal: true,
      eChild: eGui,
      closeOnEsc: true,
      afterGuiAttached: () => this.focusService.focusInto(menuList.getGui()),
      ariaLabel: localeTextFunc("ariaLabelContextMenu", "Context Menu"),
      closedCallback: e => {
        if (e instanceof KeyboardEvent) {
          this.parentEl.focus();
        }
        this.destroyBean(menuList);
      }
    });
    if (addPopupRes) {
      hideFunc = addPopupRes.hideFunc;
    }
    this.popupService.positionPopupUnderMouseEvent({
      type: "columnContextMenu",
      mouseEvent: this.mouseEvent,
      ePopup: eGui
    });
  }
  isActive() {
    return this.allowGrouping || this.allowValues || this.allowPivoting;
  }
  getMappedMenuItems() {
    const ret = [];
    for (const val of this.menuItemMap.values()) {
      const isInactive = this.columns.some(col => val.allowedFunction(col) && !val.activeFunction(col));
      const isActive = this.columns.some(col => val.allowedFunction(col) && val.activeFunction(col));
      if (isInactive) {
        ret.push({
          name: val.activateLabel(this.displayName),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)(val.addIcon, this.gos, null),
          action: () => val.activateFunction()
        });
      }
      if (isActive) {
        ret.push({
          name: val.deactivateLabel(this.displayName),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)(val.removeIcon, this.gos, null),
          action: () => val.deActivateFunction()
        });
      }
    }
    return ret;
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/toolPanelColumnGroupComp.ts
var ToolPanelColumnGroupComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(modelItem, allowDragging, eventType, focusWrapper) {
    super();
    this.modelItem = modelItem;
    this.allowDragging = allowDragging;
    this.eventType = eventType;
    this.focusWrapper = focusWrapper;
    this.cbSelect = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eLabel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eGroupOpenedIcon = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eGroupClosedIcon = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eColumnGroupIcons = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.processingColumnStateChange = false;
    this.modelItem = modelItem;
    this.columnGroup = modelItem.getColumnGroup();
    this.columnDept = modelItem.getDept();
    this.displayName = modelItem.getDisplayName();
    this.allowDragging = allowDragging;
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.dragAndDropService = beans.dragAndDropService;
    this.modelItemUtils = beans.modelItemUtils;
  }
  postConstruct() {
    this.setTemplate(/* html */
    `<div class="ag-column-select-column-group">
                <span class="ag-column-group-icons" data-ref="eColumnGroupIcons" >
                    <span class="ag-column-group-closed-icon" data-ref="eGroupClosedIcon"></span>
                    <span class="ag-column-group-opened-icon" data-ref="eGroupOpenedIcon"></span>
                </span>
                <ag-checkbox data-ref="cbSelect" class="ag-column-select-checkbox"></ag-checkbox>
                <span class="ag-column-select-column-label" data-ref="eLabel"></span>
            </div>`, [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgCheckboxSelector]);
    this.eDragHandle = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnDrag", this.gos);
    this.eDragHandle.classList.add("ag-drag-handle", "ag-column-select-column-group-drag-handle");
    const checkboxGui = this.cbSelect.getGui();
    const checkboxInput = this.cbSelect.getInputElement();
    checkboxGui.insertAdjacentElement("afterend", this.eDragHandle);
    checkboxInput.setAttribute("tabindex", "-1");
    this.eLabel.innerHTML = this.displayName ? this.displayName : "";
    this.setupExpandContract();
    this.addCssClass("ag-column-select-indent-" + this.columnDept);
    this.getGui().style.setProperty("--ag-indentation-level", String(this.columnDept));
    this.addManagedEventListeners({
      columnPivotModeChanged: this.onColumnStateChanged.bind(this)
    });
    this.addManagedElementListeners(this.eLabel, {
      click: this.onLabelClicked.bind(this)
    });
    this.addManagedListeners(this.cbSelect, {
      fieldValueChanged: this.onCheckboxChanged.bind(this)
    });
    this.addManagedListeners(this.modelItem, {
      expandedChanged: this.onExpandChanged.bind(this)
    });
    this.addManagedListeners(this.focusWrapper, {
      keydown: this.handleKeyDown.bind(this),
      contextmenu: this.onContextMenu.bind(this)
    });
    this.setOpenClosedIcons();
    this.setupDragging();
    this.onColumnStateChanged();
    this.addVisibilityListenersToAllChildren();
    this.refreshAriaExpanded();
    this.refreshAriaLabel();
    this.setupTooltip();
    const classes = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getToolPanelClassesFromColDef)(this.columnGroup.getColGroupDef(), this.gos, null, this.columnGroup);
    classes.forEach(c => this.addOrRemoveCssClass(c, true));
  }
  getColumns() {
    return this.columnGroup.getLeafColumns();
  }
  setupTooltip() {
    const colGroupDef = this.columnGroup.getColGroupDef();
    if (!colGroupDef) {
      return;
    }
    const isTooltipWhenTruncated = this.gos.get("tooltipShowMode") === "whenTruncated";
    let shouldDisplayTooltip;
    if (isTooltipWhenTruncated) {
      shouldDisplayTooltip = () => this.eLabel.scrollWidth > this.eLabel.clientWidth;
    }
    const refresh = () => {
      const newTooltipText = colGroupDef.headerTooltip;
      this.setTooltip({
        newTooltipText,
        location: "columnToolPanelColumnGroup",
        shouldDisplayTooltip
      });
    };
    refresh();
    this.addManagedEventListeners({
      newColumnsLoaded: refresh
    });
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "columnToolPanelColumnGroup";
    return res;
  }
  handleKeyDown(e) {
    switch (e.key) {
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.LEFT:
        e.preventDefault();
        this.modelItem.setExpanded(false);
        break;
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.RIGHT:
        e.preventDefault();
        this.modelItem.setExpanded(true);
        break;
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.SPACE:
        e.preventDefault();
        if (this.isSelectable()) {
          this.onSelectAllChanged(!this.isSelected());
        }
        break;
    }
  }
  onContextMenu(e) {
    const {
      columnGroup,
      gos
    } = this;
    if (gos.get("functionsReadOnly")) {
      return;
    }
    const contextMenu = this.createBean(new ToolPanelContextMenu(columnGroup, e, this.focusWrapper));
    this.addDestroyFunc(() => {
      if (contextMenu.isAlive()) {
        this.destroyBean(contextMenu);
      }
    });
  }
  addVisibilityListenersToAllChildren() {
    const listener = this.onColumnStateChanged.bind(this);
    this.columnGroup.getLeafColumns().forEach(column => {
      this.addManagedListeners(column, {
        visibleChanged: listener,
        columnValueChanged: listener,
        columnPivotChanged: listener,
        columnRowGroupChanged: listener
      });
    });
  }
  setupDragging() {
    if (!this.allowDragging) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eDragHandle, false);
      return;
    }
    let hideColumnOnExit = !this.gos.get("suppressDragLeaveHidesColumns");
    const dragSource = {
      type: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.DragSourceType.ToolPanel,
      eElement: this.eDragHandle,
      dragItemName: this.displayName,
      getDefaultIconName: () => hideColumnOnExit ? "hide" : "notAllowed",
      getDragItem: () => this.createDragItem(),
      onDragStarted: () => {
        hideColumnOnExit = !this.gos.get("suppressDragLeaveHidesColumns");
        this.eventService.dispatchEvent({
          type: "columnPanelItemDragStart",
          column: this.columnGroup
        });
      },
      onDragStopped: () => {
        this.eventService.dispatchEvent({
          type: "columnPanelItemDragEnd"
        });
      },
      onGridEnter: dragItem => {
        if (hideColumnOnExit) {
          this.modelItemUtils.updateColumns({
            columns: this.columnGroup.getLeafColumns(),
            visibleState: dragItem?.visibleState,
            pivotState: dragItem?.pivotState,
            eventType: this.eventType
          });
        }
      },
      onGridExit: () => {
        if (hideColumnOnExit) {
          this.onChangeCommon(false);
        }
      }
    };
    this.dragAndDropService.addDragSource(dragSource, true);
    this.addDestroyFunc(() => this.dragAndDropService.removeDragSource(dragSource));
  }
  createDragItem() {
    const columns = this.columnGroup.getLeafColumns();
    const visibleState = {};
    const pivotState = {};
    columns.forEach(col => {
      const colId = col.getId();
      visibleState[colId] = col.isVisible();
      pivotState[colId] = this.modelItemUtils.createPivotState(col);
    });
    return {
      columns,
      visibleState,
      pivotState
    };
  }
  setupExpandContract() {
    this.eGroupClosedIcon.appendChild((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIcon)("columnSelectClosed", this.gos, null));
    this.eGroupOpenedIcon.appendChild((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIcon)("columnSelectOpen", this.gos, null));
    const listener = this.onExpandOrContractClicked.bind(this);
    this.addManagedElementListeners(this.eGroupClosedIcon, {
      click: listener
    });
    this.addManagedElementListeners(this.eGroupOpenedIcon, {
      click: listener
    });
    const touchListener = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.TouchListener(this.eColumnGroupIcons, true);
    this.addManagedListeners(touchListener, {
      tap: listener
    });
    this.addDestroyFunc(touchListener.destroy.bind(touchListener));
  }
  onLabelClicked() {
    const nextState = !this.cbSelect.getValue();
    this.onChangeCommon(nextState);
  }
  onCheckboxChanged(event) {
    this.onChangeCommon(event.selected);
  }
  getVisibleLeafColumns() {
    const childColumns = [];
    const extractCols = children => {
      children.forEach(child => {
        if (!child.isPassesFilter()) {
          return;
        }
        if (child.isGroup()) {
          extractCols(child.getChildren());
        } else {
          childColumns.push(child.getColumn());
        }
      });
    };
    extractCols(this.modelItem.getChildren());
    return childColumns;
  }
  onChangeCommon(nextState) {
    this.refreshAriaLabel();
    if (this.processingColumnStateChange) {
      return;
    }
    this.modelItemUtils.selectAllChildren(this.modelItem.getChildren(), nextState, this.eventType);
  }
  refreshAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const columnLabel = translate("ariaColumnGroup", "Column Group");
    const checkboxValue = this.cbSelect.getValue();
    const state = checkboxValue === void 0 ? translate("ariaIndeterminate", "indeterminate") : checkboxValue ? translate("ariaVisible", "visible") : translate("ariaHidden", "hidden");
    const visibilityLabel = translate("ariaToggleVisibility", "Press SPACE to toggle visibility");
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLabel)(this.focusWrapper, `${this.displayName} ${columnLabel}`);
    this.cbSelect.setInputAriaLabel(`${visibilityLabel} (${state})`);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaDescribedBy)(this.focusWrapper, this.cbSelect.getInputElement().id);
  }
  onColumnStateChanged() {
    const selectedValue = this.workOutSelectedValue();
    const readOnlyValue = this.workOutReadOnlyValue();
    this.processingColumnStateChange = true;
    this.cbSelect.setValue(selectedValue);
    this.cbSelect.setReadOnly(readOnlyValue);
    this.addOrRemoveCssClass("ag-column-select-column-group-readonly", readOnlyValue);
    this.processingColumnStateChange = false;
  }
  workOutSelectedValue() {
    const pivotMode = this.columnModel.isPivotMode();
    const visibleLeafColumns = this.getVisibleLeafColumns();
    let checkedCount = 0;
    let uncheckedCount = 0;
    visibleLeafColumns.forEach(column => {
      if (!pivotMode && column.getColDef().lockVisible) {
        return;
      }
      if (this.isColumnChecked(column, pivotMode)) {
        checkedCount++;
      } else {
        uncheckedCount++;
      }
    });
    if (checkedCount > 0 && uncheckedCount > 0) {
      return void 0;
    }
    return checkedCount > 0;
  }
  workOutReadOnlyValue() {
    const pivotMode = this.columnModel.isPivotMode();
    let colsThatCanAction = 0;
    this.columnGroup.getLeafColumns().forEach(col => {
      if (pivotMode) {
        if (col.isAnyFunctionAllowed()) {
          colsThatCanAction++;
        }
      } else {
        if (!col.getColDef().lockVisible) {
          colsThatCanAction++;
        }
      }
    });
    return colsThatCanAction === 0;
  }
  isColumnChecked(column, pivotMode) {
    if (pivotMode) {
      const pivoted = column.isPivotActive();
      const grouped = column.isRowGroupActive();
      const aggregated = column.isValueActive();
      return pivoted || grouped || aggregated;
    }
    return column.isVisible();
  }
  onExpandOrContractClicked() {
    const oldState = this.modelItem.isExpanded();
    this.modelItem.setExpanded(!oldState);
  }
  onExpandChanged() {
    this.setOpenClosedIcons();
    this.refreshAriaExpanded();
  }
  setOpenClosedIcons() {
    const folderOpen = this.modelItem.isExpanded();
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupClosedIcon, !folderOpen);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupOpenedIcon, folderOpen);
  }
  refreshAriaExpanded() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaExpanded)(this.focusWrapper, this.modelItem.isExpanded());
  }
  getDisplayName() {
    return this.displayName;
  }
  onSelectAllChanged(value) {
    const cbValue = this.cbSelect.getValue();
    const readOnly = this.cbSelect.isReadOnly();
    if (!readOnly && (value && !cbValue || !value && cbValue)) {
      this.cbSelect.toggle();
    }
  }
  isSelected() {
    return this.cbSelect.getValue();
  }
  isSelectable() {
    return !this.cbSelect.isReadOnly();
  }
  setSelected(selected) {
    this.cbSelect.setValue(selected, true);
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/primaryColsListPanelItemDragFeature.ts
var PrimaryColsListPanelItemDragFeature = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor(comp, virtualList) {
    super();
    this.comp = comp;
    this.virtualList = virtualList;
  }
  wireBeans(beans) {
    this.columnMoveService = beans.columnMoveService;
    this.columnModel = beans.columnModel;
  }
  postConstruct() {
    this.createManagedBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.VirtualListDragFeature(this.comp, this.virtualList, {
      dragSourceType: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.DragSourceType.ToolPanel,
      listItemDragStartEvent: "columnPanelItemDragStart",
      listItemDragEndEvent: "columnPanelItemDragEnd",
      eventSource: this.eventService,
      getCurrentDragValue: listItemDragStartEvent => this.getCurrentDragValue(listItemDragStartEvent),
      isMoveBlocked: currentDragValue => this.isMoveBlocked(currentDragValue),
      getNumRows: comp => comp.getDisplayedColsList().length,
      moveItem: (currentDragValue, lastHoveredListItem) => this.moveItem(this.getCurrentColumnsBeingMoved(currentDragValue), lastHoveredListItem)
    }));
  }
  getCurrentDragValue(listItemDragStartEvent) {
    return listItemDragStartEvent.column;
  }
  getCurrentColumnsBeingMoved(column) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(column)) {
      return column.getLeafColumns();
    }
    return column ? [column] : [];
  }
  isMoveBlocked(currentDragValue) {
    const preventMoving = this.gos.get("suppressMovableColumns");
    if (preventMoving) {
      return true;
    }
    const currentColumns = this.getCurrentColumnsBeingMoved(currentDragValue);
    const hasNotMovable = currentColumns.find(col => {
      const colDef = col.getColDef();
      return !!colDef.suppressMovable || !!colDef.lockPosition;
    });
    return !!hasNotMovable;
  }
  moveItem(currentColumns, lastHoveredListItem) {
    if (!lastHoveredListItem) {
      return;
    }
    const {
      component
    } = lastHoveredListItem;
    let lastHoveredColumn = null;
    let isBefore = lastHoveredListItem.position === "top";
    if (component instanceof ToolPanelColumnGroupComp) {
      const columns = component.getColumns();
      lastHoveredColumn = columns[0];
      isBefore = true;
    } else if (component) {
      lastHoveredColumn = component.getColumn();
    }
    if (!lastHoveredColumn) {
      return;
    }
    const targetIndex = this.getMoveTargetIndex({
      currentColumns,
      lastHoveredColumn,
      isBefore
    });
    if (targetIndex != null) {
      this.columnMoveService.moveColumns(currentColumns, targetIndex, "toolPanelUi");
    }
  }
  getMoveTargetIndex(params) {
    const {
      currentColumns,
      lastHoveredColumn,
      isBefore
    } = params;
    if (!lastHoveredColumn || !currentColumns) {
      return null;
    }
    const targetColumnIndex = this.columnModel.getCols().indexOf(lastHoveredColumn);
    const adjustedTarget = isBefore ? targetColumnIndex : targetColumnIndex + 1;
    const diff = this.getMoveDiff(currentColumns, adjustedTarget);
    return adjustedTarget - diff;
  }
  getMoveDiff(currentColumns, end) {
    const allColumns = this.columnModel.getCols();
    if (!currentColumns) {
      return 0;
    }
    const targetColumn = currentColumns[0];
    const span = currentColumns.length;
    const currentIndex = allColumns.indexOf(targetColumn);
    if (currentIndex < end) {
      return span;
    }
    return 0;
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/toolPanelColumnComp.ts

var ToolPanelColumnComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(modelItem, allowDragging, groupsExist, focusWrapper) {
    super();
    this.allowDragging = allowDragging;
    this.groupsExist = groupsExist;
    this.focusWrapper = focusWrapper;
    this.eLabel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.cbSelect = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.processingColumnStateChange = false;
    this.column = modelItem.getColumn();
    this.columnDept = modelItem.getDept();
    this.displayName = modelItem.getDisplayName();
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.dragAndDropService = beans.dragAndDropService;
    this.modelItemUtils = beans.modelItemUtils;
  }
  postConstruct() {
    this.setTemplate(/* html */
    `<div class="ag-column-select-column">
                <ag-checkbox data-ref="cbSelect" class="ag-column-select-checkbox"></ag-checkbox>
                <span class="ag-column-select-column-label" data-ref="eLabel"></span>
            </div>`, [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgCheckboxSelector]);
    this.eDragHandle = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnDrag", this.gos);
    this.eDragHandle.classList.add("ag-drag-handle", "ag-column-select-column-drag-handle");
    const checkboxGui = this.cbSelect.getGui();
    const checkboxInput = this.cbSelect.getInputElement();
    checkboxGui.insertAdjacentElement("afterend", this.eDragHandle);
    checkboxInput.setAttribute("tabindex", "-1");
    const displayNameSanitised = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._escapeString)(this.displayName);
    this.eLabel.innerHTML = displayNameSanitised;
    const indent = this.columnDept;
    if (this.groupsExist) {
      this.addCssClass("ag-column-select-add-group-indent");
    }
    this.addCssClass(`ag-column-select-indent-${indent}`);
    this.getGui().style.setProperty("--ag-indentation-level", String(indent));
    this.setupDragging();
    const onColStateChanged = this.onColumnStateChanged.bind(this);
    this.addManagedEventListeners({
      columnPivotModeChanged: onColStateChanged
    });
    this.addManagedListeners(this.column, {
      columnValueChanged: onColStateChanged,
      columnPivotChanged: onColStateChanged,
      columnRowGroupChanged: onColStateChanged,
      visibleChanged: onColStateChanged
    });
    this.addManagedListeners(this.focusWrapper, {
      keydown: this.handleKeyDown.bind(this),
      contextmenu: this.onContextMenu.bind(this)
    });
    this.addManagedPropertyListener("functionsReadOnly", this.onColumnStateChanged.bind(this));
    this.addManagedListeners(this.cbSelect, {
      fieldValueChanged: this.onCheckboxChanged.bind(this)
    });
    this.addManagedElementListeners(this.eLabel, {
      click: this.onLabelClicked.bind(this)
    });
    this.onColumnStateChanged();
    this.refreshAriaLabel();
    this.setupTooltip();
    const classes = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getToolPanelClassesFromColDef)(this.column.getColDef(), this.gos, this.column, null);
    classes.forEach(c => this.addOrRemoveCssClass(c, true));
  }
  getColumn() {
    return this.column;
  }
  setupTooltip() {
    const isTooltipWhenTruncated = this.gos.get("tooltipShowMode") === "whenTruncated";
    let shouldDisplayTooltip;
    if (isTooltipWhenTruncated) {
      shouldDisplayTooltip = () => this.eLabel.scrollWidth > this.eLabel.clientWidth;
    }
    const refresh = () => {
      const newTooltipText = this.column.getColDef().headerTooltip;
      this.setTooltip({
        newTooltipText,
        location: "columnToolPanelColumn",
        shouldDisplayTooltip
      });
    };
    refresh();
    this.addManagedEventListeners({
      newColumnsLoaded: refresh
    });
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "columnToolPanelColumn";
    res.colDef = this.column.getColDef();
    return res;
  }
  onContextMenu(e) {
    const {
      column,
      gos
    } = this;
    if (gos.get("functionsReadOnly")) {
      return;
    }
    const contextMenu = this.createBean(new ToolPanelContextMenu(column, e, this.focusWrapper));
    this.addDestroyFunc(() => {
      if (contextMenu.isAlive()) {
        this.destroyBean(contextMenu);
      }
    });
  }
  handleKeyDown(e) {
    if (e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.SPACE) {
      e.preventDefault();
      if (this.isSelectable()) {
        this.onSelectAllChanged(!this.isSelected());
      }
    }
  }
  onLabelClicked() {
    if (this.gos.get("functionsReadOnly")) {
      return;
    }
    const nextState = !this.cbSelect.getValue();
    this.onChangeCommon(nextState);
  }
  onCheckboxChanged(event) {
    this.onChangeCommon(event.selected);
  }
  onChangeCommon(nextState) {
    if (this.cbSelect.isReadOnly()) {
      return;
    }
    this.refreshAriaLabel();
    if (this.processingColumnStateChange) {
      return;
    }
    this.modelItemUtils.setColumn(this.column, nextState, "toolPanelUi");
  }
  refreshAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const columnLabel = translate("ariaColumn", "Column");
    const state = this.cbSelect.getValue() ? translate("ariaVisible", "visible") : translate("ariaHidden", "hidden");
    const visibilityLabel = translate("ariaToggleVisibility", "Press SPACE to toggle visibility");
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLabel)(this.focusWrapper, `${this.displayName} ${columnLabel}`);
    this.cbSelect.setInputAriaLabel(`${visibilityLabel} (${state})`);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaDescribedBy)(this.focusWrapper, this.cbSelect.getInputElement().id);
  }
  setupDragging() {
    if (!this.allowDragging) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eDragHandle, false);
      return;
    }
    let hideColumnOnExit = !this.gos.get("suppressDragLeaveHidesColumns");
    const dragSource = {
      type: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.DragSourceType.ToolPanel,
      eElement: this.eDragHandle,
      dragItemName: this.displayName,
      getDefaultIconName: () => hideColumnOnExit ? "hide" : "notAllowed",
      getDragItem: () => this.createDragItem(),
      onDragStarted: () => {
        hideColumnOnExit = !this.gos.get("suppressDragLeaveHidesColumns");
        this.eventService.dispatchEvent({
          type: "columnPanelItemDragStart",
          column: this.column
        });
      },
      onDragStopped: () => {
        this.eventService.dispatchEvent({
          type: "columnPanelItemDragEnd"
        });
      },
      onGridEnter: dragItem => {
        if (hideColumnOnExit) {
          this.modelItemUtils.updateColumns({
            columns: [this.column],
            visibleState: dragItem?.visibleState,
            pivotState: dragItem?.pivotState,
            eventType: "toolPanelUi"
          });
        }
      },
      onGridExit: () => {
        if (hideColumnOnExit) {
          this.onChangeCommon(false);
        }
      }
    };
    this.dragAndDropService.addDragSource(dragSource, true);
    this.addDestroyFunc(() => this.dragAndDropService.removeDragSource(dragSource));
  }
  createDragItem() {
    const colId = this.column.getColId();
    const visibleState = {
      [colId]: this.column.isVisible()
    };
    const pivotState = {
      [colId]: this.modelItemUtils.createPivotState(this.column)
    };
    return {
      columns: [this.column],
      visibleState,
      pivotState
    };
  }
  onColumnStateChanged() {
    this.processingColumnStateChange = true;
    const isPivotMode = this.columnModel.isPivotMode();
    if (isPivotMode) {
      const anyFunctionActive = this.column.isAnyFunctionActive();
      this.cbSelect.setValue(anyFunctionActive);
    } else {
      this.cbSelect.setValue(this.column.isVisible());
    }
    let canBeToggled = true;
    let canBeDragged = true;
    if (isPivotMode) {
      const functionsReadOnly = this.gos.get("functionsReadOnly");
      const noFunctionsAllowed = !this.column.isAnyFunctionAllowed();
      canBeToggled = !functionsReadOnly && !noFunctionsAllowed;
      canBeDragged = canBeToggled;
    } else {
      const {
        enableRowGroup,
        enableValue,
        lockPosition,
        suppressMovable,
        lockVisible
      } = this.column.getColDef();
      const forceDraggable = !!enableRowGroup || !!enableValue;
      const disableDraggable = !!lockPosition || !!suppressMovable;
      canBeToggled = !lockVisible;
      canBeDragged = forceDraggable || !disableDraggable;
    }
    this.cbSelect.setReadOnly(!canBeToggled);
    this.eDragHandle.classList.toggle("ag-column-select-column-readonly", !canBeDragged);
    this.addOrRemoveCssClass("ag-column-select-column-readonly", !canBeDragged && !canBeToggled);
    this.cbSelect.setPassive(false);
    this.processingColumnStateChange = false;
  }
  getDisplayName() {
    return this.displayName;
  }
  onSelectAllChanged(value) {
    if (value !== this.cbSelect.getValue()) {
      if (!this.cbSelect.isReadOnly()) {
        this.cbSelect.toggle();
      }
    }
  }
  isSelected() {
    return this.cbSelect.getValue();
  }
  isSelectable() {
    return !this.cbSelect.isReadOnly();
  }
  isExpandable() {
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setExpanded(_value) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("can not expand a column item that does not represent a column group header");
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/agPrimaryColsList.ts
var UIColumnModel = class {
  constructor(items) {
    this.items = items;
  }
  getRowCount() {
    return this.items.length;
  }
  getRow(index) {
    return this.items[index];
  }
};
var PRIMARY_COLS_LIST_PANEL_CLASS = "ag-column-select-list";
var AgPrimaryColsList = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="${PRIMARY_COLS_LIST_PANEL_CLASS}" role="presentation"></div>`);
    this.destroyColumnItemFuncs = [];
    this.hasLoadedInitialState = false;
    this.isInitialState = false;
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.colDefService = beans.toolPanelColDefService;
    this.modelItemUtils = beans.modelItemUtils;
  }
  destroy() {
    this.destroyColumnTree();
    super.destroy();
  }
  destroyColumnTree() {
    this.allColsTree = [];
    this.destroyColumnItemFuncs.forEach(f => f());
    this.destroyColumnItemFuncs = [];
  }
  init(params, allowDragging, eventType) {
    this.params = params;
    this.allowDragging = allowDragging;
    this.eventType = eventType;
    if (!this.params.suppressSyncLayoutWithGrid) {
      this.addManagedEventListeners({
        columnMoved: this.onColumnsChanged.bind(this)
      });
    }
    this.addManagedEventListeners({
      newColumnsLoaded: this.onColumnsChanged.bind(this)
    });
    const listener = this.fireSelectionChangedEvent.bind(this);
    this.addManagedEventListeners({
      columnPivotChanged: listener,
      columnPivotModeChanged: listener,
      columnRowGroupChanged: listener,
      columnValueChanged: listener,
      columnVisible: listener,
      newColumnsLoaded: listener
    });
    this.expandGroupsByDefault = !this.params.contractColumnSelection;
    this.virtualList = this.createManagedBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.VirtualList({
      cssIdentifier: "column-select",
      ariaRole: "tree"
    }));
    this.appendChild(this.virtualList.getGui());
    this.virtualList.setComponentCreator((item, listItemElement) => {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLevel)(listItemElement, item.getDept() + 1);
      return this.createComponentFromItem(item, listItemElement);
    });
    if (this.columnModel.isReady()) {
      this.onColumnsChanged();
    }
    if (this.params.suppressColumnMove) {
      return;
    }
    this.createManagedBean(new PrimaryColsListPanelItemDragFeature(this, this.virtualList));
  }
  createComponentFromItem(item, listItemElement) {
    if (item.isGroup()) {
      const renderedGroup = new ToolPanelColumnGroupComp(item, this.allowDragging, this.eventType, listItemElement);
      this.createBean(renderedGroup);
      return renderedGroup;
    }
    const columnComp = new ToolPanelColumnComp(item, this.allowDragging, this.groupsExist, listItemElement);
    this.createBean(columnComp);
    return columnComp;
  }
  onColumnsChanged() {
    if (!this.hasLoadedInitialState) {
      this.hasLoadedInitialState = true;
      this.isInitialState = !!this.params.initialState;
    }
    const expandedStates = this.getExpandedStates();
    const pivotModeActive = this.columnModel.isPivotMode();
    const shouldSyncColumnLayoutWithGrid = !this.params.suppressSyncLayoutWithGrid && !pivotModeActive;
    if (shouldSyncColumnLayoutWithGrid) {
      this.buildTreeFromWhatGridIsDisplaying();
    } else {
      this.buildTreeFromProvidedColumnDefs();
    }
    this.setExpandedStates(expandedStates);
    this.markFilteredColumns();
    this.flattenAndFilterModel();
    this.isInitialState = false;
  }
  getDisplayedColsList() {
    return this.displayedColsList;
  }
  getExpandedStates() {
    const res = {};
    if (this.isInitialState) {
      const {
        expandedGroupIds
      } = this.params.initialState;
      expandedGroupIds.forEach(id => {
        res[id] = true;
      });
      return res;
    }
    if (!this.allColsTree) {
      return {};
    }
    this.forEachItem(item => {
      if (!item.isGroup()) {
        return;
      }
      const colGroup = item.getColumnGroup();
      if (colGroup) {
        res[colGroup.getId()] = item.isExpanded();
      }
    });
    return res;
  }
  setExpandedStates(states) {
    if (!this.allColsTree) {
      return;
    }
    const {
      isInitialState
    } = this;
    this.forEachItem(item => {
      if (!item.isGroup()) {
        return;
      }
      const colGroup = item.getColumnGroup();
      if (colGroup) {
        const expanded = states[colGroup.getId()];
        const groupExistedLastTime = expanded != null;
        if (groupExistedLastTime || isInitialState) {
          item.setExpanded(!!expanded);
        }
      }
    });
  }
  buildTreeFromWhatGridIsDisplaying() {
    this.colDefService.syncLayoutWithGrid(this.setColumnLayout.bind(this));
  }
  setColumnLayout(colDefs) {
    const columnTree = this.colDefService.createColumnTree(colDefs);
    this.buildListModel(columnTree);
    this.groupsExist = colDefs.some(colDef => {
      return colDef && typeof colDef.children !== "undefined";
    });
    this.markFilteredColumns();
    this.flattenAndFilterModel();
  }
  buildTreeFromProvidedColumnDefs() {
    this.buildListModel(this.columnModel.getColDefColTree());
    this.groupsExist = this.columnModel.isProvidedColGroupsPresent();
  }
  buildListModel(columnTree) {
    const columnExpandedListener = this.onColumnExpanded.bind(this);
    const addListeners = item => {
      item.addEventListener("expandedChanged", columnExpandedListener);
      const removeFunc = item.removeEventListener.bind(item, "expandedChanged", columnExpandedListener);
      this.destroyColumnItemFuncs.push(removeFunc);
    };
    const recursivelyBuild = (tree, dept, parentList) => {
      tree.forEach(child => {
        if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(child)) {
          createGroupItem(child, dept, parentList);
        } else {
          createColumnItem(child, dept, parentList);
        }
      });
    };
    const createGroupItem = (columnGroup, dept, parentList) => {
      const columnGroupDef = columnGroup.getColGroupDef();
      const skipThisGroup = columnGroupDef && columnGroupDef.suppressColumnsToolPanel;
      if (skipThisGroup) {
        return;
      }
      if (columnGroup.isPadding()) {
        recursivelyBuild(columnGroup.getChildren(), dept, parentList);
        return;
      }
      const displayName = this.columnNameService.getDisplayNameForProvidedColumnGroup(null, columnGroup, "columnToolPanel");
      const item = new ColumnModelItem(displayName, columnGroup, dept, true, this.expandGroupsByDefault);
      parentList.push(item);
      addListeners(item);
      recursivelyBuild(columnGroup.getChildren(), dept + 1, item.getChildren());
    };
    const createColumnItem = (column, dept, parentList) => {
      const skipThisColumn = column.getColDef() && column.getColDef().suppressColumnsToolPanel;
      if (skipThisColumn) {
        return;
      }
      const displayName = this.columnNameService.getDisplayNameForColumn(column, "columnToolPanel");
      parentList.push(new ColumnModelItem(displayName, column, dept));
    };
    this.destroyColumnTree();
    recursivelyBuild(columnTree, 0, this.allColsTree);
  }
  onColumnExpanded() {
    this.flattenAndFilterModel();
  }
  flattenAndFilterModel() {
    this.displayedColsList = [];
    const recursiveFunc = item => {
      if (!item.isPassesFilter()) {
        return;
      }
      this.displayedColsList.push(item);
      if (item.isGroup() && item.isExpanded()) {
        item.getChildren().forEach(recursiveFunc);
      }
    };
    this.allColsTree.forEach(recursiveFunc);
    this.virtualList.setModel(new UIColumnModel(this.displayedColsList));
    const focusedRow = this.virtualList.getLastFocusedRow();
    this.virtualList.refresh();
    if (focusedRow != null) {
      this.focusRowIfAlive(focusedRow);
    }
    this.notifyListeners();
    this.refreshAriaLabel();
  }
  refreshAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const columnListName = translate("ariaColumnPanelList", "Column List");
    const localeColumns = translate("columns", "Columns");
    const items = this.displayedColsList.length;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLabel)(this.virtualList.getAriaElement(), `${columnListName} ${items} ${localeColumns}`);
  }
  focusRowIfAlive(rowIndex) {
    window.setTimeout(() => {
      if (this.isAlive()) {
        this.virtualList.focusRow(rowIndex);
      }
    }, 0);
  }
  forEachItem(callback) {
    const recursiveFunc = items => {
      items.forEach(item => {
        callback(item);
        if (item.isGroup()) {
          recursiveFunc(item.getChildren());
        }
      });
    };
    if (!this.allColsTree) {
      return;
    }
    recursiveFunc(this.allColsTree);
  }
  doSetExpandedAll(value) {
    this.forEachItem(item => {
      if (item.isGroup()) {
        item.setExpanded(value);
      }
    });
  }
  setGroupsExpanded(expand, groupIds) {
    if (!groupIds) {
      this.doSetExpandedAll(expand);
      return;
    }
    const expandedGroupIds = [];
    this.forEachItem(item => {
      if (!item.isGroup()) {
        return;
      }
      const groupId = item.getColumnGroup().getId();
      if (groupIds.indexOf(groupId) >= 0) {
        item.setExpanded(expand);
        expandedGroupIds.push(groupId);
      }
    });
    const unrecognisedGroupIds = groupIds.filter(groupId => !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(expandedGroupIds, groupId));
    if (unrecognisedGroupIds.length > 0) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("unable to find group(s) for supplied groupIds:", unrecognisedGroupIds);
    }
  }
  getExpandState() {
    let expandedCount = 0;
    let notExpandedCount = 0;
    this.forEachItem(item => {
      if (!item.isGroup()) {
        return;
      }
      if (item.isExpanded()) {
        expandedCount++;
      } else {
        notExpandedCount++;
      }
    });
    if (expandedCount > 0 && notExpandedCount > 0) {
      return 2 /* INDETERMINATE */;
    }
    if (notExpandedCount > 0) {
      return 1 /* COLLAPSED */;
    }
    return 0 /* EXPANDED */;
  }
  doSetSelectedAll(selectAllChecked) {
    this.modelItemUtils.selectAllChildren(this.allColsTree, selectAllChecked, this.eventType);
  }
  getSelectionState() {
    let checkedCount = 0;
    let uncheckedCount = 0;
    const pivotMode = this.columnModel.isPivotMode();
    this.forEachItem(item => {
      if (item.isGroup()) {
        return;
      }
      if (!item.isPassesFilter()) {
        return;
      }
      const column = item.getColumn();
      const colDef = column.getColDef();
      let checked;
      if (pivotMode) {
        const noPivotModeOptionsAllowed = !column.isAllowPivot() && !column.isAllowRowGroup() && !column.isAllowValue();
        if (noPivotModeOptionsAllowed) {
          return;
        }
        checked = column.isValueActive() || column.isPivotActive() || column.isRowGroupActive();
      } else {
        if (colDef.lockVisible) {
          return;
        }
        checked = column.isVisible();
      }
      checked ? checkedCount++ : uncheckedCount++;
    });
    if (checkedCount > 0 && uncheckedCount > 0) {
      return void 0;
    }
    return !(checkedCount === 0 || uncheckedCount > 0);
  }
  setFilterText(filterText) {
    this.filterText = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(filterText) ? filterText.toLowerCase() : null;
    this.markFilteredColumns();
    this.flattenAndFilterModel();
  }
  markFilteredColumns() {
    const passesFilter = item => {
      if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(this.filterText)) {
        return true;
      }
      const displayName = item.getDisplayName();
      return displayName == null || displayName.toLowerCase().indexOf(this.filterText) !== -1;
    };
    const recursivelyCheckFilter = (item, parentPasses) => {
      let atLeastOneChildPassed = false;
      if (item.isGroup()) {
        const groupPasses = passesFilter(item);
        item.getChildren().forEach(child => {
          const childPasses = recursivelyCheckFilter(child, groupPasses || parentPasses);
          if (childPasses) {
            atLeastOneChildPassed = childPasses;
          }
        });
      }
      const filterPasses = parentPasses || atLeastOneChildPassed ? true : passesFilter(item);
      item.setPassesFilter(filterPasses);
      return filterPasses;
    };
    this.allColsTree.forEach(item => recursivelyCheckFilter(item, false));
  }
  notifyListeners() {
    this.fireGroupExpandedEvent();
    this.fireSelectionChangedEvent();
  }
  fireGroupExpandedEvent() {
    const expandState = this.getExpandState();
    this.dispatchLocalEvent({
      type: "groupExpanded",
      state: expandState
    });
  }
  fireSelectionChangedEvent() {
    if (!this.allColsTree) {
      return;
    }
    const selectionState = this.getSelectionState();
    this.dispatchLocalEvent({
      type: "selectionChanged",
      state: selectionState
    });
  }
  getExpandedGroups() {
    const expandedGroupIds = [];
    if (!this.allColsTree) {
      return expandedGroupIds;
    }
    this.forEachItem(item => {
      if (item.isGroup() && item.isExpanded()) {
        expandedGroupIds.push(item.getColumnGroup().getId());
      }
    });
    return expandedGroupIds;
  }
};
var AgPrimaryColsListSelector = {
  selector: "AG-PRIMARY-COLS-LIST",
  component: AgPrimaryColsList
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/agPrimaryCols.ts
var AgPrimaryCols = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-column-select">
            <ag-primary-cols-header data-ref="primaryColsHeaderPanel"></ag-primary-cols-header>
            <ag-primary-cols-list data-ref="primaryColsListPanel"></ag-primary-cols-list>
        </div>`, [AgPrimaryColsHeaderSelector, AgPrimaryColsListSelector]);
    this.primaryColsHeaderPanel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.primaryColsListPanel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  // we allow dragging in the toolPanel, but not when this component appears in the column menu
  init(allowDragging, params, eventType) {
    this.allowDragging = allowDragging;
    this.params = params;
    this.eventType = eventType;
    this.primaryColsHeaderPanel.init(this.params);
    const hideFilter = this.params.suppressColumnFilter;
    const hideSelect = this.params.suppressColumnSelectAll;
    const hideExpand = this.params.suppressColumnExpandAll;
    if (hideExpand && hideFilter && hideSelect) {
      this.primaryColsHeaderPanel.setDisplayed(false);
    }
    this.addManagedListeners(this.primaryColsListPanel, {
      groupExpanded: this.onGroupExpanded.bind(this),
      selectionChanged: this.onSelectionChange.bind(this)
    });
    this.primaryColsListPanel.init(this.params, this.allowDragging, this.eventType);
    this.addManagedListeners(this.primaryColsHeaderPanel, {
      expandAll: this.onExpandAll.bind(this),
      collapseAll: this.onCollapseAll.bind(this),
      selectAll: this.onSelectAll.bind(this),
      unselectAll: this.onUnselectAll.bind(this),
      filterChanged: this.onFilterChanged.bind(this)
    });
    this.positionableFeature = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.PositionableFeature(this.getGui(), {
      minHeight: 100
    });
    this.createManagedBean(this.positionableFeature);
  }
  toggleResizable(resizable) {
    this.positionableFeature.setResizable(resizable ? {
      bottom: true
    } : false);
  }
  onExpandAll() {
    this.primaryColsListPanel.doSetExpandedAll(true);
  }
  onCollapseAll() {
    this.primaryColsListPanel.doSetExpandedAll(false);
  }
  expandGroups(groupIds) {
    this.primaryColsListPanel.setGroupsExpanded(true, groupIds);
  }
  collapseGroups(groupIds) {
    this.primaryColsListPanel.setGroupsExpanded(false, groupIds);
  }
  setColumnLayout(colDefs) {
    this.primaryColsListPanel.setColumnLayout(colDefs);
  }
  onFilterChanged(event) {
    this.primaryColsListPanel.setFilterText(event.filterText);
  }
  syncLayoutWithGrid() {
    this.primaryColsListPanel.onColumnsChanged();
  }
  onSelectAll() {
    this.primaryColsListPanel.doSetSelectedAll(true);
  }
  onUnselectAll() {
    this.primaryColsListPanel.doSetSelectedAll(false);
  }
  onGroupExpanded(event) {
    this.primaryColsHeaderPanel.setExpandState(event.state);
    this.params.onStateUpdated();
  }
  onSelectionChange(event) {
    this.primaryColsHeaderPanel.setSelectionState(event.state);
  }
  getExpandedGroups() {
    return this.primaryColsListPanel.getExpandedGroups();
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/pivotModePanel.ts

var PivotModePanel = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.cbPivotMode = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.ctrlsService = beans.ctrlsService;
  }
  createTemplate() {
    return /* html */`<div class="ag-pivot-mode-panel">
                <ag-toggle-button data-ref="cbPivotMode" class="ag-pivot-mode-select"></ag-toggle-button>
            </div>`;
  }
  postConstruct() {
    this.setTemplate(this.createTemplate(), [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgToggleButtonSelector]);
    this.cbPivotMode.setValue(this.columnModel.isPivotMode());
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    this.cbPivotMode.setLabel(localeTextFunc("pivotMode", "Pivot Mode"));
    this.addManagedListeners(this.cbPivotMode, {
      fieldValueChanged: this.onBtPivotMode.bind(this)
    });
    const listener = this.onPivotModeChanged.bind(this);
    this.addManagedEventListeners({
      newColumnsLoaded: listener,
      columnPivotModeChanged: listener
    });
  }
  onBtPivotMode() {
    const newValue = !!this.cbPivotMode.getValue();
    if (newValue !== this.columnModel.isPivotMode()) {
      this.gos.updateGridOptions({
        options: {
          pivotMode: newValue
        },
        source: "toolPanelUi"
      });
      this.ctrlsService.getHeaderRowContainerCtrls().forEach(c => c.refresh());
    }
  }
  onPivotModeChanged() {
    const pivotModeActive = this.columnModel.isPivotMode();
    this.cbPivotMode.setValue(pivotModeActive);
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/columnToolPanel.ts
var ColumnToolPanel = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-column-panel"></div>`);
    this.initialised = false;
    this.childDestroyFuncs = [];
  }
  // lazy initialise the panel
  setVisible(visible) {
    super.setDisplayed(visible);
    if (visible && !this.initialised) {
      this.init(this.params);
    }
  }
  init(params) {
    const defaultParams = this.gos.addGridCommonParams({
      suppressColumnMove: false,
      suppressColumnSelectAll: false,
      suppressColumnFilter: false,
      suppressColumnExpandAll: false,
      contractColumnSelection: false,
      suppressPivotMode: false,
      suppressRowGroups: false,
      suppressValues: false,
      suppressPivots: false,
      suppressSyncLayoutWithGrid: false
    });
    this.params = {
      ...defaultParams,
      ...params
    };
    if (this.isRowGroupingModuleLoaded() && !this.params.suppressPivotMode) {
      this.pivotModePanel = this.createBean(new PivotModePanel());
      this.childDestroyFuncs.push(() => this.destroyBean(this.pivotModePanel));
      this.appendChild(this.pivotModePanel);
    }
    this.primaryColsPanel = this.createBean(new AgPrimaryCols());
    this.childDestroyFuncs.push(() => this.destroyBean(this.primaryColsPanel));
    this.primaryColsPanel.init(true, this.params, "toolPanelUi");
    this.primaryColsPanel.addCssClass("ag-column-panel-column-select");
    this.appendChild(this.primaryColsPanel);
    if (this.isRowGroupingModuleLoaded()) {
      if (!this.params.suppressRowGroups) {
        this.rowGroupDropZonePanel = this.createBean(new _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.RowGroupDropZonePanel(false));
        this.childDestroyFuncs.push(() => this.destroyBean(this.rowGroupDropZonePanel));
        this.appendChild(this.rowGroupDropZonePanel);
      }
      if (!this.params.suppressValues) {
        this.valuesDropZonePanel = this.createBean(new _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.ValuesDropZonePanel(false));
        this.childDestroyFuncs.push(() => this.destroyBean(this.valuesDropZonePanel));
        this.appendChild(this.valuesDropZonePanel);
      }
      if (!this.params.suppressPivots) {
        this.pivotDropZonePanel = this.createBean(new _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.PivotDropZonePanel(false));
        this.childDestroyFuncs.push(() => this.destroyBean(this.pivotDropZonePanel));
        this.appendChild(this.pivotDropZonePanel);
      }
      this.setLastVisible();
      const [pivotModeListener] = this.addManagedEventListeners({
        columnPivotModeChanged: () => {
          this.resetChildrenHeight();
          this.setLastVisible();
        }
      });
      this.childDestroyFuncs.push(() => pivotModeListener());
    }
    this.initialised = true;
  }
  setPivotModeSectionVisible(visible) {
    if (!this.isRowGroupingModuleLoaded()) {
      return;
    }
    if (this.pivotModePanel) {
      this.pivotModePanel.setDisplayed(visible);
    } else if (visible) {
      this.pivotModePanel = this.createBean(new PivotModePanel());
      this.getGui().insertBefore(this.pivotModePanel.getGui(), this.getGui().firstChild);
      this.childDestroyFuncs.push(() => this.destroyBean(this.pivotModePanel));
    }
    this.setLastVisible();
  }
  setRowGroupsSectionVisible(visible) {
    if (!this.isRowGroupingModuleLoaded()) {
      return;
    }
    if (this.rowGroupDropZonePanel) {
      this.rowGroupDropZonePanel.setDisplayed(visible);
    } else if (visible) {
      this.rowGroupDropZonePanel = this.createManagedBean(new _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.RowGroupDropZonePanel(false));
      this.appendChild(this.rowGroupDropZonePanel);
    }
    this.setLastVisible();
  }
  setValuesSectionVisible(visible) {
    if (!this.isRowGroupingModuleLoaded()) {
      return;
    }
    if (this.valuesDropZonePanel) {
      this.valuesDropZonePanel.setDisplayed(visible);
    } else if (visible) {
      this.valuesDropZonePanel = this.createManagedBean(new _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.ValuesDropZonePanel(false));
      this.appendChild(this.valuesDropZonePanel);
    }
    this.setLastVisible();
  }
  setPivotSectionVisible(visible) {
    if (!this.isRowGroupingModuleLoaded()) {
      return;
    }
    if (this.pivotDropZonePanel) {
      this.pivotDropZonePanel.setDisplayed(visible);
    } else if (visible) {
      this.pivotDropZonePanel = this.createManagedBean(new _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.PivotDropZonePanel(false));
      this.appendChild(this.pivotDropZonePanel);
      this.pivotDropZonePanel.setDisplayed(visible);
    }
    this.setLastVisible();
  }
  setResizers() {
    [this.primaryColsPanel, this.rowGroupDropZonePanel, this.valuesDropZonePanel, this.pivotDropZonePanel].forEach(panel => {
      if (!panel) {
        return;
      }
      const eGui = panel.getGui();
      panel.toggleResizable(!eGui.classList.contains("ag-last-column-drop") && !eGui.classList.contains("ag-hidden"));
    });
  }
  setLastVisible() {
    const eGui = this.getGui();
    const columnDrops = Array.prototype.slice.call(eGui.querySelectorAll(".ag-column-drop"));
    columnDrops.forEach(columnDrop => columnDrop.classList.remove("ag-last-column-drop"));
    const columnDropEls = eGui.querySelectorAll(".ag-column-drop:not(.ag-hidden)");
    const lastVisible = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(columnDropEls);
    if (lastVisible) {
      lastVisible.classList.add("ag-last-column-drop");
    }
    this.setResizers();
  }
  resetChildrenHeight() {
    const eGui = this.getGui();
    const children = eGui.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.style.removeProperty("height");
      child.style.removeProperty("flex");
    }
  }
  isRowGroupingModuleLoaded() {
    return this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RowGroupingModule, "Row Grouping");
  }
  expandColumnGroups(groupIds) {
    this.primaryColsPanel.expandGroups(groupIds);
  }
  collapseColumnGroups(groupIds) {
    this.primaryColsPanel.collapseGroups(groupIds);
  }
  setColumnLayout(colDefs) {
    this.primaryColsPanel.setColumnLayout(colDefs);
  }
  syncLayoutWithGrid() {
    this.primaryColsPanel.syncLayoutWithGrid();
  }
  destroyChildren() {
    this.childDestroyFuncs.forEach(func => func());
    this.childDestroyFuncs.length = 0;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.getGui());
  }
  refresh(params) {
    this.destroyChildren();
    this.init(params);
    return true;
  }
  getState() {
    return {
      expandedGroupIds: this.primaryColsPanel.getExpandedGroups()
    };
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so this must be public.
  destroy() {
    this.destroyChildren();
    super.destroy();
  }
};

// enterprise-modules/column-tool-panel/src/columnToolPanel/modelItemUtils.ts

var ModelItemUtils = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "modelItemUtils";
  }
  wireBeans(beans) {
    this.aggFuncService = beans.aggFuncService;
    this.columnModel = beans.columnModel;
    this.columnApplyStateService = beans.columnApplyStateService;
  }
  selectAllChildren(colTree, selectAllChecked, eventType) {
    const cols = this.extractAllLeafColumns(colTree);
    this.setAllColumns(cols, selectAllChecked, eventType);
  }
  setColumn(col, selectAllChecked, eventType) {
    this.setAllColumns([col], selectAllChecked, eventType);
  }
  setAllColumns(cols, selectAllChecked, eventType) {
    if (this.columnModel.isPivotMode()) {
      this.setAllPivot(cols, selectAllChecked, eventType);
    } else {
      this.setAllVisible(cols, selectAllChecked, eventType);
    }
  }
  extractAllLeafColumns(allItems) {
    const res = [];
    const recursiveFunc = items => {
      items.forEach(item => {
        if (!item.isPassesFilter()) {
          return;
        }
        if (item.isGroup()) {
          recursiveFunc(item.getChildren());
        } else {
          res.push(item.getColumn());
        }
      });
    };
    recursiveFunc(allItems);
    return res;
  }
  setAllVisible(columns, visible, eventType) {
    const colStateItems = [];
    columns.forEach(col => {
      if (col.getColDef().lockVisible) {
        return;
      }
      if (col.isVisible() != visible) {
        colStateItems.push({
          colId: col.getId(),
          hide: !visible
        });
      }
    });
    if (colStateItems.length > 0) {
      this.columnApplyStateService.applyColumnState({
        state: colStateItems
      }, eventType);
    }
  }
  setAllPivot(columns, value, eventType) {
    this.setAllPivotActive(columns, value, eventType);
  }
  setAllPivotActive(columns, value, eventType) {
    const colStateItems = [];
    const turnOnAction = col => {
      if (col.isAnyFunctionActive()) {
        return;
      }
      if (col.isAllowValue()) {
        const aggFunc = typeof col.getAggFunc() === "string" ? col.getAggFunc() : this.aggFuncService?.getDefaultAggFunc(col);
        colStateItems.push({
          colId: col.getId(),
          aggFunc
        });
      } else if (col.isAllowRowGroup()) {
        colStateItems.push({
          colId: col.getId(),
          rowGroup: true
        });
      } else if (col.isAllowPivot()) {
        colStateItems.push({
          colId: col.getId(),
          pivot: true
        });
      }
    };
    const turnOffAction = col => {
      const isActive = col.isPivotActive() || col.isRowGroupActive() || col.isValueActive();
      if (isActive) {
        colStateItems.push({
          colId: col.getId(),
          pivot: false,
          rowGroup: false,
          aggFunc: null
        });
      }
    };
    const action = value ? turnOnAction : turnOffAction;
    columns.forEach(action);
    if (colStateItems.length > 0) {
      this.columnApplyStateService.applyColumnState({
        state: colStateItems
      }, eventType);
    }
  }
  updateColumns(params) {
    const {
      columns,
      visibleState,
      pivotState,
      eventType
    } = params;
    const state = columns.map(column => {
      const colId = column.getColId();
      if (this.columnModel.isPivotMode()) {
        const pivotStateForColumn = pivotState?.[colId];
        return {
          colId,
          pivot: pivotStateForColumn?.pivot,
          rowGroup: pivotStateForColumn?.rowGroup,
          aggFunc: pivotStateForColumn?.aggFunc
        };
      } else {
        return {
          colId,
          hide: !visibleState?.[colId]
        };
      }
    });
    this.columnApplyStateService.applyColumnState({
      state
    }, eventType);
  }
  createPivotState(column) {
    return {
      pivot: column.isPivotActive(),
      rowGroup: column.isRowGroupActive(),
      aggFunc: column.isValueActive() ? column.getAggFunc() : void 0
    };
  }
};

// enterprise-modules/column-tool-panel/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/column-tool-panel/src/columnsToolPanelModule.ts
var ColumnsToolPanelModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ColumnsToolPanelModule,
  beans: [ModelItemUtils],
  userComponents: [{
    name: "agColumnsToolPanel",
    classImp: ColumnToolPanel
  }, {
    name: "agMenuItem",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.AgMenuItemRenderer
  }],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule, _ag_grid_enterprise_row_grouping__WEBPACK_IMPORTED_MODULE_2__.RowGroupingModule, _ag_grid_enterprise_side_bar__WEBPACK_IMPORTED_MODULE_3__.SideBarModule]
});


/***/ }),

/***/ 78499:
/*!*********************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/excel-export/dist/package/main.esm.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExcelExportModule: () => (/* binding */ ExcelExportModule),
/* harmony export */   exportMultipleSheetsAsExcel: () => (/* binding */ exportMultipleSheetsAsExcel),
/* harmony export */   getMultipleSheetsAsExcel: () => (/* binding */ getMultipleSheetsAsExcel)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/csv-export */ 92974);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/excel-export/src/excelExportModule.ts




// enterprise-modules/excel-export/src/excelExport/excelCreator.ts



// enterprise-modules/excel-export/src/excelExport/excelSerializingSession.ts



// enterprise-modules/excel-export/src/excelExport/assets/excelUtils.ts



// enterprise-modules/excel-export/src/excelExport/assets/excelConstants.ts
var INCH_TO_EMU = 9525;
var numberFormatMap = {
  "0": 1,
  "0.00": 2,
  "#,##0": 3,
  "#,##0.00": 4,
  "0%": 9,
  "0.00%": 10,
  "0.00E+00": 11,
  "# ?/?": 12,
  "# ??/??": 13,
  "mm-dd-yy": 14,
  "d-mmm-yy": 15,
  "d-mmm": 16,
  "mmm-yy": 17,
  "h:mm AM/PM": 18,
  "h:mm:ss AM/PM": 19,
  "h:mm": 20,
  "h:mm:ss": 21,
  "m/d/yy h:mm": 22,
  "#,##0 ;(#,##0)": 37,
  "#,##0 ;[Red](#,##0)": 38,
  "#,##0.00;(#,##0.00)": 39,
  "#,##0.00;[Red](#,##0.00)": 40,
  "mm:ss": 45,
  "[h]:mm:ss": 46,
  "mmss.0": 47,
  "##0.0E+0": 48,
  "@": 49
};

// enterprise-modules/excel-export/src/excelExport/assets/excelUtils.ts
var pointsToPixel = points => {
  return Math.round(points * 96 / 72);
};
var pixelsToEMU = value => {
  return Math.ceil(value * INCH_TO_EMU);
};
var getFontFamilyId = name => {
  if (name === void 0) {
    return;
  }
  const families = ["Automatic", "Roman", "Swiss", "Modern", "Script", "Decorative"];
  const pos = families.indexOf(name || "Automatic");
  return Math.max(pos, 0);
};
var getHeightFromProperty = (rowIndex, height) => {
  if (!height) {
    return;
  }
  let finalHeight;
  if (typeof height === "number") {
    finalHeight = height;
  } else {
    const heightFunc = height;
    finalHeight = heightFunc({
      rowIndex
    });
  }
  return finalHeight;
};
var setExcelImageTotalWidth = (image, columnsToExport) => {
  const {
    colSpan,
    column
  } = image.position;
  if (!image.width) {
    return;
  }
  if (colSpan) {
    const columnsInSpan = columnsToExport.slice(column - 1, column + colSpan - 1);
    let totalWidth = 0;
    for (let i = 0; i < columnsInSpan.length; i++) {
      const colWidth = columnsInSpan[i].getActualWidth();
      if (image.width < totalWidth + colWidth) {
        image.position.colSpan = i + 1;
        image.totalWidth = image.width;
        image.width = image.totalWidth - totalWidth;
        break;
      }
      totalWidth += colWidth;
    }
  } else {
    image.totalWidth = image.width;
  }
};
var setExcelImageTotalHeight = (image, rowHeight) => {
  const {
    rowSpan,
    row
  } = image.position;
  if (!image.height) {
    return;
  }
  if (rowSpan) {
    let totalHeight = 0;
    let counter = 0;
    for (let i = row; i < row + rowSpan; i++) {
      const nextRowHeight = pointsToPixel(getHeightFromProperty(i, rowHeight) || 20);
      if (image.height < totalHeight + nextRowHeight) {
        image.position.rowSpan = counter + 1;
        image.totalHeight = image.height;
        image.height = image.totalHeight - totalHeight;
        break;
      }
      totalHeight += nextRowHeight;
      counter++;
    }
  } else {
    image.totalHeight = image.height;
  }
};
var createXmlPart = (body, skipHeader) => {
  const header = _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.XmlFactory.createHeader({
    encoding: "UTF-8",
    standalone: "yes"
  });
  const xmlBody = _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.XmlFactory.createXml(body);
  if (skipHeader) {
    return xmlBody;
  }
  return `${header}${xmlBody}`;
};
var getExcelColumnName = colIdx => {
  const startCode = 65;
  const tableWidth = 26;
  const fromCharCode = String.fromCharCode;
  const pos = Math.floor(colIdx / tableWidth);
  const tableIdx = colIdx % tableWidth;
  if (!pos || colIdx === tableWidth) {
    return fromCharCode(startCode + colIdx - 1);
  }
  if (!tableIdx) {
    return getExcelColumnName(pos - 1) + "Z";
  }
  if (pos < tableWidth) {
    return fromCharCode(startCode + pos - 1) + fromCharCode(startCode + tableIdx - 1);
  }
  return getExcelColumnName(pos) + fromCharCode(startCode + tableIdx - 1);
};
var replaceInvisibleCharacters = str => {
  if (str == null) {
    return null;
  }
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    const point = str.charCodeAt(i);
    if (point >= 0 && point <= 31 && point !== 10) {
      const convertedCode = point.toString(16).toUpperCase();
      const paddedCode = convertedCode.padStart(4, "0");
      const newValue = `_x${paddedCode}_`;
      newString += newValue;
    } else {
      newString += str[i];
    }
  }
  return newString;
};
var buildSharedString = strMap => {
  const ret = [];
  for (const key of strMap.keys()) {
    const textNode = key.toString();
    const child = {
      name: "t",
      textNode: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(replaceInvisibleCharacters(textNode), false)
    };
    const preserveSpaces = textNode.trim().length !== textNode.length;
    if (preserveSpaces) {
      child.properties = {
        rawMap: {
          "xml:space": "preserve"
        }
      };
    }
    ret.push({
      name: "si",
      children: [child]
    });
  }
  return ret;
};

// enterprise-modules/excel-export/src/excelExport/excelXlsxFactory.ts


// enterprise-modules/excel-export/src/excelExport/files/ooxml/contentType.ts
var contentTypeFactory = {
  getTemplate(config) {
    const {
      name,
      ContentType,
      Extension,
      PartName
    } = config;
    return {
      name,
      properties: {
        rawMap: {
          Extension,
          PartName,
          ContentType
        }
      }
    };
  }
};
var contentType_default = contentTypeFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/contentTypes.ts
var _normaliseImageExtension = ext => ext === "jpg" ? "jpeg" : ext;
var contentTypesFactory = {
  getTemplate(sheetLen) {
    const worksheets = new Array(sheetLen).fill(void 0).map((v, i) => ({
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
      PartName: `/xl/worksheets/sheet${i + 1}.xml`
    }));
    const sheetsWithImages = ExcelXlsxFactory.worksheetImages.size;
    const headerFooterImages = ExcelXlsxFactory.worksheetHeaderFooterImages.size;
    const sheetsWithTables = ExcelXlsxFactory.worksheetDataTables.size;
    const imageTypesObject = {};
    ExcelXlsxFactory.workbookImageIds.forEach(v => {
      imageTypesObject[_normaliseImageExtension(v.type)] = true;
    });
    const imageDocs = new Array(sheetsWithImages).fill(void 0).map((v, i) => ({
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.drawing+xml",
      PartName: `/xl/drawings/drawing${i + 1}.xml`
    }));
    const tableDocs = new Array(sheetsWithTables).fill(void 0).map((v, i) => ({
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml",
      PartName: `/xl/tables/${ExcelXlsxFactory.getTableNameFromIndex(i)}.xml`
    }));
    const imageTypes = Object.keys(imageTypesObject).map(ext => ({
      name: "Default",
      ContentType: `image/${ext}`,
      Extension: ext
    }));
    if (headerFooterImages) {
      imageTypes.push({
        name: "Default",
        Extension: "vml",
        ContentType: "application/vnd.openxmlformats-officedocument.vmlDrawing"
      });
    }
    const children = [...imageTypes, {
      name: "Default",
      Extension: "rels",
      ContentType: "application/vnd.openxmlformats-package.relationships+xml"
    }, {
      name: "Default",
      ContentType: "application/xml",
      Extension: "xml"
    }, {
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
      PartName: "/xl/workbook.xml"
    }, ...worksheets, {
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.theme+xml",
      PartName: "/xl/theme/theme1.xml"
    }, {
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
      PartName: "/xl/styles.xml"
    }, {
      name: "Override",
      ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
      PartName: "/xl/sharedStrings.xml"
    }, ...imageDocs, ...tableDocs, {
      name: "Override",
      ContentType: "application/vnd.openxmlformats-package.core-properties+xml",
      PartName: "/docProps/core.xml"
    }].map(contentType => contentType_default.getTemplate(contentType));
    return {
      name: "Types",
      properties: {
        rawMap: {
          xmlns: "http://schemas.openxmlformats.org/package/2006/content-types"
        }
      },
      children
    };
  }
};
var contentTypes_default = contentTypesFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/core.ts
var coreFactory = {
  getTemplate(author) {
    const dt = /* @__PURE__ */new Date();
    const jsonDate = dt.toJSON();
    return {
      name: "cp:coreProperties",
      properties: {
        prefixedAttributes: [{
          prefix: "xmlns:",
          map: {
            cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
            dc: "http://purl.org/dc/elements/1.1/",
            dcterms: "http://purl.org/dc/terms/",
            dcmitype: "http://purl.org/dc/dcmitype/",
            xsi: "http://www.w3.org/2001/XMLSchema-instance"
          }
        }]
      },
      children: [{
        name: "dc:creator",
        textNode: author
      }, {
        name: "dc:title",
        textNode: "Workbook"
      }, {
        name: "dcterms:created",
        properties: {
          rawMap: {
            "xsi:type": "dcterms:W3CDTF"
          }
        },
        textNode: jsonDate
      }, {
        name: "dcterms:modified",
        properties: {
          rawMap: {
            "xsi:type": "dcterms:W3CDTF"
          }
        },
        textNode: jsonDate
      }]
    };
  }
};
var core_default = coreFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/drawing.ts
var getAnchor = (name, imageAnchor) => ({
  name: `xdr:${name}`,
  children: [{
    name: "xdr:col",
    textNode: imageAnchor.col.toString()
  }, {
    name: "xdr:colOff",
    textNode: imageAnchor.offsetX.toString()
  }, {
    name: "xdr:row",
    textNode: imageAnchor.row.toString()
  }, {
    name: "xdr:rowOff",
    textNode: imageAnchor.offsetY.toString()
  }]
});
var getExt = image => {
  const children = [{
    name: "a:ext",
    properties: {
      rawMap: {
        uri: "{FF2B5EF4-FFF2-40B4-BE49-F238E27FC236}"
      }
    },
    children: [{
      name: "a16:creationId",
      properties: {
        rawMap: {
          id: "{822E6D20-D7BC-2841-A643-D49A6EF008A2}",
          "xmlns:a16": "http://schemas.microsoft.com/office/drawing/2014/main"
        }
      }
    }]
  }];
  const recolor = image.recolor && image.recolor.toLowerCase();
  switch (recolor) {
    case "grayscale":
    case "sepia":
    case "washout":
      children.push({
        name: "a:ext",
        properties: {
          rawMap: {
            uri: "{C183D7F6-B498-43B3-948B-1728B52AA6E4}"
          }
        },
        children: [{
          name: "adec:decorative",
          properties: {
            rawMap: {
              val: "0",
              "xmlns:adec": "http://schemas.microsoft.com/office/drawing/2017/decorative"
            }
          }
        }]
      });
  }
  return {
    name: "a:extLst",
    children
  };
};
var getNvPicPr = (image, index) => ({
  name: "xdr:nvPicPr",
  children: [{
    name: "xdr:cNvPr",
    properties: {
      rawMap: {
        id: index,
        name: image.id,
        descr: image.altText != null ? image.altText : void 0
      }
    },
    children: [getExt(image)]
  }, {
    name: "xdr:cNvPicPr",
    properties: {
      rawMap: {
        preferRelativeResize: "0"
      }
    },
    children: [{
      name: "a:picLocks"
    }]
  }]
});
var getColorDetails = color => {
  if (!color.saturation && !color.tint) {
    return;
  }
  const ret = [];
  if (color.saturation) {
    ret.push({
      name: "a:satMod",
      properties: {
        rawMap: {
          val: color.saturation * 1e3
        }
      }
    });
  }
  if (color.tint) {
    ret.push({
      name: "a:tint",
      properties: {
        rawMap: {
          val: color.tint * 1e3
        }
      }
    });
  }
  return ret;
};
var getDuoTone = (primaryColor, secondaryColor) => {
  return {
    name: "a:duotone",
    children: [{
      name: "a:prstClr",
      properties: {
        rawMap: {
          val: primaryColor.color
        }
      },
      children: getColorDetails(primaryColor)
    }, {
      name: "a:srgbClr",
      properties: {
        rawMap: {
          val: secondaryColor.color
        }
      },
      children: getColorDetails(secondaryColor)
    }]
  };
};
var getBlipFill = (image, index) => {
  let blipChildren;
  if (image.transparency) {
    const transparency = Math.min(Math.max(image.transparency, 0), 100);
    blipChildren = [{
      name: "a:alphaModFix",
      properties: {
        rawMap: {
          amt: 1e5 - Math.round(transparency * 1e3)
        }
      }
    }];
  }
  if (image.recolor) {
    if (!blipChildren) {
      blipChildren = [];
    }
    switch (image.recolor.toLocaleLowerCase()) {
      case "grayscale":
        blipChildren.push({
          name: "a:grayscl"
        });
        break;
      case "sepia":
        blipChildren.push(getDuoTone({
          color: "black"
        }, {
          color: "D9C3A5",
          tint: 50,
          saturation: 180
        }));
        break;
      case "washout":
        blipChildren.push({
          name: "a:lum",
          properties: {
            rawMap: {
              bright: "70000",
              contrast: "-70000"
            }
          }
        });
        break;
      default:
    }
  }
  return {
    name: "xdr:blipFill",
    children: [{
      name: "a:blip",
      properties: {
        rawMap: {
          cstate: "print",
          "r:embed": `rId${index}`,
          "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
        }
      },
      children: blipChildren
    }, {
      name: "a:stretch",
      children: [{
        name: "a:fillRect"
      }]
    }]
  };
};
var getSpPr = (image, imageBoxSize) => {
  const xfrm = {
    name: "a:xfrm",
    children: [{
      name: "a:off",
      properties: {
        rawMap: {
          x: 0,
          y: 0
        }
      }
    }, {
      name: "a:ext",
      properties: {
        rawMap: {
          cx: imageBoxSize.width,
          cy: imageBoxSize.height
        }
      }
    }]
  };
  if (image.rotation) {
    const rotation = image.rotation;
    xfrm.properties = {
      rawMap: {
        rot: Math.min(Math.max(rotation, 0), 360) * 6e4
      }
    };
  }
  const prstGeom = {
    name: "a:prstGeom",
    properties: {
      rawMap: {
        prst: "rect"
      }
    },
    children: [{
      name: "a:avLst"
    }]
  };
  const ret = {
    name: "xdr:spPr",
    children: [xfrm, prstGeom]
  };
  return ret;
};
var getImageBoxSize = image => {
  image.fitCell = !!image.fitCell || !image.width || !image.height;
  const {
    position = {},
    fitCell,
    width = 0,
    height = 0,
    totalHeight,
    totalWidth
  } = image;
  const {
    offsetX = 0,
    offsetY = 0,
    row = 1,
    rowSpan = 1,
    column = 1,
    colSpan = 1
  } = position;
  return {
    from: {
      row: row - 1,
      col: column - 1,
      offsetX: pixelsToEMU(offsetX),
      offsetY: pixelsToEMU(offsetY)
    },
    to: {
      row: row - 1 + (fitCell ? 1 : rowSpan - 1),
      col: column - 1 + (fitCell ? 1 : colSpan - 1),
      offsetX: pixelsToEMU(width + offsetX),
      offsetY: pixelsToEMU(height + offsetY)
    },
    height: pixelsToEMU(totalHeight || height),
    width: pixelsToEMU(totalWidth || width)
  };
};
var getPicture = (image, currentIndex, worksheetImageIndex, imageBoxSize) => {
  return {
    name: "xdr:pic",
    children: [getNvPicPr(image, currentIndex + 1), getBlipFill(image, worksheetImageIndex + 1), getSpPr(image, imageBoxSize)]
  };
};
var drawingFactory = {
  getTemplate(config) {
    const {
      sheetIndex
    } = config;
    const sheetImages = ExcelXlsxFactory.worksheetImages.get(sheetIndex);
    const sheetImageIds = ExcelXlsxFactory.worksheetImageIds.get(sheetIndex);
    const children = sheetImages.map((image, idx) => {
      const boxSize = getImageBoxSize(image);
      return {
        name: "xdr:twoCellAnchor",
        properties: {
          rawMap: {
            editAs: "absolute"
          }
        },
        children: [getAnchor("from", boxSize.from), getAnchor("to", boxSize.to), getPicture(image, idx, sheetImageIds.get(image.id).index, boxSize), {
          name: "xdr:clientData"
        }]
      };
    });
    return {
      name: "xdr:wsDr",
      properties: {
        rawMap: {
          "xmlns:a": "http://schemas.openxmlformats.org/drawingml/2006/main",
          "xmlns:xdr": "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
        }
      },
      children
    };
  }
};
var drawing_default = drawingFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/relationship.ts
var relationshipFactory = {
  getTemplate(config) {
    const {
      Id,
      Type,
      Target
    } = config;
    return {
      name: "Relationship",
      properties: {
        rawMap: {
          Id,
          Type,
          Target
        }
      }
    };
  }
};
var relationship_default = relationshipFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/relationships.ts
var relationshipsFactory = {
  getTemplate(c) {
    const children = c.map(relationship => relationship_default.getTemplate(relationship));
    return {
      name: "Relationships",
      properties: {
        rawMap: {
          xmlns: "http://schemas.openxmlformats.org/package/2006/relationships"
        }
      },
      children
    };
  }
};
var relationships_default = relationshipsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/sharedStrings.ts
var sharedStrings = {
  getTemplate(strings) {
    return {
      name: "sst",
      properties: {
        rawMap: {
          xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
          count: strings.size,
          uniqueCount: strings.size
        }
      },
      children: buildSharedString(strings)
    };
  }
};
var sharedStrings_default = sharedStrings;

// enterprise-modules/excel-export/src/excelExport/assets/excelLegacyConvert.ts
var getWeightName = value => {
  switch (value) {
    case 1:
      return "thin";
    case 2:
      return "medium";
    case 3:
      return "thick";
    default:
      return "hair";
  }
};
var mappedBorderNames = {
  None: "None",
  Dot: "Dotted",
  Dash: "Dashed",
  Double: "Double",
  DashDot: "DashDot",
  DashDotDot: "DashDotDot",
  SlantDashDot: "SlantDashDot",
  Continuous: "Continuous"
};
var mediumBorders = ["Dashed", "DashDot", "DashDotDot"];
var colorMap = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinDiagStripe: "lightUp",
  ThinHorzCross: "lightGrid",
  ThinDiagCross: "lightTrellis",
  Gray125: "gray125",
  Gray0625: "gray0625"
};
var horizontalAlignmentMap = {
  Automatic: "general",
  Left: "left",
  Center: "center",
  Right: "right",
  Fill: "fill",
  Justify: "justify",
  CenterAcrossSelection: "centerContinuous",
  Distributed: "distributed",
  JustifyDistributed: "justify"
};
var verticalAlignmentMap = {
  Automatic: void 0,
  Top: "top",
  Bottom: "bottom",
  Center: "center",
  Justify: "justify",
  Distributed: "distributed",
  JustifyDistributed: "justify"
};
var convertLegacyPattern = name => {
  if (!name) {
    return "none";
  }
  return colorMap[name] || name;
};
var convertLegacyColor = color => {
  if (color == void 0) {
    return color;
  }
  if (color.charAt(0) === "#") {
    color = color.substring(1);
  }
  return color.length === 6 ? "FF" + color : color;
};
var convertLegacyBorder = (type, weight) => {
  if (!type) {
    return "thin";
  }
  const namedWeight = getWeightName(weight);
  if (type === "Continuous") {
    return namedWeight;
  }
  const mappedName = mappedBorderNames[type];
  if (namedWeight === "medium" && mediumBorders.some(type2 => type2 === mappedName)) {
    return `medium${mappedName}`;
  }
  return `${mappedName.charAt(0).toLowerCase()}${mappedName.substring(1)}`;
};
var convertLegacyHorizontalAlignment = alignment => {
  return horizontalAlignmentMap[alignment] || "general";
};
var convertLegacyVerticalAlignment = alignment => {
  return verticalAlignmentMap[alignment] || void 0;
};

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/border.ts
var getBorderColor = color => {
  return {
    name: "color",
    properties: {
      rawMap: {
        rgb: convertLegacyColor(color || "#000000")
      }
    }
  };
};
var borderFactory = {
  getTemplate(border) {
    const {
      left,
      right,
      top,
      bottom,
      diagonal
    } = border;
    const leftChildren = left ? [getBorderColor(left.color)] : void 0;
    const rightChildren = right ? [getBorderColor(right.color)] : void 0;
    const topChildren = top ? [getBorderColor(top.color)] : void 0;
    const bottomChildren = bottom ? [getBorderColor(bottom.color)] : void 0;
    const diagonalChildren = diagonal ? [getBorderColor(diagonal.color)] : void 0;
    return {
      name: "border",
      children: [{
        name: "left",
        properties: {
          rawMap: {
            style: left && left.style
          }
        },
        children: leftChildren
      }, {
        name: "right",
        properties: {
          rawMap: {
            style: right && right.style
          }
        },
        children: rightChildren
      }, {
        name: "top",
        properties: {
          rawMap: {
            style: top && top.style
          }
        },
        children: topChildren
      }, {
        name: "bottom",
        properties: {
          rawMap: {
            style: bottom && bottom.style
          }
        },
        children: bottomChildren
      }, {
        name: "diagonal",
        properties: {
          rawMap: {
            style: diagonal && diagonal.style
          }
        },
        children: diagonalChildren
      }]
    };
  }
};
var border_default = borderFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/borders.ts
var bordersFactory = {
  getTemplate(borders) {
    return {
      name: "borders",
      properties: {
        rawMap: {
          count: borders.length
        }
      },
      children: borders.map(border => border_default.getTemplate(border))
    };
  }
};
var borders_default = bordersFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/alignment.ts
var getReadingOrderId = readingOrder => {
  const order = ["Context", "LeftToRight", "RightToLeft"];
  const pos = order.indexOf(readingOrder);
  return Math.max(pos, 0);
};
var alignmentFactory = {
  getTemplate(alignment) {
    const {
      horizontal,
      indent,
      readingOrder,
      rotate,
      shrinkToFit,
      vertical,
      wrapText
    } = alignment;
    return {
      name: "alignment",
      properties: {
        rawMap: {
          horizontal: horizontal && convertLegacyHorizontalAlignment(horizontal),
          indent,
          readingOrder: readingOrder && getReadingOrderId(readingOrder),
          textRotation: rotate,
          shrinkToFit,
          vertical: vertical && convertLegacyVerticalAlignment(vertical),
          wrapText
        }
      }
    };
  }
};
var alignment_default = alignmentFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/protection.ts
var protectionFactory = {
  getTemplate(protection) {
    const locked = protection.protected === false ? 0 : 1;
    const hidden = protection.hideFormula === true ? 1 : 0;
    return {
      name: "protection",
      properties: {
        rawMap: {
          hidden,
          locked
        }
      }
    };
  }
};
var protection_default = protectionFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/xf.ts
var xfFactory = {
  getTemplate(xf) {
    const {
      alignment,
      borderId,
      fillId,
      fontId,
      numFmtId,
      protection,
      quotePrefix,
      xfId
    } = xf;
    const children = [];
    if (alignment) {
      children.push(alignment_default.getTemplate(alignment));
    }
    if (protection) {
      children.push(protection_default.getTemplate(protection));
    }
    return {
      name: "xf",
      properties: {
        rawMap: {
          applyAlignment: alignment ? 1 : void 0,
          applyProtection: protection ? 1 : void 0,
          applyBorder: borderId ? 1 : void 0,
          applyFill: fillId ? 1 : void 0,
          borderId,
          fillId,
          applyFont: fontId ? 1 : void 0,
          fontId,
          applyNumberFormat: numFmtId ? 1 : void 0,
          numFmtId,
          quotePrefix: quotePrefix ? 1 : void 0,
          xfId
        }
      },
      children: children.length ? children : void 0
    };
  }
};
var xf_default = xfFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/cellStyleXfs.ts
var cellStylesXfsFactory = {
  getTemplate(xfs) {
    return {
      name: "cellStyleXfs",
      properties: {
        rawMap: {
          count: xfs.length
        }
      },
      children: xfs.map(xf => xf_default.getTemplate(xf))
    };
  }
};
var cellStyleXfs_default = cellStylesXfsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/cellStyle.ts
var borderFactory2 = {
  getTemplate(cellStyle) {
    const {
      builtinId,
      name,
      xfId
    } = cellStyle;
    return {
      name: "cellStyle",
      properties: {
        rawMap: {
          builtinId,
          name,
          xfId
        }
      }
    };
  }
};
var cellStyle_default = borderFactory2;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/cellStyles.ts
var cellStylesFactory = {
  getTemplate(cellStyles) {
    return {
      name: "cellStyles",
      properties: {
        rawMap: {
          count: cellStyles.length
        }
      },
      children: cellStyles.map(cellStyle => cellStyle_default.getTemplate(cellStyle))
    };
  }
};
var cellStyles_default = cellStylesFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/cellXfs.ts
var cellXfsFactory = {
  getTemplate(xfs) {
    return {
      name: "cellXfs",
      properties: {
        rawMap: {
          count: xfs.length
        }
      },
      children: xfs.map(xf => xf_default.getTemplate(xf))
    };
  }
};
var cellXfs_default = cellXfsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/fill.ts
var fillFactory = {
  getTemplate(fill) {
    const {
      patternType,
      fgTheme,
      fgTint,
      fgRgb,
      bgRgb,
      bgIndexed
    } = fill;
    const pf = {
      name: "patternFill",
      properties: {
        rawMap: {
          patternType
        }
      }
    };
    if (fgTheme || fgTint || fgRgb) {
      pf.children = [{
        name: "fgColor",
        properties: {
          rawMap: {
            theme: fgTheme,
            tint: fgTint,
            rgb: fgRgb
          }
        }
      }];
    }
    if (bgIndexed || bgRgb) {
      if (!pf.children) {
        pf.children = [];
      }
      pf.children.push({
        name: "bgColor",
        properties: {
          rawMap: {
            indexed: bgIndexed,
            rgb: bgRgb
          }
        }
      });
    }
    return {
      name: "fill",
      children: [pf]
    };
  }
};
var fill_default = fillFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/fills.ts
var fillsFactory = {
  getTemplate(fills) {
    return {
      name: "fills",
      properties: {
        rawMap: {
          count: fills.length
        }
      },
      children: fills.map(fill => fill_default.getTemplate(fill))
    };
  }
};
var fills_default = fillsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/font.ts
var fontFactory = {
  getTemplate(font) {
    const {
      size,
      colorTheme,
      color = "FF000000",
      fontName = "Calibri",
      family,
      scheme,
      italic,
      bold,
      strikeThrough,
      outline,
      shadow,
      underline,
      verticalAlign
    } = font;
    const children = [{
      name: "sz",
      properties: {
        rawMap: {
          val: size
        }
      }
    }, {
      name: "color",
      properties: {
        rawMap: {
          theme: colorTheme,
          rgb: color
        }
      }
    }, {
      name: "name",
      properties: {
        rawMap: {
          val: fontName
        }
      }
    }];
    if (family) {
      children.push({
        name: "family",
        properties: {
          rawMap: {
            val: family
          }
        }
      });
    }
    if (scheme) {
      children.push({
        name: "scheme",
        properties: {
          rawMap: {
            val: scheme
          }
        }
      });
    }
    if (italic) {
      children.push({
        name: "i"
      });
    }
    if (bold) {
      children.push({
        name: "b"
      });
    }
    if (strikeThrough) {
      children.push({
        name: "strike"
      });
    }
    if (outline) {
      children.push({
        name: "outline"
      });
    }
    if (shadow) {
      children.push({
        name: "shadow"
      });
    }
    if (underline) {
      children.push({
        name: "u",
        properties: {
          rawMap: {
            val: underline
          }
        }
      });
    }
    if (verticalAlign) {
      children.push({
        name: "vertAlign",
        properties: {
          rawMap: {
            val: verticalAlign
          }
        }
      });
    }
    return {
      name: "font",
      children
    };
  }
};
var font_default = fontFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/fonts.ts
var fontsFactory = {
  getTemplate(fonts) {
    return {
      name: "fonts",
      properties: {
        rawMap: {
          count: fonts.length
        }
      },
      children: fonts.map(font => font_default.getTemplate(font))
    };
  }
};
var fonts_default = fontsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/numberFormat.ts

function prepareString(str) {
  const split = str.split(/(\[[^\]]*\])/);
  for (let i = 0; i < split.length; i++) {
    let currentString = split[i];
    if (!currentString.length) {
      continue;
    }
    if (!currentString.startsWith("[")) {
      currentString = currentString.replace(/\$/g, '"$"');
    }
    split[i] = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(currentString);
  }
  return split.join("");
}
var numberFormatFactory = {
  getTemplate(numberFormat) {
    let {
      formatCode,
      numFmtId
    } = numberFormat;
    if (formatCode.length) {
      formatCode = prepareString(formatCode);
    }
    return {
      name: "numFmt",
      properties: {
        rawMap: {
          formatCode,
          numFmtId
        }
      }
    };
  }
};
var numberFormat_default = numberFormatFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/numberFormats.ts
var numberFormatsFactory = {
  getTemplate(numberFormats) {
    return {
      name: "numFmts",
      properties: {
        rawMap: {
          count: numberFormats.length
        }
      },
      children: numberFormats.map(numberFormat => numberFormat_default.getTemplate(numberFormat))
    };
  }
};
var numberFormats_default = numberFormatsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/styles/stylesheet.ts
var stylesMap;
var registeredNumberFmts;
var registeredFonts;
var registeredFills;
var registeredBorders;
var registeredCellStyleXfs;
var registeredCellXfs;
var registeredCellStyles;
var currentSheet;
var getStyleName = (name, currentSheet2) => {
  if (name.indexOf("mixedStyle") !== -1 && currentSheet2 > 1) {
    name += `_${currentSheet2}`;
  }
  return name;
};
var resetStylesheetValues = () => {
  stylesMap = {
    base: 0
  };
  registeredNumberFmts = [];
  registeredFonts = [{
    fontName: "Calibri",
    colorTheme: "1",
    family: "2",
    scheme: "minor"
  }];
  registeredFills = [{
    patternType: "none"
  }, {
    patternType: "gray125"
  }];
  registeredBorders = [{
    left: void 0,
    right: void 0,
    top: void 0,
    bottom: void 0,
    diagonal: void 0
  }];
  registeredCellStyleXfs = [{
    borderId: 0,
    fillId: 0,
    fontId: 0,
    numFmtId: 0
  }];
  registeredCellXfs = [{
    borderId: 0,
    fillId: 0,
    fontId: 0,
    numFmtId: 0,
    xfId: 0
  }];
  registeredCellStyles = [{
    builtinId: 0,
    name: "Normal",
    xfId: 0
  }];
};
var registerFill = fill => {
  const convertedPattern = convertLegacyPattern(fill.pattern);
  const convertedFillColor = convertLegacyColor(fill.color);
  const convertedPatternColor = convertLegacyColor(fill.patternColor);
  let pos = registeredFills.findIndex(currentFill => {
    const {
      patternType,
      fgRgb,
      bgRgb
    } = currentFill;
    if (patternType != convertedPattern || fgRgb != convertedFillColor || bgRgb != convertedPatternColor) {
      return false;
    }
    return true;
  });
  if (pos === -1) {
    pos = registeredFills.length;
    registeredFills.push({
      patternType: convertedPattern,
      fgRgb: convertedFillColor,
      bgRgb: convertedPatternColor
    });
  }
  return pos;
};
var registerNumberFmt = format => {
  if (numberFormatMap[format]) {
    return numberFormatMap[format];
  }
  let pos = registeredNumberFmts.findIndex(currentFormat => currentFormat.formatCode === format);
  if (pos === -1) {
    pos = registeredNumberFmts.length + 164;
    registeredNumberFmts.push({
      formatCode: format,
      numFmtId: pos
    });
  } else {
    pos = registeredNumberFmts[pos].numFmtId;
  }
  return pos;
};
var registerBorders = borders => {
  const {
    borderBottom,
    borderTop,
    borderLeft,
    borderRight
  } = borders;
  let bottomStyle;
  let topStyle;
  let leftStyle;
  let rightStyle;
  let bottomColor;
  let topColor;
  let leftColor;
  let rightColor;
  if (borderLeft) {
    leftStyle = convertLegacyBorder(borderLeft.lineStyle, borderLeft.weight);
    leftColor = convertLegacyColor(borderLeft.color);
  }
  if (borderRight) {
    rightStyle = convertLegacyBorder(borderRight.lineStyle, borderRight.weight);
    rightColor = convertLegacyColor(borderRight.color);
  }
  if (borderBottom) {
    bottomStyle = convertLegacyBorder(borderBottom.lineStyle, borderBottom.weight);
    bottomColor = convertLegacyColor(borderBottom.color);
  }
  if (borderTop) {
    topStyle = convertLegacyBorder(borderTop.lineStyle, borderTop.weight);
    topColor = convertLegacyColor(borderTop.color);
  }
  let pos = registeredBorders.findIndex(currentBorder => {
    const {
      left,
      right,
      top,
      bottom
    } = currentBorder;
    if (!left && (leftStyle || leftColor)) {
      return false;
    }
    if (!right && (rightStyle || rightColor)) {
      return false;
    }
    if (!top && (topStyle || topColor)) {
      return false;
    }
    if (!bottom && (bottomStyle || bottomColor)) {
      return false;
    }
    const {
      style: clS,
      color: clC
    } = left || {};
    const {
      style: crS,
      color: crC
    } = right || {};
    const {
      style: ctS,
      color: ctC
    } = top || {};
    const {
      style: cbS,
      color: cbC
    } = bottom || {};
    if (clS != leftStyle || clC != leftColor) {
      return false;
    }
    if (crS != rightStyle || crC != rightColor) {
      return false;
    }
    if (ctS != topStyle || ctC != topColor) {
      return false;
    }
    if (cbS != bottomStyle || cbC != bottomColor) {
      return false;
    }
    return true;
  });
  if (pos === -1) {
    pos = registeredBorders.length;
    registeredBorders.push({
      left: {
        style: leftStyle,
        color: leftColor
      },
      right: {
        style: rightStyle,
        color: rightColor
      },
      top: {
        style: topStyle,
        color: topColor
      },
      bottom: {
        style: bottomStyle,
        color: bottomColor
      },
      diagonal: {
        style: void 0,
        color: void 0
      }
    });
  }
  return pos;
};
var registerFont = font => {
  const {
    fontName: name = "Calibri",
    color,
    size,
    bold,
    italic,
    outline,
    shadow,
    strikeThrough,
    underline,
    family,
    verticalAlign
  } = font;
  const convertedColor = convertLegacyColor(color);
  const familyId = getFontFamilyId(family);
  const convertedUnderline = underline ? underline.toLocaleLowerCase() : void 0;
  const convertedVerticalAlign = verticalAlign ? verticalAlign.toLocaleLowerCase() : void 0;
  let pos = registeredFonts.findIndex(currentFont => {
    if (currentFont.fontName != name || currentFont.color != convertedColor || currentFont.size != size || currentFont.bold != bold || currentFont.italic != italic || currentFont.outline != outline || currentFont.shadow != shadow || currentFont.strikeThrough != strikeThrough || currentFont.underline != convertedUnderline || currentFont.verticalAlign != convertedVerticalAlign ||
    // @ts-ignore
    currentFont.family != familyId) {
      return false;
    }
    return true;
  });
  if (pos === -1) {
    pos = registeredFonts.length;
    registeredFonts.push({
      fontName: name,
      color: convertedColor,
      size,
      bold,
      italic,
      outline,
      shadow,
      strikeThrough,
      underline: convertedUnderline,
      verticalAlign: convertedVerticalAlign,
      family: familyId != null ? familyId.toString() : void 0
    });
  }
  return pos;
};
var registerStyle = config => {
  const {
    alignment,
    borders,
    font,
    interior,
    numberFormat,
    protection,
    quotePrefix
  } = config;
  let {
    id
  } = config;
  let currentFill = 0;
  let currentBorder = 0;
  let currentFont = 0;
  let currentNumberFmt = 0;
  if (!id) {
    return;
  }
  id = getStyleName(id, currentSheet);
  if (stylesMap[id] != void 0) {
    return;
  }
  if (interior) {
    currentFill = registerFill(interior);
  }
  if (borders) {
    currentBorder = registerBorders(borders);
  }
  if (font) {
    currentFont = registerFont(font);
  }
  if (numberFormat) {
    currentNumberFmt = registerNumberFmt(numberFormat.format);
  }
  stylesMap[id] = registeredCellXfs.length;
  registeredCellXfs.push({
    alignment,
    borderId: currentBorder || 0,
    fillId: currentFill || 0,
    fontId: currentFont || 0,
    numFmtId: currentNumberFmt || 0,
    protection,
    quotePrefix,
    xfId: 0
  });
};
var stylesheetFactory = {
  getTemplate(defaultFontSize) {
    const numberFormats = numberFormats_default.getTemplate(registeredNumberFmts);
    const fonts = fonts_default.getTemplate(registeredFonts.map(font => ({
      ...font,
      size: font.size != null ? font.size : defaultFontSize
    })));
    const fills = fills_default.getTemplate(registeredFills);
    const borders = borders_default.getTemplate(registeredBorders);
    const cellStylesXfs = cellStyleXfs_default.getTemplate(registeredCellStyleXfs);
    const cellXfs = cellXfs_default.getTemplate(registeredCellXfs);
    const cellStyles = cellStyles_default.getTemplate(registeredCellStyles);
    resetStylesheetValues();
    return {
      name: "styleSheet",
      properties: {
        rawMap: {
          "mc:Ignorable": "x14ac x16r2 xr",
          xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
          "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
          "xmlns:x14ac": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac",
          "xmlns:x16r2": "http://schemas.microsoft.com/office/spreadsheetml/2015/02/main",
          "xmlns:xr": "http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
        }
      },
      children: [numberFormats, fonts, fills, borders, cellStylesXfs, cellXfs, cellStyles, {
        name: "tableStyles",
        properties: {
          rawMap: {
            count: 0,
            defaultPivotStyle: "PivotStyleLight16",
            defaultTableStyle: "TableStyleMedium2"
          }
        }
      }]
    };
  }
};
var getStyleId = (name, currentSheet2) => {
  return stylesMap[getStyleName(name, currentSheet2)] || 0;
};
var registerStyles = (styles, _currentSheet) => {
  currentSheet = _currentSheet;
  if (currentSheet === 1) {
    resetStylesheetValues();
  }
  styles.forEach(registerStyle);
};
var stylesheet_default = stylesheetFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/table.ts
var tableFactory = {
  getTemplate(dataTable, idx) {
    const {
      name,
      columns,
      rowCount,
      displayName,
      headerRowIndex,
      showRowStripes,
      showColumnStripes,
      showFilterButtons,
      highlightFirstColumn,
      highlightLastColumn
    } = dataTable || {};
    if (!dataTable || !name || !Array.isArray(columns) || !columns.length || !rowCount) {
      return {
        name: "table"
      };
    }
    const filterColumns = columns.map((col, idx2) => ({
      name: "filterColumn",
      properties: {
        rawMap: {
          colId: idx2.toString(),
          // For filters, this should start with 0
          hiddenButton: showFilterButtons[idx2] ? 0 : 1
        }
      }
    }));
    const firstRow = headerRowIndex + 1;
    const id = (idx + 1).toString();
    const firstCell = `A${firstRow}`;
    const lastCell = `${String.fromCharCode(64 + columns.length)}${firstRow + rowCount}`;
    const ref = `${firstCell}:${lastCell}`;
    const displayNameToUse = idx ? `${displayName}_${idx + 1}` : displayName;
    return {
      name: "table",
      properties: {
        rawMap: {
          xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
          "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
          "mc:Ignorable": "xr xr3",
          "xmlns:xr": "http://schemas.microsoft.com/office/spreadsheetml/2014/revision",
          "xmlns:xr3": "http://schemas.microsoft.com/office/spreadsheetml/2016/revision3",
          name,
          displayName: displayNameToUse,
          ref,
          totalsRowShown: 0,
          id
        }
      },
      children: [{
        name: "autoFilter",
        properties: {
          rawMap: {
            ref
          }
        },
        children: filterColumns
      }, {
        name: "tableColumns",
        properties: {
          rawMap: {
            count: columns.length
          }
        },
        children: columns.map((col, idx2) => ({
          name: "tableColumn",
          properties: {
            rawMap: {
              id: (idx2 + 1).toString(),
              name: col,
              dataCellStyle: "Normal"
            }
          }
        }))
      }, {
        name: "tableStyleInfo",
        properties: {
          rawMap: {
            name: "TableStyleLight1",
            showFirstColumn: highlightFirstColumn ? 1 : 0,
            showLastColumn: highlightLastColumn ? 1 : 0,
            showRowStripes: showRowStripes ? 1 : 0,
            showColumnStripes: showColumnStripes ? 1 : 0
          }
        }
      }]
    };
  }
};
var table_default = tableFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/themes/office/colorScheme.ts
var getColorChildren = props => {
  const [type, innerType, val, lastClr] = props;
  return {
    name: `a:${type}`,
    children: [{
      name: `a:${innerType}`,
      properties: {
        rawMap: {
          val,
          lastClr
        }
      }
    }]
  };
};
var colorScheme = {
  getTemplate() {
    return {
      name: "a:clrScheme",
      properties: {
        rawMap: {
          name: "Office"
        }
      },
      children: [getColorChildren(["dk1", "sysClr", "windowText", "000000"]), getColorChildren(["lt1", "sysClr", "window", "FFFFFF"]), getColorChildren(["dk2", "srgbClr", "44546A"]), getColorChildren(["lt2", "srgbClr", "E7E6E6"]), getColorChildren(["accent1", "srgbClr", "4472C4"]), getColorChildren(["accent2", "srgbClr", "ED7D31"]), getColorChildren(["accent3", "srgbClr", "A5A5A5"]), getColorChildren(["accent4", "srgbClr", "FFC000"]), getColorChildren(["accent5", "srgbClr", "5B9BD5"]), getColorChildren(["accent6", "srgbClr", "70AD47"]), getColorChildren(["hlink", "srgbClr", "0563C1"]), getColorChildren(["folHlink", "srgbClr", "954F72"])]
    };
  }
};
var colorScheme_default = colorScheme;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/themes/office/fontScheme.ts
var getFont = props => {
  const [type, typeface, script, panose] = props;
  return {
    name: `a:${type}`,
    properties: {
      rawMap: {
        script,
        typeface,
        panose
      }
    }
  };
};
var fontScheme = {
  getTemplate() {
    return {
      name: "a:fontScheme",
      properties: {
        rawMap: {
          name: "Office"
        }
      },
      children: [{
        name: "a:majorFont",
        children: [getFont(["latin", "Calibri Light", void 0, "020F0302020204030204"]), getFont(["ea", ""]), getFont(["cs", ""]), getFont(["font", "\u6E38\u30B4\u30B7\u30C3\u30AF Light", "Jpan"]), getFont(["font", "\uB9D1\uC740 \uACE0\uB515", "Hang"]), getFont(["font", "\u7B49\u7EBF Light", "Hans"]), getFont(["font", "\u65B0\u7D30\u660E\u9AD4", "Hant"]), getFont(["font", "Times New Roman", "Arab"]), getFont(["font", "Times New Roman", "Hebr"]), getFont(["font", "Tahoma", "Thai"]), getFont(["font", "Nyala", "Ethi"]), getFont(["font", "Vrinda", "Beng"]), getFont(["font", "Shruti", "Gujr"]), getFont(["font", "MoolBoran", "Khmr"]), getFont(["font", "Tunga", "Knda"]), getFont(["font", "Raavi", "Guru"]), getFont(["font", "Euphemia", "Cans"]), getFont(["font", "Plantagenet Cherokee", "Cher"]), getFont(["font", "Microsoft Yi Baiti", "Yiii"]), getFont(["font", "Microsoft Himalaya", "Tibt"]), getFont(["font", "MV Boli", "Thaa"]), getFont(["font", "Mangal", "Deva"]), getFont(["font", "Gautami", "Telu"]), getFont(["font", "Latha", "Taml"]), getFont(["font", "Estrangelo Edessa", "Syrc"]), getFont(["font", "Kalinga", "Orya"]), getFont(["font", "Kartika", "Mlym"]), getFont(["font", "DokChampa", "Laoo"]), getFont(["font", "Iskoola Pota", "Sinh"]), getFont(["font", "Mongolian Baiti", "Mong"]), getFont(["font", "Times New Roman", "Viet"]), getFont(["font", "Microsoft Uighur", "Uigh"]), getFont(["font", "Sylfaen", "Geor"]), getFont(["font", "Arial", "Armn"]), getFont(["font", "Leelawadee UI", "Bugi"]), getFont(["font", "Microsoft JhengHei", "Bopo"]), getFont(["font", "Javanese Text", "Java"]), getFont(["font", "Segoe UI", "Lisu"]), getFont(["font", "Myanmar Text", "Mymr"]), getFont(["font", "Ebrima", "Nkoo"]), getFont(["font", "Nirmala UI", "Olck"]), getFont(["font", "Ebrima", "Osma"]), getFont(["font", "Phagspa", "Phag"]), getFont(["font", "Estrangelo Edessa", "Syrn"]), getFont(["font", "Estrangelo Edessa", "Syrj"]), getFont(["font", "Estrangelo Edessa", "Syre"]), getFont(["font", "Nirmala UI", "Sora"]), getFont(["font", "Microsoft Tai Le", "Tale"]), getFont(["font", "Microsoft New Tai Lue", "Talu"]), getFont(["font", "Ebrima", "Tfng"])]
      }, {
        name: "a:minorFont",
        children: [getFont(["latin", "Calibri", void 0, "020F0502020204030204"]), getFont(["ea", ""]), getFont(["cs", ""]), getFont(["font", "\u6E38\u30B4\u30B7\u30C3\u30AF", "Jpan"]), getFont(["font", "\uB9D1\uC740 \uACE0\uB515", "Hang"]), getFont(["font", "\u7B49\u7EBF", "Hans"]), getFont(["font", "\u65B0\u7D30\u660E\u9AD4", "Hant"]), getFont(["font", "Arial", "Arab"]), getFont(["font", "Arial", "Hebr"]), getFont(["font", "Tahoma", "Thai"]), getFont(["font", "Nyala", "Ethi"]), getFont(["font", "Vrinda", "Beng"]), getFont(["font", "Shruti", "Gujr"]), getFont(["font", "DaunPenh", "Khmr"]), getFont(["font", "Tunga", "Knda"]), getFont(["font", "Raavi", "Guru"]), getFont(["font", "Euphemia", "Cans"]), getFont(["font", "Plantagenet Cherokee", "Cher"]), getFont(["font", "Microsoft Yi Baiti", "Yiii"]), getFont(["font", "Microsoft Himalaya", "Tibt"]), getFont(["font", "MV Boli", "Thaa"]), getFont(["font", "Mangal", "Deva"]), getFont(["font", "Gautami", "Telu"]), getFont(["font", "Latha", "Taml"]), getFont(["font", "Estrangelo Edessa", "Syrc"]), getFont(["font", "Kalinga", "Orya"]), getFont(["font", "Kartika", "Mlym"]), getFont(["font", "DokChampa", "Laoo"]), getFont(["font", "Iskoola Pota", "Sinh"]), getFont(["font", "Mongolian Baiti", "Mong"]), getFont(["font", "Arial", "Viet"]), getFont(["font", "Microsoft Uighur", "Uigh"]), getFont(["font", "Sylfaen", "Geor"]), getFont(["font", "Arial", "Armn"]), getFont(["font", "Leelawadee UI", "Bugi"]), getFont(["font", "Microsoft JhengHei", "Bopo"]), getFont(["font", "Javanese Text", "Java"]), getFont(["font", "Segoe UI", "Lisu"]), getFont(["font", "Myanmar Text", "Mymr"]), getFont(["font", "Ebrima", "Nkoo"]), getFont(["font", "Nirmala UI", "Olck"]), getFont(["font", "Ebrima", "Osma"]), getFont(["font", "Phagspa", "Phag"]), getFont(["font", "Estrangelo Edessa", "Syrn"]), getFont(["font", "Estrangelo Edessa", "Syrj"]), getFont(["font", "Estrangelo Edessa", "Syre"]), getFont(["font", "Nirmala UI", "Sora"]), getFont(["font", "Microsoft Tai Le", "Tale"]), getFont(["font", "Microsoft New Tai Lue", "Talu"]), getFont(["font", "Ebrima", "Tfng"])]
      }]
    };
  }
};
var fontScheme_default = fontScheme;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/themes/office/formatScheme.ts
var getPropertyVal = (name, val, children) => ({
  name: `a:${name}`,
  properties: {
    rawMap: {
      val
    }
  },
  children
});
var getGs = props => {
  const [pos, schemeColor, satMod, lumMod, tint, shade] = props;
  const children = [];
  children.push(getPropertyVal("satMod", satMod));
  if (lumMod) {
    children.push(getPropertyVal("lumMod", lumMod));
  }
  if (tint) {
    children.push(getPropertyVal("tint", tint));
  }
  if (shade) {
    children.push(getPropertyVal("shade", shade));
  }
  return {
    name: "a:gs",
    properties: {
      rawMap: {
        pos
      }
    },
    children: [{
      name: "a:schemeClr",
      properties: {
        rawMap: {
          val: schemeColor
        }
      },
      children
    }]
  };
};
var getSolidFill = (val, children) => ({
  name: "a:solidFill",
  children: [getPropertyVal("schemeClr", val, children)]
});
var getGradFill = props => {
  const [rotWithShape, gs1, gs2, gs3, lin] = props;
  const [ang, scaled] = lin;
  return {
    name: "a:gradFill",
    properties: {
      rawMap: {
        rotWithShape
      }
    },
    children: [{
      name: "a:gsLst",
      children: [getGs(gs1), getGs(gs2), getGs(gs3)]
    }, {
      name: "a:lin",
      properties: {
        rawMap: {
          ang,
          scaled
        }
      }
    }]
  };
};
var getLine = props => {
  const [w, cap, cmpd, algn] = props;
  return {
    name: "a:ln",
    properties: {
      rawMap: {
        w,
        cap,
        cmpd,
        algn
      }
    },
    children: [getSolidFill("phClr"), getPropertyVal("prstDash", "solid"), {
      name: "a:miter",
      properties: {
        rawMap: {
          lim: "800000"
        }
      }
    }]
  };
};
var getEffectStyle = shadow => {
  const children = [];
  if (shadow) {
    const [blurRad, dist, dir, algn, rotWithShape] = shadow;
    children.push({
      name: "a:outerShdw",
      properties: {
        rawMap: {
          blurRad,
          dist,
          dir,
          algn,
          rotWithShape
        }
      },
      children: [getPropertyVal("srgbClr", "000000", [getPropertyVal("alpha", "63000")])]
    });
  }
  return {
    name: "a:effectStyle",
    children: [Object.assign({}, {
      name: "a:effectLst"
    }, children.length ? {
      children
    } : {})]
  };
};
var getFillStyleList = () => ({
  name: "a:fillStyleLst",
  children: [getSolidFill("phClr"), getGradFill(["1", ["0", "phClr", "105000", "110000", "67000"], ["50000", "phClr", "103000", "105000", "73000"], ["100000", "phClr", "109000", "105000", "81000"], ["5400000", "0"]]), getGradFill(["1", ["0", "phClr", "103000", "102000", "94000"], ["50000", "phClr", "110000", "100000", void 0, "100000"], ["100000", "phClr", "120000", "99000", void 0, "78000"], ["5400000", "0"]])]
});
var getLineStyleList = () => ({
  name: "a:lnStyleLst",
  children: [getLine(["6350", "flat", "sng", "ctr"]), getLine(["12700", "flat", "sng", "ctr"]), getLine(["19050", "flat", "sng", "ctr"])]
});
var getEffectStyleList = () => ({
  name: "a:effectStyleLst",
  children: [getEffectStyle(), getEffectStyle(), getEffectStyle(["57150", "19050", "5400000", "ctr", "0"])]
});
var getBgFillStyleList = () => ({
  name: "a:bgFillStyleLst",
  children: [getSolidFill("phClr"), getSolidFill("phClr", [getPropertyVal("tint", "95000"), getPropertyVal("satMod", "170000")]), getGradFill(["1", ["0", "phClr", "150000", "102000", "93000", "98000"], ["50000", "phClr", "130000", "103000", "98000", "90000"], ["100000", "phClr", "120000", void 0, void 0, "63000"], ["5400000", "0"]])]
});
var formatScheme = {
  getTemplate() {
    return {
      name: "a:fmtScheme",
      properties: {
        rawMap: {
          name: "Office"
        }
      },
      children: [getFillStyleList(), getLineStyleList(), getEffectStyleList(), getBgFillStyleList()]
    };
  }
};
var formatScheme_default = formatScheme;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/themes/office/themeElements.ts
var themeElements = {
  getTemplate() {
    return {
      name: "a:themeElements",
      children: [colorScheme_default.getTemplate(), fontScheme_default.getTemplate(), formatScheme_default.getTemplate()]
    };
  }
};
var themeElements_default = themeElements;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/themes/office.ts
var officeTheme = {
  getTemplate() {
    return {
      name: "a:theme",
      properties: {
        prefixedAttributes: [{
          prefix: "xmlns:",
          map: {
            a: "http://schemas.openxmlformats.org/drawingml/2006/main"
          }
        }],
        rawMap: {
          name: "Office Theme"
        }
      },
      children: [themeElements_default.getTemplate(), {
        name: "a:objectDefaults"
      }, {
        name: "a:extraClrSchemeLst"
      }]
    };
  }
};
var office_default = officeTheme;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/vmlDrawing.ts
var getShapeLayout = () => ({
  name: "o:shapelayout",
  properties: {
    prefixedAttributes: [{
      prefix: "v:",
      map: {
        ext: "edit"
      }
    }]
  },
  children: [{
    name: "o:idmap",
    properties: {
      prefixedAttributes: [{
        prefix: "v:",
        map: {
          ext: "edit"
        }
      }],
      rawMap: {
        data: "1"
      }
    }
  }]
});
var getStroke = () => ({
  name: "v:stroke",
  properties: {
    rawMap: {
      joinstyle: "miter"
    }
  }
});
var getFormulas = formulas => ({
  name: "v:formulas",
  children: formulas.map(formula => ({
    name: "v:f",
    properties: {
      rawMap: {
        eqn: formula
      }
    }
  }))
});
var getPath = () => ({
  name: "v:path",
  properties: {
    prefixedAttributes: [{
      prefix: "o:",
      map: {
        connecttype: "rect",
        extrusionok: "f"
      }
    }],
    rawMap: {
      gradientshapeok: "t"
    }
  }
});
var getLock = params => {
  const {
    aspectratio,
    rotation
  } = params || {};
  const rawMap = {};
  if (aspectratio) {
    rawMap.aspectratio = "t";
  }
  if (rotation) {
    rawMap.rotation = "t";
  }
  return {
    name: "o:lock",
    properties: {
      prefixedAttributes: [{
        prefix: "v:",
        map: {
          ext: "edit"
        }
      }],
      rawMap
    }
  };
};
function mapNumber(value, startSource, endSource, startTarget, endTarget) {
  return (value - startSource) / (endSource - startSource) * (endTarget - startTarget) + startTarget;
}
var getImageData = (image, idx) => {
  let rawMap;
  const {
    recolor,
    brightness,
    contrast,
    id
  } = image;
  if (recolor) {
    rawMap = {};
    if (recolor === "Washout" || recolor === "Grayscale") {
      rawMap.gain = "19661f";
      rawMap.blacklevel = "22938f";
    }
    if (recolor === "Black & White" || recolor === "Grayscale") {
      rawMap.grayscale = "t";
      if (recolor === "Black & White") {
        rawMap.bilevel = "t";
      }
    }
  }
  if (!recolor || recolor === "Grayscale") {
    if (!rawMap) {
      rawMap = {};
    }
    if (contrast != null && contrast !== 50) {
      let gain = "1";
      if (contrast >= 0) {
        if (contrast < 50) {
          gain = String(contrast / 50);
        } else if (contrast < 100) {
          gain = String(50 / (100 - contrast));
        } else if (contrast === 100) {
          gain = "2147483647f";
        }
      }
      rawMap.gain = gain;
    }
    if (brightness != null && brightness !== 50) {
      rawMap.blacklevel = mapNumber(brightness, 0, 100, -0.5, 0.5).toString();
    }
  }
  return {
    name: "v:imagedata",
    properties: {
      prefixedAttributes: [{
        prefix: "o:",
        map: {
          relid: `rId${idx}`,
          title: id
        }
      }],
      rawMap
    }
  };
};
var getShapeType = () => {
  const formulas = ["if lineDrawn pixelLineWidth 0", "sum @0 1 0", "sum 0 0 @1", "prod @2 1 2", "prod @3 21600 pixelWidth", "prod @3 21600 pixelHeight", "sum @0 0 1", "prod @6 1 2", "prod @7 21600 pixelWidth", "sum @8 21600 0", "prod @7 21600 pixelHeight", "sum @10 21600 0"];
  return {
    name: "v:shapetype",
    properties: {
      prefixedAttributes: [{
        prefix: "o:",
        map: {
          spt: "75",
          preferrelative: "t"
        }
      }],
      rawMap: {
        coordsize: "21600,21600",
        filled: "f",
        id: "_x0000_t75",
        path: "m@4@5l@4@11@9@11@9@5xe",
        stroked: "f"
      }
    },
    children: [getStroke(), getFormulas(formulas), getPath(), getLock({
      aspectratio: true
    })]
  };
};
var pixelToPoint = value => Math.floor((value ?? 0) * 0.74999943307122);
var getShape = (image, idx) => {
  const {
    width = 0,
    height = 0,
    altText
  } = image;
  const imageWidth = pixelToPoint(width);
  const imageHeight = pixelToPoint(height);
  return {
    name: "v:shape",
    properties: {
      rawMap: {
        id: image.headerFooterPosition,
        "o:spid": "_x0000_s1025",
        style: `position: absolute; margin-left: 0; margin-top: 10in; margin-bottom: 0; margin-right: 0; width: ${imageWidth}pt; height: ${imageHeight}pt; z-index: ${idx + 1}`,
        type: "#_x0000_t75",
        alt: altText
      }
    },
    children: [getImageData(image, idx + 1), getLock({
      rotation: true
    })]
  };
};
var vmlDrawingFactory = {
  getTemplate(params) {
    const headerFooterImages = ExcelXlsxFactory.worksheetHeaderFooterImages.get(params.sheetIndex) || [];
    const children = [getShapeLayout(), getShapeType(), ...headerFooterImages.map((img, idx) => getShape(img, idx))];
    return {
      name: "xml",
      properties: {
        prefixedAttributes: [{
          prefix: "xmlns:",
          map: {
            v: "urn:schemas-microsoft-com:vml",
            o: "urn:schemas-microsoft-com:office:office",
            x: "urn:schemas-microsoft-com:office:excel"
          }
        }]
      },
      children
    };
  }
};
var vmlDrawing_default = vmlDrawingFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/sheet.ts
var sheetFactory = {
  getTemplate(name, idx) {
    const sheetId = (idx + 1).toString();
    return {
      name: "sheet",
      properties: {
        rawMap: {
          name,
          sheetId,
          "r:id": `rId${sheetId}`
        }
      }
    };
  }
};
var sheet_default = sheetFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/sheets.ts
var sheetsFactory = {
  getTemplate(names) {
    return {
      name: "sheets",
      children: names.map((sheet, idx) => sheet_default.getTemplate(sheet, idx))
    };
  }
};
var sheets_default = sheetsFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/workbook.ts
var workbookFactory = {
  getTemplate(names, activeTab) {
    return {
      name: "workbook",
      properties: {
        prefixedAttributes: [{
          prefix: "xmlns:",
          map: {
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
          }
        }],
        rawMap: {
          xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
        }
      },
      children: [{
        name: "bookViews",
        children: [{
          name: "workbookView",
          properties: {
            rawMap: {
              activeTab
            }
          }
        }]
      }, sheets_default.getTemplate(names)]
    };
  }
};
var workbook_default = workbookFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/worksheet.ts


// enterprise-modules/excel-export/src/excelExport/files/ooxml/column.ts
var getExcelCellWidth = width => Math.ceil((width - 12) / 7 + 1);
var columnFactory = {
  getTemplate(config) {
    const {
      min,
      max,
      outlineLevel,
      s,
      width,
      hidden,
      bestFit
    } = config;
    let excelWidth = 1;
    let customWidth = "0";
    if (width > 1) {
      excelWidth = getExcelCellWidth(width);
      customWidth = "1";
    }
    return {
      name: "col",
      properties: {
        rawMap: {
          min,
          max,
          outlineLevel: outlineLevel != null ? outlineLevel : void 0,
          width: excelWidth,
          style: s,
          hidden: hidden ? "1" : "0",
          bestFit: bestFit ? "1" : "0",
          customWidth
        }
      }
    };
  }
};
var column_default = columnFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/mergeCell.ts
var mergeCellFactory = {
  getTemplate(ref) {
    return {
      name: "mergeCell",
      properties: {
        rawMap: {
          ref
        }
      }
    };
  }
};
var mergeCell_default = mergeCellFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/cell.ts

var convertLegacyType = type => {
  const t = type.charAt(0).toLowerCase();
  return t === "s" ? "inlineStr" : t;
};
var cellFactory = {
  getTemplate(config, idx, currentSheet2) {
    const {
      ref,
      data,
      styleId
    } = config;
    const {
      type,
      value
    } = data || {
      type: "empty",
      value: null
    };
    let convertedType = type;
    if (type === "f") {
      convertedType = "str";
    } else if (type.charAt(0) === type.charAt(0).toUpperCase()) {
      convertedType = convertLegacyType(type);
    }
    const obj = {
      name: "c",
      properties: {
        rawMap: {
          r: ref,
          t: convertedType === "empty" ? void 0 : convertedType,
          s: styleId ? getStyleId(styleId, currentSheet2) : void 0
        }
      }
    };
    if (convertedType === "empty") {
      return obj;
    }
    let children;
    if (convertedType === "str" && type === "f") {
      children = [{
        name: "f",
        textNode: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(replaceInvisibleCharacters(value), false)
      }];
    } else if (convertedType === "inlineStr") {
      children = [{
        name: "is",
        children: [{
          name: "t",
          textNode: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(replaceInvisibleCharacters(value), false)
        }]
      }];
    } else {
      children = [{
        name: "v",
        textNode: value
      }];
    }
    return Object.assign({}, obj, {
      children
    });
  }
};
var cell_default = cellFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/row.ts
var addEmptyCells = (cells, rowIdx) => {
  const mergeMap = [];
  let posCounter = 0;
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.mergeAcross) {
      mergeMap.push({
        pos: i,
        excelPos: posCounter
      });
      posCounter += cell.mergeAcross;
    }
    posCounter++;
  }
  if (mergeMap.length) {
    for (let i = mergeMap.length - 1; i >= 0; i--) {
      const mergedCells = [];
      const cell = cells[mergeMap[i].pos];
      for (let j = 1; j <= cell.mergeAcross; j++) {
        mergedCells.push({
          ref: `${getExcelColumnName(mergeMap[i].excelPos + 1 + j)}${rowIdx + 1}`,
          styleId: cell.styleId,
          data: {
            type: "empty",
            value: null
          }
        });
      }
      if (mergedCells.length) {
        cells.splice(mergeMap[i].pos + 1, 0, ...mergedCells);
      }
    }
  }
};
var shouldDisplayCell = cell => cell.data?.value !== "" || cell.styleId !== void 0;
var rowFactory = {
  getTemplate(config, idx, currentSheet2) {
    const {
      collapsed,
      hidden,
      height,
      outlineLevel,
      cells = []
    } = config;
    addEmptyCells(cells, idx);
    const children = cells.filter(shouldDisplayCell).map((cell, idx2) => cell_default.getTemplate(cell, idx2, currentSheet2));
    return {
      name: "row",
      properties: {
        rawMap: {
          r: idx + 1,
          collapsed: collapsed ? "1" : "0",
          hidden: hidden ? "1" : "0",
          ht: height,
          customHeight: height != null ? "1" : "0",
          spans: "1:1",
          outlineLevel: outlineLevel || void 0
        }
      },
      children
    };
  }
};
var row_default = rowFactory;

// enterprise-modules/excel-export/src/excelExport/files/ooxml/worksheet.ts
var getMergedCellsAndAddColumnGroups = (rows, cols, suppressColumnOutline) => {
  const mergedCells = [];
  const cellsWithCollapsibleGroups = [];
  rows.forEach((currentRow, rowIdx) => {
    const cells = currentRow.cells;
    let merges = 0;
    let lastCol;
    cells.forEach((currentCell, cellIdx) => {
      const min = cellIdx + merges + 1;
      const start = getExcelColumnName(min);
      const outputRow = rowIdx + 1;
      if (currentCell.mergeAcross) {
        merges += currentCell.mergeAcross;
        const end = getExcelColumnName(cellIdx + merges + 1);
        mergedCells.push(`${start}${outputRow}:${end}${outputRow}`);
      }
      if (!cols[min - 1]) {
        cols[min - 1] = {};
      }
      const {
        collapsibleRanges
      } = currentCell;
      if (collapsibleRanges) {
        collapsibleRanges.forEach(range => {
          cellsWithCollapsibleGroups.push([min + range[0], min + range[1]]);
        });
      }
      lastCol = cols[min - 1];
      lastCol.min = min;
      lastCol.max = min;
      currentCell.ref = `${start}${outputRow}`;
    });
  });
  cellsWithCollapsibleGroups.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  const rangeMap = /* @__PURE__ */new Map();
  const outlineLevel = /* @__PURE__ */new Map();
  cellsWithCollapsibleGroups.filter(currentRange => {
    const rangeString = currentRange.toString();
    const inMap = rangeMap.get(rangeString);
    if (inMap) {
      return false;
    }
    rangeMap.set(rangeString, true);
    return true;
  }).forEach(range => {
    const refCol = cols.find(col => col.min == range[0] && col.max == range[1]);
    const currentOutlineLevel = outlineLevel.get(range[0]);
    cols.push({
      min: range[0],
      max: range[1],
      outlineLevel: suppressColumnOutline ? void 0 : currentOutlineLevel || 1,
      width: (refCol || {
        width: 100
      }).width
    });
    outlineLevel.set(range[0], (currentOutlineLevel || 0) + 1);
  });
  return mergedCells;
};
var getPageOrientation = orientation => {
  if (!orientation || orientation !== "Portrait" && orientation !== "Landscape") {
    return "portrait";
  }
  return orientation.toLocaleLowerCase();
};
var getPageSize = pageSize => {
  if (pageSize == null) {
    return 1;
  }
  const positions = ["Letter", "Letter Small", "Tabloid", "Ledger", "Legal", "Statement", "Executive", "A3", "A4", "A4 Small", "A5", "A6", "B4", "B5", "Folio", "Envelope", "Envelope DL", "Envelope C5", "Envelope B5", "Envelope C3", "Envelope C4", "Envelope C6", "Envelope Monarch", "Japanese Postcard", "Japanese Double Postcard"];
  const pos = positions.indexOf(pageSize);
  return pos === -1 ? 1 : pos + 1;
};
var replaceHeaderFooterTokens = value => {
  const map = {
    "&[Page]": "&P",
    "&[Pages]": "&N",
    "&[Date]": "&D",
    "&[Time]": "&T",
    "&[Tab]": "&A",
    "&[Path]": "&Z",
    "&[File]": "&F",
    "&[Picture]": "&G"
  };
  (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._iterateObject)(map, (key, val) => {
    value = value.replace(key, val);
  });
  return value;
};
var getHeaderPosition = position => {
  if (position === "Center") {
    return "C";
  }
  if (position === "Right") {
    return "R";
  }
  return "L";
};
var applyHeaderFontStyle = (headerString, font) => {
  if (!font) {
    return headerString;
  }
  headerString += "&amp;&quot;";
  headerString += font.fontName || "Calibri";
  if (font.bold !== font.italic) {
    headerString += font.bold ? ",Bold" : ",Italic";
  } else if (font.bold) {
    headerString += ",Bold Italic";
  } else {
    headerString += ",Regular";
  }
  headerString += "&quot;";
  if (font.size) {
    headerString += `&amp;${font.size}`;
  }
  if (font.strikeThrough) {
    headerString += "&amp;S";
  }
  if (font.underline) {
    headerString += `&amp;${font.underline === "Double" ? "E" : "U"}`;
  }
  if (font.color) {
    headerString += `&amp;K${font.color.replace("#", "").toUpperCase()}`;
  }
  return headerString;
};
var processHeaderFooterContent = (content, location, rule) => content.reduce((prev, curr, idx) => {
  const pos = getHeaderPosition(curr.position);
  const output = applyHeaderFontStyle(`${prev}&amp;${pos}`, curr.font);
  const PositionMap = ["Left", "Center", "Right"];
  if (!curr.position) {
    curr.position = PositionMap[idx];
  }
  const {
    image
  } = curr;
  if (curr.value === "&[Picture]" && image) {
    const imagePosition = `${pos}${location}${rule}`;
    ExcelXlsxFactory.addHeaderFooterImageToMap(image, imagePosition);
  }
  return `${output}${(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(replaceHeaderFooterTokens(curr.value))}`;
}, "");
var buildHeaderFooter = headerFooterConfig => {
  const rules = ["all", "first", "even"];
  const headersAndFooters = [];
  rules.forEach(rule => {
    const headerFooter = headerFooterConfig[rule];
    const namePrefix = rule === "all" ? "odd" : rule;
    if (!headerFooter) {
      return;
    }
    for (const [key, value] of Object.entries(headerFooter)) {
      const nameSuffix = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      const location = key[0].toUpperCase();
      if (value) {
        const normalizedRule = rule === "all" ? "" : rule.toUpperCase();
        headersAndFooters.push({
          name: `${namePrefix}${nameSuffix}`,
          properties: {
            rawMap: {
              "xml:space": "preserve"
            }
          },
          textNode: processHeaderFooterContent(value, location, normalizedRule)
        });
      }
    }
  });
  return headersAndFooters;
};
var addColumns = columns => {
  return params => {
    if (columns.length) {
      params.children.push({
        name: "cols",
        children: columns.map(column => column_default.getTemplate(column))
      });
    }
    return params;
  };
};
var addSheetData = (rows, sheetNumber) => {
  return params => {
    if (rows.length) {
      params.children.push({
        name: "sheetData",
        children: rows.map((row, idx) => row_default.getTemplate(row, idx, sheetNumber))
      });
    }
    return params;
  };
};
var addMergeCells = mergeCells => {
  return params => {
    if (mergeCells.length) {
      params.children.push({
        name: "mergeCells",
        properties: {
          rawMap: {
            count: mergeCells.length
          }
        },
        children: mergeCells.map(mergedCell => mergeCell_default.getTemplate(mergedCell))
      });
    }
    return params;
  };
};
var addPageMargins = margins => {
  return params => {
    const {
      top = 0.75,
      right = 0.7,
      bottom = 0.75,
      left = 0.7,
      header = 0.3,
      footer = 0.3
    } = margins;
    params.children.push({
      name: "pageMargins",
      properties: {
        rawMap: {
          bottom,
          footer,
          header,
          left,
          right,
          top
        }
      }
    });
    return params;
  };
};
var addPageSetup = pageSetup => {
  return params => {
    if (pageSetup) {
      params.children.push({
        name: "pageSetup",
        properties: {
          rawMap: {
            horizontalDpi: 0,
            verticalDpi: 0,
            orientation: getPageOrientation(pageSetup.orientation),
            paperSize: getPageSize(pageSetup.pageSize)
          }
        }
      });
    }
    return params;
  };
};
var addHeaderFooter = headerFooterConfig => {
  return params => {
    if (!headerFooterConfig) {
      return params;
    }
    const differentFirst = headerFooterConfig.first != null ? 1 : 0;
    const differentOddEven = headerFooterConfig.even != null ? 1 : 0;
    params.children.push({
      name: "headerFooter",
      properties: {
        rawMap: {
          differentFirst,
          differentOddEven
        }
      },
      children: buildHeaderFooter(headerFooterConfig)
    });
    return params;
  };
};
var addExcelTableRel = excelTable => {
  return params => {
    if (excelTable) {
      params.children.push({
        name: "tableParts",
        properties: {
          rawMap: {
            count: "1"
          }
        },
        children: [{
          name: "tablePart",
          properties: {
            rawMap: {
              "r:id": `rId${++params.rIdCounter}`
            }
          }
        }]
      });
    }
    return params;
  };
};
var addDrawingRel = currentSheet2 => {
  return params => {
    const worksheetImages = ExcelXlsxFactory.worksheetImages.get(currentSheet2);
    if (worksheetImages?.length) {
      params.children.push({
        name: "drawing",
        properties: {
          rawMap: {
            "r:id": `rId${++params.rIdCounter}`
          }
        }
      });
    }
    return params;
  };
};
var addVmlDrawingRel = currentSheet2 => {
  return params => {
    if (ExcelXlsxFactory.worksheetHeaderFooterImages.get(currentSheet2)) {
      params.children.push({
        name: "legacyDrawingHF",
        properties: {
          rawMap: {
            "r:id": `rId${++params.rIdCounter}`
          }
        }
      });
    }
    return params;
  };
};
var getPane = (xSplit = 0, ySplit = 0) => {
  const shouldSplit = xSplit > 0 || ySplit > 0;
  return shouldSplit ? [{
    name: "pane",
    properties: {
      rawMap: {
        state: shouldSplit ? "frozen" : void 0,
        topLeftCell: shouldSplit ? `${getExcelColumnName(xSplit + 1)}${ySplit + 1}` : void 0,
        xSplit: xSplit === 0 ? void 0 : xSplit,
        ySplit: ySplit === 0 ? void 0 : ySplit
      }
    }
  }] : void 0;
};
var addSheetViews = (rtl = false, xSplit, ySplit) => {
  return params => {
    params.children.push({
      name: "sheetViews",
      children: [{
        name: "sheetView",
        properties: {
          rawMap: {
            rightToLeft: rtl === true ? "1" : "0",
            workbookViewId: "0"
          }
        },
        children: getPane(xSplit, ySplit)
      }]
    });
    return params;
  };
};
var addSheetPr = () => {
  return params => {
    params.children.push({
      name: "sheetPr",
      children: [{
        name: "outlinePr",
        properties: {
          rawMap: {
            summaryBelow: 0
          }
        }
      }]
    });
    return params;
  };
};
var addSheetFormatPr = rows => {
  return params => {
    const maxOutline = rows.reduce((prev, row) => {
      if (row.outlineLevel && row.outlineLevel > prev) {
        return row.outlineLevel;
      }
      return prev;
    }, 0);
    params.children.push({
      name: "sheetFormatPr",
      properties: {
        rawMap: {
          baseColWidth: 10,
          defaultRowHeight: 16,
          outlineLevelRow: maxOutline ? maxOutline : void 0
        }
      }
    });
    return params;
  };
};
var worksheetFactory = {
  getTemplate(params) {
    const {
      worksheet,
      currentSheet: currentSheet2,
      config
    } = params;
    const {
      margins = {},
      pageSetup,
      headerFooterConfig,
      suppressColumnOutline,
      rightToLeft,
      frozenRowCount,
      frozenColumnCount
    } = config;
    const {
      table
    } = worksheet;
    const {
      rows,
      columns
    } = table;
    const mergedCells = columns && columns.length ? getMergedCellsAndAddColumnGroups(rows, columns, !!suppressColumnOutline) : [];
    const {
      worksheetDataTables
    } = ExcelXlsxFactory;
    const worksheetExcelTables = worksheetDataTables.get(currentSheet2);
    const createWorksheetChildren = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._compose)(addSheetPr(), addSheetViews(rightToLeft, frozenColumnCount, frozenRowCount), addSheetFormatPr(rows), addColumns(columns), addSheetData(rows, currentSheet2 + 1), addMergeCells(mergedCells), addPageMargins(margins), addPageSetup(pageSetup), addHeaderFooter(headerFooterConfig), addDrawingRel(currentSheet2), addVmlDrawingRel(currentSheet2), addExcelTableRel(worksheetExcelTables));
    const {
      children
    } = createWorksheetChildren({
      children: [],
      rIdCounter: 0
    });
    return {
      name: "worksheet",
      properties: {
        prefixedAttributes: [{
          prefix: "xmlns:",
          map: {
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
          }
        }],
        rawMap: {
          xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
        }
      },
      children
    };
  }
};
var worksheet_default = worksheetFactory;

// enterprise-modules/excel-export/src/excelExport/excelXlsxFactory.ts
var _ExcelXlsxFactory = class _ExcelXlsxFactory {
  static createExcel(styles, worksheet, config) {
    this.addSheetName(worksheet);
    registerStyles(styles, this.sheetNames.length);
    const newConfig = Object.assign({}, config);
    if (config.exportAsExcelTable) {
      if (config.columnModel.isPivotActive()) {
        this.showExcelTableNonCompatibleFeaturesWarning("pivot mode");
        newConfig.exportAsExcelTable = false;
      }
      if (config.gos.get("masterDetail")) {
        this.showExcelTableNonCompatibleFeaturesWarning("master/detail");
        newConfig.exportAsExcelTable = false;
      }
    }
    this.processTableConfig(worksheet, newConfig);
    return this.createWorksheet(worksheet, newConfig);
  }
  static showExcelTableNonCompatibleFeaturesWarning(featureName) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`Excel table export does not work with ${featureName}. The exported Excel file will not contain any Excel tables.
Please turn off ${featureName} to enable Excel table exports.`);
  }
  static getTableNameFromIndex(idx) {
    return `table${idx + 1}`;
  }
  static getSanitizedTableName(name) {
    return name.replace(/^[^a-zA-Z_]+/, "_").replace(/\s/g, "_").replace(/[^a-zA-Z0-9_]/g, "_");
  }
  static addTableToSheet(sheetIndex, table) {
    if (this.worksheetDataTables.has(sheetIndex)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)("Unable to add data table to Excel sheet: A table already exists.");
      return;
    }
    this.worksheetDataTables.set(sheetIndex, table);
  }
  static processTableConfig(worksheet, config) {
    if (!config.exportAsExcelTable) {
      return;
    }
    const tableConfig = typeof config.exportAsExcelTable === "boolean" ? {} : config.exportAsExcelTable;
    const {
      name: nameFromConfig,
      showColumnStripes,
      showRowStripes,
      showFilterButton,
      highlightFirstColumn,
      highlightLastColumn
    } = tableConfig;
    const tableName = this.getSanitizedTableName(nameFromConfig || _ExcelXlsxFactory.defaultTableDisplayName);
    const sheetIndex = this.sheetNames.length - 1;
    const {
      table
    } = worksheet;
    const {
      rows,
      columns
    } = table;
    const headerRowCount = config.columnModel.getHeaderRowCount();
    const tableHeaderRowIndex = headerRowCount - 1;
    const tableRowCount = rows.length;
    const tableColCount = columns.length;
    const tableColumns = [];
    const showFilterButtons = [];
    for (let i = 0; i < tableColCount; i++) {
      const col = columns[i];
      tableColumns.push(col.displayName || "");
      showFilterButtons.push(showFilterButton === "match" || showFilterButton === void 0 ? col.filterAllowed ?? false : showFilterButton);
    }
    if (!tableColumns || !tableColumns.length || !tableRowCount || !tableName) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)("Unable to add data table to Excel sheet: Missing required parameters.");
      return;
    }
    this.addTableToSheet(sheetIndex, {
      name: this.getTableNameFromIndex(sheetIndex),
      displayName: tableName,
      columns: tableColumns,
      showFilterButtons,
      headerRowIndex: tableHeaderRowIndex,
      rowCount: tableRowCount - headerRowCount,
      showRowStripes: showRowStripes ?? true,
      showColumnStripes: showColumnStripes ?? false,
      highlightFirstColumn: highlightFirstColumn ?? false,
      highlightLastColumn: highlightLastColumn ?? false
    });
  }
  static addHeaderFooterImageToMap(image, position) {
    const sheetIndex = this.sheetNames.length - 1;
    const headerFooterImage = image;
    headerFooterImage.headerFooterPosition = position;
    this.buildImageMap({
      imageToAdd: headerFooterImage,
      idx: sheetIndex
    });
    let headerFooterImagesForSheet = this.worksheetHeaderFooterImages.get(sheetIndex);
    if (!headerFooterImagesForSheet) {
      headerFooterImagesForSheet = [];
      this.worksheetHeaderFooterImages.set(sheetIndex, headerFooterImagesForSheet);
    }
    if (!headerFooterImagesForSheet.find(img => img.id === image.id)) {
      headerFooterImagesForSheet.push(image);
    }
  }
  static addBodyImageToMap(image, rowIndex, col, columnsToExport, rowHeight) {
    const sheetIndex = this.sheetNames.length;
    const {
      row,
      column
    } = image.position || {};
    const calculatedImage = image;
    if (columnsToExport) {
      if (rowIndex != null && col != null && (!row || !column)) {
        if (!image.position) {
          image.position = {};
        }
        image.position = Object.assign({}, image.position, {
          row: rowIndex,
          column: columnsToExport.indexOf(col) + 1
        });
      }
      setExcelImageTotalWidth(calculatedImage, columnsToExport);
      setExcelImageTotalHeight(calculatedImage, rowHeight);
    }
    this.buildImageMap({
      imageToAdd: calculatedImage,
      idx: sheetIndex
    });
    let worksheetImageIdMap = this.worksheetImageIds.get(sheetIndex);
    if (!worksheetImageIdMap) {
      worksheetImageIdMap = /* @__PURE__ */new Map();
      this.worksheetImageIds.set(sheetIndex, worksheetImageIdMap);
    }
    const sheetImages = this.worksheetImages.get(sheetIndex);
    if (!sheetImages) {
      this.worksheetImages.set(sheetIndex, [calculatedImage]);
    } else {
      sheetImages.push(calculatedImage);
    }
    if (!worksheetImageIdMap.get(image.id)) {
      worksheetImageIdMap.set(image.id, {
        index: worksheetImageIdMap.size,
        type: image.imageType
      });
    }
  }
  static buildImageMap(params) {
    const {
      imageToAdd,
      idx
    } = params;
    const mappedImagesToSheet = this.images.get(imageToAdd.id);
    if (mappedImagesToSheet) {
      const currentSheetImages = mappedImagesToSheet.find(currentImage => currentImage.sheetId === idx);
      if (currentSheetImages) {
        currentSheetImages.image.push(imageToAdd);
      } else {
        mappedImagesToSheet.push({
          sheetId: idx,
          image: [imageToAdd]
        });
      }
    } else {
      this.images.set(imageToAdd.id, [{
        sheetId: idx,
        image: [imageToAdd]
      }]);
      this.workbookImageIds.set(imageToAdd.id, {
        type: imageToAdd.imageType,
        index: this.workbookImageIds.size
      });
    }
  }
  static addSheetName(worksheet) {
    const name = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(worksheet.name) || "";
    let append = "";
    while (this.sheetNames.indexOf(`${name}${append}`) !== -1) {
      if (append === "") {
        append = "_1";
      } else {
        const curr = parseInt(append.slice(1), 10);
        append = `_${curr + 1}`;
      }
    }
    worksheet.name = `${name}${append}`;
    this.sheetNames.push(worksheet.name);
  }
  static getStringPosition(str) {
    if (this.sharedStrings.has(str)) {
      return this.sharedStrings.get(str);
    }
    this.sharedStrings.set(str, this.sharedStrings.size);
    return this.sharedStrings.size - 1;
  }
  static resetFactory() {
    this.sharedStrings = /* @__PURE__ */new Map();
    this.images = /* @__PURE__ */new Map();
    this.worksheetImages = /* @__PURE__ */new Map();
    this.worksheetHeaderFooterImages = /* @__PURE__ */new Map();
    this.workbookImageIds = /* @__PURE__ */new Map();
    this.worksheetImageIds = /* @__PURE__ */new Map();
    this.worksheetDataTables = /* @__PURE__ */new Map();
    this.sheetNames = [];
    this.factoryMode = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ExcelFactoryMode.SINGLE_SHEET;
  }
  static createWorkbook(currentSheet2) {
    return createXmlPart(workbook_default.getTemplate(this.sheetNames, currentSheet2));
  }
  static createStylesheet(defaultFontSize) {
    return createXmlPart(stylesheet_default.getTemplate(defaultFontSize));
  }
  static createSharedStrings() {
    return createXmlPart(sharedStrings_default.getTemplate(this.sharedStrings));
  }
  static createCore(author) {
    return createXmlPart(core_default.getTemplate(author));
  }
  static createContentTypes(sheetLen) {
    return createXmlPart(contentTypes_default.getTemplate(sheetLen));
  }
  static createRels() {
    const rs = relationships_default.getTemplate([{
      Id: "rId1",
      Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      Target: "xl/workbook.xml"
    }, {
      Id: "rId2",
      Type: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
      Target: "docProps/core.xml"
    }]);
    return createXmlPart(rs);
  }
  static createTheme() {
    return createXmlPart(office_default.getTemplate());
  }
  static createTable(dataTable, index) {
    return createXmlPart(table_default.getTemplate(dataTable, index));
  }
  static createWorkbookRels(sheetLen) {
    const worksheets = new Array(sheetLen).fill(void 0).map((v, i) => ({
      Id: `rId${i + 1}`,
      Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
      Target: `worksheets/sheet${i + 1}.xml`
    }));
    const rs = relationships_default.getTemplate([...worksheets, {
      Id: `rId${sheetLen + 1}`,
      Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
      Target: "theme/theme1.xml"
    }, {
      Id: `rId${sheetLen + 2}`,
      Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
      Target: "styles.xml"
    }, {
      Id: `rId${sheetLen + 3}`,
      Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
      Target: "sharedStrings.xml"
    }]);
    return createXmlPart(rs);
  }
  static createDrawing(sheetIndex) {
    return createXmlPart(drawing_default.getTemplate({
      sheetIndex
    }));
  }
  static createDrawingRel(sheetIndex) {
    const worksheetImageIds = this.worksheetImageIds.get(sheetIndex) || [];
    const XMLArr = [];
    for (const [key, value] of worksheetImageIds) {
      const {
        index,
        type
      } = value;
      XMLArr.push({
        Id: `rId${index + 1}`,
        Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
        Target: `../media/image${this.workbookImageIds.get(key).index + 1}.${_normaliseImageExtension(type)}`
      });
    }
    return createXmlPart(relationships_default.getTemplate(XMLArr));
  }
  static createVmlDrawing(sheetIndex) {
    return createXmlPart(vmlDrawing_default.getTemplate({
      sheetIndex
    }), true);
  }
  static createVmlDrawingRel(sheetIndex) {
    const worksheetHeaderFooterImages = this.worksheetHeaderFooterImages.get(sheetIndex) || [];
    const XMLArr = [];
    for (let i = 0; i < worksheetHeaderFooterImages.length; i++) {
      const headerFooterImage = worksheetHeaderFooterImages[i];
      const workbookImage = this.workbookImageIds.get(headerFooterImage.id);
      if (!workbookImage) {
        continue;
      }
      const {
        index,
        type
      } = workbookImage;
      XMLArr.push({
        Id: `rId${i + 1}`,
        Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
        Target: `../media/image${index + 1}.${_normaliseImageExtension(type)}`
      });
    }
    return createXmlPart(relationships_default.getTemplate(XMLArr));
  }
  static createRelationships({
    drawingIndex,
    vmlDrawingIndex,
    tableIndex
  } = {}) {
    if (drawingIndex === void 0 && vmlDrawingIndex === void 0 && tableIndex === void 0) {
      return "";
    }
    const config = [];
    if (drawingIndex != null) {
      config.push({
        Id: `rId${config.length + 1}`,
        Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
        Target: `../drawings/drawing${drawingIndex + 1}.xml`
      });
    }
    if (vmlDrawingIndex != null) {
      config.push({
        Id: `rId${config.length + 1}`,
        Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
        Target: `../drawings/vmlDrawing${vmlDrawingIndex + 1}.vml`
      });
    }
    if (tableIndex != null) {
      config.push({
        Id: `rId${config.length + 1}`,
        Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/table",
        Target: `../tables/${this.getTableNameFromIndex(tableIndex)}.xml`
      });
    }
    const rs = relationships_default.getTemplate(config);
    return createXmlPart(rs);
  }
  static createWorksheet(worksheet, config) {
    return createXmlPart(worksheet_default.getTemplate({
      worksheet,
      currentSheet: this.sheetNames.length - 1,
      config
    }));
  }
};
_ExcelXlsxFactory.sharedStrings = /* @__PURE__ */new Map();
_ExcelXlsxFactory.sheetNames = [];
/** Maps images to sheet */
_ExcelXlsxFactory.images = /* @__PURE__ */new Map();
/** Maps sheets to images */
_ExcelXlsxFactory.worksheetImages = /* @__PURE__ */new Map();
/** Maps sheets to header/footer images */
_ExcelXlsxFactory.worksheetHeaderFooterImages = /* @__PURE__ */new Map();
/** Maps all workbook images to a global Id */
_ExcelXlsxFactory.workbookImageIds = /* @__PURE__ */new Map();
/** Maps all sheet images to unique Ids */
_ExcelXlsxFactory.worksheetImageIds = /* @__PURE__ */new Map();
/** Maps all sheet tables to unique Ids */
_ExcelXlsxFactory.worksheetDataTables = /* @__PURE__ */new Map();
/** Default name to be used for tables when no name is provided */
_ExcelXlsxFactory.defaultTableDisplayName = "AG-GRID-TABLE";
_ExcelXlsxFactory.factoryMode = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ExcelFactoryMode.SINGLE_SHEET;
var ExcelXlsxFactory = _ExcelXlsxFactory;

// enterprise-modules/excel-export/src/excelExport/excelSerializingSession.ts
var ExcelSerializingSession = class extends _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.BaseGridSerializingSession {
  constructor(config) {
    super(config);
    this.mixedStyles = {};
    this.mixedStyleCounter = 0;
    this.rows = [];
    this.frozenRowCount = 0;
    this.skipFrozenRows = false;
    this.frozenColumnCount = 0;
    this.skipFrozenColumns = false;
    this.config = Object.assign({}, config);
    this.stylesByIds = {};
    this.config.baseExcelStyles.forEach(style => {
      this.stylesByIds[style.id] = style;
    });
    this.excelStyles = [...this.config.baseExcelStyles, {
      id: "_quotePrefix",
      quotePrefix: 1
    }];
  }
  addCustomContent(customContent) {
    customContent.forEach(row => {
      const rowLen = this.rows.length + 1;
      let outlineLevel;
      if (!this.config.suppressRowOutline && row.outlineLevel != null) {
        outlineLevel = row.outlineLevel;
      }
      const rowObj = {
        height: getHeightFromProperty(rowLen, row.height || this.config.rowHeight),
        cells: (row.cells || []).map((cell, idx) => {
          const image = this.addImage(rowLen, this.columnsToExport[idx], cell.data?.value);
          let excelStyles = null;
          if (cell.styleId) {
            excelStyles = typeof cell.styleId === "string" ? [cell.styleId] : cell.styleId;
          }
          const excelStyleId = this.getStyleId(excelStyles);
          if (image) {
            return this.createCell(excelStyleId, this.getDataTypeForValue(image.value), image.value == null ? "" : image.value);
          }
          const value = cell.data?.value ?? "";
          const type = this.getDataTypeForValue(value);
          if (cell.mergeAcross) {
            return this.createMergedCell(excelStyleId, type, value, cell.mergeAcross);
          }
          return this.createCell(excelStyleId, type, value);
        }),
        outlineLevel
      };
      if (row.collapsed != null) {
        rowObj.collapsed = row.collapsed;
      }
      if (row.hidden != null) {
        rowObj.hidden = row.hidden;
      }
      this.rows.push(rowObj);
    });
  }
  onNewHeaderGroupingRow() {
    const currentCells = [];
    const {
      freezeRows,
      headerRowHeight
    } = this.config;
    this.rows.push({
      cells: currentCells,
      height: getHeightFromProperty(this.rows.length + 1, headerRowHeight)
    });
    if (freezeRows) {
      this.frozenRowCount++;
    }
    return {
      onColumn: (columnGroup, header, index, span, collapsibleRanges) => {
        const styleIds = this.config.styleLinker({
          rowType: _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.RowType.HEADER_GROUPING,
          rowIndex: 1,
          value: `grouping-${header}`,
          columnGroup
        });
        currentCells.push({
          ...this.createMergedCell(this.getStyleId(styleIds), this.getDataTypeForValue("string"), header, span),
          collapsibleRanges
        });
      }
    };
  }
  onNewHeaderRow() {
    const {
      freezeRows,
      headerRowHeight
    } = this.config;
    if (freezeRows) {
      this.frozenRowCount++;
    }
    return this.onNewRow(this.onNewHeaderColumn, headerRowHeight);
  }
  onNewBodyRow(node) {
    const {
      freezeRows,
      rowHeight
    } = this.config;
    if (!this.skipFrozenRows) {
      if (freezeRows === "headersAndPinnedRows" && node?.rowPinned === "top") {
        this.frozenRowCount++;
      } else if (typeof freezeRows === "function") {
        if (freezeRows({
          ...this.gos.getGridCommonParams(),
          node
        })) {
          this.frozenRowCount++;
        } else {
          this.skipFrozenRows = true;
        }
      } else {
        this.skipFrozenRows = true;
      }
    }
    const rowAccumulator = this.onNewRow(this.onNewBodyColumn, rowHeight);
    if (node) {
      this.addRowOutlineIfNecessary(node);
    }
    return rowAccumulator;
  }
  prepare(columnsToExport) {
    super.prepare(columnsToExport);
    this.columnsToExport = [...columnsToExport];
    this.cols = columnsToExport.map((col, i) => this.convertColumnToExcel(col, i));
  }
  parse() {
    const longestRow = this.rows.reduce((a, b) => Math.max(a, b.cells.length), 0);
    while (this.cols.length < longestRow) {
      this.cols.push(this.convertColumnToExcel(null, this.cols.length + 1));
    }
    const {
      config
    } = this;
    let name;
    if (config.sheetName != null) {
      const {
        sheetName
      } = config;
      const sheetNameValue = typeof sheetName === "function" ? sheetName(this.gos.getGridCommonParams()) : sheetName;
      name = String(sheetNameValue).substring(0, 31);
    } else {
      name = "ag-grid";
    }
    const data = {
      name,
      table: {
        columns: this.cols,
        rows: this.rows
      }
    };
    return this.createExcel(data);
  }
  addRowOutlineIfNecessary(node) {
    const {
      gos,
      suppressRowOutline,
      rowGroupExpandState = "expanded"
    } = this.config;
    const isGroupHideOpenParents = gos.get("groupHideOpenParents");
    if (isGroupHideOpenParents || suppressRowOutline || node.level == null) {
      return;
    }
    const padding = node.footer ? 1 : 0;
    const currentRow = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._last)(this.rows);
    const outlineLevel = Math.min(node.level + padding, 7);
    currentRow.outlineLevel = outlineLevel;
    if (rowGroupExpandState === "expanded") {
      return;
    }
    const collapseAll = rowGroupExpandState === "collapsed";
    if (node.isExpandable()) {
      const isExpanded = !collapseAll && node.expanded;
      currentRow.collapsed = !isExpanded;
    }
    currentRow.hidden =
    // always show the node if there is no parent to be expanded
    !!node.parent &&
    // or if it is a child of the root node
    node.parent.level !== -1 && (collapseAll || this.isAnyParentCollapsed(node.parent));
  }
  isAnyParentCollapsed(node) {
    while (node && node.level !== -1) {
      if (!node.expanded) {
        return true;
      }
      node = node.parent;
    }
    return false;
  }
  convertColumnToExcel(column, index) {
    const columnWidth = this.config.columnWidth;
    const headerValue = column ? this.extractHeaderValue(column) : void 0;
    const displayName = headerValue ?? "";
    const filterAllowed = column ? column.isFilterAllowed() : false;
    if (columnWidth) {
      if (typeof columnWidth === "number") {
        return {
          width: columnWidth,
          displayName,
          filterAllowed
        };
      }
      return {
        width: columnWidth({
          column,
          index
        }),
        displayName,
        filterAllowed
      };
    }
    if (column) {
      const smallestUsefulWidth = 75;
      return {
        width: Math.max(column.getActualWidth(), smallestUsefulWidth),
        displayName,
        filterAllowed
      };
    }
    return {
      displayName,
      filterAllowed
    };
  }
  onNewHeaderColumn(rowIndex, currentCells) {
    return column => {
      const nameForCol = this.extractHeaderValue(column);
      const styleIds = this.config.styleLinker({
        rowType: _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.RowType.HEADER,
        rowIndex,
        value: nameForCol,
        column
      });
      currentCells.push(this.createCell(this.getStyleId(styleIds), this.getDataTypeForValue("string"), nameForCol));
    };
  }
  onNewBodyColumn(rowIndex, currentCells) {
    let skipCols = 0;
    const {
      freezeColumns,
      rightToLeft
    } = this.config;
    return (column, index, node) => {
      if (skipCols > 0) {
        skipCols -= 1;
        return;
      }
      if (!this.skipFrozenColumns) {
        const pinned = column.getPinned();
        const isPinnedLeft = pinned === true || pinned === "left";
        if (freezeColumns === "pinned" && pinned && isPinnedLeft !== rightToLeft) {
          this.frozenColumnCount++;
        } else if (typeof freezeColumns === "function" && freezeColumns({
          ...this.gos.getGridCommonParams(),
          column
        })) {
          this.frozenColumnCount++;
        } else {
          this.skipFrozenColumns = true;
        }
      }
      const {
        value: valueForCell,
        valueFormatted
      } = this.extractRowCellValue(column, index, rowIndex, "excel", node);
      const styleIds = this.config.styleLinker({
        rowType: _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.RowType.BODY,
        rowIndex,
        value: valueForCell,
        column,
        node
      });
      const excelStyleId = this.getStyleId(styleIds);
      const colSpan = column.getColSpan(node);
      const addedImage = this.addImage(rowIndex, column, valueForCell);
      if (addedImage) {
        currentCells.push(this.createCell(excelStyleId, this.getDataTypeForValue(addedImage.value), addedImage.value == null ? "" : addedImage.value));
      } else if (colSpan > 1) {
        skipCols = colSpan - 1;
        currentCells.push(this.createMergedCell(excelStyleId, this.getDataTypeForValue(valueForCell), valueForCell, colSpan - 1));
      } else {
        currentCells.push(this.createCell(excelStyleId, this.getDataTypeForValue(valueForCell), valueForCell, valueFormatted));
      }
    };
  }
  onNewRow(onNewColumnAccumulator, height) {
    const currentCells = [];
    this.rows.push({
      cells: currentCells,
      height: getHeightFromProperty(this.rows.length + 1, height)
    });
    return {
      onColumn: onNewColumnAccumulator.bind(this, this.rows.length, currentCells)()
    };
  }
  createExcel(data) {
    const {
      excelStyles,
      config
    } = this;
    if (this.frozenColumnCount) {
      config.frozenColumnCount = this.frozenColumnCount;
    }
    if (this.frozenRowCount) {
      config.frozenRowCount = this.frozenRowCount;
    }
    return ExcelXlsxFactory.createExcel(excelStyles, data, config);
  }
  getDataTypeForValue(valueForCell) {
    if (valueForCell === void 0) {
      return "empty";
    }
    return this.isNumerical(valueForCell) ? "n" : "s";
  }
  getTypeFromStyle(style, value) {
    if (this.isFormula(value)) {
      return "f";
    }
    if (style && style.dataType) {
      switch (style.dataType.toLocaleLowerCase()) {
        case "formula":
          return "f";
        case "string":
          return "s";
        case "number":
          return "n";
        case "datetime":
          return "d";
        case "error":
          return "e";
        case "boolean":
          return "b";
        default:
          (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`Unrecognized data type for excel export [${style.id}.dataType=${style.dataType}]`);
      }
    }
    return null;
  }
  addImage(rowIndex, column, value) {
    if (!this.config.addImageToCell) {
      return;
    }
    const addedImage = this.config.addImageToCell(rowIndex, column, value);
    if (!addedImage) {
      return;
    }
    ExcelXlsxFactory.addBodyImageToMap(addedImage.image, rowIndex, column, this.columnsToExport, this.config.rowHeight);
    return addedImage;
  }
  createCell(styleId, type, value, valueFormatted) {
    const actualStyle = this.getStyleById(styleId);
    if (!actualStyle?.dataType && type === "s" && valueFormatted) {
      value = valueFormatted;
    }
    const processedType = this.getTypeFromStyle(actualStyle, value) || type;
    const {
      value: processedValue,
      escaped
    } = this.getCellValue(processedType, value);
    const styles = [];
    if (actualStyle) {
      styles.push(styleId);
    }
    if (escaped) {
      styles.push("_quotePrefix");
    }
    styleId = this.getStyleId(styles) || void 0;
    return {
      styleId,
      data: {
        type: processedType,
        value: processedValue
      }
    };
  }
  createMergedCell(styleId, type, value, numOfCells) {
    const valueToUse = value == null ? "" : value;
    return {
      styleId: this.getStyleById(styleId) ? styleId : void 0,
      data: {
        type,
        value: type === "s" ? ExcelXlsxFactory.getStringPosition(valueToUse).toString() : value
      },
      mergeAcross: numOfCells
    };
  }
  getCellValue(type, value) {
    let escaped = false;
    if (value == null || type === "s" && value === "") {
      return {
        value: "",
        escaped: false
      };
    }
    if (type === "s") {
      if (value && value[0] === "'") {
        escaped = true;
        value = value.slice(1);
      }
      value = ExcelXlsxFactory.getStringPosition(value).toString();
    } else if (type === "f") {
      value = value.slice(1);
    } else if (type === "n") {
      const numberValue = Number(value);
      if (isNaN(numberValue)) {
        value = "";
      } else if (value !== "") {
        value = numberValue.toString();
      }
    }
    return {
      value,
      escaped
    };
  }
  getStyleId(styleIds) {
    if (!styleIds || !styleIds.length) {
      return null;
    }
    if (styleIds.length === 1) {
      return styleIds[0];
    }
    const key = styleIds.join("-");
    if (!this.mixedStyles[key]) {
      this.addNewMixedStyle(styleIds);
    }
    return this.mixedStyles[key].excelID;
  }
  deepCloneObject(object) {
    return JSON.parse(JSON.stringify(object));
  }
  addNewMixedStyle(styleIds) {
    this.mixedStyleCounter += 1;
    const excelId = `mixedStyle${this.mixedStyleCounter}`;
    const resultantStyle = {};
    for (const styleId of styleIds) {
      for (const excelStyle of this.excelStyles) {
        if (excelStyle.id === styleId) {
          (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._mergeDeep)(resultantStyle, this.deepCloneObject(excelStyle));
        }
      }
    }
    resultantStyle.id = excelId;
    resultantStyle.name = excelId;
    const key = styleIds.join("-");
    this.mixedStyles[key] = {
      excelID: excelId,
      key,
      result: resultantStyle
    };
    this.excelStyles.push(resultantStyle);
    this.stylesByIds[excelId] = resultantStyle;
  }
  isFormula(value) {
    if (value == null) {
      return false;
    }
    return this.config.autoConvertFormulas && value.toString().startsWith("=");
  }
  isNumerical(value) {
    if (typeof value === "bigint") {
      return true;
    }
    return isFinite(value) && value !== "" && !isNaN(parseFloat(value));
  }
  getStyleById(styleId) {
    if (styleId == null) {
      return null;
    }
    return this.stylesByIds[styleId] || null;
  }
};

// enterprise-modules/excel-export/src/excelExport/excelCreator.ts
var createExcelXMLCoreFolderStructure = () => {
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFolders(["_rels/", "docProps/", "xl/", "xl/theme/", "xl/_rels/", "xl/worksheets/"]);
  const {
    images
  } = ExcelXlsxFactory;
  if (!images.size) {
    return;
  }
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFolders(["xl/worksheets/_rels", "xl/drawings/", "xl/drawings/_rels", "xl/media/"]);
  let imgCounter = 0;
  images.forEach(value => {
    const firstImage = value[0].image[0];
    const {
      base64,
      imageType
    } = firstImage;
    _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(`xl/media/image${++imgCounter}.${_normaliseImageExtension(imageType)}`, base64, true);
  });
};
var createExcelXmlWorksheets = data => {
  let imageRelationCounter = 0;
  let headerFooterImageCounter = 0;
  let tableRelationCounter = 0;
  const {
    images,
    worksheetDataTables,
    worksheetImages,
    worksheetHeaderFooterImages
  } = ExcelXlsxFactory;
  for (let i = 0; i < data.length; i++) {
    const value = data[i];
    _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(`xl/worksheets/sheet${i + 1}.xml`, value, false);
    const hasImages = images.size > 0 && worksheetImages.has(i);
    const hasTables = worksheetDataTables.size > 0 && worksheetDataTables.has(i);
    const hasHeaderFooterImages = images.size && worksheetHeaderFooterImages.has(i);
    if (!hasImages && !hasTables && !hasHeaderFooterImages) {
      continue;
    }
    let tableIndex;
    let drawingIndex;
    let vmlDrawingIndex;
    if (hasImages) {
      createExcelXmlDrawings(i, imageRelationCounter);
      drawingIndex = imageRelationCounter;
      imageRelationCounter++;
    }
    if (hasHeaderFooterImages) {
      createExcelVmlDrawings(i, headerFooterImageCounter);
      vmlDrawingIndex = headerFooterImageCounter;
      headerFooterImageCounter++;
    }
    if (hasTables) {
      tableIndex = tableRelationCounter++;
    }
    const worksheetRelFile = `xl/worksheets/_rels/sheet${i + 1}.xml.rels`;
    _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(worksheetRelFile, ExcelXlsxFactory.createRelationships({
      tableIndex,
      drawingIndex,
      vmlDrawingIndex
    }));
  }
};
var createExcelXmlDrawings = (sheetIndex, drawingIndex) => {
  const drawingFolder = "xl/drawings";
  const drawingFileName = `${drawingFolder}/drawing${drawingIndex + 1}.xml`;
  const relFileName = `${drawingFolder}/_rels/drawing${drawingIndex + 1}.xml.rels`;
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(relFileName, ExcelXlsxFactory.createDrawingRel(sheetIndex));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(drawingFileName, ExcelXlsxFactory.createDrawing(sheetIndex));
};
var createExcelVmlDrawings = (sheetIndex, drawingIndex) => {
  const drawingFolder = "xl/drawings";
  const drawingFileName = `${drawingFolder}/vmlDrawing${drawingIndex + 1}.vml`;
  const relFileName = `${drawingFolder}/_rels/vmlDrawing${drawingIndex + 1}.vml.rels`;
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(drawingFileName, ExcelXlsxFactory.createVmlDrawing(sheetIndex));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(relFileName, ExcelXlsxFactory.createVmlDrawingRel(sheetIndex));
};
var createExcelXmlTables = () => {
  const {
    worksheetDataTables
  } = ExcelXlsxFactory;
  const tablesDataByWorksheet = worksheetDataTables;
  const worksheetKeys = Array.from(tablesDataByWorksheet.keys());
  for (let i = 0; i < worksheetKeys.length; i++) {
    const sheetIndex = worksheetKeys[i];
    const dataTable = tablesDataByWorksheet.get(sheetIndex);
    if (!dataTable) {
      continue;
    }
    _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile(`xl/tables/${dataTable.name}.xml`, ExcelXlsxFactory.createTable(dataTable, i));
  }
};
var createExcelXmlCoreSheets = (fontSize, author, sheetLen, activeTab) => {
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("xl/workbook.xml", ExcelXlsxFactory.createWorkbook(activeTab));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("xl/styles.xml", ExcelXlsxFactory.createStylesheet(fontSize));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("xl/sharedStrings.xml", ExcelXlsxFactory.createSharedStrings());
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("xl/theme/theme1.xml", ExcelXlsxFactory.createTheme());
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("xl/_rels/workbook.xml.rels", ExcelXlsxFactory.createWorkbookRels(sheetLen));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("docProps/core.xml", ExcelXlsxFactory.createCore(author));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("[Content_Types].xml", ExcelXlsxFactory.createContentTypes(sheetLen));
  _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.addFile("_rels/.rels", ExcelXlsxFactory.createRels());
};
var createExcelFileForExcel = (data, options = {}) => {
  if (!data || data.length === 0) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)("Invalid params supplied to createExcelFileForExcel() - `ExcelExportParams.data` is empty.");
    ExcelXlsxFactory.resetFactory();
    return false;
  }
  const {
    fontSize = 11,
    author = "AG Grid",
    activeTab = 0
  } = options;
  const len = data.length;
  const activeTabWithinBounds = Math.max(Math.min(activeTab, len - 1), 0);
  createExcelXMLCoreFolderStructure();
  createExcelXmlTables();
  createExcelXmlWorksheets(data);
  createExcelXmlCoreSheets(fontSize, author, len, activeTabWithinBounds);
  ExcelXlsxFactory.resetFactory();
  return true;
};
var getMultipleSheetsAsExcelCompressed = params => {
  const {
    data,
    fontSize,
    author,
    activeSheetIndex
  } = params;
  const mimeType = params.mimeType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (!createExcelFileForExcel(data, {
    author,
    fontSize,
    activeTab: activeSheetIndex
  })) {
    return Promise.resolve(void 0);
  }
  return _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.getZipFile(mimeType);
};
var getMultipleSheetsAsExcel = params => {
  const {
    data,
    fontSize,
    author,
    activeSheetIndex
  } = params;
  const mimeType = params.mimeType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (!createExcelFileForExcel(data, {
    author,
    fontSize,
    activeTab: activeSheetIndex
  })) {
    return;
  }
  return _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.ZipContainer.getUncompressedZipFile(mimeType);
};
var exportMultipleSheetsAsExcel = params => {
  const {
    fileName = "export.xlsx"
  } = params;
  getMultipleSheetsAsExcelCompressed(params).then(contents => {
    if (contents) {
      const downloadFileName = typeof fileName === "function" ? fileName() : fileName;
      _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.Downloader.download(downloadFileName, contents);
    }
  });
};
var ExcelCreator = class extends _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.BaseCreator {
  constructor() {
    super(...arguments);
    this.beanName = "excelCreator";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.funcColsService = beans.funcColsService;
    this.valueService = beans.valueService;
    this.stylingService = beans.stylingService;
    this.gridSerializer = beans.gridSerializer;
    this.gos = beans.gos;
  }
  postConstruct() {
    this.setBeans({
      gridSerializer: this.gridSerializer,
      gos: this.gos
    });
  }
  getMergedParams(params) {
    const baseParams = this.gos.get("defaultExcelExportParams");
    return Object.assign({}, baseParams, params);
  }
  export(userParams) {
    if (this.isExportSuppressed()) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`Export cancelled. Export is not allowed as per your configuration.`);
      return;
    }
    const mergedParams = this.getMergedParams(userParams);
    const data = this.getData(mergedParams);
    const exportParams = {
      data: [data],
      fontSize: mergedParams.fontSize,
      author: mergedParams.author,
      mimeType: mergedParams.mimeType
    };
    this.packageCompressedFile(exportParams).then(packageFile => {
      if (packageFile) {
        const {
          fileName
        } = mergedParams;
        const providedFileName = typeof fileName === "function" ? fileName(this.gos.getGridCommonParams()) : fileName;
        _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.Downloader.download(this.getFileName(providedFileName), packageFile);
      }
    });
  }
  exportDataAsExcel(params) {
    this.export(params);
  }
  getDataAsExcel(params) {
    const mergedParams = this.getMergedParams(params);
    const data = this.getData(mergedParams);
    const exportParams = {
      data: [data],
      fontSize: mergedParams.fontSize,
      author: mergedParams.author,
      mimeType: mergedParams.mimeType
    };
    return this.packageFile(exportParams);
  }
  setFactoryMode(factoryMode) {
    ExcelXlsxFactory.factoryMode = factoryMode;
  }
  getFactoryMode() {
    return ExcelXlsxFactory.factoryMode;
  }
  getSheetDataForExcel(params) {
    const mergedParams = this.getMergedParams(params);
    return this.getData(mergedParams);
  }
  getMultipleSheetsAsExcel(params) {
    return getMultipleSheetsAsExcel(params);
  }
  exportMultipleSheetsAsExcel(params) {
    exportMultipleSheetsAsExcel(params);
  }
  getDefaultFileExtension() {
    return "xlsx";
  }
  createSerializingSession(params) {
    const {
      columnModel,
      columnNameService,
      funcColsService,
      valueService,
      gos
    } = this;
    const config = {
      ...params,
      columnModel,
      columnNameService,
      funcColsService,
      valueService,
      gos,
      suppressRowOutline: params.suppressRowOutline || params.skipRowGroups,
      headerRowHeight: params.headerRowHeight || params.rowHeight,
      baseExcelStyles: this.gos.get("excelStyles") || [],
      rightToLeft: params.rightToLeft ?? this.gos.get("enableRtl"),
      styleLinker: this.styleLinker.bind(this)
    };
    return new ExcelSerializingSession(config);
  }
  styleLinker(params) {
    const {
      rowType,
      rowIndex,
      value,
      column,
      columnGroup,
      node
    } = params;
    const isHeader = rowType === _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.RowType.HEADER;
    const isGroupHeader = rowType === _ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__.RowType.HEADER_GROUPING;
    const col = isHeader ? column : columnGroup;
    let headerClasses = [];
    if (isHeader || isGroupHeader) {
      headerClasses.push("header");
      if (isGroupHeader) {
        headerClasses.push("headerGroup");
      }
      if (col) {
        headerClasses = headerClasses.concat((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._getHeaderClassesFromColDef)(col.getDefinition(), this.gos, column || null, columnGroup || null));
      }
      return headerClasses;
    }
    const styles = this.gos.get("excelStyles");
    const applicableStyles = ["cell"];
    if (!styles || !styles.length) {
      return applicableStyles;
    }
    const styleIds = styles.map(it => {
      return it.id;
    });
    const colDef = column.getDefinition();
    this.stylingService.processAllCellClasses(colDef, this.gos.addGridCommonParams({
      value,
      data: node.data,
      node,
      colDef,
      column,
      rowIndex
    }), className => {
      if (styleIds.indexOf(className) > -1) {
        applicableStyles.push(className);
      }
    });
    return applicableStyles.sort((left, right) => {
      return styleIds.indexOf(left) < styleIds.indexOf(right) ? -1 : 1;
    });
  }
  isExportSuppressed() {
    return this.gos.get("suppressExcelExport");
  }
  packageCompressedFile(params) {
    return getMultipleSheetsAsExcelCompressed(params);
  }
  packageFile(params) {
    return getMultipleSheetsAsExcel(params);
  }
};

// enterprise-modules/excel-export/src/excelExport/excelExportApi.ts

function assertNotExcelMultiSheet(beans) {
  if (beans.excelCreator?.getFactoryMode() === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ExcelFactoryMode.MULTI_SHEET) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)("The Excel Exporter is currently on Multi Sheet mode. End that operation by calling 'api.getMultipleSheetAsExcel()' or 'api.exportMultipleSheetsAsExcel()'");
    return false;
  }
  return true;
}
function getDataAsExcel(beans, params) {
  if (assertNotExcelMultiSheet(beans)) {
    return beans.excelCreator?.getDataAsExcel(params);
  }
  return void 0;
}
function exportDataAsExcel(beans, params) {
  if (assertNotExcelMultiSheet(beans)) {
    beans.excelCreator?.exportDataAsExcel(params);
  }
}
function getSheetDataForExcel(beans, params) {
  beans.excelCreator?.setFactoryMode(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ExcelFactoryMode.MULTI_SHEET);
  return beans.excelCreator?.getSheetDataForExcel(params);
}
function getMultipleSheetsAsExcel2(beans, params) {
  return beans.excelCreator?.getMultipleSheetsAsExcel(params);
}
function exportMultipleSheetsAsExcel2(beans, params) {
  beans.excelCreator?.exportMultipleSheetsAsExcel(params);
}

// enterprise-modules/excel-export/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/excel-export/src/excelExportModule.ts
var ExcelExportCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ExcelExportModule}-core`,
  beans: [ExcelCreator],
  dependantModules: [_ag_grid_community_csv_export__WEBPACK_IMPORTED_MODULE_0__._CsvExportCoreModule, _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_2__.EnterpriseCoreModule]
});
var ExcelExportApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ExcelExportModule}-api`,
  apiFunctions: {
    getDataAsExcel,
    exportDataAsExcel,
    getSheetDataForExcel,
    getMultipleSheetsAsExcel: getMultipleSheetsAsExcel2,
    exportMultipleSheetsAsExcel: exportMultipleSheetsAsExcel2
  },
  dependantModules: [ExcelExportCoreModule]
});
var ExcelExportModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ExcelExportModule,
  dependantModules: [ExcelExportCoreModule, ExcelExportApiModule]
});


/***/ }),

/***/ 54887:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/filter-tool-panel/dist/package/main.esm.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersToolPanelModule: () => (/* binding */ FiltersToolPanelModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
/* harmony import */ var _ag_grid_enterprise_side_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-enterprise/side-bar */ 32466);
// enterprise-modules/filter-tool-panel/src/filtersToolPanelModule.ts




// enterprise-modules/filter-tool-panel/src/filterToolPanel/filtersToolPanel.ts


// enterprise-modules/filter-tool-panel/src/filterToolPanel/agFiltersToolPanelHeader.ts

var AgFiltersToolPanelHeader = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.eExpand = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eFilterTextField = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
  }
  postConstruct() {
    this.setTemplate(/* html */
    `<div class="ag-filter-toolpanel-search" role="presentation">
                <div data-ref="eExpand" class="ag-filter-toolpanel-expand"></div>
                <ag-input-text-field data-ref="eFilterTextField" class="ag-filter-toolpanel-search-input"></ag-input-text-field>
            </div>`, [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgInputTextFieldSelector]);
    const translate = this.localeService.getLocaleTextFunc();
    this.eFilterTextField.setAutoComplete(false).setInputAriaLabel(translate("ariaFilterColumnsInput", "Filter Columns Input")).onValueChange(this.onSearchTextChanged.bind(this));
    this.createExpandIcons();
    this.setExpandState(0 /* EXPANDED */);
    this.addManagedElementListeners(this.eExpand, {
      click: this.onExpandClicked.bind(this)
    });
    this.addManagedEventListeners({
      newColumnsLoaded: this.showOrHideOptions.bind(this)
    });
  }
  init(params) {
    this.params = params;
    if (this.columnModel.isReady()) {
      this.showOrHideOptions();
    }
  }
  createExpandIcons() {
    this.eExpand.appendChild(this.eExpandChecked = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectOpen", this.gos));
    this.eExpand.appendChild(this.eExpandUnchecked = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectClosed", this.gos));
    this.eExpand.appendChild(this.eExpandIndeterminate = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectIndeterminate", this.gos));
  }
  // we only show expand / collapse if we are showing filters
  showOrHideOptions() {
    const showFilterSearch = !this.params.suppressFilterSearch;
    const showExpand = !this.params.suppressExpandAll;
    const translate = this.localeService.getLocaleTextFunc();
    this.eFilterTextField.setInputPlaceholder(translate("searchOoo", "Search..."));
    const isFilterGroupPresent = col => col.getOriginalParent() && col.isFilterAllowed();
    const filterGroupsPresent = this.columnModel.getCols().some(isFilterGroupPresent);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterTextField.getGui(), showFilterSearch);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpand, showExpand && filterGroupsPresent);
  }
  onSearchTextChanged() {
    if (!this.onSearchTextChangedDebounced) {
      this.onSearchTextChangedDebounced = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._debounce)(() => {
        this.dispatchLocalEvent({
          type: "searchChanged",
          searchText: this.eFilterTextField.getValue()
        });
      }, 300);
    }
    this.onSearchTextChangedDebounced();
  }
  onExpandClicked() {
    const event = this.currentExpandState === 0 /* EXPANDED */ ? {
      type: "collapseAll"
    } : {
      type: "expandAll"
    };
    this.dispatchLocalEvent(event);
  }
  setExpandState(state) {
    this.currentExpandState = state;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandChecked, this.currentExpandState === 0 /* EXPANDED */);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandUnchecked, this.currentExpandState === 1 /* COLLAPSED */);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandIndeterminate, this.currentExpandState === 2 /* INDETERMINATE */);
  }
};
var AgFiltersToolPanelHeaderSelector = {
  selector: "AG-FILTERS-TOOL-PANEL-HEADER",
  component: AgFiltersToolPanelHeader
};

// enterprise-modules/filter-tool-panel/src/filterToolPanel/agFiltersToolPanelList.ts


// enterprise-modules/filter-tool-panel/src/filterToolPanel/toolPanelFilterComp.ts

var ToolPanelFilterComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(hideHeader, expandedCallback) {
    super(/* html */
    `
            <div class="ag-filter-toolpanel-instance">
                <div class="ag-filter-toolpanel-header ag-filter-toolpanel-instance-header" data-ref="eFilterToolPanelHeader" role="button" aria-expanded="false">
                    <div data-ref="eExpand" class="ag-filter-toolpanel-expand"></div>
                    <span data-ref="eFilterName" class="ag-header-cell-text"></span>
                    <span data-ref="eFilterIcon" class="ag-header-icon ag-filter-icon ag-filter-toolpanel-instance-header-icon" aria-hidden="true"></span>
                </div>
                <div class="ag-filter-toolpanel-instance-body ag-filter" data-ref="agFilterToolPanelBody"></div>
            </div>`);
    this.expandedCallback = expandedCallback;
    this.eFilterToolPanelHeader = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eFilterName = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.agFilterToolPanelBody = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eFilterIcon = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eExpand = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.expanded = false;
    this.hideHeader = hideHeader;
  }
  wireBeans(beans) {
    this.filterManager = beans.filterManager;
    this.columnNameService = beans.columnNameService;
  }
  postConstruct() {
    this.eExpandChecked = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectOpen", this.gos);
    this.eExpandUnchecked = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("columnSelectClosed", this.gos);
    this.eExpand.appendChild(this.eExpandChecked);
    this.eExpand.appendChild(this.eExpandUnchecked);
  }
  setColumn(column) {
    this.column = column;
    this.eFilterName.innerText = this.columnNameService.getDisplayNameForColumn(this.column, "filterToolPanel", false) || "";
    this.addManagedListeners(this.eFilterToolPanelHeader, {
      click: this.toggleExpanded.bind(this),
      keydown: this.onKeyDown.bind(this)
    });
    this.addManagedEventListeners({
      filterOpened: this.onFilterOpened.bind(this)
    });
    this.addInIcon("filter", this.eFilterIcon, this.column);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterIcon, this.isFilterActive(), {
      skipAriaHidden: true
    });
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandChecked, false);
    if (this.hideHeader) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterToolPanelHeader, false);
      this.eFilterToolPanelHeader.removeAttribute("tabindex");
    } else {
      this.eFilterToolPanelHeader.setAttribute("tabindex", "0");
    }
    this.addManagedListeners(this.column, {
      filterChanged: this.onFilterChanged.bind(this)
    });
  }
  onKeyDown(e) {
    const {
      key
    } = e;
    const {
      ENTER,
      SPACE,
      LEFT,
      RIGHT
    } = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode;
    if (key !== ENTER && key !== SPACE && key !== LEFT && key !== RIGHT) {
      return;
    }
    e.preventDefault();
    if (key === ENTER || key === SPACE) {
      this.toggleExpanded();
    } else if (key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.LEFT) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  getColumn() {
    return this.column;
  }
  getColumnFilterName() {
    return this.columnNameService.getDisplayNameForColumn(this.column, "filterToolPanel", false);
  }
  addCssClassToTitleBar(cssClass) {
    this.eFilterToolPanelHeader.classList.add(cssClass);
  }
  addInIcon(iconName, eParent, column) {
    if (eParent == null) {
      return;
    }
    const eIcon = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)(iconName, this.gos, column);
    eParent.appendChild(eIcon);
  }
  isFilterActive() {
    return !!this.filterManager?.isFilterActive(this.column);
  }
  onFilterChanged() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterIcon, this.isFilterActive(), {
      skipAriaHidden: true
    });
    this.dispatchLocalEvent({
      type: "filterChanged"
    });
  }
  toggleExpanded() {
    this.expanded ? this.collapse() : this.expand();
  }
  expand() {
    if (this.expanded) {
      return;
    }
    this.expanded = true;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaExpanded)(this.eFilterToolPanelHeader, true);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandChecked, true);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandUnchecked, false);
    this.addFilterElement();
    this.expandedCallback();
  }
  addFilterElement(suppressFocus) {
    const filterPanelWrapper = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._loadTemplate)(/* html */
    `<div class="ag-filter-toolpanel-instance-filter"></div>`);
    const comp = this.createManagedBean(new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.FilterWrapperComp(this.column, "TOOLBAR"));
    this.filterWrapperComp = comp;
    if (!comp.hasFilter()) {
      return;
    }
    comp.getFilter()?.then(filter => {
      this.underlyingFilter = filter;
      if (!filter) {
        return;
      }
      filterPanelWrapper.appendChild(comp.getGui());
      this.agFilterToolPanelBody.appendChild(filterPanelWrapper);
      comp.afterGuiAttached({
        container: "toolPanel",
        suppressFocus
      });
    });
  }
  collapse() {
    if (!this.expanded) {
      return;
    }
    this.expanded = false;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaExpanded)(this.eFilterToolPanelHeader, false);
    this.removeFilterElement();
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandChecked, false);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eExpandUnchecked, true);
    this.filterWrapperComp?.afterGuiDetached();
    this.destroyBean(this.filterWrapperComp);
    this.expandedCallback();
  }
  removeFilterElement() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.agFilterToolPanelBody);
  }
  isExpanded() {
    return this.expanded;
  }
  refreshFilter(isDisplayed) {
    if (!this.expanded) {
      return;
    }
    const filter = this.underlyingFilter;
    if (!filter) {
      return;
    }
    if (isDisplayed) {
      if (typeof filter.refreshVirtualList === "function") {
        filter.refreshVirtualList();
      }
    } else {
      filter.afterGuiDetached?.();
    }
  }
  onFilterOpened(event) {
    if (event.source !== "COLUMN_MENU") {
      return;
    }
    if (event.column !== this.column) {
      return;
    }
    if (!this.expanded) {
      return;
    }
    this.collapse();
  }
};

// enterprise-modules/filter-tool-panel/src/filterToolPanel/toolPanelFilterGroupComp.ts


var ToolPanelFilterGroupComp = class _ToolPanelFilterGroupComp extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(columnGroup, childFilterComps, expandedCallback, depth, showingColumn) {
    super();
    this.filterGroupComp = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.columnGroup = columnGroup;
    this.childFilterComps = childFilterComps;
    this.depth = depth;
    this.expandedCallback = expandedCallback;
    this.showingColumn = showingColumn;
  }
  wireBeans(beans) {
    this.columnNameService = beans.columnNameService;
  }
  postConstruct() {
    const groupParams = {
      cssIdentifier: "filter-toolpanel",
      direction: "vertical"
    };
    this.setTemplate(/* html */
    `<div class="ag-filter-toolpanel-group-wrapper">
            <ag-group-component data-ref="filterGroupComp"></ag-group-component>
        </div>`, [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.AgGroupComponentSelector], {
      filterGroupComp: groupParams
    });
    this.setGroupTitle();
    this.filterGroupComp.setAlignItems("stretch");
    this.filterGroupComp.addCssClass(`ag-filter-toolpanel-group-level-${this.depth}`);
    this.filterGroupComp.getGui().style.setProperty("--ag-indentation-level", String(this.depth));
    this.filterGroupComp.addCssClassToTitleBar(`ag-filter-toolpanel-group-level-${this.depth}-header`);
    this.childFilterComps.forEach(filterComp => {
      this.filterGroupComp.addItem(filterComp);
      filterComp.addCssClassToTitleBar(`ag-filter-toolpanel-group-level-${this.depth + 1}-header`);
      filterComp.getGui().style.setProperty("--ag-indentation-level", String(this.depth + 1));
    });
    this.refreshFilterClass();
    this.addExpandCollapseListeners();
    this.addFilterChangedListeners();
    this.setupTooltip();
    this.addInIcon("filter");
  }
  setupTooltip() {
    if (!this.showingColumn) {
      return;
    }
    const isTooltipWhenTruncated = this.gos.get("tooltipShowMode") === "whenTruncated";
    let shouldDisplayTooltip;
    if (isTooltipWhenTruncated) {
      shouldDisplayTooltip = () => {
        const eGui = this.filterGroupComp.getGui();
        const eTitle = eGui.querySelector(".ag-group-title");
        if (!eTitle) {
          return true;
        }
        return eTitle.scrollWidth > eTitle.clientWidth;
      };
    }
    const refresh = () => {
      const newTooltipText = this.columnGroup.getColDef().headerTooltip;
      this.setTooltip({
        newTooltipText,
        location: "filterToolPanelColumnGroup",
        shouldDisplayTooltip
      });
    };
    refresh();
    this.addManagedEventListeners({
      newColumnsLoaded: refresh
    });
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "filterToolPanelColumnGroup";
    return res;
  }
  addCssClassToTitleBar(cssClass) {
    this.filterGroupComp.addCssClassToTitleBar(cssClass);
  }
  refreshFilters(isDisplayed) {
    this.childFilterComps.forEach(filterComp => {
      if (filterComp instanceof _ToolPanelFilterGroupComp) {
        filterComp.refreshFilters(isDisplayed);
      } else {
        filterComp.refreshFilter(isDisplayed);
      }
    });
  }
  isColumnGroup() {
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(this.columnGroup);
  }
  isExpanded() {
    return this.filterGroupComp.isExpanded();
  }
  getChildren() {
    return this.childFilterComps;
  }
  getFilterGroupName() {
    return this.filterGroupName ? this.filterGroupName : "";
  }
  getFilterGroupId() {
    return this.columnGroup.getId();
  }
  hideGroupItem(hide, index) {
    this.filterGroupComp.hideItem(hide, index);
  }
  hideGroup(hide) {
    this.setDisplayed(!hide);
  }
  addInIcon(iconName) {
    const eIcon = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)(iconName, this.gos);
    if (eIcon) {
      eIcon.classList.add("ag-filter-toolpanel-group-instance-header-icon");
    }
    this.filterGroupComp.addTitleBarWidget(eIcon);
  }
  forEachToolPanelFilterChild(action) {
    this.childFilterComps.forEach(filterComp => {
      if (filterComp instanceof ToolPanelFilterComp) {
        action(filterComp);
      }
    });
  }
  addExpandCollapseListeners() {
    const expandListener = this.isColumnGroup() ? () => this.expandedCallback() : () => this.forEachToolPanelFilterChild(filterComp => filterComp.expand());
    const collapseListener = this.isColumnGroup() ? () => this.expandedCallback() : () => this.forEachToolPanelFilterChild(filterComp => filterComp.collapse());
    this.addManagedListeners(this.filterGroupComp, {
      expanded: expandListener,
      collapsed: collapseListener
    });
  }
  getColumns() {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(this.columnGroup)) {
      return this.columnGroup.getLeafColumns();
    }
    return [this.columnGroup];
  }
  addFilterChangedListeners() {
    this.getColumns().forEach(column => {
      this.addManagedListeners(column, {
        filterChanged: () => this.refreshFilterClass()
      });
    });
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(this.columnGroup)) {
      this.addManagedEventListeners({
        filterOpened: this.onFilterOpened.bind(this)
      });
    }
  }
  refreshFilterClass() {
    const columns = this.getColumns();
    const anyChildFiltersActive = () => columns.some(col => col.isFilterActive());
    this.filterGroupComp.addOrRemoveCssClass("ag-has-filter", anyChildFiltersActive());
  }
  onFilterOpened(event) {
    if (event.source !== "COLUMN_MENU") {
      return;
    }
    if (event.column !== this.columnGroup) {
      return;
    }
    if (!this.isExpanded()) {
      return;
    }
    this.collapse();
  }
  expand() {
    this.filterGroupComp.toggleGroupExpand(true);
  }
  collapse() {
    this.filterGroupComp.toggleGroupExpand(false);
  }
  setGroupTitle() {
    this.filterGroupName = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(this.columnGroup) ? this.getColumnGroupName(this.columnGroup) : this.getColumnName(this.columnGroup);
    this.filterGroupComp.setTitle(this.filterGroupName || "");
  }
  getColumnGroupName(columnGroup) {
    return this.columnNameService.getDisplayNameForProvidedColumnGroup(null, columnGroup, "filterToolPanel");
  }
  getColumnName(column) {
    return this.columnNameService.getDisplayNameForColumn(column, "filterToolPanel", false);
  }
  destroyFilters() {
    this.childFilterComps = this.destroyBeans(this.childFilterComps);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.getGui());
  }
  destroy() {
    this.destroyFilters();
    super.destroy();
  }
};

// enterprise-modules/filter-tool-panel/src/filterToolPanel/agFiltersToolPanelList.ts
var AgFiltersToolPanelList = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-filter-list-panel"></div>`);
    this.initialised = false;
    this.hasLoadedInitialState = false;
    this.isInitialState = false;
    this.filterGroupComps = [];
    // If a column drag is happening, we suppress handling the event until it has completed
    this.suppressOnColumnsChanged = false;
    this.onColumnsChangedPending = false;
  }
  wireBeans(beans) {
    this.toolPanelColDefService = beans.toolPanelColDefService;
    this.columnModel = beans.columnModel;
  }
  init(params) {
    this.initialised = true;
    const defaultParams = this.gos.addGridCommonParams({
      suppressExpandAll: false,
      suppressFilterSearch: false,
      suppressSyncLayoutWithGrid: false
    });
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._mergeDeep)(defaultParams, params);
    this.params = defaultParams;
    if (!this.params.suppressSyncLayoutWithGrid) {
      this.addManagedEventListeners({
        columnMoved: () => this.onColumnsChanged()
      });
    }
    this.addManagedEventListeners({
      newColumnsLoaded: () => this.onColumnsChanged(),
      toolPanelVisibleChanged: event => {
        if (event.key === "filters") {
          this.refreshFilters(event.visible);
        }
      },
      dragStarted: () => {
        this.suppressOnColumnsChanged = true;
      },
      dragStopped: () => {
        this.suppressOnColumnsChanged = false;
        if (this.onColumnsChangedPending) {
          this.onColumnsChangedPending = false;
          this.onColumnsChanged();
        }
      }
    });
    if (this.columnModel.isReady()) {
      this.onColumnsChanged();
    }
  }
  onColumnsChanged() {
    if (this.suppressOnColumnsChanged) {
      this.onColumnsChangedPending = true;
      return;
    }
    const pivotModeActive = this.columnModel.isPivotMode();
    const shouldSyncColumnLayoutWithGrid = !this.params.suppressSyncLayoutWithGrid && !pivotModeActive;
    shouldSyncColumnLayoutWithGrid ? this.syncFilterLayout() : this.buildTreeFromProvidedColumnDefs();
    this.refreshAriaLabel();
  }
  syncFilterLayout() {
    this.toolPanelColDefService.syncLayoutWithGrid(this.setFiltersLayout.bind(this));
    this.refreshAriaLabel();
  }
  buildTreeFromProvidedColumnDefs() {
    const columnTree = this.columnModel.getColDefColTree();
    this.recreateFilters(columnTree);
  }
  setFiltersLayout(colDefs) {
    const columnTree = this.toolPanelColDefService.createColumnTree(colDefs);
    this.recreateFilters(columnTree);
  }
  recreateFilters(columnTree) {
    const activeElement = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getActiveDomElement)(this.gos);
    if (!this.hasLoadedInitialState) {
      this.hasLoadedInitialState = true;
      this.isInitialState = !!this.params.initialState;
    }
    const expansionState = this.getExpansionState();
    this.destroyFilters();
    this.filterGroupComps = this.recursivelyAddComps(columnTree, 0, expansionState);
    const len = this.filterGroupComps.length;
    if (len) {
      this.filterGroupComps.forEach(comp => this.appendChild(comp));
      this.setFirstAndLastVisible(0, len - 1);
    }
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(this.searchFilterText)) {
      this.searchFilters(this.searchFilterText);
    }
    this.fireExpandedEvent();
    if (this.getGui().contains(activeElement)) {
      activeElement.focus();
    }
    this.isInitialState = false;
    this.refreshAriaLabel();
  }
  recursivelyAddComps(tree, depth, expansionState) {
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._flatten)(tree.map(child => {
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(child)) {
        return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._flatten)(this.recursivelyAddFilterGroupComps(child, depth, expansionState));
      }
      const column = child;
      if (!this.shouldDisplayFilter(column)) {
        return [];
      }
      const hideFilterCompHeader = depth === 0;
      const filterComp = new ToolPanelFilterComp(hideFilterCompHeader, () => this.onFilterExpanded());
      this.createBean(filterComp);
      filterComp.setColumn(column);
      if (expansionState.get(column.getId())) {
        filterComp.expand();
      }
      if (depth > 0) {
        return filterComp;
      }
      const filterGroupComp = this.createBean(new ToolPanelFilterGroupComp(column, [filterComp], this.onGroupExpanded.bind(this), depth, true));
      filterGroupComp.addCssClassToTitleBar("ag-filter-toolpanel-header");
      if (!expansionState.get(filterGroupComp.getFilterGroupId())) {
        filterGroupComp.collapse();
      }
      return filterGroupComp;
    }));
  }
  refreshAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const filterListName = translate("ariaFilterPanelList", "Filter List");
    const localeFilters = translate("filters", "Filters");
    const eGui = this.getGui();
    const groupSelector = ".ag-filter-toolpanel-group-wrapper";
    const itemSelector = ".ag-filter-toolpanel-group-item";
    const hiddenSelector = ".ag-hidden";
    const visibleItems = eGui.querySelectorAll(`${itemSelector}:not(${groupSelector}, ${hiddenSelector})`);
    const totalVisibleItems = visibleItems.length;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLabel)(this.getAriaElement(), `${filterListName} ${totalVisibleItems} ${localeFilters}`);
  }
  recursivelyAddFilterGroupComps(columnGroup, depth, expansionState) {
    if (!this.filtersExistInChildren(columnGroup.getChildren())) {
      return;
    }
    const colGroupDef = columnGroup.getColGroupDef();
    if (colGroupDef && colGroupDef.suppressFiltersToolPanel) {
      return [];
    }
    const newDepth = columnGroup.isPadding() ? depth : depth + 1;
    const childFilterComps = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._flatten)(this.recursivelyAddComps(columnGroup.getChildren(), newDepth, expansionState));
    if (columnGroup.isPadding()) {
      return childFilterComps;
    }
    const filterGroupComp = new ToolPanelFilterGroupComp(columnGroup, childFilterComps, this.onGroupExpanded.bind(this), depth, false);
    this.createBean(filterGroupComp);
    filterGroupComp.addCssClassToTitleBar("ag-filter-toolpanel-header");
    const expansionStateValue = expansionState.get(filterGroupComp.getFilterGroupId());
    if (this.isInitialState && !expansionStateValue || expansionStateValue === false) {
      filterGroupComp.collapse();
    }
    return [filterGroupComp];
  }
  filtersExistInChildren(tree) {
    return tree.some(child => {
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(child)) {
        return this.filtersExistInChildren(child.getChildren());
      }
      return this.shouldDisplayFilter(child);
    });
  }
  shouldDisplayFilter(column) {
    const suppressFiltersToolPanel = column.getColDef() && column.getColDef().suppressFiltersToolPanel;
    return column.isFilterAllowed() && !suppressFiltersToolPanel;
  }
  getExpansionState() {
    const expansionState = /* @__PURE__ */new Map();
    if (this.isInitialState) {
      const {
        expandedColIds,
        expandedGroupIds
      } = this.params.initialState;
      expandedColIds.forEach(id => expansionState.set(id, true));
      expandedGroupIds.forEach(id => expansionState.set(id, true));
      return expansionState;
    }
    const recursiveGetExpansionState = filterGroupComp => {
      expansionState.set(filterGroupComp.getFilterGroupId(), filterGroupComp.isExpanded());
      filterGroupComp.getChildren().forEach(child => {
        if (child instanceof ToolPanelFilterGroupComp) {
          recursiveGetExpansionState(child);
        } else {
          expansionState.set(child.getColumn().getId(), child.isExpanded());
        }
      });
    };
    this.filterGroupComps.forEach(recursiveGetExpansionState);
    return expansionState;
  }
  // we don't support refreshing, but must implement because it's on the tool panel interface
  refresh() {}
  // lazy initialise the panel
  setVisible(visible) {
    super.setDisplayed(visible);
    if (visible && !this.initialised) {
      this.init(this.params);
    }
  }
  expandFilterGroups(expand, groupIds) {
    const updatedGroupIds = [];
    const updateGroupExpandState = filterGroup => {
      const groupId = filterGroup.getFilterGroupId();
      const shouldExpandOrCollapse = !groupIds || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(groupIds, groupId);
      if (shouldExpandOrCollapse) {
        if (expand && filterGroup.isColumnGroup()) {
          filterGroup.expand();
        } else {
          filterGroup.collapse();
        }
        updatedGroupIds.push(groupId);
      }
      filterGroup.getChildren().forEach(child => {
        if (child instanceof ToolPanelFilterGroupComp) {
          updateGroupExpandState(child);
        }
      });
    };
    this.filterGroupComps.forEach(updateGroupExpandState);
    this.onGroupExpanded();
    if (groupIds) {
      const unrecognisedGroupIds = groupIds.filter(groupId => updatedGroupIds.indexOf(groupId) < 0);
      if (unrecognisedGroupIds.length > 0) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("unable to find groups for these supplied groupIds:", unrecognisedGroupIds);
      }
    }
  }
  expandFilters(expand, colIds) {
    const updatedColIds = [];
    const updateGroupExpandState = filterComp => {
      if (filterComp instanceof ToolPanelFilterGroupComp) {
        let anyChildrenChanged = false;
        filterComp.getChildren().forEach(child => {
          const childUpdated = updateGroupExpandState(child);
          if (childUpdated) {
            if (expand) {
              filterComp.expand();
              anyChildrenChanged = true;
            } else if (!filterComp.isColumnGroup()) {
              filterComp.collapse();
            }
          }
        });
        return anyChildrenChanged;
      }
      const colId = filterComp.getColumn().getColId();
      const updateFilterExpandState = !colIds || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(colIds, colId);
      if (updateFilterExpandState) {
        expand ? filterComp.expand() : filterComp.collapse();
        updatedColIds.push(colId);
      }
      return updateFilterExpandState;
    };
    this.filterGroupComps.forEach(updateGroupExpandState);
    this.onGroupExpanded();
    if (colIds) {
      const unrecognisedColIds = colIds.filter(colId => updatedColIds.indexOf(colId) < 0);
      if (unrecognisedColIds.length > 0) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("unable to find columns for these supplied colIds:" + unrecognisedColIds);
      }
    }
  }
  onGroupExpanded() {
    this.fireExpandedEvent();
  }
  onFilterExpanded() {
    this.dispatchLocalEvent({
      type: "filterExpanded"
    });
  }
  fireExpandedEvent() {
    let expandedCount = 0;
    let notExpandedCount = 0;
    const updateExpandCounts = filterGroup => {
      if (!filterGroup.isColumnGroup()) {
        return;
      }
      filterGroup.isExpanded() ? expandedCount++ : notExpandedCount++;
      filterGroup.getChildren().forEach(child => {
        if (child instanceof ToolPanelFilterGroupComp) {
          updateExpandCounts(child);
        }
      });
    };
    this.filterGroupComps.forEach(updateExpandCounts);
    let state;
    if (expandedCount > 0 && notExpandedCount > 0) {
      state = 2 /* INDETERMINATE */;
    } else if (notExpandedCount > 0) {
      state = 1 /* COLLAPSED */;
    } else {
      state = 0 /* EXPANDED */;
    }
    this.dispatchLocalEvent({
      type: "groupExpanded",
      state
    });
  }
  performFilterSearch(searchText) {
    this.searchFilterText = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(searchText) ? searchText.toLowerCase() : null;
    this.searchFilters(this.searchFilterText);
  }
  searchFilters(searchFilter) {
    const passesFilter = groupName => {
      return !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(searchFilter) || groupName.toLowerCase().indexOf(searchFilter) !== -1;
    };
    const recursivelySearch = (filterItem, parentPasses) => {
      if (!(filterItem instanceof ToolPanelFilterGroupComp)) {
        return passesFilter(filterItem.getColumnFilterName() || "");
      }
      const children = filterItem.getChildren();
      const groupNamePasses = passesFilter(filterItem.getFilterGroupName());
      const alreadyPassed = parentPasses || groupNamePasses;
      if (alreadyPassed) {
        filterItem.hideGroup(false);
        for (let i = 0; i < children.length; i++) {
          recursivelySearch(children[i], alreadyPassed);
          filterItem.hideGroupItem(false, i);
        }
        return true;
      }
      let anyChildPasses = false;
      children.forEach((child, index) => {
        const childPasses = recursivelySearch(child, parentPasses);
        filterItem.hideGroupItem(!childPasses, index);
        if (childPasses) {
          anyChildPasses = true;
        }
      });
      filterItem.hideGroup(!anyChildPasses);
      return anyChildPasses;
    };
    let firstVisible;
    let lastVisible;
    this.filterGroupComps.forEach((filterGroup, idx) => {
      recursivelySearch(filterGroup, false);
      if (firstVisible === void 0) {
        if (!filterGroup.containsCssClass("ag-hidden")) {
          firstVisible = idx;
          lastVisible = idx;
        }
      } else if (!filterGroup.containsCssClass("ag-hidden") && lastVisible !== idx) {
        lastVisible = idx;
      }
    });
    this.setFirstAndLastVisible(firstVisible, lastVisible);
    this.refreshAriaLabel();
  }
  setFirstAndLastVisible(firstIdx, lastIdx) {
    this.filterGroupComps.forEach((filterGroup, idx) => {
      filterGroup.removeCssClass("ag-first-group-visible");
      filterGroup.removeCssClass("ag-last-group-visible");
      if (idx === firstIdx) {
        filterGroup.addCssClass("ag-first-group-visible");
      }
      if (idx === lastIdx) {
        filterGroup.addCssClass("ag-last-group-visible");
      }
    });
  }
  refreshFilters(isDisplayed) {
    this.filterGroupComps.forEach(filterGroupComp => filterGroupComp.refreshFilters(isDisplayed));
  }
  getExpandedFiltersAndGroups() {
    const expandedGroupIds = [];
    const expandedColIds = /* @__PURE__ */new Set();
    const getExpandedFiltersAndGroups = filterComp => {
      if (filterComp instanceof ToolPanelFilterGroupComp) {
        filterComp.getChildren().forEach(child => getExpandedFiltersAndGroups(child));
        const groupId = filterComp.getFilterGroupId();
        if (filterComp.isExpanded() && !expandedColIds.has(groupId)) {
          expandedGroupIds.push(groupId);
        }
      } else {
        if (filterComp.isExpanded()) {
          expandedColIds.add(filterComp.getColumn().getColId());
        }
      }
    };
    this.filterGroupComps.forEach(getExpandedFiltersAndGroups);
    return {
      expandedGroupIds,
      expandedColIds: Array.from(expandedColIds)
    };
  }
  destroyFilters() {
    this.filterGroupComps = this.destroyBeans(this.filterGroupComps);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.getGui());
  }
  destroy() {
    this.destroyFilters();
    super.destroy();
  }
};
var AgFiltersToolPanelListSelector = {
  selector: "AG-FILTERS-TOOL-PANEL-LIST",
  component: AgFiltersToolPanelList
};

// enterprise-modules/filter-tool-panel/src/filterToolPanel/filtersToolPanel.ts
var FiltersToolPanel = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-filter-toolpanel">
            <ag-filters-tool-panel-header data-ref="filtersToolPanelHeaderPanel"></ag-filters-tool-panel-header>
            <ag-filters-tool-panel-list data-ref="filtersToolPanelListPanel"></ag-filters-tool-panel-list>
         </div>`, [AgFiltersToolPanelHeaderSelector, AgFiltersToolPanelListSelector]);
    this.filtersToolPanelHeaderPanel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.filtersToolPanelListPanel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.initialised = false;
    this.listenerDestroyFuncs = [];
  }
  init(params) {
    if (this.initialised) {
      this.listenerDestroyFuncs.forEach(func => func());
      this.listenerDestroyFuncs = [];
    }
    this.initialised = true;
    const defaultParams = this.gos.addGridCommonParams({
      suppressExpandAll: false,
      suppressFilterSearch: false,
      suppressSyncLayoutWithGrid: false
    });
    this.params = {
      ...defaultParams,
      ...params
    };
    this.filtersToolPanelHeaderPanel.init(this.params);
    this.filtersToolPanelListPanel.init(this.params);
    const hideExpand = this.params.suppressExpandAll;
    const hideSearch = this.params.suppressFilterSearch;
    if (hideExpand && hideSearch) {
      this.filtersToolPanelHeaderPanel.setDisplayed(false);
    }
    this.listenerDestroyFuncs.push(...this.addManagedListeners(this.filtersToolPanelHeaderPanel, {
      expandAll: this.onExpandAll.bind(this),
      collapseAll: this.onCollapseAll.bind(this),
      searchChanged: this.onSearchChanged.bind(this)
    }), ...this.addManagedListeners(this.filtersToolPanelListPanel, {
      filterExpanded: this.onFilterExpanded.bind(this),
      groupExpanded: this.onGroupExpanded.bind(this)
    }));
  }
  // lazy initialise the panel
  setVisible(visible) {
    super.setDisplayed(visible);
    if (visible && !this.initialised) {
      this.init(this.params);
    }
  }
  onExpandAll() {
    this.filtersToolPanelListPanel.expandFilterGroups(true);
  }
  onCollapseAll() {
    this.filtersToolPanelListPanel.expandFilterGroups(false);
  }
  onSearchChanged(event) {
    this.filtersToolPanelListPanel.performFilterSearch(event.searchText);
  }
  setFilterLayout(colDefs) {
    this.filtersToolPanelListPanel.setFiltersLayout(colDefs);
  }
  onFilterExpanded() {
    this.params.onStateUpdated();
  }
  onGroupExpanded(event) {
    this.filtersToolPanelHeaderPanel.setExpandState(event.state);
    this.params.onStateUpdated();
  }
  expandFilterGroups(groupIds) {
    this.filtersToolPanelListPanel.expandFilterGroups(true, groupIds);
  }
  collapseFilterGroups(groupIds) {
    this.filtersToolPanelListPanel.expandFilterGroups(false, groupIds);
  }
  expandFilters(colIds) {
    this.filtersToolPanelListPanel.expandFilters(true, colIds);
  }
  collapseFilters(colIds) {
    this.filtersToolPanelListPanel.expandFilters(false, colIds);
  }
  syncLayoutWithGrid() {
    this.filtersToolPanelListPanel.syncFilterLayout();
  }
  refresh(params) {
    this.init(params);
    return true;
  }
  getState() {
    return this.filtersToolPanelListPanel.getExpandedFiltersAndGroups();
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/filter-tool-panel/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/filter-tool-panel/src/filtersToolPanelModule.ts
var FiltersToolPanelModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.FiltersToolPanelModule,
  beans: [],
  userComponents: [{
    name: "agFiltersToolPanel",
    classImp: FiltersToolPanel
  }],
  dependantModules: [_ag_grid_enterprise_side_bar__WEBPACK_IMPORTED_MODULE_2__.SideBarModule, _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._ColumnFilterModule]
});


/***/ }),

/***/ 11856:
/*!**********************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/master-detail/dist/package/main.esm.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterDetailModule: () => (/* binding */ MasterDetailModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/master-detail/src/masterDetailModule.ts



// enterprise-modules/master-detail/src/masterDetail/detailCellRenderer.ts


// enterprise-modules/master-detail/src/masterDetail/detailCellRendererCtrl.ts

var DetailCellRendererCtrl = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.loadRowDataVersion = 0;
  }
  wireBeans(beans) {
    this.focusService = beans.focusService;
    this.rowPositionUtils = beans.rowPositionUtils;
    this.environment = beans.environment;
  }
  init(comp, params) {
    this.params = params;
    this.comp = comp;
    const doNothingBecauseInsidePinnedSection = params.pinned != null;
    if (doNothingBecauseInsidePinnedSection) {
      return;
    }
    this.setAutoHeightClasses();
    this.setupRefreshStrategy();
    this.addThemeToDetailGrid();
    this.createDetailGrid();
    this.loadRowData();
    this.addManagedEventListeners({
      fullWidthRowFocused: this.onFullWidthRowFocused.bind(this)
    });
  }
  onFullWidthRowFocused(e) {
    const params = this.params;
    const row = {
      rowIndex: params.node.rowIndex,
      rowPinned: params.node.rowPinned
    };
    const eventRow = {
      rowIndex: e.rowIndex,
      rowPinned: e.rowPinned
    };
    const isSameRow = this.rowPositionUtils.sameRow(row, eventRow);
    if (!isSameRow) {
      return;
    }
    this.focusService.focusInto(this.comp.getGui(), e.fromBelow);
  }
  setAutoHeightClasses() {
    const autoHeight = this.gos.get("detailRowAutoHeight");
    const parentClass = autoHeight ? "ag-details-row-auto-height" : "ag-details-row-fixed-height";
    const detailClass = autoHeight ? "ag-details-grid-auto-height" : "ag-details-grid-fixed-height";
    this.comp.addOrRemoveCssClass(parentClass, true);
    this.comp.addOrRemoveDetailGridCssClass(detailClass, true);
  }
  setupRefreshStrategy() {
    const providedStrategy = this.params.refreshStrategy;
    const validSelection = providedStrategy == "everything" || providedStrategy == "nothing" || providedStrategy == "rows";
    if (validSelection) {
      this.refreshStrategy = providedStrategy;
      return;
    }
    if (providedStrategy != null) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("invalid cellRendererParams.refreshStrategy = '" + providedStrategy + "' supplied, defaulting to refreshStrategy = 'rows'.");
    }
    this.refreshStrategy = "rows";
  }
  addThemeToDetailGrid() {
    for (const themeClass of this.environment.getThemeClasses()) {
      this.comp.addOrRemoveDetailGridCssClass(themeClass, true);
    }
  }
  createDetailGrid() {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(this.params.detailGridOptions)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("could not find detail grid options for master detail, please set gridOptions.detailCellRendererParams.detailGridOptions");
      return;
    }
    const gridOptions = {
      ...this.params.detailGridOptions
    };
    const autoHeight = this.gos.get("detailRowAutoHeight");
    if (autoHeight) {
      gridOptions.domLayout = "autoHeight";
    }
    gridOptions.theme || (gridOptions.theme = this.gos.get("theme"));
    this.comp.setDetailGrid(gridOptions);
  }
  registerDetailWithMaster(api) {
    const rowId = this.params.node.id;
    const masterGridApi = this.params.api;
    const gridInfo = {
      id: rowId,
      api
    };
    const rowNode = this.params.node;
    if (masterGridApi.isDestroyed()) {
      return;
    }
    masterGridApi.addDetailGridInfo(rowId, gridInfo);
    rowNode.detailGridInfo = gridInfo;
    this.addDestroyFunc(() => {
      if (rowNode.detailGridInfo !== gridInfo) {
        return;
      }
      if (!masterGridApi.isDestroyed()) {
        masterGridApi.removeDetailGridInfo(rowId);
      }
      rowNode.detailGridInfo = null;
    });
  }
  loadRowData() {
    this.loadRowDataVersion++;
    const versionThisCall = this.loadRowDataVersion;
    if (this.params.detailGridOptions?.rowModelType === "serverSide") {
      const node = this.params.node;
      node.detailGridInfo?.api?.refreshServerSide({
        purge: true
      });
      return;
    }
    const userFunc = this.params.getDetailRowData;
    if (!userFunc) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("could not find getDetailRowData for master / detail, please set gridOptions.detailCellRendererParams.getDetailRowData");
      return;
    }
    const successCallback = rowData => {
      const mostRecentCall = this.loadRowDataVersion === versionThisCall;
      if (mostRecentCall) {
        this.comp.setRowData(rowData);
      }
    };
    const funcParams = {
      node: this.params.node,
      // we take data from node, rather than params.data
      // as the data could have been updated with new instance
      data: this.params.node.data,
      successCallback,
      context: this.gos.getGridCommonParams().context
    };
    userFunc(funcParams);
  }
  refresh() {
    const GET_GRID_TO_REFRESH = false;
    const GET_GRID_TO_DO_NOTHING = true;
    switch (this.refreshStrategy) {
      case "nothing":
        return GET_GRID_TO_DO_NOTHING;
      case "everything":
        return GET_GRID_TO_REFRESH;
    }
    this.loadRowData();
    return GET_GRID_TO_DO_NOTHING;
  }
};

// enterprise-modules/master-detail/src/masterDetail/detailFrameworkComponentWrapper.ts
var DetailFrameworkComponentWrapper = class {
  constructor(parentWrapper) {
    this.parentWrapper = parentWrapper;
  }
  wrap(frameworkComponent, methodList, optionalMethodList, componentType) {
    return this.parentWrapper.wrap(frameworkComponent, methodList, optionalMethodList, componentType);
  }
};

// enterprise-modules/master-detail/src/masterDetail/detailCellRenderer.ts
var DetailCellRenderer = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.eDetailGrid = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.context = beans.context;
  }
  init(params) {
    this.params = params;
    this.selectAndSetTemplate();
    const compProxy = {
      addOrRemoveCssClass: (cssClassName, on) => this.addOrRemoveCssClass(cssClassName, on),
      addOrRemoveDetailGridCssClass: (cssClassName, on) => this.eDetailGrid.classList.toggle(cssClassName, on),
      setDetailGrid: gridOptions => this.setDetailGrid(gridOptions),
      setRowData: rowData => this.setRowData(rowData),
      getGui: () => this.eDetailGrid
    };
    this.ctrl = this.createManagedBean(new DetailCellRendererCtrl());
    this.ctrl.init(compProxy, params);
  }
  refresh() {
    return this.ctrl && this.ctrl.refresh();
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
  selectAndSetTemplate() {
    if (this.params.pinned) {
      this.setTemplate(/* html*/
      `<div class="ag-details-row"></div>`);
      return;
    }
    const setDefaultTemplate = () => {
      this.setTemplate(/* html */
      `<div class="ag-details-row" role="gridcell">
                <div data-ref="eDetailGrid" class="ag-details-grid" role="presentation"></div>
            </div>`);
    };
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(this.params.template)) {
      setDefaultTemplate();
    } else {
      if (typeof this.params.template === "string") {
        this.setTemplate(this.params.template, []);
      } else if (typeof this.params.template === "function") {
        const templateFunc = this.params.template;
        const template = templateFunc(this.params);
        this.setTemplate(template, []);
      } else {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("detailCellRendererParams.template should be function or string");
        setDefaultTemplate();
      }
    }
    if (this.eDetailGrid == null) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)('Reference to eDetailGrid was missing from the details template. Please add data-ref="eDetailGrid" to the template.');
    }
  }
  setDetailGrid(gridOptions) {
    if (!this.eDetailGrid) {
      return;
    }
    const parentFrameworkComponentWrapper = this.context.getBean("frameworkComponentWrapper");
    const frameworkComponentWrapper = new DetailFrameworkComponentWrapper(parentFrameworkComponentWrapper);
    const frameworkOverrides = this.getFrameworkOverrides();
    const api = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.createGrid)(this.eDetailGrid, gridOptions, {
      frameworkOverrides,
      providedBeanInstances: {
        frameworkComponentWrapper
      },
      modules: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleRegistry.__getGridRegisteredModules(this.params.api.getGridId())
    });
    this.detailApi = api;
    this.ctrl.registerDetailWithMaster(api);
    this.addDestroyFunc(() => {
      api?.destroy();
    });
  }
  setRowData(rowData) {
    this.detailApi && this.detailApi.setGridOption("rowData", rowData);
  }
};

// enterprise-modules/master-detail/src/masterDetail/detailGridApiService.ts

var DetailGridApiService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "detailGridApiService";
    this.detailGridInfoMap = {};
  }
  addDetailGridInfo(id, gridInfo) {
    this.detailGridInfoMap[id] = gridInfo;
  }
  removeDetailGridInfo(id) {
    delete this.detailGridInfoMap[id];
  }
  getDetailGridInfo(id) {
    return this.detailGridInfoMap[id];
  }
  forEachDetailGridInfo(callback) {
    let index = 0;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._iterateObject)(this.detailGridInfoMap, (id, gridInfo) => {
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(gridInfo)) {
        callback(gridInfo, index);
        index++;
      }
    });
  }
  destroy() {
    this.detailGridInfoMap = {};
    super.destroy();
  }
};

// enterprise-modules/master-detail/src/masterDetail/masterDetailApi.ts
function addDetailGridInfo(beans, id, gridInfo) {
  beans.detailGridApiService?.addDetailGridInfo(id, gridInfo);
}
function removeDetailGridInfo(beans, id) {
  beans.detailGridApiService?.removeDetailGridInfo(id);
}
function getDetailGridInfo(beans, id) {
  return beans.detailGridApiService?.getDetailGridInfo(id);
}
function forEachDetailGridInfo(beans, callback) {
  beans.detailGridApiService?.forEachDetailGridInfo(callback);
}

// enterprise-modules/master-detail/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/master-detail/src/masterDetailModule.ts
var MasterDetailCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.MasterDetailModule}-core`,
  userComponents: [{
    name: "agGroupRowRenderer",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.GroupCellRenderer
  }, {
    name: "agGroupCellRenderer",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.GroupCellRenderer
  }, {
    name: "agDetailCellRenderer",
    classImp: DetailCellRenderer
  }],
  controllers: [{
    name: "detailCellRenderer",
    classImp: DetailCellRendererCtrl
  }, {
    name: "groupCellRendererCtrl",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.GroupCellRendererCtrl
  }],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule]
});
var MasterDetailApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.MasterDetailModule}-api`,
  beans: [DetailGridApiService],
  apiFunctions: {
    addDetailGridInfo,
    removeDetailGridInfo,
    getDetailGridInfo,
    forEachDetailGridInfo
  },
  dependantModules: [MasterDetailCoreModule]
});
var MasterDetailModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.MasterDetailModule,
  dependantModules: [MasterDetailCoreModule, MasterDetailApiModule]
});


/***/ }),

/***/ 41350:
/*!*************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/menu/dist/package/main.esm.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuModule: () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
/* harmony import */ var _ag_grid_enterprise_column_tool_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-enterprise/column-tool-panel */ 48855);

// enterprise-modules/menu/src/menuModule.ts



// enterprise-modules/menu/src/menu/chartMenuItemMapper.ts

var ChartMenuItemMapper = class _ChartMenuItemMapper extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "chartMenuItemMapper";
  }
  wireBeans(beans) {
    this.chartService = beans.chartService;
  }
  getChartItems(key) {
    if (!this.chartService) {
      this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.GridChartsModule, `the Context Menu key "${key}"`);
      return void 0;
    }
    const builder = key === "pivotChart" ? new PivotMenuItemMapper(this.gos, this.chartService, this.localeService) : new RangeMenuItemMapper(this.gos, this.chartService, this.localeService);
    const isEnterprise = this.chartService.isEnterprise();
    let topLevelMenuItem = builder.getMenuItem();
    if (topLevelMenuItem && topLevelMenuItem.subMenu && !isEnterprise) {
      const filterEnterpriseItems = m => ({
        ...m,
        subMenu: m.subMenu?.filter(menu => !menu._enterprise).map(menu => filterEnterpriseItems(menu))
      });
      topLevelMenuItem = filterEnterpriseItems(topLevelMenuItem);
    }
    const chartGroupsDef = this.gos.get("chartToolPanelsDef")?.settingsPanel?.chartGroupsDef;
    if (chartGroupsDef) {
      topLevelMenuItem = _ChartMenuItemMapper.filterAndOrderChartMenu(topLevelMenuItem, chartGroupsDef, builder.getConfigLookup());
    }
    return this.cleanInternals(topLevelMenuItem);
  }
  // Remove our internal _key and _enterprise properties so this does not leak out of the class on the menu items.
  cleanInternals(menuItem) {
    if (!menuItem) {
      return menuItem;
    }
    const removeKeys = m => {
      delete m?._key;
      delete m?._enterprise;
      m?.subMenu?.forEach(s => removeKeys(s));
      return m;
    };
    return removeKeys(menuItem);
  }
  static buildLookup(menuItem) {
    const itemLookup = {};
    const addItem = item => {
      itemLookup[item._key] = item;
      if (item.subMenu) {
        item.subMenu.forEach(s => addItem(s));
      }
    };
    addItem(menuItem);
    return itemLookup;
  }
  /**
   * Make the MenuItem match the charts provided and their ordering on the ChartGroupsDef config object as provided by the user.
   */
  static filterAndOrderChartMenu(topLevelMenuItem, chartGroupsDef, configLookup) {
    const menuItemLookup = this.buildLookup(topLevelMenuItem);
    const orderedAndFiltered = {
      ...topLevelMenuItem,
      subMenu: []
    };
    Object.entries(chartGroupsDef).forEach(([group, chartTypes]) => {
      const chartConfigGroup = configLookup[group];
      if (chartConfigGroup === null) return;
      if (chartConfigGroup == void 0) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`invalid chartGroupsDef config '${group}'`);
        return void 0;
      }
      const menuItem = menuItemLookup[chartConfigGroup._key];
      if (menuItem) {
        if (menuItem.subMenu) {
          const subMenus = chartTypes.map(chartType => {
            const itemKey = chartConfigGroup[chartType];
            if (itemKey == void 0) {
              (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`invalid chartGroupsDef config '${group}.${chartType}'`);
              return void 0;
            }
            return menuItemLookup[itemKey];
          }).filter(s => s !== void 0);
          if (subMenus.length > 0) {
            menuItem.subMenu = subMenus;
            orderedAndFiltered.subMenu?.push(menuItem);
          }
        } else {
          orderedAndFiltered.subMenu?.push(menuItem);
        }
      }
    });
    if (orderedAndFiltered.subMenu?.length == 0) {
      return void 0;
    }
    return orderedAndFiltered;
  }
};
var PivotMenuItemMapper = class {
  constructor(gos, chartService, localeService) {
    this.gos = gos;
    this.chartService = chartService;
    this.localeService = localeService;
  }
  getMenuItem() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const getMenuItem = (localeKey, defaultText, chartType, key, enterprise = false) => {
      return {
        name: localeTextFunc(localeKey, defaultText),
        action: () => this.chartService.createPivotChart({
          chartType
        }),
        _key: key,
        _enterprise: enterprise
      };
    };
    return {
      name: localeTextFunc("pivotChart", "Pivot Chart"),
      _key: "pivotChart",
      subMenu: [{
        _key: "pivotColumnChart",
        name: localeTextFunc("columnChart", "Column"),
        subMenu: [getMenuItem("groupedColumn", "Grouped&lrm;", "groupedColumn", "pivotGroupedColumn"), getMenuItem("stackedColumn", "Stacked&lrm;", "stackedColumn", "pivotStackedColumn"), getMenuItem("normalizedColumn", "100% Stacked&lrm;", "normalizedColumn", "pivotNormalizedColumn")]
      }, {
        _key: "pivotBarChart",
        name: localeTextFunc("barChart", "Bar"),
        subMenu: [getMenuItem("groupedBar", "Grouped&lrm;", "groupedBar", "pivotGroupedBar"), getMenuItem("stackedBar", "Stacked&lrm;", "stackedBar", "pivotStackedBar"), getMenuItem("normalizedBar", "100% Stacked&lrm;", "normalizedBar", "pivotNormalizedBar")]
      }, {
        _key: "pivotPieChart",
        name: localeTextFunc("pieChart", "Pie"),
        subMenu: [getMenuItem("pie", "Pie&lrm;", "pie", "pivotPie"), getMenuItem("donut", "Donut&lrm;", "donut", "pivotDonut")]
      }, getMenuItem("line", "Line&lrm;", "line", "pivotLineChart"), {
        _key: "pivotXYChart",
        name: localeTextFunc("xyChart", "X Y (Scatter)"),
        subMenu: [getMenuItem("scatter", "Scatter&lrm;", "scatter", "pivotScatter"), getMenuItem("bubble", "Bubble&lrm;", "bubble", "pivotBubble")]
      }, {
        _key: "pivotAreaChart",
        name: localeTextFunc("areaChart", "Area"),
        subMenu: [getMenuItem("area", "Area&lrm;", "area", "pivotArea"), getMenuItem("stackedArea", "Stacked&lrm;", "stackedArea", "pivotStackedArea"), getMenuItem("normalizedArea", "100% Stacked&lrm;", "normalizedArea", "pivotNormalizedArea")]
      }, {
        _key: "pivotStatisticalChart",
        _enterprise: false,
        // histogram chart is available in both community and enterprise distributions
        name: localeTextFunc("statisticalChart", "Statistical"),
        subMenu: [getMenuItem("histogramChart", "Histogram&lrm;", "histogram", "pivotHistogram", false)]
      }, {
        _key: "pivotHierarchicalChart",
        _enterprise: true,
        name: localeTextFunc("hierarchicalChart", "Hierarchical"),
        subMenu: [getMenuItem("treemapChart", "Treemap&lrm;", "treemap", "pivotTreemap", true), getMenuItem("sunburstChart", "Sunburst&lrm;", "sunburst", "pivotSunburst", true)]
      }, {
        _key: "pivotCombinationChart",
        name: localeTextFunc("combinationChart", "Combination"),
        subMenu: [getMenuItem("columnLineCombo", "Column & Line&lrm;", "columnLineCombo", "pivotColumnLineCombo"), getMenuItem("AreaColumnCombo", "Area & Column&lrm;", "areaColumnCombo", "pivotAreaColumnCombo")]
      }],
      icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("chart", this.gos, void 0)
    };
  }
  getConfigLookup() {
    return {
      columnGroup: {
        _key: "pivotColumnChart",
        column: "pivotGroupedColumn",
        stackedColumn: "pivotStackedColumn",
        normalizedColumn: "pivotNormalizedColumn"
      },
      barGroup: {
        _key: "pivotBarChart",
        bar: "pivotGroupedBar",
        stackedBar: "pivotStackedBar",
        normalizedBar: "pivotNormalizedBar"
      },
      pieGroup: {
        _key: "pivotPieChart",
        pie: "pivotPie",
        donut: "pivotDonut",
        doughnut: "pivotDonut"
      },
      lineGroup: {
        _key: "pivotLineChart",
        line: "pivotLineChart"
      },
      scatterGroup: {
        _key: "pivotXYChart",
        bubble: "pivotBubble",
        scatter: "pivotScatter"
      },
      areaGroup: {
        _key: "pivotAreaChart",
        area: "pivotArea",
        stackedArea: "pivotStackedArea",
        normalizedArea: "pivotNormalizedArea"
      },
      combinationGroup: {
        _key: "pivotCombinationChart",
        columnLineCombo: "pivotColumnLineCombo",
        areaColumnCombo: "pivotAreaColumnCombo",
        customCombo: null
        // Not currently supported
      },
      hierarchicalGroup: {
        _key: "pivotHierarchicalChart",
        treemap: "pivotTreemap",
        sunburst: "pivotSunburst"
      },
      statisticalGroup: {
        _key: "pivotStatisticalChart",
        histogram: "pivotHistogram",
        // Some statistical charts do not currently support pivot mode
        rangeBar: null,
        rangeArea: null,
        boxPlot: null
      },
      // Polar charts do not support pivot mode
      polarGroup: null,
      // Specialized charts do not currently support pivot mode
      specializedGroup: null
    };
  }
};
var RangeMenuItemMapper = class {
  constructor(gos, chartService, localeService) {
    this.gos = gos;
    this.chartService = chartService;
    this.localeService = localeService;
  }
  getMenuItem() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const getMenuItem = (localeKey, defaultText, chartType, key, enterprise = false) => {
      return {
        name: localeTextFunc(localeKey, defaultText),
        action: () => this.chartService.createChartFromCurrentRange(chartType),
        _key: key,
        _enterprise: enterprise
      };
    };
    return {
      name: localeTextFunc("chartRange", "Chart Range"),
      _key: "chartRange",
      subMenu: [{
        name: localeTextFunc("columnChart", "Column"),
        subMenu: [getMenuItem("groupedColumn", "Grouped&lrm;", "groupedColumn", "rangeGroupedColumn"), getMenuItem("stackedColumn", "Stacked&lrm;", "stackedColumn", "rangeStackedColumn"), getMenuItem("normalizedColumn", "100% Stacked&lrm;", "normalizedColumn", "rangeNormalizedColumn")],
        _key: "rangeColumnChart"
      }, {
        name: localeTextFunc("barChart", "Bar"),
        subMenu: [getMenuItem("groupedBar", "Grouped&lrm;", "groupedBar", "rangeGroupedBar"), getMenuItem("stackedBar", "Stacked&lrm;", "stackedBar", "rangeStackedBar"), getMenuItem("normalizedBar", "100% Stacked&lrm;", "normalizedBar", "rangeNormalizedBar")],
        _key: "rangeBarChart"
      }, {
        name: localeTextFunc("pieChart", "Pie"),
        subMenu: [getMenuItem("pie", "Pie&lrm;", "pie", "rangePie"), getMenuItem("donut", "Donut&lrm;", "donut", "rangeDonut")],
        _key: "rangePieChart"
      }, getMenuItem("line", "Line&lrm;", "line", "rangeLineChart"), {
        name: localeTextFunc("xyChart", "X Y (Scatter)"),
        subMenu: [getMenuItem("scatter", "Scatter&lrm;", "scatter", "rangeScatter"), getMenuItem("bubble", "Bubble&lrm;", "bubble", "rangeBubble")],
        _key: "rangeXYChart"
      }, {
        name: localeTextFunc("areaChart", "Area"),
        subMenu: [getMenuItem("area", "Area&lrm;", "area", "rangeArea"), getMenuItem("stackedArea", "Stacked&lrm;", "stackedArea", "rangeStackedArea"), getMenuItem("normalizedArea", "100% Stacked&lrm;", "normalizedArea", "rangeNormalizedArea")],
        _key: "rangeAreaChart"
      }, {
        name: localeTextFunc("polarChart", "Polar"),
        subMenu: [getMenuItem("radarLine", "Radar Line&lrm;", "radarLine", "rangeRadarLine"), getMenuItem("radarArea", "Radar Area&lrm;", "radarArea", "rangeRadarArea"), getMenuItem("nightingale", "Nightingale&lrm;", "nightingale", "rangeNightingale"), getMenuItem("radialColumn", "Radial Column&lrm;", "radialColumn", "rangeRadialColumn"), getMenuItem("radialBar", "Radial Bar&lrm;", "radialBar", "rangeRadialBar")],
        _key: "rangePolarChart",
        _enterprise: true
      }, {
        name: localeTextFunc("statisticalChart", "Statistical"),
        subMenu: [getMenuItem("boxPlot", "Box Plot&lrm;", "boxPlot", "rangeBoxPlot", true), getMenuItem("histogramChart", "Histogram&lrm;", "histogram", "rangeHistogram", false), getMenuItem("rangeBar", "Range Bar&lrm;", "rangeBar", "rangeRangeBar", true), getMenuItem("rangeArea", "Range Area&lrm;", "rangeArea", "rangeRangeArea", true)],
        _key: "rangeStatisticalChart",
        _enterprise: false
        // histogram chart is available in both community and enterprise distributions
      }, {
        name: localeTextFunc("hierarchicalChart", "Hierarchical"),
        subMenu: [getMenuItem("treemap", "Treemap&lrm;", "treemap", "rangeTreemap"), getMenuItem("sunburst", "Sunburst&lrm;", "sunburst", "rangeSunburst")],
        _key: "rangeHierarchicalChart",
        _enterprise: true
      }, {
        name: localeTextFunc("specializedChart", "Specialized"),
        subMenu: [getMenuItem("heatmap", "Heatmap&lrm;", "heatmap", "rangeHeatmap"), getMenuItem("waterfall", "Waterfall&lrm;", "waterfall", "rangeWaterfall")],
        _key: "rangeSpecializedChart",
        _enterprise: true
      }, {
        name: localeTextFunc("combinationChart", "Combination"),
        subMenu: [getMenuItem("columnLineCombo", "Column & Line&lrm;", "columnLineCombo", "rangeColumnLineCombo"), getMenuItem("AreaColumnCombo", "Area & Column&lrm;", "areaColumnCombo", "rangeAreaColumnCombo")],
        _key: "rangeCombinationChart"
      }],
      icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("chart", this.gos, void 0)
    };
  }
  getConfigLookup() {
    return {
      columnGroup: {
        _key: "rangeColumnChart",
        column: "rangeGroupedColumn",
        stackedColumn: "rangeStackedColumn",
        normalizedColumn: "rangeNormalizedColumn"
      },
      barGroup: {
        _key: "rangeBarChart",
        bar: "rangeGroupedBar",
        stackedBar: "rangeStackedBar",
        normalizedBar: "rangeNormalizedBar"
      },
      pieGroup: {
        _key: "rangePieChart",
        pie: "rangePie",
        donut: "rangeDonut",
        doughnut: "rangeDonut"
      },
      lineGroup: {
        _key: "rangeLineChart",
        line: "rangeLineChart"
      },
      scatterGroup: {
        _key: "rangeXYChart",
        bubble: "rangeBubble",
        scatter: "rangeScatter"
      },
      areaGroup: {
        _key: "rangeAreaChart",
        area: "rangeArea",
        stackedArea: "rangeStackedArea",
        normalizedArea: "rangeNormalizedArea"
      },
      polarGroup: {
        _key: "rangePolarChart",
        radarLine: "rangeRadarLine",
        radarArea: "rangeRadarArea",
        nightingale: "rangeNightingale",
        radialColumn: "rangeRadialColumn",
        radialBar: "rangeRadialBar"
      },
      statisticalGroup: {
        _key: "rangeStatisticalChart",
        boxPlot: "rangeBoxPlot",
        histogram: "rangeHistogram",
        rangeBar: "rangeRangeBar",
        rangeArea: "rangeRangeArea"
      },
      hierarchicalGroup: {
        _key: "rangeHierarchicalChart",
        treemap: "rangeTreemap",
        sunburst: "rangeSunburst"
      },
      specializedGroup: {
        _key: "rangeSpecializedChart",
        heatmap: "rangeHeatmap",
        waterfall: "rangeWaterfall"
      },
      combinationGroup: {
        _key: "rangeCombinationChart",
        columnLineCombo: "rangeColumnLineCombo",
        areaColumnCombo: "rangeAreaColumnCombo",
        customCombo: null
        // Not currently supported
      }
    };
  }
};

// enterprise-modules/menu/src/menu/columnChooserFactory.ts



var ColumnChooserFactory = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "columnChooserFactory";
  }
  wireBeans(beans) {
    this.focusService = beans.focusService;
    this.menuUtils = beans.menuUtils;
    this.visibleColsService = beans.visibleColsService;
  }
  createColumnSelectPanel(parent, column, draggable, params) {
    const columnSelectPanel = parent.createManagedBean(new _ag_grid_enterprise_column_tool_panel__WEBPACK_IMPORTED_MODULE_2__.AgPrimaryCols());
    const columnChooserParams = params ?? column?.getColDef().columnChooserParams ?? column?.getColDef().columnsMenuParams ?? {};
    const {
      contractColumnSelection,
      suppressColumnExpandAll,
      suppressColumnFilter,
      suppressColumnSelectAll,
      suppressSyncLayoutWithGrid,
      columnLayout
    } = columnChooserParams;
    columnSelectPanel.init(!!draggable, this.gos.addGridCommonParams({
      suppressColumnMove: false,
      suppressValues: false,
      suppressPivots: false,
      suppressRowGroups: false,
      suppressPivotMode: false,
      contractColumnSelection: !!contractColumnSelection,
      suppressColumnExpandAll: !!suppressColumnExpandAll,
      suppressColumnFilter: !!suppressColumnFilter,
      suppressColumnSelectAll: !!suppressColumnSelectAll,
      suppressSyncLayoutWithGrid: !!columnLayout || !!suppressSyncLayoutWithGrid,
      onStateUpdated: () => {}
    }), "columnMenu");
    if (columnLayout) {
      columnSelectPanel.setColumnLayout(columnLayout);
    }
    return columnSelectPanel;
  }
  showColumnChooser({
    column,
    chooserParams,
    eventSource
  }) {
    this.hideActiveColumnChooser();
    const columnSelectPanel = this.createColumnSelectPanel(this, column, true, chooserParams);
    const translate = this.localeService.getLocaleTextFunc();
    const columnIndex = this.visibleColsService.getAllCols().indexOf(column);
    const headerPosition = column ? this.focusService.getFocusedHeader() : null;
    this.activeColumnChooserDialog = this.createBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.AgDialog({
      title: translate("chooseColumns", "Choose Columns"),
      component: columnSelectPanel,
      width: 300,
      height: 300,
      resizable: true,
      movable: true,
      centered: true,
      closable: true,
      afterGuiAttached: () => {
        this.focusService.findNextFocusableElement(columnSelectPanel.getGui())?.focus({
          preventScroll: true
        });
        this.dispatchVisibleChangedEvent(true, column);
      },
      closedCallback: event => {
        const eComp = this.activeColumnChooser.getGui();
        this.destroyBean(this.activeColumnChooser);
        this.activeColumnChooser = void 0;
        this.activeColumnChooserDialog = void 0;
        this.dispatchVisibleChangedEvent(false, column);
        if (column) {
          this.menuUtils.restoreFocusOnClose({
            column,
            headerPosition,
            columnIndex,
            eventSource
          }, eComp, event, true);
        }
      },
      postProcessPopupParams: {
        type: "columnChooser",
        column,
        eventSource
      }
    }));
    this.activeColumnChooser = columnSelectPanel;
  }
  hideActiveColumnChooser() {
    if (this.activeColumnChooserDialog) {
      this.destroyBean(this.activeColumnChooserDialog);
    }
  }
  dispatchVisibleChangedEvent(visible, column) {
    this.eventService.dispatchEvent({
      type: "columnMenuVisibleChanged",
      visible,
      switchingTab: false,
      key: "columnChooser",
      column: column ?? null
    });
  }
};

// enterprise-modules/menu/src/menu/columnMenuFactory.ts


var MENU_ITEM_SEPARATOR = "separator";
var ColumnMenuFactory = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "columnMenuFactory";
  }
  wireBeans(beans) {
    this.menuItemMapper = beans.menuItemMapper;
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
    this.menuService = beans.menuService;
  }
  createMenu(parent, menuItems, column, sourceElement) {
    const menuList = parent.createManagedBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.AgMenuList(0, {
      column: column ?? null,
      node: null,
      value: null
    }));
    const menuItemsMapped = this.menuItemMapper.mapWithStockItems(menuItems, column ?? null, sourceElement, "columnMenu");
    menuList.addMenuItems(menuItemsMapped);
    return menuList;
  }
  // columnGroup to be added
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMenuItems(column, columnGroup) {
    const defaultItems = this.getDefaultMenuOptions(column);
    let result;
    const columnMainMenuItems = column?.getColDef().mainMenuItems;
    if (Array.isArray(columnMainMenuItems)) {
      result = columnMainMenuItems;
    } else if (typeof columnMainMenuItems === "function") {
      result = columnMainMenuItems(this.gos.addGridCommonParams({
        column,
        defaultItems
      }));
    } else {
      const userFunc = this.gos.getCallback("getMainMenuItems");
      if (userFunc && column) {
        result = userFunc({
          column,
          defaultItems
        });
      } else {
        result = defaultItems;
      }
    }
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._removeRepeatsFromArray)(result, MENU_ITEM_SEPARATOR);
    return result;
  }
  getDefaultMenuOptions(column) {
    const result = [];
    const isLegacyMenuEnabled = this.menuService.isLegacyMenuEnabled();
    if (!column) {
      if (!isLegacyMenuEnabled) {
        result.push("columnChooser");
      }
      result.push("resetColumns");
      return result;
    }
    const allowPinning = !column.getColDef().lockPinned;
    const rowGroupCount = this.funcColsService.getRowGroupColumns().length;
    const doingGrouping = rowGroupCount > 0;
    const allowValue = column.isAllowValue();
    const allowRowGroup = column.isAllowRowGroup();
    const isPrimary = column.isPrimary();
    const pivotModeOn = this.columnModel.isPivotMode();
    const isInMemoryRowModel = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isClientSideRowModel)(this.gos);
    const usingTreeData = this.gos.get("treeData");
    const allowValueAgg =
    // if primary, then only allow aggValue if grouping and it's a value columns
    isPrimary && doingGrouping && allowValue ||
    // secondary columns can always have aggValue, as it means it's a pivot value column
    !isPrimary;
    if (!isLegacyMenuEnabled && column.isSortable()) {
      const sort = column.getSort();
      if (sort !== "asc") {
        result.push("sortAscending");
      }
      if (sort !== "desc") {
        result.push("sortDescending");
      }
      if (sort) {
        result.push("sortUnSort");
      }
      result.push(MENU_ITEM_SEPARATOR);
    }
    if (this.menuService.isFilterMenuItemEnabled(column)) {
      result.push("columnFilter");
      result.push(MENU_ITEM_SEPARATOR);
    }
    if (allowPinning) {
      result.push("pinSubMenu");
    }
    if (allowValueAgg) {
      result.push("valueAggSubMenu");
    }
    if (allowPinning || allowValueAgg) {
      result.push(MENU_ITEM_SEPARATOR);
    }
    result.push("autoSizeThis");
    result.push("autoSizeAll");
    result.push(MENU_ITEM_SEPARATOR);
    const showRowGroup = column.getColDef().showRowGroup;
    if (showRowGroup) {
      result.push("rowUnGroup");
    } else if (allowRowGroup && column.isPrimary()) {
      if (column.isRowGroupActive()) {
        const groupLocked = this.columnModel.isColGroupLocked(column);
        if (!groupLocked) {
          result.push("rowUnGroup");
        }
      } else {
        result.push("rowGroup");
      }
    }
    result.push(MENU_ITEM_SEPARATOR);
    if (!isLegacyMenuEnabled) {
      result.push("columnChooser");
    }
    result.push("resetColumns");
    const allowExpandAndContract = isInMemoryRowModel && (usingTreeData || rowGroupCount > (pivotModeOn ? 1 : 0));
    if (allowExpandAndContract) {
      result.push("expandAll");
      result.push("contractAll");
    }
    return result;
  }
};

// enterprise-modules/menu/src/menu/contextMenu.ts


var CSS_MENU = "ag-menu";
var CSS_CONTEXT_MENU_OPEN = "ag-context-menu-open";
var ContextMenuFactory = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "contextMenuFactory";
  }
  wireBeans(beans) {
    this.popupService = beans.popupService;
    this.ctrlsService = beans.ctrlsService;
    this.columnModel = beans.columnModel;
    this.menuUtils = beans.menuUtils;
    this.rangeService = beans.rangeService;
    this.focusService = beans.focusService;
  }
  hideActiveMenu() {
    this.destroyBean(this.activeMenu);
  }
  getMenuItems(node, column, value) {
    const defaultMenuOptions = [];
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._exists)(node) && this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ClipboardModule)) {
      if (column) {
        if (!this.gos.get("suppressCutToClipboard")) {
          defaultMenuOptions.push("cut");
        }
        defaultMenuOptions.push("copy", "copyWithHeaders", "copyWithGroupHeaders", "paste", "separator");
      }
    }
    if (this.gos.get("enableCharts") && this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.GridChartsModule)) {
      if (this.columnModel.isPivotMode()) {
        defaultMenuOptions.push("pivotChart");
      }
      if (this.rangeService && !this.rangeService.isEmpty()) {
        defaultMenuOptions.push("chartRange");
      }
    }
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._exists)(node)) {
      const csvModuleMissing = !this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.CsvExportModule);
      const excelModuleMissing = !this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ExcelExportModule);
      const suppressExcel = this.gos.get("suppressExcelExport") || excelModuleMissing;
      const suppressCsv = this.gos.get("suppressCsvExport") || csvModuleMissing;
      const onIPad = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isIOSUserAgent)();
      const anyExport = !onIPad && (!suppressExcel || !suppressCsv);
      if (anyExport) {
        defaultMenuOptions.push("export");
      }
    }
    const defaultItems = defaultMenuOptions.length ? defaultMenuOptions : void 0;
    const columnContextMenuItems = column?.getColDef().contextMenuItems;
    if (Array.isArray(columnContextMenuItems)) {
      return columnContextMenuItems;
    }
    if (typeof columnContextMenuItems === "function") {
      return columnContextMenuItems(this.gos.addGridCommonParams({
        column,
        node,
        value,
        defaultItems
      }));
    }
    const userFunc = this.gos.getCallback("getContextMenuItems");
    if (userFunc) {
      return userFunc({
        column,
        node,
        value,
        defaultItems
      });
    }
    return defaultMenuOptions;
  }
  onContextMenu(mouseEvent, touchEvent, rowNode, column, value, anchorToElement) {
    this.menuUtils.onContextMenu(mouseEvent, touchEvent, eventOrTouch => this.showMenu(rowNode, column, value, eventOrTouch, anchorToElement));
  }
  showMenu(node, column, value, mouseEvent, anchorToElement) {
    const menuItems = this.getMenuItems(node, column, value);
    const eGridBodyGui = this.ctrlsService.getGridBodyCtrl().getGui();
    if (menuItems === void 0 || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._missingOrEmpty)(menuItems)) {
      return false;
    }
    const menu = new ContextMenu(menuItems, column, node, value);
    this.createBean(menu);
    const eMenuGui = menu.getGui();
    if (!column) {
      this.focusService.clearFocusedCell();
    }
    const positionParams = {
      column,
      rowNode: node,
      type: "contextMenu",
      mouseEvent,
      ePopup: eMenuGui,
      // move one pixel away so that accidentally double clicking
      // won't show the browser's contextmenu
      nudgeY: 1
    };
    const translate = this.localeService.getLocaleTextFunc();
    const addPopupRes = this.popupService.addPopup({
      modal: true,
      eChild: eMenuGui,
      closeOnEsc: true,
      closedCallback: e => {
        eGridBodyGui.classList.remove(CSS_CONTEXT_MENU_OPEN);
        this.destroyBean(menu);
        this.dispatchVisibleChangedEvent(false, e === void 0 ? "api" : "ui");
      },
      click: mouseEvent,
      positionCallback: () => {
        const isRtl = this.gos.get("enableRtl");
        this.popupService.positionPopupUnderMouseEvent({
          ...positionParams,
          nudgeX: isRtl ? (eMenuGui.offsetWidth + 1) * -1 : 1
        });
      },
      // so when browser is scrolled down, or grid is scrolled, context menu stays with cell
      anchorToElement,
      ariaLabel: translate("ariaLabelContextMenu", "Context Menu")
    });
    if (addPopupRes) {
      eGridBodyGui.classList.add(CSS_CONTEXT_MENU_OPEN);
      menu.afterGuiAttached({
        container: "contextMenu",
        hidePopup: addPopupRes.hideFunc
      });
    }
    if (this.activeMenu) {
      this.hideActiveMenu();
    }
    this.activeMenu = menu;
    menu.addEventListener("destroyed", () => {
      if (this.activeMenu === menu) {
        this.activeMenu = null;
      }
    });
    if (addPopupRes) {
      menu.addEventListener("closeMenu", e => addPopupRes.hideFunc({
        mouseEvent: e.mouseEvent ?? void 0,
        keyboardEvent: e.keyboardEvent ?? void 0,
        forceHide: true
      }));
    }
    const isApi = mouseEvent && mouseEvent instanceof MouseEvent && mouseEvent.type === "mousedown";
    this.dispatchVisibleChangedEvent(true, isApi ? "api" : "ui");
    return true;
  }
  dispatchVisibleChangedEvent(visible, source = "ui") {
    this.eventService.dispatchEvent({
      type: "contextMenuVisibleChanged",
      visible,
      source
    });
  }
};
var ContextMenu = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(menuItems, column, node, value) {
    super(/* html */
    `<div class="${CSS_MENU}" role="presentation"></div>`);
    this.menuItems = menuItems;
    this.column = column;
    this.node = node;
    this.value = value;
    this.menuList = null;
    this.focusedCell = null;
  }
  wireBeans(beans) {
    this.focusService = beans.focusService;
    this.menuItemMapper = beans.menuItemMapper;
    this.cellPositionUtils = beans.cellPositionUtils;
  }
  postConstruct() {
    const menuList = this.createManagedBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.AgMenuList(0, {
      column: this.column,
      node: this.node,
      value: this.value
    }));
    const menuItemsMapped = this.menuItemMapper.mapWithStockItems(this.menuItems, null, () => this.getGui(), "contextMenu");
    menuList.addMenuItems(menuItemsMapped);
    this.appendChild(menuList);
    this.menuList = menuList;
    menuList.addEventListener("closeMenu", e => this.dispatchLocalEvent(e));
  }
  afterGuiAttached(params) {
    if (params.hidePopup) {
      this.addDestroyFunc(params.hidePopup);
    }
    this.focusedCell = this.focusService.getFocusedCell();
    if (this.menuList) {
      this.focusService.focusInto(this.menuList.getGui());
    }
  }
  restoreFocusedCell() {
    const currentFocusedCell = this.focusService.getFocusedCell();
    if (currentFocusedCell && this.focusedCell && this.cellPositionUtils.equals(currentFocusedCell, this.focusedCell)) {
      const {
        rowIndex,
        rowPinned,
        column
      } = this.focusedCell;
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isNothingFocused)(this.gos)) {
        this.focusService.setFocusedCell({
          rowIndex,
          column,
          rowPinned,
          forceBrowserFocus: true,
          preventScrollOnBrowserFocus: !this.focusService.isKeyboardMode()
        });
      }
    }
  }
  destroy() {
    this.restoreFocusedCell();
    super.destroy();
  }
};

// enterprise-modules/menu/src/menu/enterpriseMenu.ts


var TAB_FILTER = "filterMenuTab";
var TAB_GENERAL = "generalMenuTab";
var TAB_COLUMNS = "columnsMenuTab";
var TABS_DEFAULT = [TAB_GENERAL, TAB_FILTER, TAB_COLUMNS];
var EnterpriseMenuFactory = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "enterpriseMenuFactory";
  }
  wireBeans(beans) {
    this.popupService = beans.popupService;
    this.focusService = beans.focusService;
    this.ctrlsService = beans.ctrlsService;
    this.visibleColsService = beans.visibleColsService;
    this.filterManager = beans.filterManager;
    this.menuUtils = beans.menuUtils;
    this.menuService = beans.menuService;
    this.columnMenuFactory = beans.columnMenuFactory;
  }
  hideActiveMenu() {
    this.destroyBean(this.activeMenu);
  }
  showMenuAfterMouseEvent(columnOrGroup, mouseEvent, containerType, filtersOnly) {
    const {
      column,
      columnGroup
    } = this.splitColumnOrGroup(columnOrGroup);
    const defaultTab = filtersOnly ? "filterMenuTab" : void 0;
    this.showMenu(column, columnGroup, menu => {
      const ePopup = menu.getGui();
      this.popupService.positionPopupUnderMouseEvent({
        type: containerType,
        column,
        mouseEvent,
        ePopup
      });
      if (defaultTab) {
        menu.showTab?.(defaultTab);
      }
      this.dispatchVisibleChangedEvent(true, false, column, columnGroup, defaultTab);
    }, containerType, defaultTab, void 0, mouseEvent.target);
  }
  splitColumnOrGroup(columnOrGroup) {
    const colIsColumn = columnOrGroup && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.isColumn)(columnOrGroup);
    const column = colIsColumn ? columnOrGroup : void 0;
    const columnGroup = colIsColumn ? void 0 : columnOrGroup;
    return {
      column,
      columnGroup
    };
  }
  showMenuAfterButtonClick(columnOrGroup, eventSource, containerType, filtersOnly) {
    let multiplier = -1;
    let alignSide = "left";
    if (this.gos.get("enableRtl")) {
      multiplier = 1;
      alignSide = "right";
    }
    const defaultTab = filtersOnly ? "filterMenuTab" : void 0;
    const restrictToTabs = defaultTab ? [defaultTab] : void 0;
    const isLegacyMenuEnabled = this.menuService.isLegacyMenuEnabled();
    const nudgeX = (isLegacyMenuEnabled ? 9 : 4) * multiplier;
    const nudgeY = isLegacyMenuEnabled ? -23 : 4;
    const {
      column,
      columnGroup
    } = this.splitColumnOrGroup(columnOrGroup);
    this.showMenu(column, columnGroup, menu => {
      const ePopup = menu.getGui();
      this.popupService.positionPopupByComponent({
        type: containerType,
        column,
        eventSource,
        ePopup,
        alignSide,
        nudgeX,
        nudgeY,
        position: "under",
        keepWithinBounds: true
      });
      if (defaultTab) {
        menu.showTab?.(defaultTab);
      }
      this.dispatchVisibleChangedEvent(true, false, column, columnGroup, defaultTab);
    }, containerType, defaultTab, restrictToTabs, eventSource);
  }
  showMenu(column, columnGroup, positionCallback, containerType, defaultTab, restrictToTabs, eventSource) {
    const menuParams = this.getMenuParams(column, columnGroup, restrictToTabs, eventSource);
    if (!menuParams) {
      return;
    }
    const {
      menu,
      eMenuGui,
      anchorToElement,
      restoreFocusParams
    } = menuParams;
    const closedFuncs = [];
    closedFuncs.push(e => {
      const eComp = menu.getGui();
      this.destroyBean(menu);
      if (column) {
        column.setMenuVisible(false, "contextMenu");
        this.menuUtils.restoreFocusOnClose(restoreFocusParams, eComp, e);
      }
    });
    const translate = this.localeService.getLocaleTextFunc();
    this.popupService.addPopup({
      modal: true,
      eChild: eMenuGui,
      closeOnEsc: true,
      closedCallback: e => {
        closedFuncs.forEach(f => f(e));
        this.dispatchVisibleChangedEvent(false, false, column, columnGroup, defaultTab);
      },
      afterGuiAttached: params => menu.afterGuiAttached(Object.assign({}, {
        container: containerType
      }, params)),
      // if defaultTab is not present, positionCallback will be called
      // after `showTabBasedOnPreviousSelection` is called.
      positionCallback: defaultTab ? () => positionCallback(menu) : void 0,
      ariaLabel: translate("ariaLabelColumnMenu", "Column Menu")
    });
    if (!defaultTab) {
      menu.showTabBasedOnPreviousSelection?.();
      positionCallback(menu);
    }
    if (this.menuService.isColumnMenuAnchoringEnabled()) {
      const stopAnchoringPromise = this.popupService.setPopupPositionRelatedToElement(eMenuGui, anchorToElement);
      if (stopAnchoringPromise && column) {
        this.addStopAnchoring(stopAnchoringPromise, column, closedFuncs);
      }
    }
    menu.addEventListener("tabSelected", event => {
      this.dispatchVisibleChangedEvent(false, true, column);
      this.lastSelectedTab = event.key;
      this.dispatchVisibleChangedEvent(true, true, column);
    });
    column?.setMenuVisible(true, "contextMenu");
    this.activeMenu = menu;
    menu.addEventListener("destroyed", () => {
      if (this.activeMenu === menu) {
        this.activeMenu = null;
      }
    });
  }
  addStopAnchoring(stopAnchoringPromise, column, closedFuncsArr) {
    stopAnchoringPromise.then(stopAnchoringFunc => {
      column.addEventListener("leftChanged", stopAnchoringFunc);
      column.addEventListener("visibleChanged", stopAnchoringFunc);
      closedFuncsArr.push(() => {
        column.removeEventListener("leftChanged", stopAnchoringFunc);
        column.removeEventListener("visibleChanged", stopAnchoringFunc);
      });
    });
  }
  getMenuParams(column, columnGroup, restrictToTabs, eventSource) {
    const restoreFocusParams = {
      column,
      headerPosition: this.focusService.getFocusedHeader(),
      columnIndex: this.visibleColsService.getAllCols().indexOf(column),
      eventSource
    };
    const menu = this.createMenu(column, columnGroup, restoreFocusParams, restrictToTabs, eventSource);
    return menu ? {
      menu,
      eMenuGui: menu.getGui(),
      anchorToElement: eventSource || this.ctrlsService.getGridBodyCtrl().getGui(),
      restoreFocusParams
    } : void 0;
  }
  createMenu(column, columnGroup, restoreFocusParams, restrictToTabs, eventSource) {
    if (this.menuService.isLegacyMenuEnabled()) {
      return this.createBean(new TabbedColumnMenu(column, restoreFocusParams, this.lastSelectedTab, restrictToTabs, eventSource));
    } else {
      const menuItems = this.columnMenuFactory.getMenuItems(column, columnGroup);
      return menuItems.length ? this.createBean(new ColumnContextMenu(menuItems, column, restoreFocusParams, eventSource)) : void 0;
    }
  }
  dispatchVisibleChangedEvent(visible, switchingTab, column, columnGroup, defaultTab) {
    this.eventService.dispatchEvent({
      type: "columnMenuVisibleChanged",
      visible,
      switchingTab,
      key: this.lastSelectedTab ?? defaultTab ?? (this.menuService.isLegacyMenuEnabled() ? TAB_GENERAL : "columnMenu"),
      column: column ?? null,
      columnGroup: columnGroup ?? null
    });
  }
  isMenuEnabled(column) {
    if (!this.menuService.isLegacyMenuEnabled()) {
      return true;
    }
    const isFilterDisabled = !this.filterManager?.isFilterAllowed(column);
    const tabs = column.getColDef().menuTabs ?? TABS_DEFAULT;
    const numActiveTabs = isFilterDisabled && tabs.includes(TAB_FILTER) ? tabs.length - 1 : tabs.length;
    return numActiveTabs > 0;
  }
  showMenuAfterContextMenuEvent(column, mouseEvent, touchEvent) {
    this.menuUtils.onContextMenu(mouseEvent, touchEvent, eventOrTouch => {
      this.showMenuAfterMouseEvent(column, eventOrTouch, "columnMenu");
      return true;
    });
  }
};
var TabbedColumnMenu = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor(column, restoreFocusParams, initialSelection, restrictTo, sourceElement) {
    super();
    this.column = column;
    this.restoreFocusParams = restoreFocusParams;
    this.initialSelection = initialSelection;
    this.restrictTo = restrictTo;
    this.sourceElement = sourceElement;
    this.tabFactories = {};
    this.includeChecks = {};
    this.tabFactories[TAB_GENERAL] = this.createMainPanel.bind(this);
    this.tabFactories[TAB_FILTER] = this.createFilterPanel.bind(this);
    this.tabFactories[TAB_COLUMNS] = this.createColumnsPanel.bind(this);
    this.includeChecks[TAB_GENERAL] = () => true;
    this.includeChecks[TAB_FILTER] = () => column ? !!this.filterManager?.isFilterAllowed(column) : false;
    this.includeChecks[TAB_COLUMNS] = () => true;
  }
  wireBeans(beans) {
    this.filterManager = beans.filterManager;
    this.columnChooserFactory = beans.columnChooserFactory;
    this.columnMenuFactory = beans.columnMenuFactory;
    this.menuUtils = beans.menuUtils;
  }
  postConstruct() {
    const tabs = this.getTabsToCreate().map(name => this.createTab(name));
    this.tabbedLayout = new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.TabbedLayout({
      items: tabs,
      cssClass: "ag-menu",
      onActiveItemClicked: this.onHidePopup.bind(this),
      onItemClicked: this.onTabItemClicked.bind(this)
    });
    this.createBean(this.tabbedLayout);
    if (this.mainMenuList) {
      this.mainMenuList.setParentComponent(this.tabbedLayout);
    }
    this.addDestroyFunc(() => this.destroyBean(this.tabbedLayout));
  }
  getTabsToCreate() {
    if (this.restrictTo) {
      return this.restrictTo;
    }
    return (this.column?.getColDef().menuTabs ?? TABS_DEFAULT).filter(tabName => this.isValidMenuTabItem(tabName)).filter(tabName => this.isNotSuppressed(tabName)).filter(tabName => this.isModuleLoaded(tabName));
  }
  isModuleLoaded(menuTabName) {
    if (menuTabName === TAB_COLUMNS) {
      return this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ColumnsToolPanelModule);
    }
    return true;
  }
  isValidMenuTabItem(menuTabName) {
    let isValid = true;
    let itemsToConsider = TABS_DEFAULT;
    if (this.restrictTo != null) {
      isValid = this.restrictTo.indexOf(menuTabName) > -1;
      itemsToConsider = this.restrictTo;
    }
    isValid = isValid && TABS_DEFAULT.indexOf(menuTabName) > -1;
    if (!isValid) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`Trying to render an invalid menu item '${menuTabName}'. Check that your 'menuTabs' contains one of [${itemsToConsider}]`);
    }
    return isValid;
  }
  isNotSuppressed(menuTabName) {
    return this.includeChecks[menuTabName]();
  }
  createTab(name) {
    return this.tabFactories[name]();
  }
  showTabBasedOnPreviousSelection() {
    this.showTab(this.initialSelection);
  }
  showTab(toShow) {
    if (this.tabItemColumns && toShow === TAB_COLUMNS) {
      this.tabbedLayout.showItem(this.tabItemColumns);
    } else if (this.tabItemFilter && toShow === TAB_FILTER) {
      this.tabbedLayout.showItem(this.tabItemFilter);
    } else if (this.tabItemGeneral && toShow === TAB_GENERAL) {
      this.tabbedLayout.showItem(this.tabItemGeneral);
    } else {
      this.tabbedLayout.showFirstItem();
    }
  }
  onTabItemClicked(event) {
    let key = null;
    switch (event.item) {
      case this.tabItemColumns:
        key = TAB_COLUMNS;
        break;
      case this.tabItemFilter:
        key = TAB_FILTER;
        break;
      case this.tabItemGeneral:
        key = TAB_GENERAL;
        break;
    }
    if (key) {
      this.activateTab(key);
    }
  }
  activateTab(tab) {
    const ev = {
      type: "tabSelected",
      key: tab
    };
    this.dispatchLocalEvent(ev);
  }
  createMainPanel() {
    this.mainMenuList = this.columnMenuFactory.createMenu(this, this.columnMenuFactory.getMenuItems(this.column), this.column, () => this.sourceElement ?? this.getGui());
    this.mainMenuList.addEventListener("closeMenu", this.onHidePopup.bind(this));
    this.tabItemGeneral = {
      title: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("menu", this.gos, this.column),
      titleLabel: TAB_GENERAL.replace("MenuTab", ""),
      bodyPromise: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.AgPromise.resolve(this.mainMenuList.getGui()),
      name: TAB_GENERAL
    };
    return this.tabItemGeneral;
  }
  onHidePopup(event) {
    this.menuUtils.closePopupAndRestoreFocusOnSelect(this.hidePopupFunc, this.restoreFocusParams, event);
  }
  createFilterPanel() {
    const comp = this.column ? this.createBean(new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.FilterWrapperComp(this.column, "COLUMN_MENU")) : null;
    this.filterComp = comp;
    if (!comp?.hasFilter()) {
      throw new Error("AG Grid - Unable to instantiate filter");
    }
    const afterAttachedCallback = params => comp.afterGuiAttached(params);
    const afterDetachedCallback = () => comp.afterGuiDetached();
    this.tabItemFilter = {
      title: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("filter", this.gos, this.column),
      titleLabel: TAB_FILTER.replace("MenuTab", ""),
      bodyPromise: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.AgPromise.resolve(comp?.getGui()),
      afterAttachedCallback,
      afterDetachedCallback,
      name: TAB_FILTER
    };
    return this.tabItemFilter;
  }
  createColumnsPanel() {
    const eWrapperDiv = document.createElement("div");
    eWrapperDiv.classList.add("ag-menu-column-select-wrapper");
    const columnSelectPanel = this.columnChooserFactory.createColumnSelectPanel(this, this.column);
    const columnSelectPanelGui = columnSelectPanel.getGui();
    columnSelectPanelGui.classList.add("ag-menu-column-select");
    eWrapperDiv.appendChild(columnSelectPanelGui);
    this.tabItemColumns = {
      title: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("columns", this.gos, this.column),
      //createColumnsIcon(),
      titleLabel: TAB_COLUMNS.replace("MenuTab", ""),
      bodyPromise: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.AgPromise.resolve(eWrapperDiv),
      name: TAB_COLUMNS
    };
    return this.tabItemColumns;
  }
  afterGuiAttached(params) {
    const {
      container,
      hidePopup
    } = params;
    this.tabbedLayout.setAfterAttachedParams({
      container,
      hidePopup
    });
    if (hidePopup) {
      this.hidePopupFunc = hidePopup;
      this.addDestroyFunc(hidePopup);
    }
  }
  getGui() {
    return this.tabbedLayout.getGui();
  }
  destroy() {
    super.destroy();
    this.destroyBean(this.filterComp);
  }
};
var ColumnContextMenu = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(menuItems, column, restoreFocusParams, sourceElement) {
    super(/* html */
    `
            <div data-ref="eColumnMenu" role="presentation" class="ag-menu ag-column-menu"></div>
        `);
    this.menuItems = menuItems;
    this.column = column;
    this.restoreFocusParams = restoreFocusParams;
    this.sourceElement = sourceElement;
    this.eColumnMenu = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.columnMenuFactory = beans.columnMenuFactory;
    this.menuUtils = beans.menuUtils;
    this.focusService = beans.focusService;
  }
  postConstruct() {
    this.mainMenuList = this.columnMenuFactory.createMenu(this, this.menuItems, this.column, () => this.sourceElement ?? this.getGui());
    this.mainMenuList.addEventListener("closeMenu", this.onHidePopup.bind(this));
    this.eColumnMenu.appendChild(this.mainMenuList.getGui());
  }
  onHidePopup(event) {
    this.menuUtils.closePopupAndRestoreFocusOnSelect(this.hidePopupFunc, this.restoreFocusParams, event);
  }
  afterGuiAttached({
    hidePopup
  }) {
    if (hidePopup) {
      this.hidePopupFunc = hidePopup;
      this.addDestroyFunc(hidePopup);
    }
    this.focusService.focusInto(this.mainMenuList.getGui());
  }
};

// enterprise-modules/menu/src/menu/menuApi.ts
function showContextMenu(beans, params) {
  const {
    rowNode,
    column,
    value,
    x,
    y
  } = params || {};
  let {
    x: clientX,
    y: clientY
  } = beans.menuService.getContextMenuPosition(rowNode, column);
  if (x != null) {
    clientX = x;
  }
  if (y != null) {
    clientY = y;
  }
  beans.menuService.showContextMenu({
    mouseEvent: new MouseEvent("mousedown", {
      clientX,
      clientY
    }),
    rowNode,
    column,
    value
  });
}
function showColumnChooser(beans, params) {
  beans.menuService.showColumnChooser({
    chooserParams: params
  });
}
function hideColumnChooser(beans) {
  beans.menuService.hideColumnChooser();
}

// enterprise-modules/menu/src/menu/menuItemMapper.ts

var MenuItemMapper = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "menuItemMapper";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.columnApplyStateService = beans.columnApplyStateService;
    this.funcColsService = beans.funcColsService;
    this.focusService = beans.focusService;
    this.rowPositionUtils = beans.rowPositionUtils;
    this.chartMenuItemMapper = beans.chartMenuItemMapper;
    this.menuService = beans.menuService;
    this.sortController = beans.sortController;
    this.columnAutosizeService = beans.columnAutosizeService;
    this.expansionService = beans.expansionService;
    this.clipboardService = beans.clipboardService;
    this.aggFuncService = beans.aggFuncService;
    this.csvCreator = beans.csvCreator;
    this.excelCreator = beans.excelCreator;
  }
  mapWithStockItems(originalList, column, sourceElement, source) {
    if (!originalList) {
      return [];
    }
    const resultList = [];
    originalList.forEach(menuItemOrString => {
      let result;
      if (typeof menuItemOrString === "string") {
        result = this.getStockMenuItem(menuItemOrString, column, sourceElement, source);
      } else {
        result = {
          ...menuItemOrString
        };
      }
      if (!result) {
        return;
      }
      const resultDef = result;
      const {
        subMenu
      } = resultDef;
      if (subMenu && subMenu instanceof Array) {
        resultDef.subMenu = this.mapWithStockItems(subMenu, column, sourceElement, source);
      }
      if (result != null) {
        resultList.push(result);
      }
    });
    return resultList;
  }
  getStockMenuItem(key, column, sourceElement, source) {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const skipHeaderOnAutoSize = this.gos.get("skipHeaderOnAutoSize");
    switch (key) {
      case "pinSubMenu":
        return {
          name: localeTextFunc("pinColumn", "Pin Column"),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("menuPin", this.gos, null),
          subMenu: ["clearPinned", "pinLeft", "pinRight"]
        };
      case "pinLeft":
        return {
          name: localeTextFunc("pinLeft", "Pin Left"),
          action: () => this.columnModel.setColsPinned([column], "left", source),
          checked: !!column && column.isPinnedLeft()
        };
      case "pinRight":
        return {
          name: localeTextFunc("pinRight", "Pin Right"),
          action: () => this.columnModel.setColsPinned([column], "right", source),
          checked: !!column && column.isPinnedRight()
        };
      case "clearPinned":
        return {
          name: localeTextFunc("noPin", "No Pin"),
          action: () => this.columnModel.setColsPinned([column], null, source),
          checked: !!column && !column.isPinned()
        };
      case "valueAggSubMenu":
        if (this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.RowGroupingModule, "Aggregation from Menu")) {
          if (!column?.isPrimary() && !column?.getColDef().pivotValueColumn) {
            return null;
          }
          return {
            name: localeTextFunc("valueAggregation", "Value Aggregation"),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("menuValue", this.gos, null),
            subMenu: this.createAggregationSubMenu(column, this.aggFuncService),
            disabled: this.gos.get("functionsReadOnly")
          };
        } else {
          return null;
        }
      case "autoSizeThis":
        return {
          name: localeTextFunc("autosizeThisColumn", "Autosize This Column"),
          action: () => this.columnAutosizeService.autoSizeColumn(column, source, skipHeaderOnAutoSize)
        };
      case "autoSizeAll":
        return {
          name: localeTextFunc("autosizeAllColumns", "Autosize All Columns"),
          action: () => this.columnAutosizeService.autoSizeAllColumns(source, skipHeaderOnAutoSize)
        };
      case "rowGroup":
        return {
          name: localeTextFunc("groupBy", "Group by") + " " + (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(this.columnNameService.getDisplayNameForColumn(column, "header")),
          disabled: this.gos.get("functionsReadOnly") || column?.isRowGroupActive() || !column?.getColDef().enableRowGroup,
          action: () => this.funcColsService.addRowGroupColumns([column], source),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("menuAddRowGroup", this.gos, null)
        };
      case "rowUnGroup":
        {
          const icon = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("menuRemoveRowGroup", this.gos, null);
          const showRowGroup = column?.getColDef().showRowGroup;
          const lockedGroups = this.gos.get("groupLockGroupColumns");
          if (showRowGroup === true) {
            return {
              name: localeTextFunc("ungroupAll", "Un-Group All"),
              disabled: this.gos.get("functionsReadOnly") || lockedGroups === -1 || lockedGroups >= this.funcColsService.getRowGroupColumns().length,
              action: () => this.funcColsService.setRowGroupColumns(this.funcColsService.getRowGroupColumns().slice(0, lockedGroups), source),
              icon
            };
          }
          if (typeof showRowGroup === "string") {
            const underlyingColumn = this.columnModel.getColDefCol(showRowGroup);
            const ungroupByName = underlyingColumn != null ? (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(this.columnNameService.getDisplayNameForColumn(underlyingColumn, "header")) : showRowGroup;
            return {
              name: localeTextFunc("ungroupBy", "Un-Group by") + " " + ungroupByName,
              disabled: this.gos.get("functionsReadOnly") || underlyingColumn != null && this.columnModel.isColGroupLocked(underlyingColumn),
              action: () => this.funcColsService.removeRowGroupColumns([showRowGroup], source),
              icon
            };
          }
          return {
            name: localeTextFunc("ungroupBy", "Un-Group by") + " " + (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._escapeString)(this.columnNameService.getDisplayNameForColumn(column, "header")),
            disabled: this.gos.get("functionsReadOnly") || !column?.isRowGroupActive() || !column?.getColDef().enableRowGroup || this.columnModel.isColGroupLocked(column),
            action: () => this.funcColsService.removeRowGroupColumns([column], source),
            icon
          };
        }
      case "resetColumns":
        return {
          name: localeTextFunc("resetColumns", "Reset Columns"),
          action: () => this.columnApplyStateService.resetColumnState(source)
        };
      case "expandAll":
        return {
          name: localeTextFunc("expandAll", "Expand All Row Groups"),
          action: () => this.expansionService.expandAll(true)
        };
      case "contractAll":
        return {
          name: localeTextFunc("collapseAll", "Collapse All Row Groups"),
          action: () => this.expansionService.expandAll(false)
        };
      case "copy":
        if (this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ClipboardModule, "Copy from Menu")) {
          return {
            name: localeTextFunc("copy", "Copy"),
            shortcut: localeTextFunc("ctrlC", "Ctrl+C"),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("clipboardCopy", this.gos, null),
            action: () => this.clipboardService.copyToClipboard()
          };
        } else {
          return null;
        }
      case "copyWithHeaders":
        if (this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ClipboardModule, "Copy with Headers from Menu")) {
          return {
            name: localeTextFunc("copyWithHeaders", "Copy with Headers"),
            // shortcut: localeTextFunc('ctrlC','Ctrl+C'),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("clipboardCopy", this.gos, null),
            action: () => this.clipboardService.copyToClipboard({
              includeHeaders: true
            })
          };
        } else {
          return null;
        }
      case "copyWithGroupHeaders":
        if (this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ClipboardModule, "Copy with Group Headers from Menu")) {
          return {
            name: localeTextFunc("copyWithGroupHeaders", "Copy with Group Headers"),
            // shortcut: localeTextFunc('ctrlC','Ctrl+C'),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("clipboardCopy", this.gos, null),
            action: () => this.clipboardService.copyToClipboard({
              includeHeaders: true,
              includeGroupHeaders: true
            })
          };
        } else {
          return null;
        }
      case "cut":
        if (this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ClipboardModule, "Cut from Menu")) {
          const focusedCell = this.focusService.getFocusedCell();
          const rowNode = focusedCell ? this.rowPositionUtils.getRowNode(focusedCell) : null;
          const isEditable = rowNode ? focusedCell?.column.isCellEditable(rowNode) : false;
          return {
            name: localeTextFunc("cut", "Cut"),
            shortcut: localeTextFunc("ctrlX", "Ctrl+X"),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("clipboardCut", this.gos, null),
            disabled: !isEditable || this.gos.get("suppressCutToClipboard"),
            action: () => this.clipboardService.cutToClipboard(void 0, "contextMenu")
          };
        } else {
          return null;
        }
      case "paste":
        if (this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ClipboardModule, "Paste from Clipboard")) {
          return {
            name: localeTextFunc("paste", "Paste"),
            shortcut: localeTextFunc("ctrlV", "Ctrl+V"),
            disabled: true,
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("clipboardPaste", this.gos, null),
            action: () => this.clipboardService.pasteFromClipboard()
          };
        } else {
          return null;
        }
      case "export":
        {
          const exportSubMenuItems = [];
          const csvModuleLoaded = this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.CsvExportModule);
          const excelModuleLoaded = this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ExcelExportModule);
          if (!this.gos.get("suppressCsvExport") && csvModuleLoaded) {
            exportSubMenuItems.push("csvExport");
          }
          if (!this.gos.get("suppressExcelExport") && excelModuleLoaded) {
            exportSubMenuItems.push("excelExport");
          }
          return {
            name: localeTextFunc("export", "Export"),
            subMenu: exportSubMenuItems,
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("save", this.gos, null)
          };
        }
      case "csvExport":
        return {
          name: localeTextFunc("csvExport", "CSV Export"),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("csvExport", this.gos, null),
          action: () => this.csvCreator?.exportDataAsCsv()
        };
      case "excelExport":
        return {
          name: localeTextFunc("excelExport", "Excel Export"),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("excelExport", this.gos, null),
          action: () => this.excelCreator?.exportDataAsExcel()
        };
      case "separator":
        return "separator";
      case "pivotChart":
      case "chartRange":
        return this.chartMenuItemMapper.getChartItems(key) ?? null;
      case "columnFilter":
        if (column) {
          return {
            name: localeTextFunc("columnFilter", "Column Filter"),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("filter", this.gos, null),
            action: () => this.menuService.showFilterMenu({
              column,
              buttonElement: sourceElement(),
              containerType: "columnFilter",
              positionBy: "button"
            })
          };
        } else {
          return null;
        }
      case "columnChooser":
        if (this.gos.isModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.ColumnsToolPanelModule)) {
          return {
            name: localeTextFunc("columnChooser", "Choose Columns"),
            icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("columns", this.gos, null),
            action: () => this.menuService.showColumnChooser({
              column,
              eventSource: sourceElement()
            })
          };
        } else {
          return null;
        }
      case "sortAscending":
        return {
          name: localeTextFunc("sortAscending", "Sort Ascending"),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("sortAscending", this.gos, null),
          action: () => this.sortController.setSortForColumn(column, "asc", false, source)
        };
      case "sortDescending":
        return {
          name: localeTextFunc("sortDescending", "Sort Descending"),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("sortDescending", this.gos, null),
          action: () => this.sortController.setSortForColumn(column, "desc", false, source)
        };
      case "sortUnSort":
        return {
          name: localeTextFunc("sortUnSort", "Clear Sort"),
          icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._createIconNoSpan)("sortUnSort", this.gos, null),
          action: () => this.sortController.setSortForColumn(column, null, false, source)
        };
      default:
        {
          (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._warnOnce)(`unknown menu item type ${key}`);
          return null;
        }
    }
  }
  createAggregationSubMenu(column, aggFuncService) {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    let columnToUse;
    if (column.isPrimary()) {
      columnToUse = column;
    } else {
      const pivotValueColumn = column.getColDef().pivotValueColumn;
      columnToUse = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._exists)(pivotValueColumn) ? pivotValueColumn : void 0;
    }
    const result = [];
    if (columnToUse) {
      const columnIsAlreadyAggValue = columnToUse.isValueActive();
      const funcNames = aggFuncService.getFuncNames(columnToUse);
      result.push({
        name: localeTextFunc("noAggregation", "None"),
        action: () => {
          this.funcColsService.removeValueColumns([columnToUse], "contextMenu");
          this.funcColsService.setColumnAggFunc(columnToUse, void 0, "contextMenu");
        },
        checked: !columnIsAlreadyAggValue
      });
      funcNames.forEach(funcName => {
        result.push({
          name: localeTextFunc(funcName, aggFuncService.getDefaultFuncLabel(funcName)),
          action: () => {
            this.funcColsService.setColumnAggFunc(columnToUse, funcName, "contextMenu");
            this.funcColsService.addValueColumns([columnToUse], "contextMenu");
          },
          checked: columnIsAlreadyAggValue && columnToUse.getAggFunc() === funcName
        });
      });
    }
    return result;
  }
};

// enterprise-modules/menu/src/menu/menuUtils.ts

var MenuUtils = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "menuUtils";
  }
  wireBeans(beans) {
    this.focusService = beans.focusService;
    this.headerNavigationService = beans.headerNavigationService;
    this.visibleColsService = beans.visibleColsService;
  }
  restoreFocusOnClose(restoreFocusParams, eComp, e, restoreIfMouseEvent) {
    const {
      eventSource
    } = restoreFocusParams;
    const isKeyboardEvent = e instanceof KeyboardEvent;
    if (!restoreIfMouseEvent && !isKeyboardEvent || !eventSource) {
      return;
    }
    const activeEl = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._getActiveDomElement)(this.gos);
    if (
    // focus is outside of comp
    !eComp.contains(activeEl) &&
    // something else has focus
    !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isNothingFocused)(this.gos)) {
      return;
    }
    this.focusHeaderCell(restoreFocusParams);
  }
  closePopupAndRestoreFocusOnSelect(hidePopupFunc, restoreFocusParams, event) {
    let keyboardEvent;
    if (event && event.keyboardEvent) {
      keyboardEvent = event.keyboardEvent;
    }
    hidePopupFunc(keyboardEvent && {
      keyboardEvent
    });
    const focusedCell = this.focusService.getFocusedCell();
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isNothingFocused)(this.gos)) {
      if (focusedCell) {
        const {
          rowIndex,
          rowPinned,
          column
        } = focusedCell;
        this.focusService.setFocusedCell({
          rowIndex,
          column,
          rowPinned,
          forceBrowserFocus: true,
          preventScrollOnBrowserFocus: true
        });
      } else {
        this.focusHeaderCell(restoreFocusParams);
      }
    }
  }
  onContextMenu(mouseEvent, touchEvent, showMenuCallback) {
    if (!this.gos.get("allowContextMenuWithControlKey")) {
      if (mouseEvent && (mouseEvent.ctrlKey || mouseEvent.metaKey)) {
        return;
      }
    }
    if (mouseEvent) {
      this.blockMiddleClickScrollsIfNeeded(mouseEvent);
    }
    if (this.gos.get("suppressContextMenu")) {
      return;
    }
    const eventOrTouch = mouseEvent ?? touchEvent.touches[0];
    if (showMenuCallback(eventOrTouch)) {
      const event = mouseEvent ?? touchEvent;
      if (event && event.cancelable) {
        event.preventDefault();
      }
    }
  }
  // make this async for react
  focusHeaderCell(restoreFocusParams) {
    var _this = this;
    return (0,C_develop_six_base_angular_framework_testproject_base_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        column,
        columnIndex,
        headerPosition,
        eventSource
      } = restoreFocusParams;
      const isColumnStillVisible = yield _this.visibleColsService.getAllCols().some(col => col === column);
      if (column && !column.isAlive()) {
        return;
      }
      if (isColumnStillVisible && eventSource && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._isVisible)(eventSource)) {
        const focusableEl = _this.focusService.findTabbableParent(eventSource);
        if (focusableEl) {
          if (column) {
            _this.headerNavigationService.scrollToColumn(column);
          }
          focusableEl.focus();
        }
      } else if (headerPosition && columnIndex !== -1) {
        const allColumns = _this.visibleColsService.getAllCols();
        const columnToFocus = allColumns[columnIndex] || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._last)(allColumns);
        if (columnToFocus) {
          _this.focusService.focusHeaderPosition({
            headerPosition: {
              headerRowIndex: headerPosition.headerRowIndex,
              column: columnToFocus
            }
          });
        }
      }
    })();
  }
  blockMiddleClickScrollsIfNeeded(mouseEvent) {
    if (this.gos.get("suppressMiddleClickScrolls") && mouseEvent.which === 2) {
      mouseEvent.preventDefault();
    }
  }
};

// enterprise-modules/menu/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/menu/src/menuModule.ts
var MenuCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.MenuModule}-core`,
  beans: [EnterpriseMenuFactory, ContextMenuFactory, MenuItemMapper, ChartMenuItemMapper, ColumnChooserFactory, ColumnMenuFactory, MenuUtils],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.EnterpriseCoreModule],
  userComponents: [{
    name: "agMenuItem",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_3__.AgMenuItemRenderer
  }]
});
var MenuApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.MenuModule}-api`,
  apiFunctions: {
    showContextMenu,
    showColumnChooser,
    hideColumnChooser
  },
  dependantModules: [MenuCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._CommunityMenuApiModule]
});
var MenuModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleNames.MenuModule,
  dependantModules: [MenuCoreModule, MenuApiModule]
});


/***/ }),

/***/ 91921:
/*!************************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/range-selection/dist/package/main.esm.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RangeSelectionModule: () => (/* binding */ RangeSelectionModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/range-selection/src/rangeSelectionModule.ts



// enterprise-modules/range-selection/src/rangeSelection/rangeSelectionApi.ts
function getCellRanges(beans) {
  return beans.rangeService?.getCellRanges() ?? null;
}
function addCellRange(beans, params) {
  beans.rangeService?.addCellRange(params);
}
function clearRangeSelection(beans) {
  beans.rangeService?.removeAllCellRanges();
}

// enterprise-modules/range-selection/src/rangeSelection/rangeService.ts

var RangeService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "rangeService";
    this.cellRanges = [];
    this.bodyScrollListener = this.onBodyScroll.bind(this);
    this.dragging = false;
    this.intersectionRange = false;
  }
  wireBeans(beans) {
    this.rowModel = beans.rowModel;
    this.dragService = beans.dragService;
    this.columnModel = beans.columnModel;
    this.visibleColsService = beans.visibleColsService;
    this.cellNavigationService = beans.cellNavigationService;
    this.pinnedRowModel = beans.pinnedRowModel;
    this.rowPositionUtils = beans.rowPositionUtils;
    this.cellPositionUtils = beans.cellPositionUtils;
    this.ctrlsService = beans.ctrlsService;
    this.valueService = beans.valueService;
  }
  postConstruct() {
    const onColumnsChanged = this.onColumnsChanged.bind(this);
    const removeAllCellRanges = () => this.removeAllCellRanges();
    const refreshLastRangeStart = this.refreshLastRangeStart.bind(this);
    this.addManagedEventListeners({
      newColumnsLoaded: onColumnsChanged,
      columnVisible: onColumnsChanged,
      columnValueChanged: onColumnsChanged,
      columnPivotModeChanged: removeAllCellRanges,
      columnRowGroupChanged: removeAllCellRanges,
      columnPivotChanged: removeAllCellRanges,
      columnGroupOpened: refreshLastRangeStart,
      columnMoved: refreshLastRangeStart,
      columnPinned: refreshLastRangeStart
    });
    this.ctrlsService.whenReady(this, p => {
      const gridBodyCtrl = p.gridBodyCtrl;
      this.autoScrollService = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AutoScrollService({
        scrollContainer: gridBodyCtrl.getBodyViewportElement(),
        scrollAxis: "xy",
        getVerticalPosition: () => gridBodyCtrl.getScrollFeature().getVScrollPosition().top,
        setVerticalPosition: position => gridBodyCtrl.getScrollFeature().setVerticalScrollPosition(position),
        getHorizontalPosition: () => gridBodyCtrl.getScrollFeature().getHScrollPosition().left,
        setHorizontalPosition: position => gridBodyCtrl.getScrollFeature().setHorizontalScrollPosition(position),
        shouldSkipVerticalScroll: () => !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isDomLayout)(this.gos, "normal"),
        shouldSkipHorizontalScroll: () => !gridBodyCtrl.getScrollFeature().isHorizontalScrollShowing()
      });
    });
  }
  // Called for both columns loaded & column visibility events
  onColumnsChanged() {
    this.refreshLastRangeStart();
    const allColumns = this.visibleColsService.getAllCols();
    this.cellRanges.forEach(cellRange => {
      const beforeCols = cellRange.columns;
      cellRange.columns = cellRange.columns.filter(col => col.isVisible() && allColumns.indexOf(col) !== -1);
      const colsInRangeChanged = !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._areEqual)(beforeCols, cellRange.columns);
      if (colsInRangeChanged) {
        this.dispatchChangedEvent(false, true, cellRange.id);
      }
    });
    const countBefore = this.cellRanges.length;
    this.cellRanges = this.cellRanges.filter(range => range.columns.length > 0);
    if (countBefore > this.cellRanges.length) {
      this.dispatchChangedEvent(false, true);
    }
  }
  refreshLastRangeStart() {
    const lastRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.cellRanges);
    if (!lastRange) {
      return;
    }
    this.refreshRangeStart(lastRange);
  }
  isContiguousRange(cellRange) {
    const rangeColumns = cellRange.columns;
    if (!rangeColumns.length) {
      return false;
    }
    const allColumns = this.visibleColsService.getAllCols();
    const allPositions = rangeColumns.map(c => allColumns.indexOf(c)).sort((a, b) => a - b);
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(allPositions) - allPositions[0] + 1 === rangeColumns.length;
  }
  getRangeStartRow(cellRange) {
    if (cellRange.startRow && cellRange.endRow) {
      return this.rowPositionUtils.before(cellRange.startRow, cellRange.endRow) ? cellRange.startRow : cellRange.endRow;
    }
    const rowPinned = this.pinnedRowModel.getPinnedTopRowCount() > 0 ? "top" : null;
    return {
      rowIndex: 0,
      rowPinned
    };
  }
  getRangeEndRow(cellRange) {
    if (cellRange.startRow && cellRange.endRow) {
      return this.rowPositionUtils.before(cellRange.startRow, cellRange.endRow) ? cellRange.endRow : cellRange.startRow;
    }
    const pinnedBottomRowCount = this.pinnedRowModel.getPinnedBottomRowCount();
    const pinnedBottom = pinnedBottomRowCount > 0;
    if (pinnedBottom) {
      return {
        rowIndex: pinnedBottomRowCount - 1,
        rowPinned: "bottom"
      };
    }
    return {
      rowIndex: this.rowModel.getRowCount() - 1,
      rowPinned: null
    };
  }
  setRangeToCell(cell, appendRange = false) {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isCellSelectionEnabled)(this.gos)) {
      return;
    }
    const columns = this.calculateColumnsBetween(cell.column, cell.column);
    if (!columns) {
      return;
    }
    const suppressMultiRangeSelections = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getSuppressMultiRanges)(this.gos);
    if (suppressMultiRangeSelections || !appendRange || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(this.cellRanges)) {
      this.removeAllCellRanges(true);
    }
    const rowForCell = {
      rowIndex: cell.rowIndex,
      rowPinned: cell.rowPinned
    };
    const cellRange = {
      startRow: rowForCell,
      endRow: rowForCell,
      columns,
      startColumn: cell.column
    };
    this.cellRanges.push(cellRange);
    this.setNewestRangeStartCell(cell);
    this.onDragStop();
    this.dispatchChangedEvent(true, true);
  }
  extendLatestRangeToCell(cellPosition) {
    if (this.isEmpty() || !this.newestRangeStartCell) {
      return;
    }
    const cellRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.cellRanges);
    this.updateRangeEnd(cellRange, cellPosition);
  }
  updateRangeEnd(cellRange, cellPosition, silent = false) {
    const endColumn = cellPosition.column;
    const colsToAdd = this.calculateColumnsBetween(cellRange.startColumn, endColumn);
    if (!colsToAdd || this.isLastCellOfRange(cellRange, cellPosition)) {
      return;
    }
    cellRange.columns = colsToAdd;
    cellRange.endRow = {
      rowIndex: cellPosition.rowIndex,
      rowPinned: cellPosition.rowPinned
    };
    if (!silent) {
      this.dispatchChangedEvent(true, true, cellRange.id);
    }
  }
  refreshRangeStart(cellRange) {
    const {
      startColumn,
      columns
    } = cellRange;
    const moveColInCellRange = (colToMove, moveToFront) => {
      const otherCols = cellRange.columns.filter(col => col !== colToMove);
      if (colToMove) {
        cellRange.startColumn = colToMove;
        cellRange.columns = moveToFront ? [colToMove, ...otherCols] : [...otherCols, colToMove];
      } else {
        cellRange.columns = otherCols;
      }
    };
    const {
      left,
      right
    } = this.getRangeEdgeColumns(cellRange);
    const shouldMoveLeftCol = startColumn === columns[0] && startColumn !== left;
    if (shouldMoveLeftCol) {
      moveColInCellRange(left, true);
      return;
    }
    const shouldMoveRightCol = startColumn === (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(columns) && startColumn === right;
    if (shouldMoveRightCol) {
      moveColInCellRange(right, false);
      return;
    }
  }
  getRangeEdgeColumns(cellRange) {
    const allColumns = this.visibleColsService.getAllCols();
    const allIndices = cellRange.columns.map(c => allColumns.indexOf(c)).filter(i => i > -1).sort((a, b) => a - b);
    return {
      left: allColumns[allIndices[0]],
      right: allColumns[(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(allIndices)]
    };
  }
  // returns true if successful, false if not successful
  extendLatestRangeInDirection(event) {
    if (this.isEmpty() || !this.newestRangeStartCell) {
      return;
    }
    const key = event.key;
    const ctrlKey = event.ctrlKey || event.metaKey;
    const lastRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.cellRanges);
    const startCell = this.newestRangeStartCell;
    const firstCol = lastRange.columns[0];
    const lastCol = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(lastRange.columns);
    const endCellIndex = lastRange.endRow.rowIndex;
    const endCellFloating = lastRange.endRow.rowPinned;
    const endCellColumn = startCell.column === firstCol ? lastCol : firstCol;
    const endCell = {
      column: endCellColumn,
      rowIndex: endCellIndex,
      rowPinned: endCellFloating
    };
    const newEndCell = this.cellNavigationService.getNextCellToFocus(key, endCell, ctrlKey);
    if (!newEndCell) {
      return;
    }
    this.setCellRange({
      rowStartIndex: startCell.rowIndex,
      rowStartPinned: startCell.rowPinned,
      rowEndIndex: newEndCell.rowIndex,
      rowEndPinned: newEndCell.rowPinned,
      columnStart: startCell.column,
      columnEnd: newEndCell.column
    });
    return newEndCell;
  }
  setCellRange(params) {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isCellSelectionEnabled)(this.gos)) {
      return;
    }
    this.removeAllCellRanges(true);
    this.addCellRange(params);
  }
  setCellRanges(cellRanges) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._shallowCompare)(this.cellRanges, cellRanges)) {
      return;
    }
    this.removeAllCellRanges(true);
    cellRanges.forEach(newRange => {
      if (newRange.columns && newRange.startRow) {
        this.setNewestRangeStartCell({
          rowIndex: newRange.startRow.rowIndex,
          rowPinned: newRange.startRow.rowPinned,
          column: newRange.columns[0]
        });
      }
      this.cellRanges.push(newRange);
    });
    this.dispatchChangedEvent(false, true);
  }
  setNewestRangeStartCell(position) {
    this.newestRangeStartCell = position;
  }
  clearCellRangeCellValues(params) {
    let {
      cellRanges
    } = params;
    const {
      cellEventSource = "rangeService",
      dispatchWrapperEvents,
      wrapperEventSource = "deleteKey"
    } = params;
    if (dispatchWrapperEvents) {
      this.eventService.dispatchEvent({
        type: "cellSelectionDeleteStart",
        source: wrapperEventSource
      });
      this.eventService.dispatchEvent({
        type: "rangeDeleteStart",
        source: wrapperEventSource
      });
    }
    if (!cellRanges) {
      cellRanges = this.cellRanges;
    }
    cellRanges.forEach(cellRange => {
      this.forEachRowInRange(cellRange, rowPosition => {
        const rowNode = this.rowPositionUtils.getRowNode(rowPosition);
        if (!rowNode) {
          return;
        }
        for (let i = 0; i < cellRange.columns.length; i++) {
          const column = this.columnModel.getCol(cellRange.columns[i]);
          if (!column || !column.isCellEditable(rowNode)) {
            continue;
          }
          const emptyValue = this.valueService.getDeleteValue(column, rowNode);
          rowNode.setDataValue(column, emptyValue, cellEventSource);
        }
      });
    });
    if (dispatchWrapperEvents) {
      this.eventService.dispatchEvent({
        type: "cellSelectionDeleteEnd",
        source: wrapperEventSource
      });
      this.eventService.dispatchEvent({
        type: "rangeDeleteEnd",
        source: wrapperEventSource
      });
    }
  }
  createCellRangeFromCellRangeParams(params) {
    return this.createPartialCellRangeFromRangeParams(params, false);
  }
  // Range service can't normally support a range without columns, but charts can
  createPartialCellRangeFromRangeParams(params, allowEmptyColumns) {
    let columns;
    let startsOnTheRight = false;
    if (params.columns) {
      columns = params.columns.map(c => this.columnModel.getCol(c)).filter(c => c);
    } else {
      const columnStart = this.columnModel.getCol(params.columnStart);
      const columnEnd = this.columnModel.getCol(params.columnEnd);
      if (!columnStart || !columnEnd) {
        return;
      }
      columns = this.calculateColumnsBetween(columnStart, columnEnd);
      if (columns && columns.length) {
        startsOnTheRight = columns[0] !== columnStart;
      }
    }
    if (!columns || !allowEmptyColumns && columns.length === 0) {
      return;
    }
    const startRow = params.rowStartIndex != null ? {
      rowIndex: params.rowStartIndex,
      rowPinned: params.rowStartPinned || null
    } : void 0;
    const endRow = params.rowEndIndex != null ? {
      rowIndex: params.rowEndIndex,
      rowPinned: params.rowEndPinned || null
    } : void 0;
    return {
      startRow,
      endRow,
      columns,
      startColumn: startsOnTheRight ? (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(columns) : columns[0]
    };
  }
  addCellRange(params) {
    const gos = this.gos;
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isCellSelectionEnabled)(gos)) {
      return;
    }
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isUsingNewCellSelectionAPI)(gos) && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getSuppressMultiRanges)(gos) && this.cellRanges.length > 0) {
      return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("cannot add multiple ranges when `cellSelection.suppressMultiRanges = true`");
    }
    const newRange = this.createCellRangeFromCellRangeParams(params);
    if (newRange) {
      if (newRange.startRow) {
        this.setNewestRangeStartCell({
          rowIndex: newRange.startRow.rowIndex,
          rowPinned: newRange.startRow.rowPinned,
          column: newRange.startColumn
        });
      }
      this.cellRanges.push(newRange);
      this.dispatchChangedEvent(false, true, newRange.id);
    }
  }
  getCellRanges() {
    return this.cellRanges;
  }
  isEmpty() {
    return this.cellRanges.length === 0;
  }
  isMoreThanOneCell() {
    const len = this.cellRanges.length;
    if (len === 0) {
      return false;
    }
    if (len > 1) {
      return true;
    }
    const range = this.cellRanges[0];
    const startRow = this.getRangeStartRow(range);
    const endRow = this.getRangeEndRow(range);
    return startRow.rowPinned !== endRow.rowPinned || startRow.rowIndex !== endRow.rowIndex || range.columns.length !== 1;
  }
  areAllRangesAbleToMerge() {
    const rowToColumnMap = /* @__PURE__ */new Map();
    const len = this.cellRanges.length;
    if (len <= 1) return true;
    this.cellRanges.forEach(range => {
      this.forEachRowInRange(range, row => {
        const rowName = `${row.rowPinned || "normal"}_${row.rowIndex}`;
        const columns = rowToColumnMap.get(rowName);
        const currentRangeColIds = range.columns.map(col => col.getId());
        if (columns) {
          const filteredColumns = currentRangeColIds.filter(col => columns.indexOf(col) === -1);
          columns.push(...filteredColumns);
        } else {
          rowToColumnMap.set(rowName, currentRangeColIds);
        }
      });
    });
    let columnsString;
    for (const val of rowToColumnMap.values()) {
      const currentValString = val.sort().join();
      if (columnsString === void 0) {
        columnsString = currentValString;
        continue;
      }
      if (columnsString !== currentValString) {
        return false;
      }
    }
    return true;
  }
  forEachRowInRange(cellRange, callback) {
    const topRow = this.getRangeStartRow(cellRange);
    const bottomRow = this.getRangeEndRow(cellRange);
    let currentRow = topRow;
    while (currentRow) {
      callback(currentRow);
      if (this.rowPositionUtils.sameRow(currentRow, bottomRow)) {
        break;
      }
      currentRow = this.cellNavigationService.getRowBelow(currentRow);
    }
  }
  removeAllCellRanges(silent) {
    if (this.isEmpty()) {
      return;
    }
    this.onDragStop();
    this.cellRanges.length = 0;
    if (!silent) {
      this.dispatchChangedEvent(false, true);
    }
  }
  // as the user is dragging outside of the panel, the div starts to scroll, which in turn
  // means we are selection more (or less) cells, but the mouse isn't moving, so we recalculate
  // the selection my mimicking a new mouse event
  onBodyScroll() {
    if (this.dragging && this.lastMouseEvent) {
      this.onDragging(this.lastMouseEvent);
    }
  }
  isCellInAnyRange(cell) {
    return this.getCellRangeCount(cell) > 0;
  }
  isCellInSpecificRange(cell, range) {
    const columnInRange = range.columns !== null && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(range.columns, cell.column);
    const rowInRange = this.isRowInRange(cell.rowIndex, cell.rowPinned, range);
    return columnInRange && rowInRange;
  }
  isLastCellOfRange(cellRange, cell) {
    const {
      startRow,
      endRow
    } = cellRange;
    const lastRow = this.rowPositionUtils.before(startRow, endRow) ? endRow : startRow;
    const isLastRow = cell.rowIndex === lastRow.rowIndex && cell.rowPinned === lastRow.rowPinned;
    const rangeFirstIndexColumn = cellRange.columns[0];
    const rangeLastIndexColumn = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(cellRange.columns);
    const lastRangeColumn = cellRange.startColumn === rangeFirstIndexColumn ? rangeLastIndexColumn : rangeFirstIndexColumn;
    const isLastColumn = cell.column === lastRangeColumn;
    return isLastColumn && isLastRow;
  }
  isBottomRightCell(cellRange, cell) {
    const allColumns = this.visibleColsService.getAllCols();
    const allPositions = cellRange.columns.map(c => allColumns.indexOf(c)).sort((a, b) => a - b);
    const {
      startRow,
      endRow
    } = cellRange;
    const lastRow = this.rowPositionUtils.before(startRow, endRow) ? endRow : startRow;
    const isRightColumn = allColumns.indexOf(cell.column) === (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(allPositions);
    const isLastRow = cell.rowIndex === lastRow.rowIndex && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(cell.rowPinned) === (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(lastRow.rowPinned);
    return isRightColumn && isLastRow;
  }
  // returns the number of ranges this cell is in
  getCellRangeCount(cell) {
    if (this.isEmpty()) {
      return 0;
    }
    return this.cellRanges.filter(cellRange => this.isCellInSpecificRange(cell, cellRange)).length;
  }
  isRowInRange(rowIndex, rowPinned, cellRange) {
    const firstRow = this.getRangeStartRow(cellRange);
    const lastRow = this.getRangeEndRow(cellRange);
    const thisRow = {
      rowIndex,
      rowPinned: rowPinned || null
    };
    const equalsFirstRow = thisRow.rowIndex === firstRow.rowIndex && thisRow.rowPinned == firstRow.rowPinned;
    const equalsLastRow = thisRow.rowIndex === lastRow.rowIndex && thisRow.rowPinned == lastRow.rowPinned;
    if (equalsFirstRow || equalsLastRow) {
      return true;
    }
    const afterFirstRow = !this.rowPositionUtils.before(thisRow, firstRow);
    const beforeLastRow = this.rowPositionUtils.before(thisRow, lastRow);
    return afterFirstRow && beforeLastRow;
  }
  getDraggingRange() {
    return this.draggingRange;
  }
  onDragStart(mouseEvent) {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isCellSelectionEnabled)(this.gos)) {
      return;
    }
    const {
      ctrlKey,
      metaKey,
      shiftKey
    } = mouseEvent;
    const isMultiKey = ctrlKey || metaKey;
    const allowMulti = !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getSuppressMultiRanges)(this.gos);
    const isMultiSelect = allowMulti ? isMultiKey : false;
    const extendRange = shiftKey && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._existsAndNotEmpty)(this.cellRanges);
    if (!isMultiSelect && (!extendRange || (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.cellRanges).type))) {
      this.removeAllCellRanges(true);
    }
    const startTarget = this.dragService.getStartTarget();
    if (startTarget) {
      this.updateValuesOnMove(startTarget);
    }
    if (!this.lastCellHovered) {
      return;
    }
    this.dragging = true;
    this.lastMouseEvent = mouseEvent;
    this.intersectionRange = isMultiSelect && this.getCellRangeCount(this.lastCellHovered) > 1;
    if (!extendRange) {
      this.setNewestRangeStartCell(this.lastCellHovered);
    }
    if (this.cellRanges.length > 0) {
      this.draggingRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.cellRanges);
    } else {
      const mouseRowPosition = {
        rowIndex: this.lastCellHovered.rowIndex,
        rowPinned: this.lastCellHovered.rowPinned
      };
      this.draggingRange = {
        startRow: mouseRowPosition,
        endRow: mouseRowPosition,
        columns: [this.lastCellHovered.column],
        startColumn: this.newestRangeStartCell.column
      };
      this.cellRanges.push(this.draggingRange);
    }
    this.ctrlsService.getGridBodyCtrl().addScrollEventListener(this.bodyScrollListener);
    this.dispatchChangedEvent(true, false, this.draggingRange.id);
  }
  intersectLastRange(fromMouseClick) {
    if (fromMouseClick && this.dragging) {
      return;
    }
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getSuppressMultiRanges)(this.gos)) {
      return;
    }
    if (this.isEmpty()) {
      return;
    }
    const rowPosUtils = this.rowPositionUtils;
    const lastRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.cellRanges);
    const intersectionStartRow = this.getRangeStartRow(lastRange);
    const intersectionEndRow = this.getRangeEndRow(lastRange);
    const newRanges = [];
    this.cellRanges.slice(0, -1).forEach(range => {
      const startRow = this.getRangeStartRow(range);
      const endRow = this.getRangeEndRow(range);
      const cols = range.columns;
      const intersectCols = cols.filter(col => lastRange.columns.indexOf(col) === -1);
      if (intersectCols.length === cols.length) {
        newRanges.push(range);
        return;
      }
      if (rowPosUtils.before(intersectionEndRow, startRow) || rowPosUtils.before(endRow, intersectionStartRow)) {
        newRanges.push(range);
        return;
      }
      const rangeCountBefore = newRanges.length;
      if (rowPosUtils.before(startRow, intersectionStartRow)) {
        const top = {
          columns: [...cols],
          startColumn: lastRange.startColumn,
          startRow: {
            ...startRow
          },
          endRow: this.cellNavigationService.getRowAbove(intersectionStartRow)
        };
        newRanges.push(top);
      }
      if (intersectCols.length > 0) {
        const middle = {
          columns: intersectCols,
          startColumn: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(intersectCols, lastRange.startColumn) ? lastRange.startColumn : intersectCols[0],
          startRow: this.rowMax([{
            ...intersectionStartRow
          }, {
            ...startRow
          }]),
          endRow: this.rowMin([{
            ...intersectionEndRow
          }, {
            ...endRow
          }])
        };
        newRanges.push(middle);
      }
      if (rowPosUtils.before(intersectionEndRow, endRow)) {
        newRanges.push({
          columns: [...cols],
          startColumn: lastRange.startColumn,
          startRow: this.cellNavigationService.getRowBelow(intersectionEndRow),
          endRow: {
            ...endRow
          }
        });
      }
      if (newRanges.length - rangeCountBefore === 1) {
        newRanges[newRanges.length - 1].id = range.id;
      }
    });
    this.cellRanges = newRanges;
    if (fromMouseClick) {
      this.dispatchChangedEvent(false, true);
    }
  }
  rowMax(rows) {
    let max;
    rows.forEach(row => {
      if (max === void 0 || this.rowPositionUtils.before(max, row)) {
        max = row;
      }
    });
    return max;
  }
  rowMin(rows) {
    let min;
    rows.forEach(row => {
      if (min === void 0 || this.rowPositionUtils.before(row, min)) {
        min = row;
      }
    });
    return min;
  }
  updateValuesOnMove(eventTarget) {
    const cellCtrl = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getCtrlForEventTarget)(this.gos, eventTarget, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.CellCtrl.DOM_DATA_KEY_CELL_CTRL);
    const cell = cellCtrl?.getCellPosition();
    this.cellHasChanged = false;
    if (!cell || this.lastCellHovered && this.cellPositionUtils.equals(cell, this.lastCellHovered)) {
      return;
    }
    if (cellCtrl?.isEditing()) {
      this.dragService.cancelDrag(eventTarget);
      return;
    }
    if (this.lastCellHovered) {
      this.cellHasChanged = true;
    }
    this.lastCellHovered = cell;
  }
  onDragging(mouseEvent) {
    if (!this.dragging || !mouseEvent) {
      return;
    }
    this.updateValuesOnMove(mouseEvent.target);
    this.lastMouseEvent = mouseEvent;
    const cellPosition = this.lastCellHovered;
    const isMouseAndStartInPinned = position => cellPosition && cellPosition.rowPinned === position && this.newestRangeStartCell.rowPinned === position;
    const skipVerticalScroll = isMouseAndStartInPinned("top") || isMouseAndStartInPinned("bottom");
    this.autoScrollService.check(mouseEvent, skipVerticalScroll);
    if (!this.cellHasChanged) {
      return;
    }
    const columns = this.calculateColumnsBetween(this.newestRangeStartCell.column, cellPosition.column);
    if (!columns) {
      return;
    }
    this.draggingRange.endRow = {
      rowIndex: cellPosition.rowIndex,
      rowPinned: cellPosition.rowPinned
    };
    this.draggingRange.columns = columns;
    this.dispatchChangedEvent(false, false, this.draggingRange.id);
  }
  onDragStop() {
    if (!this.dragging) {
      return;
    }
    const {
      id
    } = this.draggingRange;
    this.autoScrollService.ensureCleared();
    this.ctrlsService.getGridBodyCtrl().removeScrollEventListener(this.bodyScrollListener);
    this.lastMouseEvent = null;
    this.dragging = false;
    this.draggingRange = void 0;
    this.lastCellHovered = void 0;
    if (this.intersectionRange) {
      this.intersectionRange = false;
      this.intersectLastRange();
    }
    this.dispatchChangedEvent(false, true, id);
  }
  dispatchChangedEvent(started, finished, id) {
    this.eventService.dispatchEvent({
      type: "cellSelectionChanged",
      started,
      finished,
      id
    });
    this.eventService.dispatchEvent({
      type: "rangeSelectionChanged",
      started,
      finished,
      id
    });
  }
  calculateColumnsBetween(columnFrom, columnTo) {
    const allColumns = this.visibleColsService.getAllCols();
    const isSameColumn = columnFrom === columnTo;
    const fromIndex = allColumns.indexOf(columnFrom);
    const logMissing = column => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`column ${column.getId()} is not visible`);
    if (fromIndex < 0) {
      logMissing(columnFrom);
      return;
    }
    const toIndex = isSameColumn ? fromIndex : allColumns.indexOf(columnTo);
    if (toIndex < 0) {
      logMissing(columnTo);
      return;
    }
    if (isSameColumn) {
      return [columnFrom];
    }
    const firstIndex = Math.min(fromIndex, toIndex);
    const lastIndex = firstIndex === fromIndex ? toIndex : fromIndex;
    const columns = [];
    for (let i = firstIndex; i <= lastIndex; i++) {
      columns.push(allColumns[i]);
    }
    return columns;
  }
};

// enterprise-modules/range-selection/src/rangeSelection/selectionHandleFactory.ts


// enterprise-modules/range-selection/src/rangeSelection/agFillHandle.ts


// enterprise-modules/range-selection/src/rangeSelection/abstractSelectionHandle.ts

var AbstractSelectionHandle = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.changedCalculatedValues = false;
    this.dragging = false;
    this.shouldDestroyOnEndDragging = false;
  }
  wireBeans(beans) {
    this.dragService = beans.dragService;
    this.rangeService = beans.rangeService;
    this.mouseEventService = beans.mouseEventService;
    this.rowPositionUtils = beans.rowPositionUtils;
    this.cellPositionUtils = beans.cellPositionUtils;
    this.ctrlsService = beans.ctrlsService;
  }
  postConstruct() {
    this.dragService.addDragSource({
      dragStartPixels: 0,
      eElement: this.getGui(),
      onDragStart: this.onDragStart.bind(this),
      onDragging: e => {
        this.dragging = true;
        this.rangeService.autoScrollService.check(e);
        if (this.changedCalculatedValues) {
          this.onDrag(e);
          this.changedCalculatedValues = false;
        }
      },
      onDragStop: e => {
        this.dragging = false;
        this.onDragEnd(e);
        this.clearDragProperties();
        if (this.shouldDestroyOnEndDragging) {
          this.destroy();
        }
      },
      onDragCancel: () => {
        this.dragging = false;
        this.onDragCancel();
        this.clearDragProperties();
      }
    });
    this.addManagedElementListeners(this.getGui(), {
      mousedown: this.preventRangeExtension.bind(this)
    });
  }
  isDragging() {
    return this.dragging;
  }
  getCellCtrl() {
    return this.cellCtrl;
  }
  setCellCtrl(cellComp) {
    this.cellCtrl = cellComp;
  }
  getCellRange() {
    return this.cellRange;
  }
  setCellRange(range) {
    this.cellRange = range;
  }
  getRangeStartRow() {
    return this.rangeStartRow;
  }
  setRangeStartRow(row) {
    this.rangeStartRow = row;
  }
  getRangeEndRow() {
    return this.rangeEndRow;
  }
  setRangeEndRow(row) {
    this.rangeEndRow = row;
  }
  getLastCellHovered() {
    return this.lastCellHovered;
  }
  preventRangeExtension(e) {
    e.stopPropagation();
  }
  onDragStart(e) {
    [this.cellHoverListener] = this.addManagedElementListeners(this.ctrlsService.get("gridCtrl").getGui(), {
      mousemove: this.updateValuesOnMove.bind(this)
    });
    document.body.classList.add(this.getDraggingCssClass());
  }
  getDraggingCssClass() {
    return `ag-dragging-${this.type === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.SelectionHandleType.FILL ? "fill" : "range"}-handle`;
  }
  updateValuesOnMove(e) {
    const cell = this.mouseEventService.getCellPositionForEvent(e);
    if (!cell || this.lastCellHovered && this.cellPositionUtils.equals(cell, this.lastCellHovered)) {
      return;
    }
    this.lastCellHovered = cell;
    this.changedCalculatedValues = true;
  }
  clearDragProperties() {
    this.clearValues();
    this.rangeService.autoScrollService.ensureCleared();
    document.body.classList.remove(this.getDraggingCssClass());
  }
  getType() {
    return this.type;
  }
  refresh(cellCtrl) {
    const oldCellComp = this.getCellCtrl();
    const eGui = this.getGui();
    const cellRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.rangeService.getCellRanges());
    const start = cellRange.startRow;
    const end = cellRange.endRow;
    if (start && end) {
      const isBefore = this.rowPositionUtils.before(end, start);
      if (isBefore) {
        this.setRangeStartRow(end);
        this.setRangeEndRow(start);
      } else {
        this.setRangeStartRow(start);
        this.setRangeEndRow(end);
      }
    }
    if (oldCellComp !== cellCtrl || !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isVisible)(eGui)) {
      this.setCellCtrl(cellCtrl);
      const eParentOfValue = cellCtrl.getComp().getParentOfValue();
      if (eParentOfValue) {
        eParentOfValue.appendChild(eGui);
      }
    }
    this.setCellRange(cellRange);
  }
  clearValues() {
    this.lastCellHovered = void 0;
    this.removeListeners();
  }
  removeListeners() {
    if (this.cellHoverListener) {
      this.cellHoverListener();
      this.cellHoverListener = void 0;
    }
  }
  destroy() {
    if (!this.shouldDestroyOnEndDragging && this.isDragging()) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.getGui(), false);
      this.shouldDestroyOnEndDragging = true;
      return;
    }
    this.shouldDestroyOnEndDragging = false;
    super.destroy();
    this.removeListeners();
    const eGui = this.getGui();
    if (eGui.parentElement) {
      eGui.parentElement.removeChild(eGui);
    }
  }
};

// enterprise-modules/range-selection/src/rangeSelection/utils.ts
function findLineByLeastSquares(values) {
  const len = values.length;
  let maxDecimals = 0;
  if (len <= 1) {
    return values;
  }
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const splitExponent = value.toString().split("e-");
    if (splitExponent.length > 1) {
      maxDecimals = Math.max(maxDecimals, parseInt(splitExponent[1], 10));
      continue;
    }
    if (Math.floor(value) === value) {
      continue;
    }
    maxDecimals = Math.max(maxDecimals, value.toString().split(".")[1].length);
  }
  let sum_x = 0;
  let sum_y = 0;
  let sum_xy = 0;
  let sum_xx = 0;
  let y = 0;
  for (let x = 0; x < len; x++) {
    y = values[x];
    sum_x += x;
    sum_y += y;
    sum_xx += x * x;
    sum_xy += x * y;
  }
  const m = (len * sum_xy - sum_x * sum_y) / (len * sum_xx - sum_x * sum_x);
  const b = sum_y / len - m * sum_x / len;
  const result = [];
  for (let x = 0; x <= len; x++) {
    result.push(parseFloat((x * m + b).toFixed(maxDecimals)));
  }
  return result;
}

// enterprise-modules/range-selection/src/rangeSelection/agFillHandle.ts
var AgFillHandle = class extends AbstractSelectionHandle {
  constructor() {
    super(/* html */
    `<div class="ag-fill-handle"></div>`);
    this.markedCells = [];
    this.cellValues = [];
    this.isUp = false;
    this.isLeft = false;
    this.isReduce = false;
    this.type = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.SelectionHandleType.FILL;
  }
  wireBeans(beans) {
    super.wireBeans(beans);
    this.valueService = beans.valueService;
    this.navigationService = beans.navigationService;
    this.cellNavigationService = beans.cellNavigationService;
    this.visibleColsService = beans.visibleColsService;
  }
  updateValuesOnMove(e) {
    super.updateValuesOnMove(e);
    if (!this.initialXY) {
      this.initialXY = this.mouseEventService.getNormalisedPosition(e);
    }
    const {
      x,
      y
    } = this.initialXY;
    const {
      x: newX,
      y: newY
    } = this.mouseEventService.getNormalisedPosition(e);
    const diffX = Math.abs(x - newX);
    const diffY = Math.abs(y - newY);
    const allowedDirection = this.getFillHandleDirection();
    let direction;
    if (allowedDirection === "xy") {
      direction = diffX > diffY ? "x" : "y";
    } else {
      direction = allowedDirection;
    }
    if (direction !== this.dragAxis) {
      this.dragAxis = direction;
      this.changedCalculatedValues = true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDrag(_e) {
    if (!this.initialPosition) {
      const cellCtrl = this.getCellCtrl();
      if (!cellCtrl) {
        return;
      }
      this.initialPosition = cellCtrl.getCellPosition();
    }
    const lastCellHovered = this.getLastCellHovered();
    if (lastCellHovered) {
      this.markPathFrom(this.initialPosition, lastCellHovered);
    }
  }
  onDragEnd(e) {
    this.initialXY = null;
    if (!this.markedCells.length) {
      return;
    }
    const isX = this.dragAxis === "x";
    const initialRange = this.getCellRange();
    const colLen = initialRange.columns.length;
    const rangeStartRow = this.getRangeStartRow();
    const rangeEndRow = this.getRangeEndRow();
    let finalRange;
    if (!this.isUp && !this.isLeft) {
      finalRange = this.rangeService.createCellRangeFromCellRangeParams({
        rowStartIndex: rangeStartRow.rowIndex,
        rowStartPinned: rangeStartRow.rowPinned,
        columnStart: initialRange.columns[0],
        rowEndIndex: isX ? rangeEndRow.rowIndex : this.lastCellMarked.rowIndex,
        rowEndPinned: isX ? rangeEndRow.rowPinned : this.lastCellMarked.rowPinned,
        columnEnd: isX ? this.lastCellMarked.column : initialRange.columns[colLen - 1]
      });
    } else {
      const startRow = isX ? rangeStartRow : this.lastCellMarked;
      finalRange = this.rangeService.createCellRangeFromCellRangeParams({
        rowStartIndex: startRow.rowIndex,
        rowStartPinned: startRow.rowPinned,
        columnStart: isX ? this.lastCellMarked.column : initialRange.columns[0],
        rowEndIndex: rangeEndRow.rowIndex,
        rowEndPinned: rangeEndRow.rowPinned,
        columnEnd: initialRange.columns[colLen - 1]
      });
    }
    if (finalRange) {
      this.eventService.dispatchEvent({
        type: "fillStart"
      });
      this.handleValueChanged(initialRange, finalRange, e);
      this.rangeService.setCellRanges([finalRange]);
      this.eventService.dispatchEvent({
        type: "fillEnd",
        initialRange,
        finalRange
      });
    }
  }
  onDragCancel() {
    this.initialXY = null;
    if (!this.markedCells.length) {
      return;
    }
    this.clearMarkedPath();
  }
  getFillHandleDirection() {
    const direction = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getFillHandle)(this.gos)?.direction;
    if (!direction) {
      return "xy";
    }
    if (direction !== "x" && direction !== "y" && direction !== "xy") {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`valid values for fillHandleDirection are 'x', 'y' and 'xy'. Default to 'xy'.`);
      return "xy";
    }
    return direction;
  }
  handleValueChanged(initialRange, finalRange, e) {
    const initialRangeEndRow = this.rangeService.getRangeEndRow(initialRange);
    const initialRangeStartRow = this.rangeService.getRangeStartRow(initialRange);
    const finalRangeEndRow = this.rangeService.getRangeEndRow(finalRange);
    const finalRangeStartRow = this.rangeService.getRangeStartRow(finalRange);
    const isVertical = this.dragAxis === "y";
    if (this.isReduce && !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getFillHandle)(this.gos)?.suppressClearOnFillReduction) {
      const columns = isVertical ? initialRange.columns : initialRange.columns.filter(col => finalRange.columns.indexOf(col) < 0);
      const startRow = isVertical ? this.cellNavigationService.getRowBelow(finalRangeEndRow) : finalRangeStartRow;
      if (startRow) {
        this.clearCellsInRange(startRow, initialRangeEndRow, columns);
      }
      return;
    }
    const values = [];
    const initialValues = [];
    const initialNonAggregatedValues = [];
    const initialFormattedValues = [];
    let withinInitialRange = true;
    let idx = 0;
    const resetValues = () => {
      values.length = 0;
      initialValues.length = 0;
      initialNonAggregatedValues.length = 0;
      initialFormattedValues.length = 0;
      idx = 0;
    };
    const iterateAcrossCells = (column, columns) => {
      let currentRow = this.isUp ? initialRangeEndRow : initialRangeStartRow;
      let finished = false;
      if (isVertical) {
        withinInitialRange = true;
        resetValues();
      }
      while (!finished && currentRow) {
        const rowNode = this.rowPositionUtils.getRowNode(currentRow);
        if (!rowNode) {
          break;
        }
        if (isVertical && column) {
          fillValues(values, column, rowNode, () => {
            return !this.rowPositionUtils.sameRow(currentRow, this.isUp ? initialRangeStartRow : initialRangeEndRow);
          });
        } else if (columns) {
          withinInitialRange = true;
          resetValues();
          columns.forEach(col => fillValues(values, col, rowNode, () => col !== (this.isLeft ? initialRange.columns[0] : (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(initialRange.columns))));
        }
        finished = this.rowPositionUtils.sameRow(currentRow, this.isUp ? finalRangeStartRow : finalRangeEndRow);
        currentRow = this.isUp ? this.cellNavigationService.getRowAbove(currentRow) : this.cellNavigationService.getRowBelow(currentRow);
      }
    };
    const fillValues = (currentValues, col, rowNode, updateInitialSet) => {
      let currentValue;
      let skipValue = false;
      if (withinInitialRange) {
        currentValue = this.valueService.getValue(col, rowNode);
        initialValues.push(currentValue);
        initialNonAggregatedValues.push(this.valueService.getValue(col, rowNode, void 0, true));
        initialFormattedValues.push(this.valueService.formatValue(col, rowNode, currentValue));
        withinInitialRange = updateInitialSet();
      } else {
        const {
          value,
          fromUserFunction,
          sourceCol,
          sourceRowNode
        } = this.processValues({
          event: e,
          values: currentValues,
          initialValues,
          initialNonAggregatedValues,
          initialFormattedValues,
          col,
          rowNode,
          idx: idx++
        });
        currentValue = value;
        if (col.isCellEditable(rowNode)) {
          const cellValue = this.valueService.getValue(col, rowNode);
          if (!fromUserFunction) {
            if (sourceCol && sourceCol.getColDef()?.useValueFormatterForExport !== false) {
              currentValue = this.valueService.formatValue(sourceCol, sourceRowNode, currentValue) ?? currentValue;
            }
            if (col.getColDef().useValueParserForImport !== false) {
              currentValue = this.valueService.parseValue(col, rowNode,
              // if no sourceCol, then currentValue is a number
              sourceCol ? currentValue : (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)(currentValue), cellValue);
            }
          }
          if (!fromUserFunction || cellValue !== currentValue) {
            rowNode.setDataValue(col, currentValue, "rangeService");
          } else {
            skipValue = true;
          }
        }
      }
      if (!skipValue) {
        currentValues.push({
          value: currentValue,
          column: col,
          rowNode
        });
      }
    };
    if (isVertical) {
      initialRange.columns.forEach(col => {
        iterateAcrossCells(col);
      });
    } else {
      const columns = this.isLeft ? [...finalRange.columns].reverse() : finalRange.columns;
      iterateAcrossCells(void 0, columns);
    }
  }
  clearCellsInRange(startRow, endRow, columns) {
    const cellRange = {
      startRow,
      endRow,
      columns,
      startColumn: columns[0]
    };
    this.rangeService.clearCellRangeCellValues({
      cellRanges: [cellRange]
    });
  }
  processValues(params) {
    const {
      event,
      values,
      initialValues,
      initialNonAggregatedValues,
      initialFormattedValues,
      col,
      rowNode,
      idx
    } = params;
    const userFillOperation = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getFillHandle)(this.gos)?.setFillValue;
    const isVertical = this.dragAxis === "y";
    let direction;
    if (isVertical) {
      direction = this.isUp ? "up" : "down";
    } else {
      direction = this.isLeft ? "left" : "right";
    }
    if (userFillOperation) {
      const params2 = this.gos.addGridCommonParams({
        event,
        values: values.map(({
          value
        }) => value),
        initialValues,
        initialNonAggregatedValues,
        initialFormattedValues,
        currentIndex: idx,
        currentCellValue: this.valueService.getValue(col, rowNode),
        direction,
        column: col,
        rowNode
      });
      const userResult = userFillOperation(params2);
      if (userResult !== false) {
        return {
          value: userResult,
          fromUserFunction: true
        };
      }
    }
    const allNumbers = !values.some(({
      value
    }) => {
      const asFloat = parseFloat(value);
      return isNaN(asFloat) || asFloat.toString() !== value.toString();
    });
    if (event.altKey || !allNumbers) {
      if (allNumbers && initialValues.length === 1) {
        const multiplier = this.isUp || this.isLeft ? -1 : 1;
        return {
          value: parseFloat((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(values).value) + 1 * multiplier,
          fromUserFunction: false
        };
      }
      const {
        value,
        column: sourceCol,
        rowNode: sourceRowNode
      } = values[idx % values.length];
      return {
        value,
        fromUserFunction: false,
        sourceCol,
        sourceRowNode
      };
    }
    return {
      value: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(findLineByLeastSquares(values.map(({
        value
      }) => Number(value)))),
      fromUserFunction: false
    };
  }
  clearValues() {
    this.clearMarkedPath();
    this.clearCellValues();
    this.lastCellMarked = void 0;
    super.clearValues();
  }
  clearMarkedPath() {
    this.markedCells.forEach(cell => {
      if (!cell.isAlive()) {
        return;
      }
      const comp = cell.getComp();
      comp.addOrRemoveCssClass("ag-selection-fill-top", false);
      comp.addOrRemoveCssClass("ag-selection-fill-right", false);
      comp.addOrRemoveCssClass("ag-selection-fill-bottom", false);
      comp.addOrRemoveCssClass("ag-selection-fill-left", false);
    });
    this.markedCells.length = 0;
    this.isUp = false;
    this.isLeft = false;
    this.isReduce = false;
  }
  clearCellValues() {
    this.cellValues.length = 0;
  }
  markPathFrom(initialPosition, currentPosition) {
    this.clearMarkedPath();
    this.clearCellValues();
    if (this.dragAxis === "y") {
      if (this.rowPositionUtils.sameRow(currentPosition, initialPosition)) {
        return;
      }
      const isBefore = this.rowPositionUtils.before(currentPosition, initialPosition);
      const rangeStartRow = this.getRangeStartRow();
      const rangeEndRow = this.getRangeEndRow();
      if (isBefore && (currentPosition.rowPinned == rangeStartRow.rowPinned && currentPosition.rowIndex >= rangeStartRow.rowIndex || rangeStartRow.rowPinned != rangeEndRow.rowPinned && currentPosition.rowPinned == rangeEndRow.rowPinned && currentPosition.rowIndex <= rangeEndRow.rowIndex)) {
        this.reduceVertical(initialPosition, currentPosition);
        this.isReduce = true;
      } else {
        this.extendVertical(initialPosition, currentPosition, isBefore);
        this.isReduce = false;
      }
    } else {
      const initialColumn = initialPosition.column;
      const currentColumn = currentPosition.column;
      if (initialColumn === currentColumn) {
        return;
      }
      const displayedColumns = this.visibleColsService.getAllCols();
      const initialIndex = displayedColumns.indexOf(initialColumn);
      const currentIndex = displayedColumns.indexOf(currentColumn);
      if (currentIndex <= initialIndex && currentIndex >= displayedColumns.indexOf(this.getCellRange().columns[0])) {
        this.reduceHorizontal(initialPosition, currentPosition);
        this.isReduce = true;
      } else {
        this.extendHorizontal(initialPosition, currentPosition, currentIndex < initialIndex);
        this.isReduce = false;
      }
    }
    this.lastCellMarked = currentPosition;
  }
  extendVertical(initialPosition, endPosition, isMovingUp) {
    const {
      navigationService,
      rangeService
    } = this;
    let row = initialPosition;
    do {
      const cellRange = this.getCellRange();
      const colLen = cellRange.columns.length;
      for (let i = 0; i < colLen; i++) {
        const column = cellRange.columns[i];
        const rowPos = {
          rowIndex: row.rowIndex,
          rowPinned: row.rowPinned
        };
        const cellPos = {
          ...rowPos,
          column
        };
        const cellInRange = rangeService.isCellInSpecificRange(cellPos, cellRange);
        const isInitialRow = this.rowPositionUtils.sameRow(row, initialPosition);
        if (isMovingUp) {
          this.isUp = true;
        }
        if (!isInitialRow) {
          const cell = navigationService.getCellByPosition(cellPos);
          if (cell) {
            this.markedCells.push(cell);
            const cellCtrl = cell.getComp();
            if (!cellInRange) {
              cellCtrl.addOrRemoveCssClass("ag-selection-fill-left", i === 0);
              cellCtrl.addOrRemoveCssClass("ag-selection-fill-right", i === colLen - 1);
            }
            cellCtrl.addOrRemoveCssClass(isMovingUp ? "ag-selection-fill-top" : "ag-selection-fill-bottom", this.rowPositionUtils.sameRow(row, endPosition));
          }
        }
      }
      if (this.rowPositionUtils.sameRow(row, endPosition)) {
        break;
      }
    } while (
    // tslint:disable-next-line
    row = isMovingUp ? this.cellNavigationService.getRowAbove(row) : this.cellNavigationService.getRowBelow(row));
  }
  reduceVertical(initialPosition, endPosition) {
    let row = initialPosition;
    do {
      const cellRange = this.getCellRange();
      const colLen = cellRange.columns.length;
      const isLastRow = this.rowPositionUtils.sameRow(row, endPosition);
      for (let i = 0; i < colLen; i++) {
        const rowPos = {
          rowIndex: row.rowIndex,
          rowPinned: row.rowPinned
        };
        const celPos = {
          ...rowPos,
          column: cellRange.columns[i]
        };
        const cell = this.navigationService.getCellByPosition(celPos);
        if (cell) {
          this.markedCells.push(cell);
          const cellComp = cell.getComp();
          cellComp.addOrRemoveCssClass("ag-selection-fill-bottom", this.rowPositionUtils.sameRow(row, endPosition));
        }
      }
      if (isLastRow) {
        break;
      }
    } while (row = this.cellNavigationService.getRowAbove(row));
  }
  extendHorizontal(initialPosition, endPosition, isMovingLeft) {
    const allCols = this.visibleColsService.getAllCols();
    const startCol = allCols.indexOf(isMovingLeft ? endPosition.column : initialPosition.column);
    const endCol = allCols.indexOf(isMovingLeft ? this.getCellRange().columns[0] : endPosition.column);
    const offset = isMovingLeft ? 0 : 1;
    const colsToMark = allCols.slice(startCol + offset, endCol + offset);
    const rangeStartRow = this.getRangeStartRow();
    const rangeEndRow = this.getRangeEndRow();
    colsToMark.forEach(column => {
      let row = rangeStartRow;
      let isLastRow = false;
      do {
        isLastRow = this.rowPositionUtils.sameRow(row, rangeEndRow);
        const cell = this.navigationService.getCellByPosition({
          rowIndex: row.rowIndex,
          rowPinned: row.rowPinned,
          column
        });
        if (cell) {
          this.markedCells.push(cell);
          const cellComp = cell.getComp();
          cellComp.addOrRemoveCssClass("ag-selection-fill-top", this.rowPositionUtils.sameRow(row, rangeStartRow));
          cellComp.addOrRemoveCssClass("ag-selection-fill-bottom", this.rowPositionUtils.sameRow(row, rangeEndRow));
          if (isMovingLeft) {
            this.isLeft = true;
            cellComp.addOrRemoveCssClass("ag-selection-fill-left", column === colsToMark[0]);
          } else {
            cellComp.addOrRemoveCssClass("ag-selection-fill-right", column === (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(colsToMark));
          }
        }
        row = this.cellNavigationService.getRowBelow(row);
      } while (!isLastRow);
    });
  }
  reduceHorizontal(initialPosition, endPosition) {
    const allCols = this.visibleColsService.getAllCols();
    const startCol = allCols.indexOf(endPosition.column);
    const endCol = allCols.indexOf(initialPosition.column);
    const colsToMark = allCols.slice(startCol, endCol);
    const rangeStartRow = this.getRangeStartRow();
    const rangeEndRow = this.getRangeEndRow();
    colsToMark.forEach(column => {
      let row = rangeStartRow;
      let isLastRow = false;
      do {
        isLastRow = this.rowPositionUtils.sameRow(row, rangeEndRow);
        const cell = this.navigationService.getCellByPosition({
          rowIndex: row.rowIndex,
          rowPinned: row.rowPinned,
          column
        });
        if (cell) {
          this.markedCells.push(cell);
          const cellComp = cell.getComp();
          cellComp.addOrRemoveCssClass("ag-selection-fill-right", column === colsToMark[0]);
        }
        row = this.cellNavigationService.getRowBelow(row);
      } while (!isLastRow);
    });
  }
  refresh(cellCtrl) {
    const cellRange = this.rangeService.getCellRanges()[0];
    const isColumnRange = !cellRange.startRow || !cellRange.endRow;
    if (isColumnRange) {
      this.destroy();
      return;
    }
    super.refresh(cellCtrl);
  }
};

// enterprise-modules/range-selection/src/rangeSelection/agRangeHandle.ts

var AgRangeHandle = class extends AbstractSelectionHandle {
  constructor() {
    super(/* html */
    `<div class="ag-range-handle"></div>`);
    this.type = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.SelectionHandleType.RANGE;
    this.rangeFixed = false;
  }
  onDrag(e) {
    const lastCellHovered = this.getLastCellHovered();
    if (!lastCellHovered) {
      return;
    }
    const cellRanges = this.rangeService.getCellRanges();
    const lastRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(cellRanges);
    if (!this.rangeFixed) {
      this.fixRangeStartEnd(lastRange);
      this.rangeFixed = true;
    }
    this.endPosition = {
      rowIndex: lastCellHovered.rowIndex,
      rowPinned: lastCellHovered.rowPinned,
      column: lastCellHovered.column
    };
    if (cellRanges.length === 2 && cellRanges[0].type === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.CellRangeType.DIMENSION && lastRange.type === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.CellRangeType.VALUE) {
      const rowChanged = !this.rowPositionUtils.sameRow(this.endPosition, this.rangeService.getRangeEndRow(lastRange));
      if (rowChanged) {
        this.rangeService.updateRangeEnd(cellRanges[0], {
          ...this.endPosition,
          column: cellRanges[0].columns[0]
        }, true);
      }
    }
    this.rangeService.extendLatestRangeToCell(this.endPosition);
  }
  onDragEnd(e) {
    const cellRange = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(this.rangeService.getCellRanges());
    this.fixRangeStartEnd(cellRange);
    this.rangeFixed = false;
  }
  onDragCancel() {
    this.rangeFixed = false;
  }
  fixRangeStartEnd(cellRange) {
    const startRow = this.rangeService.getRangeStartRow(cellRange);
    const endRow = this.rangeService.getRangeEndRow(cellRange);
    const column = cellRange.columns[0];
    cellRange.startRow = startRow;
    cellRange.endRow = endRow;
    cellRange.startColumn = column;
  }
};

// enterprise-modules/range-selection/src/rangeSelection/selectionHandleFactory.ts
var SelectionHandleFactory = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "selectionHandleFactory";
  }
  createSelectionHandle(type) {
    return this.createBean(type === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.SelectionHandleType.RANGE ? new AgRangeHandle() : new AgFillHandle());
  }
};

// enterprise-modules/range-selection/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/range-selection/src/rangeSelectionModule.ts
var RangeSelectionCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RangeSelectionModule}-core`,
  beans: [RangeService, SelectionHandleFactory],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule]
});
var RangeSelectionApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RangeSelectionModule}-api`,
  apiFunctions: {
    getCellRanges,
    addCellRange,
    clearRangeSelection,
    clearCellSelection: clearRangeSelection
  },
  dependantModules: [RangeSelectionCoreModule]
});
var RangeSelectionModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RangeSelectionModule,
  dependantModules: [RangeSelectionCoreModule, RangeSelectionApiModule]
});


/***/ }),

/***/ 30616:
/*!********************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/rich-select/dist/package/main.esm.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RichSelectModule: () => (/* binding */ RichSelectModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/rich-select/src/richSelectModule.ts



// enterprise-modules/rich-select/src/richSelect/richSelectCellEditor.ts


var RichSelectCellEditor = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.PopupComponent {
  constructor() {
    super(/* html */
    `<div class="ag-cell-edit-wrapper"></div>`);
  }
  init(params) {
    this.params = params;
    const {
      cellStartedEdit,
      values
    } = params;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(values)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("agRichSelectCellEditor requires cellEditorParams.values to be set");
    }
    const {
      params: richSelectParams,
      valuesPromise
    } = this.buildRichSelectParams();
    this.richSelect = this.createManagedBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.AgRichSelect(richSelectParams));
    this.richSelect.addCssClass("ag-cell-editor");
    this.appendChild(this.richSelect);
    if (valuesPromise) {
      valuesPromise.then(values2 => {
        this.richSelect.setValueList({
          valueList: values2,
          refresh: true
        });
        const searchStringCallback = this.getSearchStringCallback(values2);
        if (searchStringCallback) {
          this.richSelect.setSearchStringCreator(searchStringCallback);
        }
      });
    }
    this.addManagedListeners(this.richSelect, {
      fieldPickerValueSelected: this.onEditorPickerValueSelected.bind(this)
    });
    this.focusAfterAttached = cellStartedEdit;
  }
  onEditorPickerValueSelected(e) {
    setTimeout(() => this.params.stopEditing(!e.fromEnterKey));
  }
  buildRichSelectParams() {
    const {
      cellRenderer,
      cellHeight,
      value,
      values,
      formatValue,
      searchDebounceDelay,
      valueListGap,
      valueListMaxHeight,
      valueListMaxWidth,
      allowTyping,
      filterList,
      searchType,
      highlightMatch,
      valuePlaceholder,
      eventKey,
      multiSelect,
      suppressDeselectAll,
      suppressMultiSelectPillRenderer
    } = this.params;
    const ret = {
      value,
      cellRenderer,
      cellRowHeight: cellHeight,
      searchDebounceDelay,
      valueFormatter: formatValue,
      pickerAriaLabelKey: "ariaLabelRichSelectField",
      pickerAriaLabelValue: "Rich Select Field",
      pickerType: "virtual-list",
      pickerGap: valueListGap,
      allowTyping,
      filterList,
      searchType,
      highlightMatch,
      maxPickerHeight: valueListMaxHeight,
      maxPickerWidth: valueListMaxWidth,
      placeholder: valuePlaceholder,
      initialInputValue: eventKey?.length === 1 ? eventKey : void 0,
      multiSelect,
      suppressDeselectAll,
      suppressMultiSelectPillRenderer
    };
    let valuesResult;
    let valuesPromise;
    if (typeof values === "function") {
      valuesResult = values(this.params);
    } else {
      valuesResult = values ?? [];
    }
    if (Array.isArray(valuesResult)) {
      ret.valueList = valuesResult;
      ret.searchStringCreator = this.getSearchStringCallback(valuesResult);
    } else {
      valuesPromise = valuesResult;
    }
    if (multiSelect && allowTyping) {
      this.params.allowTyping = ret.allowTyping = false;
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("agRichSelectCellEditor cannot have `multiSelect` and `allowTyping` set to `true`. AllowTyping has been turned off.");
    }
    return {
      params: ret,
      valuesPromise
    };
  }
  getSearchStringCallback(values) {
    const {
      colDef
    } = this.params;
    if (typeof values[0] !== "object" || !colDef.keyCreator) {
      return;
    }
    return values2 => values2.map(value => {
      const keyParams = this.gos.addGridCommonParams({
        value,
        colDef: this.params.colDef,
        column: this.params.column,
        node: this.params.node,
        data: this.params.data
      });
      return colDef.keyCreator(keyParams);
    });
  }
  // we need to have the gui attached before we can draw the virtual rows, as the
  // virtual row logic needs info about the gui state
  afterGuiAttached() {
    const {
      focusAfterAttached,
      params
    } = this;
    setTimeout(() => {
      if (!this.isAlive()) {
        return;
      }
      if (focusAfterAttached) {
        const focusableEl = this.richSelect.getFocusableElement();
        focusableEl.focus();
        const {
          allowTyping,
          eventKey: eventKey2
        } = this.params;
        if (allowTyping && (!eventKey2 || eventKey2.length !== 1)) {
          focusableEl.select();
        }
      }
      this.richSelect.showPicker();
      const {
        eventKey
      } = params;
      if (eventKey) {
        if (eventKey?.length === 1) {
          this.richSelect.searchTextFromString(eventKey);
        }
      }
    });
  }
  focusIn() {
    this.richSelect.getFocusableElement().focus();
  }
  getValue() {
    return this.richSelect.getValue();
  }
  isPopup() {
    return false;
  }
};

// enterprise-modules/rich-select/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/rich-select/src/richSelectModule.ts
var RichSelectModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RichSelectModule,
  beans: [],
  userComponents: [{
    name: "agRichSelect",
    classImp: RichSelectCellEditor
  }, {
    name: "agRichSelectCellEditor",
    classImp: RichSelectCellEditor
  }],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._EditCoreModule]
});


/***/ }),

/***/ 37857:
/*!*********************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/row-grouping/dist/package/main.esm.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PivotDropZonePanel: () => (/* binding */ PivotDropZonePanel),
/* harmony export */   RowGroupDropZonePanel: () => (/* binding */ RowGroupDropZonePanel),
/* harmony export */   RowGroupingModule: () => (/* binding */ RowGroupingModule),
/* harmony export */   ValuesDropZonePanel: () => (/* binding */ ValuesDropZonePanel)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/row-grouping/src/rowGroupingModule.ts



// enterprise-modules/row-grouping/src/rowGrouping/aggFuncService.ts

var defaultAggFuncNames = {
  sum: "Sum",
  first: "First",
  last: "Last",
  min: "Min",
  max: "Max",
  count: "Count",
  avg: "Average"
};
var AggFuncService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "aggFuncService";
    this.aggFuncsMap = {};
    this.initialised = false;
  }
  postConstruct() {
    this.init();
  }
  init() {
    if (this.initialised) {
      return;
    }
    this.initialiseWithDefaultAggregations();
    this.addAggFuncs(this.gos.get("aggFuncs"));
  }
  initialiseWithDefaultAggregations() {
    const aggMap = this.aggFuncsMap;
    aggMap["sum"] = aggSum;
    aggMap["first"] = aggFirst;
    aggMap["last"] = aggLast;
    aggMap["min"] = aggMin;
    aggMap["max"] = aggMax;
    aggMap["count"] = aggCount;
    aggMap["avg"] = aggAvg;
    this.initialised = true;
  }
  isAggFuncPossible(column, func) {
    const allKeys = this.getFuncNames(column);
    const allowed = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(allKeys, func);
    const funcExists = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(this.aggFuncsMap[func]);
    return allowed && funcExists;
  }
  getDefaultFuncLabel(fctName) {
    return defaultAggFuncNames[fctName] ?? fctName;
  }
  getDefaultAggFunc(column) {
    const defaultAgg = column.getColDef().defaultAggFunc;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(defaultAgg) && this.isAggFuncPossible(column, defaultAgg)) {
      return defaultAgg;
    }
    if (this.isAggFuncPossible(column, "sum")) {
      return "sum";
    }
    const allKeys = this.getFuncNames(column);
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._existsAndNotEmpty)(allKeys) ? allKeys[0] : null;
  }
  addAggFuncs(aggFuncs) {
    this.init();
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._iterateObject)(aggFuncs, (key, aggFunc) => {
      this.aggFuncsMap[key] = aggFunc;
    });
  }
  getAggFunc(name) {
    this.init();
    return this.aggFuncsMap[name];
  }
  getFuncNames(column) {
    const userAllowedFuncs = column.getColDef().allowedAggFuncs;
    return userAllowedFuncs == null ? Object.keys(this.aggFuncsMap).sort() : userAllowedFuncs;
  }
  clear() {
    this.aggFuncsMap = {};
  }
};
function aggSum(params) {
  const {
    values
  } = params;
  let result = null;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (typeof value === "number") {
      if (result === null) {
        result = value;
      } else {
        result += typeof result === "number" ? value : BigInt(value);
      }
    } else if (typeof value === "bigint") {
      if (result === null) {
        result = value;
      } else {
        result = (typeof result === "bigint" ? result : BigInt(result)) + value;
      }
    }
  }
  return result;
}
function aggFirst(params) {
  return params.values.length > 0 ? params.values[0] : null;
}
function aggLast(params) {
  return params.values.length > 0 ? (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(params.values) : null;
}
function aggMin(params) {
  const {
    values
  } = params;
  let result = null;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if ((typeof value === "number" || typeof value === "bigint") && (result === null || result > value)) {
      result = value;
    }
  }
  return result;
}
function aggMax(params) {
  const {
    values
  } = params;
  let result = null;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if ((typeof value === "number" || typeof value === "bigint") && (result === null || result < value)) {
      result = value;
    }
  }
  return result;
}
function aggCount(params) {
  const {
    values
  } = params;
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    result += value != null && typeof value.value === "number" ? value.value : 1;
  }
  const existingAggData = params.rowNode?.aggData?.[params.column.getColId()];
  if (existingAggData && existingAggData.value === result) {
    return existingAggData;
  }
  return {
    value: result,
    toString: function () {
      return this.value.toString();
    },
    // used for sorting
    toNumber: function () {
      return this.value;
    }
  };
}
function aggAvg(params) {
  const {
    values
  } = params;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i];
    let valueToAdd = null;
    if (typeof currentValue === "number" || typeof currentValue === "bigint") {
      valueToAdd = currentValue;
      count++;
    } else if (currentValue != null && (typeof currentValue.value === "number" || typeof currentValue.value === "bigint") && typeof currentValue.count === "number") {
      valueToAdd = currentValue.value * (typeof currentValue.value === "number" ? currentValue.count : BigInt(currentValue.count));
      count += currentValue.count;
    }
    if (typeof valueToAdd === "number") {
      sum += typeof sum === "number" ? valueToAdd : BigInt(valueToAdd);
    } else if (typeof valueToAdd === "bigint") {
      sum = (typeof sum === "bigint" ? sum : BigInt(sum)) + valueToAdd;
    }
  }
  let value = null;
  if (count > 0) {
    value = sum / (typeof sum === "number" ? count : BigInt(count));
  }
  const existingAggData = params.rowNode?.aggData?.[params.column?.getColId()];
  if (existingAggData && existingAggData.count === count && existingAggData.value === value) {
    return existingAggData;
  }
  return {
    count,
    value,
    // the grid by default uses toString to render values for an object, so this
    // is a trick to get the default cellRenderer to display the avg value
    toString: function () {
      return typeof this.value === "number" || typeof this.value === "bigint" ? this.value.toString() : "";
    },
    // used for sorting
    toNumber: function () {
      return this.value;
    }
  };
}

// enterprise-modules/row-grouping/src/rowGrouping/aggregationStage.ts

var AggregationStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "aggregationStage";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.aggFuncService = beans.aggFuncService;
    this.funcColsService = beans.funcColsService;
    this.pivotResultColsService = beans.pivotResultColsService;
    this.valueService = beans.valueService;
  }
  // it's possible to recompute the aggregate without doing the other parts
  // + api.refreshClientSideRowModel('aggregate')
  execute(params) {
    const noValueColumns = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(this.funcColsService.getValueColumns());
    const noUserAgg = !this.gos.getCallback("getGroupRowAgg");
    const changedPathActive = params.changedPath && params.changedPath.isActive();
    if (noValueColumns && noUserAgg && changedPathActive) {
      return;
    }
    const aggDetails = this.createAggDetails(params);
    this.recursivelyCreateAggData(aggDetails);
  }
  createAggDetails(params) {
    const pivotActive = this.columnModel.isPivotActive();
    const measureColumns = this.funcColsService.getValueColumns();
    const pivotColumns = pivotActive ? this.funcColsService.getPivotColumns() : [];
    const aggDetails = {
      alwaysAggregateAtRootLevel: this.gos.get("alwaysAggregateAtRootLevel"),
      groupIncludeTotalFooter: !!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGrandTotalRow)(this.gos),
      changedPath: params.changedPath,
      valueColumns: measureColumns,
      pivotColumns,
      filteredOnly: !this.isSuppressAggFilteredOnly(),
      userAggFunc: this.gos.getCallback("getGroupRowAgg")
    };
    return aggDetails;
  }
  isSuppressAggFilteredOnly() {
    const isGroupAggFiltering = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGroupAggFiltering)(this.gos) !== void 0;
    return isGroupAggFiltering || this.gos.get("suppressAggFilteredOnly");
  }
  recursivelyCreateAggData(aggDetails) {
    const callback = rowNode => {
      const hasNoChildren = !rowNode.hasChildren();
      if (hasNoChildren) {
        if (rowNode.aggData) {
          rowNode.setAggData(null);
        }
        return;
      }
      const isRootNode = rowNode.level === -1;
      if (isRootNode && !aggDetails.groupIncludeTotalFooter) {
        const notPivoting = !this.columnModel.isPivotMode();
        if (!aggDetails.alwaysAggregateAtRootLevel && notPivoting) {
          rowNode.setAggData(null);
          return;
        }
      }
      this.aggregateRowNode(rowNode, aggDetails);
    };
    aggDetails.changedPath.forEachChangedNodeDepthFirst(callback, true);
  }
  aggregateRowNode(rowNode, aggDetails) {
    const measureColumnsMissing = aggDetails.valueColumns.length === 0;
    const pivotColumnsMissing = aggDetails.pivotColumns.length === 0;
    let aggResult;
    if (aggDetails.userAggFunc) {
      aggResult = aggDetails.userAggFunc({
        nodes: rowNode.childrenAfterFilter
      });
    } else if (measureColumnsMissing) {
      aggResult = null;
    } else if (pivotColumnsMissing) {
      aggResult = this.aggregateRowNodeUsingValuesOnly(rowNode, aggDetails);
    } else {
      aggResult = this.aggregateRowNodeUsingValuesAndPivot(rowNode);
    }
    rowNode.setAggData(aggResult);
    if (rowNode.sibling) {
      rowNode.sibling.setAggData(aggResult);
    }
  }
  aggregateRowNodeUsingValuesAndPivot(rowNode) {
    const result = {};
    const secondaryColumns = this.pivotResultColsService.getPivotResultCols()?.list ?? [];
    let canSkipTotalColumns = true;
    for (let i = 0; i < secondaryColumns.length; i++) {
      const secondaryCol = secondaryColumns[i];
      const colDef = secondaryCol.getColDef();
      if (colDef.pivotTotalColumnIds != null) {
        canSkipTotalColumns = false;
        continue;
      }
      const keys = colDef.pivotKeys ?? [];
      let values;
      if (rowNode.leafGroup) {
        values = this.getValuesFromMappedSet(rowNode.childrenMapped, keys, colDef.pivotValueColumn);
      } else {
        values = this.getValuesPivotNonLeaf(rowNode, colDef.colId);
      }
      result[colDef.colId] = this.aggregateValues(values, colDef.pivotValueColumn.getAggFunc(), colDef.pivotValueColumn, rowNode, secondaryCol);
    }
    if (!canSkipTotalColumns) {
      for (let i = 0; i < secondaryColumns.length; i++) {
        const secondaryCol = secondaryColumns[i];
        const colDef = secondaryCol.getColDef();
        if (colDef.pivotTotalColumnIds == null || !colDef.pivotTotalColumnIds.length) {
          continue;
        }
        const aggResults = colDef.pivotTotalColumnIds.map(currentColId => result[currentColId]);
        result[colDef.colId] = this.aggregateValues(aggResults, colDef.pivotValueColumn.getAggFunc(), colDef.pivotValueColumn, rowNode, secondaryCol);
      }
    }
    return result;
  }
  aggregateRowNodeUsingValuesOnly(rowNode, aggDetails) {
    const result = {};
    const changedValueColumns = aggDetails.changedPath.isActive() ? aggDetails.changedPath.getValueColumnsForNode(rowNode, aggDetails.valueColumns) : aggDetails.valueColumns;
    const notChangedValueColumns = aggDetails.changedPath.isActive() ? aggDetails.changedPath.getNotValueColumnsForNode(rowNode, aggDetails.valueColumns) : null;
    const values2d = this.getValuesNormal(rowNode, changedValueColumns, aggDetails.filteredOnly);
    const oldValues = rowNode.aggData;
    changedValueColumns.forEach((valueColumn, index) => {
      result[valueColumn.getId()] = this.aggregateValues(values2d[index], valueColumn.getAggFunc(), valueColumn, rowNode);
    });
    if (notChangedValueColumns && oldValues) {
      notChangedValueColumns.forEach(valueColumn => {
        result[valueColumn.getId()] = oldValues[valueColumn.getId()];
      });
    }
    return result;
  }
  getValuesPivotNonLeaf(rowNode, colId) {
    return rowNode.childrenAfterFilter.map(childNode => childNode.aggData[colId]);
  }
  getValuesFromMappedSet(mappedSet, keys, valueColumn) {
    let mapPointer = mappedSet;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      mapPointer = mapPointer ? mapPointer[key] : null;
    }
    if (!mapPointer) {
      return [];
    }
    return mapPointer.map(rowNode => this.valueService.getValue(valueColumn, rowNode));
  }
  getValuesNormal(rowNode, valueColumns, filteredOnly) {
    const values = [];
    valueColumns.forEach(() => values.push([]));
    const valueColumnCount = valueColumns.length;
    const nodeList = filteredOnly ? rowNode.childrenAfterFilter : rowNode.childrenAfterGroup;
    const rowCount = nodeList.length;
    for (let i = 0; i < rowCount; i++) {
      const childNode = nodeList[i];
      for (let j = 0; j < valueColumnCount; j++) {
        const valueColumn = valueColumns[j];
        const value = this.valueService.getValue(valueColumn, childNode);
        values[j].push(value);
      }
    }
    return values;
  }
  aggregateValues(values, aggFuncOrString, column, rowNode, pivotResultColumn) {
    const aggFunc = typeof aggFuncOrString === "string" ? this.aggFuncService.getAggFunc(aggFuncOrString) : aggFuncOrString;
    if (typeof aggFunc !== "function") {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)(`unrecognised aggregation function ${aggFuncOrString}`);
      return null;
    }
    const aggFuncAny = aggFunc;
    const params = this.gos.addGridCommonParams({
      values,
      column,
      colDef: column ? column.getColDef() : void 0,
      pivotResultColumn,
      rowNode,
      data: rowNode ? rowNode.data : void 0
    });
    return aggFuncAny(params);
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/autoColService.ts

var AutoColService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "autoColService";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.columnFactory = beans.columnFactory;
  }
  createAutoCols(rowGroupCols) {
    const autoCols = [];
    const doingTreeData = this.gos.get("treeData");
    let doingMultiAutoColumn = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isGroupMultiAutoColumn)(this.gos);
    if (doingTreeData && doingMultiAutoColumn) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)('you cannot mix groupDisplayType = "multipleColumns" with treeData, only one column can be used to display groups when doing tree data');
      doingMultiAutoColumn = false;
    }
    if (doingMultiAutoColumn) {
      rowGroupCols.forEach((rowGroupCol, index) => {
        autoCols.push(this.createOneAutoCol(rowGroupCol, index));
      });
    } else {
      autoCols.push(this.createOneAutoCol());
    }
    return autoCols;
  }
  updateAutoCols(autoGroupCols, source) {
    autoGroupCols.forEach((col, index) => this.updateOneAutoCol(col, index, source));
  }
  // rowGroupCol and index are missing if groupDisplayType != "multipleColumns"
  createOneAutoCol(rowGroupCol, index) {
    let colId;
    if (rowGroupCol) {
      colId = `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.GROUP_AUTO_COLUMN_ID}-${rowGroupCol.getId()}`;
    } else {
      colId = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.GROUP_AUTO_COLUMN_ID;
    }
    const colDef = this.createAutoColDef(colId, rowGroupCol, index);
    colDef.colId = colId;
    const newCol = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgColumn(colDef, null, colId, true);
    this.createBean(newCol);
    return newCol;
  }
  /**
   * Refreshes an auto group col to load changes from defaultColDef or autoGroupColDef
   */
  updateOneAutoCol(colToUpdate, index, source) {
    const oldColDef = colToUpdate.getColDef();
    const underlyingColId = typeof oldColDef.showRowGroup == "string" ? oldColDef.showRowGroup : void 0;
    const underlyingColumn = underlyingColId != null ? this.columnModel.getColDefCol(underlyingColId) : void 0;
    const colDef = this.createAutoColDef(colToUpdate.getId(), underlyingColumn ?? void 0, index);
    colToUpdate.setColDef(colDef, null, source);
    this.columnFactory.applyColumnState(colToUpdate, colDef, source);
  }
  createAutoColDef(colId, underlyingColumn, index) {
    let res = this.createBaseColDef(underlyingColumn);
    const autoGroupColumnDef = this.gos.get("autoGroupColumnDef");
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._mergeDeep)(res, autoGroupColumnDef);
    res = this.columnFactory.addColumnDefaultAndTypes(res, colId);
    if (!this.gos.get("treeData")) {
      const noFieldOrValueGetter = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(res.field) && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(res.valueGetter) && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(res.filterValueGetter) && res.filter !== "agGroupColumnFilter";
      if (noFieldOrValueGetter) {
        res.filter = false;
      }
    }
    if (index && index > 0) {
      res.headerCheckboxSelection = false;
    }
    const isSortingCoupled = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isColumnsSortingCoupledToGroup)(this.gos);
    const hasOwnData = res.valueGetter || res.field != null;
    if (isSortingCoupled && !hasOwnData) {
      res.sortIndex = void 0;
      res.initialSort = void 0;
    }
    return res;
  }
  createBaseColDef(rowGroupCol) {
    const userDef = this.gos.get("autoGroupColumnDef");
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const res = {
      headerName: localeTextFunc("group", "Group")
    };
    const userHasProvidedGroupCellRenderer = userDef && (userDef.cellRenderer || userDef.cellRendererSelector);
    if (!userHasProvidedGroupCellRenderer) {
      res.cellRenderer = "agGroupCellRenderer";
    }
    if (rowGroupCol) {
      const colDef = rowGroupCol.getColDef();
      Object.assign(res, {
        headerName: this.columnNameService.getDisplayNameForColumn(rowGroupCol, "header"),
        headerValueGetter: colDef.headerValueGetter
      });
      if (colDef.cellRenderer) {
        Object.assign(res, {
          cellRendererParams: {
            innerRenderer: colDef.cellRenderer,
            innerRendererParams: colDef.cellRendererParams
          }
        });
      }
      res.showRowGroup = rowGroupCol.getColId();
    } else {
      res.showRowGroup = true;
    }
    return res;
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/columnDropZoneService.ts


// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/agGridHeaderDropZones.ts


// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/pivotDropZonePanel.ts


// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/baseDropZonePanel.ts



// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/dropZoneColumnComp.ts


var DropZoneColumnComp = class extends _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.PillDragComp {
  constructor(column, dragSourceDropTarget, ghost, dropZonePurpose, horizontal) {
    super(dragSourceDropTarget, ghost, horizontal, /* html */
    `
                <span role="option">
                    <span data-ref="eDragHandle" class="ag-drag-handle ag-column-drop-cell-drag-handle" role="presentation"></span>
                    <span data-ref="eText" class="ag-column-drop-cell-text" aria-hidden="true"></span>
                    <ag-sort-indicator data-ref="eSortIndicator"></ag-sort-indicator>
                    <span data-ref="eButton" class="ag-column-drop-cell-button" role="presentation"></span>
                </span>
            `, [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.SortIndicatorSelector]);
    this.column = column;
    this.dropZonePurpose = dropZonePurpose;
    this.eSortIndicator = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.popupShowing = false;
  }
  wireBeans(beans) {
    super.wireBeans(beans);
    this.popupService = beans.popupService;
    this.sortController = beans.sortController;
    this.columnModel = beans.columnModel;
    this.columnNameService = beans.columnNameService;
    this.funcColsService = beans.funcColsService;
    this.aggFuncService = beans.aggFuncService;
  }
  postConstruct() {
    this.displayName = this.columnNameService.getDisplayNameForColumn(this.column, "columnDrop");
    super.postConstruct();
    this.setupSort();
    this.addManagedEventListeners({
      sortChanged: () => {
        this.setupAria();
      }
    });
    if (this.isGroupingZone()) {
      this.addManagedPropertyListener("groupLockGroupColumns", () => {
        this.refreshRemove();
        this.refreshDraggable();
        this.setupAria();
      });
    }
  }
  getItem() {
    return this.column;
  }
  getDisplayName() {
    return this.displayName;
  }
  getTooltip() {
    return this.column.getColDef().headerTooltip;
  }
  addAdditionalAriaInstructions(ariaInstructions, translate) {
    const isSortSuppressed = this.gos.get("rowGroupPanelSuppressSort");
    const isFunctionsReadOnly = this.gos.get("functionsReadOnly");
    if (this.isAggregationZone() && !isFunctionsReadOnly) {
      const aggregationMenuAria = translate("ariaDropZoneColumnValueItemDescription", "Press ENTER to change the aggregation type");
      ariaInstructions.push(aggregationMenuAria);
    }
    if (this.isGroupingZone() && this.column.isSortable() && !isSortSuppressed) {
      const sortProgressAria = translate("ariaDropZoneColumnGroupItemDescription", "Press ENTER to sort");
      ariaInstructions.push(sortProgressAria);
    }
    super.addAdditionalAriaInstructions(ariaInstructions, translate);
  }
  isDraggable() {
    return this.isReadOnly();
  }
  isRemovable() {
    return this.isReadOnly();
  }
  isReadOnly() {
    return !this.isGroupingAndLocked() && !this.gos.get("functionsReadOnly");
  }
  getAriaDisplayName() {
    const translate = this.localeService.getLocaleTextFunc();
    const {
      name,
      aggFuncName
    } = this.getColumnAndAggFuncName();
    const aggSeparator = translate("ariaDropZoneColumnComponentAggFuncSeparator", " of ");
    const sortDirection = {
      asc: translate("ariaDropZoneColumnComponentSortAscending", "ascending"),
      desc: translate("ariaDropZoneColumnComponentSortDescending", "descending")
    };
    const columnSort = this.column.getSort();
    const isSortSuppressed = this.gos.get("rowGroupPanelSuppressSort");
    return [aggFuncName && `${aggFuncName}${aggSeparator}`, name, this.isGroupingZone() && !isSortSuppressed && columnSort && `, ${sortDirection[columnSort]}`].filter(part => !!part).join("");
  }
  getColumnAndAggFuncName() {
    const name = this.displayName;
    let aggFuncName = "";
    if (this.isAggregationZone()) {
      const aggFunc = this.column.getAggFunc();
      const aggFuncString = typeof aggFunc === "string" ? aggFunc : "agg";
      const localeTextFunc = this.localeService.getLocaleTextFunc();
      aggFuncName = localeTextFunc(aggFuncString, aggFuncString);
    }
    return {
      name,
      aggFuncName
    };
  }
  setupSort() {
    const canSort = this.column.isSortable();
    const isGroupingZone = this.isGroupingZone();
    if (!canSort || !isGroupingZone) {
      return;
    }
    if (!this.gos.get("rowGroupPanelSuppressSort")) {
      this.eSortIndicator.setupSort(this.column, true);
      const performSort = event => {
        event.preventDefault();
        const sortUsingCtrl = this.gos.get("multiSortKey") === "ctrl";
        const multiSort = sortUsingCtrl ? event.ctrlKey || event.metaKey : event.shiftKey;
        this.sortController.progressSort(this.column, multiSort, "uiColumnSorted");
      };
      this.addGuiEventListener("click", performSort);
      this.addGuiEventListener("keydown", e => {
        const isEnter = e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.ENTER;
        if (isEnter && this.isGroupingZone()) {
          performSort(e);
        }
      });
    }
  }
  getDefaultIconName() {
    return "hide";
  }
  createGetDragItem() {
    const {
      column
    } = this;
    return () => {
      const visibleState = {};
      visibleState[column.getId()] = column.isVisible();
      return {
        columns: [column],
        visibleState
      };
    };
  }
  setupComponents() {
    super.setupComponents();
    if (this.isAggregationZone() && !this.gos.get("functionsReadOnly")) {
      this.addGuiEventListener("click", this.onShowAggFuncSelection.bind(this));
    }
  }
  onKeyDown(e) {
    super.onKeyDown(e);
    const isEnter = e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.ENTER;
    if (isEnter && this.isAggregationZone() && !this.gos.get("functionsReadOnly")) {
      e.preventDefault();
      this.onShowAggFuncSelection();
    }
  }
  getDisplayValue() {
    const {
      name,
      aggFuncName
    } = this.getColumnAndAggFuncName();
    return this.isAggregationZone() ? `${aggFuncName}(${name})` : name;
  }
  onShowAggFuncSelection() {
    if (this.popupShowing) {
      return;
    }
    this.popupShowing = true;
    const virtualList = new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.VirtualList({
      cssIdentifier: "select-agg-func"
    });
    const rows = this.aggFuncService.getFuncNames(this.column);
    const eGui = this.getGui();
    const virtualListGui = virtualList.getGui();
    virtualList.setModel({
      getRow: function (index) {
        return rows[index];
      },
      getRowCount: function () {
        return rows.length;
      }
    });
    this.createBean(virtualList);
    const ePopup = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._loadTemplate)(/* html*/
    `<div class="ag-select-agg-func-popup"></div>`);
    ePopup.style.top = "0px";
    ePopup.style.left = "0px";
    ePopup.appendChild(virtualListGui);
    ePopup.style.width = `${eGui.clientWidth}px`;
    const [focusoutListener] = this.addManagedElementListeners(ePopup, {
      focusout: e => {
        if (!ePopup.contains(e.relatedTarget) && addPopupRes) {
          addPopupRes.hideFunc();
        }
      }
    });
    const popupHiddenFunc = callbackEvent => {
      this.destroyBean(virtualList);
      this.popupShowing = false;
      if (callbackEvent?.key === "Escape") {
        eGui.focus();
      }
      if (focusoutListener) {
        focusoutListener();
      }
    };
    const translate = this.localeService.getLocaleTextFunc();
    const addPopupRes = this.popupService.addPopup({
      modal: true,
      eChild: ePopup,
      closeOnEsc: true,
      closedCallback: popupHiddenFunc,
      ariaLabel: translate("ariaLabelAggregationFunction", "Aggregation Function")
    });
    if (addPopupRes) {
      virtualList.setComponentCreator(this.createAggSelect.bind(this, addPopupRes.hideFunc));
    }
    virtualList.addGuiEventListener("keydown", e => {
      if (e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.ENTER || e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.SPACE) {
        const row = virtualList.getLastFocusedRow();
        if (row == null) {
          return;
        }
        const comp = virtualList.getComponentAt(row);
        if (comp) {
          comp.selectItem();
        }
      }
    });
    this.popupService.positionPopupByComponent({
      type: "aggFuncSelect",
      eventSource: eGui,
      ePopup,
      keepWithinBounds: true,
      column: this.column,
      position: "under"
    });
    virtualList.refresh();
    let rowToFocus = rows.findIndex(r => r === this.column.getAggFunc());
    if (rowToFocus === -1) {
      rowToFocus = 0;
    }
    virtualList.focusRow(rowToFocus);
  }
  createAggSelect(hidePopup, value) {
    const itemSelected = () => {
      hidePopup();
      this.getGui().focus();
      this.funcColsService.setColumnAggFunc(this.column, value, "toolPanelDragAndDrop");
    };
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const aggFuncString = value.toString();
    const aggFuncStringTranslated = localeTextFunc(aggFuncString, aggFuncString);
    const comp = new AggItemComp(itemSelected, aggFuncStringTranslated);
    return comp;
  }
  isGroupingAndLocked() {
    return this.isGroupingZone() && this.columnModel.isColGroupLocked(this.column);
  }
  isAggregationZone() {
    return this.dropZonePurpose === "aggregation";
  }
  isGroupingZone() {
    return this.dropZonePurpose === "rowGroup";
  }
  getDragSourceType() {
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.DragSourceType.ToolPanel;
  }
  destroy() {
    super.destroy();
    this.column = null;
  }
};
var AggItemComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(itemSelected, value) {
    super(/* html */
    `<div class="ag-select-agg-func-item"/>`);
    this.selectItem = itemSelected;
    this.getGui().innerText = value;
    this.addGuiEventListener("click", this.selectItem);
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/baseDropZonePanel.ts
var BaseDropZonePanel = class extends _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.PillDropZonePanel {
  constructor(horizontal, dropZonePurpose) {
    super(horizontal);
    this.dropZonePurpose = dropZonePurpose;
  }
  wireBeans(beans) {
    super.wireBeans(beans);
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
  }
  init(params) {
    super.init(params);
    this.addManagedEventListeners({
      newColumnsLoaded: this.refreshGui.bind(this)
    });
    this.addManagedPropertyListeners(["functionsReadOnly", "rowGroupPanelSuppressSort", "groupLockGroupColumns"], this.refreshGui.bind(this));
  }
  getItems(dragItem) {
    return dragItem.columns ?? [];
  }
  isInterestedIn(type) {
    return type === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.DragSourceType.HeaderCell || type === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.DragSourceType.ToolPanel;
  }
  minimumAllowedNewInsertIndex() {
    const numberOfLockedCols = this.gos.get("groupLockGroupColumns");
    const numberOfGroupCols = this.funcColsService.getRowGroupColumns().length;
    if (numberOfLockedCols === -1) {
      return numberOfGroupCols;
    }
    return Math.min(numberOfLockedCols, numberOfGroupCols);
  }
  showOrHideColumnOnExit(draggingEvent) {
    return this.isRowGroupPanel() && !this.gos.get("suppressRowGroupHidesColumns") && !draggingEvent.fromNudge;
  }
  handleDragEnterEnd(draggingEvent) {
    const hideColumnOnExit = this.showOrHideColumnOnExit(draggingEvent);
    if (hideColumnOnExit) {
      const dragItem = draggingEvent.dragSource.getDragItem();
      const columns = dragItem.columns;
      this.setColumnsVisible(columns, false, "uiColumnDragged");
    }
  }
  handleDragLeaveEnd(draggingEvent) {
    const showColumnOnExit = this.showOrHideColumnOnExit(draggingEvent);
    if (showColumnOnExit) {
      const dragItem = draggingEvent.dragSource.getDragItem();
      this.setColumnsVisible(dragItem.columns, true, "uiColumnDragged");
    }
  }
  setColumnsVisible(columns, visible, source) {
    if (columns) {
      const allowedCols = columns.filter(c => !c.getColDef().lockVisible);
      this.columnModel.setColsVisible(allowedCols, visible, source);
    }
  }
  isRowGroupPanel() {
    return this.dropZonePurpose === "rowGroup";
  }
  createPillComponent(column, dropTarget, ghost, horizontal) {
    return new DropZoneColumnComp(column, dropTarget, ghost, this.dropZonePurpose, horizontal);
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/pivotDropZonePanel.ts
var PivotDropZonePanel = class extends BaseDropZonePanel {
  constructor(horizontal) {
    super(horizontal, "pivot");
  }
  postConstruct() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const emptyMessage = localeTextFunc("pivotColumnsEmptyMessage", "Drag here to set column labels");
    const title = localeTextFunc("pivots", "Column Labels");
    super.init({
      icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("pivotPanel", this.gos, null),
      emptyMessage,
      title
    });
    this.addManagedEventListeners({
      newColumnsLoaded: this.refresh.bind(this),
      columnPivotChanged: this.refresh.bind(this),
      columnPivotModeChanged: this.checkVisibility.bind(this)
    });
    this.refresh();
  }
  getAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const label = translate("ariaPivotDropZonePanelLabel", "Column Labels");
    return label;
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "pivotColumnsList";
    return res;
  }
  refresh() {
    this.checkVisibility();
    this.refreshGui();
  }
  checkVisibility() {
    const pivotMode = this.columnModel.isPivotMode();
    if (this.isHorizontal()) {
      switch (this.gos.get("pivotPanelShow")) {
        case "always":
          this.setDisplayed(pivotMode);
          break;
        case "onlyWhenPivoting":
          {
            const pivotActive = this.columnModel.isPivotActive();
            this.setDisplayed(pivotMode && pivotActive);
            break;
          }
        default:
          this.setDisplayed(false);
          break;
      }
    } else {
      this.setDisplayed(pivotMode);
    }
  }
  isItemDroppable(column, draggingEvent) {
    if (this.gos.get("functionsReadOnly") || !column.isPrimary()) {
      return false;
    }
    return column.isAllowPivot() && (!column.isPivotActive() || this.isSourceEventFromTarget(draggingEvent));
  }
  updateItems(columns) {
    this.funcColsService.setPivotColumns(columns, "toolPanelUi");
  }
  getIconName() {
    return this.isPotentialDndItems() ? "pivot" : "notAllowed";
  }
  getExistingItems() {
    return this.funcColsService.getPivotColumns();
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/rowGroupDropZonePanel.ts

var RowGroupDropZonePanel = class extends BaseDropZonePanel {
  constructor(horizontal) {
    super(horizontal, "rowGroup");
  }
  postConstruct() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const emptyMessage = localeTextFunc("rowGroupColumnsEmptyMessage", "Drag here to set row groups");
    const title = localeTextFunc("groups", "Row Groups");
    super.init({
      icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("rowGroupPanel", this.gos, null),
      emptyMessage,
      title
    });
    this.addManagedEventListeners({
      columnRowGroupChanged: this.refreshGui.bind(this)
    });
  }
  getAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const label = translate("ariaRowGroupDropZonePanelLabel", "Row Groups");
    return label;
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "rowGroupColumnsList";
    return res;
  }
  isItemDroppable(column, draggingEvent) {
    if (this.gos.get("functionsReadOnly") || !column.isPrimary()) {
      return false;
    }
    return column.isAllowRowGroup() && (!column.isRowGroupActive() || this.isSourceEventFromTarget(draggingEvent));
  }
  updateItems(columns) {
    this.funcColsService.setRowGroupColumns(columns, "toolPanelUi");
  }
  getIconName() {
    return this.isPotentialDndItems() ? "group" : "notAllowed";
  }
  getExistingItems() {
    return this.funcColsService.getRowGroupColumns();
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/agGridHeaderDropZones.ts
var AgGridHeaderDropZones = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
  }
  constructor() {
    super();
  }
  postConstruct() {
    this.setGui(this.createNorthPanel());
    const onRowGroupChanged = this.onRowGroupChanged.bind(this);
    this.addManagedEventListeners({
      columnRowGroupChanged: onRowGroupChanged,
      newColumnsLoaded: onRowGroupChanged
    });
    this.addManagedPropertyListener("rowGroupPanelShow", onRowGroupChanged);
    this.addManagedPropertyListener("pivotPanelShow", () => this.onPivotPanelShow());
    this.onRowGroupChanged();
  }
  createNorthPanel() {
    const topPanelGui = document.createElement("div");
    topPanelGui.classList.add("ag-column-drop-wrapper");
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaRole)(topPanelGui, "presentation");
    this.rowGroupComp = new RowGroupDropZonePanel(true);
    this.createManagedBean(this.rowGroupComp);
    this.pivotComp = new PivotDropZonePanel(true);
    this.createManagedBean(this.pivotComp);
    topPanelGui.appendChild(this.rowGroupComp.getGui());
    topPanelGui.appendChild(this.pivotComp.getGui());
    const listener = this.onDropPanelVisible.bind(this);
    this.addManagedListeners(this.rowGroupComp, {
      displayChanged: listener
    });
    this.addManagedListeners(this.pivotComp, {
      displayChanged: listener
    });
    this.onDropPanelVisible();
    return topPanelGui;
  }
  onDropPanelVisible() {
    const bothDisplayed = this.rowGroupComp.isDisplayed() && this.pivotComp.isDisplayed();
    const classStr = "ag-column-drop-horizontal-half-width";
    this.rowGroupComp.addOrRemoveCssClass(classStr, bothDisplayed);
    this.pivotComp.addOrRemoveCssClass(classStr, bothDisplayed);
  }
  onRowGroupChanged() {
    if (!this.rowGroupComp) {
      return;
    }
    const rowGroupPanelShow = this.gos.get("rowGroupPanelShow");
    if (rowGroupPanelShow === "always") {
      this.rowGroupComp.setDisplayed(true);
    } else if (rowGroupPanelShow === "onlyWhenGrouping") {
      const grouping = !this.funcColsService.isRowGroupEmpty();
      this.rowGroupComp.setDisplayed(grouping);
    } else {
      this.rowGroupComp.setDisplayed(false);
    }
  }
  onPivotPanelShow() {
    if (!this.pivotComp) {
      return;
    }
    const pivotPanelShow = this.gos.get("pivotPanelShow");
    if (pivotPanelShow === "always") {
      this.pivotComp.setDisplayed(true);
    } else if (pivotPanelShow === "onlyWhenPivoting") {
      const pivoting = this.columnModel.isPivotActive();
      this.pivotComp.setDisplayed(pivoting);
    } else {
      this.pivotComp.setDisplayed(false);
    }
  }
};
var AgGridHeaderDropZonesSelector = {
  selector: "AG-GRID-HEADER-DROP-ZONES",
  component: AgGridHeaderDropZones
};

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/columnDropZoneService.ts
var ColumnDropZoneService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "columnDropZonesService";
  }
  getDropZoneSelector() {
    return AgGridHeaderDropZonesSelector;
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/filterAggregatesStage.ts

var FilterAggregatesStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "filterAggregatesStage";
  }
  wireBeans(beans) {
    this.filterManager = beans.filterManager;
    this.columnModel = beans.columnModel;
  }
  execute(params) {
    const isPivotMode2 = this.columnModel.isPivotMode();
    const isAggFilterActive = this.filterManager?.isAggregateFilterPresent() || this.filterManager?.isAggregateQuickFilterPresent();
    const defaultPrimaryColumnPredicate = params2 => !params2.node.group;
    const defaultSecondaryColumnPredicate = params2 => params2.node.leafGroup;
    const applyFilterToNode = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getGroupAggFiltering)(this.gos) || (isPivotMode2 ? defaultSecondaryColumnPredicate : defaultPrimaryColumnPredicate);
    const {
      changedPath
    } = params;
    const preserveChildren = (node, recursive = false) => {
      if (node.childrenAfterFilter) {
        node.childrenAfterAggFilter = node.childrenAfterFilter;
        if (recursive) {
          node.childrenAfterAggFilter.forEach(child => preserveChildren(child, recursive));
        }
        this.setAllChildrenCount(node);
      }
      if (node.sibling) {
        node.sibling.childrenAfterAggFilter = node.childrenAfterAggFilter;
      }
    };
    const filterChildren = node => {
      node.childrenAfterAggFilter = node.childrenAfterFilter?.filter(child => {
        const shouldFilterRow = applyFilterToNode({
          node: child
        });
        if (shouldFilterRow) {
          const doesNodePassFilter = this.filterManager.doesRowPassAggregateFilters({
            rowNode: child
          });
          if (doesNodePassFilter) {
            preserveChildren(child, true);
            return true;
          }
        }
        const hasChildPassed = child.childrenAfterAggFilter?.length;
        return hasChildPassed;
      }) || null;
      this.setAllChildrenCount(node);
      if (node.sibling) {
        node.sibling.childrenAfterAggFilter = node.childrenAfterAggFilter;
      }
    };
    changedPath.forEachChangedNodeDepthFirst(isAggFilterActive ? filterChildren : preserveChildren, true);
  }
  /** for tree data, we include all children, groups and leafs */
  setAllChildrenCountTreeData(rowNode) {
    const childrenAfterAggFilter = rowNode.childrenAfterAggFilter;
    let allChildrenCount = 0;
    if (childrenAfterAggFilter) {
      const length = childrenAfterAggFilter.length;
      allChildrenCount = length;
      for (let i = 0; i < length; ++i) {
        allChildrenCount += childrenAfterAggFilter[i].allChildrenCount ?? 0;
      }
    }
    rowNode.setAllChildrenCount(
    // Maintain the historical behaviour:
    // - allChildrenCount is 0 in the root if there are no children
    // - allChildrenCount is null in any non-root row if there are no children
    allChildrenCount === 0 && rowNode.level >= 0 ? null : allChildrenCount);
  }
  /* for grid data, we only count the leafs */
  setAllChildrenCountGridGrouping(rowNode) {
    let allChildrenCount = 0;
    rowNode.childrenAfterAggFilter.forEach(child => {
      if (child.group) {
        allChildrenCount += child.allChildrenCount;
      } else {
        allChildrenCount++;
      }
    });
    rowNode.setAllChildrenCount(allChildrenCount);
  }
  setAllChildrenCount(rowNode) {
    if (!rowNode.hasChildren()) {
      rowNode.setAllChildrenCount(null);
      return;
    }
    if (this.gos.get("treeData")) {
      this.setAllChildrenCountTreeData(rowNode);
    } else {
      this.setAllChildrenCountGridGrouping(rowNode);
    }
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupFilter/groupFilter.ts

var GroupFilter = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.TabGuardComp {
  constructor() {
    super(/* html */
    `
            <div class="ag-group-filter">
                <div data-ref="eGroupField"></div>
                <div data-ref="eUnderlyingFilter"></div>
            </div>
        `);
    this.eGroupField = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eUnderlyingFilter = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.filterManager = beans.filterManager;
    this.columnNameService = beans.columnNameService;
    this.funcColsService = beans.funcColsService;
  }
  postConstruct() {
    this.initialiseTabGuard({});
  }
  init(params) {
    return this.updateParams(params).then(() => {
      this.addManagedEventListeners({
        columnRowGroupChanged: () => this.onColumnRowGroupChanged(),
        filterDestroyed: event => this.onFilterDestroyed(event)
      });
    });
  }
  refresh(params) {
    this.updateParams(params);
    return true;
  }
  updateParams(params) {
    this.params = params;
    this.validateParams();
    return this.updateGroups();
  }
  validateParams() {
    const {
      colDef
    } = this.params;
    if (colDef.field) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)('Group Column Filter does not work with the colDef property "field". This property will be ignored.');
    }
    if (colDef.filterValueGetter) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)('Group Column Filter does not work with the colDef property "filterValueGetter". This property will be ignored.');
    }
    if (colDef.filterParams) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)('Group Column Filter does not work with the colDef property "filterParams". This property will be ignored.');
    }
  }
  updateGroups() {
    const sourceColumns = this.updateGroupField();
    return this.getUnderlyingFilters(sourceColumns);
  }
  getSourceColumns() {
    this.groupColumn = this.params.column;
    if (this.gos.get("treeData")) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Group Column Filter does not work with Tree Data enabled. Please disable Tree Data, or use a different filter.");
      return [];
    }
    const sourceColumns = this.funcColsService.getSourceColumnsForGroupColumn(this.groupColumn);
    if (!sourceColumns) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Group Column Filter only works on group columns. Please use a different filter.");
      return [];
    }
    return sourceColumns;
  }
  updateGroupField() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.eGroupField);
    if (this.eGroupFieldSelect) {
      this.destroyBean(this.eGroupFieldSelect);
    }
    const allSourceColumns = this.getSourceColumns();
    const sourceColumns = allSourceColumns.filter(sourceColumn => sourceColumn.isFilterAllowed());
    if (!sourceColumns.length) {
      this.selectedColumn = void 0;
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupField, false);
      return null;
    }
    if (allSourceColumns.length === 1) {
      this.selectedColumn = sourceColumns[0];
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupField, false);
    } else {
      if (!this.selectedColumn || !sourceColumns.some(column => column.getId() === this.selectedColumn.getId())) {
        this.selectedColumn = sourceColumns[0];
      }
      this.createGroupFieldSelectElement(sourceColumns);
      this.eGroupField.appendChild(this.eGroupFieldSelect.getGui());
      this.eGroupField.appendChild((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._loadTemplate)(/* html */
      `<div class="ag-filter-separator"></div>`));
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupField, true);
    }
    return sourceColumns;
  }
  createGroupFieldSelectElement(sourceColumns) {
    this.eGroupFieldSelect = this.createManagedBean(new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgSelect());
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    this.eGroupFieldSelect.setLabel(localeTextFunc("groupFilterSelect", "Select field:"));
    this.eGroupFieldSelect.setLabelAlignment("top");
    this.eGroupFieldSelect.addOptions(sourceColumns.map(sourceColumn => ({
      value: sourceColumn.getId(),
      text: this.columnNameService.getDisplayNameForColumn(sourceColumn, "groupFilter", false) ?? void 0
    })));
    this.eGroupFieldSelect.setValue(this.selectedColumn.getId());
    this.eGroupFieldSelect.onValueChange(newValue => this.updateSelectedColumn(newValue));
    this.eGroupFieldSelect.addCssClass("ag-group-filter-field-select-wrapper");
    if (sourceColumns.length === 1) {
      this.eGroupFieldSelect.setDisabled(true);
    }
  }
  getUnderlyingFilters(sourceColumns) {
    if (!sourceColumns) {
      this.filterColumnPairs = void 0;
      this.selectedFilter = void 0;
      this.groupColumn.setFilterActive(false, "columnRowGroupChanged");
      return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
    }
    const filterPromises = [];
    const filterColumnPairs = [];
    sourceColumns.forEach(column => {
      const filterWrapper = this.filterManager.getOrCreateFilterWrapper(column);
      if (filterWrapper?.filterPromise) {
        filterPromises.push(filterWrapper.filterPromise.then(filter => {
          if (filter) {
            filterColumnPairs.push({
              filter,
              column
            });
          }
          if (column.getId() === this.selectedColumn.getId()) {
            this.selectedFilter = filter ?? void 0;
          }
          return filter;
        }));
      }
    });
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.all(filterPromises).then(() => {
      this.filterColumnPairs = filterColumnPairs;
      this.groupColumn.setFilterActive(this.isFilterActive(), "columnRowGroupChanged");
    });
  }
  addUnderlyingFilterElement() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.eUnderlyingFilter);
    if (!this.selectedColumn) {
      return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
    }
    const comp = this.createManagedBean(new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.FilterWrapperComp(this.selectedColumn, "COLUMN_MENU"));
    this.filterWrapperComp = comp;
    if (!comp.hasFilter()) {
      return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
    }
    this.eUnderlyingFilter.appendChild(comp.getGui());
    return comp.getFilter()?.then(() => {
      comp.afterGuiAttached?.(this.afterGuiAttachedParams);
      if (!this.afterGuiAttachedParams?.suppressFocus && this.eGroupFieldSelect && !this.eGroupFieldSelect.isDisabled()) {
        this.eGroupFieldSelect.getFocusableElement().focus();
      }
    }) ?? _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
  }
  updateSelectedColumn(columnId) {
    if (!columnId) {
      return;
    }
    this.filterWrapperComp?.afterGuiDetached();
    this.destroyBean(this.filterWrapperComp);
    const selectedFilterColumnPair = this.getFilterColumnPair(columnId);
    this.selectedColumn = selectedFilterColumnPair?.column;
    this.selectedFilter = selectedFilterColumnPair?.filter;
    this.dispatchLocalEvent({
      type: "selectedColumnChanged"
    });
    this.addUnderlyingFilterElement();
  }
  isFilterActive() {
    return !!this.filterColumnPairs?.some(({
      filter
    }) => filter.isFilterActive());
  }
  doesFilterPass() {
    return true;
  }
  getModel() {
    return null;
  }
  setModel() {
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
  }
  afterGuiAttached(params) {
    this.afterGuiAttachedParams = params;
    this.addUnderlyingFilterElement();
  }
  afterGuiDetached() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.eUnderlyingFilter);
    this.selectedFilter?.afterGuiDetached?.();
  }
  onColumnRowGroupChanged() {
    this.updateGroups().then(() => {
      this.dispatchLocalEvent({
        type: "columnRowGroupChanged"
      });
    });
  }
  onFilterDestroyed({
    column: eventColumn,
    source
  }) {
    if (source === "gridDestroyed") {
      return;
    }
    const colId = eventColumn.getColId();
    if (this.filterColumnPairs?.some(({
      column
    }) => column.getColId() === colId)) {
      setTimeout(() => {
        if (this.isAlive()) {
          this.updateGroups();
        }
      });
    }
  }
  getFilterColumnPair(columnId) {
    if (!columnId) {
      return void 0;
    }
    return this.filterColumnPairs?.find(({
      column
    }) => column.getId() === columnId);
  }
  getSelectedFilter() {
    return this.selectedFilter;
  }
  getSelectedColumn() {
    return this.selectedColumn;
  }
  isFilterAllowed() {
    return !!this.selectedColumn;
  }
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupFilter/groupFloatingFilter.ts

var GroupFloatingFilterComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `
            <div data-ref="eFloatingFilter" class="ag-group-floating-filter ag-floating-filter-input" role="presentation"></div>
        `);
    this.eFloatingFilter = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.haveAddedColumnListeners = false;
  }
  wireBeans(beans) {
    this.columnNameService = beans.columnNameService;
    this.filterManager = beans.filterManager;
  }
  init(params) {
    this.params = params;
    const canShowUnderlyingFloatingFilter = this.gos.get("groupDisplayType") === "multipleColumns";
    return new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise(resolve => {
      this.params.parentFilterInstance(parentFilterInstance => {
        this.parentFilterInstance = parentFilterInstance;
        if (canShowUnderlyingFloatingFilter) {
          this.setupUnderlyingFloatingFilterElement().then(() => resolve());
        } else {
          this.setupReadOnlyFloatingFilterElement();
          resolve();
        }
      });
    }).then(() => {
      this.addManagedListeners(this.parentFilterInstance, {
        selectedColumnChanged: this.onSelectedColumnChanged.bind(this),
        columnRowGroupChanged: this.onColumnRowGroupChanged.bind(this)
      });
    });
  }
  onParamsUpdated(params) {
    this.refresh(params);
  }
  refresh(params) {
    this.params = params;
    this.setParams();
  }
  setParams() {
    const displayName = this.columnNameService.getDisplayNameForColumn(this.params.column, "header", true);
    const translate = this.localeService.getLocaleTextFunc();
    this.eFloatingFilterText?.setInputAriaLabel(`${displayName} ${translate("ariaFilterInput", "Filter Input")}`);
  }
  setupReadOnlyFloatingFilterElement() {
    if (!this.eFloatingFilterText) {
      this.eFloatingFilterText = this.createManagedBean(new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgInputTextField());
      this.eFloatingFilterText.setDisabled(true).addGuiEventListener("click", () => this.params.showParentFilter());
      this.setParams();
    }
    this.updateDisplayedValue();
    this.eFloatingFilter.appendChild(this.eFloatingFilterText.getGui());
  }
  setupUnderlyingFloatingFilterElement() {
    this.showingUnderlyingFloatingFilter = false;
    this.underlyingFloatingFilter = void 0;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.eFloatingFilter);
    const column = this.parentFilterInstance.getSelectedColumn();
    if (column && !column.isVisible()) {
      const compDetails = this.filterManager.getFloatingFilterCompDetails(column, this.params.showParentFilter);
      if (compDetails) {
        if (!this.haveAddedColumnListeners) {
          this.haveAddedColumnListeners = true;
          this.addManagedListeners(column, {
            visibleChanged: this.onColumnVisibleChanged.bind(this),
            colDefChanged: this.onColDefChanged.bind(this)
          });
        }
        return compDetails.newAgStackInstance().then(floatingFilter => {
          this.underlyingFloatingFilter = floatingFilter;
          this.underlyingFloatingFilter?.onParentModelChanged(this.parentFilterInstance.getSelectedFilter()?.getModel());
          this.appendChild(floatingFilter.getGui());
          this.showingUnderlyingFloatingFilter = true;
        });
      }
    }
    this.setupReadOnlyFloatingFilterElement();
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
  }
  onColumnVisibleChanged() {
    this.setupUnderlyingFloatingFilterElement();
  }
  onColDefChanged(event) {
    if (!event.column) {
      return;
    }
    const compDetails = this.filterManager.getFloatingFilterCompDetails(event.column, this.params.showParentFilter);
    if (compDetails) {
      if (this.underlyingFloatingFilter?.refresh) {
        this.underlyingFloatingFilter.refresh(compDetails.params);
      } else {
        this.underlyingFloatingFilter?.onParamsUpdated?.(compDetails.params);
      }
    }
  }
  onParentModelChanged(_model, event) {
    if (this.showingUnderlyingFloatingFilter) {
      this.underlyingFloatingFilter?.onParentModelChanged(this.parentFilterInstance.getSelectedFilter()?.getModel(), event);
    } else {
      this.updateDisplayedValue();
    }
  }
  updateDisplayedValue() {
    if (!this.parentFilterInstance || !this.eFloatingFilterText) {
      return;
    }
    const selectedFilter = this.parentFilterInstance.getSelectedFilter();
    if (!selectedFilter) {
      this.eFloatingFilterText.setValue("");
      this.eFloatingFilterText.setDisplayed(false);
      return;
    }
    this.eFloatingFilterText.setDisplayed(true);
    if (selectedFilter.getModelAsString) {
      const filterModel = selectedFilter.getModel();
      this.eFloatingFilterText.setValue(filterModel == null ? "" : selectedFilter.getModelAsString(filterModel));
    } else {
      this.eFloatingFilterText.setValue("");
    }
  }
  onSelectedColumnChanged() {
    if (!this.showingUnderlyingFloatingFilter) {
      this.updateDisplayedValue();
    }
  }
  onColumnRowGroupChanged() {
    if (!this.showingUnderlyingFloatingFilter) {
      this.updateDisplayedValue();
    }
  }
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/groupStage.ts


// enterprise-modules/row-grouping/src/rowGrouping/groupStage/groupStrategy/groupStrategy.ts


// enterprise-modules/row-grouping/src/rowGrouping/groupStage/groupStrategy/batchRemover.ts
var BatchRemover = class {
  constructor() {
    this.allSets = {};
    this.allParents = [];
  }
  removeFromChildrenAfterGroup(parent, child) {
    const set = this.getSet(parent);
    set.removeFromChildrenAfterGroup[child.id] = true;
  }
  isRemoveFromAllLeafChildren(parent, child) {
    const set = this.getSet(parent);
    return !!set.removeFromAllLeafChildren[child.id];
  }
  preventRemoveFromAllLeafChildren(parent, child) {
    const set = this.getSet(parent);
    delete set.removeFromAllLeafChildren[child.id];
  }
  removeFromAllLeafChildren(parent, child) {
    const set = this.getSet(parent);
    set.removeFromAllLeafChildren[child.id] = true;
  }
  getSet(parent) {
    if (!this.allSets[parent.id]) {
      this.allSets[parent.id] = {
        removeFromAllLeafChildren: {},
        removeFromChildrenAfterGroup: {}
      };
      this.allParents.push(parent);
    }
    return this.allSets[parent.id];
  }
  getAllParents() {
    return this.allParents;
  }
  flush() {
    this.allParents.forEach(parent => {
      const nodeDetails = this.allSets[parent.id];
      parent.childrenAfterGroup = parent.childrenAfterGroup.filter(child => !nodeDetails.removeFromChildrenAfterGroup[child.id]);
      parent.allLeafChildren = parent.allLeafChildren?.filter(child => !nodeDetails.removeFromAllLeafChildren[child.id]) ?? null;
      parent.updateHasChildren();
      const sibling = parent.sibling;
      if (sibling) {
        sibling.childrenAfterGroup = parent.childrenAfterGroup;
        sibling.allLeafChildren = parent.allLeafChildren;
      }
    });
    this.allSets = {};
    this.allParents.length = 0;
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/groupStrategy/sortGroupChildren.ts
function sortGroupChildren(rowNodes) {
  if (!rowNodes) {
    return false;
  }
  const length = rowNodes.length;
  if (length < 2) {
    return false;
  }
  let atLeastOneOutOfOrder = false;
  for (let i = 1; i < length; i++) {
    if (compareGroupChildren(rowNodes[i - 1], rowNodes[i]) > 0) {
      atLeastOneOutOfOrder = true;
      break;
    }
  }
  if (!atLeastOneOutOfOrder) {
    return false;
  }
  rowNodes.sort(compareGroupChildren);
  return true;
}
function compareGroupChildren(nodeA, nodeB) {
  const positionA = nodeA.sourceRowIndex;
  const positionB = nodeB.sourceRowIndex;
  const aHasIndex = positionA >= 0;
  const bHasIndex = positionB >= 0;
  const bothNodesAreUserNodes = aHasIndex && bHasIndex;
  const bothNodesAreFillerNodes = !aHasIndex && !bHasIndex;
  if (bothNodesAreUserNodes) {
    return positionA - positionB;
  }
  if (bothNodesAreFillerNodes) {
    return nodeA.__objectId - nodeB.__objectId;
  }
  if (aHasIndex) {
    return 1;
  }
  return -1;
}

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/groupStrategy/groupStrategy.ts
var GroupStrategy = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  wireBeans(beans) {
    this.beans = beans;
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
    this.valueService = beans.valueService;
    this.selectionService = beans.selectionService;
    this.showRowGroupColsService = beans.showRowGroupColsService;
  }
  execute(params) {
    const details = this.createGroupingDetails(params);
    if (details.transactions) {
      this.handleTransaction(details);
    } else {
      const afterColsChanged = params.afterColumnsChanged === true;
      this.shotgunResetEverything(details, afterColsChanged);
    }
    this.positionLeafsAndGroups(params.changedPath);
    this.orderGroups(details);
  }
  positionLeafsAndGroups(changedPath) {
    changedPath.forEachChangedNodeDepthFirst(group => {
      if (group.childrenAfterGroup) {
        const leafNodes = [];
        const groupNodes = [];
        let unbalancedNode;
        group.childrenAfterGroup.forEach(row => {
          if (!row.childrenAfterGroup?.length) {
            leafNodes.push(row);
          } else {
            if (row.key === "" && !unbalancedNode) {
              unbalancedNode = row;
            } else {
              groupNodes.push(row);
            }
          }
        });
        if (unbalancedNode) {
          groupNodes.push(unbalancedNode);
        }
        group.childrenAfterGroup = [...leafNodes, ...groupNodes];
      }
    }, false);
  }
  createGroupingDetails(params) {
    const {
      rowNode,
      changedPath,
      rowNodeTransactions,
      rowNodesOrderChanged
    } = params;
    const groupedCols = this.funcColsService.getRowGroupColumns();
    const details = {
      expandByDefault: this.gos.get("groupDefaultExpanded"),
      groupedCols,
      rootNode: rowNode,
      pivotMode: this.columnModel.isPivotMode(),
      groupedColCount: groupedCols?.length ?? 0,
      transactions: rowNodeTransactions,
      rowNodesOrderChanged: !!rowNodesOrderChanged,
      // if no transaction, then it's shotgun, changed path would be 'not active' at this point anyway
      changedPath,
      groupAllowUnbalanced: this.gos.get("groupAllowUnbalanced"),
      isGroupOpenByDefault: this.gos.getCallback("isGroupOpenByDefault"),
      initialGroupOrderComparator: this.gos.getCallback("initialGroupOrderComparator"),
      suppressGroupMaintainValueType: this.gos.get("suppressGroupMaintainValueType"),
      keyCreators: groupedCols?.map(column => column.getColDef().keyCreator) ?? []
    };
    return details;
  }
  handleTransaction(details) {
    details.transactions.forEach(tran => {
      const batchRemover = new BatchRemover();
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._existsAndNotEmpty)(tran.remove)) {
        this.removeNodes(tran.remove, details, batchRemover);
      }
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._existsAndNotEmpty)(tran.update)) {
        this.moveNodesInWrongPath(tran.update, details, batchRemover);
      }
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._existsAndNotEmpty)(tran.add)) {
        this.insertNodes(tran.add, details);
      }
      const parentsWithChildrenRemoved = batchRemover.getAllParents().slice();
      batchRemover.flush();
      this.removeEmptyGroups(parentsWithChildrenRemoved, details);
    });
    if (details.rowNodesOrderChanged) {
      this.sortChildren(details);
    }
  }
  // this is used when doing delta updates, eg Redux, keeps nodes in right order
  sortChildren(details) {
    details.changedPath.forEachChangedNodeDepthFirst(node => {
      const didSort = sortGroupChildren(node.childrenAfterGroup);
      if (didSort) {
        details.changedPath.addParentNode(node);
      }
    }, false, true);
  }
  orderGroups(details) {
    const comparator = details.initialGroupOrderComparator;
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(comparator)) {
      recursiveSort(details.rootNode);
    }
    function recursiveSort(rowNode) {
      const doSort = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(rowNode.childrenAfterGroup) &&
      // we only want to sort groups, so we do not sort leafs (a leaf group has leafs as children)
      !rowNode.leafGroup;
      if (doSort) {
        rowNode.childrenAfterGroup.sort((nodeA, nodeB) => comparator({
          nodeA,
          nodeB
        }));
        rowNode.childrenAfterGroup.forEach(childNode => recursiveSort(childNode));
      }
    }
  }
  getExistingPathForNode(node, details) {
    const res = [];
    let pointer = node.parent;
    while (pointer && pointer !== details.rootNode) {
      res.push({
        key: pointer.key,
        rowGroupColumn: pointer.rowGroupColumn,
        field: pointer.field
      });
      pointer = pointer.parent;
    }
    res.reverse();
    return res;
  }
  moveNodesInWrongPath(childNodes, details, batchRemover) {
    childNodes.forEach(childNode => {
      if (details.changedPath.isActive()) {
        details.changedPath.addParentNode(childNode.parent);
      }
      const infoToKeyMapper = item => item.key;
      const oldPath = this.getExistingPathForNode(childNode, details).map(infoToKeyMapper);
      const newPath = this.getGroupInfo(childNode, details).map(infoToKeyMapper);
      const nodeInCorrectPath = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._areEqual)(oldPath, newPath);
      if (!nodeInCorrectPath) {
        this.moveNode(childNode, details, batchRemover);
      }
    });
  }
  moveNode(childNode, details, batchRemover) {
    this.removeNodesFromParents([childNode], details, batchRemover);
    this.insertOneNode(childNode, details, batchRemover);
    childNode.setData(childNode.data);
    if (details.changedPath.isActive()) {
      const newParent = childNode.parent;
      details.changedPath.addParentNode(newParent);
    }
  }
  removeNodes(leafRowNodes, details, batchRemover) {
    this.removeNodesFromParents(leafRowNodes, details, batchRemover);
    if (details.changedPath.isActive()) {
      leafRowNodes.forEach(rowNode => details.changedPath.addParentNode(rowNode.parent));
    }
  }
  forEachParentGroup(details, group, callback) {
    let pointer = group;
    while (pointer && pointer !== details.rootNode) {
      callback(pointer);
      pointer = pointer.parent;
    }
  }
  removeNodesFromParents(nodesToRemove, details, provided) {
    const batchRemoverIsLocal = provided == null;
    const batchRemoverToUse = provided ? provided : new BatchRemover();
    nodesToRemove.forEach(nodeToRemove => {
      this.removeFromParent(nodeToRemove, batchRemoverToUse);
      this.forEachParentGroup(details, nodeToRemove.parent, parentNode => {
        batchRemoverToUse.removeFromAllLeafChildren(parentNode, nodeToRemove);
      });
    });
    if (batchRemoverIsLocal) {
      batchRemoverToUse.flush();
    }
  }
  removeEmptyGroups(possibleEmptyGroups, details) {
    let checkAgain = true;
    const groupShouldBeRemoved = rowNode => {
      const mapKey = this.getChildrenMappedKey(rowNode.key, rowNode.rowGroupColumn);
      const parentRowNode = rowNode.parent;
      const groupAlreadyRemoved = parentRowNode?.childrenMapped ? !parentRowNode.childrenMapped[mapKey] : true;
      if (groupAlreadyRemoved) {
        return false;
      }
      return !!rowNode.group && (rowNode.childrenAfterGroup?.length ?? 0) === 0;
    };
    while (checkAgain) {
      checkAgain = false;
      const batchRemover = new BatchRemover();
      possibleEmptyGroups.forEach(possibleEmptyGroup => {
        this.forEachParentGroup(details, possibleEmptyGroup, rowNode => {
          if (groupShouldBeRemoved(rowNode)) {
            checkAgain = true;
            this.removeFromParent(rowNode, batchRemover);
            rowNode.setSelectedParams({
              newValue: false,
              source: "rowGroupChanged"
            });
          }
        });
      });
      batchRemover.flush();
    }
  }
  // removes the node from the parent by:
  // a) removing from childrenAfterGroup (using batchRemover if present, otherwise immediately)
  // b) removing from childrenMapped (immediately)
  // c) setRowTop(null) - as the rowRenderer uses this to know the RowNode is no longer needed
  // d) setRowIndex(null) - as the rowNode will no longer be displayed.
  removeFromParent(child, batchRemover) {
    if (child.parent) {
      if (batchRemover) {
        batchRemover.removeFromChildrenAfterGroup(child.parent, child);
      } else {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._removeFromArray)(child.parent.childrenAfterGroup, child);
        child.parent.updateHasChildren();
      }
    }
    const mapKey = this.getChildrenMappedKey(child.key, child.rowGroupColumn);
    if (child.parent?.childrenMapped) {
      delete child.parent.childrenMapped[mapKey];
    }
    child.setRowTop(null);
    child.setRowIndex(null);
  }
  /**
   * This is idempotent, but relies on the `key` field being the same throughout a RowNode's lifetime
   */
  addToParent(child, parent) {
    const mapKey = this.getChildrenMappedKey(child.key, child.rowGroupColumn);
    if (parent?.childrenMapped) {
      if (parent.childrenMapped[mapKey] !== child) {
        parent.childrenMapped[mapKey] = child;
        parent.childrenAfterGroup.push(child);
        parent.setGroup(true);
      }
    }
  }
  areGroupColsEqual(d1, d2) {
    if (d1 == null || d2 == null || d1.pivotMode !== d2.pivotMode) {
      return false;
    }
    return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._areEqual)(d1.groupedCols, d2.groupedCols) && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._areEqual)(d1.keyCreators, d2.keyCreators);
  }
  checkAllGroupDataAfterColsChanged(details) {
    const recurse = rowNodes => {
      if (!rowNodes) {
        return;
      }
      rowNodes.forEach(rowNode => {
        const isLeafNode = !rowNode.group;
        if (isLeafNode) {
          return;
        }
        const groupInfo = {
          field: rowNode.field,
          key: rowNode.key,
          rowGroupColumn: rowNode.rowGroupColumn,
          leafNode: rowNode.allLeafChildren?.[0]
        };
        this.setGroupData(rowNode, groupInfo, details);
        recurse(rowNode.childrenAfterGroup);
      });
    };
    recurse(details.rootNode.childrenAfterGroup);
  }
  shotgunResetEverything(details, afterColumnsChanged) {
    if (this.noChangeInGroupingColumns(details, afterColumnsChanged)) {
      return;
    }
    this.selectionService.filterFromSelection(node => node && !node.group);
    const {
      groupedCols
    } = details;
    const rootNode = details.rootNode;
    rootNode.leafGroup = groupedCols.length === 0;
    rootNode.childrenAfterGroup = [];
    rootNode.childrenMapped = {};
    rootNode.updateHasChildren();
    const sibling = rootNode.sibling;
    if (sibling) {
      sibling.childrenAfterGroup = rootNode.childrenAfterGroup;
      sibling.childrenMapped = rootNode.childrenMapped;
    }
    this.insertNodes(rootNode.allLeafChildren, details);
  }
  noChangeInGroupingColumns(details, afterColumnsChanged) {
    let noFurtherProcessingNeeded = false;
    const groupDisplayColumns = this.showRowGroupColsService.getShowRowGroupCols();
    const newGroupDisplayColIds = groupDisplayColumns ? groupDisplayColumns.map(c => c.getId()).join("-") : "";
    if (afterColumnsChanged) {
      noFurtherProcessingNeeded = this.areGroupColsEqual(details, this.oldGroupingDetails);
      if (this.oldGroupDisplayColIds !== newGroupDisplayColIds) {
        this.checkAllGroupDataAfterColsChanged(details);
      }
    }
    this.oldGroupingDetails = details;
    this.oldGroupDisplayColIds = newGroupDisplayColIds;
    return noFurtherProcessingNeeded;
  }
  insertNodes(newRowNodes, details) {
    newRowNodes.forEach(rowNode => {
      this.insertOneNode(rowNode, details);
      if (details.changedPath.isActive()) {
        details.changedPath.addParentNode(rowNode.parent);
      }
    });
  }
  insertOneNode(childNode, details, batchRemover) {
    const path = this.getGroupInfo(childNode, details);
    const parentGroup = this.findParentForNode(childNode, path, details, batchRemover);
    if (!parentGroup.group) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`duplicate group keys for row data, keys should be unique`, [parentGroup.data, childNode.data]);
    }
    childNode.parent = parentGroup;
    childNode.level = path.length;
    parentGroup.childrenAfterGroup.push(childNode);
    parentGroup.updateHasChildren();
  }
  findParentForNode(childNode, path, details, batchRemover) {
    let nextNode = details.rootNode;
    path.forEach((groupInfo, level) => {
      nextNode = this.getOrCreateNextNode(nextNode, groupInfo, level, details);
      if (!batchRemover?.isRemoveFromAllLeafChildren(nextNode, childNode)) {
        nextNode.allLeafChildren.push(childNode);
      } else {
        batchRemover?.preventRemoveFromAllLeafChildren(nextNode, childNode);
      }
    });
    return nextNode;
  }
  getOrCreateNextNode(parentGroup, groupInfo, level, details) {
    const key = this.getChildrenMappedKey(groupInfo.key, groupInfo.rowGroupColumn);
    let nextNode = parentGroup?.childrenMapped?.[key];
    if (!nextNode) {
      nextNode = this.createGroup(groupInfo, parentGroup, level, details);
      this.addToParent(nextNode, parentGroup);
    }
    return nextNode;
  }
  createGroup(groupInfo, parent, level, details) {
    const groupNode = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode(this.beans);
    groupNode.group = true;
    groupNode.field = groupInfo.field;
    groupNode.rowGroupColumn = groupInfo.rowGroupColumn;
    this.setGroupData(groupNode, groupInfo, details);
    groupNode.key = groupInfo.key;
    groupNode.id = this.createGroupId(groupNode, parent, level);
    groupNode.level = level;
    groupNode.leafGroup = level === details.groupedColCount - 1;
    groupNode.allLeafChildren = [];
    groupNode.setAllChildrenCount(0);
    groupNode.rowGroupIndex = level;
    groupNode.childrenAfterGroup = [];
    groupNode.childrenMapped = {};
    groupNode.updateHasChildren();
    groupNode.parent = parent;
    this.setExpandedInitialValue(details, groupNode);
    return groupNode;
  }
  createGroupId(node, parent, level) {
    const createGroupId = (node2, parent2) => {
      if (!node2.rowGroupColumn) {
        return null;
      }
      const parentId = parent2 ? createGroupId(parent2, parent2.parent, 0) : null;
      return `${parentId == null ? "" : parentId + "-"}${node2.rowGroupColumn.getColId()}-${node2.key}`;
    };
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode.ID_PREFIX_ROW_GROUP + createGroupId(node, parent, level);
  }
  setGroupData(groupNode, groupInfo, details) {
    groupNode.groupData = {};
    const groupDisplayCols = this.showRowGroupColsService.getShowRowGroupCols();
    groupDisplayCols.forEach(col => {
      const groupColumn = groupNode.rowGroupColumn;
      const isRowGroupDisplayed = groupColumn !== null && col.isRowGroupDisplayed(groupColumn.getId());
      if (isRowGroupDisplayed) {
        if (details.suppressGroupMaintainValueType) {
          groupNode.groupData[col.getColId()] = groupInfo.key;
        } else {
          groupNode.groupData[col.getColId()] = this.valueService.getValue(groupColumn, groupInfo.leafNode);
        }
      }
    });
  }
  getChildrenMappedKey(key, rowGroupColumn) {
    return rowGroupColumn ? rowGroupColumn.getId() + "-" + key : key;
  }
  setExpandedInitialValue(details, groupNode) {
    if (details.pivotMode && groupNode.leafGroup) {
      groupNode.expanded = false;
      return;
    }
    const userCallback = details.isGroupOpenByDefault;
    if (userCallback) {
      const params = {
        rowNode: groupNode,
        field: groupNode.field,
        key: groupNode.key,
        level: groupNode.level,
        rowGroupColumn: groupNode.rowGroupColumn
      };
      groupNode.expanded = userCallback(params) == true;
      return;
    }
    if (details.expandByDefault === -1) {
      groupNode.expanded = true;
      return;
    }
    groupNode.expanded = groupNode.level < details.expandByDefault;
  }
  getGroupInfo(rowNode, details) {
    const res = [];
    details.groupedCols.forEach(groupCol => {
      let key = this.valueService.getKeyForNode(groupCol, rowNode);
      let keyExists = key !== null && key !== void 0 && key !== "";
      const createGroupForEmpty = details.pivotMode || !details.groupAllowUnbalanced;
      if (createGroupForEmpty && !keyExists) {
        key = "";
        keyExists = true;
      }
      if (keyExists) {
        const item = {
          key,
          field: groupCol.getColDef().field,
          rowGroupColumn: groupCol,
          leafNode: rowNode
        };
        res.push(item);
      }
    });
    return res;
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/treeStrategy/treeStrategy.ts



// enterprise-modules/row-grouping/src/rowGrouping/groupStage/treeStrategy/treeNode.ts
var treeNodePositionComparer = (a, b) => a.treeNode.oldSourceRowIndex - b.treeNode.oldSourceRowIndex;
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_CHILDREN = EMPTY_ARRAY.values();
var orphanRow = (row, root) => {
  row.parent = null;
  row.treeNode = null;
  if (root) {
    row.childrenAfterGroup = [];
  } else {
    row.level = 0;
    row.childrenAfterGroup = null;
    row.allLeafChildren = null;
  }
};
var TreeNode = class _TreeNode {
  constructor(parent, key, level) {
    this.parent = parent;
    this.key = key;
    this.level = level;
    /** Contains all the children by their key */
    this.children = null;
    /**
     * The head of the singly linked list of direct children nodes that are invalidated and need to be committed.
     * We use this so we can invalidate just the path and explore only the invalidated during commit.
     * Also, once a path is invalidated the next invalidation will not add the same node again and stop the recursion quickly.
     */
    this.invalidatedHead = null;
    /**
     * The next node in the linked list of parent.invalidatedHead.
     * - undefined: the node is not invalidated (not present in the parent linked list)
     * - null: this is the first and last node in the linked list
     * - TreeNode instance: is the next node in the linked list
     */
    this.invalidatedNext = void 0;
    /** The RowNode associated to this tree node */
    this.row = null;
    /** We use this during commit to understand if the row changed. After commit, it will be the same as this.row. */
    this.oldRow = null;
    /**
     * There may be duplicate rows if they have the same key.
     * This is NOT an edge case, temporarily duplicates may arise during transactions.
     * For example, think about swapping the paths of two nodes, they will have the same key for a short while.
     */
    this.duplicateRows = null;
    /** We keep the row.childrenAfterGroup here, we just swap arrays when we assign rows */
    this.childrenAfterGroup = EMPTY_ARRAY;
    /**
     * We keep the row.allLeafChildren here, we just swap arrays when we assign or swap the row to this node.
     * If this is null, we are borrowing the allLeafChildren array from one of the children,
     * in this case the row.allLeafChildren will be the same as one of the childrenAfterGroup[x].allLeafChildren,
     * to get the allLeafChildren if is null, do node.allLeafChildren ?? node.row.allLeafChildren.
     */
    this.allLeafChildren = EMPTY_ARRAY;
    /** Indicates whether childrenAfterGroup might need to be recomputed and sorted. Reset during commit. */
    this.childrenChanged = false;
    /** Indicates whether allLeafChildren should be recomputed. Reset to false during commit. */
    this.leafChildrenChanged = false;
    /** The ordering this node had in the previous commit. */
    this.oldSourceRowIndex = -1;
  }
  isEmptyFillerNode() {
    return !this.row?.data && !this.children?.size;
  }
  /** Returns true if this tree node has children */
  hasChildren() {
    return !!this.children?.size;
  }
  /** Returns an iterator able to iterate all children in this node, in order of insertion */
  enumChildren() {
    return this.children?.values() ?? EMPTY_CHILDREN;
  }
  /**
   * Gets a node a key in the given parent. If the node does not exists, creates a filler node, with null row.
   * We cast to string just to be sure the user passed a string correctly and not a number or something else.
   * @returns the node at the given key, or a new filler node inserted there if it does not exist.
   */
  upsertKey(key) {
    if (typeof key !== "string") {
      key = String(key);
    }
    let node = this.children?.get(key);
    if (!node) {
      node = new _TreeNode(this, key, this.level + 1);
      (this.children ?? (this.children = /* @__PURE__ */new Map()))?.set(node.key, node);
    }
    return node;
  }
  /** Removes this node from the parent, and free memory. This node cannot be used after this. */
  destroy() {
    const {
      row,
      parent
    } = this;
    if (parent === null) {
      return;
    }
    parent?.children?.delete(this.key);
    if (row !== null) {
      orphanRow(row, true);
    }
    this.parent = null;
  }
  /**
   * Sets the row for the TreeNode.
   * If the row is already set, it will be replaced with the new row, and the old row will be orphaned.
   * childrenAfterGroup and allLeafChildren will be reassigned.
   * @returns True if the row changed
   */
  setRow(newRow) {
    const {
      level,
      row: oldRow,
      childrenAfterGroup
    } = this;
    if (level < 0) {
      if (oldRow !== null && oldRow !== newRow) {
        orphanRow(oldRow, true);
      }
    } else {
      if (oldRow === newRow) {
        return false;
      }
      if (oldRow !== null) {
        newRow.allLeafChildren = oldRow.allLeafChildren ?? this.allLeafChildren ?? EMPTY_ARRAY;
        orphanRow(oldRow, false);
      } else {
        newRow.allLeafChildren = this.allLeafChildren ?? EMPTY_ARRAY;
      }
    }
    newRow.level = level;
    newRow.childrenAfterGroup = childrenAfterGroup;
    newRow.treeNode = this;
    this.row = newRow;
    return true;
  }
  /**
   * Removes a row from the tree node.
   * If the row is the main row, it will be replaced with the first row in the duplicate rows, if any.
   * If the row is a duplicate row, it will be removed from the duplicate rows.
   * @param rowToRemove - The row to be removed.
   * @returns `true` if the row was successfully removed, `false` if the row was not found.
   */
  removeRow(rowToRemove) {
    const {
      level,
      row,
      duplicateRows,
      childrenAfterGroup
    } = this;
    if (row === rowToRemove) {
      const duplicate = this.popDuplicateRow();
      if (duplicate) {
        this.row = duplicate;
        duplicate.childrenAfterGroup = childrenAfterGroup;
        if (level >= 0) {
          duplicate.allLeafChildren = row.allLeafChildren ?? this.allLeafChildren ?? EMPTY_ARRAY;
        }
      } else {
        this.row = null;
      }
    } else {
      if (!duplicateRows?.delete(rowToRemove)) {
        return false;
      }
      if (duplicateRows.size === 0) {
        this.duplicateRows = null;
      }
    }
    orphanRow(rowToRemove, level < 0);
    return true;
  }
  /**
   * Adds a duplicate row to the tree node.
   * @param newRow - The new row to be added.
   * @returns A boolean indicating whether the row was successfully added.
   */
  addDuplicateRow(newRow) {
    const {
      level
    } = this;
    let duplicateRows = this.duplicateRows;
    if (duplicateRows === null) {
      duplicateRows = /* @__PURE__ */new Set();
      this.duplicateRows = duplicateRows;
    } else if (duplicateRows.has(newRow)) {
      return false;
    }
    duplicateRows.add(newRow);
    newRow.treeNode = this;
    newRow.level = level;
    if (level >= 0) {
      newRow.allLeafChildren = EMPTY_ARRAY;
    }
    newRow.childrenAfterGroup = EMPTY_ARRAY;
    return true;
  }
  /**
   * This is needed to be sure that the row is the duplicate row with the smallest sourceRowIndex, in O(n).
   * @returns this.row
   */
  sortFirstDuplicateRow() {
    const duplicateRows = this.duplicateRows;
    const oldRow = this.row;
    if (!oldRow || !duplicateRows) {
      return oldRow;
    }
    let newRow = oldRow;
    for (const row of duplicateRows) {
      if (row.sourceRowIndex < newRow.sourceRowIndex) {
        newRow = row;
      }
    }
    if (newRow !== oldRow) {
      newRow.childrenAfterGroup = this.childrenAfterGroup;
      newRow.allLeafChildren = oldRow.allLeafChildren ?? this.allLeafChildren ?? EMPTY_ARRAY;
      oldRow.childrenAfterGroup = EMPTY_ARRAY;
      oldRow.allLeafChildren = EMPTY_ARRAY;
      duplicateRows.delete(newRow);
      duplicateRows.add(oldRow);
      this.row = newRow;
    }
    return newRow;
  }
  /** Pops the first duplicate row from the list of duplicates */
  popDuplicateRow() {
    let result = null;
    const duplicateRows = this.duplicateRows;
    if (duplicateRows !== null) {
      result = duplicateRows.values().next().value;
      if (result !== null && duplicateRows.delete(result) && duplicateRows.size === 0) {
        this.duplicateRows = null;
      }
    }
    return result;
  }
  /**
   * Dequeues the next child invalidated node to be committed. Order is not deterministic.
   * @returns the next child node to be committed, or null if all children were already dequeued.
   */
  dequeueInvalidated() {
    const node = this.invalidatedHead;
    if (node !== null) {
      this.invalidatedHead = node.invalidatedNext ?? null;
      node.invalidatedNext = void 0;
    }
    return node;
  }
  /**
   * Invalidates this node and all its parents until the root is reached.
   * Order of invalidated nodes is not deterministic.
   * The root itself cannot be invalidated, as it has no parents.
   * If a node is already invalidated, it will stop the recursion.
   */
  invalidate() {
    let node = this;
    let parent = this.parent;
    while (parent !== null && node.invalidatedNext === void 0) {
      node.invalidatedNext = parent.invalidatedHead;
      parent.invalidatedHead = node;
      node = parent;
      parent = node.parent;
    }
  }
  /** Marks childrenChanged in the parent, so the childrenAfterGroup will be recomputed and invalidates the parent. */
  invalidateOrder() {
    const parent = this.parent;
    if (parent !== null && !parent.childrenChanged && ((this.children?.size ?? 0) > 1 || !parent.row?.data)) {
      parent.childrenChanged = true;
      parent.invalidate();
    }
  }
  /**
   * When we receive rowNodeOrder not undefined, we need to update the rowPosition of the node,
   * to ensure it will be sorted in the right order in childrenAfterGroup.
   * This function makes sense to be called only in the post-order commit DFS
   * as it assumes children's childrenAfterGroup is already updated.
   * @returns the rowPosition the node should have.
   */
  getRowPosition() {
    const row = this.row;
    if (row?.data) {
      return row.sourceRowIndex;
    }
    return this.childrenAfterGroup[0]?.treeNode?.oldSourceRowIndex ?? this.oldSourceRowIndex;
  }
  /**
   * This is called in post order during commit to update the childrenAfterGroup array.
   * It uses the rowNodeOrder map to sort the children in the right order, if is passed.
   * It assumes all children childrenAfterGroup are up to date and rows all created.
   *
   * It replaces the array with EMPTY_ARRAY if there are no children, to reduce memory usage and GC pressure.
   * It does sort the children only if strictly needed, to avoid unnecessary work.
   *
   * If the order changes, also the order in the children map will be updated,
   * so the next call to enumChildren() will return the children in the right order.
   */
  updateChildrenAfterGroup() {
    this.childrenChanged = false;
    const childrenCount = this.children?.size ?? 0;
    if (childrenCount === 0) {
      if (this.childrenAfterGroup.length === 0) {
        return false;
      }
      this.leafChildrenChanged = true;
      this.childrenAfterGroup = EMPTY_ARRAY;
      this.row.childrenAfterGroup = EMPTY_ARRAY;
      return true;
    }
    let nodesChanged = false;
    let childrenAfterGroup = this.childrenAfterGroup;
    if (childrenAfterGroup === EMPTY_ARRAY) {
      childrenAfterGroup = new Array(childrenCount);
      this.childrenAfterGroup = childrenAfterGroup;
      this.row.childrenAfterGroup = childrenAfterGroup;
      nodesChanged = true;
    } else if (childrenAfterGroup.length !== childrenCount) {
      childrenAfterGroup.length = childrenCount;
      nodesChanged = true;
    }
    let index = 0;
    let prevPosition = -1;
    let needSort = false;
    for (const child of this.enumChildren()) {
      const nextPosition = child.getRowPosition();
      if (nextPosition < prevPosition) {
        needSort = true;
      }
      prevPosition = nextPosition;
      child.oldSourceRowIndex = nextPosition;
      const row = child.row;
      if (childrenAfterGroup[index] !== row) {
        childrenAfterGroup[index] = row;
        nodesChanged = true;
      }
      ++index;
    }
    if (nodesChanged) {
      this.leafChildrenChanged = true;
    }
    if (needSort) {
      this.reorderChildrenList(childrenAfterGroup);
    }
    return nodesChanged || needSort;
  }
  /** This reorders the given array and rebuild the children map. */
  reorderChildrenList(childrenAfterGroup) {
    const childrenCount = childrenAfterGroup.length;
    const children = this.children;
    childrenAfterGroup.sort(treeNodePositionComparer);
    children.clear();
    for (let i = 0; i < childrenCount; ++i) {
      const node = childrenAfterGroup[i].treeNode;
      children.set(node.key, node);
    }
  }
  /**
   * Rebuild the allLeafChildren rows array of a node. It uses childrenAfterGroup, we assume to be already updated.
   * This is called in post order during commit, after the childrenAfterGroup are updated with updateChildrenAfterGroup().
   * It uses the childrenAfterGroup and allLeafChildren of all the children, we assume they are updated.
   */
  updateAllLeafChildren() {
    const {
      parent,
      row,
      childrenAfterGroup
    } = this;
    this.leafChildrenChanged = false;
    let nodesChanged = false;
    const childrenAfterGroupLen = childrenAfterGroup.length;
    if (childrenAfterGroupLen === 0) {
      nodesChanged = row.allLeafChildren?.length !== 0;
      row.allLeafChildren = EMPTY_ARRAY;
      this.allLeafChildren = EMPTY_ARRAY;
    } else if (childrenAfterGroupLen === 1 && childrenAfterGroup[0].allLeafChildren?.length) {
      row.allLeafChildren = childrenAfterGroup[0].allLeafChildren;
      this.allLeafChildren = null;
      nodesChanged = true;
    } else {
      let allLeafChildren = this.allLeafChildren;
      if (allLeafChildren === EMPTY_ARRAY || allLeafChildren === null) {
        allLeafChildren = [];
        this.allLeafChildren = allLeafChildren;
      }
      const oldAllLeafChildrenLength = allLeafChildren.length;
      let writeIdx = 0;
      for (let i = 0; i < childrenAfterGroupLen; ++i) {
        const childRow = childrenAfterGroup[i];
        const childAllLeafChildren = childRow.allLeafChildren;
        const childAllLeafChildrenLen = childAllLeafChildren.length;
        if (childAllLeafChildrenLen) {
          for (let j = 0; j < childAllLeafChildrenLen; ++j) {
            const leaf = childAllLeafChildren[j];
            if (writeIdx >= oldAllLeafChildrenLength || allLeafChildren[writeIdx] !== leaf) {
              allLeafChildren[writeIdx] = leaf;
              nodesChanged = true;
            }
            ++writeIdx;
          }
        } else {
          if ((writeIdx >= oldAllLeafChildrenLength || allLeafChildren[writeIdx] !== childRow) && childRow) {
            allLeafChildren[writeIdx] = childRow;
            nodesChanged = true;
          }
          ++writeIdx;
        }
      }
      if (oldAllLeafChildrenLength !== writeIdx) {
        allLeafChildren.length = writeIdx;
        nodesChanged = true;
      }
      if (row.allLeafChildren !== allLeafChildren) {
        row.allLeafChildren = allLeafChildren;
        nodesChanged = true;
      }
    }
    if (nodesChanged && parent) {
      parent.leafChildrenChanged = true;
    }
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/treeStrategy/treeRow.ts
var isTreeRowCommitted = row => (row.treeNodeFlags & 1 /* Committed */) !== 0;
var isTreeRowExpandedInitialized = row => (row.treeNodeFlags & 2 /* ExpandedInitialized */) !== 0;
var isTreeRowUpdated = row => (row.treeNodeFlags & 4 /* RowUpdated */) !== 0;
var isTreeRowKeyChanged = row => (row.treeNodeFlags & 8 /* KeyChanged */) !== 0;
var isTreeRowPathChanged = row => (row.treeNodeFlags & 16 /* PathChanged */) !== 0;
var setTreeRowExpandedInitialized = (row, value) => {
  if (value) {
    row.treeNodeFlags |= 2 /* ExpandedInitialized */;
  } else {
    row.treeNodeFlags &= ~2 /* ExpandedInitialized */;
  }
};
var setTreeRowUpdated = row => {
  const flags = row.treeNodeFlags;
  if ((flags & 1 /* Committed */) !== 0) {
    row.treeNodeFlags = flags | 4 /* RowUpdated */;
  }
};
var setTreeRowKeyChanged = row => {
  const flags = row.treeNodeFlags;
  if ((flags & 1 /* Committed */) !== 0) {
    row.treeNodeFlags = flags | (8 /* KeyChanged */ | 4 /* RowUpdated */);
  }
};
var markTreeRowPathChanged = row => {
  row.treeNodeFlags |= 16 /* PathChanged */;
};
var markTreeRowCommitted = row => {
  row.treeNodeFlags = 1 /* Committed */ | row.treeNodeFlags & ~(4 /* RowUpdated */ | 8 /* KeyChanged */ | 16 /* PathChanged */);
};
var clearTreeRowFlags = row => {
  row.treeNodeFlags = 0;
};

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/treeStrategy/treeStrategy.ts
var TreeStrategy = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    /** Rows that are pending deletion, this.commitDeletedRows() will finalize removal. */
    this.rowsPendingDestruction = null;
    /** The root node of the tree. */
    this.root = new TreeNode(null, "", -1);
  }
  wireBeans(beans) {
    this.beans = beans;
    this.showRowGroupColsService = beans.showRowGroupColsService;
  }
  destroy() {
    const rootRow = this.root.row;
    if (rootRow !== null) {
      this.root.removeRow(rootRow);
      clearTreeRowFlags(rootRow);
    }
    this.destroyTree(this.root);
    this.commitDestroyedRows();
    super.destroy();
  }
  execute(params) {
    const {
      rowNodeTransactions,
      rowNodesOrderChanged,
      changedPath
    } = params;
    const rootRow = params.rowNode;
    const gos = this.gos;
    const details = {
      changedPath,
      expandByDefault: gos.get("groupDefaultExpanded"),
      suppressGroupMaintainValueType: gos.get("suppressGroupMaintainValueType"),
      getDataPath: gos.get("getDataPath"),
      isGroupOpenByDefault: gos.getCallback("isGroupOpenByDefault"),
      initialGroupOrderComparator: gos.getCallback("initialGroupOrderComparator")
    };
    const rootNode = this.root;
    rootNode.setRow(rootRow);
    rootRow.leafGroup = false;
    const sibling = rootRow.sibling;
    if (sibling) {
      sibling.childrenAfterGroup = rootRow.childrenAfterGroup;
      sibling.childrenMapped = rootRow.childrenMapped;
    }
    if (rowNodeTransactions) {
      this.handleTransaction(details, rowNodeTransactions, rowNodesOrderChanged);
    } else {
      this.handleRowData(details, rootRow, params.afterColumnsChanged === true);
    }
  }
  handleRowData(details, rootRow, afterColumnsChanged) {
    const root = this.root;
    if (afterColumnsChanged || this.oldGroupDisplayColIds === void 0) {
      const newGroupDisplayColIds = this.showRowGroupColsService?.getShowRowGroupCols()?.map(c => c.getId()).join("-") ?? "";
      if (afterColumnsChanged) {
        if (this.oldGroupDisplayColIds !== newGroupDisplayColIds) {
          this.checkAllGroupDataAfterColsChanged(root.row?.childrenAfterGroup);
        }
        return;
      }
      this.oldGroupDisplayColIds = newGroupDisplayColIds;
    }
    this.clearTree(root);
    this.addOrUpdateRows(details, rootRow.allLeafChildren, false);
    this.commitTree(details);
  }
  handleTransaction(details, transactions, rowNodesOrderChanged) {
    for (const {
      remove,
      update,
      add
    } of transactions) {
      this.removeRows(remove);
      this.addOrUpdateRows(details, update, true);
      this.addOrUpdateRows(details, add, false);
    }
    if (rowNodesOrderChanged) {
      this.handleRowNodesOrderChanged();
    }
    this.commitTree(details);
  }
  handleRowNodesOrderChanged() {
    const rows = this.root.row?.allLeafChildren;
    if (rows) {
      for (let rowIdx = 0, rowsLen = rows.length; rowIdx < rowsLen; ++rowIdx) {
        const node = rows[rowIdx].treeNode;
        if (node && node.oldSourceRowIndex !== rowIdx) {
          node.invalidateOrder();
        }
      }
    }
  }
  checkAllGroupDataAfterColsChanged(rowNodes) {
    for (let i = 0, len = rowNodes?.length ?? 0; i < len; ++i) {
      const rowNode = rowNodes[i];
      this.setGroupData(rowNode, rowNode.treeNode?.key ?? rowNode.key);
      this.checkAllGroupDataAfterColsChanged(rowNode.childrenAfterGroup);
    }
  }
  /** Transactional add/update */
  addOrUpdateRows(details, rows, update) {
    for (let i = 0, len = rows?.length ?? 0; i < len; ++i) {
      const row = rows[i];
      const node = this.upsertPath(this.getDataPath(details, row));
      if (node) {
        this.addOrUpdateRow(node, row, update);
      }
    }
  }
  /** Transactional removal */
  removeRows(rows) {
    for (let i = 0, len = rows?.length ?? 0; i < len; ++i) {
      const row = rows[i];
      const node = row.treeNode;
      if (node !== null) {
        this.removeRow(node, row);
      }
    }
  }
  getDataPath({
    getDataPath
  }, {
    data
  }) {
    const keys = getDataPath?.(data) || EMPTY_ARRAY;
    if (!keys.length) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`getDataPath() should not return an empty path`, [data]);
    }
    return keys;
  }
  /**
   * Gets the last node of a path. Inserts filler nodes where needed.
   * Note that invalidate() is not called, is up to the caller to call it if needed.
   */
  upsertPath(path) {
    let parent = this.root;
    const stop = path.length - 1;
    for (let level = 0; level <= stop; ++level) {
      const node = parent.upsertKey(path[level]);
      if (level >= stop) {
        node.invalidate();
        return node;
      }
      parent = node;
    }
    return null;
  }
  /** Add or updates the row to a non-root node, preparing the tree correctly for the commit. */
  addOrUpdateRow(node, newRow, update) {
    const {
      level,
      row: oldRow
    } = node;
    if (level < 0) {
      return;
    }
    let invalidate = false;
    if (oldRow !== newRow) {
      const prevNode = newRow.treeNode;
      if (prevNode !== null && prevNode !== node) {
        prevNode.removeRow(newRow);
        prevNode.invalidate();
      }
      if (oldRow === null) {
        node.setRow(newRow);
        invalidate = true;
      } else if (!oldRow.data) {
        node.setRow(newRow);
        this.destroyRow(oldRow, true);
        invalidate = true;
      } else {
        if (node.addDuplicateRow(newRow)) {
          invalidate = true;
        }
      }
    }
    if (update && !isTreeRowUpdated(newRow)) {
      setTreeRowUpdated(newRow);
      invalidate = true;
    }
    if (invalidate) {
      node.invalidate();
    }
    this.rowsPendingDestruction?.delete(newRow);
  }
  /**
   * Overwrites the row property of a non-root node to null.
   * @returns The previous row, if any, that was overwritten.
   */
  removeRow(node, oldRow) {
    const {
      parent,
      level
    } = node;
    if (level < 0) {
      return;
    }
    let invalidate = false;
    if (node.removeRow(oldRow)) {
      invalidate = true;
      if (parent) {
        parent.childrenChanged = true;
      }
      this.destroyRow(oldRow, !oldRow.data);
    }
    if (invalidate) {
      node.invalidate();
    }
  }
  /** Commit the changes performed to the tree */
  commitTree(details) {
    const root = this.root;
    this.commitInvalidatedChildren(details, root);
    const rootRow = root.row;
    if (root.childrenChanged) {
      if (root.updateChildrenAfterGroup()) {
        markTreeRowPathChanged(rootRow);
      }
    }
    rootRow.updateHasChildren();
    if (isTreeRowPathChanged(rootRow)) {
      if (details.changedPath?.isActive()) {
        details.changedPath.addParentNode(rootRow);
      }
    }
    markTreeRowCommitted(rootRow);
    this.commitDestroyedRows();
  }
  /** Calls commitChild for each invalidated child, recursively. We commit only the invalidated paths. */
  commitInvalidatedChildren(details, parent) {
    while (true) {
      const child = parent.dequeueInvalidated();
      if (child === null) {
        break;
      }
      if (child.parent === parent) {
        this.commitChild(details, parent, child);
      }
    }
  }
  /** Commit the changes performed to a node and its children */
  commitChild(details, parent, node) {
    if (node.isEmptyFillerNode()) {
      this.clearTree(node);
      return;
    }
    this.commitNodePreOrder(parent, node);
    this.commitInvalidatedChildren(details, node);
    this.commitNodePostOrder(details, parent, node);
  }
  commitNodePreOrder(parent, node) {
    let row = node.row;
    if (row === null) {
      row = this.createFillerRow(node);
      node.setRow(row);
    } else {
      row = node.sortFirstDuplicateRow();
      if (row.allChildrenCount === void 0) {
        row.allChildrenCount = null;
      }
    }
    row.parent = parent.row;
    if (node.oldRow !== row) {
      for (const child of node.enumChildren()) {
        const childRow = child.row;
        if (childRow !== null) {
          childRow.parent = row;
        }
      }
    }
    const key = node.key;
    if (row.key !== key) {
      row.key = key;
      setTreeRowKeyChanged(row);
      this.setGroupData(row, key);
    } else if (!row.groupData) {
      this.setGroupData(row, key);
    }
  }
  commitNodePostOrder(details, parent, node) {
    const row = node.row;
    const oldRow = node.oldRow;
    if (node.isEmptyFillerNode()) {
      this.clearTree(node);
      return;
    }
    if (node.childrenChanged) {
      if (node.updateChildrenAfterGroup()) {
        markTreeRowPathChanged(row);
      }
    }
    if (node.leafChildrenChanged) {
      node.updateAllLeafChildren();
    }
    const newRowPosition = node.getRowPosition();
    if (node.oldSourceRowIndex !== newRowPosition) {
      node.oldSourceRowIndex = newRowPosition;
      parent.childrenChanged = true;
    }
    const hasChildren = !!row.childrenAfterGroup?.length;
    const group = hasChildren || !row.data;
    const oldGroup = row.group;
    if (oldGroup !== group) {
      markTreeRowPathChanged(row);
      row.setGroup(group);
      if (!group && !row.expanded) {
        setTreeRowExpandedInitialized(row, false);
      }
    } else if (row.hasChildren() !== hasChildren) {
      markTreeRowPathChanged(row);
      row.updateHasChildren();
    }
    if (row.group && !isTreeRowExpandedInitialized(row)) {
      if (oldRow !== row && oldRow !== null && oldRow.group && isTreeRowExpandedInitialized(oldRow) && !details.isGroupOpenByDefault) {
        row.expanded = oldRow.expanded;
      } else {
        row.expanded = this.getExpandedInitialValue(details, row);
      }
      setTreeRowExpandedInitialized(row, true);
    }
    if (isTreeRowUpdated(row)) {
      markTreeRowPathChanged(parent.row);
      if (isTreeRowKeyChanged(row)) {
        row.setData(row.data);
      }
    }
    if (oldRow !== row) {
      node.oldRow = row;
      if (oldRow !== null && (oldGroup || node.hasChildren())) {
        markTreeRowPathChanged(row);
      }
      parent.childrenChanged = true;
      markTreeRowPathChanged(parent.row);
    }
    if (isTreeRowPathChanged(row)) {
      if (details.changedPath?.isActive()) {
        details.changedPath.addParentNode(row);
      }
    } else if (!isTreeRowCommitted(row)) {
      if (!row.childrenAfterFilter) {
        row.childrenAfterFilter = row.childrenAfterGroup.slice();
      }
      if (!row.childrenAfterAggFilter) {
        row.childrenAfterAggFilter = row.childrenAfterFilter.slice();
      }
      if (!row.childrenAfterSort) {
        row.childrenAfterSort = row.childrenAfterAggFilter.slice();
      }
    }
    markTreeRowCommitted(row);
    if (node.duplicateRows?.size && !node.duplicateRowsWarned) {
      node.duplicateRowsWarned = true;
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`duplicate group keys for row data, keys should be unique`, [row.id, row.data, ...Array.from(node.duplicateRows).map(r => r.data)]);
    }
  }
  createFillerRow(node) {
    const row = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode(this.beans);
    row.key = node.key;
    row.group = true;
    row.field = null;
    row.leafGroup = false;
    row.rowGroupIndex = null;
    row.allChildrenCount = null;
    let id = node.level + "-" + node.key;
    let p = node.parent;
    while (p !== null) {
      const parent = p.parent;
      if (parent === null) {
        break;
      }
      id = `${p.level}-${p.key}-${id}`;
      p = parent;
    }
    row.id = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RowNode.ID_PREFIX_ROW_GROUP + id;
    return row;
  }
  setGroupData(row, key) {
    const groupData = {};
    row.groupData = groupData;
    const groupDisplayCols = this.showRowGroupColsService?.getShowRowGroupCols();
    if (groupDisplayCols) {
      for (const col of groupDisplayCols) {
        groupData[col.getColId()] = key;
      }
    }
  }
  getExpandedInitialValue(details, row) {
    const userCallback = details.isGroupOpenByDefault;
    return userCallback ? userCallback({
      rowNode: row,
      field: row.field,
      key: row.key,
      level: row.level,
      rowGroupColumn: row.rowGroupColumn
    }) == true : details.expandByDefault === -1 || row.level < details.expandByDefault;
  }
  /** Called to clear a subtree. */
  clearTree(node) {
    const {
      parent,
      oldRow,
      row,
      level
    } = node;
    if (parent !== null && oldRow !== null) {
      parent.childrenChanged = true;
      if (parent.row !== null) {
        markTreeRowPathChanged(parent.row);
      }
    }
    if (row !== null) {
      if (level >= 0) {
        let row2 = node.row;
        while (row2 !== null && node.removeRow(row2)) {
          this.destroyRow(row2, !row2.data);
          row2 = node.row;
        }
      }
    }
    for (const child of node.enumChildren()) {
      this.clearTree(child);
    }
    node.destroy();
  }
  /** Called by the destructor, to the destroy the whole tree. */
  destroyTree(node) {
    const {
      row,
      level,
      duplicateRows
    } = node;
    if (row) {
      if (level >= 0 && !row.data) {
        this.destroyRow(row, true);
      } else {
        clearTreeRowFlags(row);
      }
    }
    if (duplicateRows) {
      for (const row2 of duplicateRows) {
        if (level >= 0 && !row2.data) {
          this.destroyRow(row2, true);
        } else {
          clearTreeRowFlags(row2);
        }
      }
    }
    for (const child of node.enumChildren()) {
      this.destroyTree(child);
    }
    node.destroy();
  }
  /**
   * Finalizes the deletion of a row.
   * @param immediate If true, the row is deleted immediately.
   * If false, the row is marked for deletion, and will be deleted later with this.deleteDeletedRows()
   */
  destroyRow(row, immediate) {
    if (!isTreeRowCommitted(row)) {
      clearTreeRowFlags(row);
      return;
    }
    if (!immediate) {
      (this.rowsPendingDestruction ?? (this.rowsPendingDestruction = /* @__PURE__ */new Set())).add(row);
      return;
    }
    clearTreeRowFlags(row);
    row.setRowIndex(null);
    row.setRowTop(null);
    if (!row.data && row.isSelected()) {
      row.setSelectedParams({
        newValue: false,
        source: "rowGroupChanged"
      });
    }
  }
  /**
   * destroyRow can defer the deletion to the end of the commit stage.
   * This method finalizes the deletion of rows that were marked for deletion.
   */
  commitDestroyedRows() {
    const {
      rowsPendingDestruction: rowsPendingDeletion
    } = this;
    if (rowsPendingDeletion !== null) {
      this.rowsPendingDestruction = null;
      for (const row of rowsPendingDeletion) {
        this.destroyRow(row, true);
      }
    }
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/groupStage/groupStage.ts
var GroupStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "groupStage";
  }
  wireBeans(beans) {
    this.selectableService = beans.selectableService;
  }
  execute(params) {
    const Strategy = this.gos.get("treeData") ? TreeStrategy : GroupStrategy;
    let strategy = this.strategy;
    if (strategy?.constructor !== Strategy) {
      this.destroyBean(strategy);
      strategy = this.createManagedBean(new Strategy());
      this.strategy = strategy;
    }
    strategy.execute(params);
    this.selectableService.updateSelectableAfterGrouping();
  }
  destroy() {
    this.destroyBean(this.strategy);
    this.strategy = void 0;
    super.destroy();
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/pivotColDefService.ts

var PIVOT_ROW_TOTAL_PREFIX = "PivotRowTotal_";
var PivotColDefService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "pivotColDefService";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
    this.columnNameService = beans.columnNameService;
  }
  postConstruct() {
    const getFieldSeparator = () => this.gos.get("serverSidePivotResultFieldSeparator") ?? "_";
    this.fieldSeparator = getFieldSeparator();
    this.addManagedPropertyListener("serverSidePivotResultFieldSeparator", () => {
      this.fieldSeparator = getFieldSeparator();
    });
    const getPivotDefaultExpanded = () => this.gos.get("pivotDefaultExpanded");
    this.pivotDefaultExpanded = getPivotDefaultExpanded();
    this.addManagedPropertyListener("pivotDefaultExpanded", () => {
      this.pivotDefaultExpanded = getPivotDefaultExpanded();
    });
  }
  createPivotColumnDefs(uniqueValues) {
    const pivotColumnGroupDefs = this.createPivotColumnsFromUniqueValues(uniqueValues);
    function extractColDefs(input, arr = []) {
      input.forEach(def => {
        if (def.children !== void 0) {
          extractColDefs(def.children, arr);
        } else {
          arr.push(def);
        }
      });
      return arr;
    }
    const pivotColumnDefs = extractColDefs(pivotColumnGroupDefs);
    this.addRowGroupTotals(pivotColumnGroupDefs, pivotColumnDefs);
    this.addExpandablePivotGroups(pivotColumnGroupDefs, pivotColumnDefs);
    this.addPivotTotalsToGroups(pivotColumnGroupDefs, pivotColumnDefs);
    const pivotColumnDefsClone = pivotColumnDefs.map(colDef => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._cloneObject)(colDef));
    return {
      pivotColumnGroupDefs,
      pivotColumnDefs: pivotColumnDefsClone
    };
  }
  createPivotColumnsFromUniqueValues(uniqueValues) {
    const pivotColumns = this.funcColsService.getPivotColumns();
    const maxDepth = pivotColumns.length;
    const pivotColumnGroupDefs = this.recursivelyBuildGroup(0, uniqueValues, [], maxDepth, pivotColumns);
    return pivotColumnGroupDefs;
  }
  recursivelyBuildGroup(index, uniqueValue, pivotKeys, maxDepth, primaryPivotColumns) {
    const measureColumns = this.funcColsService.getValueColumns();
    if (index >= maxDepth) {
      return this.buildMeasureCols(pivotKeys);
    }
    const primaryPivotColumnDefs = primaryPivotColumns[index].getColDef();
    const comparator = this.headerNameComparator.bind(this, primaryPivotColumnDefs.pivotComparator);
    if (measureColumns.length === 1 && this.gos.get("removePivotHeaderRowWhenSingleValueColumn") && index === maxDepth - 1) {
      const leafCols = [];
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._iterateObject)(uniqueValue, key => {
        const newPivotKeys = [...pivotKeys, key];
        const colDef = this.createColDef(measureColumns[0], key, newPivotKeys);
        colDef.columnGroupShow = "open";
        leafCols.push(colDef);
      });
      leafCols.sort(comparator);
      return leafCols;
    }
    const groups = [];
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._iterateObject)(uniqueValue, (key, value) => {
      const openByDefault = this.pivotDefaultExpanded === -1 || index < this.pivotDefaultExpanded;
      const newPivotKeys = [...pivotKeys, key];
      groups.push({
        children: this.recursivelyBuildGroup(index + 1, value, newPivotKeys, maxDepth, primaryPivotColumns),
        headerName: key,
        pivotKeys: newPivotKeys,
        columnGroupShow: "open",
        openByDefault,
        groupId: this.generateColumnGroupId(newPivotKeys)
      });
    });
    groups.sort(comparator);
    return groups;
  }
  buildMeasureCols(pivotKeys) {
    const measureColumns = this.funcColsService.getValueColumns();
    if (measureColumns.length === 0) {
      return [this.createColDef(null, "-", pivotKeys)];
    }
    return measureColumns.map(measureCol => {
      const columnName = this.columnNameService.getDisplayNameForColumn(measureCol, "header");
      return {
        ...this.createColDef(measureCol, columnName, pivotKeys),
        columnGroupShow: "open"
      };
    });
  }
  addExpandablePivotGroups(pivotColumnGroupDefs, pivotColumnDefs) {
    const isSuppressExpand = this.gos.get("suppressExpandablePivotGroups");
    if (isSuppressExpand || this.gos.get("pivotColumnGroupTotals")) {
      return;
    }
    const recursivelyAddSubTotals = (def, currentPivotColumnDefs, acc) => {
      if ("children" in def) {
        const childAcc = /* @__PURE__ */new Map();
        def.children.forEach(grp => {
          recursivelyAddSubTotals(grp, currentPivotColumnDefs, childAcc);
        });
        const leafGroup = !def.children.some(child => child.children);
        this.funcColsService.getValueColumns().forEach(valueColumn => {
          const columnName = this.columnNameService.getDisplayNameForColumn(valueColumn, "header");
          const totalColDef = this.createColDef(valueColumn, columnName, def.pivotKeys);
          totalColDef.pivotTotalColumnIds = childAcc.get(valueColumn.getColId());
          totalColDef.columnGroupShow = !isSuppressExpand ? "closed" : "open";
          totalColDef.aggFunc = valueColumn.getAggFunc();
          if (!leafGroup) {
            const children = def.children;
            children.push(totalColDef);
            currentPivotColumnDefs.push(totalColDef);
          }
        });
        this.merge(acc, childAcc);
        return;
      }
      if (!def.pivotValueColumn) {
        return;
      }
      const pivotValueColId = def.pivotValueColumn.getColId();
      const exists = acc.has(pivotValueColId);
      if (exists) {
        const arr = acc.get(pivotValueColId);
        arr.push(def.colId);
      } else {
        acc.set(pivotValueColId, [def.colId]);
      }
    };
    pivotColumnGroupDefs.forEach(groupDef => {
      recursivelyAddSubTotals(groupDef, pivotColumnDefs, /* @__PURE__ */new Map());
    });
  }
  addPivotTotalsToGroups(pivotColumnGroupDefs, pivotColumnDefs) {
    if (!this.gos.get("pivotColumnGroupTotals")) {
      return;
    }
    const insertAfter = this.gos.get("pivotColumnGroupTotals") === "after";
    const valueCols = this.funcColsService.getValueColumns();
    const aggFuncs = valueCols.map(valueCol => valueCol.getAggFunc());
    if (!aggFuncs || aggFuncs.length < 1 || !this.sameAggFuncs(aggFuncs)) {
      return;
    }
    const valueColumn = valueCols[0];
    pivotColumnGroupDefs.forEach(groupDef => {
      this.recursivelyAddPivotTotal(groupDef, pivotColumnDefs, valueColumn, insertAfter);
    });
  }
  recursivelyAddPivotTotal(groupDef, pivotColumnDefs, valueColumn, insertAfter) {
    const group = groupDef;
    if (!group.children) {
      const def = groupDef;
      return def.colId ? [def.colId] : null;
    }
    let colIds = [];
    group.children.forEach(grp => {
      const childColIds = this.recursivelyAddPivotTotal(grp, pivotColumnDefs, valueColumn, insertAfter);
      if (childColIds) {
        colIds = colIds.concat(childColIds);
      }
    });
    if (group.children.length > 1) {
      const localeTextFunc = this.localeService.getLocaleTextFunc();
      const headerName = localeTextFunc("pivotColumnGroupTotals", "Total");
      const totalColDef = this.createColDef(valueColumn, headerName, groupDef.pivotKeys, true);
      totalColDef.pivotTotalColumnIds = colIds;
      totalColDef.aggFunc = valueColumn.getAggFunc();
      totalColDef.columnGroupShow = this.gos.get("suppressExpandablePivotGroups") ? "open" : void 0;
      const children = groupDef.children;
      insertAfter ? children.push(totalColDef) : children.unshift(totalColDef);
      pivotColumnDefs.push(totalColDef);
    }
    return colIds;
  }
  addRowGroupTotals(pivotColumnGroupDefs, pivotColumnDefs) {
    if (!this.gos.get("pivotRowTotals")) {
      return;
    }
    const insertAtEnd = this.gos.get("pivotRowTotals") === "after";
    const valueColumns = this.funcColsService.getValueColumns();
    const valueCols = valueColumns.slice();
    if (!insertAtEnd) {
      valueCols.reverse();
    }
    const isCreateTotalGroups = valueCols.length > 1 || !this.gos.get("removePivotHeaderRowWhenSingleValueColumn");
    for (let i = 0; i < valueCols.length; i++) {
      const valueCol = valueCols[i];
      const columnName = this.columnNameService.getDisplayNameForColumn(valueCol, "header");
      const colDef = this.createColDef(valueCol, columnName, []);
      const colIds = [];
      for (let i2 = 0; i2 < pivotColumnDefs.length; i2++) {
        const colDef2 = pivotColumnDefs[i2];
        if (colDef2.pivotValueColumn === valueCol) {
          colIds.push(colDef2.colId);
        }
      }
      colDef.pivotTotalColumnIds = colIds;
      colDef.colId = PIVOT_ROW_TOTAL_PREFIX + colDef.colId;
      const valueGroup = isCreateTotalGroups ? {
        children: [colDef],
        pivotKeys: [],
        groupId: `${PIVOT_ROW_TOTAL_PREFIX}_pivotGroup_${valueCol.getColId()}`
      } : colDef;
      pivotColumnDefs.push(colDef);
      insertAtEnd ? pivotColumnGroupDefs.push(valueGroup) : pivotColumnGroupDefs.unshift(valueGroup);
    }
  }
  createColDef(valueColumn, headerName, pivotKeys, totalColumn = false) {
    const colDef = {};
    if (valueColumn) {
      const colDefToCopy = valueColumn.getColDef();
      Object.assign(colDef, colDefToCopy);
      colDef.hide = false;
    }
    colDef.headerName = headerName;
    colDef.colId = this.generateColumnId(pivotKeys || [], valueColumn && !totalColumn ? valueColumn.getColId() : "");
    colDef.field = colDef.colId;
    colDef.valueGetter = params => params.data?.[params.colDef.field];
    colDef.pivotKeys = pivotKeys;
    colDef.pivotValueColumn = valueColumn;
    if (colDef.filter === true) {
      colDef.filter = "agNumberColumnFilter";
    }
    return colDef;
  }
  sameAggFuncs(aggFuncs) {
    if (aggFuncs.length == 1) {
      return true;
    }
    for (let i = 1; i < aggFuncs.length; i++) {
      if (aggFuncs[i] !== aggFuncs[0]) {
        return false;
      }
    }
    return true;
  }
  headerNameComparator(userComparator, a, b) {
    if (userComparator) {
      return userComparator(a.headerName, b.headerName);
    } else {
      if (a.headerName && !b.headerName) {
        return 1;
      } else if (!a.headerName && b.headerName) {
        return -1;
      }
      if (!a.headerName || !b.headerName) {
        return 0;
      }
      if (a.headerName < b.headerName) {
        return -1;
      }
      if (a.headerName > b.headerName) {
        return 1;
      }
      return 0;
    }
  }
  merge(m1, m2) {
    m2.forEach((value, key) => {
      const existingList = m1.has(key) ? m1.get(key) : [];
      const updatedList = [...existingList, ...value];
      m1.set(key, updatedList);
    });
  }
  generateColumnGroupId(pivotKeys) {
    const pivotCols = this.funcColsService.getPivotColumns().map(col => col.getColId());
    return `pivotGroup_${pivotCols.join("-")}_${pivotKeys.join("-")}`;
  }
  generateColumnId(pivotKeys, measureColumnId) {
    const pivotCols = this.funcColsService.getPivotColumns().map(col => col.getColId());
    return `pivot_${pivotCols.join("-")}_${pivotKeys.join("-")}_${measureColumnId}`;
  }
  /**
   * Used by the SSRM to create secondary columns from provided fields
   * @param fields
   */
  createColDefsFromFields(fields) {
    const uniqueValues = {};
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const parts = field.split(this.fieldSeparator);
      let level = uniqueValues;
      for (let p = 0; p < parts.length; p++) {
        const part = parts[p];
        if (level[part] == null) {
          level[part] = {};
        }
        level = level[part];
      }
    }
    const uniqueValuesToGroups = (id, key, uniqueValues2, depth) => {
      const children = [];
      for (const key2 in uniqueValues2) {
        const item = uniqueValues2[key2];
        const child = uniqueValuesToGroups(`${id}${this.fieldSeparator}${key2}`, key2, item, depth + 1);
        children.push(child);
      }
      if (children.length === 0) {
        const potentialAggCol = this.columnModel.getColDefCol(key);
        if (potentialAggCol) {
          const headerName = this.columnNameService.getDisplayNameForColumn(potentialAggCol, "header") ?? key;
          const colDef = this.createColDef(potentialAggCol, headerName, void 0, false);
          colDef.colId = id;
          colDef.aggFunc = potentialAggCol.getAggFunc();
          colDef.valueGetter = params => params.data?.[id];
          return colDef;
        }
        const col = {
          colId: id,
          headerName: key,
          // this is to support using pinned rows, normally the data will be extracted from the aggData object using the colId
          // however pinned rows still access the data object by field, this prevents values with dots from being treated as complex objects
          valueGetter: params => params.data?.[id]
        };
        return col;
      }
      const collapseSingleChildren = this.gos.get("removePivotHeaderRowWhenSingleValueColumn");
      if (collapseSingleChildren && children.length === 1 && "colId" in children[0]) {
        children[0].headerName = key;
        return children[0];
      }
      const group = {
        openByDefault: this.pivotDefaultExpanded === -1 || depth < this.pivotDefaultExpanded,
        groupId: id,
        headerName: key,
        children
      };
      return group;
    };
    const res = [];
    for (const key in uniqueValues) {
      const item = uniqueValues[key];
      const col = uniqueValuesToGroups(key, key, item, 0);
      res.push(col);
    }
    return res;
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/pivotStage.ts

var EXCEEDED_MAX_UNIQUE_VALUES = "Exceeded maximum allowed pivot column count.";
var PivotStage = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "pivotStage";
    this.uniqueValues = {};
    this.lastTimeFailed = false;
    this.maxUniqueValues = -1;
    this.currentUniqueCount = 0;
  }
  wireBeans(beans) {
    this.valueService = beans.valueService;
    this.columnModel = beans.columnModel;
    this.pivotResultColsService = beans.pivotResultColsService;
    this.funcColsService = beans.funcColsService;
    this.pivotColDefService = beans.pivotColDefService;
  }
  execute(params) {
    const changedPath = params.changedPath;
    if (this.columnModel.isPivotActive()) {
      this.executePivotOn(changedPath);
    } else {
      this.executePivotOff(changedPath);
    }
  }
  executePivotOff(changedPath) {
    this.aggregationColumnsHashLastTime = null;
    this.uniqueValues = {};
    if (this.pivotResultColsService.isPivotResultColsPresent()) {
      this.pivotResultColsService.setPivotResultCols(null, "rowModelUpdated");
      if (changedPath) {
        changedPath.setInactive();
      }
    }
  }
  executePivotOn(changedPath) {
    const numberOfAggregationColumns = this.funcColsService.getValueColumns().length ?? 1;
    const configuredMaxCols = this.gos.get("pivotMaxGeneratedColumns");
    this.maxUniqueValues = configuredMaxCols === -1 ? -1 : configuredMaxCols / numberOfAggregationColumns;
    let uniqueValues;
    try {
      uniqueValues = this.bucketUpRowNodes(changedPath);
    } catch (e) {
      if (e.message === EXCEEDED_MAX_UNIQUE_VALUES) {
        this.pivotResultColsService.setPivotResultCols([], "rowModelUpdated");
        this.eventService.dispatchEvent({
          type: "pivotMaxColumnsExceeded",
          message: e.message
        });
        this.lastTimeFailed = true;
        return;
      }
      throw e;
    }
    const uniqueValuesChanged = this.setUniqueValues(uniqueValues);
    const aggregationColumns = this.funcColsService.getValueColumns();
    const aggregationColumnsHash = aggregationColumns.map(column => `${column.getId()}-${column.getColDef().headerName}`).join("#");
    const aggregationFuncsHash = aggregationColumns.map(column => column.getAggFunc().toString()).join("#");
    const aggregationColumnsChanged = this.aggregationColumnsHashLastTime !== aggregationColumnsHash;
    const aggregationFuncsChanged = this.aggregationFuncsHashLastTime !== aggregationFuncsHash;
    this.aggregationColumnsHashLastTime = aggregationColumnsHash;
    this.aggregationFuncsHashLastTime = aggregationFuncsHash;
    const groupColumnsHash = this.funcColsService.getRowGroupColumns().map(column => column.getId()).join("#");
    const groupColumnsChanged = groupColumnsHash !== this.groupColumnsHashLastTime;
    this.groupColumnsHashLastTime = groupColumnsHash;
    const pivotRowTotals = this.gos.get("pivotRowTotals");
    const pivotColumnGroupTotals = this.gos.get("pivotColumnGroupTotals");
    const suppressExpandablePivotGroups = this.gos.get("suppressExpandablePivotGroups");
    const removePivotHeaderRowWhenSingleValueColumn = this.gos.get("removePivotHeaderRowWhenSingleValueColumn");
    const anyGridOptionsChanged = pivotRowTotals !== this.pivotRowTotalsLastTime || pivotColumnGroupTotals !== this.pivotColumnGroupTotalsLastTime || suppressExpandablePivotGroups !== this.suppressExpandablePivotGroupsLastTime || removePivotHeaderRowWhenSingleValueColumn !== this.removePivotHeaderRowWhenSingleValueColumnLastTime;
    this.pivotRowTotalsLastTime = pivotRowTotals;
    this.pivotColumnGroupTotalsLastTime = pivotColumnGroupTotals;
    this.suppressExpandablePivotGroupsLastTime = suppressExpandablePivotGroups;
    this.removePivotHeaderRowWhenSingleValueColumnLastTime = removePivotHeaderRowWhenSingleValueColumn;
    if (this.lastTimeFailed || uniqueValuesChanged || aggregationColumnsChanged || groupColumnsChanged || aggregationFuncsChanged || anyGridOptionsChanged) {
      const {
        pivotColumnGroupDefs,
        pivotColumnDefs
      } = this.pivotColDefService.createPivotColumnDefs(this.uniqueValues);
      this.pivotColumnDefs = pivotColumnDefs;
      this.pivotResultColsService.setPivotResultCols(pivotColumnGroupDefs, "rowModelUpdated");
      if (changedPath) {
        changedPath.setInactive();
      }
    }
    this.lastTimeFailed = false;
  }
  setUniqueValues(newValues) {
    const json1 = JSON.stringify(newValues);
    const json2 = JSON.stringify(this.uniqueValues);
    const uniqueValuesChanged = json1 !== json2;
    if (uniqueValuesChanged) {
      this.uniqueValues = newValues;
      return true;
    } else {
      return false;
    }
  }
  bucketUpRowNodes(changedPath) {
    this.currentUniqueCount = 0;
    const uniqueValues = {};
    changedPath.forEachChangedNodeDepthFirst(node => {
      if (node.leafGroup) {
        node.childrenMapped = null;
      }
    });
    const recursivelyBucketFilteredChildren = node => {
      if (node.leafGroup) {
        this.bucketRowNode(node, uniqueValues);
      } else {
        node.childrenAfterFilter?.forEach(recursivelyBucketFilteredChildren);
      }
    };
    changedPath.executeFromRootNode(recursivelyBucketFilteredChildren);
    return uniqueValues;
  }
  bucketRowNode(rowNode, uniqueValues) {
    const pivotColumns = this.funcColsService.getPivotColumns();
    if (pivotColumns.length === 0) {
      rowNode.childrenMapped = null;
    } else {
      rowNode.childrenMapped = this.bucketChildren(rowNode.childrenAfterFilter, pivotColumns, 0, uniqueValues);
    }
    if (rowNode.sibling) {
      rowNode.sibling.childrenMapped = rowNode.childrenMapped;
    }
  }
  bucketChildren(children, pivotColumns, pivotIndex, uniqueValues) {
    const mappedChildren = {};
    const pivotColumn = pivotColumns[pivotIndex];
    children.forEach(child => {
      let key = this.valueService.getKeyForNode(pivotColumn, child);
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(key)) {
        key = "";
      }
      if (!uniqueValues[key]) {
        this.currentUniqueCount += 1;
        uniqueValues[key] = {};
        const doesGeneratedColMaxExist = this.maxUniqueValues !== -1;
        const hasExceededColMax = this.currentUniqueCount > this.maxUniqueValues;
        if (doesGeneratedColMaxExist && hasExceededColMax) {
          throw Error(EXCEEDED_MAX_UNIQUE_VALUES);
        }
      }
      if (!mappedChildren[key]) {
        mappedChildren[key] = [];
      }
      mappedChildren[key].push(child);
    });
    if (pivotIndex === pivotColumns.length - 1) {
      return mappedChildren;
    } else {
      const result = {};
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._iterateObject)(mappedChildren, (key, value) => {
        result[key] = this.bucketChildren(value, pivotColumns, pivotIndex + 1, uniqueValues[key]);
      });
      return result;
    }
  }
  getPivotColumnDefs() {
    return this.pivotColumnDefs;
  }
};

// enterprise-modules/row-grouping/src/rowGrouping/rowGroupingApi.ts
function addAggFunc(beans, key, aggFunc) {
  if (beans.aggFuncService) {
    beans.aggFuncService.addAggFuncs({
      key: aggFunc
    });
  }
}
function addAggFuncs(beans, aggFuncs) {
  if (beans.aggFuncService) {
    beans.aggFuncService.addAggFuncs(aggFuncs);
  }
}
function clearAggFuncs(beans) {
  if (beans.aggFuncService) {
    beans.aggFuncService.clear();
  }
}
function setColumnAggFunc(beans, key, aggFunc) {
  beans.funcColsService.setColumnAggFunc(key, aggFunc, "api");
}
function isPivotMode(beans) {
  return beans.columnModel.isPivotMode();
}
function getPivotResultColumn(beans, pivotKeys, valueColKey) {
  return beans.pivotResultColsService.lookupPivotResultCol(pivotKeys, valueColKey);
}
function setValueColumns(beans, colKeys) {
  beans.funcColsService.setValueColumns(colKeys, "api");
}
function getValueColumns(beans) {
  return beans.funcColsService.getValueColumns();
}
function removeValueColumn(beans, colKey) {
  beans.funcColsService.removeValueColumns([colKey], "api");
}
function removeValueColumns(beans, colKeys) {
  beans.funcColsService.removeValueColumns(colKeys, "api");
}
function addValueColumn(beans, colKey) {
  beans.funcColsService.addValueColumns([colKey], "api");
}
function addValueColumns(beans, colKeys) {
  beans.funcColsService.addValueColumns(colKeys, "api");
}
function setRowGroupColumns(beans, colKeys) {
  beans.funcColsService.setRowGroupColumns(colKeys, "api");
}
function removeRowGroupColumn(beans, colKey) {
  beans.funcColsService.removeRowGroupColumns([colKey], "api");
}
function removeRowGroupColumns(beans, colKeys) {
  beans.funcColsService.removeRowGroupColumns(colKeys, "api");
}
function addRowGroupColumn(beans, colKey) {
  beans.funcColsService.addRowGroupColumns([colKey], "api");
}
function addRowGroupColumns(beans, colKeys) {
  beans.funcColsService.addRowGroupColumns(colKeys, "api");
}
function moveRowGroupColumn(beans, fromIndex, toIndex) {
  beans.funcColsService.moveRowGroupColumn(fromIndex, toIndex, "api");
}
function getRowGroupColumns(beans) {
  return beans.funcColsService.getRowGroupColumns();
}
function setPivotColumns(beans, colKeys) {
  beans.funcColsService.setPivotColumns(colKeys, "api");
}
function removePivotColumn(beans, colKey) {
  beans.funcColsService.removePivotColumns([colKey], "api");
}
function removePivotColumns(beans, colKeys) {
  beans.funcColsService.removePivotColumns(colKeys, "api");
}
function addPivotColumn(beans, colKey) {
  beans.funcColsService.addPivotColumns([colKey], "api");
}
function addPivotColumns(beans, colKeys) {
  beans.funcColsService.addPivotColumns(colKeys, "api");
}
function getPivotColumns(beans) {
  return beans.funcColsService.getPivotColumns();
}
function setPivotResultColumns(beans, colDefs) {
  beans.pivotResultColsService.setPivotResultCols(colDefs, "api");
}
function getPivotResultColumns(beans) {
  const pivotResultCols = beans.pivotResultColsService.getPivotResultCols();
  return pivotResultCols ? pivotResultCols.list : null;
}

// enterprise-modules/row-grouping/src/rowGrouping/showRowGroupColsService.ts

var ShowRowGroupColsService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "showRowGroupColsService";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
    this.funcColsService = beans.funcColsService;
  }
  refresh() {
    this.showRowGroupCols = [];
    this.showRowGroupColsMap = {};
    this.columnModel.getCols().forEach(col => {
      const colDef = col.getColDef();
      const showRowGroup = colDef.showRowGroup;
      const isString = typeof showRowGroup === "string";
      const isTrue = showRowGroup === true;
      if (!isString && !isTrue) {
        return;
      }
      this.showRowGroupCols.push(col);
      if (isString) {
        this.showRowGroupColsMap[showRowGroup] = col;
      } else {
        const rowGroupCols = this.funcColsService.getRowGroupColumns();
        rowGroupCols.forEach(rowGroupCol => {
          this.showRowGroupColsMap[rowGroupCol.getId()] = col;
        });
      }
    });
  }
  getShowRowGroupCols() {
    return this.showRowGroupCols;
  }
  getShowRowGroupCol(id) {
    return this.showRowGroupColsMap[id];
  }
};

// enterprise-modules/row-grouping/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/row-grouping/src/rowGroupingModule.ts
var RowGroupingCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RowGroupingModule}-core`,
  beans: [AggregationStage, FilterAggregatesStage, GroupStage, PivotColDefService, PivotStage, AggFuncService, AutoColService, ShowRowGroupColsService, ColumnDropZoneService],
  userComponents: [{
    name: "agGroupRowRenderer",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.GroupCellRenderer
  }, {
    name: "agGroupCellRenderer",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.GroupCellRenderer
  }],
  controllers: [{
    name: "groupCellRendererCtrl",
    classImp: _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.GroupCellRendererCtrl
  }],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule]
});
var RowGroupingApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RowGroupingModule}-api`,
  apiFunctions: {
    addAggFunc,
    addAggFuncs,
    clearAggFuncs,
    setColumnAggFunc,
    isPivotMode,
    getPivotResultColumn,
    setValueColumns,
    getValueColumns,
    removeValueColumn,
    removeValueColumns,
    addValueColumn,
    addValueColumns,
    setRowGroupColumns,
    removeRowGroupColumn,
    removeRowGroupColumns,
    addRowGroupColumn,
    addRowGroupColumns,
    getRowGroupColumns,
    moveRowGroupColumn,
    setPivotColumns,
    removePivotColumn,
    removePivotColumns,
    addPivotColumn,
    addPivotColumns,
    getPivotColumns,
    setPivotResultColumns,
    getPivotResultColumns
  },
  dependantModules: [RowGroupingCoreModule]
});
var GroupFilterModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: "@ag-grid-enterprise/group-filter",
  userComponents: [{
    name: "agGroupColumnFilter",
    classImp: GroupFilter
  }],
  dependantModules: [RowGroupingCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._ColumnFilterModule]
});
var GroupFloatingFilterModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: "@ag-grid-enterprise/group-floating-filter",
  userComponents: [{
    name: "agGroupColumnFloatingFilter",
    classImp: GroupFloatingFilterComp
  }],
  dependantModules: [GroupFilterModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._FloatingFilterModule]
});
var RowGroupingModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.RowGroupingModule,
  dependantModules: [RowGroupingCoreModule, RowGroupingApiModule, GroupFilterModule, GroupFloatingFilterModule]
});

// enterprise-modules/row-grouping/src/rowGrouping/columnDropZones/valueDropZonePanel.ts

var ValuesDropZonePanel = class extends BaseDropZonePanel {
  constructor(horizontal) {
    super(horizontal, "aggregation");
  }
  postConstruct() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const emptyMessage = localeTextFunc("valueColumnsEmptyMessage", "Drag here to aggregate");
    const title = localeTextFunc("values", "Values");
    super.init({
      icon: (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)("valuePanel", this.gos, null),
      emptyMessage,
      title
    });
    this.addManagedEventListeners({
      columnValueChanged: this.refreshGui.bind(this)
    });
  }
  getAriaLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const label = translate("ariaValuesDropZonePanelLabel", "Values");
    return label;
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "valueColumnsList";
    return res;
  }
  getIconName() {
    return this.isPotentialDndItems() ? "aggregate" : "notAllowed";
  }
  isItemDroppable(column, draggingEvent) {
    if (this.gos.get("functionsReadOnly") || !column.isPrimary()) {
      return false;
    }
    return column.isAllowValue() && (!column.isValueActive() || this.isSourceEventFromTarget(draggingEvent));
  }
  updateItems(columns) {
    this.funcColsService.setValueColumns(columns, "toolPanelUi");
  }
  getExistingItems() {
    return this.funcColsService.getValueColumns();
  }
};


/***/ }),

/***/ 38072:
/*!*******************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/set-filter/dist/package/main.esm.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetFilter: () => (/* binding */ SetFilter),
/* harmony export */   SetFilterModule: () => (/* binding */ SetFilterModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/set-filter/src/setFilterModule.ts



// enterprise-modules/set-filter/src/setFilter/setFilter.ts



// enterprise-modules/set-filter/src/setFilter/iSetDisplayValueModel.ts
var SetFilterDisplayValue = class {};
SetFilterDisplayValue.SELECT_ALL = "__AG_SELECT_ALL__";
SetFilterDisplayValue.ADD_SELECTION_TO_FILTER = "__AG_ADD_SELECTION_TO_FILTER__";

// enterprise-modules/set-filter/src/setFilter/localeText.ts
var DEFAULT_LOCALE_TEXT = {
  loadingOoo: "Loading...",
  blanks: "(Blanks)",
  searchOoo: "Search...",
  selectAll: "(Select All)",
  selectAllSearchResults: "(Select All Search Results)",
  addCurrentSelectionToFilter: "Add current selection to filter",
  noMatches: "No matches."
};

// enterprise-modules/set-filter/src/setFilter/setFilterListItem.ts

var SetFilterListItem = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(params) {
    super(params.isGroup ? (/* html */
    `
            <div class="ag-set-filter-item" aria-hidden="true">
                <span class="ag-set-filter-group-icons">
                    <span class="ag-set-filter-group-closed-icon" data-ref="eGroupClosedIcon"></span>
                    <span class="ag-set-filter-group-opened-icon" data-ref="eGroupOpenedIcon"></span>
                    <span class="ag-set-filter-group-indeterminate-icon" data-ref="eGroupIndeterminateIcon"></span>
                </span>
                <ag-checkbox data-ref="eCheckbox" class="ag-set-filter-item-checkbox"></ag-checkbox>
            </div>`) : (/* html */
    `
            <div class="ag-set-filter-item">
                <ag-checkbox data-ref="eCheckbox" class="ag-set-filter-item-checkbox"></ag-checkbox>
            </div>`), [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgCheckboxSelector]);
    this.eCheckbox = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eGroupOpenedIcon = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eGroupClosedIcon = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eGroupIndeterminateIcon = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.focusWrapper = params.focusWrapper;
    this.value = params.value;
    this.params = params.params;
    this.translate = params.translate;
    this.valueFormatter = params.valueFormatter;
    this.item = params.item;
    this.isSelected = params.isSelected;
    this.isTree = params.isTree;
    this.depth = params.depth ?? 0;
    this.isGroup = params.isGroup;
    this.groupsExist = params.groupsExist;
    this.isExpanded = params.isExpanded;
    this.hasIndeterminateExpandState = params.hasIndeterminateExpandState;
  }
  wireBeans(beans) {
    this.valueService = beans.valueService;
    this.userComponentFactory = beans.userComponentFactory;
  }
  postConstruct() {
    this.addDestroyFunc(() => this.destroyCellRendererComponent?.());
    this.render();
    this.eCheckbox.setLabelEllipsis(true).setValue(this.isSelected, true).setDisabled(!!this.params.readOnly).getInputElement().setAttribute("tabindex", "-1");
    this.refreshVariableAriaLabels();
    if (this.isTree) {
      if (this.depth > 0) {
        this.addCssClass("ag-set-filter-indent-" + this.depth);
        this.getGui().style.setProperty("--ag-indentation-level", String(this.depth));
      }
      if (this.isGroup) {
        this.setupExpansion();
      } else {
        if (this.groupsExist) {
          this.addCssClass("ag-set-filter-add-group-indent");
        }
      }
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLevel)(this.getAriaElement(), this.depth + 1);
    }
    this.refreshAriaChecked();
    if (this.params.readOnly) {
      return;
    }
    this.eCheckbox.onValueChange(value => this.onCheckboxChanged(!!value));
  }
  getFocusableElement() {
    return this.focusWrapper;
  }
  setupExpansion() {
    this.eGroupClosedIcon.appendChild((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIcon)("setFilterGroupClosed", this.gos, null));
    this.eGroupOpenedIcon.appendChild((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIcon)("setFilterGroupOpen", this.gos, null));
    const listener = this.onExpandOrContractClicked.bind(this);
    this.addManagedElementListeners(this.eGroupClosedIcon, {
      click: listener
    });
    this.addManagedElementListeners(this.eGroupOpenedIcon, {
      click: listener
    });
    if (this.hasIndeterminateExpandState) {
      this.eGroupIndeterminateIcon.appendChild((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIcon)("setFilterGroupIndeterminate", this.gos, null));
      this.addManagedElementListeners(this.eGroupIndeterminateIcon, {
        click: listener
      });
    }
    this.setExpandedIcons();
    this.refreshAriaExpanded();
  }
  onExpandOrContractClicked() {
    this.setExpanded(!this.isExpanded);
  }
  setExpanded(isExpanded, silent) {
    if (this.isGroup && isExpanded !== this.isExpanded) {
      this.isExpanded = isExpanded;
      const event = {
        type: "expandedChanged",
        isExpanded: !!isExpanded,
        item: this.item
      };
      if (!silent) {
        this.dispatchLocalEvent(event);
      }
      this.setExpandedIcons();
      this.refreshAriaExpanded();
    }
  }
  setExpandedIcons() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupClosedIcon, this.hasIndeterminateExpandState ? this.isExpanded === false : !this.isExpanded);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupOpenedIcon, this.isExpanded === true);
    if (this.hasIndeterminateExpandState) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eGroupIndeterminateIcon, this.isExpanded === void 0);
    }
  }
  onCheckboxChanged(isSelected) {
    this.isSelected = isSelected;
    const event = {
      type: "selectionChanged",
      isSelected,
      item: this.item
    };
    this.dispatchLocalEvent(event);
    this.refreshVariableAriaLabels();
    this.refreshAriaChecked();
  }
  toggleSelected() {
    if (this.params.readOnly) {
      return;
    }
    this.setSelected(!this.isSelected);
  }
  setSelected(isSelected, silent) {
    this.isSelected = isSelected;
    this.eCheckbox.setValue(isSelected, silent);
    this.refreshAriaChecked();
  }
  refreshVariableAriaLabels() {
    if (!this.isTree) {
      return;
    }
    const translate = this.localeService.getLocaleTextFunc();
    const checkboxValue = this.eCheckbox.getValue();
    const state = checkboxValue === void 0 ? translate("ariaIndeterminate", "indeterminate") : checkboxValue ? translate("ariaVisible", "visible") : translate("ariaHidden", "hidden");
    const visibilityLabel = translate("ariaToggleVisibility", "Press SPACE to toggle visibility");
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLabelledBy)(this.eCheckbox.getInputElement(), void 0);
    this.eCheckbox.setInputAriaLabel(`${visibilityLabel} (${state})`);
  }
  setupFixedAriaLabels(value) {
    if (!this.isTree) {
      return;
    }
    const translate = this.localeService.getLocaleTextFunc();
    const itemLabel = translate("ariaFilterValue", "Filter Value");
    const ariaEl = this.getAriaElement();
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaLabel)(ariaEl, `${value} ${itemLabel}`);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaDescribedBy)(ariaEl, this.eCheckbox.getInputElement().id);
  }
  refreshAriaChecked() {
    const ariaEl = this.getAriaElement();
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaChecked)(ariaEl, this.eCheckbox.getValue());
  }
  refreshAriaExpanded() {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaExpanded)(this.getAriaElement(), !!this.isExpanded);
  }
  refresh(item, isSelected, isExpanded) {
    this.item = item;
    if (isSelected !== this.isSelected) {
      this.setSelected(isSelected, true);
    }
    this.setExpanded(isExpanded, true);
    if (this.valueFunction) {
      const value = this.valueFunction();
      this.setTooltipAndCellRendererParams(value, value);
      if (!this.cellRendererComponent) {
        this.renderCellWithoutCellRenderer();
      }
    }
    if (this.cellRendererComponent) {
      const success = this.cellRendererComponent.refresh?.(this.cellRendererParams);
      if (!success) {
        const oldComponent = this.cellRendererComponent;
        this.renderCell();
        this.destroyBean(oldComponent);
      }
    }
  }
  render() {
    const {
      params: {
        column
      }
    } = this;
    let {
      value
    } = this;
    let formattedValue = null;
    if (typeof value === "function") {
      this.valueFunction = value;
      formattedValue = this.valueFunction();
      value = formattedValue;
    } else if (this.isTree) {
      formattedValue = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)(value);
    } else {
      formattedValue = this.getFormattedValue(column, value);
    }
    this.setTooltipAndCellRendererParams(value, formattedValue);
    this.renderCell();
  }
  setTooltipAndCellRendererParams(value, formattedValue) {
    const isTooltipWhenTruncated = this.gos.get("tooltipShowMode") === "whenTruncated";
    if (this.params.showTooltips && (!isTooltipWhenTruncated || !this.params.cellRenderer)) {
      const newTooltipText = formattedValue != null ? formattedValue : (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)(value);
      let shouldDisplayTooltip;
      if (isTooltipWhenTruncated) {
        shouldDisplayTooltip = () => {
          const el = this.eCheckbox.getGui().querySelector(".ag-label");
          if (!el) {
            return true;
          }
          return el.scrollWidth > el.clientWidth;
        };
      }
      this.setTooltip({
        newTooltipText,
        location: "setFilterValue",
        getColDef: () => this.params.colDef,
        getColumn: () => this.params.column,
        shouldDisplayTooltip
      });
    }
    this.cellRendererParams = this.gos.addGridCommonParams({
      value,
      valueFormatted: formattedValue,
      colDef: this.params.colDef,
      column: this.params.column,
      setTooltip: (value2, shouldDisplayTooltip) => {
        this.setTooltip({
          newTooltipText: value2,
          getColDef: () => this.params.colDef,
          getColumn: () => this.params.column,
          location: "setFilterValue",
          shouldDisplayTooltip
        });
      }
    });
  }
  getTooltipParams() {
    const res = super.getTooltipParams();
    res.location = "setFilterValue";
    res.colDef = this.getComponentHolder();
    if (this.isTree) {
      res.level = this.depth;
    }
    return res;
  }
  getFormattedValue(column, value) {
    return this.valueService.formatValue(column, null, value, this.valueFormatter, false);
  }
  renderCell() {
    const compDetails = this.userComponentFactory.getSetFilterCellRendererDetails(this.params, this.cellRendererParams);
    const cellRendererPromise = compDetails ? compDetails.newAgStackInstance() : void 0;
    if (cellRendererPromise == null) {
      this.renderCellWithoutCellRenderer();
      return;
    }
    cellRendererPromise.then(component => {
      if (component) {
        this.cellRendererComponent = component;
        this.eCheckbox.setLabel(component.getGui());
        this.destroyCellRendererComponent = () => this.destroyBean(component);
      }
    });
  }
  renderCellWithoutCellRenderer() {
    let valueToRender = (this.cellRendererParams.valueFormatted == null ? this.cellRendererParams.value : this.cellRendererParams.valueFormatted) ?? this.translate("blanks");
    if (typeof valueToRender !== "string") {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`Set Filter Value Formatter must return string values. Please ensure the Set Filter Value Formatter returns string values for complex objects. See ${this.getFrameworkOverrides().getDocLink("filter-set-filter-list/#filter-value-types")}`);
      valueToRender = "";
    }
    this.eCheckbox.setLabel(valueToRender);
    this.setupFixedAriaLabels(valueToRender);
  }
  getComponentHolder() {
    return this.params.column.getColDef();
  }
};

// enterprise-modules/set-filter/src/setFilter/setFilterModelFormatter.ts
var SetFilterModelFormatter = class {
  getModelAsString(model, setFilter) {
    const {
      values
    } = model || setFilter.getModel() || {};
    const valueModel = setFilter.getValueModel();
    if (values == null || valueModel == null) {
      return "";
    }
    const availableKeys = values.filter(v => valueModel.isKeyAvailable(v));
    const numValues = availableKeys.length;
    const formattedValues = availableKeys.slice(0, 10).map(key => setFilter.getFormattedValue(key));
    return `(${numValues}) ${formattedValues.join(",")}${numValues > 10 ? ",..." : ""}`;
  }
};

// enterprise-modules/set-filter/src/setFilter/setFilterUtils.ts

function processDataPath(dataPath, treeData, groupAllowUnbalanced) {
  let processedDataPath = dataPath;
  if (!processedDataPath) {
    return null;
  }
  processedDataPath = processedDataPath.map(treeKey => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(treeKey)));
  if (!treeData && groupAllowUnbalanced && processedDataPath.some(treeKey => treeKey == null)) {
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(processedDataPath) == null) {
      return null;
    }
    return processedDataPath.filter(treeKey => treeKey != null);
  }
  return processedDataPath;
}

// enterprise-modules/set-filter/src/setFilter/setValueModel.ts


// enterprise-modules/set-filter/src/clientSideValueExtractor.ts

var ClientSideValuesExtractor = class {
  constructor(rowModel, filterParams, createKey, caseFormat, funcColsService, valueService, treeDataOrGrouping, treeData, getDataPath, groupAllowUnbalanced, addManagedEventListeners) {
    this.rowModel = rowModel;
    this.filterParams = filterParams;
    this.createKey = createKey;
    this.caseFormat = caseFormat;
    this.funcColsService = funcColsService;
    this.valueService = valueService;
    this.treeDataOrGrouping = treeDataOrGrouping;
    this.treeData = treeData;
    this.getDataPath = getDataPath;
    this.groupAllowUnbalanced = groupAllowUnbalanced;
    this.addManagedEventListeners = addManagedEventListeners;
  }
  extractUniqueValuesAsync(predicate, existingValues) {
    return new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise(resolve => {
      if (this.rowModel.isRowDataLoaded()) {
        resolve(this.extractUniqueValues(predicate, existingValues));
      } else {
        const [destroyFunc] = this.addManagedEventListeners({
          rowCountReady: () => {
            destroyFunc?.();
            resolve(this.extractUniqueValues(predicate, existingValues));
          }
        });
      }
    });
  }
  extractUniqueValues(predicate, existingValues) {
    const values = /* @__PURE__ */new Map();
    const existingFormattedKeys = this.extractExistingFormattedKeys(existingValues);
    const formattedKeys = /* @__PURE__ */new Set();
    const treeData = this.treeData && !!this.getDataPath;
    const groupedCols = this.funcColsService.getRowGroupColumns();
    const addValue = (unformattedKey, value) => {
      const formattedKey = this.caseFormat(unformattedKey);
      if (!formattedKeys.has(formattedKey)) {
        formattedKeys.add(formattedKey);
        let keyToAdd = unformattedKey;
        let valueToAdd = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(value);
        const existingUnformattedKey = existingFormattedKeys?.get(formattedKey);
        if (existingUnformattedKey != null) {
          keyToAdd = existingUnformattedKey;
          valueToAdd = existingValues.get(existingUnformattedKey);
        }
        values.set(keyToAdd, valueToAdd);
      }
    };
    this.rowModel.forEachLeafNode(node => {
      if (!node.data || !predicate(node)) {
        return;
      }
      if (this.treeDataOrGrouping) {
        this.addValueForTreeDataOrGrouping(node, treeData, groupedCols, addValue);
        return;
      }
      const value = this.getValue(node);
      if (value != null && Array.isArray(value)) {
        value.forEach(x => {
          addValue(this.createKey(x, node), x);
        });
        if (value.length === 0) {
          addValue(null, null);
        }
      } else {
        addValue(this.createKey(value, node), value);
      }
    });
    return values;
  }
  addValueForTreeDataOrGrouping(node, treeData, groupedCols, addValue) {
    let dataPath;
    if (treeData) {
      if (node.childrenAfterGroup?.length) {
        return;
      }
      dataPath = this.getDataPath(node.data);
    } else {
      dataPath = groupedCols.map(groupCol => this.valueService.getKeyForNode(groupCol, node));
      dataPath.push(this.getValue(node));
    }
    const processedDataPath = processDataPath(dataPath, treeData, this.groupAllowUnbalanced);
    addValue(this.createKey(processedDataPath), processedDataPath);
  }
  getValue(node) {
    return this.filterParams.getValue(node);
  }
  extractExistingFormattedKeys(existingValues) {
    if (!existingValues) {
      return null;
    }
    const existingFormattedKeys = /* @__PURE__ */new Map();
    existingValues.forEach((_value, key) => {
      existingFormattedKeys.set(this.caseFormat(key), key);
    });
    return existingFormattedKeys;
  }
};

// enterprise-modules/set-filter/src/setFilter/filteringKeys.ts
var SetValueModelFilteringKeys = class {
  constructor({
    caseFormat
  }) {
    // To make the filtering fast, we store the keys in a Set rather than using the default array.
    this.filteringKeys = null;
    // This attribute contains keys that are actually used for filtering.
    // These keys take into account case sensitivity:
    // - When filtering is case-insensitive, all filtering keys are converted to upper case and stored here.
    // - When filtering is case-sensitive, this is the same as filteringKeys.
    this.filteringKeysCaseFormatted = null;
    this.hasNoAppliedFilteringKeys = false;
    this.caseFormat = caseFormat;
  }
  allFilteringKeys() {
    return this.filteringKeys;
  }
  allFilteringKeysCaseFormatted() {
    return this.filteringKeysCaseFormatted;
  }
  noAppliedFilteringKeys() {
    return this.hasNoAppliedFilteringKeys;
  }
  setFilteringKeys(filteringKeys) {
    this.filteringKeys = new Set(filteringKeys);
    this.hasNoAppliedFilteringKeys = !this.filteringKeys || this.filteringKeys.size === 0;
    this.filteringKeysCaseFormatted = /* @__PURE__ */new Set();
    this.filteringKeys.forEach(key => this.filteringKeysCaseFormatted.add(this.caseFormat(key)));
  }
  addFilteringKey(key) {
    if (this.filteringKeys == null) {
      this.filteringKeys = /* @__PURE__ */new Set();
      this.filteringKeysCaseFormatted = /* @__PURE__ */new Set();
    }
    this.filteringKeys.add(key);
    this.filteringKeysCaseFormatted.add(this.caseFormat(key));
    if (this.hasNoAppliedFilteringKeys) {
      this.hasNoAppliedFilteringKeys = false;
    }
  }
  hasCaseFormattedFilteringKey(key) {
    return this.filteringKeysCaseFormatted.has(this.caseFormat(key));
  }
  hasFilteringKey(key) {
    return this.filteringKeys.has(key);
  }
  reset() {
    this.filteringKeys = null;
    this.filteringKeysCaseFormatted = null;
    this.hasNoAppliedFilteringKeys = false;
  }
};

// enterprise-modules/set-filter/src/setFilter/flatSetDisplayValueModel.ts
var FlatSetDisplayValueModel = class {
  constructor(valueService, valueFormatter, formatter, column) {
    this.valueService = valueService;
    this.valueFormatter = valueFormatter;
    this.formatter = formatter;
    this.column = column;
    /** All keys that are currently displayed, after the mini-filter has been applied. */
    this.displayedKeys = [];
  }
  updateDisplayedValuesToAllAvailable(_getValue, _allKeys, availableKeys) {
    this.displayedKeys = Array.from(availableKeys);
  }
  updateDisplayedValuesToMatchMiniFilter(getValue, _allKeys, availableKeys, matchesFilter, nullMatchesFilter) {
    this.displayedKeys = [];
    for (const key of availableKeys) {
      if (key == null) {
        if (nullMatchesFilter) {
          this.displayedKeys.push(key);
        }
      } else {
        const value = getValue(key);
        const valueFormatterValue = this.valueService.formatValue(this.column, null, value, this.valueFormatter, false);
        const textFormatterValue = this.formatter(valueFormatterValue);
        if (matchesFilter(textFormatterValue)) {
          this.displayedKeys.push(key);
        }
      }
    }
  }
  getDisplayedValueCount() {
    return this.displayedKeys.length;
  }
  getDisplayedItem(index) {
    return this.displayedKeys[index];
  }
  getSelectAllItem() {
    return SetFilterDisplayValue.SELECT_ALL;
  }
  getAddSelectionToFilterItem() {
    return SetFilterDisplayValue.ADD_SELECTION_TO_FILTER;
  }
  getDisplayedKeys() {
    return this.displayedKeys;
  }
  forEachDisplayedKey(func) {
    this.displayedKeys.forEach(func);
  }
  someDisplayedKey(func) {
    return this.displayedKeys.some(func);
  }
  hasGroups() {
    return false;
  }
  refresh() {}
};

// enterprise-modules/set-filter/src/setFilter/treeSetDisplayValueModel.ts

var DATE_TREE_LIST_PATH_GETTER = date => date ? [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())] : null;
var TreeSetDisplayValueModel = class {
  constructor(formatter, treeListPathGetter, treeListFormatter, treeDataOrGrouping) {
    this.formatter = formatter;
    this.treeListPathGetter = treeListPathGetter;
    this.treeListFormatter = treeListFormatter;
    this.treeDataOrGrouping = treeDataOrGrouping;
    /** all displayed items in a tree structure */
    this.allDisplayedItemsTree = [];
    /** all displayed items flattened and filtered */
    this.activeDisplayedItemsFlat = [];
    this.selectAllItem = {
      depth: 0,
      filterPasses: true,
      available: true,
      treeKey: SetFilterDisplayValue.SELECT_ALL,
      children: this.allDisplayedItemsTree,
      expanded: true,
      key: SetFilterDisplayValue.SELECT_ALL,
      parentTreeKeys: []
    };
    this.addSelectionToFilterItem = {
      depth: 0,
      filterPasses: true,
      available: true,
      treeKey: SetFilterDisplayValue.ADD_SELECTION_TO_FILTER,
      expanded: true,
      key: SetFilterDisplayValue.ADD_SELECTION_TO_FILTER,
      parentTreeKeys: []
    };
  }
  updateOnParamsChange(treeListFormatter) {
    this.treeListFormatter = treeListFormatter;
  }
  updateDisplayedValuesToAllAvailable(getValue, allKeys, availableKeys, source) {
    if (source === "reload") {
      this.generateItemTree(getValue, allKeys, availableKeys);
    } else if (source === "otherFilter") {
      this.updateAvailable(availableKeys);
      this.updateExpandAll();
    } else if (source === "miniFilter") {
      this.resetFilter();
      this.updateExpandAll();
    }
    this.flattenItems();
  }
  updateDisplayedValuesToMatchMiniFilter(getValue, allKeys, availableKeys, matchesFilter, nullMatchesFilter, source) {
    if (source === "reload") {
      this.generateItemTree(getValue, allKeys, availableKeys);
    } else if (source === "otherFilter") {
      this.updateAvailable(availableKeys);
    }
    this.updateFilter(matchesFilter, nullMatchesFilter);
    this.updateExpandAll();
    this.flattenItems();
  }
  generateItemTree(getValue, allKeys, availableKeys) {
    this.allDisplayedItemsTree = [];
    this.groupsExist = false;
    const treeListPathGetter = this.getTreeListPathGetter(getValue, availableKeys);
    for (const key of allKeys) {
      const value = getValue(key);
      const dataPath = treeListPathGetter(value) ?? [null];
      if (dataPath.length > 1) {
        this.groupsExist = true;
      }
      const available = availableKeys.has(key);
      let children = this.allDisplayedItemsTree;
      let item;
      let parentTreeKeys = [];
      dataPath.forEach((treeKey, depth) => {
        if (!children) {
          children = [];
          item.children = children;
        }
        item = children.find(child => child.treeKey?.toUpperCase() === treeKey?.toUpperCase());
        if (!item) {
          item = {
            treeKey,
            depth,
            filterPasses: true,
            expanded: false,
            available,
            parentTreeKeys
          };
          if (depth === dataPath.length - 1) {
            item.key = key;
          }
          children.push(item);
        }
        children = item.children;
        parentTreeKeys = [...parentTreeKeys, treeKey];
      });
    }
    this.updateAvailable(availableKeys);
    this.selectAllItem.children = this.allDisplayedItemsTree;
    this.selectAllItem.expanded = false;
  }
  getTreeListPathGetter(getValue, availableKeys) {
    if (this.treeListPathGetter) {
      return this.treeListPathGetter;
    }
    if (this.treeDataOrGrouping) {
      return value => value;
    }
    let isDate = false;
    for (const availableKey of availableKeys) {
      const value = getValue(availableKey);
      if (value instanceof Date) {
        isDate = true;
        break;
      } else if (value != null) {
        break;
      }
    }
    if (isDate) {
      return DATE_TREE_LIST_PATH_GETTER;
    }
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("property treeList=true for Set Filter params, but you did not provide a treeListPathGetter or values of type Date.");
    return value => [String(value)];
  }
  flattenItems() {
    this.activeDisplayedItemsFlat = [];
    const recursivelyFlattenDisplayedItems = items => {
      items.forEach(item => {
        if (!item.filterPasses || !item.available) {
          return;
        }
        this.activeDisplayedItemsFlat.push(item);
        if (item.children && item.expanded) {
          recursivelyFlattenDisplayedItems(item.children);
        }
      });
    };
    recursivelyFlattenDisplayedItems(this.allDisplayedItemsTree);
  }
  resetFilter() {
    const recursiveFilterReset = item => {
      if (item.children) {
        item.children.forEach(child => {
          recursiveFilterReset(child);
        });
      }
      item.filterPasses = true;
    };
    this.allDisplayedItemsTree.forEach(item => recursiveFilterReset(item));
  }
  updateFilter(matchesFilter, nullMatchesFilter) {
    const passesFilter = item => {
      if (!item.available) {
        return false;
      }
      if (item.treeKey == null) {
        return nullMatchesFilter;
      }
      return matchesFilter(this.formatter(this.treeListFormatter ? this.treeListFormatter(item.treeKey, item.depth, item.parentTreeKeys) : item.treeKey));
    };
    this.allDisplayedItemsTree.forEach(item => this.recursiveItemCheck(item, false, passesFilter, "filterPasses"));
  }
  getDisplayedValueCount() {
    return this.activeDisplayedItemsFlat.length;
  }
  getDisplayedItem(index) {
    return this.activeDisplayedItemsFlat[index];
  }
  getSelectAllItem() {
    return this.selectAllItem;
  }
  getAddSelectionToFilterItem() {
    return this.addSelectionToFilterItem;
  }
  getDisplayedKeys() {
    const displayedKeys = [];
    this.forEachDisplayedKey(key => displayedKeys.push(key));
    return displayedKeys;
  }
  forEachDisplayedKey(func) {
    const recursiveForEachItem = (item, topParentExpanded) => {
      if (item.children) {
        if (!item.expanded || !topParentExpanded) {
          item.children.forEach(child => {
            if (child.filterPasses) {
              recursiveForEachItem(child, false);
            }
          });
        }
      } else {
        func(item.key);
      }
    };
    this.activeDisplayedItemsFlat.forEach(item => recursiveForEachItem(item, true));
  }
  someDisplayedKey(func) {
    const recursiveSomeItem = (item, topParentExpanded) => {
      if (item.children) {
        if (!item.expanded || !topParentExpanded) {
          return item.children.some(child => {
            if (child.filterPasses) {
              return recursiveSomeItem(child, false);
            }
            return false;
          });
        }
      } else {
        return func(item.key);
      }
      return false;
    };
    return this.activeDisplayedItemsFlat.some(item => recursiveSomeItem(item, true));
  }
  hasGroups() {
    return this.groupsExist;
  }
  refresh() {
    this.updateExpandAll();
    this.flattenItems();
  }
  updateExpandAll() {
    const recursiveExpansionCheck = (items, someTrue, someFalse) => {
      for (const item2 of items) {
        if (!item2.filterPasses || !item2.available || !item2.children) {
          continue;
        }
        someTrue = someTrue || !!item2.expanded;
        someFalse = someFalse || !item2.expanded;
        if (someTrue && someFalse) {
          return void 0;
        }
        const childExpanded = recursiveExpansionCheck(item2.children, someTrue, someFalse);
        if (childExpanded === void 0) {
          return void 0;
        } else if (childExpanded) {
          someTrue = true;
        } else {
          someFalse = true;
        }
      }
      return someTrue && someFalse ? void 0 : someTrue;
    };
    const item = this.getSelectAllItem();
    item.expanded = recursiveExpansionCheck(item.children, false, false);
  }
  recursiveItemCheck(item, parentPasses, checkFunction, itemProp) {
    let atLeastOneChildPassed = false;
    if (item.children) {
      item.children.forEach(child => {
        const childPasses = this.recursiveItemCheck(child, parentPasses || checkFunction(item), checkFunction, itemProp);
        atLeastOneChildPassed = atLeastOneChildPassed || childPasses;
      });
    }
    const itemPasses = parentPasses || atLeastOneChildPassed || checkFunction(item);
    item[itemProp] = itemPasses;
    return itemPasses;
  }
  updateAvailable(availableKeys) {
    const isAvailable = item => availableKeys.has(item.key);
    this.allDisplayedItemsTree.forEach(item => this.recursiveItemCheck(item, false, isAvailable, "available"));
  }
};

// enterprise-modules/set-filter/src/setFilter/setValueModel.ts
var SetValueModel = class {
  constructor(params) {
    this.localEventService = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.LocalEventService();
    this.miniFilterText = null;
    /** When true, in excelMode = 'windows', it adds previously selected filter items to newly checked filter selection */
    this.addCurrentSelectionToFilter = false;
    /** Values provided to the filter for use. */
    this.providedValues = null;
    /** All possible values for the filter, sorted if required. */
    this.allValues = /* @__PURE__ */new Map();
    /** Remaining keys when filters from other columns have been applied. */
    this.availableKeys = /* @__PURE__ */new Set();
    /** Keys that have been selected for this filter. */
    this.selectedKeys = /* @__PURE__ */new Set();
    this.initialised = false;
    const {
      usingComplexObjects,
      funcColsService,
      valueService,
      treeDataTreeList,
      groupingTreeList,
      filterParams,
      gos,
      valueFormatter,
      addManagedEventListeners
    } = params;
    const {
      column,
      colDef,
      textFormatter,
      doesRowPassOtherFilter,
      suppressSorting,
      comparator,
      rowModel,
      values,
      caseSensitive,
      treeList,
      treeListPathGetter,
      treeListFormatter
    } = filterParams;
    this.filterParams = filterParams;
    this.gos = gos;
    this.setIsLoading = params.setIsLoading;
    this.translate = params.translate;
    this.caseFormat = params.caseFormat;
    this.createKey = params.createKey;
    this.usingComplexObjects = !!params.usingComplexObjects;
    this.formatter = textFormatter ?? (value => value ?? null);
    this.doesRowPassOtherFilters = doesRowPassOtherFilter;
    this.suppressSorting = suppressSorting || false;
    this.filteringKeys = new SetValueModelFilteringKeys({
      caseFormat: this.caseFormat
    });
    const keyComparator = comparator ?? colDef.comparator;
    const treeDataOrGrouping = !!treeDataTreeList || !!groupingTreeList;
    this.compareByValue = !!(usingComplexObjects && keyComparator || treeDataOrGrouping || treeList && !treeListPathGetter);
    if (treeDataOrGrouping && !keyComparator) {
      this.entryComparator = this.createTreeDataOrGroupingComparator();
    } else if (treeList && !treeListPathGetter && !keyComparator) {
      this.entryComparator = ([_aKey, aValue], [_bKey, bValue]) => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defaultComparator)(aValue, bValue);
    } else {
      this.entryComparator = ([_aKey, aValue], [_bKey, bValue]) => keyComparator(aValue, bValue);
    }
    this.keyComparator = keyComparator ?? _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defaultComparator;
    this.caseSensitive = !!caseSensitive;
    const getDataPath = gos.get("getDataPath");
    const groupAllowUnbalanced = gos.get("groupAllowUnbalanced");
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(gos)) {
      this.clientSideValuesExtractor = new ClientSideValuesExtractor(rowModel, this.filterParams, this.createKey, this.caseFormat, funcColsService, valueService, treeDataOrGrouping, !!treeDataTreeList, getDataPath, groupAllowUnbalanced, addManagedEventListeners);
    }
    if (values == null) {
      this.valuesType = 2 /* TAKEN_FROM_GRID_VALUES */;
    } else {
      this.valuesType = Array.isArray(values) ? 0 /* PROVIDED_LIST */ : 1 /* PROVIDED_CALLBACK */;
      this.providedValues = values;
    }
    this.displayValueModel = treeList ? new TreeSetDisplayValueModel(this.formatter, treeListPathGetter, treeListFormatter, treeDataTreeList || groupingTreeList) : new FlatSetDisplayValueModel(valueService, valueFormatter, this.formatter, column);
    this.updateAllValues().then(updatedKeys => this.resetSelectionState(updatedKeys || []));
  }
  addEventListener(eventType, listener, async) {
    this.localEventService.addEventListener(eventType, listener, async);
  }
  removeEventListener(eventType, listener, async) {
    this.localEventService.removeEventListener(eventType, listener, async);
  }
  updateOnParamsChange(filterParams) {
    return new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise(resolve => {
      const {
        values,
        textFormatter,
        suppressSorting,
        treeListFormatter
      } = filterParams;
      const currentProvidedValues = this.providedValues;
      const currentSuppressSorting = this.suppressSorting;
      this.filterParams = filterParams;
      this.formatter = textFormatter ?? (value => value ?? null);
      this.suppressSorting = suppressSorting || false;
      this.providedValues = values ?? null;
      if (this.displayValueModel instanceof TreeSetDisplayValueModel) {
        this.displayValueModel.updateOnParamsChange(treeListFormatter);
      }
      if (this.providedValues !== currentProvidedValues || this.suppressSorting !== currentSuppressSorting) {
        if (!values || values.length === 0) {
          this.valuesType = 2 /* TAKEN_FROM_GRID_VALUES */;
          this.providedValues = null;
        } else {
          this.valuesType = Array.isArray(values) ? 0 /* PROVIDED_LIST */ : 1 /* PROVIDED_CALLBACK */;
        }
        const currentModel = this.getModel();
        this.updateAllValues().then(() => {
          this.setModel(currentModel).then(() => resolve());
        });
      } else {
        resolve();
      }
    });
  }
  /**
   * Re-fetches the values used in the filter from the value source.
   * If keepSelection is false, the filter selection will be reset to everything selected,
   * otherwise the current selection will be preserved.
   */
  refreshValues() {
    return new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise(resolve => {
      this.allValuesPromise.then(() => {
        const currentModel = this.getModel();
        this.updateAllValues();
        this.setModel(currentModel).then(() => resolve());
      });
    });
  }
  /**
   * Overrides the current values being used for the set filter.
   * If keepSelection is false, the filter selection will be reset to everything selected,
   * otherwise the current selection will be preserved.
   */
  overrideValues(valuesToUse) {
    return new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise(resolve => {
      this.allValuesPromise.then(() => {
        this.valuesType = 0 /* PROVIDED_LIST */;
        this.providedValues = valuesToUse;
        this.refreshValues().then(() => resolve());
      });
    });
  }
  /** @return has anything been updated */
  refreshAfterAnyFilterChanged() {
    if (this.showAvailableOnly()) {
      return this.allValuesPromise.then(keys => {
        this.updateAvailableKeys(keys ?? [], "otherFilter");
        return true;
      });
    }
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve(false);
  }
  isInitialised() {
    return this.initialised;
  }
  updateAllValues() {
    this.allValuesPromise = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise(resolve => {
      switch (this.valuesType) {
        case 2 /* TAKEN_FROM_GRID_VALUES */:
          this.getValuesFromRowsAsync(false).then(values => resolve(this.processAllValues(values)));
          break;
        case 0 /* PROVIDED_LIST */:
          {
            resolve(this.processAllValues(this.uniqueValues(this.validateProvidedValues(this.providedValues))));
            break;
          }
        case 1 /* PROVIDED_CALLBACK */:
          {
            this.setIsLoading(true);
            const callback = this.providedValues;
            const {
              column,
              colDef
            } = this.filterParams;
            const params = this.gos.addGridCommonParams({
              success: values => {
                this.setIsLoading(false);
                resolve(this.processAllValues(this.uniqueValues(this.validateProvidedValues(values))));
              },
              colDef,
              column
            });
            window.setTimeout(() => callback(params), 0);
            break;
          }
        default:
          throw new Error("Unrecognised valuesType");
      }
    });
    this.allValuesPromise.then(values => this.updateAvailableKeys(values || [], "reload")).then(() => this.initialised = true);
    return this.allValuesPromise;
  }
  processAllValues(values) {
    const sortedKeys = this.sortKeys(values);
    this.allValues = values ?? /* @__PURE__ */new Map();
    return sortedKeys;
  }
  validateProvidedValues(values) {
    if (this.usingComplexObjects && values?.length) {
      const firstValue = values[0];
      if (firstValue && typeof firstValue !== "object" && typeof firstValue !== "function") {
        const firstKey = this.createKey(firstValue);
        if (firstKey == null) {
          (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Set Filter Key Creator is returning null for provided values and provided values are primitives. Please provide complex objects. See https://www.ag-grid.com/javascript-data-grid/filter-set-filter-list/#filter-value-types");
        } else {
          (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Set Filter has a Key Creator, but provided values are primitives. Did you mean to provide complex objects?");
        }
      }
    }
    return values;
  }
  setValuesType(value) {
    this.valuesType = value;
  }
  getValuesType() {
    return this.valuesType;
  }
  isKeyAvailable(key) {
    return this.availableKeys.has(key);
  }
  showAvailableOnly() {
    return this.valuesType === 2 /* TAKEN_FROM_GRID_VALUES */;
  }
  updateAvailableKeys(allKeys, source) {
    const availableKeys = this.showAvailableOnly() ? this.sortKeys(this.getValuesFromRows(true)) : allKeys;
    this.availableKeys = new Set(availableKeys);
    this.localEventService.dispatchEvent({
      type: "availableValuesChanged"
    });
    this.updateDisplayedValues(source, allKeys);
  }
  sortKeys(nullableValues) {
    const values = nullableValues ?? /* @__PURE__ */new Map();
    if (this.suppressSorting) {
      return Array.from(values.keys());
    }
    let sortedKeys;
    if (this.compareByValue) {
      sortedKeys = Array.from(values.entries()).sort(this.entryComparator).map(([key]) => key);
    } else {
      sortedKeys = Array.from(values.keys()).sort(this.keyComparator);
    }
    if (this.filterParams.excelMode && values.has(null)) {
      sortedKeys = sortedKeys.filter(v => v != null);
      sortedKeys.push(null);
    }
    return sortedKeys;
  }
  getParamsForValuesFromRows(removeUnavailableValues = false) {
    if (!this.clientSideValuesExtractor) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._errorOnce)("Set Filter cannot initialise because you are using a row model that does not contain all rows in the browser. Either use a different filter type, or configure Set Filter such that you provide it with values");
      return null;
    }
    const predicate = node => !removeUnavailableValues || this.doesRowPassOtherFilters(node);
    const existingValues = removeUnavailableValues && !this.caseSensitive ? this.allValues : void 0;
    return {
      predicate,
      existingValues
    };
  }
  getValuesFromRows(removeUnavailableValues = false) {
    const params = this.getParamsForValuesFromRows(removeUnavailableValues);
    if (!params) {
      return null;
    }
    return this.clientSideValuesExtractor.extractUniqueValues(params.predicate, params.existingValues);
  }
  getValuesFromRowsAsync(removeUnavailableValues = false) {
    const params = this.getParamsForValuesFromRows(removeUnavailableValues);
    if (!params) {
      return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve(null);
    }
    return this.clientSideValuesExtractor.extractUniqueValuesAsync(params.predicate, params.existingValues);
  }
  /** Sets mini filter value. Returns true if it changed from last value, otherwise false. */
  setMiniFilter(value) {
    value = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(value);
    if (this.miniFilterText === value) {
      return false;
    }
    if (value === null) {
      this.setAddCurrentSelectionToFilter(false);
    }
    this.miniFilterText = value;
    this.updateDisplayedValues("miniFilter");
    return true;
  }
  getMiniFilter() {
    return this.miniFilterText;
  }
  updateDisplayedValues(source, allKeys) {
    if (source === "expansion") {
      this.displayValueModel.refresh();
      return;
    }
    if (this.miniFilterText == null) {
      this.displayValueModel.updateDisplayedValuesToAllAvailable(key => this.getValue(key), allKeys, this.availableKeys, source);
      return;
    }
    const formattedFilterText = this.caseFormat(this.formatter(this.miniFilterText) || "");
    const matchesFilter = valueToCheck => valueToCheck != null && this.caseFormat(valueToCheck).indexOf(formattedFilterText) >= 0;
    const nullMatchesFilter = !!this.filterParams.excelMode && matchesFilter(this.translate("blanks"));
    this.displayValueModel.updateDisplayedValuesToMatchMiniFilter(key => this.getValue(key), allKeys, this.availableKeys, matchesFilter, nullMatchesFilter, source);
  }
  getDisplayedValueCount() {
    return this.displayValueModel.getDisplayedValueCount();
  }
  getDisplayedItem(index) {
    return this.displayValueModel.getDisplayedItem(index);
  }
  getSelectAllItem() {
    return this.displayValueModel.getSelectAllItem();
  }
  getAddSelectionToFilterItem() {
    return this.displayValueModel.getAddSelectionToFilterItem();
  }
  hasSelections() {
    return this.filterParams.defaultToNothingSelected ? this.selectedKeys.size > 0 : this.allValues.size !== this.selectedKeys.size;
  }
  getKeys() {
    return Array.from(this.allValues.keys());
  }
  getValues() {
    return Array.from(this.allValues.values());
  }
  getValue(key) {
    return this.allValues.get(key);
  }
  setAddCurrentSelectionToFilter(value) {
    this.addCurrentSelectionToFilter = value;
  }
  isInWindowsExcelMode() {
    return this.filterParams.excelMode === "windows";
  }
  isAddCurrentSelectionToFilterChecked() {
    return this.isInWindowsExcelMode() && this.addCurrentSelectionToFilter;
  }
  showAddCurrentSelectionToFilter() {
    return this.isInWindowsExcelMode() && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(this.miniFilterText) && this.miniFilterText.length > 0;
  }
  selectAllMatchingMiniFilter(clearExistingSelection = false) {
    if (this.miniFilterText == null) {
      this.selectedKeys = new Set(this.allValues.keys());
    } else {
      if (clearExistingSelection) {
        this.selectedKeys.clear();
      }
      this.displayValueModel.forEachDisplayedKey(key => this.selectedKeys.add(key));
    }
  }
  deselectAllMatchingMiniFilter() {
    if (this.miniFilterText == null) {
      this.selectedKeys.clear();
    } else {
      this.displayValueModel.forEachDisplayedKey(key => this.selectedKeys.delete(key));
    }
  }
  selectKey(key) {
    this.selectedKeys.add(key);
  }
  deselectKey(key) {
    if (this.filterParams.excelMode && this.isEverythingVisibleSelected()) {
      this.resetSelectionState(this.displayValueModel.getDisplayedKeys());
    }
    this.selectedKeys.delete(key);
  }
  isKeySelected(key) {
    return this.selectedKeys.has(key);
  }
  isEverythingVisibleSelected() {
    return !this.displayValueModel.someDisplayedKey(it => !this.isKeySelected(it));
  }
  isNothingVisibleSelected() {
    return !this.displayValueModel.someDisplayedKey(it => this.isKeySelected(it));
  }
  getModel() {
    if (!this.hasSelections()) {
      return null;
    }
    const filteringKeys = this.isAddCurrentSelectionToFilterChecked() ? this.filteringKeys.allFilteringKeys() : null;
    if (filteringKeys && filteringKeys.size > 0) {
      if (this.selectedKeys) {
        const modelKeys = /* @__PURE__ */new Set([...Array.from(filteringKeys), ...Array.from(this.selectedKeys).filter(key => !filteringKeys.has(key))]);
        return Array.from(modelKeys);
      }
      return Array.from(filteringKeys);
    }
    return Array.from(this.selectedKeys);
  }
  setModel(model) {
    return this.allValuesPromise.then(keys => {
      if (model == null) {
        this.resetSelectionState(keys ?? []);
      } else {
        this.selectedKeys.clear();
        const existingFormattedKeys = /* @__PURE__ */new Map();
        this.allValues.forEach((_value, key) => {
          existingFormattedKeys.set(this.caseFormat(key), key);
        });
        model.forEach(unformattedKey => {
          const formattedKey = this.caseFormat((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(unformattedKey));
          const existingUnformattedKey = existingFormattedKeys.get(formattedKey);
          if (existingUnformattedKey !== void 0) {
            this.selectKey(existingUnformattedKey);
          }
        });
      }
    });
  }
  uniqueValues(values) {
    const uniqueValues = /* @__PURE__ */new Map();
    const formattedKeys = /* @__PURE__ */new Set();
    (values ?? []).forEach(value => {
      const valueToUse = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(value);
      const unformattedKey = this.createKey(valueToUse);
      const formattedKey = this.caseFormat(unformattedKey);
      if (!formattedKeys.has(formattedKey)) {
        formattedKeys.add(formattedKey);
        uniqueValues.set(unformattedKey, valueToUse);
      }
    });
    return uniqueValues;
  }
  resetSelectionState(keys) {
    if (this.filterParams.defaultToNothingSelected) {
      this.selectedKeys.clear();
    } else {
      this.selectedKeys = new Set(keys);
    }
  }
  hasGroups() {
    return this.displayValueModel.hasGroups();
  }
  createTreeDataOrGroupingComparator() {
    return ([_aKey, aValue], [_bKey, bValue]) => {
      if (aValue == null) {
        return bValue == null ? 0 : -1;
      } else if (bValue == null) {
        return 1;
      }
      for (let i = 0; i < aValue.length; i++) {
        if (i >= bValue.length) {
          return 1;
        }
        const diff = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defaultComparator)(aValue[i], bValue[i]);
        if (diff !== 0) {
          return diff;
        }
      }
      return 0;
    };
  }
  setAppliedModelKeys(appliedModelKeys) {
    this.filteringKeys.setFilteringKeys(appliedModelKeys);
  }
  addToAppliedModelKeys(appliedModelKey) {
    this.filteringKeys.addFilteringKey(appliedModelKey);
  }
  getAppliedModelKeys() {
    return this.filteringKeys.allFilteringKeys();
  }
  getCaseFormattedAppliedModelKeys() {
    return this.filteringKeys.allFilteringKeysCaseFormatted();
  }
  hasAppliedModelKey(appliedModelKey) {
    return this.filteringKeys.hasCaseFormattedFilteringKey(appliedModelKey);
  }
  hasAnyAppliedModelKey() {
    return !this.filteringKeys.noAppliedFilteringKeys();
  }
};

// enterprise-modules/set-filter/src/setFilter/setFilter.ts
var SetFilter = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ProvidedFilter {
  constructor() {
    super("setFilter");
    this.eMiniFilter = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eFilterLoading = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eSetFilterList = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eFilterNoMatches = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.valueModel = null;
    this.setFilterParams = null;
    this.virtualList = null;
    this.caseSensitive = false;
    this.treeDataTreeList = false;
    this.groupingTreeList = false;
    this.hardRefreshVirtualList = false;
    this.noValueFormatterSupplied = false;
    this.filterModelFormatter = new SetFilterModelFormatter();
    this.updateSetFilterOnParamsChange = newParams => {
      this.setFilterParams = newParams;
      this.caseSensitive = !!newParams.caseSensitive;
      const keyCreator = newParams.keyCreator ?? newParams.colDef.keyCreator;
      this.setValueFormatter(newParams.valueFormatter, keyCreator, !!newParams.treeList, !!newParams.colDef.refData);
      const isGroupCol = newParams.column.getId().startsWith(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.GROUP_AUTO_COLUMN_ID);
      this.treeDataTreeList = this.gos.get("treeData") && !!newParams.treeList && isGroupCol;
      this.getDataPath = this.gos.get("getDataPath");
      this.groupingTreeList = !!this.funcColsService.getRowGroupColumns().length && !!newParams.treeList && isGroupCol;
      this.createKey = this.generateCreateKey(keyCreator, this.treeDataTreeList || this.groupingTreeList);
    };
  }
  wireBeans(beans) {
    super.wireBeans(beans);
    this.funcColsService = beans.funcColsService;
    this.valueService = beans.valueService;
    this.dataTypeService = beans.dataTypeService;
  }
  postConstruct() {
    super.postConstruct();
  }
  // unlike the simple filters, nothing in the set filter UI shows/hides.
  // maybe this method belongs in abstractSimpleFilter???
  updateUiVisibility() {}
  createBodyTemplate() {
    return /* html */`
            <div class="ag-set-filter">
                <div data-ref="eFilterLoading" class="ag-filter-loading ag-hidden">${this.translateForSetFilter("loadingOoo")}</div>
                <ag-input-text-field class="ag-mini-filter" data-ref="eMiniFilter"></ag-input-text-field>
                <div data-ref="eFilterNoMatches" class="ag-filter-no-matches ag-hidden">${this.translateForSetFilter("noMatches")}</div>
                <div data-ref="eSetFilterList" class="ag-set-filter-list" role="presentation"></div>
            </div>`;
  }
  getAgComponents() {
    return [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgInputTextFieldSelector];
  }
  handleKeyDown(e) {
    super.handleKeyDown(e);
    if (e.defaultPrevented) {
      return;
    }
    switch (e.key) {
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.SPACE:
        this.handleKeySpace(e);
        break;
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.ENTER:
        this.handleKeyEnter(e);
        break;
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.LEFT:
        this.handleKeyLeft(e);
        break;
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.RIGHT:
        this.handleKeyRight(e);
        break;
    }
  }
  handleKeySpace(e) {
    this.getComponentForKeyEvent(e)?.toggleSelected();
  }
  handleKeyEnter(e) {
    if (!this.setFilterParams) {
      return;
    }
    const {
      excelMode,
      readOnly
    } = this.setFilterParams || {};
    if (!excelMode || !!readOnly) {
      return;
    }
    e.preventDefault();
    this.onBtApply(false, false, e);
    if (this.setFilterParams.excelMode === "mac") {
      this.eMiniFilter.getInputElement().select();
    }
  }
  handleKeyLeft(e) {
    this.getComponentForKeyEvent(e)?.setExpanded(false);
  }
  handleKeyRight(e) {
    this.getComponentForKeyEvent(e)?.setExpanded(true);
  }
  getComponentForKeyEvent(e) {
    if (!this.eSetFilterList.contains((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getActiveDomElement)(this.gos)) || !this.virtualList) {
      return;
    }
    const currentItem = this.virtualList.getLastFocusedRow();
    if (currentItem == null) {
      return;
    }
    const component = this.virtualList.getComponentAt(currentItem);
    if (component == null) {
      return;
    }
    e.preventDefault();
    const {
      readOnly
    } = this.setFilterParams ?? {};
    if (readOnly) {
      return;
    }
    return component;
  }
  getCssIdentifier() {
    return "set-filter";
  }
  setModel(model) {
    if (model == null && this.valueModel?.getModel() == null) {
      this.setMiniFilter(null);
      return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
    }
    return super.setModel(model);
  }
  refresh(params) {
    this.applyExcelModeOptions(params);
    if (!super.refresh(params)) {
      return false;
    }
    const oldParams = this.setFilterParams;
    const paramsThatForceReload = ["treeList", "treeListPathGetter", "caseSensitive", "comparator", "excelMode"];
    if (paramsThatForceReload.some(param => params[param] !== oldParams?.[param])) {
      return false;
    }
    if (this.haveColDefParamsChanged(params)) {
      return false;
    }
    super.updateParams(params);
    this.updateSetFilterOnParamsChange(params);
    this.updateMiniFilter();
    if (params.suppressSelectAll !== oldParams?.suppressSelectAll) {
      this.createVirtualListModel(params);
    }
    this.valueModel?.updateOnParamsChange(params).then(() => {
      this.refreshFilterValues();
    });
    return true;
  }
  haveColDefParamsChanged(params) {
    const {
      colDef,
      keyCreator
    } = params;
    const {
      colDef: existingColDef,
      keyCreator: existingKeyCreator
    } = this.setFilterParams ?? {};
    const currentKeyCreator = keyCreator ?? colDef.keyCreator;
    const previousKeyCreator = existingKeyCreator ?? existingColDef?.keyCreator;
    const filterValueGetterChanged = colDef.filterValueGetter !== existingColDef?.filterValueGetter;
    const keyCreatorChanged = currentKeyCreator !== previousKeyCreator;
    const valueFormatterIsKeyCreatorAndHasChanged = !!this.dataTypeService && !!currentKeyCreator && this.dataTypeService.getFormatValue(colDef.cellDataType) === currentKeyCreator && colDef.valueFormatter !== existingColDef?.valueFormatter;
    return filterValueGetterChanged || keyCreatorChanged || valueFormatterIsKeyCreatorAndHasChanged;
  }
  setModelAndRefresh(values) {
    return this.valueModel ? this.valueModel.setModel(values).then(() => {
      if (this.isAlive()) {
        this.checkAndRefreshVirtualList();
      }
    }) : _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
  }
  resetUiToDefaults() {
    this.setMiniFilter(null);
    return this.setModelAndRefresh(null);
  }
  setModelIntoUi(model) {
    this.setMiniFilter(null);
    const values = model == null ? null : model.values;
    return this.setModelAndRefresh(values);
  }
  getModelFromUi() {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const values = this.valueModel.getModel();
    if (!values) {
      return null;
    }
    return {
      values,
      filterType: this.getFilterType()
    };
  }
  getFilterType() {
    return "set";
  }
  getValueModel() {
    return this.valueModel;
  }
  areModelsEqual(a, b) {
    if (a == null && b == null) {
      return true;
    }
    return a != null && b != null && (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._areEqual)(a.values, b.values);
  }
  setParams(params) {
    this.applyExcelModeOptions(params);
    super.setParams(params);
    this.updateSetFilterOnParamsChange(params);
    const keyCreator = params.keyCreator ?? params.colDef.keyCreator;
    this.valueModel = new SetValueModel({
      filterParams: params,
      setIsLoading: loading => this.setIsLoading(loading),
      translate: key => this.translateForSetFilter(key),
      caseFormat: v => this.caseFormat(v),
      createKey: this.createKey,
      valueFormatter: this.valueFormatter,
      usingComplexObjects: !!keyCreator,
      gos: this.gos,
      funcColsService: this.funcColsService,
      valueService: this.valueService,
      treeDataTreeList: this.treeDataTreeList,
      groupingTreeList: this.groupingTreeList,
      addManagedEventListeners: handlers => this.addManagedEventListeners(handlers)
    });
    this.initialiseFilterBodyUi();
    this.addEventListenersForDataChanges();
  }
  onAddCurrentSelectionToFilterChange(newValue) {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    this.valueModel.setAddCurrentSelectionToFilter(newValue);
  }
  setValueFormatter(providedValueFormatter, keyCreator, treeList, isRefData) {
    let valueFormatter = providedValueFormatter;
    if (!valueFormatter) {
      if (keyCreator && !treeList) {
        throw new Error("AG Grid: Must supply a Value Formatter in Set Filter params when using a Key Creator");
      }
      this.noValueFormatterSupplied = true;
      if (!isRefData) {
        valueFormatter = params => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)(params.value);
      }
    }
    this.valueFormatter = valueFormatter;
  }
  generateCreateKey(keyCreator, treeDataOrGrouping) {
    if (treeDataOrGrouping && !keyCreator) {
      throw new Error("AG Grid: Must supply a Key Creator in Set Filter params when `treeList = true` on a group column, and Tree Data or Row Grouping is enabled.");
    }
    if (keyCreator) {
      return (value, node = null) => {
        const params = this.getKeyCreatorParams(value, node);
        return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)(keyCreator(params));
      };
    }
    return value => (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._makeNull)((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)(value));
  }
  getFormattedValue(key) {
    let value = this.valueModel.getValue(key);
    if (this.noValueFormatterSupplied && (this.treeDataTreeList || this.groupingTreeList) && Array.isArray(value)) {
      value = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(value);
    }
    const formattedValue = this.valueService.formatValue(this.setFilterParams.column, null, value, this.valueFormatter, false);
    return (formattedValue == null ? (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._toStringOrNull)(value) : formattedValue) ?? this.translateForSetFilter("blanks");
  }
  applyExcelModeOptions(params) {
    if (params.excelMode === "windows") {
      if (!params.buttons) {
        params.buttons = ["apply", "cancel"];
      }
      if (params.closeOnApply == null) {
        params.closeOnApply = true;
      }
    } else if (params.excelMode === "mac") {
      if (!params.buttons) {
        params.buttons = ["reset"];
      }
      if (params.applyMiniFilterWhileTyping == null) {
        params.applyMiniFilterWhileTyping = true;
      }
      if (params.debounceMs == null) {
        params.debounceMs = 500;
      }
    }
    if (params.excelMode && params.defaultToNothingSelected) {
      params.defaultToNothingSelected = false;
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)('The Set Filter Parameter "defaultToNothingSelected" value was ignored because it does not work when "excelMode" is used.');
    }
  }
  addEventListenersForDataChanges() {
    if (!this.isValuesTakenFromGrid()) {
      return;
    }
    this.addManagedEventListeners({
      cellValueChanged: event => {
        if (this.setFilterParams && event.column === this.setFilterParams.column) {
          this.syncAfterDataChange();
        }
      }
    });
    this.addManagedPropertyListeners(["treeData", "getDataPath", "groupAllowUnbalanced"], () => {
      this.syncAfterDataChange();
    });
  }
  syncAfterDataChange() {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const promise = this.valueModel.refreshValues();
    return promise.then(() => {
      this.checkAndRefreshVirtualList();
      if (!this.applyActive || this.areModelsEqual(this.getModel(), this.getModelFromUi())) {
        this.onBtApply(false, true);
      }
    });
  }
  setIsLoading(isLoading) {
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterLoading, isLoading);
    if (!isLoading) {
      this.hardRefreshVirtualList = true;
    }
  }
  initialiseFilterBodyUi() {
    this.initVirtualList();
    this.initMiniFilter();
  }
  initVirtualList() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const translate = this.localeService.getLocaleTextFunc();
    const filterListName = translate("ariaFilterList", "Filter List");
    const isTree = !!this.setFilterParams.treeList;
    const virtualList = this.virtualList = this.createBean(new _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.VirtualList({
      cssIdentifier: "filter",
      ariaRole: isTree ? "tree" : "listbox",
      listName: filterListName
    }));
    const eSetFilterList = this.eSetFilterList;
    if (isTree) {
      eSetFilterList.classList.add("ag-set-filter-tree-list");
    }
    if (eSetFilterList) {
      eSetFilterList.appendChild(virtualList.getGui());
    }
    const {
      cellHeight
    } = this.setFilterParams;
    if (cellHeight != null) {
      virtualList.setRowHeight(cellHeight);
    }
    const componentCreator = (item, listItemElement) => this.createSetListItem(item, isTree, listItemElement);
    virtualList.setComponentCreator(componentCreator);
    const componentUpdater = (item, component) => this.updateSetListItem(item, component);
    virtualList.setComponentUpdater(componentUpdater);
    this.createVirtualListModel(this.setFilterParams);
  }
  createVirtualListModel(params) {
    if (!this.valueModel) {
      return;
    }
    let model;
    if (params.suppressSelectAll) {
      model = new ModelWrapper(this.valueModel);
    } else {
      model = new ModelWrapperWithSelectAll(this.valueModel, () => this.isSelectAllSelected());
    }
    if (params.treeList) {
      model = new TreeModelWrapper(model);
    }
    this.virtualList?.setModel(model);
  }
  getSelectAllLabel() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const key = this.valueModel.getMiniFilter() == null || !this.setFilterParams.excelMode ? "selectAll" : "selectAllSearchResults";
    return this.translateForSetFilter(key);
  }
  getAddSelectionToFilterLabel() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    return this.translateForSetFilter("addCurrentSelectionToFilter");
  }
  createSetListItem(item, isTree, focusWrapper) {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const groupsExist = this.valueModel.hasGroups();
    const {
      isSelected,
      isExpanded
    } = this.isSelectedExpanded(item);
    const {
      value,
      depth,
      isGroup,
      hasIndeterminateExpandState,
      selectedListener,
      expandedListener
    } = this.newSetListItemAttributes(item);
    const itemParams = {
      focusWrapper,
      value,
      params: this.setFilterParams,
      translate: translateKey => this.translateForSetFilter(translateKey),
      valueFormatter: this.valueFormatter,
      item,
      isSelected,
      isTree,
      depth,
      groupsExist,
      isGroup,
      isExpanded,
      hasIndeterminateExpandState
    };
    const listItem = this.createBean(new SetFilterListItem(itemParams));
    listItem.addEventListener("selectionChanged", selectedListener);
    if (expandedListener) {
      listItem.addEventListener("expandedChanged", expandedListener);
    }
    return listItem;
  }
  newSetTreeItemAttributes(item) {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const groupsExist = this.valueModel.hasGroups();
    if (item.key === SetFilterDisplayValue.SELECT_ALL) {
      return {
        value: () => this.getSelectAllLabel(),
        isGroup: groupsExist,
        depth: item.depth,
        hasIndeterminateExpandState: true,
        selectedListener: e => this.onSelectAll(e.isSelected),
        expandedListener: e => this.onExpandAll(e.item, e.isExpanded)
      };
    }
    if (item.key === SetFilterDisplayValue.ADD_SELECTION_TO_FILTER) {
      return {
        value: () => this.getAddSelectionToFilterLabel(),
        depth: item.depth,
        isGroup: false,
        hasIndeterminateExpandState: false,
        selectedListener: e => {
          this.onAddCurrentSelectionToFilterChange(e.isSelected);
        }
      };
    }
    if (item.children) {
      return {
        value: this.setFilterParams.treeListFormatter?.(item.treeKey, item.depth, item.parentTreeKeys) ?? item.treeKey,
        depth: item.depth,
        isGroup: true,
        selectedListener: e => this.onGroupItemSelected(e.item, e.isSelected),
        expandedListener: e => this.onExpandedChanged(e.item, e.isExpanded)
      };
    }
    return {
      value: this.setFilterParams.treeListFormatter?.(item.treeKey, item.depth, item.parentTreeKeys) ?? item.treeKey,
      depth: item.depth,
      selectedListener: e => this.onItemSelected(e.item.key, e.isSelected)
    };
  }
  newSetListItemAttributes(item) {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (this.isSetFilterModelTreeItem(item)) {
      return this.newSetTreeItemAttributes(item);
    }
    if (item === SetFilterDisplayValue.SELECT_ALL) {
      return {
        value: () => this.getSelectAllLabel(),
        selectedListener: e => this.onSelectAll(e.isSelected)
      };
    }
    if (item === SetFilterDisplayValue.ADD_SELECTION_TO_FILTER) {
      return {
        value: () => this.getAddSelectionToFilterLabel(),
        selectedListener: e => {
          this.onAddCurrentSelectionToFilterChange(e.isSelected);
        }
      };
    }
    return {
      value: this.valueModel.getValue(item),
      selectedListener: e => this.onItemSelected(e.item, e.isSelected)
    };
  }
  updateSetListItem(item, component) {
    const {
      isSelected,
      isExpanded
    } = this.isSelectedExpanded(item);
    component.refresh(item, isSelected, isExpanded);
  }
  isSelectedExpanded(item) {
    let isSelected;
    let isExpanded;
    if (this.isSetFilterModelTreeItem(item)) {
      isExpanded = item.expanded;
      if (item.key === SetFilterDisplayValue.SELECT_ALL) {
        isSelected = this.isSelectAllSelected();
      } else if (item.key === SetFilterDisplayValue.ADD_SELECTION_TO_FILTER) {
        isSelected = this.valueModel.isAddCurrentSelectionToFilterChecked();
      } else if (item.children) {
        isSelected = this.areAllChildrenSelected(item);
      } else {
        isSelected = this.valueModel.isKeySelected(item.key);
      }
    } else {
      if (item === SetFilterDisplayValue.SELECT_ALL) {
        isSelected = this.isSelectAllSelected();
      } else if (item === SetFilterDisplayValue.ADD_SELECTION_TO_FILTER) {
        isSelected = this.valueModel.isAddCurrentSelectionToFilterChecked();
      } else {
        isSelected = this.valueModel.isKeySelected(item);
      }
    }
    return {
      isSelected,
      isExpanded
    };
  }
  isSetFilterModelTreeItem(item) {
    return item?.treeKey !== void 0;
  }
  initMiniFilter() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const {
      eMiniFilter,
      localeService
    } = this;
    const translate = localeService.getLocaleTextFunc();
    eMiniFilter.setDisplayed(!this.setFilterParams.suppressMiniFilter);
    eMiniFilter.setValue(this.valueModel.getMiniFilter());
    eMiniFilter.onValueChange(() => this.onMiniFilterInput());
    eMiniFilter.setInputAriaLabel(translate("ariaSearchFilterValues", "Search filter values"));
    this.addManagedElementListeners(eMiniFilter.getInputElement(), {
      keydown: e => this.onMiniFilterKeyDown(e)
    });
  }
  updateMiniFilter() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const {
      eMiniFilter
    } = this;
    if (eMiniFilter.isDisplayed() !== !this.setFilterParams.suppressMiniFilter) {
      eMiniFilter.setDisplayed(!this.setFilterParams.suppressMiniFilter);
    }
    const miniFilterValue = this.valueModel.getMiniFilter();
    if (eMiniFilter.getValue() !== miniFilterValue) {
      eMiniFilter.setValue(miniFilterValue);
    }
  }
  // we need to have the GUI attached before we can draw the virtual rows, as the
  // virtual row logic needs info about the GUI state
  afterGuiAttached(params) {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    super.afterGuiAttached(params);
    this.resetExpansion();
    this.refreshVirtualList();
    const {
      eMiniFilter
    } = this;
    eMiniFilter.setInputPlaceholder(this.translateForSetFilter("searchOoo"));
    if (!params || !params.suppressFocus) {
      if (eMiniFilter.isDisplayed()) {
        eMiniFilter.getFocusableElement().focus();
      } else {
        this.virtualList?.awaitStable(() => this.virtualList?.focusRow(0));
      }
    }
  }
  afterGuiDetached() {
    super.afterGuiDetached();
    if (this.setFilterParams?.excelMode) {
      this.resetMiniFilter();
    }
    const appliedModel = this.getModel();
    if (this.setFilterParams?.excelMode || !this.areModelsEqual(appliedModel, this.getModelFromUi())) {
      this.resetUiToActiveModel(appliedModel);
      this.showOrHideResults();
    }
  }
  applyModel(source = "api") {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (this.setFilterParams.excelMode && source !== "rowDataUpdated" && this.valueModel.isEverythingVisibleSelected()) {
      this.valueModel.selectAllMatchingMiniFilter();
    }
    const shouldKeepCurrentSelection = this.valueModel.showAddCurrentSelectionToFilter() && this.valueModel.isAddCurrentSelectionToFilterChecked();
    if (shouldKeepCurrentSelection && !this.getModel()) {
      return false;
    }
    const result = super.applyModel(source);
    const appliedModel = this.getModel();
    if (appliedModel) {
      if (!shouldKeepCurrentSelection) {
        this.valueModel.setAppliedModelKeys(/* @__PURE__ */new Set());
      }
      appliedModel.values.forEach(key => {
        this.valueModel.addToAppliedModelKeys(key);
      });
    } else {
      if (!shouldKeepCurrentSelection) {
        this.valueModel.setAppliedModelKeys(null);
      }
    }
    return result;
  }
  isModelValid(model) {
    return this.setFilterParams && this.setFilterParams.excelMode ? model == null || model.values.length > 0 : true;
  }
  doesFilterPass(params) {
    if (!this.setFilterParams || !this.valueModel || !this.valueModel.getCaseFormattedAppliedModelKeys()) {
      return true;
    }
    if (!this.valueModel.hasAnyAppliedModelKey()) {
      return false;
    }
    const {
      node,
      data
    } = params;
    if (this.treeDataTreeList) {
      return this.doesFilterPassForTreeData(node, data);
    }
    if (this.groupingTreeList) {
      return this.doesFilterPassForGrouping(node);
    }
    const value = this.getValueFromNode(node);
    if (value != null && Array.isArray(value)) {
      if (value.length === 0) {
        return this.valueModel.hasAppliedModelKey(null);
      }
      return value.some(v => this.isInAppliedModel(this.createKey(v, node)));
    }
    return this.isInAppliedModel(this.createKey(value, node));
  }
  doesFilterPassForTreeData(node, data) {
    if (node.childrenAfterGroup?.length) {
      return false;
    }
    return this.isInAppliedModel(this.createKey(processDataPath(this.getDataPath(data), true, this.gos.get("groupAllowUnbalanced"))));
  }
  doesFilterPassForGrouping(node) {
    const dataPath = this.funcColsService.getRowGroupColumns().map(groupCol => this.valueService.getKeyForNode(groupCol, node));
    dataPath.push(this.getValueFromNode(node));
    return this.isInAppliedModel(this.createKey(processDataPath(dataPath, false, this.gos.get("groupAllowUnbalanced"))));
  }
  isInAppliedModel(key) {
    return this.valueModel.hasAppliedModelKey(key);
  }
  getValueFromNode(node) {
    return this.setFilterParams.getValue(node);
  }
  getKeyCreatorParams(value, node = null) {
    return {
      value,
      colDef: this.setFilterParams.colDef,
      column: this.setFilterParams.column,
      node,
      data: node?.data,
      api: this.setFilterParams.api,
      context: this.setFilterParams.context
    };
  }
  onNewRowsLoaded() {
    if (!this.isValuesTakenFromGrid()) {
      return;
    }
    this.syncAfterDataChange();
  }
  isValuesTakenFromGrid() {
    if (!this.valueModel) {
      return false;
    }
    const valuesType = this.valueModel.getValuesType();
    return valuesType === 2 /* TAKEN_FROM_GRID_VALUES */;
  }
  //noinspection JSUnusedGlobalSymbols
  /**
   * Public method provided so the user can change the value of the filter once
   * the filter has been already started
   * @param values The values to use.
   */
  setFilterValues(values) {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    this.valueModel.overrideValues(values).then(() => {
      this.checkAndRefreshVirtualList();
      this.onUiChanged();
    });
  }
  //noinspection JSUnusedGlobalSymbols
  /**
   * Public method provided so the user can reset the values of the filter once that it has started.
   */
  resetFilterValues() {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    this.valueModel.setValuesType(2 /* TAKEN_FROM_GRID_VALUES */);
    this.syncAfterDataChange();
  }
  refreshFilterValues() {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (!this.valueModel.isInitialised()) {
      return;
    }
    this.valueModel.refreshValues().then(() => {
      this.hardRefreshVirtualList = true;
      this.checkAndRefreshVirtualList();
      this.onUiChanged();
    });
  }
  onAnyFilterChanged() {
    setTimeout(() => {
      if (!this.isAlive()) {
        return;
      }
      if (!this.valueModel) {
        throw new Error("Value model has not been created.");
      }
      this.valueModel.refreshAfterAnyFilterChanged().then(refresh => {
        if (refresh) {
          this.checkAndRefreshVirtualList();
          this.showOrHideResults();
        }
      });
    }, 0);
  }
  onMiniFilterInput() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (!this.valueModel.setMiniFilter(this.eMiniFilter.getValue())) {
      return;
    }
    const {
      applyMiniFilterWhileTyping,
      readOnly
    } = this.setFilterParams || {};
    if (!readOnly && applyMiniFilterWhileTyping) {
      this.filterOnAllVisibleValues(false);
    } else {
      this.updateUiAfterMiniFilterChange();
    }
  }
  updateUiAfterMiniFilterChange() {
    if (!this.setFilterParams) {
      throw new Error("Set filter params have not been provided.");
    }
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const {
      excelMode,
      readOnly
    } = this.setFilterParams || {};
    if (excelMode == null || !!readOnly) {
      this.checkAndRefreshVirtualList();
    } else if (this.valueModel.getMiniFilter() == null) {
      this.resetUiToActiveModel(this.getModel());
    } else {
      this.valueModel.selectAllMatchingMiniFilter(true);
      this.checkAndRefreshVirtualList();
      this.onUiChanged();
    }
    this.showOrHideResults();
  }
  showOrHideResults() {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    const hideResults = this.valueModel.getMiniFilter() != null && this.valueModel.getDisplayedValueCount() < 1;
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eFilterNoMatches, hideResults);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setDisplayed)(this.eSetFilterList, !hideResults);
  }
  resetMiniFilter() {
    this.eMiniFilter.setValue(null, true);
    this.valueModel?.setMiniFilter(null);
  }
  resetUiToActiveModel(currentModel, afterUiUpdatedFunc) {
    this.setModelAndRefresh(currentModel == null ? null : currentModel.values).then(() => {
      this.onUiChanged(false, "prevent");
      afterUiUpdatedFunc?.();
    });
  }
  handleCancelEnd(e) {
    this.setMiniFilter(null);
    super.handleCancelEnd(e);
  }
  onMiniFilterKeyDown(e) {
    const {
      excelMode,
      readOnly
    } = this.setFilterParams || {};
    if (e.key === _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.ENTER && !excelMode && !readOnly) {
      this.filterOnAllVisibleValues();
    }
  }
  filterOnAllVisibleValues(applyImmediately = true) {
    const {
      readOnly
    } = this.setFilterParams || {};
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (readOnly) {
      throw new Error("Unable to filter in readOnly mode.");
    }
    this.valueModel.selectAllMatchingMiniFilter(true);
    this.checkAndRefreshVirtualList();
    this.onUiChanged(false, applyImmediately ? "immediately" : "debounce");
    this.showOrHideResults();
  }
  focusRowIfAlive(rowIndex) {
    if (rowIndex == null) {
      return;
    }
    window.setTimeout(() => {
      if (!this.virtualList) {
        throw new Error("Virtual list has not been created.");
      }
      if (this.isAlive()) {
        this.virtualList.focusRow(rowIndex);
      }
    }, 0);
  }
  onSelectAll(isSelected) {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (!this.virtualList) {
      throw new Error("Virtual list has not been created.");
    }
    if (isSelected) {
      this.valueModel.selectAllMatchingMiniFilter();
    } else {
      this.valueModel.deselectAllMatchingMiniFilter();
    }
    this.refreshAfterSelection();
  }
  onGroupItemSelected(item, isSelected) {
    const recursiveGroupSelection = i => {
      if (i.children) {
        i.children.forEach(childItem => recursiveGroupSelection(childItem));
      } else {
        this.selectItem(i.key, isSelected);
      }
    };
    recursiveGroupSelection(item);
    this.refreshAfterSelection();
  }
  onItemSelected(key, isSelected) {
    if (!this.valueModel) {
      throw new Error("Value model has not been created.");
    }
    if (!this.virtualList) {
      throw new Error("Virtual list has not been created.");
    }
    this.selectItem(key, isSelected);
    this.refreshAfterSelection();
  }
  selectItem(key, isSelected) {
    if (isSelected) {
      this.valueModel.selectKey(key);
    } else {
      this.valueModel.deselectKey(key);
    }
  }
  onExpandAll(item, isExpanded) {
    const recursiveExpansion = i => {
      if (i.filterPasses && i.available && i.children) {
        i.children.forEach(childItem => recursiveExpansion(childItem));
        i.expanded = isExpanded;
      }
    };
    recursiveExpansion(item);
    this.refreshAfterExpansion();
  }
  onExpandedChanged(item, isExpanded) {
    item.expanded = isExpanded;
    this.refreshAfterExpansion();
  }
  refreshAfterExpansion() {
    const focusedRow = this.virtualList.getLastFocusedRow();
    this.valueModel.updateDisplayedValues("expansion");
    this.checkAndRefreshVirtualList();
    this.focusRowIfAlive(focusedRow);
  }
  refreshAfterSelection() {
    const focusedRow = this.virtualList.getLastFocusedRow();
    this.checkAndRefreshVirtualList();
    this.onUiChanged();
    this.focusRowIfAlive(focusedRow);
  }
  setMiniFilter(newMiniFilter) {
    this.eMiniFilter.setValue(newMiniFilter);
    this.onMiniFilterInput();
  }
  getMiniFilter() {
    return this.valueModel ? this.valueModel.getMiniFilter() : null;
  }
  checkAndRefreshVirtualList() {
    if (!this.virtualList) {
      throw new Error("Virtual list has not been created.");
    }
    this.virtualList.refresh(!this.hardRefreshVirtualList);
    if (this.hardRefreshVirtualList) {
      this.hardRefreshVirtualList = false;
    }
  }
  getFilterKeys() {
    return this.valueModel ? this.valueModel.getKeys() : [];
  }
  getFilterValues() {
    return this.valueModel ? this.valueModel.getValues() : [];
  }
  getValues() {
    return this.getFilterKeys();
  }
  refreshVirtualList() {
    if (this.setFilterParams && this.setFilterParams.refreshValuesOnOpen) {
      this.refreshFilterValues();
    } else {
      this.checkAndRefreshVirtualList();
    }
  }
  translateForSetFilter(key) {
    const translate = this.localeService.getLocaleTextFunc();
    return translate(key, DEFAULT_LOCALE_TEXT[key]);
  }
  isSelectAllSelected() {
    if (!this.setFilterParams || !this.valueModel) {
      return false;
    }
    if (!this.setFilterParams.defaultToNothingSelected) {
      if (this.valueModel.hasSelections() && this.valueModel.isNothingVisibleSelected()) {
        return false;
      }
      if (this.valueModel.isEverythingVisibleSelected()) {
        return true;
      }
    } else {
      if (this.valueModel.hasSelections() && this.valueModel.isEverythingVisibleSelected()) {
        return true;
      }
      if (this.valueModel.isNothingVisibleSelected()) {
        return false;
      }
    }
    return void 0;
  }
  areAllChildrenSelected(item) {
    const recursiveChildSelectionCheck = i => {
      if (i.children) {
        let someTrue = false;
        let someFalse = false;
        const mixed = i.children.some(child => {
          if (!child.filterPasses || !child.available) {
            return false;
          }
          const childSelected = recursiveChildSelectionCheck(child);
          if (childSelected === void 0) {
            return true;
          }
          if (childSelected) {
            someTrue = true;
          } else {
            someFalse = true;
          }
          return someTrue && someFalse;
        });
        return mixed ? void 0 : someTrue;
      } else {
        return this.valueModel.isKeySelected(i.key);
      }
    };
    if (!this.setFilterParams.defaultToNothingSelected) {
      return recursiveChildSelectionCheck(item);
    } else {
      return this.valueModel.hasSelections() && recursiveChildSelectionCheck(item);
    }
  }
  destroy() {
    if (this.virtualList != null) {
      this.virtualList.destroy();
      this.virtualList = null;
    }
    super.destroy();
  }
  caseFormat(valueToFormat) {
    if (valueToFormat == null || typeof valueToFormat !== "string") {
      return valueToFormat;
    }
    return this.caseSensitive ? valueToFormat : valueToFormat.toUpperCase();
  }
  resetExpansion() {
    if (!this.setFilterParams?.treeList) {
      return;
    }
    const selectAllItem = this.valueModel?.getSelectAllItem();
    if (this.isSetFilterModelTreeItem(selectAllItem)) {
      const recursiveCollapse = i => {
        if (i.children) {
          i.children.forEach(childItem => recursiveCollapse(childItem));
          i.expanded = false;
        }
      };
      recursiveCollapse(selectAllItem);
      this.valueModel.updateDisplayedValues("expansion");
    }
  }
  getModelAsString(model) {
    return this.filterModelFormatter.getModelAsString(model, this);
  }
  getPositionableElement() {
    return this.eSetFilterList;
  }
};
var ModelWrapper = class {
  constructor(model) {
    this.model = model;
  }
  getRowCount() {
    return this.model.getDisplayedValueCount();
  }
  getRow(index) {
    return this.model.getDisplayedItem(index);
  }
  areRowsEqual(oldRow, newRow) {
    return oldRow === newRow;
  }
};
var ModelWrapperWithSelectAll = class {
  constructor(model, isSelectAllSelected) {
    this.model = model;
    this.isSelectAllSelected = isSelectAllSelected;
  }
  getRowCount() {
    const showAddCurrentSelectionToFilter = this.model.showAddCurrentSelectionToFilter();
    const outboundItems = showAddCurrentSelectionToFilter ? 2 : 1;
    return this.model.getDisplayedValueCount() + outboundItems;
  }
  getRow(index) {
    if (index === 0) {
      return this.model.getSelectAllItem();
    }
    const showAddCurrentSelectionToFilter = this.model.showAddCurrentSelectionToFilter();
    const outboundItems = showAddCurrentSelectionToFilter ? 2 : 1;
    if (index === 1 && showAddCurrentSelectionToFilter) {
      return this.model.getAddSelectionToFilterItem();
    }
    return this.model.getDisplayedItem(index - outboundItems);
  }
  areRowsEqual(oldRow, newRow) {
    return oldRow === newRow;
  }
};
var TreeModelWrapper = class {
  constructor(model) {
    this.model = model;
  }
  getRowCount() {
    return this.model.getRowCount();
  }
  getRow(index) {
    return this.model.getRow(index);
  }
  areRowsEqual(oldRow, newRow) {
    if (oldRow == null && newRow == null) {
      return true;
    }
    return oldRow != null && newRow != null && oldRow.treeKey === newRow.treeKey && oldRow.depth === newRow.depth;
  }
};

// enterprise-modules/set-filter/src/setFilter/setFloatingFilter.ts

var SetFloatingFilterComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `
            <div class="ag-floating-filter-input ag-set-floating-filter-input" role="presentation">
                <ag-input-text-field data-ref="eFloatingFilterText"></ag-input-text-field>
            </div>`, [_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgInputTextFieldSelector]);
    this.eFloatingFilterText = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.availableValuesListenerAdded = false;
    this.filterModelFormatter = new SetFilterModelFormatter();
  }
  wireBeans(beans) {
    this.columnNameService = beans.columnNameService;
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
  init(params) {
    this.params = params;
    this.eFloatingFilterText.setDisabled(true).addGuiEventListener("click", () => this.params.showParentFilter());
    this.setParams(params);
  }
  setParams(params) {
    const displayName = this.columnNameService.getDisplayNameForColumn(params.column, "header", true);
    const translate = this.localeService.getLocaleTextFunc();
    this.eFloatingFilterText.setInputAriaLabel(`${displayName} ${translate("ariaFilterInput", "Filter Input")}`);
  }
  onParamsUpdated(params) {
    this.refresh(params);
  }
  refresh(params) {
    this.params = params;
    this.setParams(params);
  }
  onParentModelChanged(parentModel) {
    this.updateFloatingFilterText(parentModel);
  }
  parentSetFilterInstance(cb) {
    this.params.parentFilterInstance(filter => {
      if (!(filter instanceof SetFilter)) {
        throw new Error("AG Grid - SetFloatingFilter expects SetFilter as its parent");
      }
      cb(filter);
    });
  }
  addAvailableValuesListener() {
    this.parentSetFilterInstance(setFilter => {
      const setValueModel = setFilter.getValueModel();
      if (!setValueModel) {
        return;
      }
      this.addManagedListeners(setValueModel, {
        availableValuesChanged: () => this.updateFloatingFilterText()
      });
    });
    this.availableValuesListenerAdded = true;
  }
  updateFloatingFilterText(parentModel) {
    if (!this.availableValuesListenerAdded) {
      this.addAvailableValuesListener();
    }
    this.parentSetFilterInstance(setFilter => {
      this.eFloatingFilterText.setValue(this.filterModelFormatter.getModelAsString(parentModel, setFilter));
    });
  }
};

// enterprise-modules/set-filter/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/set-filter/src/setFilterModule.ts
var SetFilterCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.SetFilterModule}-core`,
  userComponents: [{
    name: "agSetColumnFilter",
    classImp: SetFilter
  }],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._ColumnFilterModule]
});
var SetFloatingFilterModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: "@ag-grid-enterprise/set-floating-filter",
  userComponents: [{
    name: "agSetColumnFloatingFilter",
    classImp: SetFloatingFilterComp
  }],
  dependantModules: [SetFilterCoreModule, _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._FloatingFilterModule]
});
var SetFilterModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.SetFilterModule,
  dependantModules: [SetFilterCoreModule, SetFloatingFilterModule]
});


/***/ }),

/***/ 32466:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/side-bar/dist/package/main.esm.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideBarModule: () => (/* binding */ SideBarModule),
/* harmony export */   ToolPanelColDefService: () => (/* binding */ ToolPanelColDefService)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/side-bar/src/sideBarModule.ts



// enterprise-modules/side-bar/src/sideBar/common/toolPanelColDefService.ts


// enterprise-modules/side-bar/src/sideBar/common/sideBarUtils.ts

function isColGroupDef(colDef) {
  return !!colDef && typeof colDef.children !== "undefined";
}
function getId(colDef) {
  return isColGroupDef(colDef) ? colDef.groupId : colDef.colId;
}
function addChildrenToGroup(tree, groupId, colDef) {
  const subGroupIsSplit = (currentSubGroup, currentSubGroupToAdd) => {
    const existingChildIds = currentSubGroup.children.map(getId);
    const childGroupAlreadyExists = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(existingChildIds, getId(currentSubGroupToAdd));
    const lastChild = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._last)(currentSubGroup.children);
    const lastChildIsDifferent = lastChild && getId(lastChild) !== getId(currentSubGroupToAdd);
    return childGroupAlreadyExists && lastChildIsDifferent;
  };
  if (!isColGroupDef(tree)) {
    return true;
  }
  const currentGroup = tree;
  const groupToAdd = colDef;
  if (subGroupIsSplit(currentGroup, groupToAdd)) {
    currentGroup.children.push(groupToAdd);
    return true;
  }
  if (currentGroup.groupId === groupId) {
    const existingChildIds = currentGroup.children.map(getId);
    const colDefAlreadyPresent = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._includes)(existingChildIds, getId(groupToAdd));
    if (!colDefAlreadyPresent) {
      currentGroup.children.push(groupToAdd);
      return true;
    }
  }
  for (let i = currentGroup.children.length - 1; i >= 0; i--) {
    if (addChildrenToGroup(currentGroup.children[i], groupId, colDef)) {
      break;
    }
  }
  return false;
}
function mergeLeafPathTrees(leafPathTrees) {
  const matchingRootGroupIds = (pathA, pathB) => {
    const bothPathsAreGroups = isColGroupDef(pathA) && isColGroupDef(pathB);
    return bothPathsAreGroups && getId(pathA) === getId(pathB);
  };
  const mergeTrees = (treeA, treeB) => {
    if (!isColGroupDef(treeB)) {
      return treeA;
    }
    const mergeResult = treeA;
    const groupToMerge = treeB;
    if (groupToMerge.children && groupToMerge.groupId) {
      const added = addChildrenToGroup(mergeResult, groupToMerge.groupId, groupToMerge.children[0]);
      if (added) {
        return mergeResult;
      }
    }
    groupToMerge.children.forEach(child => mergeTrees(mergeResult, child));
    return mergeResult;
  };
  const mergeColDefs = [];
  for (let i = 1; i <= leafPathTrees.length; i++) {
    const first = leafPathTrees[i - 1];
    const second = leafPathTrees[i];
    if (matchingRootGroupIds(first, second)) {
      leafPathTrees[i] = mergeTrees(first, second);
    } else {
      mergeColDefs.push(first);
    }
  }
  return mergeColDefs;
}

// enterprise-modules/side-bar/src/sideBar/common/toolPanelColDefService.ts
var ToolPanelColDefService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "toolPanelColDefService";
  }
  wireBeans(beans) {
    this.columnModel = beans.columnModel;
  }
  createColumnTree(colDefs) {
    const invalidColIds = [];
    const createDummyColGroup = (abstractColDef, depth) => {
      if (isColGroupDef(abstractColDef)) {
        const groupDef = abstractColDef;
        const groupId = typeof groupDef.groupId !== "undefined" ? groupDef.groupId : groupDef.headerName;
        const group = new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgProvidedColumnGroup(groupDef, groupId, false, depth);
        const children = [];
        groupDef.children.forEach(def => {
          const child = createDummyColGroup(def, depth + 1);
          if (child) {
            children.push(child);
          }
        });
        group.setChildren(children);
        return group;
      } else {
        const colDef = abstractColDef;
        const key = colDef.colId ? colDef.colId : colDef.field;
        const column = this.columnModel.getColDefCol(key);
        if (!column) {
          invalidColIds.push(colDef);
        }
        return column;
      }
    };
    const mappedResults = [];
    colDefs.forEach(colDef => {
      const result = createDummyColGroup(colDef, 0);
      if (result) {
        mappedResults.push(result);
      }
    });
    if (invalidColIds.length > 0) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("unable to find grid columns for the supplied colDef(s):", invalidColIds);
    }
    return mappedResults;
  }
  syncLayoutWithGrid(syncLayoutCallback) {
    const leafPathTrees = this.getLeafPathTrees();
    const mergedColumnTrees = mergeLeafPathTrees(leafPathTrees);
    syncLayoutCallback(mergedColumnTrees);
  }
  getLeafPathTrees() {
    const getLeafPathTree = (node, childDef) => {
      let leafPathTree;
      if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.isProvidedColumnGroup)(node)) {
        if (node.isPadding()) {
          leafPathTree = childDef;
        } else {
          const groupDef = Object.assign({}, node.getColGroupDef());
          groupDef.groupId = node.getGroupId();
          groupDef.children = [childDef];
          leafPathTree = groupDef;
        }
      } else {
        const colDef = Object.assign({}, node.getColDef());
        colDef.colId = node.getColId();
        leafPathTree = colDef;
      }
      const parent = node.getOriginalParent();
      if (parent) {
        return getLeafPathTree(parent, leafPathTree);
      } else {
        return leafPathTree;
      }
    };
    const allGridColumns = this.columnModel.getCols();
    const allPrimaryGridColumns = allGridColumns.filter(column => {
      const colDef = column.getColDef();
      return column.isPrimary() && !colDef.showRowGroup;
    });
    return allPrimaryGridColumns.map(col => getLeafPathTree(col, col.getColDef()));
  }
};

// enterprise-modules/side-bar/src/sideBar/sideBarApi.ts

function isSideBarVisible(beans) {
  return beans.sideBarService?.getSideBarComp().isDisplayed() ?? false;
}
function setSideBarVisible(beans, show) {
  beans.sideBarService?.getSideBarComp().setDisplayed(show);
}
function setSideBarPosition(beans, position) {
  beans.sideBarService?.getSideBarComp().setSideBarPosition(position);
}
function openToolPanel(beans, key) {
  beans.sideBarService?.getSideBarComp().openToolPanel(key, "api");
}
function closeToolPanel(beans) {
  beans.sideBarService?.getSideBarComp().close("api");
}
function getOpenedToolPanel(beans) {
  return beans.sideBarService?.getSideBarComp().openedItem() ?? null;
}
function refreshToolPanel(beans) {
  beans.sideBarService?.getSideBarComp().refresh();
}
function isToolPanelShowing(beans) {
  return beans.sideBarService?.getSideBarComp().isToolPanelShowing() ?? false;
}
function getToolPanelInstance(beans, id) {
  const comp = beans.sideBarService?.getSideBarComp().getToolPanelInstance(id);
  return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._unwrapUserComp)(comp);
}
function getSideBar(beans) {
  return beans.sideBarService?.getSideBarComp().getDef();
}

// enterprise-modules/side-bar/src/sideBar/sideBarService.ts


// enterprise-modules/side-bar/src/sideBar/agSideBar.ts


// enterprise-modules/side-bar/src/sideBar/agSideBarButtons.ts


// enterprise-modules/side-bar/src/sideBar/sideBarButtonComp.ts

var SideBarButtonComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(toolPanelDef) {
    super();
    this.eToggleButton = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eIconWrapper = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eLabel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.toolPanelDef = toolPanelDef;
  }
  getToolPanelId() {
    return this.toolPanelDef.id;
  }
  postConstruct() {
    const template = this.createTemplate();
    this.setTemplate(template, []);
    this.setLabel();
    this.setIcon();
    this.addManagedElementListeners(this.eToggleButton, {
      click: this.onButtonPressed.bind(this)
    });
    this.eToggleButton.setAttribute("id", `ag-${this.getCompId()}-button`);
  }
  createTemplate() {
    const res = /* html */
    `<div class="ag-side-button" role="presentation">
                <button type="button" data-ref="eToggleButton" tabindex="-1" role="tab" aria-expanded="false" class="ag-button ag-side-button-button">
                    <div data-ref="eIconWrapper" class="ag-side-button-icon-wrapper" aria-hidden="true"></div>
                    <span data-ref="eLabel" class="ag-side-button-label"></span>
                </button>
            </div>`;
    return res;
  }
  setLabel() {
    const translate = this.localeService.getLocaleTextFunc();
    const def = this.toolPanelDef;
    const label = translate(def.labelKey, def.labelDefault);
    this.eLabel.innerText = label;
  }
  setIcon() {
    this.eIconWrapper.insertAdjacentElement("afterbegin", (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._createIconNoSpan)(this.toolPanelDef.iconKey, this.gos));
  }
  onButtonPressed() {
    this.dispatchLocalEvent({
      type: "toggleButtonClicked"
    });
  }
  setSelected(selected) {
    this.addOrRemoveCssClass("ag-selected", selected);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaExpanded)(this.eToggleButton, selected);
  }
  getButtonElement() {
    return this.eToggleButton;
  }
};

// enterprise-modules/side-bar/src/sideBar/agSideBarButtons.ts
var AgSideBarButtons = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-side-buttons" role="tablist"></div>`);
    this.buttonComps = [];
  }
  wireBeans(beans) {
    this.focusService = beans.focusService;
    this.visibleColsService = beans.visibleColsService;
  }
  postConstruct() {
    this.addManagedElementListeners(this.getFocusableElement(), {
      keydown: this.handleKeyDown.bind(this)
    });
  }
  handleKeyDown(e) {
    if (e.key !== _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.TAB || !e.shiftKey) {
      return;
    }
    if (this.focusService.focusNextGridCoreContainer(true)) {
      e.preventDefault();
      return;
    }
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._stopPropagationForAgGrid)(e);
  }
  setActiveButton(id) {
    this.buttonComps.forEach(comp => {
      comp.setSelected(id === comp.getToolPanelId());
    });
  }
  addButtonComp(def) {
    const buttonComp = this.createBean(new SideBarButtonComp(def));
    this.buttonComps.push(buttonComp);
    this.appendChild(buttonComp);
    buttonComp.addEventListener("toggleButtonClicked", () => {
      this.dispatchLocalEvent({
        type: "sideBarButtonClicked",
        toolPanelId: def.id
      });
    });
    return buttonComp;
  }
  clearButtons() {
    this.buttonComps = this.destroyBeans(this.buttonComps);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._clearElement)(this.getGui());
    super.destroy();
  }
  destroy() {
    this.clearButtons();
    super.destroy();
  }
};
var AgSideBarButtonsSelector = {
  selector: "AG-SIDE-BAR-BUTTONS",
  component: AgSideBarButtons
};

// enterprise-modules/side-bar/src/sideBar/sideBarDefParser.ts

var DEFAULT_COLUMN_COMP = {
  id: "columns",
  labelDefault: "Columns",
  labelKey: "columns",
  iconKey: "columns",
  toolPanel: "agColumnsToolPanel"
};
var DEFAULT_FILTER_COMP = {
  id: "filters",
  labelDefault: "Filters",
  labelKey: "filters",
  iconKey: "filter",
  toolPanel: "agFiltersToolPanel"
};
var DEFAULT_BY_KEY = {
  columns: DEFAULT_COLUMN_COMP,
  filters: DEFAULT_FILTER_COMP
};
function parseSideBarDef(toParse) {
  if (!toParse) {
    return void 0;
  }
  if (toParse === true) {
    return {
      toolPanels: [DEFAULT_COLUMN_COMP, DEFAULT_FILTER_COMP],
      defaultToolPanel: "columns"
    };
  }
  if (typeof toParse === "string") {
    return parseSideBarDef([toParse]);
  }
  if (Array.isArray(toParse)) {
    const comps = [];
    toParse.forEach(key => {
      const lookupResult = DEFAULT_BY_KEY[key];
      if (!lookupResult) {
        logMissingKey(key);
        return;
      }
      comps.push(lookupResult);
    });
    if (comps.length === 0) {
      return void 0;
    }
    return {
      toolPanels: comps,
      defaultToolPanel: comps[0].id
    };
  }
  const result = {
    toolPanels: parseComponents(toParse.toolPanels),
    defaultToolPanel: toParse.defaultToolPanel,
    hiddenByDefault: toParse.hiddenByDefault,
    position: toParse.position
  };
  return result;
}
function logMissingKey(key) {
  (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`the key ${key} is not a valid key for specifying a tool panel, valid keys are: ${Object.keys(DEFAULT_BY_KEY).join(",")}`);
}
function parseComponents(from) {
  const result = [];
  if (!from) {
    return result;
  }
  from.forEach(it => {
    let toAdd = null;
    if (typeof it === "string") {
      const lookupResult = DEFAULT_BY_KEY[it];
      if (!lookupResult) {
        logMissingKey(it);
        return;
      }
      toAdd = lookupResult;
    } else {
      toAdd = it;
    }
    result.push(toAdd);
  });
  return result;
}

// enterprise-modules/side-bar/src/sideBar/toolPanelWrapper.ts


// enterprise-modules/side-bar/src/sideBar/agHorizontalResize.ts

var AgHorizontalResize = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-tool-panel-horizontal-resize"></div>`);
    this.minWidth = 100;
    this.maxWidth = null;
  }
  wireBeans(beans) {
    this.horizontalResizeService = beans.horizontalResizeService;
  }
  setElementToResize(elementToResize) {
    this.elementToResize = elementToResize;
  }
  postConstruct() {
    const finishedWithResizeFunc = this.horizontalResizeService.addResizeBar({
      eResizeBar: this.getGui(),
      dragStartPixels: 1,
      onResizeStart: this.onResizeStart.bind(this),
      onResizing: this.onResizing.bind(this),
      onResizeEnd: this.onResizeEnd.bind(this)
    });
    this.addDestroyFunc(finishedWithResizeFunc);
    this.setInverted(this.gos.get("enableRtl"));
  }
  dispatchResizeEvent(start, end, width) {
    this.eventService.dispatchEvent({
      type: "toolPanelSizeChanged",
      width,
      started: start,
      ended: end
    });
  }
  onResizeStart() {
    this.startingWidth = this.elementToResize.offsetWidth;
    this.dispatchResizeEvent(true, false, this.startingWidth);
  }
  onResizeEnd(delta) {
    return this.onResizing(delta, true);
  }
  onResizing(delta, isEnd = false) {
    const direction = this.inverted ? -1 : 1;
    let newWidth = Math.max(this.minWidth, Math.floor(this.startingWidth - delta * direction));
    if (this.maxWidth != null) {
      newWidth = Math.min(this.maxWidth, newWidth);
    }
    this.elementToResize.style.width = `${newWidth}px`;
    this.dispatchResizeEvent(false, isEnd, newWidth);
  }
  setInverted(inverted) {
    this.inverted = inverted;
  }
  setMaxWidth(value) {
    this.maxWidth = value;
  }
  setMinWidth(value) {
    if (value != null) {
      this.minWidth = value;
    } else {
      this.minWidth = 100;
    }
  }
};

// enterprise-modules/side-bar/src/sideBar/toolPanelWrapper.ts
var ToolPanelWrapper = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  wireBeans(beans) {
    this.userComponentFactory = beans.userComponentFactory;
  }
  constructor() {
    super(/* html */
    `<div class="ag-tool-panel-wrapper" role="tabpanel"/>`);
  }
  postConstruct() {
    const eGui = this.getGui();
    const resizeBar = this.resizeBar = this.createManagedBean(new AgHorizontalResize());
    eGui.setAttribute("id", `ag-${this.getCompId()}`);
    resizeBar.setElementToResize(eGui);
    this.appendChild(resizeBar);
  }
  getToolPanelId() {
    return this.toolPanelId;
  }
  setToolPanelDef(toolPanelDef, params) {
    const {
      id,
      minWidth,
      maxWidth,
      width
    } = toolPanelDef;
    this.toolPanelId = id;
    this.width = width;
    const compDetails = this.userComponentFactory.getToolPanelCompDetails(toolPanelDef, params);
    const componentPromise = compDetails.newAgStackInstance();
    this.params = compDetails.params;
    if (componentPromise == null) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`error processing tool panel component ${id}. You need to specify 'toolPanel'`);
      return;
    }
    componentPromise.then(this.setToolPanelComponent.bind(this));
    if (minWidth != null) {
      this.resizeBar.setMinWidth(minWidth);
    }
    if (maxWidth != null) {
      this.resizeBar.setMaxWidth(maxWidth);
    }
  }
  setToolPanelComponent(compInstance) {
    this.toolPanelCompInstance = compInstance;
    this.appendChild(compInstance.getGui());
    this.addDestroyFunc(() => {
      this.destroyBean(compInstance);
    });
    if (this.width) {
      this.getGui().style.width = `${this.width}px`;
    }
  }
  getToolPanelInstance() {
    return this.toolPanelCompInstance;
  }
  setResizerSizerSide(side) {
    const isRtl = this.gos.get("enableRtl");
    const isLeft = side === "left";
    const inverted = isRtl ? isLeft : !isLeft;
    this.resizeBar.setInverted(inverted);
  }
  refresh() {
    this.toolPanelCompInstance?.refresh(this.params);
  }
};

// enterprise-modules/side-bar/src/sideBar/agSideBar.ts
var AgSideBar = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-side-bar ag-unselectable">
            <ag-side-bar-buttons data-ref="sideBarButtons"></ag-side-bar-buttons>
        </div>`, [AgSideBarButtonsSelector]);
    this.sideBarButtons = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.toolPanelWrappers = [];
  }
  wireBeans(beans) {
    this.focusService = beans.focusService;
    this.filterManager = beans.filterManager;
    this.sideBarService = beans.sideBarService;
  }
  postConstruct() {
    this.sideBarButtons.addEventListener("sideBarButtonClicked", this.onToolPanelButtonClicked.bind(this));
    const {
      sideBar: sideBarState
    } = this.gos.get("initialState") ?? {};
    this.setSideBarDef({
      sideBarDef: parseSideBarDef(this.gos.get("sideBar")),
      sideBarState
    });
    this.addManagedPropertyListener("sideBar", this.onSideBarUpdated.bind(this));
    this.sideBarService.registerSideBarComp(this);
    const eGui = this.getFocusableElement();
    this.createManagedBean(new _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ManagedFocusFeature(eGui, {
      onTabKeyDown: this.onTabKeyDown.bind(this),
      handleKeyDown: this.handleKeyDown.bind(this)
    }));
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._addFocusableContainerListener)(this, eGui, this.focusService);
  }
  onTabKeyDown(e) {
    if (e.defaultPrevented) {
      return;
    }
    const {
      focusService,
      sideBarButtons
    } = this;
    const eGui = this.getGui();
    const sideBarGui = sideBarButtons.getGui();
    const activeElement = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getActiveDomElement)(this.gos);
    const openPanel = eGui.querySelector(".ag-tool-panel-wrapper:not(.ag-hidden)");
    const target = e.target;
    if (!openPanel) {
      return focusService.focusNextGridCoreContainer(e.shiftKey, true);
    }
    if (sideBarGui.contains(activeElement)) {
      if (focusService.focusInto(openPanel, e.shiftKey)) {
        e.preventDefault();
      }
      return;
    }
    if (!e.shiftKey) {
      return;
    }
    let nextEl = null;
    if (openPanel.contains(activeElement)) {
      nextEl = this.focusService.findNextFocusableElement(openPanel, void 0, true);
    } else if (focusService.isTargetUnderManagedComponent(openPanel, target) && e.shiftKey) {
      nextEl = this.focusService.findFocusableElementBeforeTabGuard(openPanel, target);
    }
    if (!nextEl) {
      nextEl = sideBarGui.querySelector(".ag-selected button");
    }
    if (nextEl && nextEl !== e.target) {
      e.preventDefault();
      nextEl.focus();
    }
  }
  handleKeyDown(e) {
    const currentButton = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._getActiveDomElement)(this.gos);
    if (!this.sideBarButtons.getGui().contains(currentButton)) {
      return;
    }
    const sideBarGui = this.sideBarButtons.getGui();
    const buttons = Array.prototype.slice.call(sideBarGui.querySelectorAll(".ag-side-button"));
    const currentPos = buttons.findIndex(button => button.contains(currentButton));
    let nextPos = null;
    switch (e.key) {
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.LEFT:
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.UP:
        nextPos = Math.max(0, currentPos - 1);
        break;
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.RIGHT:
      case _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.KeyCode.DOWN:
        nextPos = Math.min(currentPos + 1, buttons.length - 1);
        break;
    }
    if (nextPos === null) {
      return;
    }
    const innerButton = buttons[nextPos].querySelector("button");
    if (innerButton) {
      innerButton.focus();
      e.preventDefault();
    }
  }
  onToolPanelButtonClicked(event) {
    const id = event.toolPanelId;
    const openedItem = this.openedItem();
    if (openedItem === id) {
      this.openToolPanel(void 0, "sideBarButtonClicked");
    } else {
      this.openToolPanel(id, "sideBarButtonClicked");
    }
  }
  clearDownUi() {
    this.sideBarButtons.clearButtons();
    this.destroyToolPanelWrappers();
  }
  setSideBarDef({
    sideBarDef,
    sideBarState,
    existingToolPanelWrappers
  }) {
    this.setDisplayed(false);
    this.sideBar = sideBarDef;
    if (!!this.sideBar && !!this.sideBar.toolPanels) {
      const toolPanelDefs = this.sideBar.toolPanels;
      this.createToolPanelsAndSideButtons(toolPanelDefs, sideBarState, existingToolPanelWrappers);
      if (!this.toolPanelWrappers.length) {
        return;
      }
      const shouldDisplaySideBar = sideBarState ? sideBarState.visible : !this.sideBar.hiddenByDefault;
      this.setDisplayed(shouldDisplaySideBar);
      this.setSideBarPosition(sideBarState ? sideBarState.position : this.sideBar.position);
      if (shouldDisplaySideBar) {
        if (sideBarState) {
          const {
            openToolPanel: openToolPanel2
          } = sideBarState;
          if (openToolPanel2) {
            this.openToolPanel(openToolPanel2, "sideBarInitializing");
          }
        } else {
          this.openToolPanel(this.sideBar.defaultToolPanel, "sideBarInitializing");
        }
      }
    }
  }
  getDef() {
    return this.sideBar;
  }
  setSideBarPosition(position) {
    if (!position) {
      position = "right";
    }
    this.position = position;
    const isLeft = position === "left";
    const resizerSide = isLeft ? "right" : "left";
    this.addOrRemoveCssClass("ag-side-bar-left", isLeft);
    this.addOrRemoveCssClass("ag-side-bar-right", !isLeft);
    this.toolPanelWrappers.forEach(wrapper => {
      wrapper.setResizerSizerSide(resizerSide);
    });
    this.dispatchSideBarUpdated();
    return this;
  }
  setDisplayed(displayed, options) {
    super.setDisplayed(displayed, options);
    this.dispatchSideBarUpdated();
  }
  getState() {
    const toolPanels = {};
    this.toolPanelWrappers.forEach(wrapper => {
      toolPanels[wrapper.getToolPanelId()] = wrapper.getToolPanelInstance()?.getState?.();
    });
    return {
      visible: this.isDisplayed(),
      position: this.position,
      openToolPanel: this.openedItem(),
      toolPanels
    };
  }
  createToolPanelsAndSideButtons(defs, sideBarState, existingToolPanelWrappers) {
    for (const def of defs) {
      this.createToolPanelAndSideButton(def, sideBarState?.toolPanels?.[def.id], existingToolPanelWrappers?.[def.id]);
    }
  }
  validateDef(def) {
    if (def.id == null) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`please review all your toolPanel components, it seems like at least one of them doesn't have an id`);
      return false;
    }
    if (def.toolPanel === "agColumnsToolPanel") {
      const moduleMissing = !this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.ColumnsToolPanelModule, "Column Tool Panel");
      if (moduleMissing) {
        return false;
      }
    }
    if (def.toolPanel === "agFiltersToolPanel") {
      const moduleMissing = !this.gos.assertModuleRegistered(_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.FiltersToolPanelModule, "Filters Tool Panel");
      if (moduleMissing) {
        return false;
      }
      if (this.filterManager?.isAdvancedFilterEnabled()) {
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("Advanced Filter does not work with Filters Tool Panel. Filters Tool Panel has been disabled.");
        return false;
      }
    }
    return true;
  }
  createToolPanelAndSideButton(def, initialState, existingToolPanelWrapper) {
    if (!this.validateDef(def)) {
      return;
    }
    const button = this.sideBarButtons.addButtonComp(def);
    let wrapper;
    if (existingToolPanelWrapper) {
      wrapper = existingToolPanelWrapper;
    } else {
      wrapper = this.createBean(new ToolPanelWrapper());
      wrapper.setToolPanelDef(def, {
        initialState,
        onStateUpdated: () => this.dispatchSideBarUpdated()
      });
    }
    wrapper.setDisplayed(false);
    const wrapperGui = wrapper.getGui();
    this.appendChild(wrapperGui);
    this.toolPanelWrappers.push(wrapper);
    (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._setAriaControls)(button.getButtonElement(), wrapperGui);
  }
  refresh() {
    this.toolPanelWrappers.forEach(wrapper => wrapper.refresh());
  }
  openToolPanel(key, source = "api") {
    const currentlyOpenedKey = this.openedItem();
    if (currentlyOpenedKey === key) {
      return;
    }
    this.toolPanelWrappers.forEach(wrapper => {
      const show = key === wrapper.getToolPanelId();
      wrapper.setDisplayed(show);
    });
    const newlyOpenedKey = this.openedItem();
    const openToolPanelChanged = currentlyOpenedKey !== newlyOpenedKey;
    if (openToolPanelChanged) {
      this.sideBarButtons.setActiveButton(key);
      this.raiseToolPanelVisibleEvent(key, currentlyOpenedKey ?? void 0, source);
    }
  }
  getToolPanelInstance(key) {
    const toolPanelWrapper = this.toolPanelWrappers.filter(toolPanel => toolPanel.getToolPanelId() === key)[0];
    if (!toolPanelWrapper) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`unable to lookup Tool Panel as invalid key supplied: ${key}`);
      return;
    }
    return toolPanelWrapper.getToolPanelInstance();
  }
  raiseToolPanelVisibleEvent(key, previousKey, source) {
    const switchingToolPanel = !!key && !!previousKey;
    if (previousKey) {
      this.eventService.dispatchEvent({
        type: "toolPanelVisibleChanged",
        source,
        key: previousKey,
        visible: false,
        switchingToolPanel
      });
    }
    if (key) {
      this.eventService.dispatchEvent({
        type: "toolPanelVisibleChanged",
        source,
        key,
        visible: true,
        switchingToolPanel
      });
    }
  }
  close(source = "api") {
    this.openToolPanel(void 0, source);
  }
  isToolPanelShowing() {
    return !!this.openedItem();
  }
  openedItem() {
    let activeToolPanel = null;
    this.toolPanelWrappers.forEach(wrapper => {
      if (wrapper.isDisplayed()) {
        activeToolPanel = wrapper.getToolPanelId();
      }
    });
    return activeToolPanel;
  }
  onSideBarUpdated() {
    const sideBarDef = parseSideBarDef(this.gos.get("sideBar"));
    const existingToolPanelWrappers = {};
    if (sideBarDef && this.sideBar) {
      sideBarDef.toolPanels?.forEach(toolPanelDef => {
        const {
          id
        } = toolPanelDef;
        if (!id) {
          return;
        }
        const existingToolPanelDef = this.sideBar.toolPanels?.find(toolPanelDefToCheck => toolPanelDefToCheck.id === id);
        if (!existingToolPanelDef || toolPanelDef.toolPanel !== existingToolPanelDef.toolPanel) {
          return;
        }
        const toolPanelWrapper = this.toolPanelWrappers.find(toolPanel => toolPanel.getToolPanelId() === id);
        if (!toolPanelWrapper) {
          return;
        }
        const params = this.gos.addGridCommonParams({
          ...(toolPanelDef.toolPanelParams ?? {}),
          onStateUpdated: () => this.dispatchSideBarUpdated()
        });
        const hasRefreshed = toolPanelWrapper.getToolPanelInstance()?.refresh(params);
        if (hasRefreshed !== true) {
          return;
        }
        this.toolPanelWrappers = this.toolPanelWrappers.filter(toolPanel => toolPanel !== toolPanelWrapper);
        (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._removeFromParent)(toolPanelWrapper.getGui());
        existingToolPanelWrappers[id] = toolPanelWrapper;
      });
    }
    this.clearDownUi();
    this.setSideBarDef({
      sideBarDef,
      existingToolPanelWrappers
    });
  }
  dispatchSideBarUpdated() {
    this.eventService.dispatchEvent({
      type: "sideBarUpdated"
    });
  }
  destroyToolPanelWrappers() {
    this.toolPanelWrappers.forEach(wrapper => {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._removeFromParent)(wrapper.getGui());
      this.destroyBean(wrapper);
    });
    this.toolPanelWrappers.length = 0;
  }
  destroy() {
    this.destroyToolPanelWrappers();
    super.destroy();
  }
};
var AgSideBarSelector = {
  selector: "AG-SIDE-BAR",
  component: AgSideBar
};

// enterprise-modules/side-bar/src/sideBar/sideBarService.ts
var SideBarService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  constructor() {
    super(...arguments);
    this.beanName = "sideBarService";
  }
  registerSideBarComp(sideBarComp) {
    this.sideBarComp = sideBarComp;
  }
  getSideBarComp() {
    return this.sideBarComp;
  }
  getSideBarSelector() {
    return AgSideBarSelector;
  }
};

// enterprise-modules/side-bar/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/side-bar/src/sideBarModule.ts
var SideBarCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.SideBarModule}-core`,
  beans: [ToolPanelColDefService, SideBarService],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule]
});
var SideBarApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.SideBarModule}-api`,
  apiFunctions: {
    isSideBarVisible,
    setSideBarVisible,
    setSideBarPosition,
    openToolPanel,
    closeToolPanel,
    getOpenedToolPanel,
    refreshToolPanel,
    isToolPanelShowing,
    getToolPanelInstance,
    getSideBar
  },
  dependantModules: [SideBarCoreModule]
});
var SideBarModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.SideBarModule,
  dependantModules: [SideBarCoreModule, SideBarApiModule]
});


/***/ }),

/***/ 98589:
/*!*******************************************************************************!*\
  !*** ./node_modules/@ag-grid-enterprise/status-bar/dist/package/main.esm.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBarModule: () => (/* binding */ StatusBarModule)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/core */ 60184);
/* harmony import */ var _ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-enterprise/core */ 65902);
// enterprise-modules/status-bar/src/statusBarModule.ts



// enterprise-modules/status-bar/src/statusBar/providedPanels/aggregationComp.ts


// enterprise-modules/status-bar/src/statusBar/providedPanels/agNameValue.ts

var AgNameValue = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-status-name-value">
            <span data-ref="eLabel"></span>:&nbsp;
            <span data-ref="eValue" class="ag-status-name-value-value"></span>
        </div>`);
    this.eLabel = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eValue = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  setLabel(key, defaultValue) {
    this.setDisplayed(false);
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    this.eLabel.innerHTML = localeTextFunc(key, defaultValue);
  }
  setValue(value) {
    this.eValue.innerHTML = value;
  }
};
var AgNameValueSelector = {
  selector: "AG-NAME-VALUE",
  component: AgNameValue
};

// enterprise-modules/status-bar/src/statusBar/providedPanels/aggregationComp.ts
var AggregationComp = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-status-panel ag-status-panel-aggregations">
            <ag-name-value data-ref="avgAggregationComp"></ag-name-value>
            <ag-name-value data-ref="countAggregationComp"></ag-name-value>
            <ag-name-value data-ref="minAggregationComp"></ag-name-value>
            <ag-name-value data-ref="maxAggregationComp"></ag-name-value>
            <ag-name-value data-ref="sumAggregationComp"></ag-name-value>
        </div>`, [AgNameValueSelector]);
    this.sumAggregationComp = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.countAggregationComp = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.minAggregationComp = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.maxAggregationComp = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.avgAggregationComp = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
  }
  wireBeans(beans) {
    this.valueService = beans.valueService;
    this.cellNavigationService = beans.cellNavigationService;
    this.cellPositionUtils = beans.cellPositionUtils;
    this.rowPositionUtils = beans.rowPositionUtils;
    this.rangeService = beans.rangeService;
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
  postConstruct() {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos) && !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isServerSideRowModel)(this.gos)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`agAggregationComponent should only be used with the client and server side row model.`);
      return;
    }
    this.avgAggregationComp.setLabel("avg", "Average");
    this.countAggregationComp.setLabel("count", "Count");
    this.minAggregationComp.setLabel("min", "Min");
    this.maxAggregationComp.setLabel("max", "Max");
    this.sumAggregationComp.setLabel("sum", "Sum");
    this.addManagedEventListeners({
      cellSelectionChanged: this.onCellSelectionChanged.bind(this),
      modelUpdated: this.onCellSelectionChanged.bind(this)
    });
  }
  init(params) {
    this.refresh(params);
  }
  refresh(params) {
    this.params = params;
    this.onCellSelectionChanged();
    return true;
  }
  setAggregationComponentValue(aggFuncName, value, visible) {
    const statusBarValueComponent = this.getAllowedAggregationValueComponent(aggFuncName);
    if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._exists)(statusBarValueComponent) && statusBarValueComponent) {
      const localeTextFunc = this.localeService.getLocaleTextFunc();
      const thousandSeparator = localeTextFunc("thousandSeparator", ",");
      const decimalSeparator = localeTextFunc("decimalSeparator", ".");
      statusBarValueComponent.setValue((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._formatNumberTwoDecimalPlacesAndCommas)(value, thousandSeparator, decimalSeparator));
      statusBarValueComponent.setDisplayed(visible);
    } else {
      this.getAggregationValueComponent(aggFuncName)?.setDisplayed(false);
    }
  }
  getAllowedAggregationValueComponent(aggFuncName) {
    const {
      aggFuncs
    } = this.params;
    if (!aggFuncs || aggFuncs.includes(aggFuncName)) {
      return this.getAggregationValueComponent(aggFuncName);
    }
    return null;
  }
  getAggregationValueComponent(aggFuncName) {
    const refComponentName = `${aggFuncName}AggregationComp`;
    return this[refComponentName];
  }
  onCellSelectionChanged() {
    const cellRanges = this.rangeService?.getCellRanges();
    let sum = 0;
    let count = 0;
    let numberCount = 0;
    let min = null;
    let max = null;
    const cellsSoFar = {};
    if (cellRanges && !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missingOrEmpty)(cellRanges) && this.rangeService) {
      for (let i = 0; i < cellRanges.length; i++) {
        const cellRange = cellRanges[i];
        let currentRow = this.rangeService.getRangeStartRow(cellRange);
        const lastRow = this.rangeService.getRangeEndRow(cellRange);
        while (true) {
          const finishedAllRows = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(currentRow) || !currentRow || this.rowPositionUtils.before(lastRow, currentRow);
          if (finishedAllRows || !currentRow || !cellRange.columns) {
            break;
          }
          cellRange.columns.forEach(col => {
            if (currentRow === null) {
              return;
            }
            const cellId = this.cellPositionUtils.createId({
              rowPinned: currentRow.rowPinned,
              column: col,
              rowIndex: currentRow.rowIndex
            });
            if (cellsSoFar[cellId]) {
              return;
            }
            cellsSoFar[cellId] = true;
            const rowNode = this.rowPositionUtils.getRowNode(currentRow);
            if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(rowNode)) {
              return;
            }
            let value = this.valueService.getValue(col, rowNode);
            if ((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._missing)(value) || value === "") {
              return;
            }
            count++;
            if (typeof value === "object" && "value" in value) {
              value = value.value;
              if (value === "") {
                return;
              }
            }
            if (typeof value === "string") {
              value = Number(value);
            }
            if (typeof value === "number" && !isNaN(value)) {
              sum += value;
              if (max === null || value > max) {
                max = value;
              }
              if (min === null || value < min) {
                min = value;
              }
              numberCount++;
            }
          });
          currentRow = this.cellNavigationService.getRowBelow(currentRow);
        }
      }
    }
    const gotResult = count > 1;
    const gotNumberResult = numberCount > 1;
    this.setAggregationComponentValue("count", count, gotResult);
    this.setAggregationComponentValue("sum", sum, gotNumberResult);
    this.setAggregationComponentValue("min", min, gotNumberResult);
    this.setAggregationComponentValue("max", max, gotNumberResult);
    this.setAggregationComponentValue("avg", sum / numberCount, gotNumberResult);
  }
};

// enterprise-modules/status-bar/src/statusBar/providedPanels/filteredRowsComp.ts

var FilteredRowsComp = class extends AgNameValue {
  wireBeans(beans) {
    this.rowModel = beans.rowModel;
  }
  postConstruct() {
    this.setLabel("filteredRows", "Filtered");
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`agFilteredRowCountComponent should only be used with the client side row model.`);
      return;
    }
    this.addCssClass("ag-status-panel");
    this.addCssClass("ag-status-panel-filtered-row-count");
    this.setDisplayed(true);
    const listener = this.onDataChanged.bind(this);
    this.addManagedEventListeners({
      modelUpdated: listener
    });
    listener();
  }
  onDataChanged() {
    const totalRowCountValue = this.getTotalRowCountValue();
    const filteredRowCountValue = this.getFilteredRowCountValue();
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const thousandSeparator = localeTextFunc("thousandSeparator", ",");
    const decimalSeparator = localeTextFunc("decimalSeparator", ".");
    this.setValue((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._formatNumberCommas)(filteredRowCountValue, thousandSeparator, decimalSeparator));
    this.setDisplayed(totalRowCountValue !== filteredRowCountValue);
  }
  getTotalRowCountValue() {
    let totalRowCount = 0;
    this.rowModel.forEachNode(() => totalRowCount += 1);
    return totalRowCount;
  }
  getFilteredRowCountValue() {
    let filteredRowCount = 0;
    this.rowModel.forEachNodeAfterFilter(node => {
      if (!node.group) {
        filteredRowCount += 1;
      }
    });
    return filteredRowCount;
  }
  init() {}
  refresh() {
    return true;
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/status-bar/src/statusBar/providedPanels/selectedRowsComp.ts

var SelectedRowsComp = class extends AgNameValue {
  wireBeans(beans) {
    this.selectionService = beans.selectionService;
  }
  postConstruct() {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos) && !(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isServerSideRowModel)(this.gos)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`agSelectedRowCountComponent should only be used with the client and server side row model.`);
      return;
    }
    this.setLabel("selectedRows", "Selected");
    this.addCssClass("ag-status-panel");
    this.addCssClass("ag-status-panel-selected-row-count");
    this.onRowSelectionChanged();
    const eventListener = this.onRowSelectionChanged.bind(this);
    this.addManagedEventListeners({
      modelUpdated: eventListener,
      selectionChanged: eventListener
    });
  }
  onRowSelectionChanged() {
    const selectedRowCount = this.selectionService.getSelectionCount();
    if (selectedRowCount < 0) {
      this.setValue("?");
      this.setDisplayed(true);
      return;
    }
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const thousandSeparator = localeTextFunc("thousandSeparator", ",");
    const decimalSeparator = localeTextFunc("decimalSeparator", ".");
    this.setValue((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._formatNumberCommas)(selectedRowCount, thousandSeparator, decimalSeparator));
    this.setDisplayed(selectedRowCount > 0);
  }
  init() {}
  refresh() {
    return true;
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/status-bar/src/statusBar/providedPanels/totalAndFilteredRowsComp.ts

var TotalAndFilteredRowsComp = class extends AgNameValue {
  wireBeans(beans) {
    this.rowModel = beans.rowModel;
  }
  postConstruct() {
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)(`agTotalAndFilteredRowCountComponent should only be used with the client side row model.`);
      return;
    }
    this.setLabel("totalAndFilteredRows", "Rows");
    this.addCssClass("ag-status-panel");
    this.addCssClass("ag-status-panel-total-and-filtered-row-count");
    this.setDisplayed(true);
    this.addManagedEventListeners({
      modelUpdated: this.onDataChanged.bind(this)
    });
    this.onDataChanged();
  }
  onDataChanged() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const thousandSeparator = localeTextFunc("thousandSeparator", ",");
    const decimalSeparator = localeTextFunc("decimalSeparator", ".");
    const rowCount = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._formatNumberCommas)(this.getFilteredRowCountValue(), thousandSeparator, decimalSeparator);
    const totalRowCount = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._formatNumberCommas)(this.getTotalRowCount(), thousandSeparator, decimalSeparator);
    if (rowCount === totalRowCount) {
      this.setValue(rowCount);
    } else {
      const localeTextFunc2 = this.localeService.getLocaleTextFunc();
      this.setValue(`${rowCount} ${localeTextFunc2("of", "of")} ${totalRowCount}`);
    }
  }
  getFilteredRowCountValue() {
    let filteredRowCount = 0;
    this.rowModel.forEachNodeAfterFilter(node => {
      if (!node.group) {
        filteredRowCount++;
      }
    });
    return filteredRowCount;
  }
  getTotalRowCount() {
    let totalRowCount = 0;
    this.rowModel.forEachNode(node => {
      if (!node.group) {
        totalRowCount++;
      }
    });
    return totalRowCount;
  }
  init() {}
  refresh() {
    return true;
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/status-bar/src/statusBar/providedPanels/totalRowsComp.ts

var TotalRowsComp = class extends AgNameValue {
  wireBeans(beans) {
    this.rowModel = beans.rowModel;
  }
  postConstruct() {
    this.setLabel("totalRows", "Total Rows");
    if (!(0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._isClientSideRowModel)(this.gos)) {
      (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._warnOnce)("agTotalRowCountComponent should only be used with the client side row model.");
      return;
    }
    this.addCssClass("ag-status-panel");
    this.addCssClass("ag-status-panel-total-row-count");
    this.setDisplayed(true);
    this.addManagedEventListeners({
      modelUpdated: this.onDataChanged.bind(this)
    });
    this.onDataChanged();
  }
  onDataChanged() {
    const localeTextFunc = this.localeService.getLocaleTextFunc();
    const thousandSeparator = localeTextFunc("thousandSeparator", ",");
    const decimalSeparator = localeTextFunc("decimalSeparator", ".");
    this.setValue((0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._formatNumberCommas)(this.getRowCountValue(), thousandSeparator, decimalSeparator));
  }
  getRowCountValue() {
    let totalRowCount = 0;
    this.rowModel.forEachLeafNode(() => totalRowCount += 1);
    return totalRowCount;
  }
  init() {}
  refresh() {
    return true;
  }
  // this is a user component, and IComponent has "public destroy()" as part of the interface.
  // so we need to override destroy() just to make the method public.
  destroy() {
    super.destroy();
  }
};

// enterprise-modules/status-bar/src/statusBar/statusBarApi.ts

function getStatusPanel(beans, key) {
  const comp = beans.statusBarService.getStatusPanel(key);
  return (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._unwrapUserComp)(comp);
}

// enterprise-modules/status-bar/src/statusBar/statusBarService.ts


// enterprise-modules/status-bar/src/statusBar/agStatusBar.ts

var AgStatusBar = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(/* html */
    `<div class="ag-status-bar">
            <div data-ref="eStatusBarLeft" class="ag-status-bar-left" role="status"></div>
            <div data-ref="eStatusBarCenter" class="ag-status-bar-center" role="status"></div>
            <div data-ref="eStatusBarRight" class="ag-status-bar-right" role="status"></div>
        </div>`);
    this.updateQueued = false;
    this.panelsPromise = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve();
    this.eStatusBarLeft = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eStatusBarCenter = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.eStatusBarRight = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.RefPlaceholder;
    this.compDestroyFunctions = {};
  }
  wireBeans(beans) {
    this.userComponentFactory = beans.userComponentFactory;
    this.statusBarService = beans.statusBarService;
  }
  postConstruct() {
    this.processStatusPanels(/* @__PURE__ */new Map());
    this.addManagedPropertyListeners(["statusBar"], this.handleStatusBarChanged.bind(this));
  }
  processStatusPanels(existingStatusPanelsToReuse) {
    const statusPanels = this.gos.get("statusBar")?.statusPanels;
    if (statusPanels) {
      const leftStatusPanelComponents = statusPanels.filter(componentConfig => componentConfig.align === "left");
      const centerStatusPanelComponents = statusPanels.filter(componentConfig => componentConfig.align === "center");
      const rightStatusPanelComponents = statusPanels.filter(componentConfig => !componentConfig.align || componentConfig.align === "right");
      this.panelsPromise = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.all([this.createAndRenderComponents(leftStatusPanelComponents, this.eStatusBarLeft, existingStatusPanelsToReuse), this.createAndRenderComponents(centerStatusPanelComponents, this.eStatusBarCenter, existingStatusPanelsToReuse), this.createAndRenderComponents(rightStatusPanelComponents, this.eStatusBarRight, existingStatusPanelsToReuse)]);
    } else {
      this.setDisplayed(false);
    }
  }
  handleStatusBarChanged() {
    if (this.updateQueued) {
      return;
    }
    this.updateQueued = true;
    this.panelsPromise.then(() => {
      this.updateStatusBar();
      this.updateQueued = false;
    });
  }
  updateStatusBar() {
    const statusPanels = this.gos.get("statusBar")?.statusPanels;
    const validStatusBarPanelsProvided = Array.isArray(statusPanels) && statusPanels.length > 0;
    this.setDisplayed(validStatusBarPanelsProvided);
    const existingStatusPanelsToReuse = /* @__PURE__ */new Map();
    if (validStatusBarPanelsProvided) {
      statusPanels.forEach(statusPanelConfig => {
        const key = statusPanelConfig.key ?? statusPanelConfig.statusPanel;
        const existingStatusPanel = this.statusBarService.getStatusPanel(key);
        if (existingStatusPanel?.refresh) {
          const newParams = this.gos.addGridCommonParams(statusPanelConfig.statusPanelParams ?? {});
          const hasRefreshed = existingStatusPanel.refresh(newParams);
          if (hasRefreshed) {
            existingStatusPanelsToReuse.set(key, existingStatusPanel);
            delete this.compDestroyFunctions[key];
            (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._removeFromParent)(existingStatusPanel.getGui());
          }
        }
      });
    }
    this.resetStatusBar();
    if (validStatusBarPanelsProvided) {
      this.processStatusPanels(existingStatusPanelsToReuse);
    }
  }
  resetStatusBar() {
    this.eStatusBarLeft.innerHTML = "";
    this.eStatusBarCenter.innerHTML = "";
    this.eStatusBarRight.innerHTML = "";
    this.destroyComponents();
    this.statusBarService.unregisterAllComponents();
  }
  destroy() {
    this.destroyComponents();
    super.destroy();
  }
  destroyComponents() {
    Object.values(this.compDestroyFunctions).forEach(func => func());
    this.compDestroyFunctions = {};
  }
  createAndRenderComponents(statusBarComponents, ePanelComponent, existingStatusPanelsToReuse) {
    const componentDetails = [];
    statusBarComponents.forEach(componentConfig => {
      const key = componentConfig.key || componentConfig.statusPanel;
      const existingStatusPanel = existingStatusPanelsToReuse.get(key);
      let promise;
      if (existingStatusPanel) {
        promise = _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.resolve(existingStatusPanel);
      } else {
        const params = {};
        const compDetails = this.userComponentFactory.getStatusPanelCompDetails(componentConfig, params);
        promise = compDetails.newAgStackInstance();
        if (promise == null) {
          return;
        }
      }
      componentDetails.push({
        key,
        promise
      });
    });
    return _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.AgPromise.all(componentDetails.map(details => details.promise)).then(() => {
      componentDetails.forEach(componentDetail => {
        componentDetail.promise.then(component => {
          const destroyFunc = () => {
            this.destroyBean(component);
          };
          if (this.isAlive()) {
            this.statusBarService.registerStatusPanel(componentDetail.key, component);
            ePanelComponent.appendChild(component.getGui());
            this.compDestroyFunctions[componentDetail.key] = destroyFunc;
          } else {
            destroyFunc();
          }
        });
      });
    });
  }
};
var AgStatusBarSelector = {
  selector: "AG-STATUS-BAR",
  component: AgStatusBar
};

// enterprise-modules/status-bar/src/statusBar/statusBarService.ts
var StatusBarService = class extends _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.BeanStub {
  // tslint:disable-next-line
  constructor() {
    super();
    this.beanName = "statusBarService";
    this.allComponents = /* @__PURE__ */new Map();
  }
  registerStatusPanel(key, component) {
    this.allComponents.set(key, component);
  }
  unregisterStatusPanel(key) {
    this.allComponents.delete(key);
  }
  unregisterAllComponents() {
    this.allComponents.clear();
  }
  getStatusPanel(key) {
    return this.allComponents.get(key);
  }
  getStatusPanelSelector() {
    return AgStatusBarSelector;
  }
  destroy() {
    this.unregisterAllComponents();
    super.destroy();
  }
};

// enterprise-modules/status-bar/src/version.ts
var VERSION = "32.3.3";

// enterprise-modules/status-bar/src/statusBarModule.ts
var StatusBarCoreModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.StatusBarModule}-core`,
  beans: [StatusBarService],
  userComponents: [{
    name: "agAggregationComponent",
    classImp: AggregationComp
  }, {
    name: "agSelectedRowCountComponent",
    classImp: SelectedRowsComp
  }, {
    name: "agTotalRowCountComponent",
    classImp: TotalRowsComp
  }, {
    name: "agFilteredRowCountComponent",
    classImp: FilteredRowsComp
  }, {
    name: "agTotalAndFilteredRowCountComponent",
    classImp: TotalAndFilteredRowsComp
  }],
  dependantModules: [_ag_grid_enterprise_core__WEBPACK_IMPORTED_MODULE_1__.EnterpriseCoreModule]
});
var StatusBarApiModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: `${_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.StatusBarModule}-api`,
  apiFunctions: {
    getStatusPanel
  },
  dependantModules: [StatusBarCoreModule]
});
var StatusBarModule = (0,_ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__._defineModule)({
  version: VERSION,
  moduleName: _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_0__.ModuleNames.StatusBarModule,
  dependantModules: [StatusBarCoreModule, StatusBarApiModule]
});


/***/ })

}]);
//# sourceMappingURL=default-src_app_usecases_grid_grid_module_ts.56abe6f7fb5aeec3.js.map