import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {BaseClassesModule} from "./baseclasses.module";
import {BaseControlView} from "./views/BaseControlView";
import {BaseViewView} from "./views/BaseViewView";
import {BaseUsecaseModelView} from "./views/BaseUsecaseModelView";
import {BaseGridView} from "./views/BaseGridView";
import {BaseFormView} from "./views/BaseFormView";

const routes: Routes = [
  { path: 'baseControl', component: BaseControlView },
  { path: 'baseForm', component: BaseFormView },
  { path: 'baseGrid', component: BaseGridView },
  { path: 'baseUsecaseModel', component: BaseUsecaseModelView },
  { path: 'baseView', component: BaseViewView },
];

export const LocalRouting: ModuleWithProviders<BaseClassesModule> = RouterModule.forChild(routes);
