import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListContainerComponent,
    EmployeeListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
