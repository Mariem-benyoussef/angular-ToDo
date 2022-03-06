import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:5000/tasks/')
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>('http://localhost:5000/tasks', task, httpOptions);
  }

  deleteTask(task:Task) : Observable<Task>{
    return this.http.delete<Task>(`${'http://localhost:5000/tasks'}/${task.id}`);
  }

  updateTaskReminder(task:Task) : Observable<Task>{
    return this.http.put<Task>(`${'http://localhost:5000/tasks'}/${task.id}`, task, httpOptions);
}



}