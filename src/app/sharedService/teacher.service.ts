import { Teacher } from 'src/app/models/teacher';
import { ApiFunctionsService } from 'src/app/sharedService/api-functions.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApiFunctionsService<Teacher> {

  constructor(public http:HttpClient) {
super(" http://localhost:3000/teacher",http);

   }
}
