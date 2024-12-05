import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'BaseGridView',
  template: `<div class="documentParent">
    <div class="document">
      <h1>BaseGrid</h1>
      <p class="description" style="color: red">NOTE: This feature requires usage of the <i>AgGrid</i> part of the Base Framework that in turn requires <a href="http://www.ag-grid.com/" target="_new">AgGrid</a>.</p>
      <p class="description">BaseGrid is an abstract class that is intended to be the parent of any class that represents one Angular AgGrid implementation.</p>
      <p class="description">Usage:</p>
      <pre><code [highlight]="'public class MyGrid extends BaseGrid {'" language="ts"></code></pre>

      <h2>General Features</h2>
      <ul>
        <li><p class="description">Lets you globally define your grid settings and sets many settings for you.</p></li>
        <li><p class="description">Automatically saves and loads filter and column states.</p></li>
        <li><p class="description">Works together with the <i>InlineSearchableGrid</i> feature and hooks into CTRL+F.</p></li>
        <li><p class="description">Facilitates update of data by automatically updating it via transactional calls.</p></li>
        <li><p class="description">Facilitates testing as it creates in memory grids that tools such as <i>Ranorex</i> can call to extract data.</p></li>
        <li><p class="description">Together with the <i>ContextMenuHelper</i> and <i>ColumnHelper</i> utilities you have a fast way of writing code by chaining your setups and linking things to existing <i>Toolbar</i> implementations.</p></li>
      </ul>

      <h2>Example of a base implementation <p-badge value="Typescript"></p-badge></h2>
      <p class="description">This is a sample implementation of a grid that extends the BaseGrid class:</p>
      <pre><code [highlight]="basicGridCode" language="ts"></code></pre>

      <h2>Example of a base implementation <p-badge value="HTML"></p-badge></h2>
      <pre><code [highlight]="basicGridHtmlCode" language="ts"></code></pre>
      <p class="description">It is <b>very important</b> that the ID of the grid is the same as the ID returned by the base class for inline search, or it will not work</p>

      <h2>Example of a GridSettings implementation <p-badge value="Typescript"></p-badge></h2>
      <pre><code [highlight]="basicGridSettingsCode" language="ts"></code></pre>
      <p class="description">In the above GridSettings we say that inline search results should have a specific CSS class, that we are using a specific date format, and that the grid height depends on user settings where they can define a "tight" grid or a spaced grid, and a few other options.</p>

      <h2>Result (select a row and hit CTRL+F for inline search)</h2>
      <BasicGrid></BasicGrid>

      <p></p>
      <h2>Various methods and what they do. Please consult the API for more details on each one.</h2>
      <table class="doc-table">
        <thead>
        <tr>
          <th> name</th>
          <th> example</th>
          <th> description</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of tableData">
          <td><span class="doc-option-name" id="api.menu.props.model">{{ item.name }}<a class="doc-option-link"><i class="pi pi-link"></i></a></span></td>
          <td><span class="doc-option-type"><pre><code [highlight]="item.example" language="ts"></code></pre></span></td>
          <td><span id="api.menu.props.description" class="doc-option-description">{{ item.description }}</span></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseGridView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public tableData = [
    { name: "setApplicationDefaults", example: "super.setApplicationDefaults(this.grid)", description: "Sets all the default GridOptions flags and listeners that will save column state etc. This is generally done automatically, so you should not need it" },
    { name: "setApplicationDefaultsOntoGrid", example: "BaseGrid.setApplicationDefaultsOntoGrid(this.grid, this.gridSettings)", description: "Same as above but with a static call" },
    { name: "showLoading", example: "super.showLoading()", description: "Shows the 'Loading' blocker" },
    { name: "hideLoading", example: "super.hideLoading()", description: "Hides the 'Loading' blocker" },
    { name: "doNotDoColumnSavingAndRestoration", example: "override doNotDoColumnSavingAndRestoration() { return false; }", description: "Overrides whatever column saving is globally set on a local level" },
    { name: "doNotDoColumnFilterSavingAndRestoration", example: "override doNotDoColumnFilterSavingAndRestoration() { return false; }", description: "Overrides whatever column filter saving is globally set on a local level" },
    { name: "restoreColumnLayouts", example: "super.restoreColumnLayouts()", description: "Restores the column layouts, normally done automatically" },
    { name: "restoreColumnFilterState", example: "super.restoreColumnFilterState()", description: "Restores the column filters, normally done automatically" },
    { name: "saveColumnData", example: "super.saveColumnData()", description: "Forces a save of the column data state, is normally done on change automatically" },
    { name: "saveColumnFilterState", example: "super.saveColumnFilterState()", description: "Forces a save of the filter state, is normally done on change automatically" },
    { name: "saveSelection", example: "super.saveSelection('KEY', (obj) => { return obj.id; })", description: "Saves the selected state into memory" },
    { name: "restoreSelection", example: "super.restoreSelection('KEY', (obj) => { return obj.id; }, () => { console.log('done'))", description: "Restores the last saved selected state from memory" },
    { name: "rememberSelectionAndExpandState", example: "super.rememberSelectionAndExpandState()", description: "Remembers the selected state and expanded state of the grid (if that is being used)" },
    { name: "restoreSelectionAndExpandState", example: "super.restoreSelectionAndExpandState()", description: "Restores the selected state and expanded state of the grid" },
    { name: "doSmartDataUpdate", example: "super.doSmartDataUpdate(this.grid, data)", description: "Smartly updates the grid by sifting through the data and determining the most efficient way to update the grid with as little redraw as possible. Please see API for additional parameters." },
    { name: "inlineGridSearchOverride", example: "override inlineGridSearchOverride() { return true; }", description: "Overrides the inline search feature, saying you wish to do it yourself" },
    { name: "executeGridInlineSearch", example: "override executeGridInlineSearch(data) { ... }", description: "In conjunction with inlineGridSearchOverride, this should handle the search" },
  ];

  public basicGridSettingsCode = `Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{
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
    };`

  public basicGridHtmlCode = `<InlineSearchableGrid>
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

  public basicGridCode = `@Component({
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

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {
  }

  override ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }



}
