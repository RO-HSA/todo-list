const addFromModal = document.getElementById('modal-add');
const cancelFromModal = document.getElementById('modal-cancel');
const modalContent = document.getElementById('entry-content');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const content = document.getElementById('todo-content');
let contentArray = [];
let dateTimeArray = [];

window.onload = insertAllItems();   

addFromModal.addEventListener('click', function(e) {
    if (modalContent.value === '') {
        e.preventDefault();
    } else {
        contentArray.push(modalContent.value);
        dateTimeArray.push(getDateTime());

        setStorage(contentArray, dateTimeArray);
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
    localStorage.removeItem('datetime');
    content.innerHTML = '';
})

function setStorage(content, dateTime) {
    localStorage.setItem('content', JSON.stringify(content));
    localStorage.setItem('datetime', JSON.stringify(dateTime));
}

function insertNewItem() {
    content.insertAdjacentHTML('beforeend', `<div class="ballon">
                <div class="content">
                    <p>
                        ${contentArray[contentArray.length - 1]}
                    </p>
                    <time>${getDateTime()}</time>
                </div>
            </div>`);
}

function insertAllItems() {
    if (localStorage.length !== 0) {
        contentArray = JSON.parse(localStorage.getItem('content'));
        dateTimeArray = JSON.parse(localStorage.getItem('datetime'));        
        for (let i = 0; i < contentArray.length; i++) {
            content.insertAdjacentHTML('beforeend', `<div class="ballon">
                    <div class="content">
                        <p>
                            ${contentArray[i]}
                        </p>
                        <time>${dateTimeArray[i]}</time>
                    </div>
                </div>`);
        }
    }
}

function getDateTime() {
    const now = new Date();

    return now.toLocaleString('pt-BR');
}