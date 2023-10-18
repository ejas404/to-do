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
    text : string = ""
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

    onSubmit(){
      if(!this.text){
        alert('please add something on the input')
        return
      }
      let lastId :number = this.notes[this.notes.length-1].id + 1 || 1
      let newNote : Notes = {
        id : lastId,
        content : this.text
      }
      this.noteService.addNote(newNote).subscribe((note : Notes)=> this.notes.push(note))
      this.text = ""
    }

    ngOnInit():void{
           this.noteService.getNotes().subscribe((notes : Notes [])=> this.notes = notes) 
    }
}
