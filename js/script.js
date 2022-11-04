const btnHeader=document.querySelector('.button-header');
const headingText=document.querySelector('.heading-text');

const startAnimationShowUp=()=>{
    headingText.classList.add('animation-show-up');
   btnHeader.classList.add('animation-show-up');
}
setTimeout(startAnimationShowUp,2000);