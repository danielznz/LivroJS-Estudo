const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero % 2){
        resp1.innerText = "O Número é ímpar"
    } else {
        resp1.innerText = "O Número é par"
    }
})