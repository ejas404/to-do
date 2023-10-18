import { Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Notes} from '../models/note-models'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiUrl = 'http://localhost:4700/notes'
  constructor(private http : HttpClient) {}

  getNotes() : Observable<Notes[]>{
    return this.http.get<Notes[]>(this.apiUrl)
  }
  
  deleteNote(note : Notes) : Observable<Notes>{
    let url = `${this.apiUrl}/${note.id}`
    return this.http.delete<Notes>(url)
  }
}
