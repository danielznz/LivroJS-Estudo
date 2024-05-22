const prompt = require("prompt-sync")() // adiciona pacote prompt-sync
const pessoas = Number(prompt("Número de pessoas: ")) //lê os dados de entrada
const peixes = Number(prompt("Número de peixes:"))
let pagar
if (peixes <= pessoas){
    pagar = pessoas * 20
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas)*12)
}
console.log("Pagar R$: " + pagar.toFixed(2)) //exibe valor a ser pago