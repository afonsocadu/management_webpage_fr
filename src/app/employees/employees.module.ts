import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    
  ],
  exports: [
    EmployeesComponent,
    //EmployeeModalComponent,
    //TechnologiesAssociatedComponent
  ]
})
export class EmployeesModule { }