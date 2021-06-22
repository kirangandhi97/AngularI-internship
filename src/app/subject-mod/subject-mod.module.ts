import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectModRoutingModule } from './subject-mod-routing.module';
import { SubjectModComponent } from './subject-mod.component';
import { SubComp1Component } from './sub-comp1/sub-comp1.component';
import { SubComp2Component } from './sub-comp2/sub-comp2.component';
import { SubComp3Component } from './sub-comp3/sub-comp3.component';


@NgModule({
  declarations: [
    SubjectModComponent,
    SubComp1Component,
    SubComp2Component,
    SubComp3Component
  ],
  imports: [
    CommonModule,
    SubjectModRoutingModule
  ],
})
export class SubjectModModule { }
