import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {EmployeeService} from '../shared/employee.service';

export interface Project {
  name: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  employee = new EmployeeService();
  myControl = this.employee.form;
  constructor(private service: EmployeeService) {}
  projects: Project[] = [
    {name: 'Project 1'},
    {name: 'Project 2'},
    {name: 'Project 3'},
    {name: 'Project 4'}
  ];

  filteredOptions: Observable<Project[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Project>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.projects.slice())
      );
  }
  displayFn(user?: Project): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Project[] {
    const filterValue = name.toLowerCase();

    return this.projects.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
