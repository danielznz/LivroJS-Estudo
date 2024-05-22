//criar referencia ao form e ao h3(resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

//criar um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    valor = (quilo /1000) * consumo //1000 gramas = 1 kilo

    resp1.innerText = "Valor a pagar RS: " + valor

    e.preventDefault()
})