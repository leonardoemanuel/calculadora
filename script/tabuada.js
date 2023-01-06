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