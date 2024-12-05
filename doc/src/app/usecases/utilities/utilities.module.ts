import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./utilities.routing";
import {SharedModule} from "../../app.shared.modules";
import {AgGridModule} from "@ag-grid-community/angular";
import {UtilitiesUsecaseModel} from "./model/UtilitiesUsecaseModel";
import {DateUtilsView} from "./views/DateUtilsView";
import {ArrayUtilsView} from "./views/ArrayUtilsView";
import {JsUtilsView} from "./views/JsUtilsView";
import {NumberUtilsView} from "./views/NumberUtilsView";
import {PathUtilsView} from "./views/PathUtilsView";
import {StringUtilsView} from "./views/StringUtilsView";

@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule.forRoot(),
    AgGridModule
  ],
  declarations: [
    // views
    DateUtilsView,
    ArrayUtilsView,
    JsUtilsView,
    NumberUtilsView,
    PathUtilsView,
    StringUtilsView
  ],
  providers: [
    UtilitiesUsecaseModel
  ],
  exports: [
  ]
})
export class UtilitiesModule {
}
