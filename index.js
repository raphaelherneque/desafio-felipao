// Variáveis
let nomeHeroi = "Ragher" 
let xpHeroi = 10000
let nivelHeroi

// Estrutura de decisão com switch case para classificar o nível
switch (true) {
  case xpHeroi < 1000:
    nivelHeroi = "Ferro"
    break
  case xpHeroi >= 1001 && xpHeroi <= 2000:
    nivelHeroi = "Bronze"
    break
  case xpHeroi >= 2001 && xpHeroi <= 5000:
    nivelHeroi = "Prata"
    break
  case xpHeroi >= 6001 && xpHeroi <= 7000:
    nivelHeroi = "Ouro"
    break
  case xpHeroi >= 7001 && xpHeroi <= 8000:
    nivelHeroi = "Platina"
    break
  case xpHeroi >= 8001 && xpHeroi <= 9000:
    nivelHeroi = "Ascendente"
    break
  case xpHeroi >= 9001 && xpHeroi <= 10000:
    nivelHeroi = "Imortal"
    break
    
  default:
    nivelHeroi = "Radiante";
}

// Mensagem de saída
console.log( "O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi )