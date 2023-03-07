import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BlogPostEffects } from './blog-post.effects';

describe('BlogPostEffects', () => {
  let actions$: Observable<any>;
  let effects: BlogPostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogPostEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BlogPostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
