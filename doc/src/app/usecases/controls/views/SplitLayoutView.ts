import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'SplitLayoutView',
  templateUrl: './SplitLayoutView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitLayoutView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public importCode: string = `import {SplitLayoutModule} from "@six-group/base-angular-framework/controls";
...
imports: [ SplitLayoutModule, ... ]`;

  public cssCode: string = `.slcArrows {
  background-image: url('/assets/images/layout/dhxlayout_cell_btns2_dark.png');
}

.slcArrows:hover {
  background-image: url('/assets/images/layout/dhxlayout_cell_btns_hover2.png');
}

.slcMaxMin {
  background-image: url('/assets/images/layout/dhxlayout_max_min2_dark.png');
}

.slcMaxMin:hover {
  background-image: url('/assets/images/layout/dhxlayout_max_min_hover2.png');
}`;

  public maximizedCode: string = `<div id="maximizedArea" style="width: 100%; height: 100%; position: relative; z-index: 1; display: none"></div>`;

  public innerCode: string = `<as-split-area [size]="'*'" [maximizable]="false" [collapsible]="false">`;

  public rootCode: string = `<as-split direction="vertical" [disabled]="false" [unit]="'pixel'" [gutterSize]="11">
</as-split>`;

  public layoutCode: string = `<div style="width: 100%; height: 600px; border: 2px solid green; position: relative">
  <as-split direction="horizontal" [disabled]="false" [unit]="'percent'" [gutterSize]="11">
    <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
      <SplitLayoutContainer [header]="header" [body]="body" [toolbar]="toolbar" [footer]="footer" headerName="Left Side">
        <ng-template #header>
          I am in the #header area
        </ng-template>
        <ng-template #toolbar>
          <div style="display: flex; align-items: center; background: black; color: white; height: 30px; padding-left: 10px">I'm in the #toolbar area</div>
        </ng-template>
        <ng-template #body>
          <div style="padding: 10px">
            Hi! I'm #body
          </div>
        </ng-template>
        <ng-template #footer>
          <div style="display: flex; align-items: center; background: black; color: white; height: 30px; padding-left: 10px">I'm in the #footer area</div>
        </ng-template>
      </SplitLayoutContainer>
    </as-split-area>
    <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
      <as-split direction="vertical" [disabled]="false" [unit]="'percent'" [gutterSize]="11">
        <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
          <SplitLayoutContainer [body]="bodytwo" headerName="Right Side">
            <ng-template #bodytwo>
              <div style="padding: 10px">
                How are you?
              </div>
            </ng-template>
          </SplitLayoutContainer>
        </as-split-area>
        <as-split-area [size]="'50%'" [maximizable]="true" [collapsible]="true">
          <SplitLayoutContainer [body]="bodythree" headerName="Bottom Right Side">
            <ng-template #bodythree>
              <div style="padding: 10px">
                I'm good, thanks!
              </div>
            </ng-template>
          </SplitLayoutContainer>
        </as-split-area>
      </as-split>
    </as-split-area>
  </as-split>
</div>`;

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
