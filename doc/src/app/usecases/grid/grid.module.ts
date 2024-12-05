import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./grid.routing";
import {GridView} from "./views/GridView";
import {GridUsecaseModel} from "./model/GridUsecaseModel";
import {BasicGrid} from "./grids/BasicGrid";
import {SharedModule} from "../../app.shared.modules";
import {AgGridModule} from "@ag-grid-community/angular";

@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    // views
    GridView,
    BasicGrid
  ],
  providers: [
    GridUsecaseModel
  ],
  exports: [
    BasicGrid
  ]
})
export class TestGridModule {
}
