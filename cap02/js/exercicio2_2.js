const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inUso.value)

   const divisao = tempo / 15
   const mult = Math.ceil(divisao) * valor
   
    resp1.innerText = "O valor a ser pago é de: " + mult + " reais."

    e.preventDefault()
})