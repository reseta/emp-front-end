import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { BlogPost } from '../blog-form/blog.model';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root',
})
export class BlogPostResolver implements Resolve<BlogPost> {
  constructor(private blogService: BlogService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlogPost> {
    return this.blogService.findOne(route.params.id).pipe(
      catchError(() => {
        this.router.navigate(['/']);
        return EMPTY;
      }),
    );
  }
}
