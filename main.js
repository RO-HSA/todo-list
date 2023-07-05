const addFromModal = document.getElementById('modal-add');
const cancelFromModal = document.getElementById('modal-cancel');
const modalContent = document.getElementById('entry-content');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const content = document.getElementById('todo-content');
let contentArray = [];
let dateArray = [];
let timeArray = [];

window.onload = insertAllItems();   

addFromModal.addEventListener('click', function(e) {
    if (modalContent.value === '') {
        e.preventDefault();
    } else {
        contentArray.push(modalContent.value);
        dateArray.push(getDateTime()[0]);
        timeArray.push(getDateTime()[1]);

        setStorage(contentArray, dateArray, timeArray);
        insertNewItem();

        modal.style.display = 'none';
        overlay.style.visibility = 'hidden';
    }
    modalContent.value = '';
})

cancelFromModal.addEventListener('click', function() {
    modal.style.display = 'none';
    overlay.style.visibility = 'hidden';
    modalContent.value = '';
})

addButton.addEventListener('click', function() {
    modal.style.display = 'flex';
    overlay.style.visibility = 'visible';
    modalContent.value = '';
})

deleteButton.addEventListener('click', function() {
    localStorage.removeItem('content');
    localStorage.removeItem('date');
    localStorage.removeItem('time');
    content.innerHTML = '';
})

function setStorage(content, date, time) {
    localStorage.setItem('content', JSON.stringify(content));
    localStorage.setItem('date', JSON.stringify(date));
    localStorage.setItem('time', JSON.stringify(time));
}

function insertNewItem() {
    content.insertAdjacentHTML('beforeend', `<div class="ballon">
                <div class="content">
                    <p>
                        ${contentArray[contentArray.length - 1]}
                    </p>
                    <time>${getDateTime()[0] + ", " + getDateTime()[1]}</time>
                </div>
            </div>`);
}

function insertAllItems() {
    if (localStorage.length !== 0) {
        contentArray = JSON.parse(localStorage.getItem('content'));
        dateArray = JSON.parse(localStorage.getItem('date'));
        timeArray = JSON.parse(localStorage.getItem('time'));
        
        for (let i = 0; i < contentArray.length; i++) {
            content.insertAdjacentHTML('beforeend', `<div class="ballon">
                    <div class="content">
                        <p>
                            ${contentArray[i]}
                        </p>
                        <time>${dateArray[i] + ", " + timeArray[i]}</time>
                    </div>
                </div>`);
        }
    }
}

function getDateTime() {
    const now = new Date();

    return [now.toLocaleDateString('pt-BR'), now.toLocaleTimeString('pt-BR')];
}