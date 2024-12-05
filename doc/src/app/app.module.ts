import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IBaseFrameworkSettings, IEntityClassHandler, SixCoreModule} from '@six-group/base-angular-framework/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ClientRoutes} from "./app.routes";
import {DateUtils} from "@six-group/base-angular-framework/utils";
import {SharedModule} from "./app.shared.modules";
import {CoreAgGridModule} from "@six-group/base-angular-framework/ag-grid";
import {HIGHLIGHT_OPTIONS} from "ngx-highlightjs";
import {HighlightJSOptions} from "ngx-highlightjs/lib/highlight.model";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMenuComponent} from "./controls/menu/app.menu.component";
import {FileResourcesView} from "./views/FileResourcesView";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FileResourcesView
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClientRoutes,
    CoreAgGridModule.forRoot(), // https://stackoverflow.com/questions/41900872/where-to-import-export-a-module-using-forroot
    SharedModule.forRoot(),
    SixCoreModule.forRoot(<IEntityClassHandler>{
      getClassForString(clazzName: string) {
        return null;
      }
    }, <IBaseFrameworkSettings>{
      displayDateFormat: DateUtils.YYYY_MM_DD
    }),
    AppMenuComponent
  ],
  providers: [
    {provide: 'WEB_FONTS', useValue: true},
    {provide: APP_BASE_HREF, useValue: '/sixbaseframework' },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightJSOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        themePath: './assets/highlight/stackoverflow-dark.min.css',
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          json: () => import('highlight.js/lib/languages/json'),
          html: () => import('highlight.js/lib/languages/vbscript-html'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          dos: () => import('highlight.js/lib/languages/dos'),
        },
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
