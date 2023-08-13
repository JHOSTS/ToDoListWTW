import { FilmesComponent } from './filmes/filmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [{
  path: '', component: TarefasComponent
},
{
  path: 'filmes', component: FilmesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
