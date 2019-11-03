import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
export class DateUtil {

    public static date(c: FormControl) {
        if (c.value === '' || c.value == null || c.value === '' || c.value === undefined) {
            return null;
        }
        const ExpReg = new RegExp('(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}');
        const pData = c.value;
        const data = pData.split('/');
        let dataValida = true;

        if (pData.search(ExpReg) === -1) { // Valida formato dd/MM/yyyy
            dataValida = false;
        }

        const dia: number = parseInt(data[0], 10);
        const mes: number = parseInt(data[1], 10);
        const ano: number = parseInt(data[2], 10);

        // Valida meses com 30 dias
        if (((mes === 4) || (mes === 6) || (mes === 9) || (mes === 11)) && (dia > 30)) {
            dataValida = false;
        }

        // Ano bissexto: 29 dias
        if (dataValida && mes === 2) { // Valida m�s de fevereiro
            // Ano N�O bissexto: 28 dias
            if ((dia > 28) && ((ano % 4) !== 0)) {
                dataValida = false;
            }

            // Ano bissexto: 29 dias
            if ((dia > 29) && ((ano % 4) === 0)) {
                dataValida = false;
            }
        }

        if (dataValida) {
            return null
        } else {
            return { date: true };
        }

    }
}
