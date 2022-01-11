const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteudo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possivel ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });