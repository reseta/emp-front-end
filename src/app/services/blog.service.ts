import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../blog-form/blog.model';
import { environment } from 'src/environments/environment';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private path = 'post';

  constructor(private http: HttpClient) {}

  create(blogPost: FormData) {
    return this.http.post(`${environment.API_URL}/${this.path}`, blogPost);
  }

  update(id: number, blogPost: FormData) {
    return this.http.post(`${environment.API_URL}/${this.path}/${id}`, blogPost);
  }

  delete(id: number) {
    return this.http.delete(`${environment.API_URL}/${this.path}/${id}`);
  }

  findOne(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost[]>(`${environment.API_URL}/posts/${id}`).pipe(
        map((items) => {
          if (items.length) {
            return items[0];
          }

          throw new Error('not found');
        }),
    );
  }

  findAllOwn(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.API_URL}/posts`);
  }
}
