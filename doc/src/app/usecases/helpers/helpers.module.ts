import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./helpers.routing";
import {SharedModule} from "../../app.shared.modules";
import {AgGridModule} from "@ag-grid-community/angular";
import {HelpersUsecaseModel} from "./model/HelpersUsecaseModel";
import {ErrorHelperView} from "./views/ErrorHelperView";
import {ModalUtilsView} from "./views/ModalUtilsView";
import {SampleForm} from "./forms/SampleForm";
import {ColumnHelperView} from "./views/ColumnHelperView";
import {GridHelperView} from "./views/GridHelperView";
import {ContextMenuHelperView} from "./views/ContextMenuHelperView";
import {ToolbarHelperView} from "./views/ToolbarHelperView";
import {RegexHelperView} from "./views/RegexHelperView";
import {GridToolbarHelperView} from "./views/GridToolbarHelperView";

@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    // views
    ErrorHelperView,
    ModalUtilsView,
    ColumnHelperView,
    GridHelperView,
    ContextMenuHelperView,
    ToolbarHelperView,
    GridToolbarHelperView,
    RegexHelperView,
    SampleForm
  ],
  providers: [
    HelpersUsecaseModel
  ],
  exports: [
  ]
})
export class HelpersModule {
}
