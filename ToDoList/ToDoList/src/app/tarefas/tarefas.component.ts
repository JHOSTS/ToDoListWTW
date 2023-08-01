import { Tarefa } from './../Tarefa';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { TarefasService } from '../tarefas.service';
import { CheckboxControlValueAccessor, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  formulario: any;
  tituloFormulario!: string;
  tarefas: Tarefa[] = [];
  visibilidadeTarefas: boolean = true;
  visibilidadeForm: boolean = false;
  modalRef!: BsModalRef;
  nomE_TAREFA!: string;
  iD_TAREFA!: number;
  concluida = true;
  tarefasEdit: Tarefa = {
    iD_TAREFA: 0,
    nomE_TAREFA: '',
    descricaO_TAREFA: '',
    datA_CRIACAO: '',
    flaG_CONCLUIDA: false
  };
  

  constructor(private tarefasService: TarefasService, private modalService: BsModalService) { }


  ngOnInit(): void {

    this.formulario = new FormGroup({
      nomE_TAREFA: new FormControl(null),
      descricaO_TAREFA: new FormControl(null),
      flaG_CONCLUIDA: new FormControl()
    });

    this.tarefasService.RetornaTarefaPorId(this.iD_TAREFA).subscribe((tarefasEdit) =>{
      this.tarefasEdit = tarefasEdit;
    })

    this.tarefasService.RetornaTodasAsTarefas().subscribe(resultado => {
      this.tarefas = resultado;
    });
  };

  ExibirFormulario(): void {
    this.visibilidadeTarefas = false;
    this.visibilidadeForm = true;

    this.formulario = new FormGroup({
      nomE_TAREFA: new FormControl(null),
      descricaO_TAREFA: new FormControl(null)
    });
    this.tituloFormulario = "Nova tarefa";
  }

  FormularioAtualizacaoTarefa(iD_TAREFA: number): void {
    this.visibilidadeTarefas = false;
    this.visibilidadeForm = true;
    
    this.tarefasService.RetornaTarefaPorId(iD_TAREFA).subscribe(resultado => {
      this.tituloFormulario = `Atualizar ${resultado.nomE_TAREFA}`;

      this.formulario = new FormControl({
        iD_TAREFA: new FormControl(resultado.iD_TAREFA),
        nomE_TAREFA: new FormControl(resultado.nomE_TAREFA),
        descricaO_TAREFA: new FormControl(resultado.descricaO_TAREFA),
        flaG_CONCLUIDA: new FormControl(resultado.flaG_CONCLUIDA)
      });
    });
  }

  Voltar(): void {
    this.visibilidadeTarefas = true;
    this.visibilidadeForm = false;this.tarefasService.RetornaTodasAsTarefas().subscribe((registros) => {
      this.tarefas = registros;
    });
    
  };

  EnviarFormulario(): void {
    const tarefa: Tarefa = this.formulario.value;

      this.tarefasService.RetornaTodasAsTarefas().subscribe((registros) => {
        this.tarefas = registros;
      });
      this.tarefasService.AdicionarTarefa(tarefa).subscribe((resultado) => {
      });
      this.visibilidadeForm = false;
      this.visibilidadeTarefas = true;
      alert("Tarefa adicionada");
      this.tarefasService.RetornaTodasAsTarefas().subscribe((registros) => {
        this.tarefas = registros;
      });
    }

    TarefaConcluida(tarefasEdit: Tarefa){
      tarefasEdit.flaG_CONCLUIDA = true;
      this.tarefasService.AtualizarTarefas(tarefasEdit).subscribe((resultado) => {
        this.visibilidadeForm = false;
        this.visibilidadeTarefas = true;
      });
      alert('Esta tarefa já foi concluída!');
    }

  ExibirConfirmacaoExclusao(iD_TAREFA: number, nomE_TAREFA: string, conteudoModal: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(conteudoModal);
    this.iD_TAREFA = iD_TAREFA;
    this.nomE_TAREFA = nomE_TAREFA;
  }

  ExcluirTarefa(iD_TAREFA: number){
      this.tarefasService.ExcluirTarefa(iD_TAREFA).subscribe(resultado => {
      });
      alert("Tarefa excluida!");
      this.modalService.hide();
      this.tarefasService.RetornaTodasAsTarefas().subscribe(registros => {
        this.tarefas = registros;
      });
  }
}
