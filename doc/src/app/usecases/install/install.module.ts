import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./install.routing";
import {InstallUsecaseModel} from "./model/InstallUsecaseModel";
import {SharedModule} from "../../app.shared.modules";
import {AgGridModule} from "@ag-grid-community/angular";
import {InstallView} from "./views/InstallView";
import {ConfigView} from "./views/ConfigView";
import {ConfigGridView} from "./views/ConfigGridView";


@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    // views
    InstallView,
    ConfigView,
    ConfigGridView
  ],
  providers: [
    InstallUsecaseModel
  ],
  exports: []
})
export class InstallModule {
}
