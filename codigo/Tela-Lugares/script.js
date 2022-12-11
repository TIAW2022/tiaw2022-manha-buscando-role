var listaDeLugares = [
    {lugares: "jangal"},
    {lugares: "clubeChalezinho"},
    {lugares: "woodsBH"},
    {lugares: "laicos"},
    {lugares: "major"}
]


function buscarLugar(){

const itemBuscado = document.querySelector("#itemBuscado")
const lugar = itemBuscado.value

listaDeLugares.forEach(encontrarLugar => {

    if(encontrarLugar.lugares == lugar){
        location.href = `#${lugar}`
    }

})

}

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
