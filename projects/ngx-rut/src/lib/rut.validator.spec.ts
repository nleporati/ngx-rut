import { RutValidator, rutValidator } from "./rut.validator";
import {
  FormControl,
  FormsModule,
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { Component, ViewChild } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="rut" />
    </form>
  `,
  providers: [FormBuilder]
})
class TestComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      rut: ["", [Validators.required, rutValidator]]
    });
  }
}

describe("RutValidator", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, RutValidator],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormBuilder]
    });
  }));

  // function setup() {
  //   const fixture = TestBed.createComponent(TestComponent);
  //   const component = fixture.componentInstance;

  //   return { fixture, component };
  // }

  // it("return error RUT on input ", () => {
  //   const { fixture, component } = setup();
  //   const form = component.form;
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     console.log(form);
  //     expect(form.errors).toBeTruthy();
  //   });
  // });

  it("return RUT invalid error", () => {
    const control = new FormControl("192434651", rutValidator);
    expect(control.errors["invalidRut"]).toBeTruthy();
  });

  it("check a valid RUT", () => {
    const control = new FormControl("19.243.465-3", rutValidator);
    expect(control.errors).toBe(null);
  });
});
