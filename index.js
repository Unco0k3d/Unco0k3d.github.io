//pages
document.getElementById('resume')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/Resume/index.html" target="_blank">
     open
     </a>
     </h1>
     <img src="./img/resume.PNG" alt="my resume" />
     `
})
document.getElementById('landing-page')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/landingPage/index.html" target="_blank">
     open
     </a>
     </h1>
     <img src="./img/landing.PNG" alt="my resume" />
     `
})

document.getElementById('tribute')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/tributePage/tribute.html" target="_blank">
     open
     </a>
     </h1>
     <img src="./img/tribute.PNG" alt="tribute page" />
     `
})

document.getElementById('stuxnet')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/techDocs/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/stuxnet.PNG" alt="stuxnet analysis" />
     `
})
document.getElementById('survey-form')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/surveyForm/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/survey.PNG" alt="survey form" />
     `
})
document.getElementById('gtc')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/GTC/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/gtc.PNG" alt="band page" />
     `
})
document.getElementById('lauren')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/lauren-portfolio/html/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/lauren.jpg" alt="lauren portfolio page" />
     `
})
document.getElementById('titus-mower')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/TitusMower/html/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/titus-mower.PNG" alt="titus mower page" />
     `
})
document.getElementById('blog')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/blog/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/blog.PNG" alt="blog page" />
     `
})
document.getElementById('todo')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/todos/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/todo.PNG" alt="todo list" />
     `
})
document.getElementById('blog-post-app')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/blog-cards/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/blog-posts.PNG" alt="blog post app" />
     `
})
document.getElementById('react-todo')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <h1>
     <a href="https://unco0k3d.github.io/projects/myReactTodoList/index.html" target="_blank">
     open
     </a>
     </h1> 
     <img src="./img/" alt="react todo list" />
     `
})
//contact form
document.getElementById('contact')
.addEventListener('click',function(){
    document.getElementById('img-container')
    .innerHTML =
     `
     <div class="contact-me">
        <form>
          <fieldset id="contact-form">
            <legend id="legend">Your Contact Information</legend>
    
            <div id="first">
              <label for="first"
                >First Name
                <input type="text" placeholder="Jane" required />
              </label>
            </div>
    
            <div id="last">
              <label for="last"
                >Last Name
                <input type="text" placeholder="Doe" />
              </label>
            </div>
    
            <div id="email">
              <label for="email"
                >Email
                <input type="email" placeholder="janedoe@example.com" required />
              </label>
            </div>
    
            <div id="phone">
              <label for="phone"
                >Home/Cell Number
                <input type="tel" placeholder="555-555-5555" />
              </label>
            </div>
    
            <div id="pref">
              <label for="prefered"
                >Prefered contact medium/time<br />
                <textarea
                  name="prefered"
                  id="prefered"
                  cols="30"
                  rows="10"
                  placeholder="Phone/Email & Availability"
                ></textarea>
              </label>
            </div>
    
            <div id="submit">
              <button id='submit-button' type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
     `
})
document.getElementById('submit-button').addEventListener('click',function(e){
  e.preventDefault()    
  document.querySelector('contact-me').style.animation = 
      'rotateplane 1s'
});
window.onload = function() {
  document.getElementById("resume").focus();
};