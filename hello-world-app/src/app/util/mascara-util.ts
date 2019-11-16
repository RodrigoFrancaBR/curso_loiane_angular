export class MascaraUtil {
    public static maskDDMMYYYY = [/[0-9]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];

    public static TelefoneFixoComDDD = ['(', /\d/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/];
    public static TelefoneCelularComDDD = ['(', /\d/, /\d/, ')', ' ', /[0-9]/, '.', /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/];
    public static maskHora = [/[0-9]/, /\d/, ':', /[0-9]/, /\d/];
    public static maskCpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    public static maskCnpj = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    public static maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    static validaNumero(evt) {
        const theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        const regex = /[0-9]/;
        /*Para aceitar o backspace */
        if (key === '\u0008') {
            return;
        }
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) {
                theEvent.preventDefault();
            }
        }
    }

    static validaNumeroComPonto(evt) {
        const theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        /*Para aceitar o backspace */
        if (key === '\u0008') {
            return;
        }
        const regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) {
                theEvent.preventDefault();
            }
        }
    }

    static validaLetra(evt) {
        const theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        /*Para aceitar o backspace */
        if (key === '\u0008') {
            return;
        }
        const regex = /[A-Za-z]/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) {
                theEvent.preventDefault();
            }
        }
    }

    static validaLetraNumero(evt) {
        const theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        const regex = /[A-Za-z0-9]/;
        /*Para aceitar o backspace */
        if (key === '\u0008') {
            return;
        }
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) {
                theEvent.preventDefault();
            }
        }
    }

    static validaNumeroInteiro(evt, valor) {
        const theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        const regex = /[0-9]/;
        /*Para aceitar o backspace */
        if (key === '\u0008') {
            return;
        }
        if (!regex.test(key) || ((valor === undefined || valor === '') && key === '0')) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) {
                theEvent.preventDefault();
            }
        }
    }

    static validaPattern(evt, pattern) {
        const theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        const regex = pattern;
        /*Para aceitar o backspace */
        if (key === '\u0008') {
            return;
        }
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) {
                theEvent.preventDefault();
            }
        }
    }
}
