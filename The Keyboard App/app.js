const keyContainers=document.querySelectorAll('.keys');
const textArea=document.querySelector('.display textarea');

keyContainers.forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(!e.path[0].value)return;

        const keyClicked=e.path[0].value.toLowerCase();
        textArea.value+=keyClicked;
    });
});
