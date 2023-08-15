const reader = new FileReader();
var imagem

document.getElementById("formFile").addEventListener("change", function(){
  reader.addEventListener("load", function(){
      imagem = reader.result;
  });

  reader.readAsDataURL(this.files[0])
});

function cadastroFeito() {
  let confirma = confirm("Confirmar o cadastro?");

  if (confirma) {
    var arrayestabelecimentos = [];

    if (JSON.parse(localStorage.getItem("estabelecimentos")) != null) {
      arrayestabelecimentos = JSON.parse(
        localStorage.getItem("estabelecimentos")
      );
    }
    var nome = document.getElementById("inputNome").value;
    var cnpj = document.getElementById("inputCnpj").value;
    //var imagem = document.getElementById("formFile").value;
    var telefone = document.getElementById("inputTelefone").value;
    var email = document.getElementById("inputEmail").value;
    var endereco = document.getElementById("inputEndereco").value;

    let tipoHTML = document.getElementById("inputTipo");
    var tipo = tipoHTML.options[tipoHTML.selectedIndex].text;    

    var estabelecimento = {
      "nome": nome,
      "cnpj": cnpj,
      "imagem": imagem,
      "telefone": telefone,
      "email": email,
      "endereco": endereco,
      "tipo": tipo
    };

    arrayestabelecimentos.push(estabelecimento);
    var estabelecimentoJson = JSON.stringify(arrayestabelecimentos);
    localStorage.setItem("estabelecimentos", estabelecimentoJson);

    alert("Cadastro Feito com Sucesso!");
  } else alert("Cadastro cancelado");
}
