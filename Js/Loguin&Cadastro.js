let userCadastro = document.getElementById('userCad')
let senhaCadastro = document.getElementById('senhaCad')
let loguin = document.getElementById('loguinEmpresa')
let senha = document.getElementById('senhaEmpresa')
let usuarios
let acess = false
let empresas = []


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
        
        if(loguin.value ==  empresas[i].nomeEmpresa) {
            acess = true
            let user = empresas[i].nomeEmpresa
            localStorage.setItem('userID', user )
            alert(`acesso`)

    }

}

if(acess == true){
    window.location.href = 'inicioEmpre.html'
}else{
    alert('usuario ou senha incorretos!')
}
}