const btnOne = document.getElementById('btn-one')
const btnTwo = document.getElementById('btn-two')
const btnThree = document.getElementById('btn-three')
const btnFour = document.getElementById('btn-four')
const btnFive = document.getElementById('btn-five')
const resetBtn = document.getElementById('reset-button')

btnOne.addEventListener('mouseover', function () {
  btnOne.style.width = '100%'
})

btnTwo.addEventListener('mouseup', function () {
  btnTwo.style.backgroundColor = 'green'
})

btnThree.addEventListener('mouseout', function () {
  btnThree.innerText = 'The mouse is not here anymore'
})

btnFour.addEventListener('mousedown', function () {
  btnFive.style.display = 'block'
})

resetBtn.addEventListener('click', function () {
  btnOne.style.width = '70%'
  btnTwo.style.backgroundColor = ''
  btnThree.innerText = 'The mouse must leave the box to change'
  btnFive.style.display = 'none'
})
