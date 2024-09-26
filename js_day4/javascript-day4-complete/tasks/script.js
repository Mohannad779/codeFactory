const addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', addNewTask)

function addNewTask () {
  let input = document.getElementById('newTask').value

  let taskContainer = document.getElementById('tasks-container')
  taskContainer.innerHTML += `
    <li class='list-group-item task'>${input} </li>
  `
  addListener()
}

function addListener () {
  let items = document.querySelectorAll('.task')
  //   console.log(items)

  //   items[0].addEventListener('click', function () {
  //     console.log('Hello there')
  //   })

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', removeItem)
  }
}

function removeItem () {
  console.log(this)

  this.style.opacity = '0'
  this.style.transition = '1s'
  setTimeout(() => {
    this.remove()
  }, 1000)
}
