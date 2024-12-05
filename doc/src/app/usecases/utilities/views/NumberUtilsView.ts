import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'NumberUtilsView',
  templateUrl: './NumberUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  depCode = ``;

  public tableData = [
    { name: "lpad", example: "let lPadded = NumberUtils.lpad(value, 5);", description: "Left pads a value with zeroes" },
    { name: "range", example: "let range:number[] = NumberUtils.isFunction(target);", description: "Creates a range of numbers" },
    { name: "rangeLikeCSharp", example: "let range:number[] = NumberUtils.rangeLikeCSharp(0, 100);", description: "Creates a range of numbers just like C# does" },
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
