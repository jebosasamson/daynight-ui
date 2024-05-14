let box = document.querySelector('.box')
let change = document.querySelector('.switch')
let container = document.querySelector('.container')
let ifChange = !true 

function handleChange(){
    if(ifChange){
        change.style.background = 'white'
        container.style.background = 'rgb(157, 158, 160)'
        box.style.background = 'black'
        change.classList.add('left')
        change.classList.remove('right')
        ifChange = false

    } else{
        change.style.background = 'black'
        container.style.background = 'black'
        change.classList.add('right')
        change.classList.remove('left')
        box.style.background = 'white'
        ifChange = true
    }
}

box.addEventListener('click', handleChange)
    