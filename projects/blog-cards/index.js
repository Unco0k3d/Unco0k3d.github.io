const headImgFile = document.querySelector('.header-pic')
const proImgFile = document.querySelector('.profile-pic')
const headImgContainer = document.getElementById('head-img-container')
const proImgContainer = document.getElementById('pro-img-container')
const headerImg = document.getElementById('head-img-preview')
const proImg = document.getElementById('pro-img-preview')
const defaultText = document.querySelector('.default-text')
const add = document.querySelector('.add')
const container = document.querySelector('.container')
const nameValue = document.querySelector('.name-input')
const tagValue = document.querySelector('.tag-input')
const headingValue = document.querySelector('.heading-input')
const postValue = document.querySelector('.post-input')
const form = document.querySelector('.form')
const tagBackground = document.querySelector('.background-color')
const tagText = document.querySelector('.text-color')
console.log(tagBackground.value)
console.log(tagText.value)

let headImgSrc;
let proImgSrc;

headImgFile.addEventListener('change', previewImg)
proImgFile.addEventListener('change', previewImg)
form.addEventListener('submit',addPost)

function previewImg(e){
    const className = e.target.classList[0]
    // console.log(className)
    const file = this.files[0]
    const reader = new FileReader()
    if(file){
        if(className==='header-pic'){
            // defaultText.style.display = 'none'
            headerImg.style.display = 'flex'
            reader.addEventListener('load', function(){
                headImgSrc = this.result
                headerImg.setAttribute('src', this.result)
            })
        }
        
        if(className==='profile-pic'){
            // defaultText.style.display = 'none'
            proImg.style.display = 'flex'
            reader.addEventListener('load', function(){
                proImgSrc = this.result
                proImg.setAttribute('src', this.result)
            })
        }
        reader.readAsDataURL(file)
    }

}

function addPost(e){
    e.preventDefault()
    console.log(nameValue.value)
    const userName = document.createElement('h5')
    userName.innerText = nameValue.value
    const timeAgo = document.createElement('small')
    timeAgo.innerText = '20 hours ago'
    const userInfo = document.createElement('div')
    userInfo.classList.add('user-info')
    userInfo.appendChild(userName)
    userInfo.appendChild(timeAgo)
    const profileImg = document.createElement('img')
    profileImg.src = proImgSrc
    const user = document.createElement('div')
    user.classList.add('user')
    user.appendChild(profileImg)
    user.appendChild(userInfo)
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = tagValue.value
    tag.style.backgroundColor = tagBackground.value
    tag.style.color = tagText.value
    const description = document.createElement('h4')
    const postContent = document.createElement('p')
    const cardBody = document.createElement('div')
    description.innerText = headingValue.value
    postContent.innerText = postValue.value
    cardBody.classList.add('card-body')
    cardBody.appendChild(tag)
    cardBody.appendChild(description)
    cardBody.appendChild(postContent)
    cardBody.appendChild(user)
    const headImg = document.createElement('img')
    headImg.src = headImgSrc
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    cardHeader.appendChild(headImg)
    const card = document.createElement('div')
    card.classList.add('card')
    card.appendChild(cardHeader)
    card.appendChild(cardBody)
    container.appendChild(card)
}