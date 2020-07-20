topBtn = document.getElementById('top');

window.onscroll = () => displayTopBtn();

const displayTopBtn=()=> {
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20)
        topBtn.style.display='block'
    
        else topBtn.style.display='none'
}

const scrollToTop=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
}