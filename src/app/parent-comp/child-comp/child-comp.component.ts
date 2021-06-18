import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 1st way
  // @Input("parentData")public name:any;


// another way of doing
  @Input("parentData")public name:any;

// for child event to parent
@Output()public childEvent = new EventEmitter();

onSendMsg(){
  this.childEvent.emit('Hey Kiran');
}
}
