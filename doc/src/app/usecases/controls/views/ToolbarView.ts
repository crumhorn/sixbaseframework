import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";
import {Toolbar, ToolbarHelper, ToolbarInputEvent, ToolbarSettings} from "@six-group/base-angular-framework/controls";

@Component({
  selector: 'ToolbarView',
  templateUrl: './ToolbarView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('tb') toolBar: Toolbar | undefined = undefined;
  @ViewChild('tbTwo') toolBarTwo: Toolbar | undefined = undefined;
  private tb?: ToolbarHelper;
  private tbTwo?: ToolbarHelper;

  public importCode = `import {CompactToolbarModule, Toolbar} from "@six-group/base-angular-framework/controls";`;

  public menuCode = `let opts = [
  ['btnTcolsSave', 'obj', 'Save Column Layout', 'fa-save'],
  ['btnTcolsRestore', 'obj', 'Load Column Layout', 'fa-restore'],
  ['btnTcolsSep', 'sep', null, null],
  ['btnTcolsClear', 'obj', 'Clear Saved Column Layout', 'fa-clear'],
  ['btnTcolsSep', 'sep', null, null],
  ['btnTcolsReset', 'obj', 'Reset Column Layout', 'fa-reset'],
];
toolbar.addButtonSelect("tableColumns", "Table Column Options", 'fa-gear', 'fa-gear', opts);

toolbar.onClick.subscribe((id) => {
    switch (id) {
      case 'btnTcolsSave':

...
`;

  public toolbarData = [
    { name: "Add basic button", method: "addButton(...)", description: "A single state button", event: "onClick" },
    { name: "Add select button", method: "addButtonSelect(...)", description: "A button that can have a menu", event: "onClick" },
    { name: "Add toggle button", method: "addButtonSelect(...)", description: "A two state button that is either selected or not", event: "onStateChanged" },
    { name: "Add combo box/dropdown control", method: "addCombo(...)", description: "A dropdown that contains items", event: "onSelectionChanged" },
    { name: "Add a vertical separator", method: "addSeparator()", description: "A vertical separator that looks like a line", event: "n/a" },
    { name: "Add a label", method: "addLabel(...)", description: "A label with text in it", event: "n/a" },
    { name: "Add a spacer", method: "addSpacer(...)", description: "A spacer that pushes everything to the right that is created after it", event: "n/a" },
    { name: "Add input", method: "addInput(...)", description: "A text input field", event: "onEnterPressed" },
    { name: "Add number only input", method: "addNumberOnlyInput(...)", description: "A text input field that only allows numbers", event: "onEnterPressed" },
    { name: "Add many", method: "addMany(...)", description: "Adds many buttons at once", event: "onEnterPressed" },
    { name: "Set toggle state", method: "setToggleState(...)", description: "Sets the toggle state on a button", event: "onStateChanged" },
    { name: "Checks toggle state", method: "isToggled(...)", description: "Returns the toggle state of a toggle button", event: "n/a" },
    { name: "Gets a button", method: "getButton(...)", description: "Returns an already created button", event: "n/a" },
    { name: "Gets a combo", method: "getCombo(...)", description: "Returns an already created combo", event: "n/a" },
    { name: "Sets label text", method: "setLabelText(...)", description: "Changes label text on an already created label", event: "n/a" },
    { name: "Clears combo items", method: "clearComboItems(...)", description: "Clears out all combo items on an already created combo", event: "n/a" },
    { name: "Checks if an item is enabled", method: "isEnabled(...)", description: "Returns enabled state of a toolbar item", event: "n/a" },
    { name: "Gets input value", method: "getInputValue(...)", description: "Returns text in an input field", event: "n/a" },
    { name: "Disables all items", method: "disableAll(...)", description: "Disables every item in the toolbar", event: "n/a" },
    { name: "Enables all items", method: "enableAll(...)", description: "Enables every item in the toolbar", event: "n/a" },
    { name: "Disables one item", method: "disableItem(...)", description: "Disables one item in the toolbar", event: "n/a" },
    { name: "Enables one item", method: "enableItem(...)", description: "Enables one item in the toolbar", event: "n/a" },
    { name: "Disables many items", method: "disableItems(...)", description: "Disables many item in the toolbar", event: "n/a" },
    { name: "Enables many items", method: "enableItems(...)", description: "Enables many item in the toolbar", event: "n/a" },
    { name: "Hide popup menus", method: "hideAnyActiveMenuPopup()", description: "Hides any open popup menu", event: "n/a" },
  ];

  public eventData = [
    { name: "Button Clicks", example: "onClick.subscribe((id) => {", description: "Fires when a user clicks a button" },
    { name: "Enter pressed", example: "onEnterPressed((id) => {", description: "When enter is pressed in a text field" },
    { name: "Menu Selection", example: "onSelectionChanged((id) => {", description: "When a menu item is selected" },
    { name: "State Change", example: "onStateChange((id) => {", description: "When a toggle button changes state\t" },
  ];

  public toolbarInitCodeTwo: string = `<Toolbar [id]="getGridId() + 'GridToolbar'" #tb></Toolbar>`;
  public toolbarInitCodeThree: string = `@ViewChild('tb') toolBar: Toolbar | undefined = undefined;
private tb?: ToolbarHelper;`;

  public toolbarInitCode: string = `let toolbarSettings = new ToolbarSettings();
toolbarSettings.treatImagesAsWebFonts = true;
toolbarSettings.subMenuImage = "pi pi-arrow-right";
toolbarSettings.enablePopupOverflow = true;
toolbarSettings.useBootstrapTooltips = false;
toolbarSettings.useTippyTooltips = true;
toolbarSettings.webFontPrepend = "";
toolbarSettings.defaultToolbarHeight = 34;
Toolbar.GLOBAL_TOOLBAR_SETTINGS = toolbarSettings;`;

  public tippyCode: string = `"tippy.js": "6.3.7",`;
  public tippyCodeTwo: string = `"styles": [
  "node_modules/tippy.js/dist/tippy.css",
  "node_modules/tippy.js/themes/light-border.css",
  ...
  `;

  constructor(private cd: ChangeDetectorRef) {
    super();

    Toolbar.GLOBAL_TOOLBAR_SETTINGS = <ToolbarSettings> {
      treatImagesAsWebFonts: true,
      getOverflowCss(): string {
        return "overflow"
      },
      defaultToolbarHeight: 34,
      enablePopupOverflow: true,
      useBootstrapTooltips: false,
      useTippyTooltips: true,
      webFontPrepend: "",
      subMenuImage: "pi pi-arrow-right"
    };
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
    try {
      this.initToolbar();
      this.initToolbarTwo();
    }
    catch (err) {
      console.error(err);
    }
  }

  public toolbarOutput: string = "";

  initToolbar(): void {
    this.tb = new ToolbarHelper(this.toolBar);

    this.tb.addButton("one", "Test Button", "pi pi-bolt", "pi pi-bolt");
    this.tb.addButtonTwoState("two", "Test Button Two", "pi pi-android", "pi pi-android");
    this.tb.addSeparator();
    this.tb.addInput("three", 100, "Hi! I'm a text box");
    this.tb.addLabel("four", "I'm a label");
    this.tb.addSeparator();
    this.tb.addCombo("five", ["one", "two", "three"], null, (value) => value, (value) => {}, 100);
    this.tb.addSeparator();
    this.toolBar.addButtonSelect("six", "Test 123", "pi pi-cloud", "pi pi-cloud", [
      ["subItemOne", Toolbar.MENU_TYPE_OBJECT, "I am submenu one", "pi pi-chart-scatter" ],
      ["subSep", Toolbar.MENU_TYPE_SEPARATOR, null, null ],
      ["subItemTwo", Toolbar.MENU_TYPE_OBJECT, "I am submenu two", "pi pi-chart-pie" ],
    ]);

    this.toolBar.onClick.subscribe((id) => {
      this.toolbarOutput = "Button " + id + " Clicked";
      this.cd.markForCheck();
    });
    this.toolBar.onEnterPressed.subscribe((event: ToolbarInputEvent) => {
      this.toolbarOutput = event.id + " - Text changed: " + event.enteredText;
      this.cd.markForCheck();
    });
    this.toolBar.onSelectionChanged.subscribe((event) => {
      this.toolbarOutput = "Selection changed: " + event;
      this.cd.markForCheck();
    });
    this.toolBar.onStateChanged.subscribe((event) => {
      this.toolbarOutput = "State changed: " + event + ", toggled: " + this.toolBar.isToggled(event);
      this.cd.markForCheck();
    });

    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  initToolbarTwo(): void {
    this.tbTwo = new ToolbarHelper(this.toolBarTwo);

    this.tbTwo.addButton("one", "Test Button", "pi pi-bolt", "pi pi-bolt");
    this.tbTwo.addButtonTwoState("two", "Test Button Two", "pi pi-android", "pi pi-android");
    this.tbTwo.addSeparator();
    this.tbTwo.addInput("three", 100, "Hi! I'm a text box");
    this.tbTwo.addSeparator();
    this.tbTwo.addLabel("four", "I'm a label");
    this.tbTwo.addSeparator();
    this.tbTwo.addCombo("five", ["one", "two", "three"], null, (value) => value, (value) => {}, 100);
    this.tbTwo.addSeparator();
    this.toolBarTwo.addButtonSelect("six", "Test 123", "pi pi-cloud", "pi pi-cloud", [
      ["sub1", "obj", "I am submenu one", "pi pi-chart-scatter" ],
      ["sub2", "sep", null, null ],
      ["sub3", "obj", "I am submenu two", "pi pi-chart-pie" ],
    ]);

    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }


}
