import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{path:"home",component:HomeComponent},
{path:"",component:HomeComponent},
{path:"listT",component:ListTeacherComponent},
{path:"add",component:AddTeacherComponent},
{path:"lists",component:ListStudentComponent},
{path:"adds",component:AddStudentComponent},
{path:"lists/:id",component:UpdateStudentComponent},
{path:"listT/:id",component:UpdateTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
