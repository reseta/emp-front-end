import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-blog-post',
  templateUrl: './manage-blog-post.component.html',
  styleUrls: ['./manage-blog-post.component.scss'],
})
export class ManageBlogPostComponent implements OnInit {
  pageTitle = this.route.snapshot.data.title;
  isImageRequired = this.route.snapshot.data.isImageRequired;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onValidForm(blogPost: FormData) {}
}
