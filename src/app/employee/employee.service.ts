import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { EmployeeDetails } from './employee-details.model';

@Injectable()
export class EmployeeService {

mockUrl: string = "http://localhost:3000";

  public employeeList:EmployeeDetails[]=[]

  constructor(private httpClient:HttpClient) { }

  public getEmployee():Observable<EmployeeDetails[]>{
    return this.httpClient.get<EmployeeDetails[]>("http://localhost:3000/Employee");
  }

}
