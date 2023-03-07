import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../blog-form/blog.model';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root',
})
export class AllBlogPostsResolver implements Resolve<BlogPost[]> {
  constructor(private blogService: BlogService) {}

  resolve(): Observable<BlogPost[]> {
    return this.blogService.findAll();
  }
}
