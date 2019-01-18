import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { MaterialModule } from './material/material.module';
import {EmployeeService} from './shared/employee.service';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { L1suggestionComponent } from './l1suggestion/l1suggestion.component';
import { L2suggestionComponent } from './l2suggestion/l2suggestion.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    ProjectsComponent,
    L1suggestionComponent,
    L2suggestionComponent,
    ProjectManagerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
