import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter()

  title:string;
  description:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      description: this.description,
      completed: false
    }
    this.addTodo.emit(todo); // propagate to parent object
    this.title = null;
    this.description = null;
  }

}
