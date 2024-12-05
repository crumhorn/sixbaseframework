import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'BaseControlView',
  template: `<div class="documentParent">
    <div class="document">
      <h1>BaseControl</h1>
      <p class="description">This abstract class is the core of all base controls that make up the next sections in the menu. It's something you can extend if you wish to further your own implementation of some control that has all the various hooks and utilities that the other base classes have.</p>
      <p class="description">This class is small, and mostly has utility methods for tracking subscription listeners that will be auto-disposed when the control is destroyed.</p>
      <p class="description">Usage:</p>
      <pre><code [highlight]="'super.trackSubscription(something.subscribe((data) => { }));'"
                 language="ts"></code></pre>
      <p class="description">As it is unlikely you will be using this class, please continue to the next sections.</p>
    </div>
  </div>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseControlView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

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
