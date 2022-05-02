import { AbstractControl } from "@angular/forms";

export function alphabetsRequiredValidator(control: AbstractControl): {[key:string]: any} | null {
    const alphabetsRequired = /[^a-zA-Z]/.test(control.value);
    return alphabetsRequired ? {'alphabetsRequired': {value:control.value}} : null
}