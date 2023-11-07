const listaLivros = require('./array');
let livros = require('./array');

function encontraMenores(pivo, lista){
    let qtddMenores = 0;

    for (let i = 0; i < lista.length; i++){
        let itemAtual = lista[i];
        if (itemAtual.preco < pivo.preco){
            qtddMenores++;
        }
    }
    
    trocaLugar(lista, lista.indexOf(pivo), qtddMenores);
    return lista;
}

function trocaLugar(lista, de, para){
    let elem1 = lista[de];
    let elem2 = lista[para];

    lista[de] = elem2;
    lista[para] = elem1;
}

function divideNoPivo (lista){
    let pivo = lista[Math.floor(lista.length / 2)];
     encontraMenores(pivo, lista);
     let valoresMenores = 0;

     for (analisando = 0; analisando < lista.length; analisando++){
        let item = lista[analisando];
        if (item.preco <= pivo.preco && item !== pivo){
            trocaLugar(lista, analisando, valoresMenores);
            valoresMenores++;
        }
     }
    return lista;
}

//console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;