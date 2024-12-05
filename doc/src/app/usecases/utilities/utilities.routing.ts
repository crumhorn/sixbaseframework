import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {UtilitiesModule} from "./utilities.module";
import {DateUtilsView} from "./views/DateUtilsView";
import {ArrayUtilsView} from "./views/ArrayUtilsView";
import {JsUtilsView} from "./views/JsUtilsView";
import {NumberUtilsView} from "./views/NumberUtilsView";
import {PathUtilsView} from "./views/PathUtilsView";
import {StringUtilsView} from "./views/StringUtilsView";

const routes: Routes = [
  { path: 'dateUtils', component: DateUtilsView },
  { path: 'arrayUtils', component: ArrayUtilsView },
  { path: 'jsUtils', component: JsUtilsView },
  { path: 'numberUtils', component: NumberUtilsView },
  { path: 'pathUtils', component: PathUtilsView },
  { path: 'stringUtils', component: StringUtilsView }
];

export const LocalRouting: ModuleWithProviders<UtilitiesModule> = RouterModule.forChild(routes);
