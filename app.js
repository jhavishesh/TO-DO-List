let lit = document.querySelector('.input')
let pie = document.querySelector('.buttoninput')
let pro = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()

    let itemall = document.createElement('div')
    itemall.classList.add('itemall')

    let item = document.createElement('p')
    item.classList.add('item')
    item.innerText = lit.value
    itemall.appendChild(item)

    if ( lit.value === '' ) 
        return false

    let checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>' 
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    let trash = document.createElement("button")
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>' 
    trash.classList.add("trash-button")
    itemall.appendChild(trash)

    pro.appendChild(itemall)
    lit.value = ''
}

function delett(e) {
    let item = e.target

    if ( item.classList[0] === 'check-button') {
        let todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    if ( item.classList[0] === 'trash-button') {
        let todolist = item.parentElement
        todolist.remove()
    }
}

pie.addEventListener('click', clickButton)
pro.addEventListener('click', delett)
