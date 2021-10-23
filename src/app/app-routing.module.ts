import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"myprofile",component:MyProfileComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
