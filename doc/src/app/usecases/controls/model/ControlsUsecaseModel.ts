import {BaseUsecaseModel} from "@six-group/base-angular-framework/core";
import {Injectable} from "@angular/core";

@Injectable()
export class ControlsUsecaseModel extends BaseUsecaseModel {

  destroy(): void {
  }

  handleInitializionError(err: any): void {
    console.error(err);
  }

  hookObservables(): void {
  }


}