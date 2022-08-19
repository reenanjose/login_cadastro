function clicar(){
    document.getElementById('clique').innerHTML = alert('Cadastro realizado com Sucesso! ✅')
}



$(document) .ready(function() {
    $('.cpff') .mask('000.000.000-00')
    $('.tel') .mask('(00)00000-0000')
    $('.data') .mask('00/00/0000')
} )

