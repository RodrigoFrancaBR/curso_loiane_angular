import { Injectable } from '@angular/core';

@Injectable()
export class EstadoTela {
    constructor(
        public status: string = 'buscar'
    ) { }

    // Metodos para controle da tela

    public isSalvar(): boolean {
        return 'salvar' === this.status;
    }

    public isEditar(): boolean {
        return 'editar' === this.status;
    }

    public isBuscar(): boolean {
        console.log (this.status);
        return 'buscar' === this.status;
    }

    public mudarParaSalvar() {
        console.log (this.status);
        this.status = 'salvar';
    }

    public mudarParaEditar(): void {
        this.status = 'editar';
    }

    public mudarParaBuscar(): void {
        this.status = 'buscar';
    }

}
