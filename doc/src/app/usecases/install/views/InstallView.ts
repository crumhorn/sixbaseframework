import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'InstallView',
  templateUrl: './InstallView.html',
  styleUrls: ['./InstallView.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public latestVersion = "1.0.20";
  public releaseDate = "22/11/2024";

  public angJsonCode = `"styles": [
   "node_modules/primeicons/primeicons.css",
   "node_modules/primeng/resources/primeng.min.css",
   "node_modules/@ag-grid-community/styles/ag-grid.css",
   "node_modules/@ag-grid-community/styles/ag-theme-alpine.css",
   "node_modules/@ag-grid-community/styles/ag-theme-balham.css"
],
"scripts": [
   "node_modules/jquery/dist/jquery.min.js"
],
`;

  public agGridDeps = ` "@ag-grid-community/angular": "32.3.3",
"@ag-grid-community/client-side-row-model": "32.3.3",
"@ag-grid-community/csv-export": "32.3.3",
"@ag-grid-community/styles": "32.3.3",
"@ag-grid-enterprise/clipboard": "32.3.3",
"@ag-grid-enterprise/column-tool-panel": "32.3.3",
"@ag-grid-enterprise/core": "32.3.3",
"@ag-grid-enterprise/excel-export": "32.3.3",
"@ag-grid-enterprise/filter-tool-panel": "32.3.3",
"@ag-grid-enterprise/master-detail": "32.3.3",
"@ag-grid-enterprise/menu": "32.3.3",
"@ag-grid-enterprise/range-selection": "32.3.3",
"@ag-grid-enterprise/rich-select": "32.3.3",
"@ag-grid-enterprise/set-filter": "32.3.3",
"@ag-grid-enterprise/side-bar": "32.3.3",
"@ag-grid-enterprise/status-bar": "32.3.3"`;

  public packageDepCode = `"dependencies": {
    "@angular/animations": "18.2.2",
    "@angular/common": "18.2.2",
    "@angular/compiler": "18.2.2",
    "@angular/core": "18.2.2",
    "@angular/forms": "18.2.2",
    "@angular/platform-browser": "18.2.2",
    "@angular/platform-browser-dynamic": "18.2.2",
    "@angular/router": "18.2.2",
    "@ng-bootstrap/ng-bootstrap": "17.0.1",
    "@popperjs/core": "2.11.7",
    "@six-group/base-angular-framework": "^${this.latestVersion}",
    "big-integer": "1.6.51",
    "bootstrap": "5.3.3",
    "flatpickr": "4.6.13",
    "jquery": "3.6.1",
    "luxon": "3.5.0",
    "node": "21.2.0",
    "primeng": "17.18.9",
    "sweetalert2": "11.6.13",
    "tippy.js": "6.3.7"
}`;

  public depCode = `"dependencies" {
    "@six-group/base-angular-framework": "^${this.latestVersion}"
}`;
  constructor() {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {

  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }


}
