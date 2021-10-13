import { StudentService } from './../../sharedService/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  allData:[];
  constructor(private serv:StudentService) { 
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
