const inputBox = document.getElementById('input')
const add = document.getElementById('add')
const ul = document.getElementById('list')
const filter = document.getElementById('filter')
const todoDiv = document.querySelector('.todo-div')

add.addEventListener('click', checkContent)
ul.addEventListener('click',completeOrDelete)
document.addEventListener('DOMContentLoaded',getTodos)
filter.addEventListener('click',filterTodos)

function filterTodos(e){
    let todos = JSON.parse(localStorage.getItem('todos'))
    let completed = todos.filter(i=>i.complete===true)
    let nodes = ul.childNodes
    for(let i=1;i<nodes.length;i++){
        let todoDivNodes = nodes[i].childNodes
        let btnDiv = todoDivNodes[2]
        let completeBtn = btnDiv.childNodes
        
        switch(e.target.value){
            case 'all':
                nodes[i].style.display = 'flex'
                break;
            case 'completed':
                if(completeBtn[0].innerText==='Completed')
                    nodes[i].style.display = 'flex'
                else nodes[i].style.display = 'none'
                break;
            case 'incomplete':
                if(completeBtn[0].innerText==='Complete?')
                    nodes[i].style.display = 'flex'
                else nodes[i].style.display = 'none'
                break;
        }
    }
    }

function checkContent(e){
    e.preventDefault();
    let content = input.value
    let todos = JSON.parse(localStorage.getItem('todos'))
    if(todos===null)
        addTodo(content)
    else{ 
        let todosArr = todos.map(todo=>todo.todo)
        if(todosArr.includes(content))
            alert('exists')
        else if(content==='')
            alert("can't add blank todo")
        else addTodo(content)
    }
}

function addTodo(td){
    let datePosted = new Date().toLocaleDateString()
    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-div')
    ul.appendChild(todoDiv)
    let date = document.createElement('div')
    date.classList.add('date')
    date.innerText = `${datePosted}`
    todoDiv.appendChild(date)
    let li = document.createElement('li')
    li.classList.add('list-item')
    todoDiv.appendChild(li)
    li.innerHTML = `<p>${input.value}</p>`
    let btnDiv = document.createElement('div')
    btnDiv.classList.add('btn-div')
    todoDiv.appendChild(btnDiv)
    let complete = document.createElement('button')
    complete.classList.add('complete')
    complete.innerText = 'Complete?'
    btnDiv.appendChild(complete)
    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.innerText = 'X'
    btnDiv.appendChild(remove)
    // let edit = document.createElement('button')
    // edit.classList.add('edit')
    let todo = {
        'todo': input.value,
        'date': datePosted,
        'complete': false
    }
    saveToLocalStorage(todo)
    input.value = ''
}

function completeOrDelete(e){
    let item = e.target
    let content = e.target.parentElement.previousSibling.innerText
    let todos = JSON.parse(localStorage.getItem('todos'))
    let todoArr = todos.map(item=>item.todo)
    let index = todoArr.indexOf(content)
    if(item.classList.contains('remove')){
        let todoDiv = e.target.parentElement.parentElement
        todoDiv.classList.add('fall')
        todoDiv.addEventListener('transitionend',function(){
            todoDiv.remove()
        })
        todos.splice(index,1)
        localStorage.setItem('todos',JSON.stringify(todos))
    }
    if(item.classList.contains('complete')){
        item.parentElement.previousSibling.classList.toggle('line-through')
        item.classList.toggle('completed')
        if(item.innerText==='Complete?')
            item.innerText = 'Completed';
        else item.innerText = 'Complete?';
        if(item.innerText==='Completed')
            todos[index].complete = true
        else if(item.innerText==='Complete?')
            todos[index].complete = false
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}

// local storage funcions
function saveToLocalStorage(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = []
    }
    else todos = JSON.parse(localStorage.getItem('todos'))
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null)
    todos=[]
    else todos = JSON.parse(localStorage.getItem('todos'))
    
    todos.forEach(i => {
        let todoDiv = document.createElement('div')
        todoDiv.classList.add('todo-div')
        ul.appendChild(todoDiv)
        let date = document.createElement('div')
        date.classList.add('date')
        date.innerText = `${i.date}:`
        todoDiv.appendChild(date)
        let li = document.createElement('li')
        li.classList.add('list-item')
        li.innerHTML = `<p>${i.todo}</p>`
        todoDiv.appendChild(li)
        let btnDiv = document.createElement('div')
        btnDiv.classList.add('btn-div')
        todoDiv.appendChild(btnDiv)
        let complete = document.createElement('button')
        complete.classList.add('complete')
        complete.innerText = 'Complete?'
        btnDiv.appendChild(complete)
        let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.innerText = 'X'
        btnDiv.appendChild(remove)
        if(i.complete){
            complete.innerText = 'Completed'
            complete.classList.toggle('completed')    
            li.classList.toggle('line-through')     
        }
});
}