import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ColumnHelperView',
  templateUrl: './ColumnHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  usageCode = `// called from ngAfterViewInit
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
