import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {StudentsComponent} from "./students/students.component";
import {SortComponent} from "./sort/sort.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";

export const routes: Routes = [
  { path:'',component:HomeComponent  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },{
  path:'about-us',component:AboutUsComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'students',component:StudentsComponent
  },
  {
    path:'sort',component:SortComponent
  },
  {
    path:'update-student',component:UpdateStudentComponent
  }
];
