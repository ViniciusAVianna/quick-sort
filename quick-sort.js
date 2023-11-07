let livros = require('./array');
const trocaLugar = require('./index');

function quickSort(lista, inicio, fim){
    if (lista.length > 1){
        let novoIndice = particiona(lista, inicio, fim);
        if (inicio < novoIndice - 1){
            quickSort(lista, inicio, novoIndice - 1);
        }
        if (novoIndice < fim){
            quickSort(lista, novoIndice, fim);
        }
    }
    return lista;
}

function particiona(lista, inicio, fim){
    let pivo = lista[Math.floor((inicio + fim) / 2)];
    let indiceApartirDoInicio = inicio;
    let indiceApartirDoFim = fim;

    while (indiceApartirDoInicio <= indiceApartirDoFim){
        while(lista[indiceApartirDoInicio].preco < pivo.preco){
            indiceApartirDoInicio++;
        }
        while (lista[indiceApartirDoFim].preco > pivo.preco){
            indiceApartirDoFim--;
        }
        if (indiceApartirDoInicio <= indiceApartirDoFim){
            trocaLugar(lista, indiceApartirDoInicio, indiceApartirDoFim);
            indiceApartirDoInicio++;
            indiceApartirDoFim--;
        }
    }
    return indiceApartirDoInicio;
}

console.log(quickSort(livros, 0, livros.length - 1));