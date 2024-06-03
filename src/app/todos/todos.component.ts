import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { TodoReturnModel } from '../returnedModels';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}
  todos : TodoReturnModel[] = []

  ngOnInit(): void {
    this.getAllTodos()
  }

  randomMethod(){

  }

  getAllTodos() {
    this.todosService.getAllTodos().subscribe((response) => {
      this.todos = response;
    });
  }
}
