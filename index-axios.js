// Importando os módulos necessários
const express = require("express");
const app = express();
const http = require("http");
const axios = require("axios");

// Definindo rota para obter dados da API de posts
app.get("/posts", (req, res) => {
  // URL da API de posts
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  // Fazendo uma requisição à API usando axios
  axios
    .get(apiUrl)
    .then((apiResponse) => {
      // Configurando cabeçalho da resposta HTTP
      res.writeHead(200, { "Content-Type": "text/plain" });

      // Enviando os dados da API como resposta
      res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
    })
    .catch((error) => {
      // Lidando com erros ao acessar a API
      console.error("Erro ao acessar a API", error);
    });
});

// Definindo rota para obter dados da API de comentarios
app.get("/comments", (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/comments";

  axios
    .get(apiUrl)
    .then((apiResponse) => {
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
    })
    .catch((error) => {
      console.error("Erro ao acessar a AP", error);
    });
});

// Definindo rota para obter dados da API de albums
app.get("/albums", (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/albums";

  axios
    .get(apiUrl)
    .then((apiResponse) => {
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
    })
    .catch((error) => {
      console.error("Erro ao acessar a API", error);
    });
});

// Definindo rota para obter dados da API de fotos
app.get("/photos", (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/photos";

  axios
    .get(apiUrl)
    .then((apiResponse) => {
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
    })
    .catch((error) => {
      console.error("Erro ao acessar a API", error);
    });
});

// Definindo rota para obter dados da API de todos
app.get("/todos", (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";

  axios
    .get(apiUrl)
    .then((apiResponse) => {
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
    })
    .catch((error) => {
      console.error("Erro ao acessar a API", error);
    });
});

// Definindo rota para obter dados da API de usuarios
app.get("/users", (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  axios
    .get(apiUrl)
    .then((apiResponse) => {
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`);
    })
    .catch((error) => {
      console.error("Erro ao acessar a API", error);
    });
});

// Criando servidor HTTP usando o express
const server = http.createServer(app);

// Definindo a porta em que o servidor será executado
const PORT = 3006;

// Iniciando o servidor e ouvindo na porta definida
server.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
