//Criando as variaveis globais
let novoFunc = document.getElementById('func')
let novoCpf = document.getElementById('cpf')
let novoPhone = document.getElementById('telefone')
let novoEmail = document.getElementById('email')
let empresas = []
let ediçaoId = null



//Função para enviar cadastro de novo Funcionario para dentro do localStorage
function enviarCadastro(){

    //Pegando de dentro do localStorage a chave empresaCadastrada e armazenando na variavel
    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))


    //Condição para sabe se o cadastro é um novo Funcionario ou Editando um funcionario que ja esta cadastrado
    if (ediçaoId == null){

    //Condição para saber se existe algo dentro da chave e se não houver vai criar o objeto funcionario dentro da variavel e fazer o cadastro
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

    //Enviando o novo cadastro OU ediçao para o localStorage
    localStorage.setItem('empresaCadastrada', JSON.stringify(empresas))
    //Fechando o modal 
    fecharCadastro()
    //Atualizando a tabela  
    Refresh()
}


//Função para listar os itens na tabela
function listaTabela(){

    empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))

    let tbody = document.getElementById('tbody')



    for(i = 0; i<empresas.Funcionarios.length; i++){
        
        //Criação das linhas e colunas
        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_funcionario = tr.insertCell();
        let td_cpf = tr.insertCell();
        let td_email = tr.insertCell();
        let td_telefone = tr.insertCell();
        let td_feedback = tr.insertCell();
        let td_acoes = tr.insertCell();

        //Armazenando as informaçoes de cada funcionario
        td_id.innerText = empresas.Funcionarios[i].id
        td_funcionario.innerText =empresas.Funcionarios[i].Funcionario
        td_cpf.innerText = empresas.Funcionarios[i].CPF
        td_email.innerText = empresas.Funcionarios[i].Email
        td_telefone.innerText = empresas.Funcionarios[i].Telefone
        td_feedback.innerHTML =  empresas.Funcionarios[i].Feedback.Media

        //Criando um icone para Editar o Funcionario
        let imgEdit = document.createElement('img')
        imgEdit.src = '../img/editar.png'
        imgEdit.setAttribute('onclick', 'edicao('+JSON.stringify(empresas.Funcionarios[i])+')')

        //Criando um icone para Excluir o Funcionario
        let imgExcluir = document.createElement('img') 
        imgExcluir.src = '../img/excluir.png'
        imgExcluir.setAttribute('onclick', 'deletar('+empresas.Funcionarios[i].id +')')
        
        td_acoes.appendChild(imgExcluir)
        td_acoes.appendChild(imgEdit)



    }

}

//Função para edição onde o parametro vai pegar o id de cada Funcionario e armazenar na variavel
function edicao(dados){

    //Variavel deixa de ser null entao ele sabe que se trata de uma edição e não um novo cadastro
    ediçaoId = dados.id
    //Abrir janela modal
abrirCadastro()
    
    //Botando os dados do funcionario respectivo nos inputs para pode haver a edição
    document.getElementById('func').value = dados.Funcionario;
    document.getElementById('cpf').value = dados.CPF;
    document.getElementById('telefone').value = dados.Telefone;;
    document.getElementById('email').value = dados.Email;

    //Mudando o nome do botão e o texto no cabeçalho 
    document.getElementById('btn1').innerText = 'Atualizar'
    document.getElementById('titulo-cadastro').innerText = 'Atualizar Funcionario'

}

//Função para enviar os novos dados atualizados a partir do id do funcionario 
function atualizarDados(id){
    for(i = 0; i < empresas.Funcionarios.length; i++){
        if(empresas.Funcionarios[i].id == id){
       empresas.Funcionarios[i].Funcionario = novoFunc.value.trim()
        empresas.Funcionarios[i].CPF =  novoCpf.value.trim()
        empresas.Funcionarios[i].Email = novoEmail.value.trim()
        empresas.Funcionarios[i].Telefone = novoPhone.value.trim()
        }
    }

    //Mudando o nome do botão e o texto do cabeçalho para o normal
    document.getElementById('btn1').innerText = 'Salvar'
    document.getElementById('titulo-cadastro').innerText = 'Novo Funcionario'

    //mudando o valor da variavel para saber que a edição acabou
    ediçaoId = null
    limpaImput()


}

//Função para deletar o usuario a partir do seu id
function deletar(id){

    if(confirm(`Deseja Realmente deletar o funcionario do ID ${id}`)){
    let tbody = document.getElementById('tbody')
    //Vai comparar o id ate achar para excluir 
    for(i=0; i < empresas.Funcionarios.length; i++) {
        if(empresas.Funcionarios[i].id  == id){
            empresas.Funcionarios.splice(i , 1)
            tbody.deleteRow(i)
        }
        
    }

    //Enviar para o localStorage e atualizando a lista
    localStorage.setItem('empresaCadastrada', JSON.stringify(empresas))
    Refresh()
}
}


//Criando cadastro de novo funcionario e criando uma ID dinamica pra ele
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
    //Puxando para dentro da array funcionarios as informaçoes de cadastro
    empresas.Funcionarios.push(
        {

            Funcionario: novoFunc.value.trim(),
            CPF: novoCpf.value.trim(),
            Telefone: novoPhone.value.trim(),
            Email: novoEmail.value.trim(),
            Feedback: {
                Comunicação: [],
                Proatividade: [],
                TrabalhoEquipe: [],
                Liderança: [],
                Comprometimento: [],
                Media: []
            },
            id: idProd

        }
    )
    limpaImput()
}

//Limpar os inputs da janela modal
function limpaImput(){
    document.getElementById('func').value = "";
    document.getElementById('cpf').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";

}


//Refazendo a lista sempre que a tabela e a pagina são atualizadas 
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


//Funçoes para fechar e abrir a janela modal
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