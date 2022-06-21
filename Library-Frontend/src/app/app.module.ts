import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthHeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BooksComponent,
    HeaderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
