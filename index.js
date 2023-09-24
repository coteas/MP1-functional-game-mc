let selectedImages = document.querySelectorAll(".combo-1, .combo-2, .combo-3")
document.addEventListener('click', function selected(evt) {
evt.target.classList.toggle('selected');
  });  


function selected(){
selectedImages.forEach(image =>{
    image.classList.add('selected')
})

}

function winCounter(){

}




winCounter()