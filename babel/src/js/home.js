import '../css/styles.css';
import text from './text.js';

// console.log('Hola mundo desde Webpack! home');

text();

if (module.hot) {
  module.hot.accept('./text.js', function(){
    console.log('He recargado en caliente');
    text();
  })
}
