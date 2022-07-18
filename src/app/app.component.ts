import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth=true;
  constructor(private authenticationService:AuthenticationService,private router:Router
    ) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  title = 'AssignmentUi';
  logOut(){

    this.authenticationService.isAuthenticated=false;
    this.isAuth=this.authenticationService.isAuthenticated;
    this.router.navigate(['']);
  }
}
