"use strict";
(self["webpackChunkbase_test"] = self["webpackChunkbase_test"] || []).push([["src_app_usecases_core_core_module_ts"],{

/***/ 27524:
/*!**********************************************!*\
  !*** ./src/app/usecases/core/core.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestCoreModule: () => (/* binding */ TestCoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.routing */ 84480);
/* harmony import */ var _views_CoreView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/CoreView */ 88498);
/* harmony import */ var _model_CoreUsecaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/CoreUsecaseModel */ 87922);
/* harmony import */ var _app_shared_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.shared.modules */ 18953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);







class TestCoreModule {
  static {
    this.ɵfac = function TestCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TestCoreModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: TestCoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_model_CoreUsecaseModel__WEBPACK_IMPORTED_MODULE_2__.CoreUsecaseModel],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _core_routing__WEBPACK_IMPORTED_MODULE_0__.LocalRouting, _app_shared_modules__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TestCoreModule, {
    declarations: [
    // views
    _views_CoreView__WEBPACK_IMPORTED_MODULE_1__.CoreView],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _app_shared_modules__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 84480:
/*!***********************************************!*\
  !*** ./src/app/usecases/core/core.routing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRouting: () => (/* binding */ LocalRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _views_CoreView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/CoreView */ 88498);


const routes = [{
  path: '',
  component: _views_CoreView__WEBPACK_IMPORTED_MODULE_0__.CoreView
}];
const LocalRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes);

/***/ }),

/***/ 32552:
/*!******************************************************!*\
  !*** ./src/app/usecases/core/entities/TestEntity.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestEntity: () => (/* binding */ TestEntity)
/* harmony export */ });
class TestEntity {
  getClassName() {
    return "TestEntity";
  }
  postProcess() {}
}

/***/ }),

/***/ 82634:
/*!**********************************************************************!*\
  !*** ./src/app/usecases/core/entities/TestEntityCustomAnnotation.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestEntityCustomAnnotation: () => (/* binding */ TestEntityCustomAnnotation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _CustomAnnotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomAnnotation */ 43973);


class TestEntityCustomAnnotation {
  constructor() {
    this.name = null;
  }
  getClassName() {
    return "TestEntityCustomAnnotation";
  }
  postProcess() {}
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_CustomAnnotation__WEBPACK_IMPORTED_MODULE_0__.CustomAnnotation)()], TestEntityCustomAnnotation.prototype, "name", void 0);

/***/ }),

/***/ 87922:
/*!*********************************************************!*\
  !*** ./src/app/usecases/core/model/CoreUsecaseModel.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreUsecaseModel: () => (/* binding */ CoreUsecaseModel)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class CoreUsecaseModel extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_0__.BaseUsecaseModel {
  destroy() {}
  handleInitializionError(err) {
    console.error(err);
  }
  hookObservables() {}
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCoreUsecaseModel_BaseFactory;
      return function CoreUsecaseModel_Factory(__ngFactoryType__) {
        return (ɵCoreUsecaseModel_BaseFactory || (ɵCoreUsecaseModel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CoreUsecaseModel)))(__ngFactoryType__ || CoreUsecaseModel);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CoreUsecaseModel,
      factory: CoreUsecaseModel.ɵfac
    });
  }
}

/***/ }),

/***/ 88498:
/*!*************************************************!*\
  !*** ./src/app/usecases/core/views/CoreView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreView: () => (/* binding */ CoreView)
/* harmony export */ });
/* harmony import */ var _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @six-group/base-angular-framework/core */ 59665);
/* harmony import */ var _entities_TestEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/TestEntity */ 32552);
/* harmony import */ var _entities_TestEntityCustomAnnotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/TestEntityCustomAnnotation */ 82634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






function CoreView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ERROR - SETTING SERVICE Class 'SettingService' was not injected.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function CoreView_ng_container_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "- You should see what you have injected with 'forRoot' here for the various settings: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx_r0.settingsService.frameworkSettings));
  }
}
function CoreView_ng_container_6_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "- You ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "injected no");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " properties in forRoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CoreView_ng_container_6_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-. A Class handler has been also been set.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CoreView_ng_container_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-. A Class handler has ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "not");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " been also been set.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CoreView_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreView_ng_container_6_li_1_Template, 5, 3, "li", 0)(2, CoreView_ng_container_6_li_2_Template, 5, 0, "li", 0)(3, CoreView_ng_container_6_li_3_Template, 2, 0, "li", 0)(4, CoreView_ng_container_6_li_4_Template, 5, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.settingsService.frameworkSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.settingsService.frameworkSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.settingsService.classHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.settingsService.classHandler);
  }
}
function CoreView_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Test Entity Exists, that means BaseEntity implementation works");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CoreView_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Test Entity does NOT Exist! That means BaseEntity implementation does not work");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CoreView_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Test Entity With Custom Annotation Exists, that means the annotation framework works. Value of \"name\" is: ", ctx_r0.testEntityWithAnnotation.name, "");
  }
}
function CoreView_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Test Entity With Custom Annotation does NOT Exist!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class CoreView extends _six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_3__.BaseView {
  constructor(cd, entityMapper) {
    super();
    this.cd = cd;
    this.entityMapper = entityMapper;
    this.testEntity = null;
    this.testEntityWithAnnotation = null;
  }
  getEventGrid(id) {}
  hookObservables() {}
  ngOnInit() {
    super.ngOnInit();
    this.testEntity = new _entities_TestEntity__WEBPACK_IMPORTED_MODULE_0__.TestEntity();
    this.testEntityWithAnnotation = new _entities_TestEntityCustomAnnotation__WEBPACK_IMPORTED_MODULE_1__.TestEntityCustomAnnotation();
    this.entityMapper.mapEntityTreeFrom({}, this.testEntityWithAnnotation, _entities_TestEntityCustomAnnotation__WEBPACK_IMPORTED_MODULE_1__.TestEntityCustomAnnotation, true);
    this.cd.markForCheck();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function CoreView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CoreView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_six_group_base_angular_framework_core__WEBPACK_IMPORTED_MODULE_3__.EntityMapper));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CoreView,
      selectors: [["CoreView"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 6,
      consts: [[4, "ngIf"]],
      template: function CoreView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Core features - Test.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul")(3, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "-. If you see this at all, that means the BaseView implementation works (or this page would not load). It also means the BaseUsecaseModel implementation is working.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CoreView_ng_container_5_Template, 3, 0, "ng-container", 0)(6, CoreView_ng_container_6_Template, 5, 4, "ng-container", 0)(7, CoreView_li_7_Template, 2, 0, "li", 0)(8, CoreView_li_8_Template, 2, 0, "li", 0)(9, CoreView_li_9_Template, 2, 1, "li", 0)(10, CoreView_li_10_Template, 2, 0, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.settingsService);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settingsService);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.testEntity);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.testEntity);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.testEntityWithAnnotation);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.testEntity);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_usecases_core_core_module_ts.a624788d9dc56519.js.map