
document.getElementById('resume')
.addEventListener('click',function(){
    document.getElementById('main-wrapper')
    .innerHTML =
     `
     <img id="resume-pic" src="../img/resume.jpg" alt="">
     `
})
document.getElementById('photo')
.addEventListener('click',function(){
    document.getElementById('main-wrapper')
    .innerHTML =
     `
     <div class="row">
            <div class="column">
          <img src="../photography/bench.jpg" alt="">
          <img src="../photography/fall1.jpg" alt="">
        </div>
        <div class='column'>
          <img src="../photography/bridge.jpg" alt="">
          <img src="../photography/driver.jpg" alt="">
        </div>
        <div class="column">
          <img src="../photography/hydrant.jpg" alt="">
          <img src="../photography/fall2.jpg" alt="">
        </div>
        <div class="column">
          <img src="../photography/pumpkin.jpg" alt="">
          <img src="../photography/something-idk.jpg" alt="">
          </div>
          <div class="column">
          <img src="../photography/young-nick.jpg" alt="">
          <img src="../photography/dizzy.jpg" alt="">
        </div>
          </div>
     `
})
document.getElementById('got')
.addEventListener('click',function(){
    document.getElementById('main-wrapper')
    .innerHTML =
     `
   <div class="got-img-wrap">
       <img class="got-imgs" id="diplay1" src="../GOT/display1.jpg" alt=""/>
       <img class="got-imgs" id="display2" src="../GOT/display2.jpg" alt=""/>
       <img class="got-imgs" id="tech-design" src="../GOT/got.jpg" alt=""/>
   </div>
     `
})
document.getElementById('pallet')
.addEventListener('click',function(){
    document.getElementById('main-wrapper')
    .innerHTML =
     `
     <div id="img-wrapper">
       <img src="../pallet/pallete-close.jpg" alt="">
       <img src="../pallet/pallete-far.JPG" alt="">
       <img src="../pallet/pallete-design.jpg" alt="">
     </div>
   </div>
   </div>
     `
})
window.onload = function() {
   document.getElementById("resume").focus();
 };