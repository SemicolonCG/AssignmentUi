import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{
  baseUrl='https://localhost:44380/api/Note';
  loginUrl='https://localhost:44380/api/Account';
  public  isAuthenticated=false;

  constructor(private http : HttpClient ) {   this.getAllNotes();}
  ngOnInit(): void {
 
  }
 
  //Get AllNotes
  getAllNotes():Observable<any[]>{
  return this.http.get<any[]>(this.baseUrl);

  }
  // addNote(note:Note) :Observable<Note>{
  //   note.userId=1;
  //   return this.http.post<Note>(this.baseUrl,note);
  // }

  authenticate(user:User):Observable<boolean>{
    return this.http.post<boolean>(this.loginUrl,user);
  }


}

