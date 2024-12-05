import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'AnnotationsView',
  templateUrl: './AnnotationsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnotationsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public exampleCode = `import {UnixDate} from "@six-group/base-angular-framework/core/DecoratorsModule";

export class CalendarDay extends BaseEntity<CalendarDay> {

  @UnixDate()
  date: Date = null;

  getClassName(): string {
    return "CalendarDay";
  }
}`;

  public tableData = [
    { name: "ISODate", usage: "@ISODate() property: Date", attributes: "None", description: "Converts an ISO Date into a Date object", other: "", example: "@ISODate() isoDate: Date = undefined;"},
    { name: "UnixDate", usage: "@UnixDate() property:Date", attributes: "None", description: "Converts a UNIX \"number\" into a Date object", other: "", example: "@UnixDate() uxDate: Date = undefined;"},
    { name: "GeneratedId", usage: "@GeneratedId() property: String", attributes: "None", description: "Creates a unique generated ID for every creation of a class using this annotation", other: "The id uses numbers that ever increase starting at 0", example: "@GeneratedId() _id: String = undefined;"},
    { name: "FormattedDate", usage: "@FormattedDate(dateFormat)", attributes: "Date Format", description: "Takes a string date representing the target format and converts it to a Date", other: "", example: "@FormattedDate('YYYY-MM-DD') ymdDate: Date = undefined;"},
    { name: "ListDecorator", usage: "@List(\"TargetClass\") property:T[]", attributes: "Target Class", description: "Assumes the property is a list of classes of the type given in the argument (matches getClassName() on BaseEntity)", other: "", example: "@List(\"MyClass\") myClasses: MyClass[] = undefined;"},
    { name: "ObjectMapping", usage: "@ObjectMapping(\"TargetClass\") property:Clazz", attributes: "Target Class", description: "Assumes the property is a single object of the type given in the argument (matches getClassName() on BaseEntity)", other: "", example: "@ObjectMapping(\"OtherClass\") otherObj: OtherClass = undefined;"},
    { name: "StandardList", usage: "@StandardList() property:baseType[]\t", attributes: "None", description: "Assumes the property is a list of a standard type, such as string, integer, etc", other: "", example: "@StandardList() listOfStrings: String[] = undefined;"},
    { name: "ConvertToInt", usage: "@ConvertToInt() property:number\t", attributes: "None", description: "Converts the target to an integer (JS number)", other: "", example: "@ConvertToInt() intValueOfStr: value = undefined;"},
    { name: "ConvertToFloat", usage: "@ConvertToFloat() property:number", attributes: "None", description: "Converts the target to a float (JS number with decimals)", other: "", example: "@ConvertToFloat() floatValueOfStr: value = undefined;"}
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
