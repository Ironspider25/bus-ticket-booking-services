import { Routes } from '@angular/router';

export const RESERVATION_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./reservation.component')
            .then(c =>
                c.ReservationComponent
            )
    },
];
