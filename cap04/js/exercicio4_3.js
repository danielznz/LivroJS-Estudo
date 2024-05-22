const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    if(valor <= 1){
        const troco = valor - 1
        resp1.innerText = "Troco: " + troco
        resp2.innerText = "Tempo: 30 min"
    } else if(valor > 1 || valor < 1.75){
        const troco2 = valor - 1.75
        resp1.innerText = "Troco: " + troco2
        resp2.innerText = "Tempo: 60min"
    } else{
        const troco3 = valor - 3
        resp1.innerText = "Troco: " + troco3
        resp2.innerText = "Tempo: 120 min"
    }
})