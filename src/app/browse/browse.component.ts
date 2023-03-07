import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  blogPosts = this.route.snapshot.data.blogPosts;
  environment = environment;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
