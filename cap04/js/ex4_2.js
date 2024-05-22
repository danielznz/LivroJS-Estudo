const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked //usar o checked para input radio
    const altura = Number(frm.inAltura.value)

    let peso //declara a variavel peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2) //Math.pow eleva ao quadrado
    }else{
        peso = 21 * Math.pow(altura, 2) 
    }
    
    resp1.innerText = nome + ", seu peso ideal é " + peso.toFixed(3) + "kg."

    frm.addEventListener("reset" , (e) =>{ //comando para limpar saida "h3"
        resp1.innerText = ""
    })
})