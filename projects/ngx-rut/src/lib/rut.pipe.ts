import { Pipe, PipeTransform } from "@angular/core";
import { rutFormat, rutClean } from "rut-helpers";

@Pipe({
  name: "rut"
})
export class RutPipe implements PipeTransform {
  public transform(value: string, clean = false): string {
    if (clean) {
      return rutClean(value);
    }
    return rutFormat(value);
  }
}
