import { FormControl } from '@angular/forms';
import { Filme } from '../Filme';
import { FilmesService } from './../filmes.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent {
  filmes: any[] = [];
  favoritos: any[] = [];
  nomeBusca = '';
  categoria = 'Categoria';
  id!: number;
  showLoading: boolean = false;
  
  constructor(private filmesService: FilmesService) {}

  async loadData() {
    this.showLoading = true;
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  Buscar(): void{
    this.loadData();
    this.filmesService.RetornaFilmes(this.nomeBusca, this.categoria).subscribe(resultado => {
        this.filmes = new Array(resultado);
          this.filmes = this.filmes[0].results;
          this.showLoading = false;
          return this.filmes;
        });
  }
}
