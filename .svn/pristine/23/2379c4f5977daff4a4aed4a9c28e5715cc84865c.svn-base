import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from './components/list-user/list-user.component';
import {  EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserSortComponent } from './components/list-user-sort/list-user-sort.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login-form' },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'list-users', component: ListUserComponent },
  { path: 'list-sort', component: ListUserSortComponent},
  {path : 'login-form', component: LoginFormComponent  },
  {path : 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
