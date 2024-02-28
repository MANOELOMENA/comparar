function ComparaSenhas() {
    var senha1 = document.getElementById('senha1').value;
    var senha2 = document.getElementById('senha2').value;
    var resultado = document.getElementById('resultado');

    if (senha1 === senha2) {
        resultado.textContent = "Sucesso: As senhas são iguais.";
        resultado.className = "resultado";
    } else {
        resultado.textContent = "Erro: As senhas não são iguais.";
        resultado.className = "erro";
    }
}