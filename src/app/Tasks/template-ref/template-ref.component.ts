import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:string ="";

  onClick(val:any){
    console.log(val);
    this.name=val;
  }
}
