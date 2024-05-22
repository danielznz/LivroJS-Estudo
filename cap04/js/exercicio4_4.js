const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)
    if(ladoA >= ladoB+ladoC || ladoB >= ladoA+ladoC || ladoC >= ladoA +ladoB){
        resp1.innerText = "Não é possível formar triangulo"
    } else{
        resp1.innerText = "É possível formar triangulo"
    } if(ladoA==ladoB && ladoA==ladoC){
        resp2.innerText = "Equilatero"
    }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
        resp2.innerText = "Isóceles"
    }else
        resp2.innerText = "Escaleno"
})