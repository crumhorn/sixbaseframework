import {BaseEntity} from "@six-group/base-angular-framework/core";
import {CustomAnnotation} from "./CustomAnnotation";

export class TestEntityCustomAnnotation implements BaseEntity<TestEntityCustomAnnotation> {

  @CustomAnnotation()
  public name: string | null = null;

  getClassName(): string {
    return "TestEntityCustomAnnotation";
  }

  postProcess(): void {
  }

}
