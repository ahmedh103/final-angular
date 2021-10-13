import { TeacherService } from './../../sharedService/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApiFunctionsService } from 'src/app/sharedService/api-functions.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  object = new Teacher;
  id;
  constructor(private serv: TeacherService , private route:Router,private activRoute:ActivatedRoute) {
  this.id= this.activRoute.snapshot.paramMap.get('id');
this.serv.getById(this.id).subscribe(data =>{

  this.object =data;
})
   }
 

  ngOnInit(): void {
  }

  update(){

    this.serv.put(this.object,this.id).subscribe(data =>{
this.route.navigateByUrl('listT');

    });
  
  }

}
