import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Students } from 'src/app/Models/student-model';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private studentservice:StudentService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  newEntryForm= this.fb.group({
    name: ['',],
    age: [''],        //[Validators.required, Validators.pattern('^[0-9]?$')]],
    address: [''],
    skills: ['']
  })

  onSubmit(){
    console.log(this.newEntryForm.value);
        this.studentservice.addStudent(this.newEntryForm.value).subscribe(
          (createdStd) => {
            this.studentservice.getAllstudent();
           })
      }
}
