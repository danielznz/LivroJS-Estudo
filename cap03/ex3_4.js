const prompt = require("prompt-sync")() //adiciona o pacote ao program
const racao = Number(prompt("Peso da Ração em Kilo(kg): "))
const consumo = Number(prompt("Consumo em Gramas(gr): "))

const kilograma = racao * 1000
const duracao = Math.floor(kilograma/consumo)
const sobra = kilograma%consumo

console.log("Peso da Ração: " + racao)
console.log("Consumo em gramas: " + consumo)
console.log("Duração: " + duracao + " dias")
console.log("Sobra: " + sobra + " gramas")