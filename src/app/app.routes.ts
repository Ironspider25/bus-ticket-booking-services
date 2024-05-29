import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/dashboard/dashboard.route').then(
            c => c.DASGBOARD_ROUTES
        )
    },
    {
        path: 'reservation',
        loadChildren: () => import('./components/reservation/reservation.route').then(
            c => c.RESERVATION_ROUTES
        )
    },
];
