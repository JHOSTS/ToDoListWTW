import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class PrevisaoTempoService {
    apiKey = '1d80bfac483bfdfe41771c8fe21da46d';
    lat = '';
    lon = '';
    cidade = '';
    urlApiLocation = '';
    urlApi = '';
    
    constructor(private http: HttpClient){ }

    BuscaCidade(cidadeBusca: string): Observable<any[]>{
        this.cidade = cidadeBusca;
        this.cidade = this.cidade.replace(' ', '+');
        this.urlApiLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${this.cidade}&limit=5&appid=${this.apiKey}`; 
        return this.http.get<any[]>(this.urlApiLocation);
    }

    RetornaTempo(lat: string, lon: string ): Observable<any[]>{
        this.urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=pt_br&units=metric`;

        return this.http.get<any[]>(this.urlApi);
    }
}