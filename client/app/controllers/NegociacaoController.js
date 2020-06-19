class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inpuQuantidade = $('#quantidade');
        this._inpuValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            new Date(...this._inputData.value.split('-').map( (item, indice) => item - indice % 2)),
            parseInt(this._inpuQuantidade.value),
            parseFloat(this._inpuValor.value) 
        )
        

        console.log(...this._inputData.value.split('-'));

        console.log(negociacao);

    }
}