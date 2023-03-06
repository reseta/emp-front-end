import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class BlogFormService {
  private form: FormGroup;

  createForm(isImageRequired: boolean): FormGroup {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      image: new FormControl(
        null,
        isImageRequired ? Validators.required : null,
      ),
    });

    return this.form;
  }
}
