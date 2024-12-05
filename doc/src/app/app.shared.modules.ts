import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {CoreAgGridModule} from "@six-group/base-angular-framework/ag-grid";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {Highlight, HighlightAuto, HighlightModule,} from 'ngx-highlightjs';
import {HighlightLineNumbers} from 'ngx-highlightjs/line-numbers';
import {ButtonDirective, ButtonModule} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {TabViewModule} from "primeng/tabview";

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreAgGridModule,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,
    ButtonModule,
    ButtonDirective,
    Ripple,
    MenubarModule,
    MenuModule,
    BadgeModule,
    HighlightModule,
    TabViewModule,
    // https://stackoverflow.com/questions/41900872/where-to-import-export-a-module-using-forroot
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,
    ButtonModule,
    ButtonDirective,
    Ripple,
    MenubarModule,
    MenuModule,
    BadgeModule,
    HighlightModule,
    TabViewModule,

    CoreAgGridModule.forChild(), // https://stackoverflow.com/questions/41900872/where-to-import-export-a-module-using-forroot
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        // ThemeManager,
        // RootMenuService,
        // BreadcrumbService
      ]
    }
  }
}

