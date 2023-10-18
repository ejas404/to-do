import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  // @Input() text:string = ""
  // @Input() color:string = ""

  @Output() addNoteBtn = new EventEmitter()
  
  constructor(){}
  
  addNote(){
    this.addNoteBtn.emit()
  }
}
