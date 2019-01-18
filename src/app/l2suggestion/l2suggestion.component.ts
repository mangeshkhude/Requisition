import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Suggest {
  name: string;
}

@Component({
  selector: 'app-l2suggestion',
  templateUrl: './l2suggestion.component.html',
  styleUrls: ['./l2suggestion.component.css']
})
export class L2suggestionComponent implements OnInit {
  employee = new EmployeeService();
  myControl = this.employee.form;
  suggestControl = this.myControl.controls.suggestL2;
  constructor(private service: EmployeeService) { }
  suggestionsl2: Suggest[] = [
    {name: 'Suggest L2 1'},
    {name: 'Suggest L2 2'},
    {name: 'Suggest L2 3'},
    {name: 'Suggest L2 4'}
  ];
  filteredOptions: Observable<Suggest[]>;

  ngOnInit() {

    this.filteredOptions = this.suggestControl.valueChanges
      .pipe(
        startWith<string | Suggest>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.suggestionsl2.slice())
      );
  }
  private suggestdisplayFn(suggest?: Suggest): string | undefined {
    return suggest ? suggest.name : undefined;
  }

  private _filter(name: string): Suggest[] {
    const filterValue = name.toLowerCase();

    return this.suggestionsl2.filter(suggest => suggest.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
