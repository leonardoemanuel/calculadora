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