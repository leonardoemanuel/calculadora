function calcularEquaçao(){
    let txtresult =document.getElementById('txtresultado')
    let valorA=document.getElementById('txtvalorA')
    let valorB=document.getElementById('txtvalorB')
    let valorC=document.getElementById('txtvalorC')

    let delta=(valorB.value*valorB.value)-(4*valorA.value*valorC.value)
    let raizQuadrada=Math.sqrt(delta)
    let solucao1=-valorB.value+raizQuadrada
    let totalsolucao1=solucao1/(2*valorA.value)
    let solucao2=-valorB.value-raizQuadrada
    let totalsolucao2=solucao2/(2*valorA.value)
    
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
        Resposta:${totalsolucao1.toFixed(3)},${totalsolucao2.toFixed(3)}. Essa equação possui duas soluções`
    }
    

}