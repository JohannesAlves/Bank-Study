Sobre o projeto:

### <strong>FRONT-END</strong> <br/>

Eu estou utilizando React C/ Tailwind CSS,
e para o consumo das APIs do projeto estou usando Axios para facilitar.
Com interesse de aumentar a perfomance do projeto utilizei react-hook-form em todos os forms do projeto.
Para as rotas utilizei react-router-dom, e também protegi todas as rotas que eram necessárias.
Para os toasts, utilizei a lib toastify que deixa bem bonito visualmente, e já com configurações personalizáveis.

### <strong>BACK-END</strong>

Eu decidi utilizar o Prisma como ORM, pois ele é um facilitador gigantesco para a modelagem do banco de dados.
Utilizei o CORS para não receber requisições de páginas desconhecidas, e também para permitir o consumo das APIs no front.
O express como o mais conhecido framework de Node.JS foi minha decisão para abrir o servidor.
Nas questões de segurança estou utilizando JWT Token com as rotas necessárias de autenticação.

## Demonstração
https://digitalrepublicweb.onrender.com/
![](https://github.com/JohannesAlves/DigitalRepublic/blob/master/APP.gif)

## Funcionalidades

-   Transferência e Depósito
-   Login
-   Registro
-   Histório de depósitos e transferências

## Instalação

## Server App

1. Na pasta SERVER, execute o comando:

```bash
  npm i
  npx prisma db pull
  npx prisma migrate dev
```

2. Execute o SERVER:

```bash
  npm run dev
```

## Web App

1. Na pasta WEB, execute o comando:

```bash
  npm i
  npm run dev
```
