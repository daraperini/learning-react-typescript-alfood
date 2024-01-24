# Alfood

Alfood is an Ifood-based website developed during Alura's course *React: integrating your React project with APIs*. I'll be using Docker to upload the back-end server and I'll refactor the inicial static code turning it dinamic using API Rest. Also I'll be creating an admin area so users can make changes however they want when logged in an admin account.

> The project is currently in development.

## Used tools:

* React
* TypeScript
* Docker
* API Rest

*(Alura is a Brazilian technology school and for acessibility reasons this code is in Portuguese)*

## Initializing the project on your computer

- Install Docker[https://www.docker.com/products/docker-desktop/] in your computer;

- Clone the repository using the command line:
    - git clone *link of the repository*

- Clone the API using the command line:
    - git clone *API Link[https://github.com/alura-cursos/restaurantes_api]*
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

Alfood é um website baseado no Ifood, desenvolvido no curso *React: integrando seu projeto React com APIs*, da Alura. Nele utilizarei o Docker para subir o servidor beck-end e, com o auxílio do API Rest, refatorei o código inicial estático e o tornei dinâmico. Além disso criei uma área administrativa conectada com o servidor back-end do site, em que os usuários podem fazer mudanças nos restaurantes e nos pratos.

> O projeto está em desenvolvimento.

## Ferramentas utilizadas:

* React
* TypeScript
* Docker
* API Rest

## Iniciando as versões do projeto na sua máquina

- Instale o Docker[https://www.docker.com/products/docker-desktop/] na sua máquina;

- Clone o repositório através do terminal:
    - git clone *link do repositório*
 
- Clone a API através do terminal:
    - git clone *Link da API[https://github.com/alura-cursos/restaurantes_api]*
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
