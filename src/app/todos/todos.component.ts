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
  filteredTodos: TodoReturnModel[] = [];
  searchName: string = "";
  showButton: boolean = false;

  ngOnInit(): void {
    this.getAllTodos()
  }

  searchTodos() {
    if (this.searchName.trim() === "") {
      this.filteredTodos = this.todos;
    } else {
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }
  }

  getAllTodos() {
    this.todosService.getAllTodos().subscribe((response) => {
      this.todos = response;
      this.filteredTodos = response;
    });
  }

  onInputChange() {
    this.showButton = this.searchName.trim().length > 0;
  }
}
