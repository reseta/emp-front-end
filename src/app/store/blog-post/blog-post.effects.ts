import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import * as BlogPostActions from './blog-post.actions';
import * as CommonActions from '../common/common.actions';
import { BlogService } from 'src/app/services/blog.service';

@Injectable()
export class BlogPostEffects {
  createBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPostActions.createBlogPost),
      switchMap((action) =>
        this.blogService.create(action.post).pipe(
          switchMap((response: any) =>
            of(
              CommonActions.redirectAction({
                commands: ['/view', response.id],
              }),
            ),
          ),
        ),
      ),
    ),
  );

  updateBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPostActions.updateBlogPost),
      switchMap((action) =>
        this.blogService.update(action.id, action.post).pipe(
          switchMap((response: any) =>
            of(
              CommonActions.redirectAction({
                commands: ['/view', response.id],
              }),
            ),
          ),
        ),
      ),
    ),
  );

  deleteBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPostActions.deleteBlogPost),
      switchMap((action) =>
        this.blogService.delete(action.id).pipe(
          switchMap((response: any) =>
            of(
              CommonActions.redirectAction({
                commands: ['/browse'],
              }),
            ),
          ),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private blogService: BlogService,
  ) {}
}
