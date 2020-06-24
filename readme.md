# Capítulo 1
- Apresentação do sistema a ser desenvolvido;
- Solução tradicional; 

# Capítulo 2
 - Separação de responsabilidades com padrão de projeto MVC;
 - Criação do modelo Negociacao;
 - Utilizando `constructor`, 
 - Métodos `get` e `set`
 - Métodos `assign` e `freeze` para tratamento de objetos
 - Propriedades de objetos literais
 - Declaração de variáveis com `VAR` ou `LET` e seus escopos

 # Capítulo 3
 - Apresentação do controller do padrão MVC;
 - Criação do controller NegociacaoController;
 - Criação do arquivo app.js que vai centralizar a configuração do projeto;
 - Captura dos dados do formulário para o controller;
 - Utilização dos métodos `bind`, `split` e `spread`;
 - Formas de utilizar a classe Date;

  # Capítulo 4
 - Criação da classe DateConverter para tratamento de data;
 - Criação de métodos utilizando o `static`;
 - Tratamento de exceções utilziando `throw` e classe `Error`;
 - Utilização de templates literais `${}`;

  # Capítulo 5
 - Criação da classe Negociacoes para armazenar os dados da negociacao;
 - Criação de métodos privados na classe NegociacaoController para separação de responsabilidades;
 - Organizando a ordem dos imports no arquivo index.html;
 - Refatoração do método adicionar da classe NegociacaoController; 
 - Utilização dos métodos de array `push` e `concat`

  # Capítulo 6
 - Apresentação da view do padrão MVC;
 - Criação da classe NegociacoesView o qual fica responsável por renderizar a tabela com os dados inseridos via formulário;
 - Utilização de templates literais `${}` na criação da tabela;
 - Utilização do método `map` para listagem dos dados na tabela;
 - Utilização do método `reduce` para apresentar a soma do volume no footer da tabela;

  # Capítulo 7
 - Criação das classes View, Mensagem e MensagemView;
 - Utilização herança da Orientação a Objetos;
 - Utilização de subescrita de métodos;
 - Utilização do método `super`;
 - Refatoração de algumas classes utilizando herança;
 - Declaração de variáveis com `const`;
  
  # Capítulo 8
 - Refatoração da lógica de apresentação dos dados na View;
 - Utilização de `arrow function` e seu escopo; 

  # Capítulo 9
 - Utilizando padrão de projeto Proxy;
 - Refatorando o modelo Negocios para não carregar muitas responsabilidades ao modelo;
  
  # Capítulo 10
 - Utilizando padrão de projeto Factory;
 - Criação do Bind para interligar a visão com a atualização do modelo de forma automática;
 - Refatorando a classe NegociacaoController;
 - Utilização do operador `spread`

  # Capítulo 11
 - Tratamento de exceções com a classe Error;
 - Criando classes de Erro para utilizar na aplicação;
 - Utilização `try` e `catch` para tratamento de exceções; 
 - Utilização do método de array `reverse` 

  # Capítulo 12
 - Consumo de uma API utilizando os recursos da classe XMLHttpRequest;
 - Listando dados utilizando os métodos `open`, `readyStete`, `xhr.onreadystatechange`, `status`, `send` e  `responseText` da classe XMLHttpRequest;
 - Criação de Service para separação de responsabilidade ao consumir API;
 
  # Capítulo 13
 - Utilização de Promisse para tratar retorno da requisição HTTP;
 - Utilização de Promisse individuais e do método Promisse.all;
 - Refatoração da conexão a API;
 - Utilização dos métodos de array `filter` e `some`, e também do método `JSON.stringify` para comparar string; 