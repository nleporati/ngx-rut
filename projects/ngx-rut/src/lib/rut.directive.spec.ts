import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TestBed, ComponentFixture } from "@angular/core/testing";

import { RutDirective } from "./rut.directive";
// import { newEvent } from '../testing';

@Component({
  template: `
    <input formatRut />
  `
})
class TestComponent {}

describe("RutDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let input: DebugElement;
  let component: Component;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [RutDirective, TestComponent]
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    input = fixture.debugElement.query(By.css("input"));
  });

  it("should format on blur", () => {
    fixture.detectChanges();
    input.nativeElement.value = "7618285K";
    input.nativeElement.dispatchEvent(new Event("blur"));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      console.log(input.nativeElement.value);
      expect(input.nativeElement.value).toBe("7.618.285-K");
    });
  });

  it("should clear formatting on focus", () => {
    const nativeInput: HTMLInputElement = input.nativeElement;
    nativeInput.value = "7.618.285-K";
    nativeInput.dispatchEvent(new Event("focus"));
    fixture.detectChanges();
    expect(nativeInput.value).toBe("7618285K");
  });
});
