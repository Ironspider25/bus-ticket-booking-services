import { Component } from '@angular/core';
import { ShowSeatsComponent } from '../show-seats/pages/show-seats/show-seats.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ShowSeatsComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {

}
