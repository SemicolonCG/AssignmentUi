import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes :Note[]=[];

  constructor(private authenticationService:AuthenticationService) {

    this.getNotes();
   }

  ngOnInit(): void {
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
