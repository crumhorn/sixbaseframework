import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'BaseFormView',
  template: `<div class="documentParent">
    <div class="document">
      <h1>BaseForm</h1>
      <p class="description">BaseForm is an abstract class that is intended to be the parent of any class that represents an Angular reactive form (singular).</p>
      <p class="description">Usage:</p>
      <pre><code [highlight]="'public class MyForm extends BaseForm {'" language="ts"></code></pre>

      <h2>General Features</h2>
      <ul>
        <li><p class="description">Keeps track of what state the form is in (Add, Edit, Delete, Copy, etc) which helps when initializing fields that may be read only or disabled depending on what "edit mode" the form is in. This is done using the <i>DialogModes</i> ENUM class.It has a whole bunch of utility methods for dealing with angular validation messages.</p></li>
        <li><p class="description">Shows "loading" blockers with simple calls to <i>showLoading()</i> and <i>hideLoading()</i></p></li>
        <li><p class="description">Handles "wait while data is being submitted" with <i>beginSubmit()</i> and <i>endSubmit()</i> which will automatically block and unblock the form. There's also <i>handleSubmitError()</i> which will take an error message, cancel the form submit and display the error to the user.</p></li>
        <li><p class="description">Automatically hooks into <i>DialogUtilities</i> class for ensuring that multiple sub-dialogs will "fold" the parents behind. Screenshot of this:</p>
        <img src="./assets/screenshots/folding-dialogs.png" style="width: 600px">
        </li>
      </ul>

      <h2>Validation message setup</h2>
      <p class="description">The base class contains a map for holding all your validation messages, which reduces the amount of HTML code you have to write and keeps all your validation messages in one place.</p>
      <p class="description">To use this you simply override the property called <i>validationMessages</i>: (WARNING: This may change to become a method in a future release)</p>
      <pre><code [highlight]="validationMessagesCode"
                 language="ts"></code></pre>
      <p class="description">In the above case, we use <i>$fieldName</i> as a replaceable variable name. This is so that we can customize what is printed out for that text. So to ensure that the final message ends up correctly, we set up an override as in the example below. This example de-camel-cases the name of the field name and replaces the <i>$fieldName</i> with that text.</p>
      <pre><code [highlight]="errorMessagesCode"
                 language="ts"></code></pre>
      <p class="description">In your HTML code, you can make the check for an error very simple. Here are three examples, one for a required field, one for a pattern message, and one for the "custom" error code of "minlength".</p>
      <pre><code [highlight]="htmlCode"
                 language="html"></code></pre>

      <h2>Various methods and what they do. Please consult the API for more details on each one.</h2>
      <table class="doc-table">
        <thead>
        <tr>
          <th> name</th>
          <th> example</th>
          <th> description</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of tableData">
          <td><span class="doc-option-name" id="api.menu.props.model">{{ item.name }}<a class="doc-option-link"><i class="pi pi-link"></i></a></span></td>
          <td><span class="doc-option-type"><pre><code [highlight]="item.example" language="ts"></code></pre></span></td>
          <td><span id="api.menu.props.description" class="doc-option-description">{{ item.description }}</span></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseFormView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  htmlCode = `<p-message *ngIf="hasRequiredErr()" severity="danger" [text]="getRequiredMsg()"></p-message>
