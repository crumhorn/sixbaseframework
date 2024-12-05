import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {InstallModule} from "./install.module";
import {InstallView} from "./views/InstallView";
import {ConfigView} from "./views/ConfigView";
import {ConfigGridView} from "./views/ConfigGridView";

const routes: Routes = [
  { path: '', component: InstallView },
  { path: 'configuration', component: ConfigView },
  { path: 'gridconfiguration', component: ConfigGridView }
];

export const LocalRouting: ModuleWithProviders<InstallModule> = RouterModule.forChild(routes);
