let chessPiece = "REI";

switch(chessPiece.toLowerCase()) {
  case "cavalo":
    console.log("Se move em formato de L");
    break;
  case "peao":
    console.log("No primeiro movimento ele pode andar 1 ou 2 casas para frente. Apos isso apenas 1 casa");
    break;
  case "bispo":
    console.log("Se movem apenas em diagonal, porem podem ir de um lado a outro do tabuleiro dentro da sua cor");
    break;
  case "torre":
    console.log("Se movimenta em linhas retas, se houver espaço podem ir de uma lado a outro do tabuleiro.");
    break;
  case "rainha":
    console.log("Ela combina o poder da diagonal dos bispos e a linha reta da torre.");
    break;
  case "rei":
    console.log("Ele se movimenta em linha reta ou em diagonal porem uma casa por jogada.");
    break;  
}