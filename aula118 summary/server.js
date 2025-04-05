require("dotenv").config();

const express = require("express");
const app = express();
// EXPRESS, APP:
// iniciando o express e dando o nome de app

const mongoose = require("mongoose");
// MONGOOSE:
// utilizado para fazer uma ligação do servidor
// com a base de dados

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("READY");
    console.log();
    console.log("\x1b[32mConnection to DB successfull.\x1b[m");
    console.log();
  })
  .catch((error) => {
    console.log("\x1b[91mConnection to DB unsuccessfull.\x1b[m");
    console.log();
    console.log(error);
  });

const session = require("express-session");
// !! SESSION:
// salva cookies dos dados do usuário no navegador,
// da próxima vez que ele entrar no site, seu computador
// vai enviar os cookies e o site vai reconhecer que
// o usuário já havia visitado

const MongoStore = require("connect-mongo");
// !! MONGO STORE:
// salva os dados em uma base de dados. Por padrão,
// os dados seriam salvos em memória do servidor,
// que, na prática, iria preencher toda a memória
// rapidamente

const flash = require("connect-flash");
// !! FLASH MESSAGES:
// cria mensagens auto destrutivas, aparecem
// em apenas uma sessão e são deletadas da
// base de dados na próxima sessão

const routes = require("./routes");
// !! ROUTES:
// rotas da aplicação. Onde serão os redirecionamentos
// da aplicação, literalmente as rotas

const path = require("path");
// !! PATH:
// resolve os caminhos de algum lugar, sem precisar usar
// \ ou /, automatiza o processo de pathing, evitando
// erros posteriores, recomendado sempre usar

const helmet = require("helmet");
// !! HELMET:
// altamente recomendado pelo express, possui diversos
// módulos com o propósito de aumentar a segurança da
// aplicação

const csrf = require("csurf");
// !! CSRF:
// cria tokens para os formulários. Faz com que nenhum
// aplicativo ou site externo consiga postar coisas para
// dentro da aplicação, reforçando a segurança ao enviar
// o formulário

const {
  globalMiddleware,
  checkCsrf,
  csrfMiddleware,
} = require("./src/middlewares/globalMiddleware.js");
// !! MIDDLEWARES:
// funções executadas nas rotas. O homeController
// executa diversos middlewares

app.use(helmet());
// inicia o HELMET

app.use(express.urlencoded({ extended: true }));
// permite que formulários sejam postados

app.use(express.json());
// permite a entrada de arquivos .json

app.use(express.static(path.resolve(__dirname, "public")));
// mostra onde estão os arquivos estáticos
// !! ARQUIVOS ESTÁTICOS:
// são os arquivos que podem ser diretamente acessados

const sessionOptions = session({
  // definindo configurações da sessão
  secret: "anything!!",

  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
// iniciando o uso das opções setadas acima

app.use(flash());
// iniciando o uso das FLASH MESSAGES

app.set("views", path.resolve(__dirname, "src", "views"));
// setando os views
// !! VIEWS:
// são os arquivos que são renderizados na tela do cliente

app.set("view engine", "ejs");
// setando a engine dos views, no caso, ejs, porém
// é uma escolha pessoal, existem várias outras
// engines com outros propósitos, elas são setadas
// da mesma maneira, apenas trocando o "ejs"

app.use(csrf());
// iniciando o csrf tokens

// ABAIXO:
// iniciando os middlewares criados pelo desenvolvedor
app.use(checkCsrf);
app.use(csrfMiddleware);
app.use(globalMiddleware);
app.use(routes);

app.on("READY", () => {
  // quando "READY" for ativado, inicia o código abaixo
  app.listen(3000, () => {
    // inicia a porta do servidor e loga uma mensagem
    // no console para avisar que o servidor está rodando
    console.log("\x1b[93mServer is running on port 3000.");
    console.log("http://localhost:3000\x1b[m");
    console.log();
  });
});
