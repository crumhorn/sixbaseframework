import {BaseUsecaseModel, ErrorHelper} from "@six-group/base-angular-framework/core";
import {Injectable} from "@angular/core";

@Injectable()
export class InstallUsecaseModel extends BaseUsecaseModel {

  constructor(private errorHelper: ErrorHelper) {
    super();
  }

  destroy(): void {
  }

  handleInitializionError(err: any): void {
    this.errorHelper.displayError(err);
  }

  hookObservables(): void {
  }


}
