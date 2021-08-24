# :rocket: API Space X

## :earth_africa: Acesso a API 
http://api-space-x.herokuapp.com

Rotas:
- Próximo lançamento: http://api-space-x.herokuapp.com/launches/next
- Próximos lançamentos: http://api-space-x.herokuapp.com/launches/upcoming
- Último lançamento: http://api-space-x.herokuapp.com/launches/latest
- Últimos lançamentos: http://api-space-x.herokuapp.com/launches/past

## 🔨 Instalação
```bash
$ npm install
$ npm start
```

Acesso: http://localhost:8080.

## :building_construction: Arquitetura e design
Foram ultilizados os padrões de Clean Arquitecture e TDD.
Partiu-se do principio de isolar a camada de negócio dos componentes externos.
Exemplo: Se a API do Space X mudar, basta alterar o arquivo **LaunchRepositoryRestClient**, que é uma implementação do **LaunchRepository**.

## :ballot_box_with_check: Testes
```bash
$ npm install
$ npm test
```
Foram criados testes dos casos de uso, para validação das datas.
É verificado se a data que retorna da API é condizente com o contexto da rota (passado ou futuro).

## :soon: Próximos passos
- Criar estrutura para proteger as rotas e permitir o acesso apenas com token.
- Criar rota para trazer os detalhes dos lançamentos.
