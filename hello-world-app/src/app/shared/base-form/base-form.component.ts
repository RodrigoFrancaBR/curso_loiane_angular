import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  templateUrl: '<./base-form.component.html>',
  styleUrls: ['./base-form.component.css']
})
export abstract class BaseFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // abstract onSubmit();
  // if (this.formulario.valid) {
  //   this.submit();
  // } else {
  //   console.log('formulario invalido');
  //   this.verificaValidacoesForm(this.formulario);
  // }



}
