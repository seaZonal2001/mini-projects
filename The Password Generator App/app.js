const rangeCharacters=document.getElementById('range-char');
const numberCharacters=document.getElementById('number-char');
const formContainer=document.getElementById('password-form');
const numbersEl=document.getElementById('numbers');
const symbolsEl=document.getElementById('symbols');
const uppercaseEl=document.getElementById('uppercase');
const passwordDisplay=document.querySelector('#password-display');

const lowerCaseCharCodes=arrayLowToHigh(97,122);
const upperCaseCharCodes=arrayLowToHigh(65,90);
const numberCharCodes=arrayLowToHigh(48,57);
const symbolCharCodes=arrayLowToHigh(33,47).concat(arrayLowToHigh(58,64)).concat(arrayLowToHigh(91,96)).concat(arrayLowToHigh(123,126));

//synchronizing range and number input
rangeCharacters.addEventListener('input',syncCharAmount);
numberCharacters.addEventListener('input',syncCharAmount);

function syncCharAmount(e){
    const valueAmount=e.target.value;
    rangeCharacters.value=valueAmount;
    numberCharacters.value=valueAmount;
}

//generating password when form is submitted
formContainer.addEventListener('submit',(e)=>{
    e.preventDefault();
    const characterAmount=numberCharacters.value;
    const includeUppercase=uppercaseEl.checked;
    const includeNumbers=numbersEl.checked;
    const includeSymbols=symbolsEl.checked;
    const password=generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols);

    passwordDisplay.innerText=password;
});

function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){
    let charCodes=lowerCaseCharCodes;
    if(includeNumbers) charCodes=charCodes.concat(numberCharCodes);
    if(includeSymbols) charCodes=charCodes.concat(symbolCharCodes);
    if(includeUppercase) charCodes=charCodes.concat(upperCaseCharCodes);

    const paswordCharacters=[];
    for(let i=0;i<characterAmount;i++)
    {
        let characterCode=charCodes[Math.floor(Math.random()*charCodes.length)];
        paswordCharacters.push(String.fromCharCode(characterCode));
    }
    return paswordCharacters.join('');

}

//generating character codes function
function arrayLowToHigh(low,high){
    const array=[];
    for(let i=low;i<=high;i++)
    array.push(i);
    return array;
}