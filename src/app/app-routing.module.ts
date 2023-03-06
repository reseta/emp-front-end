import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
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
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
