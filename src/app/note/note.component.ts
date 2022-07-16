import { Component, OnInit } from '@angular/core';

import { Note } from '../models/note.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'cf-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note:Note={
    "id": 0,
    "noteText": '',
    "createdOn": '',
    "userId": 0,
    "user": 0,
    "comment": [],
    "replies": []
  };
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.note);
    this.authenticationService.addNote(this.note)
    .subscribe(
      response=>{
        console.log(response);
      }
    )
  }
}
