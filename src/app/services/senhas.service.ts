import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  
  public inputNovaSenha: string = '';
  
  public senhasArray: { [key: string]: string[] } = { SG: [], SP: [], SE: [] };
  
  public tempoMedioAtendimento: { [key: string]: number } = { SG: 1, SP: 0.67 };
  // tempo 1 minuto e o outro de segundos 
  constructor() { }

  somaGeral(): void {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior(): void {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame(): void {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha : string = '') {
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear().toString().substring(2,4);
    let mes = dataAtual.getMonth().toString().padStart(2, '0');
    let dia = dataAtual.getDate().toString().padStart(2, '0');
  
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SG'].length+1).toString().padStart(2,'0');
      this.senhasArray['SG'].push(this.inputNovaSenha); 
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SP'].length+1).toString().padStart(2,'0');
      this.senhasArray['SP'].push(this.inputNovaSenha); 
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SE'].length+1).toString().padStart(2,'0');
      this.senhasArray['SE'].push(this.inputNovaSenha);
    }
    
    console.log(this.senhasArray);
  }

  chamarProximoNaFila(): string {
    if (this.senhasArray['SG'].length > 0) {
      return this.senhasArray['SG'].shift();
    } else if (this.senhasArray['SP'].length > 0) {
      return this.senhasArray['SP'].shift();
    }
    return '';
  }

  calcularTempoMedioAtendimento(tipoSenha: string): number {
    return this.senhasArray[tipoSenha].length * this.tempoMedioAtendimento[tipoSenha];
  }
}


