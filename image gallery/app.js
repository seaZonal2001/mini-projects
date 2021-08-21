const fullImg=document.querySelector('.full-img');
const smallImg=document.querySelectorAll('.gallery img');
const modal=document.querySelector('.modal');

smallImg.forEach(image =>{
    image.addEventListener('click', () =>{
        modal.classList.add('open');
        fullImg.classList.add('open');

        //changing image dynamically
    const originalImg=image.getAttribute('alt');
    fullImg.src=`images/img${originalImg}.jpg`;
    });  
});

modal.addEventListener('click',e =>{
 if(e.target.classList.contains('modal'))
 {
     modal.classList.remove('open');
     fullImg.classList.remove('open');
 }
});
