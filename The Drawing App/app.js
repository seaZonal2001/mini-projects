const canvas=document.getElementById('drawing-canvas');
const increaseBtn=document.getElementById('increase');
const decreaseBtn=document.getElementById('decrease');
const strokeThickness=document.getElementById('size');
const colorBtn=document.getElementById('color');
const clearBtn=document.getElementById('clear');

const context=canvas.getContext('2d'); //gets element's context ,the thing on which drawing will be rendered

let size=10;
let isPressed=false;
let color='black';
let x=undefined;
let y=undefined;

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
});

canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
});

//Drawing lines

const drawLine=(x1,y1,x2,y2)=>{
    context.beginPath();
    context.moveTo(x1,y1);          //start point
    context.lineTo(x2,y2);          //end point
    context.strokeStyle = color;
    context.lineWidth = 2*size;     //make its thickness as that of circle;
    context.stroke();
};

//Drawing Circle

const drawCircle=(x,y)=>{
 context.beginPath();
 context.arc(x,y,size,0,Math.PI*2);
 context.fillStyle=color;
 context.fill();
};

//starts drawing when mouse is clicked and moved simultaneously.
canvas.addEventListener('mousemove',(e)=>{
    if(isPressed)
    {
        const x2=e.offsetX;
        const y2=e.offsetY;

        drawCircle(x2,y2);  //required this to have smooth lines.
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }
}); 

//updating stroked width
const updateSize=(size)=>{
    strokeThickness.innerText=size;
}
//increaseBtn

increaseBtn.addEventListener('click',()=>{
   if(size<50)
   size++;
   updateSize(size);
});

//decreaseBtn
decreaseBtn.addEventListener('click',()=>{
    if(size>1)
    size--;
    updateSize(size);
});

//color changer

colorBtn.addEventListener('change',(e)=>{
    color=e.target.value;
});

//clear screen
clearBtn.addEventListener('click',()=>{
    context.clearRect(0,0,canvas.width,canvas.height);
});


