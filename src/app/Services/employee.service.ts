import { Injectable } from '@angular/core';
import { Employee } from '../../Models/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = [];

  constructor() {
    this.employeeList = [
      new Employee('Dakota Rice', 'Spain', 'Mad-er', 36.778),
      new Employee('Minerva Hooper', 'Curaçao', 'Sinaai-Waas', 23.789),
      new Employee('Sage Rodriguez', 'Netherlands', 'Baileux', 56.142),
      new Employee('Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', 63.542),
      new Employee('Mason Porter', 'Chile', 'Gloucester', 78.615)
    ];
  }

  public getEmployeeList() {
    return this.employeeList.slice();
  }
}
