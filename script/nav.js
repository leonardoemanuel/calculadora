let divEq = document.getElementById('divEquacao')
let divPot = document.getElementById('divPot')
let divTab = document.getElementById('divTab')
let divRaiz = document.getElementById('divRaiz')
let divCont = document.getElementById('divCont')
let divMedia = document.getElementById('divMedia')
let divNav = [divEq,divPot,divTab,divRaiz,divCont,divMedia]

function equacao(){
    divNav[0].style.display = 'flex'
    divNav[1].style.display = 'none'
    divNav[2].style.display = 'none'
    divNav[3].style.display = 'none'
    divNav[4].style.display = 'none'
    divNav[5].style.display = 'none'
    abrirMenu()
}
function potencia(){
    divNav[0].style.display = 'none'
    divNav[1].style.display = 'flex'
    divNav[2].style.display = 'none'
    divNav[3].style.display = 'none'
    divNav[4].style.display = 'none'
    divNav[5].style.display = 'none'
    abrirMenu()
}
function tab(){
    
    divNav[0].style.display = 'none'
    divNav[1].style.display = 'none'
    divNav[2].style.display = 'flex'
    divNav[3].style.display = 'none'
    divNav[4].style.display = 'none'
    divNav[5].style.display = 'none'
    abrirMenu()
}
function raiz(){
    divNav[0].style.display = 'none'
    divNav[1].style.display = 'none'
    divNav[2].style.display = 'none'
    divNav[3].style.display = 'flex'
    divNav[4].style.display = 'none'
    divNav[5].style.display = 'none'
    abrirMenu()
    
}
function cont(){
    
    divNav[0].style.display = 'none'
    divNav[1].style.display = 'none'
    divNav[2].style.display = 'none'
    divNav[3].style.display = 'none'
    divNav[4].style.display = 'flex'
    divNav[5].style.display = 'none'
    abrirMenu()
}
function media(){
    
    divNav[0].style.display = 'none'
    divNav[1].style.display = 'none'
    divNav[2].style.display = 'none'
    divNav[3].style.display = 'none'
    divNav[4].style.display = 'none'
    divNav[5].style.display = 'flex'
    abrirMenu()
}

