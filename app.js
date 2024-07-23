'use strict' /*modo estrito = reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.*/
/*para fazer algum botão funcionar, precisa do manipulador de eventos "click"*/
const switcher = document.querySelector ('.btn'); /*referencia obrigatória para o botão*/

switcher.addEventListener ('click', function (){
    document.body.classList.toggle('dark-theme') /* método TOGGLE altera o elemento */

    var className = document.body.className;
    if(className=='light-theme'){
        this.textContent = 'Dark';
    }
    else {
        this.textContent = 'Light';
    }

    console.log("current class name: "+ className);
});
