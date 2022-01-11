const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu TexTão')
    console.log('Arquivo escrito com sucesso.');
  } catch (err) {
    console.error(`Falha ao escrever o arquivo ${err.message}`);
  }
}

main();