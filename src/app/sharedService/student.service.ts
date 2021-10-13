import { Student } from './../models/student';
import { ApiFunctionsService } from 'src/app/sharedService/api-functions.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApiFunctionsService<Student> {

  constructor(public http:HttpClient) {
    super("  http://localhost:3000/student",http);
    
       }
}
