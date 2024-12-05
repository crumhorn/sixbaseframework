import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'InlineSearchView',
  templateUrl: './InlineSearchView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineSearchView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public configureCode = `Globals.GLOBAL_AG_GRID_SETTINGS = <GridSettings>{
  ...
  highlightSearchResultsText: true,
  // optionally to override the default css class you can set this, default is 'stringSearchMatchedCell'
  cssClassStringSearchMatchedCell: "stringSearchMatchedCell",
  ...
};`;

  public manualColumnCode = `// val is the value of the cell

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

  public furtherCssCode = `ch.getAllColumnIds().forEach(def => {
       ch.addCellClassRule(def, "stringSearchMatchedCell", (params) => InlineSearchableGridStore.hookCellCssRule(params, this.getGridId()));
});`;

  public furtherCssCodeNoColumnHelper = `let colDef = {
  ...
  cellClassRules['stringSearchMatchedCell'] = (params) => InlineSearchableGridStore.hookCellCssRule(params, this.getGridId())
}`;

  public gridWrappingCode = `<InlineSearchableGrid>
    <ag-grid-angular #grid ...></ag-grid-angular>
</InlineSearchableGrid>`;

  public cssCode = `// border around cell
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

  public baseGridCode = `getGridSettings(): GridSettings {
  return Globals.GLOBAL_AG_GRID_SETTINGS;
}`;

  public proxyCode = `this.inlineSearchService.showInlineGridSearch.subscribe((data: any) => {
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
