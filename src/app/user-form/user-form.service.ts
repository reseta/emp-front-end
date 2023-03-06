import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class UserFormService {
  private form: FormGroup;

  createForm(addName = false, addConfirmPassword = false): FormGroup {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });

    if (addName) {
      this.form.addControl(
        'name',
        new FormControl(null, [Validators.required]),
      );
    }

    if (addConfirmPassword) {
      this.form.addControl(
        'confirmPassword',
        new FormControl(null, [
          Validators.required,
          this.confirmPasswordValidator(),
        ]),
      );
    }

    return this.form;
  }

  confirmPasswordValidator() {
    return (control: FormControl) => {
      if (!control.value) {
        return null;
      }

      if (control.value !== control.parent?.get('password')?.value) {
        return {
          notMatch: true,
        };
      }

      return null;
    };
  }
}
