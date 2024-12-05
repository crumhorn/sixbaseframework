import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {LocalRouting} from "./entitymapping.routing";
import {EntityMappingUsecaseModel} from "./model/EntityMappingUsecaseModel";
import {SharedModule} from "../../app.shared.modules";
import {AgGridModule} from "@ag-grid-community/angular";
import {EntityMappingView} from "./views/EntityMappingView";
import {AnnotationsView} from "./views/AnnotationsView";
import {CustomAnnotationsView} from "./views/CustomAnnotationsView";
import {ReverseMappingView} from "./views/ReverseMappingView";


@NgModule({
  imports: [
    CommonModule,
    LocalRouting,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    // views
    EntityMappingView,
    AnnotationsView,
    CustomAnnotationsView,
    ReverseMappingView
  ],
  providers: [
    EntityMappingUsecaseModel
  ],
  exports: []
})
export class EntityMappingModule {
}
