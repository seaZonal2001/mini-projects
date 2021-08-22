const body=document.body;
const switchPara=body.firstElementChild;
const switchBtn=switchPara.nextElementSibling;
//console.log(switchBtn,switchPara);

const getRandomNumber= () =>{
    return Math.floor(Math.random()*256);
};
switchBtn.addEventListener('click',() =>{
    const red=getRandomNumber();
    const green=getRandomNumber();
    const blue=getRandomNumber();

    const colorString=`rgb(${red},${green},${blue})`;

    body.style.backgroundColor=colorString;
    switchPara.textContent=colorString;
});

