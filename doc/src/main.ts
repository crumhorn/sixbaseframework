import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {LicenseManager} from "@ag-grid-enterprise/core";
import {provideHighlightOptions} from "ngx-highlightjs";

LicenseManager.setLicenseKey("FlexIT_2Devs_Expires_10-Dec-2022_NTUyODcxMzg1Nzk1Mg==fcb5389a5b3f367eeae7b78eabf5fa46");

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
    }),
  ]
}).catch(err => console.error(err));
