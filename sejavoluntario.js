document.getElementById('enviarVoluntario').addEventListener('click', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;
    var telefone = document.getElementById('telefone/whatsapp').value;
    var profissao = document.getElementById('profissão').value;
    var formacao = document.getElementById('Formação').value;
    var endereco = document.getElementById('Endereço').value;
    
    if (nome === '' || email === '' || idade === '' || telefone === '' || profissao === '' || formacao === '' || endereco === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        var mailtoLink = 'mailto:refugiosolidariors@hotmail.com'
                        + '?subject=Cadastro de Voluntário: ' + encodeURIComponent(nome)
                        + '&body=Nome: ' + encodeURIComponent(nome)
                        + '%0D%0AEmail: ' + encodeURIComponent(email)
                        + '%0D%0AIdade: ' + encodeURIComponent(idade)
                        + '%0D%0ATelefone/WhatsApp: ' + encodeURIComponent(telefone)
                        + '%0D%0AProfissão: ' + encodeURIComponent(profissao)
                        + '%0D%0AFormação: ' + encodeURIComponent(formacao)
                        + '%0D%0AEndereço: ' + encodeURIComponent(endereco);
        window.location.href = mailtoLink;
    }
});
