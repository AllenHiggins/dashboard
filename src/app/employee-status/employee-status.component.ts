import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  employeeList = [];
  title = 'All Persons';
  heading = 'Employees Status';

  constructor(private emlpoyeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.emlpoyeeService.getEmployeeList();
  }

}
