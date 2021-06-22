import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-sub-comp2',
  templateUrl: './sub-comp2.component.html',
  styleUrls: ['./sub-comp2.component.css']
})
export class SubComp2Component implements OnInit {

  UserName:string='';
  constructor(private subjectservice:SubjectServiceService) { 
    this.subjectservice.UserName.subscribe(res=>{
      this.UserName=res;
    })
  }

  ngOnInit(): void {
  }

  onClick(uname:any){
    console.log(uname.value);
    this.subjectservice.UserName.next(uname.value);
  }

}
