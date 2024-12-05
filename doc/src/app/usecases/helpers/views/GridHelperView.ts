import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'GridHelperView',
  templateUrl: './GridHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  usageCode = ``;

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
