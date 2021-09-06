import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';


const routes: Routes = [
  {path: '', component: ThemeSixComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }