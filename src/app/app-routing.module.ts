import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponentComponent } from './create-task-component/create-task-component.component';
import { ListComponentComponent } from './list-component/list-component.component';


const routes: Routes = [
  {path: '', component: CreateTaskComponentComponent},
  {path: 'list', component: ListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
