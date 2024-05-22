const prompt = require("prompt-sync")() //adiciona o pacote ao programa
const salario = Number(prompt("Qual é o seu salário: "))
const tempo = Number(prompt("Quantos anos você trabalha na empresa: "))

const valor = Math.floor(tempo)/4
const aumento = valor * (salario * 0.01)
const salarioFinal = salario + aumento

console.log("\n")
console.log("Salário inicial: " + salario)
console.log("Tempo na Empresa: " + tempo + " anos")
console.log("Aumento de: " + aumento)
console.log("Salário + Aumento: " + salarioFinal)