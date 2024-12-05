import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'PathUtilsView',
  templateUrl: './PathUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  depCode = ``;

  public tableData = [
    { name: "deepFind", example: "let valueThatMatchesPath = PathUtils.deepFind(target, 'this.is.the.nested.path);", description: "Fetches a nested value from an object graph, where each dot represents a sub object" },
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
