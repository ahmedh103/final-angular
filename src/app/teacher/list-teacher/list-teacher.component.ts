import { TeacherService } from './../../sharedService/teacher.service';
import { Teacher } from 'src/app/models/teacher';
import { ApiFunctionsService } from './../../sharedService/api-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
allData:[];
  constructor(private serv:TeacherService) { 
this.serv.getTeacher().subscribe((data:any)=>{

this.allData =data;
})

  }

  ngOnInit(): void {
  }
  remove(id){

    this.serv.delete(id).subscribe((data) =>{

      window.location.reload();
    })
  }

}
