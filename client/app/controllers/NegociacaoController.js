class NegociacaoController {

    constructor(){
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inpuQuantidade = $('#quantidade');
        this._inpuValor = $('#valor');
        this._negociacoes = new Negociacoes(model => {
            this._negociacoesView.update(model);
        });
        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._mensagemView = new MensagemView('#mensagemView');
        
        this._mensagem = new Mensagem();
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
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

    apaga(){
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}