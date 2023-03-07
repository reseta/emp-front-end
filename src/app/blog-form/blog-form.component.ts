import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BlogFormService } from './blog-form.service';
import { BlogPost } from './blog.model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  @Input() isImageRequired: boolean;
  @Input() blogPost: BlogPost;
  @Output() onValidForm: EventEmitter<FormData> = new EventEmitter();

  form: FormGroup;
  isSubmitted = false;
  selectedFile: any;

  constructor(private blogFormService: BlogFormService) {}

  ngOnInit(): void {
    this.form = this.blogFormService.createForm(this.isImageRequired);

    if (this.blogPost) {
      this.form.patchValue(this.blogPost);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event?.target?.files[0];
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('title', this.form.value.title);
    formData.append('content', this.form.value.content);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.onValidForm.emit(formData);
  }
}
