import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, DialogModes, ErrorHelper} from "@six-group/base-angular-framework/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SampleForm} from "../forms/SampleForm";

@Component({
  selector: 'ModalUtilsView',
  templateUrl: './ModalUtilsView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalUtilsView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public rawDialogTypescriptCode: string = `@Component({
  selector: 'SampleForm',
  templateUrl: './SampleForm.html',
  styleUrl: './SampleForm.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleForm extends BaseForm {

  @Input() title: string = "Please set a title";

...
`;

  public openDialogCode: string = `this.modalUtils.openDialog<SampleForm>(this.modalService, SampleForm, (dialog) => {
    dialog.title = "Add a new entry";
}, DialogModes.ADD, "someCssClassForTheDialog someOtherClass", false).then((result) => {
  if (result) {
    console.log("Dialog closed with result", result);
  }
  else {
    console.log("Dialog was cancelled");
  }
}).catch(err => {
  this.errorHelper.displayError(err);
});`;

  public closeWithCancelCode: string = `this.activeModal.dismiss();`;
  public closeWithResultCode: string = `this.activeModal.close(resultObject);`;
  public injectModalCode: string = `constructor(public activeModal: NgbActiveModal) {`;

  public rawDialogCode: string = `<div class="modal-header">
  <h4 class="modal-title">{{ title }}</h4>
  <button type="button" class="close" aria-label="Close" data-dismiss="modal" (click)="activeModal.dismiss()">
    <span aria-hidden>&times;</span>
  </button>
</div>
<div class="modal-body">
  <div class="outerFormContainer">
    <!-- this is the content area -->
  </div>
</div>
<div class="modal-footer">
  <button pButton pRipple type="submit" label="Submit" class="p-button-success p-button-raised search-button" icon="pi pi-search" iconPos="left"></button>
  <button pButton pRipple type="button" label="Cancel" class="p-button-danger p-button-raised search-button" icon="pi pi-search" iconPos="left" (click)="activeModal.dismiss()"></button>
</div>
<!-- this section is optional, it just shows the dialogErrors from the BaseForm, assuming there are any -->
<div class="alert alert-danger" *ngIf="dialogErrors.length > 0" style="margin: 5px">
  <strong>ERROR!</strong>
  <br/>
  <div *ngFor="let error of dialogErrors">{{ error }}</div>
</div>
`;

  public reqCode: string = `"dependencies": {
  "@ng-bootstrap/ng-bootstrap": "14.0.1",
  "sweetalert2": "11.6.13",
  "jquery-ui": "1.14.1", // for resizable, you can also include it any other way and you may need to link it in angular.json
  ...
  `;

  public injectCode: string = `import {ModalUtils} from "@six-group/base-angular-framework/core";

constructor(private modalUtils: ModalUtils) {`;

  public tableData = [
    {name: "openDialog", description: "Opens an angular class (such as BaseForm) as its content"},
    {name: "showConfirmDialog", description: "Shows a confirmation dialog where a user has to decide between two options"},
    {name: "showDeleteDialog", description: "Shows a delete dialog intended to be used to warn before deletion of something"},
    {name: "showHtmlDialog", description: "Shows a HTML dialog where you can set custom HTML as content"},
    {name: "showSuccessDialog", description: "Shows a success dialog"},
    {name: "showSuccessDialogPromise", description: "Shows a success dialog that returns a Promise that fires when the dialog is closed"},
    {name: "showWarningDialog", description: "Shows a warning dialog"},
    {name: "showWarningDialogPromise", description: "Shows a warning dialog that returns a Promise that fires when the dialog is closed"},
    {name: "showTimerDialog", description: "Shows a timer dialog that will automatically closed after a specified number of milliseconds"},
    {name: "initStackedModalSupport", description: "(Automatic if using BaseForm) - Initializes stacked modal support where the dialog will collapse sideways behind it if multiple are opened"},
    {name: "removeStackedModalSupport", description: "(Automatic if using BaseForm) - Removes the above stacked modal support"},
    {name: "updateStack", description: "(Automatic if using BaseForm) - Updates the stack to check if multiple dialogs are open and if so, collapses them sideways"},
  ];

  constructor(private modalService: NgbModal, private errorHelper: ErrorHelper) {
    super();
  }

  public test(): void {
    this.modalUtils.showSuccessDialog("Success!", "You did it!");
  }

  public testDialog(): void {
    this.modalUtils.openDialog<SampleForm>(this.modalService, SampleForm, (dialog) => {
      dialog.title = "Sample Dialog Title";
    }, DialogModes.ADD, "", false).then((result) => {
      if (result) {
        console.log("Dialog closed with result", result);
      }
      else {
        console.log("Dialog was cancelled");
      }
    }).catch(err => {
      this.errorHelper.displayError(err);
    });
  }

  public testConfirm(): void {
    this.modalUtils.showConfirmDialog("Do you like coffee?", "Yes, love it!", "Coffee Survey", "question", true, "No thanks!").then((result) => {
      this.modalUtils.showTimerDialog("Coffee Survey", "You said you " + (result === true ? "love coffee, yum!" : "can't stand it, yuck!"), (result === true ? "success" : "error"), 1500);
    });
  }

  public delete(): void {
    this.modalUtils.showDeleteDialog("Are you sure you want to delete this item?", "Yes, delete it!", "Delete", "warning", true, "No, keep it!").then((result) => {
      this.modalUtils.showTimerDialog("File Deletion", "You said you " + (result === true ? "get rid of it!" : "keep it forever!"), (result === true ? "success" : "error"), 1500);
    });
  }

  public html(): void {
    this.modalUtils.showHtmlDialog("HTML Dialog", "<span style='color: orange'>Here is some <b>HTML</b> content!</span>", "info", "Get me out of here", "I'm a footer");
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
