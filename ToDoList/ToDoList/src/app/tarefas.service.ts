import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './Tarefa';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  url = 'http://localhost:5022/api/tarefas';

  constructor(private http: HttpClient) { }

  RetornaTodasAsTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url);
  }

  RetornaTarefaPorId(iD_TAREFA: number): Observable<Tarefa> {
    const apiUrl = `${this.url}/${iD_TAREFA}`;
    return this.http.get<Tarefa>(apiUrl);
  }

  AdicionarTarefa(tarefa: Tarefa): Observable<any> {
    return this.http.post<Tarefa>(this.url, tarefa, httpOptions);
  }

  AtualizarTarefas(tarefasEdit:Tarefa): Observable<any> {
    return this.http.put<Tarefa>(this.url, tarefasEdit, httpOptions);
  }

  ExcluirTarefa(iD_TAREFA: number): Observable<any> {
    const apiUrl = `${this.url}/${iD_TAREFA}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
};
