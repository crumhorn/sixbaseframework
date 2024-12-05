import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ToolbarHelperView',
  templateUrl: './ToolbarHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  usageCode = `// this is called from ngAfterViewInit()
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
