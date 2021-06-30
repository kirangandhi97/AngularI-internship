import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDetails } from '../employee-details.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

public employeeList$: Observable<any> = of();

  constructor(
    private employeeService: EmployeeService
  ) { 
    this.employeeList$ = this.employeeService.getEmployee();
  }

  ngOnInit(): void {
  }

}
