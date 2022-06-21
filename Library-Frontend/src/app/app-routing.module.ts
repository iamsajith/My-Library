import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'',component:HomeComponent},{path:'',component:BooksComponent},{path:'add',component:AddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
