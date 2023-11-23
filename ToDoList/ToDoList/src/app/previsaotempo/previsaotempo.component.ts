import { Component } from '@angular/core';
import { PrevisaoTempoService } from '../previsaotempo.service';
import { Dialog } from '@angular/cdk/dialog';

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
resultadoTemperatura: boolean = true;

constructor(private previsaotemposervice: PrevisaoTempoService){}

ngOnInit(): void{
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude.toString();
      this.lon = position.coords.longitude.toString();
      this.Tempo(this.lat, this.lon);  
    });

};

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
        return this.previsao;
    });
  }
}