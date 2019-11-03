import { MascaraUtil } from './../../util/mascara-util';
import { FormUtil } from './../../util/form-util';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { DateUtil } from 'src/app/util/date-util';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  @Output()
  execucaoPesquisa = new EventEmitter();

  public maskDDMMYYYYinicio = MascaraUtil.maskDDMMYYYY;
  public maskDDMMYYYYfim = MascaraUtil.maskDDMMYYYY;


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.respondendoMudancasDoForm();
  }

  // Declaração do Formulário
  // tslint:disable-next-line:member-ordering
  formulario = this.fb.group({
    dataVisitaInicio: [null, [Validators.required]],
    dataVisitaFinal: [null, [Validators.required]]
  });


  // GETS DOS CONTROLES OBRIGATÓRIOS DO FORM
  get dataVisitaInicio(): AbstractControl {
    return this.formulario.get('dataVisitaInicio');
  }
  get dataVisitaFinal(): AbstractControl {
    return this.formulario.get('dataVisitaFinal');
  }

  // submit do form
  pesquisar(): void {
    if (this.formulario.status === 'INVALID') {
      FormUtil.marcaComoDirtyOsControles(this.formulario);
      return;
    }
    // antes de enviar o form para o pai, precisa converter para o formato Date.
    this.execucaoPesquisa.emit(this.converterData(this.formulario.value));
  }

  limparFiltro(): void {
    this.formulario.reset();
  }

  converterData(filtro: Agendamento): Agendamento {
    // garante que apenas datas no formato dd/mm/yyyy sejam convertidas
    if (typeof filtro.dataVisitaInicio === 'string') {
      this.dataVisitaInicio.setValue(new Date(this.dataVisitaInicio.value).toLocaleDateString('zh-TW'));
    }
    return filtro;
  }

  aplicarCSSErro(controlName: string) {
    return FormUtil.aplicarCSSErro(this.formulario, controlName);
  }

  mostrarErro(controlName: string) {
    return FormUtil.mostrarErro(this.formulario, controlName);
  }

  // metodo responsável por "ouvir" alterações nos controles do formulário
  respondendoMudancasDoForm(): void {
    // sempre que o controle dataVisitaInicio sofrer alteração será devolvido um Observable<any>.
    this.dataVisitaInicio.valueChanges.subscribe(
      // tslint:disable-next-line: max-line-length
      //  com o observable vc faz se inscreve passando uma função que recebe como parâmetro uma string, (cada valor digitado no controle dataVisitaInicio)
      (dataVisitaInicio: string) => {
        // tslint:disable-next-line: max-line-length
        // o comportamento da função faz.. pega o valor digitado no controle this.dataVisitaFinal e configura nele próprio um novo array de validações.
        this.dataVisitaFinal.setValidators(
          [
            Validators.required,
            // DateValidator.date,
            // FormUtil.date,
            FormUtil.dataInicioMaiorQueFinal(dataVisitaInicio),
            // FormUtil.intervaloMaiorQueTresMeses(dataVisitaInicio)

          ]
        );
        // atualiza o controle com as novas validações
        this.dataVisitaFinal.updateValueAndValidity();
      }
    );
    // sempre que o controle dataVisitaFinal sofrer alteração será devolvido um Observable<any>.
    this.dataVisitaFinal.valueChanges.subscribe(
      //  com o observable vc faz se inscreve passando uma função que desta vez não recebe parâmetro algum;
      () => {
        // tslint:disable-next-line: max-line-length
        // o comportamento da função faz.. pega o valor já digitado no controle this.dataVisitaInicio e e configura no controle this.dataVisitaFinal um novo array de validações.
        this.dataVisitaFinal.setValidators(
          [
            Validators.required,
            // FormUtil.date,
            // DateValidator.date,
            FormUtil.dataInicioMaiorQueFinal(this.dataVisitaInicio.value),
            // FormUtil.intervaloMaiorQueTresMeses(this.dataVisitaInicio.value)
          ]
        );
      }
    );
  }


}
