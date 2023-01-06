let navegacao = document.getElementById('navegacao')
function abrirMenu(){
    if(window.innerWidth >= 780){
        navegacao.style.display = 'flex'
    }else if(navegacao.style.display == 'flex'){
        navegacao.style.display = 'none'
    }else{
        navegacao.style.display ='flex'
    }
}

