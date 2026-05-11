let precoLivros = [25, 15, 50, 100, 180, 40, 50];

let maisBarato = 0;

for (let atual = 1; atual < precoLivros.length; atual++) {
    if (precoLivros[atual] < precoLivros[maisBarato]) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa: ${precoLivros[maisBarato]} mangos`);