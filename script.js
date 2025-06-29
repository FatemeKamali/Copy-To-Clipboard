const copyBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');


copyBtn.addEventListener('click', ()=>{
    textarea.select ( ) 
    let textValue = textarea.value;
    navigator.clipboard.writeText(textValue)
})