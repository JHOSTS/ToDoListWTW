import { FilmesService } from './../filmes.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent {
  filmes: any[] = [];
  nomeBusca = '';
  categoria = '';

  
  
  constructor(private filmesservice: FilmesService) {}
  
  ngOnInit(): void{
  };
  
  
  Buscar(): void{
    this.filmesservice.RetornaFilmes(this.nomeBusca, this.categoria).subscribe(resultado => {
        this.filmes = new Array(resultado);
          this.filmes = this.filmes[0].results;
          console.log(this.filmes);
          return this.filmes;
    });
  }
}
