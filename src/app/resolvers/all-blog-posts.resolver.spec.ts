import { TestBed } from '@angular/core/testing';

import { AllBlogPostsResolver } from './all-blog-posts.resolver';

describe('AllBlogPostsResolver', () => {
  let resolver: AllBlogPostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllBlogPostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
