let livros = require('./listaLivros')
let maisBarato = 0;

for (let atual = 1; atual < Livros.length; atual++) {
    if (livros[atual].preco < Livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa: ${Livros[maisBarato]} mangos e se chama${livros[maisBarato] .titulo}`);