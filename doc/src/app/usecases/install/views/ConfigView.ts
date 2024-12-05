import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ConfigView',
  templateUrl: './ConfigView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public tableData = [
    { name: "animateMultipleDialogs", type: "boolean", def: "true", description: "When 2+ dialogs are opened at the same time, this will animate the underlying dialog by \"pushing it to the side\"" },
    { name: "closeModalsWithEscape", type: "boolean", def: "false", description: " Allow closing dialogs with the ESC key (normally a bad idea)" },
    { name: "dontAllowDialogsSmallerThanStartingSize", type: "boolean", def: "false", description: "This ensures a user cannot resize a dialog to smaller than the size it was when it was created. This helps ensure that layouts cannot be over-compressed." },
    { name: "allowDialogResize", type: "boolean", def: "false", description: "Whether dialog windows can be resized" },
    { name: "showExtendedInlineSearch", type: "boolean", def: "true", description: "Whether to show the extended inline search for AgGrid inline searching" },
    { name: "highlightSearchResultsText", type: "boolean", def: "false", description: "Whether to highlight the exact search result text for the inline search feature for AgGrid (may be slow! use carefully)" },
    { name: "usersHateThatFocusOnFormFieldCausesRequiredErrorToShow", type: "false", def: "undefined", description: "Helps out in BaseForm that just focusing on a field does not throw a required entry error" },
    { name: "autoSaveColumnState", type: "boolean", def: "true", description: "Saves & Restores the AG-grid column layout (order, size, etc) whenever something is changed in the grid" },
    { name: "autoSaveColumnFilterState", type: "boolean", def: "true", description: "Saves & Restores the AG-grid filter state whenever one is applied to the grid" },
    { name: "keyColumnStorage", type: "string", def: "blank", description: "The key under which the column settings from above should be saved under. If none is set, no pre-pend key is used and it will be blank \"\"" },
    { name: "keyColumnFilterStorage", type: "string", def: "blank", description: "The key under which the grid filter settings from above should be saved under. If none is set, no pre-pend key is used and it will be blank \"\"" },
    { name: "keySaveSelection", type: "string", def: "blank", description: "The key under which the selected entity for the grid should be saved under. If none is set, no pre-pend key is used and it will be blank \"\"" },
    { name: "displayDateFormat", type: "string", def: "undefined", description: "The date format that is used to display dates. This should ideally be set from using the static properties in DateUtils. Such as DateUtils.YYYY_MM_DD." },
    { name: "showWeekNumbersInCalendar", type: "boolean", def: "false", description: "Whether week numbers should be shown in calendars." },
    { name: "firstDayOfWeekInCalendar", type: "number", def: "0", description: "What day is the first day of the week in calendars. Default is 0." },
    { name: "yearRange", type: "string", def: "undefined", description: "What year range should be shown in calendars. The format is \"startYear,endYear\" (comma separated, no spaces)" },
    { name: "themeClass", type: "string", def: "undefined", description: "What theme CSS class should be applied to all AgGrids." },
  ];

  public importCode = `import * as clazzHandler from "./ClassHandler";`;

  public classHandlerCode = `export class ClassHandler {
}

export {OneTestEntity} from "./test/data/entities/OneTestEntity";
export {SecondTestEntity} from "./test/data/entities/SecondTestEntity";`;
  public testbedCode = `beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [
        {
          provide: CoreAgGridModule,
          useValue: CoreAgGridModule.forChild()
        }
      ]
    }).compileComponents();
  });`;
  public initCode = `import * as clazzHandler from "./ClassHandler";
import {IBaseFrameworkSettings, IEntityClassHandler, SixCoreModule} from '@six-group/base-angular-framework/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SixCoreModule.forRoot(
      <IEntityClassHandler>{
        getClassForString(clazzName: string) {
            return new (<any>clazzHandler)[clazzName]();
        }
      },
      <IBaseFrameworkSettings>{
          displayDateFormat: DateUtils.YYYY_MM_DD
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
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
