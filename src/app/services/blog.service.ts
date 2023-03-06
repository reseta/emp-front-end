import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../blog-form/blog.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private path = '/post';

  constructor(private http: HttpClient) {}

  create(blogPost: FormData) {
    return this.http.post(`${environment.API_URL}/${this.path}`, blogPost);
  }

  update(id: number, blogPost: FormData) {
    return this.http.put(`${environment.API_URL}/${this.path}/${id}`, blogPost);
  }

  delete(id: number) {
    return this.http.delete(`${environment.API_URL}/${this.path}/${id}`);
  }

  findOne(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.API_URL}/${this.path}/${id}`);
  }

  findAll(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.API_URL}/${this.path}`);
  }
}
