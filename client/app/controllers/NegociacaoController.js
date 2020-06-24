class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inpuQuantidade = $('#quantidade');
        this._inpuValor = $('#valor');

        this._service = new NegociacaoService();

        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'adiciona', 'esvazia'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView('#mensagemView'),
            'texto',
        );

    }

    adiciona(event) {

        try {
            event.preventDefault();
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._limparFormu();

        } catch (err) {

            console.log(err);
            console.log(err.stack);

            if (err instanceof DataInvaliaException) {
                this._mensagem.texto = err.message;
            } else {
                this._mensagem.texto = "Um erro não esperado aconteu. Entre em contato com o suporte";
            }

        }

    }

    _limparFormulario() {
        this._inputData.value = '';
        this._inpuQuantidade.value = 1;
        this._inpuValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inpuQuantidade.value),
            parseFloat(this._inpuValor.value)
        );
    }

    apaga() {
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }

    importaNegociacoes() {

        this._service.obtemNegociacoesdoPeriodo()
            .then(negociacoes => {
                negociacoes.filter(novaNegociacao => !this._negociacoes.paraArray()
                    .some(negociacaoExistente => novaNegociacao.equals(negociacaoExistente)))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
            })
            .catch(err => this._mensagem.texto = err);
    }

}
