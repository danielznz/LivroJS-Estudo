const frm = document.querySelector("form") //obtendo os elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit",(e) =>{       //escuta evento submit do fomr
    e.preventDefault()                      //evita o envio do form
    const numero = Number(frm.inNumero.value)
    let resposta = ""
    for (let i = 1; i <= 10; i++){
        resposta = resposta + numero + " x " + i + "=" + (numero*i) + "\n"
    }
    resp.innerText = resposta
})