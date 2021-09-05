const lists = document.querySelectorAll('.list');
const listItems = document.querySelectorAll('.list-item');

let draggedItem = null;

listItems.forEach(item =>{
    item.addEventListener('dragstart',()=>{
        draggedItem = item;
        setTimeout(()=>{
            item.style.display = 'none';
        },50);
       
    });

    item.addEventListener('dragend',()=>{
        setTimeout(()=>{
            item.style.display = 'block';
            draggedItem = null;
        },50);
    });
});

lists.forEach(list =>{
    list.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });

    list.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        list.style.backgroundColor = 'rgba(255,255,255,.7)';
    });

    list.addEventListener('dragleave',()=>{
        list.style.backgroundColor = 'rgba(88, 65, 83, .5)';
    });

    list.addEventListener('drop',()=>{
        list.append(draggedItem);
        list.style.backgroundColor = 'rgba(88, 65, 83, .5)';
    });
});