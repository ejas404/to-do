import { Component , Output , EventEmitter} from '@angular/core';
import {NotesService} from '../../services/notes.service'
import {Notes} from '../../models/note-models'
import {HttpClient , HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
    title : string = "To Do Lists"
    heading : string = 'heading'
    notes : Notes[] = [] 

    //@Output() deleteNote : EventEmitter< Notes > = new EventEmitter()

    constructor(private noteService : NotesService){

    }

    addNoteIn(){
      console.log('inside add note in')
    }

    onDelete(note : Notes){
      this.noteService.deleteNote(note).subscribe(()=>{
        this.notes = this.notes.filter((n)=> n.id !== note.id)
      })
    }

    ngOnInit():void{
    
       this.noteService.getNotes().subscribe((notes : Notes [])=> this.notes = notes) 
    }
}
