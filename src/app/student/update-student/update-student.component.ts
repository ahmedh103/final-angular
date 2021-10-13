import { StudentService } from './../../sharedService/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  object = new Student;
  id;
  constructor(private serv: StudentService , private route:Router,private activRoute:ActivatedRoute) {
  this.id= this.activRoute.snapshot.paramMap.get('id');
this.serv.getById(this.id).subscribe(data =>{

  this.object =data;
})
   }
 

  ngOnInit(): void {
  }

  update(){

    this.serv.put(this.object,this.id).subscribe(data =>{
this.route.navigateByUrl('lists');

    });
  
  }

}
