document.getElementById('enviarEmail').addEventListener('click', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sugestao = document.getElementById('sugestao').value;
    
    if (nome === '' || email === '' || sugestao === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        var mailtoLink = 'mailto:refugiosolidariors@hotmail.com'
                        + '?subject=Sugestão de ' + encodeURIComponent(nome)
                        + '&body=' + encodeURIComponent(sugestao)
                        + '%0D%0A%0D%0AEmail: ' + encodeURIComponent(email);
        window.location.href = mailtoLink;
    }
});

