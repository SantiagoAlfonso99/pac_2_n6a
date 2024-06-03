import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoReturnModel } from './returnedModels';

export interface ITodosService {
  getAllTodos(): Observable<TodoReturnModel[]>;
 }

@Injectable({
  providedIn: 'root',
})
export class TodosService implements ITodosService{
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<TodoReturnModel[]>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos`);
  }

  getTodo(todoId: number): Observable<TodoReturnModel>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos${todoId}`);
  }
}
