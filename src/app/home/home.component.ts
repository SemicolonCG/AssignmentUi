import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes :any[]= [];

  constructor(private authenticationService:AuthenticationService) {

    
   }

  ngOnInit(): void {
    this.getNotes();
  
  }

  getNotes(){
    this.authenticationService.getAllNotes()
    .subscribe(
      Response=>{
        this.notes=Response;
        console.log(Response);
      }
    )
  }
}
