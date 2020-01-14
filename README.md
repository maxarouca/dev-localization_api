# dev-localization_api
Api desenvolvida na semana OmniStack para um aplicação de localização de desenvolvedores baseada em Geolocalização

## Tecnologias utilizadas

- NodeJS
- Express
- MongoDB
- Mongoose
- Sucrase
- Axios
- Eslint
- Prettier
- DotEnv

## Requisitos

1. Para rodar a aplicação, é necessário ter o NodeJS instalado em seu sistema operacional;
2. Criar um cluster no MongoDb Atlas;
3. Criar um arquivo na raiz do projeto chamado `.env`, que conterá as seguintes variáveis de ambiente:
  - PORT (Porta utilizada para subir a aplicação)
  - DATABASE (Nome da database - o padrão é test)
  - DATABASE_USER (Nome de usuário do banco de dados configurado no MongoAtlas)
  - DATABASE_KEY (Senha do banco de dados configurada no MongoAtlas)

## Executando

Para executar o projeto, basta abrir o terminal na pasta do projeto e rodar o comando `yarn dev`, que iniciará o servidor já conectado no banco de dados e com o live-reload fornecido pelo nodemon.
