import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public senhasArray: any = {
    SG: [],
    SP: [],
    SE: []
  };
  public inputNovaSenha: string = '';

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

  novaSenha(tipoSenha :string = '') {
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear().toString().substring(2, 4);
    let mes = dataAtual.getMonth().toString().padStart(2, '0');
    let dia = dataAtual.getDate().toString().padStart(2, '0');

    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha = `${ano}${mes}${dia}-${tipoSenha}${(this.senhasArray['SG'].length + 1).toString().padStart(2, '1')}`;
      this.senhasArray.SG.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha = `${ano}${mes}${dia}-${tipoSenha}${(this.senhasArray['SP'].length + 1).toString().padStart(2, '1')}`;
      this.senhasArray.SP.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha = `${ano}${mes}${dia}-${tipoSenha}${(this.senhasArray['SE'].length + 1).toString().padStart(2, '1')}`;
      this.senhasArray.SE.push(this.inputNovaSenha);
    }
    
    console.log(this.senhasArray);
  }
}

