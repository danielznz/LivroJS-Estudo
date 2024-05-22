const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)
    const vintePorcento = (permitida/100) * 20
    const exede = permitida + vintePorcento

    if(permitida >= condutor){
        resp1.innerText = "Sem multa"
    }else if(permitida <= condutor & exede >= condutor){
        resp1.innerText = "Multa leve"
    }else{
        resp1.innerText = "Multa Grave"
    }
})




