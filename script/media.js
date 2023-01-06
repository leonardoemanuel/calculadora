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
}
function cancelarMedia(){
    for(let i=numeros.length;i>=0;i--){
        numeros.pop()
    }
    resultadoMedia.innerHTML=''
}