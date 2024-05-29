import { Component, OnInit, Signal, WritableSignal, effect, signal } from '@angular/core';
import { SingleSeatComponent } from '../../components/single-seat/single-seat.component';
import { SeatsService } from '../../../../services/seats.service';
import { CommonModule } from '@angular/common';
import { Seat } from '../../../../models/seats.type';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserData } from '../../../../models/user-data.type';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-show-seats',
  standalone: true,
  imports: [SingleSeatComponent, CommonModule, DialogModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './show-seats.component.html',
  styleUrl: './show-seats.component.scss'
})
export class ShowSeatsComponent implements OnInit {
  seats!: Seat[];
  totalFare!: WritableSignal<number>;
  totalSelectedSeats!: WritableSignal<number>;
  visible!: boolean;
  userForm!: FormGroup;
  userData!: UserData[];
  seatNumbers!: number[];
  constructor(private seatsService: SeatsService, private messageService: | MessageService) {
  }

  ngOnInit(): void {
    try {
      this.visible = false;
      this.totalFare = signal(0);
      this.totalSelectedSeats = signal(0);
      this.userData = [];
      this.seatNumbers = [];
      this.userForm = this.seatsService.generateUserForm();
      const SEATS = localStorage.getItem('seats') !== 'undefined' ? localStorage.getItem('seats') as string : '[]';
      this.seats = JSON.parse(SEATS ? SEATS : '[]') as Seat[];
      if (!this.seats?.length) {
        this.seatsService.fetchSeats().subscribe(res => {
          this.seats = res;
        });
      } else {
        this.updateTotalFare();
      }
    } catch (error) {
      console.log('Exception Occured in app-show-seats while runnuig through ngOnIt() =>', error);
    }
  }

  toggleDialog(command?: string): void {
    try {
      this.visible = !this.visible;
      if (command?.localeCompare('cancel')) {
        this.messageService.add({ severity: 'error', summary: 'Canceled', detail: 'You have canceled the submiting form' });
      }
    } catch (error) {
      console.log('Exception Occured in app-show-seats while runnuig through toggleDialog() =>', error);
    }
  }
  onSubmit(): void {
    try {
      if (this.userForm.invalid) return;
      this.toggleDialog();
      const PAYLOAD = {
        ...this.userForm.value,
        seatNumbers: this.seatNumbers,
        dateOfBooking: new Date()
      }
      this.userData.push(PAYLOAD);
      this.userForm.reset();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You have succesFully booked ticket' });
      localStorage.setItem('userData', JSON.stringify(this.userData));
    } catch (error) {
      console.log('Exception Occured in app-show-seats while runnuig through onSubmit() =>', error);
    }
  }

  onSeatSelection(isAvailable: boolean, ticketIndex: number): void {
    try {
      if (isAvailable) {
        this.seats[ticketIndex].isSelected = !this.seats[ticketIndex].isSelected;
        if (this.seats[ticketIndex].isSelected) {
          this.seatNumbers.push(ticketIndex);
        } else {
          const TICKET_INDEX = this.seatNumbers.findIndex(sn => sn === ticketIndex);
          if (TICKET_INDEX !== -1) {
            this.seatNumbers.splice(TICKET_INDEX, 1);
          }
        }
        this.seatNumbers.push(ticketIndex);
        localStorage.setItem('seats', JSON.stringify(this.seats));
        this.updateTotalFare();
      }
    } catch (error) {
      console.log('Exception Occured in app-show-seats while runnuig through onSeatSelection() =>', error);
    }
  }
  updateTotalFare(): void {
    try {
      const FILTERD_SEATS = this.seats.filter(seat => seat.isSelected);
      this.totalSelectedSeats.set(FILTERD_SEATS.length);
      this.totalFare.update(tf => FILTERD_SEATS.reduce((total, seat) => {
        if (seat.fare && typeof seat.fare === 'number') {
          return total + seat.fare;
        }
        return total;
      }, 0));
    } catch (error) {
      console.log('Exception Occured in app-show-seats while runnuig through updateTotalFare() =>', error);
    }
  }
}
