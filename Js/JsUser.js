let progressLid = document.querySelector('.barra div')
let progressCompro= document.querySelector('.barraDois div')
let progressComu = document.querySelector('.barraTres div')
let progressProa = document.querySelector('.barraQuatro div')
let progressTeam= document.querySelector('.barraCinco div')
let empresas = JSON.parse(localStorage.getItem('empresaCadastrada'))
let fotoPerfil = document.getElementById('imgPhoto')
let arquivoFoto = document.getElementById('filImg')
let nomeFunc = document.getElementById('nome-Func')
let mediaLider = 0
let mediaComprometimento = 0
let mediaComunica = 0
let mediaProativ = 0
let mediaTeamWork = 0


fotoPerfil.addEventListener('click', () =>{
    arquivoFoto.click()
})

arquivoFoto.addEventListener('change', () =>{
    if(arquivoFoto.files.length <=0){
        return
    }
    let lerArquivo  = new FileReader()

    lerArquivo.onload = () =>{
        fotoPerfil.src = lerArquivo.result
    }

    lerArquivo.readAsDataURL(arquivoFoto.files[0])
})

function PorcentagemLider(){

    for(i=0;i<empresas.Funcionarios[0].Feedback.Comunicação.length;i++) {
        
        mediaLider += empresas.Funcionarios[0].Feedback.Liderança[i]
        mediaComprometimento += empresas.Funcionarios[0].Feedback.Comprometimento[i]
        mediaComunica += empresas.Funcionarios[0].Feedback.Comunicação[i]
        mediaProativ += empresas.Funcionarios[0].Feedback.Proatividade[i]
        mediaTeamWork += empresas.Funcionarios[0].Feedback.TrabalhoEquipe[i]
    }

        mediaLider = (mediaLider / empresas.Funcionarios[0].Feedback.Comunicação.length) * 10
        mediaComprometimento = (mediaComprometimento / empresas.Funcionarios[0].Feedback.Comunicação.length) * 10
        mediaComunica = (mediaComunica / empresas.Funcionarios[0].Feedback.Comunicação.length) * 10
        mediaProativ = (mediaProativ / empresas.Funcionarios[0].Feedback.Comunicação.length) * 10
        mediaTeamWork = (mediaTeamWork / empresas.Funcionarios[0].Feedback.Comunicação.length) * 10
    
    progressLid.setAttribute('style', 'width:' + mediaLider + '%')
    progressCompro.setAttribute('style', 'width:' + mediaComprometimento + '%')
    progressComu.setAttribute('style', 'width:' + mediaComunica + '%')
    progressProa.setAttribute('style', 'width:' + mediaProativ + '%')
    progressTeam.setAttribute('style', 'width:' + mediaTeamWork + '%')
}



function ListarDados(){


    nomeFunc.innerText = empresas.Funcionarios[0].Funcionario
}