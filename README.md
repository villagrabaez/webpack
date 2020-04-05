# Curso de Webpack

[Documentación oficial de webpack ](https://webpack.js.org/ "Documentación oficial de webpack ")

[Slides del curso de Platzi por Leonidas Esteban](https://docs.google.com/presentation/d/1p4aJ5wAKWmqVeoQoLFI7UUzgzdTsn3N2bT57hBjyPGM/edit?usp=sharing "Slides del curso de Platzi por Leonidas Esteban")

------------

## Instalación y configuración de webpack

`npm install webpack --save-dev --save-exact`

`npm install webpack-cli --save-dev --save-exact`

`npx webpack --entry ./index.js --output ./bundle.js`

`npx webpack --entry ./index.js --output ./bundle.js --mode development`

`npx webpack --entry ./index.js --output ./bundle.js --mode production`

## Configuración del archivo de webpack `webpack.config.js`
Es importante que el archivo de configuración de webpack tenga el siguiente nombre "webpack.config.js"

    const path = require('path');
    
    module.exports = {
      entry: './index.js',
      mode: 'development', // or production
      output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
      }
    }
	
	

#### Correr webpack 

`npx webpack [opciones]`

#### Correr npx webpack con npm

Se puede ejecutar con npm configurando en el archivo package.json en la parte de scripts

`npm run build`

#### Instalar css-loader y style-loader

`npm install --save-dev --save-exact css-loader`

`npm install --save-dev --save-exact style-loader`

#### Instalar plugins

`npm install mini-css-extract-plugin html-webpack-plugin --save-dev --save-exact`

#### Escuchar cambios en los archivos

`npm run build:dev -- -w`

#### Instalar webpack-dev-server

`npm install --save-dev --save-exact webpack-dev-server`

## Soportar javascript moderno

Instalar babel/core babel/preset-env babel-loader

`npm install -D --save-exact @babel/core babel-loader @babel/preset-env`

Intalar plugin para complementar la funcionalidad de babel

`npm install --save --save-exact @babel/runtime`

## Instalar url-loader

 `npm install --save-dev --save-exact url-loader`

## Instalar file-loader

`npm install --save-dev --save-exact file-loader`

