import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './blog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogFormService } from './blog-form.service';

@NgModule({
  declarations: [BlogFormComponent],
  exports: [BlogFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [BlogFormService],
})
export class BlogFormModule {}
