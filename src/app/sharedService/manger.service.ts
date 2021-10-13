import { Manger } from './../models/manger';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class MangerService extends ApiFunctionsService<Manger> {

  constructor(public http:HttpClient) {
    super("  http://localhost:3000/manger",http);
    
       }
}
