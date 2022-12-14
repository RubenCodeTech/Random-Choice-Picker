const textArea = document.querySelector('#textarea')
const tags = document.querySelector('#tags')
textArea.addEventListener('keydown', valueTextArea)
let selector = document.querySelector('.selector') 
let random = -1
let interval = null
let keys = null
function valueTextArea(e) {
    if (tags.childElementCount == 0) {
        let text = document.createElement('p')
        tags.appendChild(text)
    }

    if (e.key === ',') {
        let text = document.createElement('p')
        tags.appendChild(text)
//  displayNoneEmptyElements()
    } else if (e.key === 'Enter') {
        let boxesTagValue = textArea.value.split(',');
        interval = setInterval(() => {
            if (random !== -1) {
                tags.children[random].classList.remove('color')
            }
            random = Math.floor(Math.random() * boxesTagValue.length);
            tags.children[random].classList.add('color')

        }, 100); setTimeout(() => {
            clearInterval(interval)
            lotterySelector()
        }, 3000);
    } else {
        setTimeout(() => {
            keys = e.target.value.slice(e.target.value.lastIndexOf(',') + 1)
            tags.lastElementChild.textContent = keys
            removeEmptyElements()
        }, 0.1)
    }
}
function removeEmptyElements(){
    if(tags.lastChild.textContent==''){
        tags.lastChild.remove()
    }
}
// function displayNoneEmptyElements(){
//     if(tags.lastChild.textContent==''){
//         tags.lastChild.classList.add('displayNone')
//         tags.lastChild.classList.remove('displayBlock')
//     }else{
//         tags.lastChild.classList.remove('displayNone')
//         tags.lastChild.classList.add('displayBlock')
        
//     }
// }

