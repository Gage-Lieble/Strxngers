

// Intro Overlay


        // logo Animation delay
setTimeout(() => {
    let logo = document.getElementById('strxngers-logo')
    logo.style.opacity = '100%'
    logo.src=`static/imgs/animate.gif`
}, 750)




let shopBtn = document.getElementById('entersite-btn')

shopBtn.addEventListener('click', () => {
    let introCont = document.getElementById('intro-overlay')
    let prodDesc = document.getElementById('desc-wrap')
    let prodImg = document.getElementById('img-placehold')
    introCont.classList.add('fadeOut')
    prodDesc.classList.add('fadeInIntro')
    prodImg.classList.add('fadeInIntro')
    setTimeout(() => {
        introCont.classList.add('remove')
    }, 175)
})


// Content

let buyBtn = document.getElementById('buy-btn')

buyBtn.addEventListener('click', () => {
    console.log('BUYYY')
})





// Cursor

let innercusror = document.querySelector('.innercursor')
let outercusror = document.querySelector('.outercursor')

        // Follow Cursor
document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    innercusror.style.top = y+'px'
    innercusror.style.left = x+'px'
    innercusror.style.display = 'block'
    outercusror.style.top = y+'px'
    outercusror.style.left = x+'px'
    outercusror.style.display = 'block'
})
        // Remove if cursor leaves page
document.addEventListener('mouseout', () => {
    innercusror.style.display = 'none'
    outercusror.style.display = 'none'
})

let btns = Array.from(document.querySelectorAll('button'))

btns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        innercusror.classList.add('grow')
        outercusror.classList.add('shrink')
    })
    btn.addEventListener('click', () =>{
        innercusror.classList.add('clickAnm')
        outercusror.classList.add('clickAnm')
        
        setTimeout(() =>{
            innercusror.classList.remove('clickAnm')
            outercusror.classList.remove('clickAnm')
        },500)
    })
   
    btn.addEventListener('mouseleave', () => {
        innercusror.classList.remove('grow')
        outercusror.classList.remove('shrink')
    })
})