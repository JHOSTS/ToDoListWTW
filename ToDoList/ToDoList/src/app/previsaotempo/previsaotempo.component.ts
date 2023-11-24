import { Component } from '@angular/core';
import { PrevisaoTempoService } from '../previsaotempo.service';

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
showLoading: boolean = false;

constructor(private previsaotemposervice: PrevisaoTempoService){}

async loadData() {
  this.showLoading = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
}

ngOnInit(): void{
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude.toString();
      this.lon = position.coords.longitude.toString();
      this.Tempo(this.lat, this.lon);  
    });

};

Cidade(): void{
  this.localizacao.length > 0 ? this.loadData() : alert('Insira um local para a busca!');
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
      this.showLoading = false;
      return this.previsao;
    });
  }
}