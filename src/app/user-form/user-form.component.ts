import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormService } from './user-form.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Input() addName: boolean;
  @Input() addConfirmPassword: boolean;
  @Output() onValidForm: EventEmitter<User> = new EventEmitter();

  form: FormGroup;
  isSubmitted = false;

  constructor(private userService: UserFormService) {}

  ngOnInit(): void {
    this.form = this.userService.createForm(
        this.addName,
        this.addConfirmPassword,
    );

    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.onValidForm.emit(this.form.value);
  }
}
