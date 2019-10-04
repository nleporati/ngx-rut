Angular 7 RUT
=============

Updated for Angular 7 with a cleaner project structure. It does not test yet in other Angular versions.

Angular library with several components to handle [Chilean RUT](https://en.wikipedia.org/wiki/National_identification_number#Chile) validation, cleaning and formatting.

## Installation

```bash
yarn add ngx-rut
# or
npm install ngx-rut --save
```

## Usage

### Set-up:

The easiest way to use this library is to import NgxRut in your app's main module.

```typescript
import { NgModule } from '@angular/core';
import { NgxRut } from 'ngx-rut';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  ...
  imports: [
    BrowserModule,
    NgxRut
  ],
})
class DemoAppModule { }
```

Run dev server in base project for a fully working example.

### Using it:

ngx-rut exposes multiple features that can be used to perform input validation and formatting. Probably you want to use one of the following:

- `RutValidatorDirective`: Exposes the `rutValidate` directive (to attach to models or inputs) and the RutValidator class to be used as `Validator` on reactive forms.
- `RutPipe`: Exposes the `RutPipe` pipe to format or clean rut numbers on templates.
- `RutDirective`: Exposes the `rutFormat` directive to format RUT inputs.

#### RutValidator

##### Reactive forms

```typescript
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidator } from 'ngx-rut';
export class DemoAppComponent {
  constructor (fb: FormBuilder) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, RutValidator]]
    });
  }
}

```

##### Template Form
```html
<input [(ngModel)]="user.rut" name="rut" rutValidate required>
```

#### RutPipe

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
{{ '3.097.219-8' | rut:false }}
<!-- 30972198 -->
```

#### rutFormat (Directive)
```html
<input [(ngModel)]="user.rut" name="rut" rutFormat required>
<!--
(on blur)
3.097.219-8

(on focus)
30972198
-->
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Credits

Based on [platanus ng2-rut](https://github.com/platanus/ng2-rut) library

## License

NgxRut is free software and may be redistributed under the terms specified in the LICENSE file.
