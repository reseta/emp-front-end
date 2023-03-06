import { TestBed } from '@angular/core/testing';

import { BlogFormService } from './blog-form.service';

describe('BlogFormService', () => {
  let service: BlogFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
