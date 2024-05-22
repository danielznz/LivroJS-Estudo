//programa calcula promoção tirando centavos do dobro de um produto

const frm = document.querySelector("form")                  //entrada
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit" , (e) => {                    //processamento e calculo
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco * 2
    valor = Math.floor(desconto)

    resp1.innerText = "Promoção de " + medicamento              //saida
    resp2.innerText = "Leve 2 por apenas " + valor.toFixed(2)

    e.preventDefault()
})