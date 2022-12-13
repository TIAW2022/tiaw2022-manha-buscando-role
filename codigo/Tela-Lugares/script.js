var estabelecimentos;

function leDados (){
    let strDados = localStorage.getItem('estabelecimentos');
    estabelecimentos = JSON.parse(strDados);

    return(estabelecimentos);
}
function imprimeDados(){
    let tela = document.getElementById('tela');
    let strHtml ='';
    let estabelecimentos = leDados();

    console.log(estabelecimentos)
    for( let i=0; i< estabelecimentos.length ; i++){
        console.log(strHtml);
        strHtml +=  ` <div class="card ${estabelecimentos[i].tipo} col-lg-3">
        <img class="card-img" src="${estabelecimentos[i].imagem}" alt="...">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${estabelecimentos[i].nome}</li>
          <li class="list-group-item">${estabelecimentos[i].endereco}</li>
          <li class="list-group-item">${estabelecimentos[i].tipo}</li>
        </ul>
      </div>`
    }

    document.getElementById('tela').innerHTML = strHtml
    
}
window.onload = imprimeDados();



function validacao(){
    var x ;
    let confirma = confirm('Você está acessando diretamente de uma conta CNPJ?');
    
    if(confirma == true){
        x= alert('Acesso permitido')
    }
    else{
        if(confirma == false){
            x= alert('Acesso negado')
        }  
    }
}
