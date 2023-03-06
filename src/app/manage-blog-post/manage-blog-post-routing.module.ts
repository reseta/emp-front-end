import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBlogPostComponent } from './manage-blog-post.component';

const routes: Routes = [
  {
    path: '',
    component: ManageBlogPostComponent,
    data: {
      title: 'Create new blog post',
      isImageRequired: true,
    },
  },
  {
    path: ':id',
    component: ManageBlogPostComponent,
    data: {
      title: 'Edit blog post',
      isImageRequired: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageBlogPostRoutingModule {}
