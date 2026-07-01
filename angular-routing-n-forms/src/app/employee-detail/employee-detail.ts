import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
})
export class EmployeeDetail {
  
  employeeId: string | undefined;
  viewtype: string | null | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    //Aproach 1:
    // this.employeeId = this.route.snapshot.paramMap.get('id')!;
    // console.log(this.employeeId)
    
    //Aproach 2
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get("id")!;
      console.log(this.employeeId)
    });

    // QueryParams
    this.route.queryParamMap.subscribe(params =>{
      this.viewtype = params.get('view');
      console.log("view type::",this.viewtype)
    });
  }
}
