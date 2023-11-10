import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
  StudentDetails:any
  constructor(private active:ActivatedRoute,private router:Router) {
    this.active.queryParams.subscribe(params=>{

    })
  }
  backToLogin(){
    this.router.navigate(['students'])
  }

}
