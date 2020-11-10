const card = document.querySelector('.container')

console.log(card)

document.querySelector('#nav')
.addEventListener('click',function(e){
    const randNum = Math.floor(Math.random()*11)-5
    const button = e.target.classList.value
    if(button==='button')
        card.style.setProperty('transform',`rotate(${randNum}deg)`)
})

document.getElementById('resume')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
             <div class="image">
                <img src="./img/resume.PNG" alt="">
             </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/resume/index.html" target='_blank'">open</a>
             </div>
          </div>
     `
})
document.getElementById('landing-page')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
             <div class="image">
                <img src="./img/landing.PNG" alt="">
             </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/landingPage/index.html" target='_blank'">open</a>
             </div>
          </div>
     `
})
document.getElementById('tribute')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/tribute.PNG" alt="">
                </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/tributePage/tribute.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('stuxnet')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/stuxnet.PNG" alt="">
                </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/techDocs/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('survey-form')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/survey.PNG" alt="">
                </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/surveyForm/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('gtc')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/gtc.PNG" alt="">
                </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/GTC/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('lauren')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/lauren.jpg" alt="">
                </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/lauren-portfolio/html/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
// document.getElementById('titus-mower')
// .addEventListener('click',function(){
//     document.querySelector('.container')
//     .innerHTML =
//      `
//      <div class="card">
//               <div class="image">
//                   <img src="./img/titus-mower.PNG" alt="">
//                 </div>
//              <div class="link">
//                   <a href="http://unco0k3d.github.io/projects/TitusMower/html/index.html" target="_blank">open</a>
//              </div>
//           </div>
//      `
// })
document.getElementById('blog')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/blog.PNG" alt="">
                </div>
             <div class="link">
                  <a href=" http://unco0k3d.github.io/projects/blog/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('todo')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/todo.PNG" alt="">
                </div>
             <div class="link">
                  <a href="http://unco0k3d.github.io/projects/todos/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('react-todo')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/react-todo-list.PNG" alt="">
                </div>
             <div class="link">
                  <a href="https://unco0k3d.github.io/reactTodoList/" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('blog-post-app')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
              <div class="image">
                  <img src="./img/blog-posts.PNG" alt="">
                </div>
             <div class="link">
                  <a href="https://unco0k3d.github.io/projects/blog-cards/index.html" target="_blank">open</a>
             </div>
          </div>
     `
})
document.getElementById('calculator-app')
.addEventListener('click',function(){
    document.querySelector('.container')
    .innerHTML =
     `
     <div class="card">
     <div class="image">
         <img src="./img/calc.PNG" alt="">
       </div>
    <div class="link">
         <a href="https://unco0k3d.github.io/projects/calculator/index.html
         " target="_blank">open</a>
    </div>
 </div>
     `
})