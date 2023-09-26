let selectedItemAudio = new Audio('assets/selected-button.mp3')
let correctSelectAudio = new Audio('assets/correct-chime.mp3')
let incorrectSelectAudio = new Audio('assets/negative-beep.mp3')
let failureAudio = new Audio('assets/negative-beep.mp3')
let successAudio = new Audio('assets/success-bell.mp3')

let selectedImages = document.querySelector(".item-gallery")

document.addEventListener('click', function selected(evt) {
evt.target.classList.toggle('selected');
selectedItemAudio.play();
    });  

document.querySelector(".combo-1a").addEventListener('click', (e)=> {
let aClass = document.querySelectorAll(".combo-1a > img.selected, .combo-1b > img.selected")
if(aClass.length == 2){
aClass.forEach(image =>{
image.classList.add('correct-answer')
})
}else{
e.target.classList.add('wrong-answer')
}
});

document.querySelector(".combo-1b").addEventListener('click',  (e)=> {
    let aClass = document.querySelectorAll(".combo-1a > img.selected, .combo-1b > img.selected")
    if(aClass.length == 2){
    aClass.forEach(image =>{
    image.classList.add('correct-answer')
    })
    }else{
    e.target.classList.add('wrong-answer')
    }
    });

document.querySelector(".combo-2a").addEventListener('click',  (e)=> {
    let bClass = document.querySelectorAll(".combo-2a > img.selected, .combo-2b > img.selected")
    if(bClass.length == 2){
    bClass.forEach(image =>{
    image.classList.add('correct-answer')
    })
    }else{
    e.target.classList.add('wrong-answer')
    }
    });

document.querySelector(".combo-2b").addEventListener('click',  (e)=> {
    let bClass = document.querySelectorAll(".combo-2a > img.selected, .combo-2b > img.selected")
    if(bClass.length == 2){
    bClass.forEach(image =>{
    image.classList.add('correct-answer')
    })
    }else{
    e.target.classList.add('wrong-answer')
    }
    });

document.querySelector(".combo-3a").addEventListener('click',  (e)=> {
    let cClass = document.querySelectorAll(".combo-3a > img.selected, .combo-3b > img.selected")
    if(cClass.length == 2){
    cClass.forEach(image =>{
    image.classList.add('correct-answer')
    })
    }else{
    e.target.classList.add('wrong-answer')
    }
    });

document.querySelector(".combo-3b").addEventListener('click', (e)=> {
    let cClass = document.querySelectorAll(".combo-3a > img.selected, .combo-3b > img.selected")
    if(cClass.length == 2){
    cClass.forEach(image =>{
    image.classList.add('correct-answer')
    })
    }else{
    e.target.classList.add('wrong-answer')
    }
    });


function selected(){
selectedImages.forEach(image =>{
image.classList.add('selected')
})
}