gsap.registerPlugin(ScrollTrigger);



function Animations(){
    gsap.from('#title',{
        opacity:0,
        y:112,
        delay:.3
    })
    gsap.from('#subtitle',{
   
    })
}

Animations()

function ScrollAnimations(){
    gsap.to('.skill',{
        scrollTrigger:{
            trigger:'.skill',
            markers:false,
            toggleActions:"restart pause reverse pause"
        },
        scale:1.2,
        duration:3
    })
    gsap.from('.project',{
        scrollTrigger:{
            trigger:'.project',
            markers:false,
            toggleActions:"restart pause reverse pause"
        },
      
        duration:1
    })
    gsap.from('#projectTitle',{
        scrollTrigger:{
            trigger:'#projectTitle',
            markers:false,
            toggleActions:"restart pause pause pause"
        },
        // opacity:0,
        x:-112,
        // delay:.2,
        duration:1
    })
    gsap.from('#skillTitle',{
        scrollTrigger:{
            trigger:'#skillTitle',
            markers:false,
            toggleActions:"restart pause pause pause"
        },
        // opacity:0,
        x:-142,
        delay:.3,
        duration:.4
    })
  
  
  
}

ScrollAnimations()


function hamMenu(){
let menuBtn=document.querySelector('.hamburgerMenu')
let menu=document.querySelector('.links2')



menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('active')
})
}

hamMenu()