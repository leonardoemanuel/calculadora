let navegacao = document.getElementById('navegacao')
function abrirMenu(){
    if(window.innerWidth > 780){
        navegacao.style.display = 'flex'
    }else if(navegacao.style.display == 'none'){
        navegacao.style.display = 'flex'
    }else{
        navegacao.style.display ='none'
    }
}
function mudouTamanho(){
    if(window.innerWidth > 780){
        navegacao.style.display = 'flex'
    }
}
