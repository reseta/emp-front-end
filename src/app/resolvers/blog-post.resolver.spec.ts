import { TestBed } from '@angular/core/testing';

import { BlogPostResolver } from './blog-post.resolver';

describe('BlogPostResolver', () => {
  let resolver: BlogPostResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogPostResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
