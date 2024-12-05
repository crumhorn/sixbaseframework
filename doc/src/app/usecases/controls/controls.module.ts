import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./controls.routing";
import {SharedModule} from "../../app.shared.modules";
import {AgGridModule} from "@ag-grid-community/angular";
import {ControlsUsecaseModel} from "./model/ControlsUsecaseModel";
import {SplitLayoutView} from "./views/SplitLayoutView";
import {ToolbarView} from "./views/ToolbarView";
import {PleaseWaitView} from "./views/PleaseWaitView";
import {InlineSearchView} from "./views/InlineSearchView";
import {TestGridModule} from "../grid/grid.module";
import {CompactToolbarModule, PleaseWait, SplitLayoutModule} from "@six-group/base-angular-framework/controls";
import {TabViewModule} from "primeng/tabview";
import {SplitLayoutContainerView} from "./views/SplitLayoutContainerView";

@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
    AgGridModule,
    TestGridModule,
    SplitLayoutModule,
    TabViewModule,
    CompactToolbarModule,
    PleaseWait,
  ],
  declarations: [
    // views
    SplitLayoutView,
    SplitLayoutContainerView,
    ToolbarView,
    PleaseWaitView,
    InlineSearchView
  ],
  providers: [
    ControlsUsecaseModel
  ],
  exports: [
  ]
})
export class ControlsModule {
}
