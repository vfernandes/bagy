# Desafio Bagy
Informações sobre o projeto:

## Como executar
### `yarn install`
### `yarn start`

Execute o app em modo development.<br />
Abra o link http://localhost:3000.

## Informações sobre o projeto

### Decisões para o desenvolvimento
Typescript para melhorar a legibilidade e tipagem dos elementos.
SASS como exemplo de uso, mas poderia ter sido css puro.
Fontes em svg atraves do icomoon para melhorar a performace.
Redux para gerenciamento de estados globais

### Como o projeto foi montado
create-react-app desafio-bagy --typescript
yarn add node-sass -D
yarn add react-router-dom
yarn add @types/react-router-dom -D
yarn add @apollo/client graphql
yarn add react-apexcharts apexcharts
yarn add @types/react-redux

### Designer patterns
Render Props Pattern // Compartilhamento de funções por parametro
Provider Pattern // Utilização de um provider padrão c/ redux