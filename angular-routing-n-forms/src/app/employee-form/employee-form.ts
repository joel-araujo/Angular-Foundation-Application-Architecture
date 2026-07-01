import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  employees: any[] = [];

  submitForm(form: NgForm){
    this.employees.push(form.value)
    console.log('form submited:', form.value)
    console.log('form valid:', form.valid)
    form.reset();
  }

}
