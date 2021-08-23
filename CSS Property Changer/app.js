const blockElement=document.querySelector('#block');
const verticalPosition=document.querySelector('#position-y');
const horizontalPosition=document.querySelector('#position-x');
const blockSize=document.querySelector('#size');
const shapeSelector=document.querySelector('#shape-select');
const okBtn=document.querySelector('#ok-btn');
const rgbaR=document.querySelector('#rgba-r');
const rgbaG=document.querySelector('#rgba-g');
const rgbaB=document.querySelector('#rgba-b');
const rgbaA=document.querySelector('#rgba-a');
const rgbaContainer=document.querySelector('.rgba-container');
const rgbaInputs=rgbaContainer.querySelectorAll('input')

// vertical Position Changer
verticalPosition.addEventListener('change',()=>{
    blockElement.style.top = verticalPosition.value+'px';
});

// horizontal position changer

horizontalPosition.addEventListener('change',()=>{
    blockElement.style.left = horizontalPosition.value+'px';
});

//size changer

blockSize.addEventListener('change',()=>{
    blockElement.style.transform=`scale(${blockSize.value})`;
});

//shape changer

okBtn.addEventListener('click',()=>{
    const shapeOption=shapeSelector.value;
    if(shapeOption==='1')
    blockElement.style.borderRadius = '0';
    else
    blockElement.style.borderRadius = '50%';
});

for(let i=0;i<rgbaInputs.length;i++)
{
    rgbaInputs[i].addEventListener('change',()=>{
        blockElement.style.backgroundColor=`rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`;
    });
}