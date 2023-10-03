let selectedItemAudio = new Audio('assets/selected-button.mp3')
let correctSelectAudio = new Audio('assets/correct-chime.mp3')
let incorrectSelectAudio = new Audio('assets/negative-beep.mp3')
let failureAudio = new Audio('assets/negative-beep.mp3')
let successAudio = new Audio('assets/success-bell.mp3')
let selectedImages = document.querySelector(".item-gallery")
//win-lose counter
let loss = 0
let win = 0
let winnerWinner = document.querySelector("#you-win")
let loserLoser = document.querySelector("#you-lose")

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
    image.parentElement.remove(); 
})
youWin();
}else if(aClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected')
    if(document.querySelectorAll('.selected').length > 1) {
    for(let i=0;i < currentSelected.length; i++){
        currentSelected[i].classList.add('wrong-answer');
        incorrectSelectAudio.play();
        
        setTimeout(function () {
            currentSelected[i].classList.remove('wrong-answer');
            currentSelected[i].classList.remove('selected');
            e.stopPropagation();
            }, 1500);  
        }

        }
        loss = loss+1; 
        youLose();
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
    image.parentElement.remove();
    })
    youWin();
    }else if(aClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected');
    if(document.querySelectorAll('.selected').length > 1) {
    for(let i=0;i < currentSelected.length; i++){
    currentSelected[i].classList.add('wrong-answer');
    incorrectSelectAudio.play();
    
    //removes wrong answer and selected class
    setTimeout(function () {
        currentSelected[i].classList.remove('wrong-answer');
        currentSelected[i].classList.remove('selected');
        //this is supposed to "clear" the EventListener, however I don't know if it worked. It seems to be okay in the
        e.stopPropagation();
        }, 1500);   
    }
    
    }
    loss = loss+1; 
    youLose();
  }
    }
);
        

document.querySelector(".combo-2a").addEventListener('click',  (e)=> {
    let bClass = document.querySelectorAll(".combo-2a > img.selected, .combo-2b > img.selected")
    if(bClass.length == 2){
    bClass.forEach(image =>{
    image.classList.add('correct-answer')
    correctSelectAudio.play();
    })
    bClass.forEach(image =>{
        image.parentElement.remove(); 
    })
    youWin();
    }else if(bClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected');
    if(document.querySelectorAll('.selected').length > 1) {
    for(let i=0;i < currentSelected.length; i++){
    currentSelected[i].classList.add('wrong-answer');
    incorrectSelectAudio.play();
    
    setTimeout(function () {
        currentSelected[i].classList.remove('wrong-answer');
        currentSelected[i].classList.remove('selected');
        e.stopPropagation();
        }, 1500);
    }
    }
    loss = loss+1;
    youLose(); 
    }
    });

document.querySelector(".combo-2b").addEventListener('click',  (e)=> {
    let bClass = document.querySelectorAll(".combo-2a > img.selected, .combo-2b > img.selected")
    if(bClass.length == 2){
    bClass.forEach(image =>{
    image.classList.add('correct-answer')
    correctSelectAudio.play();
    })
    bClass.forEach(image =>{
        image.parentElement.remove();
    })
    youWin();
    }else if(bClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected');
    if(document.querySelectorAll('.selected').length > 1) {
    for(let i=0;i < currentSelected.length; i++){
    currentSelected[i].classList.add('wrong-answer');
    incorrectSelectAudio.play();
    
    setTimeout(function () {
        currentSelected[i].classList.remove('wrong-answer');
        currentSelected[i].classList.remove('selected');
        e.stopPropagation();
        }, 1500);    
    }
    
    }
    loss = loss+1;
    youLose();
    }
    });

document.querySelector(".combo-3a").addEventListener('click',  (e)=> {
    let cClass = document.querySelectorAll(".combo-3a > img.selected, .combo-3b > img.selected")
if(cClass.length == 2){
        cClass.forEach(image =>{
        image.classList.add('correct-answer')
        correctSelectAudio.play();
        })
        cClass.forEach(image =>{
            image.parentElement.remove();
        })
        youWin();
    }else if(cClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected');
    if(document.querySelectorAll('.selected').length > 1) {
    for(let i=0;i < currentSelected.length; i++){
    currentSelected[i].classList.add('wrong-answer');
    incorrectSelectAudio.play();
    //whenever you add "wrong-answer" remove selected class
    //in win-loss it needs to be something with UI and should show on the page
    setTimeout(function () {
        currentSelected[i].classList.remove('wrong-answer');
        currentSelected[i].classList.remove('selected');
        e.stopPropagation();
        }, 1500);
    }
    
    }
    loss = loss+1;
    youLose(); 
    }
    });

document.querySelector(".combo-3b").addEventListener('click', (e)=> {
    let cClass = document.querySelectorAll(".combo-3a > img.selected, .combo-3b > img.selected")
if(cClass.length == 2){
        cClass.forEach(image =>{
        image.classList.add('correct-answer')
        correctSelectAudio.play();
        })
        cClass.forEach(image =>{
            image.parentElement.remove();
        })
        youWin();

    }else if(cClass.length == 1){
    let currentSelected = document.querySelectorAll('.selected');
    if(document.querySelectorAll('.selected').length > 1) {
    for(let i=0;i < currentSelected.length; i++){
    currentSelected[i].classList.add('wrong-answer');
    incorrectSelectAudio.play();
    
    setTimeout(function () {
        currentSelected[i].classList.remove('wrong-answer');
        currentSelected[i].classList.remove('selected');
        e.stopPropagation();
        }, 1500);
    }

    }
    loss = loss+1;
    youLose(); 
    }
    
    });


function youWin(){

    let updatedImages = document.querySelector(".item-gallery");

    if(updatedImages.children.length == 0){
    console.log("You win!");
    successAudio.play();
    document.querySelector("#you-win").style.opacity=1
  document.querySelector("#you-win").innerText = `You win! Nice job.`
    }else{
    //nothing happens
    }
    }


    function youLose(){
        if (loss >= 6) {
        console.log("You suck!");
        failureAudio.play();
        document.querySelector("#you-win").style.opacity=1
        document.querySelector("#you-win").style.color = "#8B0000";
        document.querySelector("#you-win").innerText = `You lost. Better luck next time!`
        
        }else{
            //nothing happens
            }
        
        }
