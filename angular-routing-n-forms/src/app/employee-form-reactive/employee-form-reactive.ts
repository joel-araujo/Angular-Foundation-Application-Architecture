import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {noNumbers} from '../validators/noNumberValidator';

@Component({
  selector: 'app-employee-form-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-form-reactive.html',
  styleUrl: './employee-form-reactive.css',
})

export class EmployeeFormReactive {

  employeeForm!: FormGroup | undefined;

  constructor(private fb: FormBuilder){}


  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), noNumbers]],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.employeeForm?.invalid){
      this.employeeForm.markAllAsTouched();
      return;
    }

    console.log(this.employeeForm?.value);
    this.employeeForm?.reset();
  }


  // employeeForm: FormGroup | undefined;

  // ngOnInit(){
  //   this.employeeForm = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     position: new FormControl('', Validators.required) 
      
  //   });
  // }

  // onSubmit(){
  //   if (this.employeeForm?.valid){
  //     console.log("submited:", this.employeeForm?.value);
  //   }
  // }

}
