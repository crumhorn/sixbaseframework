import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'ReverseMappingView',
  templateUrl: './ReverseMappingView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReverseMappingView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public backToJsonCode = `let json = this.entityUtilities.prepareForSaving<Clazz>(jsObject);

this.someRestService.save(json).subscribe((response: any) => {
...
`;

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
