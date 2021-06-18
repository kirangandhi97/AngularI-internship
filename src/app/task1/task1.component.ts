import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentComponent(data:any)
  {
    console.log(data);
    
  }
  arr = ['apple', 'banana', 'orange', 'kiwi', 'coconut']
  

  i:number=10
   plus(){
         this.i=++this.i;
       }
   minus(){
     this.i=--this.i;
   }
   addItem(){
     length= this.arr.push();
   }
  Employee=[
    {
      name:"kiran",
      age:24
    },
    {
      name:"yesha",
      age:22
    },
    {
      name:"hiral",
      age:24
    }
  ]
}
