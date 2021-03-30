$("#bt_inicio").click(
    function(){
        alert('opa, você clicou no Botão Início');
    }
)

function submit_form_login(){
    if(document.form_login.input_email.value == 'rafael@fasipe.com')
    if(document.form_login.input_senha.value == '12345678'){
        alert("Seja bem vindo, se esta mensagem apareceu significa que deu certo kkk!");
    } else {
        alert("algo de errado não está certo. tente novamente!")
    } else {
        alert("O que você procura não existe!")
    }
}

