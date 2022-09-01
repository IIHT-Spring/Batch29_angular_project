import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { UserformComponent } from './components/userform/userform.component';

const routes: Routes = [{path:'userform', component:UserformComponent}, {path:'about', component:AboutComponent}, {path:"pipe" , component:PipedemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
