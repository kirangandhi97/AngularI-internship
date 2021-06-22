import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from './subject-service.service';

@Component({
  selector: 'app-subject-mod',
  templateUrl: './subject-mod.component.html',
  styleUrls: ['./subject-mod.component.css']
})
export class SubjectModComponent implements OnInit {
  UserName:string='';
  constructor(private subjectservice:SubjectServiceService) { 
    this.subjectservice.UserName.subscribe(res =>{
     this.UserName = res;
    })
  }

  ngOnInit(): void {
  }

}
