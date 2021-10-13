import { TeacherService } from './../../sharedService/teacher.service';
import { ApiFunctionsService } from './../../sharedService/api-functions.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl:'./add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
object = new Teacher;
invalidMassege;
  constructor(private serv: TeacherService , private route:Router) {


   }

  ngOnInit(): void {
  }
save(userName,courseName){
if(userName.errors== null && courseName.errors==null){




  this.serv.post(this.object).subscribe(data =>{
// window.location.replace('listT');
this.route.navigateByUrl('listT');
  })}
  else{
   this.invalidMassege ="you Must enter Data"
  }
}
}
