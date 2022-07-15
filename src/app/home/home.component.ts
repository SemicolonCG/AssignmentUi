import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  getNotes(){
    this.authenticationService.getAllNotes()
    .subscribe(
      Response=>{
        console.log(Response);
      }
    )
  }
}
