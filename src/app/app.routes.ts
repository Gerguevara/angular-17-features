import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path: 'defer-option',
        title: 'Defer Option',
        loadComponent: () => import('./dashboard/pages/defer-option/defer-option.component')
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/contro-flow/control-flow.component')
      },
      {
        path: 'user/:id',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transiccion/view-transiccion1.component')
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transiccion/view-transiccion2.component'),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'control-flow',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];
