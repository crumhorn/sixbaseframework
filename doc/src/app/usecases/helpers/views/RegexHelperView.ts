import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView, ErrorHelper} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'RegexHelperView',
  templateUrl: './RegexHelperView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegexHelperView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  usageCode = `/**
 * Contains pre-created regular expressions for common checks of things (especially in Angular forms)
 */
export class RegexHelper {
  /**
   * Can contain digits or be empty
   */
  public static readonly DigitsOrBlankRegex = new RegExp(/^(\\s*|\\d+)$/);
  /**
   * Can contain digits, but not a zero, or be empty
   */
  public static readonly DigitsButNotZeroOrBlankRegex = new RegExp(/^(\\s*|[1-9]\\d*)$/);
  /**
   * Must contain digits, can't be empty
   */
  public static readonly DigitsButNotBlankRegex = new RegExp(/^(\\s*|[0-9]\\d*)$/);
  /**
   * Can contain digits, or be zero, or be empty
   */
  public static readonly DigitsIncludingZeroOrBlankRegex = new RegExp(/^(\\s*|[0-9]\\d*)$/);
  /**
   * Can be floating point or empty
   */
  public static readonly FloatingDigitsOrBlankRegex = new RegExp(/^(\\s*|(\\d*\\.)?\\d+)$/);
  /**
   * HH:MM:SS or HH:MM
   */
  public static readonly TimeSpanRegex = new RegExp(/^(\\d{2}:\\d{2}:\\d{2}|\\d{2}:\\d{2})$/);
  /**
   * Email address or empty - based on http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
   */
  public static readonly EmailOrBlankRegex = new RegExp(/^(\\s*|(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,}))$/i);
  /**
   * IP Address
   */
  public static readonly IpAddress = new RegExp(/^(([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|0\\.0\\.0\\.0)$/);
  /**
   * MAC Address
   */
  public static readonly MacAddress = new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);
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
