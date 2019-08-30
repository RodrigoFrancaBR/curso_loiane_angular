import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit(): void;

  onSubmit(): void {
    if (this.formulario.valid) {
      this.submit();
    } else {
      this.markAllControlAsDirty(this.formulario);
    }

  }

  aplicarCSSErro(controlName: string) {
    return this.isValid(controlName) ? { 'is-invalid': true } : null;
  }

  mostrarErro(controlName: string) {
    return this.isValid(controlName);
  }

  // um campo é inválido qdo possui algum erro já estiver sido tocado ou ganho foco.
  isValid(controlName: string): boolean {
    return this.formulario.get(controlName).errors &&
      (this.formulario.get(controlName).touched ||
        this.formulario.get(controlName).dirty) ? true : false;
  }

  markAllControlAsDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.markAllControlAsDirty(controle);
      }
    });
  }
}
