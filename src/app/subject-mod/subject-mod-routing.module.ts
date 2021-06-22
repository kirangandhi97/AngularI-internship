import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectModComponent } from './subject-mod.component';

const routes: Routes = [{ path: '', component: SubjectModComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectModRoutingModule { }
