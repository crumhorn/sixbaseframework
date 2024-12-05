import {BaseUsecaseModel, ErrorHelper} from "@six-group/base-angular-framework/core";
import {Injectable} from "@angular/core";

@Injectable()
export class GridUsecaseModel extends BaseUsecaseModel {

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