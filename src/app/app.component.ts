import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RutValidator } from "../../projects/ngx-rut/src/lib/rut.validator";
import { RutPipe } from "../../projects/ngx-rut/src/lib/rut.pipe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngx-rut-demo";
  reactiveForm: FormGroup;
  rut = "";

  constructor(
    private readonly fb: FormBuilder,
    private readonly rutPipe: RutPipe
  ) {
    this.reactiveForm = this.fb.group({
      rut: [
        this.rutPipe.transform("30972198"),
        [Validators.required, RutValidator]
      ]
    });
  }
}
