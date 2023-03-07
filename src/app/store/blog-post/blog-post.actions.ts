import { createAction, props } from '@ngrx/store';
import { BlogPost } from '../../blog-form/blog.model';

export const createBlogPost = createAction(
  '[Post] New blog post',
  props<{ post: FormData }>(),
);

export const updateBlogPost = createAction(
  '[Post] Update blog post',
  props<{ post: FormData, id: number }>(),
);

export const deleteBlogPost = createAction(
  '[Post] Delete blog post',
  props<{ id: number }>(),
);
