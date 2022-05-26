/* equaçao de segundo grau*/
let txtresult =document.getElementById('txtresultado')
let valorA=document.getElementById('txtvalorA')
let valorB=document.getElementById('txtvalorB')
let valorC=document.getElementById('txtvalorC')

function calcularEquaçao(){
    let delta=(valorB.value*valorB.value)-(4*valorA.value*valorC.value)
    let raizQuadrada=Math.sqrt(delta)
    let solucao1=-valorB.value+raizQuadrada
    let totalsolucao1=solucao1/(2*valorA.value)
    let solucao2=-valorB.value-raizQuadrada
    let totalsolucao2=solucao2/(2*valorA.value)
    
    /*let sinalMenos='-'
    if(valorB.value.includes('-')){
        sinalMenos=''
    }*/
    
    let equaçaoEscrita=`<sup>${-1*valorB.value}&plusmn;&radic;${valorB.value}&sup2;-4&#215;${valorA.value}&#215;${valorC.value}</sup>/<sub>2&#215;${valorA.value}=</sub><br>
    <sup>${-1*valorB.value}&plusmn;&radic;${valorB.value**2}-${4*valorA.value*valorC.value}</sup>/<sub>${2*valorA.value}=</sub><br>
    <sup>${-1*valorB.value}&plusmn;&radic;${delta}</sup>/<sub>${2*valorA.value}=</sub><br>
    <sup>${-1*valorB.value}-${raizQuadrada}</sup>/<sub>${2*valorA.value}=${totalsolucao1}</sub><br>
    <sup>${-1*valorB.value}+${raizQuadrada}</sup>/<sub>${2*valorA.value}=${totalsolucao2}</sub><br>`
    
    if(valorA.value.length==0){
        alert("Preencha todos os campos corretamente")
    }else if(valorA.value==0){
        alert("O valor de A não pode ser igual à 0")
    }else if(delta<0){
       txtresult.innerText=`Essa equação não possui solução no campo dos reais !`
    }else if(delta==0){
        txtresult.innerHTML=`${equaçaoEscrita}
        Resposta:${totalsolucao1}. Essa equação possui apenas uma solução`
    }else{
        txtresult.innerHTML=`${equaçaoEscrita}
        Resposta:${totalsolucao1},${totalsolucao2}. Essa equação possui duas soluções`
    }
    

}
/*potencias*/
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
/*tabuada*/
let numero=document.getElementById('tabuadanumber')
let tabuadaInicio=document.getElementById('tabuadaInicio')
let fator=document.getElementById('tabuadaFim')
let resultadoTabuada=document.getElementById('txtResTabuada')
let tabuadaop=''


    function multiplicacao(){
        tabuadaop=Number(tabuadaInicio.value)-1
        resultadoTabuada.innerHTML=''
        resultadoTabuada.style.columns='2'
        while(tabuadaop<fator.value){
        tabuadaop+=1
        let totalRes=Number(numero.value)*Number(tabuadaop)
        resultadoTabuada.innerHTML+=`<li>${numero.value}&#215;${tabuadaop}=${totalRes}</li>`}
        
        
    }
    function adicao(){
        tabuadaop=Number(tabuadaInicio.value)-1
        resultadoTabuada.innerHTML=''
        resultadoTabuada.style.columns='2'
    
        while(tabuadaop<fator.value){
            tabuadaop+=1
            let totalRes=Number(numero.value)+Number(tabuadaop)
            resultadoTabuada.innerHTML+=`<li>${numero.value}+${tabuadaop}=${totalRes.toFixed()}</li>`
        }
       
    }
    function subtracao(){
        tabuadaop=Number(tabuadaInicio.value)-1
        resultadoTabuada.innerHTML=''
        resultadoTabuada.style.columns='2'
        while(tabuadaop<fator.value){
            tabuadaop+=1
            let totalRes=Number(numero.value)-Number(tabuadaop)
            resultadoTabuada.innerHTML+=`<li>${numero.value}-${tabuadaop}=${totalRes}</li>`
        }
        
    }
    function divisao(){
        tabuadaop=Number(tabuadaInicio.value)-1
        resultadoTabuada.innerHTML=''
        resultadoTabuada.style.columns='1'
        while(tabuadaop<fator.value){
            tabuadaop+=1
            let totalRes=Number(numero.value)/Number(tabuadaop)
            resultadoTabuada.innerHTML+=`<li>${numero.value}:${tabuadaop}=${totalRes.toFixed(3)}</li>`
        }
        
    }
    function expotenciacao(){
        tabuadaop=Number(tabuadaInicio.value)-1
        resultadoTabuada.innerHTML=''
        resultadoTabuada.style.columns='2'
        while(tabuadaop<fator.value){
            tabuadaop+=1
            let totalRes=Number(numero.value)**Number(tabuadaop)
            resultadoTabuada.innerHTML+=`<li>${numero.value}^${tabuadaop}=${totalRes}</li>`
        }
    }
/*Raiz Quadrada*/
let numberRaiz=document.getElementById('txtraiz')
let raizRes=document.getElementById('raizRes')
    function calcularRaiz(){
        raizRes.innerHTML=`Resultado:${Math.sqrt(numberRaiz.value)}`
    }
/*Contador*/
function contador(){
    let txtinicio=document.getElementById('inicio')
    let txtpasso=document.getElementById('passo')
    let txtfim=document.getElementById('fim')
    
    let inicio=Number(txtinicio.value)
    let passo=Number(txtpasso.value)
    let fim=Number(txtfim.value)
    
    let contres=document.getElementById('contres')
    contres.innerHTML=''
    contres.innerHTML+=`<li>${inicio}</li>`
    if(inicio>fim){
        while(inicio>fim){
            inicio-=passo
            contres.innerHTML+=`<li>${inicio}</li>`
        }
    }else{
        while(inicio<fim){
            inicio+=passo
            contres.innerHTML+=`<li>${inicio}</li>`
        }
    }
}
let numeros=[] 
let resultadoMedia=document.getElementById('resultadoMedia')
let numeroMedia=document.getElementById('numeroMedia')
function adicionarMedia(){
    numeros.push(Number(numeroMedia.value))
    let total=0
    for(let i=0;i<numeros.length;i++){
        total += numeros[i]
        let totalMedia=total/numeros.length
        resultadoMedia.innerHTML=`A media entre ${numeros} = ${totalMedia}`
    }
    
    resultadoMedia.innerHTML=`A media entre ${numeros} = ${totalMedia}`
    
}

function cancelarMedia(){
    for(let i=numeros.length;i>=0;i--){
        numeros.pop()
    }
    resultadoMedia.innerHTML=''
}
/*funçoes de retorno*/
/*
function retornoRaiz(){
    window.scrollTo({
        top:1050,
        behavior: 'smooth'
    })
}
function retornoEquaçao(){
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
}
function retornPot(){
    window.scrollTo({
        top:400,
        behavior: 'smooth'
    })
}
function retornoTab(){
    window.scrollTo({
        top:700,
        behavior: 'smooth'
    })
}
function retornoCont(){
    window.scrollTo({
        top:1300,
        behavior: 'smooth'
    })
}
function retornoMedia(){
    window.scrollTo({
        top:1400,
        behavior: 'smooth'
    })
}
*/





       
    
    
    



