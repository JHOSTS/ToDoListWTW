import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTYyNzBlYTFlYzhkZDNjOTRiZTIyNmU3NTIwNzM5OCIsInN1YiI6IjY0Y2RkZjc2NGQ2NzkxMDBjNTJiZDAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6dbjB-tlmoLLmA0fSZNU_E5yhTuoUUg_NoZyUfaKj8'
  }
  )
};

@Injectable({
  providedIn: 'root'
})

export class FilmesService {
  constructor(private http: HttpClient) { }
  
  //filmesApi = '108e81e5';
  filmesApi = 'd96270ea1ec8dd3c94be226e75207398';
  urlApi = '';
  nomeBusca = '';
  filmes: any[] = [];
  
  RetornaFilmes(nomeBusca: String, categoria: String): Observable<any[]> {
    this.nomeBusca = nomeBusca.toString();
    this.nomeBusca = this.nomeBusca.replace(' ', '+');

    this.urlApi = `https://api.themoviedb.org/3/search/${categoria}?query=${nomeBusca}&api_key=${this.filmesApi}&language=pt-BR`;
    //this.urlApi = `https://www.omdbapi.com/?s=${nomeBusca}&apikey=${this.filmesApi}`;
    return this.http.get<any[]>(this.urlApi);
  }
  
}
