const addFromModal = document.getElementById('modal-add');
const cancelFromModal = document.getElementById('modal-cancel');
const modalContent = document.getElementById('entry-content');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const content = document.getElementById('todo-content');
let inputArray = [];

window.onload = insertAllItems();

addFromModal.addEventListener('click', function(e) {
    if (modalContent.value === '') {
        e.preventDefault();
    } else {
        inputArray.push(modalContent.value);
        setStorage(inputArray);
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
    localStorage.clear();
    content.innerHTML = '';
})

function setStorage(array) {
    localStorage.setItem('content', JSON.stringify(array));
}

function insertNewItem() {
    content.insertAdjacentHTML('beforeend', `<div class="ballon">
                <div class="content">
                    <p>
                        ${inputArray[inputArray.length - 1]}
                    </p>
                    <time>02/07/2023, 12:00</time>
                </div>
            </div>`);
}

function insertAllItems() {
    if (localStorage.length !== 0) {
        inputArray = JSON.parse(localStorage.getItem('content'));
        for (let i = 0; i < inputArray.length; i++) {
            content.insertAdjacentHTML('beforeend', `<div class="ballon">
                    <div class="content">
                        <p>
                            ${inputArray[i]}
                        </p>
                        <time>02/07/2023, 12:00</time>
                    </div>
                </div>`);
        }
    }
}