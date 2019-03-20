import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService) { }

  userValues;

  locations = [
    {id: 1, value: 'Indore'},
    {id: 2, value: 'Pune'},
    {id: 3, value: 'Indore/Pune (Any)'},
    {id: 4, value: 'client location'}
  ];
  priorities = [
    {id: 1, value: 'Low'},
    {id: 2, value: 'Medium'},
    {id: 3, value: 'High'},
    {id: 4, value: 'Critical'}
  ];
  positions = [
    {id: 1, value: 'Trainee SE'},
    {id: 2, value: 'ASE'},
    {id: 3, value: 'SE'},
    {id: 4, value: 'SSE'},
    {id: 5, value: 'Module Lead'},
    {id: 6, value: 'Project Lead'},
    {id: 7, value: 'Project Manager'},
    {id: 8, value: 'Trainee QA'},
    {id: 9, value: 'QA Engineer'},
    {id: 10, value: 'SENIOR Qa Engineer'},
    {id: 11, value: 'QA Lead'},
    {id: 12, value: 'QA Manager'},
    {id: 13, value: 'Business Analyst'},
    {id: 14, value: 'UI Designer'},
    {id: 15, value: 'Other'}
  ];
  practices = [
    {id: 1, value: 'Storage Engineering'},
    {id: 2, value: 'Java'},
    {id: 3, value: 'Open Source'},
    {id: 4, value: 'Mobile'},
    {id: 5, value: 'Service Now'}
  ];
  levels = [
    {id: 1, value: 'Level 1'},
    {id: 2, value: 'Level 2'},
    {id: 3, value: 'Level 3'},
    {id: 4, value: 'Level 4'}
  ];

  ngOnInit() {
  }

  myClick() {
    debugger;
    this.userValues = this.service.form.value
    console.log(typeof this.userValues)
    this.userValues = JSON.stringify(this.userValues) 
    console.log(typeof this.userValues)
    console.log(this.userValues)
  }
}
