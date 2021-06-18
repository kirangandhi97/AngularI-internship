import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { Users2Component } from './users2/users2.component';
import { TemplateRefComponent } from './Tasks/template-ref/template-ref.component';
import { Task1Component } from './task1/task1.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './parent-comp/child-comp/child-comp.component';
import { TempDrivenFormComponent } from './Tasks/temp-driven-form/temp-driven-form.component';
import { ReactiveFormComponent } from './Tasks/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    Users2Component,
    TemplateRefComponent,
    Task1Component,
    ParentCompComponent,
    ChildCompComponent,
    TempDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
