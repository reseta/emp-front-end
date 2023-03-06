import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormService } from './user-form.service';

@NgModule({
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [UserFormService],
})
export class UserFormModule {}
