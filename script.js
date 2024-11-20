// Função de validação de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulando um login simples
    if (username === 'usuario' && password === 'senha123') {
        alert('Login bem-sucedido!');
        document.getElementById('login-error').style.display = 'none';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});

// Função para enviar o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simula o envio de uma mensagem com sucesso
    alert('Mensagem enviada: ' + message);
    document.getElementById('form-success').style.display = 'block';

    // Limpar o formulário
    document.getElementById('contact-form').reset();
});
