import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/Models/student-model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentArr : Students[]=[];
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void { this.listAllStudent();
  }

  listAllStudent(){
    this.studentservice.getAllstudent().subscribe(
      (studentList:Students[]) =>{
        this.studentArr = studentList;
      }
    )
  }

  onDeleteStudent(studentDataId:string){
    console.log(studentDataId);
    this.studentservice.removeStudent(studentDataId).subscribe(
      (studentList)=>{
        this.listAllStudent();
      })
  }

  onEditStudent(studentDataId:string, index:any){                     //for edit student
    console.log(studentDataId[index]);
    
  }

  
}
