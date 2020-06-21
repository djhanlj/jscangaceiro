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
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inpuQuantidade.value),
            parseFloat(this._inpuValor.value) 
        )
        

        console.log(DateConverter.paraTexto(negociacao.data));

        console.log(negociacao);

    }
}