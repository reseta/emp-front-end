import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { AuthGuard } from './guards/auth.guard';
import { AllBlogPostsResolver } from './resolvers/all-blog-posts.resolver';
import { BlogPostResolver } from './resolvers/blog-post.resolver';
import { OwnBlogPostsResolver } from './resolvers/own-blog-posts.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
        import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () =>
        import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
        import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'manage',
    canActivate: [AuthGuard],
    loadChildren: () =>
        import('./manage-blog-post/manage-blog-post.module').then((m) => m.ManageBlogPostModule),
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    resolve: {
      blogPost: BlogPostResolver,
      user: UserResolver,
    },
  },
  {
    path: 'browse',
    component: BrowseComponent,
    resolve: {
      blogPosts: OwnBlogPostsResolver,
      user: UserResolver,
    },
  },
  {
    path: 'search',
    component: BrowseComponent,
    resolve: {
      blogPosts: AllBlogPostsResolver,
      user: UserResolver,
    },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
