let selectedItemAudio = new Audio('assets/selected-button.mp3')
let correctSelectAudio = new Audio('assets/correct-chime.mp3')
let incorrectSelectAudio = new Audio('assets/negative-beep.mp3')
let failureAudio = new Audio('assets/negative-beep.mp3')
let successAudio = new Audio('assets/success-bell.mp3')
let selectedImages = document.querySelector(".item-gallery")
//loss tracker
let lossTracker = 0

for(let i=0; i < selectedImages.children.length; i++){
    selectedImages.children[i].addEventListener('click', (evt)=> {
        evt.target.classList.toggle('selected');
        selectedItemAudio.play();
            });
}

document.querySelector(".combo-1a").addEventListener('click', (e)=> {
let aClass = document.querySelectorAll(".combo-1a > img.selected, .combo-1b > img.selected")
if(aClass.length == 2){
aClass.forEach(image =>{
image.classList.add('correct-answer')
correctSelectAudio.play();
})
aClass.forEach(image =>{
    //this is to remove the html element
    image.remove()
})
}else if(aClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
    if(document.querySelectorAll('.selected').length > 1) {
        for(let i=0;i < currentSelected.length; i++){
            currentSelected[i].classList.add('wrong-answer')
            incorrectSelectAudio.play();
        }
    }
}
});

document.querySelector(".combo-1b").addEventListener('click',  (e)=> {
    let aClass = document.querySelectorAll(".combo-1a > img.selected, .combo-1b > img.selected")
    if(aClass.length == 2){
    aClass.forEach(image =>{
    image.classList.add('correct-answer')
    correctSelectAudio.play();
    })
    aClass.forEach(image =>{
        //this is to remove the html element
        image.remove()
    })
}else if(aClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
if(document.querySelectorAll('.selected').length > 1) {
        for(let i=0;i < currentSelected.length; i++){
            currentSelected[i].classList.add('wrong-answer')
            incorrectSelectAudio.play();
        }
    }
}
});

document.querySelector(".combo-2a").addEventListener('click',  (e)=> {
    let bClass = document.querySelectorAll(".combo-2a > img.selected, .combo-2b > img.selected")
    if(bClass.length == 2){
    bClass.forEach(image =>{
    image.classList.add('correct-answer')
    correctSelectAudio.play();
    })
    aClass.forEach(image =>{
        //this is to remove the html element
        image.remove()
    })
}else if(bClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
    if(document.querySelectorAll('.selected').length > 1) {
            for(let i=0;i < currentSelected.length; i++){
                currentSelected[i].classList.add('wrong-answer')
                incorrectSelectAudio.play();
            }
        }
}
    });

document.querySelector(".combo-2b").addEventListener('click',  (e)=> {
    let bClass = document.querySelectorAll(".combo-2a > img.selected, .combo-2b > img.selected")
    if(bClass.length == 2){
    bClass.forEach(image =>{
    image.classList.add('correct-answer')
    correctSelectAudio.play();
    })
    aClass.forEach(image =>{
        //this is to remove the html element
        image.remove()
    })
}else if(bClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
    if(document.querySelectorAll('.selected').length > 1) {
            for(let i=0;i < currentSelected.length; i++){
                currentSelected[i].classList.add('wrong-answer')
                incorrectSelectAudio.play();
            }
        }
}
    });

document.querySelector(".combo-3a").addEventListener('click',  (e)=> {
    let cClass = document.querySelectorAll(".combo-3a > img.selected, .combo-3b > img.selected")
if(cClass.length == 2){
        cClass.forEach(image =>{
        image.classList.add('correct-answer')
        correctSelectAudio.play();
        })
        aClass.forEach(image =>{
            //this is to remove the html element
            image.remove()
        })
}else if(cClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
if(document.querySelectorAll('.selected').length > 1) {
        for(let i=0;i < currentSelected.length; i++){
            currentSelected[i].classList.add('wrong-answer')
            incorrectSelectAudio.play();
        }
    }
}
    });

document.querySelector(".combo-3b").addEventListener('click', (e)=> {
    let cClass = document.querySelectorAll(".combo-3a > img.selected, .combo-3b > img.selected")
if(cClass.length == 2){
        cClass.forEach(image =>{
        image.classList.add('correct-answer')
        correctSelectAudio.play();
        })
        aClass.forEach(image =>{
            //this is to remove the html element
            image.remove()
        })     
}else if(cClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
if(document.querySelectorAll('.selected').length > 1) {
        for(let i=0;i < currentSelected.length; i++){
            currentSelected[i].classList.add('wrong-answer')
            incorrectSelectAudio.play();
        }
    }
    }
});


function youWin(){

}


function youLose(){
//1. want to keep track of how many times wrong answer has been applied
// (how many times wrong answer class has been added to an element)
//2. once that hits 3, then do popup that says you lose
//Going to want variable to track wrong answers to be global so that way this function and other functions will be able to track triggers



}