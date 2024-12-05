import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'JsUtilsView',
  templateUrl: './JsUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  depCode = ``;

  public tableData = [
    { name: "shallowClone", example: "let shallowClone = JsUtils.shallowClone(obj);", description: "Shallow clones an object" },
    { name: "isFunction", example: "let isFunc:boolean = JsUtils.isFunction(target);", description: "Checks whether the target object is a Javascript function" },
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
