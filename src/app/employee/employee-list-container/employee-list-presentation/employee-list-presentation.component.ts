import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDetails } from '../../employee-details.model';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css']
})
export class EmployeeListPresentationComponent implements OnInit {

  private empList:EmployeeDetails[]=[] 

  @Input() public set employeeList(value: EmployeeDetails[]){
    if(value){
      this.empList = value
    }
  }
  public get employeeList(): EmployeeDetails[] {
    return this.empList
  }
  constructor() { }

  ngOnInit(): void {
  }

}
