# Minha API Rest
Esta é uma API simples e funcional desenvolvida em Node.js utilizando o framework Express. Ela permite o gerenciamento básico de usuários em memória, servindo como uma excelente base para entender conceitos de rotas, middlewares e verbos HTTP.

## Tecnologias Utilizadas
Node.js: Ambiente de execução Javascript.

Express: Framework web para Node.js.

JSON: Formato para intercâmbio de dados.

## Como Executar o Projeto
Certifique-se de ter o Node.js instalado.

Instale as dependências:

Bash
npm install express
Inicie o servidor:

Bash
node nome-do-seu-arquivo.js
O servidor estará ativo em: http://localhost:3000

##Documentação da API
1. Boas-vindas
Rota: /

Método: GET

Descrição: Retorna uma mensagem de status e o timestamp atual.

2. Informações da API
Rota: /info

Método: GET

Descrição: Retorna metadados da aplicação, como versão e autor.

3. Listar Usuários
Rota: /usuarios

Método: GET

Descrição: Retorna a contagem total e a lista de todos os usuários cadastrados.

4. Cadastrar Usuário
Rota: /usuarios

Método: POST

Corpo da Requisição (JSON):

## JSON
{
  "nome": "Seu Nome",
  "email": "seu@email.com"
}
Regras de Negócio:

Validação de campos obrigatórios.

Remoção de espaços em branco extras (trim).

Padronização do e-mail para minúsculo.

Retorno de erro 400 para dados inválidos.

## Estrutura de Dados (Usuário)
A API utiliza um array em memória para persistência temporária. Cada usuário segue o modelo:

id: Inteiro (autoincrementado)

nome: String

email: String

Autor: Henrique Cavalari
Versão: 1.1.0
