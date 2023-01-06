let base=document.getElementById('txtbase')
let expoente=document.getElementById('txtexpoente')
let potenciaRes=document.getElementById('txtPotenciaRes')

function calcularPotencia(){
   
  if(base.value.length==0){
        alert("Preencha todos os campos corretamente")
    }else{
       let calculo=Math.pow(base.value,expoente.value)
       potenciaRes.innerText=`Resposta:${calculo}`
    }
    
}