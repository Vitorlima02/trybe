import readline from "readline-sync";

const scripts = [
  { name: "Converter comprimento", script: "./length" },
  { name: "Converter massa", script: "./mass" },
  { name: "Converter capacidade", script: "./capacity" },

]

const scriptsName = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptsName, "Escolha um numero para executar o script de conversão", { cancel: 'SAIR' });

if (choice === -1) console.log('Saindo!');

else require(scripts[choice].script);
