import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HelpersModule} from "./helpers.module";
import {ErrorHelperView} from "./views/ErrorHelperView";
import {ModalUtilsView} from "./views/ModalUtilsView";
import {ColumnHelperView} from "./views/ColumnHelperView";
import {GridHelperView} from "./views/GridHelperView";
import {ContextMenuHelperView} from "./views/ContextMenuHelperView";
import {ToolbarHelperView} from "./views/ToolbarHelperView";
import {RegexHelperView} from "./views/RegexHelperView";
import {GridToolbarHelperView} from "./views/GridToolbarHelperView";

const routes: Routes = [
   { path: 'errorHelper', component: ErrorHelperView },
   { path: 'modalUtils', component: ModalUtilsView },
   { path: 'columnHelper', component: ColumnHelperView },
   { path: 'gridHelper', component: GridHelperView },
   { path: 'contextMenuHelper', component: ContextMenuHelperView },
   { path: 'toolbarHelper', component: ToolbarHelperView },
   { path: 'gridToolbarHelper', component: GridToolbarHelperView },
   { path: 'regexHelper', component: RegexHelperView }
];

export const LocalRouting: ModuleWithProviders<HelpersModule> = RouterModule.forChild(routes);
