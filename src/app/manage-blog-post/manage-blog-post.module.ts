import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBlogPostRoutingModule } from './manage-blog-post-routing.module';
import { ManageBlogPostComponent } from './manage-blog-post.component';
import { BlogFormModule } from '../blog-form/blog-form.module';

@NgModule({
  declarations: [ManageBlogPostComponent],
  imports: [CommonModule, ManageBlogPostRoutingModule, BlogFormModule],
})
export class ManageBlogPostModule { }
