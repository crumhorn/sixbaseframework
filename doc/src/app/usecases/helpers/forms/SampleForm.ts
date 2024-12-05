import {BaseForm} from "@six-group/base-angular-framework/core";
import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'SampleForm',
  templateUrl: './SampleForm.html',
  styleUrl: './SampleForm.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleForm extends BaseForm {

  @Input() title: string = "Please set a title";

  constructor(public activeModal: NgbActiveModal) {
    super(null);
  }

  onSubmit() {
    this.activeModal.close();
  }

  ngOnInit(): void {
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  public static extractBody(html: string): string {
    let left = html.indexOf('<body>');
    let innerHtml = html.substring(left + 6, html.length);
    let right = innerHtml.indexOf('</body>');
    innerHtml = innerHtml.substring(0, right);
    return innerHtml;
  }

  getFormGroup(): UntypedFormGroup {
    return null;
  }

  override ngOnDestroy() {
    this.modalUtils.updateStack();
  }
}
