document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // Validação básica
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Validação do nome
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    // Validação de email (simples)
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Validação da mensagem
    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    this.reset();
});
