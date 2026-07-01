import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../directives/highlight';

@Component({

  selector: 'app-company',
  imports: [FormsModule, CommonModule, Highlight],
  templateUrl: './company.html',
  styleUrl: './company.css',

})

export class Company {

  title: string = "Company Details";
  companyName: string = "Tech Solutions Inc";
  totalEmployes: number = 250;
  location: string = "Bengaluru";

  isHiringOpen: boolean = false;

  departments: string[] = ['Engeneering', 'Markting', 'Sales', 'HR'];

  companyStatus: string = 'active'; // active | Inactive | CLosed

  toToggleHiring(){
    this.isHiringOpen = !this.isHiringOpen;
  }

  updateLocation(event: Event){
    this.location = (event.target as HTMLInputElement).value;
  }

  get CompanySize(): string {
    return this.totalEmployes > 100 ? 'large' : 'small';
  }

}
