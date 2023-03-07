import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { createBlogPost, updateBlogPost } from '../store/blog-post/blog-post.actions';

@Component({
  selector: 'app-manage-blog-post',
  templateUrl: './manage-blog-post.component.html',
  styleUrls: ['./manage-blog-post.component.scss'],
})
export class ManageBlogPostComponent implements OnInit {
  pageTitle = this.route.snapshot.data.title;
  isCreate = this.route.snapshot.data.isCreate;
  isImageRequired = this.route.snapshot.data.isImageRequired;
  blogPost = this.route.snapshot.data.blogPost;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {}

  onValidForm(post: FormData) {
    if (this.isCreate) {
      this.store.dispatch(createBlogPost({ post }));
    } else {
      this.store.dispatch(
          updateBlogPost({ post, id: this.route.snapshot.params.id }),
      );
    }
  }
}
