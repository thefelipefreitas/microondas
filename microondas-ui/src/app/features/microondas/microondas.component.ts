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

  constructor(private microondasService: MicroondasService) {}

  iniciar() {
    this.error = '';
    this.progresso = '';

    this.microondasService.iniciarAquecimento({
      tempoSegundos: this.tempoSegundos,
      potencia: this.potencia
    }).subscribe({
      next: (res: IniciaAquecimentoResponse) => this.progresso = res.progresso,
      error: err => this.error = err.error?.erro || 'Erro ao iniciar aquecimento.'
    });
  }

  inicioRapido() {
    this.error = '';
    this.progresso = '';

    this.microondasService.iniciarAquecimento({}).subscribe({
      next: (res: IniciaAquecimentoResponse) => this.progresso = res.progresso,
      error: err => this.error = err.error?.erro || 'Erro ao iniciar o aquecimento rápido.'
    });
  }
}
