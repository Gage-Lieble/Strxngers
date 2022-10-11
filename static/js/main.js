

// Intro Overlay

let shopBtn = document.getElementById('entersite-btn')

shopBtn.addEventListener('click', () => {
    let introCont = document.getElementById('intro-overlay')
    introCont.classList.add('fadeOut')
    setTimeout(() => {
        introCont.classList.add('remove')
    }, 175)
})


// Content

let buyBtn = document.getElementById('buy-btn')

buyBtn.addEventListener('click', () => {
    console.log('BUYYY')
})