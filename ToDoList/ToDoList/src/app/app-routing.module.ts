import { FilmesComponent } from './filmes/filmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { PrevisaotempoComponent } from './previsaotempo/previsaotempo.component';

const routes: Routes = [{
  path: 'tarefas', component: TarefasComponent
},
{
  path: 'filmes', component: FilmesComponent
},
{
  path: '', component: PrevisaotempoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
