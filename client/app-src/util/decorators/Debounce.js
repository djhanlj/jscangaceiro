export function debounce(milissegundos = 500) {
    return function (target, key, descriptor) {
        const metodoOriginal = descriptor.value;
        let timer = 0;
        descriptor.value = function (...args) {

            if(event) event.preventDefault();

            clearTimeout(timer);
            console.log(timer);
            // chama metodoOriginal depois de X milissegundos!
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
            // aqui entra a implementação do nosso método
            //que substituirá o original
        }

        return descriptor;
    }
}