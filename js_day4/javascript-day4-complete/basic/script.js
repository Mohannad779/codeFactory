let viewBtn = document.getElementById('view-button')
let info = document.getElementById('info')
let closeBtn = document.getElementById('close-button')

function showInfo () {
  info.style.display = 'block'
  closeBtn.style.display = 'block'
  viewBtn.innerHTML = 'Hello'
}
function hide () {
  info.style.display = 'none'
  closeBtn.style.display = 'none'
  viewBtn.innerHTML = 'View'
}
// function changeText () {
//   viewBtn.innerHTML = 'Hello'
// }
viewBtn.addEventListener('click', showInfo)
// viewBtn.addEventListener('click', changeText)

closeBtn.addEventListener('click', hide)
