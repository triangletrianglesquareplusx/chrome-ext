let myLeads = [];

const inputElement = document.getElementById('input-el');
const buttonElement = document.getElementById('input-btn');
const leadsElement = document.getElementById('leads-el');
buttonElement.addEventListener('click', ()=>{
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    myLeads.push(inputElement.value);
    leadsElement.appendChild(liElement);
    
});

