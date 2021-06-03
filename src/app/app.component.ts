import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';
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
