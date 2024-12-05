import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {EntityMappingView} from "./views/EntityMappingView";
import {EntityMappingModule} from "./entitymapping.module";
import {AnnotationsView} from "./views/AnnotationsView";
import {CustomAnnotationsView} from "./views/CustomAnnotationsView";
import {ReverseMappingView} from "./views/ReverseMappingView";

const routes: Routes = [
  { path: '', component: EntityMappingView },
  { path: 'annotations', component: AnnotationsView },
  { path: 'customAnnotations', component: CustomAnnotationsView },
  { path: 'reverseMapping', component: ReverseMappingView },
];

export const LocalRouting: ModuleWithProviders<EntityMappingModule> = RouterModule.forChild(routes);
