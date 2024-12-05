import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./baseclasses.routing";
import {BaseControlView} from "./views/BaseControlView";
import {BaseClassesUsecaseModel} from "./model/BaseClassesUsecaseModel";
import {BaseFormView} from "./views/BaseFormView";
import {BaseGridView} from "./views/BaseGridView";
import {BaseUsecaseModelView} from "./views/BaseUsecaseModelView";
import {BaseViewView} from "./views/BaseViewView";
import {SharedModule} from "../../app.shared.modules";
import {TestGridModule} from "../grid/grid.module";
import {BadgeModule} from "primeng/badge";

@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
    TestGridModule,
    BadgeModule,
    // SharedModule.forRoot(),
    // AgGridModule,//.withComponents([StiServicesCellEditor, LPSchemesCellEditor, LpSchemeButtonRenderer, FixConnectionsButtonRenderer]),
    // EffectsModule.forRoot([PartyEffects]),
    // we need this or the forms will not load, see https://github.com/ng-bootstrap/ng-bootstrap/issues/1220
    // NgbModule
  ],
  declarations: [
    // views
    BaseControlView,
    BaseFormView,
    BaseGridView,
    BaseUsecaseModelView,
    BaseViewView
  ],
  providers: [
    BaseClassesUsecaseModel
  ],
  exports: []
})
export class BaseClassesModule {
}
