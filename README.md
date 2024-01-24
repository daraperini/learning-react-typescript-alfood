# Alfood

Alfood is an Ifood-based website developed during Alura's course *React: integrating your React project with APIs*. I used Docker to upload the back-end server and refactored the inicial static code turning it dinamic using API REST. I also created an admin area connected to the website's back-end in wich users can create new restaurants and meals, edit and delete them.

In the class I received the back-end API to work with and used Docker to run it. As the focus of the course was to work with API REST, some components were build using MUI.

> Access the admin area typing: http://localhost:3000/admin

## Used tools:

* React
* TypeScript
* Docker
* Axios
* API REST
* MUI

*(Alura is a Brazilian technology school and for acessibility reasons this code is in Portuguese)*

## Initializing the project on your computer

- Install [Docker](https://www.docker.com/products/docker-desktop/) in your computer;

- Clone the repository using the command line:
    - git clone *link of the repository*

- Clone the API using the command line:
    - git clone *[API](https://github.com/alura-cursos/restaurantes_api)*
    - cd *API file*

- Run the API:
    - docker-compose build
    - docker-compose up

- Open the API on the browser:
   - type http://localhost:8000 on your browser
 
- Go to the projects main file:
    - cd *name of the file*
 
- Run the code:
    - npm install (to install all project's dependencies)
    - npm start (to open the project on your browser)
 
* In case the project does not opend automatically type http://localhost:3000 on your browser

#

# Alfood

Alfood é um website baseado no Ifood, desenvolvido no curso *React: integrando seu projeto React com APIs*, da Alura. Nele utilizarei o Docker para subir o servidor beck-end e, com o auxílio do API REST, refatorei o código inicial estático e o tornei dinâmico. Além disso criei uma área administrativa conectada com o servidor back-end do site, em que os usuários podem adicionar, editar e deletar restaurantes e pratos.

A API back-end foi disponibilizada no curso e foi rodada utilizando o Docker. Como o foco do curso era o uso de API REST, alguns componentes foram criados utilizando MUI.

> Acesse a área administrativa digitando: http://localhost:3000/admin

## Ferramentas utilizadas:

* React
* TypeScript
* Docker
* Axios
* API REST
* MUI

## Iniciando as versões do projeto na sua máquina

- Instale o [Docker](https://www.docker.com/products/docker-desktop/) na sua máquina;

- Clone o repositório através do terminal:
    - git clone *link do repositório*
 
- Clone a API através do terminal:
    - git clone *[API](https://github.com/alura-cursos/restaurantes_api)*
    - cd *pasta da API*
  
- Rode a API com os comandos:
    - docker-compose build
    - docker-compose up

- Visualize a API no navegador:
   - digite http://localhost:8000 no seu navegador
 
- Entre na pasta do projeto:
    - cd *pasta do projeto*
 
- Rode o código na sua máquina:
    - npm install (para instalar as dependências do projeto)
    - npm start (para abrir o projeto no seu navegador)
 
* Caso o projeto não abra automaticamente, digite http://localhost:3000 no seu navegador
