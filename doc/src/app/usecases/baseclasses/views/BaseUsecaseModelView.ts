import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'BaseUsecaseModelView',
  template: `<div class="documentParent">
    <div class="document">
      <h1>BaseUsecaseModel</h1>
      <p class="description">A Usecase Model is considered to be the model in a classic MVC setup. It deals with sending data onward to the server, and receiving and loading data. It may also contain business logic and other such operations.</p>
      <p class="description">As such, a model can look very different between projects, and this class contains a few features such as collecting observables that should be destroyed upon the destruction of the model via <i>trackSubscription</i> and <i>destroySubscriptions</i></p>
      <p class="description">The main feature is that it forces you to override an empty method called <i>hookObservables()</i>. This is so that all your subscriptions are in one place, and as such tries to make you remember to "track" them via the previously mentioned methods.</p>
      <p class="description">It also forces you to implement a <i>handleInitilizationError</i> method that will be called on any issue when creating the model class.</p>
      <p class="description">Here's a barebones implementation:</p>
      <pre><code [highlight]="baseUsageCode" language="ts"></code></pre>


    </div>
  </div>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseUsecaseModelView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public baseUsageCode = `@Injectable()
export class SampleUsecaseModel extends BaseUsecaseModel {

  // we inject the ErrorHelper to show errors
  constructor(private errorHelper: ErrorHelper) {
    super();
  }

  destroy(): void {
  }

  // should show a message to the user that something went wrong
  handleInitializionError(err: any): void {
    this.errorHelper.displayError(err);
  }

  // where we hook all our listeners to data etc
  hookObservables(): void {
  }
}`;

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
