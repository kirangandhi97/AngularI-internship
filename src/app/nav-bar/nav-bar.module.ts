import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarRoutingModule } from './nav-bar-routing.module';
import { NavBarComponent } from './nav-bar.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';


@NgModule({
  declarations: [
    NavBarComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    CommonModule,
    NavBarRoutingModule
  ],
  exports: [
    Comp1Component,
    Comp2Component,
    Comp3Component,
    NavBarComponent
  ]
})
export class NavBarModule { }
