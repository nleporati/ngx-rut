import { NgModule } from "@angular/core";
import { RutPipe } from "./rut.pipe";
import { RutValidator } from "./rut.validator";
import { FormsModule } from "@angular/forms";
import { RutDirective } from "./rut.directive";

@NgModule({
  declarations: [RutPipe, RutValidator, RutDirective],
  imports: [FormsModule],
  providers: [],
  exports: [RutPipe, RutValidator, RutDirective]
})
export class NgxRutModule {}
