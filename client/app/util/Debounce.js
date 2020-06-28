System.register([], function (_export, _context) {
    "use strict";

    function debounce(fn, milissegundos) {
        let timer = 0;

        return () => {
            clearTimeout(timer);
            // usa um temporizador para chamar fn()
            // depois de tantos milissegundos
            timer = setTimeout(() => fn(), milissegundos);
        };
    }

    _export("debounce", debounce);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=Debounce.js.map