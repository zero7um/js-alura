function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;
    //console.log(contador);
}
duhad dnud naud adna d
//Teste de commit. Segundo teste de commit But there is a few things to add yet
