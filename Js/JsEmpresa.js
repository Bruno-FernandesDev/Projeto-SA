let novoFunc = document.getElementById('func')
let novoCpf = document.getElementById('cpf')
let novoPhone = document.getElementById('telefone')
let novoEmail = document.getElementById('email')
let empresas = []
let ediçaoId = null




function enviarCadastro(){

    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))

    if (ediçaoId == null){

    if (empresas == null){
        
        empresas = {
            Funcionarios: [],
        }
        cadastro()
    }else{
        cadastro()
    }
}else {
    atualizarDados(ediçaoId)
    
}
    localStorage.setItem('empresaCadastrada', JSON.stringify(empresas))
    fecharCadastro()
    Refresh()
}

function listaTabela(){

    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))

    let tbody = document.getElementById('tbody')


    for(i = 0; i<empresas.Funcionarios.length; i++){

        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_funcionario = tr.insertCell();
        let td_cpf = tr.insertCell();
        let td_email = tr.insertCell();
        let td_telefone = tr.insertCell();
        let td_feedback = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = empresas.Funcionarios[i].id
        td_funcionario.innerText =empresas.Funcionarios[i].Funcionario
        td_cpf.innerText = empresas.Funcionarios[i].CPF
        td_email.innerText = empresas.Funcionarios[i].Email
        td_telefone.innerText = empresas.Funcionarios[i].Telefone
        td_feedback.innerHTML = 'A'

        let imgEdit = document.createElement('img')
        imgEdit.src = '../img/editar.png'
        imgEdit.setAttribute('onclick', 'edicao('+JSON.stringify(empresas.Funcionarios[i])+')')

        let imgExcluir = document.createElement('img') 
        imgExcluir.src = '../img/excluir.png'
        imgExcluir.setAttribute('onclick', 'deletar('+empresas.Funcionarios[i].id +')')
        
        td_acoes.appendChild(imgExcluir)
        td_acoes.appendChild(imgEdit)



    }

}
function edicao(dados){
    ediçaoId = dados.id
abrirCadastro()
    

    document.getElementById('func').value = dados.Funcionario;
    document.getElementById('cpf').value = dados.CPF;
    document.getElementById('telefone').value = dados.Telefone;;
    document.getElementById('email').value = dados.Email;

    document.getElementById('btn1').innerText = 'Atualizar'
    document.getElementById('titulo-cadastro').innerText = 'Atualizar Funcionario'

}

function atualizarDados(id){
    for(i = 0; i < empresas.Funcionarios.length; i++){
        if(empresas.Funcionarios[i].id == id){
       empresas.Funcionarios[i].Funcionario = novoFunc.value.trim()
        empresas.Funcionarios[i].CPF =  novoCpf.value.trim()
        empresas.Funcionarios[i].Email = novoEmail.value.trim()
        empresas.Funcionarios[i].Telefone = novoPhone.value.trim()
        }
    }
    document.getElementById('btn1').innerText = 'Salvar'
    document.getElementById('titulo-cadastro').innerText = 'Novo Funcionario'

    ediçaoId = null
    limpaImput()


}

function deletar(id){
    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))

    let tbody = document.getElementById('tbody')
    for(i=0; i < empresas.Funcionarios.length; i++) {
        if(empresas.Funcionarios[i].id  == id){
            empresas.Funcionarios.splice(i , 1)
            tbody.deleteRow(i)
        }
        
    }
    localStorage.setItem('empresaCadastrada', JSON.stringify(empresas))
    Refresh()
}

function cadastro(){
    let numID = 0
    let idProd = empresas.Funcionarios.length + 1

    for(i=0; i<empresas.Funcionarios.length;i++){

        if(empresas.Funcionarios[i].id  == idProd){
            numID = 1

        } 
    }

    if(numID == 1){
        idProd+= 1
    }
    empresas.Funcionarios.push(
        {

            Funcionario: novoFunc.value.trim(),
            CPF: novoCpf.value.trim(),
            Telefone: novoPhone.value.trim(),
            Email: novoEmail.value.trim(),
            Feedback: [],
            id: idProd

        }
    )
    limpaImput()
}


function limpaImput(){
    document.getElementById('func').value = "";
    document.getElementById('cpf').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";

}

function Refresh(){
    document.getElementById("table").innerHTML = ` <table id="table">
    <thead>
<th class="center">ID</th>
<th>Funcionario</th>
<th>CPF</th>
<th>Email</th>
<th>Telefone</th>
<th>FeedBack</th>
<th>Açoes</th>

</thead>
<tbody id="tbody">

</tbody>
</table>`;
      listaTabela()
}

function abrirCadastro() {

let modal =document.getElementById('vis-cad')
modal.style.display = 'block'
document.body.style.overflow = 'hidden'
}

function fecharCadastro() {

    let modal =document.getElementById('vis-cad')
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'

    document.getElementById('titulo-cadastro').innerText = 'Novo Funcionario'
    document.getElementById('btn1').innerText = 'Salvar'
    ediçaoId = null
    limpaImput()

 }