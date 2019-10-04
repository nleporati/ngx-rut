import { Directive, EventEmitter, Output, HostListener } from "@angular/core";
import * as rutHelpers from "rut-helpers";

@Directive({
  selector: "[rutFormat]"
})
export class RutDirective {
  private readonly KEY_ENTER = "Enter";

  @Output()
  public rutChange: EventEmitter<string>;

  public constructor() {
    this.rutChange = new EventEmitter();
  }

  @HostListener("focus", ["$event"])
  public onFocus(ev: Event) {
    const htmlInputElement: HTMLInputElement = <HTMLInputElement>ev.target;
    htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
  }

  @HostListener("blur", ["$event"])
  public onBlur(ev: Event) {
    const htmlInputElement: HTMLInputElement = <HTMLInputElement>ev.target;
    htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || "";
  }

  @HostListener("input", ["$event"])
  public onChange(ev: Event) {
    const htmlInputElement: HTMLInputElement = <HTMLInputElement>ev.target;
    this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
  }

  @HostListener("keypress", ["$event"])
  public onKeyPress(event: KeyboardEvent) {
    const regex = new RegExp(`^[0-9]`);
    const k = new RegExp(`^[kK]`);
    return event.key !== this.KEY_ENTER
      ? regex.test(event.key) || k.test(event.key)
      : true;
  }
}
