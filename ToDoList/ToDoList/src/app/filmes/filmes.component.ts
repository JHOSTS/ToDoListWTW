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
  categoria = '';
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

  Favoritar(id:number): void{
    const filme: Filme = {
      "FilmeId": id,
      "UsuarioId": 1,
      "flagFavorito": true,
    };
    this.filmesService.FavoritaFilme(filme).subscribe((resultado) => {
    });
    console.log(filme);
  }

  RetornaFavoritos(): void{
      this.filmesService.FavoritoPorUsuario(1).subscribe(resultado => {
        this.favoritos = new Array(resultado);
          this.favoritos = this.favoritos[0].results;

          console.log(this.favoritos);
          return this.favoritos;
    });
  }
}
