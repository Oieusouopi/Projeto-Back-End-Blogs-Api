# Bem-Vindo ao Projeto de Blogs-Api

Qualquer problema me mande um email rafasc866@gmail.com

## Sobre

Este é um projeto para utilizar as tecnologias aprendidas na trybe no módulo de back-end, este projeto
cria um CRUD de uma simulação de um banco de dados de um blog onde temos os módelos de Usuarios(Users), categorias(Category),posts dos blogs (PostBlogs)
e a junção de categorais com o posts dos blogs (PostCategory).

## Tecnlogias utilizadas

- NodeJs (Rest API, Express).
- JavaScript (Linguagem de programação).
- SQL (Linguagem para comunicar com o banco).
- Docker (Container).
- Jwt (Validação de usuário).
- MySQL (Banco de dados).
- Sequelize (ORM (Object relation mapper) um tradutor de SQL para JS em bancos relacionais).
- MSC (Arquitetura (Model, Service, Controller)).

## Antes de começar

### Docker vs Localmente

#### Com Docker
Se vocẽ não tiver nada instaldo temos o Docker para poder rodar sem instalar nem uma tecnologias em sua maquina
para isto você tem que ter o docker instalado na sua maquina.

> Rode os serviços node e db com o comando docker-compose up -d.

- Se tiver um serviço MySQL rodando em sua maquina na porta (`3306`) lembre-se de para este serviço.
- Este serviço iram inicializar dois container um chamado `store_manager` e outro chamado `store_manager_db`.

> Use o comando docker exec -it store_manager bash.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências [Caso existam] com npm install

- Caso utilize o docker os comandos (npm start, npm run... etc) terão que ser utilizados dentro do terminal.

#### Sem Docker

> Instale as dependências [Caso existam] com npm install

### Conexão com o banco

```
require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});
Para os testes rodarem corretamente, na raiz do projeto renomeie o arquivo .env.example para .env com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja nome e a senha 1234 seu arquivo ficará desta forma:
```
```
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
MYSQL_DATABASE=StoreManager
PORT=3000
```
