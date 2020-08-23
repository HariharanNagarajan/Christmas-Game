import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ErrComponentComponent } from './err-component/err-component.component';


const routes: Routes = [
  {path:"", redirectTo:"/", pathMatch:"full"},
  {path:"first", component : FirstComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
