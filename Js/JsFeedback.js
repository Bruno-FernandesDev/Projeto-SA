let idImput = document.getElementById('procuraID')
let empresa = []
let erro =   document.getElementById('erro')
let dimensaoLoguin =document.getElementById('janelaFeedbackLoguin')
let dimensaoJanela = document.getElementById('janelaFeedback') 
let nomeFunc = document.getElementById('nome-func')
let funcionarioIdFeed


function procuraID(){
    empresa = JSON.parse(localStorage.getItem('empresaCadastrada'))
    
        for(i=0; i < empresa.Funcionarios.length; i++) {
    
            if(empresa.Funcionarios[i].id  == idImput.value){
                funcionarioIdFeed = empresa.Funcionarios[i].Funcionario
                dimensaoLoguin.style.zIndex = '0'
                dimensaoJanela.style.zIndex = '1'
                dimensaoLoguin.style.overflow = 'hidden'
                carregarDados()
                localStorage.setItem('idFeedback', empresa.Funcionarios[i].id )
            }else{
                erro.innerText = "Funcionario não encontrado"
            }
            
        }
        document.getElementById('procuraID').value = "";
       
    }


function carregarDados(){

    nomeFunc.innerText = `FeedBack ${funcionarioIdFeed}`
}


function Salvar() {

    empresa = JSON.parse(localStorage.getItem('empresaCadastrada'))
    
    let primeiroValor = document.getElementsByName('primeira')
    let segundoValor = document.getElementsByName('segunda')
    let terceiroValor = document.getElementsByName('3')
    let desempenhoComu = []
    
    for(i=0;i<primeiroValor.length;i++){
    
        if(primeiroValor[i].checked==true){
            let e = primeiroValor[i]
    
            empresa.Funcionarios[i].Feedback[i].push(Number(e.value))
            // desempenhoComu.push(Number(e.value));
        }
        if(segundoValor[i].checked==true){
             e = primeiroValor[i]
             empresa.Funcionarios[i].Feedback.push(Number(e.value))

            //  desempenhoComu.push(Number(e.value));
        }if(terceiroValor[i].checked==true){
            e = primeiroValor[i]
            empresa.Funcionarios[i].Feedback.push(Number(e.value))

            // desempenhoComu.push(Number(e.value));
        }
     }

    


}

function CatComuni() {

       

}