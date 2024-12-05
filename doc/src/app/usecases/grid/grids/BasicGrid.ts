import {BaseGrid, ColumnHelper, GridSettings, InlineSearchableGridStore} from "@six-group/base-angular-framework/ag-grid";
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from "@angular/core";
import {GridOptions} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {EnterpriseCoreModule} from "@ag-grid-enterprise/core";
import {ClipboardModule} from "@ag-grid-enterprise/clipboard";
import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {ExcelExportModule} from "@ag-grid-enterprise/excel-export";
import {FiltersToolPanelModule} from "@ag-grid-enterprise/filter-tool-panel";
import {MenuModule} from "@ag-grid-enterprise/menu";
import {RangeSelectionModule} from "@ag-grid-enterprise/range-selection";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {SideBarModule} from "@ag-grid-enterprise/side-bar";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
import {MasterDetailModule} from "@ag-grid-enterprise/master-detail";
import {RichSelectModule} from "@ag-grid-enterprise/rich-select";
import {AgGridAngular} from "@ag-grid-community/angular";
import {DateUtils} from "@six-group/base-angular-framework/utils";

@Component({
  selector: 'BasicGrid',
  templateUrl: './BasicGrid.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicGrid extends BaseGrid implements OnInit, AfterViewInit {

  @ViewChild('grid') grid!: AgGridAngular;

  private gridSettings = <GridSettings>{
    useFlatPickrDatePicker: true,
    animateGridRows: true, // animate rows on changes
    highlightSearchResultsText: true, // Use inline search
    // cssClassStringSearchMatchedCell: "stringSearchMatchedCell", // CSS Class for inline search results
    displayDateFormat: DateUtils.MM_DD_YYYY, // set a custom date format
  };

  public modules: any[] = [ClientSideRowModelModule, EnterpriseCoreModule, ClipboardModule, ColumnsToolPanelModule, ExcelExportModule, FiltersToolPanelModule, MenuModule, RangeSelectionModule, SetFilterModule, SideBarModule, StatusBarModule, MasterDetailModule, RichSelectModule];

  constructor(@Inject('WEB_FONTS') webFont: boolean, private cd: ChangeDetectorRef) {
    super();
    this.createColumns();
  }

  public gridOptions: GridOptions = <GridOptions>{
    rowSelection: {mode: 'singleRow', checkboxes: false},
    getRowId: (data) => data.data.id,
    onGridReady: () => this.initGrid()
  }

  public colDefs: any[] = [];

  ngOnInit() {

  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.cd.markForCheck();
  }

  initGrid() {
    this.grid?.api?.setGridOption('rowData', [{id: "1", name: "Testing 123", date: new Date()}]);
  }

  createColumns() {
    let ch = new ColumnHelper(this.getGridName(), this.gridSettings);

    ch.addColumn("Name", "name", 200)
      .addColumn("Date", "date", 200, ColumnHelper.DATE_FILTER);

    ch.addCellRenderer("date", (params) => {
      return DateUtils.convert(params.data.date, DateUtils.MM_DD_YYYY);
    });

    ch.getAllColumnIds().forEach(def => {
      ch.addCellClassRule(def, "stringSearchMatchedCell", (params) => InlineSearchableGridStore.hookCellCssRule(params, this.getGridId()));
    });

    this.colDefs = ch.getColumns();
  }

  doRefresh(): void {
  }

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

  getGrid(): any {
    return this.grid;
  }

  getGridSettings(): GridSettings {
    return this.gridSettings;
  }
}
