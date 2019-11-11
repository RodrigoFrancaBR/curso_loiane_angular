import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormUtil } from 'src/app/util/form-util';
import { FormGroup, AbstractControl, FormControlName, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-data-inicio',
  templateUrl: './input-data-inicio.component.html',
  styleUrls: ['./input-data-inicio.component.css']
})
export class InputDataInicioComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: member-ordering
  formulario = this.fb.group({
    dataInicio: [null, [Validators.required, FormUtil.date]],
  });


  // GETS DOS CONTROLES OBRIGATÓRIOS DO FORM
  get dataInicio(): AbstractControl {
    return this.formulario.get('dataInicio');
  }
}
