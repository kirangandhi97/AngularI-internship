import { Component, OnInit } from '@angular/core';
import { FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  userForm= this.fb.group({
    username: ['',],
    rollNo: [''],        //[Validators.required, Validators.pattern('^[0-9]?$')]],
    address: [''],
    skill: this.fb.array([
      this.fb.control('')
    ])
  })

  get skill(){
    return this.userForm.get('skill') as FormArray;
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

  onAddSkill(){
    this.skill.push(this.fb.control(''));
    
  }

  onDeleteSkill(index:number){
    const deleteSkillItem = this.userForm.get('skill') as FormArray;
    deleteSkillItem.removeAt(index)
  }
}
