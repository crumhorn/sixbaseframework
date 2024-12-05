import {BaseEntity} from "@six-group/base-angular-framework/core";

export class TestEntity implements BaseEntity<TestEntity> {

  getClassName(): string {
    return "TestEntity";
  }

  postProcess(): void {
  }

}
