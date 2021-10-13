import { StudentService } from './../../sharedService/student.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  invalidMassege;
  object = new Student ;
  constructor(private serv: StudentService , private route:Router) {


   }

  ngOnInit(): void {
  }
save(userName,levelName){
  if(userName.errors== null && levelName.errors==null){
  this.serv.post(this.object).subscribe(data =>{
// window.location.replace('listT');
this.route.navigateByUrl('lists');
  })} else{
    this.invalidMassege ="you Must enter Data"
   }
}


}
