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

describe("Teste para a função ComparaSenhas", function() {
    it("deve retornar 'Sucesso: As senhas são iguais.' quando as senhas são iguais", function() {
        expect(ComparaSenhas("abc123", "abc123")).toEqual("Sucesso: As senhas são iguais.");
    });

    it("deve retornar 'Erro: As senhas não são iguais.' quando as senhas são diferentes", function() {
        expect(ComparaSenhas("abc123", "123abc")).toEqual("Erro: As senhas não são iguais.");
    });
});