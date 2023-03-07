import { TestBed } from '@angular/core/testing';

import { OwnBlogPostsResolver } from './own-blog-posts.resolver';

describe('OwnBlogPostsResolver', () => {
  let resolver: OwnBlogPostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OwnBlogPostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
