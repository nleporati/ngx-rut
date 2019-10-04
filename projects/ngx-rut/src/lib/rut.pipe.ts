import { Pipe, PipeTransform } from "@angular/core";
import { rutFormat, rutClean } from "rut-helpers";

@Pipe({
  name: "rut"
})
export class RutPipe implements PipeTransform {
  public transform(value: string, format = true): string {
    if (!format) {
      return rutClean(value);
    }
    return rutFormat(value);
  }
}
