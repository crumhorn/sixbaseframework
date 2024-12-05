"use strict";(self.webpackChunkbase_test=self.webpackChunkbase_test||[]).push([[994],{7994:(C,h,r)=>{r.r(h),r.d(h,{BaseClassesModule:()=>G});var l=r(177),m=r(483),o=r(8550),e=r(4438),n=r(6377);let p=(()=>{class t extends o.PJ{constructor(s){super(),this.cd=s}getEventGrid(s){}hookObservables(){}ngOnInit(){super.ngOnInit(),this.cd.markForCheck()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.\u0275fac=function(i){return new(i||t)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["BaseControlView"]],features:[e.Jv_([]),e.Vt3],decls:14,vars:1,consts:[[1,"documentParent"],[1,"document"],[1,"description"],["language","ts",3,"highlight"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3,"BaseControl"),e.k0s(),e.j41(4,"p",2),e.EFF(5,"This abstract class is the core of all base controls that make up the next sections in the menu. It's something you can extend if you wish to further your own implementation of some control that has all the various hooks and utilities that the other base classes have."),e.k0s(),e.j41(6,"p",2),e.EFF(7,"This class is small, and mostly has utility methods for tracking subscription listeners that will be auto-disposed when the control is destroyed."),e.k0s(),e.j41(8,"p",2),e.EFF(9,"Usage:"),e.k0s(),e.j41(10,"pre"),e.nrm(11,"code",3),e.k0s(),e.j41(12,"p",2),e.EFF(13,"As it is unlikely you will be using this class, please continue to the next sections."),e.k0s()()()),2&i&&(e.R7$(11),e.Y8G("highlight","super.trackSubscription(something.subscribe((data) => { }));"))},dependencies:[n.f4],encapsulation:2,changeDetection:0})}}return t})(),u=(()=>{class t extends o.PJ{constructor(s){super(),this.cd=s}getEventGrid(s){}hookObservables(){}ngOnInit(){super.ngOnInit(),this.cd.markForCheck()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.\u0275fac=function(i){return new(i||t)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["BaseViewView"]],features:[e.Jv_([]),e.Vt3],decls:15,vars:1,consts:[[1,"documentParent"],[1,"document"],[1,"description"],["language","ts",3,"highlight"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3,"BaseView"),e.k0s(),e.j41(4,"p",2),e.EFF(5,'A "view" is considered to be one page. It comes from standard MVC. Model, View, Controller (or ViewController). The View is the parent of all other controls on the page, and thus this abstract base class deals with features related to that.'),e.k0s(),e.j41(6,"p",2),e.EFF(7,"As a view can be very different, the number of features of this base class is rather small. It mostly hooks into the "),e.j41(8,"i"),e.EFF(9,"Split Layout Control"),e.k0s(),e.EFF(10," to allow maximizing and minimizing of the entire view across the browser window. It also has an available override to listen to keyboard presses of F3 and Ctrl+F."),e.k0s(),e.j41(11,"p",2),e.EFF(12,"Here's a barebones implementation:"),e.k0s(),e.j41(13,"pre"),e.nrm(14,"code",3),e.k0s()()()),2&i&&(e.R7$(14),e.Y8G("highlight","export class MyView extends BaseView {"))},dependencies:[n.f4],encapsulation:2,changeDetection:0})}}return t})(),g=(()=>{class t extends o.PJ{constructor(s){super(),this.cd=s,this.baseUsageCode="@Injectable()\nexport class SampleUsecaseModel extends BaseUsecaseModel {\n\n  // we inject the ErrorHelper to show errors\n  constructor(private errorHelper: ErrorHelper) {\n    super();\n  }\n\n  destroy(): void {\n  }\n\n  // should show a message to the user that something went wrong\n  handleInitializionError(err: any): void {\n    this.errorHelper.displayError(err);\n  }\n\n  // where we hook all our listeners to data etc\n  hookObservables(): void {\n  }\n}"}getEventGrid(s){}hookObservables(){}ngOnInit(){super.ngOnInit(),this.cd.markForCheck()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.\u0275fac=function(i){return new(i||t)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["BaseUsecaseModelView"]],features:[e.Jv_([]),e.Vt3],decls:27,vars:1,consts:[[1,"documentParent"],[1,"document"],[1,"description"],["language","ts",3,"highlight"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3,"BaseUsecaseModel"),e.k0s(),e.j41(4,"p",2),e.EFF(5,"A Usecase Model is considered to be the model in a classic MVC setup. It deals with sending data onward to the server, and receiving and loading data. It may also contain business logic and other such operations."),e.k0s(),e.j41(6,"p",2),e.EFF(7,"As such, a model can look very different between projects, and this class contains a few features such as collecting observables that should be destroyed upon the destruction of the model via "),e.j41(8,"i"),e.EFF(9,"trackSubscription"),e.k0s(),e.EFF(10," and "),e.j41(11,"i"),e.EFF(12,"destroySubscriptions"),e.k0s()(),e.j41(13,"p",2),e.EFF(14,"The main feature is that it forces you to override an empty method called "),e.j41(15,"i"),e.EFF(16,"hookObservables()"),e.k0s(),e.EFF(17,'. This is so that all your subscriptions are in one place, and as such tries to make you remember to "track" them via the previously mentioned methods.'),e.k0s(),e.j41(18,"p",2),e.EFF(19,"It also forces you to implement a "),e.j41(20,"i"),e.EFF(21,"handleInitilizationError"),e.k0s(),e.EFF(22," method that will be called on any issue when creating the model class."),e.k0s(),e.j41(23,"p",2),e.EFF(24,"Here's a barebones implementation:"),e.k0s(),e.j41(25,"pre"),e.nrm(26,"code",3),e.k0s()()()),2&i&&(e.R7$(26),e.Y8G("highlight",a.baseUsageCode))},dependencies:[n.f4],encapsulation:2,changeDetection:0})}}return t})();var c=r(6150),F=r(8245);function f(t,d){if(1&t&&(e.j41(0,"tr")(1,"td")(2,"span",10),e.EFF(3),e.j41(4,"a",11),e.nrm(5,"i",12),e.k0s()()(),e.j41(6,"td")(7,"span",13)(8,"pre"),e.nrm(9,"code",5),e.k0s()()(),e.j41(10,"td")(11,"span",14),e.EFF(12),e.k0s()(),e.nrm(13,"td")(14,"td")(15,"td"),e.k0s()),2&t){const s=d.$implicit;e.R7$(3),e.JRh(s.name),e.R7$(6),e.Y8G("highlight",s.example),e.R7$(3),e.JRh(s.description)}}let w=(()=>{class t extends o.PJ{constructor(s){super(),this.cd=s,this.tableData=[{name:"setApplicationDefaults",example:"super.setApplicationDefaults(this.grid)",description:"Sets all the default GridOptions flags and listeners that will save column state etc. This is generally done automatically, so you should not need it"},{name:"setApplicationDefaultsOntoGrid",example:"BaseGrid.setApplicationDefaultsOntoGrid(this.grid, this.gridSettings)",description:"Same as above but with a static call"},{name:"showLoading",example:"super.showLoading()",description:"Shows the 'Loading' blocker"},{name:"hideLoading",example:"super.hideLoading()",description:"Hides the 'Loading' blocker"},{name:"doNotDoColumnSavingAndRestoration",example:"override doNotDoColumnSavingAndRestoration() { return false; }",description:"Overrides whatever column saving is globally set on a local level"},{name:"doNotDoColumnFilterSavingAndRestoration",example:"override doNotDoColumnFilterSavingAndRestoration() { return false; }",description:"Overrides whatever column filter saving is globally set on a local level"},{name:"restoreColumnLayouts",example:"super.restoreColumnLayouts()",description:"Restores the column layouts, normally done automatically"},{name:"restoreColumnFilterState",example:"super.restoreColumnFilterState()",description:"Restores the column filters, normally done automatically"},{name:"saveColumnData",example:"super.saveColumnData()",description:"Forces a save of the column data state, is normally done on change automatically"},{name:"saveColumnFilterState",example:"super.saveColumnFilterState()",description:"Forces a save of the filter state, is normally done on change automatically"},{name:"saveSelection",example:"super.saveSelection('KEY', (obj) => { return obj.id; })",description:"Saves the selected state into memory"},{name:"restoreSelection",example:"super.restoreSelection('KEY', (obj) => { return obj.id; }, () => { console.log('done'))",description:"Restores the last saved selected state from memory"},{name:"rememberSelectionAndExpandState",example:"super.rememberSelectionAndExpandState()",description:"Remembers the selected state and expanded state of the grid (if that is being used)"},{name:"restoreSelectionAndExpandState",example:"super.restoreSelectionAndExpandState()",description:"Restores the selected state and expanded state of the grid"},{name:"doSmartDataUpdate",example:"super.doSmartDataUpdate(this.grid, data)",description:"Smartly updates the grid by sifting through the data and determining the most efficient way to update the grid with as little redraw as possible. Please see API for additional parameters."},{name:"inlineGridSearchOverride",example:"override inlineGridSearchOverride() { return true; }",description:"Overrides the inline search feature, saying you wish to do it yourself"},{name:"executeGridInlineSearch",example:"override executeGridInlineSearch(data) { ... }",description:"In conjunction with inlineGridSearchOverride, this should handle the search"}],this.basicGridSettingsCode='Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{\n      animateGridRows: true, // animate rows on changes\n      customGridSizing: true, // we control the row height\n      highlightSearchResultsText: true, // Use inline search\n      cssClassStringSearchMatchedCell: "stringSearchMatchedCell", // CSS Class for inline search results\n      displayDateFormat: DateUtils.MM_DD_YYYY, // set a custom date format\n      getGridRowHeight: () => {\n        try {\n          let rowHeight = 0;\n\n          if (this.themeManager.tightGrid) {\n            rowHeight = Globals.DEFAULT_TIGHT_GRID_ROW_HEIGHT; // height in px\n          } else {\n            rowHeight = Globals.DEFAULT_SPACED_GRID_ROW_HEIGHT;\n          }\n\n          return rowHeight;\n        } catch (err) {\n          console.error(err);\n        }\n        return Globals.DEFAULT_SPACED_GRID_ROW_HEIGHT;\n      }\n    };',this.basicGridHtmlCode='<InlineSearchableGrid>\n  <div style="width: 600px; height: 200px">\n    <ag-grid-angular #grid style="width: 100%; height: 100%;" [id]="getGridId()" class="ag-theme-alpine-dark"\n                     [gridOptions]="gridOptions"\n                     [modules]="modules"\n                     [columnDefs]="colDefs"\n                     (selectionChanged)="selectionChanged($event)"\n                     (cellClicked)="cellClicked($event)">\n    </ag-grid-angular>\n  </div>\n</InlineSearchableGrid>',this.basicGridCode='@Component({\n  selector: \'SampleGrid\',\n  templateUrl: \'./SampleGrid.html\',\n  providers: [],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SampleGrid extends BaseGrid implements OnInit, AfterViewInit {\n\n  // inject AgGrid\n  @ViewChild(\'grid\') grid!: AgGridAngular;\n\n  // AgGrid modules we intend to use (you can of course use the global setup for this)\n  public modules: any[] = [ClientSideRowModelModule, EnterpriseCoreModule, ClipboardModule, ColumnsToolPanelModule, ExcelExportModule, FiltersToolPanelModule, MenuModule, RangeSelectionModule, SetFilterModule, SideBarModule, StatusBarModule, MasterDetailModule, RichSelectModule];\n\n  constructor(private cd: ChangeDetectorRef) {\n    super();\n\n    // create the grid columns\n    this.createColumns();\n  }\n\n  public gridOptions: GridOptions = <GridOptions>{\n    rowSelection: {mode: \'singleRow\'},\n    getRowId: (data) => data.data.id,\n    onGridReady: () => this.initGrid()\n  }\n\n  public colDefs: any[] = [];\n\n  ngOnInit() {\n  }\n\n  // note the override, we need to call super.ngAfterViewInit()\n  override ngAfterViewInit() {\n    super.ngAfterViewInit();\n\n    this.cd.markForCheck();\n  }\n\n  initGrid() {\n    // sample data\n    this.grid?.api?.setGridOption(\'rowData\', [{id: "1", name: "Testing 123", date: new Date()}]);\n  }\n\n  createColumns() {\n    // in most cases the GridSettings would be fetched from a global definition for the entire application\n    let ch = new ColumnHelper(this.getGridName(), this.getGridSettings());\n\n    ch.addColumn("Name", "name", 200)\n      .addColumn("Date", "date", 200, ColumnHelper.DATE_FILTER);\n\n    ch.addCellRenderer("date", (params) => {\n      return DateUtils.convert(params.data.date, DateUtils.YYYY_MM_DD_HH_MM_SS);\n    });\n\n    this.colDefs = ch.getColumns();\n  }\n\n  doRefresh(): void {\n  }\n\n  // this has to be unique across the entire application as this key is used to store the column state\n  getGridName(): string {\n    return "agTestGrid";\n  }\n\n  hookObservables(): void {\n  }\n\n  nodeSelectedFromRightClick(node: any): void {\n  }\n\n  selectionChanged($event: any): void {\n  }\n\n  cellClicked($event: any): void {\n  }\n\n  // needs to return the AgGrid object\n  getGrid(): any {\n    return this.grid;\n  }\n\n  // base implementation where we say we want to use flatpickr for date pickers\n  getGridSettings(): GridSettings {\n    let ret = <GridSettings>{};\n    ret.useFlatPickrDatePicker = true;\n    return ret;\n  }\n}\n'}getEventGrid(s){}hookObservables(){}ngOnInit(){super.ngOnInit(),this.cd.markForCheck()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.\u0275fac=function(i){return new(i||t)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["BaseGridView"]],features:[e.Jv_([]),e.Vt3],decls:98,vars:5,consts:[[1,"documentParent"],[1,"document"],[1,"description",2,"color","red"],["href","http://www.ag-grid.com/","target","_new"],[1,"description"],["language","ts",3,"highlight"],["value","Typescript"],["value","HTML"],[1,"doc-table"],[4,"ngFor","ngForOf"],["id","api.menu.props.model",1,"doc-option-name"],[1,"doc-option-link"],[1,"pi","pi-link"],[1,"doc-option-type"],["id","api.menu.props.description",1,"doc-option-description"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3,"BaseGrid"),e.k0s(),e.j41(4,"p",2),e.EFF(5,"NOTE: This feature requires usage of the "),e.j41(6,"i"),e.EFF(7,"AgGrid"),e.k0s(),e.EFF(8," part of the Base Framework that in turn requires "),e.j41(9,"a",3),e.EFF(10,"AgGrid"),e.k0s(),e.EFF(11,"."),e.k0s(),e.j41(12,"p",4),e.EFF(13,"BaseGrid is an abstract class that is intended to be the parent of any class that represents one Angular AgGrid implementation."),e.k0s(),e.j41(14,"p",4),e.EFF(15,"Usage:"),e.k0s(),e.j41(16,"pre"),e.nrm(17,"code",5),e.k0s(),e.j41(18,"h2"),e.EFF(19,"General Features"),e.k0s(),e.j41(20,"ul")(21,"li")(22,"p",4),e.EFF(23,"Lets you globally define your grid settings and sets many settings for you."),e.k0s()(),e.j41(24,"li")(25,"p",4),e.EFF(26,"Automatically saves and loads filter and column states."),e.k0s()(),e.j41(27,"li")(28,"p",4),e.EFF(29,"Works together with the "),e.j41(30,"i"),e.EFF(31,"InlineSearchableGrid"),e.k0s(),e.EFF(32," feature and hooks into CTRL+F."),e.k0s()(),e.j41(33,"li")(34,"p",4),e.EFF(35,"Facilitates update of data by automatically updating it via transactional calls."),e.k0s()(),e.j41(36,"li")(37,"p",4),e.EFF(38,"Facilitates testing as it creates in memory grids that tools such as "),e.j41(39,"i"),e.EFF(40,"Ranorex"),e.k0s(),e.EFF(41," can call to extract data."),e.k0s()(),e.j41(42,"li")(43,"p",4),e.EFF(44,"Together with the "),e.j41(45,"i"),e.EFF(46,"ContextMenuHelper"),e.k0s(),e.EFF(47," and "),e.j41(48,"i"),e.EFF(49,"ColumnHelper"),e.k0s(),e.EFF(50," utilities you have a fast way of writing code by chaining your setups and linking things to existing "),e.j41(51,"i"),e.EFF(52,"Toolbar"),e.k0s(),e.EFF(53," implementations."),e.k0s()()(),e.j41(54,"h2"),e.EFF(55,"Example of a base implementation "),e.nrm(56,"p-badge",6),e.k0s(),e.j41(57,"p",4),e.EFF(58,"This is a sample implementation of a grid that extends the BaseGrid class:"),e.k0s(),e.j41(59,"pre"),e.nrm(60,"code",5),e.k0s(),e.j41(61,"h2"),e.EFF(62,"Example of a base implementation "),e.nrm(63,"p-badge",7),e.k0s(),e.j41(64,"pre"),e.nrm(65,"code",5),e.k0s(),e.j41(66,"p",4),e.EFF(67,"It is "),e.j41(68,"b"),e.EFF(69,"very important"),e.k0s(),e.EFF(70," that the ID of the grid is the same as the ID returned by the base class for inline search, or it will not work"),e.k0s(),e.j41(71,"h2"),e.EFF(72,"Example of a GridSettings implementation "),e.nrm(73,"p-badge",6),e.k0s(),e.j41(74,"pre"),e.nrm(75,"code",5),e.k0s(),e.j41(76,"p",4),e.EFF(77,'In the above GridSettings we say that inline search results should have a specific CSS class, that we are using a specific date format, and that the grid height depends on user settings where they can define a "tight" grid or a spaced grid, and a few other options.'),e.k0s(),e.j41(78,"h2"),e.EFF(79,"Result (select a row and hit CTRL+F for inline search)"),e.k0s(),e.nrm(80,"BasicGrid")(81,"p"),e.j41(82,"h2"),e.EFF(83,"Various methods and what they do. Please consult the API for more details on each one."),e.k0s(),e.j41(84,"table",8)(85,"thead")(86,"tr")(87,"th"),e.EFF(88," name"),e.k0s(),e.j41(89,"th"),e.EFF(90," example"),e.k0s(),e.j41(91,"th"),e.EFF(92," description"),e.k0s(),e.nrm(93,"th")(94,"th")(95,"th"),e.k0s()(),e.j41(96,"tbody"),e.DNE(97,f,16,3,"tr",9),e.k0s()()()()),2&i&&(e.R7$(17),e.Y8G("highlight","public class MyGrid extends BaseGrid {"),e.R7$(43),e.Y8G("highlight",a.basicGridCode),e.R7$(5),e.Y8G("highlight",a.basicGridHtmlCode),e.R7$(10),e.Y8G("highlight",a.basicGridSettingsCode),e.R7$(22),e.Y8G("ngForOf",a.tableData))},dependencies:[l.Sq,n.f4,c.Ex,F.p],encapsulation:2,changeDetection:0})}}return t})();function b(t,d){if(1&t&&(e.j41(0,"tr")(1,"td")(2,"span",8),e.EFF(3),e.j41(4,"a",9),e.nrm(5,"i",10),e.k0s()()(),e.j41(6,"td")(7,"span",11)(8,"pre"),e.nrm(9,"code",3),e.k0s()()(),e.j41(10,"td")(11,"span",12),e.EFF(12),e.k0s()(),e.nrm(13,"td")(14,"td")(15,"td"),e.k0s()),2&t){const s=d.$implicit;e.R7$(3),e.JRh(s.name),e.R7$(6),e.Y8G("highlight",s.example),e.R7$(3),e.JRh(s.description)}}const E=m.iI.forChild([{path:"baseControl",component:p},{path:"baseForm",component:(()=>{class t extends o.PJ{constructor(s){super(),this.cd=s,this.htmlCode='<p-message *ngIf="hasRequiredErr()" severity="danger" [text]="getRequiredMsg()"></p-message>\n<p-message *ngIf="hasPatternErr()" severity="danger" [text]="getPatternMsg()"></p-message>\n<p-message *ngIf="hasErr(\'minlength\')" severity="danger" [text]="getErrMsg(\'minlength\')"></p-message>',this.errorMessagesCode="override errorMessageHandler(fieldName: string, msg: string): string {\n    if (msg.includes(\"$fieldName\")) {\n      msg = msg.replaceAll('\\$fieldName', fieldName);\n      msg = StringUtils.unCamelCase(msg);\n    }\n    return msg;\n}",this.validationMessagesCode='override validationMessages = {\n    isin: {"required": "ISIN is Required", "pattern": \'ISIN is not in a valid format\'},\n    currency: {"required": "$fieldName is Required", "minlength": "Minimum length is 3 Characters"}\n}',this.tableData=[{name:"getDialogMode",example:"if (super.getDialogMode() === DialogModes.COPY) {",description:"Fetches the DialogModes Enum value that the dialog was opened with"},{name:"isAddMode",example:"if (super.isAddMode()) {",description:"Checks whether the dialog was opened with DialogModes.ADD"},{name:"isEditMode",example:"if (super.isAddMode()) {",description:"Checks whether the dialog was opened with DialogModes.EDIT"},{name:"isCopyMode",example:"if (super.isAddMode()) {",description:"Checks whether the dialog was opened with DialogModes.COPY"},{name:"trackSubscription",example:"super.trackSubscription(sub)",description:"Tells the dialog a subscription should automatically be unsubscribed when the dialog is disposed"},{name:"handleSubmitError",example:"super.handleSubmitError(errorMsg, dialogTitle)",description:"Tells the dialog that it should show an error dialog explaining that something went wrong in the submit"},{name:"resetSubmitState",example:"super.resetSubmitState()",description:"Tells the dialog there are no submit errors any more"},{name:"isRequiredField",example:"super.isRequiredField(fieldId)",description:"Checks if a field is currently flagged as required"},{name:"hasErr",example:"super.hasErr(fieldId)",description:"Checks if a field has an error"},{name:"hasRequiredErr",example:"super.hasRequiredErr(fieldId)",description:"Checks if a field has an error that it is required"},{name:"getRequiredMsg",example:"super.getRequiredMsg(fieldId)",description:"Gets the required error message for a field"},{name:"hasPatternErr",example:"super.hasPatternErr(fieldId)",description:"Checks if a field has an error that it it's pattern doesn't match"},{name:"getErrMsg",example:"super.getErrMsg(fieldId)",description:"Gets the error message for a field"},{name:"getPatternMsg",example:"super.getPatternMsg(fieldId)",description:"Gets the pattern error message for a field"},{name:"showLoading",example:"super.showLoading()",description:"Shows the 'Loading' blocker"},{name:"hideLoading",example:"super.hideLoading()",description:"Hides the 'Loading' blocker"},{name:"setFieldFocus",example:"super.setFieldFocus(fieldAdd, fieldNotAdd)",description:"Sets the focus onto a field, using the first parameter if it's in ADD mode and the second if it is not in ADD mode"},{name:"getModifiedData",example:"super.getModifiedData()",description:"Returns only the data that was modified in the form"},{name:"isFormDirty",example:"BaseForm.isFormDirty(form)",description:"Checks whether a form is dirty"},{name:"beginSubmit",example:"super.beginSubmit()",description:"Tells the form a submit process has started, and will thus clear form states and show the blocker"},{name:"endSubmit",example:"super.endSubmit()",description:"Tells the form the submit has ended, and will thus clear the form state and hide the blocker"},{name:"flagAsComboField",example:"super.flagAsComboField(id)",description:"Tells the form that certain fields are dropdowns/combo boxes, which will ensure they are not validated until touched"},{name:"flagAsComboFields",example:"super.flagAsComboField(...ids)",description:"Tells the form that certain fields are dropdowns/combo boxes, which will ensure they are not validated until touched"},{name:"ensureDateFromAndDateToFields",example:"super.ensureDateFromAndDateToFields(field1, field2)",description:"Ensures two dates are OK as far as 'from' and 'to' goes date-wise and will otherwise flag errors for those fields"},{name:"errorMessageHandler",example:"override errorMessageHandler(msg)",description:"Lets you handle error messages rather than going through the framework"}]}getEventGrid(s){}hookObservables(){}ngOnInit(){super.ngOnInit(),this.cd.markForCheck()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnDestroy(){super.ngOnDestroy()}static{this.\u0275fac=function(i){return new(i||t)(e.rXU(e.gRc))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["BaseFormView"]],features:[e.Jv_([]),e.Vt3],decls:87,vars:5,consts:[[1,"documentParent"],[1,"document"],[1,"description"],["language","ts",3,"highlight"],["src","./assets/screenshots/folding-dialogs.png",2,"width","600px"],["language","html",3,"highlight"],[1,"doc-table"],[4,"ngFor","ngForOf"],["id","api.menu.props.model",1,"doc-option-name"],[1,"doc-option-link"],[1,"pi","pi-link"],[1,"doc-option-type"],["id","api.menu.props.description",1,"doc-option-description"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3,"BaseForm"),e.k0s(),e.j41(4,"p",2),e.EFF(5,"BaseForm is an abstract class that is intended to be the parent of any class that represents an Angular reactive form (singular)."),e.k0s(),e.j41(6,"p",2),e.EFF(7,"Usage:"),e.k0s(),e.j41(8,"pre"),e.nrm(9,"code",3),e.k0s(),e.j41(10,"h2"),e.EFF(11,"General Features"),e.k0s(),e.j41(12,"ul")(13,"li")(14,"p",2),e.EFF(15,'Keeps track of what state the form is in (Add, Edit, Delete, Copy, etc) which helps when initializing fields that may be read only or disabled depending on what "edit mode" the form is in. This is done using the '),e.j41(16,"i"),e.EFF(17,"DialogModes"),e.k0s(),e.EFF(18," ENUM class.It has a whole bunch of utility methods for dealing with angular validation messages."),e.k0s()(),e.j41(19,"li")(20,"p",2),e.EFF(21,'Shows "loading" blockers with simple calls to '),e.j41(22,"i"),e.EFF(23,"showLoading()"),e.k0s(),e.EFF(24," and "),e.j41(25,"i"),e.EFF(26,"hideLoading()"),e.k0s()()(),e.j41(27,"li")(28,"p",2),e.EFF(29,'Handles "wait while data is being submitted" with '),e.j41(30,"i"),e.EFF(31,"beginSubmit()"),e.k0s(),e.EFF(32," and "),e.j41(33,"i"),e.EFF(34,"endSubmit()"),e.k0s(),e.EFF(35," which will automatically block and unblock the form. There's also "),e.j41(36,"i"),e.EFF(37,"handleSubmitError()"),e.k0s(),e.EFF(38," which will take an error message, cancel the form submit and display the error to the user."),e.k0s()(),e.j41(39,"li")(40,"p",2),e.EFF(41,"Automatically hooks into "),e.j41(42,"i"),e.EFF(43,"DialogUtilities"),e.k0s(),e.EFF(44,' class for ensuring that multiple sub-dialogs will "fold" the parents behind. Screenshot of this:'),e.k0s(),e.nrm(45,"img",4),e.k0s()(),e.j41(46,"h2"),e.EFF(47,"Validation message setup"),e.k0s(),e.j41(48,"p",2),e.EFF(49,"The base class contains a map for holding all your validation messages, which reduces the amount of HTML code you have to write and keeps all your validation messages in one place."),e.k0s(),e.j41(50,"p",2),e.EFF(51,"To use this you simply override the property called "),e.j41(52,"i"),e.EFF(53,"validationMessages"),e.k0s(),e.EFF(54,": (WARNING: This may change to become a method in a future release)"),e.k0s(),e.j41(55,"pre"),e.nrm(56,"code",3),e.k0s(),e.j41(57,"p",2),e.EFF(58,"In the above case, we use "),e.j41(59,"i"),e.EFF(60,"$fieldName"),e.k0s(),e.EFF(61," as a replaceable variable name. This is so that we can customize what is printed out for that text. So to ensure that the final message ends up correctly, we set up an override as in the example below. This example de-camel-cases the name of the field name and replaces the "),e.j41(62,"i"),e.EFF(63,"$fieldName"),e.k0s(),e.EFF(64," with that text."),e.k0s(),e.j41(65,"pre"),e.nrm(66,"code",3),e.k0s(),e.j41(67,"p",2),e.EFF(68,'In your HTML code, you can make the check for an error very simple. Here are three examples, one for a required field, one for a pattern message, and one for the "custom" error code of "minlength".'),e.k0s(),e.j41(69,"pre"),e.nrm(70,"code",5),e.k0s(),e.j41(71,"h2"),e.EFF(72,"Various methods and what they do. Please consult the API for more details on each one."),e.k0s(),e.j41(73,"table",6)(74,"thead")(75,"tr")(76,"th"),e.EFF(77," name"),e.k0s(),e.j41(78,"th"),e.EFF(79," example"),e.k0s(),e.j41(80,"th"),e.EFF(81," description"),e.k0s(),e.nrm(82,"th")(83,"th")(84,"th"),e.k0s()(),e.j41(85,"tbody"),e.DNE(86,b,16,3,"tr",7),e.k0s()()()()),2&i&&(e.R7$(9),e.Y8G("highlight","public class MyForm extends BaseForm {"),e.R7$(47),e.Y8G("highlight",a.validationMessagesCode),e.R7$(10),e.Y8G("highlight",a.errorMessagesCode),e.R7$(4),e.Y8G("highlight",a.htmlCode),e.R7$(16),e.Y8G("ngForOf",a.tableData))},dependencies:[l.Sq,n.f4],encapsulation:2,changeDetection:0})}}return t})()},{path:"baseGrid",component:w},{path:"baseUsecaseModel",component:g},{path:"baseView",component:u}]);let y=(()=>{class t extends o.of{destroy(){}handleInitializionError(s){console.error(s)}hookObservables(){}static{this.\u0275fac=(()=>{let s;return function(a){return(s||(s=e.xGo(t)))(a||t)}})()}static{this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac})}}return t})();var v=r(928),j=r(4326);let G=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({providers:[y],imports:[l.MD,E,v.G,j.TestGridModule,c.EJ]})}}return t})()}}]);