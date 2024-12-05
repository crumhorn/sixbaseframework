import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ConfigGridView',
  templateUrl: './ConfigGridView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigGridView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public tableData = [
    { name: "showGridStatusBar", objType: "boolean", description: "Whether to show the status bar on the grid or not, the other status options will only work if this option is on." },
    { name: "showGridStatusBarTotalRows", objType: "boolean", description: "When the status bar is on, this will show the total row count in the status bar" },
    { name: "showGridStatusBarFilteredRows", objType: "boolean", description: "When the status bar is on, this will show filtered row count in the status bar" },
    { name: "showGridStatusBarSelectedRows", objType: "boolean", description: "When the status bar is on, this will show the selected row count in the status bar" },
    { name: "showGridStatusBarAggregatedRows", objType: "boolean", description: "When the status bar is on, this will show the aggregated row count in the status bar" },
    { name: "animateGridRows", objType: "boolean", description: "Whether grid row updates should be animated or not" },
    { name: "customGridSizing", objType: "boolean", description: "Must be on for getGridRowHeight() to be called" },
    { name: "getGridRowHeight", objType: "boolean", description: "Will be called if customGridSizing is true" },
    { name: "customGridFontSize", objType: "number", description: "Cell font size override" },
    { name: "enablePivot", objType: "boolean", description: "Whether pivoting should be enabled" },
    { name: "copyCellValueOnlyOnCopy", objType: "boolean", description: "Whether CTRL+C should only copy the focused cell value rather than the entire row" },
    { name: "toolbarImagesPath", objType: "string", description: "Image path to the toolbar icons" },
    { name: "toolbarSearchIcon", objType: "string", description: "Image path to the search icon" },
    { name: "filterIconOverridePath", objType: "string", description: "If the filter icon should be overridden, this is where you set it up." },
    { name: "displayDateFormat", objType: "string", description: "Date format used when dealing with dates" },
    { name: "highlightSearchResultsText", objType: "boolean", description: "Whether search results should be highlighted within the cell value itself, using Inline Search Control" },
    { name: "cssClassStringSearchMatchedCell", objType: "string", description: "CSS class to apply to the span tag that surrounds search matched text within a cell, default is 'highlightText'" },
    { name: "getGlobalGridSettings", objType: "method", description: "Any value that can be set with .setGridOption(key, value) can be set in this map and it will be applied to every grid" },
    { name: "globalPostGridInitSettings", objType: "method", description: "Allows setting of values onto the GridOptions object after all other values have been set" },
    { name: "suppressAllGridOptionDefaults", objType: "boolean", description: "Whether any settings onto the gridoptions should take place or not. This is useful for when you want to set all grid options yourself." },
    { name: "useFlatPickrDatePicker", objType: "boolean", description: "Whether to use flatpickr date picker for the agDateInput component" }
  ];


  public initCode = `Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{
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


  constructor() {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {

  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }


}
