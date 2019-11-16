
import { FormUtil } from './../../util/form-util';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  // GETS DOS CONTROLES OBRIGATÓRIOS DO FORM
  get dataVisitaInicio(): AbstractControl {
    return this.formulario.get('dataVisitaInicio');
  }
  get dataVisitaFinal(): AbstractControl {
    return this.formulario.get('dataVisitaFinal');
  }
  @Output()
  execucaoPesquisa = new EventEmitter();
  formulario: FormGroup;

  ngOnInit() {
    this.iniciarForm();
    this.respondendoMudancasDoForm();
  }

  private iniciarForm(): void {
    this.formulario = this.fb.group({
      dataVisitaInicio: [null, [Validators.required]],
      dataVisitaFinal: [null, [Validators.required]]
    });
  }

  // caso queira disparar msg de erro se o campo já estiver sido tocado com tab
  onKey($event) {
    console.log($event);
    this.formulario.markAsTouched();
  }

  // submit do form
  pesquisar(): void {
    if (this.formulario.status === 'INVALID') {
      FormUtil.marcaComoDirtyOsControles(this.formulario);
      return;
    }
    this.execucaoPesquisa.emit(this.formulario.value);
  }

  limparFiltro(): void {
    // console.log(this.formulario);
    this.formulario.reset();
    // FormUtil.marcaComoPristineOsControles(this.formulario);
    // console.log(this.formulario);
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
      //  com o observable vc se inscreve passando uma função que recebe como parâmetro uma string,
      // (cada valor digitado no controle dataVisitaInicio)
      (dataVisitaInicio: string) => {
        // FormUtil.respondendoMudancasDoForm(dataVisitaInicio, this.dataVisitaFinal);
        // o comportamento da função faz.. pega o valor digitado no controle this.dataVisitaFinal e
        // configura nele próprio um novo array de validações.
        this.dataVisitaFinal.setValidators(
          [
            Validators.required,
            FormUtil.dataInicioMaiorQueFinal(dataVisitaInicio),
            FormUtil.intervaloMaiorQueTresMeses(dataVisitaInicio)
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
        // o comportamento da função faz.. pega o valor já digitado no controle this.dataVisitaInicio e
        // configura no controle this.dataVisitaFinal um novo array de validações.
        this.dataVisitaFinal.setValidators(
          [
            Validators.required,
            FormUtil.dataInicioMaiorQueFinal(this.dataVisitaInicio.value),
            FormUtil.intervaloMaiorQueTresMeses(this.dataVisitaInicio.value)
          ]
        );

        // atualiza o controle com as novas validações
        // this.dataVisitaFinal.updateValueAndValidity();
      }
    );
  }
}
