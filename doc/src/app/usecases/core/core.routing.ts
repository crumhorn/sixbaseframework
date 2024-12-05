import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {TestCoreModule} from "./core.module";
import {CoreView} from "./views/CoreView";

const routes: Routes = [
  { path: '', component: CoreView }
];

export const LocalRouting: ModuleWithProviders<TestCoreModule> = RouterModule.forChild(routes);
