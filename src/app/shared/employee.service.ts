import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    requisition: new FormControl('', Validators.required),
    location: new FormControl(0),
    priority: new FormControl(0),
    projectName: new FormControl(''),
    jobDescription: new FormControl(''),
    suggestL1: new FormControl(''),
    suggestL2: new FormControl(''),
    netPosition: new FormControl(0),
    practice: new FormControl(0),
    projectManager: new FormControl(''),
    modeOfInterview: new FormControl(''),
    level: new FormControl(0),
    additionalRemark: new FormControl(''),
    loggedDate: new FormControl(''),
    expectedDate: new FormControl('')
  });

}
