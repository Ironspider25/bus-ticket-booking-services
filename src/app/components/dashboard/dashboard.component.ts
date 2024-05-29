import { Component, OnInit } from '@angular/core';
import { UserData } from '../../models/user-data.type';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SeatsService } from '../../services/seats.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  {
  // userData!: UserData[];
  // userForm!: FormGroup;
  // editId!: number;
  // isEditing!: boolean;
  // constructor(private seatsService: SeatsService) { }

  // ngOnInit(): void {
  //   try {
  //     this.userData = localStorage.getItem('userData') !== 'undefined' ? JSON.parse(localStorage.getItem('userData') as string) : [];
  //     this.userForm = this.seatsService.generateUserForm();
  //   } catch (error) {
  //     console.log('Exception occured in the app-dashboard while running through ngOnInit() => ', error);
  //   }
  // }

  // onSubmit(): void {
  //   try {
  //     if (this.userForm.invalid) return;
  //     if (this.isEditing) {
  //       this.userData.splice(this.editId, 1, this.userForm.value);
  //       this.isEditing = false;
  //     } else {
  //       this.userData.push(this.userForm.value);
  //     }
  //     localStorage.setItem('userData', JSON.stringify(this.userData));
  //   } catch (error) {
  //     console.log('Exception occured in the app-dashboard while running through onSubmit() => ', error);
  //   }
  // }

  // onEdit(id: number): void {
  //   try {
  //     this.editId = id;
  //     this.isEditing = true;
  //     this.userForm.patchValue(this.userData[id]);
  //   } catch (error) {
  //     console.log('Exception occured in the app-dashboard while running through onEdit() => ', error);
  //   }
  // }

  // onDelete(id: number): void {
  //   try {
  //     this.userData.splice(id, 1);
  //   } catch (error) {
  //     console.log('Exception occured in the app-dashboard while running through onDelete() => ', error);
  //   }
  // }

}
