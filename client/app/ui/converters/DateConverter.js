System.register(['./DataInvalidaException.js'], function (_export, _context) {
    "use strict";

    var DataInvalidaException;
    return {
        setters: [function (_DataInvalidaExceptionJs) {
            DataInvalidaException = _DataInvalidaExceptionJs.DataInvalidaException;
        }],
        execute: function () {
            class DateConverter {

                constructor() {
                    throw new Error('Esta classe não pode ser instanciada');
                }

                static paraTexto(data) {

                    let dia = data.getDate();
                    let mes = data.getMonth() + 1;
                    let ano = data.getFullYear();

                    return `${dia}/${mes}/${ano}`;
                }

                /**
                 * 
                 * @param {objeto} texto 
                 */
                static paraData(texto) {

                    if (!/\d{2}\/\d{2}\/\d{4}$/.test(texto)) {
                        throw new DataInvalidaException();
                    }

                    return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
                }
            }

            _export('DateConverter', DateConverter);
        }
    };
});
//# sourceMappingURL=DateConverter.js.map