import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ArrayUtilsView',
  templateUrl: './ArrayUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrayUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  depCode = ``;
  usageCode = ``;

  public tableData = [
    { name: "removeDuplicates", example: "let newArray:string[] = ArrayUtils.removeDuplicates(['one', 'one', 'two']);\nor\nremoveDuplicates([{'key': one'}, {'key': 'one'}, {'key':'two'}], 'key');", description: "Removes duplicate entries from an array" },
    { name: "areAllSameLength", example: "let allAreSame:boolean = ArrayUtils.areAllSameLength(arrayOne, arrayTwo, arrayThree);", description: "Checks whether all arrays are of the same length" },
    { name: "arraysMatch", example: "let allMatch:boolean = ArrayUtils.arraysMatch(['one', 'two'], ['two', 'one']);", description: "Checks whether to arrays match regardless of the order of the elements" },
    { name: "findDuplicates", example: "let dupes:string[] = ArrayUtils.findDuplicates(['one', 'one', 'two']);", description: "Returns all duplicates that are in an array" }
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
