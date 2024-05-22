const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e) =>{
    e.preventDefault()

    const horaDoBrasil = Number(frm.inHoraBrasil.value)
    let horaDaFranca = horaDoBrasil + 5
    if(horaDaFranca > 24){
        horaDaFranca = horaDaFranca - 24
    }
    //exibe a resposta
    resp.innerText = "Hora na França: " + horaDaFranca.toFixed(2)

})