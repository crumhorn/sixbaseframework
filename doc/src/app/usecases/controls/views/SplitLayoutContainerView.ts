import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'SplitLayoutContainerView',
  templateUrl: './SplitLayoutContainerView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitLayoutContainerView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public definitionCode: string = `<SplitLayoutContainer [header]="header" [body]="body" [toolbar]="toolbar" [footer]="footer" headerName="I am the container">`;
  public templateCode: string = `<ng-template #body>
    <div style="padding: 10px">Hi! I'm #body</div>
</ng-template>`;

  public demoCode: string = `<SplitLayoutContainer [header]="header" [body]="body" [toolbar]="toolbar" [footer]="footer" headerName="I am the container">
  <ng-template #header>
    I am in the #header area
  </ng-template>
  <ng-template #toolbar>
    I'm in the #toolbar area
  </ng-template>
  <ng-template #body>
    Hi! I'm #body
  </ng-template>
  <ng-template #footer>
    I'm in the #footer area
  </ng-template>
</SplitLayoutContainer>`;

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
