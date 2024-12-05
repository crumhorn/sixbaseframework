import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, EntityMapper} from "@six-group/base-angular-framework/core";
import {TestEntity} from "../entities/TestEntity";
import {TestEntityCustomAnnotation} from "../entities/TestEntityCustomAnnotation";

@Component({
  selector: 'CoreView',
  templateUrl: './CoreView.html',
  styleUrls: ['./CoreView.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public testEntity: TestEntity | null = null;
  public testEntityWithAnnotation: TestEntityCustomAnnotation | null = null;

  constructor(private cd: ChangeDetectorRef, private entityMapper: EntityMapper) {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {

  }

  override ngOnInit() {
    super.ngOnInit();

    this.testEntity = new TestEntity();
    this.testEntityWithAnnotation = new TestEntityCustomAnnotation();
    this.entityMapper.mapEntityTreeFrom({}, this.testEntityWithAnnotation, TestEntityCustomAnnotation, true);
    this.cd.markForCheck();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }



}
