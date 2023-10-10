// Começo criando as variáveis para nome e XP do herói
let nomeHeroi = "Ragher";
let xpHeroi = 0;

// Aqui crio um array com os níveis de XP e nível correspondente
const xpIntervalos = [
  { min: 0, max: 1000, nivel: "Ferro" },
  { min: 1001, max: 2000, nivel: "Bronze" },
  { min: 2001, max: 5000, nivel: "Prata" },
  { min: 5001, max: 6000, nivel: "Ouro" },
  { min: 6001, max: 7000, nivel: "Platina" },
  { min: 7001, max: 8000, nivel: "Ascendente" },
  { min: 8001, max: 9000, nivel: "Imortal" },
  { min: 9001, max: 10000, nivel: "Radiante" },
];

// Aqui crio um loop para calcular o nível do herói
for (let xpAtual = 0; xpAtual <= xpHeroi; xpAtual += 100) {
  let nivelHeroi = "Ferro"; // Nível padrão

  for (const intervalo of xpIntervalos) {
    if (xpAtual >= intervalo.min && xpAtual <= intervalo.max) {
      nivelHeroi = intervalo.nivel;
      break; // Encontrou o nível, pode sair do loop interno
    }
  }

  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
}
