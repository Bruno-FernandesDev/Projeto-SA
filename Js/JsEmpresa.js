

function abrirCadastro(abrirCadastro) {

let modal =document.getElementById(abrirCadastro)
modal.style.display = 'block'
document.body.style.overflow = 'hidden'
}

function fecharCadastro(fecharCadastro) {


    let modal =document.getElementById(fecharCadastro)
    modal.style.display = 'none'
document.body.style.overflow = 'auto'

 }