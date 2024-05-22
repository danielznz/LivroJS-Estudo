const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)   
    const raiz = Math.sqrt(numero)              //.sqrt calcula raiz quadrada

if(Number.isInteger(raiz)){
    resp.innerText = "Raiz do número " + numero + " é: " + raiz + "."
}else{
    resp.innerText = "O número digitado não possui raiz exata."
}
})