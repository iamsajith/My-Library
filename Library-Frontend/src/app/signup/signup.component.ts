import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../auth-header/auth.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userCred = new AuthModel('','',0,'')
 
  constructor(private _auth:AuthService,private _route:Router) { }

  ngOnInit(): void {
    if(this._auth.loggedIn()){
      this._route.navigate(['/'])
    }
    else{
        localStorage.removeItem('updateProductID')
    }
  }
  submit(){
    console.log(this.userCred)
    this._auth.saveCred(this.userCred)
    this._route.navigate(['/login']);
  }
  
  

}
