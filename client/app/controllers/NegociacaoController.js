class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inpuQuantidade = $('#quantidade');
        this._inpuValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._limparFormulario();
        
        console.log(this._negociacoes.paraArray());

    }

    _limparFormulario(){
        this._inputData.value = '';
        this._inpuQuantidade.value = 1;
        this._inpuValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inpuQuantidade.value),
            parseFloat(this._inpuValor.value) 
        );
    }
}