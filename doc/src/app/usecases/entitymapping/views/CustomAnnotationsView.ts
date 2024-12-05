import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'CustomAnnotationsView',
  templateUrl: './CustomAnnotationsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomAnnotationsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public constuctorCode = `import {DecoratorRegistry} from "@six-group/base-angular-framework/core";

...

constructor(private decoratorRegistry: DecoratorRegistry) {`

  public sampleUsageCode = `import {BaseEntity} from "@six-group/base-angular-framework/core";
import {Test} from "./TestDecorator";

export class TestClass implements BaseEntity<TestClass> {

  @Test()
  prop: string = null;

  getClassName(): string {
    return "TestClass";
  }

  postProcess() {
  }
}`;

  public sampleRegistrationCode = `import {getTest, Test} from "./test/data/decorators/TestDecorator";

...

ngOnInit() {
    try {
      this.decoratorRegistry.register(Test, getTest, (prop, val, params) => {
        if (params) {
          return params;
        }
        return "It worked!";
      });
    } catch (err) {
      console.error(err);
    }
}`;

  public sampleAnnotationCode = `import "reflect-metadata";

const decoratorMetadataKey = Symbol("Test");

export function Test(formatString: string = null) {
  return Reflect.metadata(decoratorMetadataKey, formatString);
}

export function getTest(target: any, propertyKey: string) {
  return Reflect.getMetadata(decoratorMetadataKey, target, propertyKey);
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
