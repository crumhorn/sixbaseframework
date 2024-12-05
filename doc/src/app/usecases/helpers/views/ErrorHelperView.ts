import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ErrorHelperView',
  templateUrl: './ErrorHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public depCode: string = `"dependencies": {
"sweetalert2": "11.6.13", // check latest version yourself
...`;

  public exampleCode: string = `this.errorHelper.displayKnownError("Test Error", "This is a test error", "error", "Buttons can change");`;

  public injectCode: string = `import {ErrorHelper} from "@six-group/base-angular-framework/core";

constructor(private errorHelper: ErrorHelper) {`;

  public injTokenCode: string = `providers: [
{
  provide: ERROR_OVERRIDE_HANDLER,
  useClass: YourImplementationOfIErrorOverrideHandler
},
...`

  constructor(private errorHelper: ErrorHelper) {
    super();
  }

  public testError(): void {
    this.errorHelper.displayKnownError("Test Error", "This is a test error", "error", "Buttons can change");
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
