let myLeads = [];

const inputElement = document.getElementById('input-el');
const buttonElement = document.getElementById('input-btn');
let leadsElement = document.getElementById('leads-el');

buttonElement.addEventListener('click', ()=>{
    
    //push lead to leads arr
    myLeads.push(inputElement.value);
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    leadsElement.appendChild(liElement);
    
});




