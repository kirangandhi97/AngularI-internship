import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit {
  @Output() parentComponent:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit({name:'rahul',age:26})
  }

}
