----
Pré-requisitos:
- [Git](https://git-scm.com/ "Git")
- [Composer](https://getcomposer.org/ "Composer")
- [Docker](https://docs.docker.com/get-started/ "Docker")
- [Docker Compose](https://docs.docker.com/compose/install/ "Docker Compose")

#### Para iniciar o projeto siga os passos abaixo:
```
Clone o projeto:
  git clone https://github.com/ThiagoAlves31/nestjs-w-api.git

Entre no diretório do projeto:
  cd nestjs-w-api
  
Modifique o arquivo .env.example para .env:
  cp .env.example .env
```
#### Iniciar container:

```
Iniciando os containers do projeto:
  docker-compose up -d --build

Após iniciar o projeto o primeiro update dos dados será executado, o tempo de atualização 
poderá ser configurado no arquivo .env na variável de ambiente TIME_MILLISECONDS.

Os dados no db poderá ser visualizado utilizando o link http://localhost:8080/
devendo escolher:
  Sistema: Mysql
  Servidor: db_api
  Usuário: DB_USERNAME que está no .env
  Senha: DB_PASSWORD que está no .env
  Base de Dados: DB_NAME que está no .env
```
### Utilizando API
```
Filtrando por range de data('yyyy-mm-dd') e ordenando por numero de ups

GET - http://localhost:3000/artificial-hot/2021-03-28/2021-03-29/ups
  
Filtrando por range de data('yyyy-mm-dd') e ordenando por numero de comentários

GET - http://localhost:3000/artificial-hot/2021-03-28/2021-03-29/num_comments 

Pegando todos os dados e ordenando por numero de ups

GET - http://localhost:3000/artificial-hot/ups
  
Pegando todos os dados e ordenando por numero de comentários

GET - http://localhost:3000/artificial-hot/num_comments
```
