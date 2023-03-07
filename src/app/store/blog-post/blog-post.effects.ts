import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, from, of, switchMap } from 'rxjs';
import { LoginResponse } from '../../login/login-response.model';
import { UserService } from '../../services/user.service';
import * as BlogPostActions from './blog-post.actions';
import * as CommonActions from '../common/common.actions';
import { addMessage } from '../toast/toast.actions';
import { ToastType } from 'src/app/toast/toast-type.enum';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
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
    private store: Store,
    private blogService: BlogService,
  ) {}
}
