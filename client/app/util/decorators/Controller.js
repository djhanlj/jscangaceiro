System.register([], function (_export, _context) {
    "use strict";

    function controller(...seletores) {

        const elements = seletores.map(seletor => document.querySelector(seletor));

        return function (constructor) {
            const constructorOriginal = constructor;
            const constructorNovo = function () {
                const instance = new constructorOriginal(...elements);

                // varre cada propriedade da classe
                Object.getOwnPropertyNames(constructorOriginal.prototype).forEach(property => {
                    if (Reflect.hasMetadata('bindEvent', instance, property)) {
                        associaEvento(instance, Reflect.getMetadata('bindEvent', instance, property));
                    }
                });
            };

            // ajustando o prototype
            constructorNovo.prototype = constructorOriginal.prototype;
            // retornando o novo constructor
            return constructorNovo;
        };
    }

    _export('controller', controller);

    function associaEvento(instance, metadado) {
        document.querySelector(metadado.selector).addEventListener(metadado.event, event => {
            if (metadado.prevent) event.preventDefault();
            instance[metadado.propertyKey](event);
        });
    }
    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=Controller.js.map