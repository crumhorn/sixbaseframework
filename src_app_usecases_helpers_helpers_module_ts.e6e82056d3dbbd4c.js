"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_helpers_helpers_module_ts"],{

/***/ 7277:
/*!******************************************************!*\
  !*** ./src/app/usecases/helpers/forms/SampleForm.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SampleForm: () => (/* binding */ SampleForm)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 72916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 30078);






function SampleForm_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r1);
  }
}
function SampleForm_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ERROR!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SampleForm_div_16_div_4_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dialogErrors);
  }
}
class SampleForm extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_1__.BaseForm {
  constructor(activeModal) {
    super(null);
    this.activeModal = activeModal;
    this.title = "Please set a title";
  }
  onSubmit() {
    this.activeModal.close();
  }
  ngOnInit() {}
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  static extractBody(html) {
    let left = html.indexOf('<body>');
    let innerHtml = html.substring(left + 6, html.length);
    let right = innerHtml.indexOf('</body>');
    innerHtml = innerHtml.substring(0, right);
    return innerHtml;
  }
  getFormGroup() {
    return null;
  }
  ngOnDestroy() {
    this.modalUtils.updateStack();
  }
  static {
    this.ɵfac = function SampleForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SampleForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SampleForm,
      selectors: [["SampleForm"]],
      inputs: {
        title: "title"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 17,
      vars: 2,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-dismiss", "modal", 1, "close", 3, "click"], ["aria-hidden", ""], [1, "modal-body"], [1, "outerFormContainer"], [2, "padding", "10px"], [2, "padding", "5px"], [2, "padding", "15px"], [1, "modal-footer"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit", "icon", "pi pi-search", "iconPos", "left", 1, "p-button-success", "p-button-raised", "search-button", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cancel", "icon", "pi pi-search", "iconPos", "left", 1, "p-button-danger", "p-button-raised", "search-button", 3, "click"], ["class", "alert alert-danger", "style", "margin: 5px", 4, "ngIf"], [1, "alert", "alert-danger", 2, "margin", "5px"], [4, "ngFor", "ngForOf"]],
      template: function SampleForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleForm_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "fieldset", 6)(9, "legend", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hi there!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I'm the content area. You can obviously put whatever you want here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleForm_Template_button_click_14_listener() {
            return ctx.activeModal.close(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleForm_Template_button_click_15_listener() {
            return ctx.activeModal.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SampleForm_div_16_Template, 5, 1, "div", 12);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogErrors.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 66716:
/*!****************************************************!*\
  !*** ./src/app/usecases/helpers/helpers.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpersModule: () => (/* binding */ HelpersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _helpers_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.routing */ 94920);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ag-grid-community/angular */ 58857);
/* harmony import */ var _model_HelpersUsecaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/HelpersUsecaseModel */ 56970);
/* harmony import */ var _views_ErrorHelperView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/ErrorHelperView */ 3043);
/* harmony import */ var _views_ModalUtilsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ModalUtilsView */ 35629);
/* harmony import */ var _forms_SampleForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/SampleForm */ 7277);
/* harmony import */ var _views_ColumnHelperView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ColumnHelperView */ 469);
/* harmony import */ var _views_GridHelperView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/GridHelperView */ 143);
/* harmony import */ var _views_ContextMenuHelperView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/ContextMenuHelperView */ 289);
/* harmony import */ var _views_ToolbarHelperView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/ToolbarHelperView */ 326);
/* harmony import */ var _views_RegexHelperView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/RegexHelperView */ 166);
/* harmony import */ var _views_GridToolbarHelperView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/GridToolbarHelperView */ 834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
















class HelpersModule {
  static {
    this.ɵfac = function HelpersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HelpersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: HelpersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      providers: [_model_HelpersUsecaseModel__WEBPACK_IMPORTED_MODULE_2__.HelpersUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _helpers_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_14__.AgGridModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](HelpersModule, {
    declarations: [
    // views
    _views_ErrorHelperView__WEBPACK_IMPORTED_MODULE_3__.ErrorHelperView, _views_ModalUtilsView__WEBPACK_IMPORTED_MODULE_4__.ModalUtilsView, _views_ColumnHelperView__WEBPACK_IMPORTED_MODULE_6__.ColumnHelperView, _views_GridHelperView__WEBPACK_IMPORTED_MODULE_7__.GridHelperView, _views_ContextMenuHelperView__WEBPACK_IMPORTED_MODULE_8__.ContextMenuHelperView, _views_ToolbarHelperView__WEBPACK_IMPORTED_MODULE_9__.ToolbarHelperView, _views_GridToolbarHelperView__WEBPACK_IMPORTED_MODULE_11__.GridToolbarHelperView, _views_RegexHelperView__WEBPACK_IMPORTED_MODULE_10__.RegexHelperView, _forms_SampleForm__WEBPACK_IMPORTED_MODULE_5__.SampleForm],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_14__.AgGridModule]
  });
})();

/***/ }),

/***/ 94920:
/*!*****************************************************!*\
  !*** ./src/app/usecases/helpers/helpers.routing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_ErrorHelperView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/ErrorHelperView */ 3043);
/* harmony import */ var _views_ModalUtilsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ModalUtilsView */ 35629);
/* harmony import */ var _views_ColumnHelperView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ColumnHelperView */ 469);
/* harmony import */ var _views_GridHelperView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/GridHelperView */ 143);
/* harmony import */ var _views_ContextMenuHelperView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ContextMenuHelperView */ 289);
/* harmony import */ var _views_ToolbarHelperView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ToolbarHelperView */ 326);
/* harmony import */ var _views_RegexHelperView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/RegexHelperView */ 166);
/* harmony import */ var _views_GridToolbarHelperView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/GridToolbarHelperView */ 834);









const routes = [{
  path: 'errorHelper',
  component: _views_ErrorHelperView__WEBPACK_IMPORTED_MODULE_0__.ErrorHelperView
}, {
  path: 'modalUtils',
  component: _views_ModalUtilsView__WEBPACK_IMPORTED_MODULE_1__.ModalUtilsView
}, {
  path: 'columnHelper',
  component: _views_ColumnHelperView__WEBPACK_IMPORTED_MODULE_2__.ColumnHelperView
}, {
  path: 'gridHelper',
  component: _views_GridHelperView__WEBPACK_IMPORTED_MODULE_3__.GridHelperView
}, {
  path: 'contextMenuHelper',
  component: _views_ContextMenuHelperView__WEBPACK_IMPORTED_MODULE_4__.ContextMenuHelperView
}, {
  path: 'toolbarHelper',
  component: _views_ToolbarHelperView__WEBPACK_IMPORTED_MODULE_5__.ToolbarHelperView
}, {
  path: 'gridToolbarHelper',
  component: _views_GridToolbarHelperView__WEBPACK_IMPORTED_MODULE_7__.GridToolbarHelperView
}, {
  path: 'regexHelper',
  component: _views_RegexHelperView__WEBPACK_IMPORTED_MODULE_6__.RegexHelperView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes);

/***/ }),

/***/ 56970:
/*!***************************************************************!*\
  !*** ./src/app/usecases/helpers/model/HelpersUsecaseModel.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpersUsecaseModel: () => (/* binding */ HelpersUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class HelpersUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
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
    this.ɵfac = function HelpersUsecaseModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HelpersUsecaseModel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHelper));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HelpersUsecaseModel,
      factory: HelpersUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 469:
/*!************************************************************!*\
  !*** ./src/app/usecases/helpers/views/ColumnHelperView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnHelperView: () => (/* binding */ ColumnHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class ColumnHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.usageCode = `// called from ngAfterViewInit
initGrid(): void {
  // create the helper
  let ch = new ColumnHelper(this.getGridId());

  // visible columns, note how we also set default filter values
  ch.addColumn('LE ID', 'legalEntityId', 70, ColumnHelper.NUMBER_FILTER, ColumnHelper.SORT_ASC)
    .addColumn('LE Name Short', 'nameShort', 200)
    .addColumn('LE Abbrev', 'nameAbbrev', 110)
    .addColumn('LE Tenant', 'tenant', 130, ColumnHelper.SET_FILTER)
    .addColumn('LE Role', 'legalEntityRole.code', 120, ColumnHelper.SET_FILTER)
    .setFilterParams('legalEntityRole.code', {values: EnumHelper.toSelectItems(LegalEntityRoles).map(x => x.value)})
    .addColumn('LE SP Roles', 'serviceProviderRoles', 120, ColumnHelper.SET_FILTER)
    .setFilterParams('serviceProviderRoles', {values: EnumHelper.toSelectItems(ServiceProviderRoles).map(x => x.value)})
    .addColumn('LE is SP', 'isSponsoringParticipant', 100, ColumnHelper.SET_FILTER)
    .addColumn('LE Env', 'environmentType', 120, ColumnHelper.SET_FILTER)
    .addColumn('LE Status', 'status', 100, ColumnHelper.SET_FILTER)
    .addColumn('LE Condition', 'condition', 100, ColumnHelper.SET_FILTER)
    .setFilterParams('condition', {values: [Conditions.Active, Conditions.Inactive]})
    .addColumn('IS Internal Entity', 'isInternalEntity', 100, ColumnHelper.SET_FILTER)
    .addColumn('LE Country', 'country.name', 100, ColumnHelper.SET_FILTER)
    .addColumn('LE Group', 'legalEntityGroup.description', 150, ColumnHelper.SET_FILTER);

  // hidden columns
  ch.addHiddenColumn('LEI', 'legalEntityIdentifier', 140, ColumnHelper.TEXT_FILTER)
    .addHiddenColumn('First Active Date', 'firstActiveDate', 140, ColumnHelper.DATE_FILTER)
    .addHiddenColumn('Last Active Date', 'lastActiveDate', 140, ColumnHelper.DATE_FILTER)
    .addHiddenColumn('Annual Fee Start', 'annualFeeStart', 140, ColumnHelper.DATE_FILTER)
    .addHiddenColumn('Annual Fee End', 'annualFeeEnd', 140, ColumnHelper.DATE_FILTER)
    .addHiddenColumn('ID', 'id', 140, ColumnHelper.NUMBER_FILTER)
    .addHiddenColumn('Name Full', 'nameFull', 140, ColumnHelper.TEXT_FILTER)
    .addHiddenColumn('Is LPS Entity', 'isLPSEntity', 100, ColumnHelper.SET_FILTER)
    .addHiddenColumn('Is Issuing Entity', 'isIssuingEntity', 100, ColumnHelper.SET_FILTER)
    .addHiddenColumn('Has Drop Copy Service', 'hasDropCopyService', 100, ColumnHelper.SET_FILTER);

  // boolean cell renderers
  ch.addCellRenderer('isLPSEntity', (params) => GridHelper.renderBooleanYesNull(params, 'isLPSEntity'));
  ch.addCellRenderer('isInternalEntity', (params) => GridHelper.renderBooleanYesNull(params, 'isInternalEntity'));
  ch.addCellRenderer('isIssuingEntity', (params) => GridHelper.renderBooleanYesNull(params, 'isIssuingEntity'));
  ch.addCellRenderer('hasDropCopyService', (params) => GridHelper.renderBooleanYesNull(params, 'hasDropCopyService'));
  ch.addCellRenderer('isSponsoringParticipant', (params) => GridHelper.renderBooleanYesNull(params, 'isSponsoringParticipant'));

  // set a tooltip field on all columns
  ch.colDefs.forEach(def => {
    def['tooltipField'] = 'legalEntityId';
  });

  // various cell renderers
  ch.addCellRenderer('tenant', (params) => {
    if (params.data.tenant) {
      return params.data.tenant.code + ' - ' + params.data.tenant.name;
    }
    return null;
  });

  ch.addCellRenderer('firstActiveDate', (params) => {
    if (params.data.firstActiveDate) {
      return DateUtils.convert(params.data.firstActiveDate, SettingsService.DisplayDateFormat);
    }

    return null;
  });
  ch.addCellRenderer('lastActiveDate', (params) => {
    if (params.data.lastActiveDate) {
      return DateUtils.convert(params.data.lastActiveDate, SettingsService.DisplayDateFormat);
    }

    return null;
  });
  ch.addCellRenderer('annualFeeStart', (params) => {
    if (params.data.annualFeeStart) {
      return DateUtils.convert(params.data.annualFeeStart, SettingsService.DisplayDateFormat);
    }

    return null;
  });
  ch.addCellRenderer('annualFeeEnd', (params) => {
    if (params.data.annualFeeEnd) {
      return DateUtils.convert(params.data.annualFeeEnd, SettingsService.DisplayDateFormat);
    }

    return null;
  });

  // make life easy by setting the cell sorter to be the same as the renderer
  ch.setCellSorterSameAsRenderer('firstActiveDate', false, true);
  ch.setCellSorterSameAsRenderer('lastActiveDate', false, true);
  ch.setCellSorterSameAsRenderer('annualFeeStart', false, true);
  ch.setCellSorterSameAsRenderer('annualFeeEnd', false, true);

  // apply CSS depending on grid cell values
  ch.getAllColumnIds().forEach(def => {
    ch.addCellClassRule(def, CSSGlobals.CSS_SUSPENDED_CELL, (params) => GridHelper.cssCheck(params, 'status', PartyStatusEnum.Suspended));
    ch.addCellClassRule(def, CSSGlobals.CSS_INACTIVE_CELL, (params) => GridHelper.cssCheck(params, 'condition', Conditions.Inactive));
    ch.addCellClassRule(def, CSSGlobals.CSS_TEST_ENVIRONMENT_CELL, (params) => GridHelper.cssCheck(params, 'environmentType', EnvironmentTypeEnum.Test));
    ch.addCellClassRule(def, CSSGlobals.CSS_STRING_SEARCH_MATCHED_CELL, (params) => InlineSearchableGridStore.hookCellCssRule(params, this.getGridId()));
  });

  // custom renderer & sorter
  ch.addCellRenderer('serviceProviderRoles', (params) => {
    return params.data.serviceProviderRoleLinkList.map(x => x.serviceProviderRole.code).join(', ');
  });
  ch.addCellSorter('serviceProviderRoles', (valueA, valueB, nodeA, nodeB, isInverted) => {
    if (nodeA && nodeB) {
      let realA = nodeA.data.serviceProviderRoleLinkList.map(x => x.serviceProviderRole.code).join(', ');
      let realB = nodeB.data.serviceProviderRoleLinkList.map(x => x.serviceProviderRole.code).join(', ');

      return realA.localeCompare(realB);
    } else {
      return valueA - valueB;
    }
  });

  // align some value cells to the right
  ch.alignAllNumberColumnsRight(['legalEntityId', 'id']);

  // tell the grid binding to use these columns
  this.colDefs = ch.getColumns();
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
    this.ɵfac = function ColumnHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ColumnHelperView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ColumnHelperView,
      selectors: [["ColumnHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/ag-grid/src/services/ColumnHelper.ts", "target", "_new"]],
      template: function ColumnHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ColumnHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " related helper, assists with the creation of columns. If you are using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "InlineSearch");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " feature, it will also help wrap your cell renderers with the correct code to display inline search.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "The goal of the ColumnHelper is to facilitate the setup of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " in a streamlined manner. It's easier to start with a \"Demo\". The example code is here a full setup of a rather complex table in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "CDR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ", which covers many of the features of the helper. Some features in this is also using the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "GridHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "This may seem like a long example, but it helps visualize that even though it's long, setting this up in a general non-helper way would be much, much longer and much harder to do and look at.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "For all available API, please check the content assist in your favorite IDE, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "raw code located here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
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

/***/ 289:
/*!*****************************************************************!*\
  !*** ./src/app/usecases/helpers/views/ContextMenuHelperView.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenuHelperView: () => (/* binding */ ContextMenuHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class ContextMenuHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.usageCode = `public gridOptions: GridOptions = <GridOptions> {
  ...
  getContextMenuItems: this.getContextMenuItems.bind(this)
  ...
}

getContextMenuItems(params: any): any {

  // works around a right click-doesn't select before showing context menu issue that I found in 2020 that is still not fixed
  GridHelper.fakeEventForRightClickUpdate(this.gridOptions, params);

  // hook into the toolbar. All our keys must match the ones used in the toolbar for the automatic enable/disable to work
  let c = new ContextMenuHelper(this.tb);

  // start building the context menu
  c.addMenuItem('Add Legal Entity...', 'add', () => this.addLegalEntity(), 'add.png')
    .addMenuItem('Edit Legal Entity...', 'edit', () => this.editLegalEntity(), 'edit.png');

  if (!environment.production) {
    c.addMenuItem('Delete Legal Entity...', 'delete', () => this.deleteLegalEntity(), 'special_delete.png');
  }

  c.addSeparator()
    .addMenuItem('Maintain Traders...', 'traders', () => this.openTradersWindow(), 'person.png')
    .addSeparator()
    .addMenuItem('Show/Unlink Registered Traders...', 'showRegTraders', () => this.openCreateRegisteredTradersWindow(), 'businessman.png')
    .addMenuItem('Link Unlinked Registered Traders...', 'linkRegTraders', () => this.openLinkExistingRegisteredTradersWindow(), 'businessmen.png')
    .addSeparator()
    .addMenuItem('Show Legal Entity Groups...', 'leGroups', () => this.openLegalEntityGroupsWindow(), 'index.png')
    .addSeparator()
    .addMenuItem('Find Legal Entity From FIX Connection...', 'findLe', () => this.findLegalEntityFromFixConnection(), 'bullseye.png')
    .addSeparator()
    .addCopy()
    .addSeparator()
    .addMenuItem('Legal Entity Report', 'leReport', () => this.showLegalEntityReport(), 'securities.png')
    .addSeparator()
    .addSubMenu('Change Status', 'ok_and_suspended.png')
    .addSubMenuItem('Change Status', 'OK', null, () => this.changeLegalEntityStatusTo(true), 'OK.png')
    .addSubMenuItem('Change Status', 'Suspended', null, () => this.changeLegalEntityStatusTo(false), 'No-entry.png');

  return c.getDefinitions();
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
    this.ɵfac = function ContextMenuHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContextMenuHelperView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContextMenuHelperView,
      selectors: [["ContextMenuHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/ag-grid/src/core/ContextMenuHelper.ts", "target", "_new"]],
      template: function ContextMenuHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ContextMenuHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " related helper, assists/simplifies setting up your context menus and at the same time hooking them in with any ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " implementation you may have.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "It's easier to show some real world usage to understand how it works. Do note that this example uses actual images rather than web fonts. It's of course fine to use both or either.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "For all available API, please check the content assist in your favorite IDE, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "raw code located here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
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

/***/ 3043:
/*!***********************************************************!*\
  !*** ./src/app/usecases/helpers/views/ErrorHelperView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHelperView: () => (/* binding */ ErrorHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);






class ErrorHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor(errorHelper) {
    super();
    this.errorHelper = errorHelper;
    this.depCode = `"dependencies": {
"sweetalert2": "11.6.13", // check latest version yourself
...`;
    this.exampleCode = `this.errorHelper.displayKnownError("Test Error", "This is a test error", "error", "Buttons can change");`;
    this.injectCode = `import {ErrorHelper} from "@six-group/base-angular-framework/core";

constructor(private errorHelper: ErrorHelper) {`;
    this.injTokenCode = `providers: [
{
  provide: ERROR_OVERRIDE_HANDLER,
  useClass: YourImplementationOfIErrorOverrideHandler
},
...`;
  }
  testError() {
    this.errorHelper.displayKnownError("Test Error", "This is a test error", "error", "Buttons can change");
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
    this.ɵfac = function ErrorHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ErrorHelperView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHelper));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ErrorHelperView,
      selectors: [["ErrorHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 77,
      vars: 4,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["href", "https://sweetalert2.github.io/", "target", "_new"], ["language", "json", 3, "highlight"], ["pButton", "", "pRipple", "", 3, "click"], ["language", "ts", 3, "highlight"]],
      template: function ErrorHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ErrorHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " assists with the displaying of error messages. At the core, it uses ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "SweetAlert2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " (more details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "), which is a required dependency.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "code", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "The error parsing code of the class has a lot of checks for thing such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "GraphQL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " errors, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "validation errors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " and others already built in. Should these not fit your implementation, see the section below called ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Overriding all error parsing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 2)(30, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorHelperView_Template_button_click_30_listener() {
            return ctx.testError();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Test Error Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Usage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "As ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "ErrorHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " is a service, inject it in your constructor as follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Then simply call it via the available API. Here's an example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Known vs. Unknown Errors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "There's two APIs available. One is called ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "displayError(...)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " and the other ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "displayKnownError(...)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ". The difference is that you are saying \"I know what error I want to display\", whereas the other is more intended for a try/catch scenario where you do not know what the error may be.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Overriding all error parsing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "If you provide an implementation of the interface ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "IErrorOverrideHandler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " and inject it with injection token ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "ERROR_OVERRIDE_HANDLER");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ", you can override all error handling.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "code", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "See also");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 2)(71, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "DialogUtilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " has dialogs that also use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "SweetAlert2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " but are more for questions and information rather than errors.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.depCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.injectCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.exampleCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.injTokenCode);
        }
      },
      dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 143:
/*!**********************************************************!*\
  !*** ./src/app/usecases/helpers/views/GridHelperView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridHelperView: () => (/* binding */ GridHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class GridHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.usageCode = ``;
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
    this.ɵfac = function GridHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GridHelperView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GridHelperView,
      selectors: [["GridHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 19,
      vars: 0,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/ag-grid/src/services/GridHelper.ts", "target", "_new"]],
      template: function GridHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "GridHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " related helper, assists/simplifies certain aspects of using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "For all available API, please check the content assist in your favorite IDE, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "raw code located here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 834:
/*!*****************************************************************!*\
  !*** ./src/app/usecases/helpers/views/GridToolbarHelperView.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridToolbarHelperView: () => (/* binding */ GridToolbarHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class GridToolbarHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.usageCode = `let gth = new GridToolbarHelper(this.tb);
// column filters
gth.appendFilterButton('filter', this.grid, () => this.setDefaultGridFilters(true))
.addSeparator()
// inline search buttons
gth.addInlineSearchButtons(this.getGridId(), this.grid, (gid) => this.showSearch(gid), (gid) => this.clearSearch(gid))
.addSeparator()
// column save/restore buttons
.appendTableColumnSave(this.getGridId(), this.grid, this.store)
.addSeparator()
// show/hide sidepanel buttons
.appendShowHideSidePanel(this.grid)
.addSeparator()
// excel export buttons
.addExcelExport(this.grid, this.getGridId());`;
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
    this.ɵfac = function GridToolbarHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GridToolbarHelperView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GridToolbarHelperView,
      selectors: [["GridToolbarHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 30,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/ag-grid/src/util/GridToolbarHelper.ts", "target", "_new"]],
      template: function GridToolbarHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "GridToolbarHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " related helper, assists with the creation of buttons and items for the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " together with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "For more general details please see the section about the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "ToolbarHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " as they are very similar and the demo there also shows usage of this class.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "For all available API, please check the content assist in your favorite IDE, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "raw code located here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
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

/***/ 35629:
/*!**********************************************************!*\
  !*** ./src/app/usecases/helpers/views/ModalUtilsView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalUtilsView: () => (/* binding */ ModalUtilsView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _forms_SampleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms/SampleForm */ 7277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 72916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ 57725);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 30078);









function ModalUtilsView_tr_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "td")(10, "td")(11, "td")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class ModalUtilsView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_2__.BaseView {
  constructor(modalService, errorHelper) {
    super();
    this.modalService = modalService;
    this.errorHelper = errorHelper;
    this.rawDialogTypescriptCode = `@Component({
  selector: 'SampleForm',
  templateUrl: './SampleForm.html',
  styleUrl: './SampleForm.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleForm extends BaseForm {

  @Input() title: string = "Please set a title";

...
`;
    this.openDialogCode = `this.modalUtils.openDialog<SampleForm>(this.modalService, SampleForm, (dialog) => {
    dialog.title = "Add a new entry";
}, DialogModes.ADD, "someCssClassForTheDialog someOtherClass", false).then((result) => {
  if (result) {
    console.log("Dialog closed with result", result);
  }
  else {
    console.log("Dialog was cancelled");
  }
}).catch(err => {
  this.errorHelper.displayError(err);
});`;
    this.closeWithCancelCode = `this.activeModal.dismiss();`;
    this.closeWithResultCode = `this.activeModal.close(resultObject);`;
    this.injectModalCode = `constructor(public activeModal: NgbActiveModal) {`;
    this.rawDialogCode = `<div class="modal-header">
  <h4 class="modal-title">{{ title }}</h4>
  <button type="button" class="close" aria-label="Close" data-dismiss="modal" (click)="activeModal.dismiss()">
    <span aria-hidden>&times;</span>
  </button>
</div>
<div class="modal-body">
  <div class="outerFormContainer">
    <!-- this is the content area -->
  </div>
</div>
<div class="modal-footer">
  <button pButton pRipple type="submit" label="Submit" class="p-button-success p-button-raised search-button" icon="pi pi-search" iconPos="left"></button>
  <button pButton pRipple type="button" label="Cancel" class="p-button-danger p-button-raised search-button" icon="pi pi-search" iconPos="left" (click)="activeModal.dismiss()"></button>
</div>
<!-- this section is optional, it just shows the dialogErrors from the BaseForm, assuming there are any -->
<div class="alert alert-danger" *ngIf="dialogErrors.length > 0" style="margin: 5px">
  <strong>ERROR!</strong>
  <br/>
  <div *ngFor="let error of dialogErrors">{{ error }}</div>
</div>
`;
    this.reqCode = `"dependencies": {
  "@ng-bootstrap/ng-bootstrap": "14.0.1",
  "sweetalert2": "11.6.13",
  "jquery-ui": "1.14.1", // for resizable, you can also include it any other way and you may need to link it in angular.json
  ...
  `;
    this.injectCode = `import {ModalUtils} from "@six-group/base-angular-framework/core";

constructor(private modalUtils: ModalUtils) {`;
    this.tableData = [{
      name: "openDialog",
      description: "Opens an angular class (such as BaseForm) as its content"
    }, {
      name: "showConfirmDialog",
      description: "Shows a confirmation dialog where a user has to decide between two options"
    }, {
      name: "showDeleteDialog",
      description: "Shows a delete dialog intended to be used to warn before deletion of something"
    }, {
      name: "showHtmlDialog",
      description: "Shows a HTML dialog where you can set custom HTML as content"
    }, {
      name: "showSuccessDialog",
      description: "Shows a success dialog"
    }, {
      name: "showSuccessDialogPromise",
      description: "Shows a success dialog that returns a Promise that fires when the dialog is closed"
    }, {
      name: "showWarningDialog",
      description: "Shows a warning dialog"
    }, {
      name: "showWarningDialogPromise",
      description: "Shows a warning dialog that returns a Promise that fires when the dialog is closed"
    }, {
      name: "showTimerDialog",
      description: "Shows a timer dialog that will automatically closed after a specified number of milliseconds"
    }, {
      name: "initStackedModalSupport",
      description: "(Automatic if using BaseForm) - Initializes stacked modal support where the dialog will collapse sideways behind it if multiple are opened"
    }, {
      name: "removeStackedModalSupport",
      description: "(Automatic if using BaseForm) - Removes the above stacked modal support"
    }, {
      name: "updateStack",
      description: "(Automatic if using BaseForm) - Updates the stack to check if multiple dialogs are open and if so, collapses them sideways"
    }];
  }
  test() {
    this.modalUtils.showSuccessDialog("Success!", "You did it!");
  }
  testDialog() {
    this.modalUtils.openDialog(this.modalService, _forms_SampleForm__WEBPACK_IMPORTED_MODULE_0__.SampleForm, dialog => {
      dialog.title = "Sample Dialog Title";
    }, _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_2__.DialogModes.ADD, "", false).then(result => {
      if (result) {
        console.log("Dialog closed with result", result);
      } else {
        console.log("Dialog was cancelled");
      }
    }).catch(err => {
      this.errorHelper.displayError(err);
    });
  }
  testConfirm() {
    this.modalUtils.showConfirmDialog("Do you like coffee?", "Yes, love it!", "Coffee Survey", "question", true, "No thanks!").then(result => {
      this.modalUtils.showTimerDialog("Coffee Survey", "You said you " + (result === true ? "love coffee, yum!" : "can't stand it, yuck!"), result === true ? "success" : "error", 1500);
    });
  }
  delete() {
    this.modalUtils.showDeleteDialog("Are you sure you want to delete this item?", "Yes, delete it!", "Delete", "warning", true, "No, keep it!").then(result => {
      this.modalUtils.showTimerDialog("File Deletion", "You said you " + (result === true ? "get rid of it!" : "keep it forever!"), result === true ? "success" : "error", 1500);
    });
  }
  html() {
    this.modalUtils.showHtmlDialog("HTML Dialog", "<span style='color: orange'>Here is some <b>HTML</b> content!</span>", "info", "Get me out of here", "I'm a footer");
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
    this.ɵfac = function ModalUtilsView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalUtilsView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHelper));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ModalUtilsView,
      selectors: [["ModalUtilsView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 156,
      vars: 10,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://ng-bootstrap.github.io/#/home", "target", "_new"], ["href", "https://jqueryui.com/resizable/", "target", "_new"], ["pButton", "", "pRipple", "", 3, "click"], ["pButton", "", "pRipple", "", 2, "margin-left", "8px", 3, "click"], ["language", "html", 3, "highlight"], ["href", "/assets/modalStyle.zip"], [1, "doc-table"], [4, "ngFor", "ngForOf"], ["id", "api.menu.props.model", 1, "doc-option-name"], [1, "doc-option-link"], [1, "pi", "pi-link"], ["id", "api.menu.props.description", 1, "doc-option-description"]],
      template: function ModalUtilsView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ModalUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This service assists with opening ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "modal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " dialogs that contain some sort of view or simply displays information or warning messages to the user. You either inject it yourself, or if you're using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BaseView");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " it is already injected for you and you can access it via ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "super.modalUtils");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ". To inject yourself:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Requirements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Regular dialogs require ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 4)(22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ng-bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " and the smaller dialogs require ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "SweetAlert2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ". If you want resizable dialogs you also need to include ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 5)(29, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "jQuery resizable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, ". Please ensure each library is set up correctly in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "angular.json");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " per the instructions of them.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Demo of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "openDialog()");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 2)(42, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalUtilsView_Template_button_click_42_listener() {
            return ctx.testDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Test Regular Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Demo of Various Options");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 2)(47, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalUtilsView_Template_button_click_47_listener() {
            return ctx.test();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Test Success Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalUtilsView_Template_button_click_49_listener() {
            return ctx.testConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Test Question Dialog (And Timer Dialog)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalUtilsView_Template_button_click_51_listener() {
            return ctx.delete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Test Delete Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalUtilsView_Template_button_click_53_listener() {
            return ctx.html();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Test HTML Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Usage of openDialog()");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "HTML Framework");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "First, you need to create a class that will represent the entire content of your dialog, this includes header, content, footer, etc. Here is a base HTML framework for that:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "code", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Typescript part");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Your class can be anything. In this example we extend ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "BaseForm");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " and define a title as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "@input()");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " that will be defined before we open the dialog:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Opening the dialog and passing data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "To open the dialog with the class that makes up the content we finally call the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "openDialog(...)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " API:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Dialog Modes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "To help facilitate what \"state\" the dialog is in, the enum ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "DialogModes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " provides a set of the most commonly used scenarios:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 2)(93, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "ADD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "EDIT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "REPARENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "COPY");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "VIEW");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Accessing the active dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "This actually comes from ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "ng-bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, ". Injecting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "NgbActiveModal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, ", you have access to the dialog itself:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "We will use that to send any result back to the parent class that opened it, or to tell the modal that it needs to cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Cancel Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Close Dialog With Result");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Usage of Basic API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "General usage is as follows:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Styling");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "By default the only styling is the bootstrap styling. If you wish more SIX-like styling that you see in the demo above, you can use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "this as your base");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Dialog API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "table", 10)(144, "thead")(145, "tr")(146, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "th")(151, "th")(152, "th")(153, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, ModalUtilsView_tr_155_Template, 13, 2, "tr", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.injectCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.reqCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.rawDialogCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.rawDialogTypescriptCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.openDialogCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.injectModalCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.closeWithCancelCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.closeWithResultCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "this.modalUtils.apiCall(...)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__.Highlight, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 166:
/*!***********************************************************!*\
  !*** ./src/app/usecases/helpers/views/RegexHelperView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegexHelperView: () => (/* binding */ RegexHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class RegexHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.usageCode = `/**
 * Contains pre-created regular expressions for common checks of things (especially in Angular forms)
 */
export class RegexHelper {
  /**
   * Can contain digits or be empty
   */
  public static readonly DigitsOrBlankRegex = new RegExp(/^(\\s*|\\d+)$/);
  /**
   * Can contain digits, but not a zero, or be empty
   */
  public static readonly DigitsButNotZeroOrBlankRegex = new RegExp(/^(\\s*|[1-9]\\d*)$/);
  /**
   * Must contain digits, can't be empty
   */
  public static readonly DigitsButNotBlankRegex = new RegExp(/^(\\s*|[0-9]\\d*)$/);
  /**
   * Can contain digits, or be zero, or be empty
   */
  public static readonly DigitsIncludingZeroOrBlankRegex = new RegExp(/^(\\s*|[0-9]\\d*)$/);
  /**
   * Can be floating point or empty
   */
  public static readonly FloatingDigitsOrBlankRegex = new RegExp(/^(\\s*|(\\d*\\.)?\\d+)$/);
  /**
   * HH:MM:SS or HH:MM
   */
  public static readonly TimeSpanRegex = new RegExp(/^(\\d{2}:\\d{2}:\\d{2}|\\d{2}:\\d{2})$/);
  /**
   * Email address or empty - based on http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
   */
  public static readonly EmailOrBlankRegex = new RegExp(/^(\\s*|(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,}))$/i);
  /**
   * IP Address
   */
  public static readonly IpAddress = new RegExp(/^(([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|0\\.0\\.0\\.0)$/);
  /**
   * MAC Address
   */
  public static readonly MacAddress = new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);
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
    this.ɵfac = function RegexHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegexHelperView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegexHelperView,
      selectors: [["RegexHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 15,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"]],
      template: function RegexHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "RegexHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This class simply contains a few very commonly used regular expressions for ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "form validation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " and other scenarios.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "All Regular Expressions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "This is a copy of the raw code, as it has good explanations of each one in the API comment.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
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

/***/ 326:
/*!*************************************************************!*\
  !*** ./src/app/usecases/helpers/views/ToolbarHelperView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarHelperView: () => (/* binding */ ToolbarHelperView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 57725);



class ToolbarHelperView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseView {
  constructor() {
    super();
    this.usageCode = `// this is called from ngAfterViewInit()
initToolbar(): void {
  this.tb = new ToolbarHelper(this.toolBar);

  this.tb.addMany(['add', 'edit'], ['Add Legal Entity', 'Edit Legal Entity']);

  if (!environment.production) {
    this.tb.addButton('delete', 'Delete Legal Entity (You are in Test Mode)', 'special_delete.png', 'special_delete_disabled.png');
  }

  this.tb.addSeparator()
    .addButton('traders', 'Maintain Traders', 'person.png', 'person_disabled.png')
    .addSeparator()
    .addManyWithImages(['showRegTraders', 'linkRegTraders'], ['Show/Unlink Registered Traders', 'Link Unlinked Registered Traders'], ['businessman.png', 'businessmen.png'], ['businessman_disabled.png', 'businessmen_disabled.png'])
    .addSeparator()
    .addButton('leGroups', 'Show Legal Entity Groups', 'index.png', 'index.png')
    .addSeparator()
    .addInlineSearchButtons(this.getGridId(), this.store, this)
    .addButton('findLe', 'Find Legal Entity From FIX Connection', 'bullseye.png', 'bullseye_disabled.png')
    .addSeparator()
    .addButton('leReport', 'Legal Entity Report', 'securities.png', 'securities_disabled.png')
    .addSeparator();

  // this part deals with grid functions
  let gth = new GridToolbarHelper(this.tb);
    gth.appendFilterButton('filter', this.grid, () => this.setDefaultGridFilters(true))
    .addSeparator()
    .appendTableColumnSave(this.getGridId(), this.grid, this.store)
    .addSeparator()
    .appendShowHideSidePanel(this.grid)
    .addSeparator()
    .addExcelExport(this.grid, this.getGridId());

  // by default these are disabled, grid clicks etc will update them to new states
  this.tb.disableItems('edit', 'leReport', 'showRegTraders', 'linkRegTraders');

  // listen to clicks
  this.tb.onClick.subscribe((id) => {
    switch (id) {
      case 'add':
        this.addLegalEntity();
        return;
      case 'edit':
        this.editLegalEntity();
        return;
      case 'delete':
        this.deleteLegalEntity();
        break;
      case 'leReport':
        this.showLegalEntityReport();
        break;
      case 'showRegTraders':
        this.openCreateRegisteredTradersWindow();
        break;
      case 'leGroups':
        this.openLegalEntityGroupsWindow();
        break;
      case 'linkRegTraders':
        this.openLinkExistingRegisteredTradersWindow();
        break;
      case 'findLe':
        this.findLegalEntityFromFixConnection();
        break;
      case 'filter':
        break;
      case 'traders':
        this.openTradersWindow();
        break;
    }
  });

  // ensures it's disposed of when control is destroyed
  super.trackToolbar(this.toolBar);
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
    this.ɵfac = function ToolbarHelperView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarHelperView)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToolbarHelperView,
      selectors: [["ToolbarHelperView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 43,
      vars: 1,
      consts: [[1, "documentParent"], [1, "document"], [1, "description"], ["language", "ts", 3, "highlight"], ["href", "https://gitlab.six-group.net/six/angbase/root/base/-/blob/main/src/app/components/controls/src/utils/ToolbarHelper.ts", "target", "_new"]],
      template: function ToolbarHelperView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ToolbarHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " related helper, assists with the creation of buttons and items for the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "The goal of the ToolbarHelper is to facilitate the setup of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " in a streamlined manner. It's easier to start with a \"Demo\". The example code is here a full setup of a rather complex table in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "CDR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ", which covers many of the features of the helper. This example uses images, but you can of course use web fonts or images both or separately.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Please take note of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "GridToolbarHelper");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " helper that deals with toolbar functions related to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ". They are in a separate class so that dependencies are kept separate in case ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "AgGrid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " is not in use.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "code", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "This may seem like a long example, but it helps visualize that even though it's long, setting this up in a general non-helper way would be much, much longer and much harder to do and look at.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "For all available API, please check the content assist in your favorite IDE, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "raw code located here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
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

/***/ 63617:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 23222);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 82645);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 59400);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 95429);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}

/***/ }),

/***/ 79439:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEVER: () => (/* binding */ NEVER),
/* harmony export */   never: () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 43942);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 54318);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
  return NEVER;
}

/***/ }),

/***/ 91817:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 1440);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

/***/ }),

/***/ 47470:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skip: () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 51567);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}

/***/ }),

/***/ 72916:
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalDismissReasons: () => (/* binding */ ModalDismissReasons),
/* harmony export */   NgbAccordion: () => (/* binding */ NgbAccordion),
/* harmony export */   NgbAccordionConfig: () => (/* binding */ NgbAccordionConfig),
/* harmony export */   NgbAccordionModule: () => (/* binding */ NgbAccordionModule),
/* harmony export */   NgbActiveModal: () => (/* binding */ NgbActiveModal),
/* harmony export */   NgbActiveOffcanvas: () => (/* binding */ NgbActiveOffcanvas),
/* harmony export */   NgbAlert: () => (/* binding */ NgbAlert),
/* harmony export */   NgbAlertConfig: () => (/* binding */ NgbAlertConfig),
/* harmony export */   NgbAlertModule: () => (/* binding */ NgbAlertModule),
/* harmony export */   NgbCalendar: () => (/* binding */ NgbCalendar),
/* harmony export */   NgbCalendarBuddhist: () => (/* binding */ NgbCalendarBuddhist),
/* harmony export */   NgbCalendarGregorian: () => (/* binding */ NgbCalendarGregorian),
/* harmony export */   NgbCalendarHebrew: () => (/* binding */ NgbCalendarHebrew),
/* harmony export */   NgbCalendarIslamicCivil: () => (/* binding */ NgbCalendarIslamicCivil),
/* harmony export */   NgbCalendarIslamicUmalqura: () => (/* binding */ NgbCalendarIslamicUmalqura),
/* harmony export */   NgbCalendarPersian: () => (/* binding */ NgbCalendarPersian),
/* harmony export */   NgbCarousel: () => (/* binding */ NgbCarousel),
/* harmony export */   NgbCarouselConfig: () => (/* binding */ NgbCarouselConfig),
/* harmony export */   NgbCarouselModule: () => (/* binding */ NgbCarouselModule),
/* harmony export */   NgbCollapse: () => (/* binding */ NgbCollapse),
/* harmony export */   NgbCollapseConfig: () => (/* binding */ NgbCollapseConfig),
/* harmony export */   NgbCollapseModule: () => (/* binding */ NgbCollapseModule),
/* harmony export */   NgbConfig: () => (/* binding */ NgbConfig),
/* harmony export */   NgbDate: () => (/* binding */ NgbDate),
/* harmony export */   NgbDateAdapter: () => (/* binding */ NgbDateAdapter),
/* harmony export */   NgbDateNativeAdapter: () => (/* binding */ NgbDateNativeAdapter),
/* harmony export */   NgbDateNativeUTCAdapter: () => (/* binding */ NgbDateNativeUTCAdapter),
/* harmony export */   NgbDateParserFormatter: () => (/* binding */ NgbDateParserFormatter),
/* harmony export */   NgbDateStructAdapter: () => (/* binding */ NgbDateStructAdapter),
/* harmony export */   NgbDatepicker: () => (/* binding */ NgbDatepicker),
/* harmony export */   NgbDatepickerConfig: () => (/* binding */ NgbDatepickerConfig),
/* harmony export */   NgbDatepickerContent: () => (/* binding */ NgbDatepickerContent),
/* harmony export */   NgbDatepickerI18n: () => (/* binding */ NgbDatepickerI18n),
/* harmony export */   NgbDatepickerI18nDefault: () => (/* binding */ NgbDatepickerI18nDefault),
/* harmony export */   NgbDatepickerI18nHebrew: () => (/* binding */ NgbDatepickerI18nHebrew),
/* harmony export */   NgbDatepickerKeyboardService: () => (/* binding */ NgbDatepickerKeyboardService),
/* harmony export */   NgbDatepickerModule: () => (/* binding */ NgbDatepickerModule),
/* harmony export */   NgbDatepickerMonth: () => (/* binding */ NgbDatepickerMonth),
/* harmony export */   NgbDropdown: () => (/* binding */ NgbDropdown),
/* harmony export */   NgbDropdownAnchor: () => (/* binding */ NgbDropdownAnchor),
/* harmony export */   NgbDropdownConfig: () => (/* binding */ NgbDropdownConfig),
/* harmony export */   NgbDropdownItem: () => (/* binding */ NgbDropdownItem),
/* harmony export */   NgbDropdownMenu: () => (/* binding */ NgbDropdownMenu),
/* harmony export */   NgbDropdownModule: () => (/* binding */ NgbDropdownModule),
/* harmony export */   NgbDropdownToggle: () => (/* binding */ NgbDropdownToggle),
/* harmony export */   NgbHighlight: () => (/* binding */ NgbHighlight),
/* harmony export */   NgbInputDatepicker: () => (/* binding */ NgbInputDatepicker),
/* harmony export */   NgbInputDatepickerConfig: () => (/* binding */ NgbInputDatepickerConfig),
/* harmony export */   NgbModal: () => (/* binding */ NgbModal),
/* harmony export */   NgbModalConfig: () => (/* binding */ NgbModalConfig),
/* harmony export */   NgbModalModule: () => (/* binding */ NgbModalModule),
/* harmony export */   NgbModalRef: () => (/* binding */ NgbModalRef),
/* harmony export */   NgbModule: () => (/* binding */ NgbModule),
/* harmony export */   NgbNav: () => (/* binding */ NgbNav),
/* harmony export */   NgbNavConfig: () => (/* binding */ NgbNavConfig),
/* harmony export */   NgbNavContent: () => (/* binding */ NgbNavContent),
/* harmony export */   NgbNavItem: () => (/* binding */ NgbNavItem),
/* harmony export */   NgbNavLink: () => (/* binding */ NgbNavLink),
/* harmony export */   NgbNavModule: () => (/* binding */ NgbNavModule),
/* harmony export */   NgbNavOutlet: () => (/* binding */ NgbNavOutlet),
/* harmony export */   NgbNavPane: () => (/* binding */ NgbNavPane),
/* harmony export */   NgbNavbar: () => (/* binding */ NgbNavbar),
/* harmony export */   NgbOffcanvas: () => (/* binding */ NgbOffcanvas),
/* harmony export */   NgbOffcanvasConfig: () => (/* binding */ NgbOffcanvasConfig),
/* harmony export */   NgbOffcanvasModule: () => (/* binding */ NgbOffcanvasModule),
/* harmony export */   NgbOffcanvasRef: () => (/* binding */ NgbOffcanvasRef),
/* harmony export */   NgbPagination: () => (/* binding */ NgbPagination),
/* harmony export */   NgbPaginationConfig: () => (/* binding */ NgbPaginationConfig),
/* harmony export */   NgbPaginationEllipsis: () => (/* binding */ NgbPaginationEllipsis),
/* harmony export */   NgbPaginationFirst: () => (/* binding */ NgbPaginationFirst),
/* harmony export */   NgbPaginationLast: () => (/* binding */ NgbPaginationLast),
/* harmony export */   NgbPaginationModule: () => (/* binding */ NgbPaginationModule),
/* harmony export */   NgbPaginationNext: () => (/* binding */ NgbPaginationNext),
/* harmony export */   NgbPaginationNumber: () => (/* binding */ NgbPaginationNumber),
/* harmony export */   NgbPaginationPages: () => (/* binding */ NgbPaginationPages),
/* harmony export */   NgbPaginationPrevious: () => (/* binding */ NgbPaginationPrevious),
/* harmony export */   NgbPanel: () => (/* binding */ NgbPanel),
/* harmony export */   NgbPanelContent: () => (/* binding */ NgbPanelContent),
/* harmony export */   NgbPanelHeader: () => (/* binding */ NgbPanelHeader),
/* harmony export */   NgbPanelTitle: () => (/* binding */ NgbPanelTitle),
/* harmony export */   NgbPanelToggle: () => (/* binding */ NgbPanelToggle),
/* harmony export */   NgbPopover: () => (/* binding */ NgbPopover),
/* harmony export */   NgbPopoverConfig: () => (/* binding */ NgbPopoverConfig),
/* harmony export */   NgbPopoverModule: () => (/* binding */ NgbPopoverModule),
/* harmony export */   NgbProgressbar: () => (/* binding */ NgbProgressbar),
/* harmony export */   NgbProgressbarConfig: () => (/* binding */ NgbProgressbarConfig),
/* harmony export */   NgbProgressbarModule: () => (/* binding */ NgbProgressbarModule),
/* harmony export */   NgbRating: () => (/* binding */ NgbRating),
/* harmony export */   NgbRatingConfig: () => (/* binding */ NgbRatingConfig),
/* harmony export */   NgbRatingModule: () => (/* binding */ NgbRatingModule),
/* harmony export */   NgbSlide: () => (/* binding */ NgbSlide),
/* harmony export */   NgbSlideEventDirection: () => (/* binding */ NgbSlideEventDirection),
/* harmony export */   NgbSlideEventSource: () => (/* binding */ NgbSlideEventSource),
/* harmony export */   NgbTimeAdapter: () => (/* binding */ NgbTimeAdapter),
/* harmony export */   NgbTimepicker: () => (/* binding */ NgbTimepicker),
/* harmony export */   NgbTimepickerConfig: () => (/* binding */ NgbTimepickerConfig),
/* harmony export */   NgbTimepickerI18n: () => (/* binding */ NgbTimepickerI18n),
/* harmony export */   NgbTimepickerModule: () => (/* binding */ NgbTimepickerModule),
/* harmony export */   NgbToast: () => (/* binding */ NgbToast),
/* harmony export */   NgbToastConfig: () => (/* binding */ NgbToastConfig),
/* harmony export */   NgbToastHeader: () => (/* binding */ NgbToastHeader),
/* harmony export */   NgbToastModule: () => (/* binding */ NgbToastModule),
/* harmony export */   NgbTooltip: () => (/* binding */ NgbTooltip),
/* harmony export */   NgbTooltipConfig: () => (/* binding */ NgbTooltipConfig),
/* harmony export */   NgbTooltipModule: () => (/* binding */ NgbTooltipModule),
/* harmony export */   NgbTypeahead: () => (/* binding */ NgbTypeahead),
/* harmony export */   NgbTypeaheadConfig: () => (/* binding */ NgbTypeaheadConfig),
/* harmony export */   NgbTypeaheadModule: () => (/* binding */ NgbTypeaheadModule),
/* harmony export */   OffcanvasDismissReasons: () => (/* binding */ OffcanvasDismissReasons)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 59400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 66096);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 79439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 50774);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 12576);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 15842);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 95074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 47470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 71870);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @popperjs/core */ 94970);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @popperjs/core */ 77437);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @popperjs/core */ 87348);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @popperjs/core */ 65125);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @popperjs/core */ 30142);







const _c0 = (a0, a1) => ({
  $implicit: a0,
  opened: a1
});
function NgbAccordion_ng_template_0_ng_template_2_Template(rf, ctx) {}
function NgbAccordion_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPanelToggle", panel_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", panel_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", panel_r1.titleTpl == null ? null : panel_r1.titleTpl.templateRef);
  }
}
function NgbAccordion_ng_template_2_ng_template_2_Template(rf, ctx) {}
function NgbAccordion_ng_template_2_div_3_ng_template_2_Template(rf, ctx) {}
function NgbAccordion_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbRef", function NgbAccordion_ng_template_2_div_3_Template_div_ngbRef_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const panel_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](panel_r3.panelDiv = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_div_3_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const panel_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", panel_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", panel_r3.id + "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (panel_r3.contentTpl == null ? null : panel_r3.contentTpl.templateRef) || null);
  }
}
function NgbAccordion_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbAccordion_ng_template_2_div_3_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const t_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("accordion-item " + (panel_r3.cardClass || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("accordion-header " + (panel_r3.type ? "bg-" + panel_r3.type : ctx_r3.type ? "bg-" + ctx_r3.type : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", panel_r3.id, "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (panel_r3.headerTpl == null ? null : panel_r3.headerTpl.templateRef) || t_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, panel_r3, panel_r3.isOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.destroyOnHide || panel_r3.isOpen || panel_r3.transitionRunning);
  }
}
const _c1 = ["*"];
function NgbAlert_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbAlert_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbCarousel_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbCarousel_button_1_Template_button_click_0_listener() {
      const slide_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r2.focus();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.select(slide_r2.id, ctx_r2.NgbSlideEventSource.INDICATOR));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r2.id === ctx_r2.activeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "slide-" + slide_r2.id)("aria-controls", "slide-" + slide_r2.id)("aria-selected", slide_r2.id === ctx_r2.activeId);
  }
}
function NgbCarousel_div_3_ng_template_3_Template(rf, ctx) {}
function NgbCarousel_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbCarousel_div_3_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const c_r6 = ctx.count;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "slide-" + slide_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](i_r5 + 1)(c_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", slide_r4.tplRef);
  }
}
function NgbCarousel_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbCarousel_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.arrowLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NgbCarousel_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbCarousel_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.arrowRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
const _c2 = ["ngbDatepickerDayView", ""];
const _c3 = ["month"];
const _c4 = ["year"];
function NgbDatepickerNavigationSelect_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.i18n.getMonthFullName(m_r2, ctx_r2.date.year));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.i18n.getMonthShortName(m_r2, ctx_r2.date.year));
  }
}
function NgbDatepickerNavigationSelect_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.i18n.getYearNumerals(y_r4));
  }
}
function NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-datepicker-navigation-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template_ngb_datepicker_navigation_select_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.select.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r1.date)("disabled", ctx_r1.disabled)("months", ctx_r1.selectBoxes.months)("years", ctx_r1.selectBoxes.years);
  }
}
function NgbDatepickerNavigation_4_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
  }
}
function NgbDatepickerNavigation_4_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
  }
}
function NgbDatepickerNavigation_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerNavigation_4_ng_template_0_div_0_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbDatepickerNavigation_4_ng_template_0_div_3_Template, 1, 0, "div", 9);
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.i18n.getMonthLabel(month_r3.firstDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 !== ctx_r1.months.length - 1);
  }
}
function NgbDatepickerNavigation_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerNavigation_4_ng_template_0_Template, 4, 3, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.months);
  }
}
function NgbDatepickerMonth_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.i18n.getWeekLabel());
  }
}
function NgbDatepickerMonth_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const weekday_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekday_r2);
  }
}
function NgbDatepickerMonth_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_div_0_div_1_Template, 2, 1, "div", 3)(2, NgbDatepickerMonth_div_0_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datepicker.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.viewModel.weekdays);
  }
}
function NgbDatepickerMonth_ng_template_1_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const week_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.i18n.getWeekNumerals(week_r3.number));
  }
}
function NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template(rf, ctx) {}
function NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.datepicker.dayTemplate)("ngTemplateOutletContext", day_r5.context);
  }
}
function NgbDatepickerMonth_ng_template_1_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDatepickerMonth_ng_template_1_div_0_div_2_Template_div_click_0_listener($event) {
      const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      ctx_r0.doSelect(day_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_Template, 1, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", day_r5.context.disabled)("hidden", day_r5.hidden)("ngb-dp-today", day_r5.context.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", day_r5.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", day_r5.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !day_r5.hidden);
  }
}
function NgbDatepickerMonth_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_ng_template_1_div_0_div_1_Template, 2, 1, "div", 9)(2, NgbDatepickerMonth_ng_template_1_div_0_div_2_Template, 2, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const week_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datepicker.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r3.days);
  }
}
function NgbDatepickerMonth_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerMonth_ng_template_1_div_0_Template, 3, 2, "div", 7);
  }
  if (rf & 2) {
    const week_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !week_r3.collapsed);
  }
}
const _c5 = ["defaultDayTemplate"];
const _c6 = ["content"];
function NgbDatepicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
  }
  if (rf & 2) {
    const date_r1 = ctx.date;
    const currentMonth_r2 = ctx.currentMonth;
    const selected_r3 = ctx.selected;
    const disabled_r4 = ctx.disabled;
    const focused_r5 = ctx.focused;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", date_r1)("currentMonth", currentMonth_r2)("selected", selected_r3)("disabled", disabled_r4)("focused", focused_r5);
  }
}
function NgbDatepicker_ng_template_2_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.i18n.getMonthLabel(month_r6.firstDate), " ");
  }
}
function NgbDatepicker_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepicker_ng_template_2_div_0_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-datepicker-month", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.navigation === "none" || ctx_r6.displayMonths > 1 && ctx_r6.navigation === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("month", month_r6.firstDate);
  }
}
function NgbDatepicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepicker_ng_template_2_div_0_Template, 3, 2, "div", 8);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.model.months);
  }
}
function NgbDatepicker_ngb_datepicker_navigation_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-datepicker-navigation", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("navigate", function NgbDatepicker_ngb_datepicker_navigation_5_Template_ngb_datepicker_navigation_navigate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onNavigateEvent($event));
    })("select", function NgbDatepicker_ngb_datepicker_navigation_5_Template_ngb_datepicker_navigation_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onNavigateDateSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r6.model.firstDate)("months", ctx_r6.model.months)("disabled", ctx_r6.model.disabled)("showSelect", ctx_r6.model.navigation === "select")("prevDisabled", ctx_r6.model.prevDisabled)("nextDisabled", ctx_r6.model.nextDisabled)("selectBoxes", ctx_r6.model.selectBoxes);
  }
}
function NgbDatepicker_ng_template_8_Template(rf, ctx) {}
function NgbDatepicker_ng_template_9_Template(rf, ctx) {}
const _c7 = ["dialog"];
const _c8 = ["ngbNavOutlet", ""];
const _c9 = a0 => ({
  $implicit: a0
});
function NgbNavOutlet_ng_template_0_div_0_ng_template_1_Template(rf, ctx) {}
function NgbNavOutlet_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbNavOutlet_ng_template_0_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1)("nav", ctx_r1.nav)("role", ctx_r1.paneRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c9, item_r1.active || ctx_r1.isPanelTransitioning(item_r1)));
  }
}
function NgbNavOutlet_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbNavOutlet_ng_template_0_div_0_Template, 2, 7, "div", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isPanelInDom() || ctx_r1.isPanelTransitioning(item_r1));
  }
}
const _c10 = (a0, a1, a2) => ({
  $implicit: a0,
  pages: a1,
  disabled: a2
});
const _c11 = a0 => ({
  disabled: true,
  currentPage: a0
});
const _c12 = (a0, a1, a2) => ({
  disabled: a0,
  $implicit: a1,
  currentPage: a2
});
const _c13 = (a0, a1) => ({
  disabled: a0,
  currentPage: a1
});
const _c14 = a0 => ({
  disabled: a0
});
function NgbPagination_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbPagination_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbPagination_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "...");
  }
}
function NgbPagination_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbPagination_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_10_span_1_Template, 2, 0, "span", 14);
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const currentPage_r2 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r1 === currentPage_r2);
  }
}
function NgbPagination_ng_template_12_li_0_a_1_ng_template_1_Template(rf, ctx) {}
function NgbPagination_ng_template_12_li_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_12_li_0_a_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ellipsis_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r3.tplEllipsis == null ? null : ctx_r3.tplEllipsis.templateRef) || ellipsis_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, page_r3));
  }
}
function NgbPagination_ng_template_12_li_0_a_2_ng_template_1_Template(rf, ctx) {}
function NgbPagination_ng_template_12_li_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_ng_template_12_li_0_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const pageNumber_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      ctx_r3.selectPage(pageNumber_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_12_li_0_a_2_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageNumber_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const page_r3 = ctx_r7.$implicit;
    const disabled_r9 = ctx_r7.disabled;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const defaultNumber_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", disabled_r9 ? "-1" : null)("aria-disabled", disabled_r9 ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r3.tplNumber == null ? null : ctx_r3.tplNumber.templateRef) || defaultNumber_r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c12, disabled_r9, pageNumber_r7, page_r3));
  }
}
function NgbPagination_ng_template_12_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_12_li_0_a_1_Template, 2, 4, "a", 18)(2, NgbPagination_ng_template_12_li_0_a_2_Template, 2, 8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageNumber_r7 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const page_r3 = ctx_r7.$implicit;
    const disabled_r9 = ctx_r7.disabled;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r7 === page_r3)("disabled", ctx_r3.isEllipsis(pageNumber_r7) || disabled_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", pageNumber_r7 === page_r3 ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isEllipsis(pageNumber_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isEllipsis(pageNumber_r7));
  }
}
function NgbPagination_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbPagination_ng_template_12_li_0_Template, 3, 7, "li", 16);
  }
  if (rf & 2) {
    const pages_r11 = ctx.pages;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pages_r11);
  }
}
function NgbPagination_li_15_ng_template_2_Template(rf, ctx) {}
function NgbPagination_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_15_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r3.selectPage(1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_15_ng_template_2_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const first_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r3.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r3.tplFirst == null ? null : ctx_r3.tplFirst.templateRef) || first_r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c13, ctx_r3.previousDisabled(), ctx_r3.page));
  }
}
function NgbPagination_li_16_ng_template_2_Template(rf, ctx) {}
function NgbPagination_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_16_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r3.selectPage(ctx_r3.page - 1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_16_ng_template_2_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const previous_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r3.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r3.tplPrevious == null ? null : ctx_r3.tplPrevious.templateRef) || previous_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c14, ctx_r3.previousDisabled()));
  }
}
function NgbPagination_ng_template_17_Template(rf, ctx) {}
function NgbPagination_li_18_ng_template_2_Template(rf, ctx) {}
function NgbPagination_li_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_18_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r3.selectPage(ctx_r3.page + 1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_18_ng_template_2_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const next_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r3.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r3.tplNext == null ? null : ctx_r3.tplNext.templateRef) || next_r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c13, ctx_r3.nextDisabled(), ctx_r3.page));
  }
}
function NgbPagination_li_19_ng_template_2_Template(rf, ctx) {}
function NgbPagination_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_19_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r3.selectPage(ctx_r3.pageCount);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_19_ng_template_2_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const last_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r3.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r3.tplLast == null ? null : ctx_r3.tplLast.templateRef) || last_r19)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c13, ctx_r3.nextDisabled(), ctx_r3.page));
  }
}
function NgbPopoverWindow_h3_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function NgbPopoverWindow_h3_1_ng_template_3_Template(rf, ctx) {}
function NgbPopoverWindow_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPopoverWindow_h3_1_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgbPopoverWindow_h3_1_ng_template_3_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const simpleTitle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : simpleTitle_r2)("ngTemplateOutletContext", ctx_r0.context);
  }
}
function NgbProgressbar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.getValue() / ctx_r0.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
  }
}
function NgbRating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fill_r1 === 100 ? "\u2605" : "\u2606");
  }
}
function NgbRating_ng_template_2_ng_template_3_Template(rf, ctx) {}
function NgbRating_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NgbRating_ng_template_2_Template_span_mouseenter_2_listener() {
      const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.enter(index_r3 + 1));
    })("click", function NgbRating_ng_template_2_Template_span_click_2_listener() {
      const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.handleClick(index_r3 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbRating_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const t_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", index_r3 < ctx_r3.nextRate ? "*" : " ", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx_r3.isInteractive() ? "pointer" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.starTemplate || ctx_r3.starTemplateFromContent || t_r5)("ngTemplateOutletContext", ctx_r3.contexts[index_r3]);
  }
}
function NgbTimepicker_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeHour(ctx_r1.hourStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeHour(-ctx_r1.hourStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeMinute(ctx_r1.minuteStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeMinute(-ctx_r1.minuteStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgbTimepicker_div_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_div_13_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeSecond(ctx_r1.secondStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_div_13_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_div_13_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeSecond(-ctx_r1.secondStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbTimepicker_div_13_button_1_Template, 4, 7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbTimepicker_div_13_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.updateSecond($event.target.value));
    })("blur", function NgbTimepicker_div_13_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleBlur());
    })("input", function NgbTimepicker_div_13_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.formatInput($event.target));
    })("keydown.ArrowUp", function NgbTimepicker_div_13_Template_input_keydown_ArrowUp_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r1.changeSecond(ctx_r1.secondStep);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    })("keydown.ArrowDown", function NgbTimepicker_div_13_Template_input_keydown_ArrowDown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r1.changeSecond(-ctx_r1.secondStep);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbTimepicker_div_13_button_3_Template, 4, 7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.spinners);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r1.isSmallSize)("form-control-lg", ctx_r1.isLargeSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.formatMinSec(ctx_r1.model == null ? null : ctx_r1.model.second))("readOnly", ctx_r1.readonlyInputs)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.spinners);
  }
}
function NgbTimepicker_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
  }
}
function NgbTimepicker_div_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r1.i18n.getAfternoonPeriod());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
  }
}
function NgbTimepicker_div_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r1.i18n.getMorningPeriod());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](0);
  }
}
function NgbTimepicker_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_div_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleMeridian());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbTimepicker_div_15_ng_container_2_Template, 2, 1, "ng-container", 28)(3, NgbTimepicker_div_15_ng_template_3_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const am_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.model && ctx_r1.model.hour >= 12)("ngIfElse", am_r10);
  }
}
function NgbToast_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.header);
  }
}
function NgbToast_ng_template_2_ng_template_1_Template(rf, ctx) {}
function NgbToast_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbToast_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbToast_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const headerTpl_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentHeaderTpl || headerTpl_r3);
  }
}
function NgbHighlight_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const part_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.highlightClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r1);
  }
}
function NgbHighlight_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const part_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r1);
  }
}
function NgbHighlight_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbHighlight_ng_template_0_span_0_Template, 2, 3, "span", 2)(1, NgbHighlight_ng_template_0_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const isOdd_r3 = ctx.odd;
    const even_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isOdd_r3)("ngIfElse", even_r4);
  }
}
const _c15 = (a0, a1, a2) => ({
  result: a0,
  term: a1,
  formatter: a2
});
function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngb-highlight", 2);
  }
  if (rf & 2) {
    const result_r1 = ctx.result;
    const term_r2 = ctx.term;
    const formatter_r3 = ctx.formatter;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", formatter_r3(result_r1))("term", term_r2);
  }
}
function NgbTypeaheadWindow_ng_template_2_ng_template_1_Template(rf, ctx) {}
function NgbTypeaheadWindow_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NgbTypeaheadWindow_ng_template_2_Template_button_mouseenter_0_listener() {
      const idx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.markActive(idx_r5));
    })("click", function NgbTypeaheadWindow_ng_template_2_Template_button_click_0_listener() {
      const result_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.select(result_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbTypeaheadWindow_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    const idx_r5 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rt_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", idx_r5 === ctx_r5.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5.id + "-" + idx_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.resultTemplate || rt_r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c15, result_r7, ctx_r5.term, ctx_r5.formatter));
  }
}
function toInteger(value) {
  return parseInt(`${value}`, 10);
}
function toString(value) {
  return value !== undefined && value !== null ? `${value}` : '';
}
function getValueInRange(value, max, min = 0) {
  return Math.max(Math.min(value, max), min);
}
function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return !isNaN(toInteger(value));
}
function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isPromise(v) {
  return v && v.then;
}
function padNumber(value) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}
function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
function hasClassName(element, className) {
  return element && element.className && element.className.split && element.className.split(/\s+/).indexOf(className) >= 0;
}
function closest(element, selector) {
  if (!selector) {
    return null;
  }
  /*
   * In certain browsers (e.g. Edge 44.18362.449.0) HTMLDocument does
   * not support `Element.prototype.closest`. To emulate the correct behaviour
   * we return null when the method is missing.
   *
   * Note that in evergreen browsers `closest(document.documentElement, 'html')`
   * will return the document element whilst in Edge null will be returned. This
   * compromise was deemed good enough.
   */
  if (typeof element.closest === 'undefined') {
    return null;
  }
  return element.closest(selector);
}
/**
 * Force a browser reflow
 * @param element element where to apply the reflow
 */
function reflow(element) {
  return (element || document.body).getBoundingClientRect();
}
/**
 * Creates an observable where all callbacks are executed inside a given zone
 *
 * @param zone
 */
function runInZone(zone) {
  return source => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      const next = value => zone.run(() => observer.next(value));
      const error = e => zone.run(() => observer.error(e));
      const complete = () => zone.run(() => observer.complete());
      return source.subscribe({
        next,
        error,
        complete
      });
    });
  };
}
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function getTransitionDurationMs(element) {
  const {
    transitionDelay,
    transitionDuration
  } = window.getComputedStyle(element);
  const transitionDelaySec = parseFloat(transitionDelay);
  const transitionDurationSec = parseFloat(transitionDuration);
  return (transitionDelaySec + transitionDurationSec) * 1000;
}
const environment = {
  animation: true,
  transitionTimerDelayMs: 5
};
const noopFn = () => {};
const {
  transitionTimerDelayMs
} = environment;
const runningTransitions = new Map();
const ngbRunTransition = (zone, element, startFn, options) => {
  // Getting initial context from options
  let context = options.context || {};
  // Checking if there are already running transitions on the given element.
  const running = runningTransitions.get(element);
  if (running) {
    switch (options.runningTransition) {
      // If there is one running and we want for it to 'continue' to run, we have to cancel the new one.
      // We're not emitting any values, but simply completing the observable (EMPTY).
      case 'continue':
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
      // If there is one running and we want for it to 'stop', we have to complete the running one.
      // We're simply completing the running one and not emitting any values and merging newly provided context
      // with the one coming from currently running transition.
      case 'stop':
        zone.run(() => running.transition$.complete());
        context = Object.assign(running.context, context);
        runningTransitions.delete(element);
    }
  }
  // Running the start function
  const endFn = startFn(element, options.animation, context) || noopFn;
  // If 'prefer-reduced-motion' is enabled, the 'transition' will be set to 'none'.
  // If animations are disabled, we have to emit a value and complete the observable
  // In this case we have to call the end function, but can finish immediately by emitting a value,
  // completing the observable and executing end functions synchronously.
  if (!options.animation || window.getComputedStyle(element).transitionProperty === 'none') {
    zone.run(() => endFn());
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined).pipe(runInZone(zone));
  }
  // Starting a new transition
  const transition$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  const finishTransition$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  const stop$ = transition$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.endWith)(true));
  runningTransitions.set(element, {
    transition$,
    complete: () => {
      finishTransition$.next();
      finishTransition$.complete();
    },
    context
  });
  const transitionDurationMs = getTransitionDurationMs(element);
  // 1. We have to both listen for the 'transitionend' event and have a 'just-in-case' timer,
  // because 'transitionend' event might not be fired in some browsers, if the transitioning
  // element becomes invisible (ex. when scrolling, making browser tab inactive, etc.). The timer
  // guarantees, that we'll release the DOM element and complete 'ngbRunTransition'.
  // 2. We need to filter transition end events, because they might bubble from shorter transitions
  // on inner DOM elements. We're only interested in the transition on the 'element' itself.
  zone.runOutsideAngular(() => {
    const transitionEnd$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(({
      target
    }) => target === element));
    const timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(transitionDurationMs + transitionTimerDelayMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stop$));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.race)(timer$, transitionEnd$, finishTransition$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stop$)).subscribe(() => {
      runningTransitions.delete(element);
      zone.run(() => {
        endFn();
        transition$.next();
        transition$.complete();
      });
    });
  });
  return transition$.asObservable();
};
const ngbCompleteTransition = element => {
  runningTransitions.get(element)?.complete();
};
function measureCollapsingElementDimensionPx(element, dimension) {
  // SSR fix for without injecting the PlatformId
  if (typeof navigator === 'undefined') {
    return '0px';
  }
  const {
    classList
  } = element;
  const hasShownClass = classList.contains('show');
  if (!hasShownClass) {
    classList.add('show');
  }
  element.style[dimension] = '';
  const dimensionSize = element.getBoundingClientRect()[dimension] + 'px';
  if (!hasShownClass) {
    classList.remove('show');
  }
  return dimensionSize;
}
const ngbCollapsingTransition = (element, animation, context) => {
  let {
    direction,
    maxSize,
    dimension
  } = context;
  const {
    classList
  } = element;
  function setInitialClasses() {
    classList.add('collapse');
    if (direction === 'show') {
      classList.add('show');
    } else {
      classList.remove('show');
    }
  }
  // without animations we just need to set initial classes
  if (!animation) {
    setInitialClasses();
    return;
  }
  // No maxHeight -> running the transition for the first time
  if (!maxSize) {
    maxSize = measureCollapsingElementDimensionPx(element, dimension);
    context.maxSize = maxSize;
    // Fix the height before starting the animation
    element.style[dimension] = direction !== 'show' ? maxSize : '0px';
    classList.remove('collapse');
    classList.remove('collapsing');
    classList.remove('show');
    reflow(element);
    // Start the animation
    classList.add('collapsing');
  }
  // Start or revert the animation
  element.style[dimension] = direction === 'show' ? maxSize : '0px';
  return () => {
    setInitialClasses();
    classList.remove('collapsing');
    element.style[dimension] = '';
  };
};

/**
 * Global ng-bootstrap config
 *
 * @since 8.0.0
 */
class NgbConfig {
  constructor() {
    this.animation = environment.animation;
  }
}
NgbConfig.ɵfac = function NgbConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbConfig)();
};
NgbConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbConfig,
  factory: NgbConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
class NgbAccordionConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.closeOthers = false;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbAccordionConfig.ɵfac = function NgbAccordionConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbAccordionConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbAccordionConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbAccordionConfig,
  factory: NgbAccordionConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAccordionConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
let nextId$3 = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
class NgbPanelHeader {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPanelHeader.ɵfac = function NgbPanelHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPanelHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelHeader,
  selectors: [["ng-template", "ngbPanelHeader", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPanelHeader]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
class NgbPanelTitle {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPanelTitle.ɵfac = function NgbPanelTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPanelTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPanelTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelTitle,
  selectors: [["ng-template", "ngbPanelTitle", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPanelTitle]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive that wraps the accordion panel content.
 */
class NgbPanelContent {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPanelContent.ɵfac = function NgbPanelContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPanelContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelContent,
  selectors: [["ng-template", "ngbPanelContent", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPanelContent]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
class NgbPanel {
  constructor() {
    /**
     *  If `true`, the panel is disabled an can't be toggled.
     */
    this.disabled = false;
    /**
     *  An optional id for the panel that must be unique on the page.
     *
     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
     */
    this.id = `ngb-panel-${nextId$3++}`;
    this.isOpen = false;
    /* A flag to specified that the transition panel classes have been initialized */
    this.initClassDone = false;
    /* A flag to specified if the panel is currently being animated, to ensure its presence in the dom */
    this.transitionRunning = false;
    /**
     * An event emitted when the panel is shown, after the transition. It has no payload.
     *
     * @since 8.0.0
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the panel is hidden, after the transition. It has no payload.
     *
     * @since 8.0.0
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.titleTpl = this.titleTpls.first;
    this.headerTpl = this.headerTpls.first;
    this.contentTpl = this.contentTpls.first;
  }
}
NgbPanel.ɵfac = function NgbPanel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPanel)();
};
NgbPanel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanel,
  selectors: [["ngb-panel"]],
  contentQueries: function NgbPanel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanelTitle, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanelHeader, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanelContent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTpls = _t);
    }
  },
  inputs: {
    disabled: "disabled",
    id: "id",
    title: "title",
    type: "type",
    cardClass: "cardClass"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngb-panel',
      standalone: true
    }]
  }], null, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cardClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    titleTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanelTitle, {
        descendants: false
      }]
    }],
    headerTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanelHeader, {
        descendants: false
      }]
    }],
    contentTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanelContent, {
        descendants: false
      }]
    }]
  });
})();
class NgbRefDirective {
  constructor(_El) {
    this._El = _El;
    this.ngbRef = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.ngbRef.emit(this._El.nativeElement);
  }
  ngOnDestroy() {
    this.ngbRef.emit(null);
  }
}
NgbRefDirective.ɵfac = function NgbRefDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbRefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbRefDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbRefDirective,
  selectors: [["", "ngbRef", ""]],
  outputs: {
    ngbRef: "ngbRef"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRefDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbRef]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    ngbRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
class NgbPanelToggle {
  constructor(accordion, panel) {
    this.accordion = accordion;
    this.panel = panel;
  }
  set ngbPanelToggle(panel) {
    if (panel) {
      this.panel = panel;
    }
  }
}
NgbPanelToggle.ɵfac = function NgbPanelToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPanelToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbAccordion)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbPanel, 9));
};
NgbPanelToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelToggle,
  selectors: [["button", "ngbPanelToggle", ""]],
  hostAttrs: ["type", "button"],
  hostVars: 5,
  hostBindings: function NgbPanelToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPanelToggle_click_HostBindingHandler() {
        return ctx.accordion.toggle(ctx.panel.id);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.panel.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.panel.isOpen)("aria-controls", ctx.panel.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", !ctx.panel.isOpen);
    }
  },
  inputs: {
    ngbPanelToggle: "ngbPanelToggle"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[ngbPanelToggle]',
      standalone: true,
      host: {
        type: 'button',
        '[disabled]': 'panel.disabled',
        '[class.collapsed]': '!panel.isOpen',
        '[attr.aria-expanded]': 'panel.isOpen',
        '[attr.aria-controls]': 'panel.id',
        '(click)': 'accordion.toggle(panel.id)'
      }
    }]
  }], function () {
    return [{
      type: NgbAccordion,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbAccordion)]
      }]
    }, {
      type: NgbPanel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, {
    ngbPanelToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
class NgbAccordion {
  constructor(config, _ngZone, _changeDetector) {
    this._ngZone = _ngZone;
    this._changeDetector = _changeDetector;
    /**
     * An array or comma separated strings of panel ids that should be opened **initially**.
     *
     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
     * the `(panelChange)` event.
     */
    this.activeIds = [];
    /**
     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
     */
    this.destroyOnHide = true;
    /**
     * Event emitted right before the panel toggle happens.
     *
     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
     */
    this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the expanding animation is finished on the panel. The payload is the panel id.
     *
     * @since 8.0.0
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the collapsing animation is finished on the panel, and before the panel element is removed.
     * The payload is the panel id.
     *
     * @since 8.0.0
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.animation = config.animation;
    this.type = config.type;
    this.closeOtherPanels = config.closeOthers;
  }
  /**
   * Checks if a panel with a given id is expanded.
   */
  isExpanded(panelId) {
    return this.activeIds.indexOf(panelId) > -1;
  }
  /**
   * Expands a panel with a given id.
   *
   * Has no effect if the panel is already expanded or disabled.
   */
  expand(panelId) {
    this._changeOpenState(this._findPanelById(panelId), true);
  }
  /**
   * Expands all panels, if `[closeOthers]` is `false`.
   *
   * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
   */
  expandAll() {
    if (this.closeOtherPanels) {
      if (this.activeIds.length === 0 && this.panels.length) {
        this._changeOpenState(this.panels.first, true);
      }
    } else {
      this.panels.forEach(panel => this._changeOpenState(panel, true));
    }
  }
  /**
   * Collapses a panel with the given id.
   *
   * Has no effect if the panel is already collapsed or disabled.
   */
  collapse(panelId) {
    this._changeOpenState(this._findPanelById(panelId), false);
  }
  /**
   * Collapses all opened panels.
   */
  collapseAll() {
    this.panels.forEach(panel => {
      this._changeOpenState(panel, false);
    });
  }
  /**
   * Toggles a panel with the given id.
   *
   * Has no effect if the panel is disabled.
   */
  toggle(panelId) {
    const panel = this._findPanelById(panelId);
    if (panel) {
      this._changeOpenState(panel, !panel.isOpen);
    }
  }
  ngAfterContentChecked() {
    // active id updates
    if (isString(this.activeIds)) {
      this.activeIds = this.activeIds.split(/\s*,\s*/);
    }
    // update panels open states
    this.panels.forEach(panel => {
      panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1;
    });
    // closeOthers updates
    if (this.activeIds.length > 1 && this.closeOtherPanels) {
      this._closeOthers(this.activeIds[0], false);
      this._updateActiveIds();
    }
    // Setup the initial classes here
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this.panels.forEach(panel => {
        const panelElement = panel.panelDiv;
        if (panelElement) {
          if (!panel.initClassDone) {
            panel.initClassDone = true;
            ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
              animation: false,
              runningTransition: 'continue',
              context: {
                direction: panel.isOpen ? 'show' : 'hide',
                dimension: 'height'
              }
            });
          }
        } else {
          // Classes must be initialized next time it will be in the dom
          panel.initClassDone = false;
        }
      });
    });
  }
  _changeOpenState(panel, nextState) {
    if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
      let defaultPrevented = false;
      this.panelChange.emit({
        panelId: panel.id,
        nextState: nextState,
        preventDefault: () => {
          defaultPrevented = true;
        }
      });
      if (!defaultPrevented) {
        panel.isOpen = nextState;
        panel.transitionRunning = true;
        if (nextState && this.closeOtherPanels) {
          this._closeOthers(panel.id);
        }
        this._updateActiveIds();
        this._runTransitions(this.animation);
      }
    }
  }
  _closeOthers(panelId, enableTransition = true) {
    this.panels.forEach(panel => {
      if (panel.id !== panelId && panel.isOpen) {
        panel.isOpen = false;
        panel.transitionRunning = enableTransition;
      }
    });
  }
  _findPanelById(panelId) {
    return this.panels.find(p => p.id === panelId) || null;
  }
  _updateActiveIds() {
    this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
  }
  _runTransitions(animation) {
    // detectChanges is performed to ensure that all panels are in the dom (via transitionRunning = true)
    // before starting the animation
    this._changeDetector.detectChanges();
    this.panels.forEach(panel => {
      // When panel.transitionRunning is true, the transition needs to be started OR reversed,
      // The direction (show or hide) is choosen by each panel.isOpen state
      if (panel.transitionRunning) {
        const panelElement = panel.panelDiv;
        ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
          animation,
          runningTransition: 'stop',
          context: {
            direction: panel.isOpen ? 'show' : 'hide',
            dimension: 'height'
          }
        }).subscribe(() => {
          panel.transitionRunning = false;
          const {
            id
          } = panel;
          if (panel.isOpen) {
            panel.shown.emit();
            this.shown.emit(id);
          } else {
            panel.hidden.emit();
            this.hidden.emit(id);
          }
        });
      }
    });
  }
}
NgbAccordion.ɵfac = function NgbAccordion_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbAccordion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbAccordionConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
NgbAccordion.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbAccordion,
  selectors: [["ngb-accordion"]],
  contentQueries: function NgbAccordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanel, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panels = _t);
    }
  },
  hostAttrs: ["role", "tablist", 1, "accordion"],
  hostVars: 1,
  hostBindings: function NgbAccordion_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", !ctx.closeOtherPanels);
    }
  },
  inputs: {
    animation: "animation",
    activeIds: "activeIds",
    closeOtherPanels: [0, "closeOthers", "closeOtherPanels"],
    destroyOnHide: "destroyOnHide",
    type: "type"
  },
  outputs: {
    panelChange: "panelChange",
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbAccordion"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [["t", ""], ["ngbPanelHeader", ""], ["ngFor", "", 3, "ngForOf"], [1, "accordion-button", 3, "ngbPanelToggle"], [3, "ngTemplateOutlet"], ["role", "tab", 3, "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tabpanel", 3, "id", "ngbRef", 4, "ngIf"], ["role", "tabpanel", 3, "ngbRef", "id"], [1, "accordion-body"]],
  template: function NgbAccordion_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbAccordion_ng_template_0_Template, 3, 3, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgbAccordion_ng_template_2_Template, 4, 12, "ng-template", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, NgbPanelToggle, NgbRefDirective, NgbPanelHeader, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-accordion',
      exportAs: 'ngbAccordion',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, NgbPanelToggle, NgbRefDirective, NgbPanelHeader, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'accordion',
        role: 'tablist',
        '[attr.aria-multiselectable]': '!closeOtherPanels'
      },
      template: `
		<ng-template #t ngbPanelHeader let-panel>
			<button class="accordion-button" [ngbPanelToggle]="panel">
				{{ panel.title }}
				<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
			</button>
		</ng-template>
		<ng-template ngFor let-panel [ngForOf]="panels">
			<div [class]="'accordion-item ' + (panel.cardClass || '')">
				<div
					role="tab"
					id="{{ panel.id }}-header"
					[class]="'accordion-header ' + (panel.type ? 'bg-' + panel.type : type ? 'bg-' + type : '')"
				>
					<ng-template
						[ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
						[ngTemplateOutletContext]="{ $implicit: panel, opened: panel.isOpen }"
					></ng-template>
				</div>
				<div
					id="{{ panel.id }}"
					(ngbRef)="panel.panelDiv = $event"
					role="tabpanel"
					[attr.aria-labelledby]="panel.id + '-header'"
					*ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning"
				>
					<div class="accordion-body">
						<ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
					</div>
				</div>
			</div>
		</ng-template>
	`
    }]
  }], function () {
    return [{
      type: NgbAccordionConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    panels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanel]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeOtherPanels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['closeOthers']
    }],
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
const NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
class NgbAccordionModule {}
NgbAccordionModule.ɵfac = function NgbAccordionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbAccordionModule)();
};
NgbAccordionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbAccordionModule
});
NgbAccordionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbAccordion]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: NGB_ACCORDION_DIRECTIVES,
      exports: NGB_ACCORDION_DIRECTIVES
    }]
  }], null, null);
})();
const ngbAlertFadingTransition = ({
  classList
}) => {
  classList.remove('show');
};

/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */
class NgbAlertConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.dismissible = true;
    this.type = 'warning';
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbAlertConfig.ɵfac = function NgbAlertConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbAlertConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbAlertConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbAlertConfig,
  factory: NgbAlertConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAlertConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */
class NgbAlert {
  constructor(config, _renderer, _element, _zone) {
    this._renderer = _renderer;
    this._element = _element;
    this._zone = _zone;
    /**
     * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
     *
     * @since 8.0.0
     */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dismissible = config.dismissible;
    this.type = config.type;
    this.animation = config.animation;
  }
  /**
   * Triggers alert closing programmatically (same as clicking on the close button (×)).
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(closed)` output
   *
   * @since 8.0.0
   */
  close() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbAlertFadingTransition, {
      animation: this.animation,
      runningTransition: 'continue'
    });
    transition.subscribe(() => this.closed.emit());
    return transition;
  }
  ngOnChanges(changes) {
    const typeChange = changes['type'];
    if (typeChange && !typeChange.firstChange) {
      this._renderer.removeClass(this._element.nativeElement, `alert-${typeChange.previousValue}`);
      this._renderer.addClass(this._element.nativeElement, `alert-${typeChange.currentValue}`);
    }
  }
  ngOnInit() {
    this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`);
  }
}
NgbAlert.ɵfac = function NgbAlert_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbAlert)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbAlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbAlert.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbAlert,
  selectors: [["ngb-alert"]],
  hostAttrs: ["role", "alert", 1, "alert", "show"],
  hostVars: 4,
  hostBindings: function NgbAlert_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation)("alert-dismissible", ctx.dismissible);
    }
  },
  inputs: {
    animation: "animation",
    dismissible: "dismissible",
    type: "type"
  },
  outputs: {
    closed: "closed"
  },
  exportAs: ["ngbAlert"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_0 = goog.getMsg("Close");
      i18n_0 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_0;
    } else {
      i18n_0 = $localize`:@@ngb.alert.close:Close`;
    }
    return [["type", "button", "class", "btn-close", "aria-label", i18n_0, 3, "click", 4, "ngIf"], ["type", "button", "aria-label", i18n_0, 1, "btn-close", 3, "click"]];
  },
  template: function NgbAlert_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbAlert_button_1_Template, 1, 0, "button", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismissible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  styles: ["ngb-alert{display:block}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAlert, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-alert',
      exportAs: 'ngbAlert',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        role: 'alert',
        class: 'alert show',
        '[class.fade]': 'animation',
        '[class.alert-dismissible]': 'dismissible'
      },
      template: `
		<ng-content></ng-content>
		<button
			*ngIf="dismissible"
			type="button"
			class="btn-close"
			aria-label="Close"
			i18n-aria-label="@@ngb.alert.close"
			(click)="close()"
		>
		</button>
	`,
      styles: ["ngb-alert{display:block}\n"]
    }]
  }], function () {
    return [{
      type: NgbAlertConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgbAlertModule {}
NgbAlertModule.ɵfac = function NgbAlertModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbAlertModule)();
};
NgbAlertModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbAlertModule
});
NgbAlertModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbAlert]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAlertModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbAlert],
      exports: [NgbAlert]
    }]
  }], null, null);
})();

/**
 * Defines the carousel slide transition direction.
 */
var NgbSlideEventDirection;
(function (NgbSlideEventDirection) {
  NgbSlideEventDirection["START"] = "start";
  NgbSlideEventDirection["END"] = "end";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
const isBeingAnimated = ({
  classList
}) => {
  return classList.contains('carousel-item-start') || classList.contains('carousel-item-end');
};
const removeDirectionClasses = classList => {
  classList.remove('carousel-item-start');
  classList.remove('carousel-item-end');
};
const removeClasses = classList => {
  removeDirectionClasses(classList);
  classList.remove('carousel-item-prev');
  classList.remove('carousel-item-next');
};
const ngbCarouselTransitionIn = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeDirectionClasses(classList);
    removeClasses(classList);
    classList.add('active');
    return;
  }
  if (isBeingAnimated(element)) {
    // Revert the transition
    removeDirectionClasses(classList);
  } else {
    // For the 'in' transition, a 'pre-class' is applied to the element to ensure its visibility
    classList.add('carousel-item-' + (direction === NgbSlideEventDirection.START ? 'next' : 'prev'));
    reflow(element);
    classList.add('carousel-item-' + direction);
  }
  return () => {
    removeClasses(classList);
    classList.add('active');
  };
};
const ngbCarouselTransitionOut = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeDirectionClasses(classList);
    removeClasses(classList);
    classList.remove('active');
    return;
  }
  //  direction is left or right, depending on the way the slide goes out.
  if (isBeingAnimated(element)) {
    // Revert the transition
    removeDirectionClasses(classList);
  } else {
    classList.add('carousel-item-' + direction);
  }
  return () => {
    removeClasses(classList);
    classList.remove('active');
  };
};

/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
class NgbCarouselConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.interval = 5000;
    this.wrap = true;
    this.keyboard = true;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbCarouselConfig.ɵfac = function NgbCarouselConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCarouselConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbCarouselConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCarouselConfig,
  factory: NgbCarouselConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCarouselConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
let nextId$2 = 0;
/**
 * A directive that wraps the individual carousel slide.
 */
class NgbSlide {
  constructor(tplRef) {
    this.tplRef = tplRef;
    /**
     * Slide id that must be unique for the entire document.
     *
     * If not provided, will be generated in the `ngb-slide-xx` format.
     */
    this.id = `ngb-slide-${nextId$2++}`;
    /**
     * An event emitted when the slide transition is finished
     *
     * @since 8.0.0
     */
    this.slid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
NgbSlide.ɵfac = function NgbSlide_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbSlide)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbSlide.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbSlide,
  selectors: [["ng-template", "ngbSlide", ""]],
  inputs: {
    id: "id"
  },
  outputs: {
    slid: "slid"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbSlide, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbSlide]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
class NgbCarousel {
  constructor(config, _platformId, _ngZone, _cd, _container) {
    this._platformId = _platformId;
    this._ngZone = _ngZone;
    this._cd = _cd;
    this._container = _container;
    this.NgbSlideEventSource = NgbSlideEventSource;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(0);
    this._mouseHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this._focused$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this._pauseOnHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this._pauseOnFocus$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this._pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this._wrap$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    /**
     * An event emitted just before the slide transition starts.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     */
    this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted right after the slide transition is completed.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     *
     * @since 8.0.0
     */
    this.slid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /*
     * Keep the ids of the panels currently transitionning
     * in order to allow only the transition revertion
     */
    this._transitionIds = null;
    this.animation = config.animation;
    this.interval = config.interval;
    this.wrap = config.wrap;
    this.keyboard = config.keyboard;
    this.pauseOnHover = config.pauseOnHover;
    this.pauseOnFocus = config.pauseOnFocus;
    this.showNavigationArrows = config.showNavigationArrows;
    this.showNavigationIndicators = config.showNavigationIndicators;
  }
  /**
   * Time in milliseconds before the next slide is shown.
   */
  set interval(value) {
    this._interval$.next(value);
  }
  get interval() {
    return this._interval$.value;
  }
  /**
   * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
   */
  set wrap(value) {
    this._wrap$.next(value);
  }
  get wrap() {
    return this._wrap$.value;
  }
  /**
   * If `true`, will pause slide switching when mouse cursor hovers the slide.
   *
   * @since 2.2.0
   */
  set pauseOnHover(value) {
    this._pauseOnHover$.next(value);
  }
  get pauseOnHover() {
    return this._pauseOnHover$.value;
  }
  /**
   * If `true`, will pause slide switching when the focus is inside the carousel.
   */
  set pauseOnFocus(value) {
    this._pauseOnFocus$.next(value);
  }
  get pauseOnFocus() {
    return this._pauseOnFocus$.value;
  }
  set mouseHover(value) {
    this._mouseHover$.next(value);
  }
  get mouseHover() {
    return this._mouseHover$.value;
  }
  set focused(value) {
    this._focused$.next(value);
  }
  get focused() {
    return this._focused$.value;
  }
  arrowLeft() {
    this.focus();
    this.prev(NgbSlideEventSource.ARROW_LEFT);
  }
  arrowRight() {
    this.focus();
    this.next(NgbSlideEventSource.ARROW_RIGHT);
  }
  ngAfterContentInit() {
    // setInterval() doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this._platformId)) {
      this._ngZone.runOutsideAngular(() => {
        const hasNextSlide$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.slide.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(slideEvent => slideEvent.current), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(this.activeId)), this._wrap$, this.slides.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([currentSlideId, wrap]) => {
          const slideArr = this.slides.toArray();
          const currentSlideIdx = this._getSlideIdxById(currentSlideId);
          return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, hasNextSlide$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([pause, pauseOnHover, mouseHover, pauseOnFocus, focused, interval, hasNextSlide]) => pause || pauseOnHover && mouseHover || pauseOnFocus && focused || !hasNextSlide ? 0 : interval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(interval => interval > 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(interval, interval) : rxjs__WEBPACK_IMPORTED_MODULE_19__.NEVER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe(() => this._ngZone.run(() => this.next(NgbSlideEventSource.TIMER)));
      });
    }
    this.slides.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe(() => {
      this._transitionIds?.forEach(id => ngbCompleteTransition(this._getSlideElement(id)));
      this._transitionIds = null;
      this._cd.markForCheck();
      // The following code need to be done asynchronously, after the dom becomes stable,
      // otherwise all changes will be undone.
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        for (const {
          id
        } of this.slides) {
          const element = this._getSlideElement(id);
          if (id === this.activeId) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }
      });
    });
  }
  ngAfterContentChecked() {
    let activeSlide = this._getSlideById(this.activeId);
    this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : '';
  }
  ngAfterViewInit() {
    // Initialize the 'active' class (not managed by the template)
    if (this.activeId) {
      const element = this._getSlideElement(this.activeId);
      if (element) {
        element.classList.add('active');
      }
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
  }
  /**
   * Navigates to a slide with the specified identifier.
   */
  select(slideId, source) {
    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
  }
  /**
   * Navigates to the previous slide.
   */
  prev(source) {
    this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.END, source);
  }
  /**
   * Navigates to the next slide.
   */
  next(source) {
    this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.START, source);
  }
  /**
   * Pauses cycling through the slides.
   */
  pause() {
    this._pause$.next(true);
  }
  /**
   * Restarts cycling through the slides from start to end.
   */
  cycle() {
    this._pause$.next(false);
  }
  /**
   * Set the focus on the carousel.
   */
  focus() {
    this._container.nativeElement.focus();
  }
  _cycleToSelected(slideIdx, direction, source) {
    const transitionIds = this._transitionIds;
    if (transitionIds && (transitionIds[0] !== slideIdx || transitionIds[1] !== this.activeId)) {
      // Revert prevented
      return;
    }
    let selectedSlide = this._getSlideById(slideIdx);
    if (selectedSlide && selectedSlide.id !== this.activeId) {
      this._transitionIds = [this.activeId, slideIdx];
      this.slide.emit({
        prev: this.activeId,
        current: selectedSlide.id,
        direction: direction,
        paused: this._pause$.value,
        source
      });
      const options = {
        animation: this.animation,
        runningTransition: 'stop',
        context: {
          direction
        }
      };
      const transitions = [];
      const activeSlide = this._getSlideById(this.activeId);
      if (activeSlide) {
        const activeSlideTransition = ngbRunTransition(this._ngZone, this._getSlideElement(activeSlide.id), ngbCarouselTransitionOut, options);
        activeSlideTransition.subscribe(() => {
          activeSlide.slid.emit({
            isShown: false,
            direction,
            source
          });
        });
        transitions.push(activeSlideTransition);
      }
      const previousId = this.activeId;
      this.activeId = selectedSlide.id;
      const nextSlide = this._getSlideById(this.activeId);
      const transition = ngbRunTransition(this._ngZone, this._getSlideElement(selectedSlide.id), ngbCarouselTransitionIn, options);
      transition.subscribe(() => {
        nextSlide?.slid.emit({
          isShown: true,
          direction,
          source
        });
      });
      transitions.push(transition);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.zip)(...transitions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        this._transitionIds = null;
        this.slid.emit({
          prev: previousId,
          current: selectedSlide.id,
          direction: direction,
          paused: this._pause$.value,
          source
        });
      });
    }
    // we get here after the interval fires or any external API call like next(), prev() or select()
    this._cd.markForCheck();
  }
  _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
    const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
    const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
    return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.END : NgbSlideEventDirection.START;
  }
  _getSlideById(slideId) {
    return this.slides.find(slide => slide.id === slideId) || null;
  }
  _getSlideIdxById(slideId) {
    const slide = this._getSlideById(slideId);
    return slide != null ? this.slides.toArray().indexOf(slide) : -1;
  }
  _getNextSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isLastSlide = currentSlideIdx === slideArr.length - 1;
    return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
  }
  _getPrevSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isFirstSlide = currentSlideIdx === 0;
    return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
  }
  _getSlideElement(slideId) {
    return this._container.nativeElement.querySelector(`#slide-${slideId}`);
  }
}
NgbCarousel.ɵfac = function NgbCarousel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbCarousel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbCarousel,
  selectors: [["ngb-carousel"]],
  contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbSlide, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    }
  },
  hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
  hostVars: 3,
  hostBindings: function NgbCarousel_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() {
        return ctx.keyboard && ctx.arrowLeft();
      })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() {
        return ctx.keyboard && ctx.arrowRight();
      })("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() {
        return ctx.mouseHover = true;
      })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() {
        return ctx.mouseHover = false;
      })("focusin", function NgbCarousel_focusin_HostBindingHandler() {
        return ctx.focused = true;
      })("focusout", function NgbCarousel_focusout_HostBindingHandler() {
        return ctx.focused = false;
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", "slide-" + ctx.activeId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "block");
    }
  },
  inputs: {
    animation: "animation",
    activeId: "activeId",
    interval: "interval",
    wrap: "wrap",
    keyboard: "keyboard",
    pauseOnHover: "pauseOnHover",
    pauseOnFocus: "pauseOnFocus",
    showNavigationArrows: "showNavigationArrows",
    showNavigationIndicators: "showNavigationIndicators"
  },
  outputs: {
    slide: "slide",
    slid: "slid"
  },
  exportAs: ["ngbCarousel"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 6,
  consts: () => {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc Currently selected slide number read by screen reader
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_1 = goog.getMsg(" Slide {$interpolation} of {$interpolation_1} ", {
        "interpolation": "\uFFFD0\uFFFD",
        "interpolation_1": "\uFFFD1\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ i + 1 }}",
          "interpolation_1": "{{ c }}"
        }
      });
      i18n_1 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_1;
    } else {
      i18n_1 = $localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_2 = goog.getMsg("Previous");
      i18n_2 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_2;
    } else {
      i18n_2 = $localize`:@@ngb.carousel.previous:Previous`;
    }
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_3 = goog.getMsg("Next");
      i18n_3 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_3;
    } else {
      i18n_3 = $localize`:@@ngb.carousel.next:Next`;
    }
    return [i18n_1, i18n_2, i18n_3, ["role", "tablist", 1, "carousel-indicators"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], ["class", "carousel-control-prev", "type", "button", 3, "click", 4, "ngIf"], ["class", "carousel-control-next", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], [1, "visually-hidden"], [3, "ngTemplateOutlet"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]];
  },
  template: function NgbCarousel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbCarousel_button_1_Template, 1, 5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbCarousel_div_3_Template, 4, 4, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgbCarousel_button_4_Template, 4, 0, "button", 7)(5, NgbCarousel_button_5_Template, 4, 0, "button", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visually-hidden", !ctx.showNavigationIndicators);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigationArrows);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigationArrows);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCarousel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-carousel',
      exportAs: 'ngbCarousel',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'carousel slide',
        '[style.display]': '"block"',
        tabIndex: '0',
        '(keydown.arrowLeft)': 'keyboard && arrowLeft()',
        '(keydown.arrowRight)': 'keyboard && arrowRight()',
        '(mouseenter)': 'mouseHover = true',
        '(mouseleave)': 'mouseHover = false',
        '(focusin)': 'focused = true',
        '(focusout)': 'focused = false',
        '[attr.aria-activedescendant]': `'slide-' + activeId`
      },
      template: `
		<div class="carousel-indicators" [class.visually-hidden]="!showNavigationIndicators" role="tablist">
			<button
				type="button"
				data-bs-target
				*ngFor="let slide of slides"
				[class.active]="slide.id === activeId"
				role="tab"
				[attr.aria-labelledby]="'slide-' + slide.id"
				[attr.aria-controls]="'slide-' + slide.id"
				[attr.aria-selected]="slide.id === activeId"
				(click)="focus(); select(slide.id, NgbSlideEventSource.INDICATOR)"
			></button>
		</div>
		<div class="carousel-inner">
			<div
				*ngFor="let slide of slides; index as i; count as c"
				class="carousel-item"
				[id]="'slide-' + slide.id"
				role="tabpanel"
			>
				<span
					class="visually-hidden"
					i18n="Currently selected slide number read by screen reader@@ngb.carousel.slide-number"
				>
					Slide {{ i + 1 }} of {{ c }}
				</span>
				<ng-template [ngTemplateOutlet]="slide.tplRef"></ng-template>
			</div>
		</div>
		<button class="carousel-control-prev" type="button" (click)="arrowLeft()" *ngIf="showNavigationArrows">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden" i18n="@@ngb.carousel.previous">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" (click)="arrowRight()" *ngIf="showNavigationArrows">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden" i18n="@@ngb.carousel.next">Next</span>
		</button>
	`
    }]
  }], function () {
    return [{
      type: NgbCarouselConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    slides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbSlide]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    interval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    wrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showNavigationArrows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showNavigationIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    slid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
var NgbSlideEventSource;
(function (NgbSlideEventSource) {
  NgbSlideEventSource["TIMER"] = "timer";
  NgbSlideEventSource["ARROW_LEFT"] = "arrowLeft";
  NgbSlideEventSource["ARROW_RIGHT"] = "arrowRight";
  NgbSlideEventSource["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));
class NgbCarouselModule {}
NgbCarouselModule.ɵfac = function NgbCarouselModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCarouselModule)();
};
NgbCarouselModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbCarouselModule
});
NgbCarouselModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbCarousel]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbCarousel, NgbSlide],
      exports: [NgbCarousel, NgbSlide]
    }]
  }], null, null);
})();

/**
 * A configuration service for the [NgbCollapse](#/components/collapse/api#NgbCollapse) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all collapses used in the application.
 */
class NgbCollapseConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.horizontal = false;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbCollapseConfig.ɵfac = function NgbCollapseConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCollapseConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbCollapseConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCollapseConfig,
  factory: NgbCollapseConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCollapseConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

/**
 * A directive to provide a simple way of hiding and showing elements on the
 * page.
 */
class NgbCollapse {
  constructor(_element, config, _zone) {
    this._element = _element;
    this._zone = _zone;
    /**
     * Flag used to track if the collapse setter is invoked during initialization
     * or not. This distinction is made in order to avoid running the transition during initialization.
     */
    this._afterInit = false;
    this._isCollapsed = false;
    this.ngbCollapseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the collapse element is shown, after the transition.
     * It has no payload.
     *
     * @since 8.0.0
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the collapse element is hidden, after the transition.
     * It has no payload.
     *
     * @since 8.0.0
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.animation = config.animation;
    this.horizontal = config.horizontal;
  }
  /**
   * If `true`, will collapse the element or show it otherwise.
   */
  set collapsed(isCollapsed) {
    if (this._isCollapsed !== isCollapsed) {
      this._isCollapsed = isCollapsed;
      if (this._afterInit) {
        this._runTransitionWithEvents(isCollapsed, this.animation);
      }
    }
  }
  ngOnInit() {
    this._runTransition(this._isCollapsed, false);
    this._afterInit = true;
  }
  /**
   * Triggers collapsing programmatically.
   *
   * If there is a collapsing transition running already, it will be reversed.
   * If the animations are turned off this happens synchronously.
   *
   * @since 8.0.0
   */
  toggle(open = this._isCollapsed) {
    this.collapsed = !open;
    this.ngbCollapseChange.next(this._isCollapsed);
  }
  _runTransition(collapsed, animation) {
    return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, {
      animation,
      runningTransition: 'stop',
      context: {
        direction: collapsed ? 'hide' : 'show',
        dimension: this.horizontal ? 'width' : 'height'
      }
    });
  }
  _runTransitionWithEvents(collapsed, animation) {
    this._runTransition(collapsed, animation).subscribe(() => {
      if (collapsed) {
        this.hidden.emit();
      } else {
        this.shown.emit();
      }
    });
  }
}
NgbCollapse.ɵfac = function NgbCollapse_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCollapse)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCollapseConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbCollapse.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbCollapse,
  selectors: [["", "ngbCollapse", ""]],
  hostVars: 2,
  hostBindings: function NgbCollapse_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapse-horizontal", ctx.horizontal);
    }
  },
  inputs: {
    animation: "animation",
    collapsed: [0, "ngbCollapse", "collapsed"],
    horizontal: "horizontal"
  },
  outputs: {
    ngbCollapseChange: "ngbCollapseChange",
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbCollapse"],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCollapse, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbCollapse]',
      exportAs: 'ngbCollapse',
      standalone: true,
      host: {
        '[class.collapse-horizontal]': 'horizontal'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NgbCollapseConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngbCollapse']
    }],
    ngbCollapseChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    horizontal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgbCollapseModule {}
NgbCollapseModule.ɵfac = function NgbCollapseModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCollapseModule)();
};
NgbCollapseModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbCollapseModule
});
NgbCollapseModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCollapseModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbCollapse],
      exports: [NgbCollapse]
    }]
  }], null, null);
})();

/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * @since 3.0.0
 */
class NgbDate {
  constructor(year, month, day) {
    this.year = isInteger(year) ? year : null;
    this.month = isInteger(month) ? month : null;
    this.day = isInteger(day) ? day : null;
  }
  /**
   * A **static method** that creates a new date object from the `NgbDateStruct`,
   *
   * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
   *
   * If the `date` is already of `NgbDate` type, the method will return the same object.
   */
  static from(date) {
    if (date instanceof NgbDate) {
      return date;
    }
    return date ? new NgbDate(date.year, date.month, date.day) : null;
  }
  /**
   * Checks if the current date is equal to another date.
   */
  equals(other) {
    return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
  }
  /**
   * Checks if the current date is before another date.
   */
  before(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day < other.day;
      } else {
        return this.month < other.month;
      }
    } else {
      return this.year < other.year;
    }
  }
  /**
   * Checks if the current date is after another date.
   */
  after(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day > other.day;
      } else {
        return this.month > other.month;
      }
    } else {
      return this.year > other.year;
    }
  }
}
function isChangedDate(prev, next) {
  return !dateComparator(prev, next);
}
function isChangedMonth(prev, next) {
  return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
function dateComparator(prev, next) {
  return !prev && !next || !!prev && !!next && prev.equals(next);
}
function checkMinBeforeMax(minDate, maxDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}
function checkDateInRange(date, minDate, maxDate) {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }
  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }
  return date || null;
}
function isDateSelectable(date, state) {
  const {
    minDate,
    maxDate,
    disabled,
    markDisabled
  } = state;
  return !(date === null || date === undefined || disabled || markDisabled && markDisabled(date, {
    year: date.year,
    month: date.month
  }) || minDate && date.before(minDate) || maxDate && date.after(maxDate));
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  let months = calendar.getMonths(date.year);
  if (minDate && date.year === minDate.year) {
    const index = months.findIndex(month => month === minDate.month);
    months = months.slice(index);
  }
  if (maxDate && date.year === maxDate.year) {
    const index = months.findIndex(month => month === maxDate.month);
    months = months.slice(0, index + 1);
  }
  return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  const start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
  const end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
  const length = end - start + 1;
  const numbers = Array(length);
  for (let i = 0; i < length; i++) {
    numbers[i] = start + i;
  }
  return numbers;
}
function nextMonthDisabled(calendar, date, maxDate) {
  const nextDate = Object.assign(calendar.getNext(date, 'm'), {
    day: 1
  });
  return maxDate != null && nextDate.after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
  const prevDate = Object.assign(calendar.getPrev(date, 'm'), {
    day: 1
  });
  return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
  const {
    displayMonths,
    months
  } = state;
  // move old months to a temporary array
  const monthsToReuse = months.splice(0, months.length);
  // generate new first dates, nullify or reuse months
  const firstDates = Array.from({
    length: displayMonths
  }, (_, i) => {
    const firstDate = Object.assign(calendar.getNext(date, 'm', i), {
      day: 1
    });
    months[i] = null;
    if (!force) {
      const reusedIndex = monthsToReuse.findIndex(month => month.firstDate.equals(firstDate));
      // move reused month back to months
      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }
    return firstDate;
  });
  // rebuild nullified months
  firstDates.forEach((firstDate, i) => {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
    }
  });
  return months;
}
function buildMonth(calendar, date, state, i18n, month = {}) {
  const {
    dayTemplateData,
    minDate,
    maxDate,
    firstDayOfWeek,
    markDisabled,
    outsideDays,
    weekdayWidth,
    weekdaysVisible
  } = state;
  const calendarToday = calendar.getToday();
  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];
  date = getFirstViewDate(calendar, date, firstDayOfWeek);
  // clearing weekdays, if not visible
  if (!weekdaysVisible) {
    month.weekdays.length = 0;
  }
  // month has weeks
  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    let weekObject = month.weeks[week];
    if (!weekObject) {
      weekObject = month.weeks[week] = {
        number: 0,
        days: [],
        collapsed: true
      };
    }
    const days = weekObject.days;
    // week has days
    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0 && weekdaysVisible) {
        month.weekdays[day] = i18n.getWeekdayLabel(calendar.getWeekday(date), weekdayWidth);
      }
      const newDate = new NgbDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);
      const ariaLabel = i18n.getDayAriaLabel(newDate);
      // marking date as disabled
      let disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));
      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {
          month: month.number,
          year: month.year
        });
      }
      // today
      let today = newDate.equals(calendarToday);
      // adding user-provided data to the context
      let contextUserData = dayTemplateData ? dayTemplateData(newDate, {
        month: month.number,
        year: month.year
      }) : undefined;
      // saving first date of the month
      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      }
      // saving last date of the month
      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }
      let dayObject = days[day];
      if (!dayObject) {
        dayObject = days[day] = {};
      }
      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number,
        currentYear: month.year,
        disabled,
        focused: false,
        selected: false,
        today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;
      date = nextDate;
    }
    weekObject.number = calendar.getWeekNumber(days.map(day => day.date), firstDayOfWeek);
    // marking week as collapsed
    weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
  }
  return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
  const daysPerWeek = calendar.getDaysPerWeek();
  const firstMonthDate = new NgbDate(date.year, date.month, 1);
  const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
function fromJSDate(jsDate) {
  return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
  const jsDate = new Date(date.year, date.month - 1, date.day, 12);
  // this is done avoid 30 -> 1930 conversion
  if (!isNaN(jsDate.getTime())) {
    jsDate.setFullYear(date.year);
  }
  return jsDate;
}
function NGB_DATEPICKER_CALENDAR_FACTORY() {
  return new NgbCalendarGregorian();
}
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 */
class NgbCalendar {}
NgbCalendar.ɵfac = function NgbCalendar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbCalendar)();
};
NgbCalendar.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendar,
  factory: () => NGB_DATEPICKER_CALENDAR_FACTORY(),
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
    }]
  }], null, null);
})();
class NgbCalendarGregorian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = 'd', number = 1) {
    let jsDate = toJSDate(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case 'y':
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case 'm':
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case 'd':
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      // this means the destination month has less days than the initial month
      // let's go back to the end of the previous month:
      jsDate.setDate(0);
    }
    return fromJSDate(jsDate);
  }
  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toJSDate(date);
    let day = jsDate.getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toJSDate(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
    const time = jsDate.getTime();
    jsDate.setMonth(0); // Compare with Jan 1
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
  }
  getToday() {
    return fromJSDate(new Date());
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    // year 0 doesn't exist in Gregorian calendar
    if (date.year === 0) {
      return false;
    }
    const jsDate = toJSDate(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
}
NgbCalendarGregorian.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarGregorian_BaseFactory;
  return function NgbCalendarGregorian_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarGregorian_BaseFactory || (ɵNgbCalendarGregorian_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarGregorian)))(__ngFactoryType__ || NgbCalendarGregorian);
  };
})();
NgbCalendarGregorian.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarGregorian,
  factory: NgbCalendarGregorian.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarGregorian, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
function NGB_DATEPICKER_18N_FACTORY(locale) {
  return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
class NgbDatepickerI18n {
  /**
   * Returns the text label to display above the day view.
   *
   * @since 9.1.0
   */
  getMonthLabel(date) {
    return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
  }
  /**
   * Returns the textual representation of a day that is rendered in a day cell.
   *
   * @since 3.0.0
   */
  getDayNumerals(date) {
    return `${date.day}`;
  }
  /**
   * Returns the textual representation of a week number rendered by datepicker.
   *
   * @since 3.0.0
   */
  getWeekNumerals(weekNumber) {
    return `${weekNumber}`;
  }
  /**
   * Returns the textual representation of a year that is rendered in the datepicker year select box.
   *
   * @since 3.0.0
   */
  getYearNumerals(year) {
    return `${year}`;
  }
  /**
   * Returns the week label to display in the heading of the month view.
   *
   * @since 9.1.0
   */
  getWeekLabel() {
    return '';
  }
}
NgbDatepickerI18n.ɵfac = function NgbDatepickerI18n_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerI18n)();
};
NgbDatepickerI18n.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18n,
  factory: function NgbDatepickerI18n_Factory(__ngFactoryType__) {
    let __ngConditionalFactory__ = null;
    if (__ngFactoryType__) {
      __ngConditionalFactory__ = new __ngFactoryType__();
    } else {
      __ngConditionalFactory__ = NGB_DATEPICKER_18N_FACTORY(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
    }
    return __ngConditionalFactory__;
  },
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerI18n, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_18N_FACTORY,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
    }]
  }], null, null);
})();
/**
 * A service providing default implementation for the datepicker i18n.
 * It can be used as a base implementation if necessary.
 *
 * @since 9.1.0
 */
class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
  constructor(_locale) {
    super();
    this._locale = _locale;
    this._monthsShort = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleMonthNames)(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Abbreviated);
    this._monthsFull = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleMonthNames)(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Wide);
  }
  getWeekdayLabel(weekday, width) {
    const weekdaysStartingOnSunday = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleDayNames)(this._locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, width === undefined ? _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short : width);
    const weekdays = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);
    return weekdays[weekday - 1] || '';
  }
  getMonthShortName(month) {
    return this._monthsShort[month - 1] || '';
  }
  getMonthFullName(month) {
    return this._monthsFull[month - 1] || '';
  }
  getDayAriaLabel(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(jsDate, 'fullDate', this._locale);
  }
}
NgbDatepickerI18nDefault.ɵfac = function NgbDatepickerI18nDefault_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerI18nDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};
NgbDatepickerI18nDefault.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18nDefault,
  factory: NgbDatepickerI18nDefault.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerI18nDefault, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();
class NgbDatepickerService {
  constructor(_calendar, _i18n) {
    this._calendar = _calendar;
    this._i18n = _i18n;
    this._VALIDATORS = {
      dayTemplateData: dayTemplateData => {
        if (this._state.dayTemplateData !== dayTemplateData) {
          return {
            dayTemplateData
          };
        }
      },
      displayMonths: displayMonths => {
        displayMonths = toInteger(displayMonths);
        if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
          return {
            displayMonths
          };
        }
      },
      disabled: disabled => {
        if (this._state.disabled !== disabled) {
          return {
            disabled
          };
        }
      },
      firstDayOfWeek: firstDayOfWeek => {
        firstDayOfWeek = toInteger(firstDayOfWeek);
        if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
          return {
            firstDayOfWeek
          };
        }
      },
      focusVisible: focusVisible => {
        if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
          return {
            focusVisible
          };
        }
      },
      markDisabled: markDisabled => {
        if (this._state.markDisabled !== markDisabled) {
          return {
            markDisabled
          };
        }
      },
      maxDate: date => {
        const maxDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.maxDate, maxDate)) {
          return {
            maxDate
          };
        }
      },
      minDate: date => {
        const minDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.minDate, minDate)) {
          return {
            minDate
          };
        }
      },
      navigation: navigation => {
        if (this._state.navigation !== navigation) {
          return {
            navigation
          };
        }
      },
      outsideDays: outsideDays => {
        if (this._state.outsideDays !== outsideDays) {
          return {
            outsideDays
          };
        }
      },
      weekdays: weekdays => {
        const weekdayWidth = weekdays === true || weekdays === false ? _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short : weekdays;
        const weekdaysVisible = weekdays === true || weekdays === false ? weekdays : true;
        if (this._state.weekdayWidth !== weekdayWidth || this._state.weekdaysVisible !== weekdaysVisible) {
          return {
            weekdayWidth,
            weekdaysVisible
          };
        }
      }
    };
    this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._dateSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._state = {
      dayTemplateData: null,
      markDisabled: null,
      maxDate: null,
      minDate: null,
      disabled: false,
      displayMonths: 1,
      firstDate: null,
      firstDayOfWeek: 1,
      lastDate: null,
      focusDate: null,
      focusVisible: false,
      months: [],
      navigation: 'select',
      outsideDays: 'visible',
      prevDisabled: false,
      nextDisabled: false,
      selectedDate: null,
      selectBoxes: {
        years: [],
        months: []
      },
      weekdayWidth: _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short,
      weekdaysVisible: true
    };
  }
  get model$() {
    return this._model$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(model => model.months.length > 0));
  }
  get dateSelect$() {
    return this._dateSelect$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(date => date !== null));
  }
  set(options) {
    let patch = Object.keys(options).map(key => this._VALIDATORS[key](options[key])).reduce((obj, part) => ({
      ...obj,
      ...part
    }), {});
    if (Object.keys(patch).length > 0) {
      this._nextState(patch);
    }
  }
  focus(date) {
    const focusedDate = this.toValidDate(date, null);
    if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
      this._nextState({
        focusDate: date
      });
    }
  }
  focusSelect() {
    if (isDateSelectable(this._state.focusDate, this._state)) {
      this.select(this._state.focusDate, {
        emitEvent: true
      });
    }
  }
  open(date) {
    const firstDate = this.toValidDate(date, this._calendar.getToday());
    if (firstDate != null && !this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
      this._nextState({
        firstDate
      });
    }
  }
  select(date, options = {}) {
    const selectedDate = this.toValidDate(date, null);
    if (selectedDate != null && !this._state.disabled) {
      if (isChangedDate(this._state.selectedDate, selectedDate)) {
        this._nextState({
          selectedDate
        });
      }
      if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
        this._dateSelect$.next(selectedDate);
      }
    }
  }
  toValidDate(date, defaultValue) {
    const ngbDate = NgbDate.from(date);
    if (defaultValue === undefined) {
      defaultValue = this._calendar.getToday();
    }
    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
  }
  getMonth(struct) {
    for (let month of this._state.months) {
      if (struct.month === month.number && struct.year === month.year) {
        return month;
      }
    }
    throw new Error(`month ${struct.month} of year ${struct.year} not found`);
  }
  _nextState(patch) {
    const newState = this._updateState(patch);
    this._patchContexts(newState);
    this._state = newState;
    this._model$.next(this._state);
  }
  _patchContexts(state) {
    const {
      months,
      displayMonths,
      selectedDate,
      focusDate,
      focusVisible,
      disabled,
      outsideDays
    } = state;
    state.months.forEach(month => {
      month.weeks.forEach(week => {
        week.days.forEach(day => {
          // patch focus flag
          if (focusDate) {
            day.context.focused = focusDate.equals(day.date) && focusVisible;
          }
          // calculating tabindex
          day.tabindex = !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
          // override context disabled
          if (disabled === true) {
            day.context.disabled = true;
          }
          // patch selection flag
          if (selectedDate !== undefined) {
            day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
          }
          // visibility
          if (month.number !== day.date.month) {
            day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
          }
        });
      });
    });
  }
  _updateState(patch) {
    // patching fields
    const state = Object.assign({}, this._state, patch);
    let startDate = state.firstDate;
    // min/max dates changed
    if ('minDate' in patch || 'maxDate' in patch) {
      checkMinBeforeMax(state.minDate, state.maxDate);
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
    }
    // disabled
    if ('disabled' in patch) {
      state.focusVisible = false;
    }
    // initial rebuild via 'select()'
    if ('selectedDate' in patch && this._state.months.length === 0) {
      startDate = state.selectedDate;
    }
    // terminate early if only focus visibility was changed
    if ('focusVisible' in patch) {
      return state;
    }
    // focus date changed
    if ('focusDate' in patch) {
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
      // nothing to rebuild if only focus changed and it is still visible
      if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
        return state;
      }
    }
    // first date changed
    if ('firstDate' in patch) {
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.firstDate;
    }
    // rebuilding months
    if (startDate) {
      const forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch || 'weekdaysVisible' in patch;
      const months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
      // updating months and boundary dates
      state.months = months;
      state.firstDate = months[0].firstDate;
      state.lastDate = months[months.length - 1].lastDate;
      // reset selected date if 'markDisabled' returns true
      if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
        state.selectedDate = null;
      }
      // adjusting focus after months were built
      if ('firstDate' in patch) {
        if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
          state.focusDate = startDate;
        }
      }
      // adjusting months/years for the select box navigation
      const yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
      const monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
      if (state.navigation === 'select') {
        // years ->  boundaries (min/max were changed)
        if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
          state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
        }
        // months -> when current year or boundaries change
        if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
          state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
        }
      } else {
        state.selectBoxes = {
          years: [],
          months: []
        };
      }
      // updating navigation arrows -> boundaries change (min/max) or month/year changes
      if ((state.navigation === 'arrows' || state.navigation === 'select') && (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
        state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
        state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
      }
    }
    return state;
  }
}
NgbDatepickerService.ɵfac = function NgbDatepickerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbDatepickerI18n));
};
NgbDatepickerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerService,
  factory: NgbDatepickerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: NgbCalendar
    }, {
      type: NgbDatepickerI18n
    }];
  }, null);
})();
var NavigationEvent;
(function (NavigationEvent) {
  NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
  NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
class NgbDatepickerDayView {
  constructor(i18n) {
    this.i18n = i18n;
  }
  isMuted() {
    return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
  }
}
NgbDatepickerDayView.ɵfac = function NgbDatepickerDayView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerDayView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};
NgbDatepickerDayView.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerDayView,
  selectors: [["", "ngbDatepickerDayView", ""]],
  hostAttrs: [1, "btn-light"],
  hostVars: 10,
  hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
    }
  },
  inputs: {
    currentMonth: "currentMonth",
    date: "date",
    disabled: "disabled",
    focused: "focused",
    selected: "selected"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  attrs: _c2,
  decls: 1,
  vars: 1,
  template: function NgbDatepickerDayView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.i18n.getDayNumerals(ctx.date));
    }
  },
  styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-btn-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerDayView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[ngbDatepickerDayView]',
      standalone: true,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'btn-light',
        '[class.bg-primary]': 'selected',
        '[class.text-white]': 'selected',
        '[class.text-muted]': 'isMuted()',
        '[class.outside]': 'isMuted()',
        '[class.active]': 'focused'
      },
      template: `{{ i18n.getDayNumerals(date) }}`,
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-btn-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    currentMonth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgbDatepickerNavigationSelect {
  constructor(i18n, _renderer) {
    this.i18n = i18n;
    this._renderer = _renderer;
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._month = -1;
    this._year = -1;
  }
  changeMonth(month) {
    this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
  }
  changeYear(year) {
    this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
  }
  ngAfterViewChecked() {
    if (this.date) {
      if (this.date.month !== this._month) {
        this._month = this.date.month;
        this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
      }
      if (this.date.year !== this._year) {
        this._year = this.date.year;
        this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
      }
    }
  }
}
NgbDatepickerNavigationSelect.ɵfac = function NgbDatepickerNavigationSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerNavigationSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
NgbDatepickerNavigationSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerNavigationSelect,
  selectors: [["ngb-datepicker-navigation-select"]],
  viewQuery: function NgbDatepickerNavigationSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthSelect = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearSelect = _t.first);
    }
  },
  inputs: {
    date: "date",
    disabled: "disabled",
    months: "months",
    years: "years"
  },
  outputs: {
    select: "select"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 4,
  consts: () => {
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_4 = goog.getMsg("Select month");
      i18n_4 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_4;
    } else {
      i18n_4 = $localize`:@@ngb.datepicker.select-month:Select month`;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_5 = goog.getMsg("Select month");
      i18n_5 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_5;
    } else {
      i18n_5 = $localize`:@@ngb.datepicker.select-month:Select month`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_6 = goog.getMsg("Select year");
      i18n_6 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_6;
    } else {
      i18n_6 = $localize`:@@ngb.datepicker.select-year:Select year`;
    }
    let i18n_7;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_7 = goog.getMsg("Select year");
      i18n_7 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_7;
    } else {
      i18n_7 = $localize`:@@ngb.datepicker.select-year:Select year`;
    }
    return [["month", ""], ["year", ""], ["aria-label", i18n_4, "title", i18n_5, 1, "form-select", 3, "change", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", i18n_6, "title", i18n_7, 1, "form-select", 3, "change", "disabled"], [3, "value"]];
  },
  template: function NgbDatepickerNavigationSelect_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 2, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.changeMonth($event.target.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbDatepickerNavigationSelect_option_2_Template, 2, 3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbDatepickerNavigationSelect_Template_select_change_3_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.changeYear($event.target.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbDatepickerNavigationSelect_option_5_Template, 2, 2, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor],
  styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerNavigationSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-datepicker-navigation-select',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
		<select
			#month
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-month"
			aria-label="Select month"
			i18n-title="@@ngb.datepicker.select-month"
			title="Select month"
			(change)="changeMonth($any($event).target.value)"
		>
			<option *ngFor="let m of months" [attr.aria-label]="i18n.getMonthFullName(m, date.year)" [value]="m">{{
				i18n.getMonthShortName(m, date.year)
			}}</option> </select
		><select
			#year
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-year"
			aria-label="Select year"
			i18n-title="@@ngb.datepicker.select-year"
			title="Select year"
			(change)="changeYear($any($event).target.value)"
		>
			<option *ngFor="let y of years" [value]="y">{{ i18n.getYearNumerals(y) }}</option>
		</select>
	`,
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    months: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    years: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['month', {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    yearSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['year', {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();
class NgbDatepickerNavigation {
  constructor(i18n) {
    this.i18n = i18n;
    this.navigation = NavigationEvent;
    this.months = [];
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClickPrev(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.PREV);
  }
  onClickNext(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.NEXT);
  }
}
NgbDatepickerNavigation.ɵfac = function NgbDatepickerNavigation_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerNavigation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};
NgbDatepickerNavigation.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerNavigation,
  selectors: [["ngb-datepicker-navigation"]],
  inputs: {
    date: "date",
    disabled: "disabled",
    months: "months",
    showSelect: "showSelect",
    prevDisabled: "prevDisabled",
    nextDisabled: "nextDisabled",
    selectBoxes: "selectBoxes"
  },
  outputs: {
    navigate: "navigate",
    select: "select"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 4,
  consts: () => {
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_8 = goog.getMsg("Previous month");
      i18n_8 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_8;
    } else {
      i18n_8 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
    }
    let i18n_9;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_9 = goog.getMsg("Previous month");
      i18n_9 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_9;
    } else {
      i18n_9 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_10 = goog.getMsg("Next month");
      i18n_10 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_10;
    } else {
      i18n_10 = $localize`:@@ngb.datepicker.next-month:Next month`;
    }
    let i18n_11;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_11 = goog.getMsg("Next month");
      i18n_11 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_11;
    } else {
      i18n_11 = $localize`:@@ngb.datepicker.next-month:Next month`;
    }
    return [[1, "ngb-dp-arrow"], ["type", "button", "aria-label", i18n_8, "title", i18n_9, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-chevron"], ["class", "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select", 4, "ngIf"], [4, "ngIf"], [1, "ngb-dp-arrow", "right"], ["type", "button", "aria-label", i18n_10, "title", i18n_11, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-select", 3, "select", "date", "disabled", "months", "years"], ["ngFor", "", 3, "ngForOf"], ["class", "ngb-dp-arrow", 4, "ngIf"], [1, "ngb-dp-month-name"]];
  },
  template: function NgbDatepickerNavigation_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDatepickerNavigation_Template_button_click_1_listener($event) {
        return ctx.onClickPrev($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template, 1, 4, "ngb-datepicker-navigation-select", 3)(4, NgbDatepickerNavigation_4_Template, 1, 1, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDatepickerNavigation_Template_button_click_6_listener($event) {
        return ctx.onClickNext($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextDisabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, NgbDatepickerNavigationSelect],
  styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerNavigation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-datepicker-navigation',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, NgbDatepickerNavigationSelect],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
		<div class="ngb-dp-arrow">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickPrev($event)"
				[disabled]="prevDisabled"
				i18n-aria-label="@@ngb.datepicker.previous-month"
				aria-label="Previous month"
				i18n-title="@@ngb.datepicker.previous-month"
				title="Previous month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
		<ngb-datepicker-navigation-select
			*ngIf="showSelect"
			class="ngb-dp-navigation-select"
			[date]="date"
			[disabled]="disabled"
			[months]="selectBoxes.months"
			[years]="selectBoxes.years"
			(select)="select.emit($event)"
		>
		</ngb-datepicker-navigation-select>

		<ng-template *ngIf="!showSelect" ngFor let-month [ngForOf]="months" let-i="index">
			<div class="ngb-dp-arrow" *ngIf="i > 0"></div>
			<div class="ngb-dp-month-name">
				{{ i18n.getMonthLabel(month.firstDate) }}
			</div>
			<div class="ngb-dp-arrow" *ngIf="i !== months.length - 1"></div>
		</ng-template>
		<div class="ngb-dp-arrow right">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickNext($event)"
				[disabled]="nextDisabled"
				i18n-aria-label="@@ngb.datepicker.next-month"
				aria-label="Next month"
				i18n-title="@@ngb.datepicker.next-month"
				title="Next month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
	`,
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    months: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prevDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectBoxes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
var Key;
(function (Key) {
  Key[Key["Tab"] = 9] = "Tab";
  Key[Key["Enter"] = 13] = "Enter";
  Key[Key["Escape"] = 27] = "Escape";
  Key[Key["Space"] = 32] = "Space";
  Key[Key["PageUp"] = 33] = "PageUp";
  Key[Key["PageDown"] = 34] = "PageDown";
  Key[Key["End"] = 35] = "End";
  Key[Key["Home"] = 36] = "Home";
  Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
  Key[Key["ArrowUp"] = 38] = "ArrowUp";
  Key[Key["ArrowRight"] = 39] = "ArrowRight";
  Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));

/**
 * A service that represents the keyboard navigation.
 *
 * Default keyboard shortcuts [are documented in the overview](#/components/datepicker/overview#keyboard-shortcuts)
 *
 * @since 5.2.0
 */
class NgbDatepickerKeyboardService {
  /**
   * Processes a keyboard event.
   */
  processKey(event, datepicker) {
    const {
      state,
      calendar
    } = datepicker;
    /* eslint-disable-next-line deprecation/deprecation */
    switch (event.which) {
      case Key.PageUp:
        datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
        break;
      case Key.PageDown:
        datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
        break;
      case Key.End:
        datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
        break;
      case Key.Home:
        datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
        break;
      case Key.ArrowLeft:
        datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', 1));
        break;
      case Key.ArrowUp:
        datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', calendar.getDaysPerWeek()));
        break;
      case Key.ArrowRight:
        datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', 1));
        break;
      case Key.ArrowDown:
        datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', calendar.getDaysPerWeek()));
        break;
      case Key.Enter:
      case Key.Space:
        datepicker.focusSelect();
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }
}
NgbDatepickerKeyboardService.ɵfac = function NgbDatepickerKeyboardService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerKeyboardService)();
};
NgbDatepickerKeyboardService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerKeyboardService,
  factory: NgbDatepickerKeyboardService.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerKeyboardService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
class NgbDatepickerConfig {
  constructor() {
    this.displayMonths = 1;
    this.firstDayOfWeek = 1;
    this.navigation = 'select';
    this.outsideDays = 'visible';
    this.showWeekNumbers = false;
    this.weekdays = _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short;
  }
}
NgbDatepickerConfig.ɵfac = function NgbDatepickerConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerConfig)();
};
NgbDatepickerConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerConfig,
  factory: NgbDatepickerConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
class NgbDateAdapter {}
NgbDateAdapter.ɵfac = function NgbDateAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDateAdapter)();
};
NgbDateAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateAdapter,
  factory: () => NGB_DATEPICKER_DATE_ADAPTER_FACTORY(),
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
    }]
  }], null, null);
})();
class NgbDateStructAdapter extends NgbDateAdapter {
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  fromModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
}
NgbDateStructAdapter.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbDateStructAdapter_BaseFactory;
  return function NgbDateStructAdapter_Factory(__ngFactoryType__) {
    return (ɵNgbDateStructAdapter_BaseFactory || (ɵNgbDateStructAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateStructAdapter)))(__ngFactoryType__ || NgbDateStructAdapter);
  };
})();
NgbDateStructAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateStructAdapter,
  factory: NgbDateStructAdapter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateStructAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * A directive that marks the content template that customizes the way datepicker months are displayed
 *
 * @since 5.3.0
 */
class NgbDatepickerContent {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbDatepickerContent.ɵfac = function NgbDatepickerContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbDatepickerContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDatepickerContent,
  selectors: [["ng-template", "ngbDatepickerContent", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbDatepickerContent]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
class NgbDatepickerMonth {
  constructor(i18n, datepicker, _keyboardService, _service) {
    this.i18n = i18n;
    this.datepicker = datepicker;
    this._keyboardService = _keyboardService;
    this._service = _service;
  }
  /**
   * The first date of month to be rendered.
   *
   * This month must one of the months present in the
   * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
   */
  set month(month) {
    this.viewModel = this._service.getMonth(month);
  }
  onKeyDown(event) {
    this._keyboardService.processKey(event, this.datepicker);
  }
  doSelect(day) {
    if (!day.context.disabled && !day.hidden) {
      this.datepicker.onDateSelect(day.date);
    }
  }
}
NgbDatepickerMonth.ɵfac = function NgbDatepickerMonth_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerMonth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDatepicker)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerKeyboardService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerService));
};
NgbDatepickerMonth.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerMonth,
  selectors: [["ngb-datepicker-month"]],
  hostAttrs: ["role", "grid"],
  hostBindings: function NgbDatepickerMonth_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgbDatepickerMonth_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    month: "month"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "ngb-dp-week ngb-dp-weekdays", "role", "row", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], ["class", "ngb-dp-weekday ngb-dp-showweek small", 4, "ngIf"], ["class", "ngb-dp-weekday small", "role", "columnheader", 4, "ngFor", "ngForOf"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["class", "ngb-dp-week", "role", "row", 4, "ngIf"], ["role", "row", 1, "ngb-dp-week"], ["class", "ngb-dp-week-number small text-muted", 4, "ngIf"], ["class", "ngb-dp-day", "role", "gridcell", 3, "disabled", "tabindex", "hidden", "ngb-dp-today", "click", 4, "ngFor", "ngForOf"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "click", "tabindex"], [3, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbDatepickerMonth_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerMonth_div_0_Template, 3, 2, "div", 0)(1, NgbDatepickerMonth_ng_template_1_Template, 1, 1, "ng-template", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewModel.weekdays.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewModel.weeks);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  styles: ["ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-light)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerMonth, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-datepicker-month',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
      host: {
        role: 'grid',
        '(keydown)': 'onKeyDown($event)'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
		<div *ngIf="viewModel.weekdays.length > 0" class="ngb-dp-week ngb-dp-weekdays" role="row">
			<div *ngIf="datepicker.showWeekNumbers" class="ngb-dp-weekday ngb-dp-showweek small">{{
				i18n.getWeekLabel()
			}}</div>
			<div *ngFor="let weekday of viewModel.weekdays" class="ngb-dp-weekday small" role="columnheader">{{
				weekday
			}}</div>
		</div>
		<ng-template ngFor let-week [ngForOf]="viewModel.weeks">
			<div *ngIf="!week.collapsed" class="ngb-dp-week" role="row">
				<div *ngIf="datepicker.showWeekNumbers" class="ngb-dp-week-number small text-muted">{{
					i18n.getWeekNumerals(week.number)
				}}</div>
				<div
					*ngFor="let day of week.days"
					(click)="doSelect(day); $event.preventDefault()"
					class="ngb-dp-day"
					role="gridcell"
					[class.disabled]="day.context.disabled"
					[tabindex]="day.tabindex"
					[class.hidden]="day.hidden"
					[class.ngb-dp-today]="day.context.today"
					[attr.aria-label]="day.ariaLabel"
				>
					<ng-template [ngIf]="!day.hidden">
						<ng-template
							[ngTemplateOutlet]="datepicker.dayTemplate"
							[ngTemplateOutletContext]="day.context"
						></ng-template>
					</ng-template>
				</div>
			</div>
		</ng-template>
	`,
      styles: ["ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-light)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }, {
      type: NgbDatepicker,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDatepicker)]
      }]
    }, {
      type: NgbDatepickerKeyboardService
    }, {
      type: NgbDatepickerService
    }];
  }, {
    month: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
class NgbDatepicker {
  constructor(_service, _calendar, i18n, config, cd, _elementRef, _ngbDateAdapter, _ngZone) {
    this._service = _service;
    this._calendar = _calendar;
    this.i18n = i18n;
    this._elementRef = _elementRef;
    this._ngbDateAdapter = _ngbDateAdapter;
    this._ngZone = _ngZone;
    this._controlValue = null;
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._publicState = {};
    /**
     * An event emitted right before the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 5.2.0
     */
    this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChange = _ => {};
    this.onTouched = () => {};
    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showWeekNumbers', 'startDate', 'weekdays'].forEach(input => this[input] = config[input]);
    _service.dateSelect$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed$)).subscribe(date => {
      this.dateSelect.emit(date);
    });
    _service.model$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed$)).subscribe(model => {
      const newDate = model.firstDate;
      const oldDate = this.model ? this.model.firstDate : null;
      // update public state
      this._publicState = {
        maxDate: model.maxDate,
        minDate: model.minDate,
        firstDate: model.firstDate,
        lastDate: model.lastDate,
        focusedDate: model.focusDate,
        months: model.months.map(viewModel => viewModel.firstDate)
      };
      let navigationPrevented = false;
      // emitting navigation event if the first month changes
      if (!newDate.equals(oldDate)) {
        this.navigate.emit({
          current: oldDate ? {
            year: oldDate.year,
            month: oldDate.month
          } : null,
          next: {
            year: newDate.year,
            month: newDate.month
          },
          preventDefault: () => navigationPrevented = true
        });
        // can't prevent the very first navigation
        if (navigationPrevented && oldDate !== null) {
          this._service.open(oldDate);
          return;
        }
      }
      const newSelectedDate = model.selectedDate;
      const newFocusedDate = model.focusDate;
      const oldFocusedDate = this.model ? this.model.focusDate : null;
      this.model = model;
      // handling selection change
      if (isChangedDate(newSelectedDate, this._controlValue)) {
        this._controlValue = newSelectedDate;
        this.onTouched();
        this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
      }
      // handling focus change
      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        this.focus();
      }
      cd.markForCheck();
    });
  }
  /**
   *  Returns the readonly public state of the datepicker
   *
   * @since 5.2.0
   */
  get state() {
    return this._publicState;
  }
  /**
   *  Returns the calendar service used in the specific datepicker instance.
   *
   *  @since 5.3.0
   */
  get calendar() {
    return this._calendar;
  }
  /**
   *  Focuses on given date.
   */
  focusDate(date) {
    this._service.focus(NgbDate.from(date));
  }
  /**
   *  Selects focused date.
   */
  focusSelect() {
    this._service.focusSelect();
  }
  focus() {
    this._ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      const elementToFocus = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
      if (elementToFocus) {
        elementToFocus.focus();
      }
    });
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    this._service.open(NgbDate.from(date ? date.day ? date : {
      ...date,
      day: 1
    } : null));
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      const focusIns$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._contentEl.nativeElement, 'focusin');
      const focusOuts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._contentEl.nativeElement, 'focusout');
      const {
        nativeElement
      } = this._elementRef;
      // we're changing 'focusVisible' only when entering or leaving months view
      // and ignoring all focus events where both 'target' and 'related' target are day cells
      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(focusIns$, focusOuts$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(({
        target,
        relatedTarget
      }) => !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day') && nativeElement.contains(target) && nativeElement.contains(relatedTarget))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed$)).subscribe(({
        type
      }) => this._ngZone.run(() => this._service.set({
        focusVisible: type === 'focusin'
      })));
    });
  }
  ngOnDestroy() {
    this._destroyed$.next();
  }
  ngOnInit() {
    if (this.model === undefined) {
      const inputs = {};
      ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays', 'weekdays'].forEach(name => inputs[name] = this[name]);
      this._service.set(inputs);
      this.navigateTo(this.startDate);
    }
    if (!this.dayTemplate) {
      this.dayTemplate = this._defaultDayTemplate;
    }
  }
  ngOnChanges(changes) {
    const inputs = {};
    ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays', 'weekdays'].filter(name => name in changes).forEach(name => inputs[name] = this[name]);
    this._service.set(inputs);
    if ('startDate' in changes) {
      const {
        currentValue,
        previousValue
      } = changes.startDate;
      if (isChangedMonth(previousValue, currentValue)) {
        this.navigateTo(this.startDate);
      }
    }
  }
  onDateSelect(date) {
    this._service.focus(date);
    this._service.select(date, {
      emitEvent: true
    });
  }
  onNavigateDateSelect(date) {
    this._service.open(date);
  }
  onNavigateEvent(event) {
    switch (event) {
      case NavigationEvent.PREV:
        this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
        break;
      case NavigationEvent.NEXT:
        this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
        break;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this._service.set({
      disabled
    });
  }
  writeValue(value) {
    this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
    this._service.select(this._controlValue);
  }
}
NgbDatepicker.ɵfac = function NgbDatepicker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbDatepicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepicker,
  selectors: [["ngb-datepicker"]],
  contentQueries: function NgbDatepicker_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDatepickerContent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    }
  },
  viewQuery: function NgbDatepicker_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._defaultDayTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentEl = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgbDatepicker_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.model.disabled);
    }
  },
  inputs: {
    dayTemplate: "dayTemplate",
    dayTemplateData: "dayTemplateData",
    displayMonths: "displayMonths",
    firstDayOfWeek: "firstDayOfWeek",
    footerTemplate: "footerTemplate",
    markDisabled: "markDisabled",
    maxDate: "maxDate",
    minDate: "minDate",
    navigation: "navigation",
    outsideDays: "outsideDays",
    showWeekNumbers: "showWeekNumbers",
    startDate: "startDate",
    weekdays: "weekdays"
  },
  outputs: {
    navigate: "navigate",
    dateSelect: "dateSelect"
  },
  exportAs: ["ngbDatepicker"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDatepicker),
    multi: true
  }, NgbDatepickerService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 5,
  consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], ["content", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select", 4, "ngIf"], [1, "ngb-dp-content"], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], ["class", "ngb-dp-month", 4, "ngFor", "ngForOf"], [1, "ngb-dp-month"], ["class", "ngb-dp-month-name", 4, "ngIf"], [3, "month"], [1, "ngb-dp-month-name"], [3, "navigate", "select", "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"]],
  template: function NgbDatepicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgbDatepicker_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbDatepicker_ngb_datepicker_navigation_5_Template, 1, 7, "ngb-datepicker-navigation", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgbDatepicker_ng_template_8_Template, 0, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgbDatepicker_ng_template_9_Template, 0, 0, "ng-template", 6);
    }
    if (rf & 2) {
      const defaultContentTemplate_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navigation !== "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-dp-months", !ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx.contentTemplate == null ? null : ctx.contentTemplate.templateRef) || defaultContentTemplate_r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
  styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-light)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      exportAs: 'ngbDatepicker',
      selector: 'ngb-datepicker',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '[class.disabled]': 'model.disabled'
      },
      template: `
		<ng-template
			#defaultDayTemplate
			let-date="date"
			let-currentMonth="currentMonth"
			let-selected="selected"
			let-disabled="disabled"
			let-focused="focused"
		>
			<div
				ngbDatepickerDayView
				[date]="date"
				[currentMonth]="currentMonth"
				[selected]="selected"
				[disabled]="disabled"
				[focused]="focused"
			>
			</div>
		</ng-template>

		<ng-template #defaultContentTemplate>
			<div *ngFor="let month of model.months; let i = index" class="ngb-dp-month">
				<div *ngIf="navigation === 'none' || (displayMonths > 1 && navigation === 'select')" class="ngb-dp-month-name">
					{{ i18n.getMonthLabel(month.firstDate) }}
				</div>
				<ngb-datepicker-month [month]="month.firstDate"></ngb-datepicker-month>
			</div>
		</ng-template>

		<div class="ngb-dp-header">
			<ngb-datepicker-navigation
				*ngIf="navigation !== 'none'"
				[date]="model.firstDate!"
				[months]="model.months"
				[disabled]="model.disabled"
				[showSelect]="model.navigation === 'select'"
				[prevDisabled]="model.prevDisabled"
				[nextDisabled]="model.nextDisabled"
				[selectBoxes]="model.selectBoxes"
				(navigate)="onNavigateEvent($event)"
				(select)="onNavigateDateSelect($event)"
			>
			</ngb-datepicker-navigation>
		</div>

		<div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
			<ng-template [ngTemplateOutlet]="contentTemplate?.templateRef || defaultContentTemplate"></ng-template>
		</div>

		<ng-template [ngTemplateOutlet]="footerTemplate"></ng-template>
	`,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDatepicker),
        multi: true
      }, NgbDatepickerService],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-light)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerService
    }, {
      type: NgbCalendar
    }, {
      type: NgbDatepickerI18n
    }, {
      type: NgbDatepickerConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NgbDateAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _defaultDayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['defaultDayTemplate', {
        static: true
      }]
    }],
    _contentEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        static: true
      }]
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbDatepickerContent, {
        static: true
      }]
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dayTemplateData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outsideDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    weekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dateSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
const isContainedIn = (element, array) => array ? array.some(item => item.contains(element)) : false;
const matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null;
// we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
const isMobile = (() => {
  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
  const isAndroid = () => /Android/.test(navigator.userAgent);
  return typeof navigator !== 'undefined' ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
})();
// setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
// when tapping on the triggering element
const wrapAsyncForMobile = fn => isMobile ? () => setTimeout(() => fn(), 100) : fn;
function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
  // closing on ESC and outside clicks
  if (type) {
    zone.runOutsideAngular(wrapAsyncForMobile(() => {
      const shouldCloseOnClick = event => {
        const element = event.target;
        if (event.button === 2 || isContainedIn(element, ignoreElements)) {
          return false;
        }
        if (type === 'inside') {
          return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
        } else if (type === 'outside') {
          return !isContainedIn(element, insideElements);
        } /* if (type === true) */else {
          return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
        }
      };
      const escapes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(document, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(closed$), /* eslint-disable-next-line deprecation/deprecation */
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Escape), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(e => e.preventDefault()));
      // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
      // because on 'mouseup' DOM nodes might be detached
      const mouseDowns$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(document, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(shouldCloseOnClick), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(closed$));
      const closeableClicks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(document, 'mouseup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.withLatestFrom)(mouseDowns$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(([_, shouldClose]) => shouldClose), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(closed$));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.race)([escapes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => 0 /* SOURCE.ESCAPE */)), closeableClicks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => 1 /* SOURCE.CLICK */))]).subscribe(source => zone.run(() => close(source)));
    }));
  }
}
const FOCUSABLE_ELEMENTS_SELECTOR = ['a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])', 'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'].join(', ');
/**
 * Returns first and last focusable elements inside of a given element based on specific CSS selector
 */
function getFocusableBoundaryElements(element) {
  const list = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)).filter(el => el.tabIndex !== -1);
  return [list[0], list[list.length - 1]];
}
/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * @param zone Angular zone
 * @param element The element around which focus will be trapped inside
 * @param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * @param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 */
const ngbFocusTrap = (zone, element, stopFocusTrap$, refocusOnClick = false) => {
  zone.runOutsideAngular(() => {
    // last focused element
    const lastFocusedElement$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'focusin').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stopFocusTrap$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(e => e.target));
    // 'tab' / 'shift+tab' stream
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stopFocusTrap$), /* eslint-disable-next-line deprecation/deprecation */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Tab), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.withLatestFrom)(lastFocusedElement$)).subscribe(([tabEvent, focusedElement]) => {
      const [first, last] = getFocusableBoundaryElements(element);
      if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
        last.focus();
        tabEvent.preventDefault();
      }
      if (focusedElement === last && !tabEvent.shiftKey) {
        first.focus();
        tabEvent.preventDefault();
      }
    });
    // inside click
    if (refocusOnClick) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stopFocusTrap$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.withLatestFrom)(lastFocusedElement$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(arr => arr[1])).subscribe(lastFocusedElement => lastFocusedElement.focus());
    }
  });
};
class NgbRTL {
  constructor(document) {
    this._element = document.documentElement;
  }
  isRTL() {
    return (this._element.getAttribute('dir') || '').toLowerCase() === 'rtl';
  }
}
NgbRTL.ɵfac = function NgbRTL_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbRTL)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};
NgbRTL.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbRTL,
  factory: NgbRTL.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRTL, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();
const placementSeparator = /\s+/;
const spacesRegExp = /  +/gi;
/**
 * Matching classes from the Bootstrap ones to the poppers ones.
 * The first index of each array is used for the left to right direction,
 * the second one is used for the right to left, defaulting to the first index (when LTR and RTL lead to the same class)
 *
 * See [Bootstrap alignments](https://getbootstrap.com/docs/5.1/components/dropdowns/#alignment-options)
 * and [Popper placements](https://popper.js.org/docs/v2/constructors/#options)
 */
const bootstrapPopperMatches = {
  top: ['top'],
  bottom: ['bottom'],
  start: ['left', 'right'],
  left: ['left'],
  end: ['right', 'left'],
  right: ['right'],
  'top-start': ['top-start', 'top-end'],
  'top-left': ['top-start'],
  'top-end': ['top-end', 'top-start'],
  'top-right': ['top-end'],
  'bottom-start': ['bottom-start', 'bottom-end'],
  'bottom-left': ['bottom-start'],
  'bottom-end': ['bottom-end', 'bottom-start'],
  'bottom-right': ['bottom-end'],
  'start-top': ['left-start', 'right-start'],
  'left-top': ['left-start'],
  'start-bottom': ['left-end', 'right-end'],
  'left-bottom': ['left-end'],
  'end-top': ['right-start', 'left-start'],
  'right-top': ['right-start'],
  'end-bottom': ['right-end', 'left-end'],
  'right-bottom': ['right-end']
};
function getPopperClassPlacement(placement, isRTL) {
  const [leftClass, rightClass] = bootstrapPopperMatches[placement];
  return isRTL ? rightClass || leftClass : leftClass;
}
const popperStartPrimaryPlacement = /^left/;
const popperEndPrimaryPlacement = /^right/;
const popperStartSecondaryPlacement = /^start/;
const popperEndSecondaryPlacement = /^end/;
function getBootstrapBaseClassPlacement(baseClass, placement) {
  let [primary, secondary] = placement.split('-');
  const newPrimary = primary.replace(popperStartPrimaryPlacement, 'start').replace(popperEndPrimaryPlacement, 'end');
  let classnames = [newPrimary];
  if (secondary) {
    let newSecondary = secondary;
    if (primary === 'left' || primary === 'right') {
      newSecondary = newSecondary.replace(popperStartSecondaryPlacement, 'top').replace(popperEndSecondaryPlacement, 'bottom');
    }
    classnames.push(`${newPrimary}-${newSecondary}`);
  }
  if (baseClass) {
    classnames = classnames.map(classname => `${baseClass}-${classname}`);
  }
  return classnames.join(' ');
}
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'start', 'end',
 *   'top-start', 'top-end',
 *   'bottom-start', 'bottom-end',
 *   'start-top', 'start-bottom',
 *   'end-top', 'end-bottom'.
 * */
function getPopperOptions({
  placement,
  baseClass
}, rtl) {
  let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  // No need to consider left and right here, as start and end are enough, and it is used for 'auto' placement only
  const allowedPlacements = ['top', 'bottom', 'start', 'end', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'start-top', 'start-bottom', 'end-top', 'end-bottom'];
  // replace auto placement with other placements
  let hasAuto = placementVals.findIndex(val => val === 'auto');
  if (hasAuto >= 0) {
    allowedPlacements.forEach(function (obj) {
      if (placementVals.find(val => val.search('^' + obj) !== -1) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  }
  const popperPlacements = placementVals.map(_placement => {
    return getPopperClassPlacement(_placement, rtl.isRTL());
  });
  let mainPlacement = popperPlacements.shift();
  const bsModifier = {
    name: 'bootstrapClasses',
    enabled: !!baseClass,
    phase: 'write',
    fn({
      state
    }) {
      const bsClassRegExp = new RegExp(baseClass + '(-[a-z]+)*', 'gi');
      const popperElement = state.elements.popper;
      const popperPlacement = state.placement;
      let className = popperElement.className;
      // Remove old bootstrap classes
      className = className.replace(bsClassRegExp, '');
      // Add current placements
      className += ` ${getBootstrapBaseClassPlacement(baseClass, popperPlacement)}`;
      // Remove multiple spaces
      className = className.trim().replace(spacesRegExp, ' ');
      // Reassign
      popperElement.className = className;
    }
  };
  return {
    placement: mainPlacement,
    modifiers: [bsModifier, _popperjs_core__WEBPACK_IMPORTED_MODULE_26__["default"], _popperjs_core__WEBPACK_IMPORTED_MODULE_27__["default"], _popperjs_core__WEBPACK_IMPORTED_MODULE_28__["default"], {
      enabled: true,
      name: 'flip',
      options: {
        fallbackPlacements: popperPlacements
      }
    }, {
      enabled: true,
      name: 'preventOverflow',
      phase: 'main',
      fn: function () {}
    }]
  };
}
function noop(arg) {
  return arg;
}
function ngbPositioning() {
  const rtl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgbRTL);
  let popperInstance = null;
  return {
    createPopper(positioningOption) {
      if (!popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption, rtl));
        popperInstance = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_29__.createPopper)(positioningOption.hostElement, positioningOption.targetElement, popperOptions);
      }
    },
    update() {
      if (popperInstance) {
        popperInstance.update();
      }
    },
    setOptions(positioningOption) {
      if (popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption, rtl));
        popperInstance.setOptions(popperOptions);
      }
    },
    destroy() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }
  };
}

/**
 * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepicker inputs used in the application.
 *
 * @since 5.2.0
 */
class NgbInputDatepickerConfig extends NgbDatepickerConfig {
  constructor() {
    super(...arguments);
    this.autoClose = true;
    this.placement = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
    this.popperOptions = options => options;
    this.restoreFocus = true;
  }
}
NgbInputDatepickerConfig.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbInputDatepickerConfig_BaseFactory;
  return function NgbInputDatepickerConfig_Factory(__ngFactoryType__) {
    return (ɵNgbInputDatepickerConfig_BaseFactory || (ɵNgbInputDatepickerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbInputDatepickerConfig)))(__ngFactoryType__ || NgbInputDatepickerConfig);
  };
})();
NgbInputDatepickerConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbInputDatepickerConfig,
  factory: NgbInputDatepickerConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbInputDatepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
function addPopperOffset(offset$1) {
  return options => {
    options.modifiers.push(_popperjs_core__WEBPACK_IMPORTED_MODULE_30__["default"], {
      name: 'offset',
      options: {
        offset: () => offset$1
      }
    });
    return options;
  };
}
function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgbDateISOParserFormatter();
}
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */
class NgbDateParserFormatter {}
NgbDateParserFormatter.ɵfac = function NgbDateParserFormatter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDateParserFormatter)();
};
NgbDateParserFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateParserFormatter,
  factory: () => NGB_DATEPICKER_PARSER_FORMATTER_FACTORY(),
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateParserFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
    }]
  }], null, null);
})();
class NgbDateISOParserFormatter extends NgbDateParserFormatter {
  parse(value) {
    if (value != null) {
      const dateParts = value.trim().split('-');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger(dateParts[0]),
          month: null,
          day: null
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }
  format(date) {
    return date ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}` : '';
  }
}
NgbDateISOParserFormatter.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbDateISOParserFormatter_BaseFactory;
  return function NgbDateISOParserFormatter_Factory(__ngFactoryType__) {
    return (ɵNgbDateISOParserFormatter_BaseFactory || (ɵNgbDateISOParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateISOParserFormatter)))(__ngFactoryType__ || NgbDateISOParserFormatter);
  };
})();
NgbDateISOParserFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateISOParserFormatter,
  factory: NgbDateISOParserFormatter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateISOParserFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */
class NgbInputDatepicker {
  constructor(_parserFormatter, _elRef, _vcRef, _renderer, _ngZone, _calendar, _dateAdapter, _document, _changeDetector, config) {
    this._parserFormatter = _parserFormatter;
    this._elRef = _elRef;
    this._vcRef = _vcRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._calendar = _calendar;
    this._dateAdapter = _dateAdapter;
    this._document = _document;
    this._changeDetector = _changeDetector;
    this._cRef = null;
    this._disabled = false;
    this._elWithFocus = null;
    this._model = null;
    this._destroyCloseHandlers$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 1.1.1
     */
    this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted right after the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event fired after closing datepicker window.
     *
     * @since 4.2.0
     */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._onChange = _ => {};
    this._onTouched = () => {};
    this._validatorChange = () => {};
    ['autoClose', 'container', 'positionTarget', 'placement', 'popperOptions'].forEach(input => this[input] = config[input]);
    this._positioning = ngbPositioning();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value === '' || value && value !== 'false';
    if (this.isOpen()) {
      this._cRef.instance.setDisabledState(this._disabled);
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(c) {
    const {
      value
    } = c;
    if (value != null) {
      const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
      if (!ngbDate) {
        return {
          ngbDate: {
            invalid: value
          }
        };
      }
      if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
        return {
          ngbDate: {
            minDate: {
              minDate: this.minDate,
              actual: value
            }
          }
        };
      }
      if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
        return {
          ngbDate: {
            maxDate: {
              maxDate: this.maxDate,
              actual: value
            }
          }
        };
      }
    }
    return null;
  }
  writeValue(value) {
    this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
    this._writeModelValue(this._model);
  }
  manualDateChange(value, updateView = false) {
    const inputValueChanged = value !== this._inputValue;
    if (inputValueChanged) {
      this._inputValue = value;
      this._model = this._fromDateStruct(this._parserFormatter.parse(value));
    }
    if (inputValueChanged || !updateView) {
      this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === '' ? null : value);
    }
    if (updateView && this._model) {
      this._writeModelValue(this._model);
    }
  }
  isOpen() {
    return !!this._cRef;
  }
  /**
   * Opens the datepicker popup.
   *
   * If the related form control contains a valid date, the corresponding month will be opened.
   */
  open() {
    if (!this.isOpen()) {
      this._cRef = this._vcRef.createComponent(NgbDatepicker);
      this._applyPopupStyling(this._cRef.location.nativeElement);
      this._applyDatepickerInputs(this._cRef);
      this._subscribeForDatepickerOutputs(this._cRef.instance);
      this._cRef.instance.ngOnInit();
      this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
      // date selection event handling
      this._cRef.instance.registerOnChange(selectedDate => {
        this.writeValue(selectedDate);
        this._onChange(selectedDate);
        this._onTouched();
      });
      this._cRef.changeDetectorRef.detectChanges();
      this._cRef.instance.setDisabledState(this.disabled);
      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
      }
      // focus handling
      this._elWithFocus = this._document.activeElement;
      ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
      setTimeout(() => this._cRef?.instance.focus());
      let hostElement;
      if (isString(this.positionTarget)) {
        hostElement = this._document.querySelector(this.positionTarget);
      } else if (this.positionTarget instanceof HTMLElement) {
        hostElement = this.positionTarget;
      } else {
        hostElement = this._elRef.nativeElement;
      }
      // Setting up popper and scheduling updates when zone is stable
      this._ngZone.runOutsideAngular(() => {
        if (this._cRef) {
          this._positioning.createPopper({
            hostElement,
            targetElement: this._cRef.location.nativeElement,
            placement: this.placement,
            appendToBody: this.container === 'body',
            updatePopperOptions: options => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._zoneSubscription = this._ngZone.onStable.subscribe(() => this._positioning.update());
        }
      });
      if (this.positionTarget && !hostElement) {
        throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
      }
      this._setCloseHandlers();
    }
  }
  /**
   * Closes the datepicker popup.
   */
  close() {
    if (this.isOpen()) {
      this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
      this._cRef = null;
      this._positioning.destroy();
      this._zoneSubscription?.unsubscribe();
      this._destroyCloseHandlers$.next();
      this.closed.emit();
      this._changeDetector.markForCheck();
      // restore focus
      let elementToFocus = this._elWithFocus;
      if (isString(this.restoreFocus)) {
        elementToFocus = this._document.querySelector(this.restoreFocus);
      } else if (this.restoreFocus !== undefined) {
        elementToFocus = this.restoreFocus;
      }
      // in IE document.activeElement can contain an object without 'focus()' sometimes
      if (elementToFocus && elementToFocus['focus']) {
        elementToFocus.focus();
      } else {
        this._document.body.focus();
      }
    }
  }
  /**
   * Toggles the datepicker popup.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    if (this.isOpen()) {
      this._cRef.instance.navigateTo(date);
    }
  }
  onBlur() {
    this._onTouched();
  }
  onFocus() {
    this._elWithFocus = this._elRef.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes['minDate'] || changes['maxDate']) {
      this._validatorChange();
      if (this.isOpen()) {
        if (changes['minDate']) {
          this._cRef.instance.minDate = this.minDate;
        }
        if (changes['maxDate']) {
          this._cRef.instance.maxDate = this.maxDate;
        }
        this._cRef.instance.ngOnChanges(changes);
      }
    }
    if (changes['datepickerClass']) {
      const {
        currentValue,
        previousValue
      } = changes['datepickerClass'];
      this._applyPopupClass(currentValue, previousValue);
    }
    if (changes['autoClose'] && this.isOpen()) {
      this._setCloseHandlers();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  _applyDatepickerInputs(datepickerComponentRef) {
    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekNumbers', 'weekdays'].forEach(inputName => {
      if (this[inputName] !== undefined) {
        datepickerComponentRef.setInput(inputName, this[inputName]);
      }
    });
    datepickerComponentRef.setInput('startDate', this.startDate || this._model);
  }
  _applyPopupClass(newClass, oldClass) {
    const popupEl = this._cRef?.location.nativeElement;
    if (popupEl) {
      if (newClass) {
        this._renderer.addClass(popupEl, newClass);
      }
      if (oldClass) {
        this._renderer.removeClass(popupEl, oldClass);
      }
    }
  }
  _applyPopupStyling(nativeElement) {
    this._renderer.addClass(nativeElement, 'dropdown-menu');
    this._renderer.addClass(nativeElement, 'show');
    if (this.container === 'body') {
      this._renderer.addClass(nativeElement, 'ngb-dp-body');
    }
    this._applyPopupClass(this.datepickerClass);
  }
  _subscribeForDatepickerOutputs(datepickerInstance) {
    datepickerInstance.navigate.subscribe(navigateEvent => this.navigate.emit(navigateEvent));
    datepickerInstance.dateSelect.subscribe(date => {
      this.dateSelect.emit(date);
      if (this.autoClose === true || this.autoClose === 'inside') {
        this.close();
      }
    });
  }
  _writeModelValue(model) {
    const value = this._parserFormatter.format(model);
    this._inputValue = value;
    this._renderer.setProperty(this._elRef.nativeElement, 'value', value);
    if (this.isOpen()) {
      this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
      this._onTouched();
    }
  }
  _fromDateStruct(date) {
    const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
    return this._calendar.isValid(ngbDate) ? ngbDate : null;
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
  }
}
NgbInputDatepicker.ɵfac = function NgbInputDatepicker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbInputDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDateParserFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbInputDatepickerConfig));
};
NgbInputDatepicker.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbInputDatepicker,
  selectors: [["input", "ngbDatepicker", ""]],
  hostVars: 1,
  hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgbInputDatepicker_input_HostBindingHandler($event) {
        return ctx.manualDateChange($event.target.value);
      })("change", function NgbInputDatepicker_change_HostBindingHandler($event) {
        return ctx.manualDateChange($event.target.value, true);
      })("focus", function NgbInputDatepicker_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function NgbInputDatepicker_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    autoClose: "autoClose",
    datepickerClass: "datepickerClass",
    dayTemplate: "dayTemplate",
    dayTemplateData: "dayTemplateData",
    displayMonths: "displayMonths",
    firstDayOfWeek: "firstDayOfWeek",
    footerTemplate: "footerTemplate",
    markDisabled: "markDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    navigation: "navigation",
    outsideDays: "outsideDays",
    placement: "placement",
    popperOptions: "popperOptions",
    restoreFocus: "restoreFocus",
    showWeekNumbers: "showWeekNumbers",
    startDate: "startDate",
    container: "container",
    positionTarget: "positionTarget",
    weekdays: "weekdays",
    disabled: "disabled"
  },
  outputs: {
    dateSelect: "dateSelect",
    navigate: "navigate",
    closed: "closed"
  },
  exportAs: ["ngbDatepicker"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
    multi: true
  }, {
    provide: NgbDatepickerConfig,
    useExisting: NgbInputDatepickerConfig
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbInputDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[ngbDatepicker]',
      exportAs: 'ngbDatepicker',
      standalone: true,
      host: {
        '(input)': 'manualDateChange($event.target.value)',
        '(change)': 'manualDateChange($event.target.value, true)',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
        '[disabled]': 'disabled'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]
    }]
  }], function () {
    return [{
      type: NgbDateParserFormatter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: NgbCalendar
    }, {
      type: NgbDateAdapter
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NgbInputDatepickerConfig
    }];
  }, {
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    datepickerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dayTemplateData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outsideDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popperOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    positionTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    weekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgbCalendarHijri extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = 'd', number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case 'y':
        date = this._setYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case 'm':
        date = this._setMonth(date, date.month + number);
        date.day = 1;
        return date;
      case 'd':
        return this._setDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = this.toGregorian(date).getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = this.toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
    const time = jsDate.getTime();
    const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1)); // Compare with Muharram 1
    return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
  }
  getToday() {
    return this.fromGregorian(new Date());
  }
  isValid(date) {
    return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
  }
  _setDay(date, day) {
    day = +day;
    let mDays = this.getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
      while (day <= 0) {
        date = this._setMonth(date, date.month - 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
        day += mDays;
      }
    } else if (day > mDays) {
      while (day > mDays) {
        day -= mDays;
        date = this._setMonth(date, date.month + 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
      }
    }
    date.day = day;
    return date;
  }
  _setMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
  }
  _setYear(date, year) {
    date.year = +year;
    return date;
  }
}
NgbCalendarHijri.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarHijri_BaseFactory;
  return function NgbCalendarHijri_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarHijri_BaseFactory || (ɵNgbCalendarHijri_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarHijri)))(__ngFactoryType__ || NgbCalendarHijri);
  };
})();
NgbCalendarHijri.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarHijri,
  factory: NgbCalendarHijri.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarHijri, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * Checks if islamic year is a leap year
 */
function isIslamicLeapYear(hYear) {
  return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 */
function isGregorianLeapYear$1(gDate) {
  const year = gDate.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 */
function getIslamicMonthStart(hYear, hMonth) {
  return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 */
function getIslamicYearStart(year) {
  return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
function mod$1(a, b) {
  return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
const GREGORIAN_EPOCH$1 = 1721425.5;
const ISLAMIC_EPOCH = 1948439.5;
class NgbCalendarIslamicCivil extends NgbCalendarHijri {
  /**
   * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
   * `gDate` is a JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    const gYear = gDate.getFullYear(),
      gMonth = gDate.getMonth(),
      gDay = gDate.getDate();
    let julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gDate) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay) + 0.5;
    const days = julianDay - ISLAMIC_EPOCH;
    const hYear = Math.floor((30 * days + 10646) / 10631.0);
    let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
    hMonth = Math.min(hMonth, 11);
    const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
    return new NgbDate(hYear, hMonth + 1, hDay);
  }
  /**
   * Returns the equivalent JS date value for a give input islamic(civil) date.
   * `hDate` is an islamic(civil) date to be converted to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
    const wjd = Math.floor(julianDay - 0.5) + 0.5,
      depoch = wjd - GREGORIAN_EPOCH$1,
      quadricent = Math.floor(depoch / 146097),
      dqc = mod$1(depoch, 146097),
      cent = Math.floor(dqc / 36524),
      dcent = mod$1(dqc, 36524),
      quad = Math.floor(dcent / 1461),
      dquad = mod$1(dcent, 1461),
      yindex = Math.floor(dquad / 365);
    let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
    if (!(cent === 4 || yindex === 4)) {
      year++;
    }
    const gYearStart = GREGORIAN_EPOCH$1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    const yearday = wjd - gYearStart;
    const tjd = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear$1(new Date(year, 3, 1)) ? -1 : -2) + 1);
    const leapadj = wjd < tjd ? 0 : isGregorianLeapYear$1(new Date(year, 3, 1)) ? 1 : 2;
    const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
    const tjd2 = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear$1(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
    const day = wjd - tjd2 + 1;
    return new Date(year, month - 1, day);
  }
  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */
  getDaysPerMonth(month, year) {
    year = year + Math.floor(month / 13);
    month = (month - 1) % 12 + 1;
    let length = 29 + month % 2;
    if (month === 12 && isIslamicLeapYear(year)) {
      length++;
    }
    return length;
  }
}
NgbCalendarIslamicCivil.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarIslamicCivil_BaseFactory;
  return function NgbCalendarIslamicCivil_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarIslamicCivil_BaseFactory || (ɵNgbCalendarIslamicCivil_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarIslamicCivil)))(__ngFactoryType__ || NgbCalendarIslamicCivil);
  };
})();
NgbCalendarIslamicCivil.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarIslamicCivil,
  factory: NgbCalendarIslamicCivil.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarIslamicCivil, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */
const GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
const GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
const HIJRI_BEGIN = 1300;
const HIJRI_END = 1600;
const ONE_DAY = 1000 * 60 * 60 * 24;
const MONTH_LENGTH = [
// 1300-1304
'101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
// 1305-1309
'001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
// 1310-1314
'101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
// 1315-1319
'011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
// 1320-1324
'010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
// 1325-1329
'101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
// 1330-1334
'110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
// 1335-1339
'101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
// 1340-1344
'001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
// 1345-1349
'101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
// 1350-1354
'010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
// 1355-1359
'100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
// 1360-1364
'011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
// 1365-1369
'110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
// 1370-1374
'100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
// 1375-1379
'101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
// 1380-1384
'010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
// 1385-1389
'001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
// 1390-1394
'010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
// 1395-1399
'101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
// 1400-1404
'101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
// 1405-1409
'101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
// 1410-1414
'110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
// 1415-1419
'010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
// 1420-1424
'010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
// 1425-1429
'101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
// 1430-1434
'011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
// 1435-1439
'101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
// 1440-1444
'010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
// 1445-1449
'011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
// 1450-1454
'101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
// 1455-1459
'010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
// 1460-1464
'011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
// 1465-1469
'101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
// 1470-1474
'001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
// 1475-1479
'011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
// 1480-1484
'101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
// 1485-1489
'100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
// 1490-1494
'010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
// 1495-1499
'011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
// 1500-1504
'010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
// 1505-1509
'101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
// 1510-1514
'101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
// 1515-1519
'001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
// 1520-1524
'010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
// 1525-1529
'110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
// 1530-1534
'011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
// 1535-1539
'101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
// 1540-1544
'011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
// 1545-1549
'110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
// 1550-1554
'101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
// 1555-1559
'001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
// 1560-1564
'110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
// 1565-1569
'010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
// 1570-1574
'010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
// 1575-1579
'111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
// 1580-1584
'011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
// 1585-1589
'010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
// 1590-1594
'101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
// 1595-1599
'010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
// 1600
'001010011101'];
function getDaysDiff(date1, date2) {
  // Ignores the time part in date1 and date2:
  const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diff = Math.abs(time1 - time2);
  return Math.round(diff / ONE_DAY);
}
class NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
  /**
   * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
   * `gdate` is s JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    let hDay = 1,
      hMonth = 0,
      hYear = 1300;
    let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
      let year = 1300;
      for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
        for (let j = 0; j < 12; j++) {
          let numOfDays = +MONTH_LENGTH[i][j] + 29;
          if (daysDiff <= numOfDays) {
            hDay = daysDiff + 1;
            if (hDay > numOfDays) {
              hDay = 1;
              j++;
            }
            if (j > 11) {
              j = 0;
              year++;
            }
            hMonth = j;
            hYear = year;
            return new NgbDate(hYear, hMonth + 1, hDay);
          }
          daysDiff = daysDiff - numOfDays;
        }
      }
      return null;
    } else {
      return super.fromGregorian(gDate);
    }
  }
  /**
   * Converts the current Hijri date to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    let gDate = new Date(GREGORIAN_FIRST_DATE);
    let dayDiff = hDay - 1;
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
        for (let m = 0; m < 12; m++) {
          dayDiff += +MONTH_LENGTH[y][m] + 29;
        }
      }
      for (let m = 0; m < hMonth; m++) {
        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
      }
      gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
    } else {
      gDate = super.toGregorian(hDate);
    }
    return gDate;
  }
  /**
   * Returns the number of days in a specific Hijri hMonth.
   * `hMonth` is 1 for Muharram, 2 for Safar, etc.
   * `hYear` is any Hijri hYear.
   */
  getDaysPerMonth(hMonth, hYear) {
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      const pos = hYear - HIJRI_BEGIN;
      return +MONTH_LENGTH[pos][hMonth - 1] + 29;
    }
    return super.getDaysPerMonth(hMonth, hYear);
  }
}
NgbCalendarIslamicUmalqura.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarIslamicUmalqura_BaseFactory;
  return function NgbCalendarIslamicUmalqura_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarIslamicUmalqura_BaseFactory || (ɵNgbCalendarIslamicUmalqura_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarIslamicUmalqura)))(__ngFactoryType__ || NgbCalendarIslamicUmalqura);
  };
})();
NgbCalendarIslamicUmalqura.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarIslamicUmalqura,
  factory: NgbCalendarIslamicUmalqura.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarIslamicUmalqura, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 */
function toGregorian$2(jalaliDate) {
  let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
  let date = julianToGregorian(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 */
function fromGregorian$2(gdate) {
  let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return julianToJalali(g2d);
}
function setJalaliYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setJalaliMonth(date, month) {
  month = +month;
  date.year = date.year + Math.floor((month - 1) / 12);
  date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
  return date;
}
function setJalaliDay(date, day) {
  let mDays = getDaysPerMonth(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setJalaliMonth(date, date.month - 1);
      mDays = getDaysPerMonth(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setJalaliMonth(date, date.month + 1);
      mDays = getDaysPerMonth(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function mod(a, b) {
  return a - b * Math.floor(a / b);
}
function div(a, b) {
  return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */
function jalCal(jalaliYear) {
  // Jalali years starting the 33-year rule.
  let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  const breaksLength = breaks.length;
  const gYear = jalaliYear + 621;
  let leapJ = -14;
  let jp = breaks[0];
  if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
    throw new Error('Invalid Jalali year ' + jalaliYear);
  }
  // Find the limiting years for the Jalali year jalaliYear.
  let jump;
  for (let i = 1; i < breaksLength; i += 1) {
    const jm = breaks[i];
    jump = jm - jp;
    if (jalaliYear < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  let n = jalaliYear - jp;
  // Find the number of leap years from AD 621 to the beginning
  // of the current Jalali year in the Persian calendar.
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  // And the same in the Gregorian calendar (until the year gYear).
  const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
  // Determine the Gregorian date of Farvardin the 1st.
  const march = 20 + leapJ - leapG;
  // Find how many years have passed since the last leap year.
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  let leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return {
    leap: leap,
    gy: gYear,
    march: march
  };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */
function julianToGregorian(julianDayNumber) {
  let j = 4 * julianDayNumber + 139361631;
  j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gDay = div(mod(i, 153), 5) + 1;
  const gMonth = mod(div(i, 153), 12) + 1;
  const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
  return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */
function gregorianToJulian(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */
function julianToJalali(julianDayNumber) {
  let gy = julianToGregorian(julianDayNumber).getFullYear(),
    // Calculate Gregorian year (gy).
    jalaliYear = gy - 621,
    r = jalCal(jalaliYear),
    gregorianDay = gregorianToJulian(gy, 3, r.march),
    jalaliDay,
    jalaliMonth,
    numberOfDays;
  // Find number of days that passed since 1 Farvardin.
  numberOfDays = julianDayNumber - gregorianDay;
  if (numberOfDays >= 0) {
    if (numberOfDays <= 185) {
      // The first 6 months.
      jalaliMonth = 1 + div(numberOfDays, 31);
      jalaliDay = mod(numberOfDays, 31) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    } else {
      // The remaining months.
      numberOfDays -= 186;
    }
  } else {
    // Previous Jalali year.
    jalaliYear -= 1;
    numberOfDays += 179;
    if (r.leap === 1) {
      numberOfDays += 1;
    }
  }
  jalaliMonth = 7 + div(numberOfDays, 30);
  jalaliDay = mod(numberOfDays, 30) + 1;
  return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */
function jalaliToJulian(jYear, jMonth, jDay) {
  let r = jalCal(jYear);
  return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 */
function getDaysPerMonth(month, year) {
  if (month <= 6) {
    return 31;
  }
  if (month <= 11) {
    return 30;
  }
  if (jalCal(year).leap === 0) {
    return 30;
  }
  return 29;
}
class NgbCalendarPersian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = 'd', number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case 'y':
        date = setJalaliYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case 'm':
        date = setJalaliMonth(date, date.month + number);
        date.day = 1;
        return date;
      case 'd':
        return setJalaliDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$2(date).getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian$2(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
    const time = jsDate.getTime();
    const startDate = toGregorian$2(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
  }
  getToday() {
    return fromGregorian$2(new Date());
  }
  isValid(date) {
    return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian$2(date).getTime());
  }
}
NgbCalendarPersian.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarPersian_BaseFactory;
  return function NgbCalendarPersian_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarPersian_BaseFactory || (ɵNgbCalendarPersian_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarPersian)))(__ngFactoryType__ || NgbCalendarPersian);
  };
})();
NgbCalendarPersian.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarPersian,
  factory: NgbCalendarPersian.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarPersian, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const PARTS_PER_HOUR = 1080;
const PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
const PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
const PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
const BAHARAD = 11 * PARTS_PER_HOUR + 204;
const HEBREW_DAY_ON_JAN_1_1970 = 2092591;
const GREGORIAN_EPOCH = 1721425.5;
function isGregorianLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function numberOfFirstDayInYear(year) {
  let monthsBeforeYear = Math.floor((235 * year - 234) / 19);
  let fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
  let dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
  let timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
  let dayOfWeek = dayNumber % 7; // 0 == Monday
  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    dayNumber++;
    dayOfWeek = dayNumber % 7;
  }
  if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
    dayNumber += 2;
  } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
    dayNumber++;
  }
  return dayNumber;
}
function getDaysInGregorianMonth(month, year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isGregorianLeapYear(year)) {
    days[1]++;
  }
  return days[month - 1];
}
function getHebrewMonths(year) {
  return isHebrewLeapYear(year) ? 13 : 12;
}
/**
 * Returns the number of days in a specific Hebrew year.
 * `year` is any Hebrew year.
 */
function getDaysInHebrewYear(year) {
  return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
function isHebrewLeapYear(year) {
  if (year != null) {
    let b = (year * 12 + 17) % 19;
    return b >= (b < 0 ? -7 : 12);
  }
  return false;
}
/**
 * Returns the number of days in a specific Hebrew month.
 * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
 * `year` is any Hebrew year.
 */
function getDaysInHebrewMonth(month, year) {
  let yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
  let yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
  let leapYear = isHebrewLeapYear(year);
  let daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
  if (yearType > 0) {
    daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
  }
  if (yearType > 1) {
    daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
  }
  return daysInMonth[month - 1];
}
function getDayNumberInHebrewYear(date) {
  let numberOfDay = 0;
  for (let i = 1; i < date.month; i++) {
    numberOfDay += getDaysInHebrewMonth(i, date.year);
  }
  return numberOfDay + date.day;
}
function setHebrewMonth(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getHebrewMonths(date.year) - date.month) {
        val -= getHebrewMonths(date.year) - date.month + 1;
        date.year++;
        date.month = 1;
      } else {
        date.month += val;
        val = 0;
      }
    } else {
      if (val >= date.month) {
        date.year--;
        val -= date.month;
        date.month = getHebrewMonths(date.year);
      } else {
        date.month -= val;
        val = 0;
      }
    }
  }
  return date;
}
function setHebrewDay(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
        val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
        date.year++;
        date.month = 1;
        date.day = 1;
      } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
        val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
        date.month++;
        date.day = 1;
      } else {
        date.day += val;
        val = 0;
      }
    } else {
      if (val >= date.day) {
        val -= date.day;
        date.month--;
        if (date.month === 0) {
          date.year--;
          date.month = getHebrewMonths(date.year);
        }
        date.day = getDaysInHebrewMonth(date.month, date.year);
      } else {
        date.day -= val;
        val = 0;
      }
    }
  }
  return date;
}
/**
 * Returns the equivalent Hebrew date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Hebrew date.
 */
function fromGregorian$1(gdate) {
  const date = new Date(gdate);
  const gYear = date.getFullYear(),
    gMonth = date.getMonth(),
    gDay = date.getDate();
  let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gYear) ? -1 : -2) + gDay);
  julianDay = Math.floor(julianDay + 0.5);
  let daysSinceHebEpoch = julianDay - 347997;
  let monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
  let hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
  let firstDayOfThisYear = numberOfFirstDayInYear(hYear);
  let dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  while (dayOfYear < 1) {
    hYear--;
    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  }
  let hMonth = 1;
  let hDay = dayOfYear;
  while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
    hDay -= getDaysInHebrewMonth(hMonth, hYear);
    hMonth++;
  }
  return new NgbDate(hYear, hMonth, hDay);
}
/**
 * Returns the equivalent JS date value for a given Hebrew date.
 * `hebrewDate` is an Hebrew date to be converted to Gregorian.
 */
function toGregorian$1(hebrewDate) {
  const hYear = hebrewDate.year;
  const hMonth = hebrewDate.month;
  const hDay = hebrewDate.day;
  let days = numberOfFirstDayInYear(hYear);
  for (let i = 1; i < hMonth; i++) {
    days += getDaysInHebrewMonth(i, hYear);
  }
  days += hDay;
  let diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
  let after = diffDays >= 0;
  if (!after) {
    diffDays = -diffDays;
  }
  let gYear = 1970;
  let gMonth = 1;
  let gDay = 1;
  while (diffDays > 0) {
    if (after) {
      if (diffDays >= (isGregorianLeapYear(gYear) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear) ? 366 : 365;
        gYear++;
      } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        gMonth++;
      } else {
        gDay += diffDays;
        diffDays = 0;
      }
    } else {
      if (diffDays >= (isGregorianLeapYear(gYear - 1) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear - 1) ? 366 : 365;
        gYear--;
      } else {
        if (gMonth > 1) {
          gMonth--;
        } else {
          gMonth = 12;
          gYear--;
        }
        if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
          diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        } else {
          gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
          diffDays = 0;
        }
      }
    }
  }
  return new Date(gYear, gMonth - 1, gDay);
}
function hebrewNumerals(numerals) {
  if (!numerals) {
    return '';
  }
  const hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
  const hArray10_19 = ['\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6', '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'];
  const hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
  const hArray100_900 = ['', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea', '\u05ea\u05ea\u05e7'];
  const hArray1000_9000 = ['', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1', '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'];
  const geresh = '\u05f3',
    gershaim = '\u05f4';
  let mem = 0;
  let result = [];
  let step = 0;
  while (numerals > 0) {
    let m = numerals % 10;
    if (step === 0) {
      mem = m;
    } else if (step === 1) {
      if (m !== 1) {
        result.unshift(hArray20_90[m], hArray0_9[mem]);
      } else {
        result.unshift(hArray10_19[mem]);
      }
    } else if (step === 2) {
      result.unshift(hArray100_900[m]);
    } else {
      if (m !== 5) {
        result.unshift(hArray1000_9000[m], geresh, ' ');
      }
      break;
    }
    numerals = Math.floor(numerals / 10);
    if (step === 0 && numerals === 0) {
      result.unshift(hArray0_9[m]);
    }
    step++;
  }
  result = result.join('').split('');
  if (result.length === 1) {
    result.push(geresh);
  } else if (result.length > 1) {
    result.splice(result.length - 1, 0, gershaim);
  }
  return result.join('');
}

/**
 * @since 3.2.0
 */
class NgbCalendarHebrew extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    if (year && isHebrewLeapYear(year)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
  }
  getWeeksPerMonth() {
    return 6;
  }
  isValid(date) {
    if (date != null) {
      let b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
      b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
      b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
      return b && !isNaN(toGregorian$1(date).getTime());
    }
    return false;
  }
  getNext(date, period = 'd', number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case 'y':
        date.year += number;
        date.month = 1;
        date.day = 1;
        return date;
      case 'm':
        date = setHebrewMonth(date, number);
        date.day = 1;
        return date;
      case 'd':
        return setHebrewDay(date, number);
      default:
        return date;
    }
  }
  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$1(date).getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    const date = week[week.length - 1];
    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
  }
  getToday() {
    return fromGregorian$1(new Date());
  }
  /**
   * @since 3.4.0
   */
  toGregorian(date) {
    return fromJSDate(toGregorian$1(date));
  }
  /**
   * @since 3.4.0
   */
  fromGregorian(date) {
    return fromGregorian$1(toJSDate(date));
  }
}
NgbCalendarHebrew.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarHebrew_BaseFactory;
  return function NgbCalendarHebrew_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarHebrew_BaseFactory || (ɵNgbCalendarHebrew_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarHebrew)))(__ngFactoryType__ || NgbCalendarHebrew);
  };
})();
NgbCalendarHebrew.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarHebrew,
  factory: NgbCalendarHebrew.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarHebrew, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
const MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
const MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * @since 3.2.0
 */
class NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || '' : MONTHS[month - 1] || '';
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS[weekday - 1] || '';
  }
  getDayAriaLabel(date) {
    return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
  }
  getDayNumerals(date) {
    return hebrewNumerals(date.day);
  }
  getWeekNumerals(weekNumber) {
    return hebrewNumerals(weekNumber);
  }
  getYearNumerals(year) {
    return hebrewNumerals(year);
  }
}
NgbDatepickerI18nHebrew.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbDatepickerI18nHebrew_BaseFactory;
  return function NgbDatepickerI18nHebrew_Factory(__ngFactoryType__) {
    return (ɵNgbDatepickerI18nHebrew_BaseFactory || (ɵNgbDatepickerI18nHebrew_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDatepickerI18nHebrew)))(__ngFactoryType__ || NgbDatepickerI18nHebrew);
  };
})();
NgbDatepickerI18nHebrew.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18nHebrew,
  factory: NgbDatepickerI18nHebrew.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerI18nHebrew, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * Returns the equivalent JS date value for a give input Buddhist date.
 * `date` is an Buddhist date to be converted to Gregorian.
 */
function toGregorian(date) {
  return new Date(date.year - 543, date.month - 1, date.day);
}
/**
 * Returns the equivalent Buddhist date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Buddhist.
 * utc to local
 */
function fromGregorian(gdate) {
  return new NgbDate(gdate.getFullYear() + 543, gdate.getMonth() + 1, gdate.getDate());
}

/**
 * @since 9.1.0
 */
class NgbCalendarBuddhist extends NgbCalendarGregorian {
  getToday() {
    return fromGregorian(new Date());
  }
  getNext(date, period = 'd', number = 1) {
    let jsDate = toGregorian(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case 'y':
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case 'm':
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case 'd':
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      // this means the destination month has less days than the initial month
      // let's go back to the end of the previous month:
      jsDate.setDate(0);
    }
    return fromGregorian(jsDate);
  }
  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toGregorian(date);
    let day = jsDate.getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
    const time = jsDate.getTime();
    jsDate.setMonth(0); // Compare with Jan 1
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    // year 0 doesn't exist in Gregorian calendar
    if (date.year === 0) {
      return false;
    }
    const jsDate = toGregorian(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year - 543 && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
}
NgbCalendarBuddhist.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbCalendarBuddhist_BaseFactory;
  return function NgbCalendarBuddhist_Factory(__ngFactoryType__) {
    return (ɵNgbCalendarBuddhist_BaseFactory || (ɵNgbCalendarBuddhist_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarBuddhist)))(__ngFactoryType__ || NgbCalendarBuddhist);
  };
})();
NgbCalendarBuddhist.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarBuddhist,
  factory: NgbCalendarBuddhist.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarBuddhist, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
class NgbDateNativeAdapter extends NgbDateAdapter {
  /**
   * Converts a native `Date` to a `NgbDateStruct`.
   */
  fromModel(date) {
    return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
  }
  /**
   * Converts a `NgbDateStruct` to a native `Date`.
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
  }
  _fromNativeDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // avoid 30 -> 1930 conversion
    jsDate.setFullYear(date.year);
    return jsDate;
  }
}
NgbDateNativeAdapter.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbDateNativeAdapter_BaseFactory;
  return function NgbDateNativeAdapter_Factory(__ngFactoryType__) {
    return (ɵNgbDateNativeAdapter_BaseFactory || (ɵNgbDateNativeAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateNativeAdapter)))(__ngFactoryType__ || NgbDateNativeAdapter);
  };
})();
NgbDateNativeAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateNativeAdapter,
  factory: NgbDateNativeAdapter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateNativeAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * @since 3.2.0
 */
class NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
  _fromNativeDate(date) {
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    // avoid 30 -> 1930 conversion
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
}
NgbDateNativeUTCAdapter.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbDateNativeUTCAdapter_BaseFactory;
  return function NgbDateNativeUTCAdapter_Factory(__ngFactoryType__) {
    return (ɵNgbDateNativeUTCAdapter_BaseFactory || (ɵNgbDateNativeUTCAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateNativeUTCAdapter)))(__ngFactoryType__ || NgbDateNativeUTCAdapter);
  };
})();
NgbDateNativeUTCAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateNativeUTCAdapter,
  factory: NgbDateNativeUTCAdapter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateNativeUTCAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const NGB_DATEPICKER_DIRECTIVES = [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth];
class NgbDatepickerModule {}
NgbDatepickerModule.ɵfac = function NgbDatepickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDatepickerModule)();
};
NgbDatepickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbDatepickerModule
});
NgbDatepickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbDatepicker, NgbDatepickerMonth]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: NGB_DATEPICKER_DIRECTIVES,
      imports: NGB_DATEPICKER_DIRECTIVES
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
class NgbDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.placement = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
    this.popperOptions = options => options;
  }
}
NgbDropdownConfig.ɵfac = function NgbDropdownConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdownConfig)();
};
NgbDropdownConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDropdownConfig,
  factory: NgbDropdownConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class NgbNavbar {}
NgbNavbar.ɵfac = function NgbNavbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavbar)();
};
NgbNavbar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavbar,
  selectors: [["", 8, "navbar"]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '.navbar',
      standalone: true
    }]
  }], null, null);
})();
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
class NgbDropdownItem {
  constructor(elementRef, _renderer) {
    this.elementRef = elementRef;
    this._renderer = _renderer;
    this._disabled = false;
  }
  set disabled(value) {
    this._disabled = value === '' || value === true; // accept an empty attribute as true
    // note: we don't use a host binding for disabled because when used on links, it fails because links don't have a
    // disabled property
    // setting the property using the renderer, OTOH, works fine in both cases.
    this._renderer.setProperty(this.elementRef.nativeElement, 'disabled', this._disabled);
  }
  get disabled() {
    return this._disabled;
  }
}
NgbDropdownItem.ɵfac = function NgbDropdownItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdownItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
NgbDropdownItem.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownItem,
  selectors: [["", "ngbDropdownItem", ""]],
  hostAttrs: [1, "dropdown-item"],
  hostVars: 3,
  hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.disabled ? -1 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownItem]',
      standalone: true,
      host: {
        class: 'dropdown-item',
        '[class.disabled]': 'disabled',
        '[tabIndex]': 'disabled ? -1 : 0'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
class NgbDropdownMenu {
  constructor(dropdown, _elementRef) {
    this.dropdown = dropdown;
    this.placement = 'bottom';
    this.isOpen = false;
    this.nativeElement = _elementRef.nativeElement;
  }
}
NgbDropdownMenu.ɵfac = function NgbDropdownMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbDropdownMenu.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownMenu,
  selectors: [["", "ngbDropdownMenu", ""]],
  contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDropdownItem, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
    }
  },
  hostVars: 4,
  hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Tab", function NgbDropdownMenu_keydown_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Shift.Tab", function NgbDropdownMenu_keydown_Shift_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-menu", true)("show", ctx.dropdown.isOpen());
    }
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownMenu]',
      standalone: true,
      host: {
        '[class.dropdown-menu]': 'true',
        '[class.show]': 'dropdown.isOpen()',
        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
        '(keydown.Home)': 'dropdown.onKeyDown($event)',
        '(keydown.End)': 'dropdown.onKeyDown($event)',
        '(keydown.Enter)': 'dropdown.onKeyDown($event)',
        '(keydown.Space)': 'dropdown.onKeyDown($event)',
        '(keydown.Tab)': 'dropdown.onKeyDown($event)',
        '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
      }
    }]
  }], function () {
    return [{
      type: NgbDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    menuItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbDropdownItem]
    }]
  });
})();
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
class NgbDropdownAnchor {
  constructor(dropdown, _elementRef) {
    this.dropdown = dropdown;
    this.nativeElement = _elementRef.nativeElement;
  }
}
NgbDropdownAnchor.ɵfac = function NgbDropdownAnchor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdownAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbDropdownAnchor.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownAnchor,
  selectors: [["", "ngbDropdownAnchor", ""]],
  hostAttrs: [1, "dropdown-toggle"],
  hostVars: 1,
  hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen());
    }
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownAnchor]',
      standalone: true,
      host: {
        class: 'dropdown-toggle',
        '[attr.aria-expanded]': 'dropdown.isOpen()'
      }
    }]
  }], function () {
    return [{
      type: NgbDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
class NgbDropdownToggle extends NgbDropdownAnchor {
  constructor(dropdown, elementRef) {
    super(dropdown, elementRef);
  }
}
NgbDropdownToggle.ɵfac = function NgbDropdownToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdownToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbDropdownToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownToggle,
  selectors: [["", "ngbDropdownToggle", ""]],
  hostAttrs: [1, "dropdown-toggle"],
  hostVars: 1,
  hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDropdownToggle_click_HostBindingHandler() {
        return ctx.dropdown.toggle();
      })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Tab", function NgbDropdownToggle_keydown_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Shift.Tab", function NgbDropdownToggle_keydown_Shift_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen());
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: NgbDropdownAnchor,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdownToggle)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownToggle]',
      standalone: true,
      host: {
        class: 'dropdown-toggle',
        '[attr.aria-expanded]': 'dropdown.isOpen()',
        '(click)': 'dropdown.toggle()',
        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
        '(keydown.Home)': 'dropdown.onKeyDown($event)',
        '(keydown.End)': 'dropdown.onKeyDown($event)',
        '(keydown.Tab)': 'dropdown.onKeyDown($event)',
        '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
      },
      providers: [{
        provide: NgbDropdownAnchor,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdownToggle)
      }]
    }]
  }], function () {
    return [{
      type: NgbDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
class NgbDropdown {
  constructor(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
    this._changeDetector = _changeDetector;
    this._document = _document;
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._destroyCloseHandlers$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._bodyContainer = null;
    /**
     * Defines whether or not the dropdown menu is opened initially.
     */
    this._open = false;
    /**
     * An event fired when the dropdown is opened or closed.
     *
     * The event payload is a `boolean`:
     * * `true` - the dropdown was opened
     * * `false` - the dropdown was closed
     */
    this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.placement = config.placement;
    this.popperOptions = config.popperOptions;
    this.container = config.container;
    this.autoClose = config.autoClose;
    this._positioning = ngbPositioning();
    this.display = ngbNavbar ? 'static' : 'dynamic';
  }
  ngAfterContentInit() {
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._applyPlacementClasses();
      if (this._open) {
        this._setCloseHandlers();
      }
    });
  }
  ngOnChanges(changes) {
    if (changes.container && this._open) {
      this._applyContainer(this.container);
    }
    if (changes.placement && !changes.placement.firstChange) {
      this._positioning.setOptions({
        hostElement: this._anchor.nativeElement,
        targetElement: this._bodyContainer || this._menu.nativeElement,
        placement: this.placement,
        appendToBody: this.container === 'body'
      });
      this._applyPlacementClasses();
    }
    if (changes.dropdownClass) {
      const {
        currentValue,
        previousValue
      } = changes.dropdownClass;
      this._applyCustomDropdownClass(currentValue, previousValue);
    }
    if (changes.autoClose && this._open) {
      this.autoClose = changes.autoClose.currentValue;
      this._setCloseHandlers();
    }
  }
  /**
   * Checks if the dropdown menu is open.
   */
  isOpen() {
    return this._open;
  }
  /**
   * Opens the dropdown menu.
   */
  open() {
    if (!this._open) {
      this._open = true;
      this._applyContainer(this.container);
      this.openChange.emit(true);
      this._setCloseHandlers();
      if (this._anchor) {
        this._anchor.nativeElement.focus();
        if (this.display === 'dynamic') {
          this._ngZone.runOutsideAngular(() => {
            this._positioning.createPopper({
              hostElement: this._anchor.nativeElement,
              targetElement: this._bodyContainer || this._menu.nativeElement,
              placement: this.placement,
              appendToBody: this.container === 'body',
              updatePopperOptions: options => this.popperOptions(addPopperOffset([0, 2])(options))
            });
            this._applyPlacementClasses();
            this._zoneSubscription = this._ngZone.onStable.subscribe(() => this._positionMenu());
          });
        }
      }
    }
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next(); // destroy any existing close handlers
    ngbAutoClose(this._ngZone, this._document, this.autoClose, source => {
      this.close();
      if (source === 0 /* SOURCE.ESCAPE */) {
        this._anchor.nativeElement.focus();
      }
    }, this._destroyCloseHandlers$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], '.dropdown-item,.dropdown-divider');
  }
  /**
   * Closes the dropdown menu.
   */
  close() {
    if (this._open) {
      this._open = false;
      this._resetContainer();
      this._positioning.destroy();
      this._zoneSubscription?.unsubscribe();
      this._destroyCloseHandlers$.next();
      this.openChange.emit(false);
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Toggles the dropdown menu.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  onKeyDown(event) {
    /* eslint-disable-next-line deprecation/deprecation */
    const key = event.which;
    const itemElements = this._getMenuElements();
    let position = -1;
    let itemElement = null;
    const isEventFromToggle = this._isEventFromToggle(event);
    if (!isEventFromToggle && itemElements.length) {
      itemElements.forEach((item, index) => {
        if (item.contains(event.target)) {
          itemElement = item;
        }
        if (item === this._document.activeElement) {
          position = index;
        }
      });
    }
    // closing on Enter / Space
    if (key === Key.Space || key === Key.Enter) {
      if (itemElement && (this.autoClose === true || this.autoClose === 'inside')) {
        // Item is either a button or a link, so click will be triggered by the browser on Enter or Space.
        // So we have to register a one-time click handler that will fire after any user defined click handlers
        // to close the dropdown
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(itemElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => this.close());
      }
      return;
    }
    if (key === Key.Tab) {
      if (event.target && this.isOpen() && this.autoClose) {
        if (this._anchor.nativeElement === event.target) {
          if (this.container === 'body' && !event.shiftKey) {
            /* This case is special: user is using [Tab] from the anchor/toggle.
            User expects the next focusable element in the dropdown menu to get focus.
            But the menu is not a sibling to anchor/toggle, it is at the end of the body.
            Trick is to synchronously focus the menu element, and let the [keydown.Tab] go
            so that browser will focus the proper element (first one focusable in the menu) */
            this._renderer.setAttribute(this._menu.nativeElement, 'tabindex', '0');
            this._menu.nativeElement.focus();
            this._renderer.removeAttribute(this._menu.nativeElement, 'tabindex');
          } else if (event.shiftKey) {
            this.close();
          }
          return;
        } else if (this.container === 'body') {
          const focusableElements = this._menu.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
          if (event.shiftKey && event.target === focusableElements[0]) {
            this._anchor.nativeElement.focus();
            event.preventDefault();
          } else if (!event.shiftKey && event.target === focusableElements[focusableElements.length - 1]) {
            this._anchor.nativeElement.focus();
            this.close();
          }
        } else {
          (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(event.target, 'focusout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(({
            relatedTarget
          }) => {
            if (!this._elementRef.nativeElement.contains(relatedTarget)) {
              this.close();
            }
          });
        }
      }
      return;
    }
    // opening / navigating
    if (isEventFromToggle || itemElement) {
      this.open();
      if (itemElements.length) {
        switch (key) {
          case Key.ArrowDown:
            position = Math.min(position + 1, itemElements.length - 1);
            break;
          case Key.ArrowUp:
            if (this._isDropup() && position === -1) {
              position = itemElements.length - 1;
              break;
            }
            position = Math.max(position - 1, 0);
            break;
          case Key.Home:
            position = 0;
            break;
          case Key.End:
            position = itemElements.length - 1;
            break;
        }
        itemElements[position].focus();
      }
      event.preventDefault();
    }
  }
  _isDropup() {
    return this._elementRef.nativeElement.classList.contains('dropup');
  }
  _isEventFromToggle(event) {
    return this._anchor.nativeElement.contains(event.target);
  }
  _getMenuElements() {
    const menu = this._menu;
    if (menu == null) {
      return [];
    }
    return menu.menuItems.filter(item => !item.disabled).map(item => item.elementRef.nativeElement);
  }
  _positionMenu() {
    const menu = this._menu;
    if (this.isOpen() && menu) {
      if (this.display === 'dynamic') {
        this._positioning.update();
        this._applyPlacementClasses();
      } else {
        this._applyPlacementClasses(this._getFirstPlacement(this.placement));
      }
    }
  }
  _getFirstPlacement(placement) {
    return Array.isArray(placement) ? placement[0] : placement.split(' ')[0];
  }
  _resetContainer() {
    const renderer = this._renderer;
    if (this._menu) {
      const dropdownElement = this._elementRef.nativeElement;
      const dropdownMenuElement = this._menu.nativeElement;
      renderer.appendChild(dropdownElement, dropdownMenuElement);
    }
    if (this._bodyContainer) {
      renderer.removeChild(this._document.body, this._bodyContainer);
      this._bodyContainer = null;
    }
  }
  _applyContainer(container = null) {
    this._resetContainer();
    if (container === 'body') {
      const renderer = this._renderer;
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');
      // Override some styles to have the positioning working
      renderer.setStyle(bodyContainer, 'position', 'absolute');
      renderer.setStyle(dropdownMenuElement, 'position', 'static');
      renderer.setStyle(bodyContainer, 'z-index', '1055');
      renderer.appendChild(bodyContainer, dropdownMenuElement);
      renderer.appendChild(this._document.body, bodyContainer);
    }
    this._applyCustomDropdownClass(this.dropdownClass);
  }
  _applyCustomDropdownClass(newClass, oldClass) {
    const targetElement = this.container === 'body' ? this._bodyContainer : this._elementRef.nativeElement;
    if (targetElement) {
      if (oldClass) {
        this._renderer.removeClass(targetElement, oldClass);
      }
      if (newClass) {
        this._renderer.addClass(targetElement, newClass);
      }
    }
  }
  _applyPlacementClasses(placement) {
    const menu = this._menu;
    if (menu) {
      if (!placement) {
        placement = this._getFirstPlacement(this.placement);
      }
      const renderer = this._renderer;
      const dropdownElement = this._elementRef.nativeElement;
      // remove the current placement classes
      renderer.removeClass(dropdownElement, 'dropup');
      renderer.removeClass(dropdownElement, 'dropdown');
      const {
        nativeElement
      } = menu;
      if (this.display === 'static') {
        menu.placement = null;
        renderer.setAttribute(nativeElement, 'data-bs-popper', 'static');
      } else {
        menu.placement = placement;
        renderer.removeAttribute(nativeElement, 'data-bs-popper');
      }
      /*
       * apply the new placement
       * in case of top use up-arrow or down-arrow otherwise
       */
      const dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
      renderer.addClass(dropdownElement, dropdownClass);
      const bodyContainer = this._bodyContainer;
      if (bodyContainer) {
        renderer.removeClass(bodyContainer, 'dropup');
        renderer.removeClass(bodyContainer, 'dropdown');
        renderer.addClass(bodyContainer, dropdownClass);
      }
    }
  }
}
NgbDropdown.ɵfac = function NgbDropdown_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNavbar, 8));
};
NgbDropdown.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdown,
  selectors: [["", "ngbDropdown", ""]],
  contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDropdownMenu, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDropdownAnchor, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._anchor = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgbDropdown_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isOpen());
    }
  },
  inputs: {
    autoClose: "autoClose",
    dropdownClass: "dropdownClass",
    _open: [0, "open", "_open"],
    placement: "placement",
    popperOptions: "popperOptions",
    container: "container",
    display: "display"
  },
  outputs: {
    openChange: "openChange"
  },
  exportAs: ["ngbDropdown"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdown]',
      exportAs: 'ngbDropdown',
      standalone: true,
      host: {
        '[class.show]': 'isOpen()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NgbDropdownConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: NgbNavbar,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    _menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbDropdownMenu, {
        static: false
      }]
    }],
    _anchor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbDropdownAnchor, {
        static: false
      }]
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['open']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popperOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
const NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];
class NgbDropdownModule {}
NgbDropdownModule.ɵfac = function NgbDropdownModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbDropdownModule)();
};
NgbDropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbDropdownModule
});
NgbDropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: NGB_DROPDOWN_DIRECTIVES,
      exports: NGB_DROPDOWN_DIRECTIVES
    }]
  }], null, null);
})();
class ContentRef {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
}
class PopupService {
  constructor(_componentType, _injector, _viewContainerRef, _renderer, _ngZone, _applicationRef) {
    this._componentType = _componentType;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._applicationRef = _applicationRef;
    this._windowRef = null;
    this._contentRef = null;
  }
  open(content, templateContext, animation = false) {
    if (!this._windowRef) {
      this._contentRef = this._getContentRef(content, templateContext);
      this._windowRef = this._viewContainerRef.createComponent(this._componentType, {
        injector: this._injector,
        projectableNodes: this._contentRef.nodes
      });
    }
    const {
      nativeElement
    } = this._windowRef.location;
    const transition$ = this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.mergeMap)(() => ngbRunTransition(this._ngZone, nativeElement, ({
      classList
    }) => classList.add('show'), {
      animation,
      runningTransition: 'continue'
    })));
    return {
      windowRef: this._windowRef,
      transition$
    };
  }
  close(animation = false) {
    if (!this._windowRef) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    }
    return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({
      classList
    }) => classList.remove('show'), {
      animation,
      runningTransition: 'stop'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => {
      if (this._windowRef) {
        // this is required because of the container='body' option
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
        this._windowRef = null;
      }
      if (this._contentRef?.viewRef) {
        this._applicationRef.detachView(this._contentRef.viewRef);
        this._contentRef.viewRef.destroy();
        this._contentRef = null;
      }
    }));
  }
  _getContentRef(content, templateContext) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      const viewRef = content.createEmbeddedView(templateContext);
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
  }
}
class NgbModalBackdrop {
  constructor(_el, _zone) {
    this._el = _el;
    this._zone = _zone;
  }
  ngOnInit() {
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      ngbRunTransition(this._zone, this._el.nativeElement, (element, animation) => {
        if (animation) {
          reflow(element);
        }
        element.classList.add('show');
      }, {
        animation: this.animation,
        runningTransition: 'continue'
      });
    });
  }
  hide() {
    return ngbRunTransition(this._zone, this._el.nativeElement, ({
      classList
    }) => classList.remove('show'), {
      animation: this.animation,
      runningTransition: 'stop'
    });
  }
}
NgbModalBackdrop.ɵfac = function NgbModalBackdrop_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModalBackdrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbModalBackdrop.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbModalBackdrop,
  selectors: [["ngb-modal-backdrop"]],
  hostAttrs: [2, "z-index", "1055"],
  hostVars: 6,
  hostBindings: function NgbModalBackdrop_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.animation)("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    backdropClass: "backdropClass"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 0,
  vars: 0,
  template: function NgbModalBackdrop_Template(rf, ctx) {},
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalBackdrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-modal-backdrop',
      standalone: true,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: '',
      host: {
        '[class]': '"modal-backdrop" + (backdropClass ? " " + backdropClass : "")',
        '[class.show]': '!animation',
        '[class.fade]': 'animation',
        style: 'z-index: 1055'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
class NgbActiveModal {
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbModalRef.result` promise will be resolved with the provided value.
   */
  close(result) {}
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {}
}
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
class NgbModalRef {
  constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._windowCmptRef = _windowCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._dismissed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._hidden = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    _windowCmptRef.instance.dismissEvent.subscribe(reason => {
      this.dismiss(reason);
    });
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {});
  }
  /**
   * The instance of a component used for the modal content.
   *
   * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
   */
  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the modal is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   *
   * @since 8.0.0
   */
  get closed() {
    return this._closed.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._hidden));
  }
  /**
   * The observable that emits when the modal is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   *
   * @since 8.0.0
   */
  get dismissed() {
    return this._dismissed.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._hidden));
  }
  /**
   * The observable that emits when both modal window and backdrop are closed and animations were finished.
   * At this point modal and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   *
   * @since 8.0.0
   */
  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when modal is fully visible and animation was finished.
   * Modal DOM element is always available synchronously after calling 'modal.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if modal is closed before open animation is finished.
   *
   * @since 8.0.0
   */
  get shown() {
    return this._windowCmptRef.instance.shown.asObservable();
  }
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
    if (this._windowCmptRef) {
      this._closed.next(result);
      this._resolve(result);
      this._removeModalElements();
    }
  }
  _dismiss(reason) {
    this._dismissed.next(reason);
    this._reject(reason);
    this._removeModalElements();
  }
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
    if (this._windowCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();
        if (isPromise(dismiss)) {
          dismiss.then(result => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {});
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }
  _removeModalElements() {
    const windowTransition$ = this._windowCmptRef.instance.hide();
    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    // hiding window
    windowTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._windowCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);
      this._windowCmptRef.destroy();
      if (this._contentRef && this._contentRef.viewRef) {
        this._contentRef.viewRef.destroy();
      }
      this._windowCmptRef = null;
      this._contentRef = null;
    });
    // hiding backdrop
    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);
        this._backdropCmptRef.destroy();
        this._backdropCmptRef = null;
      }
    });
    // all done
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.zip)(windowTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();
      this._hidden.complete();
    });
  }
}
var ModalDismissReasons;
(function (ModalDismissReasons) {
  ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
class NgbModalWindow {
  constructor(_document, _elRef, _zone) {
    this._document = _document;
    this._elRef = _elRef;
    this._zone = _zone;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._elWithFocus = null; // element that is focused prior to modal opening
    this.backdrop = true;
    this.keyboard = true;
    this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.shown = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.hidden = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  get fullscreenClass() {
    return this.fullscreen === true ? ' modal-fullscreen' : isString(this.fullscreen) ? ` modal-fullscreen-${this.fullscreen}-down` : '';
  }
  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }
  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._show();
    });
  }
  ngOnDestroy() {
    this._disableEventHandling();
  }
  hide() {
    const {
      nativeElement
    } = this._elRef;
    const context = {
      animation: this.animation,
      runningTransition: 'stop'
    };
    const windowTransition$ = ngbRunTransition(this._zone, nativeElement, () => nativeElement.classList.remove('show'), context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {}, context);
    const transitions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.zip)(windowTransition$, dialogTransition$);
    transitions$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });
    this._disableEventHandling();
    this._restoreFocus();
    return transitions$;
  }
  _show() {
    const context = {
      animation: this.animation,
      runningTransition: 'continue'
    };
    const windowTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add('show');
    }, context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {}, context);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.zip)(windowTransition$, dialogTransition$).subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });
    this._enableEventHandling();
    this._setFocus();
  }
  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$), /* eslint-disable-next-line deprecation/deprecation */
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Escape)).subscribe(event => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(ModalDismissReasons.ESC));
            }
          });
        } else if (this.backdrop === 'static') {
          this._bumpBackdrop();
        }
      });
      // We're listening to 'mousedown' and 'mouseup' to prevent modal from closing when pressing the mouse
      // inside the modal dialog and releasing it outside
      let preventClose = false;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._dialogEl.nativeElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => preventClose = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'mouseup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(({
        target
      }) => nativeElement === target)).subscribe(() => {
        preventClose = true;
      });
      // We're listening to 'click' to dismiss modal on modal window click, except when:
      // 1. clicking on modal dialog itself
      // 2. closing was prevented by mousedown/up handlers
      // 3. clicking on scrollbar when the viewport is too small and modal doesn't fit (click is not triggered at all)
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$)).subscribe(({
        target
      }) => {
        if (nativeElement === target) {
          if (this.backdrop === 'static') {
            this._bumpBackdrop();
          } else if (this.backdrop === true && !preventClose) {
            this._zone.run(() => this.dismiss(ModalDismissReasons.BACKDROP_CLICK));
          }
        }
        preventClose = false;
      });
    });
  }
  _disableEventHandling() {
    this._closed$.next();
  }
  _setFocus() {
    const {
      nativeElement
    } = this._elRef;
    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }
  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;
    if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }
  _bumpBackdrop() {
    if (this.backdrop === 'static') {
      ngbRunTransition(this._zone, this._elRef.nativeElement, ({
        classList
      }) => {
        classList.add('modal-static');
        return () => classList.remove('modal-static');
      }, {
        animation: this.animation,
        runningTransition: 'continue'
      });
    }
  }
}
NgbModalWindow.ɵfac = function NgbModalWindow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModalWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbModalWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbModalWindow,
  selectors: [["ngb-modal-window"]],
  viewQuery: function NgbModalWindow_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._dialogEl = _t.first);
    }
  },
  hostAttrs: ["role", "dialog", "tabindex", "-1"],
  hostVars: 7,
  hostBindings: function NgbModalWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    ariaLabelledBy: "ariaLabelledBy",
    ariaDescribedBy: "ariaDescribedBy",
    backdrop: "backdrop",
    centered: "centered",
    fullscreen: "fullscreen",
    keyboard: "keyboard",
    scrollable: "scrollable",
    size: "size",
    windowClass: "windowClass",
    modalDialogClass: "modalDialogClass"
  },
  outputs: {
    dismissEvent: "dismiss"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 2,
  consts: [["dialog", ""], ["role", "document"], [1, "modal-content"]],
  template: function NgbModalWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : "") + ctx.fullscreenClass + (ctx.scrollable ? " modal-dialog-scrollable" : "") + (ctx.modalDialogClass ? " " + ctx.modalDialogClass : ""));
    }
  },
  styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-modal-window',
      standalone: true,
      host: {
        '[class]': '"modal d-block" + (windowClass ? " " + windowClass : "")',
        '[class.fade]': 'animation',
        role: 'dialog',
        tabindex: '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'ariaLabelledBy',
        '[attr.aria-describedby]': 'ariaDescribedBy'
      },
      template: `
		<div
			#dialog
			[class]="
				'modal-dialog' +
				(size ? ' modal-' + size : '') +
				(centered ? ' modal-dialog-centered' : '') +
				fullscreenClass +
				(scrollable ? ' modal-dialog-scrollable' : '') +
				(modalDialogClass ? ' ' + modalDialogClass : '')
			"
			role="document"
		>
			<div class="modal-content"><ng-content></ng-content></div>
		</div>
	`,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _dialogEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['dialog', {
        static: true
      }]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fullscreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    windowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    modalDialogClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dismiss']
    }]
  });
})();

/**
 * Utility to handle the scrollbar.
 *
 * It allows to hide the scrollbar and compensate the lack of a vertical scrollbar
 * by adding an equivalent padding on the right of the body, and to revert this change.
 */
class ScrollBar {
  constructor(_document) {
    this._document = _document;
  }
  /**
   * To be called to hide a potential vertical scrollbar:
   * - if a scrollbar is there and has a width greater than 0, adds some compensation
   * padding to the body to keep the same layout as when the scrollbar is there
   * - adds overflow: hidden
   *
   * @return a callback used to revert the change
   */
  hide() {
    const scrollbarWidth = Math.abs(window.innerWidth - this._document.documentElement.clientWidth);
    const body = this._document.body;
    const bodyStyle = body.style;
    const {
      overflow,
      paddingRight
    } = bodyStyle;
    if (scrollbarWidth > 0) {
      const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
      bodyStyle.paddingRight = `${actualPadding + scrollbarWidth}px`;
    }
    bodyStyle.overflow = 'hidden';
    return () => {
      if (scrollbarWidth > 0) {
        bodyStyle.paddingRight = paddingRight;
      }
      bodyStyle.overflow = overflow;
    };
  }
}
ScrollBar.ɵfac = function ScrollBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};
ScrollBar.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollBar,
  factory: ScrollBar.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();
class NgbModalStack {
  constructor(_applicationRef, _injector, _environmentInjector, _document, _scrollBar, _rendererFactory, _ngZone) {
    this._applicationRef = _applicationRef;
    this._injector = _injector;
    this._environmentInjector = _environmentInjector;
    this._document = _document;
    this._scrollBar = _scrollBar;
    this._rendererFactory = _rendererFactory;
    this._ngZone = _ngZone;
    this._activeWindowCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._ariaHiddenValues = new Map();
    this._scrollBarRestoreFn = null;
    this._backdropAttributes = ['animation', 'backdropClass'];
    this._modalRefs = [];
    this._windowAttributes = ['animation', 'ariaLabelledBy', 'ariaDescribedBy', 'backdrop', 'centered', 'fullscreen', 'keyboard', 'scrollable', 'size', 'windowClass', 'modalDialogClass'];
    this._windowCmpts = [];
    this._activeInstances = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // Trap focus on active WindowCmpt
    this._activeWindowCmptHasChanged.subscribe(() => {
      if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        ngbFocusTrap(this._ngZone, activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
        this._revertAriaHidden();
        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }
  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;
    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }
  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }
  open(contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    const renderer = this._rendererFactory.createRenderer(null, null);
    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
    }
    this._hideScrollBar();
    const activeModal = new NgbActiveModal();
    contentInjector = options.injector || contentInjector;
    const environmentInjector = contentInjector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector, null) || this._environmentInjector;
    const contentRef = this._getContentRef(contentInjector, environmentInjector, content, activeModal, options);
    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : undefined;
    let windowCmptRef = this._attachWindowComponent(containerEl, contentRef.nodes);
    let ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
    this._registerModalRef(ngbModalRef);
    this._registerWindowCmpt(windowCmptRef);
    // We have to cleanup DOM after the last modal when BOTH 'hidden' was emitted and 'result' promise was resolved:
    // - with animations OFF, 'hidden' emits synchronously, then 'result' is resolved asynchronously
    // - with animations ON, 'result' is resolved asynchronously, then 'hidden' emits asynchronously
    ngbModalRef.hidden.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => Promise.resolve(true).then(() => {
      if (!this._modalRefs.length) {
        renderer.removeClass(this._document.body, 'modal-open');
        this._restoreScrollBar();
        this._revertAriaHidden();
      }
    }));
    activeModal.close = result => {
      ngbModalRef.close(result);
    };
    activeModal.dismiss = reason => {
      ngbModalRef.dismiss(reason);
    };
    this._applyWindowOptions(windowCmptRef.instance, options);
    if (this._modalRefs.length === 1) {
      renderer.addClass(this._document.body, 'modal-open');
    }
    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
      backdropCmptRef.changeDetectorRef.detectChanges();
    }
    windowCmptRef.changeDetectorRef.detectChanges();
    return ngbModalRef;
  }
  get activeInstances() {
    return this._activeInstances;
  }
  dismissAll(reason) {
    this._modalRefs.forEach(ngbModalRef => ngbModalRef.dismiss(reason));
  }
  hasOpenModals() {
    return this._modalRefs.length > 0;
  }
  _attachBackdrop(containerEl) {
    let backdropCmptRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(NgbModalBackdrop, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector
    });
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }
  _attachWindowComponent(containerEl, projectableNodes) {
    let windowCmptRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(NgbModalWindow, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector,
      projectableNodes
    });
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }
  _applyWindowOptions(windowInstance, options) {
    this._windowAttributes.forEach(optionName => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }
  _applyBackdropOptions(backdropInstance, options) {
    this._backdropAttributes.forEach(optionName => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
  }
  _getContentRef(contentInjector, environmentInjector, content, activeModal, options) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, environmentInjector, content, activeModal, options);
    }
  }
  _createFromTemplateRef(templateRef, activeModal) {
    const context = {
      $implicit: activeModal,
      close(result) {
        activeModal.close(result);
      },
      dismiss(reason) {
        activeModal.dismiss(reason);
      }
    };
    const viewRef = templateRef.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }
  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }
  _createFromComponent(contentInjector, environmentInjector, componentType, context, options) {
    const elementInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      providers: [{
        provide: NgbActiveModal,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(componentType, {
      environmentInjector,
      elementInjector
    });
    const componentNativeEl = componentRef.location.nativeElement;
    if (options.scrollable) {
      componentNativeEl.classList.add('component-host-scrollable');
    }
    this._applicationRef.attachView(componentRef.hostView);
    // FIXME: we should here get rid of the component nativeElement
    // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }
  _setAriaHidden(element) {
    const parent = element.parentElement;
    if (parent && element !== this._document.body) {
      Array.from(parent.children).forEach(sibling => {
        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
          this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      });
      this._setAriaHidden(parent);
    }
  }
  _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute('aria-hidden', value);
      } else {
        element.removeAttribute('aria-hidden');
      }
    });
    this._ariaHiddenValues.clear();
  }
  _registerModalRef(ngbModalRef) {
    const unregisterModalRef = () => {
      const index = this._modalRefs.indexOf(ngbModalRef);
      if (index > -1) {
        this._modalRefs.splice(index, 1);
        this._activeInstances.emit(this._modalRefs);
      }
    };
    this._modalRefs.push(ngbModalRef);
    this._activeInstances.emit(this._modalRefs);
    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
  }
  _registerWindowCmpt(ngbWindowCmpt) {
    this._windowCmpts.push(ngbWindowCmpt);
    this._activeWindowCmptHasChanged.next();
    ngbWindowCmpt.onDestroy(() => {
      const index = this._windowCmpts.indexOf(ngbWindowCmpt);
      if (index > -1) {
        this._windowCmpts.splice(index, 1);
        this._activeWindowCmptHasChanged.next();
      }
    });
  }
}
NgbModalStack.ɵfac = function NgbModalStack_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModalStack)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScrollBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbModalStack.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbModalStack,
  factory: NgbModalStack.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalStack, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: ScrollBar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
 *
 * @since 3.1.0
 */
class NgbModalConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.backdrop = true;
    this.fullscreen = false;
    this.keyboard = true;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbModalConfig.ɵfac = function NgbModalConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbModalConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbModalConfig,
  factory: NgbModalConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
class NgbModal {
  constructor(_injector, _modalStack, _config) {
    this._injector = _injector;
    this._modalStack = _modalStack;
    this._config = _config;
  }
  /**
   * Opens a new modal window with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
   * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
   *
   * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
   */
  open(content, options = {}) {
    const combinedOptions = {
      ...this._config,
      animation: this._config.animation,
      ...options
    };
    return this._modalStack.open(this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active modal instances.
   */
  get activeInstances() {
    return this._modalStack.activeInstances;
  }
  /**
   * Dismisses all currently displayed modal windows with the supplied reason.
   *
   * @since 3.1.0
   */
  dismissAll(reason) {
    this._modalStack.dismissAll(reason);
  }
  /**
   * Indicates if there are currently any open modal windows in the application.
   *
   * @since 3.3.0
   */
  hasOpenModals() {
    return this._modalStack.hasOpenModals();
  }
}
NgbModal.ɵfac = function NgbModal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbModalStack), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbModalConfig));
};
NgbModal.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbModal,
  factory: NgbModal.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: NgbModalStack
    }, {
      type: NgbModalConfig
    }];
  }, null);
})();
class NgbModalModule {}
NgbModalModule.ɵfac = function NgbModalModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModalModule)();
};
NgbModalModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbModalModule
});
NgbModalModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [NgbModal]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [NgbModal]
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the navs used in the application.
 *
 * @since 5.2.0
 */
class NgbNavConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.destroyOnHide = true;
    this.orientation = 'horizontal';
    this.roles = 'tablist';
    this.keyboard = false;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbNavConfig.ɵfac = function NgbNavConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbNavConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbNavConfig,
  factory: NgbNavConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
const isValidNavId = id => isDefined(id) && id !== '';
let navCounter = 0;
/**
 * This directive must be used to wrap content to be displayed in the nav.
 *
 * @since 5.2.0
 */
class NgbNavContent {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbNavContent.ɵfac = function NgbNavContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbNavContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavContent,
  selectors: [["ng-template", "ngbNavContent", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbNavContent]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
 *
 * @since 5.2.0
 */
class NgbNavItem {
  constructor(_nav, elementRef) {
    this._nav = _nav;
    this.elementRef = elementRef;
    /**
     * If `true`, the current nav item is disabled and can't be toggled by user.
     *
     * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
     */
    this.disabled = false;
    /**
     * An event emitted when the fade in transition is finished on the related nav content
     *
     * @since 8.0.0
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the fade out transition is finished on the related nav content
     *
     * @since 8.0.0
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.contentTpl = this.contentTpls.first;
  }
  ngOnInit() {
    if (!isDefined(this.domId)) {
      this.domId = `ngb-nav-${navCounter++}`;
    }
  }
  get active() {
    return this._nav.activeId === this.id;
  }
  get id() {
    return isValidNavId(this._id) ? this._id : this.domId;
  }
  get panelDomId() {
    return `${this.domId}-panel`;
  }
  isPanelInDom() {
    return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
  }
}
NgbNavItem.ɵfac = function NgbNavItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbNav)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbNavItem.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavItem,
  selectors: [["", "ngbNavItem", ""]],
  contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbNavContent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTpls = _t);
    }
  },
  hostVars: 2,
  hostBindings: function NgbNavItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav-item", true);
    }
  },
  inputs: {
    destroyOnHide: "destroyOnHide",
    disabled: "disabled",
    domId: "domId",
    _id: [0, "ngbNavItem", "_id"]
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbNavItem"],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbNavItem]',
      exportAs: 'ngbNavItem',
      standalone: true,
      host: {
        '[class.nav-item]': 'true'
      }
    }]
  }], function () {
    return [{
      type: NgbNav,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbNav)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    domId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngbNavItem']
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbNavContent, {
        descendants: false
      }]
    }]
  });
})();
/**
 * A nav directive that helps with implementing tabbed navigation components.
 *
 * @since 5.2.0
 */
class NgbNav {
  constructor(role, config, _cd, _document) {
    this.role = role;
    this._cd = _cd;
    this._document = _document;
    /**
     * The event emitted after the active nav changes
     * The payload of the event is the newly active nav id
     *
     * If you want to prevent nav change, you should use `(navChange)` event
     */
    this.activeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the fade in transition is finished for one of the items.
     *
     * Payload of the event is the nav id that was just shown.
     *
     * @since 8.0.0
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the fade out transition is finished for one of the items.
     *
     * Payload of the event is the nav id that was just hidden.
     *
     * @since 8.0.0
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.navItemChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * The nav change event emitted right before the nav change happens on user click.
     *
     * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
     *
     * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
     */
    this.navChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.animation = config.animation;
    this.destroyOnHide = config.destroyOnHide;
    this.orientation = config.orientation;
    this.roles = config.roles;
    this.keyboard = config.keyboard;
  }
  click(item) {
    if (!item.disabled) {
      this._updateActiveId(item.id);
    }
  }
  onKeyDown(event) {
    if (this.roles !== 'tablist' || !this.keyboard) {
      return;
    }
    /* eslint-disable-next-line deprecation/deprecation */
    const key = event.which;
    const enabledLinks = this.links.filter(link => !link.navItem.disabled);
    const {
      length
    } = enabledLinks;
    let position = -1;
    enabledLinks.forEach((link, index) => {
      if (link.elRef.nativeElement === this._document.activeElement) {
        position = index;
      }
    });
    if (length) {
      switch (key) {
        case Key.ArrowLeft:
          if (this.orientation === 'vertical') {
            return;
          }
          position = (position - 1 + length) % length;
          break;
        case Key.ArrowRight:
          if (this.orientation === 'vertical') {
            return;
          }
          position = (position + 1) % length;
          break;
        case Key.ArrowDown:
          if (this.orientation === 'horizontal') {
            return;
          }
          position = (position + 1) % length;
          break;
        case Key.ArrowUp:
          if (this.orientation === 'horizontal') {
            return;
          }
          position = (position - 1 + length) % length;
          break;
        case Key.Home:
          position = 0;
          break;
        case Key.End:
          position = length - 1;
          break;
      }
      if (this.keyboard === 'changeWithArrows') {
        this.select(enabledLinks[position].navItem.id);
      }
      enabledLinks[position].elRef.nativeElement.focus();
      event.preventDefault();
    }
  }
  /**
   * Selects the nav with the given id and shows its associated pane.
   * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
   */
  select(id) {
    this._updateActiveId(id, false);
  }
  ngAfterContentInit() {
    if (!isDefined(this.activeId)) {
      const nextId = this.items.first ? this.items.first.id : null;
      if (isValidNavId(nextId)) {
        this._updateActiveId(nextId, false);
        this._cd.detectChanges();
      }
    }
    this.items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => this._notifyItemChanged(this.activeId));
  }
  ngOnChanges({
    activeId
  }) {
    if (activeId && !activeId.firstChange) {
      this._notifyItemChanged(activeId.currentValue);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  _updateActiveId(nextId, emitNavChange = true) {
    if (this.activeId !== nextId) {
      let defaultPrevented = false;
      if (emitNavChange) {
        this.navChange.emit({
          activeId: this.activeId,
          nextId,
          preventDefault: () => {
            defaultPrevented = true;
          }
        });
      }
      if (!defaultPrevented) {
        this.activeId = nextId;
        this.activeIdChange.emit(nextId);
        this._notifyItemChanged(nextId);
      }
    }
  }
  _notifyItemChanged(nextItemId) {
    this.navItemChange$.next(this._getItemById(nextItemId));
  }
  _getItemById(itemId) {
    return this.items && this.items.find(item => item.id === itemId) || null;
  }
}
NgbNav.ɵfac = function NgbNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNavConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};
NgbNav.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNav,
  selectors: [["", "ngbNav", ""]],
  contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbNavItem, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbNavLink, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.links = _t);
    }
  },
  hostVars: 6,
  hostBindings: function NgbNav_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : undefined)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav", true)("flex-column", ctx.orientation === "vertical");
    }
  },
  inputs: {
    activeId: "activeId",
    animation: "animation",
    destroyOnHide: "destroyOnHide",
    orientation: "orientation",
    roles: "roles",
    keyboard: "keyboard"
  },
  outputs: {
    activeIdChange: "activeIdChange",
    shown: "shown",
    hidden: "hidden",
    navChange: "navChange"
  },
  exportAs: ["ngbNav"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbNav]',
      exportAs: 'ngbNav',
      standalone: true,
      host: {
        '[class.nav]': 'true',
        '[class.flex-column]': `orientation === 'vertical'`,
        '[attr.aria-orientation]': `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
        '[attr.role]': `role ? role : roles ? 'tablist' : undefined`,
        '(keydown.arrowLeft)': 'onKeyDown($event)',
        '(keydown.arrowRight)': 'onKeyDown($event)',
        '(keydown.arrowDown)': 'onKeyDown($event)',
        '(keydown.arrowUp)': 'onKeyDown($event)',
        '(keydown.Home)': 'onKeyDown($event)',
        '(keydown.End)': 'onKeyDown($event)'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['role']
      }]
    }, {
      type: NgbNavConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, {
    activeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIdChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    roles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbNavItem]
    }],
    links: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbNavLink), {
        descendants: true
      }]
    }],
    navChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * A directive to put on the nav link.
 *
 * @since 5.2.0
 */
class NgbNavLink {
  constructor(role, navItem, nav, elRef) {
    this.role = role;
    this.navItem = navItem;
    this.nav = nav;
    this.elRef = elRef;
  }
  hasNavItemClass() {
    // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
    return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
  }
}
NgbNavLink.ɵfac = function NgbNavLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNavItem), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbNavLink.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavLink,
  selectors: [["a", "ngbNavLink", ""]],
  hostAttrs: ["href", ""],
  hostVars: 14,
  hostBindings: function NgbNavLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbNavLink_click_HostBindingHandler($event) {
        ctx.nav.click(ctx.navItem);
        return $event.preventDefault();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.navItem.domId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : undefined)("tabindex", ctx.navItem.disabled ? -1 : undefined)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav-link", true)("nav-item", ctx.hasNavItemClass())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
    }
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'a[ngbNavLink]',
      standalone: true,
      host: {
        '[id]': 'navItem.domId',
        '[class.nav-link]': 'true',
        '[class.nav-item]': 'hasNavItemClass()',
        '[attr.role]': `role ? role : nav.roles ? 'tab' : undefined`,
        href: '',
        '[class.active]': 'navItem.active',
        '[class.disabled]': 'navItem.disabled',
        '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
        '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
        '[attr.aria-selected]': 'navItem.active',
        '[attr.aria-disabled]': 'navItem.disabled',
        '(click)': 'nav.click(navItem); $event.preventDefault()'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['role']
      }]
    }, {
      type: NgbNavItem
    }, {
      type: NgbNav
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
const ngbNavFadeOutTransition = ({
  classList
}) => {
  classList.remove('show');
  return () => classList.remove('active');
};
const ngbNavFadeInTransition = (element, animation) => {
  if (animation) {
    reflow(element);
  }
  element.classList.add('show');
};
class NgbNavPane {
  constructor(elRef) {
    this.elRef = elRef;
  }
}
NgbNavPane.ɵfac = function NgbNavPane_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavPane)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbNavPane.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavPane,
  selectors: [["", "ngbNavPane", ""]],
  hostAttrs: [1, "tab-pane"],
  hostVars: 5,
  hostBindings: function NgbNavPane_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.item.panelDomId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : undefined)("aria-labelledby", ctx.item.domId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.nav.animation);
    }
  },
  inputs: {
    item: "item",
    nav: "nav",
    role: "role"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavPane, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbNavPane]',
      standalone: true,
      host: {
        '[id]': 'item.panelDomId',
        class: 'tab-pane',
        '[class.fade]': 'nav.animation',
        '[attr.role]': 'role ? role : nav.roles ? "tabpanel" : undefined',
        '[attr.aria-labelledby]': 'item.domId'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nav: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * The outlet where currently active nav content will be displayed.
 *
 * @since 5.2.0
 */
class NgbNavOutlet {
  constructor(_cd, _ngZone) {
    this._cd = _cd;
    this._ngZone = _ngZone;
    this._activePane = null;
  }
  isPanelTransitioning(item) {
    return this._activePane?.item === item;
  }
  ngAfterViewInit() {
    // initial display
    this._updateActivePane();
    // this will be emitted for all 3 types of nav changes: .select(), [activeId] or (click)
    this.nav.navItemChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.nav.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(this._activePane?.item || null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.skip)(1)).subscribe(nextItem => {
      const options = {
        animation: this.nav.animation,
        runningTransition: 'stop'
      };
      // next panel we're switching to will only appear in DOM after the change detection is done
      // and `this._panes` will be updated
      this._cd.detectChanges();
      // fading out
      if (this._activePane) {
        ngbRunTransition(this._ngZone, this._activePane.elRef.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
          const activeItem = this._activePane?.item;
          this._activePane = this._getPaneForItem(nextItem);
          // mark for check when transition finishes as outlet or parent containers might be OnPush
          // without this the panes that have "faded out" will stay in DOM
          this._cd.markForCheck();
          // fading in
          if (this._activePane) {
            // we have to add the '.active' class before running the transition,
            // because it should be in place before `ngbRunTransition` does `reflow()`
            this._activePane.elRef.nativeElement.classList.add('active');
            ngbRunTransition(this._ngZone, this._activePane.elRef.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
              if (nextItem) {
                nextItem.shown.emit();
                this.nav.shown.emit(nextItem.id);
              }
            });
          }
          if (activeItem) {
            activeItem.hidden.emit();
            this.nav.hidden.emit(activeItem.id);
          }
        });
      } else {
        this._updateActivePane();
      }
    });
  }
  _updateActivePane() {
    this._activePane = this._getActivePane();
    this._activePane?.elRef.nativeElement.classList.add('show');
    this._activePane?.elRef.nativeElement.classList.add('active');
  }
  _getPaneForItem(item) {
    return this._panes && this._panes.find(pane => pane.item === item) || null;
  }
  _getActivePane() {
    return this._panes && this._panes.find(pane => pane.item.active) || null;
  }
}
NgbNavOutlet.ɵfac = function NgbNavOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbNavOutlet.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbNavOutlet,
  selectors: [["", "ngbNavOutlet", ""]],
  viewQuery: function NgbNavOutlet_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgbNavPane, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._panes = _t);
    }
  },
  hostVars: 2,
  hostBindings: function NgbNavOutlet_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-content", true);
    }
  },
  inputs: {
    paneRole: "paneRole",
    nav: [0, "ngbNavOutlet", "nav"]
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  attrs: _c8,
  decls: 1,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], ["ngbNavPane", "", 3, "item", "nav", "role", 4, "ngIf"], ["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbNavOutlet_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbNavOutlet_ng_template_0_Template, 1, 1, "ng-template", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav.items);
    }
  },
  dependencies: [NgbNavPane, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[ngbNavOutlet]',
      standalone: true,
      imports: [NgbNavPane, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
      host: {
        '[class.tab-content]': 'true'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
		<ng-template ngFor let-item [ngForOf]="nav.items">
			<div
				ngbNavPane
				*ngIf="item.isPanelInDom() || isPanelTransitioning(item)"
				[item]="item"
				[nav]="nav"
				[role]="paneRole"
			>
				<ng-template
					[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
					[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
				></ng-template>
			</div>
		</ng-template>
	`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _panes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [NgbNavPane]
    }],
    paneRole: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nav: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngbNavOutlet']
    }]
  });
})();
const NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane];
class NgbNavModule {}
NgbNavModule.ɵfac = function NgbNavModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbNavModule)();
};
NgbNavModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbNavModule
});
NgbNavModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbNavOutlet]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: NGB_NAV_DIRECTIVES,
      exports: NGB_NAV_DIRECTIVES
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
class NgbPaginationConfig {
  constructor() {
    this.disabled = false;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.ellipses = true;
    this.maxSize = 0;
    this.pageSize = 10;
    this.rotate = false;
  }
}
NgbPaginationConfig.ɵfac = function NgbPaginationConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationConfig)();
};
NgbPaginationConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbPaginationConfig,
  factory: NgbPaginationConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
class NgbPaginationEllipsis {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationEllipsis.ɵfac = function NgbPaginationEllipsis_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationEllipsis.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationEllipsis,
  selectors: [["ng-template", "ngbPaginationEllipsis", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationEllipsis, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationEllipsis]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
class NgbPaginationFirst {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationFirst.ɵfac = function NgbPaginationFirst_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationFirst.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationFirst,
  selectors: [["ng-template", "ngbPaginationFirst", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationFirst, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationFirst]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
class NgbPaginationLast {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationLast.ɵfac = function NgbPaginationLast_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationLast.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationLast,
  selectors: [["ng-template", "ngbPaginationLast", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationLast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationLast]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
class NgbPaginationNext {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationNext.ɵfac = function NgbPaginationNext_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationNext.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationNext,
  selectors: [["ng-template", "ngbPaginationNext", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationNext]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
class NgbPaginationNumber {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationNumber.ɵfac = function NgbPaginationNumber_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationNumber.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationNumber,
  selectors: [["ng-template", "ngbPaginationNumber", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationNumber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationNumber]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
class NgbPaginationPrevious {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationPrevious.ɵfac = function NgbPaginationPrevious_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationPrevious.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationPrevious,
  selectors: [["ng-template", "ngbPaginationPrevious", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationPrevious]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'pages' whole content
 *
 * @since 9.1.0
 */
class NgbPaginationPages {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
NgbPaginationPages.ɵfac = function NgbPaginationPages_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationPages)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgbPaginationPages.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationPages,
  selectors: [["ng-template", "ngbPaginationPages", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationPages, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationPages]',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
class NgbPagination {
  constructor(config) {
    this.pageCount = 0;
    this.pages = [];
    /**
     *  The current page.
     *
     *  Page numbers start with `1`.
     */
    this.page = 1;
    /**
     *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
     *
     *  Event payload is the number of the newly selected page.
     *
     *  Page numbers start with `1`.
     */
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.disabled = config.disabled;
    this.boundaryLinks = config.boundaryLinks;
    this.directionLinks = config.directionLinks;
    this.ellipses = config.ellipses;
    this.maxSize = config.maxSize;
    this.pageSize = config.pageSize;
    this.rotate = config.rotate;
    this.size = config.size;
  }
  hasPrevious() {
    return this.page > 1;
  }
  hasNext() {
    return this.page < this.pageCount;
  }
  nextDisabled() {
    return !this.hasNext() || this.disabled;
  }
  previousDisabled() {
    return !this.hasPrevious() || this.disabled;
  }
  selectPage(pageNumber) {
    this._updatePages(pageNumber);
  }
  ngOnChanges(changes) {
    this._updatePages(this.page);
  }
  isEllipsis(pageNumber) {
    return pageNumber === -1;
  }
  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  _applyEllipses(start, end) {
    if (this.ellipses) {
      if (start > 0) {
        // The first page will always be included. If the displayed range
        // starts after the third page, then add ellipsis. But if the range
        // starts on the third page, then add the second page instead of
        // an ellipsis, because the ellipsis would only hide a single page.
        if (start > 2) {
          this.pages.unshift(-1);
        } else if (start === 2) {
          this.pages.unshift(2);
        }
        this.pages.unshift(1);
      }
      if (end < this.pageCount) {
        // The last page will always be included. If the displayed range
        // ends before the third-last page, then add ellipsis. But if the range
        // ends on third-last page, then add the second-last page instead of
        // an ellipsis, because the ellipsis would only hide a single page.
        if (end < this.pageCount - 2) {
          this.pages.push(-1);
        } else if (end === this.pageCount - 2) {
          this.pages.push(this.pageCount - 1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }
  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  _applyRotation() {
    let start = 0;
    let end = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
    if (this.page <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = this.pageCount - this.maxSize;
    } else {
      // rotate
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }
    return [start, end];
  }
  /**
   * Paginates page numbers based on maxSize items per page.
   */
  _applyPagination() {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start = page * this.maxSize;
    let end = start + this.maxSize;
    return [start, end];
  }
  _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);
    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }
  _updatePages(newPage) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }
    // fill-in model needed to render pages
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
    // set page within 1..max range
    this._setPageInRange(newPage);
    // apply maxSize if necessary
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;
      // either paginating or rotating page numbers
      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }
      this.pages = this.pages.slice(start, end);
      // adding ellipses
      this._applyEllipses(start, end);
    }
  }
}
NgbPagination.ɵfac = function NgbPagination_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbPaginationConfig));
};
NgbPagination.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbPagination,
  selectors: [["ngb-pagination"]],
  contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationEllipsis, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationFirst, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationLast, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationNext, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationNumber, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationPrevious, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationPages, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPages = _t.first);
    }
  },
  hostAttrs: ["role", "navigation"],
  inputs: {
    disabled: "disabled",
    boundaryLinks: "boundaryLinks",
    directionLinks: "directionLinks",
    ellipses: "ellipses",
    rotate: "rotate",
    collectionSize: "collectionSize",
    maxSize: "maxSize",
    page: "page",
    pageSize: "pageSize",
    size: "size"
  },
  outputs: {
    pageChange: "pageChange"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 20,
  vars: 12,
  consts: () => {
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_12 = goog.getMsg("\xAB\xAB");
      i18n_12 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_12;
    } else {
      i18n_12 = $localize`:@@ngb.pagination.first:««`;
    }
    let i18n_13;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_13 = goog.getMsg("\xAB");
      i18n_13 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_13;
    } else {
      i18n_13 = $localize`:@@ngb.pagination.previous:«`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_14 = goog.getMsg("\xBB");
      i18n_14 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_14;
    } else {
      i18n_14 = $localize`:@@ngb.pagination.next:»`;
    }
    let i18n_15;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_15 = goog.getMsg("\xBB\xBB");
      i18n_15 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_15;
    } else {
      i18n_15 = $localize`:@@ngb.pagination.last:»»`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_16 = goog.getMsg("First");
      i18n_16 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_16;
    } else {
      i18n_16 = $localize`:@@ngb.pagination.first-aria:First`;
    }
    let i18n_17;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_17 = goog.getMsg("Previous");
      i18n_17 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_17;
    } else {
      i18n_17 = $localize`:@@ngb.pagination.previous-aria:Previous`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_18 = goog.getMsg("Next");
      i18n_18 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_18;
    } else {
      i18n_18 = $localize`:@@ngb.pagination.next-aria:Next`;
    }
    let i18n_19;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_19 = goog.getMsg("Last");
      i18n_19 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_19;
    } else {
      i18n_19 = $localize`:@@ngb.pagination.last-aria:Last`;
    }
    return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], i18n_12, i18n_13, i18n_14, i18n_15, ["class", "page-item", 3, "disabled", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], ["class", "visually-hidden", 4, "ngIf"], [1, "visually-hidden"], ["class", "page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "page-link", "tabindex", "-1", "aria-disabled", "true", 4, "ngIf"], ["class", "page-link", "href", "", 3, "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_16, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_17, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_18, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_19, "href", "", 1, "page-link", 3, "click"]];
  },
  template: function NgbPagination_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(10, NgbPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(12, NgbPagination_ng_template_12_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgbPagination_li_15_Template, 3, 9, "li", 11)(16, NgbPagination_li_16_Template, 3, 8, "li", 11)(17, NgbPagination_ng_template_17_Template, 0, 0, "ng-template", 12)(18, NgbPagination_li_18_Template, 3, 9, "li", 11)(19, NgbPagination_li_19_Template, 3, 9, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const defaultPages_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx.tplPages == null ? null : ctx.tplPages.templateRef) || defaultPages_r20)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c10, ctx.page, ctx.pages, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPagination, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-pagination',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        role: 'navigation'
      },
      template: `
		<ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
		<ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
		<ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
		<ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
		<ng-template #ellipsis>...</ng-template>
		<ng-template #defaultNumber let-page let-currentPage="currentPage">
			{{ page }}
			<span *ngIf="page === currentPage" class="visually-hidden">(current)</span>
		</ng-template>
		<ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
			<li
				*ngFor="let pageNumber of pages"
				class="page-item"
				[class.active]="pageNumber === page"
				[class.disabled]="isEllipsis(pageNumber) || disabled"
				[attr.aria-current]="pageNumber === page ? 'page' : null"
			>
				<a *ngIf="isEllipsis(pageNumber)" class="page-link" tabindex="-1" aria-disabled="true">
					<ng-template
						[ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
						[ngTemplateOutletContext]="{ disabled: true, currentPage: page }"
					></ng-template>
				</a>
				<a
					*ngIf="!isEllipsis(pageNumber)"
					class="page-link"
					href
					(click)="selectPage(pageNumber); $event.preventDefault()"
					[attr.tabindex]="disabled ? '-1' : null"
					[attr.aria-disabled]="disabled ? 'true' : null"
				>
					<ng-template
						[ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
						[ngTemplateOutletContext]="{ disabled: disabled, $implicit: pageNumber, currentPage: page }"
					></ng-template>
				</a>
			</li>
		</ng-template>
		<ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
			<li *ngIf="boundaryLinks" class="page-item" [class.disabled]="previousDisabled()">
				<a
					aria-label="First"
					i18n-aria-label="@@ngb.pagination.first-aria"
					class="page-link"
					href
					(click)="selectPage(1); $event.preventDefault()"
					[attr.tabindex]="previousDisabled() ? '-1' : null"
					[attr.aria-disabled]="previousDisabled() ? 'true' : null"
				>
					<ng-template
						[ngTemplateOutlet]="tplFirst?.templateRef || first"
						[ngTemplateOutletContext]="{ disabled: previousDisabled(), currentPage: page }"
					></ng-template>
				</a>
			</li>

			<li *ngIf="directionLinks" class="page-item" [class.disabled]="previousDisabled()">
				<a
					aria-label="Previous"
					i18n-aria-label="@@ngb.pagination.previous-aria"
					class="page-link"
					href
					(click)="selectPage(page - 1); $event.preventDefault()"
					[attr.tabindex]="previousDisabled() ? '-1' : null"
					[attr.aria-disabled]="previousDisabled() ? 'true' : null"
				>
					<ng-template
						[ngTemplateOutlet]="tplPrevious?.templateRef || previous"
						[ngTemplateOutletContext]="{ disabled: previousDisabled() }"
					></ng-template>
				</a>
			</li>
			<ng-template
				[ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
				[ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
			>
			</ng-template>
			<li *ngIf="directionLinks" class="page-item" [class.disabled]="nextDisabled()">
				<a
					aria-label="Next"
					i18n-aria-label="@@ngb.pagination.next-aria"
					class="page-link"
					href
					(click)="selectPage(page + 1); $event.preventDefault()"
					[attr.tabindex]="nextDisabled() ? '-1' : null"
					[attr.aria-disabled]="nextDisabled() ? 'true' : null"
				>
					<ng-template
						[ngTemplateOutlet]="tplNext?.templateRef || next"
						[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
					></ng-template>
				</a>
			</li>

			<li *ngIf="boundaryLinks" class="page-item" [class.disabled]="nextDisabled()">
				<a
					aria-label="Last"
					i18n-aria-label="@@ngb.pagination.last-aria"
					class="page-link"
					href
					(click)="selectPage(pageCount); $event.preventDefault()"
					[attr.tabindex]="nextDisabled() ? '-1' : null"
					[attr.aria-disabled]="nextDisabled() ? 'true' : null"
				>
					<ng-template
						[ngTemplateOutlet]="tplLast?.templateRef || last"
						[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
					></ng-template>
				</a>
			</li>
		</ul>
	`
    }]
  }], function () {
    return [{
      type: NgbPaginationConfig
    }];
  }, {
    tplEllipsis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationEllipsis, {
        static: false
      }]
    }],
    tplFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationFirst, {
        static: false
      }]
    }],
    tplLast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationLast, {
        static: false
      }]
    }],
    tplNext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationNext, {
        static: false
      }]
    }],
    tplNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationNumber, {
        static: false
      }]
    }],
    tplPrevious: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationPrevious, {
        static: false
      }]
    }],
    tplPages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationPages, {
        static: false
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    boundaryLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ellipses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collectionSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const NGB_PAGINATION_DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages];
class NgbPaginationModule {}
NgbPaginationModule.ɵfac = function NgbPaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPaginationModule)();
};
NgbPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbPaginationModule
});
NgbPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbPagination]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: NGB_PAGINATION_DIRECTIVES,
      exports: NGB_PAGINATION_DIRECTIVES
    }]
  }], null, null);
})();
class Trigger {
  constructor(open, close) {
    this.open = open;
    this.close = close;
    if (!close) {
      this.close = open;
    }
  }
  isManual() {
    return this.open === 'manual' || this.close === 'manual';
  }
}
const DEFAULT_ALIASES = {
  hover: ['mouseenter', 'mouseleave'],
  focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || '').trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map(triggerPair => {
    let alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());
  if (manualTriggers.length > 1) {
    throw 'Triggers parse error: only one manual trigger is allowed';
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw "Triggers parse error: manual trigger can't be mixed with other triggers";
  }
  return parsedTriggers;
}
function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    const listeners = [];
    const openFn = () => subscriber.next(true);
    const closeFn = () => subscriber.next(false);
    const toggleFn = () => subscriber.next(!isOpenedFn());
    triggers.forEach(trigger => {
      if (trigger.open === trigger.close) {
        listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
      } else {
        listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
      }
    });
    return () => {
      listeners.forEach(unsubscribeFn => unsubscribeFn());
    };
  });
}
const delayOrNoop = time => time > 0 ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.delay)(time) : a => a;
function triggerDelay(openDelay, closeDelay, isOpenedFn) {
  return input$ => {
    let pending = null;
    const filteredInput$ = input$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(open => ({
      open
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => {
      const currentlyOpen = isOpenedFn();
      if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
        pending = event;
        return true;
      }
      if (pending && pending.open !== event.open) {
        pending = null;
      }
      return false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.share)());
    const delayedOpen$ = filteredInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.open), delayOrNoop(openDelay));
    const delayedClose$ = filteredInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => !event.open), delayOrNoop(closeDelay));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(delayedOpen$, delayedClose$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => {
      if (event === pending) {
        pending = null;
        return event.open !== isOpenedFn();
      }
      return false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(event => event.open));
  };
}
function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay = 0, closeDelay = 0) {
  const parsedTriggers = parseTriggers(triggers);
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return () => {};
  }
  const subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn).pipe(triggerDelay(openDelay, closeDelay, isOpenedFn)).subscribe(open => open ? openFn() : closeFn());
  return () => subscription.unsubscribe();
}

/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
class NgbPopoverConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.autoClose = true;
    this.placement = 'auto';
    this.popperOptions = options => options;
    this.triggers = 'click';
    this.disablePopover = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbPopoverConfig.ɵfac = function NgbPopoverConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPopoverConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbPopoverConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbPopoverConfig,
  factory: NgbPopoverConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopoverConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
let nextId$1 = 0;
class NgbPopoverWindow {
  isTitleTemplate() {
    return this.title instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef;
  }
}
NgbPopoverWindow.ɵfac = function NgbPopoverWindow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPopoverWindow)();
};
NgbPopoverWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbPopoverWindow,
  selectors: [["ngb-popover-window"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 5,
  hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    title: "title",
    id: "id",
    popoverClass: "popoverClass",
    context: "context"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 1,
  consts: [["simpleTitle", ""], ["data-popper-arrow", "", 1, "popover-arrow"], ["class", "popover-header", 4, "ngIf"], [1, "popover-body"], [1, "popover-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbPopoverWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPopoverWindow_h3_1_Template, 4, 2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopoverWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-popover-window',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")',
        '[class.fade]': 'animation',
        role: 'tooltip',
        '[id]': 'id'
      },
      template: ` <div class="popover-arrow" data-popper-arrow></div>
		<h3 class="popover-header" *ngIf="title">
			<ng-template #simpleTitle>{{ title }}</ng-template>
			<ng-template
				[ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle"
				[ngTemplateOutletContext]="context"
			></ng-template>
		</h3>
		<div class="popover-body"><ng-content></ng-content></div>`
    }]
  }], null, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A lightweight and extensible directive for fancy popover creation.
 */
class NgbPopover {
  constructor(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._document = _document;
    this._changeDetector = _changeDetector;
    /**
     * An event emitted when the popover opening animation has finished. Contains no payload.
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the popover closing animation has finished. Contains no payload.
     *
     * At this point popover is not in the DOM anymore.
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._ngbPopoverWindowId = `ngb-popover-${nextId$1++}`;
    this._windowRef = null;
    this.animation = config.animation;
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.popperOptions = config.popperOptions;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disablePopover = config.disablePopover;
    this.popoverClass = config.popoverClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._positioning = ngbPositioning();
    this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, this._ngZone, applicationRef);
  }
  _isDisabled() {
    if (this.disablePopover) {
      return true;
    }
    if (!this.ngbPopover && !this.popoverTitle) {
      return true;
    }
    return false;
  }
  /**
   * Opens the popover.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the popover template when it is created.
   */
  open(context) {
    if (!this._windowRef && !this._isDisabled()) {
      // this type assertion is safe because otherwise _isDisabled would return true
      const {
        windowRef,
        transition$
      } = this._popupService.open(this.ngbPopover, context, this.animation);
      this._windowRef = windowRef;
      this._windowRef.setInput('animation', this.animation);
      this._windowRef.setInput('title', this.popoverTitle);
      this._windowRef.setInput('context', context);
      this._windowRef.setInput('popoverClass', this.popoverClass);
      this._windowRef.setInput('id', this._ngbPopoverWindowId);
      this._renderer.setAttribute(this._getPositionTargetElement(), 'aria-describedby', this._ngbPopoverWindowId);
      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      }
      // We need to detect changes, because we don't know where .open() might be called from.
      // Ex. opening popover from one of lifecycle hooks that run after the CD
      // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
      this._windowRef.changeDetectorRef.detectChanges();
      // We need to mark for check, because popover won't work inside the OnPush component.
      // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
      // inside the template of an OnPush component and we change the popover from
      // open -> closed, the expression in question won't be updated unless we explicitly
      // mark the parent component to be checked.
      this._windowRef.changeDetectorRef.markForCheck();
      // Setting up popper and scheduling updates when zone is stable
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          appendToBody: this.container === 'body',
          baseClass: 'bs-popover',
          updatePopperOptions: options => this.popperOptions(addPopperOffset([0, 8])(options))
        });
        Promise.resolve().then(() => {
          // This update is required for correct arrow placement
          this._positioning.update();
          this._zoneSubscription = this._ngZone.onStable.subscribe(() => this._positioning.update());
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => this.shown.emit());
    }
  }
  /**
   * Closes the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  close(animation = this.animation) {
    if (this._windowRef) {
      this._renderer.removeAttribute(this._getPositionTargetElement(), 'aria-describedby');
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._zoneSubscription?.unsubscribe();
        this.hidden.emit();
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
  }
  ngOnChanges({
    ngbPopover,
    popoverTitle,
    disablePopover,
    popoverClass
  }) {
    if (popoverClass && this.isOpen()) {
      this._windowRef.instance.popoverClass = popoverClass.currentValue;
    }
    // close popover if title and content become empty, or disablePopover set to true
    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
      this.close();
    }
  }
  ngOnDestroy() {
    this.close(false);
    // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
    this._unregisterListenersFn?.();
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._elementRef.nativeElement;
  }
}
NgbPopover.ɵfac = function NgbPopover_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPopover)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbPopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};
NgbPopover.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPopover,
  selectors: [["", "ngbPopover", ""]],
  inputs: {
    animation: "animation",
    autoClose: "autoClose",
    ngbPopover: "ngbPopover",
    popoverTitle: "popoverTitle",
    placement: "placement",
    popperOptions: "popperOptions",
    triggers: "triggers",
    positionTarget: "positionTarget",
    container: "container",
    disablePopover: "disablePopover",
    popoverClass: "popoverClass",
    openDelay: "openDelay",
    closeDelay: "closeDelay"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbPopover"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopover, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbPopover]',
      exportAs: 'ngbPopover',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: NgbPopoverConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ngbPopover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popperOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    positionTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disablePopover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgbPopoverModule {}
NgbPopoverModule.ɵfac = function NgbPopoverModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbPopoverModule)();
};
NgbPopoverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbPopoverModule
});
NgbPopoverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbPopover],
      exports: [NgbPopover]
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
class NgbProgressbarConfig {
  constructor() {
    this.max = 100;
    this.animated = false;
    this.ariaLabel = 'progress bar';
    this.striped = false;
    this.showValue = false;
  }
}
NgbProgressbarConfig.ɵfac = function NgbProgressbarConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbProgressbarConfig)();
};
NgbProgressbarConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbProgressbarConfig,
  factory: NgbProgressbarConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbProgressbarConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
class NgbProgressbar {
  constructor(config) {
    /**
     * The current value for the progress bar.
     *
     * Should be in the `[0, max]` range.
     */
    this.value = 0;
    this.max = config.max;
    this.animated = config.animated;
    this.ariaLabel = config.ariaLabel;
    this.striped = config.striped;
    this.textType = config.textType;
    this.type = config.type;
    this.showValue = config.showValue;
    this.height = config.height;
  }
  /**
   * The maximal value to be displayed in the progress bar.
   *
   * Should be a positive number. Will default to 100 otherwise.
   */
  set max(max) {
    this._max = !isNumber(max) || max <= 0 ? 100 : max;
  }
  get max() {
    return this._max;
  }
  getValue() {
    return getValueInRange(this.value, this.max);
  }
  getPercentValue() {
    return 100 * this.getValue() / this.max;
  }
}
NgbProgressbar.ɵfac = function NgbProgressbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbProgressbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbProgressbarConfig));
};
NgbProgressbar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbProgressbar,
  selectors: [["ngb-progressbar"]],
  hostAttrs: ["role", "progressbar", "aria-valuemin", "0", 1, "progress"],
  hostVars: 5,
  hostBindings: function NgbProgressbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height);
    }
  },
  inputs: {
    max: "max",
    animated: "animated",
    ariaLabel: "ariaLabel",
    striped: "striped",
    showValue: "showValue",
    textType: "textType",
    type: "type",
    value: "value",
    height: "height"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 11,
  consts: () => {
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_20 = goog.getMsg("{$interpolation}", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ getValue() / max | percent }}"
        }
      });
      i18n_20 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_20;
    } else {
      i18n_20 = $localize`:@@ngb.progressbar.value:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    }
    return [i18n_20, [4, "ngIf"]];
  },
  template: function NgbProgressbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbProgressbar_span_1_Template, 3, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("progress-bar", ctx.type ? ctx.textType ? " bg-" + ctx.type : " text-bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getPercentValue(), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-bar-animated", ctx.animated)("progress-bar-striped", ctx.striped);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.PercentPipe],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbProgressbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-progressbar',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.PercentPipe],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'progress',
        role: 'progressbar',
        '[attr.aria-valuenow]': 'getValue()',
        'aria-valuemin': '0',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-label]': 'ariaLabel'
      },
      template: `
		<div
			class="progress-bar{{ type ? (textType ? ' bg-' + type : ' text-bg-' + type) : '' }}{{
				textType ? ' text-' + textType : ''
			}}"
			[class.progress-bar-animated]="animated"
			[class.progress-bar-striped]="striped"
			[style.width.%]="getPercentValue()"
		>
			<span *ngIf="showValue" i18n="@@ngb.progressbar.value">{{ getValue() / max | percent }}</span
			><ng-content></ng-content>
		</div>
	`
    }]
  }], function () {
    return [{
      type: NgbProgressbarConfig
    }];
  }, {
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    striped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    textType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }]
  });
})();
class NgbProgressbarModule {}
NgbProgressbarModule.ɵfac = function NgbProgressbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbProgressbarModule)();
};
NgbProgressbarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbProgressbarModule
});
NgbProgressbarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbProgressbar]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbProgressbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbProgressbar],
      exports: [NgbProgressbar]
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
class NgbRatingConfig {
  constructor() {
    this.max = 10;
    this.readonly = false;
    this.resettable = false;
    this.tabindex = 0;
  }
}
NgbRatingConfig.ɵfac = function NgbRatingConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbRatingConfig)();
};
NgbRatingConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbRatingConfig,
  factory: NgbRatingConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRatingConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * A directive that helps visualising and interacting with a star rating bar.
 */
class NgbRating {
  constructor(config, _changeDetectorRef) {
    this._changeDetectorRef = _changeDetectorRef;
    this.contexts = [];
    this.disabled = false;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload equals to the rating being hovered over.
     */
    this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload equals to the rating of the last item being hovered over.
     */
    this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the rating is changed.
     *
     * Event payload equals to the newly selected rating.
     */
    this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.max = config.max;
    this.readonly = config.readonly;
    this.tabindex = config.tabindex;
  }
  ariaValueText() {
    return `${this.nextRate} out of ${this.max}`;
  }
  isInteractive() {
    return !this.readonly && !this.disabled;
  }
  enter(value) {
    if (this.isInteractive()) {
      this._updateState(value);
    }
    this.hover.emit(value);
  }
  handleBlur() {
    this.onTouched();
  }
  handleClick(value) {
    if (this.isInteractive()) {
      this.update(this.resettable && this.rate === value ? 0 : value);
    }
  }
  handleKeyDown(event) {
    /* eslint-disable-next-line deprecation/deprecation */
    switch (event.which) {
      case Key.ArrowDown:
      case Key.ArrowLeft:
        this.update(this.rate - 1);
        break;
      case Key.ArrowUp:
      case Key.ArrowRight:
        this.update(this.rate + 1);
        break;
      case Key.Home:
        this.update(0);
        break;
      case Key.End:
        this.update(this.max);
        break;
      default:
        return;
    }
    // note 'return' in default case
    event.preventDefault();
  }
  ngOnChanges(changes) {
    if (changes['rate']) {
      this.update(this.rate);
    }
    if (changes['max']) {
      this._updateMax();
    }
  }
  ngOnInit() {
    this._setupContexts();
    this._updateState(this.rate);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  reset() {
    this.leave.emit(this.nextRate);
    this._updateState(this.rate);
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  update(value, internalChange = true) {
    const newRate = getValueInRange(value, this.max, 0);
    if (this.isInteractive() && this.rate !== newRate) {
      this.rate = newRate;
      this.rateChange.emit(this.rate);
    }
    if (internalChange) {
      this.onChange(this.rate);
      this.onTouched();
    }
    this._updateState(this.rate);
  }
  writeValue(value) {
    this.update(value, false);
    this._changeDetectorRef.markForCheck();
  }
  _updateState(nextValue) {
    this.nextRate = nextValue;
    this.contexts.forEach((context, index) => context.fill = Math.round(getValueInRange(nextValue - index, 1, 0) * 100));
  }
  _updateMax() {
    if (this.max > 0) {
      this._setupContexts();
      this.update(this.rate);
    }
  }
  _setupContexts() {
    this.contexts = Array.from({
      length: this.max
    }, (v, k) => ({
      fill: 0,
      index: k
    }));
  }
}
NgbRating.ɵfac = function NgbRating_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbRating)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbRatingConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
NgbRating.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbRating,
  selectors: [["ngb-rating"]],
  contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.starTemplateFromContent = _t.first);
    }
  },
  hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"],
  hostVars: 5,
  hostBindings: function NgbRating_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgbRating_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("keydown", function NgbRating_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      })("mouseleave", function NgbRating_mouseleave_HostBindingHandler() {
        return ctx.reset();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.disabled ? -1 : ctx.tabindex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText())("aria-disabled", ctx.readonly ? true : null);
    }
  },
  inputs: {
    max: "max",
    rate: "rate",
    readonly: "readonly",
    resettable: "resettable",
    starTemplate: "starTemplate",
    tabindex: "tabindex"
  },
  outputs: {
    hover: "hover",
    leave: "leave",
    rateChange: "rateChange"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbRating),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "visually-hidden"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbRating_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgbRating_ng_template_2_Template, 4, 5, "ng-template", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contexts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRating, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-rating',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'd-inline-flex',
        '[tabindex]': 'disabled ? -1 : tabindex',
        role: 'slider',
        'aria-valuemin': '0',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-valuenow]': 'nextRate',
        '[attr.aria-valuetext]': 'ariaValueText()',
        '[attr.aria-disabled]': 'readonly ? true : null',
        '(blur)': 'handleBlur()',
        '(keydown)': 'handleKeyDown($event)',
        '(mouseleave)': 'reset()'
      },
      template: `
		<ng-template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>
		<ng-template ngFor [ngForOf]="contexts" let-index="index">
			<span class="visually-hidden">({{ index < nextRate ? '*' : ' ' }})</span>
			<span
				(mouseenter)="enter(index + 1)"
				(click)="handleClick(index + 1)"
				[style.cursor]="isInteractive() ? 'pointer' : 'default'"
			>
				<ng-template
					[ngTemplateOutlet]="starTemplate || starTemplateFromContent || t"
					[ngTemplateOutletContext]="contexts[index]"
				>
				</ng-template>
			</span>
		</ng-template>
	`,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbRating),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: NgbRatingConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resettable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    starTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    starTemplateFromContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: false
      }]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    leave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgbRatingModule {}
NgbRatingModule.ɵfac = function NgbRatingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbRatingModule)();
};
NgbRatingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbRatingModule
});
NgbRatingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbRating]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRatingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbRating],
      exports: [NgbRating]
    }]
  }], null, null);
})();
class NgbTime {
  constructor(hour, minute, second) {
    this.hour = toInteger(hour);
    this.minute = toInteger(minute);
    this.second = toInteger(second);
  }
  changeHour(step = 1) {
    this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
  }
  updateHour(hour) {
    if (isNumber(hour)) {
      this.hour = (hour < 0 ? 24 + hour : hour) % 24;
    } else {
      this.hour = NaN;
    }
  }
  changeMinute(step = 1) {
    this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
  }
  updateMinute(minute) {
    if (isNumber(minute)) {
      this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
      this.changeHour(Math.floor(minute / 60));
    } else {
      this.minute = NaN;
    }
  }
  changeSecond(step = 1) {
    this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
  }
  updateSecond(second) {
    if (isNumber(second)) {
      this.second = second < 0 ? 60 + second % 60 : second % 60;
      this.changeMinute(Math.floor(second / 60));
    } else {
      this.second = NaN;
    }
  }
  isValid(checkSecs = true) {
    return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
  }
  toString() {
    return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`;
  }
}

/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
class NgbTimepickerConfig {
  constructor() {
    this.meridian = false;
    this.spinners = true;
    this.seconds = false;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.disabled = false;
    this.readonlyInputs = false;
    this.size = 'medium';
  }
}
NgbTimepickerConfig.ɵfac = function NgbTimepickerConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTimepickerConfig)();
};
NgbTimepickerConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimepickerConfig,
  factory: NgbTimepickerConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
class NgbTimeAdapter {}
NgbTimeAdapter.ɵfac = function NgbTimeAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTimeAdapter)();
};
NgbTimeAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimeAdapter,
  factory: () => NGB_DATEPICKER_TIME_ADAPTER_FACTORY(),
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimeAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
    }]
  }], null, null);
})();
class NgbTimeStructAdapter extends NgbTimeAdapter {
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  fromModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  toModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
}
NgbTimeStructAdapter.ɵfac = /* @__PURE__ */(() => {
  let ɵNgbTimeStructAdapter_BaseFactory;
  return function NgbTimeStructAdapter_Factory(__ngFactoryType__) {
    return (ɵNgbTimeStructAdapter_BaseFactory || (ɵNgbTimeStructAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbTimeStructAdapter)))(__ngFactoryType__ || NgbTimeStructAdapter);
  };
})();
NgbTimeStructAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimeStructAdapter,
  factory: NgbTimeStructAdapter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimeStructAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
function NGB_TIMEPICKER_I18N_FACTORY(locale) {
  return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */
class NgbTimepickerI18n {}
NgbTimepickerI18n.ɵfac = function NgbTimepickerI18n_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTimepickerI18n)();
};
NgbTimepickerI18n.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimepickerI18n,
  factory: function NgbTimepickerI18n_Factory(__ngFactoryType__) {
    let __ngConditionalFactory__ = null;
    if (__ngFactoryType__) {
      __ngConditionalFactory__ = new __ngFactoryType__();
    } else {
      __ngConditionalFactory__ = NGB_TIMEPICKER_I18N_FACTORY(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
    }
    return __ngConditionalFactory__;
  },
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerI18n, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_TIMEPICKER_I18N_FACTORY,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
    }]
  }], null, null);
})();
class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
  constructor(locale) {
    super();
    this._periods = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleDayPeriods)(locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Narrow);
  }
  getMorningPeriod() {
    return this._periods[0];
  }
  getAfternoonPeriod() {
    return this._periods[1];
  }
}
NgbTimepickerI18nDefault.ɵfac = function NgbTimepickerI18nDefault_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTimepickerI18nDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};
NgbTimepickerI18nDefault.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimepickerI18nDefault,
  factory: NgbTimepickerI18nDefault.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerI18nDefault, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();
const FILTER_REGEX = /[^0-9]/g;
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
class NgbTimepicker {
  constructor(_config, _ngbTimeAdapter, _cd, i18n) {
    this._config = _config;
    this._ngbTimeAdapter = _ngbTimeAdapter;
    this._cd = _cd;
    this.i18n = i18n;
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }
  /**
   * The number of hours to add/subtract when clicking hour spinners.
   */
  set hourStep(step) {
    this._hourStep = isInteger(step) ? step : this._config.hourStep;
  }
  get hourStep() {
    return this._hourStep;
  }
  /**
   * The number of minutes to add/subtract when clicking minute spinners.
   */
  set minuteStep(step) {
    this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
  }
  get minuteStep() {
    return this._minuteStep;
  }
  /**
   * The number of seconds to add/subtract when clicking second spinners.
   */
  set secondStep(step) {
    this._secondStep = isInteger(step) ? step : this._config.secondStep;
  }
  get secondStep() {
    return this._secondStep;
  }
  writeValue(value) {
    const structValue = this._ngbTimeAdapter.fromModel(value);
    this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
      this.model.second = 0;
    }
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * Increments the hours by the given step.
   */
  changeHour(step) {
    this.model?.changeHour(step);
    this.propagateModelChange();
  }
  /**
   * Increments the minutes by the given step.
   */
  changeMinute(step) {
    this.model?.changeMinute(step);
    this.propagateModelChange();
  }
  /**
   * Increments the seconds by the given step.
   */
  changeSecond(step) {
    this.model?.changeSecond(step);
    this.propagateModelChange();
  }
  /**
   * Update hours with the new value.
   */
  updateHour(newVal) {
    const isPM = this.model ? this.model.hour >= 12 : false;
    const enteredHour = toInteger(newVal);
    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
      this.model?.updateHour(enteredHour + 12);
    } else {
      this.model?.updateHour(enteredHour);
    }
    this.propagateModelChange();
  }
  /**
   * Update minutes with the new value.
   */
  updateMinute(newVal) {
    this.model?.updateMinute(toInteger(newVal));
    this.propagateModelChange();
  }
  /**
   * Update seconds with the new value.
   */
  updateSecond(newVal) {
    this.model?.updateSecond(toInteger(newVal));
    this.propagateModelChange();
  }
  toggleMeridian() {
    if (this.meridian) {
      this.changeHour(12);
    }
  }
  formatInput(input) {
    input.value = input.value.replace(FILTER_REGEX, '');
  }
  formatHour(value) {
    if (isNumber(value)) {
      if (this.meridian) {
        return padNumber(value % 12 === 0 ? 12 : value % 12);
      } else {
        return padNumber(value % 24);
      }
    } else {
      return padNumber(NaN);
    }
  }
  formatMinSec(value) {
    return padNumber(isNumber(value) ? value : NaN);
  }
  handleBlur() {
    this.onTouched();
  }
  get isSmallSize() {
    return this.size === 'small';
  }
  get isLargeSize() {
    return this.size === 'large';
  }
  ngOnChanges(changes) {
    if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
      this.model.second = 0;
      this.propagateModelChange(false);
    }
  }
  propagateModelChange(touched = true) {
    if (touched) {
      this.onTouched();
    }
    if (this.model?.isValid(this.seconds)) {
      this.onChange(this._ngbTimeAdapter.toModel({
        hour: this.model.hour,
        minute: this.model.minute,
        second: this.model.second
      }));
    } else {
      this.onChange(this._ngbTimeAdapter.toModel(null));
    }
  }
}
NgbTimepicker.ɵfac = function NgbTimepicker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTimepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTimeAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTimepickerI18n));
};
NgbTimepicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbTimepicker,
  selectors: [["ngb-timepicker"]],
  inputs: {
    meridian: "meridian",
    spinners: "spinners",
    seconds: "seconds",
    hourStep: "hourStep",
    minuteStep: "minuteStep",
    secondStep: "secondStep",
    readonlyInputs: "readonlyInputs",
    size: "size"
  },
  exportAs: ["ngbTimepicker"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTimepicker),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 16,
  vars: 25,
  consts: () => {
    let i18n_21;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_21 = goog.getMsg("HH");
      i18n_21 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_21;
    } else {
      i18n_21 = $localize`:@@ngb.timepicker.HH:HH`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_22 = goog.getMsg("Hours");
      i18n_22 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_22;
    } else {
      i18n_22 = $localize`:@@ngb.timepicker.hours:Hours`;
    }
    let i18n_23;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_23 = goog.getMsg("MM");
      i18n_23 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_23;
    } else {
      i18n_23 = $localize`:@@ngb.timepicker.MM:MM`;
    }
    let i18n_24;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_24 = goog.getMsg("Minutes");
      i18n_24 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_24;
    } else {
      i18n_24 = $localize`:@@ngb.timepicker.minutes:Minutes`;
    }
    let i18n_25;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_25 = goog.getMsg("Increment hours");
      i18n_25 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_25;
    } else {
      i18n_25 = $localize`:@@ngb.timepicker.increment-hours:Increment hours`;
    }
    let i18n_26;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_26 = goog.getMsg("Decrement hours");
      i18n_26 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_26;
    } else {
      i18n_26 = $localize`:@@ngb.timepicker.decrement-hours:Decrement hours`;
    }
    let i18n_27;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_27 = goog.getMsg("Increment minutes");
      i18n_27 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_27;
    } else {
      i18n_27 = $localize`:@@ngb.timepicker.increment-minutes:Increment minutes`;
    }
    let i18n_28;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_28 = goog.getMsg("Decrement minutes");
      i18n_28 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_28;
    } else {
      i18n_28 = $localize`:@@ngb.timepicker.decrement-minutes:Decrement minutes`;
    }
    let i18n_29;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_29 = goog.getMsg("SS");
      i18n_29 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_29;
    } else {
      i18n_29 = $localize`:@@ngb.timepicker.SS:SS`;
    }
    let i18n_30;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_30 = goog.getMsg("Seconds");
      i18n_30 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_30;
    } else {
      i18n_30 = $localize`:@@ngb.timepicker.seconds:Seconds`;
    }
    let i18n_31;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_31 = goog.getMsg("Increment seconds");
      i18n_31 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_31;
    } else {
      i18n_31 = $localize`:@@ngb.timepicker.increment-seconds:Increment seconds`;
    }
    let i18n_32;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_32 = goog.getMsg("Decrement seconds");
      i18n_32 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_32;
    } else {
      i18n_32 = $localize`:@@ngb.timepicker.decrement-seconds:Decrement seconds`;
    }
    let i18n_33;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_33 = goog.getMsg("{$interpolation}", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{\n\t\t\t\t\t\t\ti18n.getAfternoonPeriod()\n\t\t\t\t\t\t}}"
        }
      });
      i18n_33 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_33;
    } else {
      i18n_33 = $localize`:@@ngb.timepicker.PM:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    }
    let i18n_34;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_34 = goog.getMsg("{$interpolation}", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ i18n.getMorningPeriod() }}"
        }
      });
      i18n_34 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_34;
    } else {
      i18n_34 = $localize`:@@ngb.timepicker.AM:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    }
    return [["am", ""], i18n_25, i18n_26, i18n_27, i18n_28, i18n_31, i18n_32, i18n_33, i18n_34, [3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", "class", "btn btn-link", 3, "btn-sm", "btn-lg", "disabled", "click", 4, "ngIf"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_21, "aria-label", i18n_22, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_23, "aria-label", i18n_24, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], ["class", "ngb-tp-spacer", 4, "ngIf"], ["class", "ngb-tp-input-container ngb-tp-second", 4, "ngIf"], ["class", "ngb-tp-meridian", 4, "ngIf"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "click", "disabled"], [1, "chevron", "ngb-tp-chevron"], [1, "visually-hidden"], [1, "chevron", "ngb-tp-chevron", "bottom"], [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_29, "aria-label", i18n_30, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [4, "ngIf", "ngIfElse"]];
  },
  template: function NgbTimepicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 9)(1, "div", 10)(2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbTimepicker_button_3_Template, 4, 7, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbTimepicker_Template_input_change_4_listener($event) {
        return ctx.updateHour($event.target.value);
      })("blur", function NgbTimepicker_Template_input_blur_4_listener() {
        return ctx.handleBlur();
      })("input", function NgbTimepicker_Template_input_input_4_listener($event) {
        return ctx.formatInput($event.target);
      })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) {
        ctx.changeHour(ctx.hourStep);
        return $event.preventDefault();
      })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) {
        ctx.changeHour(-ctx.hourStep);
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbTimepicker_button_5_Template, 4, 7, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgbTimepicker_button_9_Template, 4, 7, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbTimepicker_Template_input_change_10_listener($event) {
        return ctx.updateMinute($event.target.value);
      })("blur", function NgbTimepicker_Template_input_blur_10_listener() {
        return ctx.handleBlur();
      })("input", function NgbTimepicker_Template_input_input_10_listener($event) {
        return ctx.formatInput($event.target);
      })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_10_listener($event) {
        ctx.changeMinute(ctx.minuteStep);
        return $event.preventDefault();
      })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_10_listener($event) {
        ctx.changeMinute(-ctx.minuteStep);
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgbTimepicker_button_11_Template, 4, 7, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgbTimepicker_div_12_Template, 2, 0, "div", 17)(13, NgbTimepicker_div_13_Template, 4, 9, "div", 18)(14, NgbTimepicker_div_14_Template, 1, 0, "div", 17)(15, NgbTimepicker_div_15_Template, 5, 9, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meridian);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      exportAs: 'ngbTimepicker',
      selector: 'ngb-timepicker',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
		<fieldset [disabled]="disabled" [class.disabled]="disabled">
			<div class="ngb-tp">
				<div class="ngb-tp-input-container ngb-tp-hour">
					<button
						*ngIf="spinners"
						tabindex="-1"
						type="button"
						(click)="changeHour(hourStep)"
						class="btn btn-link"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[class.disabled]="disabled"
						[disabled]="disabled"
					>
						<span class="chevron ngb-tp-chevron"></span>
						<span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
					</button>
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="HH"
						i18n-placeholder="@@ngb.timepicker.HH"
						[value]="formatHour(model?.hour)"
						(change)="updateHour($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Hours"
						i18n-aria-label="@@ngb.timepicker.hours"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()"
					/>
					<button
						*ngIf="spinners"
						tabindex="-1"
						type="button"
						(click)="changeHour(-hourStep)"
						class="btn btn-link"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[class.disabled]="disabled"
						[disabled]="disabled"
					>
						<span class="chevron ngb-tp-chevron bottom"></span>
						<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
					</button>
				</div>
				<div class="ngb-tp-spacer">:</div>
				<div class="ngb-tp-input-container ngb-tp-minute">
					<button
						*ngIf="spinners"
						tabindex="-1"
						type="button"
						(click)="changeMinute(minuteStep)"
						class="btn btn-link"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[class.disabled]="disabled"
						[disabled]="disabled"
					>
						<span class="chevron ngb-tp-chevron"></span>
						<span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
					</button>
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="MM"
						i18n-placeholder="@@ngb.timepicker.MM"
						[value]="formatMinSec(model?.minute)"
						(change)="updateMinute($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Minutes"
						i18n-aria-label="@@ngb.timepicker.minutes"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()"
					/>
					<button
						*ngIf="spinners"
						tabindex="-1"
						type="button"
						(click)="changeMinute(-minuteStep)"
						class="btn btn-link"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[class.disabled]="disabled"
						[disabled]="disabled"
					>
						<span class="chevron ngb-tp-chevron bottom"></span>
						<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
					</button>
				</div>
				<div *ngIf="seconds" class="ngb-tp-spacer">:</div>
				<div *ngIf="seconds" class="ngb-tp-input-container ngb-tp-second">
					<button
						*ngIf="spinners"
						tabindex="-1"
						type="button"
						(click)="changeSecond(secondStep)"
						class="btn btn-link"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[class.disabled]="disabled"
						[disabled]="disabled"
					>
						<span class="chevron ngb-tp-chevron"></span>
						<span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
					</button>
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="SS"
						i18n-placeholder="@@ngb.timepicker.SS"
						[value]="formatMinSec(model?.second)"
						(change)="updateSecond($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Seconds"
						i18n-aria-label="@@ngb.timepicker.seconds"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()"
					/>
					<button
						*ngIf="spinners"
						tabindex="-1"
						type="button"
						(click)="changeSecond(-secondStep)"
						class="btn btn-link"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[class.disabled]="disabled"
						[disabled]="disabled"
					>
						<span class="chevron ngb-tp-chevron bottom"></span>
						<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
					</button>
				</div>
				<div *ngIf="meridian" class="ngb-tp-spacer"></div>
				<div *ngIf="meridian" class="ngb-tp-meridian">
					<button
						type="button"
						class="btn btn-outline-primary"
						[class.btn-sm]="isSmallSize"
						[class.btn-lg]="isLargeSize"
						[disabled]="disabled"
						[class.disabled]="disabled"
						(click)="toggleMeridian()"
					>
						<ng-container *ngIf="model && model.hour >= 12; else am" i18n="@@ngb.timepicker.PM">{{
							i18n.getAfternoonPeriod()
						}}</ng-container>
						<ng-template #am i18n="@@ngb.timepicker.AM">{{ i18n.getMorningPeriod() }}</ng-template>
					</button>
				</div>
			</div>
		</fieldset>
	`,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTimepicker),
        multi: true
      }],
      styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n"]
    }]
  }], function () {
    return [{
      type: NgbTimepickerConfig
    }, {
      type: NgbTimeAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NgbTimepickerI18n
    }];
  }, {
    meridian: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    spinners: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    seconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hourStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minuteStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    secondStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonlyInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgbTimepickerModule {}
NgbTimepickerModule.ɵfac = function NgbTimepickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTimepickerModule)();
};
NgbTimepickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbTimepickerModule
});
NgbTimepickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbTimepicker]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbTimepicker],
      exports: [NgbTimepicker]
    }]
  }], null, null);
})();
const ngbToastFadeInTransition = (element, animation) => {
  const {
    classList
  } = element;
  if (animation) {
    classList.add('fade');
  } else {
    classList.add('show');
    return;
  }
  reflow(element);
  classList.add('show', 'showing');
  return () => {
    classList.remove('showing');
  };
};
const ngbToastFadeOutTransition = ({
  classList
}) => {
  classList.add('showing');
  return () => {
    classList.remove('show', 'showing');
  };
};

/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
class NgbToastConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.autohide = true;
    this.delay = 5000;
    this.ariaLive = 'polite';
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbToastConfig.ɵfac = function NgbToastConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbToastConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbToastConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbToastConfig,
  factory: NgbToastConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToastConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * @since 5.0.0
 */
class NgbToastHeader {}
NgbToastHeader.ɵfac = function NgbToastHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbToastHeader)();
};
NgbToastHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbToastHeader,
  selectors: [["", "ngbToastHeader", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToastHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbToastHeader]',
      standalone: true
    }]
  }], null, null);
})();
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * @since 5.0.0
 */
class NgbToast {
  constructor(ariaLive, config, _zone, _element) {
    this.ariaLive = ariaLive;
    this._zone = _zone;
    this._element = _element;
    /**
     * A template like `<ng-template ngbToastHeader></ng-template>` can be
     * used in the projected content to allow markup usage.
     */
    this.contentHeaderTpl = null;
    /**
     * An event fired after the animation triggered by calling `.show()` method has finished.
     *
     * @since 8.0.0
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event fired after the animation triggered by calling `.hide()` method has finished.
     *
     * It can only occur in 2 different scenarios:
     * - `autohide` timeout fires
     * - user clicks on a closing cross
     *
     * Additionally this output is purely informative. The toast won't be removed from DOM automatically, it's up
     * to the user to take care of that.
     *
     * @since 8.0.0
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (this.ariaLive == null) {
      this.ariaLive = config.ariaLive;
    }
    this.delay = config.delay;
    this.autohide = config.autohide;
    this.animation = config.animation;
  }
  ngAfterContentInit() {
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._init();
      this.show();
    });
  }
  ngOnChanges(changes) {
    if ('autohide' in changes) {
      this._clearTimeout();
      this._init();
    }
  }
  /**
   * Triggers toast closing programmatically.
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(hidden)` output
   *
   * @since 8.0.0
   */
  hide() {
    this._clearTimeout();
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, {
      animation: this.animation,
      runningTransition: 'stop'
    });
    transition.subscribe(() => {
      this.hidden.emit();
    });
    return transition;
  }
  /**
   * Triggers toast opening programmatically.
   *
   * The returned observable will emit and be completed once the opening transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(shown)` output
   *
   * @since 8.0.0
   */
  show() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
      animation: this.animation,
      runningTransition: 'continue'
    });
    transition.subscribe(() => {
      this.shown.emit();
    });
    return transition;
  }
  _init() {
    if (this.autohide && !this._timeoutID) {
      this._timeoutID = setTimeout(() => this.hide(), this.delay);
    }
  }
  _clearTimeout() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
      this._timeoutID = null;
    }
  }
}
NgbToast.ɵfac = function NgbToast_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbToast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-live'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbToastConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgbToast.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbToast,
  selectors: [["ngb-toast"]],
  contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbToastHeader, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentHeaderTpl = _t.first);
    }
  },
  hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"],
  hostVars: 3,
  hostBindings: function NgbToast_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx.ariaLive);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    delay: "delay",
    autohide: "autohide",
    header: "header"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbToast"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 1,
  consts: () => {
    let i18n_35;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_35 = goog.getMsg("Close");
      i18n_35 = MSG_C__DEVELOP_SIX_BASE_ANGULAR_FRAMEWORK_TESTPROJECT_BASE_TEST_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2020_NG_BOOTSTRAP_MJS_35;
    } else {
      i18n_35 = $localize`:@@ngb.toast.close-aria:Close`;
    }
    return [["headerTpl", ""], [3, "ngIf"], [1, "toast-body"], [1, "me-auto"], [1, "toast-header"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", i18n_35, 1, "btn-close", 3, "click"]];
  },
  template: function NgbToast_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgbToast_ng_template_2_Template, 3, 1, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentHeaderTpl || ctx.header);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-toast',
      exportAs: 'ngbToast',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        role: 'alert',
        '[attr.aria-live]': 'ariaLive',
        'aria-atomic': 'true',
        class: 'toast',
        '[class.fade]': 'animation'
      },
      template: `
		<ng-template #headerTpl>
			<strong class="me-auto">{{ header }}</strong>
		</ng-template>
		<ng-template [ngIf]="contentHeaderTpl || header">
			<div class="toast-header">
				<ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl"></ng-template>
				<button
					type="button"
					class="btn-close"
					aria-label="Close"
					i18n-aria-label="@@ngb.toast.close-aria"
					(click)="hide()"
				>
				</button>
			</div>
		</ng-template>
		<div class="toast-body">
			<ng-content></ng-content>
		</div>
	`,
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['aria-live']
      }]
    }, {
      type: NgbToastConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autohide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentHeaderTpl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbToastHeader, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgbToastModule {}
NgbToastModule.ɵfac = function NgbToastModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbToastModule)();
};
NgbToastModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbToastModule
});
NgbToastModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbToast]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToastModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbToast, NgbToastHeader],
      exports: [NgbToast, NgbToastHeader]
    }]
  }], null, null);
})();

/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
class NgbTooltipConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.autoClose = true;
    this.placement = 'auto';
    this.popperOptions = options => options;
    this.triggers = 'hover focus';
    this.disableTooltip = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbTooltipConfig.ɵfac = function NgbTooltipConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTooltipConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbTooltipConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTooltipConfig,
  factory: NgbTooltipConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltipConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
let nextId = 0;
class NgbTooltipWindow {}
NgbTooltipWindow.ɵfac = function NgbTooltipWindow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTooltipWindow)();
};
NgbTooltipWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbTooltipWindow,
  selectors: [["ngb-tooltip-window"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 5,
  hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    id: "id",
    tooltipClass: "tooltipClass"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
  template: function NgbTooltipWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltipWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-tooltip-window',
      standalone: true,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '[class]': '"tooltip" + (tooltipClass ? " " + tooltipClass : "")',
        '[class.fade]': 'animation',
        role: 'tooltip',
        '[id]': 'id'
      },
      template: `<div class="tooltip-arrow" data-popper-arrow></div
		><div class="tooltip-inner"><ng-content></ng-content></div>`
    }]
  }], null, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */
class NgbTooltip {
  constructor(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._document = _document;
    this._changeDetector = _changeDetector;
    /**
     * An event emitted when the tooltip opening animation has finished. Contains no payload.
     */
    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the tooltip closing animation has finished. Contains no payload.
     */
    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
    this._windowRef = null;
    this.animation = config.animation;
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.popperOptions = config.popperOptions;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disableTooltip = config.disableTooltip;
    this.tooltipClass = config.tooltipClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, this._ngZone, applicationRef);
    this._positioning = ngbPositioning();
  }
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
   *
   * If the content if falsy, the tooltip won't open.
   */
  set ngbTooltip(value) {
    this._ngbTooltip = value;
    if (!value && this._windowRef) {
      this.close();
    }
  }
  get ngbTooltip() {
    return this._ngbTooltip;
  }
  /**
   * Opens the tooltip.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the tooltip template when it is created.
   */
  open(context) {
    if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this._ngbTooltip, context, this.animation);
      this._windowRef = windowRef;
      this._windowRef.setInput('animation', this.animation);
      this._windowRef.setInput('tooltipClass', this.tooltipClass);
      this._windowRef.setInput('id', this._ngbTooltipWindowId);
      this._renderer.setAttribute(this._getPositionTargetElement(), 'aria-describedby', this._ngbTooltipWindowId);
      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      }
      // We need to detect changes, because we don't know where .open() might be called from.
      // Ex. opening tooltip from one of lifecycle hooks that run after the CD
      // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
      this._windowRef.changeDetectorRef.detectChanges();
      // We need to mark for check, because tooltip won't work inside the OnPush component.
      // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
      // inside the template of an OnPush component and we change the tooltip from
      // open -> closed, the expression in question won't be updated unless we explicitly
      // mark the parent component to be checked.
      this._windowRef.changeDetectorRef.markForCheck();
      // Setting up popper and scheduling updates when zone is stable
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          appendToBody: this.container === 'body',
          baseClass: 'bs-tooltip',
          updatePopperOptions: options => this.popperOptions(options)
        });
        Promise.resolve().then(() => {
          // This update is required for correct arrow placement
          this._positioning.update();
          this._zoneSubscription = this._ngZone.onStable.subscribe(() => this._positioning.update());
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => this.shown.emit());
    }
  }
  /**
   * Closes the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  close(animation = this.animation) {
    if (this._windowRef != null) {
      this._renderer.removeAttribute(this._getPositionTargetElement(), 'aria-describedby');
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._zoneSubscription?.unsubscribe();
        this.hidden.emit();
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
  }
  ngOnChanges({
    tooltipClass
  }) {
    if (tooltipClass && this.isOpen()) {
      this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
    }
  }
  ngOnDestroy() {
    this.close(false);
    // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
    this._unregisterListenersFn?.();
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._elementRef.nativeElement;
  }
}
NgbTooltip.ɵfac = function NgbTooltip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};
NgbTooltip.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbTooltip,
  selectors: [["", "ngbTooltip", ""]],
  inputs: {
    animation: "animation",
    autoClose: "autoClose",
    placement: "placement",
    popperOptions: "popperOptions",
    triggers: "triggers",
    positionTarget: "positionTarget",
    container: "container",
    disableTooltip: "disableTooltip",
    tooltipClass: "tooltipClass",
    openDelay: "openDelay",
    closeDelay: "closeDelay",
    ngbTooltip: "ngbTooltip"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbTooltip"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbTooltip]',
      standalone: true,
      exportAs: 'ngbTooltip'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: NgbTooltipConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popperOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    positionTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ngbTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgbTooltipModule {}
NgbTooltipModule.ɵfac = function NgbTooltipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTooltipModule)();
};
NgbTooltipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbTooltipModule
});
NgbTooltipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbTooltip],
      exports: [NgbTooltip]
    }]
  }], null, null);
})();

/**
 * A component that helps with text highlighting.
 *
 * It splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
class NgbHighlight {
  constructor() {
    /**
     * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
     */
    this.highlightClass = 'ngb-highlight';
    /**
     * Boolean option to determine if the highlighting should be sensitive to accents or not.
     *
     * This feature is only available for browsers that implement the `String.normalize` function
     * (typically not Internet Explorer).
     * If you want to use this feature in a browser that does not implement `String.normalize`,
     * you will have to include a polyfill in your application (`unorm` for example).
     *
     * @since 9.1.0
     */
    this.accentSensitive = true;
  }
  ngOnChanges(changes) {
    if (!this.accentSensitive && !String.prototype.normalize) {
      console.warn('The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser ' + 'that does not implement the `String.normalize` function. ' + 'You will have to include a polyfill in your application to use this feature in the current browser.');
      this.accentSensitive = true;
    }
    const result = toString(this.result);
    const terms = Array.isArray(this.term) ? this.term : [this.term];
    const prepareTerm = term => this.accentSensitive ? term : removeAccents(term);
    const escapedTerms = terms.map(term => regExpEscape(prepareTerm(toString(term)))).filter(term => term);
    const toSplit = this.accentSensitive ? result : removeAccents(result);
    const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join('|')})`, 'gmi')) : [result];
    if (this.accentSensitive) {
      this.parts = parts;
    } else {
      let offset = 0;
      this.parts = parts.map(part => result.substring(offset, offset += part.length));
    }
  }
}
NgbHighlight.ɵfac = function NgbHighlight_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbHighlight)();
};
NgbHighlight.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbHighlight,
  selectors: [["ngb-highlight"]],
  inputs: {
    highlightClass: "highlightClass",
    result: "result",
    term: "term",
    accentSensitive: "accentSensitive"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["even", ""], ["ngFor", "", 3, "ngForOf"], [3, "class", 4, "ngIf", "ngIfElse"]],
  template: function NgbHighlight_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbHighlight_ng_template_0_Template, 3, 2, "ng-template", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor],
  styles: [".ngb-highlight{font-weight:700}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbHighlight, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-highlight',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` + `<span *ngIf="isOdd; else even" [class]="highlightClass">{{part}}</span><ng-template #even>{{part}}</ng-template>` + `</ng-template>`,
      styles: [".ngb-highlight{font-weight:700}\n"]
    }]
  }], null, {
    highlightClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    result: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    accentSensitive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgbTypeaheadWindow {
  constructor() {
    this.activeIdx = 0;
    /**
     * Flag indicating if the first row should be active initially
     */
    this.focusFirst = true;
    /**
     * A function used to format a given result before display. This function should return a formatted string without any
     * HTML markup
     */
    this.formatter = toString;
    /**
     * Event raised when user selects a particular result row
     */
    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  hasActive() {
    return this.activeIdx > -1 && this.activeIdx < this.results.length;
  }
  getActive() {
    return this.results[this.activeIdx];
  }
  markActive(activeIdx) {
    this.activeIdx = activeIdx;
    this._activeChanged();
  }
  next() {
    if (this.activeIdx === this.results.length - 1) {
      this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
    } else {
      this.activeIdx++;
    }
    this._activeChanged();
  }
  prev() {
    if (this.activeIdx < 0) {
      this.activeIdx = this.results.length - 1;
    } else if (this.activeIdx === 0) {
      this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
    } else {
      this.activeIdx--;
    }
    this._activeChanged();
  }
  resetActive() {
    this.activeIdx = this.focusFirst ? 0 : -1;
    this._activeChanged();
  }
  select(item) {
    this.selectEvent.emit(item);
  }
  ngOnInit() {
    this.resetActive();
  }
  _activeChanged() {
    this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
  }
}
NgbTypeaheadWindow.ɵfac = function NgbTypeaheadWindow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTypeaheadWindow)();
};
NgbTypeaheadWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbTypeaheadWindow,
  selectors: [["ngb-typeahead-window"]],
  hostAttrs: ["role", "listbox"],
  hostVars: 3,
  hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
        return $event.preventDefault();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
    }
  },
  inputs: {
    id: "id",
    focusFirst: "focusFirst",
    results: "results",
    term: "term",
    formatter: "formatter",
    resultTemplate: "resultTemplate",
    popupClass: "popupClass"
  },
  outputs: {
    selectEvent: "select",
    activeChangeEvent: "activeChange"
  },
  exportAs: ["ngbTypeaheadWindow"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [["rt", ""], ["ngFor", "", 3, "ngForOf"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "mouseenter", "click", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbTypeaheadWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgbTypeaheadWindow_ng_template_2_Template, 2, 9, "ng-template", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    }
  },
  dependencies: [NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeaheadWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-typeahead-window',
      exportAs: 'ngbTypeaheadWindow',
      standalone: true,
      imports: [NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '(mousedown)': '$event.preventDefault()',
        '[class]': '"dropdown-menu show" + (popupClass ? " " + popupClass : "")',
        role: 'listbox',
        '[id]': 'id'
      },
      template: `
		<ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
			<ngb-highlight [result]="formatter(result)" [term]="term"></ngb-highlight>
		</ng-template>
		<ng-template ngFor [ngForOf]="results" let-result let-idx="index">
			<button
				type="button"
				class="dropdown-item"
				role="option"
				[id]="id + '-' + idx"
				[class.active]="idx === activeIdx"
				(mouseenter)="markActive(idx)"
				(click)="select(result)"
			>
				<ng-template
					[ngTemplateOutlet]="resultTemplate || rt"
					[ngTemplateOutletContext]="{ result: result, term: term, formatter: formatter }"
				></ng-template>
			</button>
		</ng-template>
	`
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    results: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popupClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['select']
    }],
    activeChangeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['activeChange']
    }]
  });
})();

/**
 * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
class NgbTypeaheadConfig {
  constructor() {
    this.editable = true;
    this.focusFirst = true;
    this.showHint = false;
    this.placement = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
    this.popperOptions = options => options;
  }
}
NgbTypeaheadConfig.ɵfac = function NgbTypeaheadConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTypeaheadConfig)();
};
NgbTypeaheadConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTypeaheadConfig,
  factory: NgbTypeaheadConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeaheadConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('live announcer delay', {
  providedIn: 'root',
  factory: ARIA_LIVE_DELAY_FACTORY
});
function ARIA_LIVE_DELAY_FACTORY() {
  return 100;
}
function getLiveElement(document, lazyCreate = false) {
  let element = document.body.querySelector('#ngb-live');
  if (element == null && lazyCreate) {
    element = document.createElement('div');
    element.setAttribute('id', 'ngb-live');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    element.classList.add('visually-hidden');
    document.body.appendChild(element);
  }
  return element;
}
class Live {
  constructor(_document, _delay) {
    this._document = _document;
    this._delay = _delay;
  }
  ngOnDestroy() {
    const element = getLiveElement(this._document);
    if (element) {
      // if exists, it will always be attached to the <body>
      element.parentElement.removeChild(element);
    }
  }
  say(message) {
    const element = getLiveElement(this._document, true);
    const delay = this._delay;
    if (element != null) {
      element.textContent = '';
      const setText = () => element.textContent = message;
      if (delay === null) {
        setText();
      } else {
        setTimeout(setText, delay);
      }
    }
  }
}
Live.ɵfac = function Live_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Live)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ARIA_LIVE_DELAY));
};
Live.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Live,
  factory: Live.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Live, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [ARIA_LIVE_DELAY]
      }]
    }];
  }, null);
})();
let nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */
class NgbTypeahead {
  constructor(_elementRef, viewContainerRef, _renderer, injector, config, ngZone, _live, _document, _ngZone, _changeDetector, applicationRef) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._live = _live;
    this._document = _document;
    this._ngZone = _ngZone;
    this._changeDetector = _changeDetector;
    this._subscription = null;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._inputValueBackup = null;
    this._windowRef = null;
    /**
     * The value for the `autocomplete` attribute for the `<input>` element.
     *
     * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
     *
     * @since 2.1.0
     */
    this.autocomplete = 'off';
    /**
     * The preferred placement of the typeahead, among the [possible values](#/guides/positioning#api).
     *
     * The default order of preference is `"bottom-start bottom-end top-start top-end"`
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    this.placement = 'bottom-start';
    /**
     * An event emitted right before an item is selected from the result list.
     *
     * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
     */
    this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeDescendant = null;
    this.popupId = `ngb-typeahead-${nextWindowId++}`;
    this._onTouched = () => {};
    this._onChange = _ => {};
    this.container = config.container;
    this.editable = config.editable;
    this.focusFirst = config.focusFirst;
    this.showHint = config.showHint;
    this.placement = config.placement;
    this.popperOptions = config.popperOptions;
    this._valueChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(_elementRef.nativeElement, 'input').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)($event => $event.target.value));
    this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(null);
    this._popupService = new PopupService(NgbTypeaheadWindow, injector, viewContainerRef, _renderer, this._ngZone, applicationRef);
    this._positioning = ngbPositioning();
  }
  ngOnInit() {
    this._subscribeToUserInput();
  }
  ngOnChanges({
    ngbTypeahead
  }) {
    if (ngbTypeahead && !ngbTypeahead.firstChange) {
      this._unsubscribeFromUserInput();
      this._subscribeToUserInput();
    }
  }
  ngOnDestroy() {
    this._closePopup();
    this._unsubscribeFromUserInput();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  writeValue(value) {
    this._writeInputValue(this._formatItemForInput(value));
    if (this.showHint) {
      this._inputValueBackup = value;
    }
  }
  setDisabledState(isDisabled) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }
  /**
   * Dismisses typeahead popup window
   */
  dismissPopup() {
    if (this.isPopupOpen()) {
      this._resubscribeTypeahead.next(null);
      this._closePopup();
      if (this.showHint && this._inputValueBackup !== null) {
        this._writeInputValue(this._inputValueBackup);
      }
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Returns true if the typeahead popup window is displayed
   */
  isPopupOpen() {
    return this._windowRef != null;
  }
  handleBlur() {
    this._resubscribeTypeahead.next(null);
    this._onTouched();
  }
  handleKeyDown(event) {
    if (!this.isPopupOpen()) {
      return;
    }
    /* eslint-disable-next-line deprecation/deprecation */
    switch (event.which) {
      case Key.ArrowDown:
        event.preventDefault();
        this._windowRef.instance.next();
        this._showHint();
        break;
      case Key.ArrowUp:
        event.preventDefault();
        this._windowRef.instance.prev();
        this._showHint();
        break;
      case Key.Enter:
      case Key.Tab:
        {
          const result = this._windowRef.instance.getActive();
          if (isDefined(result)) {
            event.preventDefault();
            event.stopPropagation();
            this._selectResult(result);
          }
          this._closePopup();
          break;
        }
    }
  }
  _openPopup() {
    if (!this.isPopupOpen()) {
      this._inputValueBackup = this._elementRef.nativeElement.value;
      const {
        windowRef
      } = this._popupService.open();
      this._windowRef = windowRef;
      this._windowRef.setInput('id', this.popupId);
      this._windowRef.setInput('popupClass', this.popupClass);
      this._windowRef.instance.selectEvent.subscribe(result => this._selectResultClosePopup(result));
      this._windowRef.instance.activeChangeEvent.subscribe(activeId => this.activeDescendant = activeId);
      if (this.container === 'body') {
        this._renderer.setStyle(this._windowRef.location.nativeElement, 'z-index', '1055');
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      }
      this._changeDetector.markForCheck();
      // Setting up popper and scheduling updates when zone is stable
      this._ngZone.runOutsideAngular(() => {
        if (this._windowRef) {
          this._positioning.createPopper({
            hostElement: this._elementRef.nativeElement,
            targetElement: this._windowRef.location.nativeElement,
            placement: this.placement,
            appendToBody: this.container === 'body',
            updatePopperOptions: options => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._zoneSubscription = this._ngZone.onStable.subscribe(() => this._positioning.update());
        }
      });
      ngbAutoClose(this._ngZone, this._document, 'outside', () => this.dismissPopup(), this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
    }
  }
  _closePopup() {
    this._popupService.close().subscribe(() => {
      this._positioning.destroy();
      this._zoneSubscription?.unsubscribe();
      this._closed$.next();
      this._windowRef = null;
      this.activeDescendant = null;
    });
  }
  _selectResult(result) {
    let defaultPrevented = false;
    this.selectItem.emit({
      item: result,
      preventDefault: () => {
        defaultPrevented = true;
      }
    });
    this._resubscribeTypeahead.next(null);
    if (!defaultPrevented) {
      this.writeValue(result);
      this._onChange(result);
    }
  }
  _selectResultClosePopup(result) {
    this._selectResult(result);
    this._closePopup();
  }
  _showHint() {
    if (this.showHint && this._windowRef?.instance.hasActive() && this._inputValueBackup != null) {
      const userInputLowerCase = this._inputValueBackup.toLowerCase();
      const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
      if (userInputLowerCase === formattedVal.substring(0, this._inputValueBackup.length).toLowerCase()) {
        this._writeInputValue(this._inputValueBackup + formattedVal.substring(this._inputValueBackup.length));
        this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
      } else {
        this._writeInputValue(formattedVal);
      }
    }
  }
  _formatItemForInput(item) {
    return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
  }
  _writeInputValue(value) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
  }
  _subscribeToUserInput() {
    const results$ = this._valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(value => {
      this._inputValueBackup = this.showHint ? value : null;
      this._onChange(this.editable ? value : undefined);
    }), this.ngbTypeahead ? this.ngbTypeahead : () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]));
    this._subscription = this._resubscribeTypeahead.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => results$)).subscribe(results => {
      if (!results || results.length === 0) {
        this._closePopup();
      } else {
        this._openPopup();
        this._windowRef.instance.focusFirst = this.focusFirst;
        this._windowRef.instance.results = results;
        this._windowRef.instance.term = this._elementRef.nativeElement.value;
        if (this.resultFormatter) {
          this._windowRef.instance.formatter = this.resultFormatter;
        }
        if (this.resultTemplate) {
          this._windowRef.instance.resultTemplate = this.resultTemplate;
        }
        this._windowRef.instance.resetActive();
        // The observable stream we are subscribing to might have async steps
        // and if a component containing typeahead is using the OnPush strategy
        // the change detection turn wouldn't be invoked automatically.
        this._windowRef.changeDetectorRef.detectChanges();
        this._showHint();
      }
      // live announcer
      const count = results ? results.length : 0;
      this._live.say(count === 0 ? 'No results available' : `${count} result${count === 1 ? '' : 's'} available`);
    });
  }
  _unsubscribeFromUserInput() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._subscription = null;
  }
}
NgbTypeahead.ɵfac = function NgbTypeahead_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTypeahead)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTypeaheadConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Live), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};
NgbTypeahead.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbTypeahead,
  selectors: [["input", "ngbTypeahead", ""]],
  hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox"],
  hostVars: 7,
  hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgbTypeahead_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isPopupOpen());
    }
  },
  inputs: {
    autocomplete: "autocomplete",
    container: "container",
    editable: "editable",
    focusFirst: "focusFirst",
    inputFormatter: "inputFormatter",
    ngbTypeahead: "ngbTypeahead",
    resultFormatter: "resultFormatter",
    resultTemplate: "resultTemplate",
    showHint: "showHint",
    placement: "placement",
    popperOptions: "popperOptions",
    popupClass: "popupClass"
  },
  outputs: {
    selectItem: "selectItem"
  },
  exportAs: ["ngbTypeahead"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTypeahead),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeahead, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[ngbTypeahead]',
      exportAs: 'ngbTypeahead',
      standalone: true,
      host: {
        '(blur)': 'handleBlur()',
        '[class.open]': 'isPopupOpen()',
        '(keydown)': 'handleKeyDown($event)',
        '[autocomplete]': 'autocomplete',
        autocapitalize: 'off',
        autocorrect: 'off',
        role: 'combobox',
        '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
        '[attr.aria-activedescendant]': 'activeDescendant',
        '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
        '[attr.aria-expanded]': 'isPopupOpen()'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTypeahead),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: NgbTypeaheadConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Live
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ngbTypeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resultFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popperOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popupClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgbTypeaheadModule {}
NgbTypeaheadModule.ɵfac = function NgbTypeaheadModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbTypeaheadModule)();
};
NgbTypeaheadModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbTypeaheadModule
});
NgbTypeaheadModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgbHighlight]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeaheadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgbHighlight, NgbTypeahead],
      exports: [NgbHighlight, NgbTypeahead]
    }]
  }], null, null);
})();

/**
 * A reference to the currently opened (active) offcanvas.
 *
 * Instances of this class can be injected into your component passed as offcanvas content.
 * So you can `.close()` or `.dismiss()` the offcanvas window from your component.
 *
 * @since 12.1.0
 */
class NgbActiveOffcanvas {
  /**
   * Closes the offcanvas with an optional `result` value.
   *
   * The `NgbOffcanvasRef.result` promise will be resolved with the provided value.
   */
  close(result) {}
  /**
   * Dismisses the offcanvas with an optional `reason` value.
   *
   * The `NgbOffcanvasRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {}
}
/**
 * A reference to the newly opened offcanvas returned by the `NgbOffcanvas.open()` method.
 *
 * @since 12.1.0
 */
class NgbOffcanvasRef {
  constructor(_panelCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._panelCmptRef = _panelCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._dismissed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._hidden = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    _panelCmptRef.instance.dismissEvent.subscribe(reason => {
      this.dismiss(reason);
    });
    if (_backdropCmptRef) {
      _backdropCmptRef.instance.dismissEvent.subscribe(reason => {
        this.dismiss(reason);
      });
    }
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {});
  }
  /**
   * The instance of a component used for the offcanvas content.
   *
   * When a `TemplateRef` is used as the content or when the offcanvas is closed, will return `undefined`.
   */
  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the offcanvas is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   */
  get closed() {
    return this._closed.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._hidden));
  }
  /**
   * The observable that emits when the offcanvas is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   */
  get dismissed() {
    return this._dismissed.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._hidden));
  }
  /**
   * The observable that emits when both offcanvas window and backdrop are closed and animations were finished.
   * At this point offcanvas and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   */
  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when offcanvas is fully visible and animation was finished.
   * The offcanvas DOM element is always available synchronously after calling 'offcanvas.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if offcanvas is closed before open animation is finished.
   */
  get shown() {
    return this._panelCmptRef.instance.shown.asObservable();
  }
  /**
   * Closes the offcanvas with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
    if (this._panelCmptRef) {
      this._closed.next(result);
      this._resolve(result);
      this._removeOffcanvasElements();
    }
  }
  _dismiss(reason) {
    this._dismissed.next(reason);
    this._reject(reason);
    this._removeOffcanvasElements();
  }
  /**
   * Dismisses the offcanvas with an optional `reason` value.
   *
   * The `NgbOffcanvasRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
    if (this._panelCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();
        if (isPromise(dismiss)) {
          dismiss.then(result => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {});
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }
  _removeOffcanvasElements() {
    const panelTransition$ = this._panelCmptRef.instance.hide();
    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    // hiding panel
    panelTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._panelCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);
      this._panelCmptRef.destroy();
      if (this._contentRef && this._contentRef.viewRef) {
        this._contentRef.viewRef.destroy();
      }
      this._panelCmptRef = null;
      this._contentRef = null;
    });
    // hiding backdrop
    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);
        this._backdropCmptRef.destroy();
        this._backdropCmptRef = null;
      }
    });
    // all done
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.zip)(panelTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();
      this._hidden.complete();
    });
  }
}
var OffcanvasDismissReasons;
(function (OffcanvasDismissReasons) {
  OffcanvasDismissReasons[OffcanvasDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  OffcanvasDismissReasons[OffcanvasDismissReasons["ESC"] = 1] = "ESC";
})(OffcanvasDismissReasons || (OffcanvasDismissReasons = {}));
class NgbOffcanvasBackdrop {
  constructor(_el, _zone) {
    this._el = _el;
    this._zone = _zone;
    this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      ngbRunTransition(this._zone, this._el.nativeElement, (element, animation) => {
        if (animation) {
          reflow(element);
        }
        element.classList.add('show');
      }, {
        animation: this.animation,
        runningTransition: 'continue'
      });
    });
  }
  hide() {
    return ngbRunTransition(this._zone, this._el.nativeElement, ({
      classList
    }) => classList.remove('show'), {
      animation: this.animation,
      runningTransition: 'stop'
    });
  }
  dismiss() {
    if (!this.static) {
      this.dismissEvent.emit(OffcanvasDismissReasons.BACKDROP_CLICK);
    }
  }
}
NgbOffcanvasBackdrop.ɵfac = function NgbOffcanvasBackdrop_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbOffcanvasBackdrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbOffcanvasBackdrop.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbOffcanvasBackdrop,
  selectors: [["ngb-offcanvas-backdrop"]],
  hostVars: 6,
  hostBindings: function NgbOffcanvasBackdrop_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgbOffcanvasBackdrop_mousedown_HostBindingHandler() {
        return ctx.dismiss();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("offcanvas-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.animation)("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    backdropClass: "backdropClass",
    static: "static"
  },
  outputs: {
    dismissEvent: "dismiss"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 0,
  vars: 0,
  template: function NgbOffcanvasBackdrop_Template(rf, ctx) {},
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbOffcanvasBackdrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-offcanvas-backdrop',
      standalone: true,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: '',
      host: {
        '[class]': '"offcanvas-backdrop" + (backdropClass ? " " + backdropClass : "")',
        '[class.show]': '!animation',
        '[class.fade]': 'animation',
        '(mousedown)': 'dismiss()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    static: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dismiss']
    }]
  });
})();
class NgbOffcanvasPanel {
  constructor(_document, _elRef, _zone) {
    this._document = _document;
    this._elRef = _elRef;
    this._zone = _zone;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._elWithFocus = null; // element that is focused prior to offcanvas opening
    this.keyboard = true;
    this.position = 'start';
    this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.shown = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.hidden = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }
  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._show();
    });
  }
  ngOnDestroy() {
    this._disableEventHandling();
  }
  hide() {
    const {
      nativeElement
    } = this._elRef;
    const context = {
      animation: this.animation,
      runningTransition: 'stop'
    };
    const offcanvasTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, element => {
      nativeElement.classList.remove('showing');
      nativeElement.classList.add('hiding');
      return () => nativeElement.classList.remove('show', 'hiding');
    }, context);
    offcanvasTransition$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });
    this._disableEventHandling();
    this._restoreFocus();
    return offcanvasTransition$;
  }
  _show() {
    const context = {
      animation: this.animation,
      runningTransition: 'continue'
    };
    const offcanvasTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add('show', 'showing');
      return () => element.classList.remove('showing');
    }, context);
    offcanvasTransition$.subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });
    this._enableEventHandling();
    this._setFocus();
  }
  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$), /* eslint-disable-next-line deprecation/deprecation */
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Escape)).subscribe(event => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(OffcanvasDismissReasons.ESC));
            }
          });
        }
      });
    });
  }
  _disableEventHandling() {
    this._closed$.next();
  }
  _setFocus() {
    const {
      nativeElement
    } = this._elRef;
    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }
  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;
    if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }
}
NgbOffcanvasPanel.ɵfac = function NgbOffcanvasPanel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbOffcanvasPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbOffcanvasPanel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbOffcanvasPanel,
  selectors: [["ngb-offcanvas-panel"]],
  hostAttrs: ["role", "dialog", "tabindex", "-1"],
  hostVars: 5,
  hostBindings: function NgbOffcanvasPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("offcanvas offcanvas-" + ctx.position + (ctx.panelClass ? " " + ctx.panelClass : ""));
    }
  },
  inputs: {
    animation: "animation",
    ariaLabelledBy: "ariaLabelledBy",
    ariaDescribedBy: "ariaDescribedBy",
    keyboard: "keyboard",
    panelClass: "panelClass",
    position: "position"
  },
  outputs: {
    dismissEvent: "dismiss"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function NgbOffcanvasPanel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbOffcanvasPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-offcanvas-panel',
      standalone: true,
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '[class]': '"offcanvas offcanvas-" + position  + (panelClass ? " " + panelClass : "")',
        role: 'dialog',
        tabindex: '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'ariaLabelledBy',
        '[attr.aria-describedby]': 'ariaDescribedBy'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dismiss']
    }]
  });
})();
class NgbOffcanvasStack {
  constructor(_applicationRef, _injector, _document, _scrollBar, _ngZone) {
    this._applicationRef = _applicationRef;
    this._injector = _injector;
    this._document = _document;
    this._scrollBar = _scrollBar;
    this._ngZone = _ngZone;
    this._activePanelCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._scrollBarRestoreFn = null;
    this._backdropAttributes = ['animation', 'backdropClass'];
    this._panelAttributes = ['animation', 'ariaDescribedBy', 'ariaLabelledBy', 'keyboard', 'panelClass', 'position'];
    this._activeInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // Trap focus on active PanelCmpt
    this._activePanelCmptHasChanged.subscribe(() => {
      if (this._panelCmpt) {
        ngbFocusTrap(this._ngZone, this._panelCmpt.location.nativeElement, this._activePanelCmptHasChanged);
      }
    });
  }
  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;
    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }
  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }
  open(contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    if (!containerEl) {
      throw new Error(`The specified offcanvas container "${options.container || 'body'}" was not found in the DOM.`);
    }
    if (!options.scroll) {
      this._hideScrollBar();
    }
    const activeOffcanvas = new NgbActiveOffcanvas();
    const contentRef = this._getContentRef(options.injector || contentInjector, content, activeOffcanvas);
    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : undefined;
    let panelCmptRef = this._attachWindowComponent(containerEl, contentRef.nodes);
    let ngbOffcanvasRef = new NgbOffcanvasRef(panelCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
    this._registerOffcanvasRef(ngbOffcanvasRef);
    this._registerPanelCmpt(panelCmptRef);
    ngbOffcanvasRef.hidden.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.finalize)(() => this._restoreScrollBar())).subscribe();
    activeOffcanvas.close = result => {
      ngbOffcanvasRef.close(result);
    };
    activeOffcanvas.dismiss = reason => {
      ngbOffcanvasRef.dismiss(reason);
    };
    this._applyPanelOptions(panelCmptRef.instance, options);
    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
      backdropCmptRef.changeDetectorRef.detectChanges();
    }
    panelCmptRef.changeDetectorRef.detectChanges();
    return ngbOffcanvasRef;
  }
  get activeInstance() {
    return this._activeInstance;
  }
  dismiss(reason) {
    this._offcanvasRef?.dismiss(reason);
  }
  hasOpenOffcanvas() {
    return !!this._offcanvasRef;
  }
  _attachBackdrop(containerEl) {
    let backdropCmptRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(NgbOffcanvasBackdrop, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector
    });
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }
  _attachWindowComponent(containerEl, projectableNodes) {
    let panelCmptRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(NgbOffcanvasPanel, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector,
      projectableNodes
    });
    this._applicationRef.attachView(panelCmptRef.hostView);
    containerEl.appendChild(panelCmptRef.location.nativeElement);
    return panelCmptRef;
  }
  _applyPanelOptions(windowInstance, options) {
    this._panelAttributes.forEach(optionName => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }
  _applyBackdropOptions(backdropInstance, options) {
    this._backdropAttributes.forEach(optionName => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
    backdropInstance.static = options.backdrop === 'static';
  }
  _getContentRef(contentInjector, content, activeOffcanvas) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      return this._createFromTemplateRef(content, activeOffcanvas);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, content, activeOffcanvas);
    }
  }
  _createFromTemplateRef(templateRef, activeOffcanvas) {
    const context = {
      $implicit: activeOffcanvas,
      close(result) {
        activeOffcanvas.close(result);
      },
      dismiss(reason) {
        activeOffcanvas.dismiss(reason);
      }
    };
    const viewRef = templateRef.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }
  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }
  _createFromComponent(contentInjector, componentType, context) {
    const elementInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      providers: [{
        provide: NgbActiveOffcanvas,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(componentType, {
      environmentInjector: this._applicationRef.injector,
      elementInjector
    });
    const componentNativeEl = componentRef.location.nativeElement;
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }
  _registerOffcanvasRef(ngbOffcanvasRef) {
    const unregisterOffcanvasRef = () => {
      this._offcanvasRef = undefined;
      this._activeInstance.emit(this._offcanvasRef);
    };
    this._offcanvasRef = ngbOffcanvasRef;
    this._activeInstance.emit(this._offcanvasRef);
    ngbOffcanvasRef.result.then(unregisterOffcanvasRef, unregisterOffcanvasRef);
  }
  _registerPanelCmpt(ngbPanelCmpt) {
    this._panelCmpt = ngbPanelCmpt;
    this._activePanelCmptHasChanged.next();
    ngbPanelCmpt.onDestroy(() => {
      this._panelCmpt = undefined;
      this._activePanelCmptHasChanged.next();
    });
  }
}
NgbOffcanvasStack.ɵfac = function NgbOffcanvasStack_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbOffcanvasStack)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScrollBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
NgbOffcanvasStack.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbOffcanvasStack,
  factory: NgbOffcanvasStack.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbOffcanvasStack, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: ScrollBar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

/**
 * A configuration service for the [`NgbOffcanvas`](#/components/offcanvas/api#NgbOffcanvas) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all offcanvases used in the application.
 *
 * @since 12.1.0
 */
class NgbOffcanvasConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.backdrop = true;
    this.keyboard = true;
    this.position = 'start';
    this.scroll = false;
  }
  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
}
NgbOffcanvasConfig.ɵfac = function NgbOffcanvasConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbOffcanvasConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};
NgbOffcanvasConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbOffcanvasConfig,
  factory: NgbOffcanvasConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbOffcanvasConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

/**
 * A service for opening an offcanvas.
 *
 * Creating an offcanvas is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 *
 * @since 12.1.0
 */
class NgbOffcanvas {
  constructor(_injector, _offcanvasStack, _config) {
    this._injector = _injector;
    this._offcanvasStack = _offcanvasStack;
    this._config = _config;
  }
  /**
   * Opens a new offcanvas panel with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveOffcanvas` class. You can then
   * use `NgbActiveOffcanvas` methods to close / dismiss offcanvas from "inside" of your component.
   *
   * Also see the [`NgbOffcanvasOptions`](#/components/offcanvas/api#NgbOffcanvasOptions) for the list of supported
   * options.
   */
  open(content, options = {}) {
    const combinedOptions = {
      ...this._config,
      animation: this._config.animation,
      ...options
    };
    return this._offcanvasStack.open(this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active offcanvas instance.
   */
  get activeInstance() {
    return this._offcanvasStack.activeInstance;
  }
  /**
   * Dismisses the currently displayed offcanvas with the supplied reason.
   */
  dismiss(reason) {
    this._offcanvasStack.dismiss(reason);
  }
  /**
   * Indicates if there is currently an open offcanvas in the application.
   */
  hasOpenOffcanvas() {
    return this._offcanvasStack.hasOpenOffcanvas();
  }
}
NgbOffcanvas.ɵfac = function NgbOffcanvas_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbOffcanvas)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbOffcanvasStack), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbOffcanvasConfig));
};
NgbOffcanvas.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbOffcanvas,
  factory: NgbOffcanvas.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbOffcanvas, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: NgbOffcanvasStack
    }, {
      type: NgbOffcanvasConfig
    }];
  }, null);
})();
class NgbOffcanvasModule {}
NgbOffcanvasModule.ɵfac = function NgbOffcanvasModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbOffcanvasModule)();
};
NgbOffcanvasModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbOffcanvasModule
});
NgbOffcanvasModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbOffcanvasModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], null, null);
})();
const NGB_MODULES = [NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule];
class NgbModule {}
NgbModule.ɵfac = function NgbModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgbModule)();
};
NgbModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbModule
});
NgbModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NGB_MODULES, NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: NGB_MODULES,
      exports: NGB_MODULES
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_usecases_helpers_helpers_module_ts.e6e82056d3dbbd4c.js.map