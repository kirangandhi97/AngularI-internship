import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CrudComponent } from './crud.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  //{ path: 'add', component: AddComponent },
  ///{path: 'list', component:ListComponent},
  //{ path: 'delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
