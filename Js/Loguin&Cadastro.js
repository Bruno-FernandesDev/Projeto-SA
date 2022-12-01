let userCadastro = document.getElementById('userCad')
let senhaCadastro = document.getElementById('senhaCad')
let loguin = document.getElementById('loguinEmpresa')
let senha = document.getElementById('senhaEmpresa')
let senhaFunc = document.getElementById('senhaFunc')
let loguinFunc = document.getElementById('loguinFunc')
let divLoguinEmpresa = document.getElementById('rigth-login1')
let divLoguinUser = document.getElementById('rigth-login-user1')
let usuarios
let acess = false
let empresas = []
let tipoDeLoguin = localStorage.getItem('tipoDeLoguin')

 






function LogarFunc() {
    window.location.href = 'loginProjetoSA.html'
    localStorage.setItem('tipoDeLoguin', 0)
}

function LogarEmpre(){
    window.location.href = 'loginProjetoSA.html'
    
}

if(tipoDeLoguin == 0){
    mudarLoguin()
    localStorage.setItem('tipoDeLoguin', 1)
}

function mudarLoguin(){
        divLoguinUser.style.zIndex = '1'
        divLoguinEmpresa.style.zIndex = '0'
        divLoguinEmpresa.style.overflow = 'visible'
}

function mudarLoguinEmpre(){
        divLoguinUser.style.zIndex = '0'
        divLoguinEmpresa.style.zIndex = '1'
        divLoguinEmpresa.style.overflow = 'hidden'
}

function criarCadastro(){


    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))
    
  if (empresas == null){
        empresas = []
        CadastrarUsuario()
    }else{
    CadastrarUsuario()
    }

    localStorage.setItem('empresaCadastrada', JSON.stringify(empresas))
    window.location.href = 'loginProjetoSA.html'


}


function CadastrarUsuario(){
    let objUser = {

        nomeEmpresa: '',
        senha: '',
        Funcionarios: []
    }

    objUser.nomeEmpresa = userCadastro.value
    objUser.senha =  senhaCadastro.value

    empresas.push(objUser)
    
    localStorage.setItem('empresaCadastrada', JSON.stringify(empresas))
    
    alert("Cadastro efetuado!")

}




function Entrar(){
    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))
    
    
    for(i=0; i < empresas.length; i++) {
        
        if(loguin.value ==  empresas[i].nomeEmpresa && senha.value == empresas[i].senha) {
            acess = true
            let user = empresas[i].nomeEmpresa
            localStorage.setItem('userID', user )

    }

}

if(acess == true){
    window.location.href = 'inicioEmpre.html'
}else{
    alert('usuario ou senha incorretos!')
}
}

function EntrarFunc(){
    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))

    
let j = 0
let e = 0
let tamanhoTotal = 0

for(i=0; i< empresas.length; i++){
    tamanhoTotal += empresas[i].Funcionarios.length
}
for(i=0; i < tamanhoTotal; i++){
    if(loguinFunc.value != empresas[e].Funcionarios[j].Funcionario){
        j++
    }else{
        if(senhaFunc.value == empresas[e].Funcionarios[j].Senha){
            i = tamanhoTotal + 1
            acess = true
            localStorage.setItem('idUser', empresas[e].Funcionarios[j].id )
            localStorage.setItem('idEmpresa', e )
        }
        
    }
    if(empresas[e].Funcionarios.length <= j){
        e++
        j = 0
    }
}


if(acess == true){
    window.location.href = 'inicioUser.html'
}else{
    alert('usuario ou senha incorretos!')
}
}



