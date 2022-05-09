let myLeads = [];

const inputElement = document.getElementById('input-el');
const buttonElement = document.getElementById('input-btn');
let leadsElement = document.getElementById('leads-el');

buttonElement.addEventListener('click', ()=>{
    
    //push lead to leads arr
    myLeads.push(inputElement.value);

    renderLeads();
    
});

function renderLeads(){
    
    for(let i=0;i<myLeads.length;i++){
        let liElement = document.createElement('li');
        liElement.textContent = myLeads[i];
        leadsElement.appendChild(liElement);
    }
}


