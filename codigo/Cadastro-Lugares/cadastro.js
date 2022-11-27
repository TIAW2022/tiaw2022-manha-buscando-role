function cadastroFeito(){
    let confirma = confirm('Confirmar o cadastro?');

    if(confirma) {

        var arrayPessoas=[]

    if(JSON.parse(localStorage.getItem("pessoas")) != null){
        arrayPessoas.push(JSON.parse(localStorage.getItem("pessoas")));
    }   
    var nome = document.getElementById("inputNome").value;
    var cnpj = document.getElementById("inputCnpj").value;
    var cidade = document.getElementById("inputCidade").value;
    var telefone = document.getElementById("inputTelefone").value;
    var email = document.getElementById("inputEmail").value;
    var endereco = document.getElementById("inputEndereco").value;
    
    var pessoa = {nome: nome, cnpj: cnpj, cidade: cidade, telefone: telefone, email: email, endereco: endereco};
    arrayPessoas.push(pessoa);
    var pessoaJson = JSON.stringify(arrayPessoas);
    localStorage.setItem("pessoas", pessoaJson);
    
    alert('Cadastro Feito com Sucesso!');
        
    }
    else alert('Cadastro cancelado')
}


