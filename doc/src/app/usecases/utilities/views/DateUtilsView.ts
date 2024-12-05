import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'DateUtilsView',
  templateUrl: './DateUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  depCode = `"dependencies": {
  "luxon": "3.5.0", // check latest version yourself
  ...;
},
"devDependencies": {
  "@types/luxon": "3.4.2",
...
`;

  usageCode = `
// convert a date string to a date object, pretty standard, even regular Date object can do this one
let dateStr:string = "2021-12-31 23:59:59";
let dateObj:Date =  DateUtils.dateStringToDate(dateStr, DateUtils.YYYY_MM_DD_HH_MM_SS);

// a less typical date string, that would be much harder with the general date class
let dateStrNotTypical:string = "2021 23:59:59";
let dateObjNotTypical:Date =  DateUtils.dateStringToDate(dateStr, DateUtils.YYYY + " " + DateUtils.HH_MM_SS);

// convert an ISO date, also pretty common
let dateStrIso:string = "2021-12-31T23:59:59.000Z";
let dateObjIso:Date =  DateUtils.stringToISO(dateStr);

// create a date in the past
let datePast = new Date();
datePast.setYear(2022);

// create a date in the future
let dateFuture = new Date();
dateFuture.setYear(2025)

// get all the dates between these two dates
let datesBetween:Date[] = DateUtils.getDatesBetween(datePast, dateFuture);
// check if a date is between two other dates
let isBetween:boolean = DateUtils.isBetween(datePast, dateFuture, new Date());
// get how many minutes are between the two dates
let minsBetween:number = DateUtils.getMinutesBetween(datePast, dateFuture);

// ... and many others
`;


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
