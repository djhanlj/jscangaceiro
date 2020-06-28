export function debounce(fn, milissegundos) {
    let timer = 0;

    return () => {
        clearTimeout(timer);
        // usa um temporizador para chamar fn()
        // depois de tantos milissegundos
        timer = setTimeout(() => fn(), milissegundos);
    }
}