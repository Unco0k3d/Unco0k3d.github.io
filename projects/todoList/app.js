//selectors
const input = document.querySelector('.input');
const enter = document.querySelector('.enter');
const list = document.querySelector('.list');
const checkBtn = document.querySelectorAll('.check')
const filter = document.querySelector('.filter-todos')

//event listeners
enter.addEventListener('click', addTodo)
list.addEventListener('click',deleteComplete)
filter.addEventListener('click',filterTodos)
document.addEventListener('DOMContentLoaded',getTodos)

//functions
function addTodo(e){
    e.preventDefault();
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //create div to append to ul
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    list.appendChild(todoDiv)

    const dateDiv = document.createElement('div')
    dateDiv.classList.add('date')
    dateDiv.innerHTML = `${date}`
    todoDiv.appendChild(dateDiv)
    
    //create li and append to div
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerText = input.value
    todoDiv.appendChild(li)

    //create p and append to li
    // const p = document.createElement('p')
    // p.classList.add('content')
    // li.appendChild(p)
    
    //create complete button and append to div
    const checkBtn = document.createElement('button')
    // checkBtn.classList.add('check')
    checkBtn.innerText = 'Complete?'
    todoDiv.appendChild(checkBtn)
    
    //create remove button and append to div
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('delete')
    removeBtn.innerText = 'Remove'
    todoDiv.appendChild(removeBtn)
    
    //add todo to localStorage
    saveToLocalStorage(`${date}    ${input.value}`)
    
    //reset input
    input.value = ''
}

//remove button and complete button
function deleteComplete(e){
    const item = e.target
    const listText = item.previousSibling
    if(item.classList[0]==='delete'){
        const todo = item.parentElement;
        todo.classList.add('fall')
        deleteFromLocalStorage(todo)
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }
    if(item.classList[0]==='check'){
        listText.classList.toggle('completed')
        item.classList.toggle('color-swap')
        if(item.innerText === 'Complete?'){
            item.innerText = 'Completed'
        }else{
            item.innerText = 'Complete?'
        }
    }
}
//broken
function filterTodos(e){
    const todos = list.childNodes
    console.log(e.target.value)
    
    console.log(todos)
    todos.forEach(i=>{
        switch(e.target.value){
            case 'all':
                break;
            case 'completed':
               if(i.classList==='list-item completed'){
                    i.style.display='flex'
                }
                else {i.style.display='grid'}
        }
    })
}

function saveToLocalStorage(todo){
    let todos;
    if(localStorage.getItem('todos')===null)
        todos=[]
    else todos = JSON.parse(localStorage.getItem('todos'))

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null)
        todos=[]
    else todos = JSON.parse(localStorage.getItem('todos'))

    todos.forEach(todo => {
        //create div to append to ul
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    list.appendChild(todoDiv)
    
    //create li and append to div
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerText = todo
    todoDiv.appendChild(li)

    //create p and append to li
    const p = document.createElement('p')
    p.classList.add('content')
    li.appendChild(p)
    
    //create complete button and append to div
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check')
    checkBtn.innerText = 'Complete?'
    todoDiv.appendChild(checkBtn)
    
    //create remove button and append to div
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('delete')
    removeBtn.innerText = 'Remove'
    todoDiv.appendChild(removeBtn)
    })
}

function deleteFromLocalStorage(todo){
    let todos;
    if(localStorage.getItem('todos')===null)
        todos=[]
    else todos = JSON.parse(localStorage.getItem('todos'))
    const todoValue = todo.children[0].innerText
    todos.splice(todos.indexOf(todoValue),1)
    localStorage.setItem('todos', JSON.stringify(todos))
}