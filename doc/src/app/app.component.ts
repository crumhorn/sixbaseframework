import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {CustomAnnotation, getCustomAnnotation} from "./usecases/core/entities/CustomAnnotation";
import {DecoratorRegistry, ErrorHelper} from "@six-group/base-angular-framework/core";
import {GridInlineSearch, InlineSearchableGridData, InlineSearchService} from "@six-group/base-angular-framework/ag-grid";
import {MenuItem} from "primeng/api";

// TODO: Document GridSettings

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SIX Angular Base Framework Test Project';

  @ViewChild('gridInlineSearch', {read: GridInlineSearch}) gridInlineSearch?: GridInlineSearch;

  sideMenuItems: MenuItem[] | undefined;
  menuItems: MenuItem[] | undefined;

  constructor(private router: Router, private zone: NgZone, private decoratorRegistry: DecoratorRegistry, private inlineSearchService: InlineSearchService, private errorHelper: ErrorHelper) {
  }

  ngOnInit() {
    this.sideMenuItems = [
      {
        label: 'Getting Started',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Installation',
            icon: 'pi pi-bolt',
          }
        ]
      }
    ];
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => { this.changeRoute('/'); }
      },
      {
        label: 'Installation',
        icon: 'pi pi-bolt',
        command: () => { this.changeRoute('/install'); }
      },
      {
        label: 'Core',
        icon: 'pi pi-cog',
        command: () => { this.changeRoute('/core'); }
      },
      {
        label: 'Entity Mapping',
        icon: 'pi pi-box'
      },
      {
        label: 'Base',
        icon: 'pi pi-barcode'
      },
      {
        label: 'Controls',
        icon: 'pi pi-image'
      },
      {
        label: 'AgGrid',
        icon: 'pi pi-table',
        command: () => { this.changeRoute('/grid'); }
      },
      {
        label: 'Other',
        icon: 'pi pi-tags'
      },
    ];

    this.inlineSearchService.showInlineGridSearch.subscribe((data: any) => {
      if (this.gridInlineSearch) {
        if (data instanceof InlineSearchableGridData) {
          this.gridInlineSearch.showFromNew(data as InlineSearchableGridData);
        } else {
          this.gridInlineSearch.show(data.grid, data.event, data.top);
        }
      }
    });

    this.inlineSearchService.showInlineSearchFromGridId.subscribe((id: any) => {
      try {
        if (this.gridInlineSearch) {
          this.gridInlineSearch.showFromId(id);
        }
      } catch (err) {
        this.errorHelper.displayError(err);
      }
    });

    this.inlineSearchService.clearInlineSearchFromGridId.subscribe((id: any) => {
      try {
        if (this.gridInlineSearch) {
          this.gridInlineSearch.clearFromId(id);
        }
      } catch (err) {
        this.errorHelper.displayError(err);
      }
    });

    try {
      this.decoratorRegistry.register(CustomAnnotation, getCustomAnnotation, (prop, val, params) => {
        console.log("Got here");
        if (params) {
          return params;
        }
        return "It worked!";
      });
    } catch (err) {
      console.error(err);
    }
  }

  changeRoute(route: string): void {
    setTimeout(() => {
      this.zone.run(() => {
        this.router.navigate([route]).then(() => {
          //this.cd.markForCheck();
        }).catch(err => {
          console.error(err);
        });
      });
    });

  }
}
