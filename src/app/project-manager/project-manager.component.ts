import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Suggest} from '../l2suggestion/l2suggestion.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface ProjectManager {
  name: string;
}

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {
  employee = new EmployeeService();
  myControl = this.employee.form;
  constructor(private service: EmployeeService) { }
  managers: ProjectManager[] = [
    {name: 'Project Manager 1'},
    {name: 'Project Manager 2'},
    {name: 'Project Manager 3'},
    {name: 'Project Manager 4'}
  ];
  filteredOptions: Observable<ProjectManager[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | ProjectManager>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.managers.slice())
      );
  }
  managerDisplayFn(manager?: ProjectManager): string | undefined {
    return manager ? manager.name : undefined;
  }

  private _filter(name: string): ProjectManager[] {
    const filterValue = name.toLowerCase();

    return this.managers.filter(manager => manager.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
