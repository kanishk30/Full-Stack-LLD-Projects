const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const mainCont = document.querySelector('.main-cont');
const textArea = document.querySelector('.text-area-cont');
const allPriorityColors = document.querySelectorAll('.priority-color');
const removeBtn = document.querySelector('.remove-btn');

let modalPriorityColor = 'black';
let addTaskFlag = false;
let removeTaskFlag = false;

addBtn.addEventListener('click', function(e) {
    addTaskFlag = !addTaskFlag;
    // if(addTaskFlag) {
    //     addTaskFlag = false;
    // } else {
    //     addTaskFlag = true;
    // }

    if(addTaskFlag) {
        modalCont.style.display = 'flex'
    } else {
        modalCont.style.display = 'none'
    }
})

removeBtn.addEventListener('click', function() {
    removeTaskFlag = !removeTaskFlag; // toggle the remve flag when btn is clicked.


    if(removeTaskFlag) {
        alert('Delete button activated.');
        removeBtn.style.color = 'red';
    } else {
        removeBtn.style.color = 'white'
    }

})

function createTicket(modalPriorityColor, textValue, ticketID) {
    const ticketCont = document.createElement('div');
    // ticketCont.classList.add('ticket-cont');
    // // OR
    ticketCont.setAttribute('class', 'ticket-cont');

    ticketCont.innerHTML = `
    <div class="ticket-color" style='background-color: ${modalPriorityColor}'></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area" contenteditable>${textValue}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    `

    mainCont.appendChild(ticketCont);


}

modalCont.addEventListener('keydown', function(e) {
    const key = e.key;
    console.log(textArea.value)
    if(key === 'Shift') {

        // const tktId = shortid();

        const tktId = Math.random().toString(36).substring(2);
        console.log(tktId, '[ticketID]')

        createTicket(modalPriorityColor, textArea.value, tktId);
        modalCont.style.display = 'none';
        textArea.value = ''

    } 
})


// color active class apply.
allPriorityColors.forEach(function(colorElem, index) {
    colorElem.addEventListener('click', function() {
        // removed active class
        allPriorityColors.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove('active')
        })
        
        // add active class on selected element
        colorElem.classList.add('active');
        console.log(colorElem.classList);
        console.log(colorElem.classList[0]);
        modalPriorityColor = colorElem.classList[0]; // selected color.
        
    })
})



// createTicket();