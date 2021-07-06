let number = 5;
let linhas = "";

for (let index = 1; index <= number; index += 1) {
  for (let secondIndex = 1; secondIndex <= number; secondIndex += 1) {
    linhas += "*"
  }
  console.log(linhas)
  linhas = "";
}