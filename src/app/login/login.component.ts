import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAuthenticated=false;
  constructor(private authenticationService:AuthenticationService,private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    this.authenticationService.authenticate(signInForm.value)
    .subscribe(
      response=>{
        console.log(response);
       if(response=true){
        this.authenticationService.isAuthenticated=true;
        this.router.navigate(['home']);
       }
       if(response=false){
        this.router.navigate(['login']);
       }
      }
    )
  }
}
