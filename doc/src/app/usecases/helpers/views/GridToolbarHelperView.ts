import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'GridToolbarHelperView',
  templateUrl: './GridToolbarHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridToolbarHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  usageCode = `let gth = new GridToolbarHelper(this.tb);
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
