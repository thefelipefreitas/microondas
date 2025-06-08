import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MicroondasService, IniciaAquecimentoResponse } from '../../core/services/microondas.service';

@Component({
  selector: 'app-microondas',
  standalone: true,
  templateUrl: './microondas.component.html',
  imports: [CommonModule, FormsModule]
})
export class MicroondasComponent {
  tempoSegundos?: number;
  potencia?: number;
  progresso = '';
  error = '';

  intervaloId: any;
  linhaAtual = 0;
  outputLinhas: string[] = [];

  constructor(private microondasService: MicroondasService) {}

  iniciar() {
    this.error = '';
    
    if (this.tempoSegundos === undefined || this.potencia === undefined) {
      this.error = 'Por favor, informe o tempo e a potência.';
      return;
    }
    
    if (this.tempoSegundos <= 0 || this.potencia <= 0) {
      this.error = 'Tempo e potência devem ser maiores que zero.';
      return;
    }

    this.enviarRequisicao(this.tempoSegundos, this.potencia);
  }

  inicioRapido() {
    this.enviarRequisicao(undefined, undefined);
  }

  private enviarRequisicao(tempo?: number, potencia?: number) {
    this.progresso = '';
    this.error = '';
    this.outputLinhas = [];
    clearInterval(this.intervaloId);

    this.microondasService.iniciarAquecimento({ tempoSegundos: tempo, potencia }).subscribe({
      next: (res: IniciaAquecimentoResponse) => {
        this.executarAnimacao(res.tempoSegundos, res.potencia);
      },
      error: err => {
        this.error = err.error?.erro || 'Erro ao iniciar aquecimento.';
        clearInterval(this.intervaloId);
      }
    });
  }

  executarAnimacao(tempo: number, potencia: number) {
    this.linhaAtual = 0;
    this.outputLinhas = [];

    this.intervaloId = setInterval(() => {
      if (this.linhaAtual < tempo) {
        this.outputLinhas.push('.'.repeat(potencia));
        this.linhaAtual++;
      } else {
        this.outputLinhas.push('Aquecimento concluído.');
        clearInterval(this.intervaloId);
      }
    }, 1000);
  }
}
