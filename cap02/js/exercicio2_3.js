const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const terceiroProduto = preco / 2
    const promocao = (preco * 2) + terceiroProduto

    resp1.innerText = produto + "- Promoção: leve 3 por R$:" + promocao.toFixed(2)
    resp2.innerText = "O 3º produto custa apenas R$: " + terceiroProduto.toFixed(2)

    e.preventDefault()
})