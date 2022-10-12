

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
    introCont.classList.add('fadeOut')
    setTimeout(() => {
        introCont.classList.add('remove')
    }, 175)
})

// Mouse Parallax

// document.addEventListener('mousemove', parallax)
// function parallax(e){
//     this.querySelectorAll('.parallax-obj').forEach(layer => {
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)/100
//         const y = (window.innerHeight - e.pageY*speed)/100

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }


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
// document.addEventListener('mouseout', () => {
//     cusror.style.display = 'none'
// })

let btns = Array.from(document.querySelectorAll('button'))

btns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        innercusror.classList.add('grow')
        outercusror.classList.add('shrink')
    })
    
    btn.addEventListener('mouseleave', () => {
        innercusror.classList.remove('grow')
        outercusror.classList.remove('shrink')
    })
})