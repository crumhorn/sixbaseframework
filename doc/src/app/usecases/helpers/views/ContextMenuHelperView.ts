import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ContextMenuHelperView',
  templateUrl: './ContextMenuHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  usageCode = `public gridOptions: GridOptions = <GridOptions> {
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
