import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl='https://localhost:44368/api/note';
  constructor(private http : HttpClient) { }
 
  //Get AllNotes
  getAllNotes():Observable<Note[]>{
  return this.http.get<Note[]>(this.baseUrl);
}
}

