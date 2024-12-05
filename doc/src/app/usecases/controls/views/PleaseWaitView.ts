import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'PleaseWaitView',
  templateUrl: './PleaseWaitView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PleaseWaitView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public block: boolean = false;
  public blockTwo: boolean = false;

  public pleaseWaitHtmlCode: string = `<PleaseWait [block]="yourBooleanProperty"></PleaseWait>`
  public pwInitCode: string = `import {PleaseWait} from "@six-group/base-angular-framework/controls";

imports: [ PleaseWait, .... ]`;

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {

  }

  public showLoader(): void {
    this.block = true;
    this.cd.markForCheck();
    this.cd.detectChanges();

    setTimeout(() => {
      this.block = false;
      this.cd.markForCheck();
      this.cd.detectChanges();
    }, 5000);
  }

  public showLoaderTwo(): void {
    this.blockTwo = true;
    this.cd.markForCheck();
    this.cd.detectChanges();

    setTimeout(() => {
      this.blockTwo = false;
      this.cd.markForCheck();
      this.cd.detectChanges();
    }, 5000);
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
