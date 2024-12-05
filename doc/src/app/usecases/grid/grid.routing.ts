import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {TestGridModule} from "./grid.module";
import {GridView} from "./views/GridView";

const routes: Routes = [
  { path: '', component: GridView }
];

export const LocalRouting: ModuleWithProviders<TestGridModule> = RouterModule.forChild(routes);
