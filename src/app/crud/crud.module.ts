import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CrudComponent,
    AddComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
