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


