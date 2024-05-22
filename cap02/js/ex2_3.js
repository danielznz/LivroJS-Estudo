const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    const veiculo = frm.inVeiculo.value
    const preco = frm.inPreco.value

    const entrada = preco * 0.50
    const parcela = (preco * 0.50) /12

    resp1.innerText = "Promoção de " + veiculo
    resp2.innerText = "Entrada de " + entrada
    resp3.innerText = "Parcelas de " + parcela

    e.preventDefault()

})