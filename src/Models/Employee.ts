export class Employee {
  Name: string;
  County: string;
  City: string;
  Salary: number;

  constructor(name: string, county: string, city: string, salary: number) {
    this.Name = name;
    this.County = county;
    this.City = city;
    this.Salary = salary;
  }
}
