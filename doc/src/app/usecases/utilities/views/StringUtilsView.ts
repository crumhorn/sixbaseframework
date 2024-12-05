import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'StringUtilsView',
  templateUrl: './StringUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  depCode = ``;

  public tableData = [
    { name: "stringFormat", example: "let str = 'Oh hi {0} {1}';\n// Oh hi Peter Johnsson\nlet formatted = StringUtils.stringFormat(str, 'Peter', 'Johnsson');", description: "Mimics the C string formatter where a bracket with a digit in it represents what to replace from the given array in the same order" },
    { name: "unCamelCase", example: "let str = 'ThisIsCamelCase';\nlet nonCamel = StringUtils.unCamelCase(str); // This Is Camel Case", description: "Takes a camel cased string and splits it into multiple words" },
    { name: "getJsonDiff", example: "let diff = StringUtils.getJsonDiff(obj1, obj2);", description: "Returns the difference between two JSON objects as a new object" },
    { name: "syntaxHighlight", example: "let prettyJson = StringUtils.syntaxHighlight(json);", description: "Returns a syntax highlighted JSON string (for showing JSON in a pretty way on a screen to a user)" }
  ];

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
