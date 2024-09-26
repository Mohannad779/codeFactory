const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')

let menuStatus = false

function menuToggle () {
  if (menuStatus == false) {
    sidebar.style.transform = 'translate(0)'
    menuStatus = true
  } else {
    sidebar.style.transform = 'translate(-100%)'
    menuStatus = false
  }
}

function closeMenu () {
  sidebar.style.transform = 'translate(-100%)'
  menuStatus = false
}
toggleBtn.addEventListener('click', menuToggle)
closeBtn.addEventListener('click', closeMenu)
