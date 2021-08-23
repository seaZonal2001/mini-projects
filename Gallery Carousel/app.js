const list=document.querySelector('.list');
const imgs=Array.from(list.children);
const nextBtn=document.querySelector('.btn-right');
const prevBtn=document.querySelector('.btn-left');

//getting images width

const imgWidth=imgs[0].getBoundingClientRect().width;

//arranging images next to each other

function setImgPosition(img,index)
{
    img.style.left=imgWidth*index+'px';
}

imgs.forEach(setImgPosition);

const moveToImg=(list,currentImg,targetImg) =>{
    
    list.style.transform=`translateX(-${targetImg.style.left})`;
    currentImg.classList.remove('current-img');
    targetImg.classList.add('current-img');
};

const hideShowArrows=(imgs,nextBtn,prevBtn,targetIndex)=>{
    if(targetIndex===0)
    {
        prevBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }
    else if(targetIndex===imgs.length-1)
    {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
    else
    {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
};
nextBtn.addEventListener('click',() =>{
    const currentImg=list.querySelector('.current-img');
    const nextImg=currentImg.nextElementSibling;
    const nextIndex=imgs.findIndex((img) => img===nextImg);

    moveToImg(list,currentImg,nextImg);
    hideShowArrows(imgs,nextBtn,prevBtn,nextIndex);
});

prevBtn.addEventListener('click',()=>{
    const currentImg=list.querySelector('.current-img');
    const prevImg=currentImg.previousElementSibling;
    const prevIndex=imgs.findIndex((img) => img===prevImg);

   moveToImg(list,currentImg,prevImg);
   hideShowArrows(imgs,nextBtn,prevBtn,prevIndex);
});