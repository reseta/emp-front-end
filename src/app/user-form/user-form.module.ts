import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user-form.service';

@NgModule({
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [UserService],
})
export class UserFormModule {}
