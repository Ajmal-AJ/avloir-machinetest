import { AccountStatementComponent } from './pages/account-statement/account-statement.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { UserLayoutComponent } from './shared/layouts/user-layout/user-layout.component';

export const routes: Routes = [

  {
    path: '', component: HomeLayoutComponent,
    children: [
      { path: '',loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)

      }]
    },
  {
    path: 'dashboard',component: UserLayoutComponent, canActivate: [authGuard],
    children: [
      { path: '', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      {  path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)},
      {path: 'account-statement',loadComponent: () => import('./pages/account-statement/account-statement.component').then(m => m.AccountStatementComponent) }
    ]
  }
];
