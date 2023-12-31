
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FilmesComponent } from './filmes/filmes.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { PrevisaotempoComponent } from './previsaotempo/previsaotempo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    FilmesComponent,
    HeaderComponent,
    PrevisaotempoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    MatIconModule,
    MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
