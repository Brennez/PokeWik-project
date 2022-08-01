const btnNext = document.getElementById('btn-next') // Pega o elemento HTML pelo id
const btnBack = document.getElementById('btn-back')

const cardList = document.querySelectorAll('.card') // Pega todos os elementos que contém a classe ".card"

function removeCardSelected() {
  //remove a classe selecionada
  const cardSelected = document.querySelector('.selected')
  // console.log(cardSelected)
  cardSelected.classList.remove('selected')
}

//adiciona a classe selected
function showSelecteCard(indexCard) {
  cardList[i].classList.add('selected')
}

var i = 0

// Adiciona um evento de click no elemento capturado
btnNext.addEventListener('click', () => {
  if (i === cardList.length - 1) return

  removeCardSelected()

  i++
  showSelecteCard(i)
})

// Fazendo o efeito de voltar
btnBack.addEventListener('click', () => {
  if (i === 0) return
  //remove a classe selecionada
  removeCardSelected()

  // Adiciona a classe selecionada
  i--
  showSelecteCard(i)
})
