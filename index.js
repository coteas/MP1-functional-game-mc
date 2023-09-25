let selectedItemAudio = new Audio('assets/selected-button.mp3')
let correctSelectAudio = new Audio('assets/correct-chime.mp3')
let incorrectSelectAudio = new Audio('assets/negative-beep.mp3')
let failureAudio = new Audio('assets/negative-beep.mp3')
let successAudio = new Audio('assets/success-bell.mp3')

let selectedImages = document.querySelector(".item-gallery")
let correctAnswer = true
let wrongAnswer = true
// The selectedImages works kind of. It's a little buggy so advice on this would help. 

document.addEventListener('click', function selected(evt) {
evt.target.classList.toggle('selected');
selectedItemAudio.play();
  });  
//I'm trying to make it so that when two divs are clicked, then they are hidden. 
// I've tried it with the first combo but nothing seems to be working
  document.addEventListener('click', function firstCombo(evt) {

      }); 
  
function thatIsIncorrect(){

}
//Here's where I'm stuck 
function firstCombo(e){
let aClass = document.querySelectorAll(".combo-1a, .combo-1b")
aClass = correctAnswer
if(correctAnswer){
   aClass.forEach(image =>{
    image.classList.add('correct-answer')
   })
}else{
    e.classList.add('wrong-answer')
}
}

function secondCombo(e){

}

function thirdCombo(e){

}

function selected(){
selectedImages.forEach(image =>{
    image.classList.add('selected')
})
}