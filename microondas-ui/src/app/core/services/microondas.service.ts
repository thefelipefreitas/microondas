import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IniciaAquecimentoRequest {
  tempoSegundos?: number;
  potencia?: number;
}

export interface IniciaAquecimentoResponse {
  progresso: string;
}

@Injectable({
  providedIn: 'root'
})
export class MicroondasService {
  private baseUrl = '/api/microondas'; // o proxy redireciona para o backend

  constructor(private http: HttpClient) {}

  iniciarAquecimento(data: IniciaAquecimentoRequest): Observable<IniciaAquecimentoResponse> {
    return this.http.post<IniciaAquecimentoResponse>(`${this.baseUrl}/iniciar`, data);
  }
}
