let numberRaiz=document.getElementById('txtraiz')
let raizRes=document.getElementById('raizRes')
function calcularRaiz(){
    raizRes.innerHTML=`Resultado:${Math.sqrt(numberRaiz.value)}`
}