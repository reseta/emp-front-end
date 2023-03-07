import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteBlogPost } from '../store/blog-post/blog-post.actions';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  blogPost = this.route.snapshot.data.blogPost;
  user = this.route.snapshot.data.user;

  constructor(private route: ActivatedRoute, private store: Store) {}

  triggerDelete() {
    this.store.dispatch(deleteBlogPost({ id: this.blogPost.id }));
  }
}
