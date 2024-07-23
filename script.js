let input = document.querySelector('#input')
let desc = document.querySelector('#descrição') //paragrafo

const button = document.querySelector('#button')
button.addEventListener("click", procurar)

const contatos = [
    { name: 'jackson', number: "(85) 99754-524" },
    { name: 'jacksom', number:"(85) 99754-52"},
    { name: 'jackso', number: "(85) 99754-5" },
    { name: 'jack', number: "(85) 99754-2" },
]

function procurar() {
    
    for(let i = 0; i < contatos.length; i++){

        if(input.value.toLowerCase() === contatos[i].name.toLocaleLowerCase){
            desc.innerHTML = `Contato encontrado com o nome: ${contatos[i].name} e telefone ${contatos[i].number}`
            break
        }

        else{
            desc.innerHTML = "contato não encontrado, tente novamente!"}

    }

}