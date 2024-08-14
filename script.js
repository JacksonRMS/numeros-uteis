let trilho = document.querySelector('#trilho')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let barra = document.querySelector('.texto')
let span = document.querySelector('span')
let inputt = document.querySelector('input')
let botao = document.querySelector('button')

trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
  h1.classList.toggle('dark')
  barra.classList.toggle('dark')
  span.classList.toggle('dark')
  inputt.classList.toggle('dark')
  botao.classList.toggle('dark')
  desc.classList.toggle('dark')
  detalhes.classList.toggle('dark')
})

let input = document.querySelector('#input')
let desc = document.querySelector('#descrição') //paragrafo
let detalhes = document.querySelector('#detalhes')

const button = document.querySelector('#button')
button.addEventListener("click", procurar)

const contatos = [
  {
    name: 'polícia militar',
    number: '190',
    descrição: 'Responsável pelo patrulhamento ostensivo e pela preservação da ordem pública.'
  },
  {
    name: 'disque denúncia',
    number: '181',
    descrição: 'Canal para denúncias anônimas de crimes e atividades suspeitas.'
  },
  {
    name: 'polícia civil',
    number: '197',
    descrição: 'Realiza investigações criminais e serviços de polícia judiciária.'
  },
  {
    name: 'polícia rodoviária federal',
    number: '191',
    descrição: 'Responsável pela fiscalização das rodovias federais e pelo combate a crimes nelas cometidos.'
  },
  {
    name: 'samu',
    number: '192',
    descrição: 'Serviço de Atendimento Móvel de Urgência para emergências médicas.'
  },
  {
    name: 'iml',
    number: '0800-2828-197',
    descrição: 'Instituto Médico Legal, responsável por perícias médicas legais.'
  },
  {
    name: 'Bombeiros',
    number: '193',
    descrição: 'Atua no combate a incêndios, resgates e emergências envolvendo riscos à vida.'
  },
  {
    name: 'defesa civil',
    number: '199',
    descrição: 'Coordenada ações de prevenção e resposta a desastres naturais e outras emergências.'
  },
  {
    name: 'direitos humanos',
    number: '100',
    descrição: 'Central de atendimento para denúncias de violações de direitos humanos.'
  },
  {
    name: 'procon',
    number: '151',
    descrição: 'Órgão de defesa do consumidor, atuando na proteção e orientação sobre direitos do consumidor.'
  },
]

function procurar() {

  for (let i = 0; i < contatos.length; i++) {
    if (input.value.toLowerCase() === contatos[i].name) {
      desc.innerHTML = `Contato encontrado com o nome: ${contatos[i].name} e telefone ${contatos[i].number}`
      detalhes.innerHTML = `Descrição:  ${contatos[i].descrição}`

      break
    }

    else {
      desc.innerHTML = "Contato não encontrado"
      detalhes.innerHTML = "Tente novamente!"
    }

  }

}




