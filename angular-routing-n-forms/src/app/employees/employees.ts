import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  
  employees = [
    {id:1, name:"Joel", position:"Dev"},
    {id:2, name:"Rute", position:"Designer"},
    {id:3, name:"Rita", position:"Project Manager"},
    {id:4, name:"Kate", position:"QA analist"},
  ];

}
