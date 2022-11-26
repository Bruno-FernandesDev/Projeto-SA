let novoFunc = document.getElementById('func')
let novoCpf = document.getElementById('cpf')
let novoPhone = document.getElementById('telefone')
let novoEmail = document.getElementById('email')
let empresas = []



function enviarCadastro(){

    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))


    if (empresas == null){
        
        empresas = {
            Funcionarios: [],
        }
        cadastro()
    }else{
        cadastro()
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


        td_id.innerText = empresas.Funcionarios[i].id
        td_funcionario.innerText =empresas.Funcionarios[i].Funcionario
        td_cpf.innerText = empresas.Funcionarios[i].CPF
        td_email.innerText = empresas.Funcionarios[i].Email
        td_telefone.innerText = empresas.Funcionarios[i].Telefone
        td_feedback.innerHTML = ''
    }

}


function cadastro(){
    let numID = 0
    let idProd = empresas.Funcionarios.length + 1

    for(i=0; i<empresas.Funcionarios.length;i++){

        if(empresas.Funcionarios.id  == idProd){
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
<th class="center">FeedBack</th>
</thead>
<tbody id="tbody">

</tbody>
</table>`;
      listaTabela()
}

function abrirCadastro(abrirCadastro) {

let modal =document.getElementById(abrirCadastro)
modal.style.display = 'block'
document.body.style.overflow = 'hidden'
}

function fecharCadastro() {

    let modal =document.getElementById('vis-cad')
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'

 }