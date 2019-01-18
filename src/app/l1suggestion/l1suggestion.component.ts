import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Suggest {
  name: string;
}

@Component({
  selector: 'app-l1suggestion',
  templateUrl: './l1suggestion.component.html',
  styleUrls: ['./l1suggestion.component.css']
})
export class L1suggestionComponent implements OnInit {
  employee = new EmployeeService();
  myControl = this.employee.form;
  constructor(private service: EmployeeService) { }

  suggestionsl1: Suggest[] = [
    {name: 'Suggest L1 1'},
    {name: 'Suggest L1 2'},
    {name: 'Suggest L1 3'},
    {name: 'Suggest L1 4'}
  ];
  filteredOptions: Observable<Suggest[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Suggest>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.suggestionsl1.slice())
      );
  }
  suggestdisplayFn(suggest?: Suggest): string | undefined {
    return suggest ? suggest.name : undefined;
  }

  private _filter(name: string): Suggest[] {
    const filterValue = name.toLowerCase();

    return this.suggestionsl1.filter(suggest => suggest.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
