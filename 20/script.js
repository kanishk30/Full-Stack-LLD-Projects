const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const mainCont = document.querySelector('.main-cont');
const textArea = document.querySelector('.text-area-cont');
const allPriorityColors = document.querySelectorAll('.priority-color');
const removeBtn = document.querySelector('.remove-btn');
const toolboxColors = document.querySelectorAll('.color');


let modalPriorityColor = 'black';
let addTaskFlag = false;
let removeTaskFlag = false;

const lockClose = 'fa-lock';
const lockOpen = 'fa-lock-open';

const colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];

// LS impl.

const ticketArr = JSON.parse(localStorage.getItem('tickets')) || [];

// in the keydown event SHIFT
// ticketArr.push({
//     ticketID,
//     taskContent,
//     ticketColor: modalPriorityColor
// })


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
        alert('Delete button activated.'); // present on window object.
        removeBtn.style.color = 'red';

    } else {
        removeBtn.style.color = 'white'
    }

})

function handleRemoval(ticketElem) {
    const ticketId = ticketElem.querySelector('.ticket-id').innerText;

    ticketElem.addEventListener('click', function() {
        
        if(removeTaskFlag) {
            ticketElem.remove();

            // now have to remove from LS also.
            const ticketArrIndex = getTicketArrIndex(ticketId);

            ticketArr.splice(ticketArrIndex, 1);
            updateLocalStorage();
        }
    })
}
const allTickets = document.querySelectorAll('.ticket-cont');

 

// crateticket ==> addding tickets to DOM.
function createTicket(modalPriorityColor, textValue, ticketID) {
    const ticketCont = document.createElement('div');
    // ticketCont.classList.add('ticket-cont');
    // // OR
    ticketCont.setAttribute('class', 'ticket-cont');

    ticketCont.innerHTML = `
    <div class="ticket-color" style='background-color: ${modalPriorityColor}'></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${textValue}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    `

    mainCont.appendChild(ticketCont);

    // attaching events.
    handleLock(ticketCont);
    handleRemoval(ticketCont);
    handleColor(ticketCont);
    handleFilter();

    // LS changes

    // ticketArr.push({
    //     ticketID,
    //     textValue,
    //     modalPriorityColor
    // })
}

modalCont.addEventListener('keydown', function(e) {
    const key = e.key;
    if(key === 'Shift') {

        // const tktId = shortid();

        const tktId = Math.random().toString(36).substring(2);
        console.log(tktId, '[ticketID]')

        createTicket(modalPriorityColor, textArea.value, tktId);
        modalCont.style.display = 'none';
    
        ticketArr.push({
            ticketId: tktId,
            taskContent: textArea.value,
            ticketColor: modalPriorityColor
        });
        updateLocalStorage();

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

function handleLock(ticket) {
    const ticketNode = ticket.querySelector('.ticket-lock');
    const ticketLockIcon = ticketNode.children[0]; // <i>...</i>
    const ticketTaskArea = ticket.querySelector('.task-area');

    const ticketId = ticket.querySelector('.ticket-id').innerText;

    ticketLockIcon.addEventListener('click', function() {
        console.log('lock selected');
        
        const ticketArrIndex = getTicketArrIndex(ticketId);
        console.log(ticketArrIndex, '[ticketArrIndex]');

        if(ticketLockIcon.classList.contains(lockClose)) {
            // add lockopen class
            // remove lockclose class
            console.log('lock open')
            ticketLockIcon.classList.add(lockOpen);
            ticketLockIcon.classList.remove(lockClose);

            ticketTaskArea.setAttribute('contenteditable', 'true')


        } else {
            console.log('lock closed')
            ticketLockIcon.classList.remove(lockOpen);
            ticketLockIcon.classList.add(lockClose);
            ticketTaskArea.setAttribute('contenteditable', 'false')
        }

        ticketArr[ticketArrIndex].taskContent = ticketTaskArea.innerText;
        updateLocalStorage();
    })
}

function handleColor(ticket) {
    const ticketColorBand = ticket.querySelector('.ticket-color');
    
    const ticketId = ticket.querySelector('.ticket-id').innerText;

    ticketColorBand.addEventListener('click', function() {
        console.log(ticketColorBand);

        const ticketArrIndex = getTicketArrIndex(ticketId);

        let currentColor = ticketColorBand.style.backgroundColor;
        console.log('currentColor: ',currentColor); // lightgreen
        // find the index of a given element in an array. = 1
        // const colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];

        let currentColorIndex = colors.findIndex(function(color) {
            return color === currentColor;
        });
        console.log('currentColorIndex ', currentColorIndex)
        currentColorIndex++;
        console.log('After increment currentColorIndex ', currentColorIndex)
        
        // to avoid overflow.
        const newTktColorIdx = currentColorIndex % colors.length; // 1%4 = 1 ; 4%4 = 0
        console.log('newTktColorIdx', newTktColorIdx)
        
        const newTicketColor = colors[newTktColorIdx];
        console.log('newTicketColor', newTicketColor);

        ticketColorBand.style.backgroundColor = newTicketColor;

        ticketArr[ticketArrIndex].ticketColor = newTicketColor;
        updateLocalStorage();
    })
}

function handleFilter() {
    toolboxColors.forEach(function(colorElem) {
        colorElem.addEventListener('click', function() {
            const selectedColor = colorElem.classList[0];
            const allTickets = document.querySelectorAll('.ticket-cont');
            allTickets.forEach(function(ticket) {
                const ticketColorBand = ticket.querySelector('.ticket-color');
                const ticketColor = ticketColorBand.style.backgroundColor;
                if(ticketColor === selectedColor) {
                    // filter matches
                    ticket.style.display = 'block';
                } else {
                    // hide the ticket
                    ticket.style.display = 'none';
                }
            })
    
        })

        colorElem.addEventListener('dblclick', function() {
            const allTickets = document.querySelectorAll('.ticket-cont');
            allTickets.forEach(function(ticket) {
                ticket.style.display = 'block';
            })
        })
    })
}

// create an init() function. for every reload to fetch from LS ( in starting )

function init() {
    if(localStorage.getItem('tickets')) {
        ticketArr.forEach(function(ticket) {
            // modalPriorityColor, textArea.value, tktId
            console.log(ticket, 'from LS')
            createTicket(ticket.ticketColor, ticket.taskContent, ticket.ticketId)
        })
    }
}

init();

function updateLocalStorage() {
    // only set the LS from your local array. ( ticketsArr )
    localStorage.setItem('tickets', JSON.stringify(ticketArr));
}


function getTicketArrIndex(id) {
    // give me index from the array which is getting affected. 
    let foundIndex = ticketArr.findIndex(function(ticket) {
        return id === ticket.ticketId
    })
    return foundIndex;
}



// createTicket();




// delete the element from an array.

/*
1. arr.pop()  >> removes element frm the end.
2. arr.shift() >> removes element from the start.

to delete the element from a given index?

3. arr.splice(index, deletecount, ...element-to-be-added)


**/