<p-message *ngIf="hasPatternErr()" severity="danger" [text]="getPatternMsg()"></p-message>
<p-message *ngIf="hasErr('minlength')" severity="danger" [text]="getErrMsg('minlength')"></p-message>`;

  errorMessagesCode = `override errorMessageHandler(fieldName: string, msg: string): string {
    if (msg.includes("$fieldName")) {
      msg = msg.replaceAll('\\$fieldName', fieldName);
      msg = StringUtils.unCamelCase(msg);
    }
    return msg;
}`;

  validationMessagesCode = `override validationMessages = {
    isin: {"required": "ISIN is Required", "pattern": 'ISIN is not in a valid format'},
    currency: {"required": "$fieldName is Required", "minlength": "Minimum length is 3 Characters"}
}`;

  public tableData = [
    { name: "getDialogMode", example: "if (super.getDialogMode() === DialogModes.COPY) {", description: "Fetches the DialogModes Enum value that the dialog was opened with" },
    { name: "isAddMode", example: "if (super.isAddMode()) {", description: "Checks whether the dialog was opened with DialogModes.ADD" },
    { name: "isEditMode", example: "if (super.isAddMode()) {", description: "Checks whether the dialog was opened with DialogModes.EDIT" },
    { name: "isCopyMode", example: "if (super.isAddMode()) {", description: "Checks whether the dialog was opened with DialogModes.COPY" },
    { name: "trackSubscription", example: "super.trackSubscription(sub)", description: "Tells the dialog a subscription should automatically be unsubscribed when the dialog is disposed" },
    { name: "handleSubmitError", example: "super.handleSubmitError(errorMsg, dialogTitle)", description: "Tells the dialog that it should show an error dialog explaining that something went wrong in the submit" },
    { name: "resetSubmitState", example: "super.resetSubmitState()", description: "Tells the dialog there are no submit errors any more" },
    { name: "isRequiredField", example: "super.isRequiredField(fieldId)", description: "Checks if a field is currently flagged as required" },
    { name: "hasErr", example: "super.hasErr(fieldId)", description: "Checks if a field has an error" },
    { name: "hasRequiredErr", example: "super.hasRequiredErr(fieldId)", description: "Checks if a field has an error that it is required" },
    { name: "getRequiredMsg", example: "super.getRequiredMsg(fieldId)", description: "Gets the required error message for a field" },
    { name: "hasPatternErr", example: "super.hasPatternErr(fieldId)", description: "Checks if a field has an error that it it's pattern doesn't match" },
    { name: "getErrMsg", example: "super.getErrMsg(fieldId)", description: "Gets the error message for a field" },
    { name: "getPatternMsg", example: "super.getPatternMsg(fieldId)", description: "Gets the pattern error message for a field" },
    { name: "showLoading", example: "super.showLoading()", description: "Shows the 'Loading' blocker" },
    { name: "hideLoading", example: "super.hideLoading()", description: "Hides the 'Loading' blocker" },
    { name: "setFieldFocus", example: "super.setFieldFocus(fieldAdd, fieldNotAdd)", description: "Sets the focus onto a field, using the first parameter if it's in ADD mode and the second if it is not in ADD mode" },
    { name: "getModifiedData", example: "super.getModifiedData()", description: "Returns only the data that was modified in the form" },
    { name: "isFormDirty", example: "BaseForm.isFormDirty(form)", description: "Checks whether a form is dirty" },
    { name: "beginSubmit", example: "super.beginSubmit()", description: "Tells the form a submit process has started, and will thus clear form states and show the blocker" },
    { name: "endSubmit", example: "super.endSubmit()", description: "Tells the form the submit has ended, and will thus clear the form state and hide the blocker" },
    { name: "flagAsComboField", example: "super.flagAsComboField(id)", description: "Tells the form that certain fields are dropdowns/combo boxes, which will ensure they are not validated until touched" },
    { name: "flagAsComboFields", example: "super.flagAsComboField(...ids)", description: "Tells the form that certain fields are dropdowns/combo boxes, which will ensure they are not validated until touched" },
    { name: "ensureDateFromAndDateToFields", example: "super.ensureDateFromAndDateToFields(field1, field2)", description: "Ensures two dates are OK as far as 'from' and 'to' goes date-wise and will otherwise flag errors for those fields" },
    { name: "errorMessageHandler", example: "override errorMessageHandler(msg)", description: "Lets you handle error messages rather than going through the framework" },
  ];


  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {
  }

  override ngOnInit() {
    super.ngOnInit();
    this.cd.markForCheck();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }



}
