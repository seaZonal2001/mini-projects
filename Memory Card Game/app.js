const cards=document.querySelectorAll('.memory-card');

let cardIsFlipped=false;
let firstCard;
let secondCard;
let lockBoard=false;

function flipCard()
{
    if(lockBoard) return;
    if(this===firstCard)return;
    this.classList.add('flip');
    if(!cardIsFlipped)
    {
        cardIsFlipped=true;
        firstCard=this;
    }
    else
    {
        cardIsFlipped=false;
        secondCard=this;
        checkForMatch();
    }
}

function checkForMatch()
{
    if(firstCard.dataset.name===secondCard.dataset.name)
        {
            disableCards();
        }
        else
        {
           unflipCards();
        }
}

function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
}

function unflipCards(){
    lockBoard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard=false;
    },1500);
}

// IIFE: immediately invoked function expression :function is called immediately after is definition

(function shuffle()
{
    cards.forEach((card)=>{
        const randomNumber=Math.floor(Math.random()*12);
        card.style.order=randomNumber; 
    });
})();

cards.forEach((card)=>{
    card.addEventListener('click',flipCard);
});

