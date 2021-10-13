import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule  } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    ListStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
