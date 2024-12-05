import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {FileResourcesView} from "./views/FileResourcesView";
import {HelpView} from "./views/HelpView";
import {Landing} from "./landing";

// see: http://stackoverflow.com/questions/34731869/wait-for-angular-2-to-load-resolve-model-before-rendering-view-template
export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  {
    path: 'install',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/install/install.module').then(m => m.InstallModule),
    data: {pageName: "Install"}
  },
  {
    path: 'core',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/core/core.module').then(m => m.TestCoreModule),
    data: {pageName: "Core"}
  },
  {
    path: 'grid',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/grid/grid.module').then(m => m.TestGridModule),
    data: {pageName: "Grid"}
  },
  {
    path: 'entityMapping',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/entitymapping/entitymapping.module').then(m => m.EntityMappingModule),
    data: {pageName: "Entity Mapping"}
  },
  {
    path: 'baseClasses',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/baseclasses/baseclasses.module').then(m => m.BaseClassesModule),
    data: {pageName: "Entity Mapping"}
  },
  {
    path: 'controls',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/controls/controls.module').then(m => m.ControlsModule),
    data: {pageName: "Controls"}
  },
  {
    path: 'helpers',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/helpers/helpers.module').then(m => m.HelpersModule),
    data: {pageName: "Helpers"}
  },
  {
    path: 'utilities',
    canActivate: [],
    canDeactivate: [],
    loadChildren: () => import('../app/usecases/utilities/utilities.module').then(m => m.UtilitiesModule),
    data: {pageName: "Utilities"}
  },
  {
    path: 'fileResources',
    component: FileResourcesView
  },
  {
    path: 'howToGetHelp',
    component: HelpView
  },
  // anything unknown, redirect to main page
  {
    path: '*',
    component: AppComponent,
  }
];

export const ClientRoutes = RouterModule.forRoot(routes, {useHash: true, paramsInheritanceStrategy: "always"});
