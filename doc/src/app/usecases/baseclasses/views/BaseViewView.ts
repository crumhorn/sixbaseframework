import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'BaseViewView',
  template: `
    <div class="documentParent">
      <div class="document">
        <h1>BaseView</h1>
        <p class="description">A "view" is considered to be one page. It comes from standard MVC. Model, View, Controller (or ViewController). The View is the parent of all other controls on the page, and thus this abstract base class deals with features related to that.</p>
        <p class="description">As a view can be very different, the number of features of this base class is rather small. It mostly hooks into the <i>Split Layout Control</i> to allow maximizing and minimizing of the entire view across the browser window. It also has an available override to listen to keyboard presses of F3
          and Ctrl+F.</p>
        <p class="description">Here's a barebones implementation:</p>
        <pre><code [highlight]="'export class MyView extends BaseView {'" language="ts"></code></pre>
      </div>
    </div>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseViewView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {
  }

  override ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }



}
