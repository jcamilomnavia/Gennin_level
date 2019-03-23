# Gennin Level

## Instalation

- Create folder with project name
- git init
- npm init
- create .gitignore
- ```git rm -r --cached .```
- ```git add .```
- ```npm i nodemon -save-dev```
- npm i standard babel-eslint -save-dev
- npm i express
- npm i mongoose
- create index.js file

- inside of package.json
    - "dev" : "nodemon index.js"
    - "lint" : standard --fix"

## Run

- create run_dev.sh file like this:
    ```
    PORT=<port> USER=<user> npm run dev
    ```
- ```sh run_dev.sh```