// parte da conta
let btn_somarjs = document.getElementById("btn_somarjs").addEventListener("click", () => {
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    soma = parseInt(v1) + parseInt(v2)
    let res = document.getElementById("res").value = soma
})


// parte do clic
let btnTexte= document.getElementById("btnTexte").addEventListener("click", ()=>{
    let valor = document.getElementById("valor")
    valor.innerHTML = "Você clicou no botao";
})



let ver = document.getElementById("ver").addEventListener("click", ()=>{
    let resposta = document.getElementById("resposta")
    resposta.innerHTML = "Muito bem, você aprendeu alguma coisa essa noite!!!";
})

function voltar(){
    let resposta = document.getElementById("resposta")
    resposta.innerHTML = "";
}


///////////   EVENTO DE TARGET  

document.addEventListener("click", function(e){
    console.log(e.target.className);
})


/***   TOOGLE  */
function debug(event){
    console.log('Event', event.type);
}

///////     TESTANDO RECURSO 
const toggle = document.getElementById("toggle");
toggle.onclick = function(){
    toggle.classList.toggle("active");
}   


const quadrado = document.getElementById("quadrado");
quadrado.onclick = function(){
    quadrado.classList.toggle("active");
}

const lista = document.getElementById("lista");
lista.onclick = function(){
    lista.classList.toggle("active");
}