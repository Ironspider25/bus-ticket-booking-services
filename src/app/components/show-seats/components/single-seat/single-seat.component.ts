import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-single-seat',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './single-seat.component.html',
  styleUrl: './single-seat.component.scss'
})
export class SingleSeatComponent {
  @Input() isAvailable!: boolean;
  @Input() isBooked!: boolean;
  @Input() isSelected!: boolean;
  @Input() seatType!: string;
  @Input() seatNumber!: number;
  @Input() seatFare!: number;
}
