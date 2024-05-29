import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.scss'
})
export class SubmitFormComponent implements OnInit {
  userForm!: FormGroup;
  ngOnInit(): void {
    try {
      this.userForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      });
    } catch (error) {
      console.log('Exception Occured in app-show-seats while runnuig through ngOnIt() =>', error);
    }
  }
}
