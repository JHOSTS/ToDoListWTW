import { Component } from '@angular/core';
import { PrevisaoTempoService } from '../previsaotempo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-previsaotempo',
  templateUrl: './previsaotempo.component.html',
  styleUrls: ['./previsaotempo.component.css']
})


export class PrevisaotempoComponent {
localizacao = '';
coord: any[] = [];
lat = '';
lon ='';
previsao: any[] = [];


constructor(private previsaotemposervice: PrevisaoTempoService){}

Cidade(): void{
  this.previsaotemposervice.BuscaCidade(this.localizacao).subscribe(resultado => {
    this.coord = new Array(resultado);
      this.lat = this.coord[0][0].lat;
      this.lon = this.coord[0][0].lon;
      this.Tempo(this.lat, this.lon);
    });
  }
  
  Tempo(lat: string, lon: string): void{
    this.previsaotemposervice.RetornaTempo(lat, lon).subscribe(resultado => {
      this.previsao = new Array(resultado);
        console.log(this.previsao);
        return this.previsao;
    });
  }
}