import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxRutModule } from "../../projects/ngx-rut/src/public_api";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RutPipe } from "../../projects/ngx-rut/src/lib/rut.pipe";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxRutModule],
  providers: [RutPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
