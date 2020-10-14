const list = document.getElementById('list')
const button = document.getElementById('button')


const url = 'https://jsonplaceholder.typicode.com/albums'

button.addEventListener('click', getData)

function getData(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url,true)
    xhr.onload = function(){
        if(this.status==200)
            var albums = JSON.parse(this.responseText)
            console.log(albums)
            albums.map(i=>i.title)
    }
    xhr.send()
}


// console.log(data)