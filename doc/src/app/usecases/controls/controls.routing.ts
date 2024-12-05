import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ControlsModule} from "./controls.module";
import {InlineSearchView} from "./views/InlineSearchView";
import {PleaseWaitView} from "./views/PleaseWaitView";
import {ToolbarView} from "./views/ToolbarView";
import {SplitLayoutView} from "./views/SplitLayoutView";
import {SplitLayoutContainerView} from "./views/SplitLayoutContainerView";

const routes: Routes = [
  { path: 'inlinesearch', component: InlineSearchView },
  { path: 'splitlayout', component: SplitLayoutView },
  { path: 'splitlayoutcontainer', component: SplitLayoutContainerView },
  { path: 'toolbar', component: ToolbarView },
  { path: 'pleasewait', component: PleaseWaitView }
];

export const LocalRouting: ModuleWithProviders<ControlsModule> = RouterModule.forChild(routes);
