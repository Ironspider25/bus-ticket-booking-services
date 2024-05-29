import { Routes } from '@angular/router';

export const DASGBOARD_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard.component')
            .then(c =>
                c.DashboardComponent
            )
    },
];
