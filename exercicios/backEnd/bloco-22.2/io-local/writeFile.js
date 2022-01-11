const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu TexTão')
  .then(() => {
    console.log('Arquivo escrito com sucesso.');
  })
  .catch((err) => {
    console.error(`Falha ao escrever o arquivo ${err.message}`);
  })