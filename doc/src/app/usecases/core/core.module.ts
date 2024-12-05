import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./core.routing";
import {CoreView} from "./views/CoreView";
import {CoreUsecaseModel} from "./model/CoreUsecaseModel";
import {SharedModule} from "../../app.shared.modules";

@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
  ],
  declarations: [
    // views
    CoreView,
  ],
  providers: [
    CoreUsecaseModel
  ],
  exports: []
})
export class TestCoreModule {
}